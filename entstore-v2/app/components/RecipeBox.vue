<template>
  <div class="recipe-item">
    <section :title="recipeItem.title" class="recipe-box d-none-mobile">
      <a :target="recipeItem.archive && recipeItem.archive.length > 0 ? '' : '_blank'"
        :href="recipeItem.archive && recipeItem.archive.length > 0 ? `/service/recipe/archive/detail/${recipeItem.id}` : `${recipeItem.target_url}`"
        class="check">レシピを見る</a>
      <span v-if="checkRecipeNew(recipeItem.open_start)" class="new">new</span>
      <p>
        <img v-if="recipeItem.filename1 && recipeItem.filename1.url" :src="$appendWebpFormat(recipeItem.filename1.url)" class="fullImage">
        <img v-else src="/assets/images/img_noimg.webp" class="fullImage">
        <em :style="{ 'background-color': categoryColor[(recipeItem.category?.toString() || '')] }">{{
          (recipeItem.category?.toString() || '') }}</em>
        <strong>{{ checkLengthTitle(recipeItem.title, 18) }}</strong>
        <small>{{ recipeItem.time }}分</small>
        <span v-if="recipeItem.video" class="youtube">レシピ動画</span>
      </p>
    </section>
    <section class="recipe-box-mb d-none-des">
      <span v-if="checkRecipeNew(recipeItem.open_start)" class="new">new</span>
      <a :target="recipeItem.archive && recipeItem.archive.length > 0 ? '' : '_blank'"
        :href="recipeItem.archive && recipeItem.archive.length > 0 ? `/service/recipe/archive/detail/${recipeItem.id}` : `${recipeItem.target_url}`">
        <figure>
          <img v-if="recipeItem.filename1 && recipeItem.filename1.url" :src="$appendWebpFormat(recipeItem.filename1.url)"
            class="fullImage">
          <img v-else src="/assets/images/img_noimg.webp" class="fullImage">
        </figure>
        <div class="title">
          <p :style="{ 'background-color': categoryColor[(recipeItem.category?.toString() || '')] }" class="category c_stats03">
            {{ (recipeItem.category?.toString() || '') }}</p>
          <h2>{{ checkLengthTitle(recipeItem.title, 30) }}</h2>
          <div>

            <p class="time">
              <span v-if="recipeItem.video" class="youtube">レシピ動画</span>
              <span>{{ recipeItem.time }}分</span>
            </p>
          </div>

        </div>
      </a>
    </section>
  </div>
</template>

<script>
import { checkLengthTitle } from "~/utils/index.js";
export default {
  name: "RecipeBox",
  props: {
    recipeItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      categoryColor: {
        野菜レシピ: '#47800d',
        肉レシピ: '#800d0d',
        魚レシピ: '#0d5980',
        その他: '#000000',
      }
    }
  },
  methods: {
    checkRecipeNew(startDate) {
      const inputDate = new Date(startDate)
      const now = new Date()
      return (
        inputDate.getMonth() === now.getMonth() &&
        inputDate.getFullYear() === now.getFullYear()
      );
    },
    checkLengthTitle,

    formatTextTime(time) {
      if (time) time = time + ''
      let timeCut = this.checkLengthTitle(time, 2)
      if (timeCut.includes('...')) {
        timeCut = timeCut.replace(/\.\.\./g, '');
      }
      return timeCut;
    },
  },
}
</script>

