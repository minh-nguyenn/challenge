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

//#region app/pages/service/item.vue
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
					text: "商品サービス",
					disabled: true,
					href: "/service/item"
				}
			],
			itemsData: [
				{
					"title": "篭盛り",
					"url": "//assets/images/photo01 (44).webp",
					"request": [
						"葬儀<br>お彼岸<br>お盆",
						"お供え",
						"手土産"
					],
					"requestSP": [
						"葬儀、お彼岸、お盆",
						"お供え",
						"手土産"
					],
					"response": "手土産、お供え等のフルーツ詰合せの篭もりを 金額、商品等お客様のご要望に応じてお作り いたします。<br class='d-none-mobile'><br class='d-none-mobile'>お盆、葬式時の篭もりについても、承ります。 ",
					"eg": {}
				},
				{
					"title": "商品お取り寄せ",
					"url": "/assets/images/photo02 (37).webp",
					"request": ["○○がほしいけど<br>見当たらない", "10個ほしいけど<br>在庫がなさそう"],
					"response": "お店で扱っていない商品で購入希望がある場合、 可能な限りでお取り寄せいたします。",
					"eg": {}
				},
				{
					"title": "お祭り・イベント等の料理、お菓子袋詰の承り",
					"url": "/assets/images/photo03 (30).webp",
					"request": ["お祭りや<br>子ども会のイベント<br>参加賞", "謝恩会や<br>二次会の<br>景品"],
					"requestSP": ["お祭りや子ども会のイベント、参加賞", "謝恩会や<br>二次会の<br>景品"],
					"response": " ごお刺身、お寿司、惣菜商品等、お客様のご希望日時、 商品、金額等、ご相談ください。<br><br class='d-none-mobile'>ご会合、旅行、お祭り等のお菓子袋詰承ります。<br><br class='d-none-mobile'>お客様のご希望日時、金額等、ご相談ください。",
					"eg": {}
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "商品サービス｜サービス｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_ServiceCooking = ServiceCooking_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-7e387ee4><main data-v-7e387ee4>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-7e387ee4>商品サービス</h2> <p class="lead" data-v-7e387ee4>店内にない商品のお取り寄せや、篭盛り、<br data-v-7e387ee4>イベント時のお料理や袋詰め菓子など承ります。</p> <!--[-->`);
	ssrRenderList($data.itemsData, (cookingItem, index) => {
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
		href: "/service"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/item.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var item_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7e387ee4"]]);

export { item_default as default };
//# sourceMappingURL=item-Cwb4H1hQ.mjs.map
