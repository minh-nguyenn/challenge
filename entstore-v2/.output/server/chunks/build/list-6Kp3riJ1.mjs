import { _ as _plugin_vue_export_helper_default, $ as $fetch$1, u as useHead$1 } from '../virtual/entry.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { u as useShoppingList, U as UribaMapModal_default } from './UribaMapModal-jgq0fKHv.mjs';
import { ref, withAsyncContext, computed, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as URIBA } from '../_/uriba.mjs';
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

//#region app/pages/list.vue
var _sfc_main = {
	__name: "list",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		/**
		* Trang 買い物リスト — slide 6 và 7.
		*
		* Nguyên liệu nhóm theo 売場 để khách đi một vòng siêu thị là mua đủ,
		* và mở được sơ đồ quầy tự highlight.
		*
		* ⚠️ Giá là số ẢO, luôn kèm badge 「DEMO」.
		*/
		const { items, uribaKeys} = useShoppingList();
		const mapOpen = ref(false);
		const breadcrumbItems = [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "買い物リスト",
			disabled: true,
			href: "/list"
		}];
		const { data: productData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("demo-products", () => $fetch$1("/api/products").catch(() => ({ items: [] })))), __temp = await __temp, __restore(), __temp);
		const priceMap = computed(() => new Map((productData.value?.items || []).map((p) => [p.name, p])));
		function priceOf(name) {
			return priceMap.value.get(name) || null;
		}
		computed(() => {
			const map = /* @__PURE__ */ new Map();
			for (const it of items.value) {
				const k = it.uriba || "grocery";
				if (!map.has(k)) map.set(k, []);
				map.get(k).push(it);
			}
			return URIBA.filter((u) => map.has(u.key)).map((u) => ({
				...u,
				items: map.get(u.key)
			}));
		});
		computed(() => items.value.reduce((sum, it) => {
			const p = priceOf(it.name);
			return sum + (p ? p.price * it.qty : 0);
		}, 0));
		useHead$1({ title: "買い物リスト｜遠鉄ストア" });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_VxBreadcrumbs = _sfc_main$1;
			const _component_ClientOnly = ClientOnly;
			const _component_AppButtonNavigation = ButtonNavigation_default;
			const _component_UribaMapModal = UribaMapModal_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-ab41f5a1><main data-v-ab41f5a1>`);
			_push(ssrRenderComponent(_component_VxBreadcrumbs, {
				items: breadcrumbItems,
				divider: ">"
			}, null, _parent));
			_push(` <h2 data-v-ab41f5a1>買い物リスト</h2> `);
			_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<p class="sl-hint" data-v-ab41f5a1${_scopeId}>読み込み中…</p>`);
				else return [createVNode("p", { class: "sl-hint" }, "読み込み中…")];
			}) }, _parent));
			_push(` `);
			_push(ssrRenderComponent(_component_AppButtonNavigation, {
				class: "d-none-mobile sl-back",
				title: "前のページへ戻る",
				"is-back": "",
				href: "/"
			}, null, _parent));
			_push(`</main> `);
			_push(ssrRenderComponent(_component_UribaMapModal, {
				modelValue: mapOpen.value,
				"onUpdate:modelValue": ($event) => mapOpen.value = $event,
				highlight: unref(uribaKeys),
				title: "売場マップ（買い物リスト連動）"
			}, null, _parent));
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/list.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var list_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-ab41f5a1"]]);

export { list_default as default };
//# sourceMappingURL=list-6Kp3riJ1.mjs.map
