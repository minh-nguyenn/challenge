import { _ as _plugin_vue_export_helper_default, j as appendWebpFormat, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { V as VxSlick_default } from './VxSlick-EUvIyKhd.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { I as Item_default, B as Banner_default } from './Item-BsuXx1K-.mjs';
import { c as checkLengthTitle, a as formatDateYMD, d as fetchData, f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { i as img_noimg_default } from './img_noimg-BvILzYDp.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { b as ban_giftshop_default, a as ban_recipe_default } from './ban_recipe-BY6VYQuC.mjs';
import { withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/pages/index.vue
var _sfc_main = {
	components: {
		Slick: VxSlick_default,
		BlogBanner: Banner_default,
		BlogItem: Item_default,
		AppButtonNavigation: ButtonNavigation_default,
		AppArticle: Article_default
	},
	async setup() {
		useHead$1({ title: "遠鉄ストア" });
		const { $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const [infoRes, sliderRes] = await Promise.all([fetchDataV2($microcms, {
				limit: 3,
				offset: 0,
				endpoint: "store-info",
				orders: "-post_date"
			}), fetchDataV2($microcms, {
				fieldStart: "from_date",
				fieldEnd: "to_date",
				endpoint: "store-slider"
			})]);
			return {
				infoData: infoRes?.contents || [],
				sliderList: sliderRes?.contents || []
			};
		}, "$lp5r-VLBJA");
		return { ...__d.value || {} };
	},
	data() {
		return {
			newsList: [],
			blogList: [],
			eventData: [],
			recipeList: [],
			isMobile: false,
			checkInit: false,
			slickOptions: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3e3,
				dots: true
			},
			services: [],
			categoryColor: {
				野菜レシピ: "#47800d",
				肉レシピ: "#800d0d",
				魚レシピ: "#0d5980",
				その他: "#000000"
			}
		};
	},
	mounted() {
		this.checkInit = true;
		(void 0).$("#slider").flexslider({
			animation: "slide",
			rtl: true
		});
		(void 0).$("#carousel").flexslider({
			animation: "slide",
			itemWidth: 130,
			itemMargin: 5,
			mousewheel: true,
			rtl: true,
			asNavFor: "#slider"
		});
		(void 0).addEventListener("message", function(e) {
			const iframe = (void 0).getElementById("chirashi-next-iframe");
			const eventName = e.data[0];
			const data = e.data[1];
			if (eventName === "setHeight") iframe.setAttribute("height", data);
		}, false);
		this.checkIsMobile();
		(void 0).addEventListener("resize", this.checkIsMobile);
		this.fetchOtherData();
	},
	beforeUnmount() {
		(void 0).removeEventListener("resize", this.checkIsMobile);
	},
	methods: {
		formatDateYMD,
		checkLengthTitle,
		checkIsMobile() {
			this.isMobile = (void 0).innerWidth <= 768;
		},
		YMDFormat(inputDate) {
			const date = new Date(Date.parse(inputDate));
			return `${date.getFullYear()}年 ${String(date.getMonth() + 1).padStart(2, "0")}月 ${String(date.getDate()).padStart(2, "0")}日(${this.getDayOfWeek(date)})`;
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
		checkLengthTitleHTML(html, maxLength = 50) {
			if (!html) return "";
			const div = (void 0).createElement("div");
			div.innerHTML = html;
			const text = div.textContent || div.innerText || "";
			return text.trim().length > maxLength ? text.trim().slice(0, maxLength) + "..." : text.trim();
		},
		checkRecipeNew(startDate) {
			const inputDate = new Date(startDate);
			const now = /* @__PURE__ */ new Date();
			return inputDate.getMonth() === now.getMonth() && inputDate.getFullYear() === now.getFullYear();
		},
		async fetchOtherData() {
			try {
				const $microcms = this.$microcms;
				const [newsRes, blogRes, eventRes, recipeRes] = await Promise.all([
					fetchData($microcms, {
						limit: 3,
						offset: 0,
						endpoint: "store-news"
					}),
					fetchData($microcms, {
						limit: 3,
						offset: 0,
						endpoint: "store-blog",
						orders: "-open_from"
					}),
					fetchData($microcms, { endpoint: "store-event" }),
					fetchData($microcms, {
						endpoint: "store-recipes",
						fieldStart: "open_start",
						orders: "-open_start,-createdAt",
						limit: 2
					})
				]);
				this.newsList = newsRes?.contents || [];
				this.eventData = eventRes?.contents || [];
				this.recipeList = recipeRes?.contents || [];
				this.blogList = (blogRes?.contents || []).map((blog) => ({
					id: blog.id,
					imgUrl: appendWebpFormat(blog.filename1?.url) || "",
					category: blog.category.toString(),
					title: blog.title,
					time: blog.open_from
				}));
			} catch (error) {
				console.error("Error fetching other data:", error);
			}
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ClientOnly = ClientOnly;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	const _component_BlogBanner = Banner_default;
	const _component_BlogItem = Item_default;
	_push(`<main${ssrRenderAttrs(_attrs)} data-v-463ec1b3><div class="banner-top d-none-mobile" data-v-463ec1b3><div class="slider-top" data-v-463ec1b3><div id="slider" class="flexslider" data-v-463ec1b3><ul class="slides" data-v-463ec1b3><!--[-->`);
	ssrRenderList(_ctx.sliderList, (slide) => {
		_push(`<li data-v-463ec1b3><a${ssrRenderAttr("href", slide?.url)} data-v-463ec1b3><img${ssrRenderAttr("src", _ctx.$appendWebpFormat(slide.filename1?.url))} alt="" data-v-463ec1b3></a></li>`);
	});
	_push(`<!--]--></ul></div></div> <div class="carousel-bottom" data-v-463ec1b3><div id="carousel" class="flexslider" data-v-463ec1b3><ul class="slides" data-v-463ec1b3><!--[-->`);
	ssrRenderList(_ctx.sliderList, (slide) => {
		_push(`<li data-v-463ec1b3><img${ssrRenderAttr("src", _ctx.$appendWebpFormat(slide.filename2?.url))} alt="" data-v-463ec1b3></li>`);
	});
	_push(`<!--]--></ul></div></div></div> <div id="mobile-sliderBox" class="d-none-des" data-v-463ec1b3>`);
	_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
	_push(`</div> <div class="content" data-v-463ec1b3>`);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "お知らせ",
		href: "/info"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<ul class="news" data-v-463ec1b3${_scopeId}><!--[-->`);
				ssrRenderList(_ctx.infoData, (item) => {
					_push(`<li data-v-463ec1b3${_scopeId}>${ssrInterpolate($options.formatDateYMD(item.post_date))} `);
					if (item.category && item.category.length) _push(`<span class="category" data-v-463ec1b3${_scopeId}>${ssrInterpolate(item.category.toString())}</span>`);
					else _push(`<!---->`);
					_push(` <a${ssrRenderAttr("href", `/info/detail/${item.id}`)} data-v-463ec1b3${_scopeId}>${$options.checkLengthTitle(item.title, 100).replaceAll("<br>", "") ?? ""}</a></li>`);
				});
				_push(`<!--]--></ul> `);
				_push(ssrRenderComponent(_component_AppButtonNavigation, {
					href: "/info/",
					class: "mt-6",
					"long-btn": "",
					title: "一覧を表示"
				}, null, _parent, _scopeId));
			} else return [
				createVNode("ul", { class: "news" }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.infoData, (item) => {
					return openBlock(), createBlock("li", { key: item.id }, [
						createTextVNode(toDisplayString($options.formatDateYMD(item.post_date)) + " ", 1),
						item.category && item.category.length ? (openBlock(), createBlock("span", {
							key: 0,
							class: "category"
						}, toDisplayString(item.category.toString()), 1)) : createCommentVNode("", true),
						createTextVNode(),
						createVNode("a", {
							href: `/info/detail/${item.id}`,
							innerHTML: $options.checkLengthTitle(item.title, 100).replaceAll("<br>", "")
						}, null, 8, ["href", "innerHTML"])
					]);
				}), 128))]),
				createTextVNode(),
				createVNode(_component_AppButtonNavigation, {
					href: "/info/",
					class: "mt-6",
					"long-btn": "",
					title: "一覧を表示"
				})
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: $data.isMobile ? "企業情報・ニュースリリース" : "ニュースリリース",
		href: "/news"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<ul class="news" data-v-463ec1b3${_scopeId}><!--[-->`);
				ssrRenderList($data.newsList, (news) => {
					_push(`<li data-v-463ec1b3${_scopeId}>${ssrInterpolate($options.formatDateYMD(news.post_date))} <a${ssrRenderAttr("href", `/news/detail/${news.id}`)} data-v-463ec1b3${_scopeId}>${$options.checkLengthTitle(news.title, 100).replaceAll("<br>", "") ?? ""}</a></li>`);
				});
				_push(`<!--]--></ul> `);
				_push(ssrRenderComponent(_component_AppButtonNavigation, {
					class: "mt-6",
					"long-btn": "",
					href: "/news/",
					title: "一覧を表示"
				}, null, _parent, _scopeId));
			} else return [
				createVNode("ul", { class: "news" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.newsList, (news) => {
					return openBlock(), createBlock("li", { key: news.id }, [createTextVNode(toDisplayString($options.formatDateYMD(news.post_date)) + " ", 1), createVNode("a", {
						href: `/news/detail/${news.id}`,
						innerHTML: $options.checkLengthTitle(news.title, 100).replaceAll("<br>", "")
					}, null, 8, ["href", "innerHTML"])]);
				}), 128))]),
				createTextVNode(),
				createVNode(_component_AppButtonNavigation, {
					class: "mt-6",
					"long-btn": "",
					href: "/news/",
					title: "一覧を表示"
				})
			];
		}),
		_: 1
	}, _parent));
	_push(` <article id="bargainArea" data-v-463ec1b3><h2 class="bargainTitle" data-v-463ec1b3>今週のチラシ
        </h2> <div class="mobile-box" data-v-463ec1b3><iframe id="chirashi-next-iframe" src="https://next.retailstudio.jp/entetsu-store/039/chirashi/iframe/?shop-id=0000" scrolling="no" frameborder="0" width="" height="" data-v-463ec1b3></iframe></div> <section class="flier d-none-mobile" data-v-463ec1b3><p class="btnBig" data-v-463ec1b3><a href="/chirashi/pdf/" data-v-463ec1b3><span data-v-463ec1b3>PDFでご覧になる場合はこちら</span></a></p></section> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "mt-6 d-none-des",
		"long-btn": "",
		href: "/chirashi/pdf/",
		title: "PDFでご覧になる場合はこちら"
	}, null, _parent));
	_push(`</article> <article class="blog_top" data-v-463ec1b3>`);
	_push(ssrRenderComponent(_component_BlogBanner, null, null, _parent));
	_push(` <div class="new_box" data-v-463ec1b3><!--[-->`);
	ssrRenderList($data.blogList, (blog) => {
		_push(ssrRenderComponent(_component_BlogItem, {
			key: blog.id,
			"blog-item": blog
		}, null, _parent));
	});
	_push(`<!--]--></div> <p class="btn_blog" data-v-463ec1b3><a href="/blog/" data-v-463ec1b3>一覧を表示</a></p></article> <article class="wColumn d-none-mobile" data-v-463ec1b3><figure class="thumContent" data-v-463ec1b3><a href="https://shop.entstore.co.jp/f/ec" target="_blank" data-v-463ec1b3><img${ssrRenderAttr("src", ban_giftshop_default)} alt="ネット通販" data-v-463ec1b3></a></figure> <figure class="thumContent" data-v-463ec1b3><a href="https://cgc-kitchen365.jp/" target="_blank" data-v-463ec1b3><img${ssrRenderAttr("src", ban_recipe_default)} alt="レシピサイト Kitchen365 by ふれ愛交差点" data-v-463ec1b3></a></figure></article> `);
	if ($data.recipeList) _push(ssrRenderComponent(_component_AppArticle, {
		class: "box-list-recipe",
		title: "毎月更新レシピ集",
		"sub-title": "遠鉄ストアおすすめレシピ",
		href: "/service/recipe"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				ssrRenderList($data.recipeList, (recipe, index) => {
					_push(`<section style="${ssrRenderStyle(index === 1 ? "background-color: #f5f1e8;" : "")}" class="recipeList" data-v-463ec1b3${_scopeId}>`);
					if ($options.checkRecipeNew(recipe.open_start)) _push(`<span class="new" data-v-463ec1b3${_scopeId}>new</span>`);
					else _push(`<!---->`);
					_push(` <a target="_blank"${ssrRenderAttr("href", recipe.archive && recipe.archive.length > 0 ? `/service/recipe/archive/detail/${recipe.id}` : `${recipe.target_url}`)} data-v-463ec1b3${_scopeId}><figure data-v-463ec1b3${_scopeId}>`);
					if (recipe.filename1 && recipe.filename1.url) _push(`<img${ssrRenderAttr("src", _ctx.$appendWebpFormat(recipe.filename1.url))} class="fullImage" data-v-463ec1b3${_scopeId}>`);
					else _push(`<img${ssrRenderAttr("src", img_noimg_default)} class="fullImage" data-v-463ec1b3${_scopeId}>`);
					_push(`</figure> <div class="title-recipe" data-v-463ec1b3${_scopeId}><p class="category c_stats03" style="${ssrRenderStyle({ "background-color": $data.categoryColor[recipe.category.toString()] })}" data-v-463ec1b3${_scopeId}>${ssrInterpolate(recipe.category ? recipe.category.toString() : "")}</p> <h2 data-v-463ec1b3${_scopeId}>${ssrInterpolate(recipe.title ? $options.checkLengthTitle(recipe.title, 20) : "")}</h2> <p class="time" data-v-463ec1b3${_scopeId}>`);
					if (recipe.video) _push(`<span class="youtube" data-v-463ec1b3${_scopeId}>レシピ動画</span>`);
					else _push(`<!---->`);
					_push(` <span data-v-463ec1b3${_scopeId}>${ssrInterpolate($options.checkLengthTitle(String(recipe.time), 2)?.replace("...", ""))}分</span></p></div></a></section>`);
				});
				_push(`<!--]-->`);
			} else return [(openBlock(true), createBlock(Fragment, null, renderList($data.recipeList, (recipe, index) => {
				return openBlock(), createBlock("section", {
					key: index,
					style: index === 1 ? "background-color: #f5f1e8;" : "",
					class: "recipeList"
				}, [
					$options.checkRecipeNew(recipe.open_start) ? (openBlock(), createBlock("span", {
						key: 0,
						class: "new"
					}, "new")) : createCommentVNode("", true),
					createTextVNode(),
					createVNode("a", {
						target: "_blank",
						href: recipe.archive && recipe.archive.length > 0 ? `/service/recipe/archive/detail/${recipe.id}` : `${recipe.target_url}`
					}, [
						createVNode("figure", null, [recipe.filename1 && recipe.filename1.url ? (openBlock(), createBlock("img", {
							key: 0,
							src: _ctx.$appendWebpFormat(recipe.filename1.url),
							class: "fullImage"
						}, null, 8, ["src"])) : (openBlock(), createBlock("img", {
							key: 1,
							src: img_noimg_default,
							class: "fullImage"
						}))]),
						createTextVNode(),
						createVNode("div", { class: "title-recipe" }, [
							createVNode("p", {
								class: "category c_stats03",
								style: { "background-color": $data.categoryColor[recipe.category.toString()] }
							}, toDisplayString(recipe.category ? recipe.category.toString() : ""), 5),
							createTextVNode(),
							createVNode("h2", null, toDisplayString(recipe.title ? $options.checkLengthTitle(recipe.title, 20) : ""), 1),
							createTextVNode(),
							createVNode("p", { class: "time" }, [
								recipe.video ? (openBlock(), createBlock("span", {
									key: 0,
									class: "youtube"
								}, "レシピ動画")) : createCommentVNode("", true),
								createTextVNode(),
								createVNode("span", null, toDisplayString($options.checkLengthTitle(String(recipe.time), 2)?.replace("...", "")) + "分", 1)
							])
						])
					], 8, ["href"])
				], 4);
			}), 128))];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "box-event-custom",
		title: "キャンペーン・イベント情報",
		href: "/event"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				if ($data.eventData && $data.eventData.length) {
					_push(`<div class="wrap-aricle" data-v-463ec1b3${_scopeId}>`);
					if ($data.checkInit) {
						_push(`<div class="content-article" data-v-463ec1b3${_scopeId}><!--[-->`);
						ssrRenderList($data.eventData, (event) => {
							_push(`<a${ssrRenderAttr("href", `/event/detail/${event.id}`)} data-v-463ec1b3${_scopeId}><span class="cate color01" data-v-463ec1b3${_scopeId}>${ssrInterpolate(event.category.toString())}</span> <img${ssrRenderAttr("src", _ctx.$appendWebpFormat(event.filename1?.url))} alt="" data-v-463ec1b3${_scopeId}> <div class="caption" data-v-463ec1b3${_scopeId}>${$options.checkLengthTitleHTML(event.title, 50) ?? ""}</div></a>`);
						});
						_push(`<!--]--></div>`);
					} else _push(`<!---->`);
					_push(`</div>`);
				} else _push(`<!---->`);
			} else return [$data.eventData && $data.eventData.length ? (openBlock(), createBlock("div", {
				key: 0,
				class: "wrap-aricle"
			}, [$data.checkInit ? (openBlock(), createBlock("div", {
				key: 0,
				class: "content-article"
			}, [(openBlock(true), createBlock(Fragment, null, renderList($data.eventData, (event) => {
				return openBlock(), createBlock("a", {
					key: event.id,
					href: `/event/detail/${event.id}`
				}, [
					createVNode("span", { class: "cate color01" }, toDisplayString(event.category.toString()), 1),
					createTextVNode(),
					createVNode("img", {
						src: _ctx.$appendWebpFormat(event.filename1?.url),
						alt: ""
					}, null, 8, ["src"]),
					createTextVNode(),
					createVNode("div", {
						class: "caption",
						innerHTML: $options.checkLengthTitleHTML(event.title, 50)
					}, null, 8, ["innerHTML"])
				], 8, ["href"]);
			}), 128))])) : createCommentVNode("", true)])) : createCommentVNode("", true)];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "d-none-mobile mb-0",
		title: "遠鉄ストアの活動"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="wrap-content" data-v-463ec1b3${_scopeId}><section class="contentInner" data-v-463ec1b3${_scopeId}><div id="ambient" class="csrInfo" data-v-463ec1b3${_scopeId}><h3 data-v-463ec1b3${_scopeId}>環境への取り組み</h3> <ul data-v-463ec1b3${_scopeId}><li data-v-463ec1b3${_scopeId}><a href="/company/green/recycle/" data-v-463ec1b3${_scopeId}>資源回収</a></li> <li data-v-463ec1b3${_scopeId}><a href="/company/green/eco/" data-v-463ec1b3${_scopeId}>エコトレー</a></li> <li data-v-463ec1b3${_scopeId}><a href="/company/green/food" data-v-463ec1b3${_scopeId}>食品リサイクル</a></li></ul></div></section> <section class="contentInner" data-v-463ec1b3${_scopeId}><div id="social" class="csrInfo" data-v-463ec1b3${_scopeId}><h3 data-v-463ec1b3${_scopeId}>社会活動への取り組み</h3> <ul data-v-463ec1b3${_scopeId}><li data-v-463ec1b3${_scopeId}><a href="/company/social/cgc/" data-v-463ec1b3${_scopeId}>全国児童画コンクール</a></li> <li data-v-463ec1b3${_scopeId}><a href="/company/social/food/" data-v-463ec1b3${_scopeId}>食育体験</a></li> <li data-v-463ec1b3${_scopeId}><a href="/company/social/sports/" data-v-463ec1b3${_scopeId}>スポーツ・体育へのサポート</a></li></ul></div></section></div>`);
			else return [createVNode("div", { class: "wrap-content" }, [
				createVNode("section", { class: "contentInner" }, [createVNode("div", {
					id: "ambient",
					class: "csrInfo"
				}, [
					createVNode("h3", null, "環境への取り組み"),
					createTextVNode(),
					createVNode("ul", null, [
						createVNode("li", null, [createVNode("a", { href: "/company/green/recycle/" }, "資源回収")]),
						createTextVNode(),
						createVNode("li", null, [createVNode("a", { href: "/company/green/eco/" }, "エコトレー")]),
						createTextVNode(),
						createVNode("li", null, [createVNode("a", { href: "/company/green/food" }, "食品リサイクル")])
					])
				])]),
				createTextVNode(),
				createVNode("section", { class: "contentInner" }, [createVNode("div", {
					id: "social",
					class: "csrInfo"
				}, [
					createVNode("h3", null, "社会活動への取り組み"),
					createTextVNode(),
					createVNode("ul", null, [
						createVNode("li", null, [createVNode("a", { href: "/company/social/cgc/" }, "全国児童画コンクール")]),
						createTextVNode(),
						createVNode("li", null, [createVNode("a", { href: "/company/social/food/" }, "食育体験")]),
						createTextVNode(),
						createVNode("li", null, [createVNode("a", { href: "/company/social/sports/" }, "スポーツ・体育へのサポート")])
					])
				])])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "d-none-des",
		title: "サービス",
		href: "/service"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="pa-2" data-v-463ec1b3${_scopeId}><!--[-->`);
				ssrRenderList($data.services, (service, index) => {
					_push(`<section class="serviceInner" data-v-463ec1b3${_scopeId}><a${ssrRenderAttr("href", service.to)} data-v-463ec1b3${_scopeId}><figure data-v-463ec1b3${_scopeId}><img${ssrRenderAttr("src", _ctx.$appendWebpFormat(service?.url))}${ssrRenderAttr("alt", service.imgAlt)} class="fullImage d-block" data-v-463ec1b3${_scopeId}></figure> <h2 data-v-463ec1b3${_scopeId}>${ssrInterpolate(service.title)}</h2></a></section>`);
				});
				_push(`<!--]--></div>`);
			} else return [createVNode("div", { class: "pa-2" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.services, (service, index) => {
				return openBlock(), createBlock("section", {
					key: index,
					class: "serviceInner"
				}, [createVNode("a", { href: service.to }, [
					createVNode("figure", null, [createVNode("img", {
						src: _ctx.$appendWebpFormat(service?.url),
						alt: service.imgAlt,
						class: "fullImage d-block"
					}, null, 8, ["src", "alt"])]),
					createTextVNode(),
					createVNode("h2", null, toDisplayString(service.title), 1)
				], 8, ["href"])]);
			}), 128))])];
		}),
		_: 1
	}, _parent));
	_push(`</div></main>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-463ec1b3"]]);

export { pages_default as default };
//# sourceMappingURL=pages-Dr0Tk1eQ.mjs.map
