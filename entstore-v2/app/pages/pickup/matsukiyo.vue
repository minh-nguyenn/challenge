<template>
  <div class="wrap-content">
    <VxBreadcrumbs
      :items="breadcrumbItems"
      divider=">"
    ></VxBreadcrumbs>
    <main>
      <img src="/assets/images/img_main (2).webp" class="fullImage-sm" width="980" height="400" alt="遠鉄ストアのおいしい水 えんてつカード会員様限定で販売中">
      <h3>えんてつポイントも、マツキヨポイントも両方たまる！<br>併設店ならではのお得なご利用方法</h3>
      <p class="textAC mobile-box">「マツモトキヨシ」は、日本の大手ドラッグストアチェーンです。<br>遠鉄ストアでは、平成25年に同社とFC（フランチャイズ）契約を結びました。<br>遠鉄ストアへ併設している「マツモトキヨシ」は、遠鉄ストアで運営していますので、<br>「えんてつポイント」も「マツキヨポイント」も両方貯まって大変お得！</p>
      <p class="textAC mobile-box d-none-mobile">
        <img  src="/assets/images/img_card.webp" width="715" height="181" alt="えんてつポイント 店内商品お買い上げ100円（税別）ごとに1ポイント+マツキヨポイント 店内商品お買い上げ100円（税別）ごとに1ポイント、">
      </p>
      <div class="pointSystem d-none-des">
        <div class="pointSystemInner">
          <figure><img src="/assets/images/pic_matsukiyo01.webp" alt=""></figure>
          <div class="point">
            <p class="target">店内商品お買い上げ<span><strong>108</strong>円(税込)ごとに</span></p>
            <p class="iconArrow">笆ｶ</p>
            <p class="pointTxt"><strong>1</strong>ポイント</p>
          </div>
        </div>

        <p class="iconPlus">＋</p>

        <div class="pointSystemInner">
          <figure><img src="/assets/images/pic_matsukiyo02.webp" alt=""></figure>
          <div class="point">
            <p class="target">店内商品お買い上げ<span><strong>100</strong>円(税抜)ごとに</span></p>
            <p class="iconArrow">笆ｶ</p>
            <p class="pointTxt"><strong>1</strong>ポイント</p>
          </div>
        </div>
      </div>
      <AppArticle title="併設店舗" class="wrap-outside">
        <div class="contentInner mobile-box d-none-des mt-4">
          <p class="normalTxt">遠鉄ストア×マツモトキヨシ 併設店続々増えています！<br>ぜひお立ち寄りください。</p>
        </div>
        <div class="shop-list">
          <div v-for="shop in shopList" :key="shop.name" class="shop">
            <a :href="shop.url">
              <figure>
                <img :src="shop.shopImg" :alt="shop.shopName">
              </figure>
              <div class="shopnameM" v-html="shop.shopName"></div>
            </a>
          </div>
        </div>
      </AppArticle>

      <!-- eslint-disable -->
      <AppArticle title="マツモトキヨシ　LINEクーポンでもっとお得！" class="wrap-outside">
        <div class="coupons">
          <img src="/assets/images//img_coupon.webp">
          <p>LINEでマツモトキヨシのアカウントを登録すると、店内商品10％OFFクーポンが発行されます。（不定期）<br>使い方はLINEの画面をレジで見せるだけ！<br>ぜひお得にご利用ください。<br><br>※一部除外品があります。</p>
        </div>
      </AppArticle>

      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" href="/" is-back></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import AppArticle from "~/components/App/Article.vue";

