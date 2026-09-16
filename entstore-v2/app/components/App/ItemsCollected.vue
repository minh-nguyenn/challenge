<template>
  <section class="contentInner under">
    <img :src="recycle.url" width="304" height="203" :alt="recycle.imgAlt">
    <div class="description">
      <p>
        <strong>{{ recycle.title }}</strong>
      </p>
      <div class="content" v-html="recycle.content"/>
    </div>

  </section>
</template>

<script>
export default {
  name: "AppItemsCollected",
  props: {
    recycle: {
      type: Object,
      default: () => ({
        "content": "",
        "imgAlt": "",
        "url": '',
        "title": ""
      })
    }
  }
}
</script>

<style scoped lang="scss">
.contentInner {
  font-size: 14px;

  img {
    margin: 0;
    padding: 0;
    border: solid 1px #cccccc;
  }

  strong {
    color: #ce2339;
    font-weight: bold;
    font-size: 18px;

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  }
}

.description {
  p {
    @media only screen and (min-width: 1024px) {
      margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    .content {
      ::v-deep {
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
