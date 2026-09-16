<template>
  <div class="wrap-content">
    <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
    <main>
      <h2 class="d-none-des">遠鉄ストアのおいしい水</h2>
      <img src="/assets/images/img_main.webp" class="fullImage-sm" width="980" height="400"
        alt="遠鉄ストアのおいしい水 えんてつカード会員様限定で販売中">
      <article class="singleColumn mobile-box">
        <article class="tColumn">
          <section class="wcontentInner subtxt">
            <h2 class="water">不純物を除去した純水のほか、ミネラルを<br>ブレンドした軟水・硬水を販売しております。</h2>
            <table class="waterlist d-none-mobile">
              <!-- eslint-disable -->
              <tbody>
                <tr>
                  <th class="water01">純水</th>
                  <th class="water01">フィルターで不純物を除去したお水</th>
                  <td>2L　無料</td>
                  <td>5L　無料</td>
                </tr>
                <tr>
                  <th class="water02">軟水</th>
                  <th class="water02">硬度100未満</th>
                  <td>2L　50円</td>
                  <td>5L　120円</td>
                </tr>
                <tr>
                  <th class="water03">中硬水</th>
                  <th class="water03">硬度100～300</th>
                  <td>2L　100円</td>
                  <td>5L　170円</td>
                </tr>
                <tr>
                  <th class="water04">硬水</th>
                  <th class="water04">硬度300以上</th>
                  <td>2L　150円</td>
                  <td>5L　250円</td>
                </tr>
                <tr>
                  <th class="water05">プレミアム硬水</th>
                  <th class="water05">硬度600以上</th>
                  <td>2L　250円</td>
                  <td>5L　450円</td>
                </tr>
              </tbody>
            </table>
            <div class="d-none-des">
              <table class="tbrWater">
                <thead>
                  <tr>
                    <th colspan="2" class="color01">純水</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="2" class="color01">フィルターで不純物を除去したお水</th>
                  </tr>
                  <tr>
                    <td>2L　無料</td>
                    <td>5L　無料</td>
                  </tr>
                </tbody>
              </table>
              <table class="tbrWater">
                <thead>
                  <tr>
                    <th colspan="2" class="color02">軟水</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="2" class="color02">硬度100未満</th>
                  </tr>
                  <tr>
                    <td>2L　50円</td>
                    <td>5L　120円</td>
                  </tr>
                </tbody>
              </table>
              <table class="tbrWater">
                <thead>
                  <tr>
                    <th colspan="2" class="color03">中硬水</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="2" class="color03">硬度100～300</th>
                  </tr>
                  <tr>
                    <td>2L　100円</td>
                    <td>5L　170円</td>
                  </tr>
                </tbody>
              </table>
              <table class="tbrWater">
                <thead>
                  <tr>
                    <th colspan="2" class="color04">硬水</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="2" class="color04">硬度300以上</th>
                  </tr>
                  <tr>
                    <td>2L　150円</td>
                    <td>5L　250円</td>
                  </tr>
                </tbody>
              </table>
              <table class="tbrWater">
                <thead>
                  <tr>
                    <th colspan="2" class="color05">プレミアム硬水</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th colspan="2" class="color05">硬度600以上</th>
                  </tr>
                  <tr>
                    <td>2L　250円</td>
                    <td>5L　450円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-none-mobile">
              <h2 class="water">ご利用にはえんてつカードおよび<br>専用ボトルが必要です。</h2>
              <h2 class="water">給水ボトルはサービスカウンターで販売中！<br>
                2L用 <span>本体価格</span> 230円（税込価格 253円）<br>
                5L用 <span>本体価格</span> 700円（税込価格 770円）</h2>
              <p>お持ちでないお客様はサービスカウンターにてご入会いただけます。</p>
              <p>※他の容器でのご利用はできません。<br>
                ※ご注水後はお早めにご利用ください、（常温保存で3日・冷蔵保存で7日程度が目安です）</p>
            </div>
          </section>
          <section class="contentInner subimgright d-none-mobile"><img src="/assets/images/img_box.webp" width="223"
              height="472" alt=""></section>
        </article>
      </article>
      <AppArticle title="ご利用方法" class="wrap-outside d-none-des">
        <p class="lead colorBlue">ご利用にはえんてつカードおよび専用ボトルが必要です。</p>
        <div class="mobile-box">
          <img src="/assets/images/img_box.webp" width="223" height="472" alt="">
          <p class="normalTxt mb-2">お持ちでないお客様はサービスカウンターにてご入会いただけます。</p>
          <p class="smallTxt">※他の容器でのご利用はできません。</p>
          <p class="smallTxt">※ご注水後はお早めにご利用ください。（常温保存で3日・冷蔵保存で7日程度が目安です）</p>
        </div>
      </AppArticle>
      <AppArticle title="販売設置店" class="wrap-outside wrap-outside-custom">
        <p class="lead d-none-mobile">全店でお取り扱い中です。</p>
        <div class="mobile-box d-none-des mt-4">
          <p class="normalTxt">全店で取り扱い中です。<br>詳しくは店舗一覧ページをご確認ください。</p>
          <p class=" colorBlue">
            給水ボトルはサービスカウンターで販売中！<br>
            2L用 本体価格 230円（税込価格253円）<br>
            5L用 本体価格 700円（税込価格770円）</p>
          <p class="moreLink"><a href="/shop/"><span>店舗一覧を見る</span></a></p>
        </div>
      </AppArticle>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" href="/" is-back></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppArticle from "~/components/App/Article.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";

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
    }
  },
  setup() {
    useHead({

        title: '遠鉄ストアのおいしい水｜ピックアップ｜遠鉄ストア',

      })
  },
}
</script>

