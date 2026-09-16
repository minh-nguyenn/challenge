<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>
        遠鉄ストアからのお知らせ
      </h2>
      <div class="wrap-info d-none-mobile">
        <section v-for="item in infoData" :key="item.id" class="info-item">
          <p class="mb-0">

            <img v-if="item.thumbnail && item.thumbnail.url" :src="$appendWebpFormat(item.thumbnail.url)" alt="" class="thum">
            <img v-else src="~assets/images/img_noimgdark.webp" class="thum" />

          <div class="contentInner">
            <time>{{ formatDateYMD(item.post_date) }}</time>
            <span v-html="checkLengthTitle(item.title, 100).replaceAll('<br>', '')"></span>
            <a class="d-block" :href="`/info/detail/${item.id}`">詳細はこちら</a>
          </div>
          </p>
        </section>
      </div>
      <div class="wrap-info d-none-des">
        <section v-for="item in infoData" :key="item.id" class="newsList">
          <a :href="`/info/detail/${item.id}`">
            <figure>
              <img v-if="item.thumbnail && item.thumbnail.url" :src="$appendWebpFormat(item.thumbnail.url)" alt="" class="fullImage">
              <img v-else src="~assets/images/img_noimgdark.webp" class="fullImage" />
            </figure>
            <div class="txt">
              <p class="date">{{ formatDateYMD(item.post_date) }}</p>
              <div class="info-title" v-html="checkLengthTitle(item.title, 100).replaceAll('<br>', '')"></div>
            </div>
          </a>
        </section>
      </div>
    </main>
    <div class="mt-5">
      <AppButtonNavigation title="前のページへ戻る" class="d-none-mobile" is-back href="/"></AppButtonNavigation>
    </div>
  </div>
</template>

<script>
import _isEmpty from 'lodash/isEmpty'
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { fetchDataV2, formatDateYMD, checkLengthTitle } from "~/utils/index"

export default {
  components: { AppButtonNavigation },
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    useHead({

        title: '遠鉄ストアからのお知らせ｜遠鉄ストア',

      })

    const { $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        const response = await fetchDataV2($microcms, {

        endpoint: 'store-info',

        orders: '-post_date',

        })

        const result = (response.contents || [])


        return {

        infoData: result

        };
  
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
          href: '/'
        },
        {
          text: '遠鉄ストアからのお知らせ',
          disabled: true,
          href: '/info'
        },
      ],}
  },

  methods: {
    _isEmpty,
    formatDateYMD,
    checkLengthTitle
  }
}
</script>

<style scoped lang="scss">
.wrap-info {
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-bottom: 50px;
  }

  .info-item {
    display: flex;
    margin-right: 20px;
    margin-bottom: 0;
    font-size: 14px;
    border-bottom: 2px solid #ccc;
    padding: 15px 5px 15px 15px;

    &:first-of-type {
      border-top: 2px solid #ccc;
    }

    .contentInner {
      padding-left: 15px;
    }

    @media only screen and (min-width: 1024px) {
      display: block;
      border: none !important;
      padding: 0;
      margin-bottom: 15px;

      .contentInner {
        padding-left: 0;
      }
    }

    .thum {
      width: 120px;
      height: auto;
      object-fit: cover;

      @media only screen and (min-width: 1024px) {
        width: 220px;
        height: 147px;
      }
    }

    a {
      color: #087295;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }

  .newsList {
    display: table;
    width: 100%;
    border-bottom: 2px solid #ccc;

    &:first-child {
      border-top: 2px solid #ccc;
    }

    &:nth-child(even) {
      background-color: #f5f1e8;
    }

    a {
      display: flex;
      padding: 15px 10px;
      background: url('/assets/images/ico_arrow01.webp') no-repeat;
      background-position: 98% 50%;
      color: #333;
      background-size: 20px;

      &:hover {
        background-color: #f3e7cd;
      }

      figure {
        img {
          width: 120px;
          height: auto;
        }
      }

      .txt {
        display: table-cell;
        width: 55%;
        vertical-align: top;
        padding-right: 20px;
        padding-left: 30px;

        p {
          margin-bottom: 8px;
          color: #999;
          font-size: 14px;
        }

        .info-title {
          color: #ce2339;
          font-size: 16px;
          line-height: 22.4px;
        }
      }
    }
  }
}

::v-deep .v-breadcrumbs {
  @media only screen and (max-width: 1023px) {
    padding-left: 10px !important;
  }
}
</style>

<style lang="scss">
@media only screen and (max-width: 1023px) {
  .wrap-info .newsList a .txt p {
    margin: 0 0 10px;
    margin-bottom: 10px !important;
    line-height: 16px;
  }

  .wrap-info .newsList a .txt {
    padding-right: 0px !important;

    width: calc(55% + 10px) !important;
  }
}

@media only screen and (max-width: 320px) {
  .wrap-info .newsList a .txt {
    padding-right: 15px !important;
  }
}
</style>