export default {
  name: "Mizu",
  components: {
    AppArticle,
    AppButtonNavigation
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
          text: '遠鉄ストアのおいしい水',
          disabled: true,
          href: '/pickup/mizu',
        },
      ],
      shopList: [
        {
          url: '/shop/chuoku/foodone_higashiiba/',
          shopName: 'フードワン<br class="d-none-des">東伊場店',
          shopImg: "/assets/images/photo01 (49).webp"
        },
        {
          url: '/shop/iwatashi/iwata/',
          shopName: '磐田店',
          shopImg: "/assets/images/photo01 (50).webp"
        },
        {
          url: '/shop/iwatashi/ikeda/',
          shopName: '池田店',
          shopImg: "/assets/images/photo01 (51).webp"
        },
        {
          url: '/shop/kikugawashi/kikugawa/',
          shopName: '菊川店',
          shopImg: "/assets/images/photo01 (52).webp"
        },
        {
          url: '/shop/hukuroishi/asaba/',
          shopName: '浅羽店',
          shopImg: "/assets/images/photo01 (53).webp"
        },
        {
          url: '/shop/toyokawashi/toyokawa/',
          shopName: '豊川店',
          shopImg: "/assets/images/photo01 (54).webp"
        },
        {
          url: '/shop/chuoku/tateno/',
          shopName: '立野店',
          shopImg: "/assets/images/photo01 (55).webp"
        },
        {
          url: '/shop/chuoku/nippashi/',
          shopName: '新橋店',
          shopImg: "/assets/images/photo01 (56).webp"
        },
        {
          url: '/shop/chuoku/saginomiya/',
          shopName: 'さぎの宮駅前店',
          shopImg: "/assets/images/photo01 (57).webp"
        },
        {
          url: '/shop/chuoku/kasai/',
          shopName: '笠井店',
          shopImg: "/assets/images/photo04 (7).webp"
        },
        {
          url: '/shop/hamanaku/hamakita/',
          shopName: '浜北店',
          shopImg: "/assets/images/new-shop.webp"
        },
      ]
    }
  },
  setup() {
    useHead({

        title: '遠鉄ストアのおいしい水｜ピックアップ｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
h3 {
  color: #ce2339;
  font-size: 33px;
  line-height: 40px;
  padding: 70px 0;
  width: 100%;
  text-align: center;
  font-weight: normal;
}

.shop-list {

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    .shop {
      &:hover {
        img {
          opacity: 0.6;
        }

        .shopnameM {
          text-decoration: none;
        }
      }
    }
  }

  .shop {
    border: solid 4px #cccccc;
    background: #f3e7cd;
    padding: 15px 0;

    @media only screen and (max-width: 1023px) {
      border: solid 3px #cccccc;
      background-color: #faf4e8;

      &:nth-child(odd) {
        background-color: white;
      }

      &:hover {
        background-color: #f1f1f1;
      }

      &:not(:last-of-type) {
        border-bottom: none;
      }

      a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        background: url('/assets/images/ico_arrow01.webp') no-repeat;
        background-position: 98% 50%;
        background-size: 20px;

        figure {
          width: 140px;
          margin: 0;
        }

        .shopnameM {
          margin: 0;
          padding-left: 15px;
          font-size: 16px;
          text-decoration: none;
        }
      }
    }

    figure {
      margin: 0 auto 10px auto;
      width: 182px;
      padding: 0;

      img {
        width: 100%;
        height: 121px;
        display: block;
      }
    }

    .shopnameM {
      margin: 0  auto;
      font-size: 18px;
      height: 28px;
      color: #323232 !important;
      width: 182px;
      text-decoration: underline;
    }
  }
}

.coupons {
  display: flex;

  img {
    margin-right: 30px;
  }

  p {
    line-height: 25.2px;
  }

  @media only screen and (max-width: 1023px) {
    display: block;
    padding: 20px 12px 0;

    img {
      width: 100%;
      height: auto;
    }

    p {
      margin-top: 10px;
      line-height: 22.4px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .wrap-content {
    padding-bottom: 0;

    h3 {
      margin-bottom: 15px;
      font-size: 18px;
      line-height: 25.2px;
      text-align: left;
      padding: 20px 12px 0;
    }

    .textAC {
      text-align: left;
      font-size: 14px;
      line-height: 22.4px;
    }
  }
}

.pointSystem {
  margin: 20px 0 30px 0;
  padding: 0 12px;
  margin-bottom: 50px;

  .iconPlus {
    padding: 20px 0;
    text-align: center;
    color: #666;
    font-size: 34px;
    margin-bottom: 0;
    line-height: 16px;
  }

  figure {
    margin-bottom: 10px;
    text-align: center;
    line-height: 0;

    img {
      width: auto;
      height: 92px;
    }
  }

  .point {
    display: table;
    width: 100%;
    background-color: #c72539;

    .target {
      width: 50%;
      text-align: center;
      font-size: 12px;
      line-height: 21.6px;

      span {
        display: block;
        font-size: 12px;

        strong {
          font-size: 19.2px;
        }
      }
    }

    p {
      display: table-cell;
      padding: 10px 0;
      vertical-align: middle;
      color: #fff;
    }
  }

  .pointTxt {
    font-size: 35.2px;
  }
}
</style>
