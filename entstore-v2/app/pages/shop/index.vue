<template>
  <div class="wrap-content shop-container">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>店舗情報</h2>

      <AppArticle v-if="infoData && infoData.length > 0" title="お知らせ" href="/info">
        <ul class="news">
          <li v-for="item in infoData" :key="item.id">
            {{ formatDateMomentYMD(item.post_date) }}
            <span v-if="item.category && item.category.length" class="category">{{ item.category.toString() }}</span>
            <a :href="`/info/detail/${item.id}`" v-html="checkLengthTitle(item.title, 100).replaceAll('<br>', '')"></a>
          </li>
        </ul>
      </AppArticle>

      <p class="subtitle d-none-des">近くて便利。<br>あなたの近くの遠鉄ストア。</p>
      <p class="lead d-none-mobile">近くて便利。あなたの近くの遠鉄ストア。</p>
      <AppArticle id="gps" title="現在地から探す">
        <p class="btnGps"><a href="/shop/gps/">現在地から探す（GPS）</a></p>
      </AppArticle>
      <AppArticle id="area" title="エリアから探す">
        <div class="article-mapContent">
          <img src="/assets/images/map.webp" alt="" width="977" height="353" usemap="#Map">
          <map name="Map">
            <area shape="poly" alt="tenryuku"
              coords="445,6,449,33,482,85,544,115,554,115,551,105,584,88,598,79,635,64,632,56,624,42,631,25,650,16,660,5"
              href="#tenryuku">
            <area shape="poly" alt="kitaku"
              coords="479,202,462,192,409,193,405,180,386,168,369,167,356,179,342,183,325,173,309,167,297,175,294,201,281,200,269,194,265,181,266,162,274,148,283,138,322,120,346,123,355,114,359,99,393,83,413,18,435,8,438,32,476,93,470,104,481,118,471,139,479,154"
              href="#kitaku">
            <area shape="poly" alt="hamakitaku"
              coords="490,98,487,108,494,113,483,137,494,148,495,159,519,175,552,204,560,187,554,173,555,131,536,129"
              href="#kitaku">
            <area shape="poly"
              coords="255,193,281,213,303,208,273,225,278,232,293,225,301,252,287,261,308,272,313,264,326,286,335,294,352,312,295,308,254,316,259,288,248,255,244,226,246,203"
              href="#kosaishi">
            <area shape="poly" alt="nishiku"
              coords="459,206,433,201,383,198,361,225,351,266,361,305,415,307,432,314,439,289,454,277,443,248,459,236,449,218"
              href="#chuoku">
            <area shape="poly" alt="higashiku" coords="550,216,516,188,509,184,491,171,489,213,513,225,543,263"
              href="#chuoku">
            <area shape="poly" alt="chuoku"
              coords="537,276,509,231,472,208,460,218,467,233,450,250,460,276,475,266,489,286" href="#chuoku">
            <area shape="poly" alt="minamiku" coords="532,341,525,323,529,295,535,286,483,295,469,282,447,293,438,320"
              href="#chuoku">
            <area shape="poly" alt="iwatashi"
              coords="542,343,537,320,546,285,572,191,566,170,564,116,588,98,633,83,611,112,605,123,603,142,603,150,586,160,596,200,611,205,613,213,613,218,630,261,622,293,632,299,638,318"
              href="#iwatashi">

            <area shape="poly" alt="shuchigun"
              coords="689,2,682,5,674,10,664,10,657,17,652,23,645,28,640,32,636,37,636,43,639,50,646,57,651,66,644,73,637,75,639,81,635,86,630,92,623,98,618,105,613,113,613,121,609,129,605,139,606,147,611,153,621,154,622,166,619,179,617,187,623,185,627,179,631,173,637,175,645,172,649,166,657,157,662,147,669,143,674,134,679,122,682,107,689,99,693,91,701,82,710,70,716,61,722,56,725,47,732,43,739,43,751,39,755,31,749,25,739,18,732,15,731,7,731,0,723,0,715,0,706,0,699,-1"
              href="#shuchigun">

            <area shape="poly" alt="hukuroishi"
              coords="613,157,595,166,608,196,622,202,634,239,644,268,641,288,651,314,700,322,683,294,701,271,700,257,729,240,724,233,697,229,686,221,681,211,668,189,666,156,645,181,634,194,622,192,617,189,619,163"
              href="#hukuroishi">
            <area shape="poly" alt="kakegawashi"
              coords="755,42,729,52,715,67,685,108,680,135,672,149,671,183,689,211,693,216,713,225,726,226,737,247,713,260,711,270,703,283,692,294,707,318,797,340,800,320,786,313,782,287,785,281,772,262,762,255,756,248,755,240,767,226,761,205,765,197,779,189,814,154,805,130,788,122,782,110,762,103,761,74,771,53"
              href="#kakegawashi">
            <area shape="poly" alt="kikugawashi"
              coords="820,162,796,189,795,193,784,203,773,208,781,230,767,238,767,244,782,269,793,272,796,283,793,288,793,302,803,308,805,317,815,322,823,304,847,275,856,281,850,238,844,219,853,199,842,160,835,180"
              href="#kikugawashi">
            <!-- <area shape="poly" coords="179,171,155,172,144,157,124,158,106,181,82,160,72,135,59,130,49,104,55,82,71,81,82,77,90,85,129,65,137,76,151,70,169,78,172,77,180,58,190,50,213,64,228,89,222,102,229,107,222,117,203,119,195,129,199,143,211,145,205,156,192,165" href="#toyokawashi"> -->
            <area shape="poly" alt="toyokawashi"
              coords="80,76,89,84,129,63,138,77,153,68,172,79,184,53,193,52,210,64,227,91,219,100,225,106,223,115,205,119,193,128,204,144,208,145,205,153,200,160,191,163,178,167,178,175,161,171,146,180,130,186,131,179,121,185,115,180,113,172,107,182,97,168,87,160,81,147,91,147,82,135,65,131,54,124,47,109,56,82,74,83"
              href="#toyokawashi">
            <area shape="poly" alt="toyohashishi"
              coords="243,105,263,143,253,162,256,185,245,199,241,225,238,245,238,264,251,277,249,314,177,331,125,344,121,329,93,325,106,283,98,277,98,265,123,268,135,255,128,247,120,254,107,249,106,208,114,192,109,184,121,189,132,190,149,185,156,173,178,180,181,168,196,166,212,152,209,142,205,141,198,127,221,121,230,108,243,104"
              href="#toyohashishi">
          </map>
        </div>
        <div class="d-none-mobile">
          <dl v-for="(area, index) in shopArea" :key="index" class="shoplist">
            <dt>{{ area.title }}</dt>
            <dd v-for="(shop, shopIndex) in area.shopList" :key="shopIndex"><a :href="shop.shopUrl">{{ shop.title }}</a>
            </dd>
          </dl>
        </div>
        <div v-if="$vuetify.breakpoint.mobile" class="pl-3 pr-3">
          <div v-for="(area, index) in shopArea" :key="index" class="shop-area mt-2">
            <h3 :id="area.id" class="h3Title" :class="{ 'mt-8': index !== 0 }">{{ area.title }}</h3>
            <ul class="shopList mbsp30">
              <li v-for="(shop, shopIndex) in area.shopList" :key="shopIndex">
                <a :href="shop.shopUrl">
                  <svg class="icon">
                    <use xlink:href="#icon_arrow02"></use>
                  </svg>
                  {{ shop.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </AppArticle>
      <AppArticle title="特色から探す" class="shop-studio">
        <div class="feature-search d-none-mobile">
          <img src="/assets/images/img_food.webp" width="306" height="230" alt="">
          <section class="wcontentInner mb-0">
            <h4 class="content-title content-title-custom">キッチンスタジオがある店舗</h4>
            <p><a href="/shop/chuoku/foodone_sanarudai/">フードワン佐鳴台店</a> ｜ <a href="/shop/chuoku/kasai/">笠井店</a> ｜ <a
                href="/shop/hamanaku/foodone_kiraritown/">フードワンきらりタウン店</a> ｜ <a
                href="/shop/chuoku/foodone_minamiasada/">フードワン南浅田店</a> ｜ <a
                href="/shop/chuoku/foodone_takabayashi/">フードワン高林店</a> ｜ <a href="/shop/toyokawashi/toyokawa/">豊川店</a> ｜
              <a href="/shop/hukuroishi/kuno/">袋井久能店</a>
            </p>
          </section>
        </div>
        <div class="d-none-des feature-search-mob">
          <h4 class="content-title content-title-custom">キッチンスタジオがある店舗</h4>
          <img src="/assets/images/img_food.webp" alt="">
          <section class="wcontentInner shop-area mb-0">
            <ul class="shopList mbsp30">
              <li v-for="(shop, shopIndex) in storeStudio" :key="shopIndex">
                <a :href="shop.shopUrl">
                  <svg class="icon">
                    <use xlink:href="#icon_arrow02"></use>
                  </svg>
                  {{ shop.title }}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </AppArticle>
      <AppArticle v-if="!$vuetify.breakpoint.mobile" title="一覧から探す" class="shop-list">
        <StoreTable v-for="domain in domainList" :key="domain.name" :domain="domain"></StoreTable>
      </AppArticle>
      <AppButtonNavigation title="前のページへ戻る" class="btn-back d-none-mobile" is-back href="/"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppArticle from "~/components/App/Article.vue";
import StoreTable from "~/components/Store/Table.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { SHOP_LIST } from '~/config/shop-data'
import { fetchDataV2, formatDateYMD, formatDateMomentYMD, checkLengthTitle } from "~/utils/index.js";

export default {
  components: { AppButtonNavigation, StoreTable, AppArticle },

  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    useHead({

        title: '店舗情報｜遠鉄ストア',

      })

    const { $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        const [infoRes] = await Promise.all([

        fetchDataV2($microcms, {

          limit: 1,

          offset: 0,

          endpoint: 'store-info',

          orders: '-post_date',

          paramsRequest: [`category[exists]`]

        }),


        ]);

        return {

        infoData: infoRes?.contents || [],

        };
  
      }
    )
    return { ...(__d.value || {}) }
  },
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: '店舗情報',
          disabled: true,
          href: '/shop',
        },
      ],
      domainList: [
        { name: '浜松市中央区', storeList: SHOP_LIST.chuoku, id: 'chuoku', head: '※マツモトキヨシ・薬局・シャトレーゼの営業時間等については店舗ページをご確認ください' },
        { name: '浜松市浜名区', storeList: SHOP_LIST.hamanaku, id: 'kitaku' },
        { name: '浜松市天竜区', storeList: SHOP_LIST.tenryuku, id: 'tenryuku' },
        { name: '磐田市', storeList: SHOP_LIST.iwatashi, id: 'iwatashi' },
        { name: '袋井市', storeList: SHOP_LIST.hukuroishi, id: 'hukuroishi' },
        { name: '周智郡', storeList: SHOP_LIST.shuchigun, id: 'shuchigun' },
        { name: '掛川市', storeList: SHOP_LIST.kakegawashi, id: 'kakegawashi' },
        { name: '菊川市', storeList: SHOP_LIST.kikugawashi, id: 'kikugawashi' },
        { name: '湖西市', storeList: SHOP_LIST.kosaishi, id: 'kosaishi' },
        { name: '豊川市', storeList: SHOP_LIST.toyokawashi, id: 'toyokawashi' },
        { name: '豊橋市', storeList: SHOP_LIST.toyohashishi, id: 'toyohashishi' },
      ],
      shopArea: [
        {
          "title": "浜松市中央区",
          id: 'chuoku',
          "shopList": [
            {
              "title": "富塚店",
              "shopUrl": "/shop/chuoku/tomituka/"
            },
            {
              "title": "向宿店",
              "shopUrl": "/shop/chuoku/mukoujuku/"
            },
            {
              "title": "西ヶ崎店",
              "shopUrl": "/shop/chuoku/nishigasaki/"
            },
            {
              "title": "笠井店・マツモトキヨシ笠井店",
              "shopUrl": "/shop/chuoku/kasai/"
            },
            {
              "title": "鴨江店",
              "shopUrl": "/shop/chuoku/kamoe/"
            },
            {
              "title": "フードワン佐鳴台店",
              "shopUrl": "/shop/chuoku/foodone_sanarudai/"
            },
            {
              "title": "立野店・マツモトキヨシ立野店",
              "shopUrl": "/shop/chuoku/tateno/"
            },
            {
              "title": "初生店",
              "shopUrl": "/shop/chuoku/hatsuoi/"
            },
            {
              "title": "大人見店",
              "shopUrl": "/shop/chuoku/oohitomi/"
            },
            {
              "title": "天王店",
              "shopUrl": "/shop/chuoku/tennou/"
            },
            {
              "title": "篠原店",
              "shopUrl": "/shop/chuoku/shinohara/"
            },
            {
              "title": "新橋店・マツモトキヨシ新橋店",
              "shopUrl": "/shop/chuoku/nippashi/"
            },
            {
              "title": "大平台店",
              "shopUrl": "/shop/chuoku/oohiradai/"
            },
            {
              "title": "桜台店",
              "shopUrl": "/shop/chuoku/sakuradai/"
            },
            {
              "title": "フードワン南浅田店",
              "shopUrl": "/shop/chuoku/foodone_minamiasada/"
            },
            {
              "title": "フードワン泉店",
              "shopUrl": "/shop/chuoku/foodone_izumi/"
            },
            {
              "title": "フードワン高林店",
              "shopUrl": "/shop/chuoku/foodone_takabayashi/"
            },
            {
              "title": "フードワン東伊場店・マツモトキヨシ東伊場店",
              "shopUrl": "/shop/chuoku/foodone_higashiiba/"
            },
            {
              "title": "西伝寺店",
              "shopUrl": "/shop/chuoku/seidenji/"
            },
            {
              "title": "マツモトキヨシさぎの宮駅前店",
              "shopUrl": "/shop/chuoku/saginomiya/"
            }
          ]
        },
        {
          "title": "浜松市浜名区",
          id: 'kitaku',
          "shopList": [
            {
              "title": "浜北店・マツモトキヨシ浜北店",
              "shopUrl": "/shop/hamanaku/hamakita/"
            },
            {
              "title": "フードワンきらりタウン店",
              "shopUrl": "/shop/hamanaku/foodone_kiraritown/"
            },
            {
              "title": "三ヶ日店",
              "shopUrl": "/shop/hamanaku/mikkabi/"
            },
            {
              "title": "スーパーマーケットみっかび",
              "shopUrl": "/shop/hamanaku/super-mikkabi/"
            },
          ]
        },
        {
          "title": "浜松市天竜区",
          id: 'tenryuku',
          "shopList": [
            {
              "title": "天竜店",
              "shopUrl": "/shop/tenryuku/tenryu/"
            }
          ]
        },
        {
          "title": "磐田市",
          id: 'iwatashi',
          "shopList": [
            {
              "title": "磐田店・マツモトキヨシ磐田店",
              "shopUrl": "/shop/iwatashi/iwata/"
            },
            {
              "title": "竜洋店",
              "shopUrl": "/shop/iwatashi/ryuyou/"
            },
            {
              "title": "池田店・マツモトキヨシ池田店",
              "shopUrl": "/shop/iwatashi/ikeda/"
            },
            {
              "title": "見付店",
              "shopUrl": "/shop/iwatashi/mituke/"
            }
          ]
        },
        {
          "title": "袋井市",
          id: 'hukuroishi',
          "shopList": [
            {
              "title": "浅羽店・マツモトキヨシ浅羽店",
              "shopUrl": "/shop/hukuroishi/asaba/"
            },
            {
              "title": "袋井久能店",
              "shopUrl": "/shop/hukuroishi/kuno/"
            }
          ]
        },
        {
          "title": "周智郡",
          id: 'shuchigun',
          "shopList": [
            {
              "title": "森店",
              "shopUrl": "/shop/shuchigun/mori/"
            }
          ]
        },
        {
          "title": "掛川市",
          id: 'kakegawashi',
          "shopList": [
            {
              "title": "掛川中央店",
              "shopUrl": "/shop/kakegawashi/kakegawa/"
            },
          ]
        },
        {
          "title": "菊川市",
          id: 'kikugawashi',
          "shopList": [
            {
              "title": "菊川店・マツモトキヨシ菊川店・シャトレーゼ菊川店",
              "shopUrl": "/shop/kikugawashi/kikugawa/"
            }
          ]
        },
        {
          "title": "湖西市",
          id: 'kosaishi',
          "shopList": [
            {
              "title": "湖西店・シャトレーゼ湖西店",
              "shopUrl": "/shop/kosaishi/kosai/"
            }
          ]
        },
        {
          "title": "豊川市",
          id: 'toyokawashi',
          "shopList": [
            {
              "title": "豊川店・マツモトキヨシ豊川店",
              "shopUrl": "/shop/toyokawashi/toyokawa/"
            }
          ]
        },
        {
          "title": "豊橋市",
          id: 'toyohashishi',
          "shopList": [
            {
              "title": "豊橋曙店",
              "shopUrl": "/shop/toyohashishi/toyohashiakebono/"
            }
          ]
        },
      ],
      storeStudio: [
        {
          "title": "フードワン佐鳴台店",
          "shopUrl": "/shop/chuoku/foodone_sanarudai/"
        },
        {
          "title": "笠井店",
          "shopUrl": "/shop/chuoku/kasai/"
        },
        {
          "title": "フードワンきらりタウン店",
          "shopUrl": "/shop/hamanaku/foodone_kiraritown"
        },
        {
          "title": "フードワン南浅田店",
          "shopUrl": "/shop/chuoku/foodone_minamiasada"
        },
        // {
        //   "title": "フードワン高林店",
        //   "shopUrl": "/shop/chuoku/foodone_takabayashi/"
        // },
        // {
        //   "title": "豊川店",
        //   "shopUrl": "/shop/toyokawashi/toyokawa/"
        // },
        // {
        //   "title": "袋井久能店",
        //   "shopUrl": "/shop/hukuroishi/kuno/"
        // }
      ]
    }
  },
  mounted() {window.$('map').imageMapResize()
  },
  methods: {
    formatDateYMD,
    checkLengthTitle,
    formatDateMomentYMD
  }
}
</script>

