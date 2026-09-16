<template>
  <div class="wrap-content shop-detail-container">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>{{ (shopDetail.shopName) + (shopDetail.subName || '') }}</h2>
      <p v-if="shopDetail.detail?.title" class="lead d-none-mobile" v-html="shopDetail.detail?.title" />
      <AppArticle v-if="infoData && infoData.length > 0" title="お知らせ">
        <ul class="news">
          <li v-for="item in infoData" :key="item.id">
            {{ formatDateMomentYMD(item.post_date) }}
            <span v-if="item.category && item.category.length" class="category">{{ item.category.toString() }}</span>
            <a :href="`/info/detail/${item.id}`" v-html="checkLengthTitle(item.title, 100).replaceAll('<br>', '')"></a>
          </li>
        </ul>
      </AppArticle>
      <div v-if="shopDetail.detail?.image.length" class="d-flex justify-center shop-bg">
        <div class="shop-img" :class="{ 'bit-img': shopDetail.detail?.image.length < 3 }">
          <p class="d-none-des" v-html="shopDetail.detail?.title"></p>
          <div v-for="(image, index) in (shopDetail.detail?.image || [])" :key="index">
            <img class="fullImage" :src="image.url" />
          </div>
        </div>
      </div>
      <p v-if="shopDetail.shopBanner" class="shopBanner">
        <img :src="shopDetail.shopBanner.imgUrl" :alt="shopDetail.shopBanner.alt"
          @click="openPdfInNewTab(shopDetail.shopBanner.filePath)">
      </p>
      <AppArticle title="店舗基本情報" class="mt-8">
        <article class="wColumn">
          <section class="contentInner mobile-box">
            <table class="table-horz d-none-des">
              <tbody>
                <tr>
                  <th>営業時間</th>

                  <td v-html="shopDetail.time
                    + (shopDetail.time_weekends ? '<br/>' + shopDetail.time_weekends : '')
                    + (shopDetail.time_others ? '<br/>' + shopDetail.time_others : '')">
                  </td>
                </tr>
                <tr>
                  <th>住所</th>
                  <td>{{ shopDetail.address }}</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td v-html="shopDetail.phone
                    + (shopDetail.phone_others ? '<br/>' + shopDetail.phone_others : '')">
                  </td>
                </tr>
                <tr>
                  <th>最寄駅・バス停</th>
                  <td v-html="shopDetail.detail?.nearestBusStation"></td>
                </tr>
                <tr>
                  <th>駐車場台数</th>
                  <td>{{ shopDetail.detail?.numberParking }}</td>
                </tr>
              </tbody>
            </table>
            <div v-if="shopDetail.detail?.busImage && shopDetail.detail?.busImage.length > 0" class="d-none-des">
              <div v-for="(bus, index) in shopDetail.detail.busImage" :key="index" class="recruit">
                <img :src="bus.url" class="fullImage" :alt="bus.alt" @click="openPdfInNewTab(bus.to)">
              </div>
            </div>
            <iframe :src="shopDetail.detail?.googleMapUrl"></iframe>
          </section>
          <section class="contentInner d-none-mobile">
            <table>
              <tbody>
                <tr>
                  <th>営業時間</th>
                  <td v-html="shopDetail.time
                    + (shopDetail.time_weekends ? '<br/>' + shopDetail.time_weekends : '')
                    + (shopDetail.time_others ? '<br/>' + shopDetail.time_others : '')">
                  </td>
                </tr>
                <tr>
                  <th>住所</th>
                  <td>{{ shopDetail.address }}</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <!-- <td v-html="shopDetail.phone"></td> -->
                  <td v-html="shopDetail.phone
                    + (shopDetail.phone_others ? '<br/>' + shopDetail.phone_others : '')">
                  </td>
                </tr>
                <tr>
                  <th>最寄駅・バス停</th>
                  <td v-html="shopDetail.detail?.nearestBusStation"></td>
                </tr>
                <tr>
                  <th>駐車場台数</th>
                  <td>{{ shopDetail.detail?.numberParking }}</td>
                </tr>
              </tbody>
            </table>
            <p class="recruit mb-0"><a
                href="https://entstore-recruit.net/jobfind-pc/area/Tokai/All?freeword=%E5%AF%8C%E5%A1%9A%E5%BA%97"
                target="_blank"><img src="/assets/images/bnr_recruit.webp" width="472" height="91"
                  alt="遠鉄ストアで一緒に働きませんか？"></a></p>
            <div v-if="shopDetail.detail?.busImage && shopDetail.detail?.busImage.length > 0">
              <p v-for="(bus, index) in shopDetail.detail.busImage" :key="index" class="recruit mb-0">
                <img :src="bus.url" width="472" height="91" :alt="bus.alt" @click="openPdfInNewTab(bus.to)">
              </p>
            </div>
          </section>
        </article>
      </AppArticle>
      <AppArticle v-if="shopDetail.detail?.services?.length" title="利用できるサービス" class="mt-md-16 mb-8">
        <div class="shop-service mobile-box">
          <img v-for="(service, index) in (shopDetail.detail?.services || [])" :key="index" :src="service">
        </div>
      </AppArticle>
      <AppArticle v-if="shopDetail.detail?.tenant && shopDetail.detail?.tenant.length" title="テナント・その他"
        class="mt-4 box-item-article">
        <div
          v-if="shopDetail.detail.tenant.filter(item => item.image) && shopDetail.detail.tenant.filter(item => item.image).length > 0">
          <div class="des-tenant" v-if="shopDetail.detail.desTenant">{{ shopDetail.detail.desTenant }}</div>
          <div class="shop-tenant mobile-box">
            <a v-for="tenant in shopDetail.detail.tenant.filter(item => item.image)"
              :key="tenant.detailTenantUrl || tenant.name" :href="tenant.detailTenantUrl || '#'" target="_blank" :class="{
                emptyUrl: !tenant.detailTenantUrl,
                gyokkado: tenant.detailTenantUrl.includes('gyokkado'),
                chateraise: tenant.detailTenantUrl.includes('chateraise'),
                apollo: tenant.detailTenantUrl.includes('apollo') || tenant.image.includes('apollo')
              }">
              <figure>
                <img v-if="tenant.image" :src="tenant.image" :alt="tenant.name">
              </figure>
              <span v-html="tenant.name"></span>
            </a>
          </div>
        </div>
        <div class="shop-tenant no-image mobile-box d-none-mobile">
          <a v-for="tenant in shopDetail.detail.tenant.filter(item => item.detailTenantUrl).filter(item => !item.image)"
            :key="tenant.detailTenantUrl" :href="tenant.detailTenantUrl" target="_blank">
            <span v-html="tenant.name"></span>
          </a>
          <div
            v-for="(tenant, index) in shopDetail.detail.tenant.filter(item => !item.detailTenantUrl).filter(item => !item.image)"
            :key="index" :style="tenant.name === 'ベンティ・デコ（美容室）' ? 'width: 320px;' : ''"><span
              v-html="tenant.name"></span>
          </div>
        </div>
        <div class="shop-tenant no-image mobile-box d-none-des mt-0 pt-0">
          <table class="table-horz">
            <tbody>
              <tr v-for="(tenant, index) in shopDetail.detail.tenant.filter(item => !item.image)"
                :key="tenant.detailTenantUrl">
                <th v-if="index % 2 === 0">
                  <a v-if="tenant.detailTenantUrl" :href="tenant.detailTenantUrl" target="_blank">
                    <span v-html="tenant.name"></span>
                  </a>
                  <div v-else> <span v-html="tenant.name"></span> </div>
                </th>
                <td v-else>
                  <a v-if="tenant.detailTenantUrl" :href="tenant.detailTenantUrl" target="_blank">
                    <span v-html="tenant.name"></span>
                  </a>
                  <div v-else> <span v-html="tenant.name"></span> </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </AppArticle>
      <AppButtonNavigation class="d-none-mobile btn-back" title="前のページへ戻る" is-back href="/shop"></AppButtonNavigation>
      <p class="btnBack d-none-des"><a href="/shop/"><span>店舗一覧へ戻る</span></a></p>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { SHOP_LIST } from '~/config/shop-data'
