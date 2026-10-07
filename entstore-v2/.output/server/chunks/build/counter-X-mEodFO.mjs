import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { S as ServiceCooking_default } from './ServiceCooking-oibKnszn.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/assets/images/cgc.webp
var cgc_default = "" + __buildAssetsURL("cgc.AtaTfC-M.webp");
//#endregion
//#region app/assets/images/JCB_Card.jpg
var JCB_Card_default = "" + __buildAssetsURL("JCB_Card.C5bZIfPf.jpg");
//#endregion
//#region app/assets/images/photo03 (31).webp
var photo03__31__default = "" + __buildAssetsURL("photo03 (31).DP0zEjM7.webp");
//#endregion
//#region app/pages/service/counter.vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default,
		ServiceCooking: ServiceCooking_default
	},
	data() {
		return {
			breadcrumbItems: [
				{
					text: "ホーム",
					disabled: false,
					href: "/"
				},
				{
					text: "サービス",
					disabled: false,
					href: "/service"
				},
				{
					text: "サービスカウンター取り扱い",
					disabled: true,
					href: "/service/counter"
				}
			],
			cookingItem: {
				"title": "料金収納代行",
				"url": "//assets/images/photo01 (45).webp",
				"request": [
					"市税<br>電気・ガス・水道<br>電話",
					"通信販売の<br>購入代金",
					"バンビツアー料金"
				],
				"requestSP": [
					"市税、電気・ガス・水道、電話",
					"通信販売の<br>購入代金",
					"バンビツアー料金"
				],
				"response": "市税・電話・電気・ガス・水道・通販・バンビツアー料金など各種料金がお支払いいただけます。 ",
				"eg": {}
			}
		};
	},
	setup() {
		useHead$1({ title: "サービスカウンター取り扱い｜サービス｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_ServiceCooking = ServiceCooking_default;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-7db8ac4d><main data-v-7db8ac4d>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-7db8ac4d>サービスカウンター取り扱い</h2> <p class="lead" data-v-7db8ac4d>料金収納代行サービス・宅配便をはじめ<br data-v-7db8ac4d>サービスカウンターでの便利なサービスをご紹介します</p> `);
	_push(ssrRenderComponent(_component_ServiceCooking, { dish: $data.cookingItem }, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "商品券販売",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="article-content voucher mobile-box" data-v-7db8ac4d${_scopeId}><section class="contentInner" data-v-7db8ac4d${_scopeId}><img class="cgc"${ssrRenderAttr("src", cgc_default)} alt="" data-v-7db8ac4d${_scopeId}> <p class="pl-0" data-v-7db8ac4d${_scopeId}><strong data-v-7db8ac4d${_scopeId}>CGCグループ共通商品券</strong> <br data-v-7db8ac4d${_scopeId}>1,000円券を販売。<br data-v-7db8ac4d${_scopeId}>遠鉄ストア、遠鉄ストア併設のマツモトキヨシ、マツモトキヨシさぎの宮駅前店、遠鉄ストア併設のシャトレーゼ、全国のCGC加盟店でご利用いただけます。
            </p></section> <section class="contentInner" data-v-7db8ac4d${_scopeId}><img${ssrRenderAttr("src", JCB_Card_default)} alt="" data-v-7db8ac4d${_scopeId}> <p class="pl-0" data-v-7db8ac4d${_scopeId}><strong data-v-7db8ac4d${_scopeId}>JCBギフトカード</strong> <br data-v-7db8ac4d${_scopeId}>1,000円券を販売。<br data-v-7db8ac4d${_scopeId}>全国の主要百貨店やスーパーなど<br data-v-7db8ac4d${_scopeId}>JCBギフトカード取扱店でご利用いただけます。
            </p></section> <section class="contentInner" data-v-7db8ac4d${_scopeId}><img${ssrRenderAttr("src", photo03__31__default)} alt="" data-v-7db8ac4d${_scopeId}> <p class="pl-0" data-v-7db8ac4d${_scopeId}><strong data-v-7db8ac4d${_scopeId}>遠鉄百貨店の商品券</strong> <br data-v-7db8ac4d${_scopeId}>1,000円券を販売。<br data-v-7db8ac4d${_scopeId}>遠鉄ストア、遠鉄百貨店、遠鉄グループでご利用いただけます。
            </p></section></div>`);
			else return [createVNode("div", { class: "article-content voucher mobile-box" }, [
				createVNode("section", { class: "contentInner" }, [
					createVNode("img", {
						class: "cgc",
						src: cgc_default,
						alt: ""
					}),
					createTextVNode(),
					createVNode("p", { class: "pl-0" }, [
						createVNode("strong", null, "CGCグループ共通商品券"),
						createTextVNode(),
						createVNode("br"),
						createTextVNode("1,000円券を販売。"),
						createVNode("br"),
						createTextVNode("遠鉄ストア、遠鉄ストア併設のマツモトキヨシ、マツモトキヨシさぎの宮駅前店、遠鉄ストア併設のシャトレーゼ、全国のCGC加盟店でご利用いただけます。\n            ")
					])
				]),
				createTextVNode(),
				createVNode("section", { class: "contentInner" }, [
					createVNode("img", {
						src: JCB_Card_default,
						alt: ""
					}),
					createTextVNode(),
					createVNode("p", { class: "pl-0" }, [
						createVNode("strong", null, "JCBギフトカード"),
						createTextVNode(),
						createVNode("br"),
						createTextVNode("1,000円券を販売。"),
						createVNode("br"),
						createTextVNode("全国の主要百貨店やスーパーなど"),
						createVNode("br"),
						createTextVNode("JCBギフトカード取扱店でご利用いただけます。\n            ")
					])
				]),
				createTextVNode(),
				createVNode("section", { class: "contentInner" }, [
					createVNode("img", {
						src: photo03__31__default,
						alt: ""
					}),
					createTextVNode(),
					createVNode("p", { class: "pl-0" }, [
						createVNode("strong", null, "遠鉄百貨店の商品券"),
						createTextVNode(),
						createVNode("br"),
						createTextVNode("1,000円券を販売。"),
						createVNode("br"),
						createTextVNode("遠鉄ストア、遠鉄百貨店、遠鉄グループでご利用いただけます。\n            ")
					])
				])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "宅配便取り扱い",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="article-content mobile-box" data-v-7db8ac4d${_scopeId}><section class="contentInner" data-v-7db8ac4d${_scopeId}><p data-v-7db8ac4d${_scopeId}>クロネコヤマトの宅急便取扱店となっております。<br class="d-none-mobile" data-v-7db8ac4d${_scopeId}>ご利用いただけるサービスは以下のとおりです。<br class="d-none-mobile" data-v-7db8ac4d${_scopeId}>尚、<strong data-v-7db8ac4d${_scopeId}>着払い・クール便は取り扱っておりません。</strong></p> <table class="table-horz" data-v-7db8ac4d${_scopeId}><tbody data-v-7db8ac4d${_scopeId}><tr data-v-7db8ac4d${_scopeId}><th data-v-7db8ac4d${_scopeId}>持込宅急便（一般品）</th> <td data-v-7db8ac4d${_scopeId}>食料品、衣類、雑貨など</td></tr> <tr data-v-7db8ac4d${_scopeId}><th data-v-7db8ac4d${_scopeId}>ゴルフ宅急便</th> <td data-v-7db8ac4d${_scopeId}>ゴルフ道具一式をプレイ日前日にゴルフ場にお届け</td></tr> <tr data-v-7db8ac4d${_scopeId}><th data-v-7db8ac4d${_scopeId}>スキー宅急便</th> <td data-v-7db8ac4d${_scopeId}>スキー道具一式を使用日の前日までに目的地までお届け</td></tr> <tr data-v-7db8ac4d${_scopeId}><th data-v-7db8ac4d${_scopeId}>複数口宅急便</th> <td data-v-7db8ac4d${_scopeId}>同一のお届け先に同時に2個以上のお荷物を送られる場合、「複数口減額制度」がお得です。<br class="d-none-mobile" data-v-7db8ac4d${_scopeId}> 通常の持込割引（各100円）と複数口減額（各100円）の、一個あたり合わせて200円を割引いたします。</td></tr></tbody></table></section></div>`);
			else return [createVNode("div", { class: "article-content mobile-box" }, [createVNode("section", { class: "contentInner" }, [
				createVNode("p", null, [
					createTextVNode("クロネコヤマトの宅急便取扱店となっております。"),
					createVNode("br", { class: "d-none-mobile" }),
					createTextVNode("ご利用いただけるサービスは以下のとおりです。"),
					createVNode("br", { class: "d-none-mobile" }),
					createTextVNode("尚、"),
					createVNode("strong", null, "着払い・クール便は取り扱っておりません。")
				]),
				createTextVNode(),
				createVNode("table", { class: "table-horz" }, [createVNode("tbody", null, [
					createVNode("tr", null, [
						createVNode("th", null, "持込宅急便（一般品）"),
						createTextVNode(),
						createVNode("td", null, "食料品、衣類、雑貨など")
					]),
					createTextVNode(),
					createVNode("tr", null, [
						createVNode("th", null, "ゴルフ宅急便"),
						createTextVNode(),
						createVNode("td", null, "ゴルフ道具一式をプレイ日前日にゴルフ場にお届け")
					]),
					createTextVNode(),
					createVNode("tr", null, [
						createVNode("th", null, "スキー宅急便"),
						createTextVNode(),
						createVNode("td", null, "スキー道具一式を使用日の前日までに目的地までお届け")
					]),
					createTextVNode(),
					createVNode("tr", null, [
						createVNode("th", null, "複数口宅急便"),
						createTextVNode(),
						createVNode("td", null, [
							createTextVNode("同一のお届け先に同時に2個以上のお荷物を送られる場合、「複数口減額制度」がお得です。"),
							createVNode("br", { class: "d-none-mobile" }),
							createTextVNode(" 通常の持込割引（各100円）と複数口減額（各100円）の、一個あたり合わせて200円を割引いたします。")
						])
					])
				])])
			])])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/service"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/counter.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var counter_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7db8ac4d"]]);

export { counter_default as default };
//# sourceMappingURL=counter-X-mEodFO.mjs.map
