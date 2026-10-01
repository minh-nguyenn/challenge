import { _ as _plugin_vue_export_helper_default, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { V as VxTextField_default } from './VxTextField-BY_Yjj-o.mjs';
import { R as RecipeBox_default } from './RecipeBox-BLY14-3v.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
import './img_noimg-BvILzYDp.mjs';

//#region app/components/vx/VxSelect.vue
var _sfc_main$1 = {
	__name: "VxSelect",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		items: {
			type: Array,
			default: () => []
		},
		dense: {
			type: Boolean,
			default: false
		},
		outlined: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue", "change"],
	setup(__props, { emit: __emit }) {
		function label(it) {
			return it && typeof it === "object" ? it.text ?? it.value : it;
		}
		function value(it) {
			return it && typeof it === "object" ? it.value ?? it.text : it;
		}
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["v-input theme--light v-text-field v-text-field--is-booted v-select", {
				"v-input--dense": __props.dense,
				"v-text-field--enclosed v-text-field--outlined": __props.outlined,
				"v-input--is-dirty": __props.modelValue !== "" && __props.modelValue !== null
			}] }, _attrs))} data-v-4c38878a><div class="v-input__control" data-v-4c38878a><div class="v-input__slot" data-v-4c38878a>`);
			if (__props.outlined) _push(`<fieldset aria-hidden="true" data-v-4c38878a><legend style="${ssrRenderStyle({ "width": "0px" })}" data-v-4c38878a><span class="notranslate" data-v-4c38878a>​</span></legend></fieldset>`);
			else _push(`<!---->`);
			_push(` <div class="v-select__slot" data-v-4c38878a><select${ssrRenderAttr("value", __props.modelValue)} data-v-4c38878a><!--[-->`);
			ssrRenderList(__props.items, (it, i) => {
				_push(`<option${ssrRenderAttr("value", value(it))} data-v-4c38878a>${ssrInterpolate(label(it))}</option>`);
			});
			_push(`<!--]--></select> <div class="v-input__append-inner" data-v-4c38878a><i aria-hidden="true" class="v-icon notranslate mdi mdi-menu-down theme--light" data-v-4c38878a></i></div></div></div></div></div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxSelect.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var VxSelect_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-4c38878a"]]);
