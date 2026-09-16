<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>サービスカウンター取り扱い</h2>
      <p class="lead">料金収納代行サービス・宅配便をはじめ<br>サービスカウンターでの便利なサービスをご紹介します</p>
      <ServiceCooking :dish="cookingItem"></ServiceCooking>
      <AppArticle title="商品券販売" class="wrap-outside">
        <div class="article-content voucher mobile-box">
          <section class="contentInner">
            <img class="cgc" src="/assets/images/cgc.webp" alt="">
            <p class="pl-0">
              <strong>CGCグループ共通商品券</strong>
              <br>1,000円券を販売。<br>遠鉄ストア、遠鉄ストア併設のマツモトキヨシ、マツモトキヨシさぎの宮駅前店、遠鉄ストア併設のシャトレーゼ、全国のCGC加盟店でご利用いただけます。
            </p>
          </section>
          <section class="contentInner">
            <img src="/assets/images/JCB_Card.jpg" alt="">
            <p class="pl-0">
              <strong>JCBギフトカード</strong>
              <br>1,000円券を販売。<br>全国の主要百貨店やスーパーなど<br>JCBギフトカード取扱店でご利用いただけます。
            </p>
          </section>
          <section class="contentInner">
            <img src="/assets/images/photo03 (31).webp" alt="">
            <p class="pl-0">
              <strong>遠鉄百貨店の商品券</strong>
              <br>1,000円券を販売。<br>遠鉄ストア、遠鉄百貨店、遠鉄グループでご利用いただけます。
            </p>
          </section>
        </div>
      </AppArticle>
      <AppArticle title="宅配便取り扱い" class="wrap-outside">
        <div class="article-content mobile-box">
          <!-- <section class="contentInner">
            <img src="/assets/images/photo04 (3).webp" width="474" height="220" alt="">
          </section> -->
          <section class="contentInner">
            <p>クロネコヤマトの宅急便取扱店となっております。<br class="d-none-mobile">ご利用いただけるサービスは以下のとおりです。<br class="d-none-mobile">尚、<strong>着払い・クール便は取り扱っておりません。</strong></p>
            <table class="table-horz">
              <tbody>
              <tr>
                <th>持込宅急便（一般品）</th>
                <td>食料品、衣類、雑貨など</td>
              </tr>
              <tr>
                <th>ゴルフ宅急便</th>
                <td>ゴルフ道具一式をプレイ日前日にゴルフ場にお届け</td>
              </tr>
              <tr>
                <th>スキー宅急便</th>
                <td>スキー道具一式を使用日の前日までに目的地までお届け</td>
              </tr>
              <tr>
                <th>複数口宅急便</th>
                <td>同一のお届け先に同時に2個以上のお荷物を送られる場合、「複数口減額制度」がお得です。<br class="d-none-mobile"> 通常の持込割引（各100円）と複数口減額（各100円）の、一個あたり合わせて200円を割引いたします。</td>
              </tr>
              </tbody>
            </table>
          </section>
        </div>
      </AppArticle>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/service"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import ServiceCooking from "~/components/ServiceCooking.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import AppArticle from "~/components/App/Article.vue";

export default {
  components: {AppArticle, AppButtonNavigation, ServiceCooking},
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
          text: 'サービスカウンター取り扱い',
          disabled: true,
          href: '/service/counter',
        },
      ],
      cookingItem: {
        "title": "料金収納代行",
        "url": "//assets/images/photo01 (45).webp",
        "request": [
          "市税<br>電気・ガス・水道<br>電話",
          "通信販売の<br>購入代金",
          "バンビツアー料金"
        ],
         "requestSP": [
            "市税、電気・ガス・水道、電話",
          "通信販売の<br>購入代金",
          "バンビツアー料金"
          ],
        "response": "市税・電話・電気・ガス・水道・通販・バンビツアー料金など各種料金がお支払いいただけます。 ",
        "eg": {}
      },
    }
  },
  setup() {
    useHead({

        title: 'サービスカウンター取り扱い｜サービス｜遠鉄ストア',

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
  }

  @media only screen and (max-width: 1023px) {
    padding-bottom: 0;
    p {
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
}

.wrap-outside {
  &:last-of-type {
    @media only screen and (min-width: 1024px) {
      margin-bottom: 100px;
    }
  }
}

.article-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;

  &.voucher {
    grid-template-columns: repeat(3, 1fr);
  }

  .contentInner {
    img {
      width: 100%;
    }

    strong {
      color: #ce2339;
      font-weight: bold;
    }

    p {
      line-height: 25.2px;
    }

    .table-horz {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 1023px) {
    margin-top: 15px;
    display: block;

    .contentInner {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
