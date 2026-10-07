import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { a as formatDateYMD } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import _isEmpty from 'lodash/isEmpty.js';
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

//#region app/pages/chirashi/index.vue
var _sfc_main = {
	async setup() {
		useHead$1({ title: "今週のチラシ｜遠鉄ストア" });
		const { query, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			return {
				categoryList: (await Promise.all([$microcms.get({ endpoint: `store-category` })]))[0]?.contents.map((item) => ({
					text: item.title,
					value: item.id
				})),
				categorySelected: query.category,
				chirashiList: []
			};
		}, "$zzHzgZsX38");
		return { ...__d.value || {} };
	},
	data() {
		return {
			categorySelected: "",
			chirashiData: {},
			pdfList: [],
			chirashiList: [],
			breadcrumbItems: [{
				text: "ホーム",
				disabled: false,
				href: "/"
			}, {
				text: "今週のチラシ",
				disabled: true,
				href: "/chirashi"
			}]
		};
	},
	computed: {
		timeListFilter() {
			if (_isEmpty(this.chirashiData)) return [];
			return this.getDaysBetweenDates(this.chirashiData.date_from, this.chirashiData.date_to);
		},
		timeRangeTitle() {
			if (this.chirashiData.date_from && this.chirashiData.date_to) return `${this.YMDFormat(this.chirashiData.date_from)} ～ ${this.YMDFormat(this.chirashiData.date_to)}`;
			return "";
		},
		iframeUrl() {
			return "https://www-entstore.nokioo.net/smp/chirashi/";
		}
	},
	mounted() {
		(void 0).addEventListener("message", function(e) {
			const iframe = (void 0).getElementById("chirashi-next-iframe");
			const eventName = e.data[0];
			const data = e.data[1];
			switch (eventName) {
				case "setHeight": iframe.setAttribute("height", data);
			}
		}, false);
	},
	methods: {
		formatDateYMD,
		getDaysBetweenDates(startDate, endDate) {
			const currentDate = new Date(startDate);
			const endDateObj = new Date(endDate);
			const daysArray = [];
			while (currentDate <= endDateObj) {
				const newDate = new Date(currentDate);
				daysArray.push({
					value: newDate,
					text: this.monthDayFormat(currentDate)
				});
				currentDate.setDate(currentDate.getDate() + 1);
			}
			return daysArray;
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
		monthDayFormat(inputDate) {
			const date = new Date(inputDate);
			return `${String(date.getMonth() + 1).padStart(2, "0")}月${String(date.getDate()).padStart(2, "0")}日(${this.getDayOfWeek(date)})`;
		},
		YMDFormat(inputDate) {
			const date = new Date(inputDate);
			return `${date.getFullYear()}年 ${String(date.getMonth() + 1).padStart(2, "0")}月 ${String(date.getDate()).padStart(2, "0")}日(${this.getDayOfWeek(date)})`;
		},
		filterChirashi(date) {
			let dateFilter = /* @__PURE__ */ new Date();
			if (date) dateFilter = date;
			else dateFilter = this.$route.query.date ? new Date(this.$route.query.date) : /* @__PURE__ */ new Date();
			(void 0).location.href = this.categorySelected ? `/chirashi?category=${this.categorySelected}&date=${formatDateYMD(dateFilter)}` : `/chirashi?date=${formatDateYMD(date)}`;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-1eef70ca><main data-v-1eef70ca>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-1eef70ca>今週のチラシ</h2> <div class="mobile-box" data-v-1eef70ca><iframe id="chirashi-next-iframe" src="https://next.retailstudio.jp/entetsu-store/039/chirashi/iframe/?shop-id=0000" scrolling="no" frameborder="0" width="" height="" data-v-1eef70ca></iframe></div></main> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile custom-chirashi-back",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/chirashi/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chirashi_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1eef70ca"]]);

export { chirashi_default as default };
//# sourceMappingURL=chirashi-C69hgJxj.mjs.map
