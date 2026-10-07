import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { V as VxTextField_default } from './VxTextField-BY_Yjj-o.mjs';
import { R as RecipeBox_default } from './RecipeBox-BsCg4WAQ.mjs';
import { b as btn_cooking_default, V as VxSheet_default, a as VxSkeletonLoader_default } from './btn_cooking-CD4hhI2d.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, withDirectives, vModelSelect, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
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

//#region app/pages/service/recipe/index.vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		RecipeBox: RecipeBox_default,
		AppButtonNavigation: ButtonNavigation_default
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
				"魚レシピ",
				"その他"
			],
			categorySelected: "すべて",
			textFilter: "",
			recipeList: [],
			currentPage: 1,
			limitPerPage: 16,
			isLoading: false,
			isEndOfList: false
		};
	},
	setup() {
		useHead$1({ title: "遠鉄ストアおすすめレシピ｜サービス｜遠鉄ストア - 静岡県西部のスーパーマーケット（浜松市,磐田市,袋井市,湖西市,掛川市）" });
	},
	mounted() {
		const query = this.$route.query;
		this.categorySelected = query.recipe_category || "すべて";
		this.textFilter = query.q || "";
		this.loadRecipes();
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
		async loadRecipes() {
			if (this.isLoading || this.isEndOfList) return;
			this.isLoading = true;
			const paramsRequest = [];
			if (this.categorySelected && this.categorySelected !== "すべて") paramsRequest.push(`category[contains]${this.categorySelected}`);
			const payload = {
				endpoint: "store-recipes",
				fieldStart: "open_start",
				orders: "-open_start,-createdAt",
				paramsRequest,
				q: this.textFilter,
				limit: this.limitPerPage,
				offset: (this.currentPage - 1) * this.limitPerPage
			};
			try {
				const response = await fetchDataV2(this.$microcms, payload);
				let itemsContent = [];
				if (this.textFilter) itemsContent = response.contents;
				else itemsContent = response.contents.filter((item) => !item.archive || item.archive.length === 0);
				if (itemsContent.length < this.limitPerPage) this.isEndOfList = true;
				this.recipeList = itemsContent;
				this.currentPage++;
			} catch (error) {
				console.error("Failed to fetch recipes:", error);
			} finally {
				this.isLoading = false;
			}
		},
		async loadScrollRecipes() {
			if (this.isLoading || this.isEndOfList) return;
			this.isLoading = true;
			const paramsRequest = [];
			if (this.categorySelected && this.categorySelected !== "すべて") paramsRequest.push(`category[contains]${this.categorySelected}`);
			const payload = {
				endpoint: "store-recipes",
				fieldStart: "open_start",
				orders: "-open_start,-createdAt",
				paramsRequest,
				q: this.textFilter,
				limit: this.limitPerPage,
				offset: (this.currentPage - 1) * this.limitPerPage
			};
			try {
				const response = await fetchDataV2(this.$microcms, payload);
				let itemsContent = [];
				if (this.textFilter) itemsContent = response.contents;
				else itemsContent = response.contents.filter((item) => !item.archive || item.archive.length === 0);
				if (itemsContent.length < this.limitPerPage) this.isEndOfList = true;
				this.recipeList.push(...itemsContent);
				this.currentPage++;
			} catch (error) {
				console.error("Failed to fetch recipes:", error);
			} finally {
				this.isLoading = false;
			}
		},
		filterRecipe() {
			const recipeUrl = "/service/recipe";
			const queryParams = [];
			if (this.textFilter) queryParams.push(`q=${this.textFilter}`);
			if (this.categorySelected) queryParams.push(`recipe_category=${this.categorySelected}`);
			(void 0).location.href = `${recipeUrl}?${queryParams.join("&")}`;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_VxTextField = VxTextField_default;
	const _component_RecipeBox = RecipeBox_default;
	const _component_VxSheet = VxSheet_default;
	const _component_VxSkeletonLoader = VxSkeletonLoader_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-c617aae8><main data-v-c617aae8>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-c617aae8><em data-v-c617aae8>かんたん 美味しく 楽しく♪</em> <br data-v-c617aae8>遠鉄ストアおすすめレシピ
      </h2> <div class="btn_box" data-v-c617aae8><a href="https://cgc-kitchen365.jp/" target="_blank" data-v-c617aae8><img${ssrRenderAttr("src", btn_cooking_default)} alt="Kitchen365 by ふれ愛交差点" data-v-c617aae8></a></div> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "レシピ検索",
		class: "filter-box"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<div class="searchBoxInner" data-v-c617aae8${_scopeId}><div class="form-search" data-v-c617aae8${_scopeId}><div class="form-group" data-v-c617aae8${_scopeId}><label data-v-c617aae8${_scopeId}>カテゴリ</label> <select id="form_recipe_category" class="w-75" name="recipe_category" data-v-c617aae8${_scopeId}><option value="すべて" selected="selected" data-v-c617aae8${_scopeId}>すべて</option> <option value="野菜レシピ" data-v-c617aae8${ssrIncludeBooleanAttr(Array.isArray($data.categorySelected) ? ssrLooseContain($data.categorySelected, "野菜レシピ") : ssrLooseEqual($data.categorySelected, "野菜レシピ")) ? " selected" : ""}${_scopeId}>野菜レシピ</option> <option value="肉レシピ" data-v-c617aae8${ssrIncludeBooleanAttr(Array.isArray($data.categorySelected) ? ssrLooseContain($data.categorySelected, "肉レシピ") : ssrLooseEqual($data.categorySelected, "肉レシピ")) ? " selected" : ""}${_scopeId}>肉レシピ</option> <option value="魚レシピ" data-v-c617aae8${ssrIncludeBooleanAttr(Array.isArray($data.categorySelected) ? ssrLooseContain($data.categorySelected, "魚レシピ") : ssrLooseEqual($data.categorySelected, "魚レシピ")) ? " selected" : ""}${_scopeId}>魚レシピ</option> <option value="その他" data-v-c617aae8${ssrIncludeBooleanAttr(Array.isArray($data.categorySelected) ? ssrLooseContain($data.categorySelected, "その他") : ssrLooseEqual($data.categorySelected, "その他")) ? " selected" : ""}${_scopeId}>その他</option></select></div> <div class="form-group form-txt-search-custom" data-v-c617aae8${_scopeId}><label data-v-c617aae8${_scopeId}>キーワード</label> `);
				_push(ssrRenderComponent(_component_VxTextField, {
					class: "form-txt-search",
					modelValue: $data.textFilter,
					"onUpdate:modelValue": ($event) => $data.textFilter = $event,
					dense: "",
					outlined: ""
				}, null, _parent, _scopeId));
				_push(`</div></div> <div class="searchBtn" data-v-c617aae8${_scopeId}><div class="btn-inner" data-v-c617aae8${_scopeId}>検索</div></div></div>`);
			} else return [createVNode("div", { class: "searchBoxInner" }, [
				createVNode("div", { class: "form-search" }, [
					createVNode("div", { class: "form-group" }, [
						createVNode("label", null, "カテゴリ"),
						createTextVNode(),
						withDirectives(createVNode("select", {
							id: "form_recipe_category",
							"onUpdate:modelValue": ($event) => $data.categorySelected = $event,
							class: "w-75",
							name: "recipe_category"
						}, [
							createVNode("option", {
								value: "すべて",
								selected: "selected"
							}, "すべて"),
							createTextVNode(),
							createVNode("option", { value: "野菜レシピ" }, "野菜レシピ"),
							createTextVNode(),
							createVNode("option", { value: "肉レシピ" }, "肉レシピ"),
							createTextVNode(),
							createVNode("option", { value: "魚レシピ" }, "魚レシピ"),
							createTextVNode(),
							createVNode("option", { value: "その他" }, "その他")
						], 8, ["onUpdate:modelValue"]), [[vModelSelect, $data.categorySelected]])
					]),
					createTextVNode(),
					createVNode("div", { class: "form-group form-txt-search-custom" }, [
						createVNode("label", null, "キーワード"),
						createTextVNode(),
						createVNode(_component_VxTextField, {
							class: "form-txt-search",
							modelValue: $data.textFilter,
							"onUpdate:modelValue": ($event) => $data.textFilter = $event,
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
	_push(` <div class="recipe-list" data-v-c617aae8><!--[-->`);
	ssrRenderList($data.recipeList, (recipe) => {
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
	_push(`</div> <div class="btn-redirect d-none-mobile" data-v-c617aae8>`);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "前のページへ戻る",
		"is-back": "",
		href: "/service"
	}, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "過去のレシピを見る",
		href: "/service/recipe/archive"
	}, null, _parent));
	_push(`</div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		href: "/service/recipe/archive",
		class: "d-none-des custom-btn",
		title: "過去のレシピを見る",
		"long-btn": ""
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/recipe/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var recipe_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c617aae8"]]);

export { recipe_default as default };
//# sourceMappingURL=recipe-BQMEQ38L.mjs.map
