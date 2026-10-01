import { c as defineEventHandler, g as getQuery, r as readBody, e as createError } from '../../_/nitro.mjs';
import { d as deletePromo } from '../../_/promoStore.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../../_/store.mjs';
import '../../_/uriba.mjs';

const promos_delete = defineEventHandler(async (event) => {
  var _a;
  const id = String(getQuery(event).id || ((_a = await readBody(event).catch(() => ({}))) == null ? void 0 : _a.id) || "");
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "id \u3092\u6307\u5B9A\u3057\u3066\u304F\u3060\u3055\u3044" });
  }
  const removed = deletePromo(id);
  if (!removed) {
    throw createError({ statusCode: 404, statusMessage: "\u8A72\u5F53\u3059\u308B\u7279\u58F2\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093" });
  }
  return { demo: true, removed: true, id };
});

export { promos_delete as default };
//# sourceMappingURL=promos.delete.mjs.map
