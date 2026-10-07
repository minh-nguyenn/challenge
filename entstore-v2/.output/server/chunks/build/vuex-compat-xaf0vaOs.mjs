//#region app/utils/vuex-compat.js
/**
* Thay `import { mapGetters } from "vuex"` cua 4 trang confirm/thanks.
* Chi ho tro dang mang: mapGetters(['getContactFormData']).
*/
function mapGetters(keys) {
	const out = {};
	const list = Array.isArray(keys) ? keys : Object.keys(keys);
	for (const k of list) out[k] = function() {
		return this.$store.getters[k] || {};
	};
	return out;
}

export { mapGetters as m };
//# sourceMappingURL=vuex-compat-xaf0vaOs.mjs.map
