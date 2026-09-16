<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2 class="d-none-des">
        採用情報
      </h2>
      <div class="mainimg">
        <img src="/assets/images/mainimg.webp" alt="">
      </div>
      <nav class="d-none-mobile">
        <ul class="select">
          <li><a @click="toArticle('topic01')">遠鉄ストアについて</a></li>
          <li><a @click="toArticle('topic02')">遠鉄ストアのお仕事</a></li>
          <li><a href="https://entstore-recruit.net/jobfind-pc/" target="_blank"><span>今すぐオンライン応募</span></a></li>
        </ul>
      </nav>
      <p class="textAC top">地域のお客様とのふれあいを大切に、安心と信頼を笑顔でお届けし<br class="d-none-mobile">皆さんに親しまれる店舗を目指しています。<br
          class="d-none-mobile"><br>そんな遠鉄ストアに、ぜひあなたの力を貸してください。</p>
      <article class="article-box">
        <h3 id="topic01">遠鉄ストアについて</h3>
        <p class="textAC topic01-title">
          温かくて、明るく安心して買物ができる店。<br>楽しく買物ができ、楽しい時間を過ごすことができる店。<br>笑顔の挨拶と言葉が飛び交う、元気のいい店を作っていきたい。</p>
        <div class="article-content">
          <section class="section-content">
            <p>
              <strong>1日約5万人が利用するスーパーマーケット</strong>
              <span class="content-inner">
                <img class="d-none-des" src="/assets/images/photo01 (1).webp" alt="">
                <br class="d-none-des">
                『近隣のお客様から愛される高質スーパーマーケットの実現』に向けて、社員の相互協力のもと地域社会・近隣のお客様・お取引様との密接な関係を築き、「安心・安全・美味しい」食品とその情報提供を通して近隣のお客様の健康で豊かな食生活の実現を支援し、地域社会に貢献し続けることを理想の姿として掲げています。
                <br class="d-none-des">売上高533億円、1日約5万人のお客様にご利用いただき、遠鉄グループの中核企業として躍進しております。
                <br
                  class="d-none-des">社員自らがお客様の声をダイレクトに聴き、商品の見直し、サービスの向上、積極的な食の情報発信を通じて、地域の皆様に信頼され、親しまれる店舗にすることを常に考えています。
              </span>
            </p>
            <p>
              <strong>自ら意志を持ちお店作りに関われる</strong>
              <span class="content-inner">
                <img class="d-none-des" src="/assets/images/photo02 (39).webp">
                <br class="d-none-des">
                『お買物の楽しさを演出』私たちは、食を楽しむための情報発信とタイムリーな提案を通じて、商品の美味しさ・価値の見える化を進め、お買物の楽しさを演出しています。
                <br class="d-none-des">朝食・昼食・夕食・夜食などの日常的な用途での提案はもとより、季節や地域の行催事についての提案も各コーナーにおいて展開しています。
                <br
                  class="d-none-des">ディスプレイについても商品の特徴、用途のご案内や必要な材料と作り方がわかるレシピを備え付け、調理されたメニューサンプルを展示するなど、「食の楽しさ」を伝える工夫を一人ひとりが自分たちで考え、地域の皆様に「食のことは遠鉄ストア」と思っていただけるような仕掛け作りが売場に展開されています。
              </span>
            </p>
            <p>
              <strong>児童画コンクール など多岐にわたる地域貢献活動</strong>
              <span class="content-inner">
                <img class="d-none-des" src="/assets/images/photo03 (37).webp">
                <br class="d-none-des">
                当社は、自主的活動を通じ、地域社会への貢献を目指しています。
                <br class="d-none-des">
                たとえば、遠鉄ストアが加盟するCGCグループでは、
                絵画を通じて子どもたちの情操教育をサポートし、地域とのコミュニケーションを育成することを目的に全国児童画コンクールへの協賛をしています。「子供たちの未来を応援」する寄付として応募作品1枚につき、CGCグループが寄付金を積立て、文部科学大臣賞3名、最優秀賞3名の計6名の受賞者が居住する市町村へ寄付されます。
                <br class="d-none-des">
                このほか、地域の子どもたちの健全な育成を応援するためにスポーツ大会へも協賛。特に毎年3月に行われる『ちびっ子マラソン』は、地域社会の大きなイベントになっており、運営に携わっています。また『工場見学』など、近隣のお客様が健康で豊かな食生活を送るための情報提供にも力を入れています。
              </span>
            </p>
          </section>
          <section class="section-img d-none-mobile">
            <img src="/assets/images/photo01 (1).webp" width="306" height="230" alt="">
            <img src="/assets/images/photo02 (39).webp" width="306" height="230" alt="" class="mt-7">
          </section>
        </div>
        <div class="article-img">
          <a href="http://entetsu-hoikuen.com/" target="_blank">
            <img src="/assets/images/bnr_nursery.webp" alt="遠鉄グループ従業員専用保育施設 遠鉄グループ保育園">
          </a>
        </div>
        <h3 id="topic02">遠鉄ストアのお仕事</h3>
        <p class="textAC pb-8 fz-18">はじめてでも安心して仕事をスタートしていただくための研修からスキルアップ制度まで。<br>楽しくやりがいのもてる職場環境づくりに力を入れています。</p>
        <div class="recruit-list d-none-mobile">
          <section v-for="(recruit, index) in recruitData" :key="index" class="contentInner">
            <a :href="recruit.youtubeLink" class="group1 cboxElement">
              <img :src="recruit.imgUrl" width="306" height="290" :alt="recruit.imgAlt">
            </a>
          </section>
        </div>
        <div class="recruit-list d-none-des">
          <section v-for="(recruit, index) in recruitData" :key="index" class="serviceInner">
            <a :href="recruit.youtubeLink" target="_blank">
              <figure>
                <img class="fullImage" :src="recruit.imgUrlsm" :alt="recruit.imgAlt">
              </figure>
              <h2>{{ recruit.recruitName }}
                <br>
                <span class="d-block mt-2" v-html="recruit.recruitStore"></span>
              </h2>
            </a>
          </section>
        </div>
        <h3 id="topic03">オンライン応募について</h3>
        <p class="textAC topic03-content pb-4 fz-18">パートナー社員・正社員（中途入社）・アルバイト・新卒へのご応募は、
          <br class="d-none-mobile">各リクルートサイトから24時間受け付けています。
          <br class="d-none-mobile">
          <br>思いついた今が、応募する時です。
          <br class="d-none-des">
          <span class="d-none-des">あなたからのご応募をお待ちしています。</span>
        </p>
        <p class="textAC recruitsite d-none-mobile fz-18">
          <a href="https://entstore-recruit.net/jobfind-pc/" target="_blank">遠鉄ストア パート・アルバイト 求人サイト</a>
          <br class="d-none-des">
          <span>あなたからのご応募をお待ちしています。</span>
        </p>
        <p class="btnRecruitSite d-none-des">
          <a href="https://entstore-recruit.net/jobfind-smartphone/" target="_blank">
            <svg class="logo">
              <use xlink:href="#icon_logo" />
            </svg>
            <span>採用サイト</span>
          </a>
        </p>
        <article class="singleColumn">
          <p class="mb-sm-0 md-5 text-custom-mg">労働施策総合推進法に基づく中途採用比率の公表</p>
          <table class="table-vert">
            <tbody>
              <tr>
                <th></th>
                <!-- <th>2021年度</th> -->
                <th>2023年度</th>
                <th>2024年度</th>
                <th>2025年度</th>
                
              </tr>
              <tr>
                <td>正規雇用労働者の<br>中途採用比率</td>
                <!-- <td>54%</td> -->
                <td>52%</td>
                <td>48%</td>
                <td>38%</td>
              </tr>
            </tbody>
          </table>
          <p class="text-right text-custom-mg">公表日：2026年6月26日</p>
        </article>
      </article>
      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
