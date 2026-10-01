import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/components/App/ItemsCollected.vue
var _sfc_main$1 = {
	name: "AppItemsCollected",
	props: { recycle: {
		type: Object,
		default: () => ({
			"content": "",
			"imgAlt": "",
			"url": "",
			"title": ""
		})
	} }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<section${ssrRenderAttrs(mergeProps({ class: "contentInner under" }, _attrs))} data-v-c796a323><img${ssrRenderAttr("src", $props.recycle.url)} width="304" height="203"${ssrRenderAttr("alt", $props.recycle.imgAlt)} data-v-c796a323> <div class="description" data-v-c796a323><p data-v-c796a323><strong data-v-c796a323>${ssrInterpolate($props.recycle.title)}</strong></p> <div class="content" data-v-c796a323>${$props.recycle.content ?? ""}</div></div></section>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ItemsCollected.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ItemsCollected_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c796a323"]]), { __name: "AppItemsCollected" });
//#endregion
//#region app/pages/company/green/recycle/index.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		AppArticle: Article_default,
		AppItemsCollected: ItemsCollected_default
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
					text: "環境への取り組み",
					disabled: false,
					href: "/company/green"
				},
				{
					text: "資源回収",
					disabled: true,
					href: "/company/green/recycle"
				}
			],
			recycleData: [
				{
					"content": "<span class='d-none-mobile'>（1）</span> <span class='d-none-des'>1. </span>水でよくすすいでください<br><span class='d-none-mobile'>（2）</span> <span class='d-none-des'>2. </span>切り開いてください<br><span class='d-none-mobile'>（3）</span> <span class='d-none-des'>3. </span>よく乾かしてお持ちください",
					"imgAlt": "牛乳パック",
					"url": "/assets/images/photo01 (2).webp",
					"title": "牛乳パック"
				},
				{
					"content": "<span class='d-none-mobile'>（1）</span> <span class='d-none-des'>1. </span>水でよくすすぎ、汚れを落としてください<br><span class='d-none-mobile'>（2）</span> <span class='d-none-des'>2. </span>よく乾かしてお持ちください<br><span>※白・色つきは問いません。</span>",
					"imgAlt": "資源回収",
					"url": "/assets/images/photo02 (41).webp",
					"title": "発砲スチロールトレー"
				},
				{
					"content": "<span class='d-none-mobile'>（1）</span> <span class='d-none-des'>1. </span>水でよくすすいでください<br><span class='d-none-mobile'>（2）</span> <span class='d-none-des'>2. </span>よく乾かしてお持ちください<br><span>※シールが張ってあるものは、そこだけ切り取ってください。</span>",
					"imgAlt": "資源回収",
					"url": "/assets/images/photo03 (34).webp",
					"title": "透明トレー"
				},
				{
					"content": "<span class='d-none-mobile'>（1）</span> <span class='d-none-des'>1. </span>フタをはずしてください<br><span class='d-none-mobile'>（2）</span> <span class='d-none-des'>2. </span>水でよくすすいでください<br><span class='d-none-mobile'>（3）</span> <span class='d-none-des'>3. </span>つぶしてお持ちください",
					"imgAlt": "資源回収",
					"url": "/assets/images/photo04 (5).webp",
					"title": "ペットボトル"
				},
				{
					"content": "そのままお持ちください。",
					"imgAlt": "資源回収",
					"url": "/assets/images/photo05 (3).webp",
					"title": "ペットボトルキャップ"
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "資源回収｜環境への取り組み｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$2;
	const _component_AppArticle = Article_default;
	const _component_AppItemsCollected = ItemsCollected_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-f394a484><main data-v-f394a484>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-f394a484>資源回収</h2> <p class="lead d-none-mobile" data-v-f394a484>全店舗（スーパーマーケットみっかび、マツモトキヨシさぎの宮駅前店除く）<br data-v-f394a484>に常設している資源回収ボックスをぜひご活用ください。</p> <p class="d-none-des mobile-box lead-mobile" data-v-f394a484>全店舗（スーパーマーケットみっかび、マツモトキヨシさぎの宮駅前店除く）に常設している資源回収ボックスをぜひご活用ください。</p> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "資源回収ボックスの常設",
		class: "wrap-outside"
	}, null, _parent));
	_push(` <div class="mobile-box" data-v-f394a484><h4 data-v-f394a484>場所・時間</h4> <p class="article-content" data-v-f394a484>遠鉄ストア全店舗の出入り口に、下記項目の資源回収ボックスを設置しています。<br data-v-f394a484>営業時間内でしたら、いつでもお持込可能です。</p> <h4 data-v-f394a484>回収している品目</h4> <div class="items" data-v-f394a484><!--[-->`);
	ssrRenderList($data.recycleData, (recycle, index) => {
		_push(ssrRenderComponent(_component_AppItemsCollected, {
			key: index,
			recycle
		}, null, _parent));
	});
	_push(`<!--]--></div></div> `);
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/green/recycle/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var recycle_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f394a484"]]);

export { recycle_default as default };
//# sourceMappingURL=recycle-D7zHCTJM.mjs.map
