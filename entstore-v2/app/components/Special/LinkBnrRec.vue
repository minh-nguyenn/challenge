<template>
  <div class="banner-grid">
    <div v-for="(bnr, bnrIndex) in content.bnr_list" :key="`bnr-${bnrIndex}`" class="banner-item">
      <a 
        :href="bnr.url || '#'" 
        :target="bnr.is_new_tab ? '_blank' : '_self'" 
        rel="noopener noreferrer"
      >
        <img 
          :src="bnr.bnr_img?.url" 
          :alt="bnr.title || ''" 
          class="banner-image" 
        />
      </a>
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
}
</script>

<style lang="scss" scoped>
.banner-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
}

@media (min-width: 960px) {
  .banner-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.banner-item a {
  transition: opacity 0.3s ease;
  display: block;
  width: 100%;
}

.banner-item a:hover {
  opacity: 0.7;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: none;
  max-height: none;
}
</style>
