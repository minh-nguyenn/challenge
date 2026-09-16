<template>
  <article class="singleColumn art-gps">
    <section class="contentInner">
      <h2 class="title-article" :class="{link: href}">
        <a v-if="href" class="d-none-des" :class="{'down-lineHeight': subTitle}" :href="href">
          {{title}}
          <div v-if="subTitle">{{subTitle}}</div>
        </a>
        <span v-if="href" class="d-none-mobile">{{title}}</span>
        <span v-if="!href">{{title}}</span>
      </h2>
      <div class="article-content">
        <slot />
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "AppArticle",
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.singleColumn {
  overflow: hidden;
  margin-bottom: 69px;

  .title-article {
    margin-bottom: 0px;
    padding: 8px 12px;
    background: #331e0e;
    box-sizing: border-box;
    border-left: #2a180b solid 5px;
    color: #fff;
    font-size: 22px;
    font-weight: normal;
    overflow: hidden;
    text-align: left;
    //border-bottom: 2px solid #999;
    line-height: 30px !important;

    @media only screen and (max-width: 560px) {
      line-height: 25.2px;
      padding: 15px 10px;
      a{
        line-height: 1 !important;
      }

      &.link {
        &:hover {
          opacity: 0.8;
        }
      }
    }

    @media only screen and (max-width: 1023px) {
      font-size: 18px;
    }

    @media only screen and (min-width: 1024px) {
      margin-bottom: 20px;
      border-bottom: none;
    }

    a {
      display: block;
      background: url('/assets/images/ico_arrow08.webp') no-repeat;
      background-position: 98% 50%;
      color: #fff;
      line-height: 30px;
      padding: 0;

      &.down-lineHeight {
        line-height: 17px;
        padding: 5px 0;
      }
    }
  }
  .article-content {
    font-size: 14px;
  }
}
/*
 * Nuxt 2 nap CSS cua TRANG truoc, CSS cua COMPONENT sau -> rule nay (cua
 * component) thang rule cung do uu tien ben trang. Nuxt 4 nap nguoc lai.
 * Do duoc tren /sitemap/: .wrap-outside{margin-bottom:80px} cua trang de len
 * .art-gps{30px} -> trang cao hon ban goc dung 50px.
 * Nang do uu tien de giu dung ket qua nhu ban goc.
 */
.singleColumn.art-gps,
.art-gps {
  margin-bottom: 30px;
}
</style>
