import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

//#region app/components/vx/VxSheet.vue
var _sfc_main$1 = {
	__name: "VxSheet",
	__ssrInlineRender: true,
	setup(__props) {
		/**
		* Thay <v-sheet class="pa-3 v-sheet-custom">. Chi la mot khoi nen trang.
		* Trang recipe co class .v-sheet-custom rieng nen giu nguyen ten class.
		*/
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "v-sheet theme--light" }, _attrs))} data-v-a3b08265>`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxSheet.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var VxSheet_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-a3b08265"]]);
//#endregion
//#region app/components/vx/VxSkeletonLoader.vue
var _sfc_main = {
	__name: "VxSkeletonLoader",
	__ssrInlineRender: true,
	props: {
		type: {
			type: String,
			default: "card"
		},
		maxWidth: {
			type: [String, Number],
			default: null
		}
	},
	setup(__props) {
		/**
		* Thay <v-skeleton-loader type="card" max-width="300">.
		* Chi hien khi dang tai them cong thuc (infinite scroll) nen chi can khung xam
		* nhap nhay dung kich thuoc, khong can tai tao het cac kieu cua Vuetify.
		*/
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "v-skeleton-loader theme--light v-skeleton-loader--is-loading",
				style: __props.maxWidth ? { maxWidth: typeof __props.maxWidth === "number" ? __props.maxWidth + "px" : __props.maxWidth } : null
			}, _attrs))} data-v-63e1817e><div class="v-skeleton-loader__image v-skeleton-loader__bone" data-v-63e1817e></div> <div class="v-skeleton-loader__card-heading" data-v-63e1817e><div class="v-skeleton-loader__heading v-skeleton-loader__bone" data-v-63e1817e></div></div></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxSkeletonLoader.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var VxSkeletonLoader_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-63e1817e"]]);
//#endregion
//#region app/assets/images/btn_cooking.webp
var btn_cooking_default = "" + __buildAssetsURL("btn_cooking.CWswljpm.webp");

export { VxSheet_default as V, VxSkeletonLoader_default as a, btn_cooking_default as b };
//# sourceMappingURL=btn_cooking-CD4hhI2d.mjs.map
