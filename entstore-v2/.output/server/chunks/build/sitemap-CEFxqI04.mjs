import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, useSSRContext } from 'vue';
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

//#region app/pages/sitemap.vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	data() {
		return { breadcrumbItems: [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "サイトマップ",
			disabled: true,
			href: "/sitemap"
		}] };
	},
	setup() {
		useHead$1({ title: "サイトマップ｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-483af79d><main data-v-483af79d>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 class="d-none-des" data-v-483af79d>サイトマップ</h2> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "サイトマップ",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<dl data-v-483af79d${_scopeId}><dt data-v-483af79d${_scopeId}><a href="/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>遠鉄ストアトップ</a></dt> <dt data-v-483af79d${_scopeId}>店舗情報</dt> <dd data-v-483af79d${_scopeId}><a href="/shop/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>店舗一覧</a></dd> <dt data-v-483af79d${_scopeId}>チラシ情報</dt> <dd data-v-483af79d${_scopeId}><a href="/chirashi/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>チラシ情報一覧</a></dd> <dt data-v-483af79d${_scopeId}>お知らせ</dt> <dd data-v-483af79d${_scopeId}><a href="/info/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>店舗からのお知らせ</a></dd> <dd data-v-483af79d${_scopeId}><a href="/event/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>イベント・キャンペーン情報</a></dd> <dd data-v-483af79d${_scopeId}><a href="/news/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>ニュースリリース</a></dd> <dt data-v-483af79d${_scopeId}>サービス</dt> <dd data-v-483af79d${_scopeId}><a href="/service/cooking/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>調理サービス</a></dd> <dd data-v-483af79d${_scopeId}><a href="/service/item/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>商品サービス</a></dd> <dd data-v-483af79d${_scopeId}><a href="/service/counter/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>サービスカウンター取り扱いサービス</a></dd> <dd data-v-483af79d${_scopeId}><a href="/service/recipe/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>遠鉄ストアおすすめレシピ</a></dd> <dt data-v-483af79d${_scopeId}>会社情報</dt> <dd data-v-483af79d${_scopeId}><a href="/company/profile/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>会社概要・沿革</a></dd> <dd data-v-483af79d${_scopeId}><a href="/company/message/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>トップメッセージ</a></dd> <dd data-v-483af79d${_scopeId}><a href="/company/green/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>環境への取り組み</a></dd> <dd data-v-483af79d${_scopeId}><a href="/company/social/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>社会活動への取り組み</a></dd> <dt data-v-483af79d${_scopeId}>採用情報</dt> <dd data-v-483af79d${_scopeId}><a href="/recruit/#recruit01" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>遠鉄ストアについて</a></dd> <dd data-v-483af79d${_scopeId}><a href="/recruit/#recruit02" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>遠鉄ストアのお仕事</a></dd> <dd data-v-483af79d${_scopeId}><a href="/recruit/#recruit03" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>オンライン応募</a></dd> <dt data-v-483af79d${_scopeId}>このサイトについて</dt> <dd data-v-483af79d${_scopeId}><a href="/sitemap/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>サイトマップ</a></dd> <dd data-v-483af79d${_scopeId}><a href="/privacy/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>個人情報保護方針</a></dd> <dd data-v-483af79d${_scopeId}><a href="/pdf/マルチステークホルダー方針_遠鉄ストア.pdf" target="_blank" data-v-483af79d${_scopeId}>マルチステークスホルダー方針</a></dd> <dd data-v-483af79d${_scopeId}><a href="/faq/" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>よくあるご質問</a></dd> <dt data-v-483af79d${_scopeId}>お問い合わせ</dt> <dd data-v-483af79d${_scopeId}><a href="https://etreq.entetsu.co.jp/store/contact/form.asp" target="_blank" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>お問い合わせ</a></dd> <dt class="wider" data-v-483af79d${_scopeId}><a href="https://shop.entstore.co.jp/f/ec" target="_blank" data-v-483af79d${_scopeId}><svg class="icon colorRed" data-v-483af79d${_scopeId}><use xlink:href="#icon_arrow01" data-v-483af79d${_scopeId}></use></svg>遠鉄ストアネット通販</a></dt></dl>`);
			else return [createVNode("dl", null, [
				createVNode("dt", null, [createVNode("a", { href: "/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("遠鉄ストアトップ")])]),
				createTextVNode(),
				createVNode("dt", null, "店舗情報"),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/shop/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("店舗一覧")])]),
				createTextVNode(),
				createVNode("dt", null, "チラシ情報"),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/chirashi/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("チラシ情報一覧")])]),
				createTextVNode(),
				createVNode("dt", null, "お知らせ"),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/info/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("店舗からのお知らせ")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/event/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("イベント・キャンペーン情報")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/news/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("ニュースリリース")])]),
				createTextVNode(),
				createVNode("dt", null, "サービス"),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/service/cooking/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("調理サービス")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/service/item/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("商品サービス")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/service/counter/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("サービスカウンター取り扱いサービス")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/service/recipe/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("遠鉄ストアおすすめレシピ")])]),
				createTextVNode(),
				createVNode("dt", null, "会社情報"),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/company/profile/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("会社概要・沿革")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/company/message/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("トップメッセージ")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/company/green/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("環境への取り組み")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/company/social/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("社会活動への取り組み")])]),
				createTextVNode(),
				createVNode("dt", null, "採用情報"),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/recruit/#recruit01" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("遠鉄ストアについて")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/recruit/#recruit02" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("遠鉄ストアのお仕事")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/recruit/#recruit03" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("オンライン応募")])]),
				createTextVNode(),
				createVNode("dt", null, "このサイトについて"),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/sitemap/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("サイトマップ")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/privacy/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("個人情報保護方針")])]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", {
					href: "/pdf/マルチステークホルダー方針_遠鉄ストア.pdf",
					target: "_blank"
				}, "マルチステークスホルダー方針")]),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", { href: "/faq/" }, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("よくあるご質問")])]),
				createTextVNode(),
				createVNode("dt", null, "お問い合わせ"),
				createTextVNode(),
				createVNode("dd", null, [createVNode("a", {
					href: "https://etreq.entetsu.co.jp/store/contact/form.asp",
					target: "_blank"
				}, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("お問い合わせ")])]),
				createTextVNode(),
				createVNode("dt", { class: "wider" }, [createVNode("a", {
					href: "https://shop.entstore.co.jp/f/ec",
					target: "_blank"
				}, [(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_arrow01" })])), createTextVNode("遠鉄ストアネット通販")])])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sitemap.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var sitemap_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-483af79d"]]);

export { sitemap_default as default };
//# sourceMappingURL=sitemap-CEFxqI04.mjs.map