import AppArticle from "~/components/App/Article.vue";
import { formatDateMomentYMD, checkLengthTitle, fetchDataV2 } from "~/utils/index.js";

export default {
  components: { AppArticle, AppButtonNavigation },
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    // Phai lay truoc await: sau await se mat ngu canh Nuxt
    const __nuxtApp = useNuxtApp()
    

    const { query, $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        const response = await fetchDataV2($microcms, {

        limit: 1,

        offset: 0,

        endpoint: 'store-info',

        orders: '-post_date',

        paramsRequest: [`category[exists]`]

        })

        return {

        infoData: response?.contents || []

        }
  
      }
    )
    __nuxtApp.runWithContext(() => useHead({

        title: `${__d.value?.shopDetail.shopName}${__d.value?.shopDetail.subName || ''}｜店舗情報｜遠鉄ストア`,

      }))
    return { ...(__d.value || {}) }
  },
  data() {
    return {
    }
  },

  computed: {
    shopDetail() {
      const shopArea = SHOP_LIST[this.$route.params.shopArea] || []
      const shopInfo = shopArea.find(store => store.globalName === this.$route.params.shopName) || {}
      return shopInfo
    },
    breadcrumbItems() {
      return [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: '店舗情報',
          disabled: false,
          href: '/shop',
        },
        {
          text: (this.shopDetail?.shopName) + (this.shopDetail.subName || ''),
          disabled: true,
          href: '/shop',
        },
      ]
    }
  },
  methods: {
    formatDateMomentYMD,
    checkLengthTitle,
    openPdfInNewTab(filePath) {
      const pdfUrl = filePath.default;

      const pdfWindow = window.open(pdfUrl);
      pdfWindow.focus();
    },
  }
}
</script>

