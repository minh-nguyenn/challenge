<template>
  <main>
    <section class="container">
      <SpecialMainImg v-if="special && special.main_img" :special="special"></SpecialMainImg>

      <div v-for="(sectionItem, sectionIndex) in special.section_list" :key="`section-${sectionIndex}`">
        <SpecialIndexList v-if="sectionItem.is_index" :sectionItem="sectionItem" :sectionIndex="sectionIndex">
        </SpecialIndexList>

        <div v-for="(subSection, subIndex) in sectionItem.section" :key="`sub-${sectionIndex}-${subIndex}`"
          class="sub-section">
          <div :id="sectionItem.is_index ? `section-${sectionIndex}-${subIndex}` : ''">
            <SpecialSubSectionTitle v-if="subSection.title && subSection.title.length" :subSection="subSection">
            </SpecialSubSectionTitle>

            <div v-for="(content, contentIndex) in subSection.content" :key="`content-${contentIndex}`">
              <SpecialBgEditor v-if="content.fieldId === SECTION_NAME.BG_EDITOR" :content="content"></SpecialBgEditor>

              <SpecialLinkBnr v-else-if="content.fieldId === SECTION_NAME.LINK_BNR" :content="content"></SpecialLinkBnr>

              <SpecialLinkBnrRec v-else-if="content.fieldId === SECTION_NAME.LINK_BNR_REC" :content="content">
              </SpecialLinkBnrRec>

              <div v-else-if="content.fieldId === SECTION_NAME.PROD">
                <SpecialProdIntro v-if="content.prod_intro && content.prod_intro.length" :content="content">
                </SpecialProdIntro>

                <SpecialProdGrid v-if="content.prod_item && content.prod_item.length" :content="content">
                </SpecialProdGrid>
              </div>

              <SpecialAccordionItem v-else-if="content.fieldId === SECTION_NAME.ACCORDION" :content="content">
              </SpecialAccordionItem>

              <SpecialCustomImage v-else-if="content.fieldId === SECTION_NAME.IMG" :content="content">
              </SpecialCustomImage>

              <ButtonNav
                v-else-if="content.fieldId === SECTION_NAME.BTM_BTN" :title="content.btn_label"
                class="btn-next" :url="content.btn_url" :target="content.is_external ? '_blank' : '_self'">
                <ArrowIcon />
              </ButtonNav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container breadcrumb-container">
      <app-breadcrumb :items="breadcrumbItems"></app-breadcrumb>
    </div>
    <recommend-section></recommend-section>
  </main>
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
    special: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      SECTION_NAME: {
        BG_EDITOR: "section_bg_editor",
        LINK_BNR: "section_link_bnr",
        LINK_BNR_REC: "section_link_bnr_rec",
        PROD: "section_prod",
        ACCORDION: "section_accordion",
        BTM_BTN: "section_btm_btn",
        IMG: "section_image",
      },
    }
  },
  setup() {
    useHead({

        title: this.special.title,

        meta: [

          {

            property: 'og:title',

            content: this.special.title,

          },

        ],

      })
  },
  computed: {
    breadcrumbItems() {
      return [{ title: 'トップ', url: '/' }, { title: this.special.title }]
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1176px;
  margin: 0 auto;
  padding: 0 12px;
}

.sub-section {
  margin-bottom: 100px;
}

@media (max-width: 960px) {
  .sub-section {
    margin-bottom: 64px;
  }
}
</style>
