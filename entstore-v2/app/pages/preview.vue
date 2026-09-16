<template>
    <main>
        <div class="banner-top d-none-mobile">
            <div class="slider-top">
                <div id="slider" class="flexslider">
                    <ul class="slides">
                        <li v-for="slide in sliderList" :key="slide.id">
                            <a :href="slide?.url">
                                <img :src="$appendWebpFormat(slide.filename1?.url)" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="carousel-bottom">
                <div id="carousel" class="flexslider">
                    <ul class="slides">
                        <li v-for="slide in sliderList" :key="slide.id">
                            <img :src="$appendWebpFormat(slide.filename2?.url)" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="mobile-sliderBox" class="d-none-des">
            <ClientOnly>
              <VxSlick ref="slick" :options="slickOptions">
                  <a v-for="slide in sliderList" :key="slide.id" :href="slide?.url">
                      <img :src="$appendWebpFormat(slide.filename1?.url)">
                  </a>
              </VxSlick>
            </ClientOnly>
        </div>
        <div class="content">
            <AppArticle title="お知らせ" href="/info">
                <ul class="news">
                    <li v-for="item in infoData" :key="item.id">
                        {{ formatDateYMD(item.post_date) }}
                        <span v-if="item.category && item.category.length" class="category">{{ item.category.toString()
                            }}</span>
                        <a :href="`/info/detail/${item.id}`">{{ checkLengthTitle(item.title, 100) }}</a>
                    </li>
                </ul>
                <AppButtonNavigation href="/info/" class="mt-6" long-btn title="一覧を表示"></AppButtonNavigation>
            </AppArticle>
            <AppArticle :title="isMobile ? '企業情報・ニュースリリース' : 'ニュースリリース'" href="/news">
                <ul class="news">
                    <li v-for="news in newsList" :key="news.id">
                        {{ formatDateYMD(news.post_date) }}
                        <a :href="`/news/detail/${news.id}`">{{ checkLengthTitle(news.title, 100) }}</a>
                    </li>
                </ul>
                <AppButtonNavigation class="mt-6" long-btn href="/news/" title="一覧を表示"></AppButtonNavigation>
            </AppArticle>
            <article id="bargainArea">
                <h2 class="bargainTitle">今週のチラシ
                </h2>
                <div class="mobile-box">
                    <iframe id="chirashi-next-iframe"
                        src="https://next.retailstudio.jp/entetsu-store/039/chirashi/iframe/?shop-id=0000"
                        scrolling="no" frameborder="0" width="" height=""></iframe>

                </div>
                <section class="flier d-none-mobile">
                    <p class="btnBig"><a href="/chirashi/pdf/"><span>PDFでご覧になる場合はこちら</span></a></p>
                </section>
                <AppButtonNavigation class="mt-6 d-none-des" long-btn href="/chirashi/pdf/" title="PDFでご覧になる場合はこちら">
                </AppButtonNavigation>
            </article>

            <article class="blog_top">
                <BlogBanner></BlogBanner>
                <div class="new_box">
                    <BlogItem v-for="blog in blogList" :key="blog.id" :blog-item="blog"></BlogItem>
                </div>
                <p class="btn_blog"><a href="/blog/">一覧を表示</a></p>
            </article>

            <article class="wColumn d-none-mobile">
                <figure class="thumContent"><a href="https://shop.entstore.co.jp/f/ec" target="_blank"><img
                            src="/assets/images/ban_giftshop.webp" alt="ネット通販"></a>
                </figure>
                <figure class="thumContent"><a href="https://cgc-kitchen365.jp/" target="_blank"><img
                            src="/assets/images/ban_recipe.webp" alt="レシピサイト Kitchen365 by ふれ愛交差点"></a>
                </figure>
            </article>

            <AppArticle class="box-list-recipe" v-if="recipeList" title="毎月更新レシピ集" sub-title="遠鉄ストアおすすめレシピ"
                href="/service/recipe">
                <section v-for="(recipe, index) in recipeList" :key="index"
                    :style="index === 1 ? 'background-color: #f5f1e8;' : ''" class="recipeList">
                    <span v-if="checkRecipeNew(recipe.open_start)" class="new">new</span>
                    <a target="_blank"
                        :href="recipe.archive && recipe.archive.length > 0 ? `/service/recipe/archive/detail/${recipe.id}` : `${recipe.target_url}`">
                        <figure>
                            <img v-if="recipe.filename1 && recipe.filename1.url"
                                :src="$appendWebpFormat(recipe.filename1.url)" class="fullImage">
                            <img v-else src="/assets/images/img_noimg.webp" class="fullImage">
                        </figure>
                        <div class="title-recipe">
                            <p class="category c_stats03"
                                :style="{ 'background-color': categoryColor[recipe.category.toString()] }">
                                {{ recipe.category ? recipe.category.toString() : '' }}</p>
                            <h2>{{ recipe.title ? checkLengthTitle(recipe.title, 20) : '' }}</h2>
                            <p class="time">
                                <span v-if="recipe.video" class="youtube">レシピ動画</span>
                                <span>{{ checkLengthTitle(String(recipe.time), 2)?.replace('...', '') }}分</span>
                            </p>

                        </div>
                    </a>
                </section>
            </AppArticle>

            <AppArticle class="box-event-custom" title="キャンペーン・イベント情報" href="/event">
                <div v-if="eventData && eventData.length" class="wrap-aricle">
                    <div v-if="checkInit" class="content-article">
                        <a v-for="event in eventData" :key="event.id" :href="`/event/detail/${event.id}`">
                            <span class="cate color01">{{ event.category.toString() }}</span>
                            <img :src="$appendWebpFormat(event.filename1?.url)" alt="">
                            <div class="caption" v-html="checkLengthTitleHTML(event.title, 50)"></div>
                        </a>
                    </div>
                </div>
            </AppArticle>
            <AppArticle class="d-none-mobile mb-0" title="遠鉄ストアの活動">
                <div class="wrap-content">
                    <section class="contentInner">
                        <div id="ambient" class="csrInfo">
                            <h3>環境への取り組み</h3>
                            <ul>
                                <li><a href="/company/green/recycle/">資源回収</a></li>
                                <li><a href="/company/green/eco/">エコトレー</a></li>
                                <li><a href="/company/green/food">食品リサイクル</a></li>
                            </ul>
                        </div>
                    </section>
                    <section class="contentInner">
                        <div id="social" class="csrInfo">
                            <h3>社会活動への取り組み</h3>
                            <ul>
                                <li><a href="/company/social/cgc/">全国児童画コンクール</a></li>
                                <li><a href="/company/social/food/">食育体験</a></li>
                                <li><a href="/company/social/sports/">スポーツ・体育へのサポート</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </AppArticle>

            <AppArticle class="d-none-des" title="サービス" href="/service">
                <div class="pa-2">
                    <section v-for="(service, index) in services" :key="index" class="serviceInner">
                        <a :href="service.to">
                            <figure><img :src="$appendWebpFormat(service?.url)" :alt="service.imgAlt"
                                    class="fullImage d-block"></figure>
                            <h2>{{ service.title }}</h2>
                        </a>
                    </section>
                </div>
            </AppArticle>
        </div>
    </main>
