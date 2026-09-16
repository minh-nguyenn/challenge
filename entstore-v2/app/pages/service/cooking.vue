<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>調理サービス</h2>
      <p class="lead">店内にある魚・肉のカットや、青果の小分けなど<br>お客様のご要望に合わせてカスタマイズいたします。</p>
      <p class="textAC">お客様のご要望にお応えいたします。お気軽に従業員までお申し出下さい。</p>
      <ServiceCooking v-for="(cookingItem, index) in servicesCookingData" :key="index" :dish="cookingItem"></ServiceCooking>
      <AppButtonNavigation class="d-none-mobile btn-back" title="前のページへ戻る" is-back href="/"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import ServiceCooking from "~/components/ServiceCooking.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";

export default {
  components: {AppButtonNavigation, ServiceCooking},
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
          disabled: false,
          href: '/service',
        },
        {
          text: '調理サービス',
          disabled: true,
          href: '/service/cooking',
        },
      ],
      servicesCookingData: [
        {
          "title": "鮮魚調理",
          "url": "/assets/images/photo01 (43).webp",
          "request": [
            "このお魚<br>切り身でほしいな",
            "これとそれを足した<br>お刺身がほしい",
            "ハラワタを出して<br>おいてほしいわ"
          ],
          "response": "調理のご要望にお答えいたします。<br class='d-none-mobile'>店内商品は無料、お持込商品は有料です。",
          "eg": {
            "title": "調理例",
            "content": "頭取り、お腹出し、開き、二枚おろし、三枚おろし、刺身用皮引き、お造り<br><span>※お造りについては、魚の大きさ・盛り付け皿、<br class='d-none-mobile'>つま等の関係で店内商品でも有料となる場合がございます。</span>"
          }
        },
        {
          "title": "精肉オーダーカット",
          "url": "/assets/images/photo02 (36).webp",
          "request": [
            "鶏肉を300g<br>ほしいけど<br>パックがない",
            "牛肉をステーキ用に<br>3cmの厚さで<br>切ってほしい",
            "○○を作りたいけど<br>おすすめのお肉は？"
          ],
          "response": " ご要望のサイズ・厚さ・枚数・重量の 「オーダーカット」いたします。<br class='d-none-mobile'><br>「オーダーカット」の他、料理メニューに応じた おすすめ部位や量目などをご紹介いたします。 ",
          "eg": {}
        },
        {
          "title": "生鮮商品・店内製造商品の小分け",
          "url": "/assets/images/photo03 (29).webp",
          "request": [
            "食べきれないから<br>もうちょっと<br>少なめがいい",
            "足りないから<br>もう少し<br>増えないかな"
          ],
          "response": " ご要望の容量、個数にお応えいたします。<br>小分け以外に増量についてもお引き受けいたします。 ",
          "eg": {}
        }
      ]
    }
  },
  setup() {
    useHead({

        title: '調理サービス｜サービス｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-content {

  @media only screen and (max-width: 1023px) {
    padding-bottom: 20px;
  }

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
      font-size: 16px;
      line-height: 30px;
    }

    @media only screen and (max-width: 1023px) {
      padding: 0 12px;

      &.lead, &.textAC {
        font-size: 18px;
        text-align: left;
        line-height: 25.2px;
        padding-bottom: 0;
        margin-bottom: 20px;

        br {
          display: none;
        }
      }

      &.lead {
        margin-bottom: 10px;
      }

      &.textAC {
        font-size: 14px;
      }
    }
  }

  .btn-back {
    margin-top: 100px;
  }
}
</style>
