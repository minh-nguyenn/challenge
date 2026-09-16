<template>
  <div class="wrap-content">
    <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
    <main>
      <AppArticle title="お問い合わせフォーム" class="wrap-outside">
        <p class="btnarea mb-0">
          <img src="/assets/images/step02.webp" alt="ご入力">
        </p>
      </AppArticle>
      <div class="mobile-box">
        <p class="caution">※印は必須項目</p>
        <form @submit.prevent="submitForm">
          <table class="table-horz">
            <tbody>
              <tr>
                <th>お問い合わせ内容<span class="caution">※必須</span></th>
                <td>{{ formInfomation.content }}</td>
              </tr>
              <tr>
                <th>お名前 <span class="caution">※必須</span></th>
                <td>{{ formInfomation.name }}</td>
              </tr>
              <tr>
                <th>お名前ふりがな<span class="caution">※必須</span></th>
                <td>{{ formInfomation.kana }}</td>
              </tr>
              <tr>
                <th>性別<span class="caution">※必須</span></th>
                <td>{{ formInfomation.sex }}</td>
              </tr>
              <tr>
                <th>年齢<span class="caution">※必須</span></th>
                <td>{{ formInfomation.age }}</td>
              </tr>
              <tr>
                <th>メールアドレス<span class="caution">※必須</span></th>
                <td>{{ formInfomation.email }}</td>
              </tr>
              <tr>
                <th>住所</th>
                <td>
                  〒{{ `${formInfomation.zipcode} ${formInfomation.address}` }}
                </td>
              </tr>
              <tr>
                <th>電話番号<span class="caution">※必須</span></th>
                <td>{{ formInfomation.tel }}</td>
              </tr>
              <tr>
                <th>質問事項等</th>
                <td class="td-description">{{ formInfomation.description }}</td>
              </tr>
            </tbody>
          </table>
          <p class="btnarea">
            <input name="submit" type="submit" value="送信する">
            <input name="reset" type="button" @click="goBack" value="前の画面に戻る">
          </p>
        </form>
        <p id="secure">
          当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "~/utils/vuex-compat.js";
import _isEmpty from 'lodash/isEmpty'
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
          text: 'サービス',
          disabled: false,
          href: '/service',
        },
        {
          text: '遠鉄ストアでは新たに移動スーパーをはじめます！',
          disabled: false,
          href: '/service/idosuper/',
        },
        {
          text: 'お問い合わせフォーム',
          disabled: true,
          href: '/service/idosuper',
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
        description: '',
      },
      formModelKey: {
        content: 'お問い合わせ内容',
        name: 'お名前',
        kana: 'お名前ふりがな',
        sex: '性別',
        age: '年齢',
        email: 'メールアドレス',
        zipcode: '住所',
        tel: '電話番号',
        description: '質問事項等',
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
  computed: {
    ...mapGetters({
      formInfomation: 'getIdosuperFormData',
    }),
  },
  setup() {
    useHead({

        title: 'お問い合わせフォーム｜遠鉄ストアでは新たに移動スーパーをはじめます！｜サービス｜遠鉄ストア',

      })
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
    async submitForm() {

      if (!_isEmpty(this.formInfomation)) {

        try {
          const payload = {
            userEmail: this.formInfomation.email,
            userName: this.formInfomation.name,
            formData: this.formInfomation,
          }
          const res = await this.$axios.$post('/api/send-campaign-service', payload)
          console.log('✅ Email sent via API:', res);
          this.$router.push(({
            path: `/service/idosuper/form/thanks`
          }))
        } catch (err) {
          console.error('❌ Error sending email:', err);
        }
      }
    },
    goBack() {
      this.$router.push(({
        path: `/service/idosuper/form`
      }))
    }
  }
}
</script>

<style scoped lang="scss">

.td-description {
  white-space: pre-line !important;
}

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

.table-horz {
  th {
    width: 30%;
  }

  th,
  td {
    display: table-cell !important;

    @media only screen and (max-width: 768px) {
      .caution {
        display: block !important;
        margin-top: 5px;
      }
    }
  }
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
  margin-top: 18px;

  input {
    &[type="submit"] {
      text-align: center;
      background: #ce2339;
      color: #ffffff;
      padding: 15px;
      width: 200px;
      margin-right: 10px;
      border: 2px solid #000 !important;
    }

    &[type="button"] {
      text-align: center;
      background: #9e9e9e;
      color: #ffffff;
      padding: 15px;
      width: 200px;
      border: 2px solid #000 !important;
    }

    @media only screen and (max-width: 560px) {
      &[type="submit"] {
        margin-right: 0;
      }

      &[type="button"] {
        margin-top: 10px;
      }
    }
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
