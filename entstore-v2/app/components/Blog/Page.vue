<template>
  <div class="">
    <main>
      <div class="font-plus-data">関連記事</div>
      <div class="blog_wrap">
        <section class="new">
          <slot />
        </section>
        <div class="sidebar">
          <aside class="blog_category">
            <h2 class="blog_title_section type font-stdEb">カテゴリ</h2>
            <ul class="blog_category_list">
              <li v-for="categoty in categories" :key="categoty" :class="{ active: isCurrentCategory(categoty) }"
                @click="filterCategory(categoty)">{{ categoty }}</li>
            </ul>
          </aside>
          <aside v-if="true" class="blog_favorite">
            <h2 class="blog_title_section popular">人気記事</h2>

            <div v-for="(item, index) in popularArticles" :key="index" class="blog_favorite_list">
              <a :href="'/blog/detail/' + item.id">
                <figure class="thum_img">
                  <img v-if="item?.filename1 && item.filename1.url" :src="$appendWebpFormat(item?.filename1?.url)"
                    alt="シラスとにんにくの風味が食欲をそそる『ズミチャーハン』！K-MIXと遠鉄ストアのコラボ商品第2弾が登場" class="img_responsive">
                  <img v-else src="/assets/images/icon-default.webp" class="thum">
                </figure>
                <div class="blog_favorite_inner">
                  <p class="new_list_category">{{ item.category[0] }}</p>
                  <time datetime="2023-03-29 20:00:00" class="new_list_time">{{ formatTime(item.open_from) }}</time>
                  <p class="new_list_title">{{ checkLengthTitle(item.title, 50) }}</p>
                </div>
              </a>
            </div>
          </aside>
        </div>
      </div>
      <div v-if="relatedProducts && relatedProducts.length" class="blog_category related-blogs">
        <h2 class="blog_title_section product-relate type font-stdEb">関連記事</h2>
        <div class="blog_box">
          <BlogItem v-for="blog in relatedProducts" :key="blog.id" :blog-item="blog"></BlogItem>
        </div>
      </div>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/blog"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import BlogItem from "~/components/Blog/Item.vue";
import { formatDateYMD, checkLengthTitle } from "~/utils/index.js";

export default {
  name: 'BlogPage',
  components: { BlogItem, AppButtonNavigation },
  props: {
    relatedProducts: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      blogList: [
        {
          id: '1',
          imgUrl: '/assets/images/fc55ef1fedb844331963ee1eb311287cdf1c8fa4.webp',
          category: '商品',
          title: 'シャリッと甘い！浜松市産すいか『縞無双』をご紹介',
          time: '2023.07.06'
        },
        {
          id: '2',
          imgUrl: '/assets/images/fc55ef1fedb844331963ee1eb311287cdf1c8fa4.webp',
          category: '商品',
          title: 'シャリッと甘い！浜松市産すいか『縞無双』をご紹介',
          time: '2023.07.06'
        },
        {
          id: '3',
          imgUrl: '/assets/images/fc55ef1fedb844331963ee1eb311287cdf1c8fa4.webp',
          category: '商品',
          title: 'シャリッと甘い！浜松市産すいか『縞無双』をご紹介',
          time: '2023.07.06'
        },
      ],
      categories: ['すべてのカテゴリ', '商品', 'ハレの日/イベント', 'お得情報', '店舗/スタッフ', '豆知識'],

      popularArticles: []
    }
  },

  mounted() {
    this.fetchBlogCount()
  },
  methods: {
    isCurrentCategory(category) {
      return this.$route.query.category ? this.$route.query.category === category : (category === 'すべてのカテゴリ' && !this.$route.params.id);
    },
    filterCategory(category) {
      this.$emit('change-category', category === 'すべてのカテゴリ' ? '' : category)
    },

    formatTime(string) {
      const date = new Date(string);
      const formatted = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
      return formatted
    },

    async fetchBlogCount() {
      try {
        const response = await this.$microcms.get({
          endpoint: 'store-popular-blogs',
          queries: {
            orders: `-blog_cnt`,
            limit: 100,
          }
        });

        const ids = []

        const contents = response.contents

        for (let i = 0; i < contents.length; i++) {
          ids.push(contents[i].blog_id)
        }
        if (ids.length > 0)
          await this.fetchBlog(ids)


      } catch (error) {
        console.error('Failed to fetch related products:', error);
      }
    },



    async fetchBlog(ids) {
      try {
        const fieldStart = 'open_from'
        const fieldEnd = 'open_to'
        const now = new Date()
        const nowStr = this.formatDateYMD(now)
        const response = await this.$microcms.get({
          endpoint: 'store-blog',
          queries: {
            ids: ids.join(','),
            limit: 5,
            filters: `${fieldStart}[less_than]${nowStr}[and](${fieldEnd}[not_exists]true[or]${fieldEnd}[greater_than]${nowStr})`
          }
        });
        const blogs = []
        const contents = response.contents
        for (let i = 0; i < ids.length; i++) {
          const item = contents.find(item => item.id === ids[i])
          if (item) blogs.push(item)
        }
        this.popularArticles = blogs.slice(0, 5)

      } catch (error) {
        console.error('Failed to fetch related products:', error);
      }
    },
    formatDateYMD,
    checkLengthTitle
  }
}


