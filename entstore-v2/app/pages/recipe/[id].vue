<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">" />

      <h2>{{ data?.title || 'レシピ' }}</h2>

      <div v-if="!data" class="rd-empty">レシピが見つかりませんでした。</div>

      <template v-else>
        <div class="rd-top">
          <img v-if="data.image" :src="appendWebpFormat(data.image, 60, 640)" class="rd-hero" :alt="data.title" />

          <div class="rd-meta">
            <p class="rd-meta-row">
              <span v-if="data.cookTime" class="rd-chip">⏱ 約{{ data.cookTime }}分</span>
              <span v-if="data.serving" class="rd-chip">🍽 {{ data.serving }}</span>
              <span v-if="data.hasVideo" class="rd-chip">▶ レシピ動画あり</span>
            </p>

            <!-- Nút AI đọc — slide 6: 「AI音声でレシピ読み上げ」 -->
            <div class="rd-actions">
              <button type="button" class="rd-btn rd-btn-speak" @click="toggleSpeak">
                {{ speaking ? '⏹ 読み上げを停止' : '🔊 AIでレシピを読み上げ' }}
              </button>
              <button type="button" class="rd-btn" @click="mapOpen = true">
                🗺 売場マップを見る
              </button>
            </div>
            <p v-if="speechError" class="rd-speech-err">{{ speechError }}</p>

            <!--
              Hai cách mua, tách riêng khỏi nhóm nút trên và ghi rõ đi ĐÂU mua.
              Trước đây hai nút này nằm lẫn với nút đọc/bản đồ, cùng icon giỏ và
              cùng chữ 「材料」 nên nhìn như hai nút trùng nhau.
            -->
            <div class="rd-buy">
              <p class="rd-buy-label">材料をまとめて：</p>
              <div class="rd-buy-btns">
                <button
                  type="button"
                  class="rd-buy-btn rd-buy-store"
                  :class="{ 'is-added': justAdded === 'list' }"
                  @click="addAllToList"
                >
                  <span class="rd-buy-main">
                    {{ justAdded === 'list' ? '✓ 追加しました' : '🏪 お店で買う' }}
                  </span>
                  <span class="rd-buy-sub">買い物リストに追加 → 売場ごとに並べます</span>
                </button>

                <ClientOnly>
                  <button
                    v-if="buyableCount > 0"
                    type="button"
                    class="rd-buy-btn rd-buy-net"
                    :class="{ 'is-added': justAdded === 'cart' }"
                    @click="addAllToCart"
                  >
                    <span class="rd-buy-main">
                      {{ justAdded === 'cart' ? '✓ 追加しました' : '🛒 ネットで買う' }}
                    </span>
                    <span class="rd-buy-sub">
                      カートに{{ buyableCount }}点追加 → ネット通販へ
                    </span>
                  </button>
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>

        <!-- Dinh dưỡng: ưu tiên số THẬT từ Kitchen365, chỉ dùng DEMO khi không có -->
        <section v-if="data.nutrition" class="rd-sec">
          <h3 class="rd-h3">
            栄養成分
            <template v-if="isRealNutrition">
              <span class="rd-badge-real">実データ</span>
              <small v-if="data.nutrition.basis">（{{ data.nutrition.basis }}あたり）</small>
            </template>
            <span v-else class="rd-badge-demo">DEMO</span>
          </h3>

          <p v-if="isRealNutrition" class="rd-real-note">
            ✔ この栄養成分は <strong>Kitchen365（CGC）の実データ</strong>です。
            <template v-if="data.chef">料理：{{ data.chef }}</template>
            <template v-if="data.issue">／{{ data.issue }}</template>
          </p>
          <p v-else class="rd-demo-note">
            ※ 以下の栄養成分は<strong>デモ用の仮データ</strong>です。実際の商品の値とは異なります。
          </p>

          <ul class="rd-nutri">
            <li><span>エネルギー</span><strong>{{ data.nutrition.kcal }}</strong>kcal</li>
            <li><span>たんぱく質</span><strong>{{ data.nutrition.protein }}</strong>g</li>
            <li><span>脂質</span><strong>{{ data.nutrition.fat }}</strong>g</li>
            <li><span>炭水化物</span><strong>{{ data.nutrition.carb }}</strong>g</li>
            <li v-if="isRealNutrition && data.nutrition.sugar">
              <span>糖質</span><strong>{{ data.nutrition.sugar }}</strong>g
            </li>
            <li v-if="isRealNutrition && data.nutrition.fiber">
              <span>食物繊維</span><strong>{{ data.nutrition.fiber }}</strong>g
            </li>
            <li v-if="isRealNutrition && data.nutrition.calcium">
              <span>カルシウム</span><strong>{{ data.nutrition.calcium }}</strong>mg
            </li>
            <li>
              <span>{{ isRealNutrition ? '塩分' : '食塩相当量' }}</span>
              <strong>{{ data.nutrition.salt }}</strong>g
            </li>
          </ul>
        </section>

        <!-- Nguyên liệu nhóm theo quầy -->
        <section class="rd-sec">
          <h3 class="rd-h3">材料 <small>（売場ごと）</small></h3>
          <div v-for="g in data.byUriba" :key="g.key" class="rd-uriba">
            <p class="rd-uriba-head">
              <span class="rd-uriba-dot" :style="{ background: g.color }" />
              {{ g.label }}<small>／{{ g.desc }}</small>
            </p>
            <ul class="rd-ing">
              <li v-for="(it, i) in g.items" :key="i">
                <label>
                  <input type="checkbox" :value="it.name" v-model="checked" />
                  <span class="rd-ing-name">{{ it.name }}</span>
                  <span class="rd-ing-amt">{{ it.amount }}</span>
                </label>
                <span v-if="priceOf(it.name)" class="rd-ing-price">
                  <span class="rd-badge-demo sm">DEMO</span>
                  <template v-if="promoOf(it.name)">
                    <s>{{ promoOf(it.name).normalPrice }}円</s>
                    <strong class="rd-sale">{{ promoOf(it.name).salePrice }}円</strong>
                    <em class="rd-off">🔥特売中 {{ promoOf(it.name).discountPercent }}%OFF</em>
                  </template>
                  <template v-else>
                    <strong>{{ priceOf(it.name).price }}円</strong>
                    <em>{{ priceOf(it.name).unit }}</em>
                  </template>
                </span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Các bước nấu -->
        <section v-if="data.steps.length" class="rd-sec">
          <h3 class="rd-h3">作り方</h3>
          <ol class="rd-steps">
            <li v-for="(s, i) in data.steps" :key="i" :class="{ current: speakingStep === i }">
              <span class="rd-step-no">STEP {{ i + 1 }}</span>
              <span class="rd-step-text">{{ s }}</span>
            </li>
          </ol>
        </section>

        <section v-if="data.point" class="rd-sec rd-point">
          <h3 class="rd-h3">ワンポイント</h3>
          <p>{{ data.point }}</p>
        </section>

        <p v-if="data.externalUrl" class="rd-external">
          <a :href="data.externalUrl" target="_blank" rel="noopener">
            Kitchen365 で詳しく見る ›
          </a>
        </p>

        <!-- Công thức liên quan: chọn theo nguyên liệu chính trùng nhau -->
        <section v-if="data.related?.length" class="rd-sec rd-related">
          <h3 class="rd-h3">関連レシピ <small>（同じ食材を使ったレシピ）</small></h3>
          <ul class="rd-rel-list">
            <li v-for="r in data.related" :key="r.id">
              <a :href="r.route">
                <img
                  v-if="r.image"
                  :src="appendWebpFormat(r.image, 50, 320)"
                  :alt="r.title"
                  loading="lazy"
                />
                <span v-else class="rd-rel-noimg">🍳</span>
                <span class="rd-rel-body">
                  <span class="rd-rel-title">{{ r.title }}</span>
                  <span class="rd-rel-meta">
                    <template v-if="r.cookTime">⏱ {{ r.cookTime }}分</template>
                    <template v-if="r.energy">・{{ r.energy }}kcal</template>
                  </span>
                  <span v-if="r.sharedIngredients.length" class="rd-rel-shared">
                    共通の食材：{{ r.sharedIngredients.join('・') }}
                  </span>
                  <span v-else-if="r.category" class="rd-rel-shared">{{ r.category }}</span>
                </span>
              </a>
            </li>
          </ul>
        </section>

        <!-- Bài viết liên quan: để xem xong công thức còn có chỗ đọc tiếp -->
        <section v-if="data.relatedArticles?.length" class="rd-sec rd-related">
          <h3 class="rd-h3">関連記事 <small>（この食材・ジャンルの記事）</small></h3>
          <ul class="rd-rel-list">
            <li v-for="a in data.relatedArticles" :key="a.id">
              <a :href="a.route">
                <img
                  v-if="a.image"
                  :src="appendWebpFormat(a.image, 50, 320)"
                  :alt="a.title"
                  loading="lazy"
                />
                <span v-else class="rd-rel-noimg">📄</span>
                <span class="rd-rel-body">
                  <span class="rd-rel-title">{{ a.title }}</span>
                  <span class="rd-rel-meta">
                    <template v-if="a.typeLabel">{{ a.typeLabel }}</template>
                    <template v-if="a.date">・{{ formatDateYMD(a.date, '.') }}</template>
                  </span>
                  <span class="rd-rel-shared">「{{ a.matched }}」の記事</span>
                </span>
              </a>
            </li>
          </ul>
        </section>
      </template>

      <AppButtonNavigation
        class="d-none-mobile rd-back"
        title="レシピ一覧へ戻る"
        is-back
        href="/service/recipe/"
      />
    </main>

    <UribaMapModal v-model="mapOpen" :highlight="highlightUriba" title="売場マップ（買い物リスト連動）" />

    <!-- Báo đã thêm, kèm lối đi tiếp — thay cho việc mở sơ đồ chắn ngang -->
    <Teleport to="body">
      <Transition name="rd-toast">
        <div v-if="toast" class="rd-toast" role="status">
          <span class="rd-toast-tick">✓</span>
          <span class="rd-toast-text">{{ toast.text }}</span>
          <NuxtLink :to="toast.to" class="rd-toast-go">{{ toast.cta }}</NuxtLink>
          <button type="button" class="rd-toast-x" aria-label="閉じる" @click="toast = null">×</button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
