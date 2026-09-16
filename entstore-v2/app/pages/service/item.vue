<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>商品サービス</h2>
      <p class="lead">店内にない商品のお取り寄せや、篭盛り、<br>イベント時のお料理や袋詰め菓子など承ります。</p>
      <ServiceCooking v-for="(cookingItem, index) in itemsData" :key="index" :dish="cookingItem"></ServiceCooking>
      <AppButtonNavigation class="d-none-mobile btn-back" title="前のページへ戻る" is-back href="/service"></AppButtonNavigation>
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
          text: '商品サービス',
          disabled: true,
          href: '/service/item',
        },
      ],
      itemsData: [
        {
          "title": "篭盛り",
          "url": "//assets/images/photo01 (44).webp",
          "request": [
            "葬儀<br>お彼岸<br>お盆",
            "お供え",
            "手土産"
          ],

         "requestSP": [
            "葬儀、お彼岸、お盆",
            "お供え",
            "手土産"
          ],
          "response": "手土産、お供え等のフルーツ詰合せの篭もりを 金額、商品等お客様のご要望に応じてお作り いたします。<br class='d-none-mobile'><br class='d-none-mobile'>お盆、葬式時の篭もりについても、承ります。 ",
          "eg": {}
        },
        {
          "title": "商品お取り寄せ",
          "url": "/assets/images/photo02 (37).webp",
          "request": [
            "○○がほしいけど<br>見当たらない",
            "10個ほしいけど<br>在庫がなさそう"
          ],
          "response": "お店で扱っていない商品で購入希望がある場合、 可能な限りでお取り寄せいたします。",
          "eg": {}
        },
        {
          "title": "お祭り・イベント等の料理、お菓子袋詰の承り",
          "url": "/assets/images/photo03 (30).webp",
          "request": [
            "お祭りや<br>子ども会のイベント<br>参加賞",
            "謝恩会や<br>二次会の<br>景品"
          ],
           "requestSP": [
            "お祭りや子ども会のイベント、参加賞",
            "謝恩会や<br>二次会の<br>景品"
          ],
          "response": " ごお刺身、お寿司、惣菜商品等、お客様のご希望日時、 商品、金額等、ご相談ください。<br><br class='d-none-mobile'>ご会合、旅行、お祭り等のお菓子袋詰承ります。<br><br class='d-none-mobile'>お客様のご希望日時、金額等、ご相談ください。",
          "eg": {}
        }
      ]
    }
  },
  setup() {
    useHead({

        title: '商品サービス｜サービス｜遠鉄ストア',

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
    @media only screen and (max-width: 1023px) {
      padding: 0 12px;

      &.lead {
        font-size: 18px;
        text-align: left;
        line-height: 25.2px;
        padding-bottom: 0;
        margin-bottom: 20px;

        br {
          display: none;
        }
      }
    }
  }

  @media only screen and (max-width: 568px) {
    padding-bottom: 0;
  }
}

.btn-back {
  margin-top: 100px;
}
</style>
