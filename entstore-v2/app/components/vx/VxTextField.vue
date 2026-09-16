<script setup>
/**
 * Thay <v-text-field v-model dense outlined>. Dung 2 lan (recipe/index, recipe/archive).
 * Giu cau truc .v-input > .v-input__control > .v-input__slot > fieldset + .v-text-field__slot
 * vi CSS cua trang bam vao cac lop nay.
 */
const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  dense: { type: Boolean, default: false },
  outlined: { type: Boolean, default: false },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div
    class="v-input theme--light v-text-field v-text-field--is-booted"
    :class="{
      'v-input--dense': dense,
      'v-text-field--enclosed v-text-field--outlined': outlined,
      'v-input--is-dirty': !!modelValue,
    }"
  >
    <div class="v-input__control">
      <div class="v-input__slot">
        <fieldset v-if="outlined" aria-hidden="true">
          <legend style="width: 0px"><span class="notranslate">&#8203;</span></legend>
        </fieldset>
        <div class="v-text-field__slot">
          <input
            :type="type"
            :placeholder="placeholder"
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* So do lay tu Vuetify: outlined + dense => cao 40px, bo goc 4px, vien #0000006b */
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
  min-height: inherit;
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

.v-text-field--outlined:focus-within fieldset {
  border: 2px solid #009eee;
}

.v-text-field__slot {
  display: flex;
  flex: 1 1 auto;
  position: relative;
}

.v-input--dense .v-input__slot {
  min-height: 40px;
}

.v-text-field--outlined .v-text-field__slot input {
  padding: 8px 12px;
}

input {
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  line-height: 20px;
  max-width: 100%;
}
</style>