/**
 * Trang chi tiết công thức — slide 6 của đề xuất.
 *
 * Gồm: các bước nấu, AI đọc bằng Web Speech (ja-JP), danh sách đi chợ,
 * nguyên liệu nhóm theo 売場, và liên kết sang sơ đồ quầy.
 *
 * ⚠️ Dinh dưỡng và giá là số ẢO — mọi chỗ đều kèm badge 「DEMO」.
 */
import { ref, computed, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { appendWebpFormat } from '~/composables/useImage'
import { formatDateYMD } from '~/utils/index.js'
import { useShoppingList } from '~/composables/useShoppingList'
import { useAddFeedback } from '~/composables/useAddFeedback'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const id = String(route.params.id || '')

const { data } = await useAsyncData(`recipe:${id}`, () =>
  $fetch(`/api/recipe/${id}`).catch(() => null)
)

const breadcrumbItems = computed(() => [
  { text: 'ホーム', disabled: false, href: '/' },
  { text: 'レシピ集', disabled: false, href: '/service/recipe/' },
  { text: data.value?.title || 'レシピ', disabled: true, href: route.fullPath },
])

// --- danh sách đi chợ ---
const { addMany } = useShoppingList()
const cart = useCart()
const checked = ref([])
const mapOpen = ref(false)

/** Quầy cần highlight: nếu chưa tick gì thì lấy toàn bộ nguyên liệu */
const highlightUriba = computed(() => {
  const list = data.value?.ingredients || []
  const target = checked.value.length
    ? list.filter((i) => checked.value.includes(i.cleanName))
    : list
  return [...new Set(target.map((i) => i.uriba))]
})

function addAllToList(e) {
  const list = data.value?.ingredients || []
  const target = checked.value.length
    ? list.filter((i) => checked.value.includes(i.cleanName))
    : list
  if (!target.length) return
  addMany(
    target.map((i) => ({
      name: i.cleanName,
      amount: i.amount,
      uriba: i.uriba,
      from: data.value?.title || '',
    }))
  )
  // Trước đây chỗ này mở luôn sơ đồ 売場 — che mất trang. Giờ chỉ báo bằng
  // animation; ai muốn xem sơ đồ thì vẫn có nút 「売場マップを見る」 ở trên.
  signalAdded('list', target.length, e?.currentTarget)
}

/**
 * Nguyên liệu mua online được = nguyên liệu tra được sản phẩm trong bảng demo.
 * Không phải nguyên liệu nào cũng có (hàng hiệu, gia vị lẻ) nên phải đếm thật,
 * không được hứa "thêm tất cả" rồi thêm thiếu.
 */
const buyableIngredients = computed(() => {
  const list = data.value?.ingredients || []
  const target = checked.value.length
    ? list.filter((i) => checked.value.includes(i.cleanName))
    : list
  return target.filter((i) => i.product)
})

const buyableCount = computed(() => buyableIngredients.value.length)

function addAllToCart(e) {
  const items = buyableIngredients.value
  if (!items.length) return
  for (const i of items) {
    cart.add({ ...i.product, promo: i.promo || null })
  }
  signalAdded('cart', items.length, e?.currentTarget)
}

/**
 * Báo "đã thêm" bằng ba tầng: chip bay lên lối vào tương ứng, nút đổi sang
 * dấu ✓ trong chốc lát, và một thanh nhỏ hiện ra kèm link đi tiếp — để không
 * ai phải đoán hàng vừa rơi vào đâu.
 */
const { fly } = useAddFeedback()
const justAdded = ref('')
const toast = ref(null)
let addedTimer = null
let toastTimer = null

function signalAdded(target, n, fromEl) {
  fly(fromEl, target, '+' + n)

  justAdded.value = target
  clearTimeout(addedTimer)
  addedTimer = setTimeout(() => (justAdded.value = ''), 1600)

  toast.value =
    target === 'list'
      ? { text: `買い物リストに ${n} 品 追加しました`, to: '/list', cta: '買い物リストを見る' }
      : { text: `カートに ${n} 点 追加しました`, to: '/cart', cta: 'カートを見る' }
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (toast.value = null), 5000)
}

