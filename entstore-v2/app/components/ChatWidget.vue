<script setup>
/**
 * Bong bóng chat ở góc phải — Yêu cầu 4.
 *
 * Trả lời dựa trên RAG toàn bộ index, bắt buộc trích nguồn có link,
 * và đáp đúng ngôn ngữ người dùng gõ (Nhật/Việt/Anh/Trung/Hàn/Thái).
 */
import { ref, nextTick, computed } from 'vue'
import { t } from '~~/shared/chat-lang.mjs'

const open = ref(false)
const input = ref('')
const busy = ref(false)
const lang = ref('ja')
const body = ref(null)

// Ngữ cảnh lượt trước, gửi kèm để bot hiểu câu tiếp nối 「他には？」.
// Giữ ở client nên server vẫn stateless, không cần session.
const context = ref(null)

// Lời chào đổi theo ngôn ngữ của câu trả lời gần nhất
const messages = ref([{ role: 'bot', text: t('ja', 'greeting'), sources: [] }])

const placeholder = computed(() => t(lang.value, 'placeholder'))
const title = computed(() => t(lang.value, 'title'))
const sourceLabel = computed(() => t(lang.value, 'sources'))

/** Câu hỏi mẫu — giúp khách biết hỏi được gì, và khoe khả năng đa ngôn ngữ */
const samples = [
  'うなぎの特売はいつまで？',
  'このサイトは何ができますか',
  'Trang này làm được gì?',
  'What can this website do?',
]

async function send(text) {
  const msg = (text ?? input.value).trim()
  if (!msg || busy.value) return

  messages.value.push({ role: 'user', text: msg })
  input.value = ''
  busy.value = true
  await scrollDown()

  try {
    const r = await $fetch('/api/chat', {
      method: 'POST',
      body: { message: msg, context: context.value },
    })
    context.value = r.context || null
    lang.value = r.lang || 'ja'
    messages.value.push({
      role: 'bot',
      text: r.answer,
      sources: r.sources || [],
      mode: r.mode,
      guard: r.guard,
      // Gợi ý câu hỏi tiếp — hiện khi bot chào hoặc khi không tìm thấy gì,
      // để người dùng không bế tắc không biết hỏi tiếp thế nào.
      suggestions: r.suggestions || [],
    })
  } catch (e) {
    messages.value.push({
      role: 'bot',
      text: t(lang.value, 'notFound'),
      sources: [],
    })
  } finally {
    busy.value = false
    await scrollDown()
  }
}

async function scrollDown() {
  await nextTick()
  if (body.value) body.value.scrollTop = body.value.scrollHeight
}

function toggle() {
  open.value = !open.value
  if (open.value) scrollDown()
}
</script>

<template>
  <div class="cw">
    <button
      type="button"
      class="cw-bubble"
      :class="{ open }"
      :aria-label="title"
      @click="toggle"
    >
      <span v-if="!open">💬</span>
      <span v-else>×</span>
    </button>

    <div v-if="open" class="cw-panel">
      <header class="cw-head">
        <span class="cw-title">{{ title }}</span>
        <span class="cw-lang">{{ lang.toUpperCase() }}</span>
      </header>

      <div ref="body" class="cw-body">
        <div v-for="(m, i) in messages" :key="i" class="cw-msg" :class="m.role">
          <p class="cw-text">{{ m.text }}</p>

          <!-- Bắt buộc trích nguồn có link (Yêu cầu 4) -->
          <div v-if="m.sources?.length" class="cw-sources">
            <p class="cw-sources-label">{{ sourceLabel }}</p>
            <ul>
              <li v-for="s in m.sources" :key="s.route">
                <a :href="s.route">{{ s.title }}</a>
                <small>{{ s.type }}</small>
              </li>
            </ul>
          </div>

          <!-- Gợi ý câu hỏi tiếp theo, bấm là hỏi luôn -->
          <div v-if="m.suggestions?.length" class="cw-next">
            <button v-for="q in m.suggestions" :key="q" type="button" @click="send(q)">
              {{ q }}
            </button>
          </div>

          <p v-if="m.role === 'bot' && m.mode" class="cw-mode">
            {{ m.mode === 'ai' ? 'AI' : 'ルールベース' }}
            <template v-if="m.guard === 'store-contact'">・店舗確認をご案内</template>
          </p>
        </div>

        <div v-if="busy" class="cw-msg bot">
          <p class="cw-text cw-typing">…</p>
        </div>
      </div>

      <div v-if="messages.length <= 1" class="cw-samples">
        <button v-for="s in samples" :key="s" type="button" @click="send(s)">{{ s }}</button>
      </div>

      <form class="cw-input" @submit.prevent="send()">
        <input v-model="input" type="text" :placeholder="placeholder" :disabled="busy" />
        <button type="submit" :disabled="busy || !input.trim()">➤</button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cw {
  position: fixed;
  right: 20px;
  /*
    Tự nâng lên khi thanh giỏ hàng hiện ở đáy màn hình — CartBar ghi chiều cao
    thật của nó vào `--cart-bar-h`. Chưa có thanh thì biến không tồn tại và
    giá trị dự phòng 0px giữ nguyên vị trí cũ.
  */
  bottom: calc(20px + var(--cart-bar-h, 0px));
  z-index: 50;
  transition: bottom 0.18s ease;

  @media only screen and (max-width: 767px) {
    right: 12px;
    bottom: calc(12px + var(--cart-bar-h, 0px));
  }
}

