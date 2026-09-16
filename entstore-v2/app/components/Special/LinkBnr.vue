<template>
  <div class="banner-grid">
    <div v-for="(bnr, bnrIndex) in content.bnr_list" :key="`bnr-${bnrIndex}`" class="banner-item">
      <a 
        :href="bnr.url || '#'" 
        :target="bnr.is_new_tab ? '_blank' : '_self'" 
        rel="noopener noreferrer"
      >
        <div class="wrap-img">
          <div class="img-bg" :style="{ backgroundImage: `url(${bnr.bnr_img?.url})` }"></div>
          <div class="default-img">
            <img 
              :src="bnr.bnr_img?.url" 
              :alt="bnr.title || ''" 
              class="banner-image" 
              @load="checkImageAspectRatio($event)"
            />
          </div>
        </div>
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
  methods: {
    getBgStyle(bgColors) {
      if (bgColors && bgColors.length > 0) {
        return {
          backgroundColor: bgColors[0].value,
          paddingTop: '50px',
          paddingBottom: '50px'
        }
      }
      return {}
    },
    checkImageAspectRatio(event) {
      const img = event.target;
      const isSquare = Math.abs(img.naturalWidth / img.naturalHeight - 1) < 0.05;
      
      if (isSquare) {
        img.style.objectFit = 'cover';
      } else {
        img.style.objectFit = 'contain';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (min-width: 960px) {
  .banner-grid {
    grid-template-columns: repeat(3, 1fr);
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

.wrap-img {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: 16px;
}

.img-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  opacity: 0.7;
  transform: scale(1.1);
}

.default-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: none;
  max-height: none;
}
</style>
