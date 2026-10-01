import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { computed, useSlots, ref, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderVNode, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

//#region app/components/vx/VxSlick.vue
var _sfc_main = {
	__name: "VxSlick",
	__ssrInlineRender: true,
	props: { options: {
		type: Object,
		default: () => ({})
	} },
	setup(__props) {
		/**
		* Thay <slick> cua vue-slick (goi jQuery slick-carousel) — thu vien nay khong
		* co ban Vue 3 va keo theo jQuery, nen viet lai bang CSS transform.
		*
		* Chi ho tro dung nhung option layout goc dang dung:
		*   slidesToShow, slidesToScroll, autoplay, autoplaySpeed, dots
		*
		* DOM giu ten class .slick-* de cac <style> trong layout goc (vd .slick-footer,
		* .slick-dotted.slick-slider .slick-dots li button:before) van bam dung.
		*/
		const props = __props;
		const opt = computed(() => ({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3e3,
			dots: false,
			arrows: true,
			...props.options
		}));
		const slots = useSlots();
		const slides = computed(() => {
			const nodes = slots.default ? slots.default() : [];
			const out = [];
			for (const n of nodes) if (Array.isArray(n.children) && typeof n.type === "symbol") out.push(...n.children);
			else out.push(n);
			return out.filter((n) => n && n.type !== Comment);
		});
		const index = ref(0);
		const animate = ref(true);
		const count = computed(() => slides.value.length);
		const perView = computed(() => Math.max(1, opt.value.slidesToShow));
		const pages = computed(() => Math.max(1, Math.ceil(count.value / perView.value)));
		const loop = computed(() => count.value > perView.value ? [...slides.value, ...slides.value] : slides.value);
		const trackStyle = computed(() => ({
			display: "flex",
			transition: animate.value ? "transform .5s ease" : "none",
			transform: `translateX(-${index.value * (100 / perView.value)}%)`
		}));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: ["slick-slider", { "slick-dotted": opt.value.dots }] }, _attrs))} data-v-2ed566b3>`);
			if (opt.value.arrows && count.value > perView.value) _push(`<button type="button" class="slick-prev slick-arrow" aria-label="Previous" data-v-2ed566b3>
      Previous
    </button>`);
			else _push(`<!---->`);
			_push(` <div class="slick-list" data-v-2ed566b3><div class="slick-track" style="${ssrRenderStyle(trackStyle.value)}" data-v-2ed566b3><!--[-->`);
			ssrRenderList(loop.value, (s, i) => {
				_push(`<div class="slick-slide" style="${ssrRenderStyle({
					flex: `0 0 ${100 / perView.value}%`,
					maxWidth: `${100 / perView.value}%`
				})}" data-v-2ed566b3>`);
				ssrRenderVNode(_push, createVNode(resolveDynamicComponent(s), null, null), _parent);
				_push(`</div>`);
			});
			_push(`<!--]--></div></div> `);
			if (opt.value.arrows && count.value > perView.value) _push(`<button type="button" class="slick-next slick-arrow" aria-label="Next" data-v-2ed566b3>
      Next
    </button>`);
			else _push(`<!---->`);
			_push(` `);
			if (opt.value.dots) {
				_push(`<ul class="slick-dots" data-v-2ed566b3><!--[-->`);
				ssrRenderList(pages.value, (p) => {
					_push(`<li class="${ssrRenderClass({ "slick-active": Math.floor(index.value / perView.value) === p - 1 })}" data-v-2ed566b3><button type="button" data-v-2ed566b3>${ssrInterpolate(p)}</button></li>`);
				});
				_push(`<!--]--></ul>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vx/VxSlick.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var VxSlick_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-2ed566b3"]]);

export { VxSlick_default as V };
//# sourceMappingURL=VxSlick-EUvIyKhd.mjs.map
