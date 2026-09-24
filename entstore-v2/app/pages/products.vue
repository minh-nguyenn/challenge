<template>
  <!-- Ô tìm kiếm đã do layout dựng sẵn cho mọi trang, ở đây không đặt lại -->
  <div>
    <div class="wrap-content">
      <main>
        <VxBreadcrumbs :items="breadcrumbItems" divider=">" />

        <h2>商品一覧</h2>

        <p class="pl-lead">
          <span class="pl-badge-demo">DEMO</span>
          価格・在庫はデモ用の仮データです。ご購入は
          <a :href="EC_CART_URL" target="_blank" rel="noopener">遠鉄ストアネット通販</a>
          をご利用ください。
        </p>

        <!-- Bộ lọc: quầy 売場 + khoảng giá + sắp xếp -->
        <div class="pl-filters">
          <div class="pl-filter">
            <label for="pl-uriba">売場</label>
            <select id="pl-uriba" v-model="uriba" class="pl-select">
              <option value="">すべて</option>
              <option v-for="u in URIBA" :key="u.key" :value="u.key">{{ u.label }}</option>
            </select>
          </div>

          <div class="pl-filter">
            <label for="pl-max">価格</label>
            <select id="pl-max" v-model="maxPrice" class="pl-select">
              <option value="">指定なし</option>
              <option value="200">200円以内</option>
              <option value="500">500円以内</option>
              <option value="1000">1000円以内</option>
              <option value="2000">2000円以内</option>
            </select>
          </div>

          <div class="pl-filter">
            <label for="pl-sort">並び順</label>
            <select id="pl-sort" v-model="sort" class="pl-select">
              <option value="">おすすめ順</option>
              <option value="price-asc">価格が安い順</option>
              <option value="price-desc">価格が高い順</option>
              <option value="name">名前順</option>
            </select>
          </div>

          <button v-if="isFiltered" type="button" class="pl-reset" @click="reset">
            条件をクリア
          </button>
        </div>

        <p v-if="pending" class="pl-loading">読み込み中…</p>

        <template v-else>
          <p class="pl-count">
            全 <strong>{{ data?.total || 0 }}</strong> 商品
            <span v-if="promoCount" class="pl-count-promo">うち特売 {{ promoCount }} 件</span>
          </p>

          <p v-if="!data?.total" class="pl-empty">
            条件に合う商品が見つかりませんでした。条件を変えてお試しください。
          </p>

          <ul v-else class="pl-grid">
            <li v-for="p in data.items" :key="p.id" class="pl-card">
              <p class="pl-name">
                {{ p.name }}
                <span v-if="p.promo" class="pl-tag-sale">🔥特売中</span>
              </p>

              <p class="pl-meta">
                <span class="pl-uriba" :style="{ background: uribaColor(p.uriba) }">
                  {{ p.uribaLabel }}
                </span>
                <span class="pl-unit">{{ p.unit }}</span>
                <span class="pl-stock" :class="{ low: p.stock !== '在庫あり' }">{{ p.stock }}</span>
              </p>

              <p class="pl-price">
                <span class="pl-badge-demo">DEMO</span>
                <template v-if="p.promo">
                  <span class="pl-price-old">{{ p.taxIncluded }}円</span>
                  <span class="pl-price-new">{{ p.promo.salePrice }}円</span>
                  <span class="pl-off">{{ p.promo.discountPercent }}%OFF</span>
                </template>
                <template v-else>
                  <span class="pl-price-new">{{ p.taxIncluded }}円</span>
                  <span class="pl-tax">(税込)</span>
                </template>
              </p>

              <!--
                Hai lối đi từ một sản phẩm: bỏ vào giỏ, hoặc xem nấu được món gì.
                「レシピを探す」 tìm theo đúng tên sản phẩm nên ra cả công thức,
                khuyến mãi và cửa hàng có bán mặt hàng đó.
              -->
              <div class="pl-act">
                <button
                  type="button"
                  class="pl-btn pl-btn-cart"
                  :class="{ added: cart.has(p.id) }"
                  @click="addToCart(p)"
                >
                  {{ cart.has(p.id) ? '✓ カート済み' : '🛒 カートに入れる' }}
                </button>
                <NuxtLink class="pl-btn" :to="`/search?q=${encodeURIComponent(p.name)}`">
                  レシピを探す
                </NuxtLink>
              </div>
            </li>
          </ul>

          <div v-if="canLoadMore" class="pl-more">
            <button type="button" class="pl-more-btn" @click="shown += PAGE">
              さらに表示する（残り {{ data.total - shown }} 件）
            </button>
          </div>
        </template>

        <AppButtonNavigation
          class="d-none-mobile pl-back"
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
 * 商品一覧 — danh sách sản phẩm demo để trình diễn luồng "thêm vào giỏ".
 *
 * Trước đây data/demo-products.json có 702 sản phẩm nhưng KHÔNG trang nào liệt
 * kê chúng: chỉ thấy được khi tình cờ tìm trúng tên. Trang này cho xem cả danh
 * sách, lọc theo 売場 và khoảng giá, rồi thêm vào giỏ.
 *
 * ⚠️ Giá / tồn kho / khuyến mãi đều là số ẢO — mọi chỗ hiển thị đều kèm badge DEMO.
 */
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { URIBA, URIBA_BY_KEY } from '~~/shared/uriba.mjs'
import { useCart, EC_CART_URL } from '~/composables/useCart'

const route = useRoute()
const router = useRouter()
const cart = useCart()

