<template>
  <section class="product" @click="$emit('detail-service')">
    <a :href="service.to">
      <figure>
        <img :src="service.url" :alt="service.imgAlt">
      </figure>
      <span>{{ service.title }}</span>
    </a>
  </section>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    service: {
      type: Object,
      default: () => ({
        "to": "",
        "imgAlt": "",
        "url": '',
        "title": ""
      })
    }
  }
}
</script>

<style lang="scss">
.service-product-list {
  .product {
    @media only screen and (max-width: 768px) {
      padding: 0px !important;
      margin: 0px !important;
    }

  }
}
</style>

<style scoped lang="scss">
.product {
  width: 306px;

  @media only screen and (max-width: 1023px) {
    padding: 0 12px;
    width: 100%;
    margin-bottom: 12px;
  }

  a {
    color: #087295;
    font-size: 18px;
    text-decoration: none;
    display: block;
    box-sizing: content-box;

    &:hover {
      img {
        opacity: 0.6;
      }

      span {
        @media only screen and (min-width: 1024px) {
          display: block;
          background: url('/assets/images/ico_arrow01.webp') #c72539 no-repeat 10px center;
          width: 100%;
          padding: 10px 0 10px 40px;
          margin: -10px 0 0 0 !important;
          box-sizing: border-box;
          color: #ffffff;
          line-height: 1.2;
          border: solid 1px #cccccc;
        }
      }
    }

    img {
      margin: 0;
      padding: 0;
      border: solid 1px #cccccc;

      @media only screen and (min-width: 1024px) {
        height: 203px;
        width: 304px;
      }
    }

    span {
      display: block;
      background: url('/assets/images/ico_arrow01.webp') #f3e7cd no-repeat 10px center;
      width: 100%;
      padding: 10px 0 10px 40px;
      margin: -10px 0 0 0 !important;
      box-sizing: border-box;
      color: #000000;
      line-height: 1.2;
      border: solid 1px #cccccc;
    }

    @media only screen and (max-width: 1023px) {
      display: block;
      border: 1px solid #cccccc;
      background: url(/assets/images/ico_arrow01.webp) no-repeat;
      background-position: 98% 50%;
      background-size: 20px;
      background-color: #f3e7cd;
      color: #333;
      box-sizing: border-box;

      &:hover {
        opacity: 0.8;
      }

      figure {
        display: table-cell;
        width: 40%;
        line-height: 0;

        img {
          width: 100%;
          height: auto;
        }
      }

      span {
        background: none !important;
        display: table-cell;
        padding: 0 30px 0 10px;
        vertical-align: middle;
        font-size: 16px;
        line-height: 22.4px;
        font-weight: normal;
        border: none;
      }
    }
  }
}
</style>
