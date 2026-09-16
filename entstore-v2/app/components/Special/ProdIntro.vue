<template>
  <div class="prod-intro">
    <div
      v-for="(intro, introIndex) in content.prod_intro"
      :key="`intro-${introIndex}`"
      class="prod-intro-item"
      :class="{'reverse-layout': introIndex % 2 !== 0}">

      <div class="prod-intro-content">
        <div class="prod-intro-image">
          <img :src="intro.img?.url" />
        </div>
        <div class="prod-intro-text">
          <div v-for="(editor, editorIndex) in intro.editor" :key="`intro-editor-${editorIndex}`">
            <SpecialCustomEditor :editor="editor" />
          </div>
        </div>
      </div>

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
.prod-intro {
  margin-bottom: 32px;
}

.prod-intro-item {
  margin-bottom: 32px;
}

.prod-intro-content {
  display: flex;
  flex-direction: column;
}

.prod-intro-text {
  background-color: rgba(#CF2339, 0.05);
  align-content: center;
  padding: 16px;
}

@media (min-width: 960px) {
  .prod-intro-content {
    flex-direction: row;
  }

  .prod-intro-image {
    width: 50%;
  }

  .prod-intro-text {
    width: 50%;
  }

  .reverse-layout .prod-intro-content {
    flex-direction: row-reverse;
  }
}

.prod-intro-image {
  display: flex;
}

.prod-intro-image img {
  width: 100%;
  height: auto;
}
</style>
