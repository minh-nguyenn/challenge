<script setup>
/**
 * Thay <v-navigation-drawer v-model fixed temporary app right width="400px">
 *
 * DOM goc (lay tu www.entstore.co.jp, khong phai doan):
 *   <nav class="drawer-navlist v-navigation-drawer v-navigation-drawer--close
 *               v-navigation-drawer--fixed v-navigation-drawer--is-mobile
 *               v-navigation-drawer--right v-navigation-drawer--temporary theme--light"
 *        style="height:100vh;top:0px;transform:translateX(100%);width:400px;">
 *     <div class="v-navigation-drawer__content"> ... </div>
 *   </nav>
 *
 * Khi dong: them class --close + transform:translateX(100%)
 * Khi mo   : bo class --close + transform:translateX(0)
 */
import { computed, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  width: { type: String, default: '400px' },
  right: { type: Boolean, default: false },
  fixed: { type: Boolean, default: false },
  temporary: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const isOpen = computed(() => props.modelValue)

const navStyle = computed(() => ({
  height: '100vh',
  top: '0px',
  // right drawer truot ra phia phai, left truot ra phia trai
  transform: isOpen.value
    ? 'translateX(0)'
    : `translateX(${props.right ? '100%' : '-100%'})`,
  width: props.width,
}))

// Vuetify khoa scroll cua body khi drawer temporary dang mo
watch(isOpen, (v) => {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflowY = v ? 'hidden' : ''
})
onBeforeUnmount(() => {
  if (typeof document !== 'undefined') document.documentElement.style.overflowY = ''
})
</script>

<template>
  <div>
    <!-- lop phu mo; bam vao de dong, giong hanh vi Vuetify temporary -->
    <div v-if="temporary && isOpen" class="v-overlay-scrim" @click="emit('update:modelValue', false)" />
    <nav
      class="v-navigation-drawer theme--light"
      :class="{
        'v-navigation-drawer--close': !isOpen,
        'v-navigation-drawer--open': isOpen,
        'v-navigation-drawer--fixed': fixed,
        'v-navigation-drawer--temporary': temporary,
        'v-navigation-drawer--is-mobile': temporary,
        'v-navigation-drawer--right': right,
      }"
      :style="navStyle"
      data-booted="true"
    >
      <div class="v-navigation-drawer__content">
        <slot />
      </div>
      <div class="v-navigation-drawer__border" />
    </nav>
  </div>
</template>