<style scoped lang="scss">
.wrap-content {
  .subtitle {
    @media only screen and (max-width: 1023px) {
      padding-left: 12px !important;
      font-size: 18px;
      line-height: 25.2px;
      margin-bottom: 30px;
    }
  }

  .content-wrapper {
    @media only screen and (max-width: 1023px) {
      ::v-deep .title-article {
        margin-bottom: 0 !important;
      }
    }

    .news {
      margin-bottom: 25px;

      li {
        margin-bottom: 9px;
        padding: 0 0 9px 0 !important;
        border-bottom: 1px #ccc dotted;
        background: none !important;
        font-size: 14px;

        @media only screen and (max-width: 1023px) {
          padding: 12px 0 0 12px !important;
          overflow: hidden;
          border: 2px solid #999 !important;
          border-top: 0 !important;
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
          background: url('/assets/images/ico_arrow02.webp') no-repeat 0 0;
          background-position: 5px 10px;
          padding: 5px 0 0 20px;
        }

        .date {
          display: inline-block;
        }

        @media only screen and (max-width: 1023px) {
          .date {
            color: #999999;
            font-size: 12px;
          }

          a {
            background: none;
            padding-left: 0;
            font-size: 14px;
            text-decoration: none;
          }
        }
      }
    }
  }


  p {
    &.lead {
      font-size: 24px;
      line-height: 40px;
      padding-bottom: 50px;
      text-align: center;
      margin: 0 auto;
    }
  }

  .shoplist {
    clear: both;
    line-height: 14px;
    font-size: 14px;

    dt {
      display: block;
      float: left;
      height: 14px;
      margin-top: 15px;
    }

    dd {
      &:nth-of-type(1) {
        border-left: dotted 1px #000000;
      }

      margin-left: 10px;
      padding-left: 10px;
      border-left: solid 1px #000000;
      display: block;
      float: left;
      height: 14px;
      margin-top: 15px;

      a {
        color: #087295 !important;
      }
    }
  }

  .feature-search {
    font-size: 14px;
    display: flex;

    img {
      margin-right: 30px;
    }
  }

  .feature-search-mob {
    padding: 0 12px;

    img {
      width: 100%;
      height: auto;
    }
  }
}

