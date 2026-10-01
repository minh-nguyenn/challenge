import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { c as checkLengthTitle } from './utils-CzPagAGc.mjs';
import { i as img_noimg_default } from './img_noimg-BvILzYDp.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/RecipeBox.vue
var _sfc_main = {
	name: "RecipeBox",
	props: { recipeItem: {
		type: Object,
		default: () => ({})
	} },
	data() {
		return { categoryColor: {
			野菜レシピ: "#47800d",
			肉レシピ: "#800d0d",
			魚レシピ: "#0d5980",
			その他: "#000000"
		} };
	},
	methods: {
		checkRecipeNew(startDate) {
			const inputDate = new Date(startDate);
			const now = /* @__PURE__ */ new Date();
			return inputDate.getMonth() === now.getMonth() && inputDate.getFullYear() === now.getFullYear();
		},
		checkLengthTitle,
		formatTextTime(time) {
			if (time) time = time + "";
			let timeCut = this.checkLengthTitle(time, 2);
			if (timeCut.includes("...")) timeCut = timeCut.replace(/\.\.\./g, "");
			return timeCut;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "recipe-item" }, _attrs))} data-v-29c661d1><section${ssrRenderAttr("title", $props.recipeItem.title)} class="recipe-box d-none-mobile" data-v-29c661d1><a${ssrRenderAttr("target", $props.recipeItem.archive && $props.recipeItem.archive.length > 0 ? "" : "_blank")}${ssrRenderAttr("href", $props.recipeItem.archive && $props.recipeItem.archive.length > 0 ? `/service/recipe/archive/detail/${$props.recipeItem.id}` : `${$props.recipeItem.target_url}`)} class="check" data-v-29c661d1>レシピを見る</a> `);
	if ($options.checkRecipeNew($props.recipeItem.open_start)) _push(`<span class="new" data-v-29c661d1>new</span>`);
	else _push(`<!---->`);
	_push(` <p data-v-29c661d1>`);
	if ($props.recipeItem.filename1 && $props.recipeItem.filename1.url) _push(`<img${ssrRenderAttr("src", _ctx.$appendWebpFormat($props.recipeItem.filename1.url))} class="fullImage" data-v-29c661d1>`);
	else _push(`<img${ssrRenderAttr("src", img_noimg_default)} class="fullImage" data-v-29c661d1>`);
	_push(` <em style="${ssrRenderStyle({ "background-color": $data.categoryColor[$props.recipeItem.category?.toString() || ""] })}" data-v-29c661d1>${ssrInterpolate($props.recipeItem.category?.toString() || "")}</em> <strong data-v-29c661d1>${ssrInterpolate($options.checkLengthTitle($props.recipeItem.title, 18))}</strong> <small data-v-29c661d1>${ssrInterpolate($props.recipeItem.time)}分</small> `);
	if ($props.recipeItem.video) _push(`<span class="youtube" data-v-29c661d1>レシピ動画</span>`);
	else _push(`<!---->`);
	_push(`</p></section> <section class="recipe-box-mb d-none-des" data-v-29c661d1>`);
	if ($options.checkRecipeNew($props.recipeItem.open_start)) _push(`<span class="new" data-v-29c661d1>new</span>`);
	else _push(`<!---->`);
	_push(` <a${ssrRenderAttr("target", $props.recipeItem.archive && $props.recipeItem.archive.length > 0 ? "" : "_blank")}${ssrRenderAttr("href", $props.recipeItem.archive && $props.recipeItem.archive.length > 0 ? `/service/recipe/archive/detail/${$props.recipeItem.id}` : `${$props.recipeItem.target_url}`)} data-v-29c661d1><figure data-v-29c661d1>`);
	if ($props.recipeItem.filename1 && $props.recipeItem.filename1.url) _push(`<img${ssrRenderAttr("src", _ctx.$appendWebpFormat($props.recipeItem.filename1.url))} class="fullImage" data-v-29c661d1>`);
	else _push(`<img${ssrRenderAttr("src", img_noimg_default)} class="fullImage" data-v-29c661d1>`);
	_push(`</figure> <div class="title" data-v-29c661d1><p style="${ssrRenderStyle({ "background-color": $data.categoryColor[$props.recipeItem.category?.toString() || ""] })}" class="category c_stats03" data-v-29c661d1>${ssrInterpolate($props.recipeItem.category?.toString() || "")}</p> <h2 data-v-29c661d1>${ssrInterpolate($options.checkLengthTitle($props.recipeItem.title, 30))}</h2> <div data-v-29c661d1><p class="time" data-v-29c661d1>`);
	if ($props.recipeItem.video) _push(`<span class="youtube" data-v-29c661d1>レシピ動画</span>`);
	else _push(`<!---->`);
	_push(` <span data-v-29c661d1>${ssrInterpolate($props.recipeItem.time)}分</span></p></div></div></a></section></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecipeBox.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var RecipeBox_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-29c661d1"]]), { __name: "RecipeBox" });

export { RecipeBox_default as R };
//# sourceMappingURL=RecipeBox-BLY14-3v.mjs.map
