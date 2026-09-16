<template>
  <div class="el-collapse-item" :class="{ 'is-active': isActive }">
    <div role="tab" :aria-expanded="isActive">
      <div
        class="el-collapse-item__header"
        :class="{
          'is-active': isActive,
        }"
        @click="handleCollapseAction"
        @keyup.space.enter.stop="handleCollapseAction"
      >
        <span v-html="title"></span>
        <transition name="icon">
          <i v-if="!isActive" class="el-collapse-item__arrow el-icon-plus"> </i>
        </transition>
        <transition name="icon">
          <i v-if="isActive" class="el-collapse-item__arrow el-icon-minus"> </i>
        </transition>
      </div>
    </div>
    <transition
      name="collapse"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div
        v-show="isActive"
        class="el-collapse-item__wrap"
        role="tabpanel"
        :aria-hidden="!isActive"
      >
        <div class="el-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CollapseItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isActive: false,
    }
  },

  methods: {
    handleCollapseAction() {
      this.isActive = !this.isActive
    },
    open() {
      this.isActive = true
    },
    beforeEnter(el) {
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldMarginTop = el.style.marginTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom

      el.style.height = '0'
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
      el.style.opacity = '0'
    },
    enter(el) {
      el.dataset.oldOverflow = el.style.overflow
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
        el.style.marginTop = el.dataset.oldMarginTop
        el.style.opacity = '1'
      } else {
        el.style.height = ''
        el.style.paddingTop = el.dataset.oldPaddingTop
        el.style.paddingBottom = el.dataset.oldPaddingBottom
        el.style.marginTop = el.dataset.oldMarginTop
      }

      el.style.overflow = 'hidden'
    },
    afterEnter(el) {
      el.style.height = ''
      el.style.overflow = el.dataset.oldOverflow
    },
    beforeLeave(el) {
      el.dataset.oldPaddingTop = el.style.paddingTop
      el.dataset.oldPaddingBottom = el.style.paddingBottom
      el.dataset.oldOverflow = el.style.overflow

      el.style.height = el.scrollHeight + 'px'
      el.style.overflow = 'hidden'
      el.style.opacity = '1'
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0
        el.style.paddingTop = 0
        el.style.paddingBottom = 0
        el.style.opacity = '0'
        el.style.marginTop = '0'
      }
    },
    afterLeave(el) {
      el.style.height = ''
      el.style.overflow = el.dataset.oldOverflow
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
      el.style.marginTop = el.dataset.oldMarginTop
    },
  },
}
</script>

<style scoped lang="scss">
.collapse-enter-active,
.collapse-leave-active {
  -webkit-transition: 0.5s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out, 0.5s opacity ease-in-out,
    0.3s margin-top ease-in-out;
  transition: 0.5s height ease-in-out, 0.3s padding-top ease-in-out,
    0.3s padding-bottom ease-in-out, 0.5s opacity ease-in-out,
    0.3s margin-top ease-in-out;
}

.icon-enter-active,
.icon-leave-active {
  transition: 0.5s opacity ease-in-out;
}
.icon-enter,
.icon-leave-to {
  opacity: 0;
  right: 0;
}

.el-collapse-item {
  .el-collapse-item__header {
    padding: 16px 30px 16px 18px;
    letter-spacing: 0.54px;
    height: auto;
    border-radius: 8px;
    transition: 0.3s opacity ease;
    cursor: pointer;
    position: relative;
    background-color: rgba(#CF2339, 0.1);
    font-size: 18px;
    line-height: normal;
    font-weight: bold;
    color: #CF2339;

    i {
      position: absolute;
      right: 18px;
    }

    @media (hover: hover) {
      &:hover {
        opacity: 0.6 !important;
      }
    }

    .el-collapse-item__arrow {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: #CF2339;
      font-weight: 600;
      margin: 0 0 0 auto;
    }
  }

  .el-collapse-item__wrap {
    background-color: transparent;
    border: none;

    .el-collapse-item__content {
      padding-bottom: 0;
    }
  }

  @media screen and (max-width: 600px) {
    .el-collapse-item__header {
      font-size: 14px;
      line-height: 26px;
      letter-spacing: 0.42px;
      padding: 16px 22px 16px 18px;
      height: auto;

      i {
        right: 16px;
      }
    }
  }
}
</style>
