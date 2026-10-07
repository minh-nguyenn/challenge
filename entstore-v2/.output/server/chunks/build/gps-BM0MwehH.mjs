import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { a as formatDateYMD } from './utils-CzPagAGc.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { S as SHOP_LIST } from './shop-data-X-r7ax_k.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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

//#region app/pages/shop/gps/index.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		AppArticle: Article_default
	},
	data() {
		return {
			breadcrumbItems: [
				{
					text: "ホーム",
					disabled: false,
					href: "/"
				},
				{
					text: "店舗情報",
					disabled: false,
					href: "/shop"
				},
				{
					text: "現在地から探す",
					disabled: true
				}
			],
			locationsMapMarker: [],
			currentLocation: {}
		};
	},
	computed: {
		shopList() {
			return Object.keys(SHOP_LIST).reduce((cur, next) => {
				cur.push(...SHOP_LIST[next]);
				return cur;
			}, []);
		},
		isCurrentLocationAvailable() {
			return typeof this.currentLocation.lat === "number" && typeof this.currentLocation.lng === "number";
		}
	},
	mounted() {
		if ("geolocation" in void 0) (void 0).geolocation.getCurrentPosition((position) => {
			const lat1 = position.coords.latitude;
			const lng1 = position.coords.longitude;
			this.currentLocation = {
				lat: lat1,
				lng: lng1
			};
			this.shopList.forEach((shop) => {
				const lat2 = shop.position.lat;
				const lng2 = shop.position.lng;
				if (this.calcDistance(lat1, lng1, lat2, lng2) <= 3e3) this.locationsMapMarker.push({
					...shop.position,
					shopName: shop.shopName,
					id: shop.globalName
				});
			});
		}, (error) => {
			console.log(`Error getting location:`, error);
		});
		else console.log(`Geolocation is not available in this browser.`);
	},
	methods: {
		formatDateYMD,
		calcDistance(lat1, lng1, lat2, lng2) {
			const RX = 6378137;
			const RY = 6356752.31414;
			const ax = lng1 * Math.PI / 180 - lng2 * Math.PI / 180;
			const ay = lat1 * Math.PI / 180 - lat2 * Math.PI / 180;
			const p = (lat1 * Math.PI / 180 + lat2 * Math.PI / 180) / 2;
			const e = Math.sqrt((RX * RX - RY * RY) / (RX * RX));
			const w = Math.sqrt(1 - e * e * Math.sin(p) * Math.sin(p));
			const m = RX * (1 - e * e) / (w * w * w);
			const n = RX / w;
			let d = Math.pow(ay * m, 2) + Math.pow(ax * n * Math.cos(p), 2);
			d = Math.round(Math.sqrt(d));
			return d;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_GMap = resolveComponent("GMap");
	const _component_GMapMarker = resolveComponent("GMapMarker");
	const _component_GMapInfoWindow = resolveComponent("GMapInfoWindow");
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-d81b145b><main data-v-d81b145b>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-d81b145b>店舗情報</h2> <p class="subtitle d-none-des" data-v-d81b145b>近くて便利。<br data-v-d81b145b>あなたの近くの遠鉄ストア。</p> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "現在地から探す",
		class: "mb-4"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="lead" data-v-d81b145b${_scopeId}><strong data-v-d81b145b${_scopeId}>現在地周辺</strong>の店舗は<strong id="count" data-v-d81b145b${_scopeId}>${ssrInterpolate($data.locationsMapMarker.length)}件</strong>でした</p>`);
			else return [createVNode("p", { class: "lead" }, [
				createVNode("strong", null, "現在地周辺"),
				createTextVNode("の店舗は"),
				createVNode("strong", { id: "count" }, toDisplayString($data.locationsMapMarker.length) + "件", 1),
				createTextVNode("でした")
			])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="mobile-box" data-v-d81b145b>`);
	if ($options.isCurrentLocationAvailable) _push(ssrRenderComponent(_component_GMap, {
		ref: "gMap",
		language: "ja",
		center: $data.currentLocation,
		zoom: 13
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(`<!--[-->`);
				ssrRenderList($data.locationsMapMarker, (location) => {
					_push(ssrRenderComponent(_component_GMapMarker, {
						key: location.id,
						position: {
							lat: location.lat,
							lng: location.lng
						}
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) _push(ssrRenderComponent(_component_GMapInfoWindow, null, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<span data-v-d81b145b${_scopeId}>${ssrInterpolate(location.shopName)}</span>`);
									else return [createVNode("span", null, toDisplayString(location.shopName), 1)];
								}),
								_: 2
							}, _parent, _scopeId));
							else return [createVNode(_component_GMapInfoWindow, null, {
								default: withCtx(() => [createVNode("span", null, toDisplayString(location.shopName), 1)]),
								_: 2
							}, 1024)];
						}),
						_: 2
					}, _parent, _scopeId));
				});
				_push(`<!--]--> `);
				_push(ssrRenderComponent(_component_GMapMarker, { position: {
					lat: $data.currentLocation.lat,
					lng: $data.currentLocation.lng
				} }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_GMapInfoWindow, null, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`<span data-v-d81b145b${_scopeId}>現在地</span>`);
								else return [createVNode("span", null, "現在地")];
							}),
							_: 1
						}, _parent, _scopeId));
						else return [createVNode(_component_GMapInfoWindow, null, {
							default: withCtx(() => [createVNode("span", null, "現在地")]),
							_: 1
						})];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				(openBlock(true), createBlock(Fragment, null, renderList($data.locationsMapMarker, (location) => {
					return openBlock(), createBlock(_component_GMapMarker, {
						key: location.id,
						position: {
							lat: location.lat,
							lng: location.lng
						}
					}, {
						default: withCtx(() => [createVNode(_component_GMapInfoWindow, null, {
							default: withCtx(() => [createVNode("span", null, toDisplayString(location.shopName), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["position"]);
				}), 128)),
				createTextVNode(),
				createVNode(_component_GMapMarker, { position: {
					lat: $data.currentLocation.lat,
					lng: $data.currentLocation.lng
				} }, {
					default: withCtx(() => [createVNode(_component_GMapInfoWindow, null, {
						default: withCtx(() => [createVNode("span", null, "現在地")]),
						_: 1
					})]),
					_: 1
				}, 8, ["position"])
			];
		}),
		_: 1
	}, _parent));
	else _push(`<!---->`);
	_push(`</div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "店舗一覧へ戻る",
		class: "btn-back",
		"is-back": "",
		href: "/shop"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/gps/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var gps_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d81b145b"]]);

export { gps_default as default };
//# sourceMappingURL=gps-BM0MwehH.mjs.map
