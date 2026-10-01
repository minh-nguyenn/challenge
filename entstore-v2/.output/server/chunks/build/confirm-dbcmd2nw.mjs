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

//#region app/pages/service/idosuper/form/confirm.vue
var _sfc_main = {
	name: "Idosuper",
	components: { AppArticle: Article_default },
	data() {
		return {
			breadcrumbItems: [
				{
					text: "ホーム",
					disabled: false,
					href: "/"
				},
				{
					text: "サービス",
					disabled: false,
					href: "/service"
				},
				{
					text: "遠鉄ストアでは新たに移動スーパーをはじめます！",
					disabled: false,
					href: "/service/idosuper/"
				},
				{
					text: "お問い合わせフォーム",
					disabled: true,
					href: "/service/idosuper"
				}
			],
			formModel: {
				content: "",
				name: "",
				kana: "",
				sex: "",
				age: "",
				email: "",
				zipcode: "",
				address: "",
				tel: "",
				description: ""
			},
			formModelKey: {
				content: "お問い合わせ内容",
				name: "お名前",
				kana: "お名前ふりがな",
				sex: "性別",
				age: "年齢",
				email: "メールアドレス",
				zipcode: "住所",
				tel: "電話番号",
				description: "質問事項等"
			},
			customMessageError: {
				content: "お問い合わせ内容 を選択してください。",
				name: "お名前 を入力して下さい。",
				kana: "お名前ふりがな を入力して下さい。",
				sex: "性別 を選択してください。",
				age: "年齢 を入力して下さい。",
				email: "メールアドレス を入力して下さい。",
				zipcode: "郵便番号 を入力して下さい。",
				address: "ご住所 を入力して下さい。",
				tel: "電話番号 を入力して下さい。"
			}
		};
	},
	computed: { ...mapGetters({ formInfomation: "getIdosuperFormData" }) },
	setup() {
		useHead$1({ title: "お問い合わせフォーム｜遠鉄ストアでは新たに移動スーパーをはじめます！｜サービス｜遠鉄ストア" });
	},
	methods: {
		checkError(observerInsErr) {
			return Object.keys(observerInsErr).some((key) => observerInsErr[key].length > 0);
		},
		getErrorList(observerInsErr) {
			return Object.keys(observerInsErr).filter((key) => observerInsErr[key].length > 0).reduce((preValue, curValue) => ({
				...preValue,
				[curValue]: observerInsErr[curValue]
			}), {});
		},
		getErrMessage(err, key) {
			return this.customMessageError[key] || err.toString();
		},
		async submitForm() {
			if (!_isEmpty(this.formInfomation)) try {
				const payload = {
					userEmail: this.formInfomation.email,
					userName: this.formInfomation.name,
					formData: this.formInfomation
				};
				const res = await this.$axios.$post("/api/send-campaign-service", payload);
				console.log("✅ Email sent via API:", res);
				this.$router.push({ path: `/service/idosuper/form/thanks` });
			} catch (err) {
				console.error("❌ Error sending email:", err);
			}
		},
		goBack() {
			this.$router.push({ path: `/service/idosuper/form` });
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-c9a215a8>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-c9a215a8>`);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "お問い合わせフォーム",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="btnarea mb-0" data-v-c9a215a8${_scopeId}><img${ssrRenderAttr("src", step02_default)} alt="ご入力" data-v-c9a215a8${_scopeId}></p>`);
			else return [createVNode("p", { class: "btnarea mb-0" }, [createVNode("img", {
				src: step02_default,
				alt: "ご入力"
			})])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="mobile-box" data-v-c9a215a8><p class="caution" data-v-c9a215a8>※印は必須項目</p> <form data-v-c9a215a8><table class="table-horz" data-v-c9a215a8><tbody data-v-c9a215a8><tr data-v-c9a215a8><th data-v-c9a215a8>お問い合わせ内容<span class="caution" data-v-c9a215a8>※必須</span></th> <td data-v-c9a215a8>${ssrInterpolate(_ctx.formInfomation.content)}</td></tr> <tr data-v-c9a215a8><th data-v-c9a215a8>お名前 <span class="caution" data-v-c9a215a8>※必須</span></th> <td data-v-c9a215a8>${ssrInterpolate(_ctx.formInfomation.name)}</td></tr> <tr data-v-c9a215a8><th data-v-c9a215a8>お名前ふりがな<span class="caution" data-v-c9a215a8>※必須</span></th> <td data-v-c9a215a8>${ssrInterpolate(_ctx.formInfomation.kana)}</td></tr> <tr data-v-c9a215a8><th data-v-c9a215a8>性別<span class="caution" data-v-c9a215a8>※必須</span></th> <td data-v-c9a215a8>${ssrInterpolate(_ctx.formInfomation.sex)}</td></tr> <tr data-v-c9a215a8><th data-v-c9a215a8>年齢<span class="caution" data-v-c9a215a8>※必須</span></th> <td data-v-c9a215a8>${ssrInterpolate(_ctx.formInfomation.age)}</td></tr> <tr data-v-c9a215a8><th data-v-c9a215a8>メールアドレス<span class="caution" data-v-c9a215a8>※必須</span></th> <td data-v-c9a215a8>${ssrInterpolate(_ctx.formInfomation.email)}</td></tr> <tr data-v-c9a215a8><th data-v-c9a215a8>住所</th> <td data-v-c9a215a8>
                  〒${ssrInterpolate(`${_ctx.formInfomation.zipcode} ${_ctx.formInfomation.address}`)}</td></tr> <tr data-v-c9a215a8><th data-v-c9a215a8>電話番号<span class="caution" data-v-c9a215a8>※必須</span></th> <td data-v-c9a215a8>${ssrInterpolate(_ctx.formInfomation.tel)}</td></tr> <tr data-v-c9a215a8><th data-v-c9a215a8>質問事項等</th> <td class="td-description" data-v-c9a215a8>${ssrInterpolate(_ctx.formInfomation.description)}</td></tr></tbody></table> <p class="btnarea" data-v-c9a215a8><input name="submit" type="submit" value="送信する" data-v-c9a215a8> <input name="reset" type="button" value="前の画面に戻る" data-v-c9a215a8></p></form> <p id="secure" data-v-c9a215a8>
          当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。
        </p></div></main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/idosuper/form/confirm.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var confirm_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c9a215a8"]]);

export { confirm_default as default };
//# sourceMappingURL=confirm-dbcmd2nw.mjs.map
