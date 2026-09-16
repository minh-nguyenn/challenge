<template>
  <div class="wrap-content detail-event-custom">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2 class="info-title" v-html="eventDetail.title">
      </h2>
      <app-article v-if="eventItemsCheck && eventItemsCheck.length" title="概要" class="mb-6 d-none-des">
      </app-article>
      <div v-if="eventItemsCheck && eventItemsCheck.length" class="mobile-box">
        <table class="table-horz mobile-box mb-5">
          <tbody>
            <tr v-for="(evItem, index) in eventItemsCheck" :key="index" class="item01">
              <th v-html="evItem.item_title"></th>
              <td v-html="$transformImageSrc(evItem.item_body)"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="event-content" v-html="$transformImageSrc(eventDetail.body)">
      </div>
      <app-article title="概要" class="mb-6 d-none-des">
      </app-article>
      <div class="mobile-box">
        <table class="table-horz mobile-box">
          <tbody>

            <tr v-if="(eventDetail.period_from && eventDetail.period_from !== '0000-00-00') ||
              (eventDetail.period_to && eventDetail.period_to !== '0000-00-00')" class="item01">
              <th>キャンペーン期間</th>

              <td>{{ YMDFormat(eventDetail['period_from']) }} <span
                  v-if="eventDetail['period_from'] || eventDetail['period_to']">〜</span> {{
                    YMDFormat(eventDetail['period_to']) }}</td>
            </tr>

            <tr v-if="eventDetail.close">
              <th>応募締切</th>
              <td>{{ YMDFormat(eventDetail['close']) }}まで</td>
            </tr>

            <tr v-for="(evItem, index) in eventItemsUncheck" :key="index" class="item01">
              <th v-html="evItem.item_title"></th>
              <td v-html="$transformImageSrc(evItem.item_body)"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
    <AppButtonNavigation class="btn-back-event-detail" is-back title="一覧へ戻る" long-btn href="/event">
    </AppButtonNavigation>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { formatDateYMD } from "~/utils/index"
import AppArticle from "~/components/App/Article.vue";

export default {
  components: { AppArticle, AppButtonNavigation },
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    // Phai lay truoc await: sau await se mat ngu canh Nuxt
    const __nuxtApp = useNuxtApp()
    

    const { params, $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        const response = await $microcms.get({

        endpoint: `store-event/${params.id}`,

        })

        return {

        eventDetail: response

        };
  
      }
    )
    __nuxtApp.runWithContext(() => useHead({

        title: `${__d.value?.eventDetail.title?.replaceAll('<br>', '') || ''}｜キャンペーン・イベント情報｜遠鉄ストア`,

      }))
    return { ...(__d.value || {}) }
  },
  data() {
    return {}
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
          text: 'キャンペーン・イベント情報',
          disabled: false,
          href: '/event/',
        },
        {
          text: this.eventDetail.title?.replaceAll('<br>', '') || '',
          disabled: true,
        },
      ]
    },
    eventItemsCheck() {
      return (this.eventDetail.event_items || []).filter(e => e.item_check)
    },
    eventItemsUncheck() {
      return (this.eventDetail.event_items || []).filter(e => !e.item_check)
    }
  },
  methods: {
    formatDateYMD,
    getDayOfWeek(date) {
      const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
      const dayIndex = date.getDay();
      return daysOfWeek[dayIndex];
    },
    YMDFormat(inputDate) {
      if (!inputDate) return 'YYYY年 MM月 DD日'
      const date = new Date(Date.parse(inputDate));
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}年 ${month}月 ${day}日(${this.getDayOfWeek(date)})`
    },
  }
}
</script>

<style lang="scss">
.btn-back-event-detail a {
  background: url('/assets/images/ico_arrow01back.webp') no-repeat 28% center #f3e7cd !important;
}

.detail-event-custom {
  a:has(img) {
    display: flex;
    margin: auto;

    img {
      width: auto !important;
      margin: auto;
      max-width: 100vw;
    }
  }

  a:has(img) :hover {
    opacity: 0.8;
  }
}
</style>
<style scoped lang="scss">
.wrap-content {

  @media only screen and (min-width: 1024px) {
    padding: 0;
    padding-bottom: 50px;

    main {
      padding-bottom: 50px;
    }
  }

  main {
    padding-bottom: 40px;
  }

  .textAC {
    font-size: 14px;
  }
}

.date {
  margin-bottom: 10px;
  margin-top: 20px;
}

.event-content {
  ::v-deep {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
