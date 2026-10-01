import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
import { a as addPromos } from '../../_/promoStore.mjs';
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

const promos_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const items = Array.isArray(body == null ? void 0 : body.items) ? body.items : body ? [body] : [];
  if (!items.length) {
    throw createError({ statusCode: 400, statusMessage: "\u767B\u9332\u3059\u308B\u7279\u58F2\u304C\u3042\u308A\u307E\u305B\u3093" });
  }
  if (items.length > 500) {
    throw createError({ statusCode: 400, statusMessage: "\u4E00\u5EA6\u306B\u767B\u9332\u3067\u304D\u308B\u306E\u306F500\u4EF6\u307E\u3067\u3067\u3059" });
  }
  const { added, errors, total } = addPromos(items);
  return {
    demo: true,
    addedCount: added.length,
    errorCount: errors.length,
    total,
    added,
    errors
  };
});

export { promos_post as default };
//# sourceMappingURL=promos.post.mjs.map
