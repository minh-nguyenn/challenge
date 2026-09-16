<template>
  <special-detail :special="special" />
</template>

<script>
export default {
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    const { query, error, $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        try {

        const special = await $microcms.get({

          endpoint: `store-special/${query.id}?draftKey=${query.draftKey}`,

        })

        return {

          special,

        }

        } catch (e) {

        error({ statusCode: 404, message: 'This page could not be found' })

        }
  
      }
    )
    return { ...(__d.value || {}) }
  },
}
</script>
