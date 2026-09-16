<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>社会活動への取り組み</h2>
      <p class="lead d-none-mobile">地域の皆様の豊かな生活文化実現のための<br>社会貢献活動に取り組んでいます。</p>
      <p class="lead d-none-des">私たちは牛乳パックやトレイの回収、簡易包装の推進、物流システムの効率化にと、エコロジー問題や省資源問題に積極的に取組んでいます。</p>
      <div class="product-list">
        <ProductItem v-for="(social, index) in socialData" :key="index" :service="social"></ProductItem>
      </div>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/company"></AppButtonNavigation>
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
          text: '会社情報',
          disabled: false,
          href: '/company',
        },
        {
          text: '社会活動への取り組み',
          disabled: true,
          href: '/company/social',
        },
      ],
      socialData: [
        {
          "to": "/company/social/cgc",
          "imgAlt": "全国児童画コンクール",
          "url": "/assets/images/photo01 (48).webp",
          "title": "全国児童画コンクール"
        },
        {
          "to": "/company/social/food",
          "imgAlt": "食育体験",
          "url": "/assets/images/photo03 (35).webp",
          "title": "食育体験"
        },
        {
          "to": "/company/social/sports",
          "imgAlt": "スポーツ・体育へのサポート",
          "url": "/assets/images/sport01.webp",
          "title": "スポーツ・体育へのサポート"
        }
      ]
    }
  },
  setup() {
    useHead({

        title: '社会活動への取り組み｜会社情報｜遠鉄ストア',

      })
  },
}
</script>

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
    @media only screen and (max-width: 1023px) {
      padding: 0 12px;

      &.lead {
        font-size: 18px;
        text-align: left;
        line-height: 25.2px;
        padding-bottom: 15px;
        margin-bottom: 20px;

        br {
          display: none;
        }
      }
    }
  }

  .product-list {
    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      grid-row-gap: 50px;
      margin-bottom: 100px;
    }
  }
}
</style>
