<template>
    <div class="wrap-content wrap-blog-detail-custom">
        <main>
            <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
            <BlogBanner />
            <blog-page :related-products="relatedProducts" @change-category="changeCategory">
                <div class="blog_entry_title">
                    <time class="new_list_time">{{ formatDateYMD(blogDetail.open_from, '.') }}</time>
                    <p class="new_list_category">{{ blogDetail.category.toString() }}</p>
                    <h2 class="new_list_title">{{ blogDetail.title }}</h2>
                </div>
                <img :src="$appendWebpFormat(blogDetail.filename1?.url)" class="fullImage" alt="">
                <div class="entry-body" v-html="$transformImageSrc(blogDetail.body)">
                </div>
            </blog-page>
        </main>
    </div>
</template>

<script>
import BlogBanner from "~/components/Blog/Banner.vue";
import BlogPage from "~/components/Blog/Page.vue";
import { formatDateYMD } from "~/utils/index.js";

export default {
    components: { BlogPage, BlogBanner },
    // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
    // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
    async setup() {
    // Phai lay truoc await: sau await se mat ngu canh Nuxt
    const __nuxtApp = useNuxtApp()
      

      const { query, $microcms } = buildLegacyContext()

      const { data: __d } = await useAsyncData(
        'page:' + useRoute().fullPath,
        async () => {

            const { id } = query;

            const { draftKey } = query;

            const response = await $microcms.get({

                endpoint: `store-blog/${id}`,

                queries: draftKey ? { draftKey } : {},

            })

            return {

                blogDetail: response,

            };
    
        }
      )
      __nuxtApp.runWithContext(() => useHead({

                title: `${__d.value?.blogDetail.title}｜遠鉄ストアのおいしい話｜遠鉄ストア`,

            }))
    return { ...(__d.value || {}) }
    },
    data() {
        return {
      // Cac khoa relatedProducts den tu setup()/useAsyncData.
      // Khai lai o data() se GHI DE gia tri that -> template doc phai null.

                        // blogDetail den tu setup()/useAsyncData — khai bao lai o day se che mat
        }
    },

    mounted() {
        if (this.blogDetail && this.blogDetail.id) this.updatePopularCount(this.blogDetail.id)
        this.fetchBlog()
    },


    computed: {
        breadcrumbItems() {
            return [
                {
                    text: 'ホーム',
                    disabled: false,
                    href: '/',
                },
                {
                    text: '遠鉄ストアのおいしい話',
                    disabled: false,
                    href: '/blog/',
                },
                {
                    text: this.blogDetail.title || '',
                    disabled: true,
                },
            ];
        }
    },
    methods: {
        formatDateYMD,
        changeCategory(category) {
            window.location.href = category ? `/blog?category=${category}` : `/blog`;
        },

        async fetchBlog() {
            let category = ''
            let excludeId = ''
            if (this.blogDetail) {
                excludeId = this.blogDetail.id
                category = this.blogDetail.category[0]
            }
            try {
                const fieldStart = 'open_from'
                const fieldEnd = 'open_to'
                const now = new Date()
                const nowStr = this.formatDateYMD(now)
                const response = await this.$microcms.get({
                    endpoint: 'store-blog',
                    queries: {
                        limit: 4,
                        filters: `${fieldStart}[less_than]${nowStr}[and](${fieldEnd}[not_exists]true[or]${fieldEnd}[greater_than]${nowStr})[and]category[contains]${category}`
                    }
                });
                const contents = response.contents

                const blogs = []
                for (let i = 0; i < contents.length; i++) {
                    if (blogs.length < 3) {
                        if (contents[i].id !== excludeId) blogs.push(contents[i])
                    }
                }

                const blogList = (blogs || []).map(blog => ({
                    id: blog.id,
                    imgUrl: blog.filename1?.url || '',
                    category: blog.category.toString(),
                    title: blog.title,
                    time: blog.open_from
                }))

                this.relatedProducts = blogList
            } catch (error) {
                console.error('Failed to fetch related products:', error);
            }
        },

        async updatePopularCount(blogId) {
            try {
                // Bước 1: kiểm tra blog đã có trong popular-blogs chưa
                const res = await this.$microcms.get({
                    endpoint: 'store-popular-blogs',
                    queries: {
                        filters: `blog_id[equals]${blogId}`,
                        limit: 1
                    }
                });

                if (res.contents.length > 0) {
                    const item = res.contents[0];

                    // Bước 2: Nếu đã tồn tại, cập nhật blog_cnt + 1
                    await this.$axios.$put('/api/update-popular-blogs', {
                        contentId: item.id,
                        blog_cnt: item.blog_cnt + 1
                    })
                } else {
                    // Bước 3: Nếu chưa tồn tại, tạo mới bản ghi
                    await this.$axios.$post('/api/update-popular-blogs', {
                        blog_id: blogId,
                        blog_cnt: 1
                    });
                }
            } catch (err) {
                console.error('Failed to update or create blog view count:', err);
            }
        }
    }
}
</script>

<style lang="scss">
.wrap-blog-detail-custom {
    .entry-body h2 {
        color: unset !important;
        text-align: unset !important;
        font-size: revert;
        padding: 10px 0;
    }
}

@media only screen and (max-width: 768px) {
    .wrap-blog-detail-custom {
        .normalTxt.txt_intro.mobile-box {
            margin-bottom: 0px;
        }

        .blog_wrap {
            padding-top: 0px;
        }

        .blog_entry_title .new_list_time {
            margin-right: 10px !important;
            font-size: 10px !important;
        }

        .blog_wrap {
            padding: 15px 10px !important;
        }
    }
}
</style>

<style scoped lang="scss">
.blog_entry_title {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .new_list_time {
        margin: 0 30px 0 0;
        font-size: 14px;
        color: #331E0E;
        display: block;

        @media only screen and (max-width: 1023px) {
            font-size: 12px !important;
        }

    }

    .new_list_category {
        padding: 3px 15px;
        font-size: 10px;
        background: #331E0E;
        border-radius: 100px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        margin-bottom: 0;

        @media only screen and (min-width: 1024px) {
            font-size: 14px;
            min-width: 237px;
        }
    }

    .new_list_title {
        width: 100%;
        margin: 0 !important;
        padding: 25px 0 0 0 !important;
        color: #331E0E !important;
        font-size: 28px !important;
        font-weight: bold !important;
        line-height: 40px;
        text-align: left !important;

        @media only screen and (max-width: 1023px) {
            font-size: 18px !important;
            line-height: 25.2px;
            padding-top: 10px !important;
        }
    }
}

@media screen and (min-width: 1280px) {
    .entry-body {
        font-size: 16px;
        line-height: 1.8;

        ::v-deep {
            h2 {
                &:first-of-type {
                    line-height: 1.5;
                }
            }
        }
    }
}

.entry-body {
    ::v-deep {
        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>
