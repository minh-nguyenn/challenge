import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { P as ProductItem_default } from './ProductItem-BO1Zh4qw.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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

//#region app/pages/service/index.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		ProductItem: ProductItem_default
	},
	data() {
		return {
			breadcrumbItems: [{
				text: "ホーム",
				disabled: false,
				href: "/"
			}, {
				text: "サービス",
				disabled: true,
				href: "/service"
			}],
			services: [
				{
					"to": "/service/cooking/",
					"imgAlt": "調理サービス",
					"url": "/assets/images/photo01.webp",
					"title": "調理サービス"
				},
				{
					"to": "/service/item/",
					"imgAlt": "商品サービス",
					"url": "/assets/images/photo02 (35).webp",
					"title": "商品サービス"
				},
				{
					"to": "/service/counter/",
					"imgAlt": "サービスカウンター取り扱い",
					"url": "/assets/images/photo03 (1).webp",
					"title": "サービスカウンター取り扱い"
				},
				{
					"to": "/service/recipe/",
					"imgAlt": "遠鉄ストアおすすめレシピ",
					"url": "/assets/images/photo04 (2).webp",
					"title": "遠鉄ストアおすすめレシピ"
				},
				{
					"to": "/pickup/mizu/",
					"imgAlt": "おいしい水",
					"url": "/assets/images/photo05 (1).webp",
					"title": "おいしい水"
				},
				{
					"to": "/service/idosuper/",
					"imgAlt": "遠鉄ストアの移動スーパー",
					"url": "/assets/images/photo08.webp",
					"title": "遠鉄ストアの移動スーパー"
				},
				{
					"to": "/service/line/",
					"imgAlt": "LINE公式アカウント友だち募集中！",
					"url": "/assets/images/photo07.webp",
					"title": "LINE公式アカウント友だち募集中！"
				},
				{
					"to": "/service/smart-receipt/",
					"imgAlt": "スマートレシート",
					"url": "/assets/images/photo09.webp",
					"title": "スマートレシート"
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "サービス｜遠鉄ストア" });
	},
	methods: { openPdfInNewTab(item) {
		if (item.showPdf) {
			const pdfUrl = "/assets/pdf/20231219_最新_ツィディチラシ_A4.pdf".default;
			(void 0).open(pdfUrl).focus();
		}
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_ProductItem = ProductItem_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-ba72dd83><main data-v-ba72dd83>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-ba72dd83>サービス</h2> <div class="main-content" data-v-ba72dd83><p class="lead d-none-mobile" data-v-ba72dd83>ご存じでしたか？<br data-v-ba72dd83>  毎日のお買い物がもっとらくちんになる<br data-v-ba72dd83>遠鉄ストアの便利なサービス</p> <p class="lead d-none-des" data-v-ba72dd83>ご存じでしたか？<br data-v-ba72dd83>毎日のお買い物がもっとらくちんになる<br data-v-ba72dd83>遠鉄ストアの便利なサービス</p> <p class="textAC" data-v-ba72dd83>お客様のご要望にお応えいたします。お気軽に従業員までお申し出下さい。</p> <div class="product-list service-product-list" data-v-ba72dd83><!--[-->`);
	ssrRenderList($data.services, (service, index) => {
		_push(ssrRenderComponent(_component_ProductItem, {
			key: index,
			service,
			onDetailService: ($event) => $options.openPdfInNewTab(service)
		}, null, _parent));
	});
	_push(`<!--]--></div></div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var service_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ba72dd83"]]);

export { service_default as default };
//# sourceMappingURL=service-B6DeZvpt.mjs.map
