import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/company/social/food.vue
var _sfc_main = {
	components: { AppButtonNavigation: ButtonNavigation_default },
	data() {
		return { breadcrumbItems: [
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
				disabled: false,
				href: "/company/social"
			},
			{
				text: "食育体験",
				disabled: true,
				href: "/company/social/food"
			}
		] };
	},
	setup() {
		useHead$1({ title: "食育体験｜社会活動への取り組み｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-e8cf5513><main data-v-e8cf5513>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-e8cf5513>食育体験</h2> <p class="textAC mobile-box mb-0" data-v-e8cf5513>食育とは、健康的な生活を送るために、食に関するあらゆる知識を育むことです。<br data-v-e8cf5513>遠鉄ストアでは各メーカーとタイアップし、さまざまな企画を進めてまいります。</p> <p class="textAC mobile-box" data-v-e8cf5513>参加者募集等については、当サイトトップページまたは店頭にあるチラシをご覧ください。</p> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/company/social"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/social/food.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var food_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e8cf5513"]]);

export { food_default as default };
//# sourceMappingURL=food-Bx6fIogE.mjs.map
