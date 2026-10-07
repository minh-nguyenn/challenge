import { c as defineEventHandler, g as getQuery, e as createError, u as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const cms_get = defineEventHandler(async (event) => {
  var _a;
  const cfg = useRuntimeConfig();
  const q = getQuery(event);
  const { endpoint, contentId, ...queries } = q;
  if (!endpoint || !/^[a-z0-9-]+(\/[a-z0-9_-]+)?$/i.test(String(endpoint))) {
    throw createError({ statusCode: 400, statusMessage: "endpoint khong hop le" });
  }
  if (contentId && !/^[a-z0-9_-]+$/i.test(String(contentId))) {
    throw createError({ statusCode: 400, statusMessage: "contentId khong hop le" });
  }
  const base = `https://${cfg.cmsDomain}.microcms.io/api/v1/${endpoint}`;
  const url = new URL(contentId ? `${base}/${contentId}` : base);
  for (const [k, v] of Object.entries(queries)) {
    if (v !== void 0 && v !== null && v !== "") url.searchParams.set(k, String(v));
  }
  try {
    return await $fetch(url.toString(), {
      headers: { "X-MICROCMS-API-KEY": String(cfg.cmsKey) }
    });
  } catch (e) {
    throw createError({
      statusCode: ((_a = e == null ? void 0 : e.response) == null ? void 0 : _a.status) || 502,
      statusMessage: "Loi khi goi microCMS"
    });
  }
});

export { cms_get as default };
//# sourceMappingURL=cms.get.mjs.map
