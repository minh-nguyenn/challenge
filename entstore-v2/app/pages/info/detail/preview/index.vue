<template>
    <div class="wrap-content detail-info-custom">
        <main>
            <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
            <p class="date mobile-box d-none-des">{{ formatDateYMD(infoDetail.post_date) }}</p>
            <h2 class="info-title" v-html="infoDetail.title"></h2>
            <div class="textAC mobile-box text-left detail-data-custom" v-html="$transformImageSrc(infoDetail.body)">
            </div>
        </main>
        <AppButtonNavigation is-back href="/info" class="d-none-mobile" title="前のページへ戻る"></AppButtonNavigation>
        <AppButtonNavigation is-back href="/info" class="d-none-des custom-btn-info" title="一覧へ戻る" long-btn>
        </AppButtonNavigation>
    </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { formatDateYMD } from "~/utils/index"

export default {
    components: { AppButtonNavigation },
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

                endpoint: `store-info/${id}`,

                queries: draftKey ? { draftKey } : {},

            })

            return {

                infoDetail: response

            };
    
        }
      )
      __nuxtApp.runWithContext(() => useHead({

                title: `${__d.value?.infoDetail.title?.replaceAll('<br>', '') || ''}｜遠鉄ストアからのお知らせ｜遠鉄ストア`,

            }))
    return { ...(__d.value || {}) }
    },
    data() {
        return {
      // Cac khoa infoDetail den tu setup()/useAsyncData.
      // Khai lai o data() se GHI DE gia tri that -> template doc phai null.

                    }
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
                    text: '遠鉄ストアからのお知らせ',
                    disabled: false,
                    href: '/info/',
                },
                {
                    text: this.infoDetail.title?.replaceAll('<br>', '') || '',
                    disabled: true,
                },
            ]
        }
    },
    methods: {
        formatDateYMD
    }
}
</script>

<style lang="scss">
.custom-btn-info {
    margin-bottom: 20px;
}

.detail-data-custom {
    figure {
        display: flex;

        a {
            margin: auto;
            display: flex;
        }

        a:hover {
            opacity: 0.8;
        }
    }

    img {
        max-width: 100vw;
    }
}
</style>
<style scoped lang="scss">
.wrap-content {

    @media only screen and (min-width: 1024px) {
        padding: 0;
        padding-bottom: 50px;

        main {
            padding-bottom: 50px;
        }
    }

    @media only screen and (max-width: 1023px) {
        .info-title {
            line-height: 33px;
            padding-top: 0 !important;
        }
    }

    .textAC {
        ::v-deep {
            font-size: 16.8px;

            @media only screen and (max-width: 1023px) {
                font-size: 14px;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            a {
                color: #087295;
                text-decoration: underline;

                @media only screen and (max-width: 1023px) {
                    text-decoration: none;
                }

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
}

.date {
    margin-bottom: 10px;
    margin-top: 20px;
    color: #333333;
}
</style>