const PAGE = 60
const q = computed(() => String(route.query.q || ''))
const uriba = ref(String(route.query.uriba || ''))
const maxPrice = ref(String(route.query.maxPrice || ''))
const sort = ref(String(route.query.sort || ''))
const shown = ref(PAGE)

const breadcrumbItems = computed(() => [
  { text: 'ホーム', disabled: false, href: '/' },
  { text: '商品一覧', disabled: true, href: '/products' },
])

const params = computed(() => ({
  q: q.value || undefined,
  uriba: uriba.value || undefined,
  maxPrice: maxPrice.value || undefined,
  sort: sort.value || undefined,
  limit: shown.value,
}))

const { data, pending } = await useAsyncData(
  'products',
  () => $fetch('/api/products', { params: params.value }).catch(() => ({ total: 0, items: [] })),
  { watch: [params] }
)

const promoCount = computed(() => (data.value?.items || []).filter((p) => p.promo).length)
const canLoadMore = computed(() => (data.value?.total || 0) > shown.value)
const isFiltered = computed(() => !!(uriba.value || maxPrice.value || sort.value || q.value))

// Đổi bộ lọc thì quay về trang đầu, nếu không sẽ tải thừa
watch([uriba, maxPrice, sort, q], () => {
  shown.value = PAGE
})

function uribaColor(key) {
  return URIBA_BY_KEY[key]?.color || '#888'
}

function addToCart(p) {
  cart.add(p)
}

function reset() {
  uriba.value = ''
  maxPrice.value = ''
  sort.value = ''
  router.push({ path: '/products' })
}

useHead({ title: '商品一覧｜遠鉄ストア' })
</script>

<style scoped lang="scss">
@use 'sass:color';

// Bảng màu lấy từ site gốc để phần thêm vào không bị lạc tông
$brown: #331e0e;
$cream: #f3e7cd;
$red: #c7273b;

.pl-lead {
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.7;

  a {
    color: #087295;
  }
}

.pl-badge-demo {
  display: inline-block;
  background: $red;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  border-radius: 3px;
  padding: 1px 5px;
  margin-right: 6px;
  vertical-align: middle;
}

.pl-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-end;
  background: $cream;
  padding: 14px 16px;
  border-radius: 6px;
  margin-bottom: 18px;
}

.pl-filter {
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    font-size: 12px;
    font-weight: bold;
    color: $brown;
  }
}

.pl-select {
  height: 36px;
  min-width: 140px;
  padding: 0 8px;
  border: 1px solid #cbb9a0;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
}

.pl-reset {
  height: 36px;
  padding: 0 14px;
  border: 1px solid $brown;
  border-radius: 4px;
  background: #fff;
  color: $brown;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    background: #fff8ec;
  }
}

.pl-count {
  font-size: 14px;
  margin-bottom: 12px;

  strong {
    font-size: 18px;
    color: $red;
  }
}

.pl-count-promo {
  margin-left: 10px;
  font-size: 12px;
  color: $red;
}

.pl-loading,
.pl-empty {
  padding: 28px 0;
  text-align: center;
  color: #666;
}

.pl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
}

.pl-card {
  border: 1px solid #e3d9c6;
  border-radius: 6px;
  padding: 12px 14px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pl-name {
  font-size: 15px;
  font-weight: bold;
  color: $brown;
  line-height: 1.4;
  margin: 0;
}

.pl-tag-sale {
  display: inline-block;
  margin-left: 6px;
  font-size: 11px;
  color: $red;
  font-weight: bold;
}

.pl-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  font-size: 11px;
  margin: 0;
}

.pl-uriba {
  color: #fff;
  border-radius: 3px;
  padding: 1px 6px;
}

.pl-unit {
  color: #666;
}

.pl-stock {
  color: #2e7d32;

  &.low {
    color: #e65100;
  }
}

.pl-price {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
}

.pl-price-old {
  text-decoration: line-through;
  color: #999;
  font-size: 12px;
}

.pl-price-new {
  font-size: 19px;
  font-weight: bold;
  color: $red;
}

.pl-tax {
  font-size: 11px;
  color: #666;
}

.pl-off {
  background: $red;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  border-radius: 3px;
  padding: 1px 5px;
}

.pl-act {
  margin-top: auto;
  display: flex;
  gap: 6px;
}

.pl-btn {
  flex: 1;
  height: 36px;
  line-height: 32px;
  border: 2px solid $brown;
  border-radius: 4px;
  background: #fff;
  color: $brown;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: $cream;
  }
}

/* Thêm giỏ là hành động chính nên tô đậm */
.pl-btn-cart {
  background: $brown;
  color: #fff;

  &:hover {
    background: color.adjust($brown, $lightness: 8%);
  }

  /* Đã có trong giỏ thì đổi sang viền, để nút kia không bị lấn át */
  &.added {
    background: #fff;
    color: $brown;
  }
}

.pl-more {
  text-align: center;
  margin-bottom: 28px;
}

.pl-more-btn {
  height: 44px;
  padding: 0 28px;
  border: 2px solid $brown;
  border-radius: 4px;
  background: #fff;
  color: $brown;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: $cream;
  }
}

.pl-back {
  margin-top: 20px;
}

@media only screen and (max-width: 767px) {
  .pl-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }

  .pl-filters {
    gap: 10px;
    padding: 12px;
  }

  .pl-select {
    min-width: 110px;
  }

  /* Thẻ chỉ rộng ~150px nên hai nút phải xếp chồng, không đứng cạnh nhau */
  .pl-act {
    flex-direction: column;
    gap: 5px;
  }

  .pl-btn {
    height: 32px;
    line-height: 28px;
  }
}
</style>
