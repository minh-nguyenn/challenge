import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

//#region app/components/App/Article.vue
var _sfc_main = {
	name: "AppArticle",
	props: {
		title: {
			type: String,
			required: true
		},
		subTitle: {
			type: String,
			default: ""
		},
		href: {
			type: String,
			default: ""
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<article${ssrRenderAttrs(mergeProps({ class: "singleColumn art-gps" }, _attrs))} data-v-a7db74bd><section class="contentInner" data-v-a7db74bd><h2 class="${ssrRenderClass([{ link: $props.href }, "title-article"])}" data-v-a7db74bd>`);
	if ($props.href) {
		_push(`<a class="${ssrRenderClass([{ "down-lineHeight": $props.subTitle }, "d-none-des"])}"${ssrRenderAttr("href", $props.href)} data-v-a7db74bd>${ssrInterpolate($props.title)} `);
		if ($props.subTitle) _push(`<div data-v-a7db74bd>${ssrInterpolate($props.subTitle)}</div>`);
		else _push(`<!---->`);
		_push(`</a>`);
	} else _push(`<!---->`);
	_push(` `);
	if ($props.href) _push(`<span class="d-none-mobile" data-v-a7db74bd>${ssrInterpolate($props.title)}</span>`);
	else _push(`<!---->`);
	_push(` `);
	if (!$props.href) _push(`<span data-v-a7db74bd>${ssrInterpolate($props.title)}</span>`);
	else _push(`<!---->`);
	_push(`</h2> <div class="article-content" data-v-a7db74bd>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div></section></article>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/Article.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Article_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a7db74bd"]]), { __name: "AppArticle" });

export { Article_default as A };
//# sourceMappingURL=Article-LWI8gJDh.mjs.map
