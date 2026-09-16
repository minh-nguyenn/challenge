<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>よくあるご質問</h2>
      <AppArticle class="wrap-box"
        :title="isMobile ? '支払いの時に使用可能なクレジットカードを教えてください。' : 'Q.支払いの時に使用可能なクレジットカードを教えてください。'">
        <div class="artitle-content">
          <p><span v-if="!isMobile">A.</span>えんてつカードポイント&クレジットカードをはじめとして、JCB、VISA、MasterCard、American
            Expressの国際ブランドマークが付いたクレジットカードがご使用いただけます。</p>
        </div>
      </AppArticle>
      <AppArticle class="wrap-box" :title="isMobile ? '支払いに商品券やギフトカードは使えますか?' : 'Q.支払いに商品券やギフトカードは使えますか?'">
        <div class="artitle-content">
          <p>
            <span
              v-if="!isMobile">A.</span>遠鉄百貨店商品券、CGCグループ商品券やUC、JCB、VISA.、三菱UFJニコスのギフトカードがご利用いただけます。なお、全国百貨店共通商品券はご利用いただけません。その他のギフト券(ビール券など)につきましては、ご利用店舗にてお問い合わせ下さい。
          </p>
        </div>
      </AppArticle>
      <AppArticle class="wrap-box" :title="isMobile ? '全国百貨店共通商品券は使えますか?' : 'Q.全国百貨店共通商品券は使えますか?'">
        <div class="artitle-content">
          <p><span v-if="!isMobile">A.</span>全国百貨店共通商品券は全国の百貨店のみで使うことが出来る商品券となっており、遠鉄ストアではご使用になれません。</p>
        </div>
      </AppArticle>
      <AppArticle class="wrap-box" :title="isMobile ? '遠鉄ストアで買える商品券・ギフトカードはありますか?' : 'Q.遠鉄ストアで買える商品券・ギフトカードはありますか?'">
        <div class="artitle-content">
          <p>
            <span
              v-if="!isMobile">A.</span>遠鉄グループでご利用可能な遠鉄百貨店商品券1,000円券と全国の加盟店でご利用可能なUCギフトカード1,000円券、CGC加盟店でご利用可能なCGCグループ共通商品券1,000円券を販売しております。サービスカウンターにて販売しております。
          </p>
        </div>
      </AppArticle>
      <AppArticle class="wrap-box" :title="isMobile ? '店舗の品揃えや商品の在庫を確認したいのですが。' : 'Q.店舗の品揃えや商品の在庫を確認したいのですが。'">
        <div class="artitle-content">
          <p><span v-if="!isMobile">A.</span>ご利用される店舗まで直接お問い合わせ下さい。</p>
          <a class="d-none-mobile" href="/shop/">&gt;&gt;店舗一覧</a>
          <p class="pdfLinks d-none-des"><a href="/shop/">店舗一覧<svg class="icon">
                <use xlink:href="#icon_arrow03"></use>
              </svg></a></p>
        </div>
      </AppArticle>
      <AppArticle class="wrap-box" :title="isMobile ? '店舗で取り扱ってほしい商品があるのですが。' : 'Q.店舗で取り扱ってほしい商品があるのですが。'">
        <div class="artitle-content">
          <p><span v-if="!isMobile">A.</span>ご利用店舗にご相談下さい。</p>
          <a class="d-none-mobile" href="/shop/">&gt;&gt;店舗一覧</a>
          <p class="pdfLinks d-none-des"><a href="/shop/">店舗一覧<svg class="icon">
                <use xlink:href="#icon_arrow03"></use>
              </svg></a></p>
        </div>
      </AppArticle>
      <AppArticle class="wrap-box"
        :title="isMobile ? '忘れ物や落とし物をした場合、どこに連絡したらいいですか?' : 'Q.忘れ物や落とし物をした場合、どこに連絡したらいいですか?'">
        <div class="artitle-content">
          <p><span v-if="!isMobile">A.</span>店舗にて確認したお客さまのお忘れ物・落とし物は店舗にて一定期間保管しております。ご利用になられた店舗まで直接お問い合わせください。</p>
          <a class="d-none-mobile" href="/shop/">&gt;&gt;店舗一覧</a>
          <p class="pdfLinks d-none-des"><a href="/shop/">店舗一覧<svg class="icon">
                <use xlink:href="#icon_arrow03"></use>
              </svg></a></p>
        </div>
      </AppArticle>
      <AppArticle class="wrap-box" :title="isMobile ? 'インターネットでチラシを見ることができますか?' : 'Q.インターネットでチラシを見ることができますか?'">
        <div class="artitle-content">
          <p v-if="!isMobile">A.インターネットでチラシをご覧になることができます。<a href="/chirashi/">こちら</a>をご覧下さい。</p>
          <p v-else>インターネットでチラシをご覧になることができます。</p>
               <a class="d-none-mobile" href="/chirashi/">&gt;&gt;チラシを見る</a>
          <p class="pdfLinks d-none-des"><a href="/chirashi/">チラシを見る<svg class="icon">
                <use xlink:href="#icon_arrow03"></use>
              </svg></a></p>
        </div>
      </AppArticle>
      <AppButtonNavigation class="d-none-mobile btn-back" title="前のページへ戻る" is-back href="/"></AppButtonNavigation>
      <div class="mobile-box d-none-mobile">
        <p class="pdfLinks d-none-des"><a href="javascript:history.back()">前のページへ戻る<svg class="icon">
              <use xlink:href="#icon_arrow03"></use>
            </svg></a></p>
      </div>
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
          text: 'よくあるご質問',
          disabled: true,
          href: '/faq',
        },
      ],
      isMobile: true,
    }
  },
  mounted() {
    this.checkIsMobile();
    window.addEventListener("resize", this.checkIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkIsMobile);
  },
  methods: {
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  setup() {
    useHead({

        title: 'よくあるご質問｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-box {
  @media only screen and (max-width: 768px) {
    margin-bottom: 20px !important;
  }
}

.artitle-content {
  font-size: 14px;

  a {
    color: #087295;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  .color-red {
    color: rgb(230, 0, 0);
  }

  @media only screen and (max-width: 1023px) {
    padding: 15px 12px 0 !important;

    p {
      margin-bottom: 0;
    }
  }
}

.pdfLinks {
  margin-top: 10px !important;

  a {
    display: block;
    padding: 5px 0 5px 0;
    background-color: #f3e7cd;
    border: 2px solid #ccc;
    text-align: center;
    color: #333;
    font-size: 1.6em;
    box-sizing: padding-box;
    text-decoration: none;

    .icon {
      display: inline-block;
      margin-top: -3px;
      padding-right: 3px;
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }

    @media only screen and (max-width: 768px) {
      font-size: 16px;
      height: 53px;
      align-content: center;
    }
  }
}

.btn-back {
  margin-top: 100px;
}
</style>
