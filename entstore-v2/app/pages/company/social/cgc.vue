<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>全国児童画コンクール</h2>
      <p class="textAC mobile-box">
        遠鉄ストアが加盟するCGCグループでは、絵画を通じて子どもたちの情操教育をサポートし、
        <br class="d-none-mobile">
        地域とのコミュニケーションを育成することを目的に全国児童画コンクールへの協賛をしています。
        <br class="d-none-mobile">
        <br>
        これまで同様、「子どもたちの未来を応援」する寄付として
        <br class="d-none-mobile">
        応募作品１枚につき、ＣＧＣグループが寄付金を積み立て、
        <br class="d-none-mobile">
        文部科学大臣賞を受賞された４名が居住する市町村へ寄付されます。
      </p>
      <p class="social mobile-box">
        <a href="https://www.cgcjapan.co.jp/cgcgroups/csr/contest/report.php" target="_blank">
          <img src="/assets/images/ico_arrow01.webp" width="24" height="24" alt="">
          <span>第４４回ＣＧＣ全国児童画コンクール<br class="d-none-des">審査結果発表</span>
        </a>
      </p>
      <article class="d-flex main-content">
        <section class="contentInner d-none-mobile">
          <div class="pb-8">
            <img src="/assets/images/photo01 (3).webp">
          </div>
          <div>
            <img src="/assets/images/photo02.webp">
          </div>
        </section>
        <section class="section-content">
          <AppArticle title="応募要項" class="wrap-outside" />
          <div class="mobile-box">
            <div class="banner d-none-des">
              <img class="fullImage" src="/assets/images/photo01 (3).webp">
              <img class="fullImage" src="/assets/images/photo02.webp">
            </div>
            <div class="group-content">
              <h4>応募資格</h4>
              <p class="article-content">全国の幼児と小学生(3歳以上～12歳までのお子様が応募の対象です)</p>
            </div>
            <div class="group-content">
              <h4>応募規定</h4>
              <ol>
                <li>画題、絵のテーマは設けていません。<br>使用する画材も絵の具・クレヨン・クレパス・色鉛筆など自由です。</li>
                <li>ＣＧＣグループのお店で配布する「専用応募画用紙」に描いて応募された作品のみ審査対象となります。「専用応募画用紙」以外の画用紙に描いた作品、「専用応募画用紙」をコピーしてそれに描いた作品、前回応募した作品の再応募は審査対象外となります。</li>
                <li>応募は一人一枚とし、未発表の作品に限ります。<br>合作など、二人以上で描いた作品は審査対象外となります。<br>版画、貼り絵、作品の一部にスタンプなどを押したもの、折り紙などを貼ったものなども審査対象外となります。絵や写真、キャラクターを真似るなど、他者の著作権を侵害する作品の応募はご遠慮ください。</li>
                <li>応募用紙の必要事項に記入もれなどの不備があると、入賞できない場合がありますので必ずご記入ください。<span class="text-red">応募用紙の「保護者署名」がない作品は、審査の対象外となります。</span></li>
                <li>ご応募いただいた作品は当コンクールに関する出版・印刷物、報道、広告、ウェブサイト、ソーシャルメディア、展示会、その他関連制作物などに使用することがあります。</li>
              </ol>
            </div>
            <div class="group-content">
              <h4>応募受付期間</h4>
              <p class="article-content">2026年7月1日（水）～9月5日（土）</p>
            </div>
            <div class="group-content">
              <h4>応募受付</h4>
              <p class="article-content">鴨江店・森店・篠原店・西伝寺店を除く３１店舗で受け付けています。</p>
            </div>

            <div class="group-content">
              <h4>団体応募について</h4>
              <p class="article-content">
                団体応募をご希望のお客様は、作品と合わせて団体受付名簿のご持参をお願いいたします。<br>
                ご応募希望店舗にてお申し出いただければ団体受付名簿をお渡しさせていただきますが、下記内容が含まれているものであれば、形式は問いません。<br><br>

                ・団体名<br>
                ・団体責任者名<br>
                ・ご連絡先電話番号<br>
                ・応募総数（作品数）<br>
                ・応募されるお子様の氏名<br>
                <br>
                ご用意いただいた名簿はコピーし、作品返却時まで弊社にて保管させていただきます。<br>
                <br>
                団体ご応募用の名簿は<a href="/pdf/2026_作品授受簿(団体ご応募用).xlsx" target="_blank">こちら</a>からダウンロードをお願いいたします。<br>
                <br>
                <span class="text-red">団体応募の際も「保護者署名」欄の記入がないものは審査対象外となります。</span><br>
                お子様の個人情報の取り扱いについての同意となるため、親権者等の法定代理人の方の署名が必要となります。先生、団体責任者様等の署名は無効となりますので、ご注意ください。
              </p>
            </div>

            <div class="group-content">
              <h4>お問い合わせ</h4>
              <p class="article-content">（株）遠鉄ストア&nbsp;営業企画課<br>TEL：053-445-1050</p>
            </div>
          </div>
        </section>
      </article>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/company/social"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>

