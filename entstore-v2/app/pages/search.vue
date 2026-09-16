<template>
  <div>
    <SmartSearchBar :initial="q" compact />

    <div class="wrap-content">
      <main>
        <VxBreadcrumbs :items="breadcrumbItems" divider=">" />

        <h2>検索結果</h2>

        <div v-if="pending" class="sr-loading">検索中…</div>

        <template v-else-if="q">
          <p class="sr-summary">
            「<strong>{{ q }}</strong>」の検索結果：<strong>{{ data?.total || 0 }}</strong> 件
            <span v-if="data?.normalized && data.normalized !== q" class="sr-norm">
              （表記ゆれを含めて検索：{{ data.normalized }}）
            </span>
          </p>

          <!-- Đã dịch từ khoá ngoại ngữ sang tiếng Nhật — nói rõ để người dùng hiểu vì sao ra kết quả này -->
          <p v-if="data?.translatedFrom" class="sr-note sr-note-lang">
            🌐 「{{ q }}」を「{{ data.translatedFrom.join('・') }}」として検索しました。
          </p>

          <!-- Đang lọc theo ngân sách -->
          <p v-if="data?.budget" class="sr-note sr-note-budget">
            💰 <strong>{{ budgetLabel }}</strong> で絞り込みました。
            <span v-if="data.budget.implied" class="sr-note-sub">
              「{{ data.budget.raw.toLocaleString() }}円」を予算として解釈しました。
            </span>
            <span class="sr-note-sub">{{ data.budget.note }}</span>
          </p>

          <div v-if="!data?.total" class="sr-empty">
            <p>該当する情報が見つかりませんでした。</p>
            <p class="sr-hint">
              商品名・料理名・食材・店舗名でお試しください。<br />
              例：うなぎ／カレー／富塚店／チラシ
            </p>
          </div>

          <!-- Kết quả nhóm theo đúng thứ tự slide 5: 特売→レシピ→商品→記事→店舗 -->
          <section v-for="g in data?.groups || []" :key="g.key" class="sr-group">
            <h3 class="sr-group-title">
              <span class="sr-group-tag" :data-group="g.key">{{ g.label }}</span>
              <span class="sr-group-count">{{ g.count }} 件</span>
              <span v-if="pageCount(g) > 1" class="sr-group-range">
                {{ (pageFor(g.key) - 1) * PER_PAGE + 1 }}–{{
                  Math.min(pageFor(g.key) * PER_PAGE, g.items.length)
                }}
                件目
              </span>
            </h3>

            <ul class="sr-list">
              <li v-for="it in pagedItems(g)" :key="it.id" class="sr-item">
                <a :href="it.route" class="sr-link">
                  <img
                    v-if="it.image"
                    :src="appendWebpFormat(it.image, 50, 200)"
                    class="sr-thumb"
                    alt=""
                    loading="lazy"
                  />
                  <span class="sr-body">
                    <span class="sr-title">{{ it.title }}</span>

                    <!-- 特売: hiện giá KM và hạn (slide 5) -->
                    <span v-if="it.promo" class="sr-promo">
                      <span class="sr-badge-demo">DEMO</span>
                      <span class="sr-price-old">{{ it.promo.normalPrice }}円</span>
                      <span class="sr-price-new">{{ it.promo.salePrice }}円</span>
                      <span class="sr-off">{{ it.promo.discountPercent }}%OFF</span>
                      <span class="sr-until">{{ fmtDate(it.promo.endDate) }}まで</span>
                    </span>

                    <!-- 商品: giá + tồn kho (đều là số ảo) -->
                    <span v-else-if="it.product" class="sr-product">
                      <span class="sr-badge-demo">DEMO</span>
                      <span class="sr-price-new">{{ it.product.price }}円</span>
                      <span class="sr-unit">{{ it.product.unit }}</span>
                      <span class="sr-uriba">{{ it.product.uribaLabel }}</span>
                      <span class="sr-stock">{{ it.product.stock }}</span>
                    </span>

                    <!-- レシピ: chi phí nguyên liệu ước tính, chỉ hiện khi có lọc theo giá -->
                    <span v-else-if="it.estimatedCost" class="sr-cost">
                      <span class="sr-badge-demo">DEMO</span>
                      材料費 概算
                      <strong>{{ it.estimatedCost.total.toLocaleString() }}円</strong>
                      <span class="sr-cost-conf">
                        （{{ it.estimatedCost.matched }}/{{ it.estimatedCost.count }} 品目の価格から）
                      </span>
                    </span>

                    <!-- 店舗: địa chỉ + giờ mở cửa (dữ liệu THẬT) -->
                    <span v-else-if="it.type === 'shop'" class="sr-shop">
                      {{ it.address }}<template v-if="it.openTime"> ／ {{ it.openTime }}</template>
                    </span>

                    <span v-else-if="it.snippet" class="sr-snippet">{{ it.snippet }}</span>
                  </span>
                </a>

                <!-- Nút thêm giỏ đặt NGOÀI thẻ <a> — nút nằm trong link là HTML sai -->
                <ClientOnly>
                  <button
                    v-if="it.product"
                    type="button"
                    class="sr-add"
                    :class="{ added: cart.has(it.product.id) }"
                    @click="cart.add({ ...it.product, promo: it.promo || null })"
                  >
                    {{ cart.has(it.product.id) ? '✓ カート済み' : '🛒 カートに入れる' }}
                  </button>
                </ClientOnly>
              </li>
            </ul>

            <!-- Phân trang riêng cho từng nhóm -->
            <nav v-if="pageCount(g) > 1" class="sr-pager" :aria-label="`${g.label}のページ送り`">
              <button
                type="button"
                class="sr-pager-btn"
                :disabled="pageFor(g.key) === 1"
                @click="setPage(g.key, pageFor(g.key) - 1)"
              >
                ‹ 前へ
              </button>

              <template v-for="(n, i) in pageList(g)">
                <span v-if="n === '…'" :key="g.key + '-gap-' + i" class="sr-pager-gap">…</span>
                <button
                  v-else
                  :key="g.key + '-p-' + n"
                  type="button"
                  class="sr-pager-num"
                  :class="{ current: n === pageFor(g.key) }"
                  :aria-current="n === pageFor(g.key) ? 'page' : undefined"
                  @click="setPage(g.key, n)"
                >
                  {{ n }}
                </button>
              </template>

              <button
                type="button"
                class="sr-pager-btn"
                :disabled="pageFor(g.key) === pageCount(g)"
                @click="setPage(g.key, pageFor(g.key) + 1)"
              >
                次へ ›
              </button>
            </nav>
          </section>

          <!--
            近くの取扱店舗 — yêu cầu "danh sách các siêu thị gần có bán sp liên quan".
            Mặc định xếp theo còn hàng; bấm nút mới hỏi vị trí để xếp theo khoảng cách.
          -->
          <section v-if="data?.nearbyShops" class="sr-shops">
            <h3 class="sr-group-title">
              <span class="sr-group-tag" data-group="shop">近くの取扱店舗</span>
              <span class="sr-group-count">{{ data.nearbyShops.product.name }}</span>
            </h3>

            <p class="sr-shops-lead">
              <span class="sr-badge-demo">DEMO</span>
              在庫状況はデモ用の仮データです。実際の在庫は店舗にお問い合わせください。
              <button
                v-if="!data.nearbyShops.located"
                type="button"
                class="sr-geo"
                :disabled="geoState === 'asking'"
                @click="locate"
              >
                {{ geoState === 'asking' ? '位置情報を取得中…' : '📍 近い順に並べる' }}
              </button>
              <span v-if="geoState === 'denied'" class="sr-geo-denied">
                位置情報が使えないため、在庫順に表示しています。
              </span>
            </p>

            <ul class="sr-shop-list">
              <li v-for="s in data.nearbyShops.items" :key="s.id" class="sr-shop-item">
                <a :href="s.route" class="sr-shop-link">
                  <span class="sr-shop-name">{{ s.title }}</span>
                  <span class="sr-shop-stock" :data-stock="s.stockKey">{{ s.stock }}</span>
                  <span v-if="s.distanceKm != null" class="sr-shop-dist">
                    約 {{ s.distanceKm }} km
                  </span>
                  <span class="sr-shop-addr">{{ s.address }}</span>
                  <span v-if="s.openTime" class="sr-shop-time">営業 {{ s.openTime }}</span>
                </a>
              </li>
            </ul>
          </section>
        </template>

        <p v-else class="sr-hint">キーワードを入力してください。</p>

        <AppButtonNavigation
          class="d-none-mobile sr-back"
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
 * Trang gợi ý 「なんでも検索」 — slide 3 bước ②, slide 5.
 *
 * Kết quả gộp và nhóm theo 特売 → レシピ → 商品 → 記事 → 店舗, kèm số lượng
 * từng nhóm. Sản phẩm đang khuyến mãi được làm nổi bật giá KM và hạn dùng.
 *
 * ⚠️ Giá / tồn kho / khuyến mãi là dữ liệu ẢO — luôn kèm badge 「DEMO」.
 */
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { appendWebpFormat } from '~/composables/useImage'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const q = computed(() => String(route.query.q || ''))

