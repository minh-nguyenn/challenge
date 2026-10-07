import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { c as checkLengthTitle, a as formatDateYMD, f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import _isEmpty from 'lodash/isEmpty.js';
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

//#region app/assets/images/img_noimgdark.webp
var img_noimgdark_default = "data:image/webp;base64,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";
//#endregion
//#region app/pages/info/index.vue
var _sfc_main = {
	components: { AppButtonNavigation: ButtonNavigation_default },
	async setup() {
		useHead$1({ title: "遠鉄ストアからのお知らせ｜遠鉄ストア" });
		const { $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			return { infoData: (await fetchDataV2($microcms, {
				endpoint: "store-info",
				orders: "-post_date"
			})).contents || [] };
		}, "$L17r-dzssj");
		return { ...__d.value || {} };
	},
	data() {
		return { breadcrumbItems: [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "遠鉄ストアからのお知らせ",
			disabled: true,
			href: "/info"
		}] };
	},
	methods: {
		_isEmpty,
		formatDateYMD,
		checkLengthTitle
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-04dce7a3><main data-v-04dce7a3>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-04dce7a3>
        遠鉄ストアからのお知らせ
      </h2> <div class="wrap-info d-none-mobile" data-v-04dce7a3><!--[-->`);
	ssrRenderList(_ctx.infoData, (item) => {
		_push(`<section class="info-item" data-v-04dce7a3><p class="mb-0" data-v-04dce7a3>`);
		if (item.thumbnail && item.thumbnail.url) _push(`<img${ssrRenderAttr("src", _ctx.$appendWebpFormat(item.thumbnail.url))} alt="" class="thum" data-v-04dce7a3>`);
		else _push(`<img${ssrRenderAttr("src", img_noimgdark_default)} class="thum" data-v-04dce7a3>`);
		_push(` <div class="contentInner" data-v-04dce7a3><time data-v-04dce7a3>${ssrInterpolate($options.formatDateYMD(item.post_date))}</time> <span data-v-04dce7a3>${$options.checkLengthTitle(item.title, 100).replaceAll("<br>", "") ?? ""}</span> <a class="d-block"${ssrRenderAttr("href", `/info/detail/${item.id}`)} data-v-04dce7a3>詳細はこちら</a></div></p></section>`);
	});
	_push(`<!--]--></div> <div class="wrap-info d-none-des" data-v-04dce7a3><!--[-->`);
	ssrRenderList(_ctx.infoData, (item) => {
		_push(`<section class="newsList" data-v-04dce7a3><a${ssrRenderAttr("href", `/info/detail/${item.id}`)} data-v-04dce7a3><figure data-v-04dce7a3>`);
		if (item.thumbnail && item.thumbnail.url) _push(`<img${ssrRenderAttr("src", _ctx.$appendWebpFormat(item.thumbnail.url))} alt="" class="fullImage" data-v-04dce7a3>`);
		else _push(`<img${ssrRenderAttr("src", img_noimgdark_default)} class="fullImage" data-v-04dce7a3>`);
		_push(`</figure> <div class="txt" data-v-04dce7a3><p class="date" data-v-04dce7a3>${ssrInterpolate($options.formatDateYMD(item.post_date))}</p> <div class="info-title" data-v-04dce7a3>${$options.checkLengthTitle(item.title, 100).replaceAll("<br>", "") ?? ""}</div></div></a></section>`);
	});
	_push(`<!--]--></div></main> <div class="mt-5" data-v-04dce7a3>`);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "前のページへ戻る",
		class: "d-none-mobile",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/info/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var info_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-04dce7a3"]]);

export { info_default as default };
//# sourceMappingURL=info-qxrxPjaV.mjs.map
