<template>
  <a
    class="btn btn-navigation"
    :class="{
      'suffix-icon': $slots.default,
      'prefix-icon': $slots.prefix,
    }"
    :href="url || null"
    :target="target"
  >
    <div v-if="$slots.prefix" class="wrap-image">
      <slot name="prefix"></slot>
    </div>
    <span v-html="title"></span>
    <div v-if="$slots.default" class="wrap-image">
      <slot></slot>
    </div>
  </a>
</template>

<script>
export default {
  name: 'ButtonNav',
  props: {
    title: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_self',
    },
  },
}
</script>

<style scoped lang="scss">
.btn-navigation {
  --height: 70px;
  height: var(--height);
  border-radius: 100px;
  border: 1px solid #CF2339;
  background-color: #CF2339;
  color: white;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.48px;
  transition: all 0.3s;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  opacity: 1 !important;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  padding: 23px 65px;

  width: fit-content !important;
  min-width: 360px;
  margin: 0 auto;

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.w-full {
    width: 100% !important;
    min-width: auto;
  }

  &.back {
    ::v-deep {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  &.active {
    background-color: white;
    color: #CF2339;
    cursor: default;
  }

  .wrap-image {
    display: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid white;
    background-color: white;

    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 28px;
    }
  }

  @media (hover: hover) {
    &:hover {
      border: 1px solid #CF2339;
      color: #CF2339;
      background-color: white;

      .wrap-image {
        border: 1px solid #CF2339;
      }
    }
  }

  &.suffix-icon {
    .wrap-image {
      display: flex;
    }
  }

  &.prefix-icon {
    .wrap-image {
      display: flex;
      left: 20px;
      right: auto;
    }
  }
}

@media screen and (max-width: 600px) {
  .btn-navigation {
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.42px;
    height: 60px;
    min-width: 311px;
    padding: 20px 50px;
  }

  .wrap-image {
    right: 16px;
  }

  .prefix-icon .wrap-image {
    left: 16px;
    right: auto;
  }
}

@media screen and (max-width: 340px) {
  .btn-navigation {
    min-width: 100%;
  }
}
</style>
