<template>
  <div>
    <CollapseItem v-for="(accordion, accordionIndex) in content.accordion_list" :key="`accordion-${accordionIndex}`" class="accordion-item" :title="accordion.title">
      <div v-for="(editor, editorIndex) in accordion.editor" :key="`accordion-editor-${editorIndex}`" class="accordion-content">
        <SpecialCustomEditor :editor="editor" />
      </div>
    </CollapseItem>
  </div>
</template>

<script>
import CollapseItem from './CollapseItem.vue';

export default {
  components: {
    CollapseItem
  },
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.accordion-item {
  margin-bottom: 8px;
}

.accordion-content {
  padding: 32px 0;
}

@media (max-width: 960px) {
  .accordion-content {
    padding: 16px 0;
  }
}
</style>
