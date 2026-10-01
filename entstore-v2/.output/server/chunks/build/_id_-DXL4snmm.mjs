import { _ as _plugin_vue_export_helper_default, b as useNuxtApp, a as useRoute$2, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { a as formatDateYMD } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/pages/info/detail/[id].vue
var _sfc_main = {
	components: { AppButtonNavigation: ButtonNavigation_default },
	async setup() {
		const __nuxtApp = useNuxtApp();
		const { params, $microcms} = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			return { infoDetail: await $microcms.get({ endpoint: `store-info/${params.id}` }) };
		}, "$nH0yWKSiGK");
		__nuxtApp.runWithContext(() => useHead$1({ title: `${__d.value?.infoDetail.title?.replaceAll("<br>", "") || ""}｜遠鉄ストアからのお知らせ｜遠鉄ストア` }));
		return { ...__d.value || {} };
	},
	data() {
		return {};
	},
	computed: { breadcrumbItems() {
		return [
			{
				text: "ホーム",
				disabled: false,
				href: "/"
			},
			{
				text: "遠鉄ストアからのお知らせ",
				disabled: false,
				href: "/info/"
			},
			{
				text: this.infoDetail.title?.replaceAll("<br>", "") || "",
				disabled: true
			}
		];
	} },
	methods: { formatDateYMD }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content detail-info-custom" }, _attrs))} data-v-d91e23a9><main data-v-d91e23a9>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $options.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <p class="date mobile-box d-none-des" data-v-d91e23a9>${ssrInterpolate($options.formatDateYMD(_ctx.infoDetail.post_date))}</p> <h2 class="info-title" data-v-d91e23a9>${_ctx.infoDetail.title ?? ""}</h2> <div class="textAC mobile-box text-left detail-data-custom" data-v-d91e23a9>${_ctx.$transformImageSrc(_ctx.infoDetail.body) ?? ""}</div></main> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		"is-back": "",
		href: "/info",
		class: "d-none-mobile",
		title: "前のページへ戻る"
	}, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		"is-back": "",
		href: "/info",
		class: "d-none-des custom-btn-info",
		title: "一覧へ戻る",
		"long-btn": ""
	}, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/info/detail/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d91e23a9"]]);

export { _id__default as default };
//# sourceMappingURL=_id_-DXL4snmm.mjs.map
