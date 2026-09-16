<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">" />

      <h2>買い物リスト</h2>

      <ClientOnly>
        <div v-if="!items.length" class="sl-empty">
          <p>買い物リストは空です。</p>
          <p class="sl-hint">レシピページの「🏪 お店で買う」から追加できます。</p>
          <p class="sl-hint">
            ネットでご購入の場合は
            <NuxtLink to="/cart">カート</NuxtLink>
            をご利用ください。
          </p>
          <a class="sl-link" href="/service/recipe/">レシピ集を見る ›</a>
        </div>

        <template v-else>
          <div class="sl-bar">
            <p class="sl-count">
              全 <strong>{{ items.length }}</strong> 品目
              <span class="sl-badge-demo">価格はDEMO</span>
            </p>
            <div class="sl-bar-actions">
              <button type="button" class="sl-btn" @click="mapOpen = true">🗺 売場マップ</button>
              <button type="button" class="sl-btn sl-btn-clear" @click="clear">すべて削除</button>
            </div>
          </div>

          <!-- Nhóm theo quầy để đi một vòng là mua đủ -->
          <div v-for="g in grouped" :key="g.key" class="sl-group">
            <p class="sl-group-head">
              <span class="sl-dot" :style="{ background: g.color }" />
              {{ g.label }}<small>／{{ g.desc }}</small>
              <span class="sl-group-n">{{ g.items.length }} 品</span>
            </p>
            <ul class="sl-list">
              <li v-for="it in g.items" :key="it.name" :class="{ done: it.checked }">
                <label class="sl-check">
                  <input type="checkbox" :checked="it.checked" @change="toggle(it.name)" />
                  <span class="sl-name">{{ it.name }}</span>
                </label>
                <span v-if="it.amount" class="sl-amt">{{ it.amount }}</span>
                <span v-if="it.from" class="sl-from">（{{ it.from }}）</span>
                <span class="sl-qty">
                  <button type="button" @click="setQty(it.name, it.qty - 1)">−</button>
                  <span>{{ it.qty }}</span>
                  <button type="button" @click="setQty(it.name, it.qty + 1)">＋</button>
                </span>
                <span v-if="priceOf(it.name)" class="sl-price">
                  <span class="sl-badge-demo sm">DEMO</span>
                  {{ priceOf(it.name).price * it.qty }}円
                </span>
                <button type="button" class="sl-del" @click="remove(it.name)">×</button>
              </li>
            </ul>
          </div>

          <p class="sl-total">
            <span class="sl-badge-demo">DEMO</span>
            合計（税抜）：<strong>{{ total }}</strong> 円
            <small>※ 価格はデモ用の仮データです。実際の販売価格とは異なります。</small>
          </p>
        </template>

        <template #fallback>
          <p class="sl-hint">読み込み中…</p>
        </template>
      </ClientOnly>

      <AppButtonNavigation class="d-none-mobile sl-back" title="前のページへ戻る" is-back href="/" />
    </main>

    <UribaMapModal v-model="mapOpen" :highlight="uribaKeys" title="売場マップ（買い物リスト連動）" />
  </div>
</template>

<script setup>
/**
 * Trang 買い物リスト — slide 6 và 7.
 *
 * Nguyên liệu nhóm theo 売場 để khách đi một vòng siêu thị là mua đủ,
 * và mở được sơ đồ quầy tự highlight.
 *
 * ⚠️ Giá là số ẢO, luôn kèm badge 「DEMO」.
 */
import { ref, computed } from 'vue'
import { URIBA_BY_KEY, URIBA } from '~~/shared/uriba.mjs'
import { useShoppingList } from '~/composables/useShoppingList'

const { items, uribaKeys, remove, setQty, toggle, clear } = useShoppingList()
const mapOpen = ref(false)

const breadcrumbItems = [
  { text: 'ホーム', disabled: false, href: '/' },
  { text: '買い物リスト', disabled: true, href: '/list' },
]

