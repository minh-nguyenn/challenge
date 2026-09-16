<template>
  <div class="wrap-content">
    <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
    <main>
      <AppArticle title="お問い合わせフォーム" class="wrap-outside">
        <p class="btnarea mb-0">
          <img src="/assets/images/step01.webp" alt="ご入力">
        </p>
      </AppArticle>
      <ValidationObserver ref="contactValidateObserver" v-slot="observeSlot">
        <div v-if="checkError(observeSlot.errors)" class="errorBox errorBox-custom">
          <h4>入力内容に誤りがあります。<br class="d-none-des">以下を参考にして再度入力内容をご確認ください。</h4>
          <ul>
            <li v-for="(error, key) in getErrorList(observeSlot)" :key="key">{{ error }}</li>
          </ul>
        </div>
        <div class="mobile-box">
          <p class="caution caution-custom">※印は必須項目</p>
          <form @submit.prevent="submitForm">
            <table class="table-horz">
              <tbody>
                <tr>
                  <th>お名前<br><span class="caution">※必須</span></th>
                  <validation-provider v-slot="{ errors }" rules="required" tag="td" name="name">
                    <input id="name" v-model="formModel.name" name="name" type="text" size="40" maxlength="25"
                      data-id="contact_item">
                    <div class="errorTxt">{{ errors[0] && `お名前 を入力して下さい。` }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>ふりがな<br><span class="caution">※必須</span></th>
                  <validation-provider v-slot="{ errors }" rules="required|zenkaku_hiragana" tag="td" name="kana">
                    <input id="kana" v-model="formModel.kana" name="kana" type="text" size="40" maxlength="25"
                      data-id="contact_item">
                    <div class="errorTxt">{{ errors[0] && `ふりがな を入力して下さい。` }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>ご住所</th>
                  <validation-provider ref="address1Provider" tag="td" name="address1" :immediate="false">
                    <select @change="handleAddressChange" id="address1" v-model="formModel.address1"
                      data-id="contact_item" name="address1">
                      <option :value="null">-----</option>
                      <option value="北海道">北海道</option>
                      <option value="青森県">青森県</option>
                      <option value="岩手県">岩手県</option>
                      <option value="宮城県">宮城県</option>
                      <option value="秋田県">秋田県</option>
                      <option value="山形県">山形県</option>
                      <option value="福島県">福島県</option>
                      <option value="茨城県">茨城県</option>
                      <option value="栃木県">栃木県</option>
                      <option value="群馬県">群馬県</option>
                      <option value="埼玉県">埼玉県</option>
                      <option value="千葉県">千葉県</option>
                      <option value="東京都">東京都</option>
                      <option value="神奈川県">神奈川県</option>
                      <option value="新潟県">新潟県</option>
                      <option value="富山県">富山県</option>
                      <option value="石川県">石川県</option>
                      <option value="福井県">福井県</option>
                      <option value="山梨県">山梨県</option>
                      <option value="長野県">長野県</option>
                      <option value="岐阜県">岐阜県</option>
                      <option value="静岡県">静岡県</option>
                      <option value="愛知県">愛知県</option>
                      <option value="三重県">三重県</option>
                      <option value="滋賀県">滋賀県</option>
                      <option value="京都府">京都府</option>
                      <option value="大阪府">大阪府</option>
                      <option value="兵庫県">兵庫県</option>
                      <option value="奈良県">奈良県</option>
                      <option value="和歌山県">和歌山県</option>
                      <option value="鳥取県">鳥取県</option>
                      <option value="島根県">島根県</option>
                      <option value="岡山県">岡山県</option>
                      <option value="広島県">広島県</option>
                      <option value="山口県">山口県</option>
                      <option value="徳島県">徳島県</option>
                      <option value="香川県">香川県</option>
                      <option value="愛媛県">愛媛県</option>
                      <option value="高知県">高知県</option>
                      <option value="福岡県">福岡県</option>
                      <option value="佐賀県">佐賀県</option>
                      <option value="長崎県">長崎県</option>
                      <option value="熊本県">熊本県</option>
                      <option value="大分県">大分県</option>
                      <option value="宮崎県">宮崎県</option>
                      <option value="鹿児島県">鹿児島県</option>
                      <option value="沖縄県">沖縄県</option>
                    </select>
                    <!-- <div class="errorTxt">{{ errors[0] && `ご住所 を選択して下さい。` }}</div> -->
                    <validation-provider name="address2">
                      <input id="address2" v-model="formModel.address2" name="address2" type="text" size="40"
                        maxlength="25" data-id="contact_item" />
                      <!-- <div class="errorTxt">{{ errors2[0] && `番地・建物名 を入力して下さい。` }}</div> -->
                    </validation-provider>
                  </validation-provider>
                </tr>
                <tr>
                  <th>お電話<br><span class="caution">※必須</span></th>
                  <validation-provider v-slot="validateItem" rules="required|tel" tag="td" name="tel">
                    <input id="tel" v-model="formModel.tel" name="tel" type="text" size="30" maxlength="600"
                      data-id="contact_item">
                    <div v-if="!_isEmpty(validateItem.failedRules)" class="errorTxt">{{
                      validateItem.failedRules.required ? customMessageError.tel.required :
                        customMessageError.tel.invalidFormat }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>E-MAIL<br><span class="caution">※必須</span></th>
                  <validation-provider v-slot="validateItem" rules="required|email" tag="td" name="email">
                    <input id="email" v-model="formModel.email" name="email" type="text" size="40" maxlength="100"
                      data-id="contact_item">
                    <div v-if="!_isEmpty(validateItem.failedRules)" class="errorTxt">{{
                      validateItem.failedRules.required ? customMessageError.email.required :
                        customMessageError.email.invalidFormat }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>
                    E-MAIL<br>
                    (確認再入力)<br><span class="caution">※必須</span>
                  </th>
                  <validation-provider v-slot="validateItem" rules="required|email_confirmation:@email" tag="td"
                    name="emailConfirm">
                    <input id="emailConfirm" v-model="formModel.emailConfirm" name="emailConfirm" type="text" size="40"
                      maxlength="100" data-id="contact_item">
                    <div v-if="!_isEmpty(validateItem.failedRules)" class="errorTxt">{{
                      validateItem.failedRules.required ? customMessageError.emailConfirm.required :
                        customMessageError.emailConfirm.invalidFormat }}</div>
                  </validation-provider>
                </tr>
                <tr>
                  <th>返信を希望しますか？<br><span class="caution caution-custom">※必須</span></th>
                  <validation-provider rules="required" tag="td" name="content">
                    <label style="margin-right: 20px;">
                      <input id="form_content1" v-model="formModel.response" data-id="contact_item" name="response"
                        value="不要です" type="radio" class="mr-2">
                      <span>不要です</span>
                    </label>
                    <label>
                      <input id="form_content2" v-model="formModel.response" data-id="contact_item" name="response"
                        value="希望します" type="radio" class="mr-2">
                      <span>希望します</span>
                    </label>
                  </validation-provider>
                </tr>
                <tr>
                  <th>ご利用の店舗名</th>
                  <td>
                    <select id="shop" v-model="formModel.shop" name="shop" data-id="contact_item">
                      <option :value="null" selected="selected">お選び下さい</option>
                      <optgroup label="浜松市中央区">
                        <option value="富塚店">富塚店</option>
                        <option value="向宿店">向宿店</option>
                        <option value="西ヶ崎店">西ヶ崎店</option>
                        <option value="笠井店">笠井店</option>
                        <option value="鴨江店">鴨江店</option>
                        <option value="フードワン佐鳴台店">フードワン佐鳴台店</option>
                        <option value="立野店">立野店</option>
                        <option value="初生店">初生店</option>
                        <option value="大人見店">大人見店</option>
                        <option value="天王店">天王店</option>
                        <option value="篠原店">篠原店</option>
                        <option value="新橋店">新橋店</option>
                        <option value="大平台店">大平台店</option>
                        <option value="桜台店">桜台店</option>
                        <option value="フードワン南浅田店">フードワン南浅田店</option>
                        <option value="フードワン泉店">フードワン泉店</option>
                        <option value="フードワン高林店">フードワン高林店</option>
                        <option value="フードワン東伊場店">フードワン東伊場店</option>
                        <option value="西伝寺店">西伝寺店</option>
                        <option value="マツモトキヨシさぎの宮駅前店">マツモトキヨシさぎの宮駅前店</option>
                      </optgroup>
                      <optgroup label="浜松市浜名区">
                        <option value="浜北店">浜北店</option>
                        <option value="フードワンきらりタウン店">フードワンきらりタウン店</option>
                        <option value="三ヶ日店">三ヶ日店</option>
                        <option value="スーパーマーケットみっかび">スーパーマーケットみっかび</option>
                      </optgroup>
                      <optgroup label="浜松市天竜区">
                        <option value="天竜店">天竜店</option>
                      </optgroup>
                      <optgroup label="磐田市">
                        <option value="磐田店">磐田店</option>
                        <option value="竜洋店">竜洋店</option>
                        <option value="池田店">池田店</option>
                        <option value="見付店">見付店</option>
                      </optgroup>
                      <optgroup label="袋井市">
                        <option value="浅羽店">浅羽店</option>
                        <option value="袋井久能店">袋井久能店</option>
                      </optgroup>
                       <optgroup label="周智郡">
                        <option value="森店">森店</option>
                      </optgroup>
                      <optgroup label="掛川市">
                        <option value="掛川中央店">掛川中央店</option>
                      </optgroup>
                      <optgroup label="菊川市">
                        <option value="菊川店">菊川店</option>
                      </optgroup>
                      <optgroup label="湖西市">
                        <option value="湖西店">湖西店</option>
                      </optgroup>
                      <optgroup label="豊川市">
                        <option value="豊川店">豊川店</option>
                      </optgroup>
                      <optgroup label="豊橋市">
                        <option value="豊橋曙店">豊橋曙店</option>
                      </optgroup>
                      <option value="ネットスーパー店">ネットスーパー店</option>
                      <option value="その他">その他</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>ご意見・お問合せ内容 (600文字以内でお願い致します)<br><span class="caution">※必須</span></th>
                  <validation-provider v-slot="{ errors }" rules="required" tag="td" name="description">
                    <textarea id="descriptionForm" name="description" v-model="formModel.description" cols="40" rows="6"
                      data-id="contact_item"></textarea>
                    <div class="errorTxt">{{ errors[0] && `ご意見・お問合せ内容 を入力して下さい。` }}</div>
                  </validation-provider>
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
        shop: null,
        address1: null,
        address2: '',
        tel: '',
        description: '',
        response: "不要です"
      },
      customMessageError: {
        content: {
          required: 'お問い合わせ内容 を選択してください。'
        },
        name: {
          required: 'お名前 を入力して下さい。'
        },
        // address1: {
        //   required: 'ご住所を選択して下さい。'
        // },
        // address2: {
        //   required: 'ご住所（都道府県以下） を入力して下さい。'
        // },
        kana: {
          required: 'ふりがな を入力して下さい。',
          invalidFormat: 'ふりがな は全角ひらがなで入力してください。'
        },
        email: {
          required: 'E-MAIL を入力して下さい。',
          invalidFormat: 'E-MAIL は、有効なメールアドレスではありません。'
        },
        emailConfirm: {
          required: 'E-MAIL（確認再入力） を入力して下さい。',
          invalidFormat: 'E-MAIL（確認再入力） は、E-MAIL と異なっています。',
        },
        tel: {
          required: 'お電話 を入力して下さい。',
          invalidFormat: '電話番号 の入力形式が不正です。'
        },
        description: {
          required: 'ご意見・お問合せ内容 を入力して下さい。',
        },
      },
    }
  },
  setup() {
    useHead({

        title: 'お問い合わせフォーム｜遠鉄ストア',

      })
  },
  mounted() {
    const savedData = this.$store.state.contactFormData
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
      for (const key in this.formModel) {
        if (typeof this.formModel[key] === 'string' && key !== 'description') {
          this.formModel[key] = this.formModel[key].trim()
        }
      }

      let token = ''
      try {
        token = await this.$recaptcha.execute('contact_submit')
      } catch (error) {
        console.error('reCAPTCHA error:', error)
        return
      }

      let isHuman = false
      try {
        const res = await this.$axios.$post('/api/verify-recaptcha', {
          token
        })

        if (res.success && res.score >= 0.5) {
          isHuman = true
        } else {
          console.warn('Low score or verification failed:', res)
        }
      } catch (error) {
        console.error('reCAPTCHA verification error:', error)
        return
      }

      if (!isHuman) {
        alert('Your action was suspected as bot-like behavior. Please try again.')
        return
      }

      const isValidForm = await this.$refs.contactValidateObserver.validate()

      if (isValidForm) {
        this.formModel.recaptchaToken = token

        this.$store.commit('setContactFormData', this.formModel)

        this.$router.push({ path: '/contact/form/confirm' })
      } else {
        window.scroll({ top: 0, behavior: 'smooth' })
      }
    },
    resetForm() {
      this.formModel = {
        name: '',
        kana: '',
        email: '',
        emailConfirm: '',
        shop: null,
        address1: null,
        address2: '',
        tel: '',
        description: '',
        response: "不要です"
      }
      this.$refs.contactValidateObserver.reset();
    },
    handleAddressChange() {
      this.$refs.address1Provider.reset();
    },
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

.caution {
  color: #ce2339;
}

.caution-custom {
  @media only screen and (max-width: 600px) {
    font-size: 10px !important;
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
  th {
    width: 30%;
  }

  @media only screen and (max-width: 1023px) {

    th,
    td {
      font-size: 10px;
      display: table-cell !important;
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

select {
  -webkit-appearance: listbox !important;
  border-style: solid;
  padding: 8px 3px;
  display: block;
  margin-bottom: 12px;
}
</style>
