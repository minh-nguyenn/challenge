<template>
    <div class="wrap-content recipe-archive-detail">
        <main>
            <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
            <div v-if="archiveDetail">
                <h2 class="header-h2 d-none-mobile"><em>チャチャッとクッキング</em><br>{{ archiveDetail.title }}</h2>
                <div class="category" :style="{ 'background-color': categoryColor[archiveDetail.category?.toString()] }">
                    {{ archiveDetail.category?.toString() }}</div>
                <h2 class="header-h2 d-none-des">サラダチキンとトマトのカプレーゼ</h2>

                <div class="box-archive">
                    <div class="box-left">
                        <div class="gr-img-point">
                            <div class="points">
                                <div class="recipePoint">
                                    <small>調理時間</small>
                                    <br>
                                    <span>{{ archiveDetail.time }}分</span>
                                </div>
                                <div class="recipePoint">
                                    <small>エネルギー（1人）</small>
                                    <br>
                                    <span>{{ archiveDetail.archive?.[0]?.energy }}kcal</span>
                                </div>
                            </div>
                            <div>
                                <img :src="$appendWebpFormat(archiveDetail.filename1?.url)" alt="">
                            </div>
                        </div>


                        <div v-if="archiveDetail && archiveDetail.archive?.[0]?.url">
                            <div class="header-archive-table">レシピ動画</div>
                            <div class="box-iframe-youtube">
                                <iframe :src="convertYouTubeUrlToEmbed(archiveDetail.archive?.[0]?.url)"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen=""></iframe>
                            </div>
                        </div>
                    </div>

                    <div class="box-right">
                        <div class="header-archive-table">材料（{{ archiveDetail.archive?.[0]?.ingredients?.[0]?.serving_no }}）
                        </div>
                        <div class="table-info" v-html="archiveDetail.archive?.[0]?.ingredients?.[0]?.ingredients"></div>
                        <div class="header-archive-table">作り方</div>
                        <div class="steps-info" v-html="archiveDetail.archive?.[0]?.steps"></div>

                        <div v-if="archiveDetail.archive?.[0]?.point" class="point-info">
                            <strong>ここがポイント！</strong>
                            <div v-html="archiveDetail.archive?.[0]?.point"></div>
                        </div>


                    </div>


                </div>
            </div>
        </main>
        <AppButtonNavigation href="/service/recipe/archive/" class="d-none-mobile custom-chirashi-back" title="前のページへ戻る"
            is-back></AppButtonNavigation>
        <AppButtonNavigation href="/service/recipe/archive/" class="d-none-des custom-recipe-archive" title="一覧へ戻る">
        </AppButtonNavigation>

    </div>
</template>

<script>
import { checkLengthTitle } from "~/utils/index.js";

import { fetchDataV2 } from "~/utils/index.js";

export default {
    // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
    // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
    async setup() {
      useHead({

                title: '牛焼肉のペッパーチーズライス｜チャチャッとクッキング｜サービス｜遠鉄ストア - 静岡県西部のスーパーマーケット（浜松市,磐田市,袋井市,湖西市,掛川市）',

            })

      const { params, $microcms } = buildLegacyContext()

      const { data: __d } = await useAsyncData(
        'page:' + useRoute().fullPath,
        async () => {

            const id = params.id

            if (import.meta.server) {

                const paramsRequest = [`id[contains]${id}`]

                const response = await fetchDataV2($microcms, {

                    endpoint: 'store-recipes',

                    paramsRequest,

                    fieldStart: 'open_start',

                    orders: '-open_start,-createdAt'

                })

                const archive = response.contents && response.contents[0] ? response.contents[0] : null

                return {

                    archiveDetail: archive,

                };

            } else {

                return {}

            }
    
        }
      )
      return { ...(__d.value || {}) }
    },

    data() {
        return {
      // Cac khoa archiveDetail, breadcrumbItems den tu setup()/useAsyncData.
      // Khai lai o data() se GHI DE gia tri that -> template doc phai null.

                                    categoryColor: {
                野菜レシピ: '#47800d',
                肉レシピ: '#800d0d',
                魚レシピ: '#0d5980',
                その他: '#000000',
            }
        }
    },
    computed: {

    },
    mounted() {
        // console.log(this.archiveDetail);
    },
    methods: {
        checkLengthTitle,
        formatTextTime(time) {
            if (time) time = time + ''
            let timeCut = this.checkLengthTitle(time, 3)
            if (timeCut.includes('...')) {
                timeCut = timeCut.replace(/\.\.\./g, '');
            }
            return timeCut;
        },
        convertYouTubeUrlToEmbed(url) {
            const stringURL = this.archiveDetail.archive?.[0]?.url
            const match = stringURL.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
            if (match && match[1]) {
                return `https://www.youtube.com/embed/${match[1]}`;
            }
            return null;
        }
    }
}
</script>

