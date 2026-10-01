import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
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

//#region app/assets/images/company/green/food/no1.webp
var no1_default = "" + __buildAssetsURL("no1.6QuTZNx4.webp");
//#endregion
//#region app/assets/images/company/green/food/no2.webp
var no2_default = "" + __buildAssetsURL("no2.CSUuAJr_.webp");
//#endregion
//#region app/assets/images/company/green/food/no3.webp
var no3_default = "" + __buildAssetsURL("no3.BmHHQZ8J.webp");
//#endregion
//#region app/assets/images/company/green/food/no5.webp
var no5_default = "" + __buildAssetsURL("no5.BTVmvxPu.webp");
//#endregion
//#region app/assets/images/company/green/food/no6.webp
var no6_default = "" + __buildAssetsURL("no6.BcjCl0U3.webp");
//#endregion
//#region app/assets/images/company/green/food/no7.webp
var no7_default = "" + __buildAssetsURL("no7.CkNOghcm.webp");
//#endregion
//#region app/assets/images/company/green/food/no8.webp
var no8_default = "" + __buildAssetsURL("no8.BjaS-Pu1.webp");
//#endregion
//#region app/assets/images/company/green/food/no9.webp
var no9_default = "" + __buildAssetsURL("no9.D-gr5nSI.webp");
//#endregion
//#region app/pages/company/green/food/index.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		AppArticle: Article_default
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
				text: "環境への取り組み",
				disabled: false,
				href: "/company/green"
			},
			{
				text: "食品リサイクル",
				disabled: true
			}
		] };
	},
	setup() {
		useHead$1({ title: "食品リサイクル｜環境への取り組み｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-80d54333><main data-v-80d54333>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-80d54333>食品リサイクル</h2> <p class="lead d-none-mobile" data-v-80d54333>遠鉄ストアでは㈱青空農園と共同で、<br data-v-80d54333>「食品残渣リサイクルによる食品リサイクルループの実現」に取り組んでいます。</p> <p class="d-none-des mobile-box lead-mobile" data-v-80d54333>遠鉄ストアでは㈱青空農園と共同で、「食品残渣リサイクルによる食品リサイクルループの実現」に取り組んでいます。</p> <div class="food-wrapper" data-v-80d54333><img class="food-image--single"${ssrRenderAttr("src", no1_default)} alt="食品リサイクルループの概要イメージ図" data-v-80d54333> <p class="d-none-mobile" data-v-80d54333>
              食品リサイクルループの概要イメージ図
          </p></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "1.発酵分解装置による食品残渣の一次発酵物化",
		class: "wrap-outside"
	}, null, _parent));
	_push(` <div class="food-wrapper" data-v-80d54333><div class="food-image--double" data-v-80d54333><img${ssrRenderAttr("src", no2_default)} alt="リサイクル装置はセンターに隣接して設置" data-v-80d54333> <img${ssrRenderAttr("src", no3_default)} alt="食品残渣約600kg/日を投入装置内で回転しながら発酵・分解" data-v-80d54333></div> <p data-v-80d54333>
            ㈱遠鉄ストアプロセスセンターに隣接したリサイクル装置で食品残渣を発酵・分解
            <br data-v-80d54333>
            食品残渣(廃棄物) 年間約225ｔを削減（約85％の削減）
        </p></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "2.発酵分解装置による食品残渣の一次発酵物化",
		class: "wrap-outside"
	}, null, _parent));
	_push(` <div class="food-wrapper--horizontal" data-v-80d54333><img class="food_image"${ssrRenderAttr("src", no5_default)} alt="再生堆肥を使用した有機肥料で育成" data-v-80d54333> <div class="description-wrapper" data-v-80d54333><p data-v-80d54333>
                  浜松市内のリサイクルセンターで堆肥に再生され、㈱青空農園で再生堆肥を使用した循環農産物を生産
              </p> <ul class="red-box" data-v-80d54333><li data-v-80d54333>有機肥料の使用によってサイズや密度など、より優良な作物が育ちます</li> <li data-v-80d54333>再生堆肥を使用した有機肥料は通常の化学肥料より安価です</li></ul></div></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "3.循環農産物の販売",
		class: "wrap-outside"
	}, null, _parent));
	_push(` <div class="food-wrapper" data-v-80d54333><div class="food-image--double" data-v-80d54333><img${ssrRenderAttr("src", no6_default)} alt="遠鉄ストア富塚店店頭" data-v-80d54333> <img${ssrRenderAttr("src", no7_default)} alt="遠鉄ストア富塚店店頭" data-v-80d54333></div> <p data-v-80d54333>
            (株)遠鉄ストアの店頭で新鮮でおいしい地元産の野菜として、地域の食卓へ
        </p> <div class="food-chart" data-v-80d54333><p data-v-80d54333>
                浜松市内事業者の連携により、<br class="d-none-des" data-v-80d54333>全工程を浜松市内とする
                <br data-v-80d54333>
                安定的な食品リサイクルループを実現しています
            </p> <img${ssrRenderAttr("src", no8_default)} alt="地域社会への貢献" data-v-80d54333></div> <div class="group-photo" data-v-80d54333><img${ssrRenderAttr("src", no9_default)} alt="「浜松市3R推進優良事業者表彰制度」の優良事業者として認定を受けました。" data-v-80d54333> <p data-v-80d54333>
                2025年1月30日
                <br data-v-80d54333>
                「浜松市3R推進優良事業者表彰制度」
                <br data-v-80d54333>
                の優良事業者として認定を受けました。
            </p></div></div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/company/green"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/green/food/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var food_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-80d54333"]]);

export { food_default as default };
//# sourceMappingURL=food-CtreiOWD.mjs.map
