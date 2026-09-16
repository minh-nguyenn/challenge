<template>
  <div class="main-img-container">
    <img :src="special.main_img?.img_pc?.url" class="main-img pc-img" />
    <img :src="special.main_img?.img_sp ? special.main_img?.img_sp?.url : special.main_img?.img_pc?.url" class="main-img sp-img" />
  </div>
</template>

<script>
export default {
  props: {
    special: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.main-img {
  width: 100%;
  height: auto;
  margin: 24px 0 100px;
  max-height: 480px;
  object-fit: contain;
}

.pc-img {
  display: block;
}

.sp-img {
  display: none;
}

@media (max-width: 960px) {
  .main-img {
    margin: 24px 0 64px;
    max-height: unset
  }
  .pc-img {
    display: none;
  }

  .sp-img {
    display: block;
    height: auto;
  }
}
</style>
