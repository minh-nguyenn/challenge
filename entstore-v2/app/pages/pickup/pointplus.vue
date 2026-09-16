<template>
  <div class="wrap-content">
    <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
    <main>
      <h2 class="d-none-des">ポイントプラス</h2>
      <img src="/assets/images/img_main (3).webp" class="fullImage-sm" width="980" height="400"
        alt="遠鉄ストアのおいしい水 えんてつカード会員様限定で販売中">

      <div class="d-none-des mobile-box mb-0 mt-10">
        <p class="lead">
          対象商品500品！<br>
          ボーナスえんてつポイントがついたお得な商品
        </p>
      </div>

      <AppArticle title="ポイントプラスとは？" class="wrap-outside mt-10">
        <div class="point-concept">
          <section class="contentInner">
            <h4>通常のポイント付与</h4>
            <img class="d-none-mobile" src="/assets/images/img_subA01.webp" width="474" height="89"
              alt="店内商品お買い上げ100円（税抜）ごとに1ポイント">
            <div class="d-none-des">
              <div class="box-list-square">
                <div class=" item-square-white">
                  <p class="text-top">店内商品お買い上げ</p>
                  <p class="text-bottom"><span>100円</span>(税抜)ごとに</p>
                </div>
                <div class="arrow">▶</div>
                <div class="item-square-red">
                  <p><span>1</span>ポイント</p>
                </div>
              </div>
            </div>
          </section>
          <section class="contentInner">
            <h4>ポイントプラス商品</h4>
            <!-- eslint-disable -->
            <img class="d-none-mobile" src="/assets/images/img_subA02.webp" width="474" height="248"
              alt="店内商品お買い上げ100円（税抜）ごとに→1ポイント+ポイントザクザク！ 対象商品のボーナスポイント付与　例)20ポイント商品3点お買い上げ＝通常分＋60ポイントボーナス付与">

            <div class="d-none-des">
              <div class="box-list-square">
                <div class=" item-square-white">
                  <p class="text-top">店内商品お買い上げ</p>
                  <p class="text-bottom"><span>100円</span>(税抜)ごとに</p>
                </div>
                <div class="arrow">▶</div>
                <div class="item-square-red">
                  <p><span>1</span>ポイント</p>
                </div>
              </div>

              <div class="box-list-square">
                <p class="square-icon-plus">＋</p>
              </div>

              <div class="box-list-square">
                <div class="item-square-red custom">
                  <p class="text-top">対象商品のボーナスポイント付与</p>
                  <p class="text-bottom">例)20ポイント商品3点お買い上げ＝通常分＋60ポイントボーナス付与</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </AppArticle>

      <AppArticle title="たまったポイントの使い方" class="wrap-outside">
        <div class="point-concept">
          <section class="contentInner">
            <h4>1ポイント1円として使う</h4>
            <img class="d-none-mobile" src="/assets/images/img_subC01.webp" width="474" height="89"
              alt="店内商品お買い上げ100円（税抜）ごとに1ポイント">


            <div class="d-none-des">
              <div class="box-list-square">
                <div class=" item-square-red">
                  <p><span>1</span>ポイント</p>
                </div>
                <div class="arrow">▶</div>
                <div class="item-square-white custom">
                  <p><span>1</span>円</p>
                </div>
              </div>
              <p class="square-note">※現金の代わりに使えます</p>
            </div>

          </section>
          <section class="contentInner">
            <h4>お楽しみ商品と交換する</h4>
            <!-- eslint-disable -->
            <img class="d-none-mobile" src="/assets/images/img_subC02.webp" width="474" height="89"
              alt="店内商品お買い上げ100円（税抜）ごとに→1ポイント+ポイントザクザク！ 対象商品のボーナスポイント付与　例)20ポイント商品3点お買い上げ＝通常分＋60ポイントボーナス付与">

            <div class="d-none-des">
              <div class="box-list-square mb-8">
                <div class=" item-square-red">
                  <p>ポイント</p>
                </div>
                <div class="arrow">▶</div>
                <div class="item-square-white custom">
                  <svg class="icon colorRed" viewBox="0 0 19.7 21" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <rect x="1.3" y="13.1" width="7.9" height="7.9"></rect>
                      <rect x="10.5" y="13.1" width="7.9" height="7.9"></rect>
                      <rect y="6.6" width="9.2" height="5.3"></rect>
                      <rect x="10.5" y="6.6" width="9.2" height="5.3"></rect>
                      <path
                        d="M5.9,0C4.3,0,2.6,1.6,2.6,3.3c0,3.3,6.6,3.3,6.6,3.3C9.2,1.6,7.6,0,5.9,0z M3.9,3.3c0-0.9,1-2,2-2c1,0,1.7,1.5,1.9,3.9 C6,5,3.9,4.4,3.9,3.3z">
                      </path>
                      <path
                        d="M17.1,3.3c0-1.6-1.6-3.3-3.3-3.3c-1.6,0-3.3,1.6-3.3,6.5V5.3H9.2v1.3h1.3v0C10.5,6.6,17.1,6.6,17.1,3.3z M13.8,1.3 c0.9,0,2,1,2,2c0,1.1-2.1,1.7-3.9,1.9C12.1,2.8,12.8,1.3,13.8,1.3z">
                      </path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>



            <section class="contentInner">
              <h4>ポイント支払い商品でお得に換える</h4>
              <!-- eslint-disable -->
              <img class="d-none-mobile" src="/assets/images/img_subC03.webp" width="474" height="113"
                alt="店内商品お買い上げ100円（税抜）ごとに→1ポイント+ポイントザクザク！ 対象商品のボーナスポイント付与　例)20ポイント商品3点お買い上げ＝通常分＋60ポイントボーナス付与">

              <div class="d-none-des">
                <div class="box-list-square">
                  <div class=" item-square-white full-text-custom">
                    ポイント支払い以外<br>839円の商品
                  </div>
                  <div class="arrow">▶</div>
                  <div class="item-square-red full-text-custom">「ポイント払い」ご利用<br>660ポイント</div>
                </div>
                <p class="square-note">※詳しくは店内のPOPをご確認ください</p>
              </div>
            </section>
          </section>
        </div>
      </AppArticle>

      <AppArticle title="対象商品・お楽しみ商品の交換について" class="wrap-outside">
        <div class="mobile-box">
          <p>
            ポイントプラスの対象商品や。ポイント交換で貰えるお楽しみ商品は月替りです。<br>
            店内にあるチラシもしくはPDFをご参照ください。
          </p>
          <p class="chirashi">
            <a href="/chirashi/pdf/">
              <img src="/assets/images/ico_arrow01.webp" width="24" height="24" alt="">
              <span>最新号のチラシはこちら</span>
            </a>
          </p>
          <article class="sample">
            <section class="contentInner"> <img src="/assets/images/img_subB01.webp" width="474" height="336"
                alt="今月のおすすめ商品チラシサンプル"></section>
            <section class="contentInner"> <img src="/assets/images/img_subB02.webp" width="474" height="336"
                alt="お楽しみ商品交換チラシサンプル"> </section>
          </article>
        </div>
      </AppArticle>



      <section class="morePointCard d-none-des">
        <a class="d-none-des" href="https://cards.entetsu.co.jp/" target="_blank">
          <div class="text-header-card">えんてつカード・えんてつポイントの詳細は</div>
          <p><span><img src="/assets/images/img_subB02-2.gif" alt="えんてつカード"> のWebサイトへ</span></p>
        </a>
      </section>


      <section class="morePointCard d-none-mobile">
        <a class="tag-image d-none-mobile" href="https://cards.entetsu.co.jp/" target="_blank">
          <img class="img-pc-card" src="/assets/images/bnr_entetsu.webp" alt="">
        </a>
      </section>

      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/"></AppButtonNavigation>
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
          text: 'ポイントプラス',
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
      ]
    }
  },
  setup() {
    useHead({

        title: 'ポイントプラス｜遠鉄ストア - 静岡県西部のスーパーマーケット（浜松市,磐田市,袋井市,湖西市,掛川市）',

      })
  },
}
</script>