</template>

<script>
import VxSlick from "~/components/vx/VxSlick.vue";

import AppArticle from "~/components/App/Article.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import BlogItem from "~/components/Blog/Item.vue";
import BlogBanner from "~/components/Blog/Banner.vue";


import { fetchData, fetchDataV2, formatDateYMD, checkLengthTitle } from "~/utils/index.js";

export default {
    components: { Slick: VxSlick, BlogBanner, BlogItem, AppButtonNavigation, AppArticle },

    // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
    // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
    async setup() {
      useHead({

                title: '遠鉄ストア',

            })

      const { $microcms, $config } = buildLegacyContext()

      const { data: __d } = await useAsyncData(
        'page:' + useRoute().fullPath,
        async () => {


            const [infoRes] = await Promise.all([

                fetchDataV2($microcms, {

                    limit: 3,

                    offset: 0,

                    endpoint: 'store-info',

                    orders: '-post_date',

                }),

            ]);


            const sliderRes = await fetch(`https://${$config.CMS_DOMAIN_UPDATE}.microcms.io/api/v1/store-slider?limit=100`, {

                headers: {

                    'X-MICROCMS-API-KEY': $config.CMS_KEY_PREVIEW,

                }

            }).then(res => res.json());


            return {

                infoData: infoRes?.contents || [],

                sliderList: sliderRes?.contents || [],

            };
    
        }
      )
      return { ...(__d.value || {}) }
    },

    data() {
        return {
      // Cac khoa newsList, blogList, eventData, recipeList, isMobile, checkInit, slickOptions den tu setup()/useAsyncData.
      // Khai lai o data() se GHI DE gia tri that -> template doc phai null.

                                                                                                services: [/* giữ nguyên danh sách services như bạn có */],
            categoryColor: {
                野菜レシピ: '#47800d',
                肉レシピ: '#800d0d',
                魚レシピ: '#0d5980',
                その他: '#000000',
            },
        };
    },


    mounted() {
        this.checkInit = true;

        window.$('#slider').flexslider({
            animation: "slide",
            rtl: true,
        });

        window.$('#carousel').flexslider({
            animation: "slide",
            itemWidth: 130,
            itemMargin: 5,
            mousewheel: true,
            rtl: true,
            asNavFor: '#slider',
        });

        window.addEventListener('message', function (e) {
            const iframe = document.getElementById('chirashi-next-iframe');
            const eventName = e.data[0];
            const data = e.data[1];
            if (eventName === 'setHeight') {
                iframe.setAttribute('height', data);
            }
        }, false);

        this.checkIsMobile();
        window.addEventListener("resize", this.checkIsMobile);

        this.fetchOtherData(); // gọi các API còn lại sau khi mounted
    },

    beforeUnmount() {
        window.removeEventListener("resize", this.checkIsMobile);
    },

    methods: {
        formatDateYMD,
        checkLengthTitle,
        checkIsMobile() {
            this.isMobile = window.innerWidth <= 768;
        },

        YMDFormat(inputDate) {
            const date = new Date(Date.parse(inputDate));
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}年 ${month}月 ${day}日(${this.getDayOfWeek(date)})`;
        },

        getDayOfWeek(date) {
            const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
            return daysOfWeek[date.getDay()];
        },

        checkLengthTitleHTML(html, maxLength = 50) {
            if (!html) return '';
            const div = document.createElement('div');
            div.innerHTML = html;
            const text = div.textContent || div.innerText || '';
            return text.trim().length > maxLength
                ? text.trim().slice(0, maxLength) + '...'
                : text.trim();
        },

        checkRecipeNew(startDate) {
            const inputDate = new Date(startDate);
            const now = new Date();
            return (
                inputDate.getMonth() === now.getMonth() &&
                inputDate.getFullYear() === now.getFullYear()
            );
        },

        async fetchOtherData() {
            try {
                const $microcms = this.$microcms;
                const [newsRes, blogRes, eventRes, recipeRes] = await Promise.all([
                    fetchData($microcms, {
                        limit: 3,
                        offset: 0,
                        endpoint: 'store-news',
                    }),
                    fetchData($microcms, {
                        limit: 3,
                        offset: 0,
                        endpoint: 'store-blog',
                        orders: '-open_from',
                    }),
                    fetchData($microcms, {
                        endpoint: 'store-event',
                    }),
                    fetchData($microcms, {
                        endpoint: 'store-recipes',
                        fieldStart: 'open_start',
                        orders: '-open_start,-createdAt',
                        limit: 2,
                    }),
                ]);

                this.newsList = newsRes?.contents || [];
                this.eventData = eventRes?.contents || [];
                this.recipeList = recipeRes?.contents || [];

                this.blogList = (blogRes?.contents || []).map(blog => ({
                    id: blog.id,
                    imgUrl: appendWebpFormat(blog.filename1?.url) || '',
                    category: blog.category.toString(),
                    title: blog.title,
                    time: blog.open_from
                }));
            } catch (error) {
                console.error("Error fetching other data:", error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.banner-top {
    padding-top: 17px;
    overflow: hidden !important;
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    background: url('/assets/images/bg_mainvisual.webp') repeat-x right top;
    padding-bottom: 37px;
    height: 540px;

    .flexslider {
        max-width: 980px;
        margin: 0 auto 10px auto;
        border: 10px solid #fff;
        position: relative;
        zoom: 1;

        ::v-deep {
            .flex-control-nav {
                display: none;
            }

            li {
                &:hover {
                    img {
                        opacity: 0.6;
                    }
                }
            }
        }
    }

    #carousel {
        border: 0;
        background: unset;

        .slides {
            img {
                border: 2px solid #fff;
                height: 43px;
            }
        }
    }
}

.content {
    width: 100%;
    margin: 0 auto;
    padding-top: 15px;
    overflow: hidden;

    @media only screen and (min-width: 1024px) {
        width: 980px;
        padding: 30px 0 50px 0;
    }

    .news {
        li {
            margin-bottom: 9px;
            padding: 0 0 9px 0 !important;
            border-bottom: 1px #ccc dotted;
            background: none !important;
            font-size: 14px;

            @media only screen and (max-width: 1024px) {
                padding-left: 10px !important;
                padding-top: 10px !important;
                border: 2px solid #999;
                border-top: 0;
                margin-bottom: 0;
                font-size: 12px;
                color: rgb(153, 153, 153);
                background: url('/assets/images/ico_arrow06.webp') no-repeat 98% 50% !important;

                a {
                    color: #666 !important;
                    font-size: 14px !important;
                }

                &:hover {
                    background: url('/assets/images/ico_arrow06.webp') no-repeat #e4e4e4 98% 50% !important;
                }
            }

            .category {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                margin-left: 15px;
                padding: 2px 10px;
                background-color: #CF2339;
                border-radius: 3px;
                color: #fff;
                vertical-align: middle;
            }

            a {
                display: block;
                min-height: 16px;
                color: #333333;
                padding: 5px 15px 5px 0;

                @media only screen and (max-width: 1024px) {
                    color: #666;
                }

                @media only screen and (min-width: 1024px) {
                    background: url('/assets/images/ico_arrow02.webp') no-repeat 0 0;
                    background-position: 5px 10px;
                    padding: 5px 0 0 20px;
                    font-size: 14px;
                    color: #333;
                }
            }
        }
    }

    #bargainArea {
        overflow: hidden;
        margin-bottom: 50px;

        iframe {
            width: 100%;
            margin-top: 20px;
        }

        .bargainTitle {
            font-size: 22px;
            align-content: center;

            @media only screen and (max-width: 1023px) {
                font-size: 18px;
            }
        }

        h2 {
            background: #F6B300;
            margin-bottom: 0;
            font-weight: bold;
            border: none !important;
            padding: 6px 12px;
            color: #fff;
            overflow: hidden;
            height: 46px;

            a {
                line-height: 2px;
            }

            span {
                font-weight: normal;
                color: #331E0E;
                padding-top: 6px;
                font-size: 14px;
                float: right
            }
        }

        .flier {
            // border: solid 1px #999;

            .btnBig {
                clear: both;
                height: 50px;
                border: solid #999 1px;
                text-align: center;
                text-decoration: none;
                line-height: 50px;
                font-weight: bold;
                font-size: 16.8px;
                margin-bottom: 0;

                a {
                    display: block;
                    background: #F3E7CD;
                    width: 100%;
                    height: 100%;

                    span {
                        display: inline-block;
                        *display: inline;
                        *zoom: 1;
                        padding-left: 42px;
                        background: url('/assets/images/ico_arrow01.webp') no-repeat 0 50%;
                        color: #666666;
                    }

                    &:hover {
                        background: #ce2339;

                        span {
                            color: #fff;
                        }
                    }
                }
            }
        }

        .content-bargain {
            margin: 15px 0;
            display: block;

            @media only screen and (min-width: 415px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 20px;
            }

            .itemList {
                width: 100%;
                border: 2px solid #999999;
                box-sizing: border-box;

                .category {
                    padding: 5px 0;
                    text-align: center;
                    color: #fff;
                    font-size: 11px;
                    font-weight: bold;
                    margin-bottom: 10px;
                    background-color: #2F4F4F;
                }

                .itemListInner {
                    padding: 10px;

                    .itemInfo {
                        width: 100%;
                        display: table;

                        figure {
                            display: table-cell;
                            position: relative;
                            width: 140px;
                            height: 140px;
                            overflow: hidden;
                            line-height: 0;

                            img {
                                width: 100%;
                            }
                        }

                        .itemTxt {
                            display: table-cell;
                            padding-left: 10px;
                            vertical-align: top;

                            .notes {
                                padding: 5px 0;
                                text-align: center;
                                color: #fff;
                                font-size: 11px;
                                font-weight: bold;

                                &:not(:empty) {
                                    background-color: #8FBC8F;
                                }
                            }

                            .manufacturer {
                                margin: 9px 0 2px 0;
                                color: #666666;
                                font-size: 10px;
                            }

                            .name {
                                margin-bottom: 8px;
                                color: #666666;
                                font-size: 18px;
                                line-height: 12px;
                                font-weight: normal;
                            }

                            .description {
                                color: #666666;
                                font-size: 11px;
                                line-height: 13px;
                            }
                        }
                    }

                    dl {
                        margin-top: 10px;
                        padding-top: 10px;
                        border-top: 1px solid #cccccc;

                        dt,
                        dd {
                            text-align: right;
                            color: #010101;
                        }

                        dt {
                            font-size: 12px;
                            font-weight: bold;
                        }

                        dd {
                            padding-top: 4px;
                            font-size: 12px;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }

    .blog_top {
        padding-bottom: 100px;

        @media only screen and (max-width: 768px) {
            padding-bottom: 50px;
        }

        .new_box {
            display: grid;
            grid-template-columns: auto;
            margin: 0 -7px 20px;
            padding: 0;

            @media only screen and (min-width: 768px) {
                grid-template-columns: repeat(3, 1fr);
            }

            @media only screen and (max-width: 1024px) {
                padding: 0 12px;
            }
        }

        .btn_blog {
            width: 235px;
            margin: 0 auto;

            a {
                padding: 15px;
                background: #331E0E;
                border-radius: 100px;
                color: #fff;
                display: block;
                font-size: 30px;
                line-height: 41px;
                text-align: center;
                text-decoration: none;
                font-family: "FOT-ベビポップ Std EB";


                @media only screen and (max-width: 1024px) {
                    font-size: 16px;
                    line-height: 16px;
                }

                &:hover {
                    background: #ce2339;

                    color: #fff;
                }
            }
        }
    }

    .wColumn {
        margin-bottom: 60px;
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
    }

    .wrap-aricle {

        .content-article {
            @media only screen and (max-width: 768px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                background: #999999;
                gap: 0;

                a {
                    margin-bottom: 0 !important;
                    max-width: unset !important;
                    height: 100% !important;
                    width: calc(100%);
                    border: 2px solid #999999 !important;
                    border-top: 0 !important;

                    background-color: #f3e7cd !important;

                    span.cate {
                        display: none !important;
                    }

                    .caption {
                        padding: 8px 20px 8px 8px !important;
                        background: url('/assets/images/ico_arrow06.webp') #f3e7cd no-repeat 98% center !important;
                    }
                }
            }

            @media only screen and (min-width: 768px) {
                // display: grid;
                // grid-template-columns: repeat(3, 1fr);
                // column-gap: 10px;
                column-count: 3;
            }

            a {
                display: block;
                background: #fff;
                color: #333333;
                text-decoration: none;
                // height: 116px;
                overflow: hidden;
                border: 2px solid #CCCCCC;
                height: max-content;
                break-inside: avoid;
                margin-bottom: 25px;
                max-width: 304px;

                &:hover {
                    .caption {
                        background: url('/assets/images/ico_arrow01.webp') #ce2339 no-repeat 10px center;
                    }
                }

                &:nth-last-child(-n+3) {
                    overflow: visible;
                }

                span {
                    font-size: 14px;
                    // border: 2px solid #CCCCCC;
                    border-bottom: 0;

                    &.cate {
                        display: block;
                        box-sizing: border-box;
                        width: 100%;
                        padding: 3px 5px;
                        color: #fff;
                    }

                    &.color01 {
                        background: #ce2339;
                    }
                }

                .caption-event {
                    font-size: 14px;
                    padding: 10px 5px;
                }

                img {
                    display: block;
                    // border: 2px solid #CCCCCC;
                    opacity: 1;
                    min-height: 85px;
                    width: calc(100% - 3px);
                    margin: auto;
                    padding: 1.5px 0;

                    &:hover {
                        opacity: 0.6;
                    }
                }

                .caption {
                    display: block;
                    padding: 5px 5px 5px 40px;
                    background: url('/assets/images/ico_arrow01.webp') #f3e7cd no-repeat 10px center;
                    line-height: normal;
                    min-height: 38px;
                    align-content: center;
                    font-size: 14px !important;
                    font-family: "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "MS PGothic", sans-serif !important;
                }
            }
        }
    }

    .wrap-content {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;

        .csrInfo {

            &#ambient {
                background: url('/assets/images/img_activity_ambient.webp') no-repeat 0 0;
            }

            &#social {
                background: url('/assets/images/img_activity_social.webp') no-repeat 0 0;
            }

            min-height: 138px;
            margin-bottom: 15px;
            padding-left: 156px;

            h3 {
                margin-bottom: 9px;
                font-size: 19px;
                color: #323232;
            }

            li {
                list-style: none;
                margin-bottom: 5px;
                padding-left: 13px;
                background: url(/assets/images/ico_arrow02.webp) no-repeat 1px 0.4em;

                a {
                    color: #087295;
                    text-decoration: underline;

                    &:hover {
                        text-decoration: none;
                    }
                }
            }
        }
    }
}

#mobile-sliderBox {
    width: 100%;
    padding: 10px 0 30px 0;
    background-color: #f8efdd;

    .slick-dots {
        li {
            width: 10px;
            height: 10px;
        }

    }

    ::v-deep .slick-slide {
        img {
            width: 100%;
            height: auto;
            border: 3px solid #fff;
            box-sizing: border-box;
            aspect-ratio: 475 / 193;

            &:hover {
                opacity: 0.6;
            }
        }
    }
}

.recipeList {
    width: 100%;
    display: table;
    position: relative;
    border-bottom: 2px solid #ccc;

    &:hover {
        background-color: #f3e7cd;
    }

    a {
        display: block;
        padding: 15px 10px;
        background: url('/assets/images/ico_arrow01.webp') no-repeat;
        background-position: 98% 50%;
        color: #333;
        background-size: 20px;

        figure {
            display: table-cell;
            width: 45%;
            padding-right: 15px;
            position: relative;

            img {
                width: 100%;
                height: auto;
            }
        }

        .title-recipe {
            display: table-cell;
            width: 55%;
            padding-right: 30px;
            vertical-align: top;

            .category {
                margin-bottom: 10px;
                padding: 5px 0;
                border-radius: 3px;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                text-align: center;
                color: #fff;
                font-size: 12px;
                background-color: #0d5980;
                line-height: 16px;
            }

            h2 {
                padding-bottom: 10px;
                border-bottom: 1px dashed #ccc;
                font-size: 16px;
                line-height: 20.8px;
                font-weight: normal;
            }

            .time {
                margin-top: 10px;
                text-align: right;
                position: relative;
                font-size: 14px;
                font-weight: normal;
            }

            .youtube {
                display: block;
                height: 20px;
                background: url('/assets/images/ico_youtube.webp') left no-repeat;
                background-size: 20px;
                padding-left: 25px;
                box-sizing: border-box;
                font-size: 14px;
                line-height: 20px;
                position: absolute;
                left: 0;
                bottom: 0px;

                @media only screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }
    }
}

.serviceInner {
    display: table;
    width: 100%;
    margin-bottom: 10px;

    a {
        display: block;
        border: 1px solid #cccccc;
        background: url('/assets/images/ico_arrow01.webp') no-repeat;
        background-position: 98% 50%;
        background-color: #f3e7cd;
        color: #333;
        box-sizing: border-box;
        background-size: 20px;

        @media only screen and (max-width: 1023px) {
            &:hover {
                opacity: 0.6;
            }
        }

        figure {
            display: table-cell;
            width: 40%;

            img {
                width: 100%;
            }
        }

        h2 {
            display: table-cell;
            padding: 0 30px 0 10px;
            vertical-align: middle;
            font-size: 16px;
            line-height: 22.4px;
            font-weight: normal;
            box-sizing: padding-box;
        }
    }
}

a {
    color: #087295;

    @media only screen and (min-width: 1024px) {
        text-decoration: underline;
    }

    &:hover {
        text-decoration: none;
    }
}

.thumContent {
    &:hover {
        opacity: 0.6;
    }
}
</style>


<style lang="scss">
@media only screen and (max-width: 768px) {
    .box-event-custom {
        margin-bottom: 34px !important;
    }
}



#chirashi-next-iframe {
    margin-bottom: 20px;
}

.banner-top .flexslider .slides img {
    max-height: 390px;
}

.banner-top #carousel .slides li {
    max-width: 130px;
}

.banner-top #carousel .slides img {
    max-width: 130px;
    max-height: 42.73px;
}

.banner-top #carousel .flex-pauseplay {
    display: none;
}

.slick-dotted.slick-slider .slick-dots li button:before {
    color: black;
    opacity: 0.25;
    font-size: 12px;
}

.slick-dotted.slick-slider .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: black !important;
}

#mobile-sliderBox {

    @media only screen and (max-width: 1023px) {

        .slick-prev,
        .slick-next {
            display: none !important;
        }
    }

    .slick-dots {
        li {
            width: 10px;
            height: 10px;
        }

        button:before {
            font-size: 20px !important;
        }

    }

    .slick-dotted.slick-slider .slick-dots li button:before {
        color: #d3b295;
        opacity: 1;
    }

    .slick-dotted.slick-slider .slick-dots li.slick-active button:before {
        opacity: 1;
        color: #c7273b !important;
    }
}


.box-list-recipe {
    span.new {
        background: url('/assets/images/ico_new.webp') top left no-repeat;
        position: absolute;
        z-index: 1;
        width: 88px;
        height: 88px;
        display: block;
        text-indent: -9999px;
        margin: -20px 0 0 -20px;
        margin-bottom: 30px;
        top: 20px;
        left: 20px;
    }


    .article-content {
        display: flex;

        .recipeList {
            border: none;
        }
    }

    @media only screen and (max-width: 768px) {
        margin-bottom: 34px !important;

        .article-content {
            display: flex;
            flex-direction: column;

            .recipeList {
                border-bottom: 2px solid #ccc;
            }
        }
    }
}
</style>
