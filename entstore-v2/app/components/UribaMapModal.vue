<script setup>
/**
 * Sơ đồ 売場 dạng MODAL, tự highlight các quầy có trong danh sách đi chợ.
 * Slide 7: 「売場マップ：買い物リストの売場を自動ハイライト」
 *
 * Sơ đồ vẽ bằng SVG nên co giãn theo màn hình, không cần file ảnh.
 */
import { computed, watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { URIBA } from '~~/shared/uriba.mjs'
import { useShoppingList } from '~/composables/useShoppingList'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  // Danh sách key quầy cần làm nổi bật, vd ['seika','seiniku']
  highlight: { type: Array, default: () => [] },
  title: { type: String, default: '売場マップ' },
})
const emit = defineEmits(['update:modelValue'])

/**
 * Bố cục quầy trong siêu thị.
 * Theo lối đi thường gặp ở siêu thị Nhật: vào cửa gặp 青果 trước,
 * đi vòng theo tường là 鮮魚 → 精肉 → 日配, giữa sảnh là グロサリー.
 */
const LAYOUT = {
  seika: { x: 20, y: 40, w: 150, h: 90 },
  sengyo: { x: 180, y: 40, w: 120, h: 90 },
  seiniku: { x: 310, y: 40, w: 120, h: 90 },
  nippai: { x: 440, y: 40, w: 120, h: 90 },
  grocery: { x: 100, y: 150, w: 200, h: 110 },
  reito: { x: 310, y: 150, w: 110, h: 110 },
  drink: { x: 430, y: 150, w: 130, h: 110 },
  bakery: { x: 20, y: 280, w: 130, h: 70 },
  sozai: { x: 160, y: 280, w: 140, h: 70 },
}

const isOn = (key) => props.highlight.includes(key)

/**
 * Sau khi bấm 「お店で買う」 ở trang công thức, modal này mở ra — nhưng trước
 * đây từ đây không có lối nào đi tiếp sang 買い物リスト, phải tự để ý link
 * trên thanh tìm kiếm. Nên thêm luôn nút đi tới danh sách (trừ khi đang ở đó).
 */
const { count: listCount } = useShoppingList()
const route = useRoute()
const onListPage = computed(() => route.path === '/list')

const shown = computed(() =>
  URIBA.filter((u) => LAYOUT[u.key]).map((u) => ({ ...u, box: LAYOUT[u.key], on: isOn(u.key) }))
)

function close() {
  emit('update:modelValue', false)
}

// Khoá cuộn nền khi modal mở, và cho phép đóng bằng Esc
function onKey(e) {
  if (e.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  (v) => {
    if (typeof document === 'undefined') return
    document.documentElement.style.overflowY = v ? 'hidden' : ''
    if (v) document.addEventListener('keydown', onKey)
    else document.removeEventListener('keydown', onKey)
  }
)

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflowY = ''
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="um-overlay" @click.self="close">
      <div class="um-dialog" role="dialog" aria-modal="true" :aria-label="title">
        <header class="um-head">
          <h3>{{ title }}</h3>
          <button type="button" class="um-close" aria-label="閉じる" @click="close">×</button>
        </header>

        <div class="um-body">
          <p class="um-note">
            買い物リストの材料がある売場を
            <span class="um-note-hl">ハイライト</span>
            しています。
          </p>

          <svg class="um-map" viewBox="0 0 580 370" role="img" aria-label="店内売場マップ">
            <!-- nền sàn -->
            <rect x="10" y="10" width="560" height="350" rx="8" fill="#faf7f1" stroke="#d9cdb8" />

            <!-- lối vào -->
            <rect x="440" y="300" width="120" height="50" rx="6" fill="#eee" stroke="#ccc" />
            <text x="500" y="330" text-anchor="middle" class="um-label-sm">入口・レジ</text>

            <g v-for="u in shown" :key="u.key">
              <rect
                :x="u.box.x"
                :y="u.box.y"
                :width="u.box.w"
                :height="u.box.h"
                rx="6"
                :fill="u.on ? u.color : '#fff'"
                :stroke="u.on ? u.color : '#d5cbb9'"
                :stroke-width="u.on ? 3 : 1"
                :opacity="u.on ? 1 : 0.55"
              />
              <text
                :x="u.box.x + u.box.w / 2"
                :y="u.box.y + u.box.h / 2 - 2"
                text-anchor="middle"
                class="um-label"
                :fill="u.on ? '#fff' : '#8a7c6a'"
              >
                {{ u.label }}
              </text>
              <text
                :x="u.box.x + u.box.w / 2"
                :y="u.box.y + u.box.h / 2 + 16"
                text-anchor="middle"
                class="um-label-sm"
                :fill="u.on ? 'rgba(255,255,255,.9)' : '#b3a795'"
              >
                {{ u.desc }}
              </text>
            </g>
          </svg>

          <ul class="um-legend">
            <li v-for="u in shown.filter((x) => x.on)" :key="u.key">
              <span class="um-dot" :style="{ background: u.color }" />{{ u.label }}
            </li>
            <li v-if="!highlight.length" class="um-legend-empty">
              （買い物リストが空です）
            </li>
          </ul>
        </div>

        <!-- Lối đi tiếp: xem chính danh sách vừa thêm -->
        <ClientOnly>
          <footer v-if="!onListPage" class="um-foot">
            <p class="um-foot-count">
              買い物リスト：<strong>{{ listCount }}</strong> 品
            </p>
            <NuxtLink to="/list" class="um-foot-go" @click="close">
              📝 買い物リストを見る
            </NuxtLink>
          </footer>
        </ClientOnly>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.um-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(33, 33, 33, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.um-dialog {
  width: 720px;
  max-width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
}

.um-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #331e0e;
  border-radius: 8px 8px 0 0;

  h3 {
    margin: 0;
    color: #fff;
    font-size: 16px;
    font-weight: normal;
  }
}

.um-close {
  border: none;
  background: transparent;
  color: #fff;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  padding: 0 4px;

  &:hover { opacity: 0.7; }
}

.um-body {
  padding: 16px;
}

.um-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding: 12px 16px;
  border-top: 1px solid #eee;
  background: #faf7f1;
  border-radius: 0 0 8px 8px;
}

.um-foot-count {
  margin: 0;
  font-size: 13px;
  color: #6b5a48;

  strong {
    font-size: 16px;
    color: #331e0e;
  }
}

.um-foot-go {
  display: inline-block;
  padding: 9px 18px;
  border-radius: 4px;
  background: #c7273b;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #a81f30;
  }
}

.um-note {
  margin: 0 0 12px;
  font-size: 13px;
  color: #666;
}

.um-note-hl {
  background: #fff3cd;
  padding: 1px 4px;
  border-radius: 3px;
}

.um-map {
  width: 100%;
  height: auto;
  display: block;
}

.um-label {
  font-size: 15px;
  font-weight: bold;
}

.um-label-sm {
  font-size: 10px;
  fill: #999;
}

.um-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #444;
  }
}

.um-legend-empty {
  color: #999;
}

.um-dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  display: inline-block;
}
</style>
