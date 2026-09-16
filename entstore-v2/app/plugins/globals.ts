/**
 * Khai bao lai cac helper toan cuc ma site goc tiem qua plugin cua Nuxt 2,
 * vi 19 file .vue goi thang trong <template> (vd :src="$appendWebpFormat(x)").
 * Giu nguyen ten de khong phai sua template.
 *
 * Them $vuetify.breakpoint (shop/index.vue dung 2 lan) — chi can .mobile.
 */
import { appendWebpFormat, transformImageSrc } from '~/composables/useImage'

export default defineNuxtPlugin((nuxtApp) => {
  const vm = nuxtApp.vueApp.config.globalProperties
  vm.$appendWebpFormat = appendWebpFormat
  vm.$transformImageSrc = transformImageSrc

  // Nuxt 2 tiem $microcms toan cuc; 6 file goi this.$microcms.get(...) luc chay.
  // Tra ve cung composable (di qua /api/cms nen key van o phia server).
  vm.$microcms = useMicrocms()

  // Vuetify cu: $vuetify.breakpoint.mobile = true khi < 1264px (mobileBreakpoint mac dinh)
  const width = ref(1280)
  if (import.meta.client) {
    const update = () => (width.value = window.innerWidth)
    update()
    window.addEventListener('resize', update)
  }
  vm.$vuetify = reactive({
    breakpoint: computed(() => ({
      width: width.value,
      mobile: width.value < 1264,
      xs: width.value < 600,
      smAndDown: width.value < 960,
      mdAndUp: width.value >= 960,
    })),
  })
})
