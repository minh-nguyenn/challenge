// Danh sach san pham demo, kem gia khuyen mai dang chay (neu co).
// Ho tro loc theo tu khoa / quay 売場 / khoang gia, va phan trang cho trang /products.
import { normalizeJa } from '~~/shared/jp-text.mjs'
import { toJapaneseKeywords } from '~~/shared/chat-lang.mjs'
import { detectBudget } from '~~/shared/budget.mjs'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const { products } = getStore()

  const qRaw = String(query.q || '').trim()
  const uriba = String(query.uriba || '').trim()
  const sort = String(query.sort || '').trim()
  // Khong truyen limit thi tra ve TAT CA — /list dung endpoint nay de dung
  // bang tra gia cho danh sach di cho, thieu mot mon la mat gia mon do.
  const limit = query.limit ? Math.min(500, Number(query.limit) || 60) : Infinity
  const offset = Math.max(0, Number(query.offset) || 0)

  // Ghep khuyen mai theo ten san pham — demo nen khong co ma SKU
  const promoByName = new Map(activePromos().map((p: any) => [p.productName, p]))

  let items = products

  // Tu khoa: chap nhan ca tieng nuoc ngoai ("sữa" -> 牛乳) va moi cach viet
  // tieng Nhat (ウナギ / ｳﾅｷﾞ / 鰻), giong /api/search.
  if (qRaw) {
    const terms = [qRaw, ...toJapaneseKeywords(qRaw)].map((t: string) => normalizeJa(t)).filter(Boolean)
    items = items.filter((p: any) => {
      const hay = normalizeJa(`${p.name} ${p.uribaLabel} ${p.unit}`)
      return terms.some((t: string) => hay.includes(t))
    })
  }

  if (uriba) items = items.filter((p: any) => p.uriba === uriba)

  // Khoang gia: nhan ca minPrice/maxPrice tuong minh lan cau chu "2000円以内"
  const budget = detectBudget(qRaw)
  const min = Number(query.minPrice)
  const max = Number(query.maxPrice)
  const lo = Number.isFinite(min) ? min : budget ? budget.min : null
  const hi = Number.isFinite(max) ? max : budget ? budget.max : null
  if (lo != null || hi != null) {
    items = items.filter((p: any) => {
      const v = Number(p.taxIncluded || p.price || 0)
      if (lo != null && v < lo) return false
      if (hi != null && v > hi) return false
      return true
    })
  }

  const withPromo = items.map((p: any) => ({ ...p, promo: promoByName.get(p.name) || null }))

  // Sap xep: mac dinh uu tien hang dang khuyen mai, roi den do pho bien
  const priceOf = (p: any) => (p.promo ? p.promo.salePrice : p.taxIncluded || p.price || 0)
  if (sort === 'price-asc') withPromo.sort((a: any, b: any) => priceOf(a) - priceOf(b))
  else if (sort === 'price-desc') withPromo.sort((a: any, b: any) => priceOf(b) - priceOf(a))
  else if (sort === 'name') withPromo.sort((a: any, b: any) => a.name.localeCompare(b.name, 'ja'))
  else {
    withPromo.sort((a: any, b: any) => {
      if (!!b.promo !== !!a.promo) return b.promo ? 1 : -1
      return (b.usedInRecipes || 0) - (a.usedInRecipes || 0)
    })
  }

  return {
    demo: true,
    total: withPromo.length,
    offset,
    limit: Number.isFinite(limit) ? limit : null,
    budget,
    items: Number.isFinite(limit) ? withPromo.slice(offset, offset + limit) : withPromo,
  }
})
