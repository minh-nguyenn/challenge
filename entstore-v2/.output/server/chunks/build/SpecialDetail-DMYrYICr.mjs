import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { resolveComponent, withCtx, createVNode, mergeProps, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';

//#region app/components/Special/MainImg.vue
var _sfc_main$14 = { props: { special: {
	type: Object,
	default: () => ({})
} } };
function _sfc_ssrRender$14(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "main-img-container" }, _attrs))} data-v-8e94d10d><img${ssrRenderAttr("src", $props.special.main_img?.img_pc?.url)} class="main-img pc-img" data-v-8e94d10d> <img${ssrRenderAttr("src", $props.special.main_img?.img_sp ? $props.special.main_img?.img_sp?.url : $props.special.main_img?.img_pc?.url)} class="main-img sp-img" data-v-8e94d10d></div>`);
}
var _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/MainImg.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var MainImg_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$14, [["ssrRender", _sfc_ssrRender$14], ["__scopeId", "data-v-8e94d10d"]]), { __name: "SpecialMainImg" });
//#endregion
//#region app/components/Special/IndexList.vue
var _sfc_main$13 = {
	props: {
		sectionItem: {
			type: Object,
			default: () => ({})
		},
		sectionIndex: {
			type: Number,
			default: 0
		}
	},
	methods: { scrollWithOffset(sectionIndex, subIndex) {
		const targetId = `section-${sectionIndex}-${subIndex}`;
		const targetElement = (void 0).getElementById(targetId);
		if (!targetElement) return;
		const elementPosition = targetElement.getBoundingClientRect().top + (void 0).pageYOffset;
		(void 0).scrollTo({
			top: elementPosition,
			behavior: "smooth"
		});
	} }
};
function _sfc_ssrRender$13(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "index-list" }, _attrs))} data-v-aeb77ca8><div class="index-title" data-v-aeb77ca8>目次</div> <ul data-v-aeb77ca8><!--[-->`);
	ssrRenderList($props.sectionItem.section, (subSection, subIndex) => {
		_push(`<li class="index-item" data-v-aeb77ca8>`);
		if (subSection.title && subSection.title.length) _push(`<a style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-aeb77ca8>${ssrInterpolate(subSection.title[0].value)}</a>`);
		else _push(`<!---->`);
		_push(`</li>`);
	});
	_push(`<!--]--></ul></div>`);
}
var _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/IndexList.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var IndexList_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$13, [["ssrRender", _sfc_ssrRender$13], ["__scopeId", "data-v-aeb77ca8"]]), { __name: "SpecialIndexList" });
//#endregion
//#region app/components/Special/SubSectionTitle.vue
var _sfc_main$12 = { props: { subSection: {
	type: Object,
	default: () => ({})
} } };
function _sfc_ssrRender$12(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-b7f70c69>`);
	if ($props.subSection.title && $props.subSection.title.length) _push(`<h2 class="sub-section-title" data-v-b7f70c69>${ssrInterpolate($props.subSection.title[0]?.value)}</h2>`);
	else _push(`<!---->`);
	_push(`</div>`);
}
var _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/SubSectionTitle.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var SubSectionTitle_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$12, [["ssrRender", _sfc_ssrRender$12], ["__scopeId", "data-v-b7f70c69"]]), { __name: "SpecialSubSectionTitle" });
//#endregion
//#region app/components/Special/ButtonNav.vue
var _sfc_main$11 = {
	name: "ButtonNav",
	props: {
		title: {
			type: String,
			default: ""
		},
		url: {
			type: String,
			default: ""
		},
		target: {
			type: String,
			default: "_self"
		}
	}
};
function _sfc_ssrRender$11(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<a${ssrRenderAttrs(mergeProps({
		class: ["btn btn-navigation", {
			"suffix-icon": _ctx.$slots.default,
			"prefix-icon": _ctx.$slots.prefix
		}],
		href: $props.url || null,
		target: $props.target
	}, _attrs))} data-v-ed2c9510>`);
	if (_ctx.$slots.prefix) {
		_push(`<div class="wrap-image" data-v-ed2c9510>`);
		ssrRenderSlot(_ctx.$slots, "prefix", {}, null, _push, _parent);
		_push(`</div>`);
	} else _push(`<!---->`);
	_push(` <span data-v-ed2c9510>${$props.title ?? ""}</span> `);
	if (_ctx.$slots.default) {
		_push(`<div class="wrap-image" data-v-ed2c9510>`);
		ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
		_push(`</div>`);
	} else _push(`<!---->`);
	_push(`</a>`);
}
var _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/ButtonNav.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var ButtonNav_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$11, [["ssrRender", _sfc_ssrRender$11], ["__scopeId", "data-v-ed2c9510"]]), { __name: "SpecialButtonNav" });
//#endregion
//#region app/components/Special/ArrowIcon.vue
var _sfc_main$10 = { name: "ArrowIcon" };
function _sfc_ssrRender$10(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<svg${ssrRenderAttrs(mergeProps({
		xmlns: "http://www.w3.org/2000/svg",
		width: "13.791",
		height: "7.793",
		viewBox: "0 0 13.791 7.793"
	}, _attrs))}><g id="arrow" transform="translate(-862.858 -2616.044)"><path id="Path_5770" data-name="Path 5770" d="M851.608,2620h12" transform="translate(12)" fill="none" stroke="#CF2339" stroke-linecap="round" stroke-width="1.5"></path> <path id="Path_5771" data-name="Path 5771" d="M851.608,2620h5" transform="translate(1630.533 -31.206) rotate(34)" fill="none" stroke="#CF2339" stroke-linecap="round" stroke-width="1.5"></path> <path id="Path_5772" data-name="Path 5772" d="M851.608,2620h5" transform="translate(-1299.638 926.93) rotate(-34)" fill="none" stroke="#CF2339" stroke-linecap="round" stroke-width="1.5"></path></g></svg>`);
}
var _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/ArrowIcon.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var ArrowIcon_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$10, [["ssrRender", _sfc_ssrRender$10]]), { __name: "SpecialArrowIcon" });
//#endregion
//#region app/components/Special/CustomEditor.vue
var _sfc_main$9 = {
	components: {
		ButtonNav: ButtonNav_default,
		ArrowIcon: ArrowIcon_default
	},
	props: { editor: {
		type: Object,
		default: () => ({})
	} },
	data() {
		return { parsedContent: [] };
	},
	watch: { "editor.editor": {
		handler() {
			this.parseContent();
		},
		immediate: true
	} },
	created() {
		this.parseContent();
	},
	methods: { parseContent() {
		if (!this.editor.editor) {
			this.parsedContent = [];
			return;
		}
		const content = this.editor.editor;
		const segments = [];
		let lastIndex = 0;
		const buttonPattern = /<a\s+[^>]*href="([^"]*)"[^>]*><span\s+class="custom_btn"[^>]*>(.*?)<\/span><\/a>/g;
		let match;
		while ((match = buttonPattern.exec(content)) !== null) {
			const fullMatch = match[0];
			const url = match[1];
			const text = match[2];
			const startIndex = match.index;
			const endIndex = startIndex + fullMatch.length;
			if (startIndex > lastIndex) segments.push({
				type: "html",
				html: content.slice(lastIndex, startIndex)
			});
			segments.push({
				type: "button",
				url,
				text,
				isExternal: url.includes("://") || url.startsWith("//") || /target="_blank"/.test(fullMatch)
			});
			lastIndex = endIndex;
		}
		if (lastIndex < content.length) segments.push({
			type: "html",
			html: content.slice(lastIndex)
		});
		this.parsedContent = segments;
	} }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_ButtonNav = resolveComponent("ButtonNav");
	const _component_ArrowIcon = resolveComponent("ArrowIcon");
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "rich-text-content" }, _attrs))} data-v-debd79c8><!--[-->`);
	ssrRenderList($data.parsedContent, (node, index) => {
		_push(`<div data-v-debd79c8>`);
		if (node.type === "button") _push(ssrRenderComponent(_component_ButtonNav, {
			title: node.text,
			class: "btn-next",
			url: node.url,
			target: node.isExternal ? "_blank" : "_self"
		}, {
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent, _scopeId));
				else return [createVNode(_component_ArrowIcon)];
			}),
			_: 2
		}, _parent));
		else _push(`<div class="html-wrapper" data-v-debd79c8>${node.html ?? ""}</div>`);
		_push(`</div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/CustomEditor.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var CustomEditor_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-debd79c8"]]), { __name: "SpecialCustomEditor" });
//#endregion
//#region app/components/Special/BgEditor.vue
var _sfc_main$8 = {
	props: { content: {
		type: Object,
		default: () => ({})
	} },
	computed: { hasBgColor() {
		return this.content.bg_colour && this.content.bg_colour.length > 0;
	} },
	methods: { getBgStyle(bgColors) {
		if (bgColors && bgColors.length > 0) return {
			backgroundColor: bgColors[0].value,
			paddingTop: "50px",
			paddingBottom: "50px",
			paddingLeft: "16px",
			paddingRight: "16px"
		};
		return {};
	} }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SpecialCustomEditor = CustomEditor_default;
	_push(`<div${ssrRenderAttrs(mergeProps({
		class: ["bg-editor-section", { "has-bg-color": $options.hasBgColor }],
		style: $options.getBgStyle($props.content.bg_colour)
	}, _attrs))} data-v-e46d69db><!--[-->`);
	ssrRenderList($props.content.editor, (editor, editorIndex) => {
		_push(`<div data-v-e46d69db>`);
		_push(ssrRenderComponent(_component_SpecialCustomEditor, { editor }, null, _parent));
		_push(`</div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/BgEditor.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var BgEditor_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-e46d69db"]]), { __name: "SpecialBgEditor" });
//#endregion
//#region app/components/Special/LinkBnr.vue
var _sfc_main$7 = {
	props: { content: {
		type: Object,
		default: () => ({})
	} },
	methods: {
		getBgStyle(bgColors) {
			if (bgColors && bgColors.length > 0) return {
				backgroundColor: bgColors[0].value,
				paddingTop: "50px",
				paddingBottom: "50px"
			};
			return {};
		},
		checkImageAspectRatio(event) {
			const img = event.target;
			if (Math.abs(img.naturalWidth / img.naturalHeight - 1) < .05) img.style.objectFit = "cover";
			else img.style.objectFit = "contain";
		}
	}
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "banner-grid" }, _attrs))} data-v-2ac12d42><!--[-->`);
	ssrRenderList($props.content.bnr_list, (bnr, bnrIndex) => {
		_push(`<div class="banner-item" data-v-2ac12d42><a${ssrRenderAttr("href", bnr.url || "#")}${ssrRenderAttr("target", bnr.is_new_tab ? "_blank" : "_self")} rel="noopener noreferrer" data-v-2ac12d42><div class="wrap-img" data-v-2ac12d42><div class="img-bg" style="${ssrRenderStyle({ backgroundImage: `url(${bnr.bnr_img?.url})` })}" data-v-2ac12d42></div> <div class="default-img" data-v-2ac12d42><img${ssrRenderAttr("src", bnr.bnr_img?.url)}${ssrRenderAttr("alt", bnr.title || "")} class="banner-image" data-v-2ac12d42></div></div></a></div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/LinkBnr.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var LinkBnr_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-2ac12d42"]]), { __name: "SpecialLinkBnr" });
//#endregion
//#region app/components/Special/LinkBnrRec.vue
var _sfc_main$6 = { props: { content: {
	type: Object,
	default: () => ({})
} } };
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "banner-grid" }, _attrs))} data-v-46274990><!--[-->`);
	ssrRenderList($props.content.bnr_list, (bnr, bnrIndex) => {
		_push(`<div class="banner-item" data-v-46274990><a${ssrRenderAttr("href", bnr.url || "#")}${ssrRenderAttr("target", bnr.is_new_tab ? "_blank" : "_self")} rel="noopener noreferrer" data-v-46274990><img${ssrRenderAttr("src", bnr.bnr_img?.url)}${ssrRenderAttr("alt", bnr.title || "")} class="banner-image" data-v-46274990></a></div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/LinkBnrRec.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var LinkBnrRec_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-46274990"]]), { __name: "SpecialLinkBnrRec" });
//#endregion
//#region app/components/Special/ProdIntro.vue
var _sfc_main$5 = { props: { content: {
	type: Object,
	default: () => ({})
} } };
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SpecialCustomEditor = CustomEditor_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "prod-intro" }, _attrs))} data-v-50159b4f><!--[-->`);
	ssrRenderList($props.content.prod_intro, (intro, introIndex) => {
		_push(`<div class="${ssrRenderClass([{ "reverse-layout": introIndex % 2 !== 0 }, "prod-intro-item"])}" data-v-50159b4f><div class="prod-intro-content" data-v-50159b4f><div class="prod-intro-image" data-v-50159b4f><img${ssrRenderAttr("src", intro.img?.url)} data-v-50159b4f></div> <div class="prod-intro-text" data-v-50159b4f><!--[-->`);
		ssrRenderList(intro.editor, (editor, editorIndex) => {
			_push(`<div data-v-50159b4f>`);
			_push(ssrRenderComponent(_component_SpecialCustomEditor, { editor }, null, _parent));
			_push(`</div>`);
		});
		_push(`<!--]--></div></div></div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/ProdIntro.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var ProdIntro_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-50159b4f"]]), { __name: "SpecialProdIntro" });
//#endregion
//#region app/components/Special/ProdGrid.vue
var _sfc_main$4 = {
	props: { content: {
		type: Object,
		default: () => ({})
	} },
	methods: {
		formatDescription(text) {
			if (!text) return "";
			return text.replace(/\n/g, "<br>");
		},
		formatPrice(price) {
			return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		checkImageAspectRatio(event) {
			const img = event.target;
			if (Math.abs(img.naturalWidth / img.naturalHeight - 1) < .05) img.style.objectFit = "cover";
			else img.style.objectFit = "contain";
		}
	}
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "product-grid" }, _attrs))} data-v-79db8c61><!--[-->`);
	ssrRenderList($props.content.prod_item, (item, itemIndex) => {
		_push(`<a${ssrRenderAttr("href", item.url ? item.url : null)}${ssrRenderAttr("target", item.is_external ? "_blank" : "_self")} class="${ssrRenderClass([{ "disabled-link": !item.url }, "prod-item"])}" data-v-79db8c61>`);
		if (item.img?.url) _push(`<div class="prod-image-container" data-v-79db8c61><div class="prod-image__bg" style="${ssrRenderStyle({ backgroundImage: `url(${item.img?.url})` })}" data-v-79db8c61></div> <div class="prod-image__fg" data-v-79db8c61><img${ssrRenderAttr("src", item.img?.url)} class="prod-image" data-v-79db8c61></div></div>`);
		else _push(`<!---->`);
		_push(` <div class="prod-info" data-v-79db8c61>`);
		if (item.brand) _push(`<p class="prod-info__brand" data-v-79db8c61>〈${ssrInterpolate(item.brand)}〉</p>`);
		else _push(`<!---->`);
		_push(` `);
		if (item.title) _push(`<p class="prod-info__title" data-v-79db8c61>${ssrInterpolate(item.title)}</p>`);
		else _push(`<!---->`);
		_push(` `);
		if (item.description) _push(`<p class="prod-info__description" data-v-79db8c61>${$options.formatDescription(item.description) ?? ""}</p>`);
		else _push(`<!---->`);
		_push(` `);
		if (item.price) _push(`<p class="prod-info__price" data-v-79db8c61><span class="price__number" data-v-79db8c61>${ssrInterpolate($options.formatPrice(item.price))}</span>
          円(税込)
        </p>`);
		else _push(`<!---->`);
		_push(`</div></a>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/ProdGrid.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var ProdGrid_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-79db8c61"]]), { __name: "SpecialProdGrid" });
//#endregion
//#region app/components/Special/CollapseItem.vue
var _sfc_main$3 = {
	name: "CollapseItem",
	props: { title: {
		type: String,
		default: ""
	} },
	data() {
		return { isActive: false };
	},
	methods: {
		handleCollapseAction() {
			this.isActive = !this.isActive;
		},
		open() {
			this.isActive = true;
		},
		beforeEnter(el) {
			el.dataset.oldPaddingTop = el.style.paddingTop;
			el.dataset.oldMarginTop = el.style.marginTop;
			el.dataset.oldPaddingBottom = el.style.paddingBottom;
			el.style.height = "0";
			el.style.paddingTop = 0;
			el.style.paddingBottom = 0;
			el.style.opacity = "0";
		},
		enter(el) {
			el.dataset.oldOverflow = el.style.overflow;
			if (el.scrollHeight !== 0) {
				el.style.height = el.scrollHeight + "px";
				el.style.paddingTop = el.dataset.oldPaddingTop;
				el.style.paddingBottom = el.dataset.oldPaddingBottom;
				el.style.marginTop = el.dataset.oldMarginTop;
				el.style.opacity = "1";
			} else {
				el.style.height = "";
				el.style.paddingTop = el.dataset.oldPaddingTop;
				el.style.paddingBottom = el.dataset.oldPaddingBottom;
				el.style.marginTop = el.dataset.oldMarginTop;
			}
			el.style.overflow = "hidden";
		},
		afterEnter(el) {
			el.style.height = "";
			el.style.overflow = el.dataset.oldOverflow;
		},
		beforeLeave(el) {
			el.dataset.oldPaddingTop = el.style.paddingTop;
			el.dataset.oldPaddingBottom = el.style.paddingBottom;
			el.dataset.oldOverflow = el.style.overflow;
			el.style.height = el.scrollHeight + "px";
			el.style.overflow = "hidden";
			el.style.opacity = "1";
		},
		leave(el) {
			if (el.scrollHeight !== 0) {
				el.style.height = 0;
				el.style.paddingTop = 0;
				el.style.paddingBottom = 0;
				el.style.opacity = "0";
				el.style.marginTop = "0";
			}
		},
		afterLeave(el) {
			el.style.height = "";
			el.style.overflow = el.dataset.oldOverflow;
			el.style.paddingTop = el.dataset.oldPaddingTop;
			el.style.paddingBottom = el.dataset.oldPaddingBottom;
			el.style.marginTop = el.dataset.oldMarginTop;
		}
	}
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: ["el-collapse-item", { "is-active": $data.isActive }] }, _attrs))} data-v-ae56e322><div role="tab"${ssrRenderAttr("aria-expanded", $data.isActive)} data-v-ae56e322><div class="${ssrRenderClass([{ "is-active": $data.isActive }, "el-collapse-item__header"])}" data-v-ae56e322><span data-v-ae56e322>${$props.title ?? ""}</span> `);
	if (!$data.isActive) _push(`<i class="el-collapse-item__arrow el-icon-plus" data-v-ae56e322></i>`);
	else _push(`<!---->`);
	_push(` `);
	if ($data.isActive) _push(`<i class="el-collapse-item__arrow el-icon-minus" data-v-ae56e322></i>`);
	else _push(`<!---->`);
	_push(`</div></div> <div class="el-collapse-item__wrap" role="tabpanel"${ssrRenderAttr("aria-hidden", !$data.isActive)} style="${ssrRenderStyle($data.isActive ? null : { display: "none" })}" data-v-ae56e322><div class="el-collapse-item__content" data-v-ae56e322>`);
	ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
	_push(`</div></div></div>`);
}
var _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/CollapseItem.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
//#endregion
//#region app/components/Special/AccordionItem.vue
var _sfc_main$2 = {
	components: { CollapseItem: /* @__PURE__ */ Object.assign(_plugin_vue_export_helper_default(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-ae56e322"]]), { __name: "SpecialCollapseItem" }) },
	props: { content: {
		type: Object,
		default: () => ({})
	} }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_CollapseItem = resolveComponent("CollapseItem");
	const _component_SpecialCustomEditor = CustomEditor_default;
	_push(`<div${ssrRenderAttrs(_attrs)} data-v-2960eb32><!--[-->`);
	ssrRenderList($props.content.accordion_list, (accordion, accordionIndex) => {
		_push(ssrRenderComponent(_component_CollapseItem, {
			key: `accordion-${accordionIndex}`,
			class: "accordion-item",
			title: accordion.title
		}, {
			default: withCtx((_, _push, _parent, _scopeId) => {
				if (_push) {
					_push(`<!--[-->`);
					ssrRenderList(accordion.editor, (editor, editorIndex) => {
						_push(`<div class="accordion-content" data-v-2960eb32${_scopeId}>`);
						_push(ssrRenderComponent(_component_SpecialCustomEditor, { editor }, null, _parent, _scopeId));
						_push(`</div>`);
					});
					_push(`<!--]-->`);
				} else return [(openBlock(true), createBlock(Fragment, null, renderList(accordion.editor, (editor, editorIndex) => {
					return openBlock(), createBlock("div", {
						key: `accordion-editor-${editorIndex}`,
						class: "accordion-content"
					}, [createVNode(_component_SpecialCustomEditor, { editor }, null, 8, ["editor"])]);
				}), 128))];
			}),
			_: 2
		}, _parent));
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/AccordionItem.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var AccordionItem_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-2960eb32"]]), { __name: "SpecialAccordionItem" });
//#endregion
//#region app/components/Special/CustomImage.vue
var _sfc_main$1 = {
	props: { content: {
		type: Object,
		default: () => ({})
	} },
	methods: { formatCaption(caption) {
		return caption?.replace(/\n/g, "<br>");
	} }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: ["image-grid", { "single-image": $props.content.img_list && $props.content.img_list.length === 1 }] }, _attrs))} data-v-224294ae><!--[-->`);
	ssrRenderList($props.content.img_list, (bnr, bnrIndex) => {
		_push(`<div class="image-container" data-v-224294ae><img${ssrRenderAttr("src", bnr.img?.url)}${ssrRenderAttr("alt", bnr.caption || "")} class="img-item" data-v-224294ae> `);
		if (bnr.caption) _push(`<p class="img-caption" data-v-224294ae>${$options.formatCaption(bnr.caption) ?? ""}</p>`);
		else _push(`<!---->`);
		_push(`</div>`);
	});
	_push(`<!--]--></div>`);
}
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/CustomImage.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var CustomImage_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-224294ae"]]), { __name: "SpecialCustomImage" });
//#endregion
//#region app/components/Special/SpecialDetail.vue
var _sfc_main = {
	components: {
		ButtonNav: ButtonNav_default,
		ArrowIcon: ArrowIcon_default
	},
	props: { special: {
		type: Object,
		default: () => ({})
	} },
	data() {
		return { SECTION_NAME: {
			BG_EDITOR: "section_bg_editor",
			LINK_BNR: "section_link_bnr",
			LINK_BNR_REC: "section_link_bnr_rec",
			PROD: "section_prod",
			ACCORDION: "section_accordion",
			BTM_BTN: "section_btm_btn",
			IMG: "section_image"
		} };
	},
	setup() {
		useHead$1({
			title: this.special.title,
			meta: [{
				property: "og:title",
				content: this.special.title
			}]
		});
	},
	computed: { breadcrumbItems() {
		return [{
			title: "トップ",
			url: "/"
		}, { title: this.special.title }];
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_SpecialMainImg = MainImg_default;
	const _component_SpecialIndexList = IndexList_default;
	const _component_SpecialSubSectionTitle = SubSectionTitle_default;
	const _component_SpecialBgEditor = BgEditor_default;
	const _component_SpecialLinkBnr = LinkBnr_default;
	const _component_SpecialLinkBnrRec = LinkBnrRec_default;
	const _component_SpecialProdIntro = ProdIntro_default;
	const _component_SpecialProdGrid = ProdGrid_default;
	const _component_SpecialAccordionItem = AccordionItem_default;
	const _component_SpecialCustomImage = CustomImage_default;
	const _component_ButtonNav = resolveComponent("ButtonNav");
	const _component_ArrowIcon = resolveComponent("ArrowIcon");
	const _component_app_breadcrumb = resolveComponent("app-breadcrumb");
	const _component_recommend_section = resolveComponent("recommend-section");
	_push(`<main${ssrRenderAttrs(_attrs)} data-v-dc707c6f><section class="container" data-v-dc707c6f>`);
	if ($props.special && $props.special.main_img) _push(ssrRenderComponent(_component_SpecialMainImg, { special: $props.special }, null, _parent));
	else _push(`<!---->`);
	_push(` <!--[-->`);
	ssrRenderList($props.special.section_list, (sectionItem, sectionIndex) => {
		_push(`<div data-v-dc707c6f>`);
		if (sectionItem.is_index) _push(ssrRenderComponent(_component_SpecialIndexList, {
			sectionItem,
			sectionIndex
		}, null, _parent));
		else _push(`<!---->`);
		_push(` <!--[-->`);
		ssrRenderList(sectionItem.section, (subSection, subIndex) => {
			_push(`<div class="sub-section" data-v-dc707c6f><div${ssrRenderAttr("id", sectionItem.is_index ? `section-${sectionIndex}-${subIndex}` : "")} data-v-dc707c6f>`);
			if (subSection.title && subSection.title.length) _push(ssrRenderComponent(_component_SpecialSubSectionTitle, { subSection }, null, _parent));
			else _push(`<!---->`);
			_push(` <!--[-->`);
			ssrRenderList(subSection.content, (content, contentIndex) => {
				_push(`<div data-v-dc707c6f>`);
				if (content.fieldId === $data.SECTION_NAME.BG_EDITOR) _push(ssrRenderComponent(_component_SpecialBgEditor, { content }, null, _parent));
				else if (content.fieldId === $data.SECTION_NAME.LINK_BNR) _push(ssrRenderComponent(_component_SpecialLinkBnr, { content }, null, _parent));
				else if (content.fieldId === $data.SECTION_NAME.LINK_BNR_REC) _push(ssrRenderComponent(_component_SpecialLinkBnrRec, { content }, null, _parent));
				else if (content.fieldId === $data.SECTION_NAME.PROD) {
					_push(`<div data-v-dc707c6f>`);
					if (content.prod_intro && content.prod_intro.length) _push(ssrRenderComponent(_component_SpecialProdIntro, { content }, null, _parent));
					else _push(`<!---->`);
					_push(` `);
					if (content.prod_item && content.prod_item.length) _push(ssrRenderComponent(_component_SpecialProdGrid, { content }, null, _parent));
					else _push(`<!---->`);
					_push(`</div>`);
				} else if (content.fieldId === $data.SECTION_NAME.ACCORDION) _push(ssrRenderComponent(_component_SpecialAccordionItem, { content }, null, _parent));
				else if (content.fieldId === $data.SECTION_NAME.IMG) _push(ssrRenderComponent(_component_SpecialCustomImage, { content }, null, _parent));
				else if (content.fieldId === $data.SECTION_NAME.BTM_BTN) _push(ssrRenderComponent(_component_ButtonNav, {
					title: content.btn_label,
					class: "btn-next",
					url: content.btn_url,
					target: content.is_external ? "_blank" : "_self"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(ssrRenderComponent(_component_ArrowIcon, null, null, _parent, _scopeId));
						else return [createVNode(_component_ArrowIcon)];
					}),
					_: 2
				}, _parent));
				else _push(`<!---->`);
				_push(`</div>`);
			});
			_push(`<!--]--></div></div>`);
		});
		_push(`<!--]--></div>`);
	});
	_push(`<!--]--></section> <div class="container breadcrumb-container" data-v-dc707c6f>`);
	_push(ssrRenderComponent(_component_app_breadcrumb, { items: $options.breadcrumbItems }, null, _parent));
	_push(`</div> `);
	_push(ssrRenderComponent(_component_recommend_section, null, null, _parent));
	_push(`</main>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Special/SpecialDetail.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var SpecialDetail_default = /*#__PURE__*/ Object.assign(_plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dc707c6f"]]), { __name: "SpecialDetail" });

export { SpecialDetail_default as S };
//# sourceMappingURL=SpecialDetail-DMYrYICr.mjs.map
