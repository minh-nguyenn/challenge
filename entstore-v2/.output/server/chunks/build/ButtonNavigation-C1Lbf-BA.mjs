import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

//#region app/components/App/ButtonNavigation.vue
var _sfc_main = {
	name: "AppButtonNavigation",
	props: {
		title: {
			type: String,
			required: true
		},
		next: {
			type: Boolean,
			required: false,
			default: false
		},
		isBack: {
			type: Boolean,
			default: false
		},
		longBtn: {
			type: Boolean,
			default: false
		},
		href: {
			type: String,
			default: "javascript:history.back()"
		},
		target: {
			type: String,
			default: "_self"
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: ["btn-nav", {
		long: $props.longBtn,
		isBack: $props.isBack
	}] }, _attrs))} data-v-b2bf609e><a${ssrRenderAttr("target", $props.target)}${ssrRenderAttr("href", $props.href)} class="${ssrRenderClass({
		"btn-back": $props.isBack,
		next: $props.next
	})}" data-v-b2bf609e>${ssrInterpolate($props.title)} `);
	if (_ctx.$slots.default) _push(`<br data-v-b2bf609e>`);
	else _push(`<!---->`);
	_push(` `);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(` `);
	if (!$props.isBack && !$props.next) _push(`<svg class="icon d-none-des" data-v-b2bf609e><use xlink:href="#icon_arrow03" data-v-b2bf609e></use></svg>`);
	else _push(`<!---->`);
	_push(`</a></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/App/ButtonNavigation.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ButtonNavigation_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b2bf609e"]]), { __name: "AppButtonNavigation" });

export { ButtonNavigation_default as B };
//# sourceMappingURL=ButtonNavigation-C1Lbf-BA.mjs.map
