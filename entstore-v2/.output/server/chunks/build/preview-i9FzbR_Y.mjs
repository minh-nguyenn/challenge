import { _ as _plugin_vue_export_helper_default, b as useNuxtApp, a as useRoute$2, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { a as formatDateYMD } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/pages/event/detail/preview.vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	async setup() {
		const __nuxtApp = useNuxtApp();
		const { query, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const { id } = query;
			const { draftKey } = query;
			return { eventDetail: await $microcms.get({
				endpoint: `store-event/${id}`,
				queries: draftKey ? { draftKey } : {}
			}) };
		}, "$NQKVy8O-_y");
		__nuxtApp.runWithContext(() => useHead$1({ title: `${__d.value?.eventDetail.title?.replaceAll("<br>", "") || ""}｜キャンペーン・イベント情報｜遠鉄ストア` }));
		return { ...__d.value || {} };
	},
	data() {
		return {};
	},
	computed: {
		breadcrumbItems() {
			return [
				{
					text: "ホーム",
					disabled: false,
					href: "/"
				},
				{
					text: "キャンペーン・イベント情報",
					disabled: false,
					href: "/event/"
				},
				{
					text: this.eventDetail.title?.replaceAll("<br>", "") || "",
					disabled: true
				}
			];
		},
		eventItemsCheck() {
			return (this.eventDetail.event_items || []).filter((e) => e.item_check);
		},
		eventItemsUncheck() {
			return (this.eventDetail.event_items || []).filter((e) => !e.item_check);
		}
	},
	methods: {
		formatDateYMD,
		getDayOfWeek(date) {
			return [
				"日",
				"月",
				"火",
				"水",
				"木",
				"金",
				"土"
			][date.getDay()];
		},
		YMDFormat(inputDate) {
			if (!inputDate) return "YYYY年 MM月 DD日";
			const date = new Date(Date.parse(inputDate));
			return `${date.getFullYear()}年 ${String(date.getMonth() + 1).padStart(2, "0")}月 ${String(date.getDate()).padStart(2, "0")}日(${this.getDayOfWeek(date)})`;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_app_article = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content detail-event-custom" }, _attrs))} data-v-dec281a1><main data-v-dec281a1>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $options.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 class="info-title" data-v-dec281a1>${_ctx.eventDetail.title ?? ""}</h2> `);
	if ($options.eventItemsCheck && $options.eventItemsCheck.length) _push(ssrRenderComponent(_component_app_article, {
		title: "概要",
		class: "mb-6 d-none-des"
	}, null, _parent));
	else _push(`<!---->`);
	_push(` `);
	if ($options.eventItemsCheck && $options.eventItemsCheck.length) {
		_push(`<div class="mobile-box" data-v-dec281a1><table class="table-horz mobile-box mb-5" data-v-dec281a1><tbody data-v-dec281a1><!--[-->`);
		ssrRenderList($options.eventItemsCheck, (evItem, index) => {
			_push(`<tr class="item01" data-v-dec281a1><th data-v-dec281a1>${evItem.item_title ?? ""}</th> <td data-v-dec281a1>${_ctx.$transformImageSrc(evItem.item_body) ?? ""}</td></tr>`);
		});
		_push(`<!--]--></tbody></table></div>`);
	} else _push(`<!---->`);
	_push(` <div class="event-content" data-v-dec281a1>${_ctx.$transformImageSrc(_ctx.eventDetail.body) ?? ""}</div> `);
	_push(ssrRenderComponent(_component_app_article, {
		title: "概要",
		class: "mb-6 d-none-des"
	}, null, _parent));
	_push(` <div class="mobile-box" data-v-dec281a1><table class="table-horz mobile-box" data-v-dec281a1><tbody data-v-dec281a1>`);
	if (_ctx.eventDetail.period_from && _ctx.eventDetail.period_from !== "0000-00-00" || _ctx.eventDetail.period_to && _ctx.eventDetail.period_to !== "0000-00-00") {
		_push(`<tr class="item01" data-v-dec281a1><th data-v-dec281a1>キャンペーン期間</th> <td data-v-dec281a1>${ssrInterpolate($options.YMDFormat(_ctx.eventDetail["period_from"]))} `);
		if (_ctx.eventDetail["period_from"] || _ctx.eventDetail["period_to"]) _push(`<span data-v-dec281a1>〜</span>`);
		else _push(`<!---->`);
		_push(` ${ssrInterpolate($options.YMDFormat(_ctx.eventDetail["period_to"]))}</td></tr>`);
	} else _push(`<!---->`);
	_push(` `);
	if (_ctx.eventDetail.close) _push(`<tr data-v-dec281a1><th data-v-dec281a1>応募締切</th> <td data-v-dec281a1>${ssrInterpolate($options.YMDFormat(_ctx.eventDetail["close"]))}まで</td></tr>`);
	else _push(`<!---->`);
	_push(` <!--[-->`);
	ssrRenderList($options.eventItemsUncheck, (evItem, index) => {
		_push(`<tr class="item01" data-v-dec281a1><th data-v-dec281a1>${evItem.item_title ?? ""}</th> <td data-v-dec281a1>${_ctx.$transformImageSrc(evItem.item_body) ?? ""}</td></tr>`);
	});
	_push(`<!--]--></tbody></table></div></main> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "btn-back-event-detail",
		"is-back": "",
		title: "一覧へ戻る",
		"long-btn": "",
		href: "/event"
	}, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/detail/preview.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var preview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dec281a1"]]);

export { preview_default as default };
//# sourceMappingURL=preview-i9FzbR_Y.mjs.map
