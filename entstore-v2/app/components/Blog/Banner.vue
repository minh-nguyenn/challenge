<template>
  <div>
    <div class="blog_title_box">
      <h2 class="blog_title">
            <span>
              <em>遠鉄ストアの</em>
              <br>おいしい話
            </span>
      </h2>
    </div>
    <p class="normalTxt txt_intro mobile-box">遠鉄ストアのおいしい話は、主婦目線で販売されている商品やお得な情報を紹介していくメディアです。</p>
  </div>
</template>

<script>
export default {
  name: "BlogBanner"
}
</script>

<style scoped lang="scss">
.blog_title_box {
  padding-top: 30px !important;
  text-align: center;

  @media only screen and (min-width: 1024px) {
    padding-top: 90px !important;
  }

  .blog_title {
    width: auto !important;
    height: auto !important;
    margin-bottom: 25px !important;
    padding: 0 !important;
    background: none !important;
    border: none !important;
    display: inline-block;
    overflow: inherit !important;
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 2.2em;
    font-weight: normal;
    font-family: "FOT-ベビポップ Std EB";

    @media only screen and (min-width: 1024px) {
      margin-bottom: 50px !important;
    }

    &:before, &:after {
      width: 60px;
      height: 23px;
      margin: auto;
      background: no-repeat left top/100% auto;
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;

      @media only screen and (min-width: 1024px) {
        width: 265px;
        height: 100px;
      }
    }

    &:before {
      background-image: url('/assets/images/bg_title_img01.webp');
      left: -70px;

      @media only screen and (min-width: 1024px) {
        left: -310px;
      }
    }
    &:after {
      background-image: url('/assets/images/bg_title_img02.webp');
      right: -70px;

      @media only screen and (min-width: 1024px) {
        right: -310px;
      }
    }

    span {
      padding-bottom: 15px;
      color: #331E0E;
      display: inline-block;
      font-size: 25px !important;
      line-height: 1.1;
      font-family: "FOT-ベビポップ Std EB";
      padding-top: 6px;
      float: right;
      background: url('/assets/images/bg_title_line.webp') no-repeat center bottom/100% auto;

      @media only screen and (min-width: 1024px) {
        font-size: 50px !important;
        padding-bottom: 30px;
      }

      em {
        color: #CF2339;
        font-style: normal;
        position: relative;

        &:before {
          width: 15px;
          height: 17px;
          margin: auto;
          background: url('/assets/images/bg_title_icon.webp') no-repeat left top/100% auto;
          content: "";
          position: absolute;
          top: -5px;
          left: -15px;

          @media only screen and (min-width: 1024px) {
            width: 37px;
            height: 40px;
            top: -10px;
            left: -35px;
          }
        }
      }
    }
  }
}
.txt_intro {
  margin-bottom: 25px;
  font-size: 14px;
  text-align: center;
  line-height: 28.8px;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 50px;
    font-size: 16px;
  }
}
</style>