<style lang="scss">
.box-item-article {

  @media only screen and (max-width: 768px) {
    .title-article {
      margin-bottom: 10px !important;
    }
  }

  .article-content {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: flex-start;

    div:first-child {
      width: 100%;
    }

    @media only screen and (max-width: 500px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);

      a {
        max-width: unset !important;
      }
    }

    a {
      max-width: 313px;
      width: 100%;

      span {
        font-size: 13px;
      }
    }
  }
}

.shop-detail-container {
  .singleColumn .title-article span {
    font-size: 20px;
  }
}
</style>

<style scoped lang="scss">
.wrap-content {
  p {
    &.lead {
      font-size: 24px;
      line-height: 40px;
      padding-bottom: 60px;
      text-align: center;
      margin: 0 auto;
    }
  }
}

.news {
  li {
    margin-bottom: 9px;
    padding: 0 0 9px 0 !important;
    border-bottom: 1px #ccc dotted;
    background: none !important;
    font-size: 14px;

    .category {
      display: inline-block;
      *display: inline;
      *zoom: 1;
      margin-left: 15px;
      padding: 2px 10px;
      background-color: #CF2339;
      border-radius: 3px;
      color: #fff;
      vertical-align: middle;
    }

    a {
      display: block;
      min-height: 16px;
      color: #333333;
      background: url('/assets/images/ico_arrow02.webp') no-repeat 0 0;
      background-position: 5px 10px;
      padding: 5px 0 0 20px;
    }

    @media only screen and (max-width: 1024px) {
      padding-left: 10px !important;
      border: 2px solid #999;
      border-top: 0;
      margin-bottom: 0;
      padding-top: 10px !important;

      &:hover {
        background-color: #e4e4e4 !important;
      }

      a {
        background: none;
        text-decoration: none;
        padding-left: 0;
      }
    }
  }
}

.shop-bg {
  @media only screen and (min-width: 1024px) {
    margin-bottom: 70px;
  }
}

.shop-img {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: min-content;

  &.bit-img {
    @media only screen and (min-width: 1024px) {
      padding-left: 30px;
    }
  }

  img {
    width: 307px;
    height: 230px;
  }

  p {
    font-size: 18px;
  }

  @media only screen and (max-width: 1024px) {
    display: block;
    width: 100%;
    padding: 0 12px;

    img {
      height: auto;
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

    }
  }
}

