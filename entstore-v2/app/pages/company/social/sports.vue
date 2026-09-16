<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>スポーツ・体育へのサポート</h2>
      <p class="textAC mb-md-0 mobile-box">参加者募集等については、当サイトトップページまたは店頭にあるチラシをご覧ください。</p>
      <AppArticle title="実施レポート" class="wrap-outside d-none-mobile" />
      <div class="group-content d-none-mobile">
        <h4>第38回遠鉄ストア・S&B杯&nbsp;ちびっ子健康マラソン大会</h4>
        <p class="article-content">
          実施日：2025年3月8日（土）
          <br>場所：浜松市四ツ池公園市営陸上競技場
          <br>コメント：当日は天候にも恵まれ、県西部、豊川市、豊橋市の小学生669名が参加し、学年別に1.5キロ、2キロ、3キロのコースを元気いっぱい駆け抜けました。
        </p>
        <div class="content-img">
          <img src="/assets/images/sport01.webp">
          <img src="/assets/images/sport02.webp">
          <img src="/assets/images/sport03.webp">
        </div>
      </div>
      <!-- eslint-disable -->
      <AppArticle title="第38回遠鉄ストア・S&B杯　ちびっ子健康マラソン大会" class="wrap-outside wrap-outside-sports-custom d-none-des" />
      <div class="group-content mobile-box d-none-des">
        <div class="contentInner">
          <p class="normalTxt mbsp15">当日は天候にも恵まれ、県西部、豊川市、豊橋市の小学生669名が参加し、学年別に1.5キロ、2キロ、3キロのコースを元気いっぱい駆け抜けました。</p>
          <table class="table-vert">
            <tbody>
              <tr>
                <th>実施日</th>
                <td>2025年3月8日（土）</td>
              </tr>
              <tr>
                <th>場所</th>
                <td>浜松市四ツ池公園市営陸上競技場</td>
              </tr>
            </tbody>
          </table>
          <ClientOnly>
            <VxSlick ref="slick" :options="slickOptions">
              <img src="/assets/images/sport01.webp">
              <img src="/assets/images/sport02.webp">
              <img src="/assets/images/sport03.webp">
            </VxSlick>
          </ClientOnly>
        </div>
      </div>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/company/social"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import VxSlick from "~/components/vx/VxSlick.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import AppArticle from "~/components/App/Article.vue";


export default {
  components: { AppArticle, AppButtonNavigation, Slick: VxSlick },
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
          text: 'スポーツ・体育へのサポート',
          disabled: true,
          href: '/company/social/sports',
        },
      ],
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      },
    }
  },
  setup() {
    useHead({

        title: 'スポーツ・体育へのサポート｜社会活動への取り組み｜会社情報｜遠鉄ストア',

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

      @media only screen and (max-width: 1023px) {
        text-align: left;
      }
    }
  }

  .wrap-outside {

    @media only screen and (min-width: 1024px) {
      margin-bottom: 60px !important;
    }

    ::v-deep .title-article {
      margin-bottom: 0 !important;
    }
  }

  .group-content {
    margin-bottom: 30px;

    &.d-none-mobile {
      margin-bottom: 110px;
    }

    h4 {
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      border-bottom: 5px #f3e7cd solid;
      padding-bottom: 5px;
      text-align: left;
      margin-bottom: 15px;
    }

    p,
    li {
      font-size: 14px;
    }

    .content-img {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 30px;

      img {
        width: 100%;
        height: auto;
        max-height: 230px;
      }
    }

    .article-content {
      line-height: 25.2px;
      margin-bottom: 30px;
    }
  }
}

.table-horz {
  margin-bottom: 30px;
}

::v-deep {
  .slick-list {
    text-align: center;

    .slick-slide {
      img {
        width: 300px !important;
        height: auto;
      }
    }
  }

  .slick-dots li {
    button:before {
      font-size: 10px;
    }
  }
}
</style>

<style lang="scss">
@media only screen and (max-width: 600px) {
  .wrap-outside-sports-custom {
    margin-bottom: 15px !important;
  }
}
</style>