/** Số mục lấy về mỗi nhóm (server chặn ở 200) và số mục hiển thị mỗi trang */
const PER_GROUP_FETCH = 200
const PER_PAGE = 10

/**
 * Trang hiện tại của TỪNG nhóm.
 * Mỗi nhóm phân trang riêng vì 記事 có thể 100 mục trong khi 店舗 chỉ 3 —
 * gộp chung một bộ phân trang thì nhóm nhỏ bị đẩy sang trang sau vô lý.
 */
const pageOf = ref({})
const pageFor = (key) => pageOf.value[key] || 1

function setPage(key, n) {
  pageOf.value = { ...pageOf.value, [key]: n }
}

/** Cắt mục của một nhóm theo trang hiện tại */
function pagedItems(g) {
  const start = (pageFor(g.key) - 1) * PER_PAGE
  return g.items.slice(start, start + PER_PAGE)
}

const pageCount = (g) => Math.ceil(g.items.length / PER_PAGE) || 1

/**
 * Dãy số trang có rút gọn: 1 … 4 5 [6] 7 8 … 20.
 * Nhóm 100 mục mà in đủ 10 nút thì tràn hàng trên điện thoại.
 */
function pageList(g) {
  const total = pageCount(g)
  const cur = pageFor(g.key)
  const out = []
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - cur) <= 1) out.push(i)
    else if (out[out.length - 1] !== '…') out.push('…')
  }
  return out
}