<style lang="scss">
.custom-recipe-archive a {
    background: unset !important;
    width: 355px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    background-color: #f3e7cd !important;
    color: #333 !important;
    font-size: 14px !important;
    max-width: calc(100vw - 20px) ;

    svg {
        margin-top: -5px !important;
    }
}

.recipe-archive-detail {

    .header-h2 {
        padding: 70px 0 40px;
        font-size: 33px;

        em {
            font-size: 24px;
            font-style: normal;
        }
    }

    .category {
        font-size: 24px;
        line-height: 45px;
        text-align: center;
        margin: 0 auto;
        display: block;
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        color: #ffffff;
        width: 308px;
        height: 45px;
        padding: 0px;
        margin-bottom: 80px;
    }

    .box-archive {
        display: flex;
        gap: 22.5px;
        margin-bottom: 80px;

        .header-archive-table {
            font-size: 18px;
            font-weight: bold;
            width: 100%;
            border-bottom: 5px #f3e7cd solid;
            padding-bottom: 5px;
            text-align: left;
            margin-bottom: 15px;
            padding-top: 0px;
            color: #323232;
            line-height: 40px;
        }

        .box-left {
            flex: 1;

            .points {
                display: flex;
                gap: 25px;
                height: 146px;

                .recipePoint {
                    background: url('/assets/images/bg_hukidashi.webp') center center no-repeat !important;
                    width: 137px;
                    display: block;
                    margin: 0 0 10px 0 !important;
                    float: left;
                    text-align: center;
                    padding: 35px 0 0 0 !important;
                    list-style: none !important;
                    font-size: 24px;
                    line-height: 1.2;

                    small {
                        font-size: 14px;
                    }

                    span {
                        font-size: 24px;
                    }
                }
            }

            img {
                width: 100%;
                margin-bottom: 30px;
            }

            iframe {
                width: 100% !important;
                aspect-ratio: 475/267;
            }

        }

        .box-right {
            flex: 1;

            .table-info {
                font-size: 14px;
                color: #333333;
                clear: both;
                margin-bottom: 30px;

                table {
                    width: 100%;
                }


                table tbody tr:first-child td {
                    border: none;
                }

                table tbody tr td {
                    border-top: 1px solid #cccccc;
                }

                table tr td:first-child {
                    width: 65%;

                    p {
                        min-height: 25px;
                        text-align: left;
                        float: left;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        display: block;
                        text-align: left;
                        width: 100%;

                    }
                }

                table tr td:last-child {
                    width: 35%;

                    p {
                        width: 35%;
                        min-height: 25px;
                        text-align: right;
                        float: left;
                        margin-top: 10px;
                        margin-bottom: 10px;
                        display: block;
                        text-align: right;
                        width: 100%;
                    }
                }
            }

            .steps-info {
                ol {
                    margin-left: 25px;

                    font-size: 14px;

                    li {
                        margin-bottom: 10px;
                    }
                }

                p {
                    padding-bottom: 30px;
                    font-family: "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
                    color: #323232;
                    font-size: 14px;
                    line-height: 1.8;
                }
            }

            .point-info {
                background: #f3e7cd url('/assets/images/bg_like.gif') no-repeat right center;
                padding: 20px 25px;
                height: 134px;
                display: block;
                line-height: 1.5em;
                margin-top: 30px;

                strong {
                    color: #ce2339;
                    font-weight: bold;
                    font-size: 20px;
                }
            }
        }

    }



    @media only screen and (max-width: 1023px) {
        .header-h2 {
            margin: 15px 10px 25px 10px;
            color: #ce2339;
            font-size: 24px;
            line-height: 1.3em;
            font-weight: normal;
            margin-bottom: 20px;
            padding: 0;

        }

        .category {
            margin-bottom: 10px;
            padding: 5px 0px;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            text-align: center;
            color: #fff;
            font-size: 14.4px;
            width: calc(100vw - 20px);
            height: 26px;
            line-height: normal;
            margin-top: 25px;
            margin-left: 10px;
            margin-right: 10px;
        }

        .box-archive {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 35px;

            .header-archive-table {
                padding: 10px;
                background-color: #331e0e;
                color: #fff;
                font-size: 18px;
                line-height: 25.2px;
                font-weight: normal;
                margin-bottom: 0px;
            }

            .box-left {
                flex: 1;


                .gr-img-point {
                    display: flex;
                    flex-direction: column-reverse;
                }


                .points {
                    display: flex;
                    gap: 5px;
                    height: unset;
                    flex-direction: column;
                    padding: 15px 10px 25px;

                    .recipePoint {
                        background: unset !important;
                        width: 100%;
                        display: flex;
                        margin: 0 !important;
                        float: left;
                        text-align: left;
                        padding: 0 0 0 0 !important;
                        list-style: none !important;
                        font-size: 24px;
                        line-height: 1.2;
                        border: 1px solid #ccc;
                        height: 42px;

                        small {
                            font-size: 14px;
                            min-width: 154px;
                            border-right: 1px solid #ccc;
                            background-color: #f3e7cd;
                            text-align: left;
                            align-content: center;
                            padding-left: 10px
                        }

                        span {
                            font-size: 18px;
                            text-align: left;
                            align-content: center;
                            padding: 13px 10px;
                        }
                    }
                }

                img {
                    width: 100%;
                    margin-bottom: 0px;
                }

                iframe {
                    width: 100% !important;
                    aspect-ratio: 475/267;
                }

            }

            .box-right {
                flex: 1;

                .table-info {
                    font-size: 14px;
                    color: #333333;
                    clear: both;
                    margin-bottom: 20px;
                    padding: 10px;

                    table tbody tr td {
                        border-bottom: 1px solid #cccccc !important;
                        border-top: none !important;
                    }

                    table tr td:first-child {
                        width: 75%;

                        p {
                            min-height: 37px;
                            text-align: left;
                            float: left;
                            margin-top: 0;
                            margin-bottom: 0;
                            display: block;
                            text-align: left;
                            width: 100%;
                            padding-top: 0;
                            padding-bottom: 0;
                            align-content: center;

                        }
                    }

                    table tr td:last-child {
                        width: 25%;

                        p {
                            width: 35%;
                            min-height: 37px;
                            text-align: right;
                            float: left;
                            margin-top: 0;
                            margin-bottom: 0;
                            display: block;
                            text-align: right;
                            width: 100%;
                            align-content: center;

                        }
                    }
                }

                .steps-info {
                    padding: 15px 10px;

                    ol {
                        margin-left: 0;
                        font-size: 14px;
                        list-style: none;
                        padding: 0px;

                        li::marker {
                            min-width: 25px;
                            min-height: 23px;
                            background-color: #666;
                        }

                        li:nth-child(2)::before {
                            content: "2.";
                        }

                        li:nth-child(3)::before {
                            content: "3.";
                        }

                        li:nth-child(4)::before {
                            content: "4.";
                        }

                        li:nth-child(5)::before {
                            content: "5.";
                        }

                        li:nth-child(6)::before {
                            content: "6.";
                        }

                        li:nth-child(7)::before {
                            content: "7.";
                        }

                        li:nth-child(8)::before {
                            content: "8.";
                        }

                        li:nth-child(9)::before {
                            content: "9.";
                        }

                        li:nth-child(10)::before {
                            content: "10.";
                        }

                        li:nth-child(11)::before {
                            content: "11.";
                        }

                        li:nth-child(12)::before {
                            content: "12.";
                        }

                        li:nth-child(13)::before {
                            content: "13.";
                        }

                        li:nth-child(14)::before {
                            content: "14.";
                        }


                        li::before {
                            content: "1.";
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 25px;
                            height: 23px;
                            background-color: #666;
                            color: white;
                            font-weight: bold;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 3px;


                        }


                        li {
                            margin-bottom: 10px;
                            position: relative;
                            padding-left: 35px;
                            border-bottom: 1px solid #ccc;
                            padding-bottom: 10px;
                        }
                    }

                    p {
                        padding-bottom: 0;
                        font-family: "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
                        color: #323232;
                        font-size: 14px;
                        line-height: 1.8;
                        margin-bottom: 0;
                    }
                }

                .point-info {
                    background: unset;
                    padding: 15px 10px;
                    height: unset;
                    display: block;
                    line-height: 1.5em;
                    margin: 0 10px 15px 10px;
                    background-color: #f3e7cd;

                    strong {
                        font-weight: bold;
                        font-size: 20px;
                        margin-bottom: 10px;
                        color: #ce2339;
                        font-size: 16px;
                    }

                    p {
                        margin-bottom: 0px;
                    }
                }
            }

        }





    }
}
</style>