onBeforeUnmount(() => {
  clearTimeout(addedTimer)
  clearTimeout(toastTimer)
})

/** Dinh dưỡng có phải số THẬT từ Kitchen365 không (khác với số DEMO) */
const isRealNutrition = computed(() => !!data.value?.nutrition?.real)

function priceOf(name) {
  return data.value?.ingredients?.find((i) => i.cleanName === name)?.product || null
}
function promoOf(name) {
  return data.value?.ingredients?.find((i) => i.cleanName === name)?.promo || null
}

// --- AI đọc công thức bằng Web Speech (ja-JP) ---
const speaking = ref(false)
const speakingStep = ref(-1)
const speechError = ref('')

function toggleSpeak() {
  if (speaking.value) return stopSpeak()
  startSpeak()
}

function startSpeak() {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    speechError.value = 'お使いのブラウザは音声読み上げに対応していません。'
    return
  }
  speechError.value = ''
  const d = data.value
  if (!d) return

  // Đọc lần lượt: tên món → nguyên liệu → từng bước
  const parts = []
  parts.push({ text: `${d.title}。材料は、` })
  parts.push({
    text: d.ingredients.map((i) => `${i.cleanName} ${i.amount}`).join('、') + '。作り方。',
  })
  d.steps.forEach((s, i) => parts.push({ text: `手順${i + 1}。${s}`, step: i }))

  const synth = window.speechSynthesis
  synth.cancel()
  speaking.value = true

  let idx = 0
  const next = () => {
    if (!speaking.value || idx >= parts.length) return stopSpeak()
    const p = parts[idx++]
    speakingStep.value = p.step ?? -1
    const u = new SpeechSynthesisUtterance(p.text)
    u.lang = 'ja-JP'          // đọc tiếng Nhật
    u.rate = 0.95             // chậm hơn bình thường một chút cho dễ nghe khi đang nấu
    u.onend = next
    u.onerror = () => stopSpeak()
    synth.speak(u)
  }
  next()
}

