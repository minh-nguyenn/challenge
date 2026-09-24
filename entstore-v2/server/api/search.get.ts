// Tim kiem tren index cuc bo (data/search-index.json), khong goi CMS.
// Tron them 特売 va 商品 demo vao tap tai lieu de ho cung len ket qua.
import { search } from '~~/shared/search-engine.mjs'
import { normalizeJa } from '~~/shared/jp-text.mjs'
import { toJapaneseKeywords } from '~~/shared/chat-lang.mjs'
import { detectBudget, stripBudget } from '~~/shared/budget.mjs'
import { GROUP_LABEL, GROUP_ORDER, looksLikeKeyword } from '~~/shared/search-engine.mjs'

/**
 * Nhom duoc hien tren TRANG KET QUA tim kiem.
 *
 * Co y bo 'page' (43 trang tinh: gioi thieu cong ty, FAQ, chinh sach…) va
 * 'feature' (5 bai gioi thieu chinh cac tinh nang moi). Khach go 「うなぎ」 thi
 * muon thay khuyen mai va cong thuc, khong phai trang gioi thieu cong ty.
 *
 * Hai nhom nay VAN nam trong chi muc va van duoc chatbot dung — nho chung ma
 * bot tra loi duoc 「このサイトで何ができますか」 hay cau hoi ve the thanh toan.
 */
const SEARCH_GROUPS = ['promo', 'recipe', 'product', 'article', 'shop']

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const q = String(query.q || '').slice(0, 100)
  // Trang kết quả tự phân trang phía client nên cần cả cụm, không chỉ 8 mục đầu.
  // Chặn ở 200 để payload không phình: nhóm lớn nhất đo được là 104 mục.
  const perGroup = Math.min(200, Number(query.perGroup) || 8)
  if (!q.trim()) {
    return { query: '', total: 0, groups: [], items: [] }
  }

  const { docs, products, costById } = getStore()

  // 1. NGAN SACH — "2000円以内の料理", "món ăn trong tầm giá 2000 yên".
  // Doc rieng ra khoi cau, vi neu de nguyen thi "2000" chi la mot tu khoa vo nghia.
  const budget = detectBudget(q)

  // Khuyen mai -> doc gia, de go "特売" hay ten san pham deu tim ra
  const promoDocs = activePromos().map((p: any) => {
    const title = `${p.productName} ${p.discountPercent}%OFF`
    const text = `${p.productName} 特売 セール お買い得 ${p.discountPercent}%OFF ${p.salePrice}円 ${p.uribaLabel}`
    return {
      id: `promo:${p.id}`,
      type: 'promo',
      typeLabel: '特売',
      title,
      route: `/search?q=${encodeURIComponent(p.productName)}`,
      text,
      norm: normalizeJa(title + ' ' + text),
      normTitle: normalizeJa(p.productName),
      promo: p,
      demo: true,
    }
  })

  const productDocs = products.map((p: any) => ({
    id: `product:${p.id}`,
    type: 'product',
    typeLabel: '商品',
    title: p.name,
    route: `/products?q=${encodeURIComponent(p.name)}`,
    text: `${p.name} ${p.uribaLabel} ${p.price}円 ${p.unit} ${p.stock}`,
    norm: normalizeJa(`${p.name} ${p.uribaLabel} ${p.unit}`),
    normTitle: normalizeJa(p.name),
    product: p,
    demo: true,
  }))

  const all = [...promoDocs, ...productDocs, ...docs]
  const translatedFrom: string[] = []

  // 2. NGOAI NGU — trang va du lieu deu tieng Nhat, nhung nguoi dung co the go
  // "cà ri" / "curry" / "咖喱". Truoc day /api/search khong dich nen ra 0 ket qua
  // (chatbot thi dich, gay ra chuyen cung mot tu ma hai noi tra loi khac nhau).
  // Nay dich sang tieng Nhat roi tim them, va gop ket qua lai.
  // Bo ve ngan sach ra khoi truy van: 「2000円以内の料理」 khong khop tai lieu nao,
  // nhung 「カレー」 trong 「2000円以内のカレー」 thi co.
  const { rest, generic } = budget ? stripBudget(q, budget) : { rest: q, generic: false }
  const termForSearch = budget ? rest : q

  // Danh sách từ thừa viết tay không bao giờ phủ hết mọi cách hỏi
  // (「2000円で何を食べますか」 còn sót 「食べますか」). Kiểm thêm: phần còn lại
  // có khớp TÊN tài liệu nào không — không khớp thì coi như không có từ khoá.
  const noKeyword =
    generic || !looksLikeKeyword(all, rest, toJapaneseKeywords(rest))

  let budgetInfo: any = null
  let result: any

  if (budget && noKeyword) {
    // Khong con tu khoa nao -> nguoi dung hoi "nau duoc gi voi ngan sach nay".
    // Duyet toan bo cong thuc + san pham theo gia, thay vi tim theo chu.
    result = browseByBudget(all, budget, costById, perGroup)
    budgetInfo = { ...budget, mode: 'browse', removed: 0, note: BUDGET_NOTE }
  } else {
    result = search(all, termForSearch, { perGroup, types: SEARCH_GROUPS })

    // 2. NGOAI NGU — trang va du lieu deu tieng Nhat, nhung nguoi dung co the go
    // "cà ri" / "curry" / "咖喱". Truoc day /api/search khong dich nen ra 0 ket qua
    // (chatbot thi dich, gay ra chuyen cung mot tu ma hai noi tra loi khac nhau).
    const jaWords = toJapaneseKeywords(termForSearch).filter(
      (w: string) => w && !termForSearch.includes(w)
    )
    for (const w of jaWords) {
      const extra = search(all, w, { perGroup, types: SEARCH_GROUPS })
      if (!extra.total) continue
      translatedFrom.push(w)
      result = mergeResults(result, extra, perGroup)
    }

    // 3. LOC THEO GIA — mon an tinh theo chi phi nguyen lieu uoc tinh,
    // san pham tinh theo gia ban (da gom thue).
    if (budget) {
      const before = result.total
      result = filterByBudget(result, budget, costById)
      budgetInfo = {
        ...budget,
        mode: 'filter',
        removed: before - result.total,
        note: BUDGET_NOTE,
      }
    }
  }

  // Gan gia khuyen mai vao cac ket qua nhom 商品 de hien badge %OFF
  const promoByName = new Map(activePromos().map((p: any) => [p.productName, p]))
  for (const g of result.groups) {
    if (g.key !== 'product') continue
    for (const it of g.items) {
      const pr = promoByName.get(it.title)
      if (pr) it.promo = pr
    }
  }

  // 4. SIEU THI CO BAN — yeu cau: "danh sach cac sieu thi gan co ban sp lien quan".
  // Lay san pham noi bat nhat trong ket qua roi liet ke cua hang con hang.
  const lat = Number(query.lat)
  const lng = Number(query.lng)
  const topProduct = findTopProduct(result)
  const shops = topProduct
    ? shopsSelling(topProduct, {
        lat: Number.isFinite(lat) ? lat : null,
        lng: Number.isFinite(lng) ? lng : null,
        limit: 5,
      })
    : []

  return {
    ...result,
    budget: budgetInfo,
    translatedFrom: translatedFrom.length ? translatedFrom : null,
    nearbyShops: shops.length ? { product: topProduct, items: shops, located: Number.isFinite(lat) } : null,
  }
})

