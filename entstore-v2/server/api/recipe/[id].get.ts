// Chi tiet mot cong thuc: nguyen lieu da gan quay 売場 / gia / khuyen mai,
// dinh duong that (Kitchen365) neu co, va cac mon lien quan.
import { uribaOf, groupByUriba } from '~~/shared/uriba.mjs'
import { search } from '~~/shared/search-engine.mjs'

// Chi tinh 4 quay nguyen lieu chinh — gia vi thi mon nao cung co, khong noi len dieu gi
const MAIN = new Set(['seika', 'sengyo', 'seiniku', 'nippai'])

/**
 * Goi y mon lien quan. Cham diem theo: chung nguyen lieu chinh (nang nhat),
 * cung the loai, thoi gian nau xap xi.
 */
function findRelated(doc: any, docs: any[], limit = 4) {
  const mainOf = (d: any) =>
    new Set(
      (d.ingredients || [])
        .map((i: any) =>
          String(i.name)
            .replace(/^[A-Za-z][）)．.、,]\s*/, '')
            .replace(/[（(].*?[）)]/g, '')
            .trim()
        )
        .filter((n: string) => n && MAIN.has(uribaOf(n)))
    )

  const myMain = mainOf(doc)
  const myCat = new Set(doc.category || [])
  const myTime = parseInt(String(doc.cookTime || '').replace(/[^0-9]/g, ''), 10)

  const scored: any[] = []
  for (const d of docs) {
    if (d.type !== 'recipe' || d.id === doc.id) continue
    if (!d.ingredients?.length) continue

    let score = 0
    const shared = [...mainOf(d)].filter((n) => myMain.has(n))
    score += shared.length * 40
    if ((d.category || []).some((c: string) => myCat.has(c))) score += 25
    const t = parseInt(String(d.cookTime || '').replace(/[^0-9]/g, ''), 10)
    if (Number.isFinite(myTime) && Number.isFinite(t) && Math.abs(t - myTime) <= 5) score += 10
    if (d.nutrition?.real) score += 3
    if (score > 0) scored.push({ d, score, shared })
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ d, shared }) => ({
      id: d.id.replace('recipe:', ''),
      title: d.title,
      image: d.image || '',
      route: d.route,
      cookTime: d.cookTime || '',
      energy: d.nutrition?.kcal || d.energy || '',
      category: (d.category || [])[0] || '',
      // Nói rõ vì sao gợi ý món này — minh bạch hơn là danh sách vô cớ
      sharedIngredients: shared.slice(0, 3),
    }))
}

/**
 * Bai viet lien quan den mon an. Truoc day trang cong thuc la ngo cut: xem xong
 * khong co gi de doc tiep. Cham diem bai viet theo nguyen lieu chinh (nang hon)
 * roi den the loai cua mon, va ghi ro tu khoa nao khop — giong 関連レシピ.
 */
function findRelatedArticles(doc: any, docs: any[], mainNames: string[], limit = 4) {
  const terms: { term: string; weight: number }[] = [
    ...[...new Set(mainNames)].map((term) => ({ term, weight: 3 })),
    ...(doc.category || []).map((term: string) => ({ term, weight: 1 })),
  ]

  const best = new Map<string, { doc: any; score: number; term: string }>()
  for (const { term, weight } of terms) {
    if (!term || term.length < 2) continue
    const r = search(docs, term, { types: ['article'], perGroup: 6, limit: 6 })
    for (const it of r.items) {
      const score = (it.score || 0) * weight
      const prev = best.get(it.id)
      if (!prev || score > prev.score) best.set(it.id, { doc: it, score, term })
    }
  }

  return [...best.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ doc: d, term }) => ({
      id: d.id,
      title: d.title,
      route: d.route,
      image: d.image || '',
      typeLabel: d.typeLabel || '記事',
      date: d.date || '',
      // Noi ro vi sao goi y bai nay
      matched: term,
    }))
}

export default defineEventHandler((event) => {
  const id = String(getRouterParam(event, 'id') || '')
  const { docs, nutrition, products } = getStore()

  const doc = docs.find((d: any) => d.type === 'recipe' && d.id === `recipe:${id}`)
  if (!doc) throw createError({ statusCode: 404, statusMessage: 'レシピが見つかりません' })

  const ingredients = doc.ingredients || []
  const promoByName = new Map(activePromos().map((p: any) => [p.productName, p]))
  const productByName = new Map(products.map((p: any) => [p.name, p]))

  const enriched = ingredients.map((ing: any) => {
    const clean = String(ing.name)
      .replace(/^[A-Za-z][）)．.、,]\s*/, '')
      .replace(/[（(].*?[）)]/g, '')
      .trim()
    return {
      ...ing,
      cleanName: clean,
      uriba: uribaOf(clean),
      product: productByName.get(clean) || null,
      promo: promoByName.get(clean) || null,
    }
  })

  return {
    id,
    title: doc.title,
    image: doc.image,
    cookTime: doc.cookTime || '',
    serving: doc.serving || '',
    externalUrl: doc.externalUrl || '',
    hasVideo: !!doc.hasVideo,
    steps: doc.steps || [],
    point: doc.point || '',
    ingredients: enriched,
    // Nhóm theo quầy — dùng cho danh sách đi chợ và highlight sơ đồ 売場
    byUriba: groupByUriba(enriched.map((i: any) => ({ name: i.cleanName, amount: i.amount }))),
    // Ưu tiên dinh dưỡng THẬT từ Kitchen365; chỉ dùng số DEMO khi không có.
    // 448/1002 món có số thật (kcal, muối, đạm, béo, đường, chất xơ, canxi).
    nutrition: doc.nutrition?.real
      ? { ...doc.nutrition, real: true, title: doc.title, serving: doc.serving || '' }
      : nutrition.find((n: any) => n.recipeId === `recipe:${id}`) || null,
    chef: doc.chef || '',
    issue: doc.issue || '',
    lead: doc.lead || '',
    source: doc.source || 'cms',
    category: doc.category || [],
    related: findRelated(doc, docs),
    relatedArticles: findRelatedArticles(
      doc,
      docs,
      enriched.filter((i: any) => MAIN.has(i.uriba)).map((i: any) => i.cleanName)
    ),
    demo: true,
  }
})
