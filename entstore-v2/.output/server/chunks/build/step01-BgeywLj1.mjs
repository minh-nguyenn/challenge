import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { mergeProps, ref, inject, getCurrentInstance, createVNode, resolveDynamicComponent, withCtx, renderSlot, reactive, provide, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderSlot } from 'vue/server-renderer';

//#region app/components/ValidationObserver.vue
var _sfc_main$2 = {
	__name: "ValidationObserver",
	__ssrInlineRender: true,
	setup(__props, { expose: __expose }) {
		/**
		* Thay <ValidationObserver> cua vee-validate 3.
		*
		* Cach dung trong 2 trang form:
		*   <ValidationObserver ref="x" v-slot="observeSlot">
		*     <div v-if="checkError(observeSlot.errors)"> ... getErrorList(observeSlot) ...
		*
		* Trang goi qua ref: this.$refs.x.validate() -> Promise<boolean>.
		* Slot prop `errors` la object { tenTruong: [loi...] } — dung dang ma
		* checkError()/getErrorList() cua trang mong doi.
		*/
		const providers = ref([]);
		const errors = reactive({});
		provide("validationObserver", {
			register(p) {
				providers.value.push(p);
				errors[p.name] = [];
			},
			unregister(p) {
				providers.value = providers.value.filter((x) => x !== p);
				delete errors[p.name];
			}
		});
		async function validate() {
			let ok = true;
			for (const p of providers.value) {
				const good = p.validate();
				errors[p.name] = [...p.errors.value];
				if (!good) ok = false;
			}
			return ok;
		}
		function reset() {
			for (const p of providers.value) {
				p.reset();
				errors[p.name] = [];
			}
		}
		__expose({
			validate,
			reset,
			errors
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "validation-observer" }, _attrs))} data-v-bc6a69bf>`);
			ssrRenderSlot(_ctx.$slots, "default", {
				errors,
				invalid: false,
				validate,
				reset
			}, null, _push, _parent);
			_push(`</div>`);
		};
	}
};
var _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ValidationObserver.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ValidationObserver_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main$2, [["__scopeId", "data-v-bc6a69bf"]]);
//#endregion
//#region app/utils/validate-rules.js
/**
* Cac luat kiem tra chep NGUYEN VAN tu plugins/vee-validate.js cua site goc
* (ke ca cac regex dai cua so dien thoai Nhat), de hanh vi kiem tra khong doi.
*
* Tra ve true neu hop le, hoac chuoi thong bao loi.
*/
var regExpZenkaku = /^[ぁ-んー\s]+$/u;
var regExpNumber = /^\d+$/;
function isValidEmail(email) {
	return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
}
function isValidZipcode(code) {
	return /^[0-9]{3}-[0-9]{4}$/.test(code) || /^[0-9]{7}$/.test(code);
}
function isValidTel(code) {
	return [
		/^[0][0-9]{1}[-ーー−][0-9]{4}[-ーー−][0-9]{4}$/,
		/^[0][0-9]{2}[-ーー−][0-9]{3}[-ーー−][0-9]{4}$/,
		/^[0][0-9]{3}[-ーー−][0-9]{2}[-ーー−][0-9]{4}$/,
		/^[0][0-9]{4}[-ーー−][0-9]{1}[-ーー−][0-9]{4}$/,
		/^(0[256789]0)[-ーー−][0-9]{4}[-ーー−][0-9]{4}$/,
		/^\+[0-9]{1,2}[ ][0-9]{2,4}[-ーー−][0-9]{3,4}[-ーー−][0-9]{4}$|\+[0-9]{1,2}[ ][0-9]{10}$|\+[0-9]{11,12}$/,
		/^[0-9]{10,11}$/
	].some((p) => p.test(code));
}
var RULES = {
	required(value, _p, field) {
		if (value === 0) return true;
		if (!value || String(value).trim().length === 0) return `${field}は、必ず指定してください。`;
		return true;
	},
	email: (v) => isValidEmail(v) || "メールアドレスの形式が正しくありません。",
	zenkaku_hiragana: (v) => regExpZenkaku.test(v) || "お名前ふりがな を入力して下さい。",
	number: (v) => regExpNumber.test(v) || "数字で入力してください。",
	zipcode: (v) => isValidZipcode(v) || "郵便番号の形式が正しくありません。",
	tel: (v) => isValidTel(v) || "電話番号の形式が正しくありません。",
	email_confirmation: (v, target) => v === target || "メールアドレスが一致しません。",
	isTrue: (v) => v === 0 ? true : !v || v.length === 0 ? "必ず指定してください。" : true,
	maxlength: (v, n) => String(v).length > Number(n) ? `${n}文字以下にしてください。` : true,
	minlength: (v, n) => String(v).length < Number(n) ? `${n}文字以上にしてください。` : true
};
/**
* Chay chuoi rule dang "required|email" hoac "required|email_confirmation:@email".
* `resolve` dung de tra gia tri cua truong khac khi rule tham chieu @ten.
*/
function runRules(rulesStr, value, fieldName, resolve = () => void 0) {
	if (!rulesStr) return [];
	const errors = [];
	for (const part of String(rulesStr).split("|")) {
		const [name, arg] = part.split(":");
		const fn = RULES[name];
		if (!fn) continue;
		const r = fn(value, arg && arg.startsWith("@") ? resolve(arg.slice(1)) : arg, fieldName);
		if (r !== true) errors.push(typeof r === "string" ? r : `${fieldName}が正しくありません。`);
	}
	return errors;
}
//#endregion
//#region app/components/ValidationProvider.vue
var _sfc_main$1 = {
	__name: "ValidationProvider",
	__ssrInlineRender: true,
	props: {
		rules: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		tag: {
			type: String,
			default: "span"
		},
		vid: {
			type: String,
			default: ""
		}
	},
	setup(__props, { expose: __expose }) {
		/**
		* Thay <validation-provider> cua vee-validate 3 (chi chay tren Vue 2).
		*
		* Cach dung trong 2 trang form (36 lan, dang giong het nhau):
		*   <validation-provider v-slot="{ errors }" rules="required|email" tag="td" name="email">
		*     <input v-model="formModel.email">
		*     <div class="errorTxt">{{ errors[0] && '...' }}</div>
		*   </validation-provider>
		*
		* `tag` quyet dinh the boc (thuong la td trong bang) — phai giu dung, neu khong
		* bo cuc bang se vo.
		*
		* Provider tu dang ky voi ValidationObserver cha de nut gui kiem tra duoc
		* toan bo bieu mau cung luc.
		*/
		const props = __props;
		const errors = ref([]);
		inject("validationObserver", null);
		const inst = getCurrentInstance();
		/** Doc gia tri hien tai tu the <input>/<select>/<textarea> ben trong slot */
		function currentValue() {
			const el = inst?.vnode?.el;
			if (!el || !el.querySelector) return "";
			const f = el.querySelector("input, select, textarea");
			if (!f) return "";
			if (f.type === "checkbox") return f.checked ? f.value || true : "";
			return f.value;
		}
		function validate() {
			errors.value = runRules(props.rules, currentValue(), props.name, (other) => {
				const f = (inst?.vnode?.el?.closest("form") || void 0).querySelector(`[name="${other}"]`);
				return f ? f.value : void 0;
			});
			return errors.value.length === 0;
		}
		function reset() {
			errors.value = [];
		}
		props.name || props.vid;
		__expose({
			validate,
			reset,
			errors
		});
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.tag), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) ssrRenderSlot(_ctx.$slots, "default", {
						errors: errors.value,
						valid: errors.value.length === 0,
						failed: errors.value.length > 0
					}, null, _push, _parent, _scopeId);
					else return [renderSlot(_ctx.$slots, "default", {
						errors: errors.value,
						valid: errors.value.length === 0,
						failed: errors.value.length > 0
					})];
				}),
				_: 3
			}), _parent);
		};
	}
};
var _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ValidationProvider.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
//#endregion
//#region app/components/Recaptcha.vue
var _sfc_main = {
	__name: "Recaptcha",
	__ssrInlineRender: true,
	setup(__props) {
		/**
		* Thay <recaptcha> cua @nuxtjs/recaptcha.
		* Ban demo khong goi reCAPTCHA that (can khoa va domain da dang ky), nen
		* component nay chi giu cho de bo cuc khong doi. Trang van gui duoc form.
		*/
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "recaptcha-placeholder" }, _attrs))}></div>`);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Recaptcha.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
//#region app/assets/images/step01.webp
var step01_default = "" + __buildAssetsURL("step01.5IFnBZrV.webp");

export { ValidationObserver_default as V, _sfc_main as _, _sfc_main$1 as a, step01_default as s };
//# sourceMappingURL=step01-BgeywLj1.mjs.map
