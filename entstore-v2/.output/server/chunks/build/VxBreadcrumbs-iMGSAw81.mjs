import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';

//#region app/components/vx/VxBreadcrumbs.vue
var _sfc_main = {
	__name: "VxBreadcrumbs",
	__ssrInlineRender: true,
	props: {
		items: {
			type: Array,
			default: () => []
		},
		divider: {
			type: String,
			default: "/"
		}
	},
	setup(__props) {
		/**
		* Thay <v-breadcrumbs :items divider=">">  — chiem 57/67 lan dung Vuetify.
		*
		* DOM goc (lay tu www.entstore.co.jp/faq/, khong phai doan):
		*   <ul class="v-breadcrumbs theme--light">
		*     <li><a href="/" class="v-breadcrumbs__item">ホーム</a></li>
		*     <li class="v-breadcrumbs__divider">&gt;</li>
		*     <li><a href="/faq" class="v-breadcrumbs__item v-breadcrumbs__item--disabled">…</a></li>
		*   </ul>
		*
		* Luu y: muc disabled VAN la the <a> co href (khong phai <span>) — CSS cua site
		* dua vao dieu do (.v-breadcrumbs a { color: #333 } o mobile), va li:nth-child(even)
		* chinh la cac divider.
		*/
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<ul${ssrRenderAttrs(mergeProps({ class: "v-breadcrumbs theme--light" }, _attrs))}><!--[-->`);
			ssrRenderList(__props.items, (item, i) => {
				_push(`<!--[-->`);
				if (i > 0) _push(`<li class="v-breadcrumbs__divider">${ssrInterpolate(__props.divider)}</li>`);
				else _push(`<!---->`);
				_push(` <li><a${ssrRenderAttr("href", item.href)} class="${ssrRenderClass([{ "v-breadcrumbs__item--disabled": item.disabled }, "v-breadcrumbs__item"])}">${ssrInterpolate(item.text)}</a></li><!--]-->`);
			});
			_push(`<!--]--></ul>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxBreadcrumbs.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=VxBreadcrumbs-iMGSAw81.mjs.map
