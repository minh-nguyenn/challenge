<script setup>
/**
 * Thay <v-breadcrumbs :items divider=">">  — chiem 57/67 lan dung Vuetify.
 *
 * DOM goc (lay tu www.entstore.co.jp/faq/, khong phai doan):
 *   <ul class="v-breadcrumbs theme--light">
 *     <li><a href="/" class="v-breadcrumbs__item">ホーム</a></li>
 *     <li class="v-breadcrumbs__divider">&gt;</li>
 *     <li><a href="/faq" class="v-breadcrumbs__item v-breadcrumbs__item--disabled">…</a></li>
 *   </ul>
 *
 * Luu y: muc disabled VAN la the <a> co href (khong phai <span>) — CSS cua site
 * dua vao dieu do (.v-breadcrumbs a { color: #333 } o mobile), va li:nth-child(even)
 * chinh la cac divider.
 */
defineProps({
  items: { type: Array, default: () => [] },
  divider: { type: String, default: '/' },
})
</script>

<template>
  <ul class="v-breadcrumbs theme--light">
    <template v-for="(item, i) in items" :key="i">
      <li v-if="i > 0" class="v-breadcrumbs__divider">{{ divider }}</li>
      <li>
        <a
          :href="item.href"
          class="v-breadcrumbs__item"
          :class="{ 'v-breadcrumbs__item--disabled': item.disabled }"
          >{{ item.text }}</a
        >
      </li>
    </template>
  </ul>
</template>
