<template>
  <div class="wrap-content">
    <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
    <main>
      <AppArticle title="お問い合わせフォーム" class="wrap-outside">
        <p class="btnarea mb-0">
          <img src="/assets/images/step01.webp" alt="ご入力">
        </p>
      </AppArticle>
      <ValidationObserver ref="observerInquiry" v-slot="observeSlot">
        <div v-if="checkError(observeSlot.errors)" class="errorBox errorBox-custom">
          <h4>入力内容に誤りがあります。以下を参考にして再度入力内容をご確認ください。</h4>
          <ul>
            <li v-for="(error, key) in getErrorList(observeSlot)" :key="key">{{ error }}</li>
          </ul>
        </div>
        <div class="mobile-box">
          <p class="caution">※印は必須項目</p>
          <form @submit.prevent="submitForm">
            <table class="table-horz">
              <tbody>
                <tr>
                  <th>お問い合わせ内容<span class="caution caution-custom">※必須</span></th>
                  <validation-provider v-slot="{ errors }" rules="required" tag="td" name="content">
                    <label>
                      <input id="form_content1" v-model="formModel.content" data-id="contact_item" name="content"
                        value="移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）" type="radio" class="mr-2">
                      <span>移動スーパー販売パートナー募集について（販売員・ドライバーとして働きたい方）</span>
                    </label>
                    <br>
                    <label>
                      <input id="form_content2" v-model="formModel.content" data-id="contact_item" name="content"
                        value="移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）" type="radio" class="mr-2">
                      <span>移動スーパー販売先募集について（遠鉄ストアの移動スーパーに来ていただきたい方）</span>
                    </label>
                    <br>
                    <div class="errorTxt">{{ errors[0] && `お問い合わせ内容 を選択してください。` }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>お名前<span class="caution caution-custom">※必須</span></th>
                  <validation-provider v-slot="{ errors }" rules="required" tag="td" name="name">
                    <input id="name" v-model="formModel.name" name="name" type="text" size="40" maxlength="25"
                      data-id="contact_item">
                    <div class="errorTxt">{{ errors[0] && `お名前 を入力して下さい。` }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>お名前ふりがな<span class="caution caution-custom">※必須</span></th>
                  <validation-provider v-slot="{ errors }" rules="required|zenkaku_hiragana" tag="td" name="kana">
                    <input id="kana" v-model="formModel.kana" name="kana" type="text" size="40" maxlength="25"
                      data-id="contact_item">
                    <div class="errorTxt">{{ errors[0] && `お名前ふりがな を入力して下さい。` }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>性別<span class="caution caution-custom">※必須</span></th>
                  <validation-provider v-slot="{ errors }" rules="required" tag="td" name="sex">
                    <label>
                      <input id="form_sex1" v-model="formModel.sex" name="sex" value="女性" type="radio" class="mr-2">
                      <span>女性</span>
                    </label>
                    <br>
                    <label>
                      <input id="form_sex1" v-model="formModel.sex" name="sex" value="男性" type="radio" class="mr-2">
                      <span>男性</span>
                    </label>
                    <br>
                    <div class="errorTxt">{{ errors[0] && `性別 を選択してください。` }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>年齢<span class="caution caution-custom">※必須</span></th>
                  <validation-provider v-slot="validateItem" rules="required|number" tag="td" name="age">
                    <input id="age" v-model="formModel.age" name="age" type="text" size="5" maxlength="3"
                      data-id="contact_item"> 歳
                    <div v-if="!_isEmpty(validateItem.failedRules)" class="errorTxt">{{
                      validateItem.failedRules.required ? customMessageError.age.required :
                        customMessageError.age.invalidFormat }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>メールアドレス<span class="caution caution-custom">※必須</span></th>
                  <validation-provider v-slot="validateItem" rules="required|email" tag="td" name="email">
                    <input id="email" v-model="formModel.email" name="email" type="text" size="40" maxlength="100"
                      data-id="contact_item">
                    <div v-if="!_isEmpty(validateItem.failedRules)" class="errorTxt">{{
                      validateItem.failedRules.required ? customMessageError.email.required :
                        customMessageError.email.invalidFormat }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>住所<span class="caution caution-custom">※必須</span></th>
                  <td>
                    <validation-provider v-slot="validateItem" rules="required|zipcode" tag="div" name="zipcode">
                      〒<input id="zipcode" v-model="formModel.zipcode" name="zipcode" type="text" maxlength="100" data-id="contact_item" onkeyup="AjaxZip3.zip2addr(this,'','address', 'address');">
                      <div v-if="!_isEmpty(validateItem.failedRules)" class="errorTxt">{{
                        validateItem.failedRules.required ? customMessageError.zipcode.required :
                          customMessageError.zipcode.invalidFormat }}</div>
                    </validation-provider>
                    <validation-provider v-slot="{ errors }" rules="required" tag="div" class="mt-3" name="address">
                      <input id="address" v-model="formModel.address" name="address" type="text" size="50"
                        maxlength="100" data-id="contact_item">
                      <div class="errorTxt">{{ errors[0] && `ご住所 を入力して下さい。` }}</div>
                    </validation-provider>
                  </td>
                </tr>
                <tr>
                  <th>電話番号<span class="caution caution-custom">※必須</span></th>
                  <validation-provider v-slot="validateItem" rules="required|tel" tag="td" name="tel">
                    <input id="tel" v-model="formModel.tel" name="tel" type="text" size="25" maxlength="15"
                      data-id="contact_item">
                    <div v-if="!_isEmpty(validateItem.failedRules)" class="errorTxt">{{
                      validateItem.failedRules.required ? customMessageError.tel.required :
                        customMessageError.tel.invalidFormat }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>質問事項等</th>
                  <td>
                    <textarea v-model="formModel.description" name="description" cols="40" rows="6"
                      data-id="contact_item"></textarea>
                  </td>
                </tr>
              </tbody>
            </table>

            <recaptcha />

            <p class="btnarea">
              <input name="submit1" type="submit" value="送信内容確認">
              <input name="reset" type="button" data-id="reset" value="リセット" @click="resetForm">
            </p>
          </form>
          <p id="secure">
            当ホームページはファイアウォールで保護されたWEBサーバ上に開設しております。個人情報の登録につきましてもSSL暗号化通信に対応しています。なお、サイト運営者は遠州鉄道(株)ですが、ご登録いただいた情報はサイト運営者を介さずに直接当社に通知されます。
          </p>
        </div>
      </ValidationObserver>
    </main>
  </div>
</template>

<script>
import ValidationObserver from "~/components/ValidationObserver.vue";
import ValidationProvider from "~/components/ValidationProvider.vue";
import Recaptcha from "~/components/Recaptcha.vue";
import _isEmpty from 'lodash/isEmpty'
import AppArticle from "~/components/App/Article.vue";

export default {
  name: "Idosuper",
  components: {
    ValidationObserver,
    ValidationProvider,
    recaptcha: Recaptcha,
    ValidationObserver,
    ValidationProvider,
    recaptcha: Recaptcha,
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
          href: '/service/idosuper/form',
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
      customMessageError: {
        content: {
          required: 'お問い合わせ内容 を選択してください。'
        },
        name: {
          required: 'お名前 を入力して下さい。'
        },
        kana: {
          required: 'お名前ふりがな を入力して下さい。',
          invalidFormat: 'ふりがな は全角ひらがなで入力してください。'
        },
        sex: {
          required: '性別 を選択してください。'
        },
        age: {
          required: '年齢 を入力して下さい。',
          invalidFormat: '年齢 は、有効な文字列ではありません。数値 で入力して下さい。'
        },
        email: {
          required: 'メールアドレス を入力して下さい。',
          invalidFormat: 'メールアドレス は、有効なメールアドレスではありません。'
        },
        zipcode: {
          required: '郵便番号 を入力して下さい。',
          invalidFormat: '郵便番号 の入力形式が不正です。'
        },
        address: {
          required: 'ご住所 を入力して下さい。'
        },
        tel: {
          required: '電話番号 を入力して下さい。',
          invalidFormat: '電話番号 の入力形式が不正です。'
        },
      },
    }
  },
  setup() {
    useHead({

        title: 'お問い合わせフォーム｜遠鉄ストアでは新たに移動スーパーをはじめます！｜サービス｜遠鉄ストア',

      })
  },
  mounted() {
    const savedData = this.$store.state.idosuperFormData
    if (savedData) {
      this.formModel = { ...this.formModel, ...savedData }
    }
  },
  methods: {
    _isEmpty,
    checkError(observerInsErr) {
      const validateKeys = Object.keys(observerInsErr)

      return validateKeys.some(key => observerInsErr[key].length > 0)
    },
    getErrorList(observerInsErr) {
      const observerFields = observerInsErr.fields
      const validateFields = Object.keys(observerFields)

      return validateFields
        .filter(field => !_isEmpty(observerFields[field].failedRules))
        .reduce((preValue, curValue) => [
          ...preValue,
          observerFields[curValue].failedRules.required ? this.customMessageError[curValue].required : this.customMessageError[curValue].invalidFormat
        ], [])
    },
    async submitForm() {
      let token = ''
      try {
        token = await this.$recaptcha.execute('idosuper_submit')
      } catch (error) {
        console.error('Lỗi khi chạy reCAPTCHA:', error)
        return
      }

      let isHuman = false
      try {
        const res = await this.$axios.$post('/api/verify-recaptcha', { token })

        if (res.success && res.score >= 0.5) {
          isHuman = true
        } else {
          console.warn('Xác minh thất bại hoặc score thấp:', res)
        }
      } catch (error) {
        console.error('Lỗi xác minh token reCAPTCHA:', error)
        return
      }


      if (!isHuman) {
        alert('Xác minh reCAPTCHA thất bại. Vui lòng thử lại.')
        return
      }

      const isValidForm = await this.$refs.observerInquiry.validate()

      if (isValidForm) {
        this.formModel.recaptchaToken = token

        this.$store.commit('setIdosuperFormData', this.formModel)

        this.$router.push({
          path: '/service/idosuper/form/confirm'
        })
      } else {
        window.scroll({ top: 0, behavior: 'smooth' })
      }
    },
    resetForm() {
      this.formModel = {
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
      }
      this.$refs.observerInquiry.reset();
    }
  }
}
</script>

<style scoped lang="scss">
.btnarea {
  text-align: center;
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

.table-horz th,
.table-horz td {
  display: table-cell !important;
}

.caution.caution-custom {
  @media only screen and (max-width: 768px) {
    display: block;
  }

}

.caution {
  color: #ce2339;

  @media only screen and (max-width: 1023px) {
    &.caution {
      font-size: 10px;
    }
  }
}

p {
  @media only screen and (max-width: 1023px) {
    &.caution {
      margin-bottom: 5px !important;
    }
  }
}

.table-horz {
  @media only screen and (max-width: 1023px) {

    th,
    td {
      font-size: 10px;
    }

    th {
      display: table-cell !important;
      width: 40%;
    }
  }

  input,
  textarea {
    border: solid 1px #999999;
    padding: 1px 2px;

    @media only screen and (max-width: 1023px) {
      border-radius: 2px;

      &[type="text"] {
        width: 95%;
      }

      &#age {
        width: 50%;
      }

      &#zipcode {
        width: 75%;
      }
    }
  }

  textarea {
    width: 100%;

    @media only screen and (max-width: 1023px) {
      width: 95%;
    }
  }
}

.btnarea {
  width: 100%;
  text-align: center;
  margin-top: 18px;

  input {
    border: 2px solid rgb(0, 0, 0);

    &[type="submit"] {
      text-align: center;
      background: #ce2339;
      color: #ffffff;
      padding: 15px;
      width: 200px;
      margin-right: 10px;
      border: 2px solid #000 !important;

      &:hover {
        opacity: 0.6;
      }
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

.errorBox.errorBox-custom {
  @media only screen and (max-width: 560px) {
    margin: 15px 10px;

    h4 {
      padding: 10px !important;
      font-size: 10px !important;
      text-align: center !important;
    }

    ul {
      padding: 10px !important;

      li {
        font-size: 10px !important;
      }
    }
  }
}

.errorBox {
  margin-bottom: 10px;
  border: 1px solid #ce2339;
  background: #fff;

  h4 {
    padding: 15px 30px !important;
    margin: 0 !important;
    width: auto !important;
    border-bottom: none !important;
    background: #ce2339;
    color: #fff;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
  }

  ul {
    padding: 15px 30px !important;
    margin-top: 0 !important;

    li {
      background: url('/assets/images/ico_list012.webp') no-repeat left center;
      display: block;
      padding-left: 18px;
      list-style: none;

      font-size: 1.2em;
      color: #ce2339;
    }
  }
}

.errorTxt {
  padding: 0 !important;
  margin-top: 10px;
  color: #ce2339;
}
</style>
