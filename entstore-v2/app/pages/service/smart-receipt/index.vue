<template>
  <div class="wrap-content">
    <VxBreadcrumbs
      :items="breadcrumbItems"
      divider=">"
    ></VxBreadcrumbs>
    <main>
      <div class="receipt_main">
        <div class="receipt_main_box">
          <p class="receipt_main_title_sub">スマホと連携！いつでもレシート確認。</p>
          <figure class="thum_img receipt_main_img01"><img src="/assets/images/txt_receipt_sub.webp" alt="WEBサイト版" class="img_responsive"></figure>
          <h1 class="receipt_main_title"><img src="/assets/images/title_receipt.webp" alt="スマートレシート" class="img_responsive"></h1>
          <p class="receipt_main_txt">スマートレシートは<em>スマホ</em>で<em>レシートが見られる</em> <br class="d-none-des">、<em>エコ</em>で<em>便利</em>な<em>WEBサイト</em>です。</p>
          <figure class="thum_img receipt_main_img02"><img src="/assets/images/img_receipt_smp.webp" alt="" class="img_responsive"></figure>
          <!-- /receipt_main_box -->
        </div>
        <div class="receipt_main_link">
          <a href="https://sr-mobile-apps2.smartreceipt.jp/srsw/cooperation/10023" target="_blank">
            <p class="receipt_main_link_title">
              <em>レシートを見る</em>
              <span class="d-block">登録済みの方はこちら</span>
            </p>
            <figure class="thum_img receipt-phone"><img src="/assets/images/img_receipt01.webp" alt="" class="img_responsive"></figure>
            <p class="txt_caution text-left">※スマートレシート登録サイトへ<br class="d-none-mobile">リンクします</p>
          </a>
        </div>
        <!-- /receipt_main -->
      </div>
      <div class="btn_wrap">
        <p class="btn_idosuper btn_entry">
          <a href="https://sr-mobile-apps2.smartreceipt.jp/srsw/cooperation/10023"  target="_blank">
            <em>ご登録はこちらから</em>
            <span>※スマートレシート登録サイトへ リンクします</span>
          </a>
        </p>
      </div>
      <AppArticle title='スマートレシートとは？' class="wrap-outside mobile-box receipt_layout">
        <section class="useful receipt_layout_inner">
          <ol class="useful_list">
            <li>
              <h3 class="receipt_layout_title02"><span>1</span><em>お財布すっきり</em></h3>
              <p class="normalTxt">ついついためてしまいがちなレシートでお財布がパンパンになっていませんか？<br>スマホで管理すればお財布がすっきりします！</p>
            </li>
            <li>
              <h3 class="receipt_layout_title02"><span>2</span><em>いつでもレシート確認</em></h3>
              <p class="normalTxt">13か月間のレシートがいつでも簡単に確認できます。<br>今までどおり、お買い物の後すぐにご覧いただけます。</p>
            </li>
            <li>
              <h3 class="receipt_layout_title02"><span>3</span><em>お買い物の傾向が一目でわかる</em></h3>
              <p class="normalTxt">保管されたレシートは自動的に、9種類の費目に振り分けられます。<br>家計簿をつけるのが面倒なあなたにもぴったり？</p>
            </li>
          </ol>
          <figure class="thum_img">
            <img src="/assets/images/img_useful.webp" alt="今まではレシートでお財布がパンパンだったのが、スマートレシートの利用でスッキリするイラスト" class="img_responsive"></figure>
        </section>
      </AppArticle>
      <div class="btn_wrap mt-md-8">
        <p class="btn_idosuper btn_entry">
          <a href="https://sr-mobile-apps2.smartreceipt.jp/srsw/cooperation/10023"  target="_blank">
            <em>ご登録はこちらから</em>
            <span>※スマートレシート登録サイトへリンクします</span>
          </a>
        </p>
      </div>
      <AppArticle title='スマートレシートの利用準備' class="wrap-outside mobile-box">
        <div class="flow">
          <div class="flow_box">
            <section class="flow_list">
              <p class="flow_list_number">1</p>
              <h3 class="flow_list_title">WEBサイトにアクセスして会員登録</h3>
              <p class="flow_list_txt">※WEBサイトはお気に入り登録してください</p>
              <div class="flow_list_inner">
                <figure class="thum_img img_reserve"><img src="/assets/images/img_prepare01.webp" alt="QRコードからWEBサイトにアクセスするフロー図" class="img_responsive"></figure>
                <!-- /flow_list_inner -->
              </div>
            </section>
            <section class="flow_list">
              <p class="flow_list_number">2</p>
              <h3 class="flow_list_title">
                <span>初回のみ</span>、サービスカウンターにて
                <br class="d-none-mobile">「えんてつカード」とスマホ画面に
                <br class="d-none-mobile">表示のバーコードを提示</h3>
              <p class="flow_list_txt">（サービスカウンターにて連携操作を行います）</p>
              <div class="flow_list_inner">
                <figure class="thum_img img_reserve"><img src="/assets/images/img_prepare02.webp" alt="えんてつカードとスマートレシートIDの連携操作" class="img_responsive"></figure>
                <p class="flow_list_txt">「えんてつカード」と「スマートレシートID」の連携完了</p>
              </div>
            </section>
          </div>
        </div>
      </AppArticle>
      <AppArticle title='スマートレシートの使い方' class="wrap-outside mobile-box">
        <div class="flow use">
          <div class="flow_box">
            <section class="flow_list">
              <p class="flow_list_number">1</p>
              <h3 class="flow_list_title"><span>翌日以降</span>、レジにて「えんてつカード」<br>を提示し、いつも通りお支払で<br>「スマートレシート」に！</h3>
              <div class="flow_list_inner">
                <figure class="thum_img img_use"><img src="/assets/images/img_use01.webp" alt="レジで「えんてつカード」を提示するイラスト" class="img_responsive"></figure>
                <p class="use_caution">提示が無い場合は<br>紙のレシートとなります</p>
                <p class="flow_list_txt txt_caution">※「えんてつカード」と「スマートレシートID」の連携当日は、お買い物をしても紙のレシートが出ます</p>
                <!-- /flow_list_inner -->
              </div>
            </section>
            <section class="flow_list">
              <p class="flow_list_number">2</p>
              <h3 class="flow_list_title">遠鉄ストアホームページからレシート確認</h3>
              <p class="flow_list_txt">※WEBサイトをお気に入り登録でもご確認いただけます</p>
              <div class="flow_list_inner">
                <figure class="thum_img img_reserve"><img src="/assets/images/img_use02.webp" alt="遠鉄ストアホームページからレシートを確認するための操作方法" class="img_responsive"></figure>
                <!-- /flow_list_inner -->
              </div>
            </section>
            <!-- /flow_box -->
          </div>
        </div>
      </AppArticle>
      <section class="notes">
        <h3 class="notes_title">注意事項</h3>
        <ol class="notes_list">
          <li>1つのスマートレシートIDに対し、1枚の「えんてつカード」のみ連携が可能です。他社カードの連携は不可となります。</li>
          <li>領収書・紙レシート再発行が必要な場合はレジ係までお申し出ください。</li>
          <li>商品の返品・交換の際には、該当のレシート画面をご提示ください。</li>
          <li>レシートデータは13ヶ月間保管され、ご覧いただけます。</li>
          <li>WEB画面のバーコードのみをご提示いただいても、えんてつポイントは付与されません。</li>
          <li>えんてつカード＜ポイント＆プリペイドカード＞をお切替えしたお客様でスマートレシートをご登録済みの方は、再度ご登録が必要になります。</li>
        </ol>
      </section>
      <div class="btn_wrap mt-md-8">
        <p class="btn_idosuper btn_entry">
          <a href="https://sr-mobile-apps2.smartreceipt.jp/srsw/cooperation/10023" target="_blank">
            <em>ご登録はこちらから</em>
            <span>※スマートレシート登録サイトへリンクします</span>
          </a>
        </p>
      </div>
      <div class="mobile-box">
        <section class="receipt_contact">
          <h3 class="receipt_contact_title">スマートレシートに関する<br>お問い合わせ窓口</h3>
          <div class="receipt_contact_inner">
            <p class="receipt_contact_txt">スマートレシートコールセンター</p>
            <p class="receipt_contact_tel">
              <a href="tel:0120683173">
                <img src="/assets/images/icon_tel.webp" alt="">
                <span>0120-683-173</span>
              </a>
            </p>
            <p class="receipt_contact_time">月-金9:00〜18:00（祝祭日・年末年始を除く）</p>
            <!-- /receipt_contact_inner -->
          </div>
        </section>
      </div>

      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/service"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import AppArticle from "~/components/App/Article.vue";

