<template>
  <div class="wrap-content">
    <VxBreadcrumbs
      :items="breadcrumbItems"
      divider=">"
    ></VxBreadcrumbs>
    <main>
      <AppArticle title="お問い合わせフォーム" class="wrap-outside">
        <p class="btnarea mb-0">
          <img src="/assets/images/step03.webp" alt="ご入力">
        </p>
      </AppArticle>
      <div class="mobile-box">
        <form>
          <input type="hidden" name="request" value="set" />
          <p class="btnarea mb-10">
            <span class="thanks">受付完了</span><br>
            ありがとうございます。お問い合せの送信が完了いたしました。<br>
            弊社担当者が確認後ご返答させていただきますので、今しばらくお待ち下さい。<br>
            なお、お問い合わせの内容によっては、少々お時間をいただく場合や<br>
            ご返信を致しかねる場合もございますので、予めご了承下さいませ。
          </p>
          <p class="btnBack home"><a href="/">ホームへ戻る</a></p>
          <p id="secure">当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。</p>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import {mapGetters} from "~/utils/vuex-compat.js";
import AppArticle from "~/components/App/Article.vue";

export default {
  name: "Idosuper",
  components: {
    AppArticle,
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
          text: 'お問い合わせフォーム',
          disabled: true,
          href: '/contact/form/thanks',
        },
      ],
      formModel: {
        content: '',
        name: '',
        kana: '',
        sex: '',
        age: '',
        email: '',
        zipcode: '',
        address: '',
        tel: '',
      },
      customMessageError: {
        content: 'お問い合わせ内容 を選択してください。',
        name: 'お名前 を入力して下さい。',
        kana: 'お名前ふりがな を入力して下さい。',
        sex: '性別 を選択してください。',
        age: '年齢 を入力して下さい。',
        email: 'メールアドレス を入力して下さい。',
        zipcode: '郵便番号 を入力して下さい。',
        address: 'ご住所 を入力して下さい。',
        tel: '電話番号 を入力して下さい。',
      },
    }
  },
  setup() {
    useHead({

        title: 'お問い合わせフォーム｜遠鉄ストア',

      })
  },
  computed: {
    ...mapGetters({
      formInfomation: 'getIdosuperFormData',
    }),
  },
  methods: {
    checkError(observerInsErr) {
      const validateKeys = Object.keys(observerInsErr)

      return validateKeys.some(key => observerInsErr[key].length > 0)
    },
    getErrorList(observerInsErr) {
      const validateKeys = Object.keys(observerInsErr)

      return validateKeys.filter(key => observerInsErr[key].length > 0).reduce((preValue, curValue) => ({
        ...preValue,
        [curValue]: observerInsErr[curValue]
      }), {})
    },
    getErrMessage(err, key) {
      return this.customMessageError[key] || err.toString()
    },
  }
}
</script>

<style scoped lang="scss">
.btnarea {
  text-align: center;

  input {
    &[type=submit] {
      &:hover {
        opacity: 0.8;
      }
    }
  }
}

.wrap-outside {
  margin-bottom: 30px !important;
}

@media only screen and (max-width: 1023px) {
  .wrap-outside {
    margin-bottom: 0;
    .btnarea {
      margin-bottom: 0;

      img {
        width: 300px;
        margin-top: 20px;
      }
    }
  }
}

.caution {
  color: #ce2339;
}

p {
  @media only screen and (max-width: 1023px) {
    &.caution {
      margin-bottom: 5px !important;
    }
  }
}

.btnarea {
  width: 100%;
  text-align: center;
  line-height: 25.2px;
}

.thanks {
  color: #ce2339;
  font-size: 1.8em;
  margin-bottom: 30px;
  margin-top: 10px;
  font-weight: bold;
  display: inline-block;
}

.btnBack {
  margin: 0px 10px 50px 10px;

  a {
    display: block;
    width:300px;
    padding: 15px 0 15px 15px;
    background:url('/assets/images/ico_arrow01back.webp') no-repeat 60px center #f3e7cd;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    text-align: center;
    color: #333333 !important;
    font-size: 1.2em;
    line-height: 1.4em;
    text-decoration:none !important;
    margin:0 auto;

    &:hover {
      background:url('/assets/images/ico_arrow01back.webp') no-repeat 60px center #331e0e;
      color: #ffffff !important;
    }
  }

  &:not(.home) {
    display: none;
  }
}

#secure {
  margin-top: 40px;
  line-height: 25.2px;

  @media only screen and (max-width: 560px) {
    font-size: 10px;
    line-height: 16px;
  }
}
</style>
