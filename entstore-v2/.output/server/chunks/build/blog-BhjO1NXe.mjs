import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { B as Banner_default, I as Item_default } from './Item-BsuXx1K-.mjs';
import { f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { P as Page_default } from './Page-BW5MDNzf.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './img_noimg-BvILzYDp.mjs';
import './ButtonNavigation-C1Lbf-BA.mjs';

//#region app/components/vx/VxPagination.vue
var _sfc_main$1 = {
	__name: "VxPagination",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: Number,
			default: 1
		},
		length: {
			type: Number,
			default: 1
		},
		totalVisible: {
			type: [Number, String],
			default: 0
		}
	},
	emits: ["update:modelValue", "input"],
	setup(__props, { emit: __emit }) {
		/**
		* Thay <v-pagination v-model :length :total-visible>. Dung 1 lan (blog/index.vue).
		*
		* DOM goc (do tu www.entstore.co.jp/blog/):
		*   <ul class="v-pagination theme--light">
		*     <li><button class="v-pagination__navigation v-pagination__navigation--disabled">
		*           <i class="v-icon notranslate mdi mdi-chevron-left theme--light"></i></button></li>
		*     <li><button class="v-pagination__item v-pagination__item--active primary">1</button></li>
		*     ...
		*   </ul>
		* Trang blog co CSS scoped ghi de gan het (nut 60x60, bo goc 5px, mau #331e0e),
		* nen chi can dung dung ten class la giao dien khop.
		*/
		const props = __props;
		const items = computed(() => {
			const total = props.length;
			const cur = props.modelValue;
			const max = Number(props.totalVisible) || total;
			if (total <= max || max === 0) return Array.from({ length: total }, (_, i) => i + 1);
			const out = [1];
			const side = Math.max(1, Math.floor((max - 3) / 2));
			let from = Math.max(2, cur - side);
			let to = Math.min(total - 1, cur + side);
			if (from > 2) out.push("...");
			for (let i = from; i <= to; i++) out.push(i);
			if (to < total - 1) out.push("...");
			out.push(total);
			return out;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<ul${ssrRenderAttrs(mergeProps({ class: "v-pagination theme--light" }, _attrs))}><li><button type="button" aria-label="Previous page" class="${ssrRenderClass([{ "v-pagination__navigation--disabled": __props.modelValue <= 1 }, "v-pagination__navigation"])}"${ssrIncludeBooleanAttr(__props.modelValue <= 1) ? " disabled" : ""}><i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-left theme--light"></i></button></li> <!--[-->`);
			ssrRenderList(items.value, (p, i) => {
				_push(`<li>`);
				if (p !== "...") _push(`<button type="button" class="${ssrRenderClass([{ "v-pagination__item--active primary": p === __props.modelValue }, "v-pagination__item"])}"${ssrRenderAttr("aria-current", p === __props.modelValue ? "true" : void 0)}>${ssrInterpolate(p)}</button>`);
				else _push(`<button type="button" disabled class="v-pagination__more">…</button>`);
				_push(`</li>`);
			});
			_push(`<!--]--> <li><button type="button" aria-label="Next page" class="${ssrRenderClass([{ "v-pagination__navigation--disabled": __props.modelValue >= __props.length }, "v-pagination__navigation"])}"${ssrIncludeBooleanAttr(__props.modelValue >= __props.length) ? " disabled" : ""}><i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--light"></i></button></li></ul>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxPagination.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region app/pages/blog/index.vue
var _sfc_main = {
	components: {
		BlogPage: Page_default,
		BlogItem: Item_default,
		BlogBanner: Banner_default
	},
	async setup() {
		useHead$1({ title: "遠鉄ストアのおいしい話｜遠鉄ストア" });
		const { query, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			{
				const page = query.page || "1";
				const blogRequest = ["open[not_contains]非公開"];
				if (query.category) blogRequest.push(`category[contains]${query.category}`);
				const response = await fetchDataV2($microcms, {
					endpoint: "store-blog",
					limit: 10,
					offset: (page - 1) * 10,
					paramsRequest: blogRequest,
					orders: "-open_from"
				});
				const totalCount = response.totalCount;
				const limit = 10;
				return {
					blogList: response.contents.map((blog) => ({
						id: blog.id,
						imgUrl: blog.filename1?.url || "",
						category: blog.category.toString(),
						title: blog.title,
						time: blog.open_from
					})),
					page: Number(page) || 1,
					totalPage: totalCount > limit ? Math.ceil(totalCount / limit) : 1
				};
			}
		}, "$b3PqzH4H6f");
		return { ...__d.value || {} };
	},
	data() {
		return {
			breadcrumbItems: [{
				text: "ホーム",
				disabled: false,
				href: "/"
			}, {
				text: "遠鉄ストアのおいしい話",
				disabled: true,
				href: "/blog/"
			}],
			totalVisible: 5
		};
	},
	mounted() {
		this.setTotalVisible();
		(void 0).addEventListener("resize", this.setTotalVisible);
	},
	beforeUnmount() {
		(void 0).removeEventListener("resize", this.setTotalVisible);
	},
	methods: {
		handlePageChange() {
			const currentCategory = this.$route.query.category;
			(void 0).location.href = currentCategory ? `/blog?page=${this.page}&category=${currentCategory}` : `/blog?page=${this.page}`;
		},
		changeCategory(category) {
			this.page = 1;
			(void 0).location.href = category ? `/blog?page=1&category=${category}` : `/blog?page=1`;
		},
		setTotalVisible() {
			this.totalVisible = (void 0).innerWidth > 500 ? 7 : 5;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$2;
	const _component_BlogBanner = Banner_default;
	const _component_blog_page = Page_default;
	const _component_BlogItem = Item_default;
	const _component_VxPagination = _sfc_main$1;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content blog-container-custom" }, _attrs))} data-v-edd8e1a8><main data-v-edd8e1a8>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_BlogBanner, { class: "banner-blog-custom" }, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_blog_page, { onChangeCategory: $options.changeCategory }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<h2 class="blog_title_section font-stdEb" data-v-edd8e1a8${_scopeId}>新着記事</h2> <div class="new_box" data-v-edd8e1a8${_scopeId}><!--[-->`);
				ssrRenderList(_ctx.blogList, (blog) => {
					_push(ssrRenderComponent(_component_BlogItem, {
						key: blog.id,
						"blog-item": blog
					}, null, _parent, _scopeId));
				});
				_push(`<!--]--></div> <div class="d-flex justify-start paginate-wrap mt-5" data-v-edd8e1a8${_scopeId}>`);
				if (_ctx.totalPage > 1) _push(ssrRenderComponent(_component_VxPagination, {
					modelValue: _ctx.page,
					"onUpdate:modelValue": ($event) => _ctx.page = $event,
					class: ["text-left", {
						"first-page": _ctx.page === 1,
						"last-page": _ctx.page === _ctx.totalPage
					}],
					length: _ctx.totalPage,
					"total-visible": $data.totalVisible,
					onInput: $options.handlePageChange
				}, null, _parent, _scopeId));
				else _push(`<!---->`);
				_push(`</div>`);
			} else return [
				createVNode("h2", { class: "blog_title_section font-stdEb" }, "新着記事"),
				createTextVNode(),
				createVNode("div", { class: "new_box" }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.blogList, (blog) => {
					return openBlock(), createBlock(_component_BlogItem, {
						key: blog.id,
						"blog-item": blog
					}, null, 8, ["blog-item"]);
				}), 128))]),
				createTextVNode(),
				createVNode("div", { class: "d-flex justify-start paginate-wrap mt-5" }, [_ctx.totalPage > 1 ? (openBlock(), createBlock(_component_VxPagination, {
					key: 0,
					modelValue: _ctx.page,
					"onUpdate:modelValue": ($event) => _ctx.page = $event,
					class: ["text-left", {
						"first-page": _ctx.page === 1,
						"last-page": _ctx.page === _ctx.totalPage
					}],
					length: _ctx.totalPage,
					"total-visible": $data.totalVisible,
					onInput: $options.handlePageChange
				}, null, 8, [
					"modelValue",
					"onUpdate:modelValue",
					"class",
					"length",
					"total-visible",
					"onInput"
				])) : createCommentVNode("", true)])
			];
		}),
		_: 1
	}, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var blog_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-edd8e1a8"]]);

export { blog_default as default };
//# sourceMappingURL=blog-BhjO1NXe.mjs.map
