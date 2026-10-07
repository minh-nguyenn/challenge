import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { u as useCart } from './useCart-DarJ4RET.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { computed, useSSRContext } from 'vue';
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

//#region app/pages/cart.vue
var _sfc_main = {
	__name: "cart",
	__ssrInlineRender: true,
	setup(__props) {
		useCart();
		const breadcrumbItems = computed(() => [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "カート",
			disabled: true,
			href: "/cart"
		}]);
		useHead$1({ title: "カート｜遠鉄ストア" });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_VxBreadcrumbs = _sfc_main$1;
			const _component_ClientOnly = ClientOnly;
			const _component_AppButtonNavigation = ButtonNavigation_default;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-9ab8a67c><div class="wrap-content page-pad" data-v-9ab8a67c><main data-v-9ab8a67c>`);
			_push(ssrRenderComponent(_component_VxBreadcrumbs, {
				items: breadcrumbItems.value,
				divider: ">"
			}, null, _parent));
			_push(` <h2 data-v-9ab8a67c>カート</h2> `);
			_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
			_push(` `);
			_push(ssrRenderComponent(_component_AppButtonNavigation, {
				class: "d-none-mobile ct-back",
				title: "前のページへ戻る",
				"is-back": "",
				href: "/"
			}, null, _parent));
			_push(`</main></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var cart_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-9ab8a67c"]]);

export { cart_default as default };
//# sourceMappingURL=cart-VXCjsTFw.mjs.map