.wColumn {
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    table {
      th {
        width: 150px;
      }
    }

  }

  .contentInner {
    width: 100%;

    .table-horz {
      margin-top: 20px;
    }

    iframe {
      width: 100%;
      height: 316px;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      box-sizing: border-box;
      border-top: solid 1px #999999;
      border-left: solid 1px #999999;
      margin-bottom: 20px;

      th {
        padding: 10px;
        text-align: left;
        background: #f3e7cd;
        font-weight: normal;
        border-right: solid 1px #999999;
        border-bottom: solid 1px #999999;
      }

      td {
        padding: 10px;
        text-align: left;
        background: #ffffff;
        font-weight: normal;
        border-right: solid 1px #999999;
        border-bottom: solid 1px #999999;

        ::v-deep {
          .text-indent {
            padding-left: 10px;
            text-indent: -17px;
          }
        }
      }
    }
  }
}

.shop-service {
  display: flex;
  flex-wrap: wrap;

  img {
    margin: 0 11px 19px 0;

    @media only screen and (min-width: 1024px) {

      &:nth-of-type(10),
      &:nth-of-type(20) {
        margin-right: 0;
      }
    }
  }

  @media only screen and (max-width: 1023px) {
    margin-top: 15px;

    img {
      width: 67px;
      margin: 0 10px 10px 0;
      height: auto;
    }
  }
}

.des-tenant {
  line-height: 14px;
  margin-bottom: 10px;

  @media only screen and (max-width: 1023px) {
    margin-top: 10px;
    padding: 0px 10px;
    margin-bottom: 0px;
  }
}

.shop-tenant {
  font-size: 14px;

  &.d-none-des {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

  a.emptyUrl {
    text-decoration: none;
  }

  a {
    &.emptyUrl {
      pointer-events: none;

      span {
        color: #323232;
      }
    }

    @media only screen and (max-width: 568px) {
      margin-bottom: 15px;

      &.gyokkado {
        figure {
          background-color: #000;
        }
      }

      &.chateraise {
        figure {
          background-color: #3a132e;
        }
      }

      &.apollo {
        figure {
          background-color: #a61c4b;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  img {
    border: solid 1px #999999;
    margin: 0 0 5px 0;
    max-width: 326px;
    width: 100%;

    @media only screen and (min-width: 1024px) {
      &:hover {
        opacity: 0.6;
      }
    }
  }

  &.no-image {
    // margin-top: 20px;
    display: flex;
    flex-wrap: wrap;

    a,
    div {
      margin-right: 20px;
      margin-bottom: 5px;
    }
  }

  @media only screen and (max-width: 1023px) {
    padding-top: 20px !important;

    figure {
      width: auto;
      height: 50px;
      margin-bottom: 10px;
      padding: 5px 0;
      border: 1px solid #999;
      text-align: center;
      line-height: 0;
      box-sizing: content-box;

      img {
        width: auto;
        height: 50px;
        border: none;
      }
    }

    a {
      display: block;
      text-decoration: none;
      color: rgb(51, 51, 51);

      &:hover {
        color: #c7273b;

        figure {
          border: 1px solid #c7273b;
        }
      }
    }
  }

  .table-horz {
    a {
      padding-left: 30px;
      background: url('/assets/images/ico_arrow01.webp') no-repeat;
      background-position: 0 50%;
      line-height: 21px;
      background-size: 21px;
      margin-bottom: 0;

      &:hover {
        color: #333;
      }
    }
  }
}

a {
  color: #087295;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

.shopBanner {
  padding: 10px 12px 10px;
  text-align: center;

  img {
    margin-top: 20px;
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0;
    margin-bottom: 50px;

    img {
      margin-top: 0px;
      width: 472px;
      height: 91px;
      cursor: pointer;

      &:hover {
        opacity: 0.6;
      }
    }

  }
}

.btnBack {
  clear: both;
  width: 50%;
  margin: 40px auto 0;

  a {
    display: block;
    padding: 10px 0;
    background-color: #331e0e;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    text-decoration: none;

    &:hover {
      background-color: #c7273b;
    }
  }
}

.btn-back {
  margin-top: 100px;
}

.recruit {
  cursor: pointer;

  img {
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
