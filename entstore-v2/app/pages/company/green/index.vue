<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>環境への取り組み</h2>
      <p class="lead">
        私たちは牛乳パックやトレイの回収、
        <br>
        簡易包装の推進、物流システムの効率化にと、
        <br>
        エコロジー問題や省資源問題に積極的に取り組んでいます。
      </p>
      <div class="product-list">
        <ProductItem v-for="(service, index) in services" :key="index" :service="service"></ProductItem>
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
          text: '環境への取り組み',
          disabled: true,
          href: '/company/company',
        },
      ],
      services: [
        {
          "to": "/company/green/recycle",
          "imgAlt": "資源回収",
          "url": "/assets/images/photo01 (47).webp",
          "title": "資源回収"
        },
        {
          "to": "/company/green/eco",
          "imgAlt": "エコトレー",
          "url": "/assets/images/photo03 (33).webp",
          "title": "エコトレー"
        },
        {
          "to": "/company/green/food",
          "imgAlt": "食品リサイクル",
          "url": "/assets/images/company/green/logo_food.webp",
          "title": "食品リサイクル"
        }
      ]
    }
  },
  setup() {
    useHead({

        title: '環境への取り組み｜会社情報｜遠鉄ストア',

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
      margin-bottom: 110px;
    }

  }
}
</style>
