import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/pages/event/index.vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	async setup() {
		useHead$1({ title: "キャンペーン・イベント情報｜遠鉄ストア" });
		const { $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			return { eventData: (await fetchDataV2($microcms, { endpoint: "store-event" })).contents };
		}, "$AC78tqGXqK");
		return { ...__d.value || {} };
	},
	data() {
		return { breadcrumbItems: [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "キャンペーン・イベント情報",
			disabled: true,
			href: "/event"
		}] };
	},
	methods: {
		toEventDetail(id) {
			(void 0).location.href = `/event/detail/${id}`;
		},
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
			if (!inputDate) return "";
			const date = new Date(Date.parse(inputDate));
			return `${date.getFullYear()}年 ${String(date.getMonth() + 1).padStart(2, "0")}月 ${String(date.getDate()).padStart(2, "0")}日(${this.getDayOfWeek(date)})`;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_app_article = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-b280d05d><main data-v-b280d05d>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-b280d05d>
        キャンペーン・イベント情報
      </h2> `);
	_push(ssrRenderComponent(_component_app_article, {
		class: "d-none-des mb-0",
		title: "キャンペーン・イベント一覧"
	}, null, _parent));
	_push(` <article class="event-list event-list-custom" data-v-b280d05d><!--[-->`);
	ssrRenderList(_ctx.eventData, (event) => {
		_push(`<a${ssrRenderAttr("href", `/event/detail/${event.id}`)} class="contentInner d-block" data-v-b280d05d><h4 data-v-b280d05d>${event.title ?? ""}</h4> `);
		if (event.filename1 && event.filename1.url) _push(`<section class="ColumnS" data-v-b280d05d><img${ssrRenderAttr("src", _ctx.$appendWebpFormat(event.filename1?.url))}${ssrRenderAttr("alt", event.title)} data-v-b280d05d></section>`);
		else _push(`<!---->`);
		_push(` <section class="ColumnS" data-v-b280d05d><table class="table-vert" data-v-b280d05d><tbody data-v-b280d05d>`);
		if (event.period_from || event.period_to) {
			_push(`<tr data-v-b280d05d><th data-v-b280d05d>キャンペーン期間</th> <td data-v-b280d05d>${ssrInterpolate($options.YMDFormat(event.period_from))} `);
			if (event.period_from || event.period_to) _push(`<span data-v-b280d05d>&#39;〜&#39;</span>`);
			else _push(`<!---->`);
			_push(` ${ssrInterpolate($options.YMDFormat(event.period_to))}</td></tr>`);
		} else _push(`<!---->`);
		_push(`</tbody></table> <p class="btn-sm" data-v-b280d05d><br data-v-b280d05d> <a${ssrRenderAttr("href", `/event/detail/${event.id}`)} data-v-b280d05d>詳細はこちら</a></p> <p class="btn" data-v-b280d05d>詳細はこちら<svg class="icon" data-v-b280d05d><use xlink:href="#icon_arrow03" data-v-b280d05d></use></svg></p></section></a>`);
	});
	_push(`<!--]--></article> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile mt-10",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/event/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var event_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b280d05d"]]);

export { event_default as default };
//# sourceMappingURL=event-D1l5yoyj.mjs.map
