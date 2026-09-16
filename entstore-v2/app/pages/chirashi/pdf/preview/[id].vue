<template>
    <div class="wrap-content wrap-chirashi-pdf">
        <main>
            <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
            <h2>チラシPDF閲覧</h2>
            <p class="textAC">折り込みチラシのデータをPDFで掲載しています。</p>
            <p class="chirashi"><a href="/chirashi/" class="web"><img src="/assets/images/ico_arrow01.webp" width="24"
                        height="24" alt=""><span>Web表示にする方はこちら</span></a></p>



            <h2 class="h2Title d-none-des">チラシ一覧</h2>
            <div class="list-pdf">
                <a v-for="(chirashi, index) in chirashis" :key="index" :href="chirashi?.pdf?.url" target="_blank"
                    class="item">
                    <img :src="chirashi.thumbnail && chirashi.thumbnail.url ? $appendWebpFormat(chirashi.thumbnail.url) : defaultThumbnail"
                        alt="PDFチラシ">
                    <span>{{ formatJapaneseDateRange(chirashi.title_date_start, chirashi.title_date_end) }}<br><i>{{
                        chirashi?.title }}</i></span>
                </a>
            </div>

        </main>
        <AppButtonNavigation class="d-none-mobile custom-chirashi-back" title="前のページへ戻る" is-back href="/chirashi">
        </AppButtonNavigation>

    </div>
</template>

<script>
import moment from "moment"
import 'moment/locale/ja'
import defaultThumbnail from '/assets/images/chirashi/photo_pdf.webp'

moment.locale('ja');


export default {
    // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
    // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
    async setup() {
      useHead({

                title: 'チラシPDF閲覧｜今週のチラシ情報｜遠鉄ストア',

            })

      const { query, error, $microcms } = buildLegacyContext()

      const { data: __d } = await useAsyncData(
        'page:' + useRoute().fullPath,
        async () => {

            const { id } = query;

            const { draftKey } = query;

            try {

                const response = await $microcms.get({

                    endpoint: 'store-chirashi',

                    contentId: id,

                    queries: draftKey ? { draftKey } : {},

                });


                const data = []


                if (response) data.push(response)


                return {

                    chirashis: data,

                };

            } catch (e) {

                return error({ statusCode: 404, message: 'Chirashi not found' });

            }
    
        }
      )
      return { ...(__d.value || {}) }
    },
    data() {
        return {
      // Cac khoa chirashis, breadcrumbItems den tu setup()/useAsyncData.
      // Khai lai o data() se GHI DE gia tri that -> template doc phai null.

                                    defaultThumbnail
        }
    },
    computed: {

    },
    mounted() {
        console.log(this.chirashis);

    },
    methods: {
        formatJapaneseDateRange(startStr, endStr) {
            const start = moment(startStr).add(1, 'day');
            const end = moment(endStr).add(1, 'day');
            return `${start.format('YYYY年 MM月 DD日(ddd)')}～${end.format('YYYY年 MM月 DD日(ddd)')}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap-chirashi-pdf {

    .textAC {
        font-size: 16.8px;
        padding-bottom: 30px;
        margin: 0px;
    }

    .chirashi {
        display: block;
        height: 120px;
        line-height: 60px;
        font-size: 18px;
        width: 100%;
        text-align: center;
        margin: 0 auto;
        margin-bottom: 60px;

        a.web {
            display: block;
            height: 120px;
            line-height: 120px;
            font-size: 18px;
            text-decoration: none;
            background: #f3e7cd url(/assets/images/chirashi/ico_web.webp) no-repeat 20px;
            border: solid 1px #cccccc;
            color: #000000;
            text-align: right;
            padding-left: 35px;
            padding-right: 35px;
            width: 482px;
            margin: 0 auto;

            img {
                margin: 0px 5px -5px 0;
            }
        }
    }

    .list-pdf {
        display: flex;
        gap: 30px;
        margin-bottom: 80px;

        .item:hover {
            img {
                opacity: 0.8;
            }

            span {
                background: url(/assets/images/ico_arrow01.webp) #c72539 no-repeat 10px center;
            }
        }

        .item {
            width: 100%;
            max-width: 306px;

            img {
                width: 100%;
            }

            span {
                display: block;
                background: url(/assets/images/ico_arrow01.webp) #f3e7cd no-repeat 10px center;
                width: 100%;
                padding: 10px 0 10px 40px;
                margin: -12px 0 0 0;
                box-sizing: border-box;
                color: #000000;
                line-height: 1.2;
                font-size: 18px;
                border: solid 1px #cccccc;

                i {
                    font-size: 12px;
                    display: inline;
                }
            }
        }
    }

    @media only screen and (max-width: 768px) {

        .h2Title {
            padding: 10px;
            background-color: #331e0e;
            color: #fff;
            font-size: 18px;
            line-height: 1.4em;
            font-weight: normal;

        }

        .textAC {
            margin-bottom: 20px;
            font-size: 14px;
            padding: 0px;
            text-align: left;
            padding-left: 10px;
        }


        .chirashi {
            display: block;
            height: 53px;
            line-height: 60px;
            font-size: 16px;
            width: 100%;
            text-align: center;
            margin: 0 auto;
            padding: 15px 10px;
            margin-bottom: 50px;

            a.web {
                display: block;
                height: 53px;
                line-height: normal;
                font-size: 16px;
                text-decoration: none;
                background: #f3e7cd;
                border: solid 1px #cccccc;
                color: #000000;
                text-align: right;
                padding-left: 35px;
                padding-right: 35px;
                width: 100%;
                max-width: 482px;

                margin: 0 auto;
                text-align: center;
                align-content: center;


                img {
                    margin: 0px 5px -5px 0;
                }
            }
        }







        .list-pdf {
            flex-direction: column;
            padding: 10px;
            gap: 10px;
            margin-bottom: 0px;

            .item {
                display: flex;
                width: 100%;
                max-width: unset;

                img {
                    width: 40%;
                }
            }

            span {
                display: block;
                background: url(/assets/images/ico_arrow01.webp) #f3e7cd no-repeat 98% center !important;
                width: 100%;
                padding: 0 30px 0 10px !important;
                margin: -0px 0 0 0 !important;
                box-sizing: border-box;
                color: #000000;
                line-height: 1.2;
                font-size: 16px !important;
                border: solid 1px #cccccc;
                align-content: center;

                i {
                    font-size: 12.8px;
                    display: inline;
                }
            }
        }

    }
}
</style>
