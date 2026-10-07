import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/ServiceCooking.vue
var _sfc_main = {
	name: "ServiceCooking",
	components: { AppArticle: Article_default },
	props: { dish: {
		type: Object,
		require: true,
		default: () => ({
			"title": "",
			"url": "",
			"request": [],
			"response": "",
			"eg": {
				"title": "",
				"content": ""
			}
		})
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_AppArticle = Article_default;
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-5d0987d1>`);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: $props.dish.title || "",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<article class="cooking-content mobile-box" data-v-5d0987d1${_scopeId}><section class="img-cooking" data-v-5d0987d1${_scopeId}><img${ssrRenderAttr("src", $props.dish.url)} data-v-5d0987d1${_scopeId}></section> <section class="contentInner" data-v-5d0987d1${_scopeId}><ul class="d-none-mobile" data-v-5d0987d1${_scopeId}><!--[-->`);
				ssrRenderList($props.dish.request, (request, index) => {
					_push(`<li class="recipePoint" data-v-5d0987d1${_scopeId}>${request ?? ""}</li>`);
				});
				_push(`<!--]--></ul> <div class="request-box" data-v-5d0987d1${_scopeId}>`);
				if ($props.dish.requestSP) {
					_push(`<ul class="d-none-des" data-v-5d0987d1${_scopeId}><!--[-->`);
					ssrRenderList($props.dish.requestSP, (request, index) => {
						_push(`<li class="recipePoint" data-v-5d0987d1${_scopeId}><svg class="icon colorRed" data-v-5d0987d1${_scopeId}><use xlink:href="#icon_baloon" data-v-5d0987d1${_scopeId}></use></svg> <span data-v-5d0987d1${_scopeId}>${request ?? ""}</span></li>`);
					});
					_push(`<!--]--></ul>`);
				} else {
					_push(`<ul class="d-none-des" data-v-5d0987d1${_scopeId}><!--[-->`);
					ssrRenderList($props.dish.request, (request, index) => {
						_push(`<li class="recipePoint" data-v-5d0987d1${_scopeId}><svg class="icon colorRed" data-v-5d0987d1${_scopeId}><use xlink:href="#icon_baloon" data-v-5d0987d1${_scopeId}></use></svg> <span data-v-5d0987d1${_scopeId}>${request ?? ""}</span></li>`);
					});
					_push(`<!--]--></ul>`);
				}
				_push(`</div> <p class="response" data-v-5d0987d1${_scopeId}>${$props.dish.response ?? ""}</p> `);
				if ($props.dish.eg?.title) _push(`<div data-v-5d0987d1${_scopeId}><h4 data-v-5d0987d1${_scopeId}>${ssrInterpolate($props.dish.eg.title)}</h4> <p class="eg-content" data-v-5d0987d1${_scopeId}>${$props.dish.eg.content ?? ""}</p></div>`);
				else _push(`<!---->`);
				_push(`</section></article>`);
			} else return [createVNode("article", { class: "cooking-content mobile-box" }, [
				createVNode("section", { class: "img-cooking" }, [createVNode("img", { src: $props.dish.url }, null, 8, ["src"])]),
				createTextVNode(),
				createVNode("section", { class: "contentInner" }, [
					createVNode("ul", { class: "d-none-mobile" }, [(openBlock(true), createBlock(Fragment, null, renderList($props.dish.request, (request, index) => {
						return openBlock(), createBlock("li", {
							key: index,
							class: "recipePoint",
							innerHTML: request
						}, null, 8, ["innerHTML"]);
					}), 128))]),
					createTextVNode(),
					createVNode("div", { class: "request-box" }, [$props.dish.requestSP ? (openBlock(), createBlock("ul", {
						key: 0,
						class: "d-none-des"
					}, [(openBlock(true), createBlock(Fragment, null, renderList($props.dish.requestSP, (request, index) => {
						return openBlock(), createBlock("li", {
							key: index,
							class: "recipePoint"
						}, [
							(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_baloon" })])),
							createTextVNode(),
							createVNode("span", { innerHTML: request }, null, 8, ["innerHTML"])
						]);
					}), 128))])) : (openBlock(), createBlock("ul", {
						key: 1,
						class: "d-none-des"
					}, [(openBlock(true), createBlock(Fragment, null, renderList($props.dish.request, (request, index) => {
						return openBlock(), createBlock("li", {
							key: index,
							class: "recipePoint"
						}, [
							(openBlock(), createBlock("svg", { class: "icon colorRed" }, [createVNode("use", { "xlink:href": "#icon_baloon" })])),
							createTextVNode(),
							createVNode("span", { innerHTML: request }, null, 8, ["innerHTML"])
						]);
					}), 128))]))]),
					createTextVNode(),
					createVNode("p", {
						class: "response",
						innerHTML: $props.dish.response
					}, null, 8, ["innerHTML"]),
					createTextVNode(),
					$props.dish.eg?.title ? (openBlock(), createBlock("div", { key: 0 }, [
						createVNode("h4", null, toDisplayString($props.dish.eg.title), 1),
						createTextVNode(),
						createVNode("p", {
							class: "eg-content",
							innerHTML: $props.dish.eg.content
						}, null, 8, ["innerHTML"])
					])) : createCommentVNode("", true)
				])
			])];
		}),
		_: 1
	}, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCooking.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ServiceCooking_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5d0987d1"]]), { __name: "ServiceCooking" });

export { ServiceCooking_default as S };
//# sourceMappingURL=ServiceCooking-oibKnszn.mjs.map
