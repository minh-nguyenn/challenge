// Khuyen mai. Mac dinh chi tra ve cai dang chay; ?all=1 tra ve ca da het han
// (trang /admin/promo can thay ca hai de doi chieu).
export default defineEventHandler((event) => {
  const all = String(getQuery(event).all || '') === '1'
  const now = new Date()

  if (!all) {
    const items = activePromos(now)
    return { demo: true, total: items.length, items, now: now.toISOString() }
  }

  const { promos } = getStore()
  const items = promos.map((p: any) => ({
    ...p,
    expired: p.endDate ? new Date(p.endDate) < now : false,
  }))
  return {
    demo: true,
    total: items.length,
    active: items.filter((p: any) => !p.expired).length,
    expired: items.filter((p: any) => p.expired).length,
    items,
    now: now.toISOString(),
  }
})