const breadcrumbItems = computed(() => [
  { text: 'ホーム', disabled: false, href: '/' },
  { text: '検索結果', disabled: true, href: '/search' },
])

/**
 * Vị trí người dùng — chỉ dùng để xếp 「近くの取扱店舗」 theo khoảng cách.
 * Không hỏi ngay khi vào trang: chỉ hỏi khi bấm nút, và không gửi đi đâu khác
 * ngoài chính API tìm kiếm của trang này.
 */
const geo = ref(null)
const geoState = ref('idle') // idle | asking | denied

function locate() {
  if (!import.meta.client || !navigator.geolocation) {
    geoState.value = 'denied'
    return
  }
  geoState.value = 'asking'
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      geo.value = { lat: pos.coords.latitude, lng: pos.coords.longitude }
      geoState.value = 'idle'
    },
    () => {
      geoState.value = 'denied'
    },
    { timeout: 8000 }
  )
}

// Gọi lại mỗi khi từ khoá đổi; chạy cả trên server nên chia sẻ được link
const { data, pending } = await useAsyncData(
  () => 'search:' + q.value + ':' + (geo.value ? `${geo.value.lat},${geo.value.lng}` : ''),
  () =>
    q.value
      ? $fetch('/api/search', {
          params: {
            q: q.value,
            // Lấy cả cụm để phân trang tại chỗ, không phải gọi lại API mỗi trang
            perGroup: PER_GROUP_FETCH,
            ...(geo.value ? { lat: geo.value.lat, lng: geo.value.lng } : {}),
          },
        })
      : Promise.resolve(null),
  { watch: [q, geo] }
)

