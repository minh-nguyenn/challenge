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

//#region app/pages/company/green/index.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		ProductItem: ProductItem_default
	},
	data() {
		return {
			breadcrumbItems: [
				{
					text: "ホーム",
					disabled: false,
					href: "/"
				},
				{
					text: "会社情報",
					disabled: false,
					href: "/company"
				},
				{
					text: "環境への取り組み",
					disabled: true,
					href: "/company/company"
				}
			],
			services: [
				{
					"to": "/company/green/recycle",
					"imgAlt": "資源回収",
					"url": "/assets/images/photo01 (47).webp",
					"title": "資源回収"
				},
				{
					"to": "/company/green/eco",
					"imgAlt": "エコトレー",
					"url": "/assets/images/photo03 (33).webp",
					"title": "エコトレー"
				},
				{
					"to": "/company/green/food",
					"imgAlt": "食品リサイクル",
					"url": "/assets/images/company/green/logo_food.webp",
					"title": "食品リサイクル"
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "環境への取り組み｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_ProductItem = ProductItem_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-64045352><main data-v-64045352>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-64045352>環境への取り組み</h2> <p class="lead" data-v-64045352>
        私たちは牛乳パックやトレイの回収、
        <br data-v-64045352>
        簡易包装の推進、物流システムの効率化にと、
        <br data-v-64045352>
        エコロジー問題や省資源問題に積極的に取り組んでいます。
      </p> <div class="product-list" data-v-64045352><!--[-->`);
	ssrRenderList($data.services, (service, index) => {
		_push(ssrRenderComponent(_component_ProductItem, {
			key: index,
			service
		}, null, _parent));
	});
	_push(`<!--]--></div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/company"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/green/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var green_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-64045352"]]);

export { green_default as default };
//# sourceMappingURL=green-Dzh9OiR3.mjs.map