<style lang="scss">
.square-note {
  font-size: 19.6px;
  margin-top: 10px;
}

.box-list-square {
  display: flex;
  align-items: stretch;

  .item-square-white.full-text-custom {
    color: #c72539;
    font-weight: bold;
    font-size: 17px;
    line-height: 24px;
    height: auto;
  }

  .item-square-red.full-text-custom {
    color: #fff;
    line-height: 24px;
    height: auto;
  }

  .square-icon-plus {
    padding: 7px 0;
    text-align: center;
    color: #c72539;
    font-size: 25.6px;
    font-weight: bold;
    margin-bottom: 0px;
    width: 100%;
    justify-content: center;
    line-height: 1 !important;
  }

  .item-square-white {
    width: 47%;
    border: 3px solid #c72539;
    box-sizing: border-box;
    line-height: 15.6px;
    padding: 14px 0 10px 0;
    text-align: center;
    font-size: 14.4px;
    height: 100%;
    min-height: 68.9px;
    align-content: center;

    .text-top {
      color: #333;
      margin-bottom: 0px;
      line-height: 1;

    }

    .text-bottom {
      color: #c72539;
      margin-bottom: 0px;
      line-height: 1;
      font-size: 12px;

    }

    span {
      font-size: 16.8px;
      font-weight: bold;
    }

  }

  .arrow {
    color: #c72539;
    font-size: 10px;
    width: 6%;
    text-align: center;
    align-content: center;
  }

  .item-square-white.custom {
    width: 47%;
    border: 3px solid #c72539;
    box-sizing: border-box;
    line-height: 15.6px;
    padding: 14px 0 10px 0;
    text-align: center;
    font-size: 14.4px;
    font-size: 17px;
    color: #c72539;
    min-height: 68.9px;
    align-content: center;
    font-weight: bold;

    svg {
      width: 40px;
      height: 45px;
      line-height: 0;
      color: #c7273b;
      fill: #c7273b;
    }

    p {
      margin-bottom: 0px;
    }

    span {
      font-size: 34px;
      font-weight: bold;
    }
  }


  .item-square-red.custom {
    width: 100%;
    padding: 16px 10px 12px 10px;

    .text-top {
      color: #fff;
      margin-bottom: 10px;
      line-height: 1;
      font-size: 17.6px;
      font-weight: bold;
    }

    .text-bottom {
      color: #fff;
      margin-bottom: 0px;
      line-height: 1;
      font-size: 12px;
      text-align: left;
    }
  }

  .item-square-red {
    width: 47%;
    background-color: #c72539;
    box-sizing: border-box;
    line-height: 15.6px;
    padding: 14px 0 10px 0;
    text-align: center;
    font-size: 14.4px;
    font-size: 17px;
    color: #fff;
    min-height: 68.9px;
    align-content: center;
    font-weight: bold;

    p {
      margin-bottom: 0px;
    }

    span {
      font-size: 34px;
      font-weight: bold;
    }

  }
}
</style>

