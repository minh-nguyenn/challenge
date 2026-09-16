<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">" />

      <h2>特売情報 管理画面</h2>

      <p class="ap-note">
        <span class="ap-badge-demo">DEMO</span>
        担当者がコードを書かずに特売情報を登録・削除できる画面です。
        <strong>終了日を過ぎた特売は、一覧・検索結果・商品ページから自動で除外されます</strong>
        （手作業の削除は不要）。
      </p>

      <ClientOnly>
        <!-- Tổng quan: chứng minh cơ chế tự gỡ -->
        <div class="ap-stats">
          <div class="ap-stat">
            <span>登録済み</span><strong>{{ all.length }}</strong>件
          </div>
          <div class="ap-stat ap-stat-ok">
            <span>実施中</span><strong>{{ activeList.length }}</strong>件
          </div>
          <div class="ap-stat ap-stat-off">
            <span>期限切れ（自動除外）</span><strong>{{ expiredList.length }}</strong>件
          </div>
        </div>

        <!--
          ① Excel — đường nhập chính. Người phụ trách 特売 vốn đã quản lý bằng
          Excel, nên nhận thẳng file họ đang có thay vì bắt gõ lại.
        -->
        <section class="ap-sec ap-sec-excel">
          <h3 class="ap-h3">① Excel / CSV で取り込み</h3>
          <p class="ap-sub">
            見出し行に <code>商品名・通常価格・特売価格・終了日</code> が必要です
            （<code>売場・開始日・備考</code> は任意）。
            <a class="ap-tpl" href="/api/promos/template">📥 テンプレートをダウンロード</a>
          </p>

          <div class="ap-upload">
            <label class="ap-file">
              <input
                ref="fileInput"
                type="file"
                accept=".xlsx,.xlsm,.csv,.txt"
                :disabled="uploading"
                @change="onPickFile"
              />
              <span>{{ uploading ? '取り込み中…' : '📄 ファイルを選ぶ（.xlsx / .csv）' }}</span>
            </label>
            <span class="ap-file-hint">最大5MB・1回500件まで</span>
          </div>

          <p v-if="importError" class="ap-error">{{ importError }}</p>

          <!-- Báo cáo kết quả: dòng nào vào được, dòng nào không và vì sao -->
          <div v-if="importResult" class="ap-result">
            <p class="ap-result-head">
              <strong>{{ importResult.fileName }}</strong>：
              {{ importResult.rowCount }} 行を読み取り、
              <span class="ap-result-ok">{{ importResult.addedCount }} 件を登録</span>
              <span v-if="importResult.errorCount" class="ap-result-ng">
                ／ {{ importResult.errorCount }} 件はスキップ
              </span>
            </p>
            <ul v-if="importResult.errorCount" class="ap-result-errs">
              <li v-for="(e, i) in importResult.errors" :key="i">
                <strong>{{ e.row }}行目</strong>
                <span v-if="e.name">「{{ e.name }}」</span>：{{ e.error }}
              </li>
            </ul>
            <p v-if="importResult.addedCount" class="ap-result-note">
              検索結果・特売情報ページ・チャットボットにすぐ反映されます。
            </p>
          </div>
        </section>

        <!-- Cách 2: nhập từng mục bằng form -->
        <section class="ap-sec">
          <h3 class="ap-h3">② フォームで1件ずつ登録</h3>
          <div class="ap-form">
            <label>
              <span>商品名</span>
              <input v-model="form.productName" type="text" placeholder="例：うなぎ" />
            </label>
            <label>
              <span>通常価格（円）</span>
              <input v-model.number="form.normalPrice" type="number" min="1" />
            </label>
            <label>
              <span>特売価格（円）</span>
              <input v-model.number="form.salePrice" type="number" min="1" />
            </label>
            <label>
              <span>売場</span>
              <select v-model="form.uriba">
                <option v-for="u in URIBA" :key="u.key" :value="u.key">{{ u.label }}</option>
              </select>
            </label>
            <label>
              <span>終了日</span>
              <input v-model="form.endDate" type="date" />
            </label>
            <button type="button" class="ap-btn" :disabled="saving" @click="addFromForm">
              {{ saving ? '登録中…' : '登録する' }}
            </button>
          </div>
          <p v-if="formError" class="ap-error">{{ formError }}</p>
          <p v-if="formOk" class="ap-ok">{{ formOk }}</p>
        </section>

        <!-- Cách 3: dán JSON hàng loạt -->
        <section class="ap-sec">
          <h3 class="ap-h3">③ JSONで一括登録</h3>
          <p class="ap-sub">
            複数件をまとめて登録できます。<code>endDate</code> は必須です。
          </p>
          <textarea v-model="jsonText" class="ap-json" rows="7" :placeholder="jsonSample" />
          <div class="ap-json-actions">
            <button type="button" class="ap-btn" @click="addFromJson">一括登録</button>
            <button type="button" class="ap-btn ap-btn-ghost" @click="jsonText = jsonSample">
              サンプルを入れる
            </button>
          </div>
          <p v-if="jsonError" class="ap-error">{{ jsonError }}</p>
          <p v-if="jsonOk" class="ap-ok">{{ jsonOk }}</p>
        </section>

        <!-- Danh sách -->
        <section class="ap-sec">
          <h3 class="ap-h3">
            ④ 登録済み一覧
            <label class="ap-toggle">
              <input v-model="showExpired" type="checkbox" />
              期限切れも表示
            </label>
          </h3>

          <table class="ap-table">
            <thead>
              <tr>
                <th>状態</th>
                <th>商品名</th>
                <th>売場</th>
                <th class="num">通常</th>
                <th class="num">特売</th>
                <th class="num">割引</th>
                <th>終了日</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in visibleList" :key="p.id" :class="{ expired: p.expired }">
                <td>
                  <span v-if="p.expired" class="ap-tag ap-tag-off">期限切れ</span>
                  <span v-else class="ap-tag ap-tag-on">実施中</span>
                </td>
                <td>{{ p.productName }}</td>
                <td>{{ p.uribaLabel }}</td>
                <td class="num">{{ p.normalPrice }}円</td>
                <td class="num ap-sale">{{ p.salePrice }}円</td>
                <td class="num">{{ p.discountPercent }}%</td>
                <td>{{ fmt(p.endDate) }}</td>
                <td>
                  <button
                    type="button"
                    class="ap-del"
                    :disabled="removingId === p.id"
                    @click="removePromo(p.id)"
                  >
                    {{ removingId === p.id ? '…' : '削除' }}
                  </button>
                </td>
              </tr>
              <tr v-if="!visibleList.length">
                <td colspan="8" class="ap-empty">該当する特売情報はありません。</td>
              </tr>
            </tbody>
          </table>

          <p class="ap-local-note">
            ※ 登録内容は <code>data/demo-promos.json</code> に保存され、検索結果・
            <NuxtLink to="/promo">特売情報ページ</NuxtLink>・チャットボットに即座に反映されます。
            デモのためログイン認証はありません。
          </p>
        </section>

        <template #fallback>
          <p class="ap-sub">読み込み中…</p>
        </template>
      </ClientOnly>

      <AppButtonNavigation class="d-none-mobile ap-back" title="前のページへ戻る" is-back href="/" />
    </main>
  </div>
