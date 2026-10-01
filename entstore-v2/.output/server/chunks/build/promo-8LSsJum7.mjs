import { _ as _plugin_vue_export_helper_default, $ as $fetch$1, u as useHead$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DnhXVmPR.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { u as useCart } from './useCart-DarJ4RET.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { ref, withAsyncContext, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
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

//#region app/pages/promo.vue
var DAY = 864e5;
var _sfc_main = {
	__name: "promo",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		useCart();
		const uriba = ref("");
		const breadcrumbItems = [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "特売情報",
			disabled: true,
			href: "/promo"
		}];
		const { data, pending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("promo-page", async () => {
			const [promos, products] = await Promise.all([$fetch$1("/api/promos").catch(() => ({ items: [] })), $fetch$1("/api/products").catch(() => ({ items: [] }))]);
			return {
				promos: promos.items || [],
				products: products.items || []
			};
		})), __temp = await __temp, __restore(), __temp);
		const items = computed(() => data.value?.promos || []);
		computed(() => new Map((data.value?.products || []).map((p) => [p.name, p])));
		const daysLeft = (p) => Math.ceil((new Date(p.endDate).getTime() - Date.now()) / DAY);
		const endingSoon = computed(() => items.value.filter((p) => daysLeft(p) <= 1));
		function leftLabel(p) {
			const d = daysLeft(p);
			if (d <= 0) return "本日最終日";
			if (d === 1) return "あと1日";
			return `あと${d}日`;
		}
		function fmt(iso) {
			const d = new Date(iso);
			return `${d.getMonth() + 1}月${d.getDate()}日`;
		}
		/** Các quầy thực sự có hàng khuyến mãi — không liệt kê quầy rỗng trong bộ lọc */
		const usedUriba = computed(() => {
			const keys = new Set(items.value.map((p) => p.uriba));
			return URIBA.filter((u) => keys.has(u.key));
		});
		const grouped = computed(() => {
			const list = uriba.value ? items.value.filter((p) => p.uriba === uriba.value) : items.value;
			const map = /* @__PURE__ */ new Map();
			for (const p of list) {
				const k = p.uriba || "grocery";
				if (!map.has(k)) map.set(k, []);
				map.get(k).push(p);
			}
			return URIBA.filter((u) => map.has(u.key)).map((u) => ({
				...u,
				items: map.get(u.key).sort((a, b) => b.discountPercent - a.discountPercent)
			}));
		});
		useHead$1({ title: "特売情報｜遠鉄ストア" });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_VxBreadcrumbs = _sfc_main$1;
			const _component_ClientOnly = ClientOnly;
			const _component_NuxtLink = NuxtLink;
			const _component_AppButtonNavigation = ButtonNavigation_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content page-pad" }, _attrs))} data-v-e9f41628><main data-v-e9f41628>`);
			_push(ssrRenderComponent(_component_VxBreadcrumbs, {
				items: breadcrumbItems,
				divider: ">"
			}, null, _parent));
			_push(` <h2 data-v-e9f41628>特売情報</h2> `);
			if (unref(pending)) _push(`<p class="pm-loading" data-v-e9f41628>読み込み中…</p>`);
			else {
				_push(`<!--[--><p class="pm-lead" data-v-e9f41628><span class="pm-badge-demo" data-v-e9f41628>DEMO</span>
          価格はデモ用の仮データです。
          <strong data-v-e9f41628>終了日を過ぎた特売は自動でこの一覧から外れます。</strong></p> `);
				if (!items.value.length) _push(`<div class="pm-empty" data-v-e9f41628><p data-v-e9f41628>現在実施中の特売はありません。</p></div>`);
				else {
					_push(`<!--[--><div class="pm-bar" data-v-e9f41628><p class="pm-count" data-v-e9f41628>
              実施中 <strong data-v-e9f41628>${ssrInterpolate(items.value.length)}</strong> 件
              `);
					if (endingSoon.value.length) _push(`<span class="pm-soon-n" data-v-e9f41628>
                / まもなく終了 ${ssrInterpolate(endingSoon.value.length)} 件
              </span>`);
					else _push(`<!---->`);
					_push(`</p> <div class="pm-filter" data-v-e9f41628><label for="pm-uriba" data-v-e9f41628>売場</label> <select id="pm-uriba" class="pm-select" data-v-e9f41628><option value="" data-v-e9f41628${ssrIncludeBooleanAttr(Array.isArray(uriba.value) ? ssrLooseContain(uriba.value, "") : ssrLooseEqual(uriba.value, "")) ? " selected" : ""}>すべて</option> <!--[-->`);
					ssrRenderList(usedUriba.value, (u) => {
						_push(`<option${ssrRenderAttr("value", u.key)} data-v-e9f41628${ssrIncludeBooleanAttr(Array.isArray(uriba.value) ? ssrLooseContain(uriba.value, u.key) : ssrLooseEqual(uriba.value, u.key)) ? " selected" : ""}>${ssrInterpolate(u.label)}</option>`);
					});
					_push(`<!--]--></select></div></div> <!--[-->`);
					ssrRenderList(grouped.value, (g) => {
						_push(`<section class="pm-group" data-v-e9f41628><h3 class="pm-group-head" data-v-e9f41628><span class="pm-dot" style="${ssrRenderStyle({ background: g.color })}" data-v-e9f41628></span> ${ssrInterpolate(g.label)}<small data-v-e9f41628>／${ssrInterpolate(g.desc)}</small> <span class="pm-group-n" data-v-e9f41628>${ssrInterpolate(g.items.length)} 件</span></h3> <ul class="pm-list" data-v-e9f41628><!--[-->`);
						ssrRenderList(g.items, (p) => {
							_push(`<li class="${ssrRenderClass([{ soon: daysLeft(p) <= 1 }, "pm-card"])}" data-v-e9f41628><div class="pm-card-main" data-v-e9f41628><p class="pm-name" data-v-e9f41628>${ssrInterpolate(p.productName)}</p> `);
							if (p.note) _push(`<p class="pm-note" data-v-e9f41628>${ssrInterpolate(p.note)}</p>`);
							else _push(`<!---->`);
							_push(` <p class="pm-until" data-v-e9f41628><span class="pm-until-badge"${ssrRenderAttr("data-soon", daysLeft(p) <= 1)} data-v-e9f41628>${ssrInterpolate(leftLabel(p))}</span> ${ssrInterpolate(fmt(p.endDate))}まで
                  </p></div> <div class="pm-card-price" data-v-e9f41628><span class="pm-badge-demo sm" data-v-e9f41628>DEMO</span> <span class="pm-price-old" data-v-e9f41628>${ssrInterpolate(p.normalPrice)}円</span> <span class="pm-price-new" data-v-e9f41628>${ssrInterpolate(p.salePrice)}円</span> <span class="pm-off" data-v-e9f41628>${ssrInterpolate(p.discountPercent)}%OFF</span></div> <div class="pm-card-act" data-v-e9f41628>`);
							_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
							_push(` `);
							_push(ssrRenderComponent(_component_NuxtLink, {
								class: "pm-btn",
								to: `/search?q=${encodeURIComponent(p.productName)}`
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`
                    レシピを探す
                  `);
									else return [createTextVNode("\n                    レシピを探す\n                  ")];
								}),
								_: 2
							}, _parent));
							_push(`</div></li>`);
						});
						_push(`<!--]--></ul></section>`);
					});
					_push(`<!--]--><!--]-->`);
				}
				_push(`<!--]-->`);
			}
			_push(` `);
			_push(ssrRenderComponent(_component_AppButtonNavigation, {
				class: "d-none-mobile pm-back",
				title: "前のページへ戻る",
				"is-back": "",
				href: "/"
			}, null, _parent));
			_push(`</main></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/promo.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var promo_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-e9f41628"]]);

export { promo_default as default };
//# sourceMappingURL=promo-8LSsJum7.mjs.map