import AppArticle from "~/components/App/Article.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";

export default {
  components: { AppButtonNavigation, AppArticle },
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
          text: '社会活動への取り組み',
          disabled: false,
          href: '/company/social',
        },
        {
          text: '全国児童画コンクール',
          disabled: true,
          href: '/company/social/cgc',
        },
      ]
    }
  },
  setup() {
    useHead({

        title: '全国児童画コンクール｜社会活動への取り組み｜会社情報｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-content {
  p {
    &.textAC {
      margin: 0 auto;
      text-align: center;
      font-size: 16px;
      margin-bottom: 30px;
      line-height: 30px;
      padding-bottom: 0;

      @media only screen and (max-width: 1023px) {
        font-size: 14px;
        text-align: left;
        margin-bottom: 0;
        padding-bottom: 0;
        line-height: 22.4px;

        &:last-of-type {
          margin-bottom: 25px;
        }
      }
    }
  }

  .social {
    display: block;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    width: 100%;
    text-align: center;
    margin: 0 auto;

    a {
      display: block;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      text-decoration: none;
      border: solid 1px #cccccc;
      color: #000000;
      text-align: center;
      padding-left: 35px;
      width: 640px;
      margin: 0 auto;
      background: #f3e7cd;

      &:hover {
        opacity: 0.8;

        @media only screen and (max-width: 1023px) {
          background-color: white;
        }
      }

      img {
        margin: 0px 5px -5px 0;
      }

      @media only screen and (max-width: 1023px) {
        line-height: 16px;
        padding: 10px 0 12px 0;
        height: auto;

        span {
          line-height: 22px;
          font-size: 16px;
        }
      }
    }

    @media only screen and (max-width: 1023px) {
      margin-top: 25px;
      margin-bottom: 25px;

      a {
        width: 100%;
      }
    }
  }

  .contentInner {
    width: 306px;
    margin-right: 30px;
    margin-bottom: 30px;

    img {
      width: 306px;
      height: auto;
    }
  }

  .wrap-outside {
    margin-bottom: 30px !important;

    ::v-deep .title-article {
      margin-bottom: 0 !important;
    }
  }
}

.section-content {
  width: 100%;

  .group-content {
    margin-bottom: 30px;

    .text-red{
      color: red;
    }

    a{
      text-decoration: underline;
    }

    h4 {
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      border-bottom: 5px #f3e7cd solid;
      padding-bottom: 5px;
      text-align: left;
      margin-bottom: 15px;

      @media only screen and (max-width: 1023px) {
        font-size: 16px;
      }
    }

    p,
    li {
      font-size: 14px;
      line-height: 25.2px;
    }
  }
}

.main-content {
  @media only screen and (min-width: 1024px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
}
</style>
