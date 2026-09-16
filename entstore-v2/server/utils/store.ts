/**
 * Doc du lieu demo tu thu muc data/ va cache lai theo mtime cua search-index.
 *
 * Moi route /api/* deu di qua day nen chi doc dia mot lan; khi chay lai
 * `npm run index:build` thi mtime doi -> cache tu dong lam moi.
 */
import fs from 'node:fs'
import path from 'node:path'
import { SHOP_LIST } from '~~/app/config/shop-data.js'
import { estimateRecipeCost } from '~~/shared/budget.mjs'

let cache: any = null
let cacheStamp = 0

/**
 * Dau van tay cho cache: mtime cua index CONG mtime cua file khuyen mai.
 *
 * Phai tinh ca file khuyen mai, vi man /admin/promo ghi thang vao
 * data/demo-promos.json — chi nhin index thi dang ky xong ma search van hien
 * du lieu cu cho toi khi khoi dong lai server.
 */
function dataStamp() {
  let stamp = 0
  for (const file of ['search-index.json', 'demo-promos.json']) {
    const p = resolveDataFile(file)
    if (p) stamp += fs.statSync(p).mtimeMs
  }
  return stamp
}

/** Tim duong dan that cua mot file trong data/ (cwd khac nhau giua dev va .output) */
export function resolveDataFile(file: string) {
  for (const p of [
    path.resolve(process.cwd(), 'data', file),
    path.resolve(process.cwd(), '../data', file),
    path.resolve(process.cwd(), '../../data', file),
  ]) {
    if (fs.existsSync(p)) return p
  }
  return null
}

/** Doc mot file JSON trong data/ */
function readJson(file: string) {
  const p = resolveDataFile(file)
  return p ? JSON.parse(fs.readFileSync(p, 'utf8')) : null
}

const DAY = 86400000

/**
 * Doi ngay cua khuyen mai demo theo so ngay da troi qua ke tu luc sinh du lieu.
 *
 * Vi sao can: data/demo-promos.json sinh ngay 28/08, han cuoi 07/09. Sau ngay do
 * activePromos() tra ve 0 -> 特売 CHET o moi trang (search khong co nhom 特売,
 * trang cong thuc mat 🔥特売中, chatbot noi sai). Buoi thuyet trinh dien ra vao
 * mot ngay khong biet truoc nen khong the ghi ngay cung.
 *
 * Cach lam: dich CA BO theo dung so ngay chenh lech giua hom nay va `generatedAt`.
 * Vi moc thoi gian tuong doi giua cac khuyen mai giu nguyen, ty le van la
 * 12 con han + 2 da het han — van chung minh duoc co che tu go khuyen mai het han.
 */
function rollPromoDates(raw: any) {
  const items = raw?.data || []
  const anchor = raw?.generatedAt ? new Date(raw.generatedAt).getTime() : 0
  if (!anchor || !items.length) return items

  const shiftDays = Math.floor((Date.now() - anchor) / DAY)
  if (shiftDays <= 0) return items

  const shift = (iso: string) =>
    iso ? new Date(new Date(iso).getTime() + shiftDays * DAY).toISOString() : iso

  return items.map((p: any) => {
    // Muc do NGUOI DUNG dang ky (qua /admin/promo hoac import Excel) mang ngay
    // that, khong phai du lieu mau — dich nua thi ngay bi day ve tuong lai.
    if (p.fixedDate) return p
    return {
      ...p,
      startDate: shift(p.startDate),
      endDate: shift(p.endDate),
      // Danh dau de giao dien/test biet ngay da duoc dich, khong phai ngay goc
      shiftedDays: shiftDays,
    }
  })
}

/** 37 cua hang, lam phang tu SHOP_LIST theo khu vuc, kem toa do */
function flattenShops() {
  const out: any[] = []
  for (const [area, list] of Object.entries(SHOP_LIST as Record<string, any[]>)) {
    for (const s of list) {
      out.push({
        id: `shop:${s.globalName}`,
        globalName: s.globalName,
        title: s.shopName,
        route: s.shopLink,
        address: s.address,
        phone: s.phone,
        openTime: s.time,
        area,
        lat: Number(s.position?.lat) || null,
        lng: Number(s.position?.lng) || null,
      })
    }
  }
  return out
}

