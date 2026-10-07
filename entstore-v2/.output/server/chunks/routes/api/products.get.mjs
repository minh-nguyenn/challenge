import { c as defineEventHandler, g as getQuery } from '../../_/nitro.mjs';
import { g as getStore, a as activePromos, d as detectBudget } from '../../_/store.mjs';
import { n as normalizeJa } from '../../_/jp-text.mjs';
import { b as toJapaneseKeywords } from '../../_/chat-lang.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const products_get = defineEventHandler((event) => {
  const query = getQuery(event);
  const { products } = getStore();
  const qRaw = String(query.q || "").trim();
  const uriba = String(query.uriba || "").trim();
  const sort = String(query.sort || "").trim();
  const limit = query.limit ? Math.min(500, Number(query.limit) || 60) : Infinity;
  const offset = Math.max(0, Number(query.offset) || 0);
  const promoByName = new Map(activePromos().map((p) => [p.productName, p]));
  let items = products;
  if (qRaw) {
    const terms = [qRaw, ...toJapaneseKeywords(qRaw)].map((t) => normalizeJa(t)).filter(Boolean);
    items = items.filter((p) => {
      const hay = normalizeJa(`${p.name} ${p.uribaLabel} ${p.unit}`);
      return terms.some((t) => hay.includes(t));
    });
  }
  if (uriba) items = items.filter((p) => p.uriba === uriba);
  const budget = detectBudget(qRaw);
  const min = Number(query.minPrice);
  const max = Number(query.maxPrice);
  const lo = Number.isFinite(min) ? min : budget ? budget.min : null;
  const hi = Number.isFinite(max) ? max : budget ? budget.max : null;
  if (lo != null || hi != null) {
    items = items.filter((p) => {
      const v = Number(p.taxIncluded || p.price || 0);
      if (lo != null && v < lo) return false;
      if (hi != null && v > hi) return false;
      return true;
    });
  }
  const withPromo = items.map((p) => ({ ...p, promo: promoByName.get(p.name) || null }));
  const priceOf = (p) => p.promo ? p.promo.salePrice : p.taxIncluded || p.price || 0;
  if (sort === "price-asc") withPromo.sort((a, b) => priceOf(a) - priceOf(b));
  else if (sort === "price-desc") withPromo.sort((a, b) => priceOf(b) - priceOf(a));
  else if (sort === "name") withPromo.sort((a, b) => a.name.localeCompare(b.name, "ja"));
  else {
    withPromo.sort((a, b) => {
      if (!!b.promo !== !!a.promo) return b.promo ? 1 : -1;
      return (b.usedInRecipes || 0) - (a.usedInRecipes || 0);
    });
  }
  return {
    demo: true,
    total: withPromo.length,
    offset,
    limit: Number.isFinite(limit) ? limit : null,
    budget,
    items: Number.isFinite(limit) ? withPromo.slice(offset, offset + limit) : withPromo
  };
});

export { products_get as default };
//# sourceMappingURL=products.get.mjs.map