function stopSpeak() {
  speaking.value = false
  speakingStep.value = -1
  if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
}

onBeforeUnmount(stopSpeak)

useHead(() => ({
  title: `${data.value?.title || 'レシピ'}｜レシピ集｜遠鉄ストア`,
}))
</script>

<style scoped lang="scss">
.rd-empty { padding: 30px 12px; color: #666; }

.rd-top {
  display: flex;
  gap: 20px;
  padding: 0 12px 20px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
  }
}

.rd-hero {
  flex: 0 0 auto;
  width: 420px;
  max-width: 100%;
  border-radius: 6px;
  object-fit: cover;
}

.rd-meta { flex: 1 1 auto; }

.rd-meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 14px;
}

.rd-chip {
  font-size: 12px;
  padding: 3px 10px;
  border-radius: 12px;
  background: #f3e7cd;
  color: #6b5a48;
}

.rd-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rd-btn {
  padding: 12px 16px;
  font-size: 14px;
  border: 2px solid #331e0e;
  border-radius: 24px;
  background: #fff;
  color: #331e0e;
  cursor: pointer;
  text-align: center;

  &:hover { background: #331e0e; color: #fff; }
}

.rd-btn-speak {
  background: #331e0e;
  color: #fff;

  &:hover { background: #4a2e17; }
}

/* --- Hai cách mua: đi siêu thị vs mua online --- */
.rd-buy {
  margin-top: 14px;
  padding: 12px 14px;
  background: #f3e7cd;
  border-radius: 6px;
}

.rd-buy-label {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: bold;
  color: #331e0e;
}

.rd-buy-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.rd-buy-btn {
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 10px 14px;
  border-radius: 5px;
  border: 2px solid #331e0e;
  background: #fff;
  color: #331e0e;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s, border-color 0.15s, transform 0.15s;

  &:hover { background: #fffaf0; }
  &:active { transform: scale(0.97); }

  /* Vừa bấm xong: nhấp một cái rồi giữ nền xanh cho tới khi chữ ✓ tắt */
  &.is-added {
    animation: rd-pop 0.34s cubic-bezier(0.34, 1.56, 0.64, 1);
    border-color: #1d7a45;
    background: #eaf7ef;
    color: #14663a;
  }
}

@keyframes rd-pop {
  0% { transform: scale(1); }
  45% { transform: scale(1.04); }
  100% { transform: scale(1); }
}

.rd-buy-main {
  font-size: 15px;
  font-weight: bold;
}

.rd-buy-sub {
  font-size: 11px;
  opacity: 0.75;
  line-height: 1.4;
}

/* Mua online là hành động dẫn ra ngoài trang nên tô đỏ cho khác hẳn */
.rd-buy-net {
  border-color: #c7273b;
  background: #c7273b;
  color: #fff;

  &:hover { background: #a51f30; }

  .rd-buy-sub { opacity: 0.9; }
}

.rd-speech-err {
  margin-top: 8px;
  font-size: 12px;
  color: #c7273b;
}

.rd-sec { padding: 0 12px 26px; }

.rd-h3 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 5px solid #f3e7cd;
  padding-bottom: 5px;
  margin-bottom: 14px;

  small { font-size: 12px; font-weight: normal; color: #888; }
}

/* Badge DEMO — bắt buộc ở mọi số liệu ảo */
.rd-badge-demo {
  font-size: 10px;
  font-weight: bold;
  padding: 2px 7px;
  border-radius: 3px;
  background: #e53935;
  color: #fff;
  letter-spacing: 0.5px;

  &.sm { font-size: 9px; padding: 1px 5px; }
}

.rd-badge-real {
  font-size: 10px;
  font-weight: bold;
  padding: 2px 7px;
  border-radius: 3px;
  background: #2e7d32;
  color: #fff;
  letter-spacing: 0.5px;
}

.rd-real-note {
  font-size: 12px;
  color: #2e7d32;
  background: #f1f8f2;
  border-left: 3px solid #2e7d32;
  padding: 8px 10px;
  margin: 0 0 12px;
}

.rd-demo-note {
  font-size: 12px;
  color: #a3452f;
  background: #fff5f3;
  border-left: 3px solid #e53935;
  padding: 8px 10px;
  margin: 0 0 12px;
}

.rd-nutri {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    flex: 1 1 120px;
    text-align: center;
    padding: 10px;
    background: #faf7f1;
    border-radius: 6px;

    span { display: block; font-size: 11px; color: #888; }
    strong { font-size: 20px; color: #331e0e; }
  }
}

.rd-uriba { margin-bottom: 14px; }

.rd-uriba-head {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: bold;

  small { font-weight: normal; color: #999; font-size: 11px; }
}

.rd-uriba-dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
}

.rd-ing {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 7px 4px;
    border-bottom: 1px dotted #ddd;
    font-size: 14px;
    flex-wrap: wrap;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    flex: 1 1 auto;
  }
}

.rd-ing-name { flex: 1 1 auto; }
.rd-ing-amt { color: #777; font-size: 13px; }

.rd-ing-price {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;

  s { color: #aaa; }
  strong { color: #331e0e; font-size: 14px; }
  em { font-style: normal; color: #888; }
}

.rd-sale { color: #c7273b !important; }

.rd-off {
  background: #c7273b;
  color: #fff !important;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 11px;
}

.rd-steps {
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: step;

  li {
    display: flex;
    gap: 12px;
    padding: 12px;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    line-height: 1.7;

    &.current {
      background: #fff8e1;
      border-left: 4px solid #ffb300;
    }
  }
}

.rd-step-no {
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: bold;
  color: #c7273b;
  padding-top: 2px;
}

.rd-point p {
  background: #faf7f1;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  margin: 0;
}

.rd-external {
  padding: 0 12px;

  a { color: #087295; text-decoration: underline; font-size: 14px; }
}

.rd-related {
  border-top: 1px solid #eee;
  padding-top: 20px;
  margin-top: 10px;
}

.rd-rel-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media only screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  a {
    display: flex;
    gap: 10px;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 6px;
    text-decoration: none;
    color: #323232;
    height: 100%;

    &:hover {
      background: #faf7f1;
      border-color: #d9cdb8;
    }
  }

  img {
    flex: 0 0 auto;
    width: 88px;
    height: 66px;
    object-fit: cover;
    border-radius: 4px;
    background: #eee;
  }
}

.rd-rel-noimg {
  flex: 0 0 auto;
  width: 88px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3e7cd;
  border-radius: 4px;
  font-size: 24px;
}

.rd-rel-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.rd-rel-title {
  font-size: 13px;
  font-weight: bold;
  color: #087295;
  line-height: 1.4;
}

.rd-rel-meta {
  font-size: 11px;
  color: #888;
}

.rd-rel-shared {
  font-size: 10px;
  color: #6b5a48;
  background: #f3e7cd;
  padding: 1px 6px;
  border-radius: 3px;
  align-self: flex-start;
}

.rd-back { margin-top: 40px; }
</style>

<!--
  Thanh báo "đã thêm" được Teleport ra <body> nên style phải để ngoài scoped.
  Đặt trên thanh giỏ hàng (nếu đang hiện) bằng biến chung --cart-bar-h.
-->
<style lang="scss">
.rd-toast {
  position: fixed;
  left: 50%;
  bottom: calc(18px + var(--cart-bar-h, 0px));
  transform: translateX(-50%);
  z-index: 70;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: calc(100vw - 24px);
  padding: 11px 12px 11px 14px;
  border-radius: 999px;

  background: #24301f;
  color: #fff;
  font-size: 14px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
}

.rd-toast-tick {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #2f9e5e;
  font-size: 13px;
  font-weight: bold;
}

.rd-toast-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rd-toast-go {
  flex: 0 0 auto;
  padding: 6px 14px;
  border-radius: 999px;
  background: #fff;
  color: #24301f;
  font-weight: bold;
  text-decoration: none;

  &:hover { background: #f3e7cd; }
}

.rd-toast-x {
  flex: 0 0 auto;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;

  &:hover { color: #fff; }
}

.rd-toast-enter-active {
  transition: opacity 0.22s ease, transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.rd-toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.rd-toast-enter-from,
.rd-toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(14px);
}

@media (prefers-reduced-motion: reduce) {
  .rd-toast-enter-active,
  .rd-toast-leave-active {
    transition: opacity 0.2s ease;
  }
  .rd-toast-enter-from,
  .rd-toast-leave-to {
    transform: translateX(-50%);
  }
}
</style>
