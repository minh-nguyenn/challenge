<template>
  <div class="wrap-content blog-container-custom">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <BlogBanner class="banner-blog-custom" />
      <blog-page @change-category="changeCategory">
        <h2 class="blog_title_section font-stdEb">新着記事</h2>
        <div class="new_box">
          <BlogItem v-for="blog in blogList" :key="blog.id" :blog-item="blog" />
        </div>
        <div class="d-flex justify-start paginate-wrap mt-5">
          <VxPagination
            v-if="totalPage > 1"
            v-model="page"
            class="text-left"
            :class="{
              'first-page': page === 1,
              'last-page': page === totalPage,
            }"
            :length="totalPage"
            :total-visible="totalVisible"
            @input="handlePageChange"
          />
        </div>
      </blog-page>
    </main>
  </div>
</template>

<script>
import BlogBanner from "~/components/Blog/Banner.vue";
import BlogItem from "~/components/Blog/Item.vue";
import BlogPage from "~/components/Blog/Page.vue";
import { fetchDataV2 } from "~/utils/index.js";

export default {
  components: { BlogPage, BlogItem, BlogBanner },
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    useHead({

        title: '遠鉄ストアのおいしい話｜遠鉄ストア',

      })

    const { query, $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        if (import.meta.server) {

        const page = query.page || '1';

        const blogRequest = ['open[not_contains]非公開'];


        if (query.category) {

          blogRequest.push(`category[contains]${query.category}`);

        }


        const response = await fetchDataV2($microcms, {

          endpoint: 'store-blog',

          limit: 10,

          offset: (page - 1) * 10,

          paramsRequest: blogRequest,

          orders: '-open_from',

        });


        const totalCount = response.totalCount;

        const limit = 10;


        return {

          blogList: response.contents.map(blog => ({

            id: blog.id,

            imgUrl: blog.filename1?.url || '',

            category: blog.category.toString(),

            title: blog.title,

            time: blog.open_from,

          })),

          page: Number(page) || 1,

          totalPage: totalCount > limit ? Math.ceil(totalCount / limit) : 1,

        };

        } else {

        return {};

        }
  
      }
    )
    return { ...(__d.value || {}) }
  },
  data() {
    return {
      breadcrumbItems: [
        { text: 'ホーム', disabled: false, href: '/' },
        { text: '遠鉄ストアのおいしい話', disabled: true, href: '/blog/' },
      ],
      // page va totalPage den tu setup()/useAsyncData — khai bao lai o day
      // se che mat gia tri that, khien phan trang khong hien (totalPage luon = 1)
      totalVisible: 5, // 👈 Số lượng phân trang hiển thị tùy theo màn hình
    };
  },
  mounted() {
    this.setTotalVisible();
    window.addEventListener('resize', this.setTotalVisible);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setTotalVisible);
  },

  methods: {
    handlePageChange() {
      const currentCategory = this.$route.query.category;
      window.location.href = currentCategory
        ? `/blog?page=${this.page}&category=${currentCategory}`
        : `/blog?page=${this.page}`;
    },
    changeCategory(category) {
      this.page = 1;
      window.location.href = category
        ? `/blog?page=1&category=${category}`
        : `/blog?page=1`;
    },
    setTotalVisible() {
      this.totalVisible = window.innerWidth > 500 ? 7 : 5;
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .v-pagination {
    li {
      button {
        background: #fff;
        border: 1px solid #331E0E;
        color: #331E0E !important;
        width: 38px;
        height: 38px;
        border-radius: 10px;
        line-height: 1.0;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 768px) {
          width: 60px;
          height: 60px;
          border-radius: 5px;
        }

        i {
          color: #331E0E !important;
        }

        &.v-pagination__item--active,
        &:hover {
          background-color: #331E0E !important;
          border: 1px solid #331E0E !important;
          color: #fff !important;
        }

        &.v-pagination__navigation {
          margin-left: 5px !important;
          margin-right: 5px !important;
          padding: 17px 17px;
        }

        &.v-pagination__navigation--disabled {
          pointer-events: all;
          opacity: 1;

          &:hover {
            background-color: #331E0E !important;
            border: 1px solid #331E0E !important;

            i {
              color: #fff !important;
            }
          }
        }

        @media only screen and (min-width: 1024px) {
          padding: 27px 21px;

          &.v-pagination__navigation {
            padding: 27px 27px;
          }
        }
      }
    }
  }

  .first-page {
    ul {
      li {
        &:first-of-type {
          display: none;
        }
      }
    }
  }

  .last-page {
    ul {
      li {
        &:last-of-type {
          display: none;
        }
      }
    }
  }
}

.blog_title_section {
  font-weight: 300 !important;

  &:before {
    width: 30px;
    height: 30px;
    background: no-repeat left top/25px auto;
    content: "";
    position: absolute;
    left: 0;
    background-image: url('/assets/images/icon_new.svg');

    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
      background: url('/assets/images/icon_new.svg') no-repeat left top/40px auto;
    }
  }

  @media only screen and (max-width: 767px) {
    font-weight: 700 !important;
    font-size: 24px;
  }
}
</style>

<style lang="scss">
.blog_wrap {
  li button {
    border: 2px solid #331E0E !important;
    box-shadow: none !important;

    i.mdi-chevron-right:before {
      content: ">>";
    }

    i.mdi-chevron-left:before {
      content: "<<";
    }

    font-size: 16px;

  }

  li button:hover {
    i.mdi-chevron-right:before {
      color: #fff !important;
    }

    i.mdi-chevron-left:before {
      color: #fff !important;
    }

  }
}

.banner-blog-custom {
  .normalTxt.txt_intro {
    margin-bottom: 0px;
    line-height: 1.6em;
  }
}
</style>

<style lang="scss">
@media only screen and (max-width: 320px) {
  .blog_wrap {
    .new_list a .new_list_category {
      font-size: 8px;
    }
  }
}

@media only screen and (max-width: 768px) {

  .blog_wrap {
    padding: 15px 10px !important;

    .new_box {
      gap: 10px !important;
    }

    .new_list {
      padding-left: 0px !important;
      padding-right: 0px !important;
      padding-bottom: 15px !important;
    }

    .new_list a {
      padding: 15px 10px 30px !important;
    }

    .new_list a .new_list_category {
      width: calc(100% - 20px) !important;
      margin: -13px auto 7px !important;
      min-height: 22px !important;
    }

    .new_list_title {
      line-height: normal !important;
    }

    .v-pagination {
      li button {
        font-size: 12px !important;
      }

      .v-icon.v-icon {
        font-size: 16px !important;
      }
    }
  }
}
</style>
