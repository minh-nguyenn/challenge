import { _ as _plugin_vue_export_helper_default, $ as $fetch$1, u as useHead$1, j as appendWebpFormat } from '../virtual/entry.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { u as useCart } from './useCart-DarJ4RET.mjs';
import { S as SmartSearchBar_default } from './SmartSearchBar-Dq7NKO6z.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { computed, ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from 'vue/server-renderer';
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
import './nuxt-link-DnhXVmPR.mjs';

//#region app/pages/search.vue
var PER_GROUP_FETCH = 200;
var PER_PAGE = 10;
/**
* Trang hiện tại của TỪNG nhóm.
* Mỗi nhóm phân trang riêng vì 記事 có thể 100 mục trong khi 店舗 chỉ 3 —
* gộp chung một bộ phân trang thì nhóm nhỏ bị đẩy sang trang sau vô lý.
*/
var _sfc_main = {
	__name: "search",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		/**
		* Trang gợi ý 「なんでも検索」 — slide 3 bước ②, slide 5.
		*
		* Kết quả gộp và nhóm theo レシピ → 特売 → 商品 → 記事 → 店舗, kèm số lượng
		* từng nhóm. Sản phẩm đang khuyến mãi được làm nổi bật giá KM và hạn dùng.
		*
		* ⚠️ Giá / tồn kho / khuyến mãi là dữ liệu ẢO — luôn kèm badge 「DEMO」.
		*/
		const route = useRoute();
		const q = computed(() => String(route.query.q || ""));
		/** Số mục lấy về mỗi nhóm (server chặn ở 200) và số mục hiển thị mỗi trang */
		const pageOf = ref({});
		const pageFor = (key) => pageOf.value[key] || 1;
		/** Cắt mục của một nhóm theo trang hiện tại */
		function pagedItems(g) {
			const start = (pageFor(g.key) - 1) * PER_PAGE;
			return g.items.slice(start, start + PER_PAGE);
		}
		const pageCount = (g) => Math.ceil(g.items.length / PER_PAGE) || 1;
		/**
		* Dãy số trang có rút gọn: 1 … 4 5 [6] 7 8 … 20.
		* Nhóm 100 mục mà in đủ 10 nút thì tràn hàng trên điện thoại.
		*/
		function pageList(g) {
			const total = pageCount(g);
			const cur = pageFor(g.key);
			const out = [];
			for (let i = 1; i <= total; i++) if (i === 1 || i === total || Math.abs(i - cur) <= 1) out.push(i);
			else if (out[out.length - 1] !== "…") out.push("…");
			return out;
		}
		const breadcrumbItems = computed(() => [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "検索結果",
			disabled: true,
			href: "/search"
		}]);
		/**
		* Vị trí người dùng — chỉ dùng để xếp 「近くの取扱店舗」 theo khoảng cách.
		* Không hỏi ngay khi vào trang: chỉ hỏi khi bấm nút, và không gửi đi đâu khác
		* ngoài chính API tìm kiếm của trang này.
		*/
		const geo = ref(null);
		const geoState = ref("idle");
		const { data, pending } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(() => "search:" + q.value + ":" + (geo.value ? `${geo.value.lat},${geo.value.lng}` : ""), () => q.value ? $fetch$1("/api/search", { params: {
			q: q.value,
			perGroup: PER_GROUP_FETCH,
			...geo.value ? {
				lat: geo.value.lat,
				lng: geo.value.lng
			} : {}
		} }) : Promise.resolve(null), { watch: [q, geo] })), __temp = await __temp, __restore(), __temp);
		useCart();
		/** Nhãn ngân sách — 「2,000円以内」「2,000円前後」「2,000円以上」 */
		const budgetLabel = computed(() => {
			const b = data.value?.budget;
			if (!b) return "";
			const n = (v) => Number(v).toLocaleString();
			if (b.kind === "around") return `${n(b.raw)}円前後`;
			if (b.kind === "over") return `${n(b.min)}円以上`;
			return `${n(b.max)}円以内`;
		});
		function fmtDate(iso) {
			if (!iso) return "";
			const d = new Date(iso);
			return `${d.getMonth() + 1}月${d.getDate()}日`;
		}
		useHead$1(() => ({ title: q.value ? `${q.value} の検索結果｜遠鉄ストア` : "検索｜遠鉄ストア" }));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_SmartSearchBar = SmartSearchBar_default;
			const _component_VxBreadcrumbs = _sfc_main$1;
			const _component_ClientOnly = ClientOnly;
			const _component_AppButtonNavigation = ButtonNavigation_default;
			_push(`<div${ssrRenderAttrs(_attrs)} data-v-be15c67a>`);
			_push(ssrRenderComponent(_component_SmartSearchBar, {
				initial: q.value,
				compact: ""
			}, null, _parent));
			_push(` <div class="wrap-content" data-v-be15c67a><main data-v-be15c67a>`);
			_push(ssrRenderComponent(_component_VxBreadcrumbs, {
				items: breadcrumbItems.value,
				divider: ">"
			}, null, _parent));
			_push(` <h2 data-v-be15c67a>検索結果</h2> `);
			if (unref(pending)) _push(`<div class="sr-loading" data-v-be15c67a>検索中…</div>`);
			else if (q.value) {
				_push(`<!--[--><p class="sr-summary" data-v-be15c67a>
            「<strong data-v-be15c67a>${ssrInterpolate(q.value)}</strong>」の検索結果：<strong data-v-be15c67a>${ssrInterpolate(unref(data)?.total || 0)}</strong> 件
            `);
				if (unref(data)?.normalized && unref(data).normalized !== q.value) _push(`<span class="sr-norm" data-v-be15c67a>
              （表記ゆれを含めて検索：${ssrInterpolate(unref(data).normalized)}）
            </span>`);
				else _push(`<!---->`);
				_push(`</p> `);
				if (unref(data)?.translatedFrom) _push(`<p class="sr-note sr-note-lang" data-v-be15c67a>
            🌐 「${ssrInterpolate(q.value)}」を「${ssrInterpolate(unref(data).translatedFrom.join("・"))}」として検索しました。
          </p>`);
				else _push(`<!---->`);
				_push(` `);
				if (unref(data)?.intent) _push(`<p class="sr-note sr-note-lang" data-v-be15c67a>
            💡 「${ssrInterpolate(q.value)}」を「${ssrInterpolate(unref(data).intent.label)}」として探しました：${ssrInterpolate(unref(data).intent.terms.join("・"))}</p>`);
				else _push(`<!---->`);
				_push(` `);
				if (unref(data)?.budget) {
					_push(`<p class="sr-note sr-note-budget" data-v-be15c67a>
            💰 <strong data-v-be15c67a>${ssrInterpolate(budgetLabel.value)}</strong> で絞り込みました。
            `);
					if (unref(data).budget.implied) _push(`<span class="sr-note-sub" data-v-be15c67a>
              「${ssrInterpolate(unref(data).budget.raw.toLocaleString())}円」を予算として解釈しました。
            </span>`);
					else _push(`<!---->`);
					_push(` <span class="sr-note-sub" data-v-be15c67a>${ssrInterpolate(unref(data).budget.note)}</span></p>`);
				} else _push(`<!---->`);
				_push(` `);
				if (!unref(data)?.total) _push(`<div class="sr-empty" data-v-be15c67a><p data-v-be15c67a>該当する情報が見つかりませんでした。</p> <p class="sr-hint" data-v-be15c67a>
              商品名・料理名・食材・店舗名でお試しください。<br data-v-be15c67a>
              例：うなぎ／カレー／富塚店／チラシ
            </p></div>`);
				else _push(`<!---->`);
				_push(` <!--[-->`);
				ssrRenderList(unref(data)?.groups || [], (g) => {
					_push(`<section class="sr-group" data-v-be15c67a><h3 class="sr-group-title" data-v-be15c67a><span class="sr-group-tag"${ssrRenderAttr("data-group", g.key)} data-v-be15c67a>${ssrInterpolate(g.label)}</span> <span class="sr-group-count" data-v-be15c67a>${ssrInterpolate(g.count)} 件</span> `);
					if (pageCount(g) > 1) _push(`<span class="sr-group-range" data-v-be15c67a>${ssrInterpolate((pageFor(g.key) - 1) * PER_PAGE + 1)}–${ssrInterpolate(Math.min(pageFor(g.key) * PER_PAGE, g.items.length))}
                件目
              </span>`);
					else _push(`<!---->`);
					_push(`</h3> <ul class="sr-list" data-v-be15c67a><!--[-->`);
					ssrRenderList(pagedItems(g), (it) => {
						_push(`<li class="sr-item" data-v-be15c67a><a${ssrRenderAttr("href", it.route)} class="sr-link" data-v-be15c67a>`);
						if (it.image) _push(`<img${ssrRenderAttr("src", unref(appendWebpFormat)(it.image, 50, 200))} class="sr-thumb" alt="" loading="lazy" data-v-be15c67a>`);
						else _push(`<!---->`);
						_push(` <span class="sr-body" data-v-be15c67a><span class="sr-title" data-v-be15c67a>${ssrInterpolate(it.title)}</span> `);
						if (it.promo) _push(`<span class="sr-promo" data-v-be15c67a><span class="sr-badge-demo" data-v-be15c67a>DEMO</span> <span class="sr-price-old" data-v-be15c67a>${ssrInterpolate(it.promo.normalPrice)}円</span> <span class="sr-price-new" data-v-be15c67a>${ssrInterpolate(it.promo.salePrice)}円</span> <span class="sr-off" data-v-be15c67a>${ssrInterpolate(it.promo.discountPercent)}%OFF</span> <span class="sr-until" data-v-be15c67a>${ssrInterpolate(fmtDate(it.promo.endDate))}まで</span></span>`);
						else if (it.product) _push(`<span class="sr-product" data-v-be15c67a><span class="sr-badge-demo" data-v-be15c67a>DEMO</span> <span class="sr-price-new" data-v-be15c67a>${ssrInterpolate(it.product.price)}円</span> <span class="sr-unit" data-v-be15c67a>${ssrInterpolate(it.product.unit)}</span> <span class="sr-uriba" data-v-be15c67a>${ssrInterpolate(it.product.uribaLabel)}</span> <span class="sr-stock" data-v-be15c67a>${ssrInterpolate(it.product.stock)}</span></span>`);
						else if (it.estimatedCost) _push(`<span class="sr-cost" data-v-be15c67a><span class="sr-badge-demo" data-v-be15c67a>DEMO</span>
                      材料費 概算
                      <strong data-v-be15c67a>${ssrInterpolate(it.estimatedCost.total.toLocaleString())}円</strong> <span class="sr-cost-conf" data-v-be15c67a>
                        （${ssrInterpolate(it.estimatedCost.matched)}/${ssrInterpolate(it.estimatedCost.count)} 品目の価格から）
                      </span></span>`);
						else if (it.type === "shop") {
							_push(`<span class="sr-shop" data-v-be15c67a>${ssrInterpolate(it.address)}`);
							if (it.openTime) _push(`<!--[--> ／ ${ssrInterpolate(it.openTime)}<!--]-->`);
							else _push(`<!---->`);
							_push(`</span>`);
						} else if (it.snippet) _push(`<span class="sr-snippet" data-v-be15c67a>${ssrInterpolate(it.snippet)}</span>`);
						else _push(`<!---->`);
						_push(`</span></a> `);
						_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
						_push(`</li>`);
					});
					_push(`<!--]--></ul> `);
					if (pageCount(g) > 1) {
						_push(`<nav class="sr-pager"${ssrRenderAttr("aria-label", `${g.label}のページ送り`)} data-v-be15c67a><button type="button" class="sr-pager-btn"${ssrIncludeBooleanAttr(pageFor(g.key) === 1) ? " disabled" : ""} data-v-be15c67a>
                ‹ 前へ
              </button> <!--[-->`);
						ssrRenderList(pageList(g), (n, i) => {
							_push(`<!--[-->`);
							if (n === "…") _push(`<span class="sr-pager-gap" data-v-be15c67a>…</span>`);
							else _push(`<button type="button" class="${ssrRenderClass([{ current: n === pageFor(g.key) }, "sr-pager-num"])}"${ssrRenderAttr("aria-current", n === pageFor(g.key) ? "page" : void 0)} data-v-be15c67a>${ssrInterpolate(n)}</button>`);
							_push(`<!--]-->`);
						});
						_push(`<!--]--> <button type="button" class="sr-pager-btn"${ssrIncludeBooleanAttr(pageFor(g.key) === pageCount(g)) ? " disabled" : ""} data-v-be15c67a>
                次へ ›
              </button></nav>`);
					} else _push(`<!---->`);
					_push(`</section>`);
				});
				_push(`<!--]--> `);
				if (unref(data)?.nearbyShops) {
					_push(`<section class="sr-shops" data-v-be15c67a><h3 class="sr-group-title" data-v-be15c67a><span class="sr-group-tag" data-group="shop" data-v-be15c67a>近くの取扱店舗</span> <span class="sr-group-count" data-v-be15c67a>${ssrInterpolate(unref(data).nearbyShops.product.name)}</span></h3> <p class="sr-shops-lead" data-v-be15c67a><span class="sr-badge-demo" data-v-be15c67a>DEMO</span>
              在庫状況はデモ用の仮データです。実際の在庫は店舗にお問い合わせください。
              `);
					if (!unref(data).nearbyShops.located) _push(`<button type="button" class="sr-geo"${ssrIncludeBooleanAttr(geoState.value === "asking") ? " disabled" : ""} data-v-be15c67a>${ssrInterpolate(geoState.value === "asking" ? "位置情報を取得中…" : "📍 近い順に並べる")}</button>`);
					else _push(`<!---->`);
					_push(` `);
					if (geoState.value === "denied") _push(`<span class="sr-geo-denied" data-v-be15c67a>
                位置情報が使えないため、在庫順に表示しています。
              </span>`);
					else _push(`<!---->`);
					_push(`</p> <ul class="sr-shop-list" data-v-be15c67a><!--[-->`);
					ssrRenderList(unref(data).nearbyShops.items, (s) => {
						_push(`<li class="sr-shop-item" data-v-be15c67a><a${ssrRenderAttr("href", s.route)} class="sr-shop-link" data-v-be15c67a><span class="sr-shop-name" data-v-be15c67a>${ssrInterpolate(s.title)}</span> <span class="sr-shop-stock"${ssrRenderAttr("data-stock", s.stockKey)} data-v-be15c67a>${ssrInterpolate(s.stock)}</span> `);
						if (s.distanceKm != null) _push(`<span class="sr-shop-dist" data-v-be15c67a>
                    約 ${ssrInterpolate(s.distanceKm)} km
                  </span>`);
						else _push(`<!---->`);
						_push(` <span class="sr-shop-addr" data-v-be15c67a>${ssrInterpolate(s.address)}</span> `);
						if (s.openTime) _push(`<span class="sr-shop-time" data-v-be15c67a>営業 ${ssrInterpolate(s.openTime)}</span>`);
						else _push(`<!---->`);
						_push(`</a></li>`);
					});
					_push(`<!--]--></ul></section>`);
				} else _push(`<!---->`);
				_push(`<!--]-->`);
			} else _push(`<p class="sr-hint" data-v-be15c67a>キーワードを入力してください。</p>`);
			_push(` `);
			_push(ssrRenderComponent(_component_AppButtonNavigation, {
				class: "d-none-mobile sr-back",
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var search_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-be15c67a"]]);

export { search_default as default };
//# sourceMappingURL=search-Dg5vfWlU.mjs.map
