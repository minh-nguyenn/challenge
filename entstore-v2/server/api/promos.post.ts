/**
 * Dang ky khuyen mai — ghi THAT xuong data/demo-promos.json.
 *
 * Nhan { items: [...] } hoac mot muc don le. Tra ve so muc them duoc va
 * danh sach muc bi tu choi kem ly do, de man hinh noi ro sai o dau.
 *
 * ⚠️ Ban demo, khong co dang nhap — xem ghi chu trong server/utils/promoStore.ts
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const items = Array.isArray(body?.items) ? body.items : body ? [body] : []

  if (!items.length) {
    throw createError({ statusCode: 400, statusMessage: '登録する特売がありません' })
  }
  if (items.length > 500) {
    throw createError({ statusCode: 400, statusMessage: '一度に登録できるのは500件までです' })
  }

  const { added, errors, total } = addPromos(items)

  return {
    demo: true,
    addedCount: added.length,
    errorCount: errors.length,
    total,
    added,
    errors,
  }
})
