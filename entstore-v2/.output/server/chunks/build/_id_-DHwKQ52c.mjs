import { _ as _plugin_vue_export_helper_default, a as useRoute$2 } from '../virtual/entry.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { S as SpecialDetail_default } from './SpecialDetail-DMYrYICr.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

//#region app/pages/special/[id].vue
var _sfc_main = { async setup() {
	const { params, error, $microcms } = buildLegacyContext();
	const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
		try {
			return { special: await $microcms.get({ endpoint: `store-special/${params.id}` }) };
		} catch (e) {
			error({
				statusCode: 404,
				message: "This page could not be found"
			});
		}
	}, "$XsYTvhzxch");
	return { ...__d.value || {} };
} };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(ssrRenderComponent(SpecialDetail_default, mergeProps({ special: _ctx.special }, _attrs), null, _parent));
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/special/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id__default as default };
//# sourceMappingURL=_id_-DHwKQ52c.mjs.map
