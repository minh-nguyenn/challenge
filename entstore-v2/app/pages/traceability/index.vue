<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>牛肉安全・安心システム</h2>
      <AppArticle title="トレーサビリティについて">
        <div class="artitle-content mobile-box">
          <p>遠鉄ストアではお客様に安心して牛肉を購入して頂けるために、トレーサビリティシステムによる国産牛肉の生産履歴を検索するサービスを実施しています。<br>
            これは、パッケージに貼付された「個体識別番号」もしくは「ロット番号」をインターネットを通じて照合することで、牛の個体情報をお知らせするシステムです。
          </p>
          <img class="fullImage" src="/assets/images/photo01 (7).webp" alt="">
        </div>
      </AppArticle>
      <AppArticle title="「個体識別番号」「ロット番号」とは">
        <div class="mobile-box">
          <h4 class="content-title">個体識別番号</h4>
          <section class="contentInner">
            <img src="/assets/images/photo02 (1).webp" alt="">
            <p>国内で生まれ、飼育された全ての牛に、10桁の番号が印字された標識が耳に着けられます。1頭1頭の生産から店頭までの履歴は、この番号により独立行政法人 家畜改良センターで識別・管理されています。</p>
          </section>

          <h4 class="content-title">ロット番号</h4>
          <section class="contentInner">
            <img src="/assets/images/photo03.webp" alt="">
            <p>
              遠鉄ストアプロセスセンターでは、納品された「部分肉」をスライス・カットして「パック肉」として商品化しています。<br>当センター製造商品では、一括大量生産のため一つの商品に複数原料の国産牛肉が使用される可能性があります。<br>そのため、当日加工した複数の個体識別番号がまとめてわかるロット番号（13桁）を採用し、個体を識別管理しています。
            </p>
          </section>
        </div>
      </AppArticle>
      <AppArticle class="wrap-custom" title="調べ方について">
        <h4 class="h4_step"><span>STEP 1</span>お買い上げ商品のシールをご確認ください</h4>
        <section class="picBox mobile-box">
          <div class="picBoxInner">
            <p>商品の右下に貼付けられたラベル</p>
            <img src="/assets/images/photo04.webp" width="410" height="230" alt="">
          </div>
          <div class="picBoxInner">
            <p>商品の左上に貼付けられたラベル</p>
            <img src="/assets/images/photo05.webp" width="270" height="230" alt="">
          </div>
        </section>
        <div class="mobile-box">
          <h4 class="h4_step"><span>STEP 2</span>ラベルに記載の番号の種類によって確認方法が異なります</h4>
          <h4 class="content-title">個体識別番号の場合</h4>
          <p>下記の（独）家畜改良センターのサイトより、個体識別番号を入力すると牛肉の履歴をご確認いただけます。</p>
        </div>
      </AppArticle>
      <AppButtonNavigation target="_blank" class="btn-next-custom" :title="`独立行政法人 家畜改良センター`"
        href="https://www.id.nlbc.go.jp/top.html" next>
        <strong>牛の個体識別情報検索サービス</strong>
      </AppButtonNavigation>

      <div class="mobile-box calendarJS-custom">
        <h4 class="content-title">ロット番号の場合</h4>
        <p>下記カレンダーより、消費期限の日付を選択しロット番号に含まれる個体識別番号をお調べください。</p>
        <div id=calendar></div>
      </div>
      <AppButtonNavigation title="前のページへ戻る" class="btn-back btn-back-traceability" is-back href="/"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import AppArticle from "~/components/App/Article.vue";

