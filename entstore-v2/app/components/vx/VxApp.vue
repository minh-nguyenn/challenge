<script setup>
/**
 * Thay <v-app> cua Vuetify 2.
 * DOM duoc chep dung theo ban render that cua www.entstore.co.jp:
 *   <div data-app="true" id="app" class="v-application root v-application--is-ltr theme--light">
 *     <div class="v-application--wrap"> ... </div>
 *   </div>
 * Giu nguyen class de cac <style> trong file .vue goc va vuetify-compat.scss bam dung.
 */
</script>

<template>
  <div id="app" data-app="true" class="v-application root v-application--is-ltr theme--light">
    <div class="v-application--wrap">
      <slot />
    </div>
  </div>
</template>
