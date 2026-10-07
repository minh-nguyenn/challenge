import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { R as RecipeBox_default } from './RecipeBox-BsCg4WAQ.mjs';
import { b as btn_cooking_default, V as VxSheet_default, a as VxSkeletonLoader_default } from './btn_cooking-CD4hhI2d.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
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
import './utils-CzPagAGc.mjs';
import './img_noimg-BvILzYDp.mjs';

//#region app/pages/service/recipe/preview.vue
var _sfc_main = {
	components: { RecipeBox: RecipeBox_default },
	async setup() {
		useHead$1({ title: "遠鉄ストアおすすめレシピ｜サービス｜遠鉄ストア - 静岡県西部のスーパーマーケット（浜松市,磐田市,袋井市,湖西市,掛川市）" });
		const { query, error, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const { id } = query;
			const { draftKey } = query;
			try {
				const response = await $microcms.get({
					endpoint: "store-recipes",
					contentId: id,
					queries: draftKey ? { draftKey } : {}
				});
				const data = [];
				if (response) data.push(response);
				return { recipeList: data };
			} catch (e) {
				return error({
					statusCode: 404,
					message: "Chirashi not found"
				});
			}
		}, "$cF-XNOE7dP");
		return {
			recipeList: [],
			...__d.value || {}
		};
	},
	data() {
		return {
			recipeCategories: [
				"すべて",
				"野菜レシピ",
				"肉レシピ",
				"魚レシピ",
				"その他"
			],
			categorySelected: "すべて",
			textFilter: "",
			currentPage: 1,
			limitPerPage: 16,
			isLoading: false,
			isEndOfList: false
		};
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_RecipeBox = RecipeBox_default;
	const _component_VxSheet = VxSheet_default;
	const _component_VxSkeletonLoader = VxSkeletonLoader_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-defc11f5><main data-v-defc11f5>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: _ctx.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-defc11f5><em data-v-defc11f5>かんたん 美味しく 楽しく♪</em> <br data-v-defc11f5>遠鉄ストアおすすめレシピ
            </h2> <div class="btn_box" data-v-defc11f5><a href="https://cgc-kitchen365.jp/" target="_blank" data-v-defc11f5><img${ssrRenderAttr("src", btn_cooking_default)} alt="Kitchen365 by ふれ愛交差点" data-v-defc11f5></a></div> <div class="recipe-list" data-v-defc11f5><!--[-->`);
	ssrRenderList($setup.recipeList, (recipe) => {
		_push(ssrRenderComponent(_component_RecipeBox, {
			key: recipe.id,
			"recipe-item": recipe
		}, null, _parent));
	});
	_push(`<!--]--> `);
	if ($data.isLoading && !$data.isEndOfList) _push(ssrRenderComponent(_component_VxSheet, { class: "pa-3 v-sheet-custom" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(ssrRenderComponent(_component_VxSkeletonLoader, {
				class: "mx-auto",
				"max-width": "300",
				type: "card"
			}, null, _parent, _scopeId));
			else return [createVNode(_component_VxSkeletonLoader, {
				class: "mx-auto",
				"max-width": "300",
				type: "card"
			})];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`</div></main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/recipe/preview.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var preview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-defc11f5"]]);

export { preview_default as default };
//# sourceMappingURL=preview-CI8WUbvz.mjs.map
