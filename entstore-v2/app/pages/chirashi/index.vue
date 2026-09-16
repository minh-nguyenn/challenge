<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>今週のチラシ</h2>
      <div class="mobile-box">
        <iframe id="chirashi-next-iframe" src="https://next.retailstudio.jp/entetsu-store/039/chirashi/iframe/?shop-id=0000" scrolling="no" frameborder="0" width="" height=""></iframe>
      </div>

    </main>
    <AppButtonNavigation class="d-none-mobile custom-chirashi-back" title="前のページへ戻る" is-back href="/"></AppButtonNavigation>

  </div>
</template>

<script>
import _isEmpty from 'lodash/isEmpty'
import {formatDateYMD} from "~/utils/index.js";

export default {
  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    useHead({

        title: '今週のチラシ｜遠鉄ストア',

      })

    const { query, $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        if (import.meta.server) {

        const response = await Promise.all([

          $microcms.get({

            endpoint: `store-category`

          }),

        ])

        return {

          categoryList: response[0]?.contents.map(item => ({

            text: item.title,

            value: item.id

          })),

          categorySelected: query.category,

          chirashiList: []

        };

        }

        return  {}
  
      }
    )
    return { ...(__d.value || {}) }
  },
  data() {
    return {
      categorySelected: '',
      chirashiData: {},
      pdfList: [],
      chirashiList: [],
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/'
        },
        {
          text: '今週のチラシ',
          disabled: true,
          href: '/chirashi'
        },
      ]
    }
  },

  computed: {
    timeListFilter() {
      if (_isEmpty(this.chirashiData)) {
        return []
      }

      return this.getDaysBetweenDates(this.chirashiData.date_from, this.chirashiData.date_to)
    },
    timeRangeTitle() {
      if (this.chirashiData.date_from && this.chirashiData.date_to) {
        return `${this.YMDFormat(this.chirashiData.date_from)} ～ ${this.YMDFormat(this.chirashiData.date_to)}`
      }
      return ''
    },
    iframeUrl() {
      if (import.meta.client) {
        return window.innerWidth <= 768 ? 'https://www-entstore.nokioo.net/smp/chirashi/' : 'https://www-entstore.nokioo.net/chirashi/'
      }
      return 'https://www-entstore.nokioo.net/smp/chirashi/'
    }
  },
  mounted() {
    window.addEventListener('message', function(e) {
      const iframe = document.getElementById('chirashi-next-iframe');
      const eventName = e.data[0];
      const data = e.data[1];
      switch(eventName) {
        case 'setHeight':
          iframe.setAttribute('height', data);
          break;
      }
    }, false);
  },
  methods: {
    formatDateYMD,
    getDaysBetweenDates(startDate, endDate) {
      const currentDate = new Date(startDate);
      const endDateObj = new Date(endDate);
      const daysArray = [];

      // eslint-disable-next-line no-unmodified-loop-condition
      while (currentDate <= endDateObj) {
        const newDate = new Date(currentDate);
        daysArray.push({
          value: newDate,
          text: this.monthDayFormat(currentDate)
        });
        currentDate.setDate(currentDate.getDate() + 1)
      }

      return daysArray;
    },
    getDayOfWeek(date) {
      const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
      const dayIndex = date.getDay();
      return daysOfWeek[dayIndex];
    },
    monthDayFormat(inputDate) {
      const date = new Date(inputDate);
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${month}月${day}日(${this.getDayOfWeek(date)})`
    },
    YMDFormat(inputDate) {
      const date = new Date(inputDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}年 ${month}月 ${day}日(${this.getDayOfWeek(date)})`
    },
    filterChirashi(date) {
      let dateFilter = new Date()
      if (date) {
        dateFilter = date
      } else {
        dateFilter = this.$route.query.date ? new Date(this.$route.query.date) : new Date()
      }
      window.location.href = this.categorySelected
        ? `/chirashi?category=${this.categorySelected}&date=${formatDateYMD(dateFilter)}`
        : `/chirashi?date=${formatDateYMD(date)}`;
    }
  }
}
</script>

