<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">" />

      <h2>特売情報</h2>

      <p v-if="pending" class="pm-loading">読み込み中…</p>

      <template v-else>
        <p class="pm-lead">
          <span class="pm-badge-demo">DEMO</span>
          価格はデモ用の仮データです。
          <strong>終了日を過ぎた特売は自動でこの一覧から外れます。</strong>
        </p>

        <div v-if="!items.length" class="pm-empty">
          <p>現在実施中の特売はありません。</p>
        </div>

        <template v-else>
          <div class="pm-bar">
            <p class="pm-count">
              実施中 <strong>{{ items.length }}</strong> 件
              <span v-if="endingSoon.length" class="pm-soon-n">
                / まもなく終了 {{ endingSoon.length }} 件
              </span>
            </p>
            <div class="pm-filter">
              <label for="pm-uriba">売場</label>
              <select id="pm-uriba" v-model="uriba" class="pm-select">
                <option value="">すべて</option>
                <option v-for="u in usedUriba" :key="u.key" :value="u.key">{{ u.label }}</option>
              </select>
            </div>
          </div>

          <!-- Nhóm theo quầy, đúng thứ tự lối đi trong siêu thị như 買い物リスト -->
          <section v-for="g in grouped" :key="g.key" class="pm-group">
            <h3 class="pm-group-head">
              <span class="pm-dot" :style="{ background: g.color }" />
              {{ g.label }}<small>／{{ g.desc }}</small>
              <span class="pm-group-n">{{ g.items.length }} 件</span>
            </h3>

            <ul class="pm-list">
              <li v-for="p in g.items" :key="p.id" class="pm-card" :class="{ soon: daysLeft(p) <= 1 }">
                <div class="pm-card-main">
                  <p class="pm-name">{{ p.productName }}</p>
                  <p v-if="p.note" class="pm-note">{{ p.note }}</p>
                  <p class="pm-until">
                    <span class="pm-until-badge" :data-soon="daysLeft(p) <= 1">
                      {{ leftLabel(p) }}
                    </span>
                    {{ fmt(p.endDate) }}まで
                  </p>
                </div>

                <div class="pm-card-price">
                  <span class="pm-badge-demo sm">DEMO</span>
                  <span class="pm-price-old">{{ p.normalPrice }}円</span>
                  <span class="pm-price-new">{{ p.salePrice }}円</span>
                  <span class="pm-off">{{ p.discountPercent }}%OFF</span>
                </div>

                <div class="pm-card-act">
                  <ClientOnly>
                    <button
                      v-if="productOf(p)"
                      type="button"
                      class="pm-btn pm-btn-cart"
                      :class="{ added: cart.has(productOf(p).id) }"
                      @click="cart.add({ ...productOf(p), promo: p })"
                    >
                      {{ cart.has(productOf(p).id) ? '✓ カート済み' : '🛒 カートに入れる' }}
                    </button>
                  </ClientOnly>
                  <NuxtLink class="pm-btn" :to="`/search?q=${encodeURIComponent(p.productName)}`">
                    レシピを探す
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </section>
        </template>
      </template>

      <AppButtonNavigation
        class="d-none-mobile pm-back"
        title="前のページへ戻る"
        is-back
        href="/"
      />
    </main>
  </div>
</template>

<script setup>
/**
 * 特売情報 — trang danh sách khuyến mãi cho NGƯỜI MUA.
 *
 * Khác `/admin/promo` (màn quản lý của người phụ trách): trang này chỉ hiện
 * khuyến mãi đang còn hiệu lực, nhóm theo quầy để tiện đi chợ, và cho thêm
 * thẳng vào giỏ.
 *
 * ⚠️ Giá là số ẢO — mọi chỗ hiển thị đều kèm badge DEMO.
 */
import { computed, ref } from 'vue'
import { URIBA, URIBA_BY_KEY } from '~~/shared/uriba.mjs'
import { useCart } from '~/composables/useCart'

const cart = useCart()
const uriba = ref('')

const breadcrumbItems = [
  { text: 'ホーム', disabled: false, href: '/' },
  { text: '特売情報', disabled: true, href: '/promo' },
]

const { data, pending } = await useAsyncData('promo-page', async () => {
  const [promos, products] = await Promise.all([
    $fetch('/api/promos').catch(() => ({ items: [] })),
    $fetch('/api/products').catch(() => ({ items: [] })),
  ])
  return { promos: promos.items || [], products: products.items || [] }
})

const items = computed(() => data.value?.promos || [])

/** Tra sản phẩm tương ứng để bấm thêm vào giỏ được */
const productByName = computed(
  () => new Map((data.value?.products || []).map((p) => [p.name, p]))
)
const productOf = (promo) => productByName.value.get(promo.productName) || null

