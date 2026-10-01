import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/faq.vue
var _sfc_main = {
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
				text: "よくあるご質問",
				disabled: true,
				href: "/faq"
			}],
			isMobile: true
		};
	},
	mounted() {
		this.checkIsMobile();
		(void 0).addEventListener("resize", this.checkIsMobile);
	},
	beforeUnmount() {
		(void 0).removeEventListener("resize", this.checkIsMobile);
	},
	methods: { checkIsMobile() {
		this.isMobile = (void 0).innerWidth <= 768;
	} },
	setup() {
		useHead$1({ title: "よくあるご質問｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-b7a2a94e><main data-v-b7a2a94e>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-b7a2a94e>よくあるご質問</h2> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-box",
		title: $data.isMobile ? "支払いの時に使用可能なクレジットカードを教えてください。" : "Q.支払いの時に使用可能なクレジットカードを教えてください。"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="artitle-content" data-v-b7a2a94e${_scopeId}><p data-v-b7a2a94e${_scopeId}>`);
				if (!$data.isMobile) _push(`<span data-v-b7a2a94e${_scopeId}>A.</span>`);
				else _push(`<!---->`);
				_push(`えんてつカードポイント&amp;クレジットカードをはじめとして、JCB、VISA、MasterCard、American
            Expressの国際ブランドマークが付いたクレジットカードがご使用いただけます。</p></div>`);
			} else return [createVNode("div", { class: "artitle-content" }, [createVNode("p", null, [!$data.isMobile ? (openBlock(), createBlock("span", { key: 0 }, "A.")) : createCommentVNode("", true), createTextVNode("えんてつカードポイント&クレジットカードをはじめとして、JCB、VISA、MasterCard、American\n            Expressの国際ブランドマークが付いたクレジットカードがご使用いただけます。")])])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-box",
		title: $data.isMobile ? "支払いに商品券やギフトカードは使えますか?" : "Q.支払いに商品券やギフトカードは使えますか?"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="artitle-content" data-v-b7a2a94e${_scopeId}><p data-v-b7a2a94e${_scopeId}>`);
				if (!$data.isMobile) _push(`<span data-v-b7a2a94e${_scopeId}>A.</span>`);
				else _push(`<!---->`);
				_push(`遠鉄百貨店商品券、CGCグループ商品券やUC、JCB、VISA.、三菱UFJニコスのギフトカードがご利用いただけます。なお、全国百貨店共通商品券はご利用いただけません。その他のギフト券(ビール券など)につきましては、ご利用店舗にてお問い合わせ下さい。
          </p></div>`);
			} else return [createVNode("div", { class: "artitle-content" }, [createVNode("p", null, [!$data.isMobile ? (openBlock(), createBlock("span", { key: 0 }, "A.")) : createCommentVNode("", true), createTextVNode("遠鉄百貨店商品券、CGCグループ商品券やUC、JCB、VISA.、三菱UFJニコスのギフトカードがご利用いただけます。なお、全国百貨店共通商品券はご利用いただけません。その他のギフト券(ビール券など)につきましては、ご利用店舗にてお問い合わせ下さい。\n          ")])])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-box",
		title: $data.isMobile ? "全国百貨店共通商品券は使えますか?" : "Q.全国百貨店共通商品券は使えますか?"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="artitle-content" data-v-b7a2a94e${_scopeId}><p data-v-b7a2a94e${_scopeId}>`);
				if (!$data.isMobile) _push(`<span data-v-b7a2a94e${_scopeId}>A.</span>`);
				else _push(`<!---->`);
				_push(`全国百貨店共通商品券は全国の百貨店のみで使うことが出来る商品券となっており、遠鉄ストアではご使用になれません。</p></div>`);
			} else return [createVNode("div", { class: "artitle-content" }, [createVNode("p", null, [!$data.isMobile ? (openBlock(), createBlock("span", { key: 0 }, "A.")) : createCommentVNode("", true), createTextVNode("全国百貨店共通商品券は全国の百貨店のみで使うことが出来る商品券となっており、遠鉄ストアではご使用になれません。")])])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-box",
		title: $data.isMobile ? "遠鉄ストアで買える商品券・ギフトカードはありますか?" : "Q.遠鉄ストアで買える商品券・ギフトカードはありますか?"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="artitle-content" data-v-b7a2a94e${_scopeId}><p data-v-b7a2a94e${_scopeId}>`);
				if (!$data.isMobile) _push(`<span data-v-b7a2a94e${_scopeId}>A.</span>`);
				else _push(`<!---->`);
				_push(`遠鉄グループでご利用可能な遠鉄百貨店商品券1,000円券と全国の加盟店でご利用可能なUCギフトカード1,000円券、CGC加盟店でご利用可能なCGCグループ共通商品券1,000円券を販売しております。サービスカウンターにて販売しております。
          </p></div>`);
			} else return [createVNode("div", { class: "artitle-content" }, [createVNode("p", null, [!$data.isMobile ? (openBlock(), createBlock("span", { key: 0 }, "A.")) : createCommentVNode("", true), createTextVNode("遠鉄グループでご利用可能な遠鉄百貨店商品券1,000円券と全国の加盟店でご利用可能なUCギフトカード1,000円券、CGC加盟店でご利用可能なCGCグループ共通商品券1,000円券を販売しております。サービスカウンターにて販売しております。\n          ")])])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-box",
		title: $data.isMobile ? "店舗の品揃えや商品の在庫を確認したいのですが。" : "Q.店舗の品揃えや商品の在庫を確認したいのですが。"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="artitle-content" data-v-b7a2a94e${_scopeId}><p data-v-b7a2a94e${_scopeId}>`);
				if (!$data.isMobile) _push(`<span data-v-b7a2a94e${_scopeId}>A.</span>`);
				else _push(`<!---->`);
				_push(`ご利用される店舗まで直接お問い合わせ下さい。</p> <a class="d-none-mobile" href="/shop/" data-v-b7a2a94e${_scopeId}>&gt;&gt;店舗一覧</a> <p class="pdfLinks d-none-des" data-v-b7a2a94e${_scopeId}><a href="/shop/" data-v-b7a2a94e${_scopeId}>店舗一覧<svg class="icon" data-v-b7a2a94e${_scopeId}><use xlink:href="#icon_arrow03" data-v-b7a2a94e${_scopeId}></use></svg></a></p></div>`);
			} else return [createVNode("div", { class: "artitle-content" }, [
				createVNode("p", null, [!$data.isMobile ? (openBlock(), createBlock("span", { key: 0 }, "A.")) : createCommentVNode("", true), createTextVNode("ご利用される店舗まで直接お問い合わせ下さい。")]),
				createTextVNode(),
				createVNode("a", {
					class: "d-none-mobile",
					href: "/shop/"
				}, ">>店舗一覧"),
				createTextVNode(),
				createVNode("p", { class: "pdfLinks d-none-des" }, [createVNode("a", { href: "/shop/" }, [createTextVNode("店舗一覧"), (openBlock(), createBlock("svg", { class: "icon" }, [createVNode("use", { "xlink:href": "#icon_arrow03" })]))])])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-box",
		title: $data.isMobile ? "店舗で取り扱ってほしい商品があるのですが。" : "Q.店舗で取り扱ってほしい商品があるのですが。"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="artitle-content" data-v-b7a2a94e${_scopeId}><p data-v-b7a2a94e${_scopeId}>`);
				if (!$data.isMobile) _push(`<span data-v-b7a2a94e${_scopeId}>A.</span>`);
				else _push(`<!---->`);
				_push(`ご利用店舗にご相談下さい。</p> <a class="d-none-mobile" href="/shop/" data-v-b7a2a94e${_scopeId}>&gt;&gt;店舗一覧</a> <p class="pdfLinks d-none-des" data-v-b7a2a94e${_scopeId}><a href="/shop/" data-v-b7a2a94e${_scopeId}>店舗一覧<svg class="icon" data-v-b7a2a94e${_scopeId}><use xlink:href="#icon_arrow03" data-v-b7a2a94e${_scopeId}></use></svg></a></p></div>`);
			} else return [createVNode("div", { class: "artitle-content" }, [
				createVNode("p", null, [!$data.isMobile ? (openBlock(), createBlock("span", { key: 0 }, "A.")) : createCommentVNode("", true), createTextVNode("ご利用店舗にご相談下さい。")]),
				createTextVNode(),
				createVNode("a", {
					class: "d-none-mobile",
					href: "/shop/"
				}, ">>店舗一覧"),
				createTextVNode(),
				createVNode("p", { class: "pdfLinks d-none-des" }, [createVNode("a", { href: "/shop/" }, [createTextVNode("店舗一覧"), (openBlock(), createBlock("svg", { class: "icon" }, [createVNode("use", { "xlink:href": "#icon_arrow03" })]))])])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-box",
		title: $data.isMobile ? "忘れ物や落とし物をした場合、どこに連絡したらいいですか?" : "Q.忘れ物や落とし物をした場合、どこに連絡したらいいですか?"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="artitle-content" data-v-b7a2a94e${_scopeId}><p data-v-b7a2a94e${_scopeId}>`);
				if (!$data.isMobile) _push(`<span data-v-b7a2a94e${_scopeId}>A.</span>`);
				else _push(`<!---->`);
				_push(`店舗にて確認したお客さまのお忘れ物・落とし物は店舗にて一定期間保管しております。ご利用になられた店舗まで直接お問い合わせください。</p> <a class="d-none-mobile" href="/shop/" data-v-b7a2a94e${_scopeId}>&gt;&gt;店舗一覧</a> <p class="pdfLinks d-none-des" data-v-b7a2a94e${_scopeId}><a href="/shop/" data-v-b7a2a94e${_scopeId}>店舗一覧<svg class="icon" data-v-b7a2a94e${_scopeId}><use xlink:href="#icon_arrow03" data-v-b7a2a94e${_scopeId}></use></svg></a></p></div>`);
			} else return [createVNode("div", { class: "artitle-content" }, [
				createVNode("p", null, [!$data.isMobile ? (openBlock(), createBlock("span", { key: 0 }, "A.")) : createCommentVNode("", true), createTextVNode("店舗にて確認したお客さまのお忘れ物・落とし物は店舗にて一定期間保管しております。ご利用になられた店舗まで直接お問い合わせください。")]),
				createTextVNode(),
				createVNode("a", {
					class: "d-none-mobile",
					href: "/shop/"
				}, ">>店舗一覧"),
				createTextVNode(),
				createVNode("p", { class: "pdfLinks d-none-des" }, [createVNode("a", { href: "/shop/" }, [createTextVNode("店舗一覧"), (openBlock(), createBlock("svg", { class: "icon" }, [createVNode("use", { "xlink:href": "#icon_arrow03" })]))])])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-box",
		title: $data.isMobile ? "インターネットでチラシを見ることができますか?" : "Q.インターネットでチラシを見ることができますか?"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="artitle-content" data-v-b7a2a94e${_scopeId}>`);
				if (!$data.isMobile) _push(`<p data-v-b7a2a94e${_scopeId}>A.インターネットでチラシをご覧になることができます。<a href="/chirashi/" data-v-b7a2a94e${_scopeId}>こちら</a>をご覧下さい。</p>`);
				else _push(`<p data-v-b7a2a94e${_scopeId}>インターネットでチラシをご覧になることができます。</p>`);
				_push(` <a class="d-none-mobile" href="/chirashi/" data-v-b7a2a94e${_scopeId}>&gt;&gt;チラシを見る</a> <p class="pdfLinks d-none-des" data-v-b7a2a94e${_scopeId}><a href="/chirashi/" data-v-b7a2a94e${_scopeId}>チラシを見る<svg class="icon" data-v-b7a2a94e${_scopeId}><use xlink:href="#icon_arrow03" data-v-b7a2a94e${_scopeId}></use></svg></a></p></div>`);
			} else return [createVNode("div", { class: "artitle-content" }, [
				!$data.isMobile ? (openBlock(), createBlock("p", { key: 0 }, [
					createTextVNode("A.インターネットでチラシをご覧になることができます。"),
					createVNode("a", { href: "/chirashi/" }, "こちら"),
					createTextVNode("をご覧下さい。")
				])) : (openBlock(), createBlock("p", { key: 1 }, "インターネットでチラシをご覧になることができます。")),
				createTextVNode(),
				createVNode("a", {
					class: "d-none-mobile",
					href: "/chirashi/"
				}, ">>チラシを見る"),
				createTextVNode(),
				createVNode("p", { class: "pdfLinks d-none-des" }, [createVNode("a", { href: "/chirashi/" }, [createTextVNode("チラシを見る"), (openBlock(), createBlock("svg", { class: "icon" }, [createVNode("use", { "xlink:href": "#icon_arrow03" })]))])])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile btn-back",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(` <div class="mobile-box d-none-mobile" data-v-b7a2a94e><p class="pdfLinks d-none-des" data-v-b7a2a94e><a href="javascript:history.back()" data-v-b7a2a94e>前のページへ戻る<svg class="icon" data-v-b7a2a94e><use xlink:href="#icon_arrow03" data-v-b7a2a94e></use></svg></a></p></div></main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var faq_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b7a2a94e"]]);

export { faq_default as default };
//# sourceMappingURL=faq-B9HCsiuO.mjs.map
