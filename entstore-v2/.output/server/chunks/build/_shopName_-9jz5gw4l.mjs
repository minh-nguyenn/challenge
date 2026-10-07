import { _ as _plugin_vue_export_helper_default, b as useNuxtApp, a as useRoute$2, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { c as checkLengthTitle, b as formatDateMomentYMD, f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { S as SHOP_LIST } from './shop-data-X-r7ax_k.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/assets/images/bnr_recruit.webp
var bnr_recruit_default = "" + __buildAssetsURL("bnr_recruit.B-ebLHO1.webp");
//#endregion
//#region app/pages/shop/[shopArea]/[shopName].vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	async setup() {
		const __nuxtApp = useNuxtApp();
		const { $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			return { infoData: (await fetchDataV2($microcms, {
				limit: 1,
				offset: 0,
				endpoint: "store-info",
				orders: "-post_date",
				paramsRequest: [`category[exists]`]
			}))?.contents || [] };
		}, "$Syq3a0BCF2");
		__nuxtApp.runWithContext(() => useHead$1({ title: `${__d.value?.shopDetail.shopName}${__d.value?.shopDetail.subName || ""}｜店舗情報｜遠鉄ストア` }));
		return { ...__d.value || {} };
	},
	data() {
		return {};
	},
	computed: {
		shopDetail() {
			return (SHOP_LIST[this.$route.params.shopArea] || []).find((store) => store.globalName === this.$route.params.shopName) || {};
		},
		breadcrumbItems() {
			return [
				{
					text: "ホーム",
					disabled: false,
					href: "/"
				},
				{
					text: "店舗情報",
					disabled: false,
					href: "/shop"
				},
				{
					text: this.shopDetail?.shopName + (this.shopDetail.subName || ""),
					disabled: true,
					href: "/shop"
				}
			];
		}
	},
	methods: {
		formatDateMomentYMD,
		checkLengthTitle,
		openPdfInNewTab(filePath) {
			const pdfUrl = filePath.default;
			(void 0).open(pdfUrl).focus();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content shop-detail-container" }, _attrs))} data-v-786c4b56><main data-v-786c4b56>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $options.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-786c4b56>${ssrInterpolate($options.shopDetail.shopName + ($options.shopDetail.subName || ""))}</h2> `);
	if ($options.shopDetail.detail?.title) _push(`<p class="lead d-none-mobile" data-v-786c4b56>${$options.shopDetail.detail?.title ?? ""}</p>`);
	else _push(`<!---->`);
	_push(` `);
	if (_ctx.infoData && _ctx.infoData.length > 0) _push(ssrRenderComponent(_component_AppArticle, { title: "お知らせ" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<ul class="news" data-v-786c4b56${_scopeId}><!--[-->`);
				ssrRenderList(_ctx.infoData, (item) => {
					_push(`<li data-v-786c4b56${_scopeId}>${ssrInterpolate($options.formatDateMomentYMD(item.post_date))} `);
					if (item.category && item.category.length) _push(`<span class="category" data-v-786c4b56${_scopeId}>${ssrInterpolate(item.category.toString())}</span>`);
					else _push(`<!---->`);
					_push(` <a${ssrRenderAttr("href", `/info/detail/${item.id}`)} data-v-786c4b56${_scopeId}>${$options.checkLengthTitle(item.title, 100).replaceAll("<br>", "") ?? ""}</a></li>`);
				});
				_push(`<!--]--></ul>`);
			} else return [createVNode("ul", { class: "news" }, [(openBlock(true), createBlock(Fragment, null, renderList(_ctx.infoData, (item) => {
				return openBlock(), createBlock("li", { key: item.id }, [
					createTextVNode(toDisplayString($options.formatDateMomentYMD(item.post_date)) + " ", 1),
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
			}), 128))])];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(` `);
	if ($options.shopDetail.detail?.image.length) {
		_push(`<div class="d-flex justify-center shop-bg" data-v-786c4b56><div class="${ssrRenderClass([{ "bit-img": $options.shopDetail.detail?.image.length < 3 }, "shop-img"])}" data-v-786c4b56><p class="d-none-des" data-v-786c4b56>${$options.shopDetail.detail?.title ?? ""}</p> <!--[-->`);
		ssrRenderList($options.shopDetail.detail?.image || [], (image, index) => {
			_push(`<div data-v-786c4b56><img class="fullImage"${ssrRenderAttr("src", image.url)} data-v-786c4b56></div>`);
		});
		_push(`<!--]--></div></div>`);
	} else _push(`<!---->`);
	_push(` `);
	if ($options.shopDetail.shopBanner) _push(`<p class="shopBanner" data-v-786c4b56><img${ssrRenderAttr("src", $options.shopDetail.shopBanner.imgUrl)}${ssrRenderAttr("alt", $options.shopDetail.shopBanner.alt)} data-v-786c4b56></p>`);
	else _push(`<!---->`);
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "店舗基本情報",
		class: "mt-8"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<article class="wColumn" data-v-786c4b56${_scopeId}><section class="contentInner mobile-box" data-v-786c4b56${_scopeId}><table class="table-horz d-none-des" data-v-786c4b56${_scopeId}><tbody data-v-786c4b56${_scopeId}><tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>営業時間</th> <td data-v-786c4b56${_scopeId}>${$options.shopDetail.time + ($options.shopDetail.time_weekends ? "<br/>" + $options.shopDetail.time_weekends : "") + ($options.shopDetail.time_others ? "<br/>" + $options.shopDetail.time_others : "")}</td></tr> <tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>住所</th> <td data-v-786c4b56${_scopeId}>${ssrInterpolate($options.shopDetail.address)}</td></tr> <tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>電話番号</th> <td data-v-786c4b56${_scopeId}>${$options.shopDetail.phone + ($options.shopDetail.phone_others ? "<br/>" + $options.shopDetail.phone_others : "")}</td></tr> <tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>最寄駅・バス停</th> <td data-v-786c4b56${_scopeId}>${$options.shopDetail.detail?.nearestBusStation ?? ""}</td></tr> <tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>駐車場台数</th> <td data-v-786c4b56${_scopeId}>${ssrInterpolate($options.shopDetail.detail?.numberParking)}</td></tr></tbody></table> `);
				if ($options.shopDetail.detail?.busImage && $options.shopDetail.detail?.busImage.length > 0) {
					_push(`<div class="d-none-des" data-v-786c4b56${_scopeId}><!--[-->`);
					ssrRenderList($options.shopDetail.detail.busImage, (bus, index) => {
						_push(`<div class="recruit" data-v-786c4b56${_scopeId}><img${ssrRenderAttr("src", bus.url)} class="fullImage"${ssrRenderAttr("alt", bus.alt)} data-v-786c4b56${_scopeId}></div>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(` <iframe${ssrRenderAttr("src", $options.shopDetail.detail?.googleMapUrl)} data-v-786c4b56${_scopeId}></iframe></section> <section class="contentInner d-none-mobile" data-v-786c4b56${_scopeId}><table data-v-786c4b56${_scopeId}><tbody data-v-786c4b56${_scopeId}><tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>営業時間</th> <td data-v-786c4b56${_scopeId}>${$options.shopDetail.time + ($options.shopDetail.time_weekends ? "<br/>" + $options.shopDetail.time_weekends : "") + ($options.shopDetail.time_others ? "<br/>" + $options.shopDetail.time_others : "")}</td></tr> <tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>住所</th> <td data-v-786c4b56${_scopeId}>${ssrInterpolate($options.shopDetail.address)}</td></tr> <tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>電話番号</th> <td data-v-786c4b56${_scopeId}>${$options.shopDetail.phone + ($options.shopDetail.phone_others ? "<br/>" + $options.shopDetail.phone_others : "")}</td></tr> <tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>最寄駅・バス停</th> <td data-v-786c4b56${_scopeId}>${$options.shopDetail.detail?.nearestBusStation ?? ""}</td></tr> <tr data-v-786c4b56${_scopeId}><th data-v-786c4b56${_scopeId}>駐車場台数</th> <td data-v-786c4b56${_scopeId}>${ssrInterpolate($options.shopDetail.detail?.numberParking)}</td></tr></tbody></table> <p class="recruit mb-0" data-v-786c4b56${_scopeId}><a href="https://entstore-recruit.net/jobfind-pc/area/Tokai/All?freeword=%E5%AF%8C%E5%A1%9A%E5%BA%97" target="_blank" data-v-786c4b56${_scopeId}><img${ssrRenderAttr("src", bnr_recruit_default)} width="472" height="91" alt="遠鉄ストアで一緒に働きませんか？" data-v-786c4b56${_scopeId}></a></p> `);
				if ($options.shopDetail.detail?.busImage && $options.shopDetail.detail?.busImage.length > 0) {
					_push(`<div data-v-786c4b56${_scopeId}><!--[-->`);
					ssrRenderList($options.shopDetail.detail.busImage, (bus, index) => {
						_push(`<p class="recruit mb-0" data-v-786c4b56${_scopeId}><img${ssrRenderAttr("src", bus.url)} width="472" height="91"${ssrRenderAttr("alt", bus.alt)} data-v-786c4b56${_scopeId}></p>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(`</section></article>`);
			} else return [createVNode("article", { class: "wColumn" }, [
				createVNode("section", { class: "contentInner mobile-box" }, [
					createVNode("table", { class: "table-horz d-none-des" }, [createVNode("tbody", null, [
						createVNode("tr", null, [
							createVNode("th", null, "営業時間"),
							createTextVNode(),
							createVNode("td", { innerHTML: $options.shopDetail.time + ($options.shopDetail.time_weekends ? "<br/>" + $options.shopDetail.time_weekends : "") + ($options.shopDetail.time_others ? "<br/>" + $options.shopDetail.time_others : "") }, null, 8, ["innerHTML"])
						]),
						createTextVNode(),
						createVNode("tr", null, [
							createVNode("th", null, "住所"),
							createTextVNode(),
							createVNode("td", null, toDisplayString($options.shopDetail.address), 1)
						]),
						createTextVNode(),
						createVNode("tr", null, [
							createVNode("th", null, "電話番号"),
							createTextVNode(),
							createVNode("td", { innerHTML: $options.shopDetail.phone + ($options.shopDetail.phone_others ? "<br/>" + $options.shopDetail.phone_others : "") }, null, 8, ["innerHTML"])
						]),
						createTextVNode(),
						createVNode("tr", null, [
							createVNode("th", null, "最寄駅・バス停"),
							createTextVNode(),
							createVNode("td", { innerHTML: $options.shopDetail.detail?.nearestBusStation }, null, 8, ["innerHTML"])
						]),
						createTextVNode(),
						createVNode("tr", null, [
							createVNode("th", null, "駐車場台数"),
							createTextVNode(),
							createVNode("td", null, toDisplayString($options.shopDetail.detail?.numberParking), 1)
						])
					])]),
					createTextVNode(),
					$options.shopDetail.detail?.busImage && $options.shopDetail.detail?.busImage.length > 0 ? (openBlock(), createBlock("div", {
						key: 0,
						class: "d-none-des"
					}, [(openBlock(true), createBlock(Fragment, null, renderList($options.shopDetail.detail.busImage, (bus, index) => {
						return openBlock(), createBlock("div", {
							key: index,
							class: "recruit"
						}, [createVNode("img", {
							src: bus.url,
							class: "fullImage",
							alt: bus.alt,
							onClick: ($event) => $options.openPdfInNewTab(bus.to)
						}, null, 8, [
							"src",
							"alt",
							"onClick"
						])]);
					}), 128))])) : createCommentVNode("", true),
					createTextVNode(),
					createVNode("iframe", { src: $options.shopDetail.detail?.googleMapUrl }, null, 8, ["src"])
				]),
				createTextVNode(),
				createVNode("section", { class: "contentInner d-none-mobile" }, [
					createVNode("table", null, [createVNode("tbody", null, [
						createVNode("tr", null, [
							createVNode("th", null, "営業時間"),
							createTextVNode(),
							createVNode("td", { innerHTML: $options.shopDetail.time + ($options.shopDetail.time_weekends ? "<br/>" + $options.shopDetail.time_weekends : "") + ($options.shopDetail.time_others ? "<br/>" + $options.shopDetail.time_others : "") }, null, 8, ["innerHTML"])
						]),
						createTextVNode(),
						createVNode("tr", null, [
							createVNode("th", null, "住所"),
							createTextVNode(),
							createVNode("td", null, toDisplayString($options.shopDetail.address), 1)
						]),
						createTextVNode(),
						createVNode("tr", null, [
							createVNode("th", null, "電話番号"),
							createTextVNode(),
							createVNode("td", { innerHTML: $options.shopDetail.phone + ($options.shopDetail.phone_others ? "<br/>" + $options.shopDetail.phone_others : "") }, null, 8, ["innerHTML"])
						]),
						createTextVNode(),
						createVNode("tr", null, [
							createVNode("th", null, "最寄駅・バス停"),
							createTextVNode(),
							createVNode("td", { innerHTML: $options.shopDetail.detail?.nearestBusStation }, null, 8, ["innerHTML"])
						]),
						createTextVNode(),
						createVNode("tr", null, [
							createVNode("th", null, "駐車場台数"),
							createTextVNode(),
							createVNode("td", null, toDisplayString($options.shopDetail.detail?.numberParking), 1)
						])
					])]),
					createTextVNode(),
					createVNode("p", { class: "recruit mb-0" }, [createVNode("a", {
						href: "https://entstore-recruit.net/jobfind-pc/area/Tokai/All?freeword=%E5%AF%8C%E5%A1%9A%E5%BA%97",
						target: "_blank"
					}, [createVNode("img", {
						src: bnr_recruit_default,
						width: "472",
						height: "91",
						alt: "遠鉄ストアで一緒に働きませんか？"
					})])]),
					createTextVNode(),
					$options.shopDetail.detail?.busImage && $options.shopDetail.detail?.busImage.length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [(openBlock(true), createBlock(Fragment, null, renderList($options.shopDetail.detail.busImage, (bus, index) => {
						return openBlock(), createBlock("p", {
							key: index,
							class: "recruit mb-0"
						}, [createVNode("img", {
							src: bus.url,
							width: "472",
							height: "91",
							alt: bus.alt,
							onClick: ($event) => $options.openPdfInNewTab(bus.to)
						}, null, 8, [
							"src",
							"alt",
							"onClick"
						])]);
					}), 128))])) : createCommentVNode("", true)
				])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	if ($options.shopDetail.detail?.services?.length) _push(ssrRenderComponent(_component_AppArticle, {
		title: "利用できるサービス",
		class: "mt-md-16 mb-8"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="shop-service mobile-box" data-v-786c4b56${_scopeId}><!--[-->`);
				ssrRenderList($options.shopDetail.detail?.services || [], (service, index) => {
					_push(`<img${ssrRenderAttr("src", service)} data-v-786c4b56${_scopeId}>`);
				});
				_push(`<!--]--></div>`);
			} else return [createVNode("div", { class: "shop-service mobile-box" }, [(openBlock(true), createBlock(Fragment, null, renderList($options.shopDetail.detail?.services || [], (service, index) => {
				return openBlock(), createBlock("img", {
					key: index,
					src: service
				}, null, 8, ["src"]);
			}), 128))])];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(` `);
	if ($options.shopDetail.detail?.tenant && $options.shopDetail.detail?.tenant.length) _push(ssrRenderComponent(_component_AppArticle, {
		title: "テナント・その他",
		class: "mt-4 box-item-article"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				if ($options.shopDetail.detail.tenant.filter((item) => item.image) && $options.shopDetail.detail.tenant.filter((item) => item.image).length > 0) {
					_push(`<div data-v-786c4b56${_scopeId}>`);
					if ($options.shopDetail.detail.desTenant) _push(`<div class="des-tenant" data-v-786c4b56${_scopeId}>${ssrInterpolate($options.shopDetail.detail.desTenant)}</div>`);
					else _push(`<!---->`);
					_push(` <div class="shop-tenant mobile-box" data-v-786c4b56${_scopeId}><!--[-->`);
					ssrRenderList($options.shopDetail.detail.tenant.filter((item) => item.image), (tenant) => {
						_push(`<a${ssrRenderAttr("href", tenant.detailTenantUrl || "#")} target="_blank" class="${ssrRenderClass({
							emptyUrl: !tenant.detailTenantUrl,
							gyokkado: tenant.detailTenantUrl.includes("gyokkado"),
							chateraise: tenant.detailTenantUrl.includes("chateraise"),
							apollo: tenant.detailTenantUrl.includes("apollo") || tenant.image.includes("apollo")
						})}" data-v-786c4b56${_scopeId}><figure data-v-786c4b56${_scopeId}>`);
						if (tenant.image) _push(`<img${ssrRenderAttr("src", tenant.image)}${ssrRenderAttr("alt", tenant.name)} data-v-786c4b56${_scopeId}>`);
						else _push(`<!---->`);
						_push(`</figure> <span data-v-786c4b56${_scopeId}>${tenant.name ?? ""}</span></a>`);
					});
					_push(`<!--]--></div></div>`);
				} else _push(`<!---->`);
				_push(` <div class="shop-tenant no-image mobile-box d-none-mobile" data-v-786c4b56${_scopeId}><!--[-->`);
				ssrRenderList($options.shopDetail.detail.tenant.filter((item) => item.detailTenantUrl).filter((item) => !item.image), (tenant) => {
					_push(`<a${ssrRenderAttr("href", tenant.detailTenantUrl)} target="_blank" data-v-786c4b56${_scopeId}><span data-v-786c4b56${_scopeId}>${tenant.name ?? ""}</span></a>`);
				});
				_push(`<!--]--> <!--[-->`);
				ssrRenderList($options.shopDetail.detail.tenant.filter((item) => !item.detailTenantUrl).filter((item) => !item.image), (tenant, index) => {
					_push(`<div style="${ssrRenderStyle(tenant.name === "ベンティ・デコ（美容室）" ? "width: 320px;" : "")}" data-v-786c4b56${_scopeId}><span data-v-786c4b56${_scopeId}>${tenant.name ?? ""}</span></div>`);
				});
				_push(`<!--]--></div> <div class="shop-tenant no-image mobile-box d-none-des mt-0 pt-0" data-v-786c4b56${_scopeId}><table class="table-horz" data-v-786c4b56${_scopeId}><tbody data-v-786c4b56${_scopeId}><!--[-->`);
				ssrRenderList($options.shopDetail.detail.tenant.filter((item) => !item.image), (tenant, index) => {
					_push(`<tr data-v-786c4b56${_scopeId}>`);
					if (index % 2 === 0) {
						_push(`<th data-v-786c4b56${_scopeId}>`);
						if (tenant.detailTenantUrl) _push(`<a${ssrRenderAttr("href", tenant.detailTenantUrl)} target="_blank" data-v-786c4b56${_scopeId}><span data-v-786c4b56${_scopeId}>${tenant.name ?? ""}</span></a>`);
						else _push(`<div data-v-786c4b56${_scopeId}><span data-v-786c4b56${_scopeId}>${tenant.name ?? ""}</span></div>`);
						_push(`</th>`);
					} else {
						_push(`<td data-v-786c4b56${_scopeId}>`);
						if (tenant.detailTenantUrl) _push(`<a${ssrRenderAttr("href", tenant.detailTenantUrl)} target="_blank" data-v-786c4b56${_scopeId}><span data-v-786c4b56${_scopeId}>${tenant.name ?? ""}</span></a>`);
						else _push(`<div data-v-786c4b56${_scopeId}><span data-v-786c4b56${_scopeId}>${tenant.name ?? ""}</span></div>`);
						_push(`</td>`);
					}
					_push(`</tr>`);
				});
				_push(`<!--]--></tbody></table></div>`);
			} else return [
				$options.shopDetail.detail.tenant.filter((item) => item.image) && $options.shopDetail.detail.tenant.filter((item) => item.image).length > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
					$options.shopDetail.detail.desTenant ? (openBlock(), createBlock("div", {
						key: 0,
						class: "des-tenant"
					}, toDisplayString($options.shopDetail.detail.desTenant), 1)) : createCommentVNode("", true),
					createTextVNode(),
					createVNode("div", { class: "shop-tenant mobile-box" }, [(openBlock(true), createBlock(Fragment, null, renderList($options.shopDetail.detail.tenant.filter((item) => item.image), (tenant) => {
						return openBlock(), createBlock("a", {
							key: tenant.detailTenantUrl || tenant.name,
							href: tenant.detailTenantUrl || "#",
							target: "_blank",
							class: {
								emptyUrl: !tenant.detailTenantUrl,
								gyokkado: tenant.detailTenantUrl.includes("gyokkado"),
								chateraise: tenant.detailTenantUrl.includes("chateraise"),
								apollo: tenant.detailTenantUrl.includes("apollo") || tenant.image.includes("apollo")
							}
						}, [
							createVNode("figure", null, [tenant.image ? (openBlock(), createBlock("img", {
								key: 0,
								src: tenant.image,
								alt: tenant.name
							}, null, 8, ["src", "alt"])) : createCommentVNode("", true)]),
							createTextVNode(),
							createVNode("span", { innerHTML: tenant.name }, null, 8, ["innerHTML"])
						], 10, ["href"]);
					}), 128))])
				])) : createCommentVNode("", true),
				createTextVNode(),
				createVNode("div", { class: "shop-tenant no-image mobile-box d-none-mobile" }, [
					(openBlock(true), createBlock(Fragment, null, renderList($options.shopDetail.detail.tenant.filter((item) => item.detailTenantUrl).filter((item) => !item.image), (tenant) => {
						return openBlock(), createBlock("a", {
							key: tenant.detailTenantUrl,
							href: tenant.detailTenantUrl,
							target: "_blank"
						}, [createVNode("span", { innerHTML: tenant.name }, null, 8, ["innerHTML"])], 8, ["href"]);
					}), 128)),
					createTextVNode(),
					(openBlock(true), createBlock(Fragment, null, renderList($options.shopDetail.detail.tenant.filter((item) => !item.detailTenantUrl).filter((item) => !item.image), (tenant, index) => {
						return openBlock(), createBlock("div", {
							key: index,
							style: tenant.name === "ベンティ・デコ（美容室）" ? "width: 320px;" : ""
						}, [createVNode("span", { innerHTML: tenant.name }, null, 8, ["innerHTML"])], 4);
					}), 128))
				]),
				createTextVNode(),
				createVNode("div", { class: "shop-tenant no-image mobile-box d-none-des mt-0 pt-0" }, [createVNode("table", { class: "table-horz" }, [createVNode("tbody", null, [(openBlock(true), createBlock(Fragment, null, renderList($options.shopDetail.detail.tenant.filter((item) => !item.image), (tenant, index) => {
					return openBlock(), createBlock("tr", { key: tenant.detailTenantUrl }, [index % 2 === 0 ? (openBlock(), createBlock("th", { key: 0 }, [tenant.detailTenantUrl ? (openBlock(), createBlock("a", {
						key: 0,
						href: tenant.detailTenantUrl,
						target: "_blank"
					}, [createVNode("span", { innerHTML: tenant.name }, null, 8, ["innerHTML"])], 8, ["href"])) : (openBlock(), createBlock("div", { key: 1 }, [createVNode("span", { innerHTML: tenant.name }, null, 8, ["innerHTML"])]))])) : (openBlock(), createBlock("td", { key: 1 }, [tenant.detailTenantUrl ? (openBlock(), createBlock("a", {
						key: 0,
						href: tenant.detailTenantUrl,
						target: "_blank"
					}, [createVNode("span", { innerHTML: tenant.name }, null, 8, ["innerHTML"])], 8, ["href"])) : (openBlock(), createBlock("div", { key: 1 }, [createVNode("span", { innerHTML: tenant.name }, null, 8, ["innerHTML"])]))]))]);
				}), 128))])])])
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile btn-back",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/shop"
	}, null, _parent));
	_push(` <p class="btnBack d-none-des" data-v-786c4b56><a href="/shop/" data-v-786c4b56><span data-v-786c4b56>店舗一覧へ戻る</span></a></p></main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/[shopArea]/[shopName].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _shopName__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-786c4b56"]]);

export { _shopName__default as default };
//# sourceMappingURL=_shopName_-9jz5gw4l.mjs.map
