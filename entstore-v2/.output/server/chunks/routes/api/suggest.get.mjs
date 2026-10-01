import { c as defineEventHandler, g as getQuery } from '../../_/nitro.mjs';
import { g as getStore } from '../../_/store.mjs';
import { c as suggest } from '../../_/search-engine.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../../_/jp-text.mjs';

const suggest_get = defineEventHandler((event) => {
  const q = String(getQuery(event).q || "").slice(0, 50);
  if (!q.trim()) return { items: [] };
  const { docs } = getStore();
  return { items: suggest(docs, q, 8) };
});

export { suggest_get as default };
//# sourceMappingURL=suggest.get.mjs.map