const BUDGET_NOTE = 'レシピは材料費の概算（DEMO価格）で判定しています'

/**
 * Duyet theo NGAN SACH khi cau hoi khong con tu khoa nao:
 * 「2000円以内の料理」「món ăn trong tầm giá 2000 yên」.
 *
 * Khong tim theo chu nua ma quet toan bo cong thuc, lay nhung mon co chi phi
 * nguyen lieu nam trong ngan sach. Xep mon DAT NHAT truoc (trong pham vi cho
 * phep) vi nguoi hoi muon biet "2000 yen nau duoc gi", chu khong phai mon re nhat.
 */
function browseByBudget(all: any[], budget: any, costById: Map<string, any>, perGroup: number) {
  const inRange = (n: number) => n >= budget.min && n <= budget.max

  // Chi nhan mon tra duoc gia cho >=60% nguyen lieu. 949/1000 mon dat muc nay;
  // duoi nguong do con so 「概算」 chu yeu la gia bu, noi ra thi khong trung thuc.
  const MIN_CONFIDENCE = 60

  const recipes = []
  for (const d of all) {
    if (d.type !== 'recipe') continue
    const c = costById.get(d.id)
    if (!c || c.confidence < MIN_CONFIDENCE || !inRange(c.total)) continue
    recipes.push({ ...stripDoc(d), estimatedCost: c })
  }

  // 「khoảng 2000円」 -> gần con số đó nhất trước.
  // 「từ 2000円 trở lên」 -> rẻ nhất trong khoảng cho phép trước.
  // 「2000円以内」      -> đắt nhất trong ngân sách trước, vì người hỏi muốn biết
  //                       "2000 yên nấu được gì", không phải món rẻ nhất.
  const rank =
    budget.kind === 'around'
      ? (a: any, b: any) =>
          Math.abs(a.estimatedCost.total - budget.raw) - Math.abs(b.estimatedCost.total - budget.raw)
      : budget.kind === 'over'
        ? (a: any, b: any) => a.estimatedCost.total - b.estimatedCost.total
        : (a: any, b: any) => b.estimatedCost.total - a.estimatedCost.total
  recipes.sort(rank)

  // Cau kich hoat che do nay luon la ve NAU AN ("…の料理", "món ăn…"), nen chi
  // tra ve 特売 + レシピ. Truoc do co ca nhom 商品: 702/702 san pham deu duoi
  // 2000 yen nen nhom do chi la nhieu, khong tra loi dung cau hoi.
  // Muon loc san pham theo gia thi da co bo loc rieng o trang /products.
  const promos = all
    .filter((d: any) => d.type === 'promo' && inRange(Number(d.promo?.salePrice || 0)))
    .map((d: any) => stripDoc(d))

  const groups = [
    { key: 'recipe', label: GROUP_LABEL.recipe, all: recipes },
    { key: 'promo', label: GROUP_LABEL.promo, all: promos },
  ]
    .filter((g) => g.all.length)
    .map((g) => ({ key: g.key, label: g.label, count: g.all.length, items: g.all.slice(0, perGroup) }))

  const items = [...recipes, ...promos]
  return {
    query: '',
    normalized: '',
    total: items.length,
    groups,
    items: items.slice(0, 100),
  }
}

