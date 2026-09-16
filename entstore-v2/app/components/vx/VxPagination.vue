<script setup>
/**
 * Thay <v-pagination v-model :length :total-visible>. Dung 1 lan (blog/index.vue).
 *
 * DOM goc (do tu www.entstore.co.jp/blog/):
 *   <ul class="v-pagination theme--light">
 *     <li><button class="v-pagination__navigation v-pagination__navigation--disabled">
 *           <i class="v-icon notranslate mdi mdi-chevron-left theme--light"></i></button></li>
 *     <li><button class="v-pagination__item v-pagination__item--active primary">1</button></li>
 *     ...
 *   </ul>
 * Trang blog co CSS scoped ghi de gan het (nut 60x60, bo goc 5px, mau #331e0e),
 * nen chi can dung dung ten class la giao dien khop.
 */
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  length: { type: Number, default: 1 },
  totalVisible: { type: [Number, String], default: 0 },
})
const emit = defineEmits(['update:modelValue', 'input'])

// Vuetify rut gon danh sach khi qua dai: giu trang dau/cuoi va lan can trang hien tai
const items = computed(() => {
  const total = props.length
  const cur = props.modelValue
  const max = Number(props.totalVisible) || total
  if (total <= max || max === 0) return Array.from({ length: total }, (_, i) => i + 1)

  const out = [1]
  const side = Math.max(1, Math.floor((max - 3) / 2))
  let from = Math.max(2, cur - side)
  let to = Math.min(total - 1, cur + side)
  if (from > 2) out.push('...')
  for (let i = from; i <= to; i++) out.push(i)
  if (to < total - 1) out.push('...')
  out.push(total)
  return out
})

function go(p) {
  if (p === '...' || p === props.modelValue || p < 1 || p > props.length) return
  emit('update:modelValue', p)
  emit('input', p)
}
</script>

<template>
  <ul class="v-pagination theme--light">
    <li>
      <button
        type="button"
        aria-label="Previous page"
        class="v-pagination__navigation"
        :class="{ 'v-pagination__navigation--disabled': modelValue <= 1 }"
        :disabled="modelValue <= 1"
        @click="go(modelValue - 1)"
      >
        <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-left theme--light" />
      </button>
    </li>
    <li v-for="(p, i) in items" :key="i">
      <button
        v-if="p !== '...'"
        type="button"
        class="v-pagination__item"
        :class="{ 'v-pagination__item--active primary': p === modelValue }"
        :aria-current="p === modelValue ? 'true' : undefined"
        @click="go(p)"
      >
        {{ p }}
      </button>
      <button v-else type="button" disabled class="v-pagination__more">…</button>
    </li>
    <li>
      <button
        type="button"
        aria-label="Next page"
        class="v-pagination__navigation"
        :class="{ 'v-pagination__navigation--disabled': modelValue >= length }"
        :disabled="modelValue >= length"
        @click="go(modelValue + 1)"
      >
        <i aria-hidden="true" class="v-icon notranslate mdi mdi-chevron-right theme--light" />
      </button>
    </li>
  </ul>
</template>
