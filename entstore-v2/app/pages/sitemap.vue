<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2 class="d-none-des">サイトマップ</h2>
      <AppArticle title="サイトマップ" class="wrap-outside">
        <dl>
          <dt><a href="/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>遠鉄ストアトップ</a></dt>
          <dt>店舗情報</dt>
          <dd><a href="/shop/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>店舗一覧</a></dd>
          <dt>チラシ情報</dt>
          <dd><a href="/chirashi/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>チラシ情報一覧</a></dd>
          <dt>お知らせ</dt>
          <dd><a href="/info/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>店舗からのお知らせ</a></dd>
          <dd><a href="/event/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>イベント・キャンペーン情報</a></dd>
          <dd><a href="/news/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>ニュースリリース</a></dd>
          <dt>サービス</dt>
          <dd><a href="/service/cooking/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>調理サービス</a></dd>
          <dd><a href="/service/item/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>商品サービス</a></dd>
          <dd><a href="/service/counter/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>サービスカウンター取り扱いサービス</a></dd>
          <dd><a href="/service/recipe/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>遠鉄ストアおすすめレシピ</a></dd>
          <dt>会社情報</dt>
          <dd><a href="/company/profile/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>会社概要・沿革</a></dd>
          <dd><a href="/company/message/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>トップメッセージ</a></dd>
          <dd><a href="/company/green/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>環境への取り組み</a></dd>
          <dd><a href="/company/social/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>社会活動への取り組み</a></dd>
          <dt>採用情報</dt>
          <dd><a href="/recruit/#recruit01"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>遠鉄ストアについて</a></dd>
          <dd><a href="/recruit/#recruit02"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>遠鉄ストアのお仕事</a></dd>
          <dd><a href="/recruit/#recruit03"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>オンライン応募</a></dd>
          <dt>このサイトについて</dt>
          <dd><a href="/sitemap/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>サイトマップ</a></dd>
          <dd><a href="/privacy/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>個人情報保護方針</a></dd>
          <dd><a href="/pdf/マルチステークホルダー方針_遠鉄ストア.pdf" target="_blank">マルチステークスホルダー方針</a></dd>
          <dd><a href="/faq/"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>よくあるご質問</a></dd>
          <dt>お問い合わせ</dt>
          <dd><a href="https://etreq.entetsu.co.jp/store/contact/form.asp" target="_blank"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>お問い合わせ</a></dd>
          <dt class="wider"><a href="https://shop.entstore.co.jp/f/ec" target="_blank"><svg class="icon colorRed">
                <use xlink:href="#icon_arrow01"></use>
              </svg>遠鉄ストアネット通販</a></dt>
        </dl>
      </AppArticle>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import AppArticle from "~/components/App/Article.vue";

export default {
  components: { AppArticle, AppButtonNavigation },
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: 'サイトマップ',
          disabled: true,
          href: '/sitemap',
        },
      ]
    }
  },
  setup() {
    useHead({

        title: 'サイトマップ｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-outside {
  @media only screen and (max-width: 768px) {
    margin-bottom: 15px !important;
  }
}

dt,
dd {
  font-size: 14px;

  a {
    color: #087295 !important;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}

dt {
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  border-bottom: 5px #f3e7cd solid;
  padding-bottom: 5px;
  text-align: left;
  margin-bottom: 15px;
  margin-top: 50px;
}

dd {
  background: url('/assets/images/ico_arrow03.webp') left center no-repeat;
  display: inline-block;
  padding: 0 50px 0 15px !important;
}

@media only screen and (min-width: 1024px) {
  svg {
    display: none;
  }
}

@media only screen and (max-width: 1023px) {
  ::v-deep {
    .title-article {
      display: none;
    }
  }

  dl {
    padding: 0 12px;
    border-top: 1px solid #ccc;

    dt {
      margin-top: 0;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      font-weight: bold;
      padding: 40px 0px 5px 0px;
      margin-bottom: 0;

      a {
        color: #333 !important;
        font-size: 19.6px;
        text-decoration: none;
        display: flex;
        align-items: center;
      }
    }

    dd {
      background: none;
      display: block;
      padding: 0 !important;

      a {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 15px 10px;
        box-sizing: padding-box;
        color: #333 !important;
        font-size: 14px;
        text-decoration: none;
        border-bottom: 1px solid #ccc;
      }
    }

    .icon {
      display: inline-block;
      margin: 0;
      padding: 0 3px 0 0;
      width: 15px;
      height: 15px;
      vertical-align: bottom;
    }

    .colorRed {
      color: #c7273b;
      fill: #c7273b;
    }
  }
}

.wrap-outside {
  margin-bottom: 80px;
}
</style>