//#endregion
//#region app/pages/service/recipe/archive/index.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		RecipeBox: RecipeBox_default,
		AppArticle: Article_default
	},
	async setup() {
		const { query, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			{
				const limitPerFetch = 100;
				let offset = 0;
				const allContents = [];
				const paramsRequest = [];
				if (query.recipe_category && query.recipe_category !== "すべて") paramsRequest.push(`category[contains]${query.recipe_category}`);
				let keepFetching = true;
				while (keepFetching) {
					const response = await fetchDataV2($microcms, {
						endpoint: "store-recipes",
						paramsRequest,
						fieldStart: "open_start",
						orders: "-open_start,-createdAt",
						q: query.q,
						limit: limitPerFetch,
						offset
					});
					const filtered = response.contents.filter((item) => Array.isArray(item.archive) && item.archive.length > 0);
					allContents.push(...filtered);
					if (response.contents.length < limitPerFetch) keepFetching = false;
					else offset += limitPerFetch;
				}
				return {
					allRecipes: allContents,
					recipeList: allContents.slice(0, 16),
					categorySelected: query.recipe_category || "すべて",
					textFilter: query.q || "",
					currentPage: 1,
					limitPerPage: 16,
					isEndOfList: allContents.length <= 16
				};
			}
		}, "$rU20byIPwn");
		return { ...__d.value || {} };
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
					href: "/service/"
				},
				{
					text: "遠鉄ストアおすすめレシピ",
					disabled: true,
					href: "/service/recipe"
				}
			],
			recipeCategories: [
				"すべて",
				"野菜レシピ",
				"肉レシピ",
				"魚レシピ"
			],
			isLoading: false
		};
	},
	mounted() {
		(void 0).addEventListener("scroll", this.handleScroll);
	},
	beforeUnmount() {
		(void 0).removeEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			const bottomOffset = 1200;
			if (this.isLoading || this.isEndOfList) return;
			if ((void 0).innerHeight + (void 0).scrollY >= (void 0).body.offsetHeight - bottomOffset) this.loadScrollRecipes();
		},
		loadScrollRecipes() {
			if (this.isLoading || this.isEndOfList) return;
			this.isLoading = true;
			const nextStart = this.currentPage * this.limitPerPage;
			const nextItems = this.allRecipes.slice(nextStart, nextStart + this.limitPerPage);
			if (nextItems.length === 0) this.isEndOfList = true;
			else {
				this.recipeList.push(...nextItems);
				this.currentPage++;
				if (this.recipeList.length >= this.allRecipes.length) this.isEndOfList = true;
			}
			this.isLoading = false;
		},
		filterRecipe() {
			const recipeUrl = "/service/recipe/archive";
			const queryParams = [];
			if (this.textFilter) queryParams.push(`q=${this.textFilter}`);
			if (this.categorySelected) queryParams.push(`recipe_category=${this.categorySelected}`);
			(void 0).location.href = `${recipeUrl}?${queryParams.join("&")}`;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$2;
	const _component_AppArticle = Article_default;
	const _component_VxSelect = VxSelect_default;
	const _component_VxTextField = VxTextField_default;
	const _component_RecipeBox = RecipeBox_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-484b4d92><main data-v-484b4d92>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-484b4d92>チャチャッとクッキング</h2> <div class="lead d-none-mobile" data-v-484b4d92>
        かんたん！おいしい！スピードクッキング<br data-v-484b4d92>遠鉄ストア店頭でレシピカードを配布しています
      </div> <div class="lead d-none-des" data-v-484b4d92>
        かんたん！おいしい！スピードクッキング！<br data-v-484b4d92>遠鉄ストア店頭でレシピカードを配布しています。
      </div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "レシピ検索",
		class: "filter-box"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="searchBoxInner" data-v-484b4d92${_scopeId}><div class="form-search" data-v-484b4d92${_scopeId}><div class="form-group" data-v-484b4d92${_scopeId}><label data-v-484b4d92${_scopeId}>カテゴリ</label> `);
				_push(ssrRenderComponent(_component_VxSelect, {
					modelValue: _ctx.categorySelected,
					"onUpdate:modelValue": ($event) => _ctx.categorySelected = $event,
					items: $data.recipeCategories,
					dense: "",
					outlined: "",
					class: "w-75 form_recipe_category-custom"
				}, null, _parent, _scopeId));
				_push(`</div> <div class="form-group form-txt-search-custom" data-v-484b4d92${_scopeId}><label data-v-484b4d92${_scopeId}>キーワード</label> `);
				_push(ssrRenderComponent(_component_VxTextField, {
					modelValue: _ctx.textFilter,
					"onUpdate:modelValue": ($event) => _ctx.textFilter = $event,
					dense: "",
					outlined: ""
				}, null, _parent, _scopeId));
				_push(`</div></div> <div class="searchBtn" data-v-484b4d92${_scopeId}><div class="btn-inner" data-v-484b4d92${_scopeId}>検索</div></div></div>`);
			} else return [createVNode("div", { class: "searchBoxInner" }, [
				createVNode("div", { class: "form-search" }, [
					createVNode("div", { class: "form-group" }, [
						createVNode("label", null, "カテゴリ"),
						createTextVNode(),
						createVNode(_component_VxSelect, {
							modelValue: _ctx.categorySelected,
							"onUpdate:modelValue": ($event) => _ctx.categorySelected = $event,
							items: $data.recipeCategories,
							dense: "",
							outlined: "",
							class: "w-75 form_recipe_category-custom"
						}, null, 8, [
							"modelValue",
							"onUpdate:modelValue",
							"items"
						])
					]),
					createTextVNode(),
					createVNode("div", { class: "form-group form-txt-search-custom" }, [
						createVNode("label", null, "キーワード"),
						createTextVNode(),
						createVNode(_component_VxTextField, {
							modelValue: _ctx.textFilter,
							"onUpdate:modelValue": ($event) => _ctx.textFilter = $event,
							dense: "",
							outlined: ""
						}, null, 8, ["modelValue", "onUpdate:modelValue"])
					])
				]),
				createTextVNode(),
				createVNode("div", {
					class: "searchBtn",
					onClick: $options.filterRecipe
				}, [createVNode("div", { class: "btn-inner" }, "検索")], 8, ["onClick"])
			])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="recipe-list" data-v-484b4d92><!--[-->`);
	ssrRenderList(_ctx.recipeList, (recipe, index) => {
		_push(ssrRenderComponent(_component_RecipeBox, {
			key: recipe.id,
			"recipe-item": recipe,
			class: { "zebra-stripping-class": index % 2 === 1 }
		}, null, _parent));
	});
	_push(`<!--]--></div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "前のページへ戻る",
		"is-back": "",
		href: "/service/recipe"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/recipe/archive/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var archive_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-484b4d92"]]);

export { archive_default as default };
//# sourceMappingURL=archive-Bu1TwR2H.mjs.map
