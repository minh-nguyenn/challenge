<template>
  <div class="product-grid">
    <a :href="item.url ? item.url : null" :target=" item.is_external ?  '_blank' : '_self'"  v-for="(item, itemIndex) in content.prod_item"
      :key="`prod-${itemIndex}`" class="prod-item" :class="{ 'disabled-link': !item.url }">
      <div v-if="item.img?.url" class="prod-image-container">
        <div class="prod-image__bg" :style="{ backgroundImage: `url(${item.img?.url})` }"></div>
        <div class="prod-image__fg">
          <img :src="item.img?.url" class="prod-image" @load="checkImageAspectRatio($event)" />
        </div>
      </div>
      <div class="prod-info">
        <p v-if="item.brand" class="prod-info__brand">〈{{ item.brand }}〉</p>
        <p v-if="item.title" class="prod-info__title">{{ item.title }}</p>
        <p v-if="item.description" class="prod-info__description" v-html="formatDescription(item.description)"></p>
        <p v-if="item.price" class="prod-info__price">
          <span class="price__number">{{ formatPrice(item.price) }}</span>
          円(税込)
        </p>
      </div>
    </a>
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
    formatDescription(text) {
      if (!text) return '';
      return text.replace(/\n/g, '<br>');
    },
    formatPrice(price) {
      return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
.product-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (min-width: 960px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.prod-item {
  margin-bottom: 16px;
  text-decoration: none;
  color: unset;
  transition: opacity 0.3s ease;
}

.prod-item:hover {
  opacity: 0.7;
}

.prod-item.disabled-link {
  pointer-events: none;
  cursor: default;
}

.prod-image-container {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.prod-image__bg {
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

.prod-image__fg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prod-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.prod-info {
  margin-top: 8px;
}

.prod-info__brand {
  font-size: 16px;
  font-weight: bold;
  margin: 0px 0px 8px;
}

.prod-info__title {
  font-size: 16px;
  font-weight: bold;
  margin: 0px 0px 8px;
}

.prod-info__price {
  font-size: 12px;
  margin: 0px;
}

.price__number {
  font-size: 16px;
  font-weight: bold;
}

.prod-info__description {
  font-size: 14px;
  line-height: 1.3;
  margin: 0px 0px 8px;

  overflow-wrap: break-word;
  word-break: break-all;
}

@media (max-width: 960px) {
  .prod-info__brand {
    font-size: 14px;
  }

  .prod-info__title {
    font-size: 14px;
  }

  .prod-info__price {
    font-size: 11px;
  }

  .price__number {
    font-size: 14px;
  }

  .prod-info__description {
    font-size: 12px;
  }
}
</style>
