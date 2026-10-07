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

//#region app/pages/chirashi/pdf/index.vue
moment.locale("ja");
var _sfc_main = {
	async setup() {
		useHead$1({ title: "チラシPDF閲覧｜今週のチラシ情報｜遠鉄ストア" });
		const { $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const response = await $microcms.get({ endpoint: "store-chirashi" });
			const now = moment();
			return { chirashis: response.contents.filter((item) => {
				const start = moment(item.publish_date_start);
				const end = moment(item.publish_date_end);
				return now.isSameOrAfter(start) && now.isSameOrBefore(end);
			}) };
		}, "$TFMPRYoCKr");
		return { ...__d.value || {} };
	},
	data() {
		return { defaultThumbnail: photo_pdf_default };
	},
	computed: {},
	mounted() {},
	methods: { formatJapaneseDateRange(startStr, endStr) {
		const start = moment(startStr);
		const end = moment(endStr);
		return `${start.format("YYYY年 MM月 DD日(ddd)")}～${end.format("YYYY年 MM月 DD日(ddd)")}`;
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content wrap-chirashi-pdf" }, _attrs))} data-v-e562c972><main data-v-e562c972>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: _ctx.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-e562c972>チラシPDF閲覧</h2> <p class="textAC" data-v-e562c972>折り込みチラシのデータをPDFで掲載しています。</p> <p class="chirashi" data-v-e562c972><a href="/chirashi/" class="web" data-v-e562c972><img${ssrRenderAttr("src", ico_arrow01_default)} width="24" height="24" alt="" data-v-e562c972><span data-v-e562c972>Web表示にする方はこちら</span></a></p> <h2 class="h2Title d-none-des" data-v-e562c972>チラシ一覧</h2> <div class="list-pdf" data-v-e562c972><!--[-->`);
	ssrRenderList(_ctx.chirashis, (chirashi, index) => {
		_push(`<a${ssrRenderAttr("href", chirashi?.pdf?.url)} target="_blank" class="item" data-v-e562c972><img${ssrRenderAttr("src", chirashi.thumbnail && chirashi.thumbnail.url ? _ctx.$appendWebpFormat(chirashi.thumbnail.url) : $data.defaultThumbnail)} alt="PDFチラシ" data-v-e562c972> <span data-v-e562c972>${ssrInterpolate($options.formatJapaneseDateRange(chirashi.title_date_start, chirashi.title_date_end))}<br data-v-e562c972><i data-v-e562c972>${ssrInterpolate(chirashi?.title)}</i></span></a>`);
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chirashi/pdf/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pdf_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e562c972"]]);

export { pdf_default as default };
//# sourceMappingURL=pdf-DkGZ80g4.mjs.map