<style scoped lang="scss">
.morePointCard:has(.img-pc-card) {
  border: none;
}

.morePointCard {
  border: 3px solid #ccc;
  width: 100%;
  max-width: 475px;
  margin: 30px auto;

  .img-pc-card {
    min-width: 475px;
    min-height: 136px;
  }

  .tag-image:hover {
    opacity: 0.8;
  }



  @media only screen and (max-width: 600px) {
    margin: 15px auto 30px auto;

  }

  a .text-header-card {
    padding: 12px 0;
    background-color: #fbc308;
    text-align: center;
    color: #333;
    font-size: 14px;
    font-weight: bold;
  }

  p {
    padding: 10px 0 15px 0;
    text-align: center;
    color: #333;
    font-size: 1.6em;
    line-height: 1.1em;
  }

  span {
    padding-left: 25px;
    background: url(/assets/images/ico_arrow01.webp) no-repeat;
    background-size: 18px 18px;
    background-position: 0 50%;
    font-size: 16px;
    line-height: 1;
  }

  img {
    width: 110px;
    height: auto;
    vertical-align: bottom;
  }
}



@media only screen and (max-width: 1023px) {
  .wrap-content {
    padding-bottom: 0;
  }
}

.point-concept {

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
    grid-gap: 30px;
  }

  @media only screen and (max-width: 1023px) {
    padding: 20px 12px 0;

    img {
      width: 100%;
      height: auto;
    }

    .contentInner {
      margin-bottom: 40px;
    }

  }

}

h4 {
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  border-bottom: 5px #f3e7cd solid;
  padding-bottom: 5px;
  text-align: left;
  margin-bottom: 15px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
}

.sample {

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

}

.wrap-outside {

  p {
    font-size: 14px;
    line-height: 25.2px;

    &.chirashi {
      display: block;
      height: 120px;
      line-height: 60px;
      font-size: 18px;
      width: 474px;
      text-align: center;
      margin: 10px auto 20px auto !important;

      &:hover {
        opacity: 0.6;
      }

      a {
        display: block;
        height: 120px;
        font-size: 18px !important;
        text-decoration: none;
        background: #f3e7cd url('/assets/images/ico_pdf.webp') no-repeat 20px;
        border: solid 1px #cccccc;
        color: #000000 !important;
        text-decoration: none;
        text-align: right;
        width: 480px;
        padding-left: 38px !important;
        padding-right: 30px !important;
        margin: 0 auto;
        vertical-align: middle !important;

        img {
          padding: 0 !important;
          margin: 50px 10px -4px 0 !important;
        }
      }
    }
  }

  @media only screen and (max-width: 1023px) {
    margin-bottom: 0 !important;

    .sample {
      img {
        width: 100%;
        height: auto;
      }
    }

    p {
      &.chirashi {
        width: 100%;
        height: unset;

        &:hover {
          opacity: 1;

          a {
            background-color: #fff !important;
          }
        }

        a {
          background: #f3e7cd !important;
          width: 100%;
          height: unset;
          padding: 0 !important;
          margin: 0 auto;
          font-size: 16px !important;
          border: 2px solid #ccc !important;
          text-align: center !important;

          img {
            width: 18px;
            height: 18px;
            margin: 0 10px -4px 0 !important;
          }
        }
      }
    }
  }
}

.lead {
  font-size: 18px;
  line-height: 25.2px;
}
</style>
