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

//#region app/assets/images/img_main.webp
var img_main_default = "" + __buildAssetsURL("img_main.DIEM8254.webp");
//#endregion
//#region app/assets/images/img_box.webp
var img_box_default = "" + __buildAssetsURL("img_box.B6UP_2Iw.webp");
//#endregion
//#region app/pages/pickup/mizu.vue
var _sfc_main = {
	name: "Mizu",
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
			text: "遠鉄ストアのおいしい水",
			disabled: true,
			href: "/pickup/mizu"
		}] };
	},
	setup() {
		useHead$1({ title: "遠鉄ストアのおいしい水｜ピックアップ｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-9c5b20b8>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-9c5b20b8><h2 class="d-none-des" data-v-9c5b20b8>遠鉄ストアのおいしい水</h2> <img${ssrRenderAttr("src", img_main_default)} class="fullImage-sm" width="980" height="400" alt="遠鉄ストアのおいしい水 えんてつカード会員様限定で販売中" data-v-9c5b20b8> <article class="singleColumn mobile-box" data-v-9c5b20b8><article class="tColumn" data-v-9c5b20b8><section class="wcontentInner subtxt" data-v-9c5b20b8><h2 class="water" data-v-9c5b20b8>不純物を除去した純水のほか、ミネラルを<br data-v-9c5b20b8>ブレンドした軟水・硬水を販売しております。</h2> <table class="waterlist d-none-mobile" data-v-9c5b20b8><tbody data-v-9c5b20b8><tr data-v-9c5b20b8><th class="water01" data-v-9c5b20b8>純水</th> <th class="water01" data-v-9c5b20b8>フィルターで不純物を除去したお水</th> <td data-v-9c5b20b8>2L　無料</td> <td data-v-9c5b20b8>5L　無料</td></tr> <tr data-v-9c5b20b8><th class="water02" data-v-9c5b20b8>軟水</th> <th class="water02" data-v-9c5b20b8>硬度100未満</th> <td data-v-9c5b20b8>2L　50円</td> <td data-v-9c5b20b8>5L　120円</td></tr> <tr data-v-9c5b20b8><th class="water03" data-v-9c5b20b8>中硬水</th> <th class="water03" data-v-9c5b20b8>硬度100～300</th> <td data-v-9c5b20b8>2L　100円</td> <td data-v-9c5b20b8>5L　170円</td></tr> <tr data-v-9c5b20b8><th class="water04" data-v-9c5b20b8>硬水</th> <th class="water04" data-v-9c5b20b8>硬度300以上</th> <td data-v-9c5b20b8>2L　150円</td> <td data-v-9c5b20b8>5L　250円</td></tr> <tr data-v-9c5b20b8><th class="water05" data-v-9c5b20b8>プレミアム硬水</th> <th class="water05" data-v-9c5b20b8>硬度600以上</th> <td data-v-9c5b20b8>2L　250円</td> <td data-v-9c5b20b8>5L　450円</td></tr></tbody></table> <div class="d-none-des" data-v-9c5b20b8><table class="tbrWater" data-v-9c5b20b8><thead data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color01" data-v-9c5b20b8>純水</th></tr></thead> <tbody data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color01" data-v-9c5b20b8>フィルターで不純物を除去したお水</th></tr> <tr data-v-9c5b20b8><td data-v-9c5b20b8>2L　無料</td> <td data-v-9c5b20b8>5L　無料</td></tr></tbody></table> <table class="tbrWater" data-v-9c5b20b8><thead data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color02" data-v-9c5b20b8>軟水</th></tr></thead> <tbody data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color02" data-v-9c5b20b8>硬度100未満</th></tr> <tr data-v-9c5b20b8><td data-v-9c5b20b8>2L　50円</td> <td data-v-9c5b20b8>5L　120円</td></tr></tbody></table> <table class="tbrWater" data-v-9c5b20b8><thead data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color03" data-v-9c5b20b8>中硬水</th></tr></thead> <tbody data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color03" data-v-9c5b20b8>硬度100～300</th></tr> <tr data-v-9c5b20b8><td data-v-9c5b20b8>2L　100円</td> <td data-v-9c5b20b8>5L　170円</td></tr></tbody></table> <table class="tbrWater" data-v-9c5b20b8><thead data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color04" data-v-9c5b20b8>硬水</th></tr></thead> <tbody data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color04" data-v-9c5b20b8>硬度300以上</th></tr> <tr data-v-9c5b20b8><td data-v-9c5b20b8>2L　150円</td> <td data-v-9c5b20b8>5L　250円</td></tr></tbody></table> <table class="tbrWater" data-v-9c5b20b8><thead data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color05" data-v-9c5b20b8>プレミアム硬水</th></tr></thead> <tbody data-v-9c5b20b8><tr data-v-9c5b20b8><th colspan="2" class="color05" data-v-9c5b20b8>硬度600以上</th></tr> <tr data-v-9c5b20b8><td data-v-9c5b20b8>2L　250円</td> <td data-v-9c5b20b8>5L　450円</td></tr></tbody></table></div> <div class="d-none-mobile" data-v-9c5b20b8><h2 class="water" data-v-9c5b20b8>ご利用にはえんてつカードおよび<br data-v-9c5b20b8>専用ボトルが必要です。</h2> <h2 class="water" data-v-9c5b20b8>給水ボトルはサービスカウンターで販売中！<br data-v-9c5b20b8>
                2L用 <span data-v-9c5b20b8>本体価格</span> 230円（税込価格 253円）<br data-v-9c5b20b8>
                5L用 <span data-v-9c5b20b8>本体価格</span> 700円（税込価格 770円）</h2> <p data-v-9c5b20b8>お持ちでないお客様はサービスカウンターにてご入会いただけます。</p> <p data-v-9c5b20b8>※他の容器でのご利用はできません。<br data-v-9c5b20b8>
                ※ご注水後はお早めにご利用ください、（常温保存で3日・冷蔵保存で7日程度が目安です）</p></div></section> <section class="contentInner subimgright d-none-mobile" data-v-9c5b20b8><img${ssrRenderAttr("src", img_box_default)} width="223" height="472" alt="" data-v-9c5b20b8></section></article></article> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "ご利用方法",
		class: "wrap-outside d-none-des"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="lead colorBlue" data-v-9c5b20b8${_scopeId}>ご利用にはえんてつカードおよび専用ボトルが必要です。</p> <div class="mobile-box" data-v-9c5b20b8${_scopeId}><img${ssrRenderAttr("src", img_box_default)} width="223" height="472" alt="" data-v-9c5b20b8${_scopeId}> <p class="normalTxt mb-2" data-v-9c5b20b8${_scopeId}>お持ちでないお客様はサービスカウンターにてご入会いただけます。</p> <p class="smallTxt" data-v-9c5b20b8${_scopeId}>※他の容器でのご利用はできません。</p> <p class="smallTxt" data-v-9c5b20b8${_scopeId}>※ご注水後はお早めにご利用ください。（常温保存で3日・冷蔵保存で7日程度が目安です）</p></div>`);
			else return [
				createVNode("p", { class: "lead colorBlue" }, "ご利用にはえんてつカードおよび専用ボトルが必要です。"),
				createTextVNode(),
				createVNode("div", { class: "mobile-box" }, [
					createVNode("img", {
						src: img_box_default,
						width: "223",
						height: "472",
						alt: ""
					}),
					createTextVNode(),
					createVNode("p", { class: "normalTxt mb-2" }, "お持ちでないお客様はサービスカウンターにてご入会いただけます。"),
					createTextVNode(),
					createVNode("p", { class: "smallTxt" }, "※他の容器でのご利用はできません。"),
					createTextVNode(),
					createVNode("p", { class: "smallTxt" }, "※ご注水後はお早めにご利用ください。（常温保存で3日・冷蔵保存で7日程度が目安です）")
				])
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "販売設置店",
		class: "wrap-outside wrap-outside-custom"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="lead d-none-mobile" data-v-9c5b20b8${_scopeId}>全店でお取り扱い中です。</p> <div class="mobile-box d-none-des mt-4" data-v-9c5b20b8${_scopeId}><p class="normalTxt" data-v-9c5b20b8${_scopeId}>全店で取り扱い中です。<br data-v-9c5b20b8${_scopeId}>詳しくは店舗一覧ページをご確認ください。</p> <p class="colorBlue" data-v-9c5b20b8${_scopeId}>
            給水ボトルはサービスカウンターで販売中！<br data-v-9c5b20b8${_scopeId}>
            2L用 本体価格 230円（税込価格253円）<br data-v-9c5b20b8${_scopeId}>
            5L用 本体価格 700円（税込価格770円）</p> <p class="moreLink" data-v-9c5b20b8${_scopeId}><a href="/shop/" data-v-9c5b20b8${_scopeId}><span data-v-9c5b20b8${_scopeId}>店舗一覧を見る</span></a></p></div>`);
			else return [
				createVNode("p", { class: "lead d-none-mobile" }, "全店でお取り扱い中です。"),
				createTextVNode(),
				createVNode("div", { class: "mobile-box d-none-des mt-4" }, [
					createVNode("p", { class: "normalTxt" }, [
						createTextVNode("全店で取り扱い中です。"),
						createVNode("br"),
						createTextVNode("詳しくは店舗一覧ページをご確認ください。")
					]),
					createTextVNode(),
					createVNode("p", { class: "colorBlue" }, [
						createTextVNode("\n            給水ボトルはサービスカウンターで販売中！"),
						createVNode("br"),
						createTextVNode("\n            2L用 本体価格 230円（税込価格253円）"),
						createVNode("br"),
						createTextVNode("\n            5L用 本体価格 700円（税込価格770円）")
					]),
					createTextVNode(),
					createVNode("p", { class: "moreLink" }, [createVNode("a", { href: "/shop/" }, [createVNode("span", null, "店舗一覧を見る")])])
				])
			];
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pickup/mizu.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var mizu_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9c5b20b8"]]);

export { mizu_default as default };
//# sourceMappingURL=mizu-qxkN59Mw.mjs.map
