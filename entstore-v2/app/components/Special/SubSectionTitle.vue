<template>
  <div>
    <h2 v-if="subSection.title && subSection.title.length" class="sub-section-title">
      {{ subSection.title[0]?.value }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    subSection: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.sub-section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 32px;
  padding: 16px;
  color: #3c3c3c;
  background-color: #f2f2f2;
  border-left: 4px solid #CF2339;
}

@media (max-width: 960px) {
  .sub-section-title {
    font-size: 18px;
    padding: 12px;
  }
}
</style>
