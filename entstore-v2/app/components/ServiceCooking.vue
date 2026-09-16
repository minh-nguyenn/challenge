<template>
<div>
  <AppArticle :title="dish.title || ''" class="wrap-outside">
    <article class="cooking-content mobile-box">
      <section class="img-cooking">
        <img :src="dish.url">
      </section>
      <section class="contentInner">
        <ul class="d-none-mobile">
          <li v-for="(request, index) in dish.request" :key="index" class="recipePoint" v-html="request" />
        </ul>
        <div class="request-box">
          <ul v-if="dish.requestSP" class="d-none-des">
            <li v-for="(request, index) in dish.requestSP" :key="index" class="recipePoint">
              <svg class="icon colorRed"><use xlink:href="#icon_baloon"></use></svg>
              <span v-html="request" />
            </li>
          </ul>
             <ul v-else class="d-none-des">
            <li v-for="(request, index) in dish.request" :key="index" class="recipePoint">
              <svg class="icon colorRed"><use xlink:href="#icon_baloon"></use></svg>
              <span v-html="request" />
            </li>
          </ul>
        </div>

        <p class="response" v-html="dish.response" />
        <div v-if="dish.eg?.title">
          <h4>{{dish.eg.title}}</h4>
          <p class="eg-content" v-html="dish.eg.content" />
        </div>
      </section>
    </article>
  </AppArticle>
</div>
</template>

<script>
import AppArticle from "~/components/App/Article.vue";

export default {
  name: "ServiceCooking",
  components: {AppArticle},
  props: {
    dish: {
      type: Object,
      require: true,
      default: () => ({
        "title": "",
        "url": "",
        "request": [],
        "response": "",
        "eg": {
          "title": "",
          "content": ""
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.wrap-outside {
  margin-bottom: 20px !important;

  @media only screen and (min-width: 1024px) {
    margin-bottom: 30px !important;
  }
}

.cooking-content {
  font-size: 14px;

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 14px;
    grid-gap: 30px;
  }

  .img-cooking {
    padding-top: 15px;

    img {
      width: 100%;
    }
  }
}

.contentInner {
  h4 {
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    border-bottom: 5px #f3e7cd solid;
    padding-bottom: 5px;
    text-align: left;
    margin-bottom: 15px;
  }

  ul.d-none-mobile {
    display: flex;

    .recipePoint {
      background: url('/assets/images/bg_hukidashi.webp') center center no-repeat !important;
      width: 137px;
      height: 140px;
      display: block;
      margin: 0 25px 10px 0 !important;
      text-align: center;
      padding: 0px 0 0 0 !important;
      list-style: none !important;
      font-size: 13px !important;
          align-content: center !important;

      &:last-of-type {
        margin-right: 0 !important;
      }
    }
  }

  @media only screen and (max-width: 1023px) {
    .request-box {
      margin: 10px 0;
      padding: 10px;
      background-color: #f3e7cd;

      .recipePoint {
        margin-bottom: 5px;
        padding: 10px;
        background-position: 10px 11px;
        background-color: #fff;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        font-size: 14px;
        line-height: 19.6px;
        list-style-type: none;

        &:last-child {
          margin-bottom: 0;
        }

        .icon {
          display: inline-block;
          padding-right: 5px;
          width: 25px;
          height: 25px;
          vertical-align: middle;
        }

        .colorRed {
          color: #c7273b;
          fill: #c7273b;
        }

        span {
          ::v-deep {
            br {
              display: none;
            }
          }
        }
      }
    }

    .response {
      line-height: 12px;
    }

    .eg-content {
      line-height: 28px;

      ::v-deep {
        span {
          font-size: 12px;
        }
      }
    }
  }

  .eg-content, .response {
    line-height: 25.2px;
  }
}
</style>
