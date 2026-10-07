import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { b as formatDateMomentYMD, c as checkLengthTitle, a as formatDateYMD, f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { S as SHOP_LIST } from './shop-data-X-r7ax_k.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
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

//#region app/components/Store/Table.vue
var _sfc_main$1 = {
	name: "StoreTable",
	props: { domain: {
		type: Object,
		default: () => ({})
	} },
	methods: { toShopDetail(shopLink) {
		(void 0).location.href = shopLink;
	} }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-26af6038>`);
	if ($props.domain.head) _push(`<div class="heading" data-v-26af6038>${ssrInterpolate($props.domain.head)}</div>`);
	else _push(`<!---->`);
	_push(` <h4${ssrRenderAttr("id", $props.domain.id)} class="title-inner" data-v-26af6038>${ssrInterpolate($props.domain.name)}</h4> <table class="shoplist" data-v-26af6038><tbody data-v-26af6038><tr data-v-26af6038><th class="shopName" data-v-26af6038>店舗名</th> <th class="address" data-v-26af6038>住所</th> <th class="phone" data-v-26af6038>電話番号</th> <th class="time" data-v-26af6038>営業時間</th></tr> <!--[-->`);
	ssrRenderList($props.domain.storeList, (store, index) => {
		_push(`<tr class="shopinfo" data-v-26af6038><td data-v-26af6038><a${ssrRenderAttr("href", store.shopLink)} data-v-26af6038>${ssrInterpolate(store.shopName)} `);
		if (store.subName) _push(`<div data-v-26af6038>${ssrInterpolate(store.subName)}</div>`);
		else _push(`<!---->`);
		_push(`</a></td> <td data-v-26af6038>${ssrInterpolate(store.address)}</td> <td data-v-26af6038>${ssrInterpolate(store.phone)}</td> <td data-v-26af6038>${store.time + (store.time_weekends ? "<br/>" + store.time_weekends : "")}</td></tr>`);
	});
	_push(`<!--]--></tbody></table></div>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Store/Table.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Table_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-26af6038"]]), { __name: "StoreTable" });
//#endregion
//#region app/assets/images/map.webp
var map_default = "" + __buildAssetsURL("map.Doi1zGHK.webp");
//#endregion
//#region app/assets/images/img_food.webp
var img_food_default = "" + __buildAssetsURL("img_food.DpyxTQBP.webp");
//#endregion
//#region app/pages/shop/index.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		StoreTable: Table_default,
		AppArticle: Article_default
	},
	async setup() {
		useHead$1({ title: "店舗情報｜遠鉄ストア" });
		const { $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const [infoRes] = await Promise.all([fetchDataV2($microcms, {
				limit: 1,
				offset: 0,
				endpoint: "store-info",
				orders: "-post_date",
				paramsRequest: [`category[exists]`]
			})]);
			return { infoData: infoRes?.contents || [] };
		}, "$i17KKsTZvM");
		return { ...__d.value || {} };
	},
	data() {
		return {
			breadcrumbItems: [{
				text: "ホーム",
				disabled: false,
				href: "/"
			}, {
				text: "店舗情報",
				disabled: true,
				href: "/shop"
			}],
			domainList: [
				{
					name: "浜松市中央区",
					storeList: SHOP_LIST.chuoku,
					id: "chuoku",
					head: "※マツモトキヨシ・薬局・シャトレーゼの営業時間等については店舗ページをご確認ください"
				},
				{
					name: "浜松市浜名区",
					storeList: SHOP_LIST.hamanaku,
					id: "kitaku"
				},
				{
					name: "浜松市天竜区",
					storeList: SHOP_LIST.tenryuku,
					id: "tenryuku"
				},
				{
					name: "磐田市",
					storeList: SHOP_LIST.iwatashi,
					id: "iwatashi"
				},
				{
					name: "袋井市",
					storeList: SHOP_LIST.hukuroishi,
					id: "hukuroishi"
				},
				{
					name: "周智郡",
					storeList: SHOP_LIST.shuchigun,
					id: "shuchigun"
				},
				{
					name: "掛川市",
					storeList: SHOP_LIST.kakegawashi,
					id: "kakegawashi"
				},
				{
					name: "菊川市",
					storeList: SHOP_LIST.kikugawashi,
					id: "kikugawashi"
				},
				{
					name: "湖西市",
					storeList: SHOP_LIST.kosaishi,
					id: "kosaishi"
				},
				{
					name: "豊川市",
					storeList: SHOP_LIST.toyokawashi,
					id: "toyokawashi"
				},
				{
					name: "豊橋市",
					storeList: SHOP_LIST.toyohashishi,
					id: "toyohashishi"
				}
			],
			shopArea: [
				{
					"title": "浜松市中央区",
					id: "chuoku",
					"shopList": [
						{
							"title": "富塚店",
							"shopUrl": "/shop/chuoku/tomituka/"
						},
						{
							"title": "向宿店",
							"shopUrl": "/shop/chuoku/mukoujuku/"
						},
						{
							"title": "西ヶ崎店",
							"shopUrl": "/shop/chuoku/nishigasaki/"
						},
						{
							"title": "笠井店・マツモトキヨシ笠井店",
							"shopUrl": "/shop/chuoku/kasai/"
						},
						{
							"title": "鴨江店",
							"shopUrl": "/shop/chuoku/kamoe/"
						},
						{
							"title": "フードワン佐鳴台店",
							"shopUrl": "/shop/chuoku/foodone_sanarudai/"
						},
						{
							"title": "立野店・マツモトキヨシ立野店",
							"shopUrl": "/shop/chuoku/tateno/"
						},
						{
							"title": "初生店",
							"shopUrl": "/shop/chuoku/hatsuoi/"
						},
						{
							"title": "大人見店",
							"shopUrl": "/shop/chuoku/oohitomi/"
						},
						{
							"title": "天王店",
							"shopUrl": "/shop/chuoku/tennou/"
						},
						{
							"title": "篠原店",
							"shopUrl": "/shop/chuoku/shinohara/"
						},
						{
							"title": "新橋店・マツモトキヨシ新橋店",
							"shopUrl": "/shop/chuoku/nippashi/"
						},
						{
							"title": "大平台店",
							"shopUrl": "/shop/chuoku/oohiradai/"
						},
						{
							"title": "桜台店",
							"shopUrl": "/shop/chuoku/sakuradai/"
						},
						{
							"title": "フードワン南浅田店",
							"shopUrl": "/shop/chuoku/foodone_minamiasada/"
						},
						{
							"title": "フードワン泉店",
							"shopUrl": "/shop/chuoku/foodone_izumi/"
						},
						{
							"title": "フードワン高林店",
							"shopUrl": "/shop/chuoku/foodone_takabayashi/"
						},
						{
							"title": "フードワン東伊場店・マツモトキヨシ東伊場店",
							"shopUrl": "/shop/chuoku/foodone_higashiiba/"
						},
						{
							"title": "西伝寺店",
							"shopUrl": "/shop/chuoku/seidenji/"
						},
						{
							"title": "マツモトキヨシさぎの宮駅前店",
							"shopUrl": "/shop/chuoku/saginomiya/"
						}
					]
				},
				{
					"title": "浜松市浜名区",
					id: "kitaku",
					"shopList": [
						{
							"title": "浜北店・マツモトキヨシ浜北店",
							"shopUrl": "/shop/hamanaku/hamakita/"
						},
						{
							"title": "フードワンきらりタウン店",
							"shopUrl": "/shop/hamanaku/foodone_kiraritown/"
						},
						{
							"title": "三ヶ日店",
							"shopUrl": "/shop/hamanaku/mikkabi/"
						},
						{
							"title": "スーパーマーケットみっかび",
							"shopUrl": "/shop/hamanaku/super-mikkabi/"
						}
					]
				},
				{
					"title": "浜松市天竜区",
					id: "tenryuku",
					"shopList": [{
						"title": "天竜店",
						"shopUrl": "/shop/tenryuku/tenryu/"
					}]
				},
				{
					"title": "磐田市",
					id: "iwatashi",
					"shopList": [
						{
							"title": "磐田店・マツモトキヨシ磐田店",
							"shopUrl": "/shop/iwatashi/iwata/"
						},
						{
							"title": "竜洋店",
							"shopUrl": "/shop/iwatashi/ryuyou/"
						},
						{
							"title": "池田店・マツモトキヨシ池田店",
							"shopUrl": "/shop/iwatashi/ikeda/"
						},
						{
							"title": "見付店",
							"shopUrl": "/shop/iwatashi/mituke/"
						}
					]
				},
				{
					"title": "袋井市",
					id: "hukuroishi",
					"shopList": [{
						"title": "浅羽店・マツモトキヨシ浅羽店",
						"shopUrl": "/shop/hukuroishi/asaba/"
					}, {
						"title": "袋井久能店",
						"shopUrl": "/shop/hukuroishi/kuno/"
					}]
				},
				{
					"title": "周智郡",
					id: "shuchigun",
					"shopList": [{
						"title": "森店",
						"shopUrl": "/shop/shuchigun/mori/"
					}]
				},
				{
					"title": "掛川市",
					id: "kakegawashi",
					"shopList": [{
						"title": "掛川中央店",
						"shopUrl": "/shop/kakegawashi/kakegawa/"
					}]
				},
				{
					"title": "菊川市",
					id: "kikugawashi",
					"shopList": [{
						"title": "菊川店・マツモトキヨシ菊川店・シャトレーゼ菊川店",
						"shopUrl": "/shop/kikugawashi/kikugawa/"
					}]
				},
				{
					"title": "湖西市",
					id: "kosaishi",
					"shopList": [{
						"title": "湖西店・シャトレーゼ湖西店",
						"shopUrl": "/shop/kosaishi/kosai/"
					}]
				},
				{
					"title": "豊川市",
					id: "toyokawashi",
					"shopList": [{
						"title": "豊川店・マツモトキヨシ豊川店",
						"shopUrl": "/shop/toyokawashi/toyokawa/"
					}]
				},
				{
					"title": "豊橋市",
					id: "toyohashishi",
					"shopList": [{
						"title": "豊橋曙店",
						"shopUrl": "/shop/toyohashishi/toyohashiakebono/"
					}]
				}
			],
			storeStudio: [
				{
					"title": "フードワン佐鳴台店",
					"shopUrl": "/shop/chuoku/foodone_sanarudai/"
				},
				{
					"title": "笠井店",
					"shopUrl": "/shop/chuoku/kasai/"
				},
				{
					"title": "フードワンきらりタウン店",
					"shopUrl": "/shop/hamanaku/foodone_kiraritown"
				},
				{
					"title": "フードワン南浅田店",
					"shopUrl": "/shop/chuoku/foodone_minamiasada"
				}
			]
		};
	},
	mounted() {
		(void 0).$("map").imageMapResize();
	},
	methods: {
		formatDateYMD,
		checkLengthTitle,
		formatDateMomentYMD
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$2;
	const _component_AppArticle = Article_default;
	const _component_StoreTable = Table_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content shop-container" }, _attrs))} data-v-6d6822e0><main data-v-6d6822e0>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-6d6822e0>店舗情報</h2> `);
	if (_ctx.infoData && _ctx.infoData.length > 0) _push(ssrRenderComponent(_component_AppArticle, {
		title: "お知らせ",
		href: "/info"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<ul class="news" data-v-6d6822e0${_scopeId}><!--[-->`);
				ssrRenderList(_ctx.infoData, (item) => {
					_push(`<li data-v-6d6822e0${_scopeId}>${ssrInterpolate($options.formatDateMomentYMD(item.post_date))} `);
					if (item.category && item.category.length) _push(`<span class="category" data-v-6d6822e0${_scopeId}>${ssrInterpolate(item.category.toString())}</span>`);
					else _push(`<!---->`);
					_push(` <a${ssrRenderAttr("href", `/info/detail/${item.id}`)} data-v-6d6822e0${_scopeId}>${$options.checkLengthTitle(item.title, 100).replaceAll("<br>", "") ?? ""}</a></li>`);
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
	_push(` <p class="subtitle d-none-des" data-v-6d6822e0>近くて便利。<br data-v-6d6822e0>あなたの近くの遠鉄ストア。</p> <p class="lead d-none-mobile" data-v-6d6822e0>近くて便利。あなたの近くの遠鉄ストア。</p> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		id: "gps",
		title: "現在地から探す"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="btnGps" data-v-6d6822e0${_scopeId}><a href="/shop/gps/" data-v-6d6822e0${_scopeId}>現在地から探す（GPS）</a></p>`);
			else return [createVNode("p", { class: "btnGps" }, [createVNode("a", { href: "/shop/gps/" }, "現在地から探す（GPS）")])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		id: "area",
		title: "エリアから探す"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="article-mapContent" data-v-6d6822e0${_scopeId}><img${ssrRenderAttr("src", map_default)} alt="" width="977" height="353" usemap="#Map" data-v-6d6822e0${_scopeId}> <map name="Map" data-v-6d6822e0${_scopeId}><area shape="poly" alt="tenryuku" coords="445,6,449,33,482,85,544,115,554,115,551,105,584,88,598,79,635,64,632,56,624,42,631,25,650,16,660,5" href="#tenryuku" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="kitaku" coords="479,202,462,192,409,193,405,180,386,168,369,167,356,179,342,183,325,173,309,167,297,175,294,201,281,200,269,194,265,181,266,162,274,148,283,138,322,120,346,123,355,114,359,99,393,83,413,18,435,8,438,32,476,93,470,104,481,118,471,139,479,154" href="#kitaku" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="hamakitaku" coords="490,98,487,108,494,113,483,137,494,148,495,159,519,175,552,204,560,187,554,173,555,131,536,129" href="#kitaku" data-v-6d6822e0${_scopeId}> <area shape="poly" coords="255,193,281,213,303,208,273,225,278,232,293,225,301,252,287,261,308,272,313,264,326,286,335,294,352,312,295,308,254,316,259,288,248,255,244,226,246,203" href="#kosaishi" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="nishiku" coords="459,206,433,201,383,198,361,225,351,266,361,305,415,307,432,314,439,289,454,277,443,248,459,236,449,218" href="#chuoku" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="higashiku" coords="550,216,516,188,509,184,491,171,489,213,513,225,543,263" href="#chuoku" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="chuoku" coords="537,276,509,231,472,208,460,218,467,233,450,250,460,276,475,266,489,286" href="#chuoku" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="minamiku" coords="532,341,525,323,529,295,535,286,483,295,469,282,447,293,438,320" href="#chuoku" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="iwatashi" coords="542,343,537,320,546,285,572,191,566,170,564,116,588,98,633,83,611,112,605,123,603,142,603,150,586,160,596,200,611,205,613,213,613,218,630,261,622,293,632,299,638,318" href="#iwatashi" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="shuchigun" coords="689,2,682,5,674,10,664,10,657,17,652,23,645,28,640,32,636,37,636,43,639,50,646,57,651,66,644,73,637,75,639,81,635,86,630,92,623,98,618,105,613,113,613,121,609,129,605,139,606,147,611,153,621,154,622,166,619,179,617,187,623,185,627,179,631,173,637,175,645,172,649,166,657,157,662,147,669,143,674,134,679,122,682,107,689,99,693,91,701,82,710,70,716,61,722,56,725,47,732,43,739,43,751,39,755,31,749,25,739,18,732,15,731,7,731,0,723,0,715,0,706,0,699,-1" href="#shuchigun" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="hukuroishi" coords="613,157,595,166,608,196,622,202,634,239,644,268,641,288,651,314,700,322,683,294,701,271,700,257,729,240,724,233,697,229,686,221,681,211,668,189,666,156,645,181,634,194,622,192,617,189,619,163" href="#hukuroishi" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="kakegawashi" coords="755,42,729,52,715,67,685,108,680,135,672,149,671,183,689,211,693,216,713,225,726,226,737,247,713,260,711,270,703,283,692,294,707,318,797,340,800,320,786,313,782,287,785,281,772,262,762,255,756,248,755,240,767,226,761,205,765,197,779,189,814,154,805,130,788,122,782,110,762,103,761,74,771,53" href="#kakegawashi" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="kikugawashi" coords="820,162,796,189,795,193,784,203,773,208,781,230,767,238,767,244,782,269,793,272,796,283,793,288,793,302,803,308,805,317,815,322,823,304,847,275,856,281,850,238,844,219,853,199,842,160,835,180" href="#kikugawashi" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="toyokawashi" coords="80,76,89,84,129,63,138,77,153,68,172,79,184,53,193,52,210,64,227,91,219,100,225,106,223,115,205,119,193,128,204,144,208,145,205,153,200,160,191,163,178,167,178,175,161,171,146,180,130,186,131,179,121,185,115,180,113,172,107,182,97,168,87,160,81,147,91,147,82,135,65,131,54,124,47,109,56,82,74,83" href="#toyokawashi" data-v-6d6822e0${_scopeId}> <area shape="poly" alt="toyohashishi" coords="243,105,263,143,253,162,256,185,245,199,241,225,238,245,238,264,251,277,249,314,177,331,125,344,121,329,93,325,106,283,98,277,98,265,123,268,135,255,128,247,120,254,107,249,106,208,114,192,109,184,121,189,132,190,149,185,156,173,178,180,181,168,196,166,212,152,209,142,205,141,198,127,221,121,230,108,243,104" href="#toyohashishi" data-v-6d6822e0${_scopeId}></map></div> <div class="d-none-mobile" data-v-6d6822e0${_scopeId}><!--[-->`);
				ssrRenderList($data.shopArea, (area, index) => {
					_push(`<dl class="shoplist" data-v-6d6822e0${_scopeId}><dt data-v-6d6822e0${_scopeId}>${ssrInterpolate(area.title)}</dt> <!--[-->`);
					ssrRenderList(area.shopList, (shop, shopIndex) => {
						_push(`<dd data-v-6d6822e0${_scopeId}><a${ssrRenderAttr("href", shop.shopUrl)} data-v-6d6822e0${_scopeId}>${ssrInterpolate(shop.title)}</a></dd>`);
					});
					_push(`<!--]--></dl>`);
				});
				_push(`<!--]--></div> `);
				if (_ctx.$vuetify.breakpoint.mobile) {
					_push(`<div class="pl-3 pr-3" data-v-6d6822e0${_scopeId}><!--[-->`);
					ssrRenderList($data.shopArea, (area, index) => {
						_push(`<div class="shop-area mt-2" data-v-6d6822e0${_scopeId}><h3${ssrRenderAttr("id", area.id)} class="${ssrRenderClass([{ "mt-8": index !== 0 }, "h3Title"])}" data-v-6d6822e0${_scopeId}>${ssrInterpolate(area.title)}</h3> <ul class="shopList mbsp30" data-v-6d6822e0${_scopeId}><!--[-->`);
						ssrRenderList(area.shopList, (shop, shopIndex) => {
							_push(`<li data-v-6d6822e0${_scopeId}><a${ssrRenderAttr("href", shop.shopUrl)} data-v-6d6822e0${_scopeId}><svg class="icon" data-v-6d6822e0${_scopeId}><use xlink:href="#icon_arrow02" data-v-6d6822e0${_scopeId}></use></svg> ${ssrInterpolate(shop.title)}</a></li>`);
						});
						_push(`<!--]--></ul></div>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
			} else return [
				createVNode("div", { class: "article-mapContent" }, [
					createVNode("img", {
						src: map_default,
						alt: "",
						width: "977",
						height: "353",
						usemap: "#Map"
					}),
					createTextVNode(),
					createVNode("map", { name: "Map" }, [
						createVNode("area", {
							shape: "poly",
							alt: "tenryuku",
							coords: "445,6,449,33,482,85,544,115,554,115,551,105,584,88,598,79,635,64,632,56,624,42,631,25,650,16,660,5",
							href: "#tenryuku"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "kitaku",
							coords: "479,202,462,192,409,193,405,180,386,168,369,167,356,179,342,183,325,173,309,167,297,175,294,201,281,200,269,194,265,181,266,162,274,148,283,138,322,120,346,123,355,114,359,99,393,83,413,18,435,8,438,32,476,93,470,104,481,118,471,139,479,154",
							href: "#kitaku"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "hamakitaku",
							coords: "490,98,487,108,494,113,483,137,494,148,495,159,519,175,552,204,560,187,554,173,555,131,536,129",
							href: "#kitaku"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							coords: "255,193,281,213,303,208,273,225,278,232,293,225,301,252,287,261,308,272,313,264,326,286,335,294,352,312,295,308,254,316,259,288,248,255,244,226,246,203",
							href: "#kosaishi"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "nishiku",
							coords: "459,206,433,201,383,198,361,225,351,266,361,305,415,307,432,314,439,289,454,277,443,248,459,236,449,218",
							href: "#chuoku"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "higashiku",
							coords: "550,216,516,188,509,184,491,171,489,213,513,225,543,263",
							href: "#chuoku"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "chuoku",
							coords: "537,276,509,231,472,208,460,218,467,233,450,250,460,276,475,266,489,286",
							href: "#chuoku"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "minamiku",
							coords: "532,341,525,323,529,295,535,286,483,295,469,282,447,293,438,320",
							href: "#chuoku"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "iwatashi",
							coords: "542,343,537,320,546,285,572,191,566,170,564,116,588,98,633,83,611,112,605,123,603,142,603,150,586,160,596,200,611,205,613,213,613,218,630,261,622,293,632,299,638,318",
							href: "#iwatashi"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "shuchigun",
							coords: "689,2,682,5,674,10,664,10,657,17,652,23,645,28,640,32,636,37,636,43,639,50,646,57,651,66,644,73,637,75,639,81,635,86,630,92,623,98,618,105,613,113,613,121,609,129,605,139,606,147,611,153,621,154,622,166,619,179,617,187,623,185,627,179,631,173,637,175,645,172,649,166,657,157,662,147,669,143,674,134,679,122,682,107,689,99,693,91,701,82,710,70,716,61,722,56,725,47,732,43,739,43,751,39,755,31,749,25,739,18,732,15,731,7,731,0,723,0,715,0,706,0,699,-1",
							href: "#shuchigun"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "hukuroishi",
							coords: "613,157,595,166,608,196,622,202,634,239,644,268,641,288,651,314,700,322,683,294,701,271,700,257,729,240,724,233,697,229,686,221,681,211,668,189,666,156,645,181,634,194,622,192,617,189,619,163",
							href: "#hukuroishi"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "kakegawashi",
							coords: "755,42,729,52,715,67,685,108,680,135,672,149,671,183,689,211,693,216,713,225,726,226,737,247,713,260,711,270,703,283,692,294,707,318,797,340,800,320,786,313,782,287,785,281,772,262,762,255,756,248,755,240,767,226,761,205,765,197,779,189,814,154,805,130,788,122,782,110,762,103,761,74,771,53",
							href: "#kakegawashi"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "kikugawashi",
							coords: "820,162,796,189,795,193,784,203,773,208,781,230,767,238,767,244,782,269,793,272,796,283,793,288,793,302,803,308,805,317,815,322,823,304,847,275,856,281,850,238,844,219,853,199,842,160,835,180",
							href: "#kikugawashi"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "toyokawashi",
							coords: "80,76,89,84,129,63,138,77,153,68,172,79,184,53,193,52,210,64,227,91,219,100,225,106,223,115,205,119,193,128,204,144,208,145,205,153,200,160,191,163,178,167,178,175,161,171,146,180,130,186,131,179,121,185,115,180,113,172,107,182,97,168,87,160,81,147,91,147,82,135,65,131,54,124,47,109,56,82,74,83",
							href: "#toyokawashi"
						}),
						createTextVNode(),
						createVNode("area", {
							shape: "poly",
							alt: "toyohashishi",
							coords: "243,105,263,143,253,162,256,185,245,199,241,225,238,245,238,264,251,277,249,314,177,331,125,344,121,329,93,325,106,283,98,277,98,265,123,268,135,255,128,247,120,254,107,249,106,208,114,192,109,184,121,189,132,190,149,185,156,173,178,180,181,168,196,166,212,152,209,142,205,141,198,127,221,121,230,108,243,104",
							href: "#toyohashishi"
						})
					])
				]),
				createTextVNode(),
				createVNode("div", { class: "d-none-mobile" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.shopArea, (area, index) => {
					return openBlock(), createBlock("dl", {
						key: index,
						class: "shoplist"
					}, [
						createVNode("dt", null, toDisplayString(area.title), 1),
						createTextVNode(),
						(openBlock(true), createBlock(Fragment, null, renderList(area.shopList, (shop, shopIndex) => {
							return openBlock(), createBlock("dd", { key: shopIndex }, [createVNode("a", { href: shop.shopUrl }, toDisplayString(shop.title), 9, ["href"])]);
						}), 128))
					]);
				}), 128))]),
				createTextVNode(),
				_ctx.$vuetify.breakpoint.mobile ? (openBlock(), createBlock("div", {
					key: 0,
					class: "pl-3 pr-3"
				}, [(openBlock(true), createBlock(Fragment, null, renderList($data.shopArea, (area, index) => {
					return openBlock(), createBlock("div", {
						key: index,
						class: "shop-area mt-2"
					}, [
						createVNode("h3", {
							id: area.id,
							class: ["h3Title", { "mt-8": index !== 0 }]
						}, toDisplayString(area.title), 11, ["id"]),
						createTextVNode(),
						createVNode("ul", { class: "shopList mbsp30" }, [(openBlock(true), createBlock(Fragment, null, renderList(area.shopList, (shop, shopIndex) => {
							return openBlock(), createBlock("li", { key: shopIndex }, [createVNode("a", { href: shop.shopUrl }, [(openBlock(), createBlock("svg", { class: "icon" }, [createVNode("use", { "xlink:href": "#icon_arrow02" })])), createTextVNode(" " + toDisplayString(shop.title), 1)], 8, ["href"])]);
						}), 128))])
					]);
				}), 128))])) : createCommentVNode("", true)
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "特色から探す",
		class: "shop-studio"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="feature-search d-none-mobile" data-v-6d6822e0${_scopeId}><img${ssrRenderAttr("src", img_food_default)} width="306" height="230" alt="" data-v-6d6822e0${_scopeId}> <section class="wcontentInner mb-0" data-v-6d6822e0${_scopeId}><h4 class="content-title content-title-custom" data-v-6d6822e0${_scopeId}>キッチンスタジオがある店舗</h4> <p data-v-6d6822e0${_scopeId}><a href="/shop/chuoku/foodone_sanarudai/" data-v-6d6822e0${_scopeId}>フードワン佐鳴台店</a> ｜ <a href="/shop/chuoku/kasai/" data-v-6d6822e0${_scopeId}>笠井店</a> ｜ <a href="/shop/hamanaku/foodone_kiraritown/" data-v-6d6822e0${_scopeId}>フードワンきらりタウン店</a> ｜ <a href="/shop/chuoku/foodone_minamiasada/" data-v-6d6822e0${_scopeId}>フードワン南浅田店</a> ｜ <a href="/shop/chuoku/foodone_takabayashi/" data-v-6d6822e0${_scopeId}>フードワン高林店</a> ｜ <a href="/shop/toyokawashi/toyokawa/" data-v-6d6822e0${_scopeId}>豊川店</a> ｜
              <a href="/shop/hukuroishi/kuno/" data-v-6d6822e0${_scopeId}>袋井久能店</a></p></section></div> <div class="d-none-des feature-search-mob" data-v-6d6822e0${_scopeId}><h4 class="content-title content-title-custom" data-v-6d6822e0${_scopeId}>キッチンスタジオがある店舗</h4> <img${ssrRenderAttr("src", img_food_default)} alt="" data-v-6d6822e0${_scopeId}> <section class="wcontentInner shop-area mb-0" data-v-6d6822e0${_scopeId}><ul class="shopList mbsp30" data-v-6d6822e0${_scopeId}><!--[-->`);
				ssrRenderList($data.storeStudio, (shop, shopIndex) => {
					_push(`<li data-v-6d6822e0${_scopeId}><a${ssrRenderAttr("href", shop.shopUrl)} data-v-6d6822e0${_scopeId}><svg class="icon" data-v-6d6822e0${_scopeId}><use xlink:href="#icon_arrow02" data-v-6d6822e0${_scopeId}></use></svg> ${ssrInterpolate(shop.title)}</a></li>`);
				});
				_push(`<!--]--></ul></section></div>`);
			} else return [
				createVNode("div", { class: "feature-search d-none-mobile" }, [
					createVNode("img", {
						src: img_food_default,
						width: "306",
						height: "230",
						alt: ""
					}),
					createTextVNode(),
					createVNode("section", { class: "wcontentInner mb-0" }, [
						createVNode("h4", { class: "content-title content-title-custom" }, "キッチンスタジオがある店舗"),
						createTextVNode(),
						createVNode("p", null, [
							createVNode("a", { href: "/shop/chuoku/foodone_sanarudai/" }, "フードワン佐鳴台店"),
							createTextVNode(" ｜ "),
							createVNode("a", { href: "/shop/chuoku/kasai/" }, "笠井店"),
							createTextVNode(" ｜ "),
							createVNode("a", { href: "/shop/hamanaku/foodone_kiraritown/" }, "フードワンきらりタウン店"),
							createTextVNode(" ｜ "),
							createVNode("a", { href: "/shop/chuoku/foodone_minamiasada/" }, "フードワン南浅田店"),
							createTextVNode(" ｜ "),
							createVNode("a", { href: "/shop/chuoku/foodone_takabayashi/" }, "フードワン高林店"),
							createTextVNode(" ｜ "),
							createVNode("a", { href: "/shop/toyokawashi/toyokawa/" }, "豊川店"),
							createTextVNode(" ｜\n              "),
							createVNode("a", { href: "/shop/hukuroishi/kuno/" }, "袋井久能店")
						])
					])
				]),
				createTextVNode(),
				createVNode("div", { class: "d-none-des feature-search-mob" }, [
					createVNode("h4", { class: "content-title content-title-custom" }, "キッチンスタジオがある店舗"),
					createTextVNode(),
					createVNode("img", {
						src: img_food_default,
						alt: ""
					}),
					createTextVNode(),
					createVNode("section", { class: "wcontentInner shop-area mb-0" }, [createVNode("ul", { class: "shopList mbsp30" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.storeStudio, (shop, shopIndex) => {
						return openBlock(), createBlock("li", { key: shopIndex }, [createVNode("a", { href: shop.shopUrl }, [(openBlock(), createBlock("svg", { class: "icon" }, [createVNode("use", { "xlink:href": "#icon_arrow02" })])), createTextVNode(" " + toDisplayString(shop.title), 1)], 8, ["href"])]);
					}), 128))])])
				])
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	if (!_ctx.$vuetify.breakpoint.mobile) _push(ssrRenderComponent(_component_AppArticle, {
		title: "一覧から探す",
		class: "shop-list"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				ssrRenderList($data.domainList, (domain) => {
					_push(ssrRenderComponent(_component_StoreTable, {
						key: domain.name,
						domain
					}, null, _parent, _scopeId));
				});
				_push(`<!--]-->`);
			} else return [(openBlock(true), createBlock(Fragment, null, renderList($data.domainList, (domain) => {
				return openBlock(), createBlock(_component_StoreTable, {
					key: domain.name,
					domain
				}, null, 8, ["domain"]);
			}), 128))];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "前のページへ戻る",
		class: "btn-back d-none-mobile",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var shop_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6d6822e0"]]);

export { shop_default as default };
//# sourceMappingURL=shop-bILGHmEL.mjs.map
