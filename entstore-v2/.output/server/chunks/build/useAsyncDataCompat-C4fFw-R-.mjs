import { a as useRoute$2, s as showError, g as useRuntimeConfig, h as useMicrocms } from '../virtual/entry.mjs';

//#region app/composables/useAsyncDataCompat.ts
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
function buildLegacyContext() {
	const route = useRoute$2();
	return {
		query: route.query,
		params: route.params,
		route,
		$microcms: useMicrocms(),
		$config: useRuntimeConfig().public,
		app: {},
		error: (e) => showError({
			statusCode: e?.statusCode || 500,
			statusMessage: e?.message || "Loi"
		})
	};
}

export { buildLegacyContext as b };
//# sourceMappingURL=useAsyncDataCompat-C4fFw-R-.mjs.map
