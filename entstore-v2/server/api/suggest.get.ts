// Goi y khi go trong o tim kiem. Cat query o 50 ky tu cho re.
import { suggest } from '~~/shared/search-engine.mjs'

export default defineEventHandler((event) => {
  const q = String(getQuery(event).q || '').slice(0, 50)
  if (!q.trim()) return { items: [] }
  const { docs } = getStore()
  return { items: suggest(docs, q, 8) }
})
