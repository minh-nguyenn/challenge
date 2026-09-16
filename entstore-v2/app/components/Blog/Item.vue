<template>
  <div class="new_list">
    <a :href="`/blog/detail/${blogItem.id}`">
      <figure class="thum_img">
        <img v-if="blogItem?.imgUrl" :src="$appendWebpFormat(blogItem.imgUrl)" class="img_responsive">
        <img v-else src="/assets/images/img_noimg.webp" class="img_responsive">
      </figure>
      <p class="new_list_category">{{ blogItem.category }}</p>
      <time class="new_list_time">{{ formatDateYMD(blogItem.time, '.') }}</time>
      <p class="new_list_title">{{ checkLengthTitle(blogItem.title, 50) }}</p>
    </a>
  </div>
</template>

<script>
import { formatDateYMD, checkLengthTitle } from "~/utils/index.js";

export default {
  name: "BlogItem",
  props: {
    blogItem: {
      type: Object,
      default: () => ({
        id: '',
        imgUrl: '',
        category: '',
        title: '',
        time: ''
      })
    }
  },
  methods: {
    formatDateYMD,
    checkLengthTitle
  }
}
</script>

<style lang="scss">
.blog-container-custom {
  .new_list {
    padding: 0 2.25px 25px !important;
  }
}
</style>

<style scoped lang="scss">
.new_list {
  padding: 0 7px 25px;
  line-height: 25.2px;

  @media only screen and (max-width: 768px) {
    margin: auto;
    height: 100%;
    max-width: 300px;
    padding: 0 5px 15px;

    a {
      padding: 15px 10px 30px;
    }
  }

  a {
    height: 100%;
    padding: 20px 17px 50px;
    background: url('/assets/images/bg_entry.webp') no-repeat left top/100% 100%;
    display: block;
    text-decoration: none;
    color: #087295;

    &:hover {

      .new_list_title,
      .new_list_time {
        color: #CF2339;
      }

      .new_list_category {
        background: #CF2339;
      }
    }

    .thum_img {
      line-height: 0;
      min-height: 18px;

      .img_responsive {
        width: 100%;
        height: auto;
      }
    }

    .new_list_category {
      width: calc(100% - 50px);
      margin: -20px auto 10px;
      padding: 3px 15px;
      background: #331E0E;
      border-radius: 100px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      position: relative;
      z-index: 1;
      min-height: 34.8px;
      align-content: center;
      line-height: normal;

      @media only screen and (max-width: 768px) {
        font-size: 10px;
      }
    }

    .new_list_time {
      margin-bottom: 5px;
      color: #331E0E;
      display: block;
      font-size: 14px;

      @media only screen and (max-width: 768px) {
        font-size: 10px;
      }
    }

    .new_list_title {
      color: #331E0E;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 0;

      @media only screen and (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
}
</style>