/** Bo cac truong nang (norm/text) truoc khi tra ve client */
function stripDoc(d: any) {
  const { norm, normTitle, text, ...rest } = d
  return { ...rest, snippet: (text || '').slice(0, 120) }
}

/** Gop ket qua cua mot truy van phu vao ket qua chinh, khong trung id */
function mergeResults(base: any, extra: any, perGroup: number) {
  const groups = new Map(base.groups.map((g: any) => [g.key, { ...g, items: [...g.items] }]))

  for (const g of extra.groups) {
    const cur: any = groups.get(g.key)
    if (!cur) {
      groups.set(g.key, { ...g, items: [...g.items] })
      continue
    }
    const seen = new Set(cur.items.map((i: any) => i.id))
    for (const it of g.items) {
      if (seen.has(it.id)) continue
      cur.items.push(it)
      seen.add(it.id)
    }
    cur.count += g.count
    cur.items = cur.items.slice(0, perGroup)
  }

  const seenItems = new Set(base.items.map((i: any) => i.id))
  const items = [...base.items]
  for (const it of extra.items) {
    if (seenItems.has(it.id)) continue
    items.push(it)
    seenItems.add(it.id)
  }

  // Sap lai theo dung thu tu hien thi: レシピ → 特売 → 商品 → 記事 → 店舗 → …
  // Khong sap thi nhom nao khop TRUOC se dung dau: go 「cari」 thi truy van goc
  // chi khop vai trang tinh (nhieu tu n-gram), the la nhom ページ nhay len dau
  // con レシピ bi day xuong duoi — nguoc han y nguoi dung.
  const ordered = [...groups.values()].sort(
    (a: any, b: any) => GROUP_ORDER.indexOf(a.key) - GROUP_ORDER.indexOf(b.key)
  )

  return {
    ...base,
    total: base.total + extra.total,
    groups: ordered,
    items: items.sort((a: any, b: any) => (b.score || 0) - (a.score || 0)),
  }
}

/** Bo cac ket qua vuot ngan sach; nhom nao khong lien quan gia thi giu nguyen */
function filterByBudget(result: any, budget: any, costById: Map<string, any>) {
  const inRange = (n: number) => n >= budget.min && n <= budget.max

  const keep = (it: any) => {
    if (it.product) return inRange(Number(it.product.taxIncluded || it.product.price || 0))
    if (it.promo) return inRange(Number(it.promo.salePrice || 0))
    if (it.type === 'recipe') {
      const c = costById.get(it.id)
      return c ? inRange(c.total) : false
    }
    return true
  }

  const groups = result.groups
    .map((g: any) => {
      const items = g.items.filter(keep).map((it: any) => attachCost(it, costById))
      // Dem lai cho dung: so cu la tong truoc khi loc
      return { ...g, items, count: items.length }
    })
    .filter((g: any) => g.items.length)

  const items = result.items.filter(keep).map((it: any) => attachCost(it, costById))

  return { ...result, groups, items, total: items.length }
}

/** Gan chi phi uoc tinh vao cong thuc de giao dien hien 「材料費 概算 ◯◯円」 */
function attachCost(it: any, costById: Map<string, any>) {
  if (it.type !== 'recipe') return it
  const c = costById.get(it.id)
  return c ? { ...it, estimatedCost: c } : it
}

/** San pham noi bat nhat trong ket qua — uu tien nhom 商品, roi den 特売 */
function findTopProduct(result: any) {
  const g = result.groups.find((x: any) => x.key === 'product')
  if (g?.items?.length) return g.items[0].product || null

  const gp = result.groups.find((x: any) => x.key === 'promo')
  if (gp?.items?.length) {
    const promo = gp.items[0].promo
    if (promo) {
      const { productByName } = getStore()
      return productByName.get(promo.productName) || null
    }
  }
  return null
}
