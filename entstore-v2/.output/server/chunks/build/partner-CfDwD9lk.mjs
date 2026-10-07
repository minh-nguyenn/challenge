import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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

//#region app/assets/images/txt_partner01.webp
var txt_partner01_default = "" + __buildAssetsURL("txt_partner01.DmQnncPr.webp");
//#endregion
//#region app/assets/images/txt_partner02.svg
var txt_partner02_default = "" + __buildAssetsURL("txt_partner02.DA2gbcPO.svg");
//#endregion
//#region app/assets/images/pic_idosuper03.webp
var pic_idosuper03_default = "" + __buildAssetsURL("pic_idosuper03.DGw0tbQy.webp");
//#endregion
//#region app/assets/images/pic_idosuper04.webp
var pic_idosuper04_default = "" + __buildAssetsURL("pic_idosuper04.DE-L5SGY.webp");
//#endregion
//#region app/assets/images/pic_idosuper05.webp
var pic_idosuper05_default = "" + __buildAssetsURL("pic_idosuper05.Dts0FomV.webp");
//#endregion
//#region app/assets/images/pic_idosuper06.webp
var pic_idosuper06_default = "" + __buildAssetsURL("pic_idosuper06.Bw9P8DnB.webp");
//#endregion
//#region app/assets/images/pic_idosuper07.webp
var pic_idosuper07_default = "" + __buildAssetsURL("pic_idosuper07.DRGe_RNK.webp");
//#endregion
//#region app/assets/images/pic_idosuper07 (1).webp
var pic_idosuper07__1__default = "" + __buildAssetsURL("pic_idosuper07 (1).DUQ0FAOj.webp");
//#endregion
//#region app/pages/service/idosuper/partner.vue
var _sfc_main = {
	name: "Idosuper",
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
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
					text: "遠鉄ストアでは新たに移動スーパーをはじめます！",
					disabled: false,
					href: "/service/idosuper"
				},
				{
					text: "販売パートナー募集！！",
					disabled: true,
					href: "/service/idosuper/partner"
				}
			],
			observer: null
		};
	},
	mounted() {
		const btnFixed = this.$refs.btnFixed;
		const btnLast = this.$refs.btnLast;
		if (!btnFixed || !btnLast) return;
		this.observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) btnFixed.style.display = "none";
			else btnFixed.style.display = "block";
		}, {
			root: null,
			threshold: 1
		});
		this.observer.observe(btnLast);
	},
	beforeUnmount() {
		if (this.observer && this.$refs.btnLast) this.observer.unobserve(this.$refs.btnLast);
	},
	setup() {
		useHead$1({ title: "販売パートナー募集！！｜遠鉄ストアでは新たに移動スーパーをはじめます！｜サービス｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-12610d4f><div class="wrap-content page-header" data-v-12610d4f>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <div class="title_wrap image-title" data-v-12610d4f><h3 class="pa-0 text-center w-100" data-v-12610d4f><img class="fullImage-sm"${ssrRenderAttr("src", txt_partner01_default)} alt="遠鉄ストアの移動スーパー" data-v-12610d4f></h3></div></div> <div class="fullColumn" data-v-12610d4f><section class="partner_title" data-v-12610d4f><h2 data-v-12610d4f><img class="fullImage"${ssrRenderAttr("src", txt_partner02_default)} alt="販売パートナー（個人事業主）募集中!!" data-v-12610d4f></h2></section></div> <div class="wrap-content" data-v-12610d4f><main data-v-12610d4f><div class="btn_wrap link-entry" data-v-12610d4f><p class="btn_idosuper btn_entry" data-v-12610d4f><a href="/service/idosuper/form/" data-v-12610d4f>エントリーはこちら</a></p></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "移動スーパーの\"販売パートナー\"とは",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="article-content d-block mobile-box" data-v-12610d4f${_scopeId}><section class="content-text" data-v-12610d4f${_scopeId}><img class="trunk"${ssrRenderAttr("src", pic_idosuper03_default)} alt="" data-v-12610d4f${_scopeId}> <p class="p-mobile" data-v-12610d4f${_scopeId}>
                移動スーパーでは、最前線で活躍する販売担当の方を
                <span data-v-12610d4f${_scopeId}>“販売パートナー”</span>
                と呼んでいます。
                <br data-v-12610d4f${_scopeId}>販売パートナーさんには、【移動スーパー】の車両を所有してもらい、遠鉄ストアが取り扱う生鮮食品や生活雑貨等の移動販売を行っていただきます。
                <br data-v-12610d4f${_scopeId}>遠鉄ストア店舗の商品を販売いただくので、販売パートナーさんの
                <span data-v-12610d4f${_scopeId}>仕入れは「0（ゼロ）」</span>
                です。
                <br data-v-12610d4f${_scopeId}>いわば「販売代行」を行っていただく、という仕組みです。
                <br data-v-12610d4f${_scopeId}>そのため、
                <span data-v-12610d4f${_scopeId}>生鮮食品のロスを心配せずに販売できます。これは販売パートナーにとって、大きなメリットです。</span> <br data-v-12610d4f${_scopeId}>また、販売エリアでの
                <span data-v-12610d4f${_scopeId}>顧客開拓やノウハウなどは【遠鉄ストア】が丁寧にサポート</span>
                します。雇われるのではなく、個人事業主（オーナー経営者）となって、「ありがとう」と言ってもらえる
                <span data-v-12610d4f${_scopeId}>やりがいのある仕事にチャレンジしてみませんか？</span></p></section></div>`);
			else return [createVNode("div", { class: "article-content d-block mobile-box" }, [createVNode("section", { class: "content-text" }, [
				createVNode("img", {
					class: "trunk",
					src: pic_idosuper03_default,
					alt: ""
				}),
				createTextVNode(),
				createVNode("p", { class: "p-mobile" }, [
					createTextVNode("\n                移動スーパーでは、最前線で活躍する販売担当の方を\n                "),
					createVNode("span", null, "“販売パートナー”"),
					createTextVNode("\n                と呼んでいます。\n                "),
					createVNode("br"),
					createTextVNode("販売パートナーさんには、【移動スーパー】の車両を所有してもらい、遠鉄ストアが取り扱う生鮮食品や生活雑貨等の移動販売を行っていただきます。\n                "),
					createVNode("br"),
					createTextVNode("遠鉄ストア店舗の商品を販売いただくので、販売パートナーさんの\n                "),
					createVNode("span", null, "仕入れは「0（ゼロ）」"),
					createTextVNode("\n                です。\n                "),
					createVNode("br"),
					createTextVNode("いわば「販売代行」を行っていただく、という仕組みです。\n                "),
					createVNode("br"),
					createTextVNode("そのため、\n                "),
					createVNode("span", null, "生鮮食品のロスを心配せずに販売できます。これは販売パートナーにとって、大きなメリットです。"),
					createTextVNode(),
					createVNode("br"),
					createTextVNode("また、販売エリアでの\n                "),
					createVNode("span", null, "顧客開拓やノウハウなどは【遠鉄ストア】が丁寧にサポート"),
					createTextVNode("\n                します。雇われるのではなく、個人事業主（オーナー経営者）となって、「ありがとう」と言ってもらえる\n                "),
					createVNode("span", null, "やりがいのある仕事にチャレンジしてみませんか？")
				])
			])])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="structure_img" data-v-12610d4f><img class="fullImage-sm"${ssrRenderAttr("src", pic_idosuper04_default)} alt="" data-v-12610d4f></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "仕事内容",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="article-content" data-v-12610d4f${_scopeId}><section class="content-img d-none-des" data-v-12610d4f${_scopeId}><img class="fullImage-sm"${ssrRenderAttr("src", pic_idosuper05_default)} alt="" data-v-12610d4f${_scopeId}></section> <section class="content-text mobile-box" data-v-12610d4f${_scopeId}><ul class="list_work" data-v-12610d4f${_scopeId}><li data-v-12610d4f${_scopeId}>移動スーパーを運転して、住宅地や一軒一軒お客様の玄関先へ出向き食料品や生活用品を販売します。</li> <li data-v-12610d4f${_scopeId}>お客さんが集まってくれるポイントもあり、コミュニティの活性化にも役立っています。</li> <li data-v-12610d4f${_scopeId}>すべて対面販売をするので、自然とお客さんとの信頼関係が築かれていきます。</li> <li data-v-12610d4f${_scopeId}>高齢化社会にますます必要とされる仕事です。</li></ul></section> <section class="content-img d-none-mobile" data-v-12610d4f${_scopeId}><img${ssrRenderAttr("src", pic_idosuper05_default)} alt="" data-v-12610d4f${_scopeId}></section></div>`);
			else return [createVNode("div", { class: "article-content" }, [
				createVNode("section", { class: "content-img d-none-des" }, [createVNode("img", {
					class: "fullImage-sm",
					src: pic_idosuper05_default,
					alt: ""
				})]),
				createTextVNode(),
				createVNode("section", { class: "content-text mobile-box" }, [createVNode("ul", { class: "list_work" }, [
					createVNode("li", null, "移動スーパーを運転して、住宅地や一軒一軒お客様の玄関先へ出向き食料品や生活用品を販売します。"),
					createTextVNode(),
					createVNode("li", null, "お客さんが集まってくれるポイントもあり、コミュニティの活性化にも役立っています。"),
					createTextVNode(),
					createVNode("li", null, "すべて対面販売をするので、自然とお客さんとの信頼関係が築かれていきます。"),
					createTextVNode(),
					createVNode("li", null, "高齢化社会にますます必要とされる仕事です。")
				])]),
				createTextVNode(),
				createVNode("section", { class: "content-img d-none-mobile" }, [createVNode("img", {
					src: pic_idosuper05_default,
					alt: ""
				})])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "こんな人にぴったり！",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="article-content" data-v-12610d4f${_scopeId}><section class="content-img d-none-des" data-v-12610d4f${_scopeId}><img class="fullImage-sm"${ssrRenderAttr("src", pic_idosuper06_default)} alt="" data-v-12610d4f${_scopeId}></section> <section class="content-text mobile-box" data-v-12610d4f${_scopeId}><ul class="list_work" data-v-12610d4f${_scopeId}><li data-v-12610d4f${_scopeId}>真面目で、誠実、さらに明るく笑顔のステキな人</li> <li data-v-12610d4f${_scopeId}>「ありがとう」と言われる仕事がしたい人</li> <li data-v-12610d4f${_scopeId}>社会に役立つ仕事がしたい人</li> <li data-v-12610d4f${_scopeId}>独立して事業がしたい人</li></ul></section> <section class="content-img d-none-mobile" data-v-12610d4f${_scopeId}><img${ssrRenderAttr("src", pic_idosuper06_default)} alt="" data-v-12610d4f${_scopeId}></section></div>`);
			else return [createVNode("div", { class: "article-content" }, [
				createVNode("section", { class: "content-img d-none-des" }, [createVNode("img", {
					class: "fullImage-sm",
					src: pic_idosuper06_default,
					alt: ""
				})]),
				createTextVNode(),
				createVNode("section", { class: "content-text mobile-box" }, [createVNode("ul", { class: "list_work" }, [
					createVNode("li", null, "真面目で、誠実、さらに明るく笑顔のステキな人"),
					createTextVNode(),
					createVNode("li", null, "「ありがとう」と言われる仕事がしたい人"),
					createTextVNode(),
					createVNode("li", null, "社会に役立つ仕事がしたい人"),
					createTextVNode(),
					createVNode("li", null, "独立して事業がしたい人")
				])]),
				createTextVNode(),
				createVNode("section", { class: "content-img d-none-mobile" }, [createVNode("img", {
					src: pic_idosuper06_default,
					alt: ""
				})])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "1日の流れ",
		class: "mb-0 wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="d-flex justify-center" data-v-12610d4f${_scopeId}><div class="oneday_img" data-v-12610d4f${_scopeId}><img class="d-none-mobile"${ssrRenderAttr("src", pic_idosuper07_default)} alt="" data-v-12610d4f${_scopeId}> <img class="d-none-des"${ssrRenderAttr("src", pic_idosuper07__1__default)} alt="" data-v-12610d4f${_scopeId}></div></div>`);
			else return [createVNode("div", { class: "d-flex justify-center" }, [createVNode("div", { class: "oneday_img" }, [
				createVNode("img", {
					class: "d-none-mobile",
					src: pic_idosuper07_default,
					alt: ""
				}),
				createTextVNode(),
				createVNode("img", {
					class: "d-none-des",
					src: pic_idosuper07__1__default,
					alt: ""
				})
			])])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="btn_wrap" data-v-12610d4f><p class="btn_idosuper btn_entry" data-v-12610d4f><a href="/service/idosuper/form/" data-v-12610d4f>エントリーはこちら</a></p></div> <div class="mobile-box" data-v-12610d4f><section class="contentInner qualification" data-v-12610d4f><h3 data-v-12610d4f>応募資格</h3> <ul class="list_qualification" data-v-12610d4f><li data-v-12610d4f>だいたい35～60歳くらいの方。
                <p class="txt_reason" data-v-12610d4f>なぜなら…</p> <ul class="list_reason" data-v-12610d4f><li data-v-12610d4f>ある程度の就業経験を積んでからの方が望ましいと考えています。</li> <li data-v-12610d4f>体力的にとてもハードですし、注文を記憶したり頭もフル回転させる仕事です。</li> <li data-v-12610d4f>今後15～20年間は需要増加の事業になりますが、その先は少しずつ需要が縮小する可能性があるため（そんな先のコトはあくまで予測に過ぎませんが、責任感から）対象年齢を絞っています。</li></ul></li> <li data-v-12610d4f>普通自動車運転免許が必要です。</li> <li data-v-12610d4f>過去の経歴は問いませんが、真面目で誠実な人柄であることは重要な条件です。</li> <li data-v-12610d4f>自己資金、銀行借入など、ご自身での車両購入資金の用意ができることが前提となります。</li></ul></section></div> <div class="btn_wrap" id="btn_wrap_last" data-v-12610d4f><p class="btn_idosuper btn_entry" data-v-12610d4f><a href="/service/idosuper/form/" data-v-12610d4f>エントリーはこちら</a></p></div> <div class="btn_wrap btn_wrap_fixed" data-v-12610d4f><p class="btn_idosuper btn_entry" data-v-12610d4f><a href="/service/idosuper/form/" data-v-12610d4f>エントリーはこちら</a></p></div> <div class="mobile-box" data-v-12610d4f><div class="inquiry_box" data-v-12610d4f><dl class="inquiry_list" data-v-12610d4f><dt data-v-12610d4f>お問い合わせ先</dt> <dd data-v-12610d4f>株式会社遠鉄ストア　移動販売課<br data-v-12610d4f>澤井・鎌倉・犬塚<br data-v-12610d4f>月-金曜日 10:00-18:00<br data-v-12610d4f>053-445-1050</dd></dl></div></div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/service/idosuper"
	}, null, _parent));
	_push(`</main></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/idosuper/partner.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var partner_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-12610d4f"]]);

export { partner_default as default };
//# sourceMappingURL=partner-CfDwD9lk.mjs.map
