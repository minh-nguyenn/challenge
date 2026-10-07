import { c as defineEventHandler, i as getRouterParam, e as createError } from '../../../_/nitro.mjs';
import { g as getStore, a as activePromos, F as FALLBACK_PRICE } from '../../../_/store.mjs';
import { u as uribaOf, g as groupByUriba } from '../../../_/uriba.mjs';
import { s as search } from '../../../_/search-engine.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../../../_/jp-text.mjs';

const taxIn = (p) => Number((p == null ? void 0 : p.taxIncluded) || (p == null ? void 0 : p.price) || 0);
const MAIN = /* @__PURE__ */ new Set(["seika", "sengyo", "seiniku", "nippai"]);
function findRelated(doc, docs, limit = 4) {
  var _a, _b;
  const mainOf = (d) => new Set(
    (d.ingredients || []).map(
      (i) => String(i.name).replace(/^[A-Za-z][）)．.、,]\s*/, "").replace(/[（(].*?[）)]/g, "").trim()
    ).filter((n) => n && MAIN.has(uribaOf(n)))
  );
  const myMain = mainOf(doc);
  const myCat = new Set(doc.category || []);
  const myTime = parseInt(String(doc.cookTime || "").replace(/[^0-9]/g, ""), 10);
  const scored = [];
  for (const d of docs) {
    if (d.type !== "recipe" || d.id === doc.id) continue;
    if (!((_a = d.ingredients) == null ? void 0 : _a.length)) continue;
    let score = 0;
    const shared = [...mainOf(d)].filter((n) => myMain.has(n));
    score += shared.length * 40;
    if ((d.category || []).some((c) => myCat.has(c))) score += 25;
    const t = parseInt(String(d.cookTime || "").replace(/[^0-9]/g, ""), 10);
    if (Number.isFinite(myTime) && Number.isFinite(t) && Math.abs(t - myTime) <= 5) score += 10;
    if ((_b = d.nutrition) == null ? void 0 : _b.real) score += 3;
    if (score > 0) scored.push({ d, score, shared });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map(({ d, shared }) => {
    var _a2;
    return {
      id: d.id.replace("recipe:", ""),
      title: d.title,
      image: d.image || "",
      route: d.route,
      cookTime: d.cookTime || "",
      energy: ((_a2 = d.nutrition) == null ? void 0 : _a2.kcal) || d.energy || "",
      category: (d.category || [])[0] || "",
      // Nói rõ vì sao gợi ý món này — minh bạch hơn là danh sách vô cớ
      sharedIngredients: shared.slice(0, 3)
    };
  });
}
function findRelatedArticles(doc, docs, mainNames, limit = 4) {
  const terms = [
    ...[...new Set(mainNames)].map((term) => ({ term, weight: 3 })),
    ...(doc.category || []).map((term) => ({ term, weight: 1 }))
  ];
  const best = /* @__PURE__ */ new Map();
  for (const { term, weight } of terms) {
    if (!term || term.length < 2) continue;
    const r = search(docs, term, { types: ["article"], perGroup: 6, limit: 6 });
    for (const it of r.items) {
      const score = (it.score || 0) * weight;
      const prev = best.get(it.id);
      if (!prev || score > prev.score) best.set(it.id, { doc: it, score, term });
    }
  }
  return [...best.values()].sort((a, b) => b.score - a.score).slice(0, limit).map(({ doc: d, term }) => ({
    id: d.id,
    title: d.title,
    route: d.route,
    image: d.image || "",
    typeLabel: d.typeLabel || "\u8A18\u4E8B",
    date: d.date || "",
    // Noi ro vi sao goi y bai nay
    matched: term
  }));
}
const _id__get = defineEventHandler((event) => {
  var _a;
  const id = String(getRouterParam(event, "id") || "");
  const { docs, nutrition, products } = getStore();
  const doc = docs.find((d) => d.type === "recipe" && d.id === `recipe:${id}`);
  if (!doc) throw createError({ statusCode: 404, statusMessage: "\u30EC\u30B7\u30D4\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093" });
  const ingredients = doc.ingredients || [];
  const promoByName = new Map(activePromos().map((p) => [p.productName, p]));
  const productByName = new Map(products.map((p) => [p.name, p]));
  const enriched = ingredients.map((ing) => {
    const clean = String(ing.name).replace(/^[A-Za-z][）)．.、,]\s*/, "").replace(/[（(].*?[）)]/g, "").trim();
    const product = productByName.get(clean) || null;
    const promo = promoByName.get(clean) || null;
    const priceIn = product ? taxIn(product) : null;
    return {
      ...ing,
      cleanName: clean,
      uriba: uribaOf(clean),
      product,
      promo,
      priceIn,
      // Gia KM trong du lieu la gia chua thue -> doi sang gom thue theo dung ti le cua san pham
      saleIn: product && promo ? Math.round(Number(promo.salePrice) * priceIn / Number(product.price || promo.normalPrice || priceIn)) : null
    };
  });
  const priced = enriched.filter((i) => i.priceIn != null);
  const total = priced.reduce((s, i) => s + i.priceIn, 0) + (enriched.length - priced.length) * FALLBACK_PRICE;
  const saving = priced.reduce((s, i) => s + (i.saleIn != null ? i.priceIn - i.saleIn : 0), 0);
  const cost = {
    total,
    saleTotal: total - saving,
    matched: priced.length,
    count: enriched.length,
    fallback: FALLBACK_PRICE
  };
  return {
    id,
    title: doc.title,
    image: doc.image,
    cookTime: doc.cookTime || "",
    serving: doc.serving || "",
    externalUrl: doc.externalUrl || "",
    hasVideo: !!doc.hasVideo,
    steps: doc.steps || [],
    point: doc.point || "",
    ingredients: enriched,
    cost,
    // Nhóm theo quầy — dùng cho danh sách đi chợ và highlight sơ đồ 売場
    byUriba: groupByUriba(enriched.map((i) => ({ name: i.cleanName, amount: i.amount }))),
    // Ưu tiên dinh dưỡng THẬT từ Kitchen365; chỉ dùng số DEMO khi không có.
    // 448/1002 món có số thật (kcal, muối, đạm, béo, đường, chất xơ, canxi).
    nutrition: ((_a = doc.nutrition) == null ? void 0 : _a.real) ? { ...doc.nutrition, real: true, title: doc.title, serving: doc.serving || "" } : nutrition.find((n) => n.recipeId === `recipe:${id}`) || null,
    chef: doc.chef || "",
    issue: doc.issue || "",
    lead: doc.lead || "",
    source: doc.source || "cms",
    category: doc.category || [],
    related: findRelated(doc, docs),
    relatedArticles: findRelatedArticles(
      doc,
      docs,
      enriched.filter((i) => MAIN.has(i.uriba)).map((i) => i.cleanName)
    ),
    demo: true
  };
});

export { _id__get as default };
//# sourceMappingURL=_id_.get.mjs.map
