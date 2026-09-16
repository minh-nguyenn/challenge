// Proxy microCMS. Di qua day de CMS_KEY chi nam o server, khong bao gio ra client.
export default defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig()
  const q = getQuery(event)
  const { endpoint, contentId, ...queries } = q

  // Chan path traversal: chi cho phep ten endpoint dang chu-so-gach
  if (!endpoint || !/^[a-z0-9-]+(\/[a-z0-9_-]+)?$/i.test(String(endpoint))) {
    throw createError({ statusCode: 400, statusMessage: 'endpoint khong hop le' })
  }
  if (contentId && !/^[a-z0-9_-]+$/i.test(String(contentId))) {
    throw createError({ statusCode: 400, statusMessage: 'contentId khong hop le' })
  }

  const base = `https://${cfg.cmsDomain}.microcms.io/api/v1/${endpoint}`
  const url = new URL(contentId ? `${base}/${contentId}` : base)
  for (const [k, v] of Object.entries(queries)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v))
  }

  try {
    return await $fetch(url.toString(), {
      headers: { 'X-MICROCMS-API-KEY': String(cfg.cmsKey) },
    })
  } catch (e: any) {
    throw createError({
      statusCode: e?.response?.status || 502,
      statusMessage: 'Loi khi goi microCMS',
    })
  }
})
