<script setup>
/**
 * Ô 「なんでも検索」 — slide 3 và 5 của đề xuất.
 *
 * Gồm: ô nhập có placeholder gợi ý rõ ràng, danh sách gợi ý khi gõ,
 * 人気ワード bấm một chạm, và banner 季節のおすすめ.
 *
 * Giao diện dùng đúng bảng màu của site gốc (#331e0e nâu, #f3e7cd kem,
 * #c7273b đỏ) để không lạc lõng khi chèn vào trang có sẵn.
 */
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useCart } from '~/composables/useCart'

const cart = useCart()

const props = defineProps({
  // Trang chủ hiển thị to, các trang khác hiển thị gọn
  compact: { type: Boolean, default: false },
  initial: { type: String, default: '' },
})

const router = useRouter()
const q = ref(props.initial)
const suggestions = ref([])
const open = ref(false)
const activeIndex = ref(-1)
const box = ref(null)

/** 人気ワード — slide 5: "人気ワードもワンタップ" */
const popularWords = ['うなぎ', 'カレー', '牛肉', 'トマト', '弁当', '店舗', 'チラシ']

/** Banner 季節のおすすめ — slide 5 nêu ví dụ 土用の丑の日 */
const season = getSeasonBanner()

function getSeasonBanner() {
  const m = new Date().getMonth() + 1
  if (m >= 7 && m <= 8) {
    return { emoji: '🌞', title: '土用の丑の日', sub: 'うなぎで夏を乗り切ろう', q: 'うなぎ' }
  }
  if (m >= 9 && m <= 11) {
    return { emoji: '🍁', title: '秋の味覚', sub: 'さんま・きのこ・栗', q: 'きのこ' }
  }
  if (m === 12 || m <= 2) {
    return { emoji: '🍲', title: 'あったか鍋特集', sub: '白菜・鶏肉・豆腐', q: '鍋' }
  }
  return { emoji: '🌸', title: '春の新生活', sub: 'お弁当・作りおき', q: '弁当' }
}

let timer = null
watch(q, (v) => {
  clearTimeout(timer)
  activeIndex.value = -1
  if (!v || v.trim().length < 1) {
    suggestions.value = []
    open.value = false
    return
  }
  // Chờ 180ms sau khi ngừng gõ mới gọi API, tránh gọi mỗi phím
  timer = setTimeout(async () => {
    try {
      const r = await $fetch('/api/suggest', { params: { q: v } })
      suggestions.value = r.items || []
      open.value = suggestions.value.length > 0
    } catch {
      suggestions.value = []
    }
  }, 180)
})

function go(term) {
  const t = (term ?? q.value).trim()
  if (!t) return
  open.value = false
  router.push({ path: '/search', query: { q: t } })
}

function onEnter() {
  if (activeIndex.value >= 0 && suggestions.value[activeIndex.value]) {
    const s = suggestions.value[activeIndex.value]
    open.value = false
    router.push(s.route)
    return
  }
  go()
}

function move(step) {
  if (!open.value || !suggestions.value.length) return
  const n = suggestions.value.length
  activeIndex.value = (activeIndex.value + step + n + 1) % (n + 1) - 1
}

function onClickOutside(e) {
  if (box.value && !box.value.contains(e.target)) open.value = false
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  clearTimeout(timer)
})
</script>

<template>
  <div ref="box" class="smart-search" :class="{ compact }">
    <div class="ss-inner">
      <div class="ss-box">
        <input
          v-model="q"
          type="search"
          class="ss-input"
          placeholder="商品名・料理名・食材・店舗名を入力（例：うなぎ、カレー、上島店…）"
          aria-label="サイト内検索"
          @keydown.enter.prevent="onEnter"
          @keydown.down.prevent="move(1)"
          @keydown.up.prevent="move(-1)"
          @keydown.esc="open = false"
          @focus="q && suggestions.length && (open = true)"
        />
        <button type="button" class="ss-btn" @click="go()">検索</button>

        <ul v-if="open" class="ss-suggest">
          <li
            v-for="(s, i) in suggestions"
            :key="s.route + i"
            :class="{ active: i === activeIndex }"
            @mousedown.prevent="router.push(s.route)"
            @mouseenter="activeIndex = i"
          >
            <span class="ss-tag" :data-group="s.group">{{ s.label }}</span>
            <span class="ss-title">{{ s.title }}</span>
          </li>
        </ul>
      </div>

      <!--
        Lối vào 商品一覧 / 買い物リスト / カート. Không có mấy link này thì
        các trang đó không có đường nào bấm tới ngoài gõ thẳng URL.
        Số trên nút giỏ hàng chỉ hiện khi đã có hàng, nên không phá bố cục cũ.
      -->
      <nav class="ss-links">
        <NuxtLink to="/promo" class="ss-link ss-link-promo">🔥 特売情報</NuxtLink>
        <NuxtLink to="/products" class="ss-link">🧺 商品一覧</NuxtLink>
        <NuxtLink to="/list" class="ss-link">📝 買い物リスト</NuxtLink>
        <ClientOnly>
          <NuxtLink to="/cart" class="ss-link ss-link-cart">
            🛒 カート
            <span v-if="cart.count.value > 0" class="ss-cart-n">{{ cart.count.value }}</span>
          </NuxtLink>
        </ClientOnly>
      </nav>

      <div v-if="!compact" class="ss-extra">
        <div class="ss-popular">
          <span class="ss-popular-label">人気ワード</span>
          <button v-for="w in popularWords" :key="w" type="button" @click="go(w)">{{ w }}</button>
        </div>

        <button type="button" class="ss-season" @click="go(season.q)">
          <span class="ss-season-emoji">{{ season.emoji }}</span>
          <span class="ss-season-text">
            <strong>季節のおすすめ：{{ season.title }}</strong>
            <small>{{ season.sub }}</small>
          </span>
          <span class="ss-season-go">見る ›</span>
        </button>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// darken()/lighten() bi bo tu Dart Sass 3.0 -> dung color.adjust().