// Giá DEMO tra từ API (chỉ gọi 1 lần, dùng chung cho cả trang)
const { data: productData } = await useAsyncData('demo-products', () =>
  $fetch('/api/products').catch(() => ({ items: [] }))
)
const priceMap = computed(
  () => new Map((productData.value?.items || []).map((p) => [p.name, p]))
)
function priceOf(name) {
  return priceMap.value.get(name) || null
}

const grouped = computed(() => {
  const map = new Map()
  for (const it of items.value) {
    const k = it.uriba || 'grocery'
    if (!map.has(k)) map.set(k, [])
    map.get(k).push(it)
  }
  return URIBA.filter((u) => map.has(u.key)).map((u) => ({ ...u, items: map.get(u.key) }))
})

const total = computed(() =>
  items.value.reduce((sum, it) => {
    const p = priceOf(it.name)
    return sum + (p ? p.price * it.qty : 0)
  }, 0)
)

useHead({ title: '買い物リスト｜遠鉄ストア' })
</script>

<style scoped lang="scss">
.sl-empty {
  padding: 40px 12px;
  text-align: center;
  background: #faf7f1;
  border-radius: 6px;
  margin: 0 12px;
}

.sl-hint {
  font-size: 13px;
  color: #888;
  padding: 12px;
}

.sl-link {
  color: #087295;
  text-decoration: underline;
  font-size: 14px;
}

.sl-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 12px 14px;
}

.sl-count {
  margin: 0;
  font-size: 14px;

  strong { color: #c7273b; font-size: 18px; }
}

.sl-bar-actions { display: flex; gap: 8px; }

.sl-btn {
  padding: 8px 14px;
  font-size: 13px;
  border: 2px solid #331e0e;
  border-radius: 18px;
  background: #fff;
  color: #331e0e;
  cursor: pointer;

  &:hover { background: #331e0e; color: #fff; }
}

.sl-btn-clear {
  border-color: #b3b3b3;
  color: #777;

  &:hover { background: #999; border-color: #999; }
}

.sl-group { margin-bottom: 18px; padding: 0 12px; }

.sl-group-head {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: bold;

  small { font-weight: normal; color: #999; font-size: 11px; }
}

.sl-group-n {
  margin-left: auto;
  font-size: 11px;
  color: #888;
  font-weight: normal;
}

.sl-dot { width: 12px; height: 12px; border-radius: 3px; }

.sl-list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    padding: 8px 4px;
    border-bottom: 1px dotted #ddd;
    font-size: 14px;

    &.done {
      opacity: 0.45;
      .sl-name { text-decoration: line-through; }
    }
  }
}

.sl-check {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex: 1 1 auto;
  min-width: 120px;
}

.sl-amt { font-size: 12px; color: #777; }
.sl-from { font-size: 11px; color: #aaa; }

.sl-qty {
  display: flex;
  align-items: center;
  gap: 6px;

  button {
    width: 26px;
    height: 26px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;

    &:hover { background: #f3e7cd; }
  }

  span { min-width: 20px; text-align: center; font-size: 13px; }
}

.sl-price {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: #331e0e;
  font-weight: bold;
}

.sl-del {
  border: none;
  background: transparent;
  color: #bbb;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;

  &:hover { color: #c7273b; }
}

/* Badge DEMO bắt buộc ở mọi số liệu ảo */
.sl-badge-demo {
  font-size: 10px;
  font-weight: bold;
  padding: 2px 7px;
  border-radius: 3px;
  background: #e53935;
  color: #fff;
  letter-spacing: 0.5px;

  &.sm { font-size: 9px; padding: 1px 5px; }
}

.sl-total {
  margin: 20px 12px 0;
  padding: 14px;
  background: #faf7f1;
  border-radius: 6px;
  font-size: 15px;

  strong { font-size: 22px; color: #c7273b; }
  small { display: block; margin-top: 6px; font-size: 11px; color: #999; }
}

.sl-back { margin-top: 40px; }
</style>
