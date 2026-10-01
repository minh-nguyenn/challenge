import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { u as useCart } from './useCart-DarJ4RET.mjs';
import { S as SmartSearchBar_default } from './SmartSearchBar-Dq7NKO6z.mjs';
import { V as VxSlick_default } from './VxSlick-EUvIyKhd.mjs';
import { ref, computed, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, renderSlot, mergeProps, watch, nextTick, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { t } from '../_/chat-lang.mjs';
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
import 'unhead/utils';
import './nuxt-link-DnhXVmPR.mjs';

//#region app/components/vx/VxApp.vue
var _sfc_main$4 = {
	__name: "VxApp",
	__ssrInlineRender: true,
	setup(__props) {
		/**
		* Thay <v-app> cua Vuetify 2.
		* DOM duoc chep dung theo ban render that cua www.entstore.co.jp:
		*   <div data-app="true" id="app" class="v-application root v-application--is-ltr theme--light">
		*     <div class="v-application--wrap"> ... </div>
		*   </div>
		* Giu nguyen class de cac <style> trong file .vue goc va vuetify-compat.scss bam dung.
		*/
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				id: "app",
				"data-app": "true",
				class: "v-application root v-application--is-ltr theme--light"
			}, _attrs))}><div class="v-application--wrap">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div></div>`);
		};
	}
};
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxApp.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
//#endregion
//#region app/components/vx/VxNavigationDrawer.vue
var _sfc_main$3 = {
	__name: "VxNavigationDrawer",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: "400px"
		},
		right: {
			type: Boolean,
			default: false
		},
		fixed: {
			type: Boolean,
			default: false
		},
		temporary: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		/**
		* Thay <v-navigation-drawer v-model fixed temporary app right width="400px">
		*
		* DOM goc (lay tu www.entstore.co.jp, khong phai doan):
		*   <nav class="drawer-navlist v-navigation-drawer v-navigation-drawer--close
		*               v-navigation-drawer--fixed v-navigation-drawer--is-mobile
		*               v-navigation-drawer--right v-navigation-drawer--temporary theme--light"
		*        style="height:100vh;top:0px;transform:translateX(100%);width:400px;">
		*     <div class="v-navigation-drawer__content"> ... </div>
		*   </nav>
		*
		* Khi dong: them class --close + transform:translateX(100%)
		* Khi mo   : bo class --close + transform:translateX(0)
		*/
		const props = __props;
		const isOpen = computed(() => props.modelValue);
		const navStyle = computed(() => ({
			height: "100vh",
			top: "0px",
			transform: isOpen.value ? "translateX(0)" : `translateX(${props.right ? "100%" : "-100%"})`,
			width: props.width
		}));
		watch(isOpen, (v) => {});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			if (__props.temporary && isOpen.value) _push(`<div class="v-overlay-scrim"></div>`);
			else _push(`<!---->`);
			_push(` <nav class="${ssrRenderClass([{
				"v-navigation-drawer--close": !isOpen.value,
				"v-navigation-drawer--open": isOpen.value,
				"v-navigation-drawer--fixed": __props.fixed,
				"v-navigation-drawer--temporary": __props.temporary,
				"v-navigation-drawer--is-mobile": __props.temporary,
				"v-navigation-drawer--right": __props.right
			}, "v-navigation-drawer theme--light"])}" style="${ssrRenderStyle(navStyle.value)}" data-booted="true"><div class="v-navigation-drawer__content">`);
			ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
			_push(`</div> <div class="v-navigation-drawer__border"></div></nav></div>`);
		};
	}
};
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxNavigationDrawer.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region app/components/ChatWidget.vue
var _sfc_main$2 = {
	__name: "ChatWidget",
	__ssrInlineRender: true,
	setup(__props) {
		/**
		* Bong bóng chat ở góc phải — Yêu cầu 4.
		*
		* Trả lời dựa trên RAG toàn bộ index, bắt buộc trích nguồn có link,
		* và đáp đúng ngôn ngữ người dùng gõ (Nhật/Việt/Anh/Trung/Hàn/Thái).
		*/
		const open = ref(false);
		const input = ref("");
		const busy = ref(false);
		const lang = ref("ja");
		ref(null);
		ref(null);
		const messages = ref([{
			role: "bot",
			text: t("ja", "greeting"),
			sources: []
		}]);
		const placeholder = computed(() => t(lang.value, "placeholder"));
		const title = computed(() => t(lang.value, "title"));
		const sourceLabel = computed(() => t(lang.value, "sources"));
		/** Câu hỏi mẫu — giúp khách biết hỏi được gì, và khoe khả năng đa ngôn ngữ */
		const samples = [
			"うなぎの特売はいつまで？",
			"このサイトは何ができますか",
			"Trang này làm được gì?",
			"What can this website do?"
		];
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["cw", { "is-open": open.value }] }, _attrs))} data-v-b3225522><button type="button" class="${ssrRenderClass([{ open: open.value }, "cw-bubble"])}"${ssrRenderAttr("aria-label", title.value)} data-v-b3225522>`);
			if (!open.value) _push(`<span data-v-b3225522>💬</span>`);
			else _push(`<span data-v-b3225522>×</span>`);
			_push(`</button> `);
			if (open.value) {
				_push(`<div class="cw-panel" data-v-b3225522><header class="cw-head" data-v-b3225522><span class="cw-title" data-v-b3225522>${ssrInterpolate(title.value)}</span> <span class="cw-head-right" data-v-b3225522><span class="cw-lang" data-v-b3225522>${ssrInterpolate(lang.value.toUpperCase())}</span> <button type="button" class="cw-close" aria-label="閉じる" data-v-b3225522>×</button></span></header> <div class="cw-body" data-v-b3225522><!--[-->`);
				ssrRenderList(messages.value, (m, i) => {
					_push(`<div class="${ssrRenderClass([m.role, "cw-msg"])}" data-v-b3225522><p class="cw-text" data-v-b3225522>${ssrInterpolate(m.text)}</p> `);
					if (m.sources?.length) {
						_push(`<div class="cw-sources" data-v-b3225522><p class="cw-sources-label" data-v-b3225522>${ssrInterpolate(sourceLabel.value)}</p> <ul data-v-b3225522><!--[-->`);
						ssrRenderList(m.sources, (s) => {
							_push(`<li data-v-b3225522><a${ssrRenderAttr("href", s.route)} data-v-b3225522>${ssrInterpolate(s.title)}</a> <small data-v-b3225522>${ssrInterpolate(s.type)}</small></li>`);
						});
						_push(`<!--]--></ul></div>`);
					} else _push(`<!---->`);
					_push(` `);
					if (m.suggestions?.length) {
						_push(`<div class="cw-next" data-v-b3225522><!--[-->`);
						ssrRenderList(m.suggestions, (q) => {
							_push(`<button type="button" data-v-b3225522>${ssrInterpolate(q)}</button>`);
						});
						_push(`<!--]--></div>`);
					} else _push(`<!---->`);
					_push(` `);
					if (m.role === "bot" && m.mode) {
						_push(`<p class="cw-mode" data-v-b3225522>${ssrInterpolate(m.mode === "ai" ? "AI" : "ルールベース")} `);
						if (m.guard === "store-contact") _push(`<!--[-->・店舗確認をご案内<!--]-->`);
						else _push(`<!---->`);
						_push(`</p>`);
					} else _push(`<!---->`);
					_push(`</div>`);
				});
				_push(`<!--]--> `);
				if (busy.value) _push(`<div class="cw-msg bot" data-v-b3225522><p class="cw-text cw-typing" data-v-b3225522>…</p></div>`);
				else _push(`<!---->`);
				_push(`</div> `);
				if (messages.value.length <= 1) {
					_push(`<div class="cw-samples" data-v-b3225522><!--[-->`);
					ssrRenderList(samples, (s) => {
						_push(`<button type="button" data-v-b3225522>${ssrInterpolate(s)}</button>`);
					});
					_push(`<!--]--></div>`);
				} else _push(`<!---->`);
				_push(` <form class="cw-input" data-v-b3225522><input${ssrRenderAttr("value", input.value)} type="text"${ssrRenderAttr("placeholder", placeholder.value)}${ssrIncludeBooleanAttr(busy.value) ? " disabled" : ""} data-v-b3225522> <button type="submit"${ssrIncludeBooleanAttr(busy.value || !input.value.trim()) ? " disabled" : ""} data-v-b3225522>➤</button></form></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ChatWidget.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ChatWidget_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["__scopeId", "data-v-b3225522"]]);
