import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/assets/images/ico_phone.svg
var ico_phone_default = "data:image/svg+xml,%3c!--?xml%20version='1.0'%20encoding='utf-8'?--%3e%3c!--%20Generator:%20Adobe%20Illustrator%2018.1.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='_x32_'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20512%20512'%20style='width:%20256px;%20height:%20256px;%20opacity:%201;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%234B4B4B;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M478.047,400.316c-19.356-18.424-81.443-56.049-97.112-61.134c-15.659-5.096-36.341,8.668-43.342,27.382%20c-7.012,18.715-16.85,16.022-16.85,16.022s-37.242-17.472-101.504-93.726s-75.167-115.92-75.167-115.92s-0.984-10.16,18.662-13.898%20c19.615-3.729,36.693-21.769,34.321-38.071c-2.34-16.301-28.904-83.876-43.776-106.06C138.377-7.262,105.153,0.61,97.593,5.146%20c-7.571,4.536-86.756,45.692-71.842,135.492c14.934,89.801,57.26,164.294,105.904,222.022%20c48.644,57.726,114.884,112.087,200.863,142.018c85.958,29.93,139.956-41.136,145.704-47.826%20C483.971,450.172,497.361,418.761,478.047,400.316z'%20style='fill:%20rgb(51,%2051,%2051);'%3e%3c/path%3e%3c/g%3e%3c/svg%3e";
//#endregion
//#region app/pages/contact/index.vue
var _sfc_main = {
	data() {
		return { breadcrumbItems: [{
			text: "ホーム",
			disabled: false,
			href: "/"
		}, {
			text: "お問い合わせ",
			disabled: true,
			href: "/contact"
		}] };
	},
	setup() {
		useHead$1({ title: "お問い合わせ｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-a9875dd5><main data-v-a9875dd5>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-a9875dd5>お問い合わせ</h2> <p class="textAC mb-0" data-v-a9875dd5>よくあるご質問をご確認いただいても解決しない場合は、お気軽にお問い合わせください。</p> <section class="contact_box" data-v-a9875dd5><h3 class="contact_box_title" data-v-a9875dd5>Webサイトからのお問い合わせ</h3> <p class="btn" data-v-a9875dd5><a href="/contact/form/" data-v-a9875dd5>お問い合わせフォームへ</a></p> <div class="contact_box_txt" data-v-a9875dd5><ul data-v-a9875dd5><li data-v-a9875dd5>メールは月曜日～金曜日の9:30～17:00に確認しております。内容によっては回答に時間がかかる場合や、お返事を差し上げられない場合がございます。あらかじめご了承くださいませ。</li> <li data-v-a9875dd5>
              メールによる回答は、弊社へお問い合わせいただいたお客さまの、特定の質問にお答えすることを目的とするものです。弊社の許可なく、回答内容の一部分または全体を転用、二次使用すること、または当該お客さま以外に開示することはかたくお断りします。
            </li> <li data-v-a9875dd5>土日祝日・年末年始にいただいたメールは、翌営業日以降のご連絡とさせていただいております。</li> <li data-v-a9875dd5>悪質と判断される内容には返信いたしません。</li> <li data-v-a9875dd5>企業さまからの商品企画などのご提案は、メールでは受付をしておりません。</li></ul></div> <div class="contact_box_tel" data-v-a9875dd5><h4 data-v-a9875dd5>お電話でのお問い合わせ</h4> <p class="phone_number" data-v-a9875dd5><img${ssrRenderAttr("src", ico_phone_default)} alt="" data-v-a9875dd5>0570-024-100</p> <small data-v-a9875dd5>受付時間 9：30～12：00 13：00～17：00 月曜日～金曜日<br data-v-a9875dd5>（ 土日祝日、1月1日～3日は、受付をしておりません。）</small></div></section></main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contact_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a9875dd5"]]);

export { contact_default as default };
//# sourceMappingURL=contact-nVSMy3Tx.mjs.map