export default {
  components: { AppButtonNavigation },
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: '採用情報',
          disabled: true,
          href: '/recruit',
        },
      ],
      recruitData: [
        {
          "youtubeLink": "https://www.youtube.com/embed/d-BbYzFfgf4?rel=0&wmode=transparent",
          "imgUrl": "/assets/images/works06.webp",
          "imgUrlsm": "/assets/images/works06 (1).webp",
          "imgAlt": "鮮魚 遠鉄ストア 笠井店 内田悠紀子 ",
          "recruitName": "鮮魚",
          "recruitStore": "遠鉄ストア 笠井店<br>内田 悠紀子",
        },
        {
          "youtubeLink": "https://www.youtube.com/embed/7gwyUfcnk0Y?rel=0&wmode=transparent",
          "imgUrl": "/assets/images/works02.webp",
          "imgUrlsm": "/assets/images/works02 (1).webp",
          "imgAlt": "青果 遠鉄ストア 立野店 賀茂裕樹",
          "recruitName": "青果",
          "recruitStore": "遠鉄ストア 立野店<br>賀茂 裕樹",
        },
        {
          "youtubeLink": "https://www.youtube.com/embed/qS7Yp4r1Ais?rel=0&wmode=transparent",
          "imgUrl": "/assets/images/works03.webp",
          "imgUrlsm": "/assets/images/works03 (1).webp",
          "imgAlt": "精肉 遠鉄ストア 見付店 川口貴弘",
          "recruitName": "精肉",
          "recruitStore": "遠鉄ストア 見付店<br>川口 貴弘",
        },
        {
          "youtubeLink": "https://www.youtube.com/embed/sx_8p4SgPh4?rel=0&wmode=transparent",
          "imgUrl": "/assets/images/works04.webp",
          "imgUrlsm": "/assets/images/works04 (1).webp",
          "imgAlt": "フロア フードワン きらりタウン店 桐山宏孝",
          "recruitName": "フロア",
          "recruitStore": "フードワン きらりタウン<br>桐山 宏孝",
        },
        {
          "youtubeLink": "https://www.youtube.com/embed/2QCMyd8MQkM?rel=0&wmode=transparent",
          "imgUrl": "/assets/images/works05.webp",
          "imgUrlsm": "/assets/images/works05 (1).webp",
          "imgAlt": "惣菜 遠鉄ストア 大平台店 山本由佳",
          "recruitName": "惣菜",
          "recruitStore": "遠鉄ストア 大平台店<br>山本 由佳",
        }
      ]
    }
  },
  setup() {
    useHead({

        title: '採用情報｜遠鉄ストア',

      })
  },
  mounted() {window.$('.cboxElement').colorbox({ iframe: true, width: "682px", height: "460px" })
  },
  methods: {
    toArticle(id) {
      const elementToScrollTo = document.getElementById(id); // Replace 'your-element-id' with the actual ID of the element you want to scroll to

      if (elementToScrollTo) {
        elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
}
</script>

<style scoped lang="scss">
.wrap-content {
  @media only screen and (max-width: 1024px) {
    padding-bottom: 0;
    border-bottom: 10px solid #f3e7cd;
    margin-bottom: 20px;
  }

  .mainimg {
    padding: 0 !important;
    margin-bottom: 15px !important;

    @media only screen and (min-width: 768px) {
      height: 400px;
      margin: 0 !important;
    }

    img {
      width: 100%;
      height: 100%;
      max-width: 978px;
    }

    @media only screen and (max-width: 1023px) {
      padding: 0 12px !important;
    }
  }

  .select {
    margin-bottom: 50px;
    margin-top: 0px;
    display: flex;

    li {
      display: block;
      width: 326px;
      height: 80px;
      list-style: none;
      box-sizing: border-box;
      border-left: #49ad44 1px solid;
      border-right: #136b0f 1px solid;
      background: none;
      padding: 0;
      margin: 0;
      font-size: 16px;

      &:hover {
        opacity: 0.5;
      }

      a {
        display: block;
        width: 326px;
        height: 80px;
        padding-top: 25px;
        background: #1b9915 url('/assets/images/arrow_recruit.webp') no-repeat 50% 85%;
        text-align: center;
        color: #ffffff;
        text-decoration: none;

        span::after {
          position: absolute;
          content: url('/assets/images/arrow_recruit.webp');
          margin: 0 0 0 0.7em;
          transform: rotate(-90deg);
        }
      }

      &:last-of-type {
        a {
          background-image: none;
        }
      }
    }
  }

  .textAC {
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 70px;
    margin: 0 auto;
    text-align: center;

    &.fz-18 {
      font-size: 18px;
    }

    @media only screen and (max-width: 1023px) {
      font-size: 18px;
      text-align: left;
      font-weight: normal;
      line-height: 25.2px;
      padding: 0 12px 25px;
      margin-top: 0;
    }
  }

  .topic03-content {

    @media only screen and (max-width: 1023px) {
      font-size: 14px !important;
      line-height: 22.4px;
    }
  }

  .article-box {
    margin-bottom: 100px;

    @media only screen and (max-width: 1023px) {
      margin-bottom: 50px;
    }

    h3 {
      background: #1b9915 50% 30% no-repeat;
      color: #ffffff;
      text-align: center;
      height: 120px;
      padding-top: 70px;
      display: block;
      font-size: 18px;
      font-weight: normal;
      margin-bottom: 30px;

      @media only screen and (min-width: 1024px) {
        font-size: 20px;

        &#topic01 {
          background: #1b9915 url('/assets/images/ico_topic01.webp') 50% 30% no-repeat;
        }

        &#topic02 {
          background: #1b9915 url('/assets/images/ico_topic02.webp') 50% 30% no-repeat;
        }

        &#topic03 {
          margin-top: 70px;
          background: #1b9915 url('/assets/images/ico_topic03.webp') 50% 30% no-repeat;
        }
      }

      @media only screen and (max-width: 1023px) {
        height: unset;
        padding: 10px;
        text-align: left;

        &#topic01 {
          margin-bottom: 15px;
        }
      }
    }

    .topic01-title {
      font-size: 18px;

      @media only screen and (min-width: 1024px) {
        padding-bottom: 30px;
      }
    }

    .article-content {
      margin-bottom: 30px;

      @media only screen and (min-width: 1024px) {
        display: flex;

        .section-content {
          margin-right: 30px;
        }
      }

      .section-content {
        p {
          padding-bottom: 30px;
          font-size: 14px;
          line-height: 25.2px;

          @media only screen and (max-width: 1023px) {
            padding-bottom: 0;
          }

          strong {
            font-size: 18px;
            font-weight: bold;
            color: #000000;
          }

          .content-inner {
            display: block;
            letter-spacing: 0.2px;
          }

          @media only screen and (max-width: 1023px) {
            .content-inner {
              padding: 18px 12px;
              margin-bottom: 0;

              img {
                width: 100%;
                height: auto;
              }
            }

            strong {
              margin-bottom: 0;
              padding: 10px;
              background-color: #f3e7cd;
              font-size: 16px;
              line-height: 20.8px;
              display: block;
            }
          }
        }
      }
    }

    .article-img {
      text-align: center;
      margin-bottom: 50px;
      padding: 0 12px;

      &:hover {
        opacity: 0.6;
      }

      @media only screen and (max-width: 1023px) {
        margin-bottom: 30px;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

.recruit-list {
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  @media only screen and (max-width: 1023px) {
    margin-bottom: 30px;
  }

  .serviceInner {
    display: table;
    width: 100%;
    margin-bottom: 10px;
    padding: 0 12px;

    @media only screen and (max-width: 1023px) {
      span {
        font-size: 14px;
      }
    }

    a {
      display: block;
      border: 1px solid #cccccc;
      background: url('/assets/images/ico_arrow01.webp') no-repeat;
      background-position: 98% 50%;
      background-color: #f3e7cd;
      color: #333;
      box-sizing: border-box;

      figure {
        display: table-cell;
        width: 40%;

        img {
          display: block;
        }
      }

      h2 {
        display: table-cell;
        padding: 0 30px 0 10px;
        vertical-align: middle;
        font-size: 16px;
        line-height: 14px;
        font-weight: normal;
        box-sizing: padding-box;
        color: #333;
        line-height: 22.4px;
      }
    }
  }

  .contentInner,
  .serviceInner {
    &:hover {
      opacity: 0.8;
    }
  }
}

.recruitsite {
  background: url('/assets/images/arrow_recruitsite.webp') center top no-repeat;
  padding-top: 105px;
  text-align: center;

  a {
    display: block;
    width: 474px;
    height: 70px;
    background: url('/assets/images/bnr_recruitsite.webp') no-repeat;
    text-indent: -9999px;
    margin: 0 auto 30px auto;

    &:hover {
      opacity: 0.6;
    }
  }
}

.btnRecruitSite {
  padding: 0 12px;
  margin-bottom: 30px;

  a {
    display: block;
    padding: 15px 0;
    border: 3px dotted #1b9915;
    text-align: center;
    line-height: 16px;

    .logo {
      display: inline-block;
      padding-right: 7px;
      width: 120px;
      height: 27px;
      vertical-align: top;
    }

    span {
      display: inline-block;
      padding-right: 23px;
      background: url('/assets/images/ico_arrow01.webp') no-repeat;
      background-position: right 4px;
      background-size: 18px 18px;
      padding-top: 6px;
      color: #1b9915;
      font-size: 1.8em;

      @media only screen and (max-width: 768px) {
        font-size: 18px;
      }
    }
  }
}

.singleColumn {
  p.text-custom-mg {
    margin-bottom: 30px !important;

    @media only screen and (max-width: 768px) {
      margin-bottom: 0 !important;

    }
  }

  @media only screen and (max-width: 1023px) {
    padding: 0 12px !important;

    table {

      th,
      td {
        text-align: center;
      }
    }
  }
}

.table-vert {
  @media only screen and (max-width: 1023px) {
    margin-bottom: 0px;
    th{
      background: transparent;
    }
    th,
    td {
      font-size: 11px;
    }

    th {
      font-weight: bold;
    }
  }
}
</style>
