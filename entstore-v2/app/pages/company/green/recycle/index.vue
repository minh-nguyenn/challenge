<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>資源回収</h2>
      <p class="lead d-none-mobile">全店舗（スーパーマーケットみっかび、マツモトキヨシさぎの宮駅前店除く）<br/>に常設している資源回収ボックスをぜひご活用ください。</p>
      <p class="d-none-des mobile-box lead-mobile">全店舗（スーパーマーケットみっかび、マツモトキヨシさぎの宮駅前店除く）に常設している資源回収ボックスをぜひご活用ください。</p>
      <AppArticle title="資源回収ボックスの常設" class="wrap-outside"/>
      <div class="mobile-box">
        <h4>場所・時間</h4>
        <p class="article-content">遠鉄ストア全店舗の出入り口に、下記項目の資源回収ボックスを設置しています。<br>営業時間内でしたら、いつでもお持込可能です。</p>
        <h4>回収している品目</h4>
        <div class="items">
          <AppItemsCollected v-for="(recycle, index) in recycleData" :key="index" :recycle="recycle"></AppItemsCollected>
        </div>
      </div>

      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/company/green"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>

import AppArticle from "~/components/App/Article.vue";
import AppItemsCollected from "~/components/App/ItemsCollected.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";

export default {
  components: {AppButtonNavigation, AppArticle, AppItemsCollected},
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
          text: '環境への取り組み',
          disabled: false,
          href: '/company/green',
        },
        {
          text: '資源回収',
          disabled: true,
          href: '/company/green/recycle',
        },
      ],
      recycleData: [
        {
          "content": "<span class='d-none-mobile'>（1）</span> <span class='d-none-des'>1. </span>水でよくすすいでください<br><span class='d-none-mobile'>（2）</span> <span class='d-none-des'>2. </span>切り開いてください<br><span class='d-none-mobile'>（3）</span> <span class='d-none-des'>3. </span>よく乾かしてお持ちください",
          "imgAlt": "牛乳パック",
          "url": "/assets/images/photo01 (2).webp",
          "title": "牛乳パック"
        },
        {
          "content": "<span class='d-none-mobile'>（1）</span> <span class='d-none-des'>1. </span>水でよくすすぎ、汚れを落としてください<br><span class='d-none-mobile'>（2）</span> <span class='d-none-des'>2. </span>よく乾かしてお持ちください<br><span>※白・色つきは問いません。</span>",
          "imgAlt": "資源回収",
          "url": "/assets/images/photo02 (41).webp",
          "title": "発砲スチロールトレー"
        },
        {
          "content": "<span class='d-none-mobile'>（1）</span> <span class='d-none-des'>1. </span>水でよくすすいでください<br><span class='d-none-mobile'>（2）</span> <span class='d-none-des'>2. </span>よく乾かしてお持ちください<br><span>※シールが張ってあるものは、そこだけ切り取ってください。</span>",
          "imgAlt": "資源回収",
          "url": "/assets/images/photo03 (34).webp",
          "title": "透明トレー"
        },
        {
          "content": "<span class='d-none-mobile'>（1）</span> <span class='d-none-des'>1. </span>フタをはずしてください<br><span class='d-none-mobile'>（2）</span> <span class='d-none-des'>2. </span>水でよくすすいでください<br><span class='d-none-mobile'>（3）</span> <span class='d-none-des'>3. </span>つぶしてお持ちください",
          "imgAlt": "資源回収",
          "url": "/assets/images/photo04 (5).webp",
          "title": "ペットボトル"
        },
        {
          "content": "そのままお持ちください。",
          "imgAlt": "資源回収",
          "url": "/assets/images/photo05 (3).webp",
          "title": "ペットボトルキャップ"
        },
      ]
    }
  },
  setup() {
    useHead({

        title: '資源回収｜環境への取り組み｜会社情報｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-content {
  .lead {
    font-size: 24px;
    line-height: 40px;
    padding-bottom: 30px;
    text-align: center;
    margin: 0 auto;
  }

  .lead-mobile {
    font-size: 18px;
    text-align: left;
    line-height: 25.2px;
    margin-bottom: 30px;
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

  .wrap-outside {

    ::v-deep {
      .title-article {
        margin-bottom: 0 !important;
      }

      @media only screen and (max-width: 1023px) {
        &.singleColumn {
          margin-bottom: 15px !important;
        }
      }
    }
  }
  .article-content {
    font-size: 14px;
    margin-bottom: 50px;

    @media only screen and (max-width: 1023px) {
      margin-bottom: 25px;
    }
  }

  .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    gap: 10px;
    grid-row-gap: 50px;
    margin-bottom: 50px;

    @media only screen and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);

      ::v-deep {
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    @media only screen and (max-width: 560px) {
      display: block;

      ::v-deep {
        .contentInner {
          display: flex;

          &:not(:last-child) {
            padding-bottom: 20px;
            margin-bottom: 10px;
            border-bottom: 1px dashed #f3e7cd;
          }

          img {
            width: 135px;
            line-height: 0;
            height: fit-content;
          }

          .description {
            padding-left: 15px;

            p {
              margin-bottom: 8px;
            }
          }
        }
      }
    }
  }
}
</style>