</template>

<script setup>
/**
 * Màn quản lý 特売 — slide 7 của đề xuất.
 *
 * Ba cách nhập: **tải file Excel/CSV lên**, form từng mục, và dán JSON.
 * Người phụ trách 特売 làm việc bằng Excel chứ không gõ JSON, nên đường Excel
 * mới là đường chính; hai cách kia để sửa lẻ và cho người rành kỹ thuật.
 *
 * Điểm cốt lõi: mục quá 終了日 tự động bị loại khỏi mọi nơi — màn này hiển thị
 * cả hai trạng thái để thấy cơ chế đang chạy thật.
 *
 * ⚠️ Ghi THẬT xuống data/demo-promos.json, nên đăng xong là trang tìm kiếm,
 * trang 特売情報 và chatbot thấy ngay. Bản demo KHÔNG có đăng nhập — trước khi
 * đưa lên môi trường thật phải thêm xác thực cho các API này.
 */
import { ref, computed } from 'vue'
import { URIBA } from '~~/shared/uriba.mjs'

const breadcrumbItems = [
  { text: 'ホーム', disabled: false, href: '/' },
  { text: '特売情報 管理画面', disabled: true, href: '/admin/promo' },
]

// Lấy cả mục hết hạn để chứng minh cơ chế tự gỡ
const { data, refresh } = await useAsyncData('promos-all', () =>
  $fetch('/api/promos', { params: { all: 1 } }).catch(() => ({ items: [] }))
)

const showExpired = ref(true)

const all = computed(() => data.value?.items || [])
const activeList = computed(() => all.value.filter((p) => !isExpired(p)))
const expiredList = computed(() => all.value.filter((p) => isExpired(p)))
const visibleList = computed(() =>
  all.value
    .map((p) => ({ ...p, expired: isExpired(p) }))
    .filter((p) => showExpired.value || !p.expired)
    .sort((a, b) => Number(a.expired) - Number(b.expired) || a.productName.localeCompare(b.productName))
)

function isExpired(p) {
  return p.endDate ? new Date(p.endDate).getTime() < Date.now() : false
}

