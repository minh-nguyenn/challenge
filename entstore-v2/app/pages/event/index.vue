<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>
        キャンペーン・イベント情報
      </h2>
      <app-article class="d-none-des mb-0" title="キャンペーン・イベント一覧"></app-article>
      <article class="event-list event-list-custom">
        <a :href="`/event/detail/${event.id}`" v-for="event in eventData" :key="event.id" class="contentInner d-block">
          <h4 v-html="event.title"></h4>
          <section v-if="event.filename1 && event.filename1.url" class="ColumnS">
            <img :src="$appendWebpFormat(event.filename1?.url)" :alt="event.title">
          </section>
          <section class="ColumnS">
            <table class="table-vert">
              <tbody>
                <tr v-if="event.period_from || event.period_to">
                  <th>キャンペーン期間</th>
                  <td>{{ YMDFormat(event.period_from) }} <span v-if="event.period_from || event.period_to">'〜'</span> {{
                    YMDFormat(event.period_to) }}</td>
                </tr>
              </tbody>
            </table>
            <p class="btn-sm">
              <br>
              <a :href="`/event/detail/${event.id}`">詳細はこちら</a>
            </p>
            <p class="btn">詳細はこちら<svg class="icon">
                <use xlink:href="#icon_arrow03"></use>
              </svg></p>
          </section>
        </a>
      </article>
      <AppButtonNavigation class="d-none-mobile mt-10" title="前のページへ戻る" is-back href="/"></AppButtonNavigation>

    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { fetchDataV2 } from "~/utils/index.js";
import AppArticle from "~/components/App/Article.vue";

export default {
  components: { AppArticle, AppButtonNavigation },
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    useHead({

        title: 'キャンペーン・イベント情報｜遠鉄ストア',

      })

    const { $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        if (import.meta.server) {


        const response = await fetchDataV2($microcms, {

          endpoint: 'store-event'

        })

        return {

          eventData: response.contents

        };

        } else {

        return {}

        }

  
      }
    )
    return { ...(__d.value || {}) }
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: 'キャンペーン・イベント情報',
          disabled: true,
          href: '/event',
        },
      ]
    }
  },
  methods: {
    toEventDetail(id) {
      window.location.href = `/event/detail/${id}`
    },
    getDayOfWeek(date) {
      const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
      const dayIndex = date.getDay();
      return daysOfWeek[dayIndex];
    },
    YMDFormat(inputDate) {
      if (!inputDate) return ''
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
body:has(.event-list) {
  margin: 0px !important;
}

.event-list-custom {
  h4 {
    color: #333;
  }

  .table-vert {

    th,
    td {
      color: #333;
    }
  }
}

@media only screen and (max-width: 768px) {

  .event-list {
    .table-vert {
      th {
        min-width: 108px;
      }
    }
  }
}
</style>
<style scoped lang="scss">
.event-list {

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  .contentInner {
    padding: 0 12px 20px;

    @media only screen and (min-width: 1024px) {
      padding: 0;
    }

    @media only screen and (max-width: 767px) {
      &:hover {
        background-color: #f3e7cd;

        td {
          background-color: #f3e7cd;
        }
      }

      border-bottom: 2px solid #ccc;
    }

    h4 {
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      border-bottom: 5px #f3e7cd solid;
      padding-bottom: 5px;
      text-align: left;
      margin-bottom: 15px;

      &:first-of-type {
        padding-top: 30px;

        @media only screen and (max-width: 768px) {
          font-size: 16px;
          color: #333333;
        }
      }
    }

    .ColumnS {
      @media only screen and (min-width: 768px) {
        width: 50%;
        padding-right: 20px;
        float: left;

        .table-vert,
        .btn {
          display: none;
        }
      }

      @media only screen and (max-width: 767px) {
        .btn-sm {
          display: none;
        }
      }

      img {
        width: 100%;
      }

      a {
        color: #087295;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }

      .btn {
        width: 50%;
        margin: 15px auto 0;
        padding: 15px 0;
        background-color: #331e0e;
        border-radius: 100px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        line-height: 19.6px;
        min-width: 185px;
        cursor: pointer;
        position: relative;
        z-index: 1000000;

        .icon {
          display: inline-block;
          margin-top: -3px;
          padding-right: 3px;
          width: 25px;
          height: 25px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
