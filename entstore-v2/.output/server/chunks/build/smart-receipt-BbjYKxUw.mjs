import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
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

//#region app/assets/images/txt_receipt_sub.webp
var txt_receipt_sub_default = "" + __buildAssetsURL("txt_receipt_sub.VSx9m-pF.webp");
//#endregion
//#region app/assets/images/title_receipt.webp
var title_receipt_default = "" + __buildAssetsURL("title_receipt.CbGGc7sI.webp");
//#endregion
//#region app/assets/images/img_receipt_smp.webp
var img_receipt_smp_default = "data:image/webp;base64,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";
//#endregion
//#region app/assets/images/img_receipt01.webp
var img_receipt01_default = "" + __buildAssetsURL("img_receipt01.D0hv05cV.webp");
//#endregion
//#region app/assets/images/img_useful.webp
var img_useful_default = "" + __buildAssetsURL("img_useful.DDRNT4-x.webp");
//#endregion
//#region app/assets/images/img_prepare01.webp
var img_prepare01_default = "" + __buildAssetsURL("img_prepare01.BVbe6Uqy.webp");
//#endregion
//#region app/assets/images/img_prepare02.webp
var img_prepare02_default = "" + __buildAssetsURL("img_prepare02.CtXH6zLP.webp");
//#endregion
//#region app/assets/images/img_use01.webp
var img_use01_default = "" + __buildAssetsURL("img_use01.Dln9H-JZ.webp");
//#endregion
//#region app/assets/images/img_use02.webp
var img_use02_default = "" + __buildAssetsURL("img_use02.adf3OpIr.webp");
//#endregion
//#region app/assets/images/icon_tel.webp
var icon_tel_default = "data:image/webp;base64,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";
//#endregion
//#region app/pages/service/smart-receipt/index.vue
var _sfc_main = {
	name: "Index",
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	data() {
		return { breadcrumbItems: [
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
				text: "スマートレシート",
				disabled: true,
				href: "/service/smart-receipt"
			}
		] };
	},
	setup() {
		useHead$1({ title: "スマートレシート｜サービス｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-20dd6717>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-20dd6717><div class="receipt_main" data-v-20dd6717><div class="receipt_main_box" data-v-20dd6717><p class="receipt_main_title_sub" data-v-20dd6717>スマホと連携！いつでもレシート確認。</p> <figure class="thum_img receipt_main_img01" data-v-20dd6717><img${ssrRenderAttr("src", txt_receipt_sub_default)} alt="WEBサイト版" class="img_responsive" data-v-20dd6717></figure> <h1 class="receipt_main_title" data-v-20dd6717><img${ssrRenderAttr("src", title_receipt_default)} alt="スマートレシート" class="img_responsive" data-v-20dd6717></h1> <p class="receipt_main_txt" data-v-20dd6717>スマートレシートは<em data-v-20dd6717>スマホ</em>で<em data-v-20dd6717>レシートが見られる</em> <br class="d-none-des" data-v-20dd6717>、<em data-v-20dd6717>エコ</em>で<em data-v-20dd6717>便利</em>な<em data-v-20dd6717>WEBサイト</em>です。</p> <figure class="thum_img receipt_main_img02" data-v-20dd6717><img${ssrRenderAttr("src", img_receipt_smp_default)} alt="" class="img_responsive" data-v-20dd6717></figure></div> <div class="receipt_main_link" data-v-20dd6717><a href="https://sr-mobile-apps2.smartreceipt.jp/srsw/cooperation/10023" target="_blank" data-v-20dd6717><p class="receipt_main_link_title" data-v-20dd6717><em data-v-20dd6717>レシートを見る</em> <span class="d-block" data-v-20dd6717>登録済みの方はこちら</span></p> <figure class="thum_img receipt-phone" data-v-20dd6717><img${ssrRenderAttr("src", img_receipt01_default)} alt="" class="img_responsive" data-v-20dd6717></figure> <p class="txt_caution text-left" data-v-20dd6717>※スマートレシート登録サイトへ<br class="d-none-mobile" data-v-20dd6717>リンクします</p></a></div></div> <div class="btn_wrap" data-v-20dd6717><p class="btn_idosuper btn_entry" data-v-20dd6717><a href="https://sr-mobile-apps2.smartreceipt.jp/srsw/cooperation/10023" target="_blank" data-v-20dd6717><em data-v-20dd6717>ご登録はこちらから</em> <span data-v-20dd6717>※スマートレシート登録サイトへ リンクします</span></a></p></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "スマートレシートとは？",
		class: "wrap-outside mobile-box receipt_layout"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<section class="useful receipt_layout_inner" data-v-20dd6717${_scopeId}><ol class="useful_list" data-v-20dd6717${_scopeId}><li data-v-20dd6717${_scopeId}><h3 class="receipt_layout_title02" data-v-20dd6717${_scopeId}><span data-v-20dd6717${_scopeId}>1</span><em data-v-20dd6717${_scopeId}>お財布すっきり</em></h3> <p class="normalTxt" data-v-20dd6717${_scopeId}>ついついためてしまいがちなレシートでお財布がパンパンになっていませんか？<br data-v-20dd6717${_scopeId}>スマホで管理すればお財布がすっきりします！</p></li> <li data-v-20dd6717${_scopeId}><h3 class="receipt_layout_title02" data-v-20dd6717${_scopeId}><span data-v-20dd6717${_scopeId}>2</span><em data-v-20dd6717${_scopeId}>いつでもレシート確認</em></h3> <p class="normalTxt" data-v-20dd6717${_scopeId}>13か月間のレシートがいつでも簡単に確認できます。<br data-v-20dd6717${_scopeId}>今までどおり、お買い物の後すぐにご覧いただけます。</p></li> <li data-v-20dd6717${_scopeId}><h3 class="receipt_layout_title02" data-v-20dd6717${_scopeId}><span data-v-20dd6717${_scopeId}>3</span><em data-v-20dd6717${_scopeId}>お買い物の傾向が一目でわかる</em></h3> <p class="normalTxt" data-v-20dd6717${_scopeId}>保管されたレシートは自動的に、9種類の費目に振り分けられます。<br data-v-20dd6717${_scopeId}>家計簿をつけるのが面倒なあなたにもぴったり？</p></li></ol> <figure class="thum_img" data-v-20dd6717${_scopeId}><img${ssrRenderAttr("src", img_useful_default)} alt="今まではレシートでお財布がパンパンだったのが、スマートレシートの利用でスッキリするイラスト" class="img_responsive" data-v-20dd6717${_scopeId}></figure></section>`);
			else return [createVNode("section", { class: "useful receipt_layout_inner" }, [
				createVNode("ol", { class: "useful_list" }, [
					createVNode("li", null, [
						createVNode("h3", { class: "receipt_layout_title02" }, [createVNode("span", null, "1"), createVNode("em", null, "お財布すっきり")]),
						createTextVNode(),
						createVNode("p", { class: "normalTxt" }, [
							createTextVNode("ついついためてしまいがちなレシートでお財布がパンパンになっていませんか？"),
							createVNode("br"),
							createTextVNode("スマホで管理すればお財布がすっきりします！")
						])
					]),
					createTextVNode(),
					createVNode("li", null, [
						createVNode("h3", { class: "receipt_layout_title02" }, [createVNode("span", null, "2"), createVNode("em", null, "いつでもレシート確認")]),
						createTextVNode(),
						createVNode("p", { class: "normalTxt" }, [
							createTextVNode("13か月間のレシートがいつでも簡単に確認できます。"),
							createVNode("br"),
							createTextVNode("今までどおり、お買い物の後すぐにご覧いただけます。")
						])
					]),
					createTextVNode(),
					createVNode("li", null, [
						createVNode("h3", { class: "receipt_layout_title02" }, [createVNode("span", null, "3"), createVNode("em", null, "お買い物の傾向が一目でわかる")]),
						createTextVNode(),
						createVNode("p", { class: "normalTxt" }, [
							createTextVNode("保管されたレシートは自動的に、9種類の費目に振り分けられます。"),
							createVNode("br"),
							createTextVNode("家計簿をつけるのが面倒なあなたにもぴったり？")
						])
					])
				]),
				createTextVNode(),
				createVNode("figure", { class: "thum_img" }, [createVNode("img", {
					src: img_useful_default,
					alt: "今まではレシートでお財布がパンパンだったのが、スマートレシートの利用でスッキリするイラスト",
					class: "img_responsive"
				})])
			])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="btn_wrap mt-md-8" data-v-20dd6717><p class="btn_idosuper btn_entry" data-v-20dd6717><a href="https://sr-mobile-apps2.smartreceipt.jp/srsw/cooperation/10023" target="_blank" data-v-20dd6717><em data-v-20dd6717>ご登録はこちらから</em> <span data-v-20dd6717>※スマートレシート登録サイトへリンクします</span></a></p></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "スマートレシートの利用準備",
		class: "wrap-outside mobile-box"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="flow" data-v-20dd6717${_scopeId}><div class="flow_box" data-v-20dd6717${_scopeId}><section class="flow_list" data-v-20dd6717${_scopeId}><p class="flow_list_number" data-v-20dd6717${_scopeId}>1</p> <h3 class="flow_list_title" data-v-20dd6717${_scopeId}>WEBサイトにアクセスして会員登録</h3> <p class="flow_list_txt" data-v-20dd6717${_scopeId}>※WEBサイトはお気に入り登録してください</p> <div class="flow_list_inner" data-v-20dd6717${_scopeId}><figure class="thum_img img_reserve" data-v-20dd6717${_scopeId}><img${ssrRenderAttr("src", img_prepare01_default)} alt="QRコードからWEBサイトにアクセスするフロー図" class="img_responsive" data-v-20dd6717${_scopeId}></figure></div></section> <section class="flow_list" data-v-20dd6717${_scopeId}><p class="flow_list_number" data-v-20dd6717${_scopeId}>2</p> <h3 class="flow_list_title" data-v-20dd6717${_scopeId}><span data-v-20dd6717${_scopeId}>初回のみ</span>、サービスカウンターにて
                <br class="d-none-mobile" data-v-20dd6717${_scopeId}>「えんてつカード」とスマホ画面に
                <br class="d-none-mobile" data-v-20dd6717${_scopeId}>表示のバーコードを提示</h3> <p class="flow_list_txt" data-v-20dd6717${_scopeId}>（サービスカウンターにて連携操作を行います）</p> <div class="flow_list_inner" data-v-20dd6717${_scopeId}><figure class="thum_img img_reserve" data-v-20dd6717${_scopeId}><img${ssrRenderAttr("src", img_prepare02_default)} alt="えんてつカードとスマートレシートIDの連携操作" class="img_responsive" data-v-20dd6717${_scopeId}></figure> <p class="flow_list_txt" data-v-20dd6717${_scopeId}>「えんてつカード」と「スマートレシートID」の連携完了</p></div></section></div></div>`);
			else return [createVNode("div", { class: "flow" }, [createVNode("div", { class: "flow_box" }, [
				createVNode("section", { class: "flow_list" }, [
					createVNode("p", { class: "flow_list_number" }, "1"),
					createTextVNode(),
					createVNode("h3", { class: "flow_list_title" }, "WEBサイトにアクセスして会員登録"),
					createTextVNode(),
					createVNode("p", { class: "flow_list_txt" }, "※WEBサイトはお気に入り登録してください"),
					createTextVNode(),
					createVNode("div", { class: "flow_list_inner" }, [createVNode("figure", { class: "thum_img img_reserve" }, [createVNode("img", {
						src: img_prepare01_default,
						alt: "QRコードからWEBサイトにアクセスするフロー図",
						class: "img_responsive"
					})])])
				]),
				createTextVNode(),
				createVNode("section", { class: "flow_list" }, [
					createVNode("p", { class: "flow_list_number" }, "2"),
					createTextVNode(),
					createVNode("h3", { class: "flow_list_title" }, [
						createVNode("span", null, "初回のみ"),
						createTextVNode("、サービスカウンターにて\n                "),
						createVNode("br", { class: "d-none-mobile" }),
						createTextVNode("「えんてつカード」とスマホ画面に\n                "),
						createVNode("br", { class: "d-none-mobile" }),
						createTextVNode("表示のバーコードを提示")
					]),
					createTextVNode(),
					createVNode("p", { class: "flow_list_txt" }, "（サービスカウンターにて連携操作を行います）"),
					createTextVNode(),
					createVNode("div", { class: "flow_list_inner" }, [
						createVNode("figure", { class: "thum_img img_reserve" }, [createVNode("img", {
							src: img_prepare02_default,
							alt: "えんてつカードとスマートレシートIDの連携操作",
							class: "img_responsive"
						})]),
						createTextVNode(),
						createVNode("p", { class: "flow_list_txt" }, "「えんてつカード」と「スマートレシートID」の連携完了")
					])
				])
			])])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "スマートレシートの使い方",
		class: "wrap-outside mobile-box"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="flow use" data-v-20dd6717${_scopeId}><div class="flow_box" data-v-20dd6717${_scopeId}><section class="flow_list" data-v-20dd6717${_scopeId}><p class="flow_list_number" data-v-20dd6717${_scopeId}>1</p> <h3 class="flow_list_title" data-v-20dd6717${_scopeId}><span data-v-20dd6717${_scopeId}>翌日以降</span>、レジにて「えんてつカード」<br data-v-20dd6717${_scopeId}>を提示し、いつも通りお支払で<br data-v-20dd6717${_scopeId}>「スマートレシート」に！</h3> <div class="flow_list_inner" data-v-20dd6717${_scopeId}><figure class="thum_img img_use" data-v-20dd6717${_scopeId}><img${ssrRenderAttr("src", img_use01_default)} alt="レジで「えんてつカード」を提示するイラスト" class="img_responsive" data-v-20dd6717${_scopeId}></figure> <p class="use_caution" data-v-20dd6717${_scopeId}>提示が無い場合は<br data-v-20dd6717${_scopeId}>紙のレシートとなります</p> <p class="flow_list_txt txt_caution" data-v-20dd6717${_scopeId}>※「えんてつカード」と「スマートレシートID」の連携当日は、お買い物をしても紙のレシートが出ます</p></div></section> <section class="flow_list" data-v-20dd6717${_scopeId}><p class="flow_list_number" data-v-20dd6717${_scopeId}>2</p> <h3 class="flow_list_title" data-v-20dd6717${_scopeId}>遠鉄ストアホームページからレシート確認</h3> <p class="flow_list_txt" data-v-20dd6717${_scopeId}>※WEBサイトをお気に入り登録でもご確認いただけます</p> <div class="flow_list_inner" data-v-20dd6717${_scopeId}><figure class="thum_img img_reserve" data-v-20dd6717${_scopeId}><img${ssrRenderAttr("src", img_use02_default)} alt="遠鉄ストアホームページからレシートを確認するための操作方法" class="img_responsive" data-v-20dd6717${_scopeId}></figure></div></section></div></div>`);
			else return [createVNode("div", { class: "flow use" }, [createVNode("div", { class: "flow_box" }, [
				createVNode("section", { class: "flow_list" }, [
					createVNode("p", { class: "flow_list_number" }, "1"),
					createTextVNode(),
					createVNode("h3", { class: "flow_list_title" }, [
						createVNode("span", null, "翌日以降"),
						createTextVNode("、レジにて「えんてつカード」"),
						createVNode("br"),
						createTextVNode("を提示し、いつも通りお支払で"),
						createVNode("br"),
						createTextVNode("「スマートレシート」に！")
					]),
					createTextVNode(),
					createVNode("div", { class: "flow_list_inner" }, [
						createVNode("figure", { class: "thum_img img_use" }, [createVNode("img", {
							src: img_use01_default,
							alt: "レジで「えんてつカード」を提示するイラスト",
							class: "img_responsive"
						})]),
						createTextVNode(),
						createVNode("p", { class: "use_caution" }, [
							createTextVNode("提示が無い場合は"),
							createVNode("br"),
							createTextVNode("紙のレシートとなります")
						]),
						createTextVNode(),
						createVNode("p", { class: "flow_list_txt txt_caution" }, "※「えんてつカード」と「スマートレシートID」の連携当日は、お買い物をしても紙のレシートが出ます")
					])
				]),
				createTextVNode(),
				createVNode("section", { class: "flow_list" }, [
					createVNode("p", { class: "flow_list_number" }, "2"),
					createTextVNode(),
					createVNode("h3", { class: "flow_list_title" }, "遠鉄ストアホームページからレシート確認"),
					createTextVNode(),
					createVNode("p", { class: "flow_list_txt" }, "※WEBサイトをお気に入り登録でもご確認いただけます"),
					createTextVNode(),
					createVNode("div", { class: "flow_list_inner" }, [createVNode("figure", { class: "thum_img img_reserve" }, [createVNode("img", {
						src: img_use02_default,
						alt: "遠鉄ストアホームページからレシートを確認するための操作方法",
						class: "img_responsive"
					})])])
				])
			])])];
		}),
		_: 1
	}, _parent));
	_push(` <section class="notes" data-v-20dd6717><h3 class="notes_title" data-v-20dd6717>注意事項</h3> <ol class="notes_list" data-v-20dd6717><li data-v-20dd6717>1つのスマートレシートIDに対し、1枚の「えんてつカード」のみ連携が可能です。他社カードの連携は不可となります。</li> <li data-v-20dd6717>領収書・紙レシート再発行が必要な場合はレジ係までお申し出ください。</li> <li data-v-20dd6717>商品の返品・交換の際には、該当のレシート画面をご提示ください。</li> <li data-v-20dd6717>レシートデータは13ヶ月間保管され、ご覧いただけます。</li> <li data-v-20dd6717>WEB画面のバーコードのみをご提示いただいても、えんてつポイントは付与されません。</li> <li data-v-20dd6717>えんてつカード＜ポイント＆プリペイドカード＞をお切替えしたお客様でスマートレシートをご登録済みの方は、再度ご登録が必要になります。</li></ol></section> <div class="btn_wrap mt-md-8" data-v-20dd6717><p class="btn_idosuper btn_entry" data-v-20dd6717><a href="https://sr-mobile-apps2.smartreceipt.jp/srsw/cooperation/10023" target="_blank" data-v-20dd6717><em data-v-20dd6717>ご登録はこちらから</em> <span data-v-20dd6717>※スマートレシート登録サイトへリンクします</span></a></p></div> <div class="mobile-box" data-v-20dd6717><section class="receipt_contact" data-v-20dd6717><h3 class="receipt_contact_title" data-v-20dd6717>スマートレシートに関する<br data-v-20dd6717>お問い合わせ窓口</h3> <div class="receipt_contact_inner" data-v-20dd6717><p class="receipt_contact_txt" data-v-20dd6717>スマートレシートコールセンター</p> <p class="receipt_contact_tel" data-v-20dd6717><a href="tel:0120683173" data-v-20dd6717><img${ssrRenderAttr("src", icon_tel_default)} alt="" data-v-20dd6717> <span data-v-20dd6717>0120-683-173</span></a></p> <p class="receipt_contact_time" data-v-20dd6717>月-金9:00〜18:00（祝祭日・年末年始を除く）</p></div></section></div> `);
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/smart-receipt/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var smart_receipt_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-20dd6717"]]);

export { smart_receipt_default as default };
//# sourceMappingURL=smart-receipt-BbjYKxUw.mjs.map
