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

//#region app/assets/images/photo01 (5).webp
var photo01__5__default = "" + __buildAssetsURL("photo01 (5).md2A6QNG.webp");
//#endregion
//#region app/assets/images/position.webp
var position_default = "" + __buildAssetsURL("position.C3eTydhg.webp");
//#endregion
//#region app/pages/company/message.vue
var _sfc_main = {
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
				text: "会社情報",
				disabled: false,
				href: "/company"
			},
			{
				text: " トップメッセージ",
				disabled: true,
				href: "/company/message"
			}
		] };
	},
	setup() {
		useHead$1({ title: "トップメッセージ｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-268fe014><main data-v-268fe014>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-268fe014>トップメッセージ</h2> <article class="article-header mb-sm-0" data-v-268fe014><section class="contentInner" data-v-268fe014><div class="pb-md-8" data-v-268fe014><img${ssrRenderAttr("src", photo01__5__default)} data-v-268fe014></div></section> <section class="section-content" data-v-268fe014><p class="fontSerif d-none-mobile" data-v-268fe014>地域に愛されお客様も社員も楽しい<br data-v-268fe014>高質ストアを目指して</p> <p class="name d-none-des" data-v-268fe014><span data-v-268fe014>代表取締役社長</span>宮田  洋</p></section></article> <p class="lead d-none-des" data-v-268fe014>地域に愛されお客様も社員も楽しい<br data-v-268fe014>高質ストアを目指して</p> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "創立以来変わらぬ「お客様にとっての、ありたい店」",
		class: "article-wrap"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p data-v-268fe014${_scopeId}>
          食生活を中心とした日常生活に密着したサービスだけに、いつも心の通う「正直な商売」に徹してまいりました。お蔭をもちまして、地域の皆様とともに歩んで50年余。県西部の業界ナンバーワンの店として、新たな重責を感じております。
          <br data-v-268fe014${_scopeId}><br data-v-268fe014${_scopeId}>
          しかし、お客様の目や、時代のトレンドや、生活様式の変化などにより、求められるものも刻々と変わりつつあります。「商品」、「販売」、「鮮度」、「接客」、「人財」という5つの質をさらに高めていくことを常に心がけ、お客様から「こんなサービスが欲しかった！」と言われるような提案や感動を提供していくことが遠鉄ストアの基本姿勢です。
        </p>`);
			else return [createVNode("p", null, [
				createTextVNode("\n          食生活を中心とした日常生活に密着したサービスだけに、いつも心の通う「正直な商売」に徹してまいりました。お蔭をもちまして、地域の皆様とともに歩んで50年余。県西部の業界ナンバーワンの店として、新たな重責を感じております。\n          "),
				createVNode("br"),
				createVNode("br"),
				createTextVNode("\n          しかし、お客様の目や、時代のトレンドや、生活様式の変化などにより、求められるものも刻々と変わりつつあります。「商品」、「販売」、「鮮度」、「接客」、「人財」という5つの質をさらに高めていくことを常に心がけ、お客様から「こんなサービスが欲しかった！」と言われるような提案や感動を提供していくことが遠鉄ストアの基本姿勢です。\n        ")
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "あらゆる面で温かみを感じられる店づくりを目指して。",
		class: "article-wrap"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p data-v-268fe014${_scopeId}>日々効率化や自動化が進み、人と会わなくてもモノが買える世の中になっています。そんな中、遠鉄ストアでは安全・安心で新鮮な美味しい食品と楽しいお買物を笑顔で提供し温かみを感じる店づくりを心がけています。<br data-v-268fe014${_scopeId}><br data-v-268fe014${_scopeId}>そして全従業員が「思いやり」の心を持って働いています。<br data-v-268fe014${_scopeId}>それはお客様への思いやりであったり、従業員同士の思いやりであったり、家族に対する思いやりです。遠鉄ストアに関わる全ての人に幸せになってもらいたい。このような気持ちがきめ細かいサービスにつながっています。</p>`);
			else return [createVNode("p", null, [
				createTextVNode("日々効率化や自動化が進み、人と会わなくてもモノが買える世の中になっています。そんな中、遠鉄ストアでは安全・安心で新鮮な美味しい食品と楽しいお買物を笑顔で提供し温かみを感じる店づくりを心がけています。"),
				createVNode("br"),
				createVNode("br"),
				createTextVNode("そして全従業員が「思いやり」の心を持って働いています。"),
				createVNode("br"),
				createTextVNode("それはお客様への思いやりであったり、従業員同士の思いやりであったり、家族に対する思いやりです。遠鉄ストアに関わる全ての人に幸せになってもらいたい。このような気持ちがきめ細かいサービスにつながっています。")
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "地域の皆様への恩返し。まずは社会貢献から。",
		class: "article-wrap"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p data-v-268fe014${_scopeId}>遠鉄ストアは地域の皆様からの長年の応援で成り立っています。応援してくださるお客様へ何かできることはないだろうか？と考え、始めたのが社会活動です。児童画コンクールや食育講座、スポーツ大会の開催など様々な社会活動を通じて少しでも恩返しができるよう努めています。<br data-v-268fe014${_scopeId}><br data-v-268fe014${_scopeId}>今後も地域の皆様の安全と安心を支える企業の1つとして今後も地域活性化に取り組み、子どもたちの未来へつながっていくような活動を積極的に行っていきます。</p>`);
			else return [createVNode("p", null, [
				createTextVNode("遠鉄ストアは地域の皆様からの長年の応援で成り立っています。応援してくださるお客様へ何かできることはないだろうか？と考え、始めたのが社会活動です。児童画コンクールや食育講座、スポーツ大会の開催など様々な社会活動を通じて少しでも恩返しができるよう努めています。"),
				createVNode("br"),
				createVNode("br"),
				createTextVNode("今後も地域の皆様の安全と安心を支える企業の1つとして今後も地域活性化に取り組み、子どもたちの未来へつながっていくような活動を積極的に行っていきます。")
			])];
		}),
		_: 1
	}, _parent));
	_push(` <p class="name d-none-mobile" data-v-268fe014><img${ssrRenderAttr("src", position_default)} width="auto" height="50" alt="代表取締役 宮田洋" data-v-268fe014></p> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "前のページへ戻る",
		class: "mt-md-16 d-none-mobile",
		"is-back": "",
		href: "/company"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/message.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var message_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-268fe014"]]);

export { message_default as default };
//# sourceMappingURL=message-BPXmmGwX.mjs.map
