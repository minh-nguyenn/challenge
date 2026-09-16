<script setup>
/**
 * Thay <v-skeleton-loader type="card" max-width="300">.
 * Chi hien khi dang tai them cong thuc (infinite scroll) nen chi can khung xam
 * nhap nhay dung kich thuoc, khong can tai tao het cac kieu cua Vuetify.
 */
defineProps({
  type: { type: String, default: 'card' },
  maxWidth: { type: [String, Number], default: null },
})
</script>

<template>
  <div
    class="v-skeleton-loader theme--light v-skeleton-loader--is-loading"
    :style="maxWidth ? { maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth } : null"
  >
    <div class="v-skeleton-loader__image v-skeleton-loader__bone" />
    <div class="v-skeleton-loader__card-heading">
      <div class="v-skeleton-loader__heading v-skeleton-loader__bone" />
    </div>
  </div>
</template>

<style scoped>
.v-skeleton-loader {
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
}

.v-skeleton-loader__bone {
  background: rgba(0, 0, 0, 0.12);
  position: relative;
  overflow: hidden;
}

.v-skeleton-loader__image {
  height: 190px;
}

.v-skeleton-loader__card-heading {
  padding: 16px;
}

.v-skeleton-loader__heading {
  border-radius: 4px;
  height: 20px;
  width: 60%;
}

/* Hieu ung quet sang giong Vuetify */
.v-skeleton-loader--is-loading .v-skeleton-loader__bone::after {
  animation: vx-loading 1.5s infinite;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
}

@keyframes vx-loading {
  to {
    transform: translateX(100%);
  }
}
</style>
