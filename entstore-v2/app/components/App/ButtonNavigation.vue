<template>
  <div class="btn-nav" :class="{long: longBtn, isBack}">
    <a :target="target" :href="href" :class="{'btn-back': isBack, next}">
      {{title}}
      <br v-if="$slots.default">
      <slot />
      <svg v-if="!isBack && !next" class="icon d-none-des"><use xlink:href="#icon_arrow03"></use></svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "AppButtonNavigation",
  props: {
    title: {
      type: String,
      required: true
    },
    next: {
      type: Boolean,
      required: false,
      default: false
    },
    isBack: {
      type: Boolean,
      default: false
    },
    longBtn: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: 'javascript:history.back()'
    },
    target: {
      type: String,
      default: '_self'
    },
  }
}
</script>

<style scoped lang="scss">
.btn-nav {
  a {
    display: block;
    width: 300px;
    padding: 15px 0 15px 0;
    background: url('/assets/images/ico_arrow01.webp') no-repeat right 60px center #f3e7cd;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    text-align: center;
    color: #333;
    font-size: 16.8px;
    line-height: 23.52px;
    text-decoration: none;
    margin: 0 auto;

    &.next {
      width: 400px;
      padding: 15px 0;
      background-position-x: 350px;
      line-height: 25px;
    }

    .icon {
      width: 30px;
      height: 30px;
      margin-top: -9px;
      vertical-align: middle;

    }

    &:hover {
      background-color: #331e0e;
      color: #fff;
    }

    &.btn-back {
      background: url('/assets/images/ico_arrow01back.webp') no-repeat 50px center #f3e7cd;

      @media only screen and (max-width: 1023px) {
        background-size: 20px;
      }

      &:hover {
        background-color: #331e0e !important;
        color: #fff;
      }
    }
  }

  &.long {
    @media only screen and (max-width: 1024px) {
      padding: 0 10px;
      margin-top: 10px !important;

      a {
        width: 100%;
        background: #f3e7cd;
        font-size: 14px;
        svg{
          margin-top: -6px;
        }
      }

      &.isBack {
        a {
          width: 100%;
          background: url('/assets/images/ico_arrow01back.webp') no-repeat 50px center #f3e7cd;
        }
      }
    }
  }
}
</style>
