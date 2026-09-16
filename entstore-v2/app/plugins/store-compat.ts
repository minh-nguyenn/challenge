/**
 * Thay Vuex store cua site goc (store/index.js — chi 2 truong, 2 getter,
 * 2 mutation) de 6 trang form khong phai viet lai.
 *
 * Chuoi form -> confirm -> thanks can giu du lieu qua nhieu trang, nen dung
 * useState cua Nuxt (co SSR, chia se giua cac trang) thay cho Vuex.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const state = reactive({
    idosuperFormData: {} as Record<string, any>,
    contactFormData: {} as Record<string, any>,
  })

  const store = {
    state,
    getters: {
      get getIdosuperFormData() {
        return state.idosuperFormData
      },
      get getContactFormData() {
        return state.contactFormData
      },
    },
    commit(type: string, value: any) {
      if (type === 'setIdosuperFormData') state.idosuperFormData = value
      else if (type === 'setContactFormData') state.contactFormData = value
      else console.warn('[store] mutation khong biet:', type)
    },
  }

  nuxtApp.vueApp.config.globalProperties.$store = store
  return { provide: { store } }
})
