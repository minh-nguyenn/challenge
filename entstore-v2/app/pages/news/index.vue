<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>企業情報・ニュースリリース</h2>

      <div class="news-content">
        <a v-for="news in paginatedNews" :key="news.id" class="contentInner mobile-box"
          :href="`/news/detail/${news.id}`">
          <figure>
            <img v-if="news.thumbnail && news.thumbnail.url" :src="$appendWebpFormat(news.thumbnail.url)" alt="" class="thum">
            <img v-else src="~assets/images/img_noimg.webp" class="thum" />
          </figure>
          <div class="news-title">
            <time>{{ formatDateYMD(news.post_date) }}</time>
            <span v-html="checkLengthTitle(news.title, 100).replaceAll('<br>', '')"></span><br />
            <a class="d-none-mobile link link-custom" :href="`/news/detail/${news.id}`">詳細はこちら</a>
          </div>
        </a>
      </div>

      <!-- Pagination -->
      <div class="pagination" v-if="totalPages > 1">
        <a v-for="page in totalPages" :key="page" :href="`/news?p=${page}`" :class="{ active: page === currentPage }">
          {{ page }}
        </a>
      </div>
      <AppButtonNavigation href="/" class="d-none-mobile" title="前のページへ戻る" is-back />
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { fetchData, formatDateYMD, checkLengthTitle } from "~/utils/index.js";

export default {
  components: { AppButtonNavigation },
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    useHead({

        title: '企業情報・ニュースリリース｜遠鉄ストア',

      })

    const { query, $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        const currentPage = parseInt(query.p) || 1;


        const response = await fetchData($microcms, {

        endpoint: 'store-news'

        });


        return {

        allNews: response.contents || [],

        currentPage,

        itemsPerPage: 10

        };
  
      }
    )
    return { ...(__d.value || {}) }
  },
  data() {
    return {
      breadcrumbItems: [
        { text: 'ホーム', disabled: false, href: '/' },
        { text: '企業情報・ニュースリリース', disabled: true, href: '/news' },
      ]
    };
  },

    mounted() {
    console.log(this.allNews)
  },
  computed: {
    totalPages() {
      return Math.ceil(this.allNews.length / this.itemsPerPage);
    },
    paginatedNews() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.allNews.slice(start, start + this.itemsPerPage);
    }
  },
  methods: {
    formatDateYMD,
    checkLengthTitle
  }
};
</script>

<style scoped lang="scss">
.link-custom{
      color: #087295 !important;
}
.news-content {
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-bottom: 100px;

    .contentInner {
      width: 220px;
    }
  }

  .contentInner {
    text-decoration: none;
    margin-right: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #323232;

    img.thum {
      width: 220px;
      height: 147px;
      object-fit: cover;
    }

    news-title {
      line-height: 25.2;
    }

    @media only screen and (max-width: 768px) {
      margin-bottom: 0px;
    }

    @media only screen and (max-width: 1023px) {
      display: grid;
      grid-template-columns: 40% 60%;
      border-bottom: 2px solid #ccc;
      padding-top: 15px !important;
      margin-right: 0;
      background: url('/assets/images/ico_arrow01.webp') no-repeat;
      background-position: 98% 50%;
      background-size: 20px;
      padding-bottom: 10px !important;
      cursor: pointer;

      &:nth-child(even) {
        background-color: #f5f1e8;
      }

      &:hover {
        background-color: #f3e7cd;
      }

      &:first-child {
        border-top: 2px solid #ccc;
      }

      img.thum {
        width: 120px;
        height: auto;
      }

      .news-title {
        margin-bottom: 10px;
        color: #ce2339;
        font-size: 16px;
        line-height: 22.4px;
        font-weight: normal;
        padding-right: 50px;

        time {
          display: block;
          margin-bottom: 10px;
          color: #999;
        }
      }
    }

    @media only screen and (max-width: 330px) {
      grid-gap: 10px;
    }
  }
}

a {
  color: #087295;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0;

  a {
    padding: 6px 12px;
    background: #eee;
    color: #333;
    border-radius: 4px;
    text-decoration: none;

    &.active {
      background: #ce2339;
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>

<style lang="scss">
@media only screen and (max-width: 1023px) {
  .news-content .contentInner .news-title time {
    line-height: 22px;
    font-size: 14px;
  }

  .news-content .contentInner .news-title {
    padding-right: 35px;
  }
}
</style>
