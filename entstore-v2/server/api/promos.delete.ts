/**
 * Xoa mot khuyen mai khoi data/demo-promos.json.
 *
 * Luu y: muc HET HAN thi khong can xoa — co che tu go da loai no khoi moi trang.
 * Nut xoa o man quan ly la de go nham/sai, khong phai de don dep dinh ky.
 */
export default defineEventHandler(async (event) => {
  const id = String(getQuery(event).id || (await readBody(event).catch(() => ({})))?.id || '')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'id を指定してください' })
  }

  const removed = deletePromo(id)
  if (!removed) {
    throw createError({ statusCode: 404, statusMessage: '該当する特売が見つかりません' })
  }

  return { demo: true, removed: true, id }
})
