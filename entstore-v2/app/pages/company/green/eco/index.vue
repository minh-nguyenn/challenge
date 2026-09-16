<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>遠鉄ストアはエコトレーを使用しています</h2>
      <figure class="text-center image-content mobile-box">
        <img class="fullImage-sm" src="/assets/images/img-poster.webp" alt="">
      </figure>

      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/company/green"></AppButtonNavigation>
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
          text: '環境への取り組み',
          disabled: false,
          href: '/company/green',
        },
        {
          text: 'エコトレー',
          disabled: true,
          href: '/company/green/eco',
        },
      ]
    }
  },
  setup() {
    useHead({

        title: 'エコトレー｜環境への取り組み｜会社情報｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.image-content {
  @media only screen and (min-width: 1024px) {
    margin-bottom: 90px;
  }
}
</style>
