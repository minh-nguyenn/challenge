<script setup>
/**
 * Thay <validation-provider> cua vee-validate 3 (chi chay tren Vue 2).
 *
 * Cach dung trong 2 trang form (36 lan, dang giong het nhau):
 *   <validation-provider v-slot="{ errors }" rules="required|email" tag="td" name="email">
 *     <input v-model="formModel.email">
 *     <div class="errorTxt">{{ errors[0] && '...' }}</div>
 *   </validation-provider>
 *
 * `tag` quyet dinh the boc (thuong la td trong bang) — phai giu dung, neu khong
 * bo cuc bang se vo.
 *
 * Provider tu dang ky voi ValidationObserver cha de nut gui kiem tra duoc
 * toan bo bieu mau cung luc.
 */
import { ref, inject, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import { runRules } from '~/utils/validate-rules.js'

const props = defineProps({
  rules: { type: String, default: '' },
  name: { type: String, default: '' },
  tag: { type: String, default: 'span' },
  vid: { type: String, default: '' },
})

const errors = ref([])
const observer = inject('validationObserver', null)
const inst = getCurrentInstance()

/** Doc gia tri hien tai tu the <input>/<select>/<textarea> ben trong slot */
function currentValue() {
  const el = inst?.vnode?.el
  if (!el || !el.querySelector) return ''
  const f = el.querySelector('input, select, textarea')
  if (!f) return ''
  if (f.type === 'checkbox') return f.checked ? f.value || true : ''
  return f.value
}

function validate() {
  errors.value = runRules(props.rules, currentValue(), props.name, (other) => {
    const el = inst?.vnode?.el?.closest('form') || document
    const f = el.querySelector(`[name="${other}"]`)
    return f ? f.value : undefined
  })
  return errors.value.length === 0
}

function reset() {
  errors.value = []
}

const api = { name: props.name || props.vid, validate, reset, errors }
onMounted(() => observer?.register(api))
onBeforeUnmount(() => observer?.unregister(api))

defineExpose({ validate, reset, errors })
</script>

<template>
  <component :is="tag">
    <slot :errors="errors" :valid="errors.length === 0" :failed="errors.length > 0" />
  </component>
</template>
