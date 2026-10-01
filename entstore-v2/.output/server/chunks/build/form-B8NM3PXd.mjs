import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$2 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { _ as _sfc_main$1, a as _sfc_main$1$1, V as ValidationObserver_default, s as step01_default } from './step01-BgeywLj1.mjs';
import { mergeProps, withCtx, createVNode, withDirectives, vModelRadio, createTextVNode, toDisplayString, vModelText, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
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

//#region app/pages/service/idosuper/form/index.vue
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
					href: "/service/idosuper/form"
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
			customMessageError: {
				content: { required: "お問い合わせ内容 を選択してください。" },
				name: { required: "お名前 を入力して下さい。" },
				kana: {
					required: "お名前ふりがな を入力して下さい。",
					invalidFormat: "ふりがな は全角ひらがなで入力してください。"
				},
				sex: { required: "性別 を選択してください。" },
				age: {
					required: "年齢 を入力して下さい。",
					invalidFormat: "年齢 は、有効な文字列ではありません。数値 で入力して下さい。"
				},
				email: {
					required: "メールアドレス を入力して下さい。",
					invalidFormat: "メールアドレス は、有効なメールアドレスではありません。"
				},
				zipcode: {
					required: "郵便番号 を入力して下さい。",
					invalidFormat: "郵便番号 の入力形式が不正です。"
				},
				address: { required: "ご住所 を入力して下さい。" },
				tel: {
					required: "電話番号 を入力して下さい。",
					invalidFormat: "電話番号 の入力形式が不正です。"
				}
			}
		};
	},
	setup() {
		useHead$1({ title: "お問い合わせフォーム｜遠鉄ストアでは新たに移動スーパーをはじめます！｜サービス｜遠鉄ストア" });
	},
	mounted() {
		const savedData = this.$store.state.idosuperFormData;
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
			let token = "";
			try {
				token = await this.$recaptcha.execute("idosuper_submit");
			} catch (error) {
				console.error("Lỗi khi chạy reCAPTCHA:", error);
				return;
			}
			let isHuman = false;
			try {
				const res = await this.$axios.$post("/api/verify-recaptcha", { token });
				if (res.success && res.score >= .5) isHuman = true;
				else console.warn("Xác minh thất bại hoặc score thấp:", res);
			} catch (error) {
				console.error("Lỗi xác minh token reCAPTCHA:", error);
				return;
			}
			if (!isHuman) {
				alert("Xác minh reCAPTCHA thất bại. Vui lòng thử lại.");
				return;
			}
			if (await this.$refs.observerInquiry.validate()) {
				this.formModel.recaptchaToken = token;
				this.$store.commit("setIdosuperFormData", this.formModel);
				this.$router.push({ path: "/service/idosuper/form/confirm" });
			} else (void 0).scroll({
				top: 0,
				behavior: "smooth"
			});
		},
		resetForm() {
			this.formModel = {
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
			};
			this.$refs.observerInquiry.reset();
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$2;
	const _component_AppArticle = Article_default;
	const _component_ValidationObserver = ValidationObserver_default;
	const _component_validation_provider = _sfc_main$1$1;
	const _component_recaptcha = _sfc_main$1;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-43791f19>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <main data-v-43791f19>`);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "お問い合わせフォーム",
		class: "wrap-outside"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="btnarea mb-0" data-v-43791f19${_scopeId}><img${ssrRenderAttr("src", step01_default)} alt="ご入力" data-v-43791f19${_scopeId}></p>`);
			else return [createVNode("p", { class: "btnarea mb-0" }, [createVNode("img", {
				src: step01_default,
				alt: "ご入力"
			})])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_ValidationObserver, { ref: "observerInquiry" }, {
		default: withCtx((observeSlot, _push, _parent, _scopeId) => {
			if (_push) {
				if ($options.checkError(observeSlot.errors)) {
					_push(`<div class="errorBox errorBox-custom" data-v-43791f19${_scopeId}><h4 data-v-43791f19${_scopeId}>入力内容に誤りがあります。以下を参考にして再度入力内容をご確認ください。</h4> <ul data-v-43791f19${_scopeId}><!--[-->`);
					ssrRenderList($options.getErrorList(observeSlot), (error, key) => {
						_push(`<li data-v-43791f19${_scopeId}>${ssrInterpolate(error)}</li>`);
					});
					_push(`<!--]--></ul></div>`);
				} else _push(`<!---->`);
				_push(` <div class="mobile-box" data-v-43791f19${_scopeId}><p class="caution" data-v-43791f19${_scopeId}>※印は必須項目</p> <form data-v-43791f19${_scopeId}><table class="table-horz" data-v-43791f19${_scopeId}><tbody data-v-43791f19${_scopeId}><tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>お問い合わせ内容<span class="caution caution-custom" data-v-43791f19${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required",
					tag: "td",
					name: "content"
				}, {
					default: withCtx(({ errors }, _push, _parent, _scopeId) => {
						if (_push) _push(`<label data-v-43791f19${_scopeId}><input id="form_content1"${ssrIncludeBooleanAttr(ssrLooseEqual($data.formModel.content, "移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）")) ? " checked" : ""} data-id="contact_item" name="content" value="移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）" type="radio" class="mr-2" data-v-43791f19${_scopeId}> <span data-v-43791f19${_scopeId}>移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）</span></label> <br data-v-43791f19${_scopeId}> <label data-v-43791f19${_scopeId}><input id="form_content2"${ssrIncludeBooleanAttr(ssrLooseEqual($data.formModel.content, "移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）")) ? " checked" : ""} data-id="contact_item" name="content" value="移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）" type="radio" class="mr-2" data-v-43791f19${_scopeId}> <span data-v-43791f19${_scopeId}>移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）</span></label> <br data-v-43791f19${_scopeId}> <div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(errors[0] && `お問い合わせ内容 を選択してください。`)}</div>`);
						else return [
							createVNode("label", null, [
								withDirectives(createVNode("input", {
									id: "form_content1",
									"onUpdate:modelValue": ($event) => $data.formModel.content = $event,
									"data-id": "contact_item",
									name: "content",
									value: "移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）",
									type: "radio",
									class: "mr-2"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.content]]),
								createTextVNode(),
								createVNode("span", null, "移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）")
							]),
							createTextVNode(),
							createVNode("br"),
							createTextVNode(),
							createVNode("label", null, [
								withDirectives(createVNode("input", {
									id: "form_content2",
									"onUpdate:modelValue": ($event) => $data.formModel.content = $event,
									"data-id": "contact_item",
									name: "content",
									value: "移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）",
									type: "radio",
									class: "mr-2"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.content]]),
								createTextVNode(),
								createVNode("span", null, "移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）")
							]),
							createTextVNode(),
							createVNode("br"),
							createTextVNode(),
							createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `お問い合わせ内容 を選択してください。`), 1)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>お名前<span class="caution caution-custom" data-v-43791f19${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required",
					tag: "td",
					name: "name"
				}, {
					default: withCtx(({ errors }, _push, _parent, _scopeId) => {
						if (_push) _push(`<input id="name"${ssrRenderAttr("value", $data.formModel.name)} name="name" type="text" size="40" maxlength="25" data-id="contact_item" data-v-43791f19${_scopeId}> <div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(errors[0] && `お名前 を入力して下さい。`)}</div>`);
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
				_push(`</tr> <tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>お名前ふりがな<span class="caution caution-custom" data-v-43791f19${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|zenkaku_hiragana",
					tag: "td",
					name: "kana"
				}, {
					default: withCtx(({ errors }, _push, _parent, _scopeId) => {
						if (_push) _push(`<input id="kana"${ssrRenderAttr("value", $data.formModel.kana)} name="kana" type="text" size="40" maxlength="25" data-id="contact_item" data-v-43791f19${_scopeId}> <div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(errors[0] && `お名前ふりがな を入力して下さい。`)}</div>`);
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
							createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `お名前ふりがな を入力して下さい。`), 1)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>性別<span class="caution caution-custom" data-v-43791f19${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required",
					tag: "td",
					name: "sex"
				}, {
					default: withCtx(({ errors }, _push, _parent, _scopeId) => {
						if (_push) _push(`<label data-v-43791f19${_scopeId}><input id="form_sex1"${ssrIncludeBooleanAttr(ssrLooseEqual($data.formModel.sex, "女性")) ? " checked" : ""} name="sex" value="女性" type="radio" class="mr-2" data-v-43791f19${_scopeId}> <span data-v-43791f19${_scopeId}>女性</span></label> <br data-v-43791f19${_scopeId}> <label data-v-43791f19${_scopeId}><input id="form_sex1"${ssrIncludeBooleanAttr(ssrLooseEqual($data.formModel.sex, "男性")) ? " checked" : ""} name="sex" value="男性" type="radio" class="mr-2" data-v-43791f19${_scopeId}> <span data-v-43791f19${_scopeId}>男性</span></label> <br data-v-43791f19${_scopeId}> <div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(errors[0] && `性別 を選択してください。`)}</div>`);
						else return [
							createVNode("label", null, [
								withDirectives(createVNode("input", {
									id: "form_sex1",
									"onUpdate:modelValue": ($event) => $data.formModel.sex = $event,
									name: "sex",
									value: "女性",
									type: "radio",
									class: "mr-2"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.sex]]),
								createTextVNode(),
								createVNode("span", null, "女性")
							]),
							createTextVNode(),
							createVNode("br"),
							createTextVNode(),
							createVNode("label", null, [
								withDirectives(createVNode("input", {
									id: "form_sex1",
									"onUpdate:modelValue": ($event) => $data.formModel.sex = $event,
									name: "sex",
									value: "男性",
									type: "radio",
									class: "mr-2"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.sex]]),
								createTextVNode(),
								createVNode("span", null, "男性")
							]),
							createTextVNode(),
							createVNode("br"),
							createTextVNode(),
							createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `性別 を選択してください。`), 1)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>年齢<span class="caution caution-custom" data-v-43791f19${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|number",
					tag: "td",
					name: "age"
				}, {
					default: withCtx((validateItem, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input id="age"${ssrRenderAttr("value", $data.formModel.age)} name="age" type="text" size="5" maxlength="3" data-id="contact_item" data-v-43791f19${_scopeId}> 歳
                    `);
							if (!$options._isEmpty(validateItem.failedRules)) _push(`<div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(validateItem.failedRules.required ? $data.customMessageError.age.required : $data.customMessageError.age.invalidFormat)}</div>`);
							else _push(`<!---->`);
						} else return [
							withDirectives(createVNode("input", {
								id: "age",
								"onUpdate:modelValue": ($event) => $data.formModel.age = $event,
								name: "age",
								type: "text",
								size: "5",
								maxlength: "3",
								"data-id": "contact_item"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.age]]),
							createTextVNode(" 歳\n                    "),
							!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
								key: 0,
								class: "errorTxt"
							}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.age.required : $data.customMessageError.age.invalidFormat), 1)) : createCommentVNode("", true)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</tr> <tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>メールアドレス<span class="caution caution-custom" data-v-43791f19${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|email",
					tag: "td",
					name: "email"
				}, {
					default: withCtx((validateItem, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input id="email"${ssrRenderAttr("value", $data.formModel.email)} name="email" type="text" size="40" maxlength="100" data-id="contact_item" data-v-43791f19${_scopeId}> `);
							if (!$options._isEmpty(validateItem.failedRules)) _push(`<div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(validateItem.failedRules.required ? $data.customMessageError.email.required : $data.customMessageError.email.invalidFormat)}</div>`);
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
				_push(`</tr> <tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>住所<span class="caution caution-custom" data-v-43791f19${_scopeId}>※必須</span></th> <td data-v-43791f19${_scopeId}>`);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|zipcode",
					tag: "div",
					name: "zipcode"
				}, {
					default: withCtx((validateItem, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`
                      〒<input id="zipcode"${ssrRenderAttr("value", $data.formModel.zipcode)} name="zipcode" type="text" maxlength="100" data-id="contact_item" onkeyup="AjaxZip3.zip2addr(this,&#39;&#39;,&#39;address&#39;, &#39;address&#39;);" data-v-43791f19${_scopeId}> `);
							if (!$options._isEmpty(validateItem.failedRules)) _push(`<div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(validateItem.failedRules.required ? $data.customMessageError.zipcode.required : $data.customMessageError.zipcode.invalidFormat)}</div>`);
							else _push(`<!---->`);
						} else return [
							createTextVNode("\n                      〒"),
							withDirectives(createVNode("input", {
								id: "zipcode",
								"onUpdate:modelValue": ($event) => $data.formModel.zipcode = $event,
								name: "zipcode",
								type: "text",
								maxlength: "100",
								"data-id": "contact_item",
								onkeyup: "AjaxZip3.zip2addr(this,'','address', 'address');"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.zipcode]]),
							createTextVNode(),
							!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
								key: 0,
								class: "errorTxt"
							}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.zipcode.required : $data.customMessageError.zipcode.invalidFormat), 1)) : createCommentVNode("", true)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(` `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required",
					tag: "div",
					class: "mt-3",
					name: "address"
				}, {
					default: withCtx(({ errors }, _push, _parent, _scopeId) => {
						if (_push) _push(`<input id="address"${ssrRenderAttr("value", $data.formModel.address)} name="address" type="text" size="50" maxlength="100" data-id="contact_item" data-v-43791f19${_scopeId}> <div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(errors[0] && `ご住所 を入力して下さい。`)}</div>`);
						else return [
							withDirectives(createVNode("input", {
								id: "address",
								"onUpdate:modelValue": ($event) => $data.formModel.address = $event,
								name: "address",
								type: "text",
								size: "50",
								maxlength: "100",
								"data-id": "contact_item"
							}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.address]]),
							createTextVNode(),
							createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `ご住所 を入力して下さい。`), 1)
						];
					}),
					_: 2
				}, _parent, _scopeId));
				_push(`</td></tr> <tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>電話番号<span class="caution caution-custom" data-v-43791f19${_scopeId}>※必須</span></th> `);
				_push(ssrRenderComponent(_component_validation_provider, {
					rules: "required|tel",
					tag: "td",
					name: "tel"
				}, {
					default: withCtx((validateItem, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<input id="tel"${ssrRenderAttr("value", $data.formModel.tel)} name="tel" type="text" size="25" maxlength="15" data-id="contact_item" data-v-43791f19${_scopeId}> `);
							if (!$options._isEmpty(validateItem.failedRules)) _push(`<div class="errorTxt" data-v-43791f19${_scopeId}>${ssrInterpolate(validateItem.failedRules.required ? $data.customMessageError.tel.required : $data.customMessageError.tel.invalidFormat)}</div>`);
							else _push(`<!---->`);
						} else return [
							withDirectives(createVNode("input", {
								id: "tel",
								"onUpdate:modelValue": ($event) => $data.formModel.tel = $event,
								name: "tel",
								type: "text",
								size: "25",
								maxlength: "15",
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
				_push(`</tr> <tr data-v-43791f19${_scopeId}><th data-v-43791f19${_scopeId}>質問事項等</th> <td data-v-43791f19${_scopeId}><textarea name="description" cols="40" rows="6" data-id="contact_item" data-v-43791f19${_scopeId}>${ssrInterpolate($data.formModel.description)}</textarea></td></tr></tbody></table> `);
				_push(ssrRenderComponent(_component_recaptcha, null, null, _parent, _scopeId));
				_push(` <p class="btnarea" data-v-43791f19${_scopeId}><input name="submit1" type="submit" value="送信内容確認" data-v-43791f19${_scopeId}> <input name="reset" type="button" data-id="reset" value="リセット" data-v-43791f19${_scopeId}></p></form> <p id="secure" data-v-43791f19${_scopeId}>
            当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。
          </p></div>`);
			} else return [
				$options.checkError(observeSlot.errors) ? (openBlock(), createBlock("div", {
					key: 0,
					class: "errorBox errorBox-custom"
				}, [
					createVNode("h4", null, "入力内容に誤りがあります。以下を参考にして再度入力内容をご確認ください。"),
					createTextVNode(),
					createVNode("ul", null, [(openBlock(true), createBlock(Fragment, null, renderList($options.getErrorList(observeSlot), (error, key) => {
						return openBlock(), createBlock("li", { key }, toDisplayString(error), 1);
					}), 128))])
				])) : createCommentVNode("", true),
				createTextVNode(),
				createVNode("div", { class: "mobile-box" }, [
					createVNode("p", { class: "caution" }, "※印は必須項目"),
					createTextVNode(),
					createVNode("form", { onSubmit: withModifiers($options.submitForm, ["prevent"]) }, [
						createVNode("table", { class: "table-horz" }, [createVNode("tbody", null, [
							createVNode("tr", null, [
								createVNode("th", null, [createTextVNode("お問い合わせ内容"), createVNode("span", { class: "caution caution-custom" }, "※必須")]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required",
									tag: "td",
									name: "content"
								}, {
									default: withCtx(({ errors }) => [
										createVNode("label", null, [
											withDirectives(createVNode("input", {
												id: "form_content1",
												"onUpdate:modelValue": ($event) => $data.formModel.content = $event,
												"data-id": "contact_item",
												name: "content",
												value: "移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）",
												type: "radio",
												class: "mr-2"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.content]]),
											createTextVNode(),
											createVNode("span", null, "移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）")
										]),
										createTextVNode(),
										createVNode("br"),
										createTextVNode(),
										createVNode("label", null, [
											withDirectives(createVNode("input", {
												id: "form_content2",
												"onUpdate:modelValue": ($event) => $data.formModel.content = $event,
												"data-id": "contact_item",
												name: "content",
												value: "移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）",
												type: "radio",
												class: "mr-2"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.content]]),
											createTextVNode(),
											createVNode("span", null, "移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）")
										]),
										createTextVNode(),
										createVNode("br"),
										createTextVNode(),
										createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `お問い合わせ内容 を選択してください。`), 1)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [createTextVNode("お名前"), createVNode("span", { class: "caution caution-custom" }, "※必須")]),
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
								createVNode("th", null, [createTextVNode("お名前ふりがな"), createVNode("span", { class: "caution caution-custom" }, "※必須")]),
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
										createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `お名前ふりがな を入力して下さい。`), 1)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [createTextVNode("性別"), createVNode("span", { class: "caution caution-custom" }, "※必須")]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required",
									tag: "td",
									name: "sex"
								}, {
									default: withCtx(({ errors }) => [
										createVNode("label", null, [
											withDirectives(createVNode("input", {
												id: "form_sex1",
												"onUpdate:modelValue": ($event) => $data.formModel.sex = $event,
												name: "sex",
												value: "女性",
												type: "radio",
												class: "mr-2"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.sex]]),
											createTextVNode(),
											createVNode("span", null, "女性")
										]),
										createTextVNode(),
										createVNode("br"),
										createTextVNode(),
										createVNode("label", null, [
											withDirectives(createVNode("input", {
												id: "form_sex1",
												"onUpdate:modelValue": ($event) => $data.formModel.sex = $event,
												name: "sex",
												value: "男性",
												type: "radio",
												class: "mr-2"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelRadio, $data.formModel.sex]]),
											createTextVNode(),
											createVNode("span", null, "男性")
										]),
										createTextVNode(),
										createVNode("br"),
										createTextVNode(),
										createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `性別 を選択してください。`), 1)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [createTextVNode("年齢"), createVNode("span", { class: "caution caution-custom" }, "※必須")]),
								createTextVNode(),
								createVNode(_component_validation_provider, {
									rules: "required|number",
									tag: "td",
									name: "age"
								}, {
									default: withCtx((validateItem) => [
										withDirectives(createVNode("input", {
											id: "age",
											"onUpdate:modelValue": ($event) => $data.formModel.age = $event,
											name: "age",
											type: "text",
											size: "5",
											maxlength: "3",
											"data-id": "contact_item"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.age]]),
										createTextVNode(" 歳\n                    "),
										!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
											key: 0,
											class: "errorTxt"
										}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.age.required : $data.customMessageError.age.invalidFormat), 1)) : createCommentVNode("", true)
									]),
									_: 1
								})
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [createTextVNode("メールアドレス"), createVNode("span", { class: "caution caution-custom" }, "※必須")]),
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
								createVNode("th", null, [createTextVNode("住所"), createVNode("span", { class: "caution caution-custom" }, "※必須")]),
								createTextVNode(),
								createVNode("td", null, [
									createVNode(_component_validation_provider, {
										rules: "required|zipcode",
										tag: "div",
										name: "zipcode"
									}, {
										default: withCtx((validateItem) => [
											createTextVNode("\n                      〒"),
											withDirectives(createVNode("input", {
												id: "zipcode",
												"onUpdate:modelValue": ($event) => $data.formModel.zipcode = $event,
												name: "zipcode",
												type: "text",
												maxlength: "100",
												"data-id": "contact_item",
												onkeyup: "AjaxZip3.zip2addr(this,'','address', 'address');"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.zipcode]]),
											createTextVNode(),
											!$options._isEmpty(validateItem.failedRules) ? (openBlock(), createBlock("div", {
												key: 0,
												class: "errorTxt"
											}, toDisplayString(validateItem.failedRules.required ? $data.customMessageError.zipcode.required : $data.customMessageError.zipcode.invalidFormat), 1)) : createCommentVNode("", true)
										]),
										_: 1
									}),
									createTextVNode(),
									createVNode(_component_validation_provider, {
										rules: "required",
										tag: "div",
										class: "mt-3",
										name: "address"
									}, {
										default: withCtx(({ errors }) => [
											withDirectives(createVNode("input", {
												id: "address",
												"onUpdate:modelValue": ($event) => $data.formModel.address = $event,
												name: "address",
												type: "text",
												size: "50",
												maxlength: "100",
												"data-id": "contact_item"
											}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.address]]),
											createTextVNode(),
											createVNode("div", { class: "errorTxt" }, toDisplayString(errors[0] && `ご住所 を入力して下さい。`), 1)
										]),
										_: 1
									})
								])
							]),
							createTextVNode(),
							createVNode("tr", null, [
								createVNode("th", null, [createTextVNode("電話番号"), createVNode("span", { class: "caution caution-custom" }, "※必須")]),
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
											size: "25",
											maxlength: "15",
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
								createVNode("th", null, "質問事項等"),
								createTextVNode(),
								createVNode("td", null, [withDirectives(createVNode("textarea", {
									"onUpdate:modelValue": ($event) => $data.formModel.description = $event,
									name: "description",
									cols: "40",
									rows: "6",
									"data-id": "contact_item"
								}, null, 8, ["onUpdate:modelValue"]), [[vModelText, $data.formModel.description]])])
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
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/idosuper/form/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var form_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-43791f19"]]);

export { form_default as default };
//# sourceMappingURL=form-B8NM3PXd.mjs.map
