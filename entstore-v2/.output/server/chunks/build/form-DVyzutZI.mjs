import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { _ as _sfc_main$1, a as _sfc_main$1$1, V as ValidationObserver_default, s as step01_default } from './step01-BgeywLj1.mjs';
import { mergeProps, withCtx, createVNode, withDirectives, vModelText, createTextVNode, toDisplayString, vModelSelect, openBlock, createBlock, createCommentVNode, vModelRadio, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from 'vue/server-renderer';
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

//#region app/pages/contact/form/index.vue
var _sfc_main = {
	name: "Idosuper",
	components: {
		ValidationObserver: ValidationObserver_default,
		ValidationProvider: _sfc_main$1$1,
		recaptcha: _sfc_main$1,
		ValidationObserver: ValidationObserver_default,
		ValidationProvider: _sfc_main$1$1,
		recaptcha: _sfc_main$1,
		AppArticle: Article_default
	},
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
				shop: null,
				address1: null,
				address2: "",
				tel: "",
				description: "",
				response: "不要です"
			},
			customMessageError: {
				content: { required: "お問い合わせ内容 を選択してください。" },
				name: { required: "お名前 を入力して下さい。" },
				kana: {
					required: "ふりがな を入力して下さい。",
					invalidFormat: "ふりがな は全角ひらがなで入力してください。"
				},
				email: {
					required: "E-MAIL を入力して下さい。",
					invalidFormat: "E-MAIL は、有効なメールアドレスではありません。"
				},
				emailConfirm: {
					required: "E-MAIL（確認再入力） を入力して下さい。",
					invalidFormat: "E-MAIL（確認再入力） は、E-MAIL と異なっています。"
				},
				tel: {
					required: "お電話 を入力して下さい。",
					invalidFormat: "電話番号 の入力形式が不正です。"
				},
				description: { required: "ご意見・お問合せ内容 を入力して下さい。" }
			}
		};
	},
	setup() {
		useHead$1({ title: "お問い合わせフォーム｜遠鉄ストア" });
	},
	mounted() {
		const savedData = this.$store.state.contactFormData;
		if (savedData) this.formModel = {
			...this.formModel,
			...savedData
		};
	},
	methods: {
		_isEmpty,
		checkError(observerInsErr) {
			return Object.keys(observerInsErr).some((key) => observerInsErr[key].length > 0);
		},
		getErrorList(observerInsErr) {
			const observerFields = observerInsErr.fields;
			return Object.keys(observerFields).filter((field) => !_isEmpty(observerFields[field].failedRules)).reduce((preValue, curValue) => [...preValue, observerFields[curValue].failedRules.required ? this.customMessageError[curValue].required : this.customMessageError[curValue].invalidFormat], []);
		},
		async submitForm() {
			for (const key in this.formModel) if (typeof this.formModel[key] === "string" && key !== "description") this.formModel[key] = this.formModel[key].trim();
			let token = "";
			try {
				token = await this.$recaptcha.execute("contact_submit");
			} catch (error) {
				console.error("reCAPTCHA error:", error);
				return;
			}
			let isHuman = false;
			try {
				const res = await this.$axios.$post("/api/verify-recaptcha", { token });
				if (res.success && res.score >= .5) isHuman = true;
				else console.warn("Low score or verification failed:", res);
			} catch (error) {
				console.error("reCAPTCHA verification error:", error);
				return;
			}
			if (!isHuman) {
				alert("Your action was suspected as bot-like behavior. Please try again.");
				return;
			}
			if (await this.$refs.contactValidateObserver.validate()) {
				this.formModel.recaptchaToken = token;
				this.$store.commit("setContactFormData", this.formModel);
				this.$router.push({ path: "/contact/form/confirm" });
			} else (void 0).scroll({
				top: 0,
				behavior: "smooth"
			});
		},
		resetForm() {
			this.formModel = {
				name: "",
				kana: "",
				email: "",
				emailConfirm: "",
				shop: null,
				address1: null,
				address2: "",
				tel: "",
				description: "",
				response: "不要です"
			};
			this.$refs.contactValidateObserver.reset();
		},
		handleAddressChange() {
			this.$refs.address1Provider.reset();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$2;
	const _component_AppArticle = Article_default;
	const _component_ValidationObserver = ValidationObserver_default;
	const _component_validation_provider = _sfc_main$1$1;
	const _component_recaptcha = _sfc_main$1;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-ea39b9cc>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-ea39b9cc>`);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "お問い合わせフォーム",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="btnarea mb-0" data-v-ea39b9cc${_scopeId}><img${ssrRenderAttr("src", step01_default)} alt="ご入力" data-v-ea39b9cc${_scopeId}></p>`);
			else return [createVNode("p", { class: "btnarea mb-0" }, [createVNode("img", {
				src: step01_default,
				alt: "ご入力"
			})])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_ValidationObserver, { ref: "contactValidateObserver" }, {
		default: withCtx((observeSlot, _push, _parent, _scopeId) => {
			if (_push) {
				if ($options.checkError(observeSlot.errors)) {
					_push(`<div class="errorBox errorBox-custom" data-v-ea39b9cc${_scopeId}><h4 data-v-ea39b9cc${_scopeId}>入力内容に誤りがあります。<br class="d-none-des" data-v-ea39b9cc${_scopeId}>以下を参考にして再度入力内容をご確認ください。</h4> <ul data-v-ea39b9cc${_scopeId}><!--[-->`);
					ssrRenderList($options.getErrorList(observeSlot), (error, key) => {
						_push(`<li data-v-ea39b9cc${_scopeId}>${ssrInterpolate(error)}</li>`);
					});
					_push(`<!--]--></ul></div>`);
				} else _push(`<!---->`);
				_push(` <div class="mobile-box" data-v-ea39b9cc${_scopeId}><p class="caution caution-custom" data-v-ea39b9cc${_scopeId}>※印は必須項目</p> <form data-v-ea39b9cc${_scopeId}><table class="table-horz" data-v-ea39b9cc${_scopeId}><tbody data-v-ea39b9cc${_scopeId}><tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>お名前<br data-v-ea39b9cc${_scopeId}><span class="caution" data-v-ea39b9cc${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required",
					tag: "td",
					name: "name"
				}, {
					default: withCtx(({ errors }, _push, _parent, _scopeId) => {
						if (_push) _push(`<input id="name"${ssrRenderAttr("value", $data.formModel.name)} name="name" type="text" size="40" maxlength="25" data-id="contact_item" data-v-ea39b9cc${_scopeId}> <div class="errorTxt" data-v-ea39b9cc${_scopeId}>${ssrInterpolate(errors[0] && `お名前 を入力して下さい。`)}</div>`);
						else return [
							withDirectives(createVNode("input", {
								id: "name",
								"onUpdate:modelValue": ($event) => $data.formModel.name = $event,
								name: "name",
								type: "text",
								size: "40",
								maxlength: "25",
								"data-id": "contact_item"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.name]]),
							createTextVNode(),
							createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `お名前 を入力して下さい。`), 1)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>ふりがな<br data-v-ea39b9cc${_scopeId}><span class="caution" data-v-ea39b9cc${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|zenkaku_hiragana",
					tag: "td",
					name: "kana"
				}, {
					default: withCtx(({ errors }, _push, _parent, _scopeId) => {
						if (_push) _push(`<input id="kana"${ssrRenderAttr("value", $data.formModel.kana)} name="kana" type="text" size="40" maxlength="25" data-id="contact_item" data-v-ea39b9cc${_scopeId}> <div class="errorTxt" data-v-ea39b9cc${_scopeId}>${ssrInterpolate(errors[0] && `ふりがな を入力して下さい。`)}</div>`);
						else return [
							withDirectives(createVNode("input", {
								id: "kana",
								"onUpdate:modelValue": ($event) => $data.formModel.kana = $event,
								name: "kana",
								type: "text",
								size: "40",
								maxlength: "25",
								"data-id": "contact_item"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.kana]]),
							createTextVNode(),
							createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `ふりがな を入力して下さい。`), 1)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>ご住所</th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					ref: "address1Provider",
					tag: "td",
					name: "address1",
					immediate: false
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<select id="address1" data-id="contact_item" name="address1" data-v-ea39b9cc${_scopeId}><option${ssrRenderAttr("value", null)} data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, null) : ssrLooseEqual($data.formModel.address1, null)) ? " selected" : ""}${_scopeId}>-----</option> <option value="北海道" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "北海道") : ssrLooseEqual($data.formModel.address1, "北海道")) ? " selected" : ""}${_scopeId}>北海道</option> <option value="青森県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "青森県") : ssrLooseEqual($data.formModel.address1, "青森県")) ? " selected" : ""}${_scopeId}>青森県</option> <option value="岩手県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "岩手県") : ssrLooseEqual($data.formModel.address1, "岩手県")) ? " selected" : ""}${_scopeId}>岩手県</option> <option value="宮城県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "宮城県") : ssrLooseEqual($data.formModel.address1, "宮城県")) ? " selected" : ""}${_scopeId}>宮城県</option> <option value="秋田県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "秋田県") : ssrLooseEqual($data.formModel.address1, "秋田県")) ? " selected" : ""}${_scopeId}>秋田県</option> <option value="山形県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "山形県") : ssrLooseEqual($data.formModel.address1, "山形県")) ? " selected" : ""}${_scopeId}>山形県</option> <option value="福島県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "福島県") : ssrLooseEqual($data.formModel.address1, "福島県")) ? " selected" : ""}${_scopeId}>福島県</option> <option value="茨城県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "茨城県") : ssrLooseEqual($data.formModel.address1, "茨城県")) ? " selected" : ""}${_scopeId}>茨城県</option> <option value="栃木県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "栃木県") : ssrLooseEqual($data.formModel.address1, "栃木県")) ? " selected" : ""}${_scopeId}>栃木県</option> <option value="群馬県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "群馬県") : ssrLooseEqual($data.formModel.address1, "群馬県")) ? " selected" : ""}${_scopeId}>群馬県</option> <option value="埼玉県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "埼玉県") : ssrLooseEqual($data.formModel.address1, "埼玉県")) ? " selected" : ""}${_scopeId}>埼玉県</option> <option value="千葉県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "千葉県") : ssrLooseEqual($data.formModel.address1, "千葉県")) ? " selected" : ""}${_scopeId}>千葉県</option> <option value="東京都" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "東京都") : ssrLooseEqual($data.formModel.address1, "東京都")) ? " selected" : ""}${_scopeId}>東京都</option> <option value="神奈川県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "神奈川県") : ssrLooseEqual($data.formModel.address1, "神奈川県")) ? " selected" : ""}${_scopeId}>神奈川県</option> <option value="新潟県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "新潟県") : ssrLooseEqual($data.formModel.address1, "新潟県")) ? " selected" : ""}${_scopeId}>新潟県</option> <option value="富山県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "富山県") : ssrLooseEqual($data.formModel.address1, "富山県")) ? " selected" : ""}${_scopeId}>富山県</option> <option value="石川県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "石川県") : ssrLooseEqual($data.formModel.address1, "石川県")) ? " selected" : ""}${_scopeId}>石川県</option> <option value="福井県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "福井県") : ssrLooseEqual($data.formModel.address1, "福井県")) ? " selected" : ""}${_scopeId}>福井県</option> <option value="山梨県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "山梨県") : ssrLooseEqual($data.formModel.address1, "山梨県")) ? " selected" : ""}${_scopeId}>山梨県</option> <option value="長野県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "長野県") : ssrLooseEqual($data.formModel.address1, "長野県")) ? " selected" : ""}${_scopeId}>長野県</option> <option value="岐阜県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "岐阜県") : ssrLooseEqual($data.formModel.address1, "岐阜県")) ? " selected" : ""}${_scopeId}>岐阜県</option> <option value="静岡県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "静岡県") : ssrLooseEqual($data.formModel.address1, "静岡県")) ? " selected" : ""}${_scopeId}>静岡県</option> <option value="愛知県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "愛知県") : ssrLooseEqual($data.formModel.address1, "愛知県")) ? " selected" : ""}${_scopeId}>愛知県</option> <option value="三重県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "三重県") : ssrLooseEqual($data.formModel.address1, "三重県")) ? " selected" : ""}${_scopeId}>三重県</option> <option value="滋賀県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "滋賀県") : ssrLooseEqual($data.formModel.address1, "滋賀県")) ? " selected" : ""}${_scopeId}>滋賀県</option> <option value="京都府" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "京都府") : ssrLooseEqual($data.formModel.address1, "京都府")) ? " selected" : ""}${_scopeId}>京都府</option> <option value="大阪府" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "大阪府") : ssrLooseEqual($data.formModel.address1, "大阪府")) ? " selected" : ""}${_scopeId}>大阪府</option> <option value="兵庫県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "兵庫県") : ssrLooseEqual($data.formModel.address1, "兵庫県")) ? " selected" : ""}${_scopeId}>兵庫県</option> <option value="奈良県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "奈良県") : ssrLooseEqual($data.formModel.address1, "奈良県")) ? " selected" : ""}${_scopeId}>奈良県</option> <option value="和歌山県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "和歌山県") : ssrLooseEqual($data.formModel.address1, "和歌山県")) ? " selected" : ""}${_scopeId}>和歌山県</option> <option value="鳥取県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "鳥取県") : ssrLooseEqual($data.formModel.address1, "鳥取県")) ? " selected" : ""}${_scopeId}>鳥取県</option> <option value="島根県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "島根県") : ssrLooseEqual($data.formModel.address1, "島根県")) ? " selected" : ""}${_scopeId}>島根県</option> <option value="岡山県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "岡山県") : ssrLooseEqual($data.formModel.address1, "岡山県")) ? " selected" : ""}${_scopeId}>岡山県</option> <option value="広島県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "広島県") : ssrLooseEqual($data.formModel.address1, "広島県")) ? " selected" : ""}${_scopeId}>広島県</option> <option value="山口県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "山口県") : ssrLooseEqual($data.formModel.address1, "山口県")) ? " selected" : ""}${_scopeId}>山口県</option> <option value="徳島県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "徳島県") : ssrLooseEqual($data.formModel.address1, "徳島県")) ? " selected" : ""}${_scopeId}>徳島県</option> <option value="香川県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "香川県") : ssrLooseEqual($data.formModel.address1, "香川県")) ? " selected" : ""}${_scopeId}>香川県</option> <option value="愛媛県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "愛媛県") : ssrLooseEqual($data.formModel.address1, "愛媛県")) ? " selected" : ""}${_scopeId}>愛媛県</option> <option value="高知県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "高知県") : ssrLooseEqual($data.formModel.address1, "高知県")) ? " selected" : ""}${_scopeId}>高知県</option> <option value="福岡県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "福岡県") : ssrLooseEqual($data.formModel.address1, "福岡県")) ? " selected" : ""}${_scopeId}>福岡県</option> <option value="佐賀県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "佐賀県") : ssrLooseEqual($data.formModel.address1, "佐賀県")) ? " selected" : ""}${_scopeId}>佐賀県</option> <option value="長崎県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "長崎県") : ssrLooseEqual($data.formModel.address1, "長崎県")) ? " selected" : ""}${_scopeId}>長崎県</option> <option value="熊本県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "熊本県") : ssrLooseEqual($data.formModel.address1, "熊本県")) ? " selected" : ""}${_scopeId}>熊本県</option> <option value="大分県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "大分県") : ssrLooseEqual($data.formModel.address1, "大分県")) ? " selected" : ""}${_scopeId}>大分県</option> <option value="宮崎県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "宮崎県") : ssrLooseEqual($data.formModel.address1, "宮崎県")) ? " selected" : ""}${_scopeId}>宮崎県</option> <option value="鹿児島県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "鹿児島県") : ssrLooseEqual($data.formModel.address1, "鹿児島県")) ? " selected" : ""}${_scopeId}>鹿児島県</option> <option value="沖縄県" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.address1) ? ssrLooseContain($data.formModel.address1, "沖縄県") : ssrLooseEqual($data.formModel.address1, "沖縄県")) ? " selected" : ""}${_scopeId}>沖縄県</option></select> `);
							_push(ssrRenderComponent(_component_validation_provider, { name: "address2" }, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`<input id="address2"${ssrRenderAttr("value", $data.formModel.address2)} name="address2" type="text" size="40" maxlength="25" data-id="contact_item" data-v-ea39b9cc${_scopeId}>`);
									else return [withDirectives(createVNode("input", {
										id: "address2",
										"onUpdate:modelValue": ($event) => $data.formModel.address2 = $event,
										name: "address2",
										type: "text",
										size: "40",
										maxlength: "25",
										"data-id": "contact_item"
									}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.address2]])];
								}),
								_: 2
							}, _parent, _scopeId));
						} else return [
							withDirectives(createVNode("select", {
								onChange: $options.handleAddressChange,
								id: "address1",
								"onUpdate:modelValue": ($event) => $data.formModel.address1 = $event,
								"data-id": "contact_item",
								name: "address1"
							}, [
								createVNode("option", { value: null }, "-----"),
								createTextVNode(),
								createVNode("option", { value: "北海道" }, "北海道"),
								createTextVNode(),
								createVNode("option", { value: "青森県" }, "青森県"),
								createTextVNode(),
								createVNode("option", { value: "岩手県" }, "岩手県"),
								createTextVNode(),
								createVNode("option", { value: "宮城県" }, "宮城県"),
								createTextVNode(),
								createVNode("option", { value: "秋田県" }, "秋田県"),
								createTextVNode(),
								createVNode("option", { value: "山形県" }, "山形県"),
								createTextVNode(),
								createVNode("option", { value: "福島県" }, "福島県"),
								createTextVNode(),
								createVNode("option", { value: "茨城県" }, "茨城県"),
								createTextVNode(),
								createVNode("option", { value: "栃木県" }, "栃木県"),
								createTextVNode(),
								createVNode("option", { value: "群馬県" }, "群馬県"),
								createTextVNode(),
								createVNode("option", { value: "埼玉県" }, "埼玉県"),
								createTextVNode(),
								createVNode("option", { value: "千葉県" }, "千葉県"),
								createTextVNode(),
								createVNode("option", { value: "東京都" }, "東京都"),
								createTextVNode(),
								createVNode("option", { value: "神奈川県" }, "神奈川県"),
								createTextVNode(),
								createVNode("option", { value: "新潟県" }, "新潟県"),
								createTextVNode(),
								createVNode("option", { value: "富山県" }, "富山県"),
								createTextVNode(),
								createVNode("option", { value: "石川県" }, "石川県"),
								createTextVNode(),
								createVNode("option", { value: "福井県" }, "福井県"),
								createTextVNode(),
								createVNode("option", { value: "山梨県" }, "山梨県"),
								createTextVNode(),
								createVNode("option", { value: "長野県" }, "長野県"),
								createTextVNode(),
								createVNode("option", { value: "岐阜県" }, "岐阜県"),
								createTextVNode(),
								createVNode("option", { value: "静岡県" }, "静岡県"),
								createTextVNode(),
								createVNode("option", { value: "愛知県" }, "愛知県"),
								createTextVNode(),
								createVNode("option", { value: "三重県" }, "三重県"),
								createTextVNode(),
								createVNode("option", { value: "滋賀県" }, "滋賀県"),
								createTextVNode(),
								createVNode("option", { value: "京都府" }, "京都府"),
								createTextVNode(),
								createVNode("option", { value: "大阪府" }, "大阪府"),
								createTextVNode(),
								createVNode("option", { value: "兵庫県" }, "兵庫県"),
								createTextVNode(),
								createVNode("option", { value: "奈良県" }, "奈良県"),
								createTextVNode(),
								createVNode("option", { value: "和歌山県" }, "和歌山県"),
								createTextVNode(),
								createVNode("option", { value: "鳥取県" }, "鳥取県"),
								createTextVNode(),
								createVNode("option", { value: "島根県" }, "島根県"),
								createTextVNode(),
								createVNode("option", { value: "岡山県" }, "岡山県"),
								createTextVNode(),
								createVNode("option", { value: "広島県" }, "広島県"),
								createTextVNode(),
								createVNode("option", { value: "山口県" }, "山口県"),
								createTextVNode(),
								createVNode("option", { value: "徳島県" }, "徳島県"),
								createTextVNode(),
								createVNode("option", { value: "香川県" }, "香川県"),
								createTextVNode(),
								createVNode("option", { value: "愛媛県" }, "愛媛県"),
								createTextVNode(),
								createVNode("option", { value: "高知県" }, "高知県"),
								createTextVNode(),
								createVNode("option", { value: "福岡県" }, "福岡県"),
								createTextVNode(),
								createVNode("option", { value: "佐賀県" }, "佐賀県"),
								createTextVNode(),
								createVNode("option", { value: "長崎県" }, "長崎県"),
								createTextVNode(),
								createVNode("option", { value: "熊本県" }, "熊本県"),
								createTextVNode(),
								createVNode("option", { value: "大分県" }, "大分県"),
								createTextVNode(),
								createVNode("option", { value: "宮崎県" }, "宮崎県"),
								createTextVNode(),
								createVNode("option", { value: "鹿児島県" }, "鹿児島県"),
								createTextVNode(),
								createVNode("option", { value: "沖縄県" }, "沖縄県")
							], 40, ["onChange", "onUpdate:modelValue"]), [[vModelSelect, $data.formModel.address1]]),
							createTextVNode(),
							createVNode(_component_validation_provider, { name: "address2" }, {
								default: withCtx(() => [withDirectives(createVNode("input", {
									id: "address2",
									"onUpdate:modelValue": ($event) => $data.formModel.address2 = $event,
									name: "address2",
									type: "text",
									size: "40",
									maxlength: "25",
									"data-id": "contact_item"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.address2]])]),
								_: 1
							})
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>お電話<br data-v-ea39b9cc${_scopeId}><span class="caution" data-v-ea39b9cc${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|tel",
					tag: "td",
					name: "tel"
				}, {
					default: withCtx((validateItem, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input id="tel"${ssrRenderAttr("value", $data.formModel.tel)} name="tel" type="text" size="30" maxlength="600" data-id="contact_item" data-v-ea39b9cc${_scopeId}> `);
							if (!$options._isEmpty(validateItem.failedRules)) _push(`<div class="errorTxt" data-v-ea39b9cc${_scopeId}>${ssrInterpolate(validateItem.failedRules.required ? $data.customMessageError.tel.required : $data.customMessageError.tel.invalidFormat)}</div>`);
							else _push(`<!---->`);
						} else return [
							withDirectives(createVNode("input", {
								id: "tel",
								"onUpdate:modelValue": ($event) => $data.formModel.tel = $event,
								name: "tel",
								type: "text",
								size: "30",
								maxlength: "600",
								"data-id": "contact_item"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.tel]]),
							createTextVNode(),
							!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
								key: 0,
								class: "errorTxt"
							}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.tel.required : $data.customMessageError.tel.invalidFormat), 1)) : createCommentVNode("", true)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>E-MAIL<br data-v-ea39b9cc${_scopeId}><span class="caution" data-v-ea39b9cc${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|email",
					tag: "td",
					name: "email"
				}, {
					default: withCtx((validateItem, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input id="email"${ssrRenderAttr("value", $data.formModel.email)} name="email" type="text" size="40" maxlength="100" data-id="contact_item" data-v-ea39b9cc${_scopeId}> `);
							if (!$options._isEmpty(validateItem.failedRules)) _push(`<div class="errorTxt" data-v-ea39b9cc${_scopeId}>${ssrInterpolate(validateItem.failedRules.required ? $data.customMessageError.email.required : $data.customMessageError.email.invalidFormat)}</div>`);
							else _push(`<!---->`);
						} else return [
							withDirectives(createVNode("input", {
								id: "email",
								"onUpdate:modelValue": ($event) => $data.formModel.email = $event,
								name: "email",
								type: "text",
								size: "40",
								maxlength: "100",
								"data-id": "contact_item"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.email]]),
							createTextVNode(),
							!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
								key: 0,
								class: "errorTxt"
							}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.email.required : $data.customMessageError.email.invalidFormat), 1)) : createCommentVNode("", true)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>
                    E-MAIL<br data-v-ea39b9cc${_scopeId}>
                    (確認再入力)<br data-v-ea39b9cc${_scopeId}><span class="caution" data-v-ea39b9cc${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|email_confirmation:@email",
					tag: "td",
					name: "emailConfirm"
				}, {
					default: withCtx((validateItem, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input id="emailConfirm"${ssrRenderAttr("value", $data.formModel.emailConfirm)} name="emailConfirm" type="text" size="40" maxlength="100" data-id="contact_item" data-v-ea39b9cc${_scopeId}> `);
							if (!$options._isEmpty(validateItem.failedRules)) _push(`<div class="errorTxt" data-v-ea39b9cc${_scopeId}>${ssrInterpolate(validateItem.failedRules.required ? $data.customMessageError.emailConfirm.required : $data.customMessageError.emailConfirm.invalidFormat)}</div>`);
							else _push(`<!---->`);
						} else return [
							withDirectives(createVNode("input", {
								id: "emailConfirm",
								"onUpdate:modelValue": ($event) => $data.formModel.emailConfirm = $event,
								name: "emailConfirm",
								type: "text",
								size: "40",
								maxlength: "100",
								"data-id": "contact_item"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.emailConfirm]]),
							createTextVNode(),
							!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
								key: 0,
								class: "errorTxt"
							}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.emailConfirm.required : $data.customMessageError.emailConfirm.invalidFormat), 1)) : createCommentVNode("", true)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>返信を希望しますか？<br data-v-ea39b9cc${_scopeId}><span class="caution caution-custom" data-v-ea39b9cc${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required",
					tag: "td",
					name: "content"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<label style="${ssrRenderStyle({ "margin-right": "20px" })}" data-v-ea39b9cc${_scopeId}><input id="form_content1"${ssrIncludeBooleanAttr(ssrLooseEqual($data.formModel.response, "不要です")) ? " checked" : ""} data-id="contact_item" name="response" value="不要です" type="radio" class="mr-2" data-v-ea39b9cc${_scopeId}> <span data-v-ea39b9cc${_scopeId}>不要です</span></label> <label data-v-ea39b9cc${_scopeId}><input id="form_content2"${ssrIncludeBooleanAttr(ssrLooseEqual($data.formModel.response, "希望します")) ? " checked" : ""} data-id="contact_item" name="response" value="希望します" type="radio" class="mr-2" data-v-ea39b9cc${_scopeId}> <span data-v-ea39b9cc${_scopeId}>希望します</span></label>`);
						else return [
							createVNode("label", { style: { "margin-right": "20px" } }, [
								withDirectives(createVNode("input", {
									id: "form_content1",
									"onUpdate:modelValue": ($event) => $data.formModel.response = $event,
									"data-id": "contact_item",
									name: "response",
									value: "不要です",
									type: "radio",
									class: "mr-2"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.response]]),
								createTextVNode(),
								createVNode("span", null, "不要です")
							]),
							createTextVNode(),
							createVNode("label", null, [
								withDirectives(createVNode("input", {
									id: "form_content2",
									"onUpdate:modelValue": ($event) => $data.formModel.response = $event,
									"data-id": "contact_item",
									name: "response",
									value: "希望します",
									type: "radio",
									class: "mr-2"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.response]]),
								createTextVNode(),
								createVNode("span", null, "希望します")
							])
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>ご利用の店舗名</th> <td data-v-ea39b9cc${_scopeId}><select id="shop" name="shop" data-id="contact_item" data-v-ea39b9cc${_scopeId}><option${ssrRenderAttr("value", null)} selected="selected" data-v-ea39b9cc${_scopeId}>お選び下さい</option> <optgroup label="浜松市中央区" data-v-ea39b9cc${_scopeId}><option value="富塚店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "富塚店") : ssrLooseEqual($data.formModel.shop, "富塚店")) ? " selected" : ""}${_scopeId}>富塚店</option> <option value="向宿店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "向宿店") : ssrLooseEqual($data.formModel.shop, "向宿店")) ? " selected" : ""}${_scopeId}>向宿店</option> <option value="西ヶ崎店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "西ヶ崎店") : ssrLooseEqual($data.formModel.shop, "西ヶ崎店")) ? " selected" : ""}${_scopeId}>西ヶ崎店</option> <option value="笠井店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "笠井店") : ssrLooseEqual($data.formModel.shop, "笠井店")) ? " selected" : ""}${_scopeId}>笠井店</option> <option value="鴨江店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "鴨江店") : ssrLooseEqual($data.formModel.shop, "鴨江店")) ? " selected" : ""}${_scopeId}>鴨江店</option> <option value="フードワン佐鳴台店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "フードワン佐鳴台店") : ssrLooseEqual($data.formModel.shop, "フードワン佐鳴台店")) ? " selected" : ""}${_scopeId}>フードワン佐鳴台店</option> <option value="立野店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "立野店") : ssrLooseEqual($data.formModel.shop, "立野店")) ? " selected" : ""}${_scopeId}>立野店</option> <option value="初生店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "初生店") : ssrLooseEqual($data.formModel.shop, "初生店")) ? " selected" : ""}${_scopeId}>初生店</option> <option value="大人見店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "大人見店") : ssrLooseEqual($data.formModel.shop, "大人見店")) ? " selected" : ""}${_scopeId}>大人見店</option> <option value="天王店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "天王店") : ssrLooseEqual($data.formModel.shop, "天王店")) ? " selected" : ""}${_scopeId}>天王店</option> <option value="篠原店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "篠原店") : ssrLooseEqual($data.formModel.shop, "篠原店")) ? " selected" : ""}${_scopeId}>篠原店</option> <option value="新橋店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "新橋店") : ssrLooseEqual($data.formModel.shop, "新橋店")) ? " selected" : ""}${_scopeId}>新橋店</option> <option value="大平台店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "大平台店") : ssrLooseEqual($data.formModel.shop, "大平台店")) ? " selected" : ""}${_scopeId}>大平台店</option> <option value="桜台店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "桜台店") : ssrLooseEqual($data.formModel.shop, "桜台店")) ? " selected" : ""}${_scopeId}>桜台店</option> <option value="フードワン南浅田店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "フードワン南浅田店") : ssrLooseEqual($data.formModel.shop, "フードワン南浅田店")) ? " selected" : ""}${_scopeId}>フードワン南浅田店</option> <option value="フードワン泉店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "フードワン泉店") : ssrLooseEqual($data.formModel.shop, "フードワン泉店")) ? " selected" : ""}${_scopeId}>フードワン泉店</option> <option value="フードワン高林店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "フードワン高林店") : ssrLooseEqual($data.formModel.shop, "フードワン高林店")) ? " selected" : ""}${_scopeId}>フードワン高林店</option> <option value="フードワン東伊場店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "フードワン東伊場店") : ssrLooseEqual($data.formModel.shop, "フードワン東伊場店")) ? " selected" : ""}${_scopeId}>フードワン東伊場店</option> <option value="西伝寺店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "西伝寺店") : ssrLooseEqual($data.formModel.shop, "西伝寺店")) ? " selected" : ""}${_scopeId}>西伝寺店</option> <option value="マツモトキヨシさぎの宮駅前店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "マツモトキヨシさぎの宮駅前店") : ssrLooseEqual($data.formModel.shop, "マツモトキヨシさぎの宮駅前店")) ? " selected" : ""}${_scopeId}>マツモトキヨシさぎの宮駅前店</option></optgroup> <optgroup label="浜松市浜名区" data-v-ea39b9cc${_scopeId}><option value="浜北店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "浜北店") : ssrLooseEqual($data.formModel.shop, "浜北店")) ? " selected" : ""}${_scopeId}>浜北店</option> <option value="フードワンきらりタウン店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "フードワンきらりタウン店") : ssrLooseEqual($data.formModel.shop, "フードワンきらりタウン店")) ? " selected" : ""}${_scopeId}>フードワンきらりタウン店</option> <option value="三ヶ日店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "三ヶ日店") : ssrLooseEqual($data.formModel.shop, "三ヶ日店")) ? " selected" : ""}${_scopeId}>三ヶ日店</option> <option value="スーパーマーケットみっかび" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "スーパーマーケットみっかび") : ssrLooseEqual($data.formModel.shop, "スーパーマーケットみっかび")) ? " selected" : ""}${_scopeId}>スーパーマーケットみっかび</option></optgroup> <optgroup label="浜松市天竜区" data-v-ea39b9cc${_scopeId}><option value="天竜店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "天竜店") : ssrLooseEqual($data.formModel.shop, "天竜店")) ? " selected" : ""}${_scopeId}>天竜店</option></optgroup> <optgroup label="磐田市" data-v-ea39b9cc${_scopeId}><option value="磐田店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "磐田店") : ssrLooseEqual($data.formModel.shop, "磐田店")) ? " selected" : ""}${_scopeId}>磐田店</option> <option value="竜洋店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "竜洋店") : ssrLooseEqual($data.formModel.shop, "竜洋店")) ? " selected" : ""}${_scopeId}>竜洋店</option> <option value="池田店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "池田店") : ssrLooseEqual($data.formModel.shop, "池田店")) ? " selected" : ""}${_scopeId}>池田店</option> <option value="見付店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "見付店") : ssrLooseEqual($data.formModel.shop, "見付店")) ? " selected" : ""}${_scopeId}>見付店</option></optgroup> <optgroup label="袋井市" data-v-ea39b9cc${_scopeId}><option value="浅羽店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "浅羽店") : ssrLooseEqual($data.formModel.shop, "浅羽店")) ? " selected" : ""}${_scopeId}>浅羽店</option> <option value="袋井久能店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "袋井久能店") : ssrLooseEqual($data.formModel.shop, "袋井久能店")) ? " selected" : ""}${_scopeId}>袋井久能店</option></optgroup> <optgroup label="周智郡" data-v-ea39b9cc${_scopeId}><option value="森店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "森店") : ssrLooseEqual($data.formModel.shop, "森店")) ? " selected" : ""}${_scopeId}>森店</option></optgroup> <optgroup label="掛川市" data-v-ea39b9cc${_scopeId}><option value="掛川中央店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "掛川中央店") : ssrLooseEqual($data.formModel.shop, "掛川中央店")) ? " selected" : ""}${_scopeId}>掛川中央店</option></optgroup> <optgroup label="菊川市" data-v-ea39b9cc${_scopeId}><option value="菊川店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "菊川店") : ssrLooseEqual($data.formModel.shop, "菊川店")) ? " selected" : ""}${_scopeId}>菊川店</option></optgroup> <optgroup label="湖西市" data-v-ea39b9cc${_scopeId}><option value="湖西店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "湖西店") : ssrLooseEqual($data.formModel.shop, "湖西店")) ? " selected" : ""}${_scopeId}>湖西店</option></optgroup> <optgroup label="豊川市" data-v-ea39b9cc${_scopeId}><option value="豊川店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "豊川店") : ssrLooseEqual($data.formModel.shop, "豊川店")) ? " selected" : ""}${_scopeId}>豊川店</option></optgroup> <optgroup label="豊橋市" data-v-ea39b9cc${_scopeId}><option value="豊橋曙店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "豊橋曙店") : ssrLooseEqual($data.formModel.shop, "豊橋曙店")) ? " selected" : ""}${_scopeId}>豊橋曙店</option></optgroup> <option value="ネットスーパー店" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "ネットスーパー店") : ssrLooseEqual($data.formModel.shop, "ネットスーパー店")) ? " selected" : ""}${_scopeId}>ネットスーパー店</option> <option value="その他" data-v-ea39b9cc${ssrIncludeBooleanAttr(Array.isArray($data.formModel.shop) ? ssrLooseContain($data.formModel.shop, "その他") : ssrLooseEqual($data.formModel.shop, "その他")) ? " selected" : ""}${_scopeId}>その他</option></select></td></tr> <tr data-v-ea39b9cc${_scopeId}><th data-v-ea39b9cc${_scopeId}>ご意見・お問合せ内容 (600文字以内でお願い致します)<br data-v-ea39b9cc${_scopeId}><span class="caution" data-v-ea39b9cc${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required",
					tag: "td",
					name: "description"
				}, {
					default: withCtx(({ errors }, _push, _parent, _scopeId) => {
						if (_push) _push(`<textarea id="descriptionForm" name="description" cols="40" rows="6" data-id="contact_item" data-v-ea39b9cc${_scopeId}>${ssrInterpolate($data.formModel.description)}</textarea> <div class="errorTxt" data-v-ea39b9cc${_scopeId}>${ssrInterpolate(errors[0] && `ご意見・お問合せ内容 を入力して下さい。`)}</div>`);
						else return [
							withDirectives(createVNode("textarea", {
								id: "descriptionForm",
								name: "description",
								"onUpdate:modelValue": ($event) => $data.formModel.description = $event,
								cols: "40",
								rows: "6",
								"data-id": "contact_item"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.description]]),
							createTextVNode(),
							createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `ご意見・お問合せ内容 を入力して下さい。`), 1)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr></tbody></table> `);
				_push(ssrRenderComponent(_component_recaptcha, null, null, _parent, _scopeId));
				_push(` <p class="btnarea" data-v-ea39b9cc${_scopeId}><input name="submit1" type="submit" value="送信内容確認" data-v-ea39b9cc${_scopeId}> <input name="reset" type="button" data-id="reset" value="リセット" data-v-ea39b9cc${_scopeId}></p></form> <p id="secure" data-v-ea39b9cc${_scopeId}>
            当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。
          </p></div>`);
			} else return [
				$options.checkError(observeSlot.errors) ? (openBlock(), createBlock("div", {
					key: 0,
					class: "errorBox errorBox-custom"
				}, [
					createVNode("h4", null, [
						createTextVNode("入力内容に誤りがあります。"),
						createVNode("br", { class: "d-none-des" }),
						createTextVNode("以下を参考にして再度入力内容をご確認ください。")
					]),
					createTextVNode(),
					createVNode("ul", null, [(openBlock(true), createBlock(Fragment, null, renderList($options.getErrorList(observeSlot), (error, key) => {
						return openBlock(), createBlock("li", { key }, toDisplayString(error), 1);
					}), 128))])
				])) : createCommentVNode("", true),
				createTextVNode(),
				createVNode("div", { class: "mobile-box" }, [
					createVNode("p", { class: "caution caution-custom" }, "※印は必須項目"),
					createTextVNode(),
					createVNode("form", { onSubmit: withModifiers($options.submitForm, ["prevent"]) }, [
						createVNode("table", { class: "table-horz" }, [createVNode("tbody", null, [
							createVNode("tr", null, [
								createVNode("th", null, [
									createTextVNode("お名前"),
									createVNode("br"),
									createVNode("span", { class: "caution" }, "※必須")
								]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required",
									tag: "td",
									name: "name"
								}, {
									default: withCtx(({ errors }) => [
										withDirectives(createVNode("input", {
											id: "name",
											"onUpdate:modelValue": ($event) => $data.formModel.name = $event,
											name: "name",
											type: "text",
											size: "40",
											maxlength: "25",
											"data-id": "contact_item"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.name]]),
										createTextVNode(),
										createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `お名前 を入力して下さい。`), 1)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [
									createTextVNode("ふりがな"),
									createVNode("br"),
									createVNode("span", { class: "caution" }, "※必須")
								]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required|zenkaku_hiragana",
									tag: "td",
									name: "kana"
								}, {
									default: withCtx(({ errors }) => [
										withDirectives(createVNode("input", {
											id: "kana",
											"onUpdate:modelValue": ($event) => $data.formModel.kana = $event,
											name: "kana",
											type: "text",
											size: "40",
											maxlength: "25",
											"data-id": "contact_item"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.kana]]),
										createTextVNode(),
										createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `ふりがな を入力して下さい。`), 1)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, "ご住所"),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									ref: "address1Provider",
									tag: "td",
									name: "address1",
									immediate: false
								}, {
									default: withCtx(() => [
										withDirectives(createVNode("select", {
											onChange: $options.handleAddressChange,
											id: "address1",
											"onUpdate:modelValue": ($event) => $data.formModel.address1 = $event,
											"data-id": "contact_item",
											name: "address1"
										}, [
											createVNode("option", { value: null }, "-----"),
											createTextVNode(),
											createVNode("option", { value: "北海道" }, "北海道"),
											createTextVNode(),
											createVNode("option", { value: "青森県" }, "青森県"),
											createTextVNode(),
											createVNode("option", { value: "岩手県" }, "岩手県"),
											createTextVNode(),
											createVNode("option", { value: "宮城県" }, "宮城県"),
											createTextVNode(),
											createVNode("option", { value: "秋田県" }, "秋田県"),
											createTextVNode(),
											createVNode("option", { value: "山形県" }, "山形県"),
											createTextVNode(),
											createVNode("option", { value: "福島県" }, "福島県"),
											createTextVNode(),
											createVNode("option", { value: "茨城県" }, "茨城県"),
											createTextVNode(),
											createVNode("option", { value: "栃木県" }, "栃木県"),
											createTextVNode(),
											createVNode("option", { value: "群馬県" }, "群馬県"),
											createTextVNode(),
											createVNode("option", { value: "埼玉県" }, "埼玉県"),
											createTextVNode(),
											createVNode("option", { value: "千葉県" }, "千葉県"),
											createTextVNode(),
											createVNode("option", { value: "東京都" }, "東京都"),
											createTextVNode(),
											createVNode("option", { value: "神奈川県" }, "神奈川県"),
											createTextVNode(),
											createVNode("option", { value: "新潟県" }, "新潟県"),
											createTextVNode(),
											createVNode("option", { value: "富山県" }, "富山県"),
											createTextVNode(),
											createVNode("option", { value: "石川県" }, "石川県"),
											createTextVNode(),
											createVNode("option", { value: "福井県" }, "福井県"),
											createTextVNode(),
											createVNode("option", { value: "山梨県" }, "山梨県"),
											createTextVNode(),
											createVNode("option", { value: "長野県" }, "長野県"),
											createTextVNode(),
											createVNode("option", { value: "岐阜県" }, "岐阜県"),
											createTextVNode(),
											createVNode("option", { value: "静岡県" }, "静岡県"),
											createTextVNode(),
											createVNode("option", { value: "愛知県" }, "愛知県"),
											createTextVNode(),
											createVNode("option", { value: "三重県" }, "三重県"),
											createTextVNode(),
											createVNode("option", { value: "滋賀県" }, "滋賀県"),
											createTextVNode(),
											createVNode("option", { value: "京都府" }, "京都府"),
											createTextVNode(),
											createVNode("option", { value: "大阪府" }, "大阪府"),
											createTextVNode(),
											createVNode("option", { value: "兵庫県" }, "兵庫県"),
											createTextVNode(),
											createVNode("option", { value: "奈良県" }, "奈良県"),
											createTextVNode(),
											createVNode("option", { value: "和歌山県" }, "和歌山県"),
											createTextVNode(),
											createVNode("option", { value: "鳥取県" }, "鳥取県"),
											createTextVNode(),
											createVNode("option", { value: "島根県" }, "島根県"),
											createTextVNode(),
											createVNode("option", { value: "岡山県" }, "岡山県"),
											createTextVNode(),
											createVNode("option", { value: "広島県" }, "広島県"),
											createTextVNode(),
											createVNode("option", { value: "山口県" }, "山口県"),
											createTextVNode(),
											createVNode("option", { value: "徳島県" }, "徳島県"),
											createTextVNode(),
											createVNode("option", { value: "香川県" }, "香川県"),
											createTextVNode(),
											createVNode("option", { value: "愛媛県" }, "愛媛県"),
											createTextVNode(),
											createVNode("option", { value: "高知県" }, "高知県"),
											createTextVNode(),
											createVNode("option", { value: "福岡県" }, "福岡県"),
											createTextVNode(),
											createVNode("option", { value: "佐賀県" }, "佐賀県"),
											createTextVNode(),
											createVNode("option", { value: "長崎県" }, "長崎県"),
											createTextVNode(),
											createVNode("option", { value: "熊本県" }, "熊本県"),
											createTextVNode(),
											createVNode("option", { value: "大分県" }, "大分県"),
											createTextVNode(),
											createVNode("option", { value: "宮崎県" }, "宮崎県"),
											createTextVNode(),
											createVNode("option", { value: "鹿児島県" }, "鹿児島県"),
											createTextVNode(),
											createVNode("option", { value: "沖縄県" }, "沖縄県")
										], 40, ["onChange", "onUpdate:modelValue"]), [[vModelSelect, $data.formModel.address1]]),
										createTextVNode(),
										createVNode(_component_validation_provider, { name: "address2" }, {
											default: withCtx(() => [withDirectives(createVNode("input", {
												id: "address2",
												"onUpdate:modelValue": ($event) => $data.formModel.address2 = $event,
												name: "address2",
												type: "text",
												size: "40",
												maxlength: "25",
												"data-id": "contact_item"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.address2]])]),
											_: 1
										})
									]),
									_: 1
								}, 512)
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [
									createTextVNode("お電話"),
									createVNode("br"),
									createVNode("span", { class: "caution" }, "※必須")
								]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required|tel",
									tag: "td",
									name: "tel"
								}, {
									default: withCtx((validateItem) => [
										withDirectives(createVNode("input", {
											id: "tel",
											"onUpdate:modelValue": ($event) => $data.formModel.tel = $event,
											name: "tel",
											type: "text",
											size: "30",
											maxlength: "600",
											"data-id": "contact_item"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.tel]]),
										createTextVNode(),
										!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
											key: 0,
											class: "errorTxt"
										}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.tel.required : $data.customMessageError.tel.invalidFormat), 1)) : createCommentVNode("", true)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [
									createTextVNode("E-MAIL"),
									createVNode("br"),
									createVNode("span", { class: "caution" }, "※必須")
								]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required|email",
									tag: "td",
									name: "email"
								}, {
									default: withCtx((validateItem) => [
										withDirectives(createVNode("input", {
											id: "email",
											"onUpdate:modelValue": ($event) => $data.formModel.email = $event,
											name: "email",
											type: "text",
											size: "40",
											maxlength: "100",
											"data-id": "contact_item"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.email]]),
										createTextVNode(),
										!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
											key: 0,
											class: "errorTxt"
										}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.email.required : $data.customMessageError.email.invalidFormat), 1)) : createCommentVNode("", true)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [
									createTextVNode("\n                    E-MAIL"),
									createVNode("br"),
									createTextVNode("\n                    (確認再入力)"),
									createVNode("br"),
									createVNode("span", { class: "caution" }, "※必須")
								]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required|email_confirmation:@email",
									tag: "td",
									name: "emailConfirm"
								}, {
									default: withCtx((validateItem) => [
										withDirectives(createVNode("input", {
											id: "emailConfirm",
											"onUpdate:modelValue": ($event) => $data.formModel.emailConfirm = $event,
											name: "emailConfirm",
											type: "text",
											size: "40",
											maxlength: "100",
											"data-id": "contact_item"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.emailConfirm]]),
										createTextVNode(),
										!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
											key: 0,
											class: "errorTxt"
										}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.emailConfirm.required : $data.customMessageError.emailConfirm.invalidFormat), 1)) : createCommentVNode("", true)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [
									createTextVNode("返信を希望しますか？"),
									createVNode("br"),
									createVNode("span", { class: "caution caution-custom" }, "※必須")
								]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required",
									tag: "td",
									name: "content"
								}, {
									default: withCtx(() => [
										createVNode("label", { style: { "margin-right": "20px" } }, [
											withDirectives(createVNode("input", {
												id: "form_content1",
												"onUpdate:modelValue": ($event) => $data.formModel.response = $event,
												"data-id": "contact_item",
												name: "response",
												value: "不要です",
												type: "radio",
												class: "mr-2"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.response]]),
											createTextVNode(),
											createVNode("span", null, "不要です")
										]),
										createTextVNode(),
										createVNode("label", null, [
											withDirectives(createVNode("input", {
												id: "form_content2",
												"onUpdate:modelValue": ($event) => $data.formModel.response = $event,
												"data-id": "contact_item",
												name: "response",
												value: "希望します",
												type: "radio",
												class: "mr-2"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.response]]),
											createTextVNode(),
											createVNode("span", null, "希望します")
										])
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, "ご利用の店舗名"),
								createTextVNode(),
								createVNode("td", null, [withDirectives(createVNode("select", {
									id: "shop",
									"onUpdate:modelValue": ($event) => $data.formModel.shop = $event,
									name: "shop",
									"data-id": "contact_item"
								}, [
									createVNode("option", {
										value: null,
										selected: "selected"
									}, "お選び下さい"),
									createTextVNode(),
									createVNode("optgroup", { label: "浜松市中央区" }, [
										createVNode("option", { value: "富塚店" }, "富塚店"),
										createTextVNode(),
										createVNode("option", { value: "向宿店" }, "向宿店"),
										createTextVNode(),
										createVNode("option", { value: "西ヶ崎店" }, "西ヶ崎店"),
										createTextVNode(),
										createVNode("option", { value: "笠井店" }, "笠井店"),
										createTextVNode(),
										createVNode("option", { value: "鴨江店" }, "鴨江店"),
										createTextVNode(),
										createVNode("option", { value: "フードワン佐鳴台店" }, "フードワン佐鳴台店"),
										createTextVNode(),
										createVNode("option", { value: "立野店" }, "立野店"),
										createTextVNode(),
										createVNode("option", { value: "初生店" }, "初生店"),
										createTextVNode(),
										createVNode("option", { value: "大人見店" }, "大人見店"),
										createTextVNode(),
										createVNode("option", { value: "天王店" }, "天王店"),
										createTextVNode(),
										createVNode("option", { value: "篠原店" }, "篠原店"),
										createTextVNode(),
										createVNode("option", { value: "新橋店" }, "新橋店"),
										createTextVNode(),
										createVNode("option", { value: "大平台店" }, "大平台店"),
										createTextVNode(),
										createVNode("option", { value: "桜台店" }, "桜台店"),
										createTextVNode(),
										createVNode("option", { value: "フードワン南浅田店" }, "フードワン南浅田店"),
										createTextVNode(),
										createVNode("option", { value: "フードワン泉店" }, "フードワン泉店"),
										createTextVNode(),
										createVNode("option", { value: "フードワン高林店" }, "フードワン高林店"),
										createTextVNode(),
										createVNode("option", { value: "フードワン東伊場店" }, "フードワン東伊場店"),
										createTextVNode(),
										createVNode("option", { value: "西伝寺店" }, "西伝寺店"),
										createTextVNode(),
										createVNode("option", { value: "マツモトキヨシさぎの宮駅前店" }, "マツモトキヨシさぎの宮駅前店")
									]),
									createTextVNode(),
									createVNode("optgroup", { label: "浜松市浜名区" }, [
										createVNode("option", { value: "浜北店" }, "浜北店"),
										createTextVNode(),
										createVNode("option", { value: "フードワンきらりタウン店" }, "フードワンきらりタウン店"),
										createTextVNode(),
										createVNode("option", { value: "三ヶ日店" }, "三ヶ日店"),
										createTextVNode(),
										createVNode("option", { value: "スーパーマーケットみっかび" }, "スーパーマーケットみっかび")
									]),
									createTextVNode(),
									createVNode("optgroup", { label: "浜松市天竜区" }, [createVNode("option", { value: "天竜店" }, "天竜店")]),
									createTextVNode(),
									createVNode("optgroup", { label: "磐田市" }, [
										createVNode("option", { value: "磐田店" }, "磐田店"),
										createTextVNode(),
										createVNode("option", { value: "竜洋店" }, "竜洋店"),
										createTextVNode(),
										createVNode("option", { value: "池田店" }, "池田店"),
										createTextVNode(),
										createVNode("option", { value: "見付店" }, "見付店")
									]),
									createTextVNode(),
									createVNode("optgroup", { label: "袋井市" }, [
										createVNode("option", { value: "浅羽店" }, "浅羽店"),
										createTextVNode(),
										createVNode("option", { value: "袋井久能店" }, "袋井久能店")
									]),
									createTextVNode(),
									createVNode("optgroup", { label: "周智郡" }, [createVNode("option", { value: "森店" }, "森店")]),
									createTextVNode(),
									createVNode("optgroup", { label: "掛川市" }, [createVNode("option", { value: "掛川中央店" }, "掛川中央店")]),
									createTextVNode(),
									createVNode("optgroup", { label: "菊川市" }, [createVNode("option", { value: "菊川店" }, "菊川店")]),
									createTextVNode(),
									createVNode("optgroup", { label: "湖西市" }, [createVNode("option", { value: "湖西店" }, "湖西店")]),
									createTextVNode(),
									createVNode("optgroup", { label: "豊川市" }, [createVNode("option", { value: "豊川店" }, "豊川店")]),
									createTextVNode(),
									createVNode("optgroup", { label: "豊橋市" }, [createVNode("option", { value: "豊橋曙店" }, "豊橋曙店")]),
									createTextVNode(),
									createVNode("option", { value: "ネットスーパー店" }, "ネットスーパー店"),
									createTextVNode(),
									createVNode("option", { value: "その他" }, "その他")
								], 8, ["onUpdate:modelValue"]), [[vModelSelect, $data.formModel.shop]])])
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [
									createTextVNode("ご意見・お問合せ内容 (600文字以内でお願い致します)"),
									createVNode("br"),
									createVNode("span", { class: "caution" }, "※必須")
								]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required",
									tag: "td",
									name: "description"
								}, {
									default: withCtx(({ errors }) => [
										withDirectives(createVNode("textarea", {
											id: "descriptionForm",
											name: "description",
											"onUpdate:modelValue": ($event) => $data.formModel.description = $event,
											cols: "40",
											rows: "6",
											"data-id": "contact_item"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.description]]),
										createTextVNode(),
										createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `ご意見・お問合せ内容 を入力して下さい。`), 1)
									]),
									_: 1
								})
							])
						])]),
						createTextVNode(),
						createVNode(_component_recaptcha),
						createTextVNode(),
						createVNode("p", { class: "btnarea" }, [
							createVNode("input", {
								name: "submit1",
								type: "submit",
								value: "送信内容確認"
							}),
							createTextVNode(),
							createVNode("input", {
								name: "reset",
								type: "button",
								"data-id": "reset",
								value: "リセット",
								onClick: $options.resetForm
							}, null, 8, ["onClick"])
						])
					], 40, ["onSubmit"]),
					createTextVNode(),
					createVNode("p", { id: "secure" }, "\n            当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。\n          ")
				])
			];
		}),
		_: 1
	}, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/form/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var form_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ea39b9cc"]]);

export { form_default as default };
//# sourceMappingURL=form-DVyzutZI.mjs.map
