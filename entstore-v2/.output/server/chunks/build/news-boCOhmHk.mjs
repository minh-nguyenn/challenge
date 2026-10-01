import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { c as checkLengthTitle, a as formatDateYMD, d as fetchData } from './utils-CzPagAGc.mjs';
import { i as img_noimg_default } from './img_noimg-BvILzYDp.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
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

//#region app/pages/news/index.vue
var _sfc_main = {
	components: { AppButtonNavigation: ButtonNavigation_default },
	async setup() {
		useHead$1({ title: "企業情報・ニュースリリース｜遠鉄ストア" });
		const { query, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const currentPage = parseInt(query.p) || 1;
			return {
				allNews: (await fetchData($microcms, { endpoint: "store-news" })).contents || [],
				currentPage,
				itemsPerPage: 10
			};
		}, "$vNu7hp_Bo2");
		return { ...__d.value || {} };
	},
	data() {
		return { breadcrumbItems: [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "企業情報・ニュースリリース",
			disabled: true,
			href: "/news"
		}] };
	},
	mounted() {
		console.log(this.allNews);
	},
	computed: {
		totalPages() {
			return Math.ceil(this.allNews.length / this.itemsPerPage);
		},
		paginatedNews() {
			const start = (this.currentPage - 1) * this.itemsPerPage;
			return this.allNews.slice(start, start + this.itemsPerPage);
		}
	},
	methods: {
		formatDateYMD,
		checkLengthTitle
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-0de33bcd><main data-v-0de33bcd>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-0de33bcd>企業情報・ニュースリリース</h2> <div class="news-content" data-v-0de33bcd><!--[-->`);
	ssrRenderList($options.paginatedNews, (news) => {
		_push(`<a class="contentInner mobile-box"${ssrRenderAttr("href", `/news/detail/${news.id}`)} data-v-0de33bcd><figure data-v-0de33bcd>`);
		if (news.thumbnail && news.thumbnail.url) _push(`<img${ssrRenderAttr("src", _ctx.$appendWebpFormat(news.thumbnail.url))} alt="" class="thum" data-v-0de33bcd>`);
		else _push(`<img${ssrRenderAttr("src", img_noimg_default)} class="thum" data-v-0de33bcd>`);
		_push(`</figure> <div class="news-title" data-v-0de33bcd><time data-v-0de33bcd>${ssrInterpolate($options.formatDateYMD(news.post_date))}</time> <span data-v-0de33bcd>${$options.checkLengthTitle(news.title, 100).replaceAll("<br>", "") ?? ""}</span><br data-v-0de33bcd> <a class="d-none-mobile link link-custom"${ssrRenderAttr("href", `/news/detail/${news.id}`)} data-v-0de33bcd>詳細はこちら</a></div></a>`);
	});
	_push(`<!--]--></div> `);
	if ($options.totalPages > 1) {
		_push(`<div class="pagination" data-v-0de33bcd><!--[-->`);
		ssrRenderList($options.totalPages, (page) => {
			_push(`<a${ssrRenderAttr("href", `/news?p=${page}`)} class="${ssrRenderClass({ active: page === _ctx.currentPage })}" data-v-0de33bcd>${ssrInterpolate(page)}</a>`);
		});
		_push(`<!--]--></div>`);
	} else _push(`<!---->`);
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		href: "/",
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": ""
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var news_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0de33bcd"]]);

export { news_default as default };
//# sourceMappingURL=news-boCOhmHk.mjs.map
