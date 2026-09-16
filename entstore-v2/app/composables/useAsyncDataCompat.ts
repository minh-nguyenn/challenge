/**
 * Cau noi cho asyncData() cua Nuxt 2.
 *
 * Nuxt 2 goi asyncData(context) trước khi dựng component rồi trộn kết quả vào
 * data(). Nuxt 4 khong con co che nay. Thay vi viet lai 23 trang bang tay,
 * ta dung mixin: goi asyncData() voi mot context gia (dung 4 thu ma cac trang
 * that su dung: query, params, $microcms, error) roi tron ket qua vao data.
 *
 * Ghi chu: chay o setup() nen VAN la server-side render nhu ban goc.
 */
export function buildLegacyContext() {
  const route = useRoute()
  return {
    query: route.query,
    params: route.params,
    route,
    $microcms: useMicrocms(),
    $config: useRuntimeConfig().public,
    app: {},
    error: (e: any) =>
      showError({
        statusCode: e?.statusCode || 500,
        statusMessage: e?.message || 'Loi',
      }),
  }
}
