/**
 * Thay $microcms cua site goc. Cung chu ky .get({ endpoint, queries })
 * nen fetchData/fetchDataV2 trong utils/index.js dung lai duoc nguyen ven.
 *
 * Khac ban goc: di qua /api/cms nen CMS_KEY khong bao gio ra toi client.
 */
export function useMicrocms() {
  return {
    async get({ endpoint, contentId, queries = {} }: any) {
      const params: Record<string, any> = { endpoint }
      if (contentId) params.contentId = contentId
      for (const [k, v] of Object.entries(queries)) {
        if (v === undefined || v === null || v === '') continue
        // microCMS nhan filters/fields dang chuoi; mang thi noi bang [and]
        params[k] = Array.isArray(v) ? v.join('[and]') : v
      }
      return await $fetch('/api/cms', { params })
    },
  }
}
