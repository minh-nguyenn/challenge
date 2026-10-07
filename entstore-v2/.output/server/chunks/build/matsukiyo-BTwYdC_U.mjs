import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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

//#region app/assets/images/img_main (2).webp
var img_main__2__default = "" + __buildAssetsURL("img_main (2).DazK2dsW.webp");
//#endregion
//#region app/assets/images/img_card.webp
var img_card_default = "" + __buildAssetsURL("img_card.DTeDIPLz.webp");
//#endregion
//#region app/assets/images/pic_matsukiyo01.webp
var pic_matsukiyo01_default = "" + __buildAssetsURL("pic_matsukiyo01.C_mRC9dL.webp");
//#endregion
//#region app/assets/images/pic_matsukiyo02.webp
var pic_matsukiyo02_default = "" + __buildAssetsURL("pic_matsukiyo02.VW0t007Y.webp");
//#endregion
//#region app/assets/images/img_coupon.webp
var img_coupon_default = "" + __buildAssetsURL("img_coupon.B72lm4_j.webp");
//#endregion
//#region app/pages/pickup/matsukiyo.vue
var _sfc_main = {
	name: "Mizu",
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	data() {
		return {
			breadcrumbItems: [{
				text: "ホーム",
				disabled: false,
				href: "/"
			}, {
				text: "遠鉄ストアのおいしい水",
				disabled: true,
				href: "/pickup/mizu"
			}],
			shopList: [
				{
					url: "/shop/chuoku/foodone_higashiiba/",
					shopName: "フードワン<br class=\"d-none-des\">東伊場店",
					shopImg: "/assets/images/photo01 (49).webp"
				},
				{
					url: "/shop/iwatashi/iwata/",
					shopName: "磐田店",
					shopImg: "/assets/images/photo01 (50).webp"
				},
				{
					url: "/shop/iwatashi/ikeda/",
					shopName: "池田店",
					shopImg: "/assets/images/photo01 (51).webp"
				},
				{
					url: "/shop/kikugawashi/kikugawa/",
					shopName: "菊川店",
					shopImg: "/assets/images/photo01 (52).webp"
				},
				{
					url: "/shop/hukuroishi/asaba/",
					shopName: "浅羽店",
					shopImg: "/assets/images/photo01 (53).webp"
				},
				{
					url: "/shop/toyokawashi/toyokawa/",
					shopName: "豊川店",
					shopImg: "/assets/images/photo01 (54).webp"
				},
				{
					url: "/shop/chuoku/tateno/",
					shopName: "立野店",
					shopImg: "/assets/images/photo01 (55).webp"
				},
				{
					url: "/shop/chuoku/nippashi/",
					shopName: "新橋店",
					shopImg: "/assets/images/photo01 (56).webp"
				},
				{
					url: "/shop/chuoku/saginomiya/",
					shopName: "さぎの宮駅前店",
					shopImg: "/assets/images/photo01 (57).webp"
				},
				{
					url: "/shop/chuoku/kasai/",
					shopName: "笠井店",
					shopImg: "/assets/images/photo04 (7).webp"
				},
				{
					url: "/shop/hamanaku/hamakita/",
					shopName: "浜北店",
					shopImg: "/assets/images/new-shop.webp"
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "遠鉄ストアのおいしい水｜ピックアップ｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-97789832>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-97789832><img${ssrRenderAttr("src", img_main__2__default)} class="fullImage-sm" width="980" height="400" alt="遠鉄ストアのおいしい水 えんてつカード会員様限定で販売中" data-v-97789832> <h3 data-v-97789832>えんてつポイントも、マツキヨポイントも両方たまる！<br data-v-97789832>併設店ならではのお得なご利用方法</h3> <p class="textAC mobile-box" data-v-97789832>「マツモトキヨシ」は、日本の大手ドラッグストアチェーンです。<br data-v-97789832>遠鉄ストアでは、平成25年に同社とFC（フランチャイズ）契約を結びました。<br data-v-97789832>遠鉄ストアへ併設している「マツモトキヨシ」は、遠鉄ストアで運営していますので、<br data-v-97789832>「えんてつポイント」も「マツキヨポイント」も両方貯まって大変お得！</p> <p class="textAC mobile-box d-none-mobile" data-v-97789832><img${ssrRenderAttr("src", img_card_default)} width="715" height="181" alt="えんてつポイント 店内商品お買い上げ100円（税別）ごとに1ポイント+マツキヨポイント 店内商品お買い上げ100円（税別）ごとに1ポイント、" data-v-97789832></p> <div class="pointSystem d-none-des" data-v-97789832><div class="pointSystemInner" data-v-97789832><figure data-v-97789832><img${ssrRenderAttr("src", pic_matsukiyo01_default)} alt="" data-v-97789832></figure> <div class="point" data-v-97789832><p class="target" data-v-97789832>店内商品お買い上げ<span data-v-97789832><strong data-v-97789832>108</strong>円(税込)ごとに</span></p> <p class="iconArrow" data-v-97789832>笆ｶ</p> <p class="pointTxt" data-v-97789832><strong data-v-97789832>1</strong>ポイント</p></div></div> <p class="iconPlus" data-v-97789832>＋</p> <div class="pointSystemInner" data-v-97789832><figure data-v-97789832><img${ssrRenderAttr("src", pic_matsukiyo02_default)} alt="" data-v-97789832></figure> <div class="point" data-v-97789832><p class="target" data-v-97789832>店内商品お買い上げ<span data-v-97789832><strong data-v-97789832>100</strong>円(税抜)ごとに</span></p> <p class="iconArrow" data-v-97789832>笆ｶ</p> <p class="pointTxt" data-v-97789832><strong data-v-97789832>1</strong>ポイント</p></div></div></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "併設店舗",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="contentInner mobile-box d-none-des mt-4" data-v-97789832${_scopeId}><p class="normalTxt" data-v-97789832${_scopeId}>遠鉄ストア×マツモトキヨシ 併設店続々増えています！<br data-v-97789832${_scopeId}>ぜひお立ち寄りください。</p></div> <div class="shop-list" data-v-97789832${_scopeId}><!--[-->`);
				ssrRenderList($data.shopList, (shop) => {
					_push(`<div class="shop" data-v-97789832${_scopeId}><a${ssrRenderAttr("href", shop.url)} data-v-97789832${_scopeId}><figure data-v-97789832${_scopeId}><img${ssrRenderAttr("src", shop.shopImg)}${ssrRenderAttr("alt", shop.shopName)} data-v-97789832${_scopeId}></figure> <div class="shopnameM" data-v-97789832${_scopeId}>${shop.shopName ?? ""}</div></a></div>`);
				});
				_push(`<!--]--></div>`);
			} else return [
				createVNode("div", { class: "contentInner mobile-box d-none-des mt-4" }, [createVNode("p", { class: "normalTxt" }, [
					createTextVNode("遠鉄ストア×マツモトキヨシ 併設店続々増えています！"),
					createVNode("br"),
					createTextVNode("ぜひお立ち寄りください。")
				])]),
				createTextVNode(),
				createVNode("div", { class: "shop-list" }, [(openBlock(true), createBlock(Fragment, null, renderList($data.shopList, (shop) => {
					return openBlock(), createBlock("div", {
						key: shop.name,
						class: "shop"
					}, [createVNode("a", { href: shop.url }, [
						createVNode("figure", null, [createVNode("img", {
							src: shop.shopImg,
							alt: shop.shopName
						}, null, 8, ["src", "alt"])]),
						createTextVNode(),
						createVNode("div", {
							class: "shopnameM",
							innerHTML: shop.shopName
						}, null, 8, ["innerHTML"])
					], 8, ["href"])]);
				}), 128))])
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "マツモトキヨシ　LINEクーポンでもっとお得！",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="coupons" data-v-97789832${_scopeId}><img${ssrRenderAttr("src", img_coupon_default)} data-v-97789832${_scopeId}> <p data-v-97789832${_scopeId}>LINEでマツモトキヨシのアカウントを登録すると、店内商品10％OFFクーポンが発行されます。（不定期）<br data-v-97789832${_scopeId}>使い方はLINEの画面をレジで見せるだけ！<br data-v-97789832${_scopeId}>ぜひお得にご利用ください。<br data-v-97789832${_scopeId}><br data-v-97789832${_scopeId}>※一部除外品があります。</p></div>`);
			else return [createVNode("div", { class: "coupons" }, [
				createVNode("img", { src: img_coupon_default }),
				createTextVNode(),
				createVNode("p", null, [
					createTextVNode("LINEでマツモトキヨシのアカウントを登録すると、店内商品10％OFFクーポンが発行されます。（不定期）"),
					createVNode("br"),
					createTextVNode("使い方はLINEの画面をレジで見せるだけ！"),
					createVNode("br"),
					createTextVNode("ぜひお得にご利用ください。"),
					createVNode("br"),
					createVNode("br"),
					createTextVNode("※一部除外品があります。")
				])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		href: "/",
		"is-back": ""
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pickup/matsukiyo.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var matsukiyo_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-97789832"]]);

export { matsukiyo_default as default };
//# sourceMappingURL=matsukiyo-BTwYdC_U.mjs.map
