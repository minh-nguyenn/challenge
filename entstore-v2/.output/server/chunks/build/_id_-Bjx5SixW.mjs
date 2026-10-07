import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { p as photo_pdf_default } from './photo_pdf-Bf3D9r8z.mjs';
import { i as ico_arrow01_default } from './ico_arrow01-CM4m5EZn.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import moment from 'moment';
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

//#region app/pages/chirashi/pdf/preview/[id].vue
moment.locale("ja");
var _sfc_main = {
	async setup() {
		useHead$1({ title: "チラシPDF閲覧｜今週のチラシ情報｜遠鉄ストア" });
		const { query, error, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const { id } = query;
			const { draftKey } = query;
			try {
				const response = await $microcms.get({
					endpoint: "store-chirashi",
					contentId: id,
					queries: draftKey ? { draftKey } : {}
				});
				const data = [];
				if (response) data.push(response);
				return { chirashis: data };
			} catch (e) {
				return error({
					statusCode: 404,
					message: "Chirashi not found"
				});
			}
		}, "$m9A9E2HAl8");
		return { ...__d.value || {} };
	},
	data() {
		return { defaultThumbnail: photo_pdf_default };
	},
	computed: {},
	mounted() {
		console.log(this.chirashis);
	},
	methods: { formatJapaneseDateRange(startStr, endStr) {
		const start = moment(startStr).add(1, "day");
		const end = moment(endStr).add(1, "day");
		return `${start.format("YYYY年 MM月 DD日(ddd)")}～${end.format("YYYY年 MM月 DD日(ddd)")}`;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content wrap-chirashi-pdf" }, _attrs))} data-v-73337e41><main data-v-73337e41>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: _ctx.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-73337e41>チラシPDF閲覧</h2> <p class="textAC" data-v-73337e41>折り込みチラシのデータをPDFで掲載しています。</p> <p class="chirashi" data-v-73337e41><a href="/chirashi/" class="web" data-v-73337e41><img${ssrRenderAttr("src", ico_arrow01_default)} width="24" height="24" alt="" data-v-73337e41><span data-v-73337e41>Web表示にする方はこちら</span></a></p> <h2 class="h2Title d-none-des" data-v-73337e41>チラシ一覧</h2> <div class="list-pdf" data-v-73337e41><!--[-->`);
	ssrRenderList(_ctx.chirashis, (chirashi, index) => {
		_push(`<a${ssrRenderAttr("href", chirashi?.pdf?.url)} target="_blank" class="item" data-v-73337e41><img${ssrRenderAttr("src", chirashi.thumbnail && chirashi.thumbnail.url ? _ctx.$appendWebpFormat(chirashi.thumbnail.url) : $data.defaultThumbnail)} alt="PDFチラシ" data-v-73337e41> <span data-v-73337e41>${ssrInterpolate($options.formatJapaneseDateRange(chirashi.title_date_start, chirashi.title_date_end))}<br data-v-73337e41><i data-v-73337e41>${ssrInterpolate(chirashi?.title)}</i></span></a>`);
	});
	_push(`<!--]--></div></main> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile custom-chirashi-back",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/chirashi"
	}, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chirashi/pdf/preview/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-73337e41"]]);

export { _id__default as default };
//# sourceMappingURL=_id_-Bjx5SixW.mjs.map
