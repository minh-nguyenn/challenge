<template>
  <!--
    Thanh giỏ hàng nổi ở đáy màn hình. Chỉ hiện khi trong giỏ có hàng nên
    không che mất giao diện gốc — đây là điểm quan trọng vì bản clone phải
    giữ đúng pixel với site thật khi chưa dùng tính năng mới.
  -->
  <ClientOnly>
    <transition name="cb">
      <div v-if="visible" ref="bar" class="cb">
        <div class="cb-inner">
          <p class="cb-info">
            <span class="cb-icon">🛒</span>
            <span class="cb-count">{{ cart.count.value }}</span> 点
            <span class="cb-badge-demo">DEMO</span>
            <span class="cb-total">{{ cart.subtotal.value.toLocaleString() }}円</span>
            <span v-if="cart.saved.value > 0" class="cb-saved">
              特売で {{ cart.saved.value.toLocaleString() }}円 お得
            </span>
          </p>

          <div class="cb-actions">
            <NuxtLink to="/cart" class="cb-view">カートを見る</NuxtLink>
            <button type="button" class="cb-close" aria-label="閉じる" @click="hidden = true">
              ✕
            </button>
          </div>
        </div>
      </div>
    </transition>
  </ClientOnly>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCart } from '~/composables/useCart'

const cart = useCart()
const route = useRoute()
const hidden = ref(false)
const bar = ref(null)

// Ở ngay trang giỏ hàng thì thanh này thừa, mà lại che mất nút 「ご購入手続きへ」
const onCartPage = computed(() => route.path === '/cart')

const visible = computed(() => cart.count.value > 0 && !hidden.value && !onCartPage.value)

// Thêm hàng mới thì hiện lại, kể cả khi người dùng vừa đóng thanh này
watch(
  () => cart.count.value,
  () => {
    hidden.value = false
  }
)

/**
 * Báo chiều cao của thanh này ra biến CSS chung `--cart-bar-h`.
 *
 * Thanh giỏ hàng nằm đè lên đáy màn hình, đúng chỗ nút chatbot đang đứng.
 * Nút chatbot đọc biến này để tự nâng lên, thay vì hai bên phải đoán chiều cao
 * của nhau — đo thật nên nội dung có xuống dòng trên điện thoại vẫn đúng.
 */
function syncHeight() {
  if (!import.meta.client) return
  const root = document.documentElement
  if (!visible.value || !bar.value) {
    root.style.removeProperty('--cart-bar-h')
    return
  }
  root.style.setProperty('--cart-bar-h', `${bar.value.offsetHeight}px`)
}

watch(visible, () => nextTick(syncHeight))
onMounted(() => {
  nextTick(syncHeight)
  window.addEventListener('resize', syncHeight)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', syncHeight)
  if (import.meta.client) document.documentElement.style.removeProperty('--cart-bar-h')
})
</script>

<style scoped lang="scss">
$brown: #331e0e;
$red: #c7273b;

.cb {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background: rgba(51, 30, 14, 0.96);
  color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.25);
}

.cb-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.cb-info {
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
}

.cb-icon {
  font-size: 18px;
}

.cb-count {
  font-size: 20px;
  font-weight: bold;
}

.cb-total {
  font-size: 18px;
  font-weight: bold;
}

.cb-badge-demo {
  background: $red;
  font-size: 10px;
  font-weight: bold;
  border-radius: 3px;
  padding: 1px 5px;
}

.cb-saved {
  font-size: 12px;
  color: #ffd54f;
}

.cb-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cb-view {
  display: inline-block;
  background: #fff;
  color: $brown;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  border-radius: 4px;
  padding: 9px 18px;
  white-space: nowrap;

  &:hover {
    background: #f3e7cd;
  }
}

.cb-close {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.7;
  padding: 4px 6px;

  &:hover {
    opacity: 1;
  }
}

.cb-enter-active,
.cb-leave-active {
  transition: transform 0.18s ease;
}

.cb-enter-from,
.cb-leave-to {
  transform: translateY(100%);
}

@media only screen and (max-width: 767px) {
  .cb-inner {
    padding: 8px 12px;
  }

  .cb-info {
    font-size: 12px;
    gap: 6px;
  }

  .cb-view {
    padding: 8px 12px;
    font-size: 13px;
  }
}
</style>