a {
  color: #087295 !important;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

::v-deep {
  .singleColumn {
    .title-article {
      margin-bottom: 30px !important;

      @media only screen and (max-width: 1023px) {
        margin-bottom: 15px !important;
        padding: 10px !important;
        font-size: 18px !important;
      }
    }

    &.shop-list {
      .title-article {
        margin-bottom: 5px !important;
      }
    }
  }
}

.btnGps a {
  display: block;
  padding: 20px 0;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(1.00, #cd243b), color-stop(0.00, #cf2437));
  background: -webkit-linear-gradient(#cf2437, #cd243b);
  background: -moz-linear-gradient(#cf2437, #cd243b);
  background: -o-linear-gradient(#cf2437, #cd243b);
  background: -ms-linear-gradient(#cf2437, #cd243b);
  background: linear-gradient(#cf2437, #cd243b);
  background-color: #c7273b;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  text-align: center;
  color: #fff !important;
  font-size: 16px;
  text-decoration: none;
  margin: 0 12px;
  line-height: 16px;

  &:hover {
    opacity: 0.6;
  }
}


.shop-area {
  .h3Title {
    margin-bottom: 15px;
    padding-bottom: 3px;
    border-bottom: 5px solid #f3e7cd;
    font-size: 16px;
    line-height: 1.3em;
  }

  .shopList {
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;

    @media only screen and (min-width: 768px) {
      margin-bottom: 30px;
    }

    li {
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      box-sizing: border-box;
      list-style: none;

      a {
        display: block;
        padding: 15px 10px;
        font-size: 14px;
        line-height: 14px;
        text-decoration: underline;

        .icon {
          display: inline-block;
          padding-right: 3px;
          width: 18px;
          height: 18px;
          vertical-align: middle;
          fill: #999;
        }

        &:hover {
          background-color: #f3e7cd !important;
          text-decoration: none;
        }
      }

      &:nth-child(odd) {
        a {
          background-color: #f1f1f1;
        }
      }
    }
  }
}

.article-mapContent {
  padding: 0 12px;

  @media only screen and (min-width: 768px) {
    padding: 0;

    img {
      object-fit: none;
    }
  }

  img {
    width: 100%;
    height: auto;
  }
}

.shop-studio {
  @media only screen and (min-width: 1024px) {
    margin-bottom: 80px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 15px !important;
  }
}

.btn-back {
  margin-top: 70px;
}
</style>

<style lang="scss">
.shop-container {
  .singleColumn .title-article {
    font-size: 20px !important;

    @media only screen and (max-width: 767px) {
      font-size: 18px !important;
      padding: 10px !important;
    }
  }

  .content-title-custom {
    @media only screen and (max-width: 767px) {
      font-size: 16px !important;
    }

  }

  .news {
    li {
      margin-bottom: 9px;
      padding: 0 0 9px 0 !important;
      border-bottom: 1px #ccc dotted;
      background: none !important;
      font-size: 14px;

      a {
        color: #333333 !important;
      }

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
}
</style>