</script>

<style scoped lang="scss">
/* Vue 2: noi dung truyen qua <slot> mang CA data-v cua component nay nen
   style scoped bam duoc. Vue 3 KHONG the -> phai dung :deep().
   Do duoc bang scripts/find-slot-css.mjs: thieu no thi .new_box mat grid
   2 cot, anh blog to gap doi (615px thay vi 286px), trang cao 8656px
   thay vi 4200px. */
.blog_wrap {
  padding: 90px 0 100px;

  @media only screen and (min-width: 768px) {
    display: flex;

    .new {
      padding: 0 22px 0 0;
      background: linear-gradient(to bottom, #331E0E, #331E0E 5px, transparent 5px, transparent 8px) repeat-y right top/2px 13px;
    }
  }

  @media only screen and (max-width: 1023px) {
    padding: 50px 12px 20px;
  }

  .new {
    flex: 1;

    :deep(.blog_title_section) {
      margin: 0 0 20px 0 !important;
      padding: 0 0 0 50px !important;
      color: #331E0E !important;
      font-size: 33px;
      padding-left: 50px !important;
      line-height: 1 !important;
      position: relative;
      text-align: left !important;

      @media only screen and (max-width: 767px) {
        font-size: 24px;
        padding-left: 35px !important;
      }
    }

    :deep(.new_box) {
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
    }

    @media only screen and (max-width: 767px) {
      margin-bottom: 30px;
      padding-bottom: 30px;
      background: linear-gradient(to right, #331E0E, #331E0E 5px, transparent 5px, transparent 8px) repeat-x left bottom/13px 2px;
    }
  }

  .sidebar {
    padding: 0 12px;

    @media screen and (min-width: 768px) {
      width: 305px;
      padding-left: 25px;
      padding-right: 0px;
    }

    .blog_category {
      padding-bottom: 48px;
      background: linear-gradient(to right, #331E0E, #331E0E 5px, transparent 5px, transparent 8px) repeat-x left bottom/13px 2px;

      :deep(.blog_title_section) {
        margin: 0 0 20px 0 !important;
        padding: 0 0 0 50px !important;
        color: #331E0E !important;
        font-size: 24px;
        line-height: 1 !important;
        position: relative;
        text-align: left !important;
        font-weight: 700;

        &::before {
          top: 0 !important;
        }


        @media screen and (max-width: 768px) {
          padding-left: 35px !important;

          &::before {
            top: 5 !important;
          }
        }

        @media screen and (min-width: 768px) {
          font-size: 33px;
          font-weight: normal;

        }

        &:before {
          width: 30px;
          height: 30px;
          background: no-repeat left top/25px auto;
          content: "";
          position: absolute;
          left: 0;
          background-image: url('/assets/images/icon_list (1).svg');
          top: 5px;

          @media screen and (max-width: 768px) {
            top: 2px;
          }

          @media screen and (min-width: 768px) {
            width: 40px;
            height: 40px;
            background: url('/assets/images/icon_list (1).svg') no-repeat left top/40px auto;
          }
        }

        &.product-relate {
          &:before {
            background-image: url('/assets/images/icon_link.svg');

            @media screen and (min-width: 768px) {
              background: url('/assets/images/icon_link.svg') no-repeat left top/40px auto;
            }
          }
        }
      }

      .blog_category_list {
        li {
          padding-left: 12px;
          line-height: 1.6;
          position: relative;
          margin-bottom: 10px;
          list-style: none;
          color: #331E0E;
          font-size: 16px;
          text-decoration: none;
          cursor: pointer;

          &:before {
            width: 4px;
            height: 4px;
            background: #CF2339;
            border-radius: 100px;
            content: "";
            position: absolute;
            left: 0;
            top: 9px;
          }

          &.active {
            color: #CF2339;
            font-weight: bold;
          }

          &:hover {
            color: #CF2339;
            font-weight: bold;
          }
        }
      }

      .blog_box {
        @media screen and (min-width: 768px) {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 5px;
        }

        margin-bottom: 20px;

        @media only screen and (max-width: 767px) {
          ::v-deep {
            :deep(.new_list) {
              width: 300px;
            }
          }
        }
      }
    }

    .blog_favorite {
      padding-top: 48px;

      :deep(.blog_title_section) {
        margin: 0 0 20px 0 !important;
        padding: 0 0 0 50px !important;
        color: #331E0E !important;
        margin-bottom: 0 !important;
        padding-left: 35px !important;
        font-size: 24px;
        line-height: 1 !important;
        position: relative;
        text-align: left !important;
        font-family: "FOT-ベビポップ Std EB";

        @media screen and (min-width: 768px) {
          font-size: 33px;

        }

        &:before {
          width: 30px;
          height: 30px;
          background: no-repeat left top/25px auto;
          content: "";
          position: absolute;
          left: 0;
          background-image: url('/assets/images/icon_favorite.svg');
          background-size: 100% 100%;

          @media screen and (min-width: 768px) {
            width: 26px;
            height: 32px;
            // background: url('/assets/images/icon_favorite.svg') no-repeat left top/40px auto;
          }
        }
      }

      .blog_favorite_list {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) 3px, transparent 3px, transparent 8px) repeat-x left bottom/13px 2px;

        a:hover {
          :deep(.new_list_category) {
            background: #CF2339 !important;
          }

          .new_list_time,
          :deep(.new_list_title) {
            color: #CF2339 !important;
          }
        }

        a {
          padding: 24px 0;
          display: flex;
          text-decoration: none;

          :deep(.thum_img) {
            width: 70px;
            height: 70px;
            margin-right: 13px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            line-height: 0;

            img {
              width: auto;
              height: 100%;
              min-height: 100%;
              min-width: 100%;
              position: absolute;
              top: 50%;
              left: 50%;
              border-radius: 10px;
              transform: translate(-50%, -50%);
            }
          }

          .blog_favorite_inner {
            flex: 1;

            :deep(.new_list_category) {
              margin-bottom: 5px;
              padding: 2px 15px;
              display: inline-block;
              font-size: 12px;
              background: #331E0E;
              border-radius: 100px;
              color: #fff;
              position: relative;
              z-index: 1;
              min-height: 25.59px;
              align-content: center;
            }

            :deep(.new_list_time) {
              margin-bottom: 3px;
              font-size: 12px;
              color: #331E0E;
              display: block;
            }

            :deep(.new_list_title) {
              font-size: 14px;
              font-weight: normal;
              color: #331E0E;
            }
          }
        }
      }
    }
  }
}
</style>


<style lang="scss">
@media only screen and (max-width: 768px) {

  .blog_wrap .sidebar .blog_category .blog_category_list li {
    font-size: 14px !important;
    margin-bottom: 5px !important
  }

  .sidebar {
    padding: 0px !important
  }

  .blog_wrap .sidebar .blog_favorite .blog_favorite_list a {
    padding: 15px 0 !important;

    :deep(.thum_img) {
      width: 80px !important;
      height: 80px !important;
      margin-right: 15px !important;
    }
  }

  .blog_wrap .sidebar .blog_favorite .blog_favorite_list a .blog_favorite_inner .new_list_title {
    margin-bottom: 0px;
    font-size: 12px !important;
  }

  .blog_wrap .sidebar .blog_favorite .blog_favorite_list a .blog_favorite_inner .new_list_time,
  .blog_wrap .sidebar .blog_favorite .blog_favorite_list a .blog_favorite_inner .new_list_category {
    font-size: 10px !important;
  }

  .blog_wrap .sidebar .blog_favorite .blog_favorite_list a .blog_favorite_inner .new_list_category {
    min-height: 22px !important;
    padding: 3px 5px !important;
  }

  .blog_wrap .sidebar .blog_category {
    padding-bottom: 30px !important;
  }
}
</style>

<style lang="scss">
.related-blogs {
  padding-top: 30px;
  margin-bottom: 70px;

  .blog_box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .product-relate {
    margin: 0 0 20px 0 !important;
    padding: 0 0 0 50px !important;
    color: #331E0E !important;
    font-family: "FOT-ベビポップ Std EB";
    font-size: 24px;
    line-height: 1 !important;
    position: relative;
    text-align: left !important;
  }

  .product-relate::before {
    content: "";
    position: absolute;
    left: 0;
    top: -4px;
    background-image: url('/assets/images/icon_link.svg');
    width: 40px;
    height: 40px;

    @media screen and (min-width: 768px) {
      background: url('/assets/images/icon_link.svg') no-repeat left top/40px auto;
    }
  }

  @media only screen and (max-width: 1023px) {
    padding-top: 30px;
    margin-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;


    .blog_box {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 10px;

      :deep(.new_list) {
        a {
          padding: 15px 10px 30px;

          :deep(.new_list_category) {
            min-height: 22px;
            margin: -14px auto 10px;
          }
        }
      }
    }

    .product-relate {
      margin: 0 0 20px 0 !important;
      padding: 0 0 0 50px !important;
      color: #331E0E !important;
      font-family: "FOT-ベビポップ Std EB";
      font-size: 24px;
      line-height: 1 !important;
      position: relative;
      text-align: left !important;
      padding-left: 35px !important;
    }

    .product-relate::before {
      content: "";
      position: absolute;
      left: 0;
      top: -2px;
      background-image: url('/assets/images/icon_link.svg');
      width: 40px;
      height: 40px;
    }
  }
}
</style>
