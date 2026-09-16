<script setup>
/**
 * Thay <ValidationObserver> cua vee-validate 3.
 *
 * Cach dung trong 2 trang form:
 *   <ValidationObserver ref="x" v-slot="observeSlot">
 *     <div v-if="checkError(observeSlot.errors)"> ... getErrorList(observeSlot) ...
 *
 * Trang goi qua ref: this.$refs.x.validate() -> Promise<boolean>.
 * Slot prop `errors` la object { tenTruong: [loi...] } — dung dang ma
 * checkError()/getErrorList() cua trang mong doi.
 */
import { ref, reactive, provide } from 'vue'

const providers = ref([])
const errors = reactive({})

provide('validationObserver', {
  register(p) {
    providers.value.push(p)
    errors[p.name] = []
  },
  unregister(p) {
    providers.value = providers.value.filter((x) => x !== p)
    delete errors[p.name]
  },
})

async function validate() {
  let ok = true
  for (const p of providers.value) {
    const good = p.validate()
    errors[p.name] = [...p.errors.value]
    if (!good) ok = false
  }
  return ok
}

function reset() {
  for (const p of providers.value) {
    p.reset()
    errors[p.name] = []
  }
}

defineExpose({ validate, reset, errors })
</script>

<template>
  <div class="validation-observer">
    <slot :errors="errors" :invalid="false" :validate="validate" :reset="reset" />
  </div>
</template>

<style scoped>
/* Ban goc khong boc them the nao — giu trong suot ve mat bo cuc */
.validation-observer {
  display: contents;
}
</style>
