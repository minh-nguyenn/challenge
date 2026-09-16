/**
 * Cai ham $ toi gian truoc khi cac trang goi window.$(...) trong mounted().
 * Chi chay o client (.client.ts) vi SSR khong co window.
 */
import { installJQueryShim } from '~/utils/flexslider-lite.js'

export default defineNuxtPlugin(() => {
  installJQueryShim()
})