<style scoped lang="scss">
.wrap-content {
  iframe {
    width: 100%;
  }

  .mobile-box{
    margin-bottom: 50px;
  }

  p {
    &.lead {
      font-size: 24px;
      line-height: 40px;
      padding-bottom: 30px;
      text-align: center;
      margin: 0 auto;
      color: #ce2339;

      @media only screen and (max-width: 1024px) {
        padding: 15px;
        background-color: #c7273b;
        text-align: center;
        color: #fff;
        font-size: 18px;
        line-height: 14px;
        font-weight: normal;
      }

      @media only screen and (max-width: 423px) {
        line-height: 24px;
      }
    }

    &.textAC {
      margin: 0 auto;
      text-align: center;
      font-size: 16px;
      line-height: 30px;

      @media only screen and (max-width: 1024px) {
        padding-top: 15px;
        font-size: 14px;
        text-align: left;
        margin-bottom: 0;

        br {
          display: none;
        }
      }
    }

    &.chirashi {
      display: block;
      height: 120px;
      line-height: 60px;
      font-size: 18px;
      width: 100%;
      text-align: center;
      margin: 0 auto 30px auto;

      a {
        display: block;
        height: 120px;
        line-height: 120px;
        font-size: 18px;
        text-decoration: none;
        background: #f3e7cd url('/assets/images/ico_pdf.webp') no-repeat 20px;
        border: solid 1px #cccccc;
        color: #000000;
        text-align: right;
        padding-left: 35px;
        padding-right: 35px;
        width: 410px;
        margin: 0 auto;
      }
    }
  }

  .search-box {
    padding: 25px;
    box-sizing: border-box;
    background: #f3e7cd;

    @media only screen and (min-width: 1024px) {
      margin-top: -20px;
    }

    strong {
      font-size: 18px;
      font-weight: normal;
      clear: both;
      border-bottom: dotted 1px #311b0b;
      padding: 0 0 5px 0;
      margin: 0 0 10px 0;
      width: 100%;
      display: block;
    }

    .time-list {
      display: flex;
      flex-wrap: wrap;

      a {
        margin: 0;
        padding: 0;
        width: 109px;
        height: 43px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background: #ffffff;
        color: #363636;
        box-sizing: border-box;
        text-align: center;
        border: solid 2px #999999;
        margin-right: 8px;
        margin-bottom: 20px;
        font-size: 14px;

        @media only screen and (min-width: 1248px) {
          &:nth-of-type(8) {
            margin-right: 0;
          }
        }

        &.active, &:hover {
          background: #ce2339;
          color: #e5e5e5;
        }
      }
    }

    .btn-seach {
      text-align: center;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .searchBoxMobile {
    padding: 12px;
    padding-bottom: 24px;
    box-sizing: border-box;
    background: #f3e7cd;

    dl {
      display: table;
      width: 100%;
      border-bottom: 1px solid #e7d6b2;

      &:first-child {
        border-top: 1px solid #e7d6b2;
      }

      dt, dd {
        display: table-cell;
        padding: 10px 0 5px 0;
      }

      dt {
        width: 80px;
        font-size: 12px;
        font-weight: bold;
      }
    }

    ::v-deep {
      .v-text-field__details {
        display: none;
      }

      .v-input__slot {
        background-color: white;
      }
    }
  }
}

.content-inner {
  margin-bottom: 60px;

  @media only screen and (max-width: 1024px) {
    padding: 0 12px;
    margin-bottom: 0px;
  }
}

.pdfLinks {
  clear: both;
  margin-bottom: 20px;

  a {
    display: block;
    padding: 15px 0 12px 0;
    background-color: #f3e7cd;
    border: 2px solid #ccc;
    text-align: center;
    color: #333;
    font-size: 16px;

    .icon {
      display: inline-block;
      margin-top: -3px;
      padding-right: 3px;
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }
  }
}

.chirashi-banner {
  width: 100%;
}

::v-deep {
  .v-text-field__details {
    display: none;
  }

  .v-input__slot {
    background-color: white !important;
  }
}

.select-width {
  width: 250px;
}

.btn-back {
  @media only screen and (min-width: 1024px) {
    margin-top: 100px;
  }
}

.content-bargain {
  margin: 15px 0;
  display: block;

  @media only screen and (min-width: 415px)
  {
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

        dt, dd {
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
</style>

<style lang="scss">
.custom-chirashi-back a{
  width: 315px !important;
  padding: 15px 0 15px 15px !important;
  background: url('/assets/images/ico_arrow01back.webp') no-repeat 60px center #f3e7cd !important;
}
</style>