function fmt(iso) {
  if (!iso) return '—'
  const d = new Date(iso)
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`
}

/** Lỗi từ server trả về dạng có ích: dòng nào, vì sao */
function describeErrors(errors) {
  return (errors || []).map((e) => `${e.row}行目 ${e.name || ''}：${e.error}`)
}

// --- ② form ---
const form = ref({ productName: '', normalPrice: null, salePrice: null, uriba: 'seika', endDate: '' })
const formError = ref('')
const formOk = ref('')
const saving = ref(false)

async function addFromForm() {
  formError.value = ''
  formOk.value = ''
  const f = form.value

  // Chặn sớm ở client cho phản hồi nhanh; server vẫn kiểm tra lại y hệt
  if (!f.productName.trim()) return (formError.value = '商品名を入力してください。')
  if (!f.normalPrice || !f.salePrice) return (formError.value = '価格を入力してください。')
  if (f.salePrice >= f.normalPrice) return (formError.value = '特売価格は通常価格より安くしてください。')
  if (!f.endDate) return (formError.value = '終了日は必須です（期限切れ自動除外のため）。')

  saving.value = true
  try {
    const r = await $fetch('/api/promos', { method: 'POST', body: { items: [{ ...f }] } })
    if (r.errorCount) {
      formError.value = describeErrors(r.errors).join(' / ')
    } else {
      formOk.value = `「${f.productName}」を登録しました。検索結果にもすぐ反映されます。`
      form.value = { productName: '', normalPrice: null, salePrice: null, uriba: 'seika', endDate: '' }
      await refresh()
    }
  } catch (e) {
    formError.value = e?.data?.statusMessage || e?.statusMessage || '登録に失敗しました。'
  } finally {
    saving.value = false
  }
}

// --- ③ JSON hàng loạt ---
const jsonSample = `[
  { "productName": "うなぎ", "normalPrice": 1480, "salePrice": 1180, "uriba": "sengyo", "endDate": "2026-12-31" },
  { "productName": "キャベツ", "normalPrice": 198, "salePrice": 128, "uriba": "seika", "endDate": "2026-12-31" }
]`
const jsonText = ref('')
const jsonError = ref('')
const jsonOk = ref('')

async function addFromJson() {
  jsonError.value = ''
  jsonOk.value = ''
  let arr
  try {
    arr = JSON.parse(jsonText.value)
  } catch (e) {
    return (jsonError.value = 'JSONの形式が正しくありません：' + e.message)
  }
  if (!Array.isArray(arr)) return (jsonError.value = '配列（[ ... ]）で入力してください。')

  try {
    const r = await $fetch('/api/promos', { method: 'POST', body: { items: arr } })
    jsonOk.value = `${r.addedCount} 件を登録しました。`
    if (r.errorCount) jsonError.value = describeErrors(r.errors).join(' / ')
    if (r.addedCount) jsonText.value = ''
    await refresh()
  } catch (e) {
    jsonError.value = e?.data?.statusMessage || e?.statusMessage || '登録に失敗しました。'
  }
}

// --- ① Excel / CSV (đường nhập chính) ---
const fileInput = ref(null)
const uploading = ref(false)
const importError = ref('')
const importResult = ref(null)

async function onPickFile(e) {
  const file = e.target.files?.[0]
  if (!file) return
  importError.value = ''
  importResult.value = null
  uploading.value = true

  try {
    const fd = new FormData()
    fd.append('file', file)
    importResult.value = await $fetch('/api/promos/import', { method: 'POST', body: fd })
    await refresh()
  } catch (err) {
    importError.value =
      err?.data?.statusMessage || err?.statusMessage || 'ファイルを取り込めませんでした。'
  } finally {
    uploading.value = false
    // Cho phép chọn LẠI đúng file vừa chọn (sau khi sửa trong Excel)
    if (fileInput.value) fileInput.value.value = ''
  }
}

// --- xoá ---
const removingId = ref('')

async function removePromo(id) {
  if (!window.confirm('この特売を削除しますか？')) return
  removingId.value = id
  try {
    await $fetch('/api/promos', { method: 'DELETE', params: { id } })
    await refresh()
  } catch (e) {
    window.alert(e?.data?.statusMessage || '削除に失敗しました。')
  } finally {
    removingId.value = ''
  }
}

useHead({ title: '特売情報 管理画面｜遠鉄ストア' })
</script>

<style scoped lang="scss">
.ap-note {
  margin: 0 12px 18px;
  padding: 12px 14px;
  background: #fff5f3;
  border-left: 4px solid #e53935;
  font-size: 13px;
  line-height: 1.8;
}

.ap-badge-demo {
  font-size: 10px;
  font-weight: bold;
  padding: 2px 7px;
  border-radius: 3px;
  background: #e53935;
  color: #fff;
  margin-right: 6px;
}

.ap-stats {
  display: flex;
  gap: 10px;
  padding: 0 12px 20px;
  flex-wrap: wrap;
}

.ap-stat {
  flex: 1 1 140px;
  padding: 12px;
  background: #faf7f1;
  border-radius: 6px;
  text-align: center;

  span { display: block; font-size: 11px; color: #888; }
  strong { font-size: 26px; color: #331e0e; }
}

.ap-stat-ok strong { color: #2e7d32; }
.ap-stat-off strong { color: #b3b3b3; }

.ap-sec { padding: 0 12px 26px; }

.ap-h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 5px solid #f3e7cd;
  padding-bottom: 5px;
  margin-bottom: 12px;
}

.ap-toggle {
  margin-left: auto;
  font-size: 12px;
  font-weight: normal;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.ap-sub { font-size: 12px; color: #888; margin: 0 0 8px; }

.ap-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;

  label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 12px;
    color: #666;
  }

  input,
  select {
    height: 38px;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    background: #fff;
  }

  input[type='number'] { width: 120px; }
  input[type='text'] { width: 180px; }
  input[type='date'] { width: 160px; }
}

.ap-btn {
  height: 38px;
  padding: 0 20px;
  border: 2px solid #331e0e;
  border-radius: 19px;
  background: #331e0e;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover { background: #4a2e17; }
}

.ap-btn-ghost {
  background: #fff;
  color: #331e0e;

  &:hover { background: #f3e7cd; }
}

.ap-json {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Consolas, Monaco, monospace;
  font-size: 12px;
  line-height: 1.6;
  resize: vertical;
}

.ap-json-actions { display: flex; gap: 8px; margin-top: 8px; }

.ap-error {
  margin: 8px 0 0;
  font-size: 13px;
  color: #c7273b;
}

.ap-ok {
  margin: 8px 0 0;
  font-size: 13px;
  color: #2e7d32;
}

/* --- ① Excel / CSV --- */
.ap-sec-excel {
  background: #f8f4ea;
  border-radius: 6px;
  padding: 14px 16px;
}

.ap-tpl {
  display: inline-block;
  margin-left: 6px;
  color: #087295;
  font-weight: bold;
  text-decoration: none;

  &:hover { text-decoration: underline; }
}

.ap-upload {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}

/* Ô chọn file gốc của trình duyệt không đồng bộ với giao diện site,
   nên giấu đi và bọc bằng <label> tự tạo kiểu */
.ap-file {
  cursor: pointer;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
  }

  span {
    display: inline-block;
    height: 40px;
    line-height: 36px;
    padding: 0 20px;
    border: 2px dashed #331e0e;
    border-radius: 5px;
    background: #fff;
    font-size: 14px;
    font-weight: bold;
    color: #331e0e;
  }

  &:hover span { background: #fffaf0; }
}

.ap-file-hint {
  font-size: 11px;
  color: #888;
}

.ap-result {
  margin-top: 12px;
  padding: 12px 14px;
  background: #fff;
  border: 1px solid #e3d9c6;
  border-radius: 5px;
}

.ap-result-head {
  margin: 0;
  font-size: 13px;
}

.ap-result-ok { color: #2e7d32; font-weight: bold; }
.ap-result-ng { color: #c7273b; font-weight: bold; }

.ap-result-errs {
  margin: 8px 0 0;
  padding-left: 18px;
  font-size: 12px;
  color: #a3541f;
  line-height: 1.8;
}

.ap-result-note {
  margin: 8px 0 0;
  font-size: 12px;
  color: #666;
}

.ap-ok {
  margin: 8px 0 0;
  font-size: 13px;
  color: #2e7d32;
}

.ap-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;

  th {
    background: #f3e7cd;
    padding: 8px;
    text-align: left;
    font-weight: normal;
    border: 1px solid #ddd;
  }

  td {
    padding: 8px;
    border: 1px solid #eee;
  }

  .num { text-align: right; }

  tr.expired {
    background: #fafafa;
    color: #aaa;
  }
}

.ap-sale { color: #c7273b; font-weight: bold; }

.ap-tag {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  white-space: nowrap;
}

.ap-tag-on { background: #e8f5e9; color: #2e7d32; }
.ap-tag-off { background: #eee; color: #999; }

.ap-del {
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  padding: 3px 10px;
  font-size: 12px;
  cursor: pointer;
  color: #777;

  &:hover { background: #c7273b; color: #fff; border-color: #c7273b; }
}

.ap-empty { text-align: center; color: #999; padding: 20px; }

.ap-local-note {
  margin-top: 10px;
  font-size: 12px;
  color: #888;
}

.ap-back { margin-top: 40px; }

@media only screen and (max-width: 767px) {
  .ap-table { font-size: 11px; }
  .ap-form input[type='text'] { width: 100%; }
}
</style>
