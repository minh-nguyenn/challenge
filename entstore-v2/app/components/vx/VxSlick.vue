<script setup>
/**
 * Thay <slick> cua vue-slick (goi jQuery slick-carousel) — thu vien nay khong
 * co ban Vue 3 va keo theo jQuery, nen viet lai bang CSS transform.
 *
 * Chi ho tro dung nhung option layout goc dang dung:
 *   slidesToShow, slidesToScroll, autoplay, autoplaySpeed, dots
 *
 * DOM giu ten class .slick-* de cac <style> trong layout goc (vd .slick-footer,
 * .slick-dotted.slick-slider .slick-dots li button:before) van bam dung.
 */
import { ref, computed, onMounted, onBeforeUnmount, useSlots } from 'vue'

const props = defineProps({
  options: { type: Object, default: () => ({}) },
})

const opt = computed(() => ({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: false,
  arrows: true, // slick mac dinh bat mui ten
  ...props.options,
}))

const slots = useSlots()
// moi node con la 1 slide, giong cach vue-slick nhan slide
const slides = computed(() => {
  const nodes = slots.default ? slots.default() : []
  const out = []
  for (const n of nodes) {
    if (Array.isArray(n.children) && typeof n.type === 'symbol') out.push(...n.children)
    else out.push(n)
  }
  return out.filter((n) => n && n.type !== Comment)
})

const index = ref(0)
const animate = ref(true)
const count = computed(() => slides.value.length)
const perView = computed(() => Math.max(1, opt.value.slidesToShow))
const pages = computed(() => Math.max(1, Math.ceil(count.value / perView.value)))

// Slick that nhan doi danh sach slide de cuon vong tron khong bi khoang trong.
// Ban goc render 28 <img> cho 14 slide — dung co che clone nay.
const loop = computed(() => (count.value > perView.value ? [...slides.value, ...slides.value] : slides.value))

const trackStyle = computed(() => ({
  display: 'flex',
  transition: animate.value ? 'transform .5s ease' : 'none',
  transform: `translateX(-${index.value * (100 / perView.value)}%)`,
}))

let timer = null
function next() {
  if (count.value <= perView.value) return
  index.value += opt.value.slidesToScroll
  // di het ban goc thi nhay ve dau (khong animation) — trong mat nguoi dung la lien tuc
  if (index.value >= count.value) {
    setTimeout(() => {
      animate.value = false
      index.value -= count.value
      requestAnimationFrame(() => requestAnimationFrame(() => { animate.value = true }))
    }, 500)
  }
}
function goPage(p) {
  index.value = p * perView.value
}

function prev() {
  if (count.value <= perView.value) return
  index.value -= opt.value.slidesToScroll
  if (index.value < 0) index.value += count.value
}

onMounted(() => {
  if (opt.value.autoplay && count.value > perView.value) {
    timer = setInterval(next, opt.value.autoplaySpeed)
  }
})
onBeforeUnmount(() => timer && clearInterval(timer))
</script>

<template>
  <div class="slick-slider" :class="{ 'slick-dotted': opt.dots }">
    <!-- Mui ten cua slick that: <button> chu bi an (font-size:0), ky tu ← →
         ve bang ::before. Ban goc dung font 'slick'; o day dung ky tu Unicode
         de khong phai keo them font file. -->
    <button
      v-if="opt.arrows && count > perView"
      type="button"
      class="slick-prev slick-arrow"
      aria-label="Previous"
      @click="prev"
    >
      Previous
    </button>
    <div class="slick-list">
      <div class="slick-track" :style="trackStyle">
        <div
          v-for="(s, i) in loop"
          :key="i"
          class="slick-slide"
          :style="{ flex: `0 0 ${100 / perView}%`, maxWidth: `${100 / perView}%` }"
        >
          <component :is="s" />
        </div>
      </div>
    </div>
    <button
      v-if="opt.arrows && count > perView"
      type="button"
      class="slick-next slick-arrow"
      aria-label="Next"
      @click="next"
    >
      Next
    </button>
    <ul v-if="opt.dots" class="slick-dots">
      <li
        v-for="p in pages"
        :key="p"
        :class="{ 'slick-active': Math.floor(index / perView) === p - 1 }"
      >
        <button type="button" @click="goPage(p - 1)">{{ p }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.slick-slider {
  position: relative;
}

.slick-list {
  overflow: hidden;
}

/* Chep dung so do cua slick-carousel goc (do bang Chrome tren trang that):
   button 20x20, top:22px, transform translateY(-10px), chu an, ::before mau
   trang opacity .75, co chu 20px. prev left:-25px / next right:-25px. */
.slick-arrow {
  position: absolute;
  top: 22px;
  width: 20px;
  height: 20px;
  padding: 0;
  transform: translateY(-10px);
  font-size: 0;
  line-height: 0;
  color: transparent;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
}

.slick-arrow::before {
  font-size: 20px;
  line-height: 1;
  color: #fff;
  opacity: 0.75;
}

.slick-arrow:hover::before {
  opacity: 1;
}

.slick-prev {
  left: -25px;
}

.slick-prev::before {
  content: '←';
}

.slick-next {
  right: -25px;
}

.slick-next::before {
  content: '→';
}
</style>
