<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <p class="date mobile-box d-none-des">{{formatDateYMD(newsDetail.post_date)}}</p>
      <h2 class="news-title" v-html="newsDetail.title"></h2>
      <div class="textAC" v-html="$transformImageSrc(newsDetail.body)"></div>

      <AppButtonNavigation is-back href="/news" title="前のページへ戻る" class="d-none-mobile" ></AppButtonNavigation>
      <AppButtonNavigation is-back href="/news" title="一覧へ戻る" class="d-none-des custom-btn-info" long-btn ></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { formatDateYMD } from "~/utils/index"

export default {
  components: {AppButtonNavigation},
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    // Phai lay truoc await: sau await se mat ngu canh Nuxt
    const __nuxtApp = useNuxtApp()
    

    const { params, $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        if (import.meta.server) {

        const response = await $microcms.get({

          endpoint: `store-news/${params.id}`,

        })

        return {

          newsDetail: response

        };

        } else {

        return {}

        }
  
      }
    )
    __nuxtApp.runWithContext(() => useHead({

        title: `${__d.value?.newsDetail.title?.replaceAll('<br>', '') || ''}｜企業情報・ニュースリリース｜遠鉄ストア`,

      }))
    return { ...(__d.value || {}) }
  },
  data() {
    return {
    }
  },

  computed: {
    breadcrumbItems() {
      return [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: '企業情報・ニュースリリース',
          disabled: false,
          href: '/news/',
        },
        {
          text: this.newsDetail.title?.replaceAll('<br>', '') || '',
          disabled: true,
        },
      ]
    }
  },
  methods: {
    formatDateYMD
  },
}
</script>

<style lang="scss">
.custom-btn-info{
  margin-bottom: 20px;
}
</style>
<style scoped lang="scss">
@media only screen and (max-width: 1023px) {
  .date {
    margin-bottom: 10px;
    margin-top: 20px;
    color: #333333;
  }

  .news-title {
    padding-top: 0 !important;
    line-height: 31.2px !important;
  }
}

.textAC {
  ::v-deep {
    img {
      width: 100%;
      height: auto;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-bottom: 70px;
  }
}
</style>
