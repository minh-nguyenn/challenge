// Goi y khi go trong o tim kiem — chay theo TUNG KY TU, ke ca khi go ngoai ngu.
//   「うな」「ｳﾅ」「鰻」 -> tieu de tieng Nhat nhu cu
//   「unag」「kare-」  -> doi romaji sang kana roi goi y (うなぎ, カレー…)
//   「cà r」「cur」「카」 -> tu ngoai ngu dang go do -> カレー / にんじん…
// Cat query o 50 ky tu cho re.
import { suggest } from '~~/shared/search-engine.mjs'
import { normalizeJa } from '~~/shared/jp-text.mjs'
import { keywordPrefixMatches, toJapaneseKeywords } from '~~/shared/chat-lang.mjs'
import { romajiToHira } from '~~/shared/romaji.mjs'
import { REGIONS } from '~~/shared/search-intent.mjs'

// Ngoai bai viet/cong thuc, goi y ca TEN SAN PHAM va KM dang chay — khach go
// 「うな」 thuong la dang tim mon hang 「うなぎ」, khong phai bai viet.
// Dung lai theo tung ban store (store doi khi du lieu doi / sang ngay moi).
const poolCache = new WeakMap<object, any[]>()
function pool(store: any) {
  let p = poolCache.get(store)
  if (p) return p
  const products = store.products.map((x: any) => ({
    title: x.name,
    type: 'product',
    route: `/products?q=${encodeURIComponent(x.name)}`,
    normTitle: normalizeJa(x.name),
  }))
  const promos = activePromos().map((x: any) => ({
    title: `${x.productName} ${x.discountPercent}%OFF`,
    type: 'promo',
    route: `/search?q=${encodeURIComponent(x.productName)}`,
    normTitle: normalizeJa(x.productName),
  }))
  // KM truoc san pham truoc bai viet: cung muc uu tien thi muc dung truoc thang
  p = [...promos, ...products, ...store.docs]
  poolCache.set(store, p)
  return p
}

export default defineEventHandler((event) => {
  const q = String(getQuery(event).q || '').slice(0, 50)
  if (!q.trim()) return { items: [], translations: [] }
  const store = getStore()

  // Tu ngoai ngu: khop tien to (dang go do) + ca cau day du (「thịt bò」)
  const prefix = keywordPrefixMatches(q, REGIONS, 4)
  // Ca cau day du chi xet khi khong co tu nao dang go do: 「cà r」 khong duoc
  // ra 「魚」 chi vi chu 「ca」 trung tu 「cá」
  const full = (prefix.length ? [] : toJapaneseKeywords(q))
    .filter((w: string) => w !== 'なんでも検索' && !prefix.some((p: any) => p.to === w))
    .map((w: string) => ({ from: q.trim(), to: w }))
  const translations = [...prefix, ...full].slice(0, 4)

  const kana = romajiToHira(q)
  const needles = [
    ...translations.map((t: any) => ({ n: t.to, rank: 1, via: t.to })),
    // Romaji xep sau ban dich (「sua」 la sữa chu khong phai すあ)
    ...(kana.length >= 2 ? [{ n: kana, rank: 2, loose: true, prefixOnly: kana.length < 4, via: kana }] : []),
  ]

  return {
    items: suggest(pool(store), q, 8, { needles }),
    // Hien thanh dong 「cà ri → カレー」 tren dau danh sach goi y
    translations,
    kana: kana.length >= 2 ? kana : '',
  }
})