<style lang="scss">
@media only screen and (max-width: 768px) {
  .wrap-outside-custom {
    margin-bottom: 20px !important;
  }
}
</style>
<style scoped lang="scss">
h2 {
  &.water {
    padding: 0;
    color: #0289c9;
    text-align: left;
    margin-bottom: 20px !important;
    clear: both !important;
    font-size: 33px;
    font-weight: normal;
    line-height: 40px;

    @media only screen and (max-width: 1023px) {
      font-size: 18px;
      line-height: 25.2px;

      br {
        display: none;
      }
    }
  }
}

.singleColumn {
  margin: 20px 0 20px 0;

  @media only screen and (min-width: 1024px) {
    margin: 40px 0 60px 0;
  }
}

.tColumn {
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 720px auto;
    grid-gap: 30px;
  }

  table {
    width: 100%;
    box-sizing: border-box;
    border-top: solid 1px #999999;
    border-left: solid 1px #999999;
    border-collapse: collapse;
    border-spacing: 0;

    &.waterlist {
      margin: 20px 0 60px 0 !important;
    }

    th {
      padding: 10px;
      text-align: left;
      background: #f3e7cd;
      font-weight: normal;
      border-right: solid 1px #999999;
      border-bottom: solid 1px #999999;

      &.water01 {
        background: #9adfff !important;
      }

      &.water02 {
        background: #e8d555 !important;
      }

      &.water03 {
        background: #e8c755 !important;
      }

      &.water04 {
        background: #e8af55 !important;
      }

      &.water05 {
        background: #e88955 !important;
      }
    }

    td {
      padding: 10px;
      text-align: left;
      background: #ffffff;
      font-weight: normal;
      border-right: solid 1px #999999;
      border-bottom: solid 1px #999999;
    }
  }
}

.tbrWater {
  margin-bottom: 20px !important;

  th,
  td {
    text-align: center !important;
  }

  &:nth-of-type(1) {
    th {
      background: #9adfff !important;
    }
  }

  &:nth-of-type(2) {
    th {
      background: #e8d555 !important;
    }
  }

  &:nth-of-type(3) {
    th {
      background: #e8c755 !important;
    }
  }

  &:nth-of-type(4) {
    th {
      background: #e8af55 !important;
    }
  }

  &:nth-of-type(5) {
    th {
      background: #e88955 !important;
    }
  }
}

.wrap-outside {
  p {
    margin-bottom: 0;

    &.lead {
      @media only screen and (max-width: 1023px) {
        padding: 15px 12px;
        font-size: 18px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .smallTxt {
      font-size: 12px;
    }
  }



  img {
    float: right;

    @media only screen and (max-width: 1023px) {
      width: 25%;
      height: auto;
    }
  }

  .colorBlue {
    color: #0289c9;
    fill: #0289c9;
    font-size: 18px;
    line-height: 25.2px;
  }

  .moreLink {
    margin-top: 15px;

    a {
      display: block;
      padding: 15px 0;
      border: 3px solid #ccc;
      background-color: #f3e7cd;
      color: #333;
      text-align: center;
      font-size: 16px;
      line-height: 25.6px;

      span {
        padding: 5px 0 5px 30px;
        background: url('/assets/images/ico_arrow01.webp') no-repeat;
        background-size: 18px 18px;
        background-position: 0 50%;
      }

      &:hover {
        background-color: #f7f2e8;
      }
    }
  }

  &:last-of-type {
    @media only screen and (min-width: 1024px) {
      margin-bottom: 100px;
    }
  }
}
</style>
