import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { V as VxSlick_default } from './VxSlick-EUvIyKhd.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
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

//#region app/assets/images/sport01.webp
var sport01_default = "" + __buildAssetsURL("sport01.g9aLtf0Z.webp");
//#endregion
//#region app/assets/images/sport02.webp
var sport02_default = "" + __buildAssetsURL("sport02.DXIBgPqH.webp");
//#endregion
//#region app/assets/images/sport03.webp
var sport03_default = "" + __buildAssetsURL("sport03.BIAlt_Pm.webp");
//#endregion
//#region app/pages/company/social/sports.vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default,
		Slick: VxSlick_default
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
					text: "会社情報",
					disabled: false,
					href: "/company"
				},
				{
					text: "社会活動への取り組み",
					disabled: false,
					href: "/company/social"
				},
				{
					text: "スポーツ・体育へのサポート",
					disabled: true,
					href: "/company/social/sports"
				}
			],
			slickOptions: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2e3,
				dots: true
			}
		};
	},
	setup() {
		useHead$1({ title: "スポーツ・体育へのサポート｜社会活動への取り組み｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_ClientOnly = ClientOnly;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-9dc92a41><main data-v-9dc92a41>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-9dc92a41>スポーツ・体育へのサポート</h2> <p class="textAC mb-md-0 mobile-box" data-v-9dc92a41>参加者募集等については、当サイトトップページまたは店頭にあるチラシをご覧ください。</p> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "実施レポート",
		class: "wrap-outside d-none-mobile"
	}, null, _parent));
	_push(` <div class="group-content d-none-mobile" data-v-9dc92a41><h4 data-v-9dc92a41>第38回遠鉄ストア・S&amp;B杯 ちびっ子健康マラソン大会</h4> <p class="article-content" data-v-9dc92a41>
          実施日：2025年3月8日（土）
          <br data-v-9dc92a41>場所：浜松市四ツ池公園市営陸上競技場
          <br data-v-9dc92a41>コメント：当日は天候にも恵まれ、県西部、豊川市、豊橋市の小学生669名が参加し、学年別に1.5キロ、2キロ、3キロのコースを元気いっぱい駆け抜けました。
        </p> <div class="content-img" data-v-9dc92a41><img${ssrRenderAttr("src", sport01_default)} data-v-9dc92a41> <img${ssrRenderAttr("src", sport02_default)} data-v-9dc92a41> <img${ssrRenderAttr("src", sport03_default)} data-v-9dc92a41></div></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "第38回遠鉄ストア・S&B杯　ちびっ子健康マラソン大会",
		class: "wrap-outside wrap-outside-sports-custom d-none-des"
	}, null, _parent));
	_push(` <div class="group-content mobile-box d-none-des" data-v-9dc92a41><div class="contentInner" data-v-9dc92a41><p class="normalTxt mbsp15" data-v-9dc92a41>当日は天候にも恵まれ、県西部、豊川市、豊橋市の小学生669名が参加し、学年別に1.5キロ、2キロ、3キロのコースを元気いっぱい駆け抜けました。</p> <table class="table-vert" data-v-9dc92a41><tbody data-v-9dc92a41><tr data-v-9dc92a41><th data-v-9dc92a41>実施日</th> <td data-v-9dc92a41>2025年3月8日（土）</td></tr> <tr data-v-9dc92a41><th data-v-9dc92a41>場所</th> <td data-v-9dc92a41>浜松市四ツ池公園市営陸上競技場</td></tr></tbody></table> `);
	_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
	_push(`</div></div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/company/social"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/social/sports.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var sports_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9dc92a41"]]);

export { sports_default as default };
//# sourceMappingURL=sports-B4kYlq1K.mjs.map
