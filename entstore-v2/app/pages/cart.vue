<template>
  <!-- Ô tìm kiếm đã do layout dựng sẵn cho mọi trang, ở đây không đặt lại -->
  <div>
    <div class="wrap-content">
      <main>
        <VxBreadcrumbs :items="breadcrumbItems" divider=">" />

        <h2>カート</h2>

        <ClientOnly>
          <div v-if="!cart.items.value.length" class="ct-empty">
            <p>カートは空です。</p>
            <p class="ct-hint">商品一覧から「🛒 カートに入れる」で追加できます。</p>
            <p class="ct-hint">
              お店で買う場合は
              <NuxtLink to="/list">買い物リスト</NuxtLink>
              が便利です（売場ごとに並びます）。
            </p>
            <NuxtLink class="ct-link" to="/products">商品一覧を見る ›</NuxtLink>
          </div>

          <template v-else>
            <p class="ct-lead">
              <span class="ct-badge-demo">DEMO</span>
              価格は実際の販売価格ではありません。デモ用の仮データです。
            </p>

            <ul class="ct-list">
              <li v-for="it in cart.items.value" :key="it.id" class="ct-item">
                <div class="ct-main">
                  <p class="ct-name">
                    {{ it.name }}
                    <span v-if="it.salePrice" class="ct-tag-sale">🔥特売</span>
                  </p>
                  <p class="ct-meta">
                    <span v-if="it.uribaLabel" class="ct-uriba">{{ it.uribaLabel }}</span>
                    <span v-if="it.unit" class="ct-unit">{{ it.unit }}</span>
                  </p>
                </div>

                <div class="ct-qty">
                  <button type="button" aria-label="減らす" @click="cart.setQty(it.id, it.qty - 1)">
                    −
                  </button>
                  <span class="ct-qty-n">{{ it.qty }}</span>
                  <button type="button" aria-label="増やす" @click="cart.setQty(it.id, it.qty + 1)">
                    ＋
                  </button>
                </div>

                <div class="ct-price">
                  <span v-if="it.salePrice" class="ct-price-old">{{ it.taxIncluded }}円</span>
                  <span class="ct-price-new">
                    {{ (cart.unitPrice(it) * it.qty).toLocaleString() }}円
                  </span>
                </div>

                <button type="button" class="ct-remove" aria-label="削除" @click="cart.remove(it.id)">
                  ✕
                </button>
              </li>
            </ul>

            <div class="ct-summary">
              <p class="ct-sum-row">
                <span>小計（{{ cart.count.value }} 点）</span>
                <strong>{{ cart.subtotal.value.toLocaleString() }}円</strong>
              </p>
              <p v-if="cart.saved.value > 0" class="ct-sum-row ct-sum-saved">
                <span>特売による割引</span>
                <strong>−{{ cart.saved.value.toLocaleString() }}円</strong>
              </p>
            </div>

            <!--
              Điểm bàn giao sang trang EC thật. Nói rõ giới hạn ngay trên màn hình
              thay vì để người xem tự phát hiện lúc thuyết trình.
            -->
            <div class="ct-checkout">
              <a :href="EC_CART_URL" target="_blank" rel="noopener" class="ct-buy">
                ご購入手続きへ（遠鉄ストアネット通販）
              </a>
              <p class="ct-note">
                ご購入は既存のネットスーパー
                <a :href="EC_HOME_URL" target="_blank" rel="noopener">shop.entstore.co.jp</a>
                で完了します。
              </p>
              <p class="ct-note ct-note-warn">
                ※ デモ版のため、カートの中身は引き継がれません。引き継ぐには
                ネットスーパー側のカート連携APIが必要です。
              </p>
            </div>

            <div class="ct-actions">
              <NuxtLink class="ct-continue" to="/products">買い物を続ける</NuxtLink>
              <button type="button" class="ct-clear" @click="cart.clear()">カートを空にする</button>
            </div>
          </template>
        </ClientOnly>

        <AppButtonNavigation
          class="d-none-mobile ct-back"
          title="前のページへ戻る"
          is-back
          href="/"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