<style scoped lang="scss">
.recipe-box {
  width: 222px;
  height: 298px;
  text-align: left;
  background: #f3e7cd;
  border: solid #cccccc 3px;
  padding: 17px;
  box-sizing: border-box;

  a {
    opacity: 0;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    position: absolute;
    z-index: 2;
    width: calc(222px - 34px);
    height: calc(298px - 34px);
    display: block;
    text-indent: -9999px;

    &:hover {
      opacity: 1;
      padding: 0;
      border: none;
      position: absolute;
      z-index: 2;
      background: url('/assets/images/over_check.webp') center center;
      width: 222px;
      height: 298px;
      display: block;
      margin: -20px 0 0 -20px;
      text-indent: -9999px;
    }
  }

  span.new {
    background: url('/assets/images/ico_new.webp') top left no-repeat;
    position: absolute;
    z-index: 1;
    width: 222px;
    height: 88px;
    display: block;
    text-indent: -9999px;
    margin: -20px 0 0 -20px;
    margin-bottom: 30px;
  }

  p {
    width: 182px;
    text-decoration: none;
    color: #333333;
    display: block;
    position: absolute;
    z-index: 0;

    img {
      width: 100%;
      margin-bottom: 8px;
      max-width: 182px;
      max-height: 121px;
    }

    em {
      display: block;
      padding: 3px;
      box-sizing: border-box;
      margin-bottom: 12px;
      text-align: center;
      border-radius: 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      font-size: 14px;
      color: #ffffff;
      background: #0d5980;
      font-style: normal !important;
    }

    strong {
      font-size: 17px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      width: 100%;
      display: block;
      border-bottom: dotted 1px #999999;
      line-height: 20px;
      font-weight: normal;
      height: 51px;
      overflow: hidden;
    }

    small {
      display: block;
      height: 20px;
      background: url('/assets/images/ico_time.gif') left no-repeat;
      padding-left: 24px;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 20px;
    }

    .youtube {
      display: block;
      height: 20px;
      background: url('/assets/images/ico_youtube.webp') left no-repeat;
      background-size: 20px;
      padding-left: 20px;
      box-sizing: border-box;
      font-size: 14px;
      line-height: 20px;
      position: absolute;
      right: 0;
      bottom: 0px;
    }
  }
}

.recipe-box-mb {
  width: 100%;
  display: table;
  position: relative;
  border-bottom: 2px solid #ccc;

  span.new {
    background: url('/assets/images/ico_new.webp') top left no-repeat;
    position: absolute;
    z-index: 1;
    width: 88px;
    height: 88px;
    display: block;
    text-indent: -9999px;
    margin: -20px 0 0 -20px;
    margin-bottom: 30px;
    top: 20px;
    left: 20px;
  }

  a {
    display: block;
    padding: 15px 10px;
    background: url(/assets/images/ico_arrow01.webp) no-repeat;
    background-position: 98% 50%;
    color: #333;

    @media only screen and (max-width: 1023px) {



      * {
        font-family: "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
      }

      background-size: 20px;

      img {
        aspect-ratio: 475/317;
      }

      .time {
        margin-bottom: 0px;
        line-height: 1;

        span {
          padding: 0 !important;
        }

        span.youtube {
          display: block;
          height: 20px;
          background: url('/assets/images/ico_youtube.webp') left no-repeat;
          background-size: 20px;
          box-sizing: border-box;
          font-size: 14px;
          line-height: 20px;
          position: absolute;
          left: 0;
          top: 0;
          padding-left: 25px !important;
        }
      }
    }

    figure {
      display: table-cell;
      width: 45%;
      padding-right: 15px;
      position: relative;
    }

    .title {
      display: table-cell;
      width: 55%;
      padding-right: 30px;
      vertical-align: top;

      .category {
        margin-bottom: 10px;
        padding: 5px 0;
        border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        text-align: center;
        color: #fff;
        font-size: 12px;

        @media only screen and (max-width: 1024px) {
          line-height: 16px;
        }
      }

      h2 {
        padding-bottom: 10px;
        border-bottom: 1px dashed #ccc;
        font-size: 16px;
        line-height: 21px;
        font-weight: normal;
        padding-top: 0 !important;
        color: #333;

        @media only screen and (max-width: 500px) {
          padding-left: 0px;
        }
      }

      .time {
        margin-top: 10px;
        text-align: right;
        position: relative;

        span {
          padding: 5px 0 5px 25px;
          background-position: 0 50%;
          font-size: 14px;

          @media only screen and (max-width: 1024px) {
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>
