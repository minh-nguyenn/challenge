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

//#region app/assets/images/img_main (1).webp
var img_main__1__default = "" + __buildAssetsURL("img_main (1).lWtLWNo5.webp");
//#endregion
//#region app/assets/images/pic_idosuper01.webp
var pic_idosuper01_default = "" + __buildAssetsURL("pic_idosuper01.D2XjvhWg.webp");
//#endregion
//#region app/assets/images/pic_idosuper02.webp
var pic_idosuper02_default = "" + __buildAssetsURL("pic_idosuper02.Cmrhhol3.webp");
//#endregion
//#region app/pages/service/idosuper/index.vue
var _sfc_main = {
	name: "Idosuper",
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
				text: "遠鉄ストアでは新たに移動スーパーをはじめます！",
				disabled: true,
				href: "/service/idosuper"
			}
		] };
	},
	setup() {
		useHead$1({ title: "遠鉄ストアでは新たに移動スーパーをはじめます！｜サービス｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-40f355c7>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-40f355c7><section class="idosuper_title" data-v-40f355c7><img class="fullImage"${ssrRenderAttr("src", img_main__1__default)} alt="遠鉄ストアの移動スーパー 新鮮な食材お届けします！ 遠鉄ストアでは新たに移動スーパーはじめます！" data-v-40f355c7></section> <div class="btn_wrap" data-v-40f355c7><p class="btn_idosuper btn_partner" data-v-40f355c7><a href="/service/idosuper/partner/" data-v-40f355c7>販売パートナー募集中!!</a></p></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "お家の前で、見て、選んで、買物できます。",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="article-content mobile-box" data-v-40f355c7${_scopeId}><section class="content-img d-none-des" data-v-40f355c7${_scopeId}><img class="fullImage-sm"${ssrRenderAttr("src", pic_idosuper01_default)} alt="" data-v-40f355c7${_scopeId}></section> <section class="content-text" data-v-40f355c7${_scopeId}><p data-v-40f355c7${_scopeId}>
              刺身、寿司、惣菜、肉、野菜、果物、パン、お菓子、お米、日用品、トイレットペーパーにティッシュまで。
              <br data-v-40f355c7${_scopeId}>
              遠鉄ストアのお店にある商品をたっぷり積み込んで、定期的にご自宅まで伺います。
            </p></section> <section class="content-img d-none-mobile" data-v-40f355c7${_scopeId}><img${ssrRenderAttr("src", pic_idosuper01_default)} class="fullImage" alt="" data-v-40f355c7${_scopeId}></section></div>`);
			else return [createVNode("div", { class: "article-content mobile-box" }, [
				createVNode("section", { class: "content-img d-none-des" }, [createVNode("img", {
					class: "fullImage-sm",
					src: pic_idosuper01_default,
					alt: ""
				})]),
				createTextVNode(),
				createVNode("section", { class: "content-text" }, [createVNode("p", null, [
					createTextVNode("\n              刺身、寿司、惣菜、肉、野菜、果物、パン、お菓子、お米、日用品、トイレットペーパーにティッシュまで。\n              "),
					createVNode("br"),
					createTextVNode("\n              遠鉄ストアのお店にある商品をたっぷり積み込んで、定期的にご自宅まで伺います。\n            ")
				])]),
				createTextVNode(),
				createVNode("section", { class: "content-img d-none-mobile" }, [createVNode("img", {
					src: pic_idosuper01_default,
					class: "fullImage",
					alt: ""
				})])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "価格について",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="article-content mobile-box" data-v-40f355c7${_scopeId}><section class="content-img d-none-des" data-v-40f355c7${_scopeId}><img class="fullImage-sm"${ssrRenderAttr("src", pic_idosuper02_default)} alt="" data-v-40f355c7${_scopeId}></section> <section class="content-text" data-v-40f355c7${_scopeId}><p data-v-40f355c7${_scopeId}>商品の価格は、基本的には店頭価格（特売を除く）<span data-v-40f355c7${_scopeId}>「＋20円」</span>をいただきます。<br data-v-40f355c7${_scopeId}>「＋20円」は、商品一品に付きいただきます。<br data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>スーパーまで車で移動するガソリン代やタクシー代などの費用の代わり</span>と捉えていただけると<span data-v-40f355c7${_scopeId}>「＋20円」が決して「高くはない」はず</span>です。<br data-v-40f355c7${_scopeId}>
              お会計は、現金のみとなります。※えんてつポイントの利用や付与はできません。</p></section> <section class="content-img d-none-mobile" data-v-40f355c7${_scopeId}><img${ssrRenderAttr("src", pic_idosuper02_default)} alt="" data-v-40f355c7${_scopeId}></section></div>`);
			else return [createVNode("div", { class: "article-content mobile-box" }, [
				createVNode("section", { class: "content-img d-none-des" }, [createVNode("img", {
					class: "fullImage-sm",
					src: pic_idosuper02_default,
					alt: ""
				})]),
				createTextVNode(),
				createVNode("section", { class: "content-text" }, [createVNode("p", null, [
					createTextVNode("商品の価格は、基本的には店頭価格（特売を除く）"),
					createVNode("span", null, "「＋20円」"),
					createTextVNode("をいただきます。"),
					createVNode("br"),
					createTextVNode("「＋20円」は、商品一品に付きいただきます。"),
					createVNode("br"),
					createVNode("span", null, "スーパーまで車で移動するガソリン代やタクシー代などの費用の代わり"),
					createTextVNode("と捉えていただけると"),
					createVNode("span", null, "「＋20円」が決して「高くはない」はず"),
					createTextVNode("です。"),
					createVNode("br"),
					createTextVNode("\n              お会計は、現金のみとなります。※えんてつポイントの利用や付与はできません。")
				])]),
				createTextVNode(),
				createVNode("section", { class: "content-img d-none-mobile" }, [createVNode("img", {
					src: pic_idosuper02_default,
					alt: ""
				})])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "訪問までの流れ",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<ol class="idosuper_list" data-v-40f355c7${_scopeId}><li data-v-40f355c7${_scopeId}><span class="maru" data-v-40f355c7${_scopeId}>1</span><br class="d-none-des" data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>遠鉄ストアへ電話する</span></li> <li data-v-40f355c7${_scopeId}><span class="maru" data-v-40f355c7${_scopeId}>2</span><br class="d-none-des" data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>住所と名前を伝える</span></li> <li data-v-40f355c7${_scopeId}><span class="maru" data-v-40f355c7${_scopeId}>3</span><br class="d-none-des" data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>訪問エリアの調整など確認後、<br class="d-none-des" data-v-40f355c7${_scopeId}>担当者より再度ご連絡</span></li></ol>`);
			else return [createVNode("ol", { class: "idosuper_list" }, [
				createVNode("li", null, [
					createVNode("span", { class: "maru" }, "1"),
					createVNode("br", { class: "d-none-des" }),
					createVNode("span", null, "遠鉄ストアへ電話する")
				]),
				createTextVNode(),
				createVNode("li", null, [
					createVNode("span", { class: "maru" }, "2"),
					createVNode("br", { class: "d-none-des" }),
					createVNode("span", null, "住所と名前を伝える")
				]),
				createTextVNode(),
				createVNode("li", null, [
					createVNode("span", { class: "maru" }, "3"),
					createVNode("br", { class: "d-none-des" }),
					createVNode("span", null, [
						createTextVNode("訪問エリアの調整など確認後、"),
						createVNode("br", { class: "d-none-des" }),
						createTextVNode("担当者より再度ご連絡")
					])
				])
			])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="btn_wrap" data-v-40f355c7><p class="btn_idosuper btn_partner" data-v-40f355c7><a href="/service/idosuper/partner/" data-v-40f355c7>販売パートナー募集中!!</a></p></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "よくあるご質問",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<dl class="list_qanda mobile-box" data-v-40f355c7${_scopeId}><dt data-v-40f355c7${_scopeId}>Q1 どこで買えるの？</dt> <dd data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>A1</span> <p data-v-40f355c7${_scopeId}>ご希望いただいたお客様のご自宅またはご希望の場所へお伺いいたします。<br data-v-40f355c7${_scopeId}>
              お近くに「遠鉄ストアの移動スーパー」が回って販売しております。ご興味がございましたら、お気軽にご利用ください。
              <br data-v-40f355c7${_scopeId}>※但し、販売エリアに限ります。対象エリアは、随時拡大していますから、お問合せください。</p></dd> <dt data-v-40f355c7${_scopeId}>Q2 いつ買えるの？</dt> <dd data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>A2</span> <p data-v-40f355c7${_scopeId}>基本的には、毎週2回、決まったコースを巡回しています。月木、火金、水土のいずれかの曜日に訪問いたします。時間は、何度かおじゃまする内に自然と決まってくることになります。3日に1度の訪問になりますから、買いだめせずに、少しずつ新鮮なお買物をお楽しみください。</p></dd> <dt data-v-40f355c7${_scopeId}>Q3 何が買えるの？</dt> <dd data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>A3</span> <p data-v-40f355c7${_scopeId}>しっかりした冷蔵庫が乗っているので、新鮮な刺身、寿司、惣菜、お肉、野菜、果実から、パン、お菓子、日用品など、店頭に並んでいる商品が購入できます。</p></dd> <dt data-v-40f355c7${_scopeId}>Q4 何でも乗せてるの？</dt> <dd data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>A4</span> <p data-v-40f355c7${_scopeId}>「遠鉄ストアの移動スーパー」は軽トラックを利用していますから、さすがに「何でも」というわけにはいきません。でも、希望の商品が乗っていなかった場合は、遠慮なく注文してください。3日後にまた訪問しますので、その時にお届けいたします。<br data-v-40f355c7${_scopeId}>※但し、遠鉄ストアの取扱商品に限らせていただきます。</p></dd> <dt data-v-40f355c7${_scopeId}>Q5 値段は店舗と同じなの？</dt> <dd data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>A5</span> <p data-v-40f355c7${_scopeId}>基本的には「＋20円ルール」を採用しています。これは、商品1点に付きプラス20円させていただくというものです。でも、ガソリン代を払って車で買物に行ったり、バスやタクシー利用の費用を考えると、決して「高くはない」はずです。</p></dd> <dt data-v-40f355c7${_scopeId}>Q6 えんてつカードは使えるの？</dt> <dd data-v-40f355c7${_scopeId}><span data-v-40f355c7${_scopeId}>A6</span> <p data-v-40f355c7${_scopeId}>お支払いは、現金のみとなっています。えんてつポイントの付与や利用もできませんので、ご了承ください。</p></dd></dl>`);
			else return [createVNode("dl", { class: "list_qanda mobile-box" }, [
				createVNode("dt", null, "Q1 どこで買えるの？"),
				createTextVNode(),
				createVNode("dd", null, [
					createVNode("span", null, "A1"),
					createTextVNode(),
					createVNode("p", null, [
						createTextVNode("ご希望いただいたお客様のご自宅またはご希望の場所へお伺いいたします。"),
						createVNode("br"),
						createTextVNode("\n              お近くに「遠鉄ストアの移動スーパー」が回って販売しております。ご興味がございましたら、お気軽にご利用ください。\n              "),
						createVNode("br"),
						createTextVNode("※但し、販売エリアに限ります。対象エリアは、随時拡大していますから、お問合せください。")
					])
				]),
				createTextVNode(),
				createVNode("dt", null, "Q2 いつ買えるの？"),
				createTextVNode(),
				createVNode("dd", null, [
					createVNode("span", null, "A2"),
					createTextVNode(),
					createVNode("p", null, "基本的には、毎週2回、決まったコースを巡回しています。月木、火金、水土のいずれかの曜日に訪問いたします。時間は、何度かおじゃまする内に自然と決まってくることになります。3日に1度の訪問になりますから、買いだめせずに、少しずつ新鮮なお買物をお楽しみください。")
				]),
				createTextVNode(),
				createVNode("dt", null, "Q3 何が買えるの？"),
				createTextVNode(),
				createVNode("dd", null, [
					createVNode("span", null, "A3"),
					createTextVNode(),
					createVNode("p", null, "しっかりした冷蔵庫が乗っているので、新鮮な刺身、寿司、惣菜、お肉、野菜、果実から、パン、お菓子、日用品など、店頭に並んでいる商品が購入できます。")
				]),
				createTextVNode(),
				createVNode("dt", null, "Q4 何でも乗せてるの？"),
				createTextVNode(),
				createVNode("dd", null, [
					createVNode("span", null, "A4"),
					createTextVNode(),
					createVNode("p", null, [
						createTextVNode("「遠鉄ストアの移動スーパー」は軽トラックを利用していますから、さすがに「何でも」というわけにはいきません。でも、希望の商品が乗っていなかった場合は、遠慮なく注文してください。3日後にまた訪問しますので、その時にお届けいたします。"),
						createVNode("br"),
						createTextVNode("※但し、遠鉄ストアの取扱商品に限らせていただきます。")
					])
				]),
				createTextVNode(),
				createVNode("dt", null, "Q5 値段は店舗と同じなの？"),
				createTextVNode(),
				createVNode("dd", null, [
					createVNode("span", null, "A5"),
					createTextVNode(),
					createVNode("p", null, "基本的には「＋20円ルール」を採用しています。これは、商品1点に付きプラス20円させていただくというものです。でも、ガソリン代を払って車で買物に行ったり、バスやタクシー利用の費用を考えると、決して「高くはない」はずです。")
				]),
				createTextVNode(),
				createVNode("dt", null, "Q6 えんてつカードは使えるの？"),
				createTextVNode(),
				createVNode("dd", null, [
					createVNode("span", null, "A6"),
					createTextVNode(),
					createVNode("p", null, "お支払いは、現金のみとなっています。えんてつポイントの付与や利用もできませんので、ご了承ください。")
				])
			])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="btn_wrap" data-v-40f355c7><p class="btn_idosuper btn_partner" data-v-40f355c7><a href="/service/idosuper/partner/" data-v-40f355c7>販売パートナー募集中!!</a></p></div> <p class="txt_visit" data-v-40f355c7>訪問先募集中！</p> <div class="btn_wrap form-btn mt-md-8" data-v-40f355c7><p class="btn_idosuper btn_guy" data-v-40f355c7><a href="/service/idosuper/form/" data-v-40f355c7>移動スーパーでお買い物したい方はこちら</a></p></div> `);
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/idosuper/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var idosuper_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-40f355c7"]]);

export { idosuper_default as default };
//# sourceMappingURL=idosuper-CckxuIF_.mjs.map
