<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>会社情報</h2>
      <p class="lead d-none-mobile">私たちは、近隣のお客様に安全・安心で新鮮な美味しい食品と<br>楽しいお買物を笑顔で提供し続けます</p>
      <p class="lead d-none-des">私たちは、近隣のお客様に安全・安心で新鮮な美味しい食品と楽しいお買物を笑顔で提供し続けます。</p>

      <p class="textAC">地域の皆様とともに歩んで50年余<br>県西部の業界ナンバーワンの店として、歩み続けられる努力を続ける<br class="d-none-mobile">遠鉄ストアの企業理念や社会貢献活動の取り組みをご紹介します。</p>
      <div class="product-list">
        <ProductItem v-for="(company, index) in companyList" :key="index" :service="company"></ProductItem>
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
          text: '会社情報',
          disabled: true,
          href: '/company',
        },
      ],
      companyList: [
        {
          "to": "/company/profile/",
          "imgAlt": "会社概要・沿革",
          "url": "/assets/images/photo01 (46).webp",
          "title": "会社概要・沿革"
        },
        {
          "to": "/company/message/",
          "imgAlt": "トップメッセージ",
          "url": "/assets/images/photo03 (32).webp",
          "title": "トップメッセージ"
        },
        {
          "to": "/company/green/",
          "imgAlt": "環境への取り組み",
          "url": "/assets/images/photo04 (4).webp",
          "title": "環境への取り組み"
        },
        {
          "to": "/company/social/",
          "imgAlt": "社会活動への取り組み",
          "url": "/assets/images/photo05 (2).webp",
          "title": "社会活動への取り組み"
        }
      ]
    }
  },
  setup() {
    useHead({

        title: '会社情報｜遠鉄ストア',

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
      padding-bottom: 30px;
      text-align: center;
      margin: 0 auto;
    }
    &.textAC {
      margin: 0 auto;
      text-align: center;
      font-size: 16.8px;
      margin-bottom: 30px;
      line-height: 30px;
    }

    @media only screen and (max-width: 1023px) {
      padding: 0 12px;

      &.lead, &.textAC {
        font-size: 18px;
        text-align: left;
        line-height: 25.2px;
        padding-bottom: 15px;
      }

      &.textAC {
        margin-bottom: 10px;
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