const DAY = 86400000
const daysLeft = (p) => Math.ceil((new Date(p.endDate).getTime() - Date.now()) / DAY)
const endingSoon = computed(() => items.value.filter((p) => daysLeft(p) <= 1))

function leftLabel(p) {
  const d = daysLeft(p)
  if (d <= 0) return '本日最終日'
  if (d === 1) return 'あと1日'
  return `あと${d}日`
}

function fmt(iso) {
  const d = new Date(iso)
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

/** Các quầy thực sự có hàng khuyến mãi — không liệt kê quầy rỗng trong bộ lọc */
const usedUriba = computed(() => {
  const keys = new Set(items.value.map((p) => p.uriba))
  return URIBA.filter((u) => keys.has(u.key))
})

const grouped = computed(() => {
  const list = uriba.value ? items.value.filter((p) => p.uriba === uriba.value) : items.value
  const map = new Map()
  for (const p of list) {
    const k = p.uriba || 'grocery'
    if (!map.has(k)) map.set(k, [])
    map.get(k).push(p)
  }
  // Theo đúng thứ tự lối đi trong siêu thị, giống 買い物リスト
  return URIBA.filter((u) => map.has(u.key)).map((u) => ({
    ...u,
    items: map.get(u.key).sort((a, b) => b.discountPercent - a.discountPercent),
  }))
})

useHead({ title: '特売情報｜遠鉄ストア' })
</script>

<style scoped lang="scss">
$brown: #331e0e;
$cream: #f3e7cd;
$red: #c7273b;

.pm-loading,
.pm-empty {
  padding: 40px 0;
  text-align: center;
  color: #666;
}

.pm-lead {
  font-size: 13px;
  line-height: 1.7;
  margin-bottom: 16px;
}

.pm-badge-demo {
  display: inline-block;
  background: $red;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 3px;
  padding: 1px 5px;
  margin-right: 6px;

  &.sm {
    margin-right: 4px;
  }
}

.pm-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  background: $cream;
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 18px;
}

.pm-count {
  margin: 0;
  font-size: 14px;

  strong {
    font-size: 20px;
    color: $red;
  }
}

.pm-soon-n {
  font-size: 12px;
  color: #a3541f;
}

.pm-filter {
  display: flex;
  align-items: center;
  gap: 6px;

  label {
    font-size: 12px;
    font-weight: bold;
    color: $brown;
  }
}

.pm-select {
  height: 34px;
  min-width: 140px;
  padding: 0 8px;
  border: 1px solid #cbb9a0;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
}

.pm-group {
  margin-bottom: 24px;
}

.pm-group-head {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: $brown;
  border-bottom: 2px solid $cream;
  padding-bottom: 6px;
  margin-bottom: 10px;

  small {
    font-weight: normal;
    font-size: 11px;
    color: #888;
  }
}

.pm-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex: 0 0 auto;
}

.pm-group-n {
  margin-left: auto;
  font-size: 12px;
  color: #888;
}

.pm-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
}

.pm-card {
  border: 1px solid #e3d9c6;
  border-radius: 6px;
  padding: 12px 14px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* Sắp hết hạn thì viền cam để lọt vào mắt ngay */
  &.soon {
    border-color: #e6a23c;
    background: #fffaf0;
  }
}

.pm-card-main {
  min-width: 0;
}

.pm-name {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: $brown;
}

.pm-note {
  margin: 3px 0 0;
  font-size: 11px;
  color: #777;
}

.pm-until {
  margin: 5px 0 0;
  font-size: 11px;
  color: #777;
}

.pm-until-badge {
  display: inline-block;
  background: $cream;
  color: $brown;
  border-radius: 3px;
  padding: 1px 6px;
  font-weight: bold;
  margin-right: 5px;

  &[data-soon='true'] {
    background: #e6a23c;
    color: #fff;
  }
}

.pm-card-price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
}

.pm-price-old {
  text-decoration: line-through;
  color: #999;
  font-size: 12px;
}

.pm-price-new {
  font-size: 22px;
  font-weight: bold;
  color: $red;
}

.pm-off {
  background: $red;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  border-radius: 3px;
  padding: 1px 6px;
}

.pm-card-act {
  display: flex;
  gap: 8px;
  margin-top: auto;
}

.pm-btn {
  flex: 1;
  height: 34px;
  line-height: 32px;
  border: 1px solid $brown;
  border-radius: 4px;
  background: #fff;
  color: $brown;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: $cream;
  }
}

.pm-btn-cart {
  background: $brown;
  color: #fff;

  &:hover {
    background: #4a2e17;
  }

  &.added {
    background: #fff;
    color: $brown;
  }
}

.pm-back {
  margin-top: 20px;
}

@media only screen and (max-width: 767px) {
  .pm-list {
    grid-template-columns: 1fr;
  }
}
</style>