//#endregion
//#region app/components/CartBar.vue
var _sfc_main$1 = {
	__name: "CartBar",
	__ssrInlineRender: true,
	setup(__props) {
		const cart = useCart();
		const route = useRoute();
		const hidden = ref(false);
		ref(null);
		const onCartPage = computed(() => route.path === "/cart");
		const visible = computed(() => cart.count.value > 0 && !hidden.value && !onCartPage.value);
		watch(() => cart.count.value, () => {
			hidden.value = false;
		});
		/**
		* Báo chiều cao của thanh này ra biến CSS chung `--cart-bar-h`.
		*
		* Thanh giỏ hàng nằm đè lên đáy màn hình, đúng chỗ nút chatbot đang đứng.
		* Nút chatbot đọc biến này để tự nâng lên, thay vì hai bên phải đoán chiều cao
		* của nhau — đo thật nên nội dung có xuống dòng trên điện thoại vẫn đúng.
		*/
		function syncHeight() {}
		watch(visible, () => nextTick(syncHeight));
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(ClientOnly, _attrs, {}, _parent));
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartBar.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var CartBar_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$1, [["__scopeId", "data-v-e14e934b"]]);
//#endregion
//#region app/assets/images/logo_entetsu_group.gif
var logo_entetsu_group_default = "data:image/gif;base64,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";
//#endregion
//#region app/assets/images/icon_menu_close.svg
var icon_menu_close_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2088%2088'%3e%3cdefs%3e%3cstyle%3e.cls-1{isolation:isolate;}.cls-2{fill:%23ce2339;}.cls-3{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cg%20id='長方形_1'%20data-name='長方形%201'%20class='cls-1'%3e%3cg%20id='長方形_1-2'%20data-name='長方形%201'%3e%3crect%20class='cls-2'%20width='88'%20height='88'%20rx='5'/%3e%3c/g%3e%3c/g%3e%3cg%20id='MENU'%3e%3cpath%20class='cls-3'%20d='M28.11,28h-1.9V15.36L21.75,24H20.7l-4.46-8.64V28H14.47V13.28h2.44l4.37,8.47,4.37-8.47h2.46Z'/%3e%3cpath%20class='cls-3'%20d='M42.49,28H32.43V13.28H42.49v1.59H34.34v4.28h7.95v1.58H34.34v5.69h8.15Z'/%3e%3cpath%20class='cls-3'%20d='M57.7,28H55.49L47.7,15.23V28H45.93V13.28h2.64l7.36,12.07V13.28H57.7Z'/%3e%3cpath%20class='cls-3'%20d='M73.71,22.16q0,3.19-1.53,4.67a6.12,6.12,0,0,1-4.41,1.47q-5.92,0-5.93-6.14V13.28h1.91v9a4.78,4.78,0,0,0,1,3.4,4,4,0,0,0,3,1,4.1,4.1,0,0,0,3-1,4.7,4.7,0,0,0,1-3.37v-9.1h1.91Z'/%3e%3c/g%3e%3cg%20id='長方形_2_のコピー_2'%20data-name='長方形%202%20のコピー%202'%20class='cls-1'%3e%3cpath%20class='cls-3'%20d='M24.06,72.84,40.37,56.53,24.06,40.22l3.63-3.62L44,52.91,60.31,36.6l3.63,3.62L47.63,56.53,63.94,72.84l-3.63,3.63L44,60.16,27.69,76.47Z'/%3e%3c/g%3e%3c/svg%3e";
//#endregion
//#region app/assets/images/icon_menu_default.svg
var icon_menu_default_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2088%2088'%3e%3cdefs%3e%3cstyle%3e.cls-1{isolation:isolate;}.cls-2{fill:%23ce2339;}.cls-3{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cg%20id='長方形_1'%20data-name='長方形%201'%20class='cls-1'%3e%3cg%20id='長方形_1-2'%20data-name='長方形%201'%3e%3crect%20class='cls-2'%20width='88'%20height='88'%20rx='5'/%3e%3c/g%3e%3c/g%3e%3cg%20id='MENU'%3e%3cpath%20class='cls-3'%20d='M28.11,32h-1.9V19.36L21.75,28H20.7l-4.46-8.64V32H14.47V17.28h2.44l4.37,8.47,4.37-8.47h2.46Z'/%3e%3cpath%20class='cls-3'%20d='M42.49,32H32.43V17.28H42.49v1.59H34.34v4.28h7.95v1.58H34.34v5.69h8.15Z'/%3e%3cpath%20class='cls-3'%20d='M57.7,32H55.49L47.7,19.23V32H45.93V17.28h2.64l7.36,12.07V17.28H57.7Z'/%3e%3cpath%20class='cls-3'%20d='M73.71,26.16q0,3.19-1.53,4.67a6.12,6.12,0,0,1-4.41,1.47q-5.92,0-5.93-6.14V17.28h1.91v9a4.78,4.78,0,0,0,1,3.4,4,4,0,0,0,3,1,4.1,4.1,0,0,0,3-1,4.7,4.7,0,0,0,1-3.37v-9.1h1.91Z'/%3e%3c/g%3e%3cg%20id='長方形_2'%20data-name='長方形%202'%20class='cls-1'%3e%3cg%20id='長方形_2-2'%20data-name='長方形%202'%3e%3crect%20class='cls-3'%20x='12'%20y='40'%20width='64'%20height='5'/%3e%3c/g%3e%3c/g%3e%3cg%20id='長方形_2_のコピー'%20data-name='長方形%202%20のコピー'%20class='cls-1'%3e%3cg%20id='長方形_2_のコピー-2'%20data-name='長方形%202%20のコピー'%3e%3crect%20class='cls-3'%20x='12'%20y='53'%20width='64'%20height='5'/%3e%3c/g%3e%3c/g%3e%3cg%20id='長方形_2_のコピー_2'%20data-name='長方形%202%20のコピー%202'%20class='cls-1'%3e%3cg%20id='長方形_2_のコピー_2-2'%20data-name='長方形%202%20のコピー%202'%3e%3crect%20class='cls-3'%20x='12'%20y='66'%20width='64'%20height='5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
//#endregion
//#region app/assets/images/ban_pointkids.webp
var ban_pointkids_default = "" + __buildAssetsURL("ban_pointkids.DjOy8UoV.webp");
//#endregion
//#region app/assets/images/ban_smp.webp
var ban_smp_default = "" + __buildAssetsURL("ban_smp.BAPVl0J1.webp");
//#endregion
//#region app/assets/images/ban_recruit.webp
var ban_recruit_default = "" + __buildAssetsURL("ban_recruit.CeBJ6PhO.webp");
//#endregion
//#region app/assets/images/ban_point.webp
var ban_point_default = "" + __buildAssetsURL("ban_point.Da9clB94.webp");
//#endregion
//#region app/assets/images/banner_footer.webp
var banner_footer_default = "" + __buildAssetsURL("banner_footer.CHDpcauW.webp");
//#endregion
//#region app/assets/images/bnr_footPointcard.webp
var bnr_footPointcard_default = "" + __buildAssetsURL("bnr_footPointcard.B989m6ZD.webp");
//#endregion
//#region app/assets/images/bnr_footMailorder.webp
var bnr_footMailorder_default = "" + __buildAssetsURL("bnr_footMailorder.Pfr49UFy.webp");
//#endregion
//#region app/assets/images/bnr_footBeef.webp
var bnr_footBeef_default = "" + __buildAssetsURL("bnr_footBeef.BUMYm3yO.webp");
//#endregion
//#region app/assets/images/ban_wellseason.webp
var ban_wellseason_default = "" + __buildAssetsURL("ban_wellseason.BoKfqiEw.webp");
//#endregion
//#region app/assets/images/ban_insurance.webp
var ban_insurance_default = "" + __buildAssetsURL("ban_insurance.Di3adMXO.webp");
//#endregion
//#region app/assets/images/ban_sekiyu.webp
var ban_sekiyu_default = "" + __buildAssetsURL("ban_sekiyu.XgpAW1ZX.webp");
//#endregion
//#region app/assets/images/ban_travel.webp
var ban_travel_default = "data:image/webp;base64,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";
//#endregion
//#region app/assets/images/ban_matsumotokiyoshi.webp
var ban_matsumotokiyoshi_default = "data:image/webp;base64,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";
//#endregion
//#region app/assets/images/ban_chateraise.webp
var ban_chateraise_default = "data:image/webp;base64,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";
//#endregion
//#region app/assets/images/ban_bus.webp
var ban_bus_default = "data:image/webp;base64,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";
//#endregion
//#region app/assets/images/ban_beef.webp
var ban_beef_default = "data:image/webp;base64,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";
//#endregion
//#region app/assets/images/ban_card.webp
var ban_card_default = "" + __buildAssetsURL("ban_card.BrkGRCSO.webp");
//#endregion
//#region app/assets/images/ban_cgc.webp
var ban_cgc_default = "data:image/webp;base64,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";
//#endregion
//#region app/assets/images/ban_concorde.webp
var ban_concorde_default = "" + __buildAssetsURL("ban_concorde.DOBjY1yS.webp");
//#endregion
//#region app/layouts/default.vue
var _sfc_main = {
	__name: "default",
	__ssrInlineRender: true,
	setup(__props) {
		/**
		* Layout goc cua site 遠鉄ストア — chep nguyen <template> va <style> (847 dong),
		* chi viet lai <script> tu Vue 2 Options API sang Vue 3.
		*
		* Doi so voi ban goc:
		*   <v-app>                -> <VxApp>              (component tu viet)
		*   <v-navigation-drawer>  -> <VxNavigationDrawer> (component tu viet)
		*   <Nuxt />               -> <slot />             (Nuxt 4 dung slot cho layout)
		*   <slick> (vue-slick)    -> <VxSlick>            (vue-slick khong ho tro Vue 3)
		*   window.$ (jQuery)      -> bo han, VxSlick chay bang CSS transform
		*   mounted/beforeDestroy  -> onMounted/onBeforeUnmount
		*/
		const route = useRoute();
		const navList = [
			{
				labelMobile: "遠鉄ストア ホーム",
				label: "ホーム",
				to: "/",
				name: "home",
				svgId: "#icon_home"
			},
			{
				label: "チラシ情報",
				to: "/chirashi/",
				name: "chirashi",
				svgId: "#icon_chirashi"
			},
			{
				label: "店舗情報",
				to: "/shop/",
				name: "shop",
				svgId: "#icon_shop"
			},
			{
				label: "現在地から探す",
				to: "/shop#gps",
				name: "shop",
				svgId: "#icon_location",
				navMobile: true
			},
			{
				label: "エリアから探す",
				to: "/shop#area",
				name: "shop",
				svgId: "#icon_area",
				navMobile: true
			},
			{
				label: "サービス",
				to: "/service/",
				name: "service",
				svgId: "#icon_service"
			},
			{
				label: "レシピ集",
				to: "/service/recipe/",
				name: "recipe",
				svgId: "#icon_recipe"
			},
			{
				label: "採用情報",
				to: "/recruit/",
				name: "recruit",
				svgId: "#icon_recruit"
			},
			{
				label: "ネット通販",
				to: "https://shop.entstore.co.jp/f/ec",
				name: "giftshop",
				svgId: "#icon_mailorder",
				externalLink: true
			}
		];
		const navMobile = [
			{
				label: "チラシ情報",
				to: "/chirashi/",
				name: "chirashi"
			},
			{
				label: "店舗情報",
				to: "/shop/",
				name: "shop"
			},
			{
				label: "採用情報",
				to: "/recruit/",
				name: "recruit"
			}
		];
		const isVisibleNavigation = ref(false);
		const slickOptions = {
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2e3,
			dots: true
		};
		const navDes = computed(() => navList.filter((item) => !item.navMobile));
		const isHomePage = computed(() => route.path === "/");
		const isSearchPage = computed(() => route.path === "/search");
		function isCurrentRoute(routePath) {
			const split = route.path.split("/");
			if (split[1] && split[2] && routePath === "/service/") {
				if (split[1] === "service" && split[2] !== "recipe") return true;
			}
			if (split[1] && split[2] && routePath === "/service/recipe/") {
				if (split[1] === "service" && split[2].includes("recipe")) return true;
			}
			if (split[1] === "company" && routePath === "/recruit/") return true;
			if (split[1] === "shop" && routePath === "/shop/") return true;
			return route.path === routePath;
		}
		function toTop() {
			(void 0).scroll({
				top: 0,
				behavior: "smooth"
			});
		}
		return (_ctx, _push, _parent, _attrs) => {
			const _component_VxApp = _sfc_main$4;
			const _component_VxNavigationDrawer = _sfc_main$3;
			const _component_SmartSearchBar = SmartSearchBar_default;
			const _component_ClientOnly = ClientOnly;
			const _component_VxSlick = VxSlick_default;
			const _component_ChatWidget = ChatWidget_default;
			const _component_CartBar = CartBar_default;
			_push(ssrRenderComponent(_component_VxApp, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="wrap" data-v-c70477d0${_scopeId}><header id="pageHeader" class="${ssrRenderClass([{ "drawer-open": isVisibleNavigation.value }, "header-page"])}" data-v-c70477d0${_scopeId}><div class="head-inner" data-v-c70477d0${_scopeId}><h1 id="headLogo" data-v-c70477d0${_scopeId}><a href="/" data-v-c70477d0${_scopeId}><svg class="logo" data-v-c70477d0${_scopeId}><use xlink:href="#icon_logo" data-v-c70477d0${_scopeId}></use></svg></a></h1> <div class="head-contact" data-v-c70477d0${_scopeId}><div class="about-us" data-v-c70477d0${_scopeId}><a href="/company/" data-v-c70477d0${_scopeId}>会社情報</a></div> <div class="root-page" data-v-c70477d0${_scopeId}><a href="http://www.entetsu.co.jp/" target="_blank" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", logo_entetsu_group_default)} alt="遠鉄グループ" width="102" height="38" data-v-c70477d0${_scopeId}></a></div></div></div> <nav id="grobalNav" role="navigation" data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><!--[-->`);
						ssrRenderList(navDes.value, (nav) => {
							_push(`<li class="${ssrRenderClass(nav.name)}" data-v-c70477d0${_scopeId}><a${ssrRenderAttr("href", nav.to)} class="${ssrRenderClass({ active: isCurrentRoute(nav.to) })}"${ssrRenderAttr("target", nav.externalLink ? "_blank" : "_self")} data-v-c70477d0${_scopeId}>${ssrInterpolate(nav.label)}</a></li>`);
						});
						_push(`<!--]--></ul></nav> <nav id="mobileNav" role="navigation" data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><!--[-->`);
						ssrRenderList(navMobile, (nav) => {
							_push(`<li class="${ssrRenderClass(nav.name)}" data-v-c70477d0${_scopeId}><div class="img-nav" data-v-c70477d0${_scopeId}></div> <a${ssrRenderAttr("href", nav.to)} class="${ssrRenderClass({ active: isCurrentRoute(nav.to) })}"${ssrRenderAttr("target", nav.externalLink ? "_blank" : "_self")} data-v-c70477d0${_scopeId}>${ssrInterpolate(nav.label)}</a></li>`);
						});
						_push(`<!--]--></ul></nav> <button type="button" class="${ssrRenderClass([{ open: isVisibleNavigation.value }, "drawer-hamburger"])}" data-v-c70477d0${_scopeId}>`);
						if (isVisibleNavigation.value) _push(`<img${ssrRenderAttr("src", icon_menu_close_default)} alt="MENU" class="close" data-v-c70477d0${_scopeId}>`);
						else _push(`<img${ssrRenderAttr("src", icon_menu_default_default)} alt="MENU" class="open" data-v-c70477d0${_scopeId}>`);
						_push(`</button> `);
						_push(ssrRenderComponent(_component_VxNavigationDrawer, {
							modelValue: isVisibleNavigation.value,
							"onUpdate:modelValue": ($event) => isVisibleNavigation.value = $event,
							fixed: "",
							temporary: "",
							right: "",
							width: "400px",
							class: "drawer-navlist"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<div class="wrap-navMobile" data-v-c70477d0${_scopeId}><p class="navTitle" data-v-c70477d0${_scopeId}>MENU</p> <ul class="nav-list" data-v-c70477d0${_scopeId}><!--[-->`);
									ssrRenderList(navList, (nav) => {
										_push(`<li data-v-c70477d0${_scopeId}><a${ssrRenderAttr("href", nav.to)} class="${ssrRenderClass({
											active: isCurrentRoute(nav.to),
											"nav-child": nav.navMobile
										})}" data-v-c70477d0${_scopeId}><svg class="icon" data-v-c70477d0${_scopeId}><use${ssrRenderAttr("xlink:href", nav.svgId)} data-v-c70477d0${_scopeId}></use></svg> ${ssrInterpolate(nav.labelMobile ? nav.labelMobile : nav.label)}</a></li>`);
									});
									_push(`<!--]--></ul> <div class="subNavi" data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><li data-v-c70477d0${_scopeId}><a href="/info/" data-v-c70477d0${_scopeId}>遠鉄ストアからのお知らせ</a></li> <li data-v-c70477d0${_scopeId}><a href="/event/" data-v-c70477d0${_scopeId}>キャンペーン・イベント情報</a></li> <li class="company" data-v-c70477d0${_scopeId}><a href="/news/" data-v-c70477d0${_scopeId}>企業情報・ニュースリリース</a></li></ul></div></div>`);
								} else return [createVNode("div", { class: "wrap-navMobile" }, [
									createVNode("p", { class: "navTitle" }, "MENU"),
									createTextVNode(),
									createVNode("ul", { class: "nav-list" }, [(openBlock(), createBlock(Fragment, null, renderList(navList, (nav) => {
										return createVNode("li", { key: nav.to }, [createVNode("a", {
											href: nav.to,
											class: {
												active: isCurrentRoute(nav.to),
												"nav-child": nav.navMobile
											}
										}, [(openBlock(), createBlock("svg", { class: "icon" }, [createVNode("use", { "xlink:href": nav.svgId }, null, 8, ["xlink:href"])])), createTextVNode(" " + toDisplayString(nav.labelMobile ? nav.labelMobile : nav.label), 1)], 10, ["href"])]);
									}), 64))]),
									createTextVNode(),
									createVNode("div", { class: "subNavi" }, [createVNode("ul", null, [
										createVNode("li", null, [createVNode("a", { href: "/info/" }, "遠鉄ストアからのお知らせ")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/event/" }, "キャンペーン・イベント情報")]),
										createTextVNode(),
										createVNode("li", { class: "company" }, [createVNode("a", { href: "/news/" }, "企業情報・ニュースリリース")])
									])])
								])];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`</header> `);
						if (!isSearchPage.value) _push(ssrRenderComponent(_component_SmartSearchBar, { compact: !isHomePage.value }, null, _parent, _scopeId));
						else _push(`<!---->`);
						_push(` `);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(` <footer class="footer-page" data-v-c70477d0${_scopeId}><div id="footBnrList" class="d-none-des" data-v-c70477d0${_scopeId}><ul class="bnr mobile-box" data-v-c70477d0${_scopeId}><li class="recruit" data-v-c70477d0${_scopeId}><a href="https://entstore-recruit.net/jobfind-smartphone/" target="_blank" data-v-c70477d0${_scopeId}><p data-v-c70477d0${_scopeId}>遠鉄ストアで一緒に働きませんか？<span data-v-c70477d0${_scopeId}>アルバイト・パート・正社員積極採用中！</span></p></a></li> <li class="pointcard" data-v-c70477d0${_scopeId}><a href="https://entetsucard.entetsu.co.jp/" target="_blank" data-v-c70477d0${_scopeId}><p data-v-c70477d0${_scopeId}>えんてつポイントの<br data-v-c70477d0${_scopeId}>
                  貯め方・使い方<span data-v-c70477d0${_scopeId}>1P=1円で使えたり、ギフトをもらったり</span></p></a></li> <li class="kidsclub" data-v-c70477d0${_scopeId}><a href="https://entetsucard.entetsu.co.jp/kids/" target="_blank" data-v-c70477d0${_scopeId}><p data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", ban_pointkids_default)} alt="えんてつカードキッズクラブスタート" data-v-c70477d0${_scopeId}></p></a></li> <li class="text-center" data-v-c70477d0${_scopeId}><a target="_blank" href="https://tokubai.co.jp/offices/426/shops?from=widget_225x80&amp;office_id=426" data-v-c70477d0${_scopeId}><img alt="遠鉄ストアのチラシ・特売情報" src="https://assets.tokubai.co.jp/assets/themes/bargain_shops/office_widgets/banner_225x80-47b2efe97bcf52aee2bfbb25aa0bf6e2ead0d1d184052c84ddad536bf8ffba7c.png" data-v-c70477d0${_scopeId}></a></li></ul></div> <section class="footerInfo d-none-mobile" data-v-c70477d0${_scopeId}><div class="footer-banner" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", ban_smp_default)} alt="スマホサイトもご利用ください" data-v-c70477d0${_scopeId}></div> <div class="banner-list" data-v-c70477d0${_scopeId}><a href="https://entstore-recruit.net/jobfind-pc/" target="_blank" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", ban_recruit_default)} alt="遠鉄ストアで一緒に働きませんか？" data-v-c70477d0${_scopeId}></a> <a href="https://entetsucard.entetsu.co.jp/kids" target="_blank" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", ban_pointkids_default)} alt="遠鉄ストアで一緒に働きませんか？" data-v-c70477d0${_scopeId}></a> <a href="https://entetsucard.entetsu.co.jp/" target="_blank" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", ban_point_default)} alt="遠鉄ストアで一緒に働きませんか？" data-v-c70477d0${_scopeId}></a> <a href="https://tokubai.co.jp/offices/426/shops?from=widget_225x80&amp;office_id=426" target="_blank" class="text-center link-custom" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", banner_footer_default)} alt="遠鉄ストアで一緒に働きませんか？" data-v-c70477d0${_scopeId}></a></div></section> <section id="siteInfo" data-v-c70477d0${_scopeId}><section class="toLink" data-v-c70477d0${_scopeId}><div class="to-top" data-v-c70477d0${_scopeId}><a data-v-c70477d0${_scopeId}>ページの上へ戻る</a></div></section> <div class="footerDefoltNav d-none-des" data-v-c70477d0${_scopeId}><div class="defoltBnr" data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><li data-v-c70477d0${_scopeId}><a href="https://cards.entetsu.co.jp/card/" target="_blank" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", bnr_footPointcard_default)} alt="えんてつポイントがたまる！使える！毎日お得なえんてつカード" data-v-c70477d0${_scopeId}></a></li> <li data-v-c70477d0${_scopeId}><a href="https://shop.entstore.co.jp/f/ec" target="_blank" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", bnr_footMailorder_default)} alt="遠鉄ストアネット通販" data-v-c70477d0${_scopeId}></a></li> <li data-v-c70477d0${_scopeId}><a href="/traceability/" data-v-c70477d0${_scopeId}><img${ssrRenderAttr("src", bnr_footBeef_default)} alt="牛肉安全・安心システム" data-v-c70477d0${_scopeId}></a></li></ul></div> <ul class="footTxtNav" data-v-c70477d0${_scopeId}><li data-v-c70477d0${_scopeId}><a href="/sitemap/" data-v-c70477d0${_scopeId}>サイトマップ</a></li> <li data-v-c70477d0${_scopeId}><a href="/privacy/" data-v-c70477d0${_scopeId}>個人情報保護方針について</a></li> <li data-v-c70477d0${_scopeId}><a href="/pdf/マルチステークホルダー方針_遠鉄ストア.pdf" target="_blank" data-v-c70477d0${_scopeId}>マルチステークスホルダー方針</a></li> <li data-v-c70477d0${_scopeId}><a href="/faq/" data-v-c70477d0${_scopeId}>よくあるご質問</a></li> <li data-v-c70477d0${_scopeId}><a href="/contact/" data-v-c70477d0${_scopeId}>お客様の声をお寄せください</a></li></ul> <p id="copyright" data-v-c70477d0${_scopeId}><small data-v-c70477d0${_scopeId}>Copyright © Entetsu Store All Rights reserved.</small></p></div> <p id="footLogo" class="d-none-mobile" data-v-c70477d0${_scopeId}><a href="/" data-v-c70477d0${_scopeId}></a></p> <dl class="d-none-mobile" data-v-c70477d0${_scopeId}><dt data-v-c70477d0${_scopeId}><a href="/" data-v-c70477d0${_scopeId}>遠鉄ストアトップ</a></dt> <dt data-v-c70477d0${_scopeId}>店舗情報</dt> <dd data-v-c70477d0${_scopeId}><a href="/shop/" data-v-c70477d0${_scopeId}>店舗一覧</a></dd> <dt data-v-c70477d0${_scopeId}>チラシ情報</dt> <dd data-v-c70477d0${_scopeId}><a href="/chirashi/" data-v-c70477d0${_scopeId}>チラシ情報一覧</a></dd> <dt data-v-c70477d0${_scopeId}>お知らせ</dt> <dd data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><li data-v-c70477d0${_scopeId}><a href="/info/" data-v-c70477d0${_scopeId}>店舗からのお知らせ</a></li> <li data-v-c70477d0${_scopeId}><a href="/event/" data-v-c70477d0${_scopeId}>イベント・キャンペーン情報</a></li> <li data-v-c70477d0${_scopeId}><a href="/news/" data-v-c70477d0${_scopeId}>ニュースリリース</a></li></ul></dd> <dt data-v-c70477d0${_scopeId}>サービス</dt> <dd data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><li data-v-c70477d0${_scopeId}><a href="/service/cooking/" data-v-c70477d0${_scopeId}>調理サービス</a></li> <li data-v-c70477d0${_scopeId}><a href="/service/item/" data-v-c70477d0${_scopeId}>商品サービス</a></li> <li data-v-c70477d0${_scopeId}><a href="/service/counter/" data-v-c70477d0${_scopeId}>サービスカウンター取り扱いサービス</a></li></ul></dd> <dt data-v-c70477d0${_scopeId}>会社情報</dt> <dd data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><li data-v-c70477d0${_scopeId}><a href="/company/profile/" data-v-c70477d0${_scopeId}>会社概要・沿革</a></li> <li data-v-c70477d0${_scopeId}><a href="/company/message/" data-v-c70477d0${_scopeId}>トップメッセージ</a></li> <li data-v-c70477d0${_scopeId}><a href="/company/green/" data-v-c70477d0${_scopeId}>環境への取り組み</a></li> <li data-v-c70477d0${_scopeId}><a href="/company/social/" data-v-c70477d0${_scopeId}>社会活動への取り組み</a></li></ul></dd> <dt data-v-c70477d0${_scopeId}>採用情報</dt> <dd data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><li data-v-c70477d0${_scopeId}><a href="/recruit/#recruit01" data-v-c70477d0${_scopeId}>遠鉄ストアについて</a></li> <li data-v-c70477d0${_scopeId}><a href="/recruit/#recruit02" data-v-c70477d0${_scopeId}>遠鉄ストアのお仕事</a></li> <li data-v-c70477d0${_scopeId}><a href="/recruit/#recruit03" data-v-c70477d0${_scopeId}>オンライン応募</a></li></ul></dd> <dt data-v-c70477d0${_scopeId}>このサイトについて</dt> <dd data-v-c70477d0${_scopeId}><ul data-v-c70477d0${_scopeId}><li data-v-c70477d0${_scopeId}><a href="/sitemap/" data-v-c70477d0${_scopeId}>サイトマップ</a></li> <li data-v-c70477d0${_scopeId}><a href="/privacy/" data-v-c70477d0${_scopeId}>個人情報保護方針</a></li> <li data-v-c70477d0${_scopeId}><a href="/pdf/マルチステークホルダー方針_遠鉄ストア.pdf" target="_blank" data-v-c70477d0${_scopeId}>マルチステークスホルダー方針</a></li> <li data-v-c70477d0${_scopeId}><a href="/faq/" data-v-c70477d0${_scopeId}>よくあるご質問</a></li></ul></dd> <dt data-v-c70477d0${_scopeId}>お問い合わせ</dt> <dd data-v-c70477d0${_scopeId}><a href="/contact/" data-v-c70477d0${_scopeId}>お客様の声をお寄せください</a></dd> <dt class="wider" data-v-c70477d0${_scopeId}><a href="https://shop.entstore.co.jp/f/ec" data-v-c70477d0${_scopeId}>遠鉄ストアネット通販</a></dt></dl> <p id="copyright" class="d-none-mobile" data-v-c70477d0${_scopeId}>Copyright © 2014 Entetsu Store All Rights Reserved.</p></section> <div class="slick-footer d-none-mobile" data-v-c70477d0${_scopeId}><div class="${ssrRenderClass([[{ "footer-slider-homepage": isHomePage.value }], "footer-slider"])}" data-v-c70477d0${_scopeId}>`);
						_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent, _scopeId));
						_push(`</div></div></footer> `);
						_push(ssrRenderComponent(_component_ChatWidget, null, null, _parent, _scopeId));
						_push(` `);
						_push(ssrRenderComponent(_component_CartBar, null, null, _parent, _scopeId));
						_push(` <svg class="svgDefolt" data-v-c70477d0${_scopeId}><symbol id="icon_home" viewBox="0 0 28.4 28.4" data-v-c70477d0${_scopeId}><path d="M22.9,8V1.5h-3.6v3.8l-5.2-4.1L0,11.9l2.7,2.9l2-1.1v13.4h20.1V13.8l1.5,1.1l2.1-2.9L22.9,8z M17.5,25.3h-7.4v-9.2h7.4V25.3z" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_logo" viewBox="0 0 89.8 19.1" data-v-c70477d0${_scopeId}><g data-v-c70477d0${_scopeId}><polygon fill="#646757" points="29.2,6.1 29,7.5 38.2,7.5 38.4,6.1 34.7,6.1 34.8,5.3 38.1,5.3 38.4,4 35.1,4 35.3,3 33.4,3
				33.2,4 29.9,4 29.7,5.3 33,5.3 32.8,6.1 	" data-v-c70477d0${_scopeId}></polygon> <path fill="#646757" d="M52.1,10.5l0.3-1.3h-2.6l0.5-2.4h2.3l0.3-1.3h-2.3L50.9,3h-1.7l-0.5,2.4h-0.6c0.2-0.5,0.3-1.2,0.3-1.9h-1.4
				c0,0-0.3,3-1.1,3.2l-0.4,1.9c0,0,1.2-0.2,2.1-1.9h0.9l-0.5,2.4h-2.6l-0.3,1.3h2.3c-0.1,1-1.7,3.1-3.1,4l-0.4,1.9
				c0,0,1.8-0.3,4.2-3.9c0,0,0.9,3.1,2.6,3.9l0.4-1.8c0,0-1.8-2-1.6-4.1H52.1z" data-v-c70477d0${_scopeId}></path> <path fill="#646757" d="M54.7,3.7l-0.4,1.9h7.2c-0.1,0.8-2.3,7.6-9.1,8.9l-0.4,1.9c0,0,4.3-0.2,8-3.8c1.7,1,3.6,3.9,3.6,3.9
				l0.6-2.7c-1.3-1.7-2.2-2.4-2.8-2.8c1.4-1.8,2.6-4.2,3.3-7.3H54.7z" data-v-c70477d0${_scopeId}></path> <path fill="#646757" d="M77.6,9c-3-1.5-6.1-2-7.3-2.1L71,3h-2.4L66,16.3h2.5l1.4-7.4c3.6,0.3,7.3,2.3,7.3,2.3L77.6,9z" data-v-c70477d0${_scopeId}></path> <path fill="#646757" d="M89.8,3.6L89.8,3.6l-11.5,0l-0.4,1.9h9c0,1.3-1,3.8-3.8,4c0,0,0,0-0.1,0C83.3,8.6,83.3,8,83.3,8h-2.2
				c-1.1,6.1-4,6.1-4,6.1l-0.4,2.2c3.3-0.3,4.9-2.8,5.8-5C86.8,11.2,89.3,8.2,89.8,3.6L89.8,3.6z" data-v-c70477d0${_scopeId}></path> <path fill="#646757" d="M29.1,4.3c0,0-2-0.9-2.7-0.9L26.1,5c0,0,1.5,0.3,2.6,1L29.1,4.3z" data-v-c70477d0${_scopeId}></path> <path fill="#646757" d="M28.7,11.1h1.8l-2.1,1.5l-0.3,1.6l2.8-1.8l-0.5,2.7h-0.9c0,0-2.4,0-2-1.8l0.9-5.1h-2.9l-0.3,1.5h1.2
				l-0.8,4.2l-1.4,0.9l-0.4,1.9l2.2-1.2h0.3c0.2,0.7,2,1.1,2.5,1.1h7.7l0.3-1.4h-4.5l0.5-2.7c1.1,1.7,3.7,2.6,3.7,2.6l0.3-1.5
				c-0.5-0.2-0.9-0.4-1.3-0.6c1.5-0.9,1.4-1.5,1.4-1.5h-1.6c-0.3,0.4-0.6,0.7-0.9,0.8c-0.6-0.5-0.7-0.8-0.8-1h3.5l0.6-2.9h-8.4
				L28.7,11.1z M30.6,9.2H36L35.8,10h-5.3L30.6,9.2z" data-v-c70477d0${_scopeId}></path> <path fill="#646757" d="M44.3,13.9c0,0-0.3,0.3-2,0.5l0.7-3.9h1.7L45,9.2h-1.7L43.6,8h1.2L45,6.7c0.2,0.2,0.4,0.4,0.6,0.6l0.2-1.7
				c0,0-0.7-0.7-1.6-2.6h-1.2c0,0-1.4,2.1-3,3.1l-0.3,1.8c0,0,0.5-0.2,1.1-0.6L40.8,8h1.1l-0.2,1.3h-2.1l-0.3,1.3h2.1l-0.8,4.2
				c-0.6,0.1-1.3,0.1-2.2,0.2L38,16.6c0,0,5.4-0.7,6.1-1.3L44.3,13.9z M41.7,6.6c0.5-0.5,1.1-1.1,1.7-1.8c0,0-0.1,0.4,1.4,1.8H41.7z" data-v-c70477d0${_scopeId}></path> <polygon fill="#646757" points="40.4,11.3 39.2,11.3 39,14.2 40.2,14.2 	" data-v-c70477d0${_scopeId}></polygon> <path fill="#646757" d="M43.8,13.7c0.2,0,0.9-2.4,0.9-2.4h-1.2l-0.8,2.4H43.8z" data-v-c70477d0${_scopeId}></path></g> <g data-v-c70477d0${_scopeId}><path fill="#D7063B" d="M4.3,14.3C2.7,10.3,5.5,6.4,8.7,4c1.4-1,3-1.9,4.7-1.4c0.5,0.1,0.8,0.5,0.9,0.9c0.4,2.8-2,4.8-4,6.4
				c-1.1,1-2.4,1.7-3.8,2.2c2.3-0.1,4.4-1,6.3-2.3c2.4-1.7,4.8-4.5,3.7-7.5c-0.4-0.9-1-1.6-1.9-2c-1.4-0.5-2.9-0.3-4.4,0.1
				C7.6,1.2,5.5,2.8,3.6,4.8c-2.8,3-4.8,7.5-2.8,11.5c0.5,1,1.3,1.6,2.2,2.1c1.4,0.7,2.9,0.8,4.5,0.5c3.3-0.6,6.3-2.3,8.6-4.7
				c-2.3,1.5-4.9,2.7-7.7,2.7C6.6,16.9,4.9,15.9,4.3,14.3z" data-v-c70477d0${_scopeId}></path> <path fill="#D7063B" d="M21.2,9.7C20.8,9,20,8.4,19.1,8.4c-1.6-0.2-3,1.2-2.9,2.8c0.1,1.2,1,2.1,2.1,2.4c1.3,0.3,2.7-0.5,3.1-1.8
				C21.6,11.1,21.6,10.4,21.2,9.7z" data-v-c70477d0${_scopeId}></path></g></symbol> <symbol id="icon_shop" viewBox="0 0 28.4 27.3" data-v-c70477d0${_scopeId}><g data-v-c70477d0${_scopeId}><path d="M4.2,20.9v-8.4h18.2v1c0.8,0.1,1.6,0.3,2.3,0.7v-4H1.9v15.3h14.8c-1.2-1.2-2-2.8-2.1-4.6H4.2z" data-v-c70477d0${_scopeId}></path> <path d="M28,25.5l-2.2-2.2c0,0,0,0-0.1,0c0.6-0.8,0.9-1.8,0.9-2.8c0-2.8-2.3-5-5-5c-2.8,0-5,2.3-5,5c0,2.8,2.3,5,5,5
				c1,0,1.9-0.3,2.6-0.8c0,0,0,0.1,0.1,0.1l2.2,2.2c0.4,0.4,1.1,0.4,1.5,0C28.4,26.6,28.4,25.9,28,25.5z M21.6,24.1
				c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6C25.3,22.4,23.7,24.1,21.6,24.1z" data-v-c70477d0${_scopeId}></path> <path d="M4.2,6.8V5.5L7.6,0H5.4L0,5.5v1.3c0,1.2,0.9,2.1,2.1,2.1S4.2,7.9,4.2,6.8z" data-v-c70477d0${_scopeId}></path> <path d="M5.6,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L11.1,0H9L5.6,5.5V6.8z" data-v-c70477d0${_scopeId}></path> <path d="M11.1,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L14.5,0h-2.2l-1.2,5.5V6.8z" data-v-c70477d0${_scopeId}></path> <path d="M22.5,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L21.3,0h-2.2l3.3,5.5V6.8z" data-v-c70477d0${_scopeId}></path> <path d="M16.9,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L17.7,0h-2.2l1.3,5.5V6.8z" data-v-c70477d0${_scopeId}></path></g></symbol> <symbol id="icon_location" viewBox="0 0 14.4 21" data-v-c70477d0${_scopeId}><path d="M7.2,0C4.3,0,0,1.3,0,6.6C0,9.2,5.8,18.4,7.2,21c1.4-2.6,7.2-11.8,7.2-14.4C14.4,1.3,10.1,0,7.2,0 M7.2,8.9
			c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3s2.3,1,2.3,2.3C9.5,7.8,8.5,8.9,7.2,8.9" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_area" viewBox="0 0 28.4 28.4" data-v-c70477d0${_scopeId}><g data-v-c70477d0${_scopeId}><polygon points="0,23.1 8.9,26.6 8.9,5.2 0,1.7" data-v-c70477d0${_scopeId}></polygon> <polygon points="19.4,1.7 19.4,23.1 28.3,26.6 28.3,5.2" data-v-c70477d0${_scopeId}></polygon> <polygon points="10.7,26.6 17.7,23.1 17.7,1.7 10.7,5.2" data-v-c70477d0${_scopeId}></polygon></g></symbol> <symbol id="icon_chirashi" viewBox="0 0 28.4 28.4" data-v-c70477d0${_scopeId}><path d="M27,11.5h-2.8L19,5.2c0-0.3,0-0.5,0-0.7c0-1.1-0.8-1.9-1.8-1.9s-1.9,0.8-1.9,1.9s0.8,1.9,1.9,1.9c0.1,0,0.3,0,0.3,0l4.2,5.2
			h-14l4.2-5.2c0.1,0,0.1,0,0.3,0c1.1,0,1.9-0.8,1.9-1.9c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.8-1.9,1.9c0,0.3,0,0.5,0.1,0.7l-5.2,6.4
			H1.4c-0.7,0-1.4,0.3-1.4,0.9c0,0.5,0.5,0.9,1.4,0.9H27c0.7,0,1.4-0.3,1.4-0.9S27.7,11.5,27,11.5" data-v-c70477d0${_scopeId}></path> <path d="M25.4,15.1H2.8c-0.7,0-1.2,0.5-1.2,1.4l1.2,8.3c0.1,0.7,0.8,1.1,1.5,1.1h19.3c0.7,0,1.5-0.4,1.5-1.1l1.2-8.4
			C26.6,15.5,26.2,15.1,25.4,15.1 M6.9,23.1C6.9,23.6,6.5,24,6,24S5,23.6,5,23.1v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z
			 M12.2,23.1c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9V23.1z M17.6,23.1
			c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z M22.9,23.1c0,0.5-0.4,0.9-0.9,0.9
			c-0.5,0-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_service" viewBox="0 0 20.5 21" data-v-c70477d0${_scopeId}><path d="M20,16c-0.6-1-2.7-1.6-4.7-2.4c-2-0.8-2.5-1.1-2.5-1.1l0-2c0,0,0.8-0.6,1-2.4c0.5,0.1,1-0.7,1-1.2c0-0.4-0.1-1.6-0.7-1.5
			c0.1-0.9,0.2-1.7,0.2-2.1C14.2,1.7,12.6,0,10.2,0S6.3,1.7,6.1,3.2c0,0.4,0,1.2,0.2,2.1C5.7,5.3,5.6,6.5,5.7,6.9c0,0.4,0.5,1.3,1,1.2
			c0.2,1.8,1,2.4,1,2.4l0,2c0,0-0.5,0.3-2.5,1.1C3.1,14.4,1,15,0.4,16C-0.1,16.8,0,21,0,21h10.2h10.2C20.4,21,20.6,16.8,20,16
			 M16.5,18.3h-5.3V17h5.3V18.3z" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_supermarket" viewBox="0 0 20.5 20.4" data-v-c70477d0${_scopeId}><path d="M18.7,13.2l1.8-8.6L3.8,2.5L2.5,1.6c0-0.1,0.1-0.2,0.1-0.3C2.6,0.6,2,0,1.3,0C0.6,0,0,0.6,0,1.3C0,2,0.6,2.6,1.3,2.6
			c0.1,0,0.2,0,0.3-0.1l1.6,1l2.6,10.2l0.8,0L5.8,16c0,0-0.1,0-0.1,0c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2c0.9,0,1.7-0.5,2-1.3
			h6.9c0.3,0.8,1.1,1.3,2,1.3c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1c-1,0-1.8,0.7-2.1,1.6H7.8c-0.1-0.5-0.4-1-0.8-1.3l0.9-2.7
			L18.7,13.2z M10,12.1c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S10.4,12.1,10,12.1 M12.6,12.1
			c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S13,12.1,12.6,12.1 M15.2,12.1c-0.4,0-0.8-0.4-0.8-0.8
			s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S15.7,12.1,15.2,12.1 M17.9,5.3c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8
			c-0.4,0-0.8-0.4-0.8-0.8C17.1,5.6,17.4,5.3,17.9,5.3 M17.3,8.7c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8
			C17,7.9,17.3,8.2,17.3,8.7 M15.2,5.3C15.7,5.3,16,5.6,16,6c0,0.4-0.4,0.8-0.8,0.8S14.4,6.5,14.4,6C14.4,5.6,14.8,5.3,15.2,5.3
			 M14.7,8.7c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C14.4,7.9,14.7,8.2,14.7,8.7 M12.6,5.3
			c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8C11.8,5.6,12.2,5.3,12.6,5.3 M12.1,8.7c0,0.4-0.4,0.8-0.8,0.8
			c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C11.7,7.9,12.1,8.2,12.1,8.7 M10,5.3c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8
			C9.5,6.8,9.2,6.5,9.2,6C9.2,5.6,9.5,5.3,10,5.3 M9.4,8.7c0,0.4-0.4,0.8-0.8,0.8S7.9,9.1,7.9,8.7c0-0.4,0.4-0.8,0.8-0.8
			S9.4,8.2,9.4,8.7 M6.6,6c0-0.4,0.4-0.8,0.8-0.8S8.1,5.6,8.1,6c0,0.4-0.4,0.8-0.8,0.8S6.6,6.5,6.6,6" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_company" viewBox="0 0 28.4 28.4" data-v-c70477d0${_scopeId}><path d="M24.3,4.1c-5.5-5.5-14.5-5.5-20.2,0c-5.5,5.6-5.5,14.5,0,20.2c5.5,5.5,14.5,5.5,20,0C29.8,18.8,29.8,9.7,24.3,4.1 M14,2.4
			c1.6,0,2.7,1.3,2.7,2.7c0,1.6-1.3,2.7-2.7,2.7c-1.6,0.1-2.7-1.1-2.7-2.5C11.3,3.7,12.4,2.4,14,2.4 M18.3,22.4c0,0.6-0.3,0.8-0.8,0.8
			h-7.1c-0.6,0-0.8-0.3-0.8-0.8v-1.8c0-0.6,0.3-0.8,0.8-0.8h1.3v-7.5h-1.3c-0.6,0-0.8-0.3-0.8-0.8V9.6c0-0.6,0.3-0.8,0.8-0.8h4.9
			c0.6,0,0.8,0.3,0.8,0.8v10.2h1.3c0.6,0,0.8,0.3,0.8,0.8V22.4z" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_recruit" viewBox="0 0 20.5 19.3" data-v-c70477d0${_scopeId}><path d="M4,19.3c-0.8,0-1.6-0.4-2.3-1.1l-0.1-0.1c-0.8-0.8-3-3.9,0-7.1c1.5-1.6,3.6-3.7,5.9-5.9c1.2-1.2,2.4-2.4,3.7-3.7
			c2.2-2.2,3.9-1.7,6.4,0.7c3,2.9,3.6,5.7,2.3,7.2c-1.7,2-8.3,8.5-8.5,8.8c-0.4,0.4-1,0.4-1.3,0c-0.4-0.4-0.4-1,0-1.3
			c0.1-0.1,6.8-6.8,8.4-8.7c0.4-0.4,0.4-2.1-2.1-4.6c-1.5-1.4-1.9-2.6-3.8-0.7C11.2,4,9.9,5.2,8.7,6.4c-2.2,2.2-4.3,4.3-5.8,5.9
			c-1.8,1.9-0.9,3.7-0.1,4.5L3,16.9c0.7,0.7,1.3,0.9,2.3-0.1c0.3-0.3,0.9-0.8,1.6-1.6c2-2,5.8-5.6,6.6-6.6c0.2-0.3,0.6-1,0.3-1.3
			c-0.5-0.4-1.3,0.4-1.6,0.7C9.4,10.7,6,14,5.9,14.1c-0.4,0.4-1,0.3-1.3,0c-0.4-0.4-0.3-1,0-1.3c0,0,3.5-3.3,6.1-6.1
			c1.7-1.8,3.3-1.6,4.2-0.8c1.1,1,0.8,2.8,0,3.9c-0.8,1-3.7,3.9-6.7,6.8c-0.7,0.7-1.3,1.3-1.6,1.5C5.7,18.9,4.8,19.3,4,19.3" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_mailorder" viewBox="0 0 21 21" data-v-c70477d0${_scopeId}><path d="M11.8,15.8h6.6v2.6h-6.6V15.8z M3.7,1.3h5.5v3.9H2L3.7,1.3z M11.8,1.3h5.3h0.3L19,5.3h-7.2V1.3z M2.8,0L0,6.6V21h21V6.6
			L18.2,0H2.8z" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_recipe" viewBox="0 0 27 32" data-v-c70477d0${_scopeId}><path d="M7,0C3.69,0,1,3.13,1,7c0,3.31,2,6.08,4.62,6.81L4.62,30A1.86,1.86,0,0,0,6.5,32h1a1.86,1.86,0,0,0,1.88-2l-1-16.19C11,13.08,13,10.31,13,7c0-3.87-2.69-7-6-7ZM27.17,0,25.5,10H24.25L23.42,0h-.83l-.83,10H20.5L18.83,0H18V13a1,1,0,0,0,1,1h2.6l-1,16a1.86,1.86,0,0,0,1.88,2h1a1.86,1.86,0,0,0,1.88-2l-1-16H27a1,1,0,0,0,1-1V0h-.83Z" transform="translate(-1)" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_arrow03" viewBox="0 0 595.3 841.9" data-v-c70477d0${_scopeId}><g data-v-c70477d0${_scopeId}><path fill="#FFFFFF" d="M297.6,695.5C144.6,695.5,21,571.9,21,418.8c0-155.1,121.6-274.6,276.7-274.6
				c153,0,276.7,123.7,276.7,276.7C572.2,571.9,448.6,695.5,297.6,695.5z" data-v-c70477d0${_scopeId}></path> <path fill="#666666" d="M297.6,165.2c140.4,0,255.7,115.3,255.7,255.7S438.1,674.6,297.6,674.6S41.9,559.3,41.9,418.8
				C41.9,276.3,153,165.2,297.6,165.2 M297.6,123.3C132.1,123.3,0,253.3,0,418.8s134.1,297.6,297.6,297.6s297.6-130,297.6-295.5
				C593.2,255.4,459,123.3,297.6,123.3L297.6,123.3z" data-v-c70477d0${_scopeId}></path> <polygon fill="#666666" points="473.7,420.9 431.8,379 431.8,379 343.8,291 259.9,291 360.5,391.6 142.5,391.6 142.5,450.3
				360.5,450.3 259.9,548.8 343.8,548.8 431.8,462.9 431.8,462.9" data-v-c70477d0${_scopeId}></polygon></g></symbol> <symbol id="icon_arrow02" viewBox="0 0 595.3 841.9" data-v-c70477d0${_scopeId}><path d="M480,385.3L197,138c-21-18.9-56.6-18.9-81.7,0c-21,18.9-21,50.3,0,69.2l245.2,211.7L115.3,630.6
			c-21,18.9-21,50.3,0,69.2c12.6,8.4,25.2,14.7,39.8,14.7c14.7,0,29.3-6.3,39.8-14.7l283-247.3c12.6-8.4,18.9-21,18.9-35.6
			C494.7,406.3,488.4,395.8,480,385.3" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_baloon" viewBox="0 0 28.35 28.35" data-v-c70477d0${_scopeId}><path d="M28.349,11.339C28.349,5.077,22.003,0,14.175,0C6.348,0,0.002,5.077,0.002,11.339
			c0,5.916,5.664,10.766,12.888,11.287c0.394,0.544,2.454,3.098,5.453,1.574c-0.55-0.179-1.175-0.884-1.737-1.701
			C23.273,21.575,28.349,16.937,28.349,11.339z" data-v-c70477d0${_scopeId}></path></symbol> <symbol id="icon_arrow01" viewBox="0 0 595.3 841.9" data-v-c70477d0${_scopeId}><path fill="#C7273B" d="M480,385.3L197,138c-21-18.9-56.6-18.9-81.7,0c-21,18.9-21,50.3,0,69.2l245.2,211.7L115.3,630.6
			c-21,18.9-21,50.3,0,69.2c12.6,8.4,25.2,14.7,39.8,14.7c14.7,0,29.3-6.3,39.8-14.7l283-247.3c12.6-8.4,18.9-21,18.9-35.6
			C494.7,406.3,488.4,395.8,480,385.3" data-v-c70477d0${_scopeId}></path></symbol></svg></div>`);
					} else return [createVNode("div", { class: "wrap" }, [
						createVNode("header", {
							id: "pageHeader",
							class: ["header-page", { "drawer-open": isVisibleNavigation.value }]
						}, [
							createVNode("div", { class: "head-inner" }, [
								createVNode("h1", { id: "headLogo" }, [createVNode("a", { href: "/" }, [(openBlock(), createBlock("svg", { class: "logo" }, [createVNode("use", { "xlink:href": "#icon_logo" })]))])]),
								createTextVNode(),
								createVNode("div", { class: "head-contact" }, [
									createVNode("div", { class: "about-us" }, [createVNode("a", { href: "/company/" }, "会社情報")]),
									createTextVNode(),
									createVNode("div", { class: "root-page" }, [createVNode("a", {
										href: "http://www.entetsu.co.jp/",
										target: "_blank"
									}, [createVNode("img", {
										src: logo_entetsu_group_default,
										alt: "遠鉄グループ",
										width: "102",
										height: "38"
									})])])
								])
							]),
							createTextVNode(),
							createVNode("nav", {
								id: "grobalNav",
								role: "navigation"
							}, [createVNode("ul", null, [(openBlock(true), createBlock(Fragment, null, renderList(navDes.value, (nav) => {
								return openBlock(), createBlock("li", {
									key: nav.to,
									class: nav.name
								}, [createVNode("a", {
									href: nav.to,
									class: { active: isCurrentRoute(nav.to) },
									target: nav.externalLink ? "_blank" : "_self"
								}, toDisplayString(nav.label), 11, ["href", "target"])], 2);
							}), 128))])]),
							createTextVNode(),
							createVNode("nav", {
								id: "mobileNav",
								role: "navigation"
							}, [createVNode("ul", null, [(openBlock(), createBlock(Fragment, null, renderList(navMobile, (nav) => {
								return createVNode("li", {
									key: nav.to,
									class: nav.name
								}, [
									createVNode("div", { class: "img-nav" }),
									createTextVNode(),
									createVNode("a", {
										href: nav.to,
										class: { active: isCurrentRoute(nav.to) },
										target: nav.externalLink ? "_blank" : "_self"
									}, toDisplayString(nav.label), 11, ["href", "target"])
								], 2);
							}), 64))])]),
							createTextVNode(),
							createVNode("button", {
								type: "button",
								class: ["drawer-hamburger", { open: isVisibleNavigation.value }],
								onClick: ($event) => isVisibleNavigation.value = !isVisibleNavigation.value
							}, [isVisibleNavigation.value ? (openBlock(), createBlock("img", {
								key: 0,
								src: icon_menu_close_default,
								alt: "MENU",
								class: "close"
							})) : (openBlock(), createBlock("img", {
								key: 1,
								src: icon_menu_default_default,
								alt: "MENU",
								class: "open"
							}))], 10, ["onClick"]),
							createTextVNode(),
							createVNode(_component_VxNavigationDrawer, {
								modelValue: isVisibleNavigation.value,
								"onUpdate:modelValue": ($event) => isVisibleNavigation.value = $event,
								fixed: "",
								temporary: "",
								right: "",
								width: "400px",
								class: "drawer-navlist"
							}, {
								default: withCtx(() => [createVNode("div", { class: "wrap-navMobile" }, [
									createVNode("p", { class: "navTitle" }, "MENU"),
									createTextVNode(),
									createVNode("ul", { class: "nav-list" }, [(openBlock(), createBlock(Fragment, null, renderList(navList, (nav) => {
										return createVNode("li", { key: nav.to }, [createVNode("a", {
											href: nav.to,
											class: {
												active: isCurrentRoute(nav.to),
												"nav-child": nav.navMobile
											}
										}, [(openBlock(), createBlock("svg", { class: "icon" }, [createVNode("use", { "xlink:href": nav.svgId }, null, 8, ["xlink:href"])])), createTextVNode(" " + toDisplayString(nav.labelMobile ? nav.labelMobile : nav.label), 1)], 10, ["href"])]);
									}), 64))]),
									createTextVNode(),
									createVNode("div", { class: "subNavi" }, [createVNode("ul", null, [
										createVNode("li", null, [createVNode("a", { href: "/info/" }, "遠鉄ストアからのお知らせ")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/event/" }, "キャンペーン・イベント情報")]),
										createTextVNode(),
										createVNode("li", { class: "company" }, [createVNode("a", { href: "/news/" }, "企業情報・ニュースリリース")])
									])])
								])]),
								_: 1
							}, 8, ["modelValue", "onUpdate:modelValue"])
						], 2),
						createTextVNode(),
						!isSearchPage.value ? (openBlock(), createBlock(_component_SmartSearchBar, {
							key: 0,
							compact: !isHomePage.value
						}, null, 8, ["compact"])) : createCommentVNode("", true),
						createTextVNode(),
						renderSlot(_ctx.$slots, "default", {}, void 0, true),
						createTextVNode(),
						createVNode("footer", { class: "footer-page" }, [
							createVNode("div", {
								id: "footBnrList",
								class: "d-none-des"
							}, [createVNode("ul", { class: "bnr mobile-box" }, [
								createVNode("li", { class: "recruit" }, [createVNode("a", {
									href: "https://entstore-recruit.net/jobfind-smartphone/",
									target: "_blank"
								}, [createVNode("p", null, [createTextVNode("遠鉄ストアで一緒に働きませんか？"), createVNode("span", null, "アルバイト・パート・正社員積極採用中！")])])]),
								createTextVNode(),
								createVNode("li", { class: "pointcard" }, [createVNode("a", {
									href: "https://entetsucard.entetsu.co.jp/",
									target: "_blank"
								}, [createVNode("p", null, [
									createTextVNode("えんてつポイントの"),
									createVNode("br"),
									createTextVNode("\n                  貯め方・使い方"),
									createVNode("span", null, "1P=1円で使えたり、ギフトをもらったり")
								])])]),
								createTextVNode(),
								createVNode("li", { class: "kidsclub" }, [createVNode("a", {
									href: "https://entetsucard.entetsu.co.jp/kids/",
									target: "_blank"
								}, [createVNode("p", null, [createVNode("img", {
									src: ban_pointkids_default,
									alt: "えんてつカードキッズクラブスタート"
								})])])]),
								createTextVNode(),
								createVNode("li", { class: "text-center" }, [createVNode("a", {
									target: "_blank",
									href: "https://tokubai.co.jp/offices/426/shops?from=widget_225x80&office_id=426"
								}, [createVNode("img", {
									alt: "遠鉄ストアのチラシ・特売情報",
									src: "https://assets.tokubai.co.jp/assets/themes/bargain_shops/office_widgets/banner_225x80-47b2efe97bcf52aee2bfbb25aa0bf6e2ead0d1d184052c84ddad536bf8ffba7c.png"
								})])])
							])]),
							createTextVNode(),
							createVNode("section", { class: "footerInfo d-none-mobile" }, [
								createVNode("div", { class: "footer-banner" }, [createVNode("img", {
									src: ban_smp_default,
									alt: "スマホサイトもご利用ください"
								})]),
								createTextVNode(),
								createVNode("div", { class: "banner-list" }, [
									createVNode("a", {
										href: "https://entstore-recruit.net/jobfind-pc/",
										target: "_blank"
									}, [createVNode("img", {
										src: ban_recruit_default,
										alt: "遠鉄ストアで一緒に働きませんか？"
									})]),
									createTextVNode(),
									createVNode("a", {
										href: "https://entetsucard.entetsu.co.jp/kids",
										target: "_blank"
									}, [createVNode("img", {
										src: ban_pointkids_default,
										alt: "遠鉄ストアで一緒に働きませんか？"
									})]),
									createTextVNode(),
									createVNode("a", {
										href: "https://entetsucard.entetsu.co.jp/",
										target: "_blank"
									}, [createVNode("img", {
										src: ban_point_default,
										alt: "遠鉄ストアで一緒に働きませんか？"
									})]),
									createTextVNode(),
									createVNode("a", {
										href: "https://tokubai.co.jp/offices/426/shops?from=widget_225x80&office_id=426",
										target: "_blank",
										class: "text-center link-custom"
									}, [createVNode("img", {
										src: banner_footer_default,
										alt: "遠鉄ストアで一緒に働きませんか？"
									})])
								])
							]),
							createTextVNode(),
							createVNode("section", { id: "siteInfo" }, [
								createVNode("section", {
									class: "toLink",
									onClick: toTop
								}, [createVNode("div", { class: "to-top" }, [createVNode("a", null, "ページの上へ戻る")])]),
								createTextVNode(),
								createVNode("div", { class: "footerDefoltNav d-none-des" }, [
									createVNode("div", { class: "defoltBnr" }, [createVNode("ul", null, [
										createVNode("li", null, [createVNode("a", {
											href: "https://cards.entetsu.co.jp/card/",
											target: "_blank"
										}, [createVNode("img", {
											src: bnr_footPointcard_default,
											alt: "えんてつポイントがたまる！使える！毎日お得なえんてつカード"
										})])]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", {
											href: "https://shop.entstore.co.jp/f/ec",
											target: "_blank"
										}, [createVNode("img", {
											src: bnr_footMailorder_default,
											alt: "遠鉄ストアネット通販"
										})])]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/traceability/" }, [createVNode("img", {
											src: bnr_footBeef_default,
											alt: "牛肉安全・安心システム"
										})])])
									])]),
									createTextVNode(),
									createVNode("ul", { class: "footTxtNav" }, [
										createVNode("li", null, [createVNode("a", { href: "/sitemap/" }, "サイトマップ")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/privacy/" }, "個人情報保護方針について")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", {
											href: "/pdf/マルチステークホルダー方針_遠鉄ストア.pdf",
											target: "_blank"
										}, "マルチステークスホルダー方針")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/faq/" }, "よくあるご質問")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/contact/" }, "お客様の声をお寄せください")])
									]),
									createTextVNode(),
									createVNode("p", { id: "copyright" }, [createVNode("small", null, "Copyright © Entetsu Store All Rights reserved.")])
								]),
								createTextVNode(),
								createVNode("p", {
									id: "footLogo",
									class: "d-none-mobile"
								}, [createVNode("a", { href: "/" })]),
								createTextVNode(),
								createVNode("dl", { class: "d-none-mobile" }, [
									createVNode("dt", null, [createVNode("a", { href: "/" }, "遠鉄ストアトップ")]),
									createTextVNode(),
									createVNode("dt", null, "店舗情報"),
									createTextVNode(),
									createVNode("dd", null, [createVNode("a", { href: "/shop/" }, "店舗一覧")]),
									createTextVNode(),
									createVNode("dt", null, "チラシ情報"),
									createTextVNode(),
									createVNode("dd", null, [createVNode("a", { href: "/chirashi/" }, "チラシ情報一覧")]),
									createTextVNode(),
									createVNode("dt", null, "お知らせ"),
									createTextVNode(),
									createVNode("dd", null, [createVNode("ul", null, [
										createVNode("li", null, [createVNode("a", { href: "/info/" }, "店舗からのお知らせ")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/event/" }, "イベント・キャンペーン情報")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/news/" }, "ニュースリリース")])
									])]),
									createTextVNode(),
									createVNode("dt", null, "サービス"),
									createTextVNode(),
									createVNode("dd", null, [createVNode("ul", null, [
										createVNode("li", null, [createVNode("a", { href: "/service/cooking/" }, "調理サービス")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/service/item/" }, "商品サービス")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/service/counter/" }, "サービスカウンター取り扱いサービス")])
									])]),
									createTextVNode(),
									createVNode("dt", null, "会社情報"),
									createTextVNode(),
									createVNode("dd", null, [createVNode("ul", null, [
										createVNode("li", null, [createVNode("a", { href: "/company/profile/" }, "会社概要・沿革")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/company/message/" }, "トップメッセージ")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/company/green/" }, "環境への取り組み")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/company/social/" }, "社会活動への取り組み")])
									])]),
									createTextVNode(),
									createVNode("dt", null, "採用情報"),
									createTextVNode(),
									createVNode("dd", null, [createVNode("ul", null, [
										createVNode("li", null, [createVNode("a", { href: "/recruit/#recruit01" }, "遠鉄ストアについて")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/recruit/#recruit02" }, "遠鉄ストアのお仕事")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/recruit/#recruit03" }, "オンライン応募")])
									])]),
									createTextVNode(),
									createVNode("dt", null, "このサイトについて"),
									createTextVNode(),
									createVNode("dd", null, [createVNode("ul", null, [
										createVNode("li", null, [createVNode("a", { href: "/sitemap/" }, "サイトマップ")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/privacy/" }, "個人情報保護方針")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", {
											href: "/pdf/マルチステークホルダー方針_遠鉄ストア.pdf",
											target: "_blank"
										}, "マルチステークスホルダー方針")]),
										createTextVNode(),
										createVNode("li", null, [createVNode("a", { href: "/faq/" }, "よくあるご質問")])
									])]),
									createTextVNode(),
									createVNode("dt", null, "お問い合わせ"),
									createTextVNode(),
									createVNode("dd", null, [createVNode("a", { href: "/contact/" }, "お客様の声をお寄せください")]),
									createTextVNode(),
									createVNode("dt", { class: "wider" }, [createVNode("a", { href: "https://shop.entstore.co.jp/f/ec" }, "遠鉄ストアネット通販")])
								]),
								createTextVNode(),
								createVNode("p", {
									id: "copyright",
									class: "d-none-mobile"
								}, "Copyright © 2014 Entetsu Store All Rights Reserved.")
							]),
							createTextVNode(),
							createVNode("div", { class: "slick-footer d-none-mobile" }, [createVNode("div", { class: ["footer-slider", [{ "footer-slider-homepage": isHomePage.value }]] }, [createVNode(_component_ClientOnly, null, {
								default: withCtx(() => [createVNode(_component_VxSlick, { options: slickOptions }, {
									default: withCtx(() => [
										createVNode("a", { href: "http://wellseason.jp/" }, [createVNode("img", {
											src: ban_wellseason_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "http://www.entetsu.net/" }, [createVNode("img", {
											src: ban_insurance_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "http://www.entetsusekiyu.co.jp/" }, [createVNode("img", {
											src: ban_sekiyu_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "https://www.e-trip.co.jp/" }, [createVNode("img", {
											src: ban_travel_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "http://www.matsukiyo.co.jp/" }, [createVNode("img", {
											src: ban_matsumotokiyoshi_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "https://www.chateraise.co.jp/ec/default.aspx" }, [createVNode("img", {
											src: ban_chateraise_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "http://bus.entetsu.co.jp/" }, [createVNode("img", {
											src: ban_bus_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "/traceability" }, [createVNode("img", {
											src: ban_beef_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "https://cards.entetsu.co.jp/card/" }, [createVNode("img", {
											src: ban_card_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "http://www.cgcjapan.co.jp/" }, [createVNode("img", {
											src: ban_cgc_default,
											alt: ""
										})]),
										createTextVNode(),
										createVNode("a", { href: "http://concorde.co.jp/" }, [createVNode("img", {
											src: ban_concorde_default,
											alt: ""
										})])
									]),
									_: 1
								})]),
								_: 1
							})], 2)])
						]),
						createTextVNode(),
						createVNode(_component_ChatWidget),
						createTextVNode(),
						createVNode(_component_CartBar),
						createTextVNode(),
						(openBlock(), createBlock("svg", { class: "svgDefolt" }, [
							createVNode("symbol", {
								id: "icon_home",
								viewBox: "0 0 28.4 28.4"
							}, [createVNode("path", { d: "M22.9,8V1.5h-3.6v3.8l-5.2-4.1L0,11.9l2.7,2.9l2-1.1v13.4h20.1V13.8l1.5,1.1l2.1-2.9L22.9,8z M17.5,25.3h-7.4v-9.2h7.4V25.3z" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_logo",
								viewBox: "0 0 89.8 19.1"
							}, [
								createVNode("g", null, [
									createVNode("polygon", {
										fill: "#646757",
										points: "29.2,6.1 29,7.5 38.2,7.5 38.4,6.1 34.7,6.1 34.8,5.3 38.1,5.3 38.4,4 35.1,4 35.3,3 33.4,3\n				33.2,4 29.9,4 29.7,5.3 33,5.3 32.8,6.1 	"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#646757",
										d: "M52.1,10.5l0.3-1.3h-2.6l0.5-2.4h2.3l0.3-1.3h-2.3L50.9,3h-1.7l-0.5,2.4h-0.6c0.2-0.5,0.3-1.2,0.3-1.9h-1.4\n				c0,0-0.3,3-1.1,3.2l-0.4,1.9c0,0,1.2-0.2,2.1-1.9h0.9l-0.5,2.4h-2.6l-0.3,1.3h2.3c-0.1,1-1.7,3.1-3.1,4l-0.4,1.9\n				c0,0,1.8-0.3,4.2-3.9c0,0,0.9,3.1,2.6,3.9l0.4-1.8c0,0-1.8-2-1.6-4.1H52.1z"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#646757",
										d: "M54.7,3.7l-0.4,1.9h7.2c-0.1,0.8-2.3,7.6-9.1,8.9l-0.4,1.9c0,0,4.3-0.2,8-3.8c1.7,1,3.6,3.9,3.6,3.9\n				l0.6-2.7c-1.3-1.7-2.2-2.4-2.8-2.8c1.4-1.8,2.6-4.2,3.3-7.3H54.7z"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#646757",
										d: "M77.6,9c-3-1.5-6.1-2-7.3-2.1L71,3h-2.4L66,16.3h2.5l1.4-7.4c3.6,0.3,7.3,2.3,7.3,2.3L77.6,9z"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#646757",
										d: "M89.8,3.6L89.8,3.6l-11.5,0l-0.4,1.9h9c0,1.3-1,3.8-3.8,4c0,0,0,0-0.1,0C83.3,8.6,83.3,8,83.3,8h-2.2\n				c-1.1,6.1-4,6.1-4,6.1l-0.4,2.2c3.3-0.3,4.9-2.8,5.8-5C86.8,11.2,89.3,8.2,89.8,3.6L89.8,3.6z"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#646757",
										d: "M29.1,4.3c0,0-2-0.9-2.7-0.9L26.1,5c0,0,1.5,0.3,2.6,1L29.1,4.3z"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#646757",
										d: "M28.7,11.1h1.8l-2.1,1.5l-0.3,1.6l2.8-1.8l-0.5,2.7h-0.9c0,0-2.4,0-2-1.8l0.9-5.1h-2.9l-0.3,1.5h1.2\n				l-0.8,4.2l-1.4,0.9l-0.4,1.9l2.2-1.2h0.3c0.2,0.7,2,1.1,2.5,1.1h7.7l0.3-1.4h-4.5l0.5-2.7c1.1,1.7,3.7,2.6,3.7,2.6l0.3-1.5\n				c-0.5-0.2-0.9-0.4-1.3-0.6c1.5-0.9,1.4-1.5,1.4-1.5h-1.6c-0.3,0.4-0.6,0.7-0.9,0.8c-0.6-0.5-0.7-0.8-0.8-1h3.5l0.6-2.9h-8.4\n				L28.7,11.1z M30.6,9.2H36L35.8,10h-5.3L30.6,9.2z"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#646757",
										d: "M44.3,13.9c0,0-0.3,0.3-2,0.5l0.7-3.9h1.7L45,9.2h-1.7L43.6,8h1.2L45,6.7c0.2,0.2,0.4,0.4,0.6,0.6l0.2-1.7\n				c0,0-0.7-0.7-1.6-2.6h-1.2c0,0-1.4,2.1-3,3.1l-0.3,1.8c0,0,0.5-0.2,1.1-0.6L40.8,8h1.1l-0.2,1.3h-2.1l-0.3,1.3h2.1l-0.8,4.2\n				c-0.6,0.1-1.3,0.1-2.2,0.2L38,16.6c0,0,5.4-0.7,6.1-1.3L44.3,13.9z M41.7,6.6c0.5-0.5,1.1-1.1,1.7-1.8c0,0-0.1,0.4,1.4,1.8H41.7z"
									}),
									createTextVNode(),
									createVNode("polygon", {
										fill: "#646757",
										points: "40.4,11.3 39.2,11.3 39,14.2 40.2,14.2 	"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#646757",
										d: "M43.8,13.7c0.2,0,0.9-2.4,0.9-2.4h-1.2l-0.8,2.4H43.8z"
									})
								]),
								createTextVNode(),
								createVNode("g", null, [
									createVNode("path", {
										fill: "#D7063B",
										d: "M4.3,14.3C2.7,10.3,5.5,6.4,8.7,4c1.4-1,3-1.9,4.7-1.4c0.5,0.1,0.8,0.5,0.9,0.9c0.4,2.8-2,4.8-4,6.4\n				c-1.1,1-2.4,1.7-3.8,2.2c2.3-0.1,4.4-1,6.3-2.3c2.4-1.7,4.8-4.5,3.7-7.5c-0.4-0.9-1-1.6-1.9-2c-1.4-0.5-2.9-0.3-4.4,0.1\n				C7.6,1.2,5.5,2.8,3.6,4.8c-2.8,3-4.8,7.5-2.8,11.5c0.5,1,1.3,1.6,2.2,2.1c1.4,0.7,2.9,0.8,4.5,0.5c3.3-0.6,6.3-2.3,8.6-4.7\n				c-2.3,1.5-4.9,2.7-7.7,2.7C6.6,16.9,4.9,15.9,4.3,14.3z"
									}),
									createTextVNode(),
									createVNode("path", {
										fill: "#D7063B",
										d: "M21.2,9.7C20.8,9,20,8.4,19.1,8.4c-1.6-0.2-3,1.2-2.9,2.8c0.1,1.2,1,2.1,2.1,2.4c1.3,0.3,2.7-0.5,3.1-1.8\n				C21.6,11.1,21.6,10.4,21.2,9.7z"
									})
								])
							]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_shop",
								viewBox: "0 0 28.4 27.3"
							}, [createVNode("g", null, [
								createVNode("path", { d: "M4.2,20.9v-8.4h18.2v1c0.8,0.1,1.6,0.3,2.3,0.7v-4H1.9v15.3h14.8c-1.2-1.2-2-2.8-2.1-4.6H4.2z" }),
								createTextVNode(),
								createVNode("path", { d: "M28,25.5l-2.2-2.2c0,0,0,0-0.1,0c0.6-0.8,0.9-1.8,0.9-2.8c0-2.8-2.3-5-5-5c-2.8,0-5,2.3-5,5c0,2.8,2.3,5,5,5\n				c1,0,1.9-0.3,2.6-0.8c0,0,0,0.1,0.1,0.1l2.2,2.2c0.4,0.4,1.1,0.4,1.5,0C28.4,26.6,28.4,25.9,28,25.5z M21.6,24.1\n				c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6C25.3,22.4,23.7,24.1,21.6,24.1z" }),
								createTextVNode(),
								createVNode("path", { d: "M4.2,6.8V5.5L7.6,0H5.4L0,5.5v1.3c0,1.2,0.9,2.1,2.1,2.1S4.2,7.9,4.2,6.8z" }),
								createTextVNode(),
								createVNode("path", { d: "M5.6,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L11.1,0H9L5.6,5.5V6.8z" }),
								createTextVNode(),
								createVNode("path", { d: "M11.1,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L14.5,0h-2.2l-1.2,5.5V6.8z" }),
								createTextVNode(),
								createVNode("path", { d: "M22.5,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L21.3,0h-2.2l3.3,5.5V6.8z" }),
								createTextVNode(),
								createVNode("path", { d: "M16.9,6.8c0,1.2,0.9,2.1,2.1,2.1s2.1-0.9,2.1-2.1V5.5L17.7,0h-2.2l1.3,5.5V6.8z" })
							])]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_location",
								viewBox: "0 0 14.4 21"
							}, [createVNode("path", { d: "M7.2,0C4.3,0,0,1.3,0,6.6C0,9.2,5.8,18.4,7.2,21c1.4-2.6,7.2-11.8,7.2-14.4C14.4,1.3,10.1,0,7.2,0 M7.2,8.9\n			c-1.3,0-2.3-1-2.3-2.3c0-1.3,1-2.3,2.3-2.3s2.3,1,2.3,2.3C9.5,7.8,8.5,8.9,7.2,8.9" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_area",
								viewBox: "0 0 28.4 28.4"
							}, [createVNode("g", null, [
								createVNode("polygon", { points: "0,23.1 8.9,26.6 8.9,5.2 0,1.7" }),
								createTextVNode(),
								createVNode("polygon", { points: "19.4,1.7 19.4,23.1 28.3,26.6 28.3,5.2" }),
								createTextVNode(),
								createVNode("polygon", { points: "10.7,26.6 17.7,23.1 17.7,1.7 10.7,5.2" })
							])]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_chirashi",
								viewBox: "0 0 28.4 28.4"
							}, [
								createVNode("path", { d: "M27,11.5h-2.8L19,5.2c0-0.3,0-0.5,0-0.7c0-1.1-0.8-1.9-1.8-1.9s-1.9,0.8-1.9,1.9s0.8,1.9,1.9,1.9c0.1,0,0.3,0,0.3,0l4.2,5.2\n			h-14l4.2-5.2c0.1,0,0.1,0,0.3,0c1.1,0,1.9-0.8,1.9-1.9c0-1.1-0.9-1.9-1.9-1.9c-1.1,0-1.9,0.8-1.9,1.9c0,0.3,0,0.5,0.1,0.7l-5.2,6.4\n			H1.4c-0.7,0-1.4,0.3-1.4,0.9c0,0.5,0.5,0.9,1.4,0.9H27c0.7,0,1.4-0.3,1.4-0.9S27.7,11.5,27,11.5" }),
								createTextVNode(),
								createVNode("path", { d: "M25.4,15.1H2.8c-0.7,0-1.2,0.5-1.2,1.4l1.2,8.3c0.1,0.7,0.8,1.1,1.5,1.1h19.3c0.7,0,1.5-0.4,1.5-1.1l1.2-8.4\n			C26.6,15.5,26.2,15.1,25.4,15.1 M6.9,23.1C6.9,23.6,6.5,24,6,24S5,23.6,5,23.1v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z\n			 M12.2,23.1c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9V23.1z M17.6,23.1\n			c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z M22.9,23.1c0,0.5-0.4,0.9-0.9,0.9\n			c-0.5,0-0.9-0.4-0.9-0.9v-5.3c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9V23.1z" })
							]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_service",
								viewBox: "0 0 20.5 21"
							}, [createVNode("path", { d: "M20,16c-0.6-1-2.7-1.6-4.7-2.4c-2-0.8-2.5-1.1-2.5-1.1l0-2c0,0,0.8-0.6,1-2.4c0.5,0.1,1-0.7,1-1.2c0-0.4-0.1-1.6-0.7-1.5\n			c0.1-0.9,0.2-1.7,0.2-2.1C14.2,1.7,12.6,0,10.2,0S6.3,1.7,6.1,3.2c0,0.4,0,1.2,0.2,2.1C5.7,5.3,5.6,6.5,5.7,6.9c0,0.4,0.5,1.3,1,1.2\n			c0.2,1.8,1,2.4,1,2.4l0,2c0,0-0.5,0.3-2.5,1.1C3.1,14.4,1,15,0.4,16C-0.1,16.8,0,21,0,21h10.2h10.2C20.4,21,20.6,16.8,20,16\n			 M16.5,18.3h-5.3V17h5.3V18.3z" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_supermarket",
								viewBox: "0 0 20.5 20.4"
							}, [createVNode("path", { d: "M18.7,13.2l1.8-8.6L3.8,2.5L2.5,1.6c0-0.1,0.1-0.2,0.1-0.3C2.6,0.6,2,0,1.3,0C0.6,0,0,0.6,0,1.3C0,2,0.6,2.6,1.3,2.6\n			c0.1,0,0.2,0,0.3-0.1l1.6,1l2.6,10.2l0.8,0L5.8,16c0,0-0.1,0-0.1,0c-1.2,0-2.2,1-2.2,2.2c0,1.2,1,2.2,2.2,2.2c0.9,0,1.7-0.5,2-1.3\n			h6.9c0.3,0.8,1.1,1.3,2,1.3c1.2,0,2.1-1,2.1-2.1c0-1.2-1-2.1-2.1-2.1c-1,0-1.8,0.7-2.1,1.6H7.8c-0.1-0.5-0.4-1-0.8-1.3l0.9-2.7\n			L18.7,13.2z M10,12.1c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S10.4,12.1,10,12.1 M12.6,12.1\n			c-0.4,0-0.8-0.4-0.8-0.8s0.4-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S13,12.1,12.6,12.1 M15.2,12.1c-0.4,0-0.8-0.4-0.8-0.8\n			s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S15.7,12.1,15.2,12.1 M17.9,5.3c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8\n			c-0.4,0-0.8-0.4-0.8-0.8C17.1,5.6,17.4,5.3,17.9,5.3 M17.3,8.7c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8\n			C17,7.9,17.3,8.2,17.3,8.7 M15.2,5.3C15.7,5.3,16,5.6,16,6c0,0.4-0.4,0.8-0.8,0.8S14.4,6.5,14.4,6C14.4,5.6,14.8,5.3,15.2,5.3\n			 M14.7,8.7c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C14.4,7.9,14.7,8.2,14.7,8.7 M12.6,5.3\n			c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8c-0.4,0-0.8-0.4-0.8-0.8C11.8,5.6,12.2,5.3,12.6,5.3 M12.1,8.7c0,0.4-0.4,0.8-0.8,0.8\n			c-0.4,0-0.8-0.4-0.8-0.8c0-0.4,0.4-0.8,0.8-0.8C11.7,7.9,12.1,8.2,12.1,8.7 M10,5.3c0.4,0,0.8,0.4,0.8,0.8c0,0.4-0.4,0.8-0.8,0.8\n			C9.5,6.8,9.2,6.5,9.2,6C9.2,5.6,9.5,5.3,10,5.3 M9.4,8.7c0,0.4-0.4,0.8-0.8,0.8S7.9,9.1,7.9,8.7c0-0.4,0.4-0.8,0.8-0.8\n			S9.4,8.2,9.4,8.7 M6.6,6c0-0.4,0.4-0.8,0.8-0.8S8.1,5.6,8.1,6c0,0.4-0.4,0.8-0.8,0.8S6.6,6.5,6.6,6" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_company",
								viewBox: "0 0 28.4 28.4"
							}, [createVNode("path", { d: "M24.3,4.1c-5.5-5.5-14.5-5.5-20.2,0c-5.5,5.6-5.5,14.5,0,20.2c5.5,5.5,14.5,5.5,20,0C29.8,18.8,29.8,9.7,24.3,4.1 M14,2.4\n			c1.6,0,2.7,1.3,2.7,2.7c0,1.6-1.3,2.7-2.7,2.7c-1.6,0.1-2.7-1.1-2.7-2.5C11.3,3.7,12.4,2.4,14,2.4 M18.3,22.4c0,0.6-0.3,0.8-0.8,0.8\n			h-7.1c-0.6,0-0.8-0.3-0.8-0.8v-1.8c0-0.6,0.3-0.8,0.8-0.8h1.3v-7.5h-1.3c-0.6,0-0.8-0.3-0.8-0.8V9.6c0-0.6,0.3-0.8,0.8-0.8h4.9\n			c0.6,0,0.8,0.3,0.8,0.8v10.2h1.3c0.6,0,0.8,0.3,0.8,0.8V22.4z" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_recruit",
								viewBox: "0 0 20.5 19.3"
							}, [createVNode("path", { d: "M4,19.3c-0.8,0-1.6-0.4-2.3-1.1l-0.1-0.1c-0.8-0.8-3-3.9,0-7.1c1.5-1.6,3.6-3.7,5.9-5.9c1.2-1.2,2.4-2.4,3.7-3.7\n			c2.2-2.2,3.9-1.7,6.4,0.7c3,2.9,3.6,5.7,2.3,7.2c-1.7,2-8.3,8.5-8.5,8.8c-0.4,0.4-1,0.4-1.3,0c-0.4-0.4-0.4-1,0-1.3\n			c0.1-0.1,6.8-6.8,8.4-8.7c0.4-0.4,0.4-2.1-2.1-4.6c-1.5-1.4-1.9-2.6-3.8-0.7C11.2,4,9.9,5.2,8.7,6.4c-2.2,2.2-4.3,4.3-5.8,5.9\n			c-1.8,1.9-0.9,3.7-0.1,4.5L3,16.9c0.7,0.7,1.3,0.9,2.3-0.1c0.3-0.3,0.9-0.8,1.6-1.6c2-2,5.8-5.6,6.6-6.6c0.2-0.3,0.6-1,0.3-1.3\n			c-0.5-0.4-1.3,0.4-1.6,0.7C9.4,10.7,6,14,5.9,14.1c-0.4,0.4-1,0.3-1.3,0c-0.4-0.4-0.3-1,0-1.3c0,0,3.5-3.3,6.1-6.1\n			c1.7-1.8,3.3-1.6,4.2-0.8c1.1,1,0.8,2.8,0,3.9c-0.8,1-3.7,3.9-6.7,6.8c-0.7,0.7-1.3,1.3-1.6,1.5C5.7,18.9,4.8,19.3,4,19.3" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_mailorder",
								viewBox: "0 0 21 21"
							}, [createVNode("path", { d: "M11.8,15.8h6.6v2.6h-6.6V15.8z M3.7,1.3h5.5v3.9H2L3.7,1.3z M11.8,1.3h5.3h0.3L19,5.3h-7.2V1.3z M2.8,0L0,6.6V21h21V6.6\n			L18.2,0H2.8z" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_recipe",
								viewBox: "0 0 27 32"
							}, [createVNode("path", {
								d: "M7,0C3.69,0,1,3.13,1,7c0,3.31,2,6.08,4.62,6.81L4.62,30A1.86,1.86,0,0,0,6.5,32h1a1.86,1.86,0,0,0,1.88-2l-1-16.19C11,13.08,13,10.31,13,7c0-3.87-2.69-7-6-7ZM27.17,0,25.5,10H24.25L23.42,0h-.83l-.83,10H20.5L18.83,0H18V13a1,1,0,0,0,1,1h2.6l-1,16a1.86,1.86,0,0,0,1.88,2h1a1.86,1.86,0,0,0,1.88-2l-1-16H27a1,1,0,0,0,1-1V0h-.83Z",
								transform: "translate(-1)"
							})]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_arrow03",
								viewBox: "0 0 595.3 841.9"
							}, [createVNode("g", null, [
								createVNode("path", {
									fill: "#FFFFFF",
									d: "M297.6,695.5C144.6,695.5,21,571.9,21,418.8c0-155.1,121.6-274.6,276.7-274.6\n				c153,0,276.7,123.7,276.7,276.7C572.2,571.9,448.6,695.5,297.6,695.5z"
								}),
								createTextVNode(),
								createVNode("path", {
									fill: "#666666",
									d: "M297.6,165.2c140.4,0,255.7,115.3,255.7,255.7S438.1,674.6,297.6,674.6S41.9,559.3,41.9,418.8\n				C41.9,276.3,153,165.2,297.6,165.2 M297.6,123.3C132.1,123.3,0,253.3,0,418.8s134.1,297.6,297.6,297.6s297.6-130,297.6-295.5\n				C593.2,255.4,459,123.3,297.6,123.3L297.6,123.3z"
								}),
								createTextVNode(),
								createVNode("polygon", {
									fill: "#666666",
									points: "473.7,420.9 431.8,379 431.8,379 343.8,291 259.9,291 360.5,391.6 142.5,391.6 142.5,450.3\n				360.5,450.3 259.9,548.8 343.8,548.8 431.8,462.9 431.8,462.9"
								})
							])]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_arrow02",
								viewBox: "0 0 595.3 841.9"
							}, [createVNode("path", { d: "M480,385.3L197,138c-21-18.9-56.6-18.9-81.7,0c-21,18.9-21,50.3,0,69.2l245.2,211.7L115.3,630.6\n			c-21,18.9-21,50.3,0,69.2c12.6,8.4,25.2,14.7,39.8,14.7c14.7,0,29.3-6.3,39.8-14.7l283-247.3c12.6-8.4,18.9-21,18.9-35.6\n			C494.7,406.3,488.4,395.8,480,385.3" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_baloon",
								viewBox: "0 0 28.35 28.35"
							}, [createVNode("path", { d: "M28.349,11.339C28.349,5.077,22.003,0,14.175,0C6.348,0,0.002,5.077,0.002,11.339\n			c0,5.916,5.664,10.766,12.888,11.287c0.394,0.544,2.454,3.098,5.453,1.574c-0.55-0.179-1.175-0.884-1.737-1.701\n			C23.273,21.575,28.349,16.937,28.349,11.339z" })]),
							createTextVNode(),
							createVNode("symbol", {
								id: "icon_arrow01",
								viewBox: "0 0 595.3 841.9"
							}, [createVNode("path", {
								fill: "#C7273B",
								d: "M480,385.3L197,138c-21-18.9-56.6-18.9-81.7,0c-21,18.9-21,50.3,0,69.2l245.2,211.7L115.3,630.6\n			c-21,18.9-21,50.3,0,69.2c12.6,8.4,25.2,14.7,39.8,14.7c14.7,0,29.3-6.3,39.8-14.7l283-247.3c12.6-8.4,18.9-21,18.9-35.6\n			C494.7,406.3,488.4,395.8,480,385.3"
							})])
						]))
					])];
				}),
				_: 3
			}, _parent));
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var default_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-c70477d0"]]);

export { default_default as default };
//# sourceMappingURL=default-Cd5HIYZb.mjs.map
