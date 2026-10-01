import { _ as _plugin_vue_export_helper_default, $ as $fetch$1, u as useHead$1, j as appendWebpFormat } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DnhXVmPR.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { u as useCart } from './useCart-DarJ4RET.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { a as formatDateYMD } from './utils-CzPagAGc.mjs';
import { u as useShoppingList, U as UribaMapModal_default } from './UribaMapModal-jgq0fKHv.mjs';
import { withAsyncContext, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderTeleport } from 'vue/server-renderer';
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
import '../_/uriba.mjs';

//#endregion
//#region app/pages/recipe/[id].vue
var _sfc_main = {
	__name: "[id]",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		/**
		* Trang chi tiết công thức — slide 6 của đề xuất.
		*
		* Gồm: các bước nấu, AI đọc bằng Web Speech (ja-JP), danh sách đi chợ,
		* nguyên liệu nhóm theo 売場, và liên kết sang sơ đồ quầy.
		*
		* ⚠️ Dinh dưỡng và giá là số ẢO — mọi chỗ đều kèm badge 「DEMO」.
		*/
		const route = useRoute();
		const id = String(route.params.id || "");
		const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`recipe:${id}`, () => $fetch$1(`/api/recipe/${id}`).catch(() => null))), __temp = await __temp, __restore(), __temp);
		const breadcrumbItems = computed(() => [
			{
				text: "ホーム",
				disabled: false,
				href: "/"
			},
			{
				text: "レシピ集",
				disabled: false,
				href: "/service/recipe/"
			},
			{
				text: data.value?.title || "レシピ",
				disabled: true,
				href: route.fullPath
			}
		]);
		useShoppingList();
		useCart();
		const checked = ref([]);
		const mapOpen = ref(false);
		/** Quầy cần highlight: nếu chưa tick gì thì lấy toàn bộ nguyên liệu */
		const highlightUriba = computed(() => {
			const list = data.value?.ingredients || [];
			const target = checked.value.length ? list.filter((i) => checked.value.includes(i.cleanName)) : list;
			return [...new Set(target.map((i) => i.uriba))];
		});
		/**
		* Nguyên liệu mua online được = nguyên liệu tra được sản phẩm trong bảng demo.
		* Không phải nguyên liệu nào cũng có (hàng hiệu, gia vị lẻ) nên phải đếm thật,
		* không được hứa "thêm tất cả" rồi thêm thiếu.
		*/
		const buyableIngredients = computed(() => {
			const list = data.value?.ingredients || [];
			return (checked.value.length ? list.filter((i) => checked.value.includes(i.cleanName)) : list).filter((i) => i.product);
		});
		computed(() => buyableIngredients.value.length);
		const justAdded = ref("");
		const toast = ref(null);
		/** Dinh dưỡng có phải số THẬT từ Kitchen365 không (khác với số DEMO) */
		const isRealNutrition = computed(() => !!data.value?.nutrition?.real);
		function priceOf(name) {
			return data.value?.ingredients?.find((i) => i.cleanName === name)?.product || null;
		}
		function promoOf(name) {
			return data.value?.ingredients?.find((i) => i.cleanName === name)?.promo || null;
		}
		/** Nguyen lieu da kem gia gom thue (priceIn) va gia KM gom thue (saleIn) tu API */
		function ingOf(name) {
			return data.value?.ingredients?.find((i) => i.cleanName === name) || null;
		}
		const yen = (n) => Number(n || 0).toLocaleString("ja-JP");
		/**
		* Tong tien. Con so chinh = `cost.total` tinh o server, giong het 「材料費 概算」
		* o trang tim kiem. Neu khach tich chon mot so nguyen lieu (de chi mua phan
		* con thieu) thi tinh them tam tinh cho phan da chon, da tru KM.
		*/
		const cost = computed(() => data.value?.cost || null);
		computed(() => {
			if (!checked.value.length || !data.value) return null;
			const items = checked.value.map((n) => ingOf(n)).filter(Boolean);
			const fallback = cost.value?.fallback || 0;
			const sum = items.reduce((s, i) => s + (i.saleIn ?? i.priceIn ?? fallback), 0);
			return {
				count: items.length,
				sum,
				onSale: items.some((i) => i.saleIn != null)
			};
		});
		const speaking = ref(false);
		const speakingStep = ref(-1);
		const speechError = ref("");
		useHead$1(() => ({ title: `${data.value?.title || "レシピ"}｜レシピ集｜遠鉄ストア` }));
		return (_ctx, _push, _parent, _attrs) => {
			const _component_VxBreadcrumbs = _sfc_main$1;
			const _component_ClientOnly = ClientOnly;
			const _component_AppButtonNavigation = ButtonNavigation_default;
			const _component_UribaMapModal = UribaMapModal_default;
			const _component_NuxtLink = NuxtLink;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-550e91a8><main data-v-550e91a8>`);
			_push(ssrRenderComponent(_component_VxBreadcrumbs, {
				items: breadcrumbItems.value,
				divider: ">"
			}, null, _parent));
			_push(` <h2 data-v-550e91a8>${ssrInterpolate(unref(data)?.title || "レシピ")}</h2> `);
			if (!unref(data)) _push(`<div class="rd-empty" data-v-550e91a8>レシピが見つかりませんでした。</div>`);
			else {
				_push(`<!--[--><div class="rd-top" data-v-550e91a8>`);
				if (unref(data).image) _push(`<img${ssrRenderAttr("src", unref(appendWebpFormat)(unref(data).image, 60, 640))} class="rd-hero"${ssrRenderAttr("alt", unref(data).title)} data-v-550e91a8>`);
				else _push(`<!---->`);
				_push(` <div class="rd-meta" data-v-550e91a8><p class="rd-meta-row" data-v-550e91a8>`);
				if (unref(data).cookTime) _push(`<span class="rd-chip" data-v-550e91a8>⏱ 約${ssrInterpolate(unref(data).cookTime)}分</span>`);
				else _push(`<!---->`);
				_push(` `);
				if (unref(data).serving) _push(`<span class="rd-chip" data-v-550e91a8>🍽 ${ssrInterpolate(unref(data).serving)}</span>`);
				else _push(`<!---->`);
				_push(` `);
				if (unref(data).hasVideo) _push(`<span class="rd-chip" data-v-550e91a8>▶ レシピ動画あり</span>`);
				else _push(`<!---->`);
				_push(`</p> <div class="rd-actions" data-v-550e91a8><button type="button" class="rd-btn rd-btn-speak" data-v-550e91a8>${ssrInterpolate(speaking.value ? "⏹ 読み上げを停止" : "🔊 AIでレシピを読み上げ")}</button> <button type="button" class="rd-btn" data-v-550e91a8>
                🗺 売場マップを見る
              </button></div> `);
				if (speechError.value) _push(`<p class="rd-speech-err" data-v-550e91a8>${ssrInterpolate(speechError.value)}</p>`);
				else _push(`<!---->`);
				_push(` <div class="rd-buy" data-v-550e91a8><p class="rd-buy-label" data-v-550e91a8>
                材料をまとめて：
                `);
				if (cost.value) _push(`<span class="rd-buy-cost" data-v-550e91a8>
                  材料費 約${ssrInterpolate(yen(cost.value.total))}円<small data-v-550e91a8>（税込）</small> <span class="rd-badge-demo sm" data-v-550e91a8>DEMO</span></span>`);
				else _push(`<!---->`);
				_push(`</p> <div class="rd-buy-btns" data-v-550e91a8><button type="button" class="${ssrRenderClass([{ "is-added": justAdded.value === "list" }, "rd-buy-btn rd-buy-store"])}" data-v-550e91a8><span class="rd-buy-main" data-v-550e91a8>${ssrInterpolate(justAdded.value === "list" ? "✓ 追加しました" : "🏪 お店で買う")}</span> <span class="rd-buy-sub" data-v-550e91a8>買い物リストに追加 → 売場ごとに並べます</span></button> `);
				_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
				_push(`</div></div></div></div> `);
				if (unref(data).nutrition) {
					_push(`<section class="rd-sec" data-v-550e91a8><h3 class="rd-h3" data-v-550e91a8>
            栄養成分
            `);
					if (isRealNutrition.value) {
						_push(`<!--[--><span class="rd-badge-real" data-v-550e91a8>実データ</span> `);
						if (unref(data).nutrition.basis) _push(`<small data-v-550e91a8>（${ssrInterpolate(unref(data).nutrition.basis)}あたり）</small>`);
						else _push(`<!---->`);
						_push(`<!--]-->`);
					} else _push(`<span class="rd-badge-demo" data-v-550e91a8>DEMO</span>`);
					_push(`</h3> `);
					if (isRealNutrition.value) {
						_push(`<p class="rd-real-note" data-v-550e91a8>
            ✔ この栄養成分は <strong data-v-550e91a8>Kitchen365（CGC）の実データ</strong>です。
            `);
						if (unref(data).chef) _push(`<!--[-->料理：${ssrInterpolate(unref(data).chef)}<!--]-->`);
						else _push(`<!---->`);
						_push(` `);
						if (unref(data).issue) _push(`<!--[-->／${ssrInterpolate(unref(data).issue)}<!--]-->`);
						else _push(`<!---->`);
						_push(`</p>`);
					} else _push(`<p class="rd-demo-note" data-v-550e91a8>
            ※ 以下の栄養成分は<strong data-v-550e91a8>デモ用の仮データ</strong>です。実際の商品の値とは異なります。
          </p>`);
					_push(` <ul class="rd-nutri" data-v-550e91a8><li data-v-550e91a8><span data-v-550e91a8>エネルギー</span><strong data-v-550e91a8>${ssrInterpolate(unref(data).nutrition.kcal)}</strong>kcal</li> <li data-v-550e91a8><span data-v-550e91a8>たんぱく質</span><strong data-v-550e91a8>${ssrInterpolate(unref(data).nutrition.protein)}</strong>g</li> <li data-v-550e91a8><span data-v-550e91a8>脂質</span><strong data-v-550e91a8>${ssrInterpolate(unref(data).nutrition.fat)}</strong>g</li> <li data-v-550e91a8><span data-v-550e91a8>炭水化物</span><strong data-v-550e91a8>${ssrInterpolate(unref(data).nutrition.carb)}</strong>g</li> `);
					if (isRealNutrition.value && unref(data).nutrition.sugar) _push(`<li data-v-550e91a8><span data-v-550e91a8>糖質</span><strong data-v-550e91a8>${ssrInterpolate(unref(data).nutrition.sugar)}</strong>g
            </li>`);
					else _push(`<!---->`);
					_push(` `);
					if (isRealNutrition.value && unref(data).nutrition.fiber) _push(`<li data-v-550e91a8><span data-v-550e91a8>食物繊維</span><strong data-v-550e91a8>${ssrInterpolate(unref(data).nutrition.fiber)}</strong>g
            </li>`);
					else _push(`<!---->`);
					_push(` `);
					if (isRealNutrition.value && unref(data).nutrition.calcium) _push(`<li data-v-550e91a8><span data-v-550e91a8>カルシウム</span><strong data-v-550e91a8>${ssrInterpolate(unref(data).nutrition.calcium)}</strong>mg
            </li>`);
					else _push(`<!---->`);
					_push(` <li data-v-550e91a8><span data-v-550e91a8>${ssrInterpolate(isRealNutrition.value ? "塩分" : "食塩相当量")}</span> <strong data-v-550e91a8>${ssrInterpolate(unref(data).nutrition.salt)}</strong>g
            </li></ul></section>`);
				} else _push(`<!---->`);
				_push(` <section class="rd-sec" data-v-550e91a8><h3 class="rd-h3" data-v-550e91a8>材料 <small data-v-550e91a8>（売場ごと）</small></h3> <!--[-->`);
				ssrRenderList(unref(data).byUriba, (g) => {
					_push(`<div class="rd-uriba" data-v-550e91a8><p class="rd-uriba-head" data-v-550e91a8><span class="rd-uriba-dot" style="${ssrRenderStyle({ background: g.color })}" data-v-550e91a8></span> ${ssrInterpolate(g.label)}<small data-v-550e91a8>／${ssrInterpolate(g.desc)}</small></p> <ul class="rd-ing" data-v-550e91a8><!--[-->`);
					ssrRenderList(g.items, (it, i) => {
						_push(`<li data-v-550e91a8><label data-v-550e91a8><input type="checkbox"${ssrRenderAttr("value", it.name)}${ssrIncludeBooleanAttr(Array.isArray(checked.value) ? ssrLooseContain(checked.value, it.name) : checked.value) ? " checked" : ""} data-v-550e91a8> <span class="rd-ing-name" data-v-550e91a8>${ssrInterpolate(it.name)}</span> <span class="rd-ing-amt" data-v-550e91a8>${ssrInterpolate(it.amount)}</span></label> `);
						if (ingOf(it.name)?.priceIn != null) {
							_push(`<span class="rd-ing-price" data-v-550e91a8><span class="rd-badge-demo sm" data-v-550e91a8>DEMO</span> `);
							if (ingOf(it.name).saleIn != null) _push(`<!--[--><s data-v-550e91a8>${ssrInterpolate(yen(ingOf(it.name).priceIn))}円</s> <strong class="rd-sale" data-v-550e91a8>${ssrInterpolate(yen(ingOf(it.name).saleIn))}円</strong> <em class="rd-off" data-v-550e91a8>🔥特売中 ${ssrInterpolate(promoOf(it.name).discountPercent)}%OFF</em><!--]-->`);
							else _push(`<!--[--><strong data-v-550e91a8>${ssrInterpolate(yen(ingOf(it.name).priceIn))}円</strong> <em data-v-550e91a8>${ssrInterpolate(priceOf(it.name).unit)}</em><!--]-->`);
							_push(`</span>`);
						} else _push(`<span class="rd-ing-price rd-ing-noprice" data-v-550e91a8>価格データなし</span>`);
						_push(`</li>`);
					});
					_push(`<!--]--></ul></div>`);
				});
				_push(`<!--]--> `);
				if (cost.value) {
					_push(`<div class="rd-total" data-v-550e91a8><p class="rd-total-head" data-v-550e91a8>
              材料費の合計 <small data-v-550e91a8>（概算・税込）</small> <span class="rd-badge-demo sm" data-v-550e91a8>DEMO</span></p> <p class="rd-total-sum" data-v-550e91a8><strong data-v-550e91a8>${ssrInterpolate(yen(cost.value.total))}</strong>円</p> `);
					if (cost.value.saleTotal < cost.value.total) _push(`<p class="rd-total-sale" data-v-550e91a8>
              🔥 特売を使うと <strong data-v-550e91a8>${ssrInterpolate(yen(cost.value.saleTotal))}円</strong> <span data-v-550e91a8>（${ssrInterpolate(yen(cost.value.total - cost.value.saleTotal))}円お得）</span></p>`);
					else _push(`<!---->`);
					_push(` `);
					_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
					_push(` <p class="rd-total-note" data-v-550e91a8>
              ※ 各材料を1つずつ購入した場合の目安です。
              `);
					if (cost.value.count > cost.value.matched) _push(`<!--[-->
                価格データのない材料（${ssrInterpolate(cost.value.count - cost.value.matched)}品）は1品${ssrInterpolate(cost.value.fallback)}円で計算しています。
              <!--]-->`);
					else _push(`<!---->`);
					_push(`
              価格はデモ用の仮データです。
            </p></div>`);
				} else _push(`<!---->`);
				_push(`</section> `);
				if (unref(data).steps.length) {
					_push(`<section class="rd-sec" data-v-550e91a8><h3 class="rd-h3" data-v-550e91a8>作り方</h3> <ol class="rd-steps" data-v-550e91a8><!--[-->`);
					ssrRenderList(unref(data).steps, (s, i) => {
						_push(`<li class="${ssrRenderClass({ current: speakingStep.value === i })}" data-v-550e91a8><span class="rd-step-no" data-v-550e91a8>STEP ${ssrInterpolate(i + 1)}</span> <span class="rd-step-text" data-v-550e91a8>${ssrInterpolate(s)}</span></li>`);
					});
					_push(`<!--]--></ol></section>`);
				} else _push(`<!---->`);
				_push(` `);
				if (unref(data).point) _push(`<section class="rd-sec rd-point" data-v-550e91a8><h3 class="rd-h3" data-v-550e91a8>ワンポイント</h3> <p data-v-550e91a8>${ssrInterpolate(unref(data).point)}</p></section>`);
				else _push(`<!---->`);
				_push(` `);
				if (unref(data).externalUrl) _push(`<p class="rd-external" data-v-550e91a8><a${ssrRenderAttr("href", unref(data).externalUrl)} target="_blank" rel="noopener" data-v-550e91a8>
            Kitchen365 で詳しく見る ›
          </a></p>`);
				else _push(`<!---->`);
				_push(` `);
				if (unref(data).related?.length) {
					_push(`<section class="rd-sec rd-related" data-v-550e91a8><h3 class="rd-h3" data-v-550e91a8>関連レシピ <small data-v-550e91a8>（同じ食材を使ったレシピ）</small></h3> <ul class="rd-rel-list" data-v-550e91a8><!--[-->`);
					ssrRenderList(unref(data).related, (r) => {
						_push(`<li data-v-550e91a8><a${ssrRenderAttr("href", r.route)} data-v-550e91a8>`);
						if (r.image) _push(`<img${ssrRenderAttr("src", unref(appendWebpFormat)(r.image, 50, 320))}${ssrRenderAttr("alt", r.title)} loading="lazy" data-v-550e91a8>`);
						else _push(`<span class="rd-rel-noimg" data-v-550e91a8>🍳</span>`);
						_push(` <span class="rd-rel-body" data-v-550e91a8><span class="rd-rel-title" data-v-550e91a8>${ssrInterpolate(r.title)}</span> <span class="rd-rel-meta" data-v-550e91a8>`);
						if (r.cookTime) _push(`<!--[-->⏱ ${ssrInterpolate(r.cookTime)}分<!--]-->`);
						else _push(`<!---->`);
						_push(` `);
						if (r.energy) _push(`<!--[-->・${ssrInterpolate(r.energy)}kcal<!--]-->`);
						else _push(`<!---->`);
						_push(`</span> `);
						if (r.sharedIngredients.length) _push(`<span class="rd-rel-shared" data-v-550e91a8>
                    共通の食材：${ssrInterpolate(r.sharedIngredients.join("・"))}</span>`);
						else if (r.category) _push(`<span class="rd-rel-shared" data-v-550e91a8>${ssrInterpolate(r.category)}</span>`);
						else _push(`<!---->`);
						_push(`</span></a></li>`);
					});
					_push(`<!--]--></ul></section>`);
				} else _push(`<!---->`);
				_push(` `);
				if (unref(data).relatedArticles?.length) {
					_push(`<section class="rd-sec rd-related" data-v-550e91a8><h3 class="rd-h3" data-v-550e91a8>関連記事 <small data-v-550e91a8>（この食材・ジャンルの記事）</small></h3> <ul class="rd-rel-list" data-v-550e91a8><!--[-->`);
					ssrRenderList(unref(data).relatedArticles, (a) => {
						_push(`<li data-v-550e91a8><a${ssrRenderAttr("href", a.route)} data-v-550e91a8>`);
						if (a.image) _push(`<img${ssrRenderAttr("src", unref(appendWebpFormat)(a.image, 50, 320))}${ssrRenderAttr("alt", a.title)} loading="lazy" data-v-550e91a8>`);
						else _push(`<span class="rd-rel-noimg" data-v-550e91a8>📄</span>`);
						_push(` <span class="rd-rel-body" data-v-550e91a8><span class="rd-rel-title" data-v-550e91a8>${ssrInterpolate(a.title)}</span> <span class="rd-rel-meta" data-v-550e91a8>`);
						if (a.typeLabel) _push(`<!--[-->${ssrInterpolate(a.typeLabel)}<!--]-->`);
						else _push(`<!---->`);
						_push(` `);
						if (a.date) _push(`<!--[-->・${ssrInterpolate(unref(formatDateYMD)(a.date, "."))}<!--]-->`);
						else _push(`<!---->`);
						_push(`</span> <span class="rd-rel-shared" data-v-550e91a8>「${ssrInterpolate(a.matched)}」の記事</span></span></a></li>`);
					});
					_push(`<!--]--></ul></section>`);
				} else _push(`<!---->`);
				_push(`<!--]-->`);
			}
			_push(` `);
			_push(ssrRenderComponent(_component_AppButtonNavigation, {
				class: "d-none-mobile rd-back",
				title: "レシピ一覧へ戻る",
				"is-back": "",
				href: "/service/recipe/"
			}, null, _parent));
			_push(`</main> `);
			_push(ssrRenderComponent(_component_UribaMapModal, {
				modelValue: mapOpen.value,
				"onUpdate:modelValue": ($event) => mapOpen.value = $event,
				highlight: highlightUriba.value,
				title: "売場マップ（買い物リスト連動）"
			}, null, _parent));
			_push(` `);
			ssrRenderTeleport(_push, (_push) => {
				if (toast.value) {
					_push(`<div class="rd-toast" role="status" data-v-550e91a8><span class="rd-toast-tick" data-v-550e91a8>✓</span> <span class="rd-toast-text" data-v-550e91a8>${ssrInterpolate(toast.value.text)}</span> `);
					_push(ssrRenderComponent(_component_NuxtLink, {
						to: toast.value.to,
						class: "rd-toast-go"
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(`${ssrInterpolate(toast.value.cta)}`);
							else return [createTextVNode(toDisplayString(toast.value.cta), 1)];
						}),
						_: 1
					}, _parent));
					_push(` <button type="button" class="rd-toast-x" aria-label="閉じる" data-v-550e91a8>×</button></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipe/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-550e91a8"]]);

export { _id__default as default };
//# sourceMappingURL=_id_-CMiUTTil.mjs.map
