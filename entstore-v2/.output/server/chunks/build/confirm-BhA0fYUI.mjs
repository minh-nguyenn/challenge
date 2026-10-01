import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { m as mapGetters } from './vuex-compat-xaf0vaOs.mjs';
import { s as step02_default } from './step02-DrKZZoIF.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import _isEmpty from 'lodash/isEmpty.js';
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

//#region app/pages/contact/form/confirm.vue
var _sfc_main = {
	name: "Idosuper",
	components: { AppArticle: Article_default },
	data() {
		return {
			breadcrumbItems: [{
				text: "ホーム",
				disabled: false,
				href: "/"
			}, {
				text: "お問い合わせフォーム",
				disabled: true,
				href: "/contact/form"
			}],
			formModel: {
				name: "",
				kana: "",
				email: "",
				emailConfirm: "",
				shop: "0",
				address: "",
				tel: "",
				description: "",
				response: "不要です"
			},
			formModelKey: {
				name: "お名前",
				kana: "ふりがな",
				address: "ご住所",
				email: "E-MAIL",
				shop: "ご利用の店舗名",
				tel: "お電話",
				description: "お問い合わせ内容"
			}
		};
	},
	computed: { ...mapGetters({ formInfomation: "getContactFormData" }) },
	setup() {
		useHead$1({ title: "お問い合わせフォーム｜遠鉄ストア" });
	},
	methods: {
		async submitForm() {
			if (!_isEmpty(this.formInfomation)) try {
				const payload = {
					userEmail: this.formInfomation.email,
					userName: this.formInfomation.name,
					formData: this.formInfomation
				};
				const res = await this.$axios.$post("/api/send-campaign-contact", payload);
				console.log("✅ Email sent via API:", res);
				this.$router.push({ path: `/contact/form/thanks` });
			} catch (err) {
				console.error("❌ Error sending email:", err);
			}
		},
		goBack() {
			this.$router.push({ path: `/contact/form` });
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-3be39982>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-3be39982>`);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "お問い合わせフォーム",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="btnarea mb-0" data-v-3be39982${_scopeId}><img${ssrRenderAttr("src", step02_default)} alt="ご入力" data-v-3be39982${_scopeId}></p>`);
			else return [createVNode("p", { class: "btnarea mb-0" }, [createVNode("img", {
				src: step02_default,
				alt: "ご入力"
			})])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="mobile-box" data-v-3be39982><p class="caution" data-v-3be39982>※印は必須項目</p> <form data-v-3be39982><table class="table-horz" data-v-3be39982><tbody data-v-3be39982><tr data-v-3be39982><th data-v-3be39982>お名前 <span class="caution" data-v-3be39982>※必須</span></th> <td data-v-3be39982>${ssrInterpolate(_ctx.formInfomation.name)}</td></tr> <tr data-v-3be39982><th data-v-3be39982>ふりがな<span class="caution" data-v-3be39982>※必須</span></th> <td data-v-3be39982>${ssrInterpolate(_ctx.formInfomation.kana)}</td></tr> <tr data-v-3be39982><th data-v-3be39982>ご住所</th> <td data-v-3be39982>${ssrInterpolate(_ctx.formInfomation.address1)} <br data-v-3be39982> ${ssrInterpolate(_ctx.formInfomation.address2)}</td></tr> <tr data-v-3be39982><th data-v-3be39982>お電話<span class="caution" data-v-3be39982>※必須</span></th> <td data-v-3be39982>${ssrInterpolate(_ctx.formInfomation.tel)}</td></tr> <tr data-v-3be39982><th data-v-3be39982>E-MAIL <span class="caution" data-v-3be39982>※必須</span></th> <td data-v-3be39982>${ssrInterpolate(_ctx.formInfomation.email)}</td></tr> <tr data-v-3be39982><th data-v-3be39982>返信を希望しますか？<span class="caution" data-v-3be39982>※必須</span></th> <td data-v-3be39982>${ssrInterpolate(_ctx.formInfomation.response)}</td></tr> <tr data-v-3be39982><th data-v-3be39982>ご利用の店舗名</th> <td data-v-3be39982>${ssrInterpolate(_ctx.formInfomation.shop)}</td></tr> <tr data-v-3be39982><th data-v-3be39982>ご意見・お問合せ内容 <span class="caution" data-v-3be39982>※必須</span></th> <td class="td-description" data-v-3be39982>${ssrInterpolate(_ctx.formInfomation.description)}</td></tr></tbody></table> <p class="btnarea" data-v-3be39982><input name="submit" type="submit" value="送信する" data-v-3be39982> <input name="reset" type="button" value="前の画面に戻る" data-v-3be39982></p></form> <p id="secure" data-v-3be39982>
          当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。
        </p></div></main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/form/confirm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var confirm_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3be39982"]]);

export { confirm_default as default };
//# sourceMappingURL=confirm-BhA0fYUI.mjs.map