/**
 * カート — dừng đúng ở bước "đã thêm vào giỏ", theo đúng yêu cầu.
 *
 * 遠鉄ストア đã có trang bán hàng hoàn chỉnh nên bản này không làm lại thanh
 * toán; nút mua hàng mở thẳng giỏ hàng của trang đó.
 *
 * ⚠️ Khác tên miền nên trình duyệt không chia sẻ được giỏ hàng — màn hình nói
 * rõ điều này, và phần đó cũng được ghi trong slide thuyết trình.
 */
import { computed } from 'vue'
import { useCart, EC_CART_URL } from '~/composables/useCart'

const EC_HOME_URL = 'https://shop.entstore.co.jp/'
const cart = useCart()

const breadcrumbItems = computed(() => [
  { text: 'ホーム', disabled: false, href: '/' },
  { text: 'カート', disabled: true, href: '/cart' },
])

useHead({ title: 'カート｜遠鉄ストア' })
</script>

<style scoped lang="scss">
@use 'sass:color';

$brown: #331e0e;
$cream: #f3e7cd;
$red: #c7273b;

.ct-empty {
  padding: 40px 0;
  text-align: center;
  color: #555;
}

.ct-hint {
  font-size: 13px;
  color: #777;
  margin-top: 6px;
}

.ct-link,
.ct-continue {
  display: inline-block;
  margin-top: 14px;
  color: #087295;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.ct-lead {
  font-size: 13px;
  margin-bottom: 14px;
}

.ct-badge-demo {
  display: inline-block;
  background: $red;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 3px;
  padding: 1px 5px;
  margin-right: 6px;
}

.ct-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  border-top: 1px solid #e3d9c6;
}

.ct-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 4px;
  border-bottom: 1px solid #e3d9c6;
}

.ct-main {
  flex: 1;
  min-width: 0;
}

.ct-name {
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  color: $brown;
}

.ct-tag-sale {
  margin-left: 6px;
  font-size: 11px;
  color: $red;
}

.ct-meta {
  margin: 4px 0 0;
  display: flex;
  gap: 8px;
  font-size: 11px;
  color: #666;
}

.ct-uriba {
  background: $cream;
  border-radius: 3px;
  padding: 1px 6px;
  color: $brown;
}

.ct-qty {
  display: flex;
  align-items: center;
  gap: 2px;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid #cbb9a0;
    background: #fff;
    font-size: 15px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background: $cream;
    }
  }
}

.ct-qty-n {
  min-width: 34px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
}

.ct-price {
  min-width: 110px;
  text-align: right;
}

.ct-price-old {
  display: block;
  font-size: 11px;
  color: #999;
  text-decoration: line-through;
}

.ct-price-new {
  font-size: 17px;
  font-weight: bold;
  color: $red;
}

.ct-remove {
  background: none;
  border: none;
  color: #999;
  font-size: 15px;
  cursor: pointer;
  padding: 4px 6px;

  &:hover {
    color: $red;
  }
}

.ct-summary {
  background: $cream;
  border-radius: 6px;
  padding: 14px 18px;
  margin-bottom: 20px;
}

.ct-sum-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0 0 6px;
  font-size: 15px;

  strong {
    font-size: 20px;
    color: $brown;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.ct-sum-saved strong {
  color: $red;
  font-size: 16px;
}

.ct-checkout {
  text-align: center;
  margin-bottom: 24px;
}

.ct-buy {
  display: inline-block;
  background: $red;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  padding: 15px 34px;

  &:hover {
    background: color.adjust($red, $lightness: -6%);
  }
}

.ct-note {
  font-size: 12px;
  color: #666;
  margin: 10px 0 0;
  line-height: 1.6;

  a {
    color: #087295;
  }
}

.ct-note-warn {
  color: #a3541f;
}

.ct-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.ct-clear {
  background: none;
  border: none;
  color: #999;
  font-size: 13px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: $red;
  }
}

.ct-back {
  margin-top: 10px;
}

@media only screen and (max-width: 767px) {
  .ct-item {
    flex-wrap: wrap;
    gap: 8px;
  }

  .ct-main {
    flex-basis: 100%;
  }

  .ct-price {
    min-width: 0;
    flex: 1;
  }

  .ct-buy {
    display: block;
    padding: 15px 12px;
    font-size: 15px;
  }
}
</style>
