/**
 * Thay `import { mapGetters } from "vuex"` cua 4 trang confirm/thanks.
 * Chi ho tro dang mang: mapGetters(['getContactFormData']).
 */
export function mapGetters(keys) {
  const out = {}
  const list = Array.isArray(keys) ? keys : Object.keys(keys)
  for (const k of list) {
    out[k] = function () {
      // Vao thang trang confirm (chua qua buoc form) thi store rong.
      // Tra {} thay vi undefined de template khong vo — ban goc cung hien trang trong.
      return this.$store.getters[k] || {}
    }
  }
  return out
}
