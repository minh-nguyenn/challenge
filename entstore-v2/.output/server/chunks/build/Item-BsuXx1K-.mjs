import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { c as checkLengthTitle, a as formatDateYMD } from './utils-CzPagAGc.mjs';
import { i as img_noimg_default } from './img_noimg-BvILzYDp.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/Blog/Banner.vue
var _sfc_main$1 = { name: "BlogBanner" };
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-a9837801><div class="blog_title_box" data-v-a9837801><h2 class="blog_title" data-v-a9837801><span data-v-a9837801><em data-v-a9837801>遠鉄ストアの</em> <br data-v-a9837801>おいしい話
            </span></h2></div> <p class="normalTxt txt_intro mobile-box" data-v-a9837801>遠鉄ストアのおいしい話は、主婦目線で販売されている商品やお得な情報を紹介していくメディアです。</p></div>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Banner.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Banner_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a9837801"]]), { __name: "BlogBanner" });
//#endregion
//#region app/components/Blog/Item.vue
var _sfc_main = {
	name: "BlogItem",
	props: { blogItem: {
		type: Object,
		default: () => ({
			id: "",
			imgUrl: "",
			category: "",
			title: "",
			time: ""
		})
	} },
	methods: {
		formatDateYMD,
		checkLengthTitle
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "new_list" }, _attrs))} data-v-a0c559f9><a${ssrRenderAttr("href", `/blog/detail/${$props.blogItem.id}`)} data-v-a0c559f9><figure class="thum_img" data-v-a0c559f9>`);
	if ($props.blogItem?.imgUrl) _push(`<img${ssrRenderAttr("src", _ctx.$appendWebpFormat($props.blogItem.imgUrl))} class="img_responsive" data-v-a0c559f9>`);
	else _push(`<img${ssrRenderAttr("src", img_noimg_default)} class="img_responsive" data-v-a0c559f9>`);
	_push(`</figure> <p class="new_list_category" data-v-a0c559f9>${ssrInterpolate($props.blogItem.category)}</p> <time class="new_list_time" data-v-a0c559f9>${ssrInterpolate($options.formatDateYMD($props.blogItem.time, "."))}</time> <p class="new_list_title" data-v-a0c559f9>${ssrInterpolate($options.checkLengthTitle($props.blogItem.title, 50))}</p></a></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog/Item.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Item_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a0c559f9"]]), { __name: "BlogItem" });

export { Banner_default as B, Item_default as I };
//# sourceMappingURL=Item-BsuXx1K-.mjs.map
