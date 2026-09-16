<script setup>
/**
 * Thay <v-sheet class="pa-3 v-sheet-custom">. Chi la mot khoi nen trang.
 * Trang recipe co class .v-sheet-custom rieng nen giu nguyen ten class.
 */
</script>

<template>
  <div class="v-sheet theme--light">
    <slot />
  </div>
</template>

<style scoped>
.v-sheet {
  background-color: #fff;
  border-radius: 0;
  color: rgba(0, 0, 0, 0.87);
  display: block;
}

/* Vuetify spacing helper: pa-3 = padding 12px. Trang goc dung dung class nay. */
:global(.pa-3) {
  padding: 12px !important;
}
</style>
