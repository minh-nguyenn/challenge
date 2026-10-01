import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/ProductItem.vue
var _sfc_main = {
	name: "ProductItem",
	props: { service: {
		type: Object,
		default: () => ({
			"to": "",
			"imgAlt": "",
			"url": "",
			"title": ""
		})
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<section${ssrRenderAttrs(mergeProps({ class: "product" }, _attrs))} data-v-d25c0086><a${ssrRenderAttr("href", $props.service.to)} data-v-d25c0086><figure data-v-d25c0086><img${ssrRenderAttr("src", $props.service.url)}${ssrRenderAttr("alt", $props.service.imgAlt)} data-v-d25c0086></figure> <span data-v-d25c0086>${ssrInterpolate($props.service.title)}</span></a></section>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductItem.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ProductItem_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d25c0086"]]), { __name: "ProductItem" });

export { ProductItem_default as P };
//# sourceMappingURL=ProductItem-BO1Zh4qw.mjs.map
