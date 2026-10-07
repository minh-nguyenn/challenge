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

//#region app/pages/news/detail/preview.vue
var _sfc_main = {
	components: { AppButtonNavigation: ButtonNavigation_default },
	async setup() {
		const __nuxtApp = useNuxtApp();
		const { query, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const { id } = query;
			const { draftKey } = query;
			return { newsDetail: await $microcms.get({
				endpoint: `store-news/${id}`,
				queries: draftKey ? { draftKey } : {}
			}) };
		}, "$NGHeu419mv");
		__nuxtApp.runWithContext(() => useHead$1({ title: `${__d.value?.newsDetail.title?.replaceAll("<br>", "") || ""}｜企業情報・ニュースリリース｜遠鉄ストア` }));
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
				text: "企業情報・ニュースリリース",
				disabled: false,
				href: "/news/"
			},
			{
				text: this.newsDetail.title?.replaceAll("<br>", "") || "",
				disabled: true
			}
		];
	} },
	methods: { formatDateYMD }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-9c717386><main data-v-9c717386>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $options.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <p class="date mobile-box d-none-des" data-v-9c717386>${ssrInterpolate($options.formatDateYMD(_ctx.newsDetail.post_date))}</p> <h2 class="news-title" data-v-9c717386>${_ctx.newsDetail.title ?? ""}</h2> <div class="textAC" data-v-9c717386>${_ctx.$transformImageSrc(_ctx.newsDetail.body) ?? ""}</div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		"is-back": "",
		href: "/news",
		title: "前のページへ戻る",
		class: "d-none-mobile"
	}, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		"is-back": "",
		href: "/news",
		title: "一覧へ戻る",
		class: "d-none-des custom-btn-info",
		"long-btn": ""
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/detail/preview.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var preview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9c717386"]]);

export { preview_default as default };
//# sourceMappingURL=preview-Ccz8xHSZ.mjs.map