.cw-bubble {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: #c7273b;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.26);

  &:hover { background: #a81f31; }
  &.open { background: #331e0e; }
}

.cw-panel {
  position: absolute;
  right: 0;
  bottom: 68px;
  width: 360px;
  max-width: calc(100vw - 24px);
  height: 480px;
  max-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.cw-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #331e0e;
  color: #fff;
}

.cw-title { font-size: 14px; }

.cw-lang {
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
}

.cw-body {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 12px;
  background: #faf7f1;
}

.cw-msg {
  margin-bottom: 12px;

  &.user .cw-text {
    margin-left: auto;
    background: #331e0e;
    color: #fff;
  }
}

.cw-text {
  max-width: 88%;
  margin: 0;
  padding: 9px 12px;
  border-radius: 12px;
  background: #fff;
  font-size: 13px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.cw-typing { color: #999; letter-spacing: 3px; }

.cw-sources {
  margin-top: 6px;
  padding: 8px 10px;
  background: #fff;
  border-left: 3px solid #c7273b;
  border-radius: 4px;

  ul { margin: 0; padding: 0; list-style: none; }

  li {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 0;
  }

  a {
    font-size: 12px;
    color: #087295;
    text-decoration: underline;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  small { font-size: 10px; color: #aaa; flex: 0 0 auto; }
}

.cw-sources-label {
  margin: 0 0 4px;
  font-size: 10px;
  color: #999;
}

.cw-next {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 7px;

  button {
    font-size: 11px;
    padding: 4px 10px;
    border: 1px solid #d9cdb8;
    border-radius: 12px;
    background: #fff;
    color: #6b5a48;
    cursor: pointer;
    text-align: left;

    &:hover {
      background: #331e0e;
      border-color: #331e0e;
      color: #fff;
    }
  }
}

.cw-mode {
  margin: 4px 0 0;
  font-size: 10px;
  color: #bbb;
}

.cw-samples {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 8px 10px;
  background: #fff;
  border-top: 1px solid #eee;

  button {
    font-size: 11px;
    padding: 4px 9px;
    border: 1px solid #ddd;
    border-radius: 12px;
    background: #fff;
    color: #666;
    cursor: pointer;

    &:hover { background: #f3e7cd; }
  }
}

.cw-input {
  display: flex;
  gap: 6px;
  padding: 10px;
  border-top: 1px solid #eee;
  background: #fff;

  input {
    flex: 1 1 auto;
    height: 38px;
    padding: 0 12px;
    border: 1px solid #ccc;
    border-radius: 19px;
    font-size: 13px;
    outline: none;

    &:focus { border-color: #331e0e; }
  }

  button {
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 50%;
    background: #c7273b;
    color: #fff;
    cursor: pointer;

    &:disabled { background: #ddd; cursor: default; }
  }
}
</style>
