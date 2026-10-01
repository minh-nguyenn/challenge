import { c as defineEventHandler, g as getQuery } from '../../_/nitro.mjs';
import { a as activePromos, g as getStore } from '../../_/store.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const promos_get = defineEventHandler((event) => {
  const all = String(getQuery(event).all || "") === "1";
  const now = /* @__PURE__ */ new Date();
  if (!all) {
    const items2 = activePromos(now);
    return { demo: true, total: items2.length, items: items2, now: now.toISOString() };
  }
  const { promos } = getStore();
  const items = promos.map((p) => ({
    ...p,
    expired: p.endDate ? new Date(p.endDate) < now : false
  }));
  return {
    demo: true,
    total: items.length,
    active: items.filter((p) => !p.expired).length,
    expired: items.filter((p) => p.expired).length,
    items,
    now: now.toISOString()
  };
});

export { promos_get as default };
//# sourceMappingURL=promos.get.mjs.map
