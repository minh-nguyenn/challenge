import { _ as _plugin_vue_export_helper_default, b as useNuxtApp, a as useRoute$2, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { B as Banner_default } from './Item-BsuXx1K-.mjs';
import { a as formatDateYMD } from './utils-CzPagAGc.mjs';
import { P as Page_default } from './Page-BW5MDNzf.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/pages/blog/detail/[id].vue
var _sfc_main = {
	components: {
		BlogPage: Page_default,
		BlogBanner: Banner_default
	},
	async setup() {
		const __nuxtApp = useNuxtApp();
		const { params, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			return { blogDetail: await $microcms.get({ endpoint: `store-blog/${params.id}` }) };
		}, "$CPjxWS7YgL");
		__nuxtApp.runWithContext(() => useHead$1({ title: `${__d.value?.blogDetail.title}｜遠鉄ストアのおいしい話｜遠鉄ストア` }));
		return { ...__d.value || {} };
	},
	data() {
		return { relatedProducts: [] };
	},
	mounted() {
		if (this.blogDetail && this.blogDetail.id) this.updatePopularCount(this.blogDetail.id);
		this.fetchBlog();
	},
	computed: { breadcrumbItems() {
		return [
			{
				text: "ホーム",
				disabled: false,
				href: "/"
			},
			{
				text: "遠鉄ストアのおいしい話",
				disabled: false,
				href: "/blog/"
			},
			{
				text: this.blogDetail.title || "",
				disabled: true
			}
		];
	} },
	methods: {
		formatDateYMD,
		changeCategory(category) {
			(void 0).location.href = category ? `/blog?category=${category}` : `/blog`;
		},
		async fetchBlog() {
			let category = "";
			let excludeId = "";
			if (this.blogDetail) {
				excludeId = this.blogDetail.id;
				category = this.blogDetail.category[0];
			}
			try {
				const fieldStart = "open_from";
				const fieldEnd = "open_to";
				const now = /* @__PURE__ */ new Date();
				const nowStr = this.formatDateYMD(now);
				const contents = (await this.$microcms.get({
					endpoint: "store-blog",
					queries: {
						limit: 4,
						filters: `${fieldStart}[less_than]${nowStr}[and](${fieldEnd}[not_exists]true[or]${fieldEnd}[greater_than]${nowStr})[and]category[contains]${category}`
					}
				})).contents;
				const blogs = [];
				for (let i = 0; i < contents.length; i++) if (blogs.length < 3) {
					if (contents[i].id !== excludeId) blogs.push(contents[i]);
				}
				const blogList = (blogs || []).map((blog) => ({
					id: blog.id,
					imgUrl: blog.filename1?.url || "",
					category: blog.category.toString(),
					title: blog.title,
					time: blog.open_from
				}));
				this.relatedProducts = blogList;
			} catch (error) {
				console.error("Failed to fetch related products:", error);
			}
		},
		async updatePopularCount(blogId) {
			try {
				const res = await this.$microcms.get({
					endpoint: "store-popular-blogs",
					queries: {
						filters: `blog_id[equals]${blogId}`,
						limit: 1
					}
				});
				if (res.contents.length > 0) {
					const item = res.contents[0];
					await this.$axios.$put("/api/update-popular-blogs", {
						contentId: item.id,
						blog_cnt: item.blog_cnt + 1
					});
				} else await this.$axios.$post("/api/update-popular-blogs", {
					blog_id: blogId,
					blog_cnt: 1
				});
			} catch (err) {
				console.error("Failed to update or create blog view count:", err);
			}
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_BlogBanner = Banner_default;
	const _component_blog_page = Page_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content wrap-blog-detail-custom" }, _attrs))} data-v-74b0efbe><main data-v-74b0efbe>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $options.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_BlogBanner, null, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_blog_page, {
		"related-products": $data.relatedProducts,
		onChangeCategory: $options.changeCategory
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="blog_entry_title" data-v-74b0efbe${_scopeId}><time class="new_list_time" data-v-74b0efbe${_scopeId}>${ssrInterpolate($options.formatDateYMD(_ctx.blogDetail.open_from, "."))}</time> <p class="new_list_category" data-v-74b0efbe${_scopeId}>${ssrInterpolate(_ctx.blogDetail.category.toString())}</p> <h2 class="new_list_title" data-v-74b0efbe${_scopeId}>${ssrInterpolate(_ctx.blogDetail.title)}</h2></div> <img${ssrRenderAttr("src", _ctx.$appendWebpFormat(_ctx.blogDetail.filename1?.url))} class="fullImage" alt="" data-v-74b0efbe${_scopeId}> <div class="entry-body" data-v-74b0efbe${_scopeId}>${_ctx.$transformImageSrc(_ctx.blogDetail.body) ?? ""}</div>`);
			else return [
				createVNode("div", { class: "blog_entry_title" }, [
					createVNode("time", { class: "new_list_time" }, toDisplayString($options.formatDateYMD(_ctx.blogDetail.open_from, ".")), 1),
					createTextVNode(),
					createVNode("p", { class: "new_list_category" }, toDisplayString(_ctx.blogDetail.category.toString()), 1),
					createTextVNode(),
					createVNode("h2", { class: "new_list_title" }, toDisplayString(_ctx.blogDetail.title), 1)
				]),
				createTextVNode(),
				createVNode("img", {
					src: _ctx.$appendWebpFormat(_ctx.blogDetail.filename1?.url),
					class: "fullImage",
					alt: ""
				}, null, 8, ["src"]),
				createTextVNode(),
				createVNode("div", {
					class: "entry-body",
					innerHTML: _ctx.$transformImageSrc(_ctx.blogDetail.body)
				}, null, 8, ["innerHTML"])
			];
		}),
		_: 1
	}, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/detail/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-74b0efbe"]]);

export { _id__default as default };
//# sourceMappingURL=_id_-DJj9qg3J.mjs.map
