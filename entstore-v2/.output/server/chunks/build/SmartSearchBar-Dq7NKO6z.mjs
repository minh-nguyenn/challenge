import { _ as _plugin_vue_export_helper_default, $ as $fetch$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DnhXVmPR.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { u as useCart } from './useCart-DarJ4RET.mjs';
import { ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';

//#region app/components/SmartSearchBar.vue
var _sfc_main = {
	__name: "SmartSearchBar",
	__ssrInlineRender: true,
	props: {
		compact: {
			type: Boolean,
			default: false
		},
		initial: {
			type: String,
			default: ""
		}
	},
	setup(__props) {
		/**
		* Ô 「なんでも検索」 — slide 3 và 5 của đề xuất.
		*
		* Gồm: ô nhập có placeholder gợi ý rõ ràng, danh sách gợi ý khi gõ,
		* 人気ワード bấm một chạm, và banner 季節のおすすめ.
		*
		* Giao diện dùng đúng bảng màu của site gốc (#331e0e nâu, #f3e7cd kem,
		* #c7273b đỏ) để không lạc lõng khi chèn vào trang có sẵn.
		*/
		const cart = useCart();
		const props = __props;
		useRouter();
		const q = ref(props.initial);
		const suggestions = ref([]);
		const open = ref(false);
		const activeIndex = ref(-1);
		const box = ref(null);
		/** 人気ワード — slide 5: "人気ワードもワンタップ" */
		const popularWords = [
			"うなぎ",
			"カレー",
			"牛肉",
			"トマト",
			"弁当",
			"店舗",
			"チラシ"
		];
		/** Banner 季節のおすすめ — slide 5 nêu ví dụ 土用の丑の日 */
		const season = getSeasonBanner();
		function getSeasonBanner() {
			const m = (/* @__PURE__ */ new Date()).getMonth() + 1;
			if (m >= 7 && m <= 8) return {
				emoji: "🌞",
				title: "土用の丑の日",
				sub: "うなぎで夏を乗り切ろう",
				q: "うなぎ"
			};
			if (m >= 9 && m <= 11) return {
				emoji: "🍁",
				title: "秋の味覚",
				sub: "さんま・きのこ・栗",
				q: "きのこ"
			};
			if (m === 12 || m <= 2) return {
				emoji: "🍲",
				title: "あったか鍋特集",
				sub: "白菜・鶏肉・豆腐",
				q: "鍋"
			};
			return {
				emoji: "🌸",
				title: "春の新生活",
				sub: "お弁当・作りおき",
				q: "弁当"
			};
		}
		let timer = null;
		watch(q, (v) => {
			clearTimeout(timer);
			activeIndex.value = -1;
			if (!v || v.trim().length < 1) {
				suggestions.value = [];
				open.value = false;
				return;
			}
			timer = setTimeout(async () => {
				try {
					const r = await $fetch$1("/api/suggest", { params: { q: v } });
					suggestions.value = r.items || [];
					open.value = suggestions.value.length > 0;
				} catch {
					suggestions.value = [];
				}
			}, 180);
		});
		const narrow = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			const _component_ClientOnly = ClientOnly;
			_push(`<div${ssrRenderAttrs(mergeProps({
				ref_key: "box",
				ref: box,
				class: ["smart-search", { compact: __props.compact }]
			}, _attrs))} data-v-37cd3890><div class="ss-inner" data-v-37cd3890><div class="ss-box" data-v-37cd3890><input${ssrRenderAttr("value", q.value)} type="search" class="ss-input"${ssrRenderAttr("placeholder", narrow.value ? "商品・料理・食材・店舗で検索" : "商品名・料理名・食材・店舗名を入力（例：うなぎ、カレー、上島店…）")} aria-label="サイト内検索" data-v-37cd3890> <button type="button" class="ss-btn" data-v-37cd3890>検索</button> `);
			if (open.value) {
				_push(`<ul class="ss-suggest" data-v-37cd3890><!--[-->`);
				ssrRenderList(suggestions.value, (s, i) => {
					_push(`<li class="${ssrRenderClass({ active: i === activeIndex.value })}" data-v-37cd3890><span class="ss-tag"${ssrRenderAttr("data-group", s.group)} data-v-37cd3890>${ssrInterpolate(s.label)}</span> <span class="ss-title" data-v-37cd3890>${ssrInterpolate(s.title)}</span></li>`);
				});
				_push(`<!--]--></ul>`);
			} else _push(`<!---->`);
			_push(`</div> <nav class="ss-links" data-v-37cd3890>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/promo",
				class: "ss-link ss-link-promo"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="ss-ico" data-v-37cd3890${_scopeId}>🔥</span><span data-v-37cd3890${_scopeId}>特売情報</span>`);
					else return [createVNode("span", { class: "ss-ico" }, "🔥"), createVNode("span", null, "特売情報")];
				}),
				_: 1
			}, _parent));
			_push(` `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/products",
				class: "ss-link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="ss-ico" data-v-37cd3890${_scopeId}>🧺</span><span data-v-37cd3890${_scopeId}>商品一覧</span>`);
					else return [createVNode("span", { class: "ss-ico" }, "🧺"), createVNode("span", null, "商品一覧")];
				}),
				_: 1
			}, _parent));
			_push(` `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/list",
				class: "ss-link"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<span class="ss-ico" data-v-37cd3890${_scopeId}>📝</span><span data-v-37cd3890${_scopeId}>買い物リスト</span>`);
					else return [createVNode("span", { class: "ss-ico" }, "📝"), createVNode("span", null, "買い物リスト")];
				}),
				_: 1
			}, _parent));
			_push(` `);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/cart",
				class: "ss-link ss-link-cart"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<span class="ss-ico" data-v-37cd3890${_scopeId}>🛒</span><span data-v-37cd3890${_scopeId}>カート</span> `);
						_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent, _scopeId));
					} else return [
						createVNode("span", { class: "ss-ico" }, "🛒"),
						createVNode("span", null, "カート"),
						createTextVNode(),
						createVNode(_component_ClientOnly, null, {
							default: withCtx(() => [unref(cart).count.value > 0 ? (openBlock(), createBlock("span", {
								key: 0,
								class: "ss-cart-n"
							}, toDisplayString(unref(cart).count.value), 1)) : createCommentVNode("", true)]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`</nav> `);
			if (!__props.compact) {
				_push(`<div class="ss-extra" data-v-37cd3890><div class="ss-popular" data-v-37cd3890><span class="ss-popular-label" data-v-37cd3890>人気ワード</span> <!--[-->`);
				ssrRenderList(popularWords, (w) => {
					_push(`<button type="button" data-v-37cd3890>${ssrInterpolate(w)}</button>`);
				});
				_push(`<!--]--></div> <button type="button" class="ss-season" data-v-37cd3890><span class="ss-season-emoji" data-v-37cd3890>${ssrInterpolate(unref(season).emoji)}</span> <span class="ss-season-text" data-v-37cd3890><strong data-v-37cd3890>季節のおすすめ：${ssrInterpolate(unref(season).title)}</strong> <small data-v-37cd3890>${ssrInterpolate(unref(season).sub)}</small></span> <span class="ss-season-go" data-v-37cd3890>見る ›</span></button></div>`);
			} else _push(`<!---->`);
			_push(`</div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SmartSearchBar.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var SmartSearchBar_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-37cd3890"]]);

export { SmartSearchBar_default as S };
//# sourceMappingURL=SmartSearchBar-Dq7NKO6z.mjs.map