export default {
  name: "Index",
  components: {AppArticle, AppButtonNavigation},
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
          text: 'スマートレシート',
          disabled: true,
          href: '/service/smart-receipt',
        },
      ],
    }
  },
  setup() {
    useHead({

        title: 'スマートレシート｜サービス｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-content {
  overflow: visible;
}
.img_responsive {
  width: 100%;
  height: auto;
}

.btn_wrap {
  margin: 80px auto 85px;

  @media only screen and (max-width: 1024px){
    margin: 30px 12px;
  }

  .btn_idosuper {
    border-radius: 10px;
    font-size: 16px;

    a {
      padding: 15px 0;
      background-color: #c82536;
      font-size: 50px;
      display: block;
      border-radius: 10px;
      box-shadow: 0 10px rgba(0,0,0,0.1);
      color: #fff;
      font-weight: bold;
      line-height: 16.8px;
      text-align: center;
      text-decoration: none;
      border: 1px solid #c82536;

      em {
        line-height: 50.48px;
      }

      @media only screen and (max-width: 1023px)
      {
        border-radius: 6px;
        box-shadow: 0 7px 0 0 #E5E5E5;

        em {
          margin-bottom: 10px;
          display: block;
          font-size: 22px;
          font-style: normal;
          font-weight: 900;
          line-height: 16px;
        }

        span {
          font-size: 12px;
          display: block;
        }

        &:hover {
          background: #fff;
          color: #c82536;
          box-shadow: none;
        }
      }

      @media only screen and (min-width: 1024px){
        &:hover {
          box-shadow: none;
          transform: translateY(10px);

          img {
            opacity: 1;
          }
        }
      }
    }
  }
}

.receipt_main {
  margin-bottom: 70px;
  display: flex;

  @media only screen and (min-width: 1024px) {
    margin-top: 30px;
  }

  @media only screen and (max-width: 1024px)
  {
    display: block;
    text-align: center;
    margin-bottom: 20px;

    .receipt_main_link {
      width: 300px;
      margin: 0 auto;

      figure {
        width: 50px;
      }
    }

    .receipt_main_box {
      padding-right: 0 !important;
    }
  }

  .receipt_main_box {
    margin: 0;
    padding-right: 35px;
    flex: 1;
    display: inline-block;
    position: relative;

    @media only screen and (max-width: 1024px){
      margin-top: 35px;
    }

    .receipt_main_title_sub {
      width: 100%;
      margin-bottom: -20px;
      padding-left: 70px;
      font-size: 2em;
      color: #D6006C;
      font-family: "Noto Sans JP";
      font-weight: 700;
      text-align: left;

      @media only screen and (max-width: 1024px){
        padding-left: 35px;
        font-size: 12px;
        font-weight: 700;
        text-align: left;
        margin-bottom: -3px;
      }
    }

    .receipt_main_img01 {
      width: 100px;
      height: 100px;
      left: -50px;
      top: 0;
      position: absolute;

      @media only screen and (max-width: 1024px){
        width: 50px;
        position: absolute;
        left: -20px;
        top: -10px;
      }
    }

    .receipt_main_title {
      width: 100%;
      margin: 0 0 5px;
      line-height: 0;
      color: #283855;
      font-size: 30px;
      font-weight: normal;

      @media only screen and (max-width: 1024px){
        width: 260px;
        margin: 0 auto;
      }
    }

    .receipt_main_txt {
      padding-left: 45px;
      font-size: 1.15em;
      text-align: left;

      em {
        color: #D6006C;
        font-style: normal;
        font-weight: 700;
      }

      @media only screen and (max-width: 1024px){
        padding-left: 0;
        font-size: 10px;
        text-align: center;
      }
    }

    .receipt_main_img02 {
      width: 65px;
      left: -35px;
      bottom: -20px;
      position: absolute;

      @media only screen and (max-width: 1024px){
        width: 20px;
        position: absolute;
        left: -10px;
        bottom: 25px;
      }
    }
  }
}

.receipt_main_link {
  width: 220px;
  margin: 0;

  a {
    border-radius: 10px;
    box-shadow: 0 13px 0 0 #E5E5E5;
    text-decoration: none;
    padding: 15px;
    background: #c82536;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    border: 1px solid #c82536;

    .receipt-phone {
      width: 50px;
    }

    .txt_caution {
      text-indent: -10px;
      padding-left: 12px;
      font-size: 12.4px;
    }

    @media screen and (min-width: 1024px){
      .thum_img {
        width: 85px;
        padding-left: 10px;
      }

      &:hover {
        top: 13px;
        box-shadow: none;
        position: relative;
      }
    }

    @media only screen and (max-width: 1023px)
    {
      border-radius: 6px;
      box-shadow: 0 7px 0 0 #E5E5E5;

      &:hover {
        background: #fff;
        color: #c82536;
        box-shadow: none;
      }


      .receipt_main_link_title {
        em {
          display: block;
          font-size: 16px;
          line-height: 16px;
          font-weight: bold !important;
        }
      }

      .txt_caution {
        font-size: 10px;
        line-height: 16px;
        margin-bottom: 0;
      }
    }

    .receipt_main_link_title {
      margin-bottom: 10px;
    }

    em {
      font-size: 19.6px;
    }

    span {
      font-size: 12.04px;
    }
  }
}
.btn_idosuper {
  em {
    margin-bottom: 10px;
    display: block;
    font-family: "Noto Sans JP";
    font-size: 50.4px;
    font-style: normal;
    font-weight: 900;
    line-height: 1px;
  }

  span {
    font-size: 14px;
  }
}


@media only screen and (min-width: 1024px)
{

  .wrap-outside {
    ::v-deep {
      &.singleColumn {
        margin-bottom: 90px;
      }

      &:first-of-type {
        &.singleColumn {
          margin-bottom: 60px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1023px)
{

  .wrap-outside {
    ::v-deep {
      h2.title-article {
        padding: 0 15px;
        border-bottom: none;
        font-weight: bold;

        span {
          font-size: 15px;
          line-height: 16px;
        }
      }
    }
  }
  .receipt_layout {
    margin-bottom: 0;
  }
}

.receipt_layout_inner {
  padding-left: 20px;
  display: grid;
  grid-template-columns: 1fr 377.5px;
  grid-gap: 10px;

  .useful_list {
    margin: 0 0 15px;
    padding: 0;
    list-style: none;

    li {
      &:not(:last-child) {
        margin-bottom: 15px;
      }

      .receipt_layout_title02 {
        display: flex;
        align-items: center;
        font-size: 19.6px;
        height: auto;
        margin-bottom: 5px;
        padding: 0;
        background: none;
        color: #DE4C19;
        font-weight: 700;
        line-height: 1.2;
        font-family: "Noto Sans JP";

        span {
          width: 30px;
          height: 30px;
          margin-right: 5px;
          background: #DE4C19;
          border-radius: 100%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Noto Sans JP";
        }

        em {
          font-style: normal;
        }
      }

      .normalTxt {
        padding-left: 35px;
      }
    }
  }

  @media only screen and (max-width: 1023px)
  {
    display: block;
    padding: 20px 0px 0;

    .useful_list {
      li {
        .receipt_layout_title02 {
          em {
            font-size: 18px;
            line-height: 21.6px;
          }
        }

        .normalTxt {
          padding-left: 0;
        }
      }
    }

    .thum_img {
      width: 200px;
      margin: 0 auto;
    }
  }
}

.flow {
  @media only screen and (min-width: 1024px) {
    padding: 0 20px;
  }

  .flow_box {
    width: 100%;
    display: flex;
    margin: 0 auto;
    overflow: hidden;

    .flow_list {
      width: 50%;
      height: 350px;
      padding: 22px 15px 25px;
      display: flex;
      flex-direction: column;
      background: #F3E7CD;
      position: relative;
      text-align: center;

      @media only screen and (min-width: 1024px)
      {
        padding: 22px 22px 25px;
      }

      &:not(:last-child) {

        @media only screen and (min-width: 1024px)
        {
          &::before {
            border-color: transparent #F3E7CD;
            bottom: inherit;
            right: -40px;
            border-width: 190px 0 190px 95px;
            left: inherit;
            top: 50%;
            transform: translateX(0%) translateY(-50%);
            z-index: 2;
            width: 0;
            height: 0;
            margin: auto;
            border-style: solid;
            content: "";
            position: absolute;
            text-align: center;
          }

          &::after {
            border-color: transparent #fff;
            bottom: inherit;
            right: -48px;
            border-width: 190px 0 190px 95px;
            left: inherit;
            top: 50%;
            transform: translateX(0%) translateY(-50%);
            z-index: 1;
            width: 0;
            height: 0;
            margin: auto;
            border-style: solid;
            content: "";
            position: absolute;
            text-align: center;
          }
        }
      }

      .flow_list_number {
        width: 48px;
        height: 48px;
        font-size: 1.7em;
        margin: 0 auto 10px;
        background: #c82536;
        border-radius: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Noto Sans JP";
      }

      .flow_list_title {
        height: auto;
        margin: 0;
        padding: 0;
        background: none;
        color: #000;
        font-weight: 700;
        line-height: 1.3;
        text-align: center;
        font-size: 17.08px;

        span {
          color: #c82536;
          text-decoration: underline;
        }
      }

      .flow_list_txt {
        font-size: 12.6px;
      }

      .flow_list_inner {
        margin-top: auto;
        position: relative;

        .img_reserve {
          width: 215px;
          margin: 0 auto;
          line-height: 0;
        }
      }

      &:last-child .img_reserve {
        width: 304px;
      }
    }

    @media only screen and (max-width: 1023px)
    {
      display: block;
      width: 300px;
      margin-top: 20px;

      .flow_list {
        width: 100%;
        display: block;
        height: unset;
        padding-bottom: 10px;

        .flow_list_number {
          width: 35px;
          height: 35px;
          font-size: 16px;
        }

        .flow_list_title {
          font-size: 16px;
          span {
            color: #c82536;
            text-decoration: underline;
          }
        }

        .flow_list_txt {
          font-size: 12px;
          margin-bottom: 0;
        }

        &:last-child .img_reserve {
          width: 100%;
          margin-top: 10px;
        }

        &:not(:last-child) {

          &::before, &::after {
            width: 0;
            height: 0;
            margin: auto;
            border-style: solid;
            border-width: 20px 175px 0 175px;
            content: "";
            position: absolute;
            left: 50%;
            right: 0;
            transform: translateX(-50%);
            text-align: center;
          }

          &::before {
            border-color: #F3E7CD transparent;
            bottom: -20px;
            z-index: 2;
          }

          &::after {
            border-color: #fff transparent;
            bottom: -23px;
            z-index: 1;
          }
        }
        &:not(:first-child) {
          padding-top: 45px;
        }
      }
    }

    @media only screen and (max-width: 330px) {
      width: auto;
    }
  }
}

.use {
  .flow_list {
    &:first-child {
      .flow_list_inner {

        @media only screen and (min-width: 1024px) {
          padding-left: 35px;
        }
        margin-top: auto;
      }
    }

    .img_use {
      width: 200px;
      margin: 0;
    }

    .use_caution {
      width: 170px;
      font-size: 0.9em;
      line-height: 1.2;
      right: 55px;
      padding: 5px 0;
      background: #dc0012;
      border-radius: 5px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 60px;
    }

    .txt_caution {
      padding: 0 50px 0 12.6px;
      text-indent: -12.6px;
      text-align: left;
      line-height: 1.4;

      @media only screen and (max-width: 1023px) {
        padding-right: 0;
      }
    }
  }
}

.notes {
  margin-bottom: 45px;
  padding: 0 20px;

  .notes_title {
    height: auto;
    margin: 0 0 15px;
    padding: 0;
    background: none;
    color: #000;
    font-size: 1.45em;
    line-height: 1.4;
    text-align: left;
    font-weight: normal;
  }

  .notes_list {
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 3px;
      margin: 0 0 5px 21px;
      font-size: 14px;
      list-style: decimal;
    }
  }

  @media only screen and (max-width: 1023px) {
    padding: 0 12px;
    margin-bottom: 0;

    .notes_title {
      font-weight: 700;
    }
  }
}

.receipt_contact {
  margin: 130px 0 100px;
  padding: 30px 0;
  border: 1px solid #707070;
  text-align: center;

  .receipt_contact_title {
    width: 50%;
    margin: 0;
    padding: 0;
    border-bottom: none;
    border-right: 1px solid #707070;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    color: #000;
    font-size: 20.3px;
    line-height: 1.4;
    text-align: center;
    font-weight: normal;
  }

  .receipt_contact_inner {
    width: 50%;

    .receipt_contact_txt {
      margin-bottom: 0;
      font-size: 18.2px;
    }

    .receipt_contact_tel {
      margin-bottom: 5px;

      a {
        pointer-events: none;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        img {
          width: 35px;
          height: auto;
          margin-right: 5px;
        }

        span {
          display: block;
          font-family: "Noto Sans JP";
          font-size: 2.6em;
          line-height: 1;
        }
      }
    }

    .receipt_contact_time {
      font-size: 12.6px;
    }
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
  }

  @media only screen and (max-width: 1023px) {
    padding: 30px 12px 10px;
    margin-top: 0;
    margin-bottom: 20px;

    .receipt_contact_title {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #707070;
      font-size: 16px;
      border-right: none;
      width: 100%;
      font-weight: 700;
    }

    .receipt_contact_inner {
      width: 100%;

      .receipt_contact_txt {
        margin-bottom: 5px;
        font-size: 14px;
        line-height: 16px;
      }

      .receipt_contact_tel {
        a {
          pointer-events: none;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;

          img {
            width: 35px;
            height: auto;
            margin-right: 5px;
          }

          span {
            display: block;
            font-size: 28px;
            line-height: 28px;
          }
        }
      }

      .receipt_contact_time {
        font-size: 10px;
      }
    }
  }
}
</style>
