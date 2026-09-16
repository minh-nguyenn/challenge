<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>トップメッセージ</h2>
      <article class="article-header mb-sm-0">
        <section class="contentInner">
          <div class="pb-md-8">
            <img src="/assets/images/photo01 (5).webp" >
          </div>
        </section>
        <section class="section-content">
          <p class="fontSerif d-none-mobile">地域に愛されお客様も社員も楽しい<br>高質ストアを目指して</p>
          <p class="name d-none-des"><span>代表取締役社長</span>宮田&nbsp;&nbsp;洋</p>
        </section>
      </article>
      <p class="lead d-none-des">地域に愛されお客様も社員も楽しい<br>高質ストアを目指して</p>
      <AppArticle title="創立以来変わらぬ「お客様にとっての、ありたい店」" class="article-wrap">
        <p>
          食生活を中心とした日常生活に密着したサービスだけに、いつも心の通う「正直な商売」に徹してまいりました。お蔭をもちまして、地域の皆様とともに歩んで50年余。県西部の業界ナンバーワンの店として、新たな重責を感じております。
          <br><br>
          しかし、お客様の目や、時代のトレンドや、生活様式の変化などにより、求められるものも刻々と変わりつつあります。「商品」、「販売」、「鮮度」、「接客」、「人財」という5つの質をさらに高めていくことを常に心がけ、お客様から「こんなサービスが欲しかった！」と言われるような提案や感動を提供していくことが遠鉄ストアの基本姿勢です。
        </p>
      </AppArticle>
      <AppArticle title="あらゆる面で温かみを感じられる店づくりを目指して。" class="article-wrap">
        <p>日々効率化や自動化が進み、人と会わなくてもモノが買える世の中になっています。そんな中、遠鉄ストアでは安全・安心で新鮮な美味しい食品と楽しいお買物を笑顔で提供し温かみを感じる店づくりを心がけています。<br><br>そして全従業員が「思いやり」の心を持って働いています。<br>それはお客様への思いやりであったり、従業員同士の思いやりであったり、家族に対する思いやりです。遠鉄ストアに関わる全ての人に幸せになってもらいたい。このような気持ちがきめ細かいサービスにつながっています。</p>
      </AppArticle>
      <AppArticle title="地域の皆様への恩返し。まずは社会貢献から。" class="article-wrap">
        <p>遠鉄ストアは地域の皆様からの長年の応援で成り立っています。応援してくださるお客様へ何かできることはないだろうか？と考え、始めたのが社会活動です。児童画コンクールや食育講座、スポーツ大会の開催など様々な社会活動を通じて少しでも恩返しができるよう努めています。<br><br>今後も地域の皆様の安全と安心を支える企業の1つとして今後も地域活性化に取り組み、子どもたちの未来へつながっていくような活動を積極的に行っていきます。</p>
      </AppArticle>
      <p class="name d-none-mobile"><img src="/assets/images/position.webp" width="auto" height="50" alt="代表取締役&nbsp;宮田洋"></p>
      <AppButtonNavigation title="前のページへ戻る" class="mt-md-16 d-none-mobile" is-back href="/company"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import AppArticle from "~/components/App/Article.vue";

export default {
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
          text: '会社情報',
          disabled: false,
          href: '/company',
        },
        {
          text: ' トップメッセージ',
          disabled: true,
          href: '/company/message',
        },
      ]
    }
  },
  setup() {
    useHead({

        title: 'トップメッセージ｜会社情報｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-content {

  .lead {
    font-size: 18px;
    line-height: 25.2px;
    padding-left: 12px;
  }

  .article-wrap {
    p {
      font-size: 14px;
    }

    @media only screen and (max-width: 1023px) {
      ::v-deep {
        &.singleColumn {
          margin-bottom: 0;

          .article-content {
            padding: 18px 12px 12px;
          }
        }
      }
    }

    &:last-of-type {
      @media only screen and (min-width: 1024px) {
        margin-bottom: 60px;
      }
    }
  }

  .article-header {
    display: grid;
    grid-template-columns: 40% 60%;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 60% 40%;
    }

    .contentInner {
      width: 306px;
      margin-right: 30px;
      margin-bottom: 30px;

      img {
        width: 306px;
        height: auto;
      }

      @media only screen and (max-width: 768px) {
        padding-left: 12px;
        width: 100%;
        margin-bottom: 15px;

        img {
          width: 100%;
          height: auto;
        }
      }

      @media only screen and (max-width: 1023px) {
        padding-left: 12px;
      }
    }
  }


  .section-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1023px) {
      justify-content: start;
    }

    .fontSerif {
      font-size: 30.8px;
      text-align: center;
    }

    .name {
      margin-left: 50px;
      vertical-align: middle;
      text-align: center;
      font-size: 20px;
      line-height: 16px;

      @media only screen and (max-width: 767px) {
        margin-left: 20px;
      }

      span {
        display: block;
        padding-bottom: 10px;
        font-size: 0.6em;
      }
    }
  }

  .name {
    text-align: right;
    @media only screen and (min-width: 1024px) {
      margin-bottom: 100px;
    }
  }
}
</style>
