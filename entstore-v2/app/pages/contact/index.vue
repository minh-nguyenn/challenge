<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>お問い合わせ</h2>
      <p class="textAC mb-0">よくあるご質問をご確認いただいても解決しない場合は、お気軽にお問い合わせください。</p>
      <section class="contact_box">
        <h3 class="contact_box_title">Webサイトからのお問い合わせ</h3>
        <p class="btn"><a href="/contact/form/">お問い合わせフォームへ</a></p>

        <div class="contact_box_txt">
          <ul>
            <li>メールは月曜日～金曜日の9:30～17:00に確認しております。内容によっては回答に時間がかかる場合や、お返事を差し上げられない場合がございます。あらかじめご了承くださいませ。</li>
            <li>
              メールによる回答は、弊社へお問い合わせいただいたお客さまの、特定の質問にお答えすることを目的とするものです。弊社の許可なく、回答内容の一部分または全体を転用、二次使用すること、または当該お客さま以外に開示することはかたくお断りします。
            </li>
            <li>土日祝日・年末年始にいただいたメールは、翌営業日以降のご連絡とさせていただいております。</li>
            <li>悪質と判断される内容には返信いたしません。</li>
            <li>企業さまからの商品企画などのご提案は、メールでは受付をしておりません。</li>
          </ul>
        </div>

        <div class="contact_box_tel">
          <h4>お電話でのお問い合わせ</h4>
          <p class="phone_number"><img src="/assets/images/ico_phone.svg" alt="">0570-024-100</p>
          <small>受付時間 9：30～12：00 13：00～17：00 月曜日～金曜日<br>（ 土日祝日、1月1日～3日は、受付をしておりません。）</small>
        </div>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: 'お問い合わせ',
          disabled: true,
          href: '/contact',
        },
      ]
    }
  },
  setup() {
    useHead({

        title: 'お問い合わせ｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-content {
  font-size: 14px;

  @media only screen and (min-width: 1024px) {
    padding-bottom: 80px;
  }
}

.contact_box {
  padding: 60px;
  background: #f5f5f5;

  .contact_box_title {
    background: none !important;
    font-size: 24px !important;
    font-weight: bold !important;
    color: #333 !important;
    text-align: center !important;
    height: 46px;
    padding-left: 20px;
    box-sizing: border-box;
    margin-bottom: 30px;
    line-height: 46px;
  }

  .btn {
    margin-bottom: 60px;

    &:hover {
      opacity: 0.8;
    }

    a {
      display: block;
      padding: 25px;
      margin: 0 auto;
      width: 100%;
      max-width: 500px;
      background: #CF2339;
      border-radius: 8px;
      font-size: 1.2em;
      color: #fff !important;
      text-align: center;
      line-height: 14px;
      text-decoration: none;
    }
  }

  .contact_box_txt {
    margin-bottom: 60px;

    ul {
      margin-top: 30px;

      li {
        display: block;
        padding-left: 18px;
        list-style: none;
        background: url('/assets/images/ico_list01.webp') no-repeat left 6px !important;
        line-height: 25.2px;
      }
    }
  }

  .contact_box_tel {
    background: #fff;
    padding: 30px;

    h4 {
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      padding-bottom: 5px;
      text-align: center;
      margin-bottom: 15px;
      border-bottom: 5px solid #ce2339 !important;
      font-family: "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    }

    .phone_number {
      padding-bottom: 0 !important;
      margin-bottom: 10px;
      font-size: 2.8em;
      font-weight: bold;
      text-align: center;

      img {
        transform: translateY(4px);
        margin-right: 3px;
        height: 36px;
      }
    }

    small {
      display: block;
      text-align: center;

      @media only screen and (max-width: 1024px) {
        font-size: 8px;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .textAC {
    text-align: left;
    padding: 10px 12px;
    font-size: 14px;
  }

  .contact_box {
    padding: 15px 12px;

    .contact_box_title {
      font-size: 18px !important;
      line-height: 30px;
      margin-bottom: 0px;
      margin-top: 20px;
    }

    .contact_box_txt {
      margin-bottom: 30px;

      ul {
        li {
          margin-bottom: 10px;
          font-size: 10px;
        }
      }
    }

    .btn {
      margin-bottom: 60px;

      a {
        padding: 15px;
        max-width: 100%;
        border-radius: 4px;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .contact_box_tel {
      h4 {
        font-size: 14px !important;
        border-bottom: 3px solid #ce2339 !important;
      }

      .phone_number {
        padding-bottom: 0 !important;
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: bold;

        img {
          height: 24px;
        }
      }
    }

  }
}
</style>
