import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { mergeProps, useSSRContext } from 'vue';
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

//#region app/assets/images/img_main01.webp
var img_main01_default = "" + __buildAssetsURL("img_main01.B60XhjZ6.webp");
//#endregion
//#region app/assets/images/img_main03.webp?v=20200424
var img_main03_default = "" + __buildAssetsURL("img_main03.JzNCArnL.webp?v=20200424");
//#endregion
//#region app/assets/images/img_sub01.webp
var img_sub01_default = "" + __buildAssetsURL("img_sub01.DCL4Acbn.webp");
//#endregion
//#region app/assets/images/img_sub03.webp
var img_sub03_default = "" + __buildAssetsURL("img_sub03.uT8CHonY.webp");
//#endregion
//#region app/pages/service/line.vue
var _sfc_main = {
	components: { AppButtonNavigation: ButtonNavigation_default },
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
				text: "LINE公式アカウント友だち募集中！",
				disabled: true,
				href: "/service/line"
			}
		] };
	},
	setup() {
		useHead$1({ title: "LINE公式アカウント友だち募集中！｜サービス｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-ef50d43c><main data-v-ef50d43c>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <section class="line" data-v-ef50d43c><article class="singleColumn" data-v-ef50d43c><h1 data-v-ef50d43c><img class="fullImage"${ssrRenderAttr("src", img_main01_default)} alt="LINE公式アカウント友だち募集中！" data-v-ef50d43c></h1> <p class="mt30" data-v-ef50d43c><img class="fullImage"${ssrRenderAttr("src", img_main03_default)} alt="毎日使うLINEだから、とても便利！" data-v-ef50d43c></p></article> <article class="singleColumn" data-v-ef50d43c><h2 class="sttl" data-v-ef50d43c>お友だち登録方法➊<br class="d-none-des" data-v-ef50d43c><strong data-v-ef50d43c>QRコードで追加</strong></h2> <div class="mobile-box" data-v-ef50d43c><p data-v-ef50d43c><em data-v-ef50d43c>➊</em> LINEの「友達追加」メニューで <br class="d-none-des" data-v-ef50d43c>　<em data-v-ef50d43c>➋</em>「QRコード」を選択し<br class="d-none-des" data-v-ef50d43c>　<em data-v-ef50d43c>➌</em> こちらのQRコードを読み取る♪</p> <p data-v-ef50d43c><img class="fullImage"${ssrRenderAttr("src", img_sub01_default)} alt="QRコードで追加" data-v-ef50d43c></p></div></article> <article class="singleColumn" data-v-ef50d43c><h2 class="sttl" data-v-ef50d43c>お友だち登録方法➋<br class="d-none-des" data-v-ef50d43c><strong data-v-ef50d43c>友だち追加ボタンで追加</strong></h2> <div class="mobile-box" data-v-ef50d43c><p data-v-ef50d43c>スマホの方は下のボタンをタップして友だち追加♪</p> <p class="line-img" data-v-ef50d43c><a href="https://line.me/R/ti/p/%40loi1398u" target="_blank" data-v-ef50d43c><img alt="友だち追加数" src="http://biz.line.naver.jp/line_business/img/btn/addfriends_ja.png" data-v-ef50d43c></a></p></div></article> <article class="singleColumn" data-v-ef50d43c><h2 class="sttl" data-v-ef50d43c>お友だち登録方法➌<br class="d-none-des" data-v-ef50d43c><strong data-v-ef50d43c>公式アカウント検索</strong></h2> <div class="mobile-box" data-v-ef50d43c><p data-v-ef50d43c><em data-v-ef50d43c>➊</em> LINEの「…（その他）」→「公式アカウント」で　<br class="d-none-des" data-v-ef50d43c><em data-v-ef50d43c>➋</em>「名前またはIDで検索」　<br class="d-none-des" data-v-ef50d43c><em data-v-ef50d43c>➌</em> 追加できます♪<br data-v-ef50d43c> <em data-v-ef50d43c>※携帯電話によって検索できない場合もございます</em></p> <p data-v-ef50d43c><img class="fullImage"${ssrRenderAttr("src", img_sub03_default)} alt="公式アカウント検索" data-v-ef50d43c></p></div></article> <article class="singleColumn inquiry" data-v-ef50d43c><h3 data-v-ef50d43c>お問合せ</h3> <p data-v-ef50d43c>遠鉄ストア本社 営業企画課 <br class="d-none-des" data-v-ef50d43c>　電話：053-445-1000（代表）</p></article></section> `);
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/line.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var line_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ef50d43c"]]);

export { line_default as default };
//# sourceMappingURL=line-DyLLa0my.mjs.map
