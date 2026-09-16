<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <section class="line">
        <!-- eslint-disable -->
        <article class="singleColumn">
          <h1><img class="fullImage" src="/assets/images/img_main01.webp" alt="LINE公式アカウント友だち募集中！"></h1>
          <p class="mt30"><img class="fullImage" src="/assets/images/img_main03.webp?v=20200424" alt="毎日使うLINEだから、とても便利！"></p>
        </article>


        <article class="singleColumn">
          <h2 class="sttl">お友だち登録方法➊<br class="d-none-des"><strong>QRコードで追加</strong></h2>
          <div class="mobile-box">
            <p><em>➊</em> LINEの「友達追加」メニューで <br class="d-none-des">　<em>➋</em>「QRコード」を選択し<br class="d-none-des">　<em>➌</em> こちらのQRコードを読み取る♪</p>
            <p><img class="fullImage" src="/assets/images/img_sub01.webp" alt="QRコードで追加"></p>
          </div>
        </article>



        <article class="singleColumn">
          <h2 class="sttl">お友だち登録方法➋<br class="d-none-des"><strong>友だち追加ボタンで追加</strong></h2>
          <div class="mobile-box">
            <p>スマホの方は下のボタンをタップして友だち追加♪</p>
            <p class="line-img">
              <a href="https://line.me/R/ti/p/%40loi1398u" target="_blank">
                <img alt="友だち追加数" src="http://biz.line.naver.jp/line_business/img/btn/addfriends_ja.png">
              </a>
            </p>
          </div>
        </article>

        <article class="singleColumn">
          <h2 class="sttl">お友だち登録方法➌<br class="d-none-des"><strong>公式アカウント検索</strong></h2>
          <div class="mobile-box">
            <p><em>➊</em> LINEの「…（その他）」→「公式アカウント」で　<br class="d-none-des"><em>➋</em>「名前またはIDで検索」　<br class="d-none-des"><em>➌</em> 追加できます♪<br>
              <em>※携帯電話によって検索できない場合もございます</em></p>
            <p><img class="fullImage" src="/assets/images/img_sub03.webp" alt="公式アカウント検索"></p>
          </div>

        </article>


        <article class="singleColumn inquiry">
          <h3>お問合せ</h3>
          <p>遠鉄ストア本社 営業企画課 <br class="d-none-des">　電話：053-445-1000（代表）</p>
        </article>
      </section>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/service"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";

export default {
  components: {AppButtonNavigation},
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
          text: 'LINE公式アカウント友だち募集中！',
          disabled: true,
          href: '/service/line',
        },
      ],
    }
  },
  setup() {
    useHead({

        title: 'LINE公式アカウント友だち募集中！｜サービス｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.singleColumn {
  margin-bottom: 50px;
}
.sttl {
  width: 980px;
  height: 90px;
  margin: 0 0 30px 0 !important;
  padding: 0 0 0 390px !important;
  line-height: 90px !important;
  font-size: 25px !important;
  color: #00c300 !important;
  font-weight: bold;
  text-align: left !important;
  background: url('/assets/images/sttl_bg.webp');

  strong {
    font-size: 30px !important;
    color: #cb0537 !important;
    padding-left: 0.5em;
  }

  @media only screen and (max-width: 1023px) {
    width: 100%;
    height: auto;
    margin: 0 0 20px 0 !important;
    padding: 10px !important;
    font-size: 18px !important;
    color: #00c300 !important;
    font-weight: bold !important;
    text-align: center !important;
    background: #ffffff;
    border-top: solid 1px #00c300 !important;
    border-bottom: solid 3px #00c300 !important;
    line-height: 1.2 !important;

    strong {
      color: #cb0537 !important;
      font-size: 21.6px !important;
    }
  }

}

.line p {
  color: #323232 !important;
  font-size: 21px;

  em {
    color: #cb0537 !important;
    background: #ffffff !important;
    font-style: normal !important;
  }

  @media only screen and (max-width: 1023px) {
    font-size: 15px;
    line-height: 21px;
  }
}

.inquiry {
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  overflow: hidden;
  border: solid 3px #00c300 !important;
  padding: 20px;
  font-style: normal !important;
  margin-bottom: 70px;

  h3 {
    color: #00c300 !important;
    font-style: normal !important;
    background: none !important;
    padding: 0 !important;
    margin: 0;
    text-align: center !important;
    font-size: 25px;
    line-height: 46px;
    font-weight: normal;
  }

  p {
    padding: 0 !important;
    margin: 0 !important;
    font-size: 20px;
    text-align: center !important;
  }

  @media only screen and (max-width: 1023px) {
    padding: 10px;
    margin-bottom: 0px;

    h3 {
      font-size: 18px;
      line-height: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .line-img {
    text-align: center;
  }
}
</style>
