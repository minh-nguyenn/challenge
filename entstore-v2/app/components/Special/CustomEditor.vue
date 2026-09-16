<template>
  <div class="rich-text-content">
    <div v-for="(node, index) in parsedContent" :key="index">
      <ButtonNav
        v-if="node.type === 'button'"
        :title="node.text"
        class="btn-next"
        :url="node.url"
        :target="node.isExternal ? '_blank' : '_self'"
      >
        <ArrowIcon />
      </ButtonNav>
      <div v-else v-html="node.html" class="html-wrapper"></div>
    </div>
  </div>
</template>

<script>
import ButtonNav from './ButtonNav.vue';
import ArrowIcon from './ArrowIcon.vue'
export default {
  components: {
    ButtonNav,
    ArrowIcon
  },
  props: {
    editor: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      parsedContent: []
    }
  },
  watch: {
    'editor.editor': {
      handler() {
        this.parseContent();
      },
      immediate: true
    }
  },
  created() {
    this.parseContent();
  },
  methods: {
    parseContent() {
      if (!this.editor.editor) {
        this.parsedContent = [];
        return;
      }

      const content = this.editor.editor;
      const segments = [];
      let lastIndex = 0;

      const buttonPattern = /<a\s+[^>]*href="([^"]*)"[^>]*><span\s+class="custom_btn"[^>]*>(.*?)<\/span><\/a>/g;
      let match;

      while ((match = buttonPattern.exec(content)) !== null) {
        const fullMatch = match[0];
        const url = match[1];
        const text = match[2];
        const startIndex = match.index;
        const endIndex = startIndex + fullMatch.length;

        if (startIndex > lastIndex) {
          segments.push({
            type: 'html',
            html: content.slice(lastIndex, startIndex)
          });
        }

        segments.push({
          type: 'button',
          url,
          text,
          isExternal: url.includes('://') || url.startsWith('//') ||
                      /target="_blank"/.test(fullMatch)
        });

        lastIndex = endIndex;
      }

      if (lastIndex < content.length) {
        segments.push({
          type: 'html',
          html: content.slice(lastIndex)
        });
      }

      this.parsedContent = segments;
    }
  },
}
</script>

<style lang="scss" scoped>
.rich-text-content {
  font-size: 16px;
  line-height: 1.8;

  :deep(.html-wrapper > *) {
    margin-bottom: 1em;
  }

  :deep(.html-wrapper > *:last-child) {
    margin-bottom: 0;
  }

  :deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5) {
    line-height: 1.4;
    margin-top: 0;
  }

  :deep(p) {
    margin-top: 0;
  }

  :deep(h1) {
    font-size: 32px;
  }

  :deep(h2) {
    font-size: 24px;
  }

  :deep(h3) {
    font-size: 16px;
  }

  :deep(h4) {
    font-size: 12px;
  }

  :deep(h5) {
    font-size: 10px;
  }

  :deep(p) {
    width: 100%;
    height: auto;
  }

  :deep(table) {
    border-collapse: collapse;
      td, th {
        border: 1px solid black;
        padding: 10px;

        p {
          margin: 0;
          text-align: center;
        }
      }

      th p {
        font-weight: bold;
      }
  }

  :deep(figure) {
    font-size: 12px;
    width: calc(100% - 20vw);
    max-width: 1032px;
    margin: 0 auto;
    height: auto;

    a {
      transition: opacity 0.3s ease;
    }
    a:hover {
      opacity: 0.7;
    }

    img {
      margin: auto;
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  @media (max-width: 960px) {
    font-size: 14px;
    line-height: 1.7;

    :deep(h1) {
      font-size: 26px;
    }

    :deep(h2) {
      font-size: 18px;
    }

    :deep(h3) {
      font-size: 14px;
    }

    :deep(h4) {
      font-size: 12px;
    }

    :deep(h5) {
      font-size: 10px;
    }

    :deep(figure) {
      width: 100%;
    }

    :deep(table) {
      display: block;
      overflow-x: auto;
    }
  }
}
</style>
