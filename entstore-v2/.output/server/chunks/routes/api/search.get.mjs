import { c as defineEventHandler, g as getQuery } from '../../_/nitro.mjs';
import { g as getStore, d as detectBudget, a as activePromos, s as shopsSelling, b as stripBudget } from '../../_/store.mjs';
import { l as looksLikeKeyword, s as search, G as GROUP_ORDER, b as GROUP_LABEL } from '../../_/search-engine.mjs';
import { n as normalizeJa } from '../../_/jp-text.mjs';
import { b as toJapaneseKeywords } from '../../_/chat-lang.mjs';
import { d as detectIntent } from '../../_/search-intent.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const SEARCH_GROUPS = ["promo", "recipe", "product", "article", "shop"];
const search_get = defineEventHandler((event) => {
  const query = getQuery(event);
  const q = String(query.q || "").slice(0, 100);
  const perGroup = Math.min(200, Number(query.perGroup) || 8);
  if (!q.trim()) {
    return { query: "", total: 0, groups: [], items: [] };
  }
  const { docs, products, costById } = getStore();
  const budget = detectBudget(q);
  const promoDocs = activePromos().map((p) => {
    const title = `${p.productName} ${p.discountPercent}%OFF`;
    const text = `${p.productName} \u7279\u58F2 \u30BB\u30FC\u30EB \u304A\u8CB7\u3044\u5F97 ${p.discountPercent}%OFF ${p.salePrice}\u5186 ${p.uribaLabel}`;
    return {
      id: `promo:${p.id}`,
      type: "promo",
      typeLabel: "\u7279\u58F2",
      title,
      route: `/search?q=${encodeURIComponent(p.productName)}`,
      text,
      norm: normalizeJa(title + " " + text),
      normTitle: normalizeJa(p.productName),
      promo: p,
      demo: true
    };
  });
  const productDocs = products.map((p) => ({
    id: `product:${p.id}`,
    type: "product",
    typeLabel: "\u5546\u54C1",
    title: p.name,
    route: `/products?q=${encodeURIComponent(p.name)}`,
    text: `${p.name} ${p.uribaLabel} ${p.price}\u5186 ${p.unit} ${p.stock}`,
    norm: normalizeJa(`${p.name} ${p.uribaLabel} ${p.unit}`),
    normTitle: normalizeJa(p.name),
    product: p,
    demo: true
  }));
  const all = [...promoDocs, ...productDocs, ...docs];
  const translatedFrom = [];
  const { rest, generic } = budget ? stripBudget(q, budget) : { rest: q, generic: false };
  const termForSearch = budget ? rest : q;
  const noKeyword = generic || !looksLikeKeyword(all, rest, toJapaneseKeywords(rest));
  let budgetInfo = null;
  let intent = null;
  let result;
  if (budget && noKeyword) {
    result = browseByBudget(all, budget, costById, perGroup);
    budgetInfo = { ...budget, mode: "browse", removed: 0, note: BUDGET_NOTE };
  } else {
    result = search(all, termForSearch, { perGroup, types: SEARCH_GROUPS });
    const jaWords = toJapaneseKeywords(termForSearch).filter(
      (w) => w && !termForSearch.includes(w)
    );
    for (const w of jaWords) {
      const extra = search(all, w, { perGroup, types: SEARCH_GROUPS });
      if (!extra.total) continue;
      translatedFrom.push(w);
      result = mergeResults(result, extra, perGroup);
    }
    const it = detectIntent(termForSearch);
    if (it && (it.kind === "region" || !result.total || !looksLikeKeyword(all, termForSearch, jaWords))) {
      const used = [];
      for (const w of it.terms) {
        const extra = search(all, w, { perGroup, types: it.types || SEARCH_GROUPS });
        if (!extra.total) continue;
        used.push(w);
        result = mergeResults(result, extra, perGroup);
      }
      if (used.length) intent = { kind: it.kind, label: it.label, terms: used };
    }
    if (budget) {
      const before = result.total;
      result = filterByBudget(result, budget, costById);
      budgetInfo = {
        ...budget,
        mode: "filter",
        removed: before - result.total,
        note: BUDGET_NOTE
      };
    }
  }
  const promoByName = new Map(activePromos().map((p) => [p.productName, p]));
  for (const g of result.groups) {
    if (g.key !== "product") continue;
    for (const it of g.items) {
      const pr = promoByName.get(it.title);
      if (pr) it.promo = pr;
    }
  }
  const lat = Number(query.lat);
  const lng = Number(query.lng);
  const topProduct = findTopProduct(result);
  const shops = topProduct ? shopsSelling(topProduct, {
    lat: Number.isFinite(lat) ? lat : null,
    lng: Number.isFinite(lng) ? lng : null,
    limit: 5
  }) : [];
  return {
    ...result,
    budget: budgetInfo,
    translatedFrom: translatedFrom.length ? translatedFrom : null,
    intent,
    nearbyShops: shops.length ? { product: topProduct, items: shops, located: Number.isFinite(lat) } : null
  };
});
const BUDGET_NOTE = "\u30EC\u30B7\u30D4\u306F\u6750\u6599\u8CBB\u306E\u6982\u7B97\uFF08DEMO\u4FA1\u683C\uFF09\u3067\u5224\u5B9A\u3057\u3066\u3044\u307E\u3059";
function browseByBudget(all, budget, costById, perGroup) {
  const inRange = (n) => n >= budget.min && n <= budget.max;
  const MIN_CONFIDENCE = 60;
  const recipes = [];
  for (const d of all) {
    if (d.type !== "recipe") continue;
    const c = costById.get(d.id);
    if (!c || c.confidence < MIN_CONFIDENCE || !inRange(c.total)) continue;
    recipes.push({ ...stripDoc(d), estimatedCost: c });
  }
  const rank = budget.kind === "around" ? (a, b) => Math.abs(a.estimatedCost.total - budget.raw) - Math.abs(b.estimatedCost.total - budget.raw) : budget.kind === "over" ? (a, b) => a.estimatedCost.total - b.estimatedCost.total : (a, b) => b.estimatedCost.total - a.estimatedCost.total;
  recipes.sort(rank);
  const promos = all.filter((d) => {
    var _a;
    return d.type === "promo" && inRange(Number(((_a = d.promo) == null ? void 0 : _a.salePrice) || 0));
  }).map((d) => stripDoc(d));
  const groups = [
    { key: "recipe", label: GROUP_LABEL.recipe, all: recipes },
    { key: "promo", label: GROUP_LABEL.promo, all: promos }
  ].filter((g) => g.all.length).map((g) => ({ key: g.key, label: g.label, count: g.all.length, items: g.all.slice(0, perGroup) }));
  const items = [...recipes, ...promos];
  return {
    query: "",
    normalized: "",
    total: items.length,
    groups,
    items: items.slice(0, 100)
  };
}
function stripDoc(d) {
  const { norm, normTitle, text, ...rest } = d;
  return { ...rest, snippet: (text || "").slice(0, 120) };
}
function mergeResults(base, extra, perGroup) {
  const groups = new Map(base.groups.map((g) => [g.key, { ...g, items: [...g.items] }]));
  for (const g of extra.groups) {
    const cur = groups.get(g.key);
    if (!cur) {
      groups.set(g.key, { ...g, items: [...g.items] });
      continue;
    }
    const seen = new Set(cur.items.map((i) => i.id));
    for (const it of g.items) {
      if (seen.has(it.id)) continue;
      cur.items.push(it);
      seen.add(it.id);
    }
    cur.count += g.count;
    cur.items = cur.items.slice(0, perGroup);
  }
  const seenItems = new Set(base.items.map((i) => i.id));
  const items = [...base.items];
  for (const it of extra.items) {
    if (seenItems.has(it.id)) continue;
    items.push(it);
    seenItems.add(it.id);
  }
  const ordered = [...groups.values()].sort(
    (a, b) => GROUP_ORDER.indexOf(a.key) - GROUP_ORDER.indexOf(b.key)
  );
  return {
    ...base,
    total: base.total + extra.total,
    groups: ordered,
    items: items.sort((a, b) => (b.score || 0) - (a.score || 0))
  };
}
function filterByBudget(result, budget, costById) {
  const inRange = (n) => n >= budget.min && n <= budget.max;
  const keep = (it) => {
    if (it.product) return inRange(Number(it.product.taxIncluded || it.product.price || 0));
    if (it.promo) return inRange(Number(it.promo.salePrice || 0));
    if (it.type === "recipe") {
      const c = costById.get(it.id);
      return c ? inRange(c.total) : false;
    }
    return true;
  };
  const groups = result.groups.map((g) => {
    const items2 = g.items.filter(keep).map((it) => attachCost(it, costById));
    return { ...g, items: items2, count: items2.length };
  }).filter((g) => g.items.length);
  const items = result.items.filter(keep).map((it) => attachCost(it, costById));
  return { ...result, groups, items, total: items.length };
}
function attachCost(it, costById) {
  if (it.type !== "recipe") return it;
  const c = costById.get(it.id);
  return c ? { ...it, estimatedCost: c } : it;
}
function findTopProduct(result) {
  var _a, _b;
  const g = result.groups.find((x) => x.key === "product");
  if ((_a = g == null ? void 0 : g.items) == null ? void 0 : _a.length) return g.items[0].product || null;
  const gp = result.groups.find((x) => x.key === "promo");
  if ((_b = gp == null ? void 0 : gp.items) == null ? void 0 : _b.length) {
    const promo = gp.items[0].promo;
    if (promo) {
      const { productByName } = getStore();
      return productByName.get(promo.productName) || null;
    }
  }
  return null;
}

export { search_get as default };
//# sourceMappingURL=search.get.mjs.map
