<template>
    <div :class="['bg-editor-section', { 'has-bg-color': hasBgColor }]" :style="getBgStyle(content.bg_colour)">
      <div v-for="(editor, editorIndex) in content.editor" :key="`editor-${editorIndex}`">
        <SpecialCustomEditor :editor="editor" />
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
  computed: {
    hasBgColor() {
      return this.content.bg_colour && this.content.bg_colour.length > 0;
    }
  },
  methods: {
    getBgStyle(bgColors) {
      if (bgColors && bgColors.length > 0) {
        return {
          backgroundColor: bgColors[0].value,
          paddingTop: '50px',
          paddingBottom: '50px',
          paddingLeft: '16px',
          paddingRight: '16px'
        }
      }
      return {}
    },
  }
}
</script>

<style lang="scss" scoped>
// .bg-editor-section.has-bg-color {
//   ::v-deep .rich-text-content * {
//     line-height: 1.2 !important;
//     margin-bottom: 0 !important;
//   }

//   ::v-deep .rich-text-content p {
//     line-height: 1.8 !important;
//     margin-bottom: 1em !important;
//   }

//   ::v-deep .rich-text-content p:last-child {
//      margin-bottom: 0 !important;
//   }
// }
</style>
