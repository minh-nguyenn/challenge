import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';

//#region app/components/vx/VxTextField.vue
var _sfc_main = {
	__name: "VxTextField",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: [String, Number],
			default: ""
		},
		dense: {
			type: Boolean,
			default: false
		},
		outlined: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ""
		},
		type: {
			type: String,
			default: "text"
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["v-input theme--light v-text-field v-text-field--is-booted", {
				"v-input--dense": __props.dense,
				"v-text-field--enclosed v-text-field--outlined": __props.outlined,
				"v-input--is-dirty": !!__props.modelValue
			}] }, _attrs))} data-v-f1df9c1b><div class="v-input__control" data-v-f1df9c1b><div class="v-input__slot" data-v-f1df9c1b>`);
			if (__props.outlined) _push(`<fieldset aria-hidden="true" data-v-f1df9c1b><legend style="${ssrRenderStyle({ "width": "0px" })}" data-v-f1df9c1b><span class="notranslate" data-v-f1df9c1b>​</span></legend></fieldset>`);
			else _push(`<!---->`);
			_push(` <div class="v-text-field__slot" data-v-f1df9c1b><input${ssrRenderAttr("type", __props.type)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrRenderAttr("value", __props.modelValue)} data-v-f1df9c1b></div></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxTextField.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var VxTextField_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-f1df9c1b"]]);

export { VxTextField_default as V };
//# sourceMappingURL=VxTextField-BY_Yjj-o.mjs.map
