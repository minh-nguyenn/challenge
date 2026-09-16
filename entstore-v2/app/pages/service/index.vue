<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>サービス</h2>
      <div class="main-content">
        <p class="lead d-none-mobile">ご存じでしたか？<br>&nbsp;&nbsp;毎日のお買い物がもっとらくちんになる<br>遠鉄ストアの便利なサービス</p>
        <p class="lead d-none-des">ご存じでしたか？<br>毎日のお買い物がもっとらくちんになる<br>遠鉄ストアの便利なサービス</p>

        <p class="textAC">お客様のご要望にお応えいたします。お気軽に従業員までお申し出下さい。</p>
        <div class="product-list service-product-list">
          <ProductItem v-for="(service, index) in services" :key="index" :service="service" @detail-service="openPdfInNewTab(service)"></ProductItem>
        </div>
      </div>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import ProductItem from "~/components/ProductItem.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";

export default {
  components: {AppButtonNavigation, ProductItem},
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: 'サービス',
          disabled: true,
          href: '/service',
        },
      ],
      services: [
        {
          "to": "/service/cooking/",
          "imgAlt": "調理サービス",
          "url": "/assets/images/photo01.webp",
          "title": "調理サービス"
        },
        {
          "to": "/service/item/",
          "imgAlt": "商品サービス",
          "url": "/assets/images/photo02 (35).webp",
          "title": "商品サービス"
        },
        {
          "to": "/service/counter/",
          "imgAlt": "サービスカウンター取り扱い",
          "url": "/assets/images/photo03 (1).webp",
          "title": "サービスカウンター取り扱い"
        },
        {
          "to": "/service/recipe/",
          "imgAlt": "遠鉄ストアおすすめレシピ",
          "url": "/assets/images/photo04 (2).webp",
          "title": "遠鉄ストアおすすめレシピ"
        },
        {
          "to": "/pickup/mizu/",
          "imgAlt": "おいしい水",
          "url": "/assets/images/photo05 (1).webp",
          "title": "おいしい水"
        },
        {
          "to": "/service/idosuper/",
          "imgAlt": "遠鉄ストアの移動スーパー",
          "url": "/assets/images/photo08.webp",
          "title": "遠鉄ストアの移動スーパー"
        },
        {
          "to": "/service/line/",
          "imgAlt": "LINE公式アカウント友だち募集中！",
          "url": "/assets/images/photo07.webp",
          "title": "LINE公式アカウント友だち募集中！"
        },
        {
          "to": "/service/smart-receipt/",
          "imgAlt": "スマートレシート",
          "url": "/assets/images/photo09.webp",
          "title": "スマートレシート"
        },
        // {
        //   "to": "#",
        //   "imgAlt": "買い物代行サービス_アイコン",
        //   "url": "/assets/images/買い物代行サービス_アイコン.webp",
        //   "title": "買い物代行サービス",
        //   showPdf: true
        // }
      ]
    }
  },
  setup() {
    useHead({

        title: 'サービス｜遠鉄ストア',

      })
  },
  methods: {
    openPdfInNewTab(item) {
      if (item.showPdf) {
        const filePath =  "/assets/pdf/20231219_最新_ツィディチラシ_A4.pdf"
        const pdfUrl = filePath.default;

        const pdfWindow = window.open(pdfUrl);
        pdfWindow.focus();
      }
    }
  }
}
</script>

<style scoped lang="scss">
.wrap-content {
  .main-content {
    margin-bottom: 100px;

    @media only screen and (max-width: 1023px) {
      padding: 0 12px;
      margin-bottom: 0;
    }

    p {
      &.lead {
        font-size: 24px;
        line-height: 40px;
        padding-bottom: 30px;
        text-align: center;
        margin: 0 auto;

        br {
          &:first-child {
            display: none;
          }
        }

        @media only screen and (max-width: 1023px) {
          font-size: 18px;
          text-align: left;
          line-height: 25.2px;
          padding-bottom: 15px;

          br {
            &:first-child {
              display: block;
            }

            &:last-child {
              display: none;
            }
          }
        }
      }
      &.textAC {
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        margin-bottom: 30px;
        line-height: 30px;

        @media only screen and (max-width: 1023px) {
          font-size: 14px;
          text-align: left;
          line-height: 25.2px;
          margin-bottom: 0;
        }
      }
    }

    .product-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      grid-row-gap: 50px;
      margin-bottom: 50px;

      @media only screen and (max-width: 1023px) {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 10px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
