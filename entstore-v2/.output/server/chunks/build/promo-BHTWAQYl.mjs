import { _ as _plugin_vue_export_helper_default, $ as $fetch$1, u as useHead$1 } from '../virtual/entry.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { withAsyncContext, ref, computed, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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

//#region app/pages/admin/promo.vue
var _sfc_main = {
	__name: "promo",
	__ssrInlineRender: true,
	async setup(__props) {
		let __temp, __restore;
		/**
		* Màn quản lý 特売 — slide 7 của đề xuất.
		*
		* Ba cách nhập: **tải file Excel/CSV lên**, form từng mục, và dán JSON.
		* Người phụ trách 特売 làm việc bằng Excel chứ không gõ JSON, nên đường Excel
		* mới là đường chính; hai cách kia để sửa lẻ và cho người rành kỹ thuật.
		*
		* Điểm cốt lõi: mục quá 終了日 tự động bị loại khỏi mọi nơi — màn này hiển thị
		* cả hai trạng thái để thấy cơ chế đang chạy thật.
		*
		* ⚠️ Ghi THẬT xuống data/demo-promos.json, nên đăng xong là trang tìm kiếm,
		* trang 特売情報 và chatbot thấy ngay. Bản demo KHÔNG có đăng nhập — trước khi
		* đưa lên môi trường thật phải thêm xác thực cho các API này.
		*/
		const breadcrumbItems = [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "特売情報 管理画面",
			disabled: true,
			href: "/admin/promo"
		}];
		const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("promos-all", () => $fetch$1("/api/promos", { params: { all: 1 } }).catch(() => ({ items: [] })))), __temp = await __temp, __restore(), __temp);
		const showExpired = ref(true);
		const all = computed(() => data.value?.items || []);
		computed(() => all.value.filter((p) => !isExpired(p)));
		computed(() => all.value.filter((p) => isExpired(p)));
		computed(() => all.value.map((p) => ({
			...p,
			expired: isExpired(p)
		})).filter((p) => showExpired.value || !p.expired).sort((a, b) => Number(a.expired) - Number(b.expired) || a.productName.localeCompare(b.productName)));
		function isExpired(p) {
			return p.endDate ? new Date(p.endDate).getTime() < Date.now() : false;
		}
		ref({
			productName: "",
			normalPrice: null,
			salePrice: null,
			uriba: "seika",
			endDate: ""
		});
		ref("");
		ref("");
		ref(false);
		ref("");
		ref("");
		ref("");
		ref(null);
		ref(false);
		ref("");
		ref(null);
		ref("");
		useHead$1({ title: "特売情報 管理画面｜遠鉄ストア" });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_VxBreadcrumbs = _sfc_main$1;
			const _component_ClientOnly = ClientOnly;
			const _component_AppButtonNavigation = ButtonNavigation_default;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-3420aa46><main data-v-3420aa46>`);
			_push(ssrRenderComponent(_component_VxBreadcrumbs, {
				items: breadcrumbItems,
				divider: ">"
			}, null, _parent));
			_push(` <h2 data-v-3420aa46>特売情報 管理画面</h2> <p class="ap-note" data-v-3420aa46><span class="ap-badge-demo" data-v-3420aa46>DEMO</span>
        担当者がコードを書かずに特売情報を登録・削除できる画面です。
        <strong data-v-3420aa46>終了日を過ぎた特売は、一覧・検索結果・商品ページから自動で除外されます</strong>
        （手作業の削除は不要）。
      </p> `);
			_push(ssrRenderComponent(_component_ClientOnly, null, { fallback: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(`<p class="ap-sub" data-v-3420aa46${_scopeId}>読み込み中…</p>`);
				else return [createVNode("p", { class: "ap-sub" }, "読み込み中…")];
			}) }, _parent));
			_push(` `);
			_push(ssrRenderComponent(_component_AppButtonNavigation, {
				class: "d-none-mobile ap-back",
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/promo.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var promo_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-3420aa46"]]);

export { promo_default as default };
//# sourceMappingURL=promo-BHTWAQYl.mjs.map