export default {
  components: { AppArticle, AppButtonNavigation },
  data() {
    const now = new Date();
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: '牛肉安全・安心システム',
          disabled: true,
          href: '/traceability',
        },
      ],
      eventList: [],
      holidayList: [],
      lastFetchedHolidayYear: null,
      calendarYear: +this.$route.query.year || now.getFullYear(),
      calendarMonth: +this.$route.query.month || now.getMonth() + 1,
      isMobile: false,
    };
  },
  watch: {
    calendarYear: 'fetchEvents',
    calendarMonth: 'fetchEvents',
    isMobile(newVal, oldVal) {
      this.renderCalendar();
    }
  },
  mounted() {


    this.fetchEvents().then(() => {
      this.renderCalendar();
    });

    this.checkIsMobile();
    window.addEventListener('resize', this.checkIsMobile);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkIsMobile);
  },
  methods: {
    async fetchJapaneseHolidays(year) {
      try {
        const res = await fetch(`https://holidays-jp.github.io/api/v1/${year}/date.json`)
        const data = await res.json()
        this.holidayList = Object.keys(data)
        this.lastFetchedHolidayYear = year

      } catch (e) {
        console.error('エラー：休日の取得に失敗しました', e)
        this.holidayList = []
      }
    },
    formatToYearMonthDay(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}T14:59:59.000Z`;
    },
    checkIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    getFirstAndLastDateOfMonth(year, month) {
      const firstDay = new Date(year, month - 1, 1);
      firstDay.setDate(firstDay.getDate() - 1);
      const lastDay = new Date(year, month, 0);
      return {
        firstDay: this.formatToYearMonthDay(firstDay),
        lastDay: this.formatToYearMonthDay(lastDay),
      };
    },

    highlightHolidays(holidayList = []) {
      setTimeout(() => {
        const dayCells = document.querySelectorAll('.cjs-dayCell[data-day]');
        dayCells.forEach(cell => {
          let day = cell.getAttribute('data-day');
          day = day.padStart(2, '0');
          const month = String(this.calendarMonth).padStart(2, '0');
          const year = this.lastFetchedHolidayYear
          const date = `${year}-${month}-${day}`

          if (holidayList.includes(date)) {
            cell.closest('.cjs-dayCol')?.classList.add('holiday');
          }
        });
      }, 0);
    },

    async fetchEvents() {
      const { firstDay, lastDay } = this.getFirstAndLastDateOfMonth(this.calendarYear, this.calendarMonth);
      const filters = `posting[greater_than]${firstDay}[and]posting[less_than]${lastDay}`;
      const response = await this.$microcms.get({
        endpoint: `store-traceability`,
        queries: {
          offset: 0,
          orders: ["-posting"],
          fields: ["posting", "filename1"],
          filters,
          limit: 100,
        },
      });

      this.eventList = response?.contents || [];
      this.renderCalendar();
    },
    async renderCalendar() {
      const year = this.calendarYear
      const ele = document.getElementById('calendar');
      if (!ele) return;

      // Nếu năm khác năm đã fetch → fetch lại ngày nghỉ
      if (year !== this.lastFetchedHolidayYear) {
        await this.fetchJapaneseHolidays(year)
      }

      const opts = {
        year: this.calendarYear,
        month: this.calendarMonth,
        abbrDay: true,
        abbrYear: false,
        onMonthChanged: (month, year) => {
          this.calendarMonth = month;
          this.calendarYear = year;
        },
        onEventClick: events => {
          const linkElement = document.createElement('a');
          linkElement.href = events.fileUrl;
          linkElement.target = '_blank';
          linkElement.click();
        },
        onDayClick: (day, events) => {
          if (!events || events.length === 0) return;

          if (events.length === 1) {
            window.open(events[0].fileUrl, '_blank');
          } else {
            const container = document.createElement('div');
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignItems = 'center';
            container.style.gap = '8px';

            events.forEach((event, index) => {
              const btn = document.createElement('a');
              btn.textContent = `ダウンロード`;
              btn.href = event.fileUrl;
              btn.target = '_blank';
              btn.className = 'file';
              container.appendChild(btn);
            });

            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.4)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '9999';

            const popup = document.createElement('div');
            popup.style.background = 'white';
            popup.style.padding = '20px';
            popup.style.borderRadius = '8px';
            popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            popup.style.minWidth = '200px';
            popup.appendChild(container);

            overlay.appendChild(popup);
            overlay.onclick = (e) => {
              if (e.target === overlay) {
                document.body.removeChild(overlay);
              }
            };

            document.body.appendChild(overlay);
          }
        },

        events: this.eventList.map(event => {
          const date = new Date(event.posting);
          date.setHours(date.getHours() + 9);
          return {
            desc: 'ダウンロード',
            date: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
            fileUrl: appendWebpFormat(event.filename1?.url)
          };
        }),
      };

      // eslint-disable-next-line no-undef
      if (calendar) {
        // eslint-disable-next-line new-cap,no-unused-vars,no-undef
        const cal = new calendar(ele, opts);
        if (this.$route.query.month && this.$route.query.year) {
          setTimeout(() => {
            ele.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
          }, 100)
        }
      }
      this.highlightHolidays(this.holidayList)

    },
  },
  setup() {
    useHead({

        title: 'サイトマップ｜遠鉄ストア',

      })
  },
};
</script>

<style lang="scss">
.cjs-dayCol.holiday {
  background: #fff2f2;
}

@media only screen and (max-width: 1023px) {

  .btn-back-traceability {
    margin-top: 20px !important;
  }

  .calendarJS-custom {
    .CalendarJS {
      margin-bottom: 20px !important;
    }
  }

  .wrap-custom {
    margin-bottom: 20px !important;
  }

  .btn-next-custom {
    a {
      max-width: 400px !important;
      width: 100% !important;
      background: url('/assets/images/ico_arrow01.webp') no-repeat right 4% center #f3e7cd !important;
    }
  }
}
</style>

<style scoped lang="scss">
.artitle-content {
  font-size: 14px;
  grid-template-columns: 550px auto;
  gap: 30px;
  margin-top: 30px;
  padding-bottom: 30px;
  line-height: 25.2px;

  @media only screen and (min-width: 1024px) {
    display: grid;

    p {
      width: 550px;
    }
  }
}

.contentInner {
  display: grid;
  grid-template-columns: 150px auto;
  grid-gap: 30px;

  p {
    line-height: 25.2px;
  }
}

@media only screen and (max-width: 1023px) {

  .content-title {
    margin-top: 15px;
  }

  .contentInner {
    display: block;

    img {
      width: 100%;
      height: auto;
    }
  }
}

.h4_step {
  margin-bottom: 20px;
  padding: 10px 10px;
  background: #f1f1f1;
  border-bottom: none;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  text-align: left;

  @media only screen and (max-width: 768px) {
    line-height: 40px;
  }

  span {
    margin-right: 15px;
    padding: 5px 30px;
    background: #cf2339;
    border-radius: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
}

.picBox {
  display: grid;
  grid-template-columns: 62% 38%;
  margin-bottom: 50px;

  .picBoxInner {
    margin: 0 auto;
    padding: 0 0 40px;
    border: 1px solid #c9c9c9;
    text-align: center;
    width: 100%;

    &:first-of-type {
      border-right: none;
    }

    p {
      margin: 0 0 40px;
      padding: 0.6em 0 !important;
      background: #f1f1f1;
      font-size: 15px;
      font-weight: bold;
    }
  }
}

#calendar {
  margin-bottom: 80px;
  margin-top: 20px;
  // min-width: 1000px;
  // overflow: auto;
}

.btn-back {
  margin-top: 80px;
}
</style>