const cart = useCart()

/** Nhãn ngân sách — 「2,000円以内」「2,000円前後」「2,000円以上」 */
const budgetLabel = computed(() => {
  const b = data.value?.budget
  if (!b) return ''
  const n = (v) => Number(v).toLocaleString()
  if (b.kind === 'around') return `${n(b.raw)}円前後`
  if (b.kind === 'over') return `${n(b.min)}円以上`
  return `${n(b.max)}円以内`
})

function fmtDate(iso) {
  if (!iso) return ''
  const d = new Date(iso)
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

useHead(() => ({
  title: q.value ? `${q.value} の検索結果｜遠鉄ストア` : '検索｜遠鉄ストア',
}))
</script>

<style scoped lang="scss">
.sr-loading,
.sr-hint {
  padding: 20px 12px;
  font-size: 14px;
  color: #666;
}

.sr-summary {
  padding: 0 12px 16px;
  font-size: 15px;

  strong { color: #c7273b; }
}

.sr-norm {
  font-size: 12px;
  color: #888;
}

.sr-empty {
  padding: 30px 12px;
  text-align: center;
  background: #faf7f1;
  border-radius: 6px;
  margin: 0 12px 20px;
}

.sr-group {
  margin-bottom: 30px;
}

.sr-group-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 10px;
  padding: 8px 12px;
  background: #331e0e;
  border-left: 5px solid #2a180b;
  color: #fff;
  font-size: 16px;
  font-weight: normal;
}

.sr-group-tag {
  font-size: 14px;
  font-weight: bold;
}

.sr-group-count {
  font-size: 12px;
  opacity: 0.85;
}

.sr-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.sr-item {
  border-bottom: 1px solid #e8e0d2;
}

.sr-link {
  display: flex;
  gap: 12px;
  padding: 12px;
  text-decoration: none;
  color: #323232;

  &:hover {
    background: #faf7f1;
  }
}

.sr-thumb {
  flex: 0 0 auto;
  width: 96px;
  height: 64px;
  object-fit: cover;
  border-radius: 4px;
  background: #eee;
}

.sr-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.sr-title {
  font-size: 15px;
  font-weight: bold;
  color: #087295;
}

.sr-snippet,
.sr-shop {
  font-size: 12px;
  color: #777;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.sr-promo,
.sr-product {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
}

/* Badge DEMO: bắt buộc ở mọi chỗ hiện số liệu ảo (Yêu cầu 3) */
.sr-badge-demo {
  font-size: 10px;
  font-weight: bold;
  padding: 1px 6px;
  border-radius: 3px;
  background: #e53935;
  color: #fff;
  letter-spacing: 0.5px;
}

.sr-price-old {
  text-decoration: line-through;
  color: #999;
  font-size: 12px;
}

.sr-price-new {
  font-size: 16px;
  font-weight: bold;
  color: #c7273b;
}

.sr-off {
  background: #c7273b;
  color: #fff;
  font-size: 11px;
  padding: 1px 6px;
  border-radius: 3px;
}

.sr-until,
.sr-unit,
.sr-uriba,
.sr-stock {
  font-size: 11px;
  color: #777;
}

.sr-uriba {
  background: #f3e7cd;
  padding: 1px 6px;
  border-radius: 3px;
  color: #6b5a48;
}

.sr-group-tag[data-group='promo'] { color: #ffd7d7; }

.sr-back {
  margin-top: 40px;
}

/* --- Ghi chú: đã dịch từ khoá / đang lọc theo ngân sách --- */
.sr-note {
  margin: 0 12px 12px;
  padding: 9px 12px;
  border-radius: 4px;
  font-size: 13px;
  line-height: 1.6;
}

.sr-note-lang {
  background: #eef5fb;
  border-left: 3px solid #087295;
}

.sr-note-budget {
  background: #fff6e6;
  border-left: 3px solid #e6a23c;

  strong {
    color: #c7273b;
    font-size: 15px;
  }
}

.sr-note-sub {
  display: block;
  font-size: 11px;
  color: #7a6a58;
  margin-top: 2px;
}

/* --- Chi phí nguyên liệu ước tính của công thức --- */
.sr-cost {
  display: block;
  margin-top: 4px;
  font-size: 12px;
  color: #6b5a48;

  strong {
    font-size: 15px;
    color: #c7273b;
  }
}

.sr-cost-conf {
  color: #999;
  font-size: 11px;
}

/* --- Nút thêm vào giỏ trong kết quả tìm kiếm --- */
.sr-add {
  margin: 6px 0 2px 12px;
  height: 32px;
  padding: 0 14px;
  border: 2px solid #331e0e;
  border-radius: 4px;
  background: #331e0e;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &.added {
    background: #fff;
    color: #331e0e;
  }
}

/* --- Phân trang từng nhóm --- */
.sr-group-range {
  margin-left: 10px;
  font-size: 11px;
  color: #b9a892;
  font-weight: normal;
}

.sr-pager {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 14px 12px 4px;
}

.sr-pager-btn,
.sr-pager-num {
  min-width: 34px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid #cbb9a0;
  border-radius: 4px;
  background: #fff;
  color: #331e0e;
  font-size: 13px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #f3e7cd;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
}

.sr-pager-num.current {
  background: #331e0e;
  border-color: #331e0e;
  color: #fff;
  font-weight: bold;
  cursor: default;
}

.sr-pager-gap {
  padding: 0 2px;
  color: #b9a892;
}

/* --- 近くの取扱店舗 --- */
.sr-shops {
  margin-top: 28px;
}

.sr-shops-lead {
  padding: 0 12px;
  font-size: 12px;
  color: #6b5a48;
  line-height: 1.7;
  margin-bottom: 10px;
}

.sr-geo {
  margin-left: 8px;
  height: 28px;
  padding: 0 12px;
  border: 1px solid #087295;
  border-radius: 4px;
  background: #fff;
  color: #087295;
  font-size: 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
}

.sr-geo-denied {
  display: block;
  color: #a3541f;
  margin-top: 4px;
}

.sr-shop-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sr-shop-item {
  border-bottom: 1px solid #eee;
}

.sr-shop-link {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  padding: 12px;
  text-decoration: none;
  color: #333;

  &:hover {
    background: #fafafa;
  }
}

.sr-shop-name {
  font-size: 15px;
  font-weight: bold;
  color: #331e0e;
}

.sr-shop-stock {
  font-size: 11px;
  font-weight: bold;
  border-radius: 3px;
  padding: 1px 6px;
  background: #e8f5e9;
  color: #2e7d32;

  &[data-stock='low'] {
    background: #fff3e0;
    color: #e65100;
  }

  &[data-stock='none'] {
    background: #fbe9e7;
    color: #999;
  }
}

.sr-shop-dist {
  font-size: 12px;
  color: #087295;
  font-weight: bold;
}

.sr-shop-addr,
.sr-shop-time {
  font-size: 12px;
  color: #777;
}

@media only screen and (max-width: 767px) {
  .sr-thumb {
    width: 72px;
    height: 52px;
  }

  .sr-title {
    font-size: 14px;
  }

  .sr-shop-addr {
    flex-basis: 100%;
  }
}
</style>
