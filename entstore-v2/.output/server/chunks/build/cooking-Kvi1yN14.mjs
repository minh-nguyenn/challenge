import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { S as ServiceCooking_default } from './ServiceCooking-oibKnszn.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
import './Article-LWI8gJDh.mjs';

//#region app/pages/service/cooking.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		ServiceCooking: ServiceCooking_default
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
					text: "調理サービス",
					disabled: true,
					href: "/service/cooking"
				}
			],
			servicesCookingData: [
				{
					"title": "鮮魚調理",
					"url": "/assets/images/photo01 (43).webp",
					"request": [
						"このお魚<br>切り身でほしいな",
						"これとそれを足した<br>お刺身がほしい",
						"ハラワタを出して<br>おいてほしいわ"
					],
					"response": "調理のご要望にお答えいたします。<br class='d-none-mobile'>店内商品は無料、お持込商品は有料です。",
					"eg": {
						"title": "調理例",
						"content": "頭取り、お腹出し、開き、二枚おろし、三枚おろし、刺身用皮引き、お造り<br><span>※お造りについては、魚の大きさ・盛り付け皿、<br class='d-none-mobile'>つま等の関係で店内商品でも有料となる場合がございます。</span>"
					}
				},
				{
					"title": "精肉オーダーカット",
					"url": "/assets/images/photo02 (36).webp",
					"request": [
						"鶏肉を300g<br>ほしいけど<br>パックがない",
						"牛肉をステーキ用に<br>3cmの厚さで<br>切ってほしい",
						"○○を作りたいけど<br>おすすめのお肉は？"
					],
					"response": " ご要望のサイズ・厚さ・枚数・重量の 「オーダーカット」いたします。<br class='d-none-mobile'><br>「オーダーカット」の他、料理メニューに応じた おすすめ部位や量目などをご紹介いたします。 ",
					"eg": {}
				},
				{
					"title": "生鮮商品・店内製造商品の小分け",
					"url": "/assets/images/photo03 (29).webp",
					"request": ["食べきれないから<br>もうちょっと<br>少なめがいい", "足りないから<br>もう少し<br>増えないかな"],
					"response": " ご要望の容量、個数にお応えいたします。<br>小分け以外に増量についてもお引き受けいたします。 ",
					"eg": {}
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "調理サービス｜サービス｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_ServiceCooking = ServiceCooking_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-7bb60aba><main data-v-7bb60aba>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-7bb60aba>調理サービス</h2> <p class="lead" data-v-7bb60aba>店内にある魚・肉のカットや、青果の小分けなど<br data-v-7bb60aba>お客様のご要望に合わせてカスタマイズいたします。</p> <p class="textAC" data-v-7bb60aba>お客様のご要望にお応えいたします。お気軽に従業員までお申し出下さい。</p> <!--[-->`);
	ssrRenderList($data.servicesCookingData, (cookingItem, index) => {
		_push(ssrRenderComponent(_component_ServiceCooking, {
			key: index,
			dish: cookingItem
		}, null, _parent));
	});
	_push(`<!--]--> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile btn-back",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/cooking.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var cooking_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7bb60aba"]]);

export { cooking_default as default };
//# sourceMappingURL=cooking-Kvi1yN14.mjs.map