export function getStore() {
  const stamp = dataStamp()
  if (cache && stamp === cacheStamp) return cache
  cacheStamp = stamp

  const idx = readJson('search-index.json')
  if (!idx) {
    throw createError({
      statusCode: 503,
      statusMessage: 'Chưa dựng index — chạy `npm run index:build`',
    })
  }

  const docs = idx.docs || []
  const products = readJson('demo-products.json')?.data || []
  const productByName = new Map<string, any>(products.map((p: any) => [p.name, p]))

  // Chi phi nguyen lieu uoc tinh cho tung cong thuc — tinh mot lan roi cache,
  // vi bo loc "2000円以内の料理" can so nay cho ca 1.000 mon.
  const costById = new Map<string, any>()
  for (const d of docs) {
    if (d.type !== 'recipe' || !d.ingredients?.length) continue
    const c = estimateRecipeCost(d.ingredients, productByName)
    if (c) costById.set(d.id, c)
  }

  cache = {
    docs,
    counts: idx.counts || {},
    nutrition: readJson('demo-nutrition.json')?.data || [],
    products,
    productByName,
    costById,
    promos: rollPromoDates(readJson('demo-promos.json')),
    shops: flattenShops(),
  }
  return cache
}

/** Chi lay cac chuong trinh khuyen mai dang con hieu luc tai thoi diem `at` */
export function activePromos(at = new Date()) {
  const { promos } = getStore()
  const t = at.getTime()
  return promos.filter((p: any) => {
    const start = p.startDate ? new Date(p.startDate).getTime() : -Infinity
    const end = p.endDate ? new Date(p.endDate).getTime() : Infinity
    return start <= t && t <= end
  })
}

/**
 * Ton kho cua mot san pham tai mot cua hang — SO AO, sinh bang bam chuoi.
 *
 * Dung ham bam thay vi random de ket qua on dinh: cung san pham + cung cua hang
 * thi lan nao mo cung ra mot trang thai, khong nhay lung tung giua cac lan tai.
 * Khong co du lieu ton kho that nen moi cho hien phai kem badge DEMO.
 */
export function stockAt(productId: string, shopGlobalName: string) {
  const s = `${productId}@${shopGlobalName}`
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  const n = Math.abs(h) % 100
  if (n >= 88) return { key: 'none', label: '在庫なし', order: 2 }
  if (n >= 72) return { key: 'low', label: '残りわずか', order: 1 }
  return { key: 'ok', label: '在庫あり', order: 0 }
}

/** Khoang cach duong chim bay (km) — du dung de xep "cua hang gan nhat" */
function haversineKm(aLat: number, aLng: number, bLat: number, bLng: number) {
  const R = 6371
  const toRad = (d: number) => (d * Math.PI) / 180
  const dLat = toRad(bLat - aLat)
  const dLng = toRad(bLng - aLng)
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) ** 2
  return 2 * R * Math.asin(Math.sqrt(x))
}

/**
 * Cac sieu thi co ban san pham nay — tra loi cho yeu cau
 * "danh sach cac sieu thi gan co ban sp lien quan".
 *
 * @param product   san pham demo
 * @param opts.lat  vi tri nguoi dung (neu cho phep dinh vi) -> xep theo khoang cach
 * @param opts.area loc theo khu vuc khi khong co vi tri
 * @param opts.limit so cua hang tra ve
 */
export function shopsSelling(product: any, opts: any = {}) {
  const { lat = null, lng = null, area = null, limit = 5 } = opts
  const { shops } = getStore()
  if (!product) return []

  let list = shops.map((s: any) => {
    const stock = stockAt(product.id, s.globalName)
    const distanceKm =
      lat != null && lng != null && s.lat && s.lng
        ? Math.round(haversineKm(lat, lng, s.lat, s.lng) * 10) / 10
        : null
    return { ...s, stock: stock.label, stockKey: stock.key, _order: stock.order, distanceKm }
  })

  if (area) list = list.filter((s: any) => s.area === area)

  // Con hang xep truoc; trong cung muc ton kho thi gan hon xep truoc
  list.sort((a: any, b: any) => {
    if (a._order !== b._order) return a._order - b._order
    if (a.distanceKm != null && b.distanceKm != null) return a.distanceKm - b.distanceKm
    return a.title.localeCompare(b.title, 'ja')
  })

  return list.slice(0, limit).map(({ _order, ...rest }: any) => rest)
}
