import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { I as Item_default } from './Item-BsuXx1K-.mjs';
import { c as checkLengthTitle, a as formatDateYMD } from './utils-CzPagAGc.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';

//#region app/assets/images/icon-default.webp
var icon_default_default = "data:image/webp;base64,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";
//#endregion
//#region app/components/Blog/Page.vue
var _sfc_main = {
	name: "BlogPage",
	components: {
		BlogItem: Item_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	props: { relatedProducts: {
		type: Array,
		default: () => []
	} },
	data() {
		return {
			blogList: [
				{
					id: "1",
					imgUrl: "/assets/images/fc55ef1fedb844331963ee1eb311287cdf1c8fa4.webp",
					category: "商品",
					title: "シャリッと甘い！浜松市産すいか『縞無双』をご紹介",
					time: "2023.07.06"
				},
				{
					id: "2",
					imgUrl: "/assets/images/fc55ef1fedb844331963ee1eb311287cdf1c8fa4.webp",
					category: "商品",
					title: "シャリッと甘い！浜松市産すいか『縞無双』をご紹介",
					time: "2023.07.06"
				},
				{
					id: "3",
					imgUrl: "/assets/images/fc55ef1fedb844331963ee1eb311287cdf1c8fa4.webp",
					category: "商品",
					title: "シャリッと甘い！浜松市産すいか『縞無双』をご紹介",
					time: "2023.07.06"
				}
			],
			categories: [
				"すべてのカテゴリ",
				"商品",
				"ハレの日/イベント",
				"お得情報",
				"店舗/スタッフ",
				"豆知識"
			],
			popularArticles: []
		};
	},
	mounted() {
		this.fetchBlogCount();
	},
	methods: {
		isCurrentCategory(category) {
			return this.$route.query.category ? this.$route.query.category === category : category === "すべてのカテゴリ" && !this.$route.params.id;
		},
		filterCategory(category) {
			this.$emit("change-category", category === "すべてのカテゴリ" ? "" : category);
		},
		formatTime(string) {
			const date = new Date(string);
			return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
		},
		async fetchBlogCount() {
			try {
				const response = await this.$microcms.get({
					endpoint: "store-popular-blogs",
					queries: {
						orders: `-blog_cnt`,
						limit: 100
					}
				});
				const ids = [];
				const contents = response.contents;
				for (let i = 0; i < contents.length; i++) ids.push(contents[i].blog_id);
				if (ids.length > 0) await this.fetchBlog(ids);
			} catch (error) {
				console.error("Failed to fetch related products:", error);
			}
		},
		async fetchBlog(ids) {
			try {
				const fieldStart = "open_from";
				const fieldEnd = "open_to";
				const now = /* @__PURE__ */ new Date();
				const nowStr = this.formatDateYMD(now);
				const response = await this.$microcms.get({
					endpoint: "store-blog",
					queries: {
						ids: ids.join(","),
						limit: 5,
						filters: `${fieldStart}[less_than]${nowStr}[and](${fieldEnd}[not_exists]true[or]${fieldEnd}[greater_than]${nowStr})`
					}
				});
				const blogs = [];
				const contents = response.contents;
				for (let i = 0; i < ids.length; i++) {
					const item = contents.find((item) => item.id === ids[i]);
					if (item) blogs.push(item);
				}
				this.popularArticles = blogs.slice(0, 5);
			} catch (error) {
				console.error("Failed to fetch related products:", error);
			}
		},
		formatDateYMD,
		checkLengthTitle
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_BlogItem = Item_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-ad13a1bf><main data-v-ad13a1bf><div class="font-plus-data" data-v-ad13a1bf>関連記事</div> <div class="blog_wrap" data-v-ad13a1bf><section class="new" data-v-ad13a1bf>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</section> <div class="sidebar" data-v-ad13a1bf><aside class="blog_category" data-v-ad13a1bf><h2 class="blog_title_section type font-stdEb" data-v-ad13a1bf>カテゴリ</h2> <ul class="blog_category_list" data-v-ad13a1bf><!--[-->`);
	ssrRenderList($data.categories, (categoty) => {
		_push(`<li class="${ssrRenderClass({ active: $options.isCurrentCategory(categoty) })}" data-v-ad13a1bf>${ssrInterpolate(categoty)}</li>`);
	});
	_push(`<!--]--></ul></aside> `);
	_push(`<aside class="blog_favorite" data-v-ad13a1bf><h2 class="blog_title_section popular" data-v-ad13a1bf>人気記事</h2> <!--[-->`);
	ssrRenderList($data.popularArticles, (item, index) => {
		_push(`<div class="blog_favorite_list" data-v-ad13a1bf><a${ssrRenderAttr("href", "/blog/detail/" + item.id)} data-v-ad13a1bf><figure class="thum_img" data-v-ad13a1bf>`);
		if (item?.filename1 && item.filename1.url) _push(`<img${ssrRenderAttr("src", _ctx.$appendWebpFormat(item?.filename1?.url))} alt="シラスとにんにくの風味が食欲をそそる『ズミチャーハン』！K-MIXと遠鉄ストアのコラボ商品第2弾が登場" class="img_responsive" data-v-ad13a1bf>`);
		else _push(`<img${ssrRenderAttr("src", icon_default_default)} class="thum" data-v-ad13a1bf>`);
		_push(`</figure> <div class="blog_favorite_inner" data-v-ad13a1bf><p class="new_list_category" data-v-ad13a1bf>${ssrInterpolate(item.category[0])}</p> <time datetime="2023-03-29 20:00:00" class="new_list_time" data-v-ad13a1bf>${ssrInterpolate($options.formatTime(item.open_from))}</time> <p class="new_list_title" data-v-ad13a1bf>${ssrInterpolate($options.checkLengthTitle(item.title, 50))}</p></div></a></div>`);
	});
	_push(`<!--]--></aside>`);
	_push(`</div></div> `);
	if ($props.relatedProducts && $props.relatedProducts.length) {
		_push(`<div class="blog_category related-blogs" data-v-ad13a1bf><h2 class="blog_title_section product-relate type font-stdEb" data-v-ad13a1bf>関連記事</h2> <div class="blog_box" data-v-ad13a1bf><!--[-->`);
		ssrRenderList($props.relatedProducts, (blog) => {
			_push(ssrRenderComponent(_component_BlogItem, {
				key: blog.id,
				"blog-item": blog
			}, null, _parent));
		});
		_push(`<!--]--></div></div>`);
	} else _push(`<!---->`);
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/blog"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Page.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Page_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ad13a1bf"]]), { __name: "BlogPage" });

export { Page_default as P };
//# sourceMappingURL=Page-BW5MDNzf.mjs.map
