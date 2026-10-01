import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { m as mapGetters } from './vuex-compat-xaf0vaOs.mjs';
import { s as step03_default } from './step03-Cu3bTvRm.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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

//#region app/pages/service/idosuper/form/thanks.vue
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
					href: "/service/idosuper/thanks"
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
				tel: ""
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
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-a8fe0547>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-a8fe0547>`);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "お問い合わせフォーム",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="btnarea mb-0" data-v-a8fe0547${_scopeId}><img${ssrRenderAttr("src", step03_default)} alt="ご入力" data-v-a8fe0547${_scopeId}></p>`);
			else return [createVNode("p", { class: "btnarea mb-0" }, [createVNode("img", {
				src: step03_default,
				alt: "ご入力"
			})])];
		}),
		_: 1
	}, _parent));
	_push(` <div class="mobile-box" data-v-a8fe0547><form data-v-a8fe0547><input type="hidden" name="request" value="set" data-v-a8fe0547> <p class="btnarea mb-10" data-v-a8fe0547><span class="thanks" data-v-a8fe0547>受付完了</span><br data-v-a8fe0547>
            ありがとうございます。お問い合せの送信が完了いたしました。<br data-v-a8fe0547>
            弊社担当者が確認後ご返答させていただきますので、今しばらくお待ち下さい。<br data-v-a8fe0547>
            なお、お問い合わせの内容によっては、少々お時間をいただく場合や<br data-v-a8fe0547>
            ご返信を致しかねる場合もございますので、予めご了承下さいませ。
          </p> <p class="btnBack home" data-v-a8fe0547><a href="/" data-v-a8fe0547>ホームへ戻る</a></p> <p id="secure" data-v-a8fe0547>当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。</p></form></div></main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/idosuper/form/thanks.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var thanks_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a8fe0547"]]);

export { thanks_default as default };
//# sourceMappingURL=thanks-B-cNS24U.mjs.map