// color.adjust($lightness:) cho ra ĐÚNG mau cu, khac color.scale() (thang ti le).
@use 'sass:color';

/* Bảng màu lấy từ site gốc để phần thêm vào không bị lạc tông */
$brown: #331e0e;
$cream: #f3e7cd;
$red: #c7273b;

.smart-search {
  background: $cream;
  padding: 24px 0 20px;
  border-bottom: 1px solid color.adjust($cream, $lightness: -8%);

  &.compact {
    padding: 12px 0;
  }
}

.ss-inner {
  width: 980px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media only screen and (max-width: 1023px) {
    width: 100%;
  }
}

.ss-box {
  display: flex;
  position: relative;
}

.ss-input {
  flex: 1 1 auto;
  height: 52px;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid $brown;
  border-right: none;
  border-radius: 6px 0 0 6px;
  background: #fff;
  color: #323232;
  outline: none;

  &::placeholder {
    color: #9b8f84;
    font-size: 14px;
  }

  @media only screen and (max-width: 767px) {
    height: 46px;
    font-size: 15px;

    &::placeholder {
      font-size: 12px;
    }
  }
}

.ss-btn {
  flex: 0 0 auto;
  width: 110px;
  height: 52px;
  border: 2px solid $brown;
  border-radius: 0 6px 6px 0;
  background: $brown;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: color.adjust($brown, $lightness: 8%);
  }

  @media only screen and (max-width: 767px) {
    width: 76px;
    height: 46px;
    font-size: 14px;
  }
}

.ss-suggest {
  position: absolute;
  top: 54px;
  left: 0;
  right: 0;
  z-index: 20;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.16);
  max-height: 340px;
  overflow-y: auto;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;

    &:hover,
    &.active {
      background: $cream;
    }
  }
}

.ss-tag {
  flex: 0 0 auto;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  color: #fff;
  background: #888;

  &[data-group='recipe'] { background: #47800d; }
  &[data-group='shop'] { background: #0d5980; }
  &[data-group='article'] { background: #800d0d; }
  &[data-group='page'] { background: #667080; }
  &[data-group='feature'] { background: #7e57c2; }
  &[data-group='promo'] { background: $red; }
  &[data-group='product'] { background: #a68c59; }
}

.ss-title {
  font-size: 14px;
  color: #323232;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ss-extra {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 12px;

  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
}

.ss-popular {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  flex: 1 1 auto;

  button {
    font-size: 13px;
    padding: 4px 12px;
    border: 1px solid #b9a88f;
    border-radius: 14px;
    background: #fff;
    color: $brown;
    cursor: pointer;

    &:hover {
      background: $brown;
      color: #fff;
    }
  }
}

.ss-popular-label {
  font-size: 13px;
  color: #6b5a48;
  margin-right: 2px;
}

.ss-season {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, $red, #e05a2b);
  color: #fff;
  cursor: pointer;
  text-align: left;

  &:hover {
    opacity: 0.92;
  }
}

.ss-season-emoji {
  font-size: 22px;
}

.ss-season-text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;

  strong { font-size: 13px; }
  small { font-size: 11px; opacity: 0.9; }
}

.ss-season-go {
  font-size: 12px;
  white-space: nowrap;
}

/* --- Lối vào 商品一覧 / 買い物リスト / カート --- */
.ss-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.ss-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  border: 1px solid #cbb9a0;
  border-radius: 16px;
  padding: 5px 14px;
  font-size: 12px;
  color: $brown;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: color.adjust($cream, $lightness: 4%);
    border-color: $brown;
  }
}

/* 特売 là thứ khách quan tâm nhất nên tô đỏ cho nổi hơn các link còn lại */
.ss-link-promo {
  border-color: $red;
  color: $red;
  font-weight: bold;

  &:hover {
    background: #fff2f3;
    border-color: $red;
  }
}

.ss-cart-n {
  display: inline-block;
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background: $red;
  color: #fff;
  border-radius: 9px;
  font-size: 11px;
  font-weight: bold;
  padding: 0 5px;
}

@media only screen and (max-width: 767px) {
  .ss-links {
    gap: 6px;
  }

  .ss-link {
    padding: 5px 10px;
    font-size: 11px;
  }
}
</style>
