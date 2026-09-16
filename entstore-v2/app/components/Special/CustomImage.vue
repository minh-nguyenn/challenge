<template>
  <div class="image-grid" :class="{ 'single-image': content.img_list && content.img_list.length === 1 }">
    <div v-for="(bnr, bnrIndex) in content.img_list" :key="`bnr-${bnrIndex}`" class="image-container">
        <img
          :src="bnr.img?.url"
          :alt="bnr.caption || ''"
          class="img-item"
        />
        <p v-if="bnr.caption" class="img-caption" v-html="formatCaption(bnr.caption)"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatCaption(caption) {
      return caption?.replace(/\n/g, '<br>');
    }
  }
}
</script>

<style lang="scss" scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
}

.single-image {
  display: flex;
  justify-content: center;

  .image-container {
    max-width: 80%;
  }
}

.image-container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 960px) {
  .image-grid:not(.single-image) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.img-item {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: none;
}

.img-caption {
  font-size: 14px;
  line-height: 1.4;
  margin-top: 8px;
}
</style>
