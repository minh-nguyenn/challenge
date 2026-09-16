<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>食育体験</h2>
      <p class="textAC mobile-box mb-0">食育とは、健康的な生活を送るために、食に関するあらゆる知識を育むことです。<br>遠鉄ストアでは各メーカーとタイアップし、さまざまな企画を進めてまいります。</p>
      <p class="textAC mobile-box">参加者募集等については、当サイトトップページまたは店頭にあるチラシをご覧ください。</p>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/company/social"></AppButtonNavigation>
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
          text: '食育体験',
          disabled: true,
          href: '/company/social/food',
        },
      ]
    }
  },
  setup() {
    useHead({

        title: '食育体験｜社会活動への取り組み｜会社情報｜遠鉄ストア',

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

      &:last-of-type {
        margin-bottom: 70px;
      }

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
}
</style>
