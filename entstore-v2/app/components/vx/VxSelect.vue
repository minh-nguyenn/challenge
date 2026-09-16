<script setup>
/**
 * Thay <v-select v-model :items dense outlined>. Dung 1 lan (recipe/archive).
 *
 * Ban goc render ra input readonly + menu noi. O day dung <select> that cua
 * trinh duyet: cung hanh vi, dung duoc ban phim, khong can code menu.
 * Van giu vo ngoai .v-input/.v-select de CSS cua trang bam dung.
 */
const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  items: { type: Array, default: () => [] },
  dense: { type: Boolean, default: false },
  outlined: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue', 'change'])

// items co the la mang chuoi hoac mang {text, value} — ban goc dung ca hai
function label(it) {
  return it && typeof it === 'object' ? (it.text ?? it.value) : it
}
function value(it) {
  return it && typeof it === 'object' ? (it.value ?? it.text) : it
}

function onChange(e) {
  emit('update:modelValue', e.target.value)
  emit('change', e.target.value)
}
</script>

<template>
  <div
    class="v-input theme--light v-text-field v-text-field--is-booted v-select"
    :class="{
      'v-input--dense': dense,
      'v-text-field--enclosed v-text-field--outlined': outlined,
      'v-input--is-dirty': modelValue !== '' && modelValue !== null,
    }"
  >
    <div class="v-input__control">
      <div class="v-input__slot">
        <fieldset v-if="outlined" aria-hidden="true">
          <legend style="width: 0px"><span class="notranslate">&#8203;</span></legend>
        </fieldset>
        <div class="v-select__slot">
          <select :value="modelValue" @change="onChange">
            <option v-for="(it, i) in items" :key="i" :value="value(it)">
              {{ label(it) }}
            </option>
          </select>
          <div class="v-input__append-inner">
            <i aria-hidden="true" class="v-icon notranslate mdi mdi-menu-down theme--light" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-input {
  display: flex;
  flex: 1 1 auto;
  font-size: 16px;
  max-width: 100%;
  text-align: left;
}

.v-input__control {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
}

.v-input__slot {
  align-items: center;
  display: flex;
  margin-bottom: 8px;
  position: relative;
  border-radius: 4px;
  width: 100%;
}

.v-text-field--outlined fieldset {
  border: 1px solid rgba(0, 0, 0, 0.42);
  border-radius: inherit;
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: -5px;
  padding-left: 8px;
  margin: 0;
}

.v-select__slot {
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  position: relative;
  width: 100%;
}

.v-input--dense .v-input__slot {
  min-height: 40px;
}

select {
  /* Phai tat mui ten mac dinh cua trinh duyet, neu khong se hien HAI mui ten
     (mot cua trinh duyet, mot cua .v-input__append-inner) */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  padding: 8px 28px 8px 12px;
  line-height: 20px;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
}

.v-input__append-inner {
  position: absolute;
  right: 6px;
  pointer-events: none;
  display: flex;
  align-items: center;
}

/* Mui ten tam giac cua Vuetify (mdi-menu-down) ve bang CSS de khong can font mdi */
.mdi-menu-down::before {
  content: '';
  display: block;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.54);
}
</style>
