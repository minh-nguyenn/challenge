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

//#region app/pages/company/social/index.vue
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
					text: "社会活動への取り組み",
					disabled: true,
					href: "/company/social"
				}
			],
			socialData: [
				{
					"to": "/company/social/cgc",
					"imgAlt": "全国児童画コンクール",
					"url": "/assets/images/photo01 (48).webp",
					"title": "全国児童画コンクール"
				},
				{
					"to": "/company/social/food",
					"imgAlt": "食育体験",
					"url": "/assets/images/photo03 (35).webp",
					"title": "食育体験"
				},
				{
					"to": "/company/social/sports",
					"imgAlt": "スポーツ・体育へのサポート",
					"url": "/assets/images/sport01.webp",
					"title": "スポーツ・体育へのサポート"
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "社会活動への取り組み｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_ProductItem = ProductItem_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-a4b25cf3><main data-v-a4b25cf3>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-a4b25cf3>社会活動への取り組み</h2> <p class="lead d-none-mobile" data-v-a4b25cf3>地域の皆様の豊かな生活文化実現のための<br data-v-a4b25cf3>社会貢献活動に取り組んでいます。</p> <p class="lead d-none-des" data-v-a4b25cf3>私たちは牛乳パックやトレイの回収、簡易包装の推進、物流システムの効率化にと、エコロジー問題や省資源問題に積極的に取組んでいます。</p> <div class="product-list" data-v-a4b25cf3><!--[-->`);
	ssrRenderList($data.socialData, (social, index) => {
		_push(ssrRenderComponent(_component_ProductItem, {
			key: index,
			service: social
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/social/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var social_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a4b25cf3"]]);

export { social_default as default };
//# sourceMappingURL=social-BPynk4ZU.mjs.map
