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

//#region app/pages/company/index.vue
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
				text: "会社情報",
				disabled: true,
				href: "/company"
			}],
			companyList: [
				{
					"to": "/company/profile/",
					"imgAlt": "会社概要・沿革",
					"url": "/assets/images/photo01 (46).webp",
					"title": "会社概要・沿革"
				},
				{
					"to": "/company/message/",
					"imgAlt": "トップメッセージ",
					"url": "/assets/images/photo03 (32).webp",
					"title": "トップメッセージ"
				},
				{
					"to": "/company/green/",
					"imgAlt": "環境への取り組み",
					"url": "/assets/images/photo04 (4).webp",
					"title": "環境への取り組み"
				},
				{
					"to": "/company/social/",
					"imgAlt": "社会活動への取り組み",
					"url": "/assets/images/photo05 (2).webp",
					"title": "社会活動への取り組み"
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_ProductItem = ProductItem_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-8ae8152f><main data-v-8ae8152f>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-8ae8152f>会社情報</h2> <p class="lead d-none-mobile" data-v-8ae8152f>私たちは、近隣のお客様に安全・安心で新鮮な美味しい食品と<br data-v-8ae8152f>楽しいお買物を笑顔で提供し続けます</p> <p class="lead d-none-des" data-v-8ae8152f>私たちは、近隣のお客様に安全・安心で新鮮な美味しい食品と楽しいお買物を笑顔で提供し続けます。</p> <p class="textAC" data-v-8ae8152f>地域の皆様とともに歩んで50年余<br data-v-8ae8152f>県西部の業界ナンバーワンの店として、歩み続けられる努力を続ける<br class="d-none-mobile" data-v-8ae8152f>遠鉄ストアの企業理念や社会貢献活動の取り組みをご紹介します。</p> <div class="product-list" data-v-8ae8152f><!--[-->`);
	ssrRenderList($data.companyList, (company, index) => {
		_push(ssrRenderComponent(_component_ProductItem, {
			key: index,
			service: company
		}, null, _parent));
	});
	_push(`<!--]--></div> `);
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var company_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8ae8152f"]]);

export { company_default as default };
//# sourceMappingURL=company-D1_EiDgB.mjs.map
