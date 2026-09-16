<template>
  <div class="index-list">
    <div class="index-title">目次</div>
      <ul>
        <li v-for="(subSection, subIndex) in sectionItem.section" :key="`index-link-${subIndex}`" class="index-item">
          <a
            v-if="subSection.title && subSection.title.length"
            @click.prevent="scrollWithOffset(sectionIndex, subIndex)"
            style="cursor: pointer;"
          >
            {{ subSection.title[0].value }}
          </a>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    sectionItem: {
      type: Object,
      default: () => ({}),
    },
    sectionIndex: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    scrollWithOffset(sectionIndex, subIndex) {
      const targetId = `section-${sectionIndex}-${subIndex}`;
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.index-list {
  position: relative;
  margin-bottom: 100px;
  border: 2px solid #d9d9d9;
}

.index-list:before {
  content: "";
  position: absolute;
  top: -2px;
  left: 32px;
  width: 40px;
  height: 2px;
  background-color: #CF2339;
}

.index-title {
  padding: 12px 32px;
  font-size: 20px;
  font-weight: bold;
  color: #3c3c3c;
}

.index-list ul {
  padding: 32px !important;
  background-color: rgba(#CF2339, 0.05);
  list-style: none;
}

.index-item {
  position: relative;
  margin-bottom: 20px;
  font-size: 18px;
  padding-left: 16px;
  color: #3c3c3c;
}

.index-item:last-child { margin-bottom: 0; }

.index-item:before {
  content: "・";
  position: absolute;
  font-weight: bold;
  left: -4px;
  color: #CF2339;
}

.index-list a {
  color: unset;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.index-list a:hover {
  opacity: 0.7;
}

@media (max-width: 960px) {
  .index-list {
    margin-bottom: 64px;
  }

  .index-title {
    padding: 12px 16px;
    font-size: 18px;
  }

  .index-list ul {
    padding: 16px !important;
  }

  .index-item {
    font-size: 14px;
  }
}
</style>
