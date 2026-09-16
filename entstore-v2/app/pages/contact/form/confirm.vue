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
                <th>お名前 <span class="caution">※必須</span></th>
                <td>{{ formInfomation.name }}</td>
              </tr>
              <tr>
                <th>ふりがな<span class="caution">※必須</span></th>
                <td>{{ formInfomation.kana }}</td>
              </tr>
              <tr>
                <th>ご住所</th>
                <td>
                  {{ formInfomation.address1 }}
                  <br>
                  {{ formInfomation.address2 }}
                </td>
              </tr>
              <tr>
                <th>お電話<span class="caution">※必須</span></th>
                <td>{{ formInfomation.tel }}</td>
              </tr>
              <tr>
                <th>E-MAIL <span class="caution">※必須</span></th>
                <td>{{ formInfomation.email }}</td>
              </tr>
               <tr>
                <th>返信を希望しますか？<span class="caution">※必須</span></th>
                <td>{{ formInfomation.response }}</td>
              </tr>
              <tr>
                <th>ご利用の店舗名</th>
                <td>{{ formInfomation.shop }}</td>
              </tr>
              <tr>
                <th>ご意見・お問合せ内容 <span class="caution">※必須</span></th>
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
          text: 'お問い合わせフォーム',
          disabled: true,
          href: '/contact/form',
        },
      ],
      formModel: {
        name: '',
        kana: '',
        email: '',
        emailConfirm: '',
        shop: '0',
        address: '',
        tel: '',
        description: '',
        response:"不要です"
      },
      formModelKey: {
        name: 'お名前',
        kana: 'ふりがな',
        address: 'ご住所',
        email: 'E-MAIL',
        shop: 'ご利用の店舗名',
        tel: 'お電話',
        description: 'お問い合わせ内容',
      },
    }
  },
  computed: {
    ...mapGetters({
      formInfomation: 'getContactFormData',
    }),
  },
  setup() {
    useHead({

        title: 'お問い合わせフォーム｜遠鉄ストア',

      })
  },
  methods: {
    async submitForm() {
      if (!_isEmpty(this.formInfomation)) {
        try {
          const payload = {
            userEmail: this.formInfomation.email,
            userName: this.formInfomation.name,
            formData: this.formInfomation,
          }
          const res = await this.$axios.$post('/api/send-campaign-contact', payload)
          console.log('✅ Email sent via API:', res);
          this.$router.push(({
            path: `/contact/form/thanks`
          }))
        } catch (err) {
          console.error('❌ Error sending email:', err);
        }
      }
    },
    goBack() {
      this.$router.push(({
        path: `/contact/form`
      }))
    }
    // getHtmlContent() {
    //   const keys = Object.keys(this.formModelKey);
    //   let content = ''
    //   for (const key of keys) {
    //     content += `
    //         <div style="display: flex">
    //             <div style="width: 200px">${this.formModelKey[key]}</div>
    //             <div>
    //                 :<span margin-left: 20px">
    //                     ${key === 'address' ?
    //         `${this.formInfomation.address1} ${this.formInfomation.address2}`
    //         : (key === 'email' ? `<a href="mailto:${this.formInfomation.email}">${this.formInfomation.email}</a>` : this.formInfomation[key])}
    //                 </span>
    //             </div>
    //         </div>
    //     `
    //   }
    //   return content
    // },
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
    display: table-cell !important;

  }


  @media only screen and (max-width: 600px) {

    th,
    td {
      font-size: 10px !important;
      display: table-cell !important;
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
      border: 2px solid rgb(0, 0, 0);
    }

    &[type="button"] {
      text-align: center;
      background: #9e9e9e;
      color: #ffffff;
      padding: 15px;
      width: 200px;
      border: 2px solid rgb(0, 0, 0);
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
