import { _ as _plugin_vue_export_helper_default, $ as $fetch$1, u as useHead$1 } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DnhXVmPR.mjs';
import { u as useCart, E as EC_CART_URL } from './useCart-DarJ4RET.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { computed, ref, withAsyncContext, watch, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { a as URIBA, U as URIBA_BY_KEY } from '../_/uriba.mjs';
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
import 'unhead/utils';

//#region app/pages/products.vue
var PAGE = 60;
var _sfc_main = {
	__name: "products",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		/**
		* 商品一覧 — danh sách sản phẩm demo để trình diễn luồng "thêm vào giỏ".
		*
		* Trước đây data/demo-products.json có 702 sản phẩm nhưng KHÔNG trang nào liệt
		* kê chúng: chỉ thấy được khi tình cờ tìm trúng tên. Trang này cho xem cả danh
		* sách, lọc theo 売場 và khoảng giá, rồi thêm vào giỏ.
		*
		* ⚠️ Giá / tồn kho / khuyến mãi đều là số ẢO — mọi chỗ hiển thị đều kèm badge DEMO.
		*/
		const route = useRoute();
		useRouter();
		const cart = useCart();
		const q = computed(() => String(route.query.q || ""));
		const uriba = ref(String(route.query.uriba || ""));
		const maxPrice = ref(String(route.query.maxPrice || ""));
		const sort = ref(String(route.query.sort || ""));
		const shown = ref(PAGE);
		const breadcrumbItems = computed(() => [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "商品一覧",
			disabled: true,
			href: "/products"
		}]);
		const params = computed(() => ({
			q: q.value || void 0,
			uriba: uriba.value || void 0,
			maxPrice: maxPrice.value || void 0,
			sort: sort.value || void 0,
			limit: shown.value
		}));
		const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("products", () => $fetch$1("/api/products", { params: params.value }).catch(() => ({
			total: 0,
			items: []
		})), { watch: [params] })), __temp = await __temp, __restore(), __temp);
		const promoCount = computed(() => (data.value?.items || []).filter((p) => p.promo).length);
		const canLoadMore = computed(() => (data.value?.total || 0) > shown.value);
		const isFiltered = computed(() => !!(uriba.value || maxPrice.value || sort.value || q.value));
		watch([
			uriba,
			maxPrice,
			sort,
			q
		], () => {
			shown.value = PAGE;
		});
		function uribaColor(key) {
			return URIBA_BY_KEY[key]?.color || "#888";
		}
		useHead$1({ title: "商品一覧｜遠鉄ストア" });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_VxBreadcrumbs = _sfc_main$1;
			const _component_NuxtLink = NuxtLink;
			const _component_AppButtonNavigation = ButtonNavigation_default;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-ec2af757><div class="wrap-content page-pad" data-v-ec2af757><main data-v-ec2af757>`);
			_push(ssrRenderComponent(_component_VxBreadcrumbs, {
				items: breadcrumbItems.value,
				divider: ">"
			}, null, _parent));
			_push(` <h2 data-v-ec2af757>商品一覧</h2> <p class="pl-lead" data-v-ec2af757><span class="pl-badge-demo" data-v-ec2af757>DEMO</span>
          価格・在庫はデモ用の仮データです。ご購入は
          <a${ssrRenderAttr("href", unref(EC_CART_URL))} target="_blank" rel="noopener" data-v-ec2af757>遠鉄ストアネット通販</a>
          をご利用ください。
        </p> <div class="pl-filters" data-v-ec2af757><div class="pl-filter" data-v-ec2af757><label for="pl-uriba" data-v-ec2af757>売場</label> <select id="pl-uriba" class="pl-select" data-v-ec2af757><option value="" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(uriba.value) ? ssrLooseContain(uriba.value, "") : ssrLooseEqual(uriba.value, "")) ? " selected" : ""}>すべて</option> <!--[-->`);
			ssrRenderList(unref(URIBA), (u) => {
				_push(`<option${ssrRenderAttr("value", u.key)} data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(uriba.value) ? ssrLooseContain(uriba.value, u.key) : ssrLooseEqual(uriba.value, u.key)) ? " selected" : ""}>${ssrInterpolate(u.label)}</option>`);
			});
			_push(`<!--]--></select></div> <div class="pl-filter" data-v-ec2af757><label for="pl-max" data-v-ec2af757>価格</label> <select id="pl-max" class="pl-select" data-v-ec2af757><option value="" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(maxPrice.value) ? ssrLooseContain(maxPrice.value, "") : ssrLooseEqual(maxPrice.value, "")) ? " selected" : ""}>指定なし</option> <option value="200" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(maxPrice.value) ? ssrLooseContain(maxPrice.value, "200") : ssrLooseEqual(maxPrice.value, "200")) ? " selected" : ""}>200円以内</option> <option value="500" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(maxPrice.value) ? ssrLooseContain(maxPrice.value, "500") : ssrLooseEqual(maxPrice.value, "500")) ? " selected" : ""}>500円以内</option> <option value="1000" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(maxPrice.value) ? ssrLooseContain(maxPrice.value, "1000") : ssrLooseEqual(maxPrice.value, "1000")) ? " selected" : ""}>1000円以内</option> <option value="2000" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(maxPrice.value) ? ssrLooseContain(maxPrice.value, "2000") : ssrLooseEqual(maxPrice.value, "2000")) ? " selected" : ""}>2000円以内</option></select></div> <div class="pl-filter" data-v-ec2af757><label for="pl-sort" data-v-ec2af757>並び順</label> <select id="pl-sort" class="pl-select" data-v-ec2af757><option value="" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "") : ssrLooseEqual(sort.value, "")) ? " selected" : ""}>おすすめ順</option> <option value="price-asc" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "price-asc") : ssrLooseEqual(sort.value, "price-asc")) ? " selected" : ""}>価格が安い順</option> <option value="price-desc" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "price-desc") : ssrLooseEqual(sort.value, "price-desc")) ? " selected" : ""}>価格が高い順</option> <option value="name" data-v-ec2af757${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "name") : ssrLooseEqual(sort.value, "name")) ? " selected" : ""}>名前順</option></select></div> `);
			if (isFiltered.value) _push(`<button type="button" class="pl-reset" data-v-ec2af757>
            条件をクリア
          </button>`);
			else _push(`<!---->`);
			_push(`</div> `);
			if (unref(pending)) _push(`<p class="pl-loading" data-v-ec2af757>読み込み中…</p>`);
			else {
				_push(`<!--[--><p class="pl-count" data-v-ec2af757>
            全 <strong data-v-ec2af757>${ssrInterpolate(unref(data)?.total || 0)}</strong> 商品
            `);
				if (promoCount.value) _push(`<span class="pl-count-promo" data-v-ec2af757>うち特売 ${ssrInterpolate(promoCount.value)} 件</span>`);
				else _push(`<!---->`);
				_push(`</p> `);
				if (!unref(data)?.total) _push(`<p class="pl-empty" data-v-ec2af757>
            条件に合う商品が見つかりませんでした。条件を変えてお試しください。
          </p>`);
				else {
					_push(`<ul class="pl-grid" data-v-ec2af757><!--[-->`);
					ssrRenderList(unref(data).items, (p) => {
						_push(`<li class="pl-card" data-v-ec2af757><p class="pl-name" data-v-ec2af757>${ssrInterpolate(p.name)} `);
						if (p.promo) _push(`<span class="pl-tag-sale" data-v-ec2af757>🔥特売中</span>`);
						else _push(`<!---->`);
						_push(`</p> <p class="pl-meta" data-v-ec2af757><span class="pl-uriba" style="${ssrRenderStyle({ background: uribaColor(p.uriba) })}" data-v-ec2af757>${ssrInterpolate(p.uribaLabel)}</span> <span class="pl-unit" data-v-ec2af757>${ssrInterpolate(p.unit)}</span> <span class="${ssrRenderClass([{ low: p.stock !== "在庫あり" }, "pl-stock"])}" data-v-ec2af757>${ssrInterpolate(p.stock)}</span></p> <p class="pl-price" data-v-ec2af757><span class="pl-badge-demo" data-v-ec2af757>DEMO</span> `);
						if (p.promo) _push(`<!--[--><span class="pl-price-old" data-v-ec2af757>${ssrInterpolate(p.taxIncluded)}円</span> <span class="pl-price-new" data-v-ec2af757>${ssrInterpolate(p.promo.salePrice)}円</span> <span class="pl-off" data-v-ec2af757>${ssrInterpolate(p.promo.discountPercent)}%OFF</span><!--]-->`);
						else _push(`<!--[--><span class="pl-price-new" data-v-ec2af757>${ssrInterpolate(p.taxIncluded)}円</span> <span class="pl-tax" data-v-ec2af757>(税込)</span><!--]-->`);
						_push(`</p> <div class="pl-act" data-v-ec2af757><button type="button" class="${ssrRenderClass([{ added: unref(cart).has(p.id) }, "pl-btn pl-btn-cart"])}" data-v-ec2af757>${ssrInterpolate(unref(cart).has(p.id) ? "✓ カート済み" : "🛒 カートに入れる")}</button> `);
						_push(ssrRenderComponent(_component_NuxtLink, {
							class: "pl-btn",
							to: `/search?q=${encodeURIComponent(p.name)}`
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`
                  レシピを探す
                `);
								else return [createTextVNode("\n                  レシピを探す\n                ")];
							}),
							_: 2
						}, _parent));
						_push(`</div></li>`);
					});
					_push(`<!--]--></ul>`);
				}
				_push(` `);
				if (canLoadMore.value) _push(`<div class="pl-more" data-v-ec2af757><button type="button" class="pl-more-btn" data-v-ec2af757>
              さらに表示する（残り ${ssrInterpolate(unref(data).total - shown.value)} 件）
            </button></div>`);
				else _push(`<!---->`);
				_push(`<!--]-->`);
			}
			_push(` `);
			_push(ssrRenderComponent(_component_AppButtonNavigation, {
				class: "d-none-mobile pl-back",
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var products_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-ec2af757"]]);

export { products_default as default };
//# sourceMappingURL=products-C0oJ1hUy.mjs.map
