<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>チャチャッとクッキング</h2>
      <div class="lead d-none-mobile">
        かんたん！おいしい！スピードクッキング<br>遠鉄ストア店頭でレシピカードを配布しています
      </div>
      <div class="lead d-none-des">
        かんたん！おいしい！スピードクッキング！<br>遠鉄ストア店頭でレシピカードを配布しています。
      </div>
      <AppArticle title="レシピ検索" class="filter-box">
        <div class="searchBoxInner">
          <div class="form-search">
            <div class="form-group">
              <label>カテゴリ</label>
              <VxSelect
                v-model="categorySelected"
                :items="recipeCategories"
                dense
                outlined
                class="w-75 form_recipe_category-custom"
              ></VxSelect>
            </div>
            <div class="form-group form-txt-search-custom">
              <label>キーワード</label>
              <VxTextField v-model="textFilter" dense outlined></VxTextField>
            </div>
          </div>
          <div class="searchBtn" @click="filterRecipe">
            <div class="btn-inner">検索</div>
          </div>
        </div>
      </AppArticle>

      <div class="recipe-list">
        <RecipeBox
          v-for="(recipe, index) in recipeList"
          :key="recipe.id"
          :recipe-item="recipe"
          :class="{ 'zebra-stripping-class': index % 2 === 1 }"
        ></RecipeBox>
      </div>

      <AppButtonNavigation title="前のページへ戻る" is-back href="/service/recipe"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>
import AppArticle from "~/components/App/Article.vue";
import RecipeBox from "~/components/RecipeBox.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { fetchDataV2 } from "~/utils/index.js";

export default {
  components: { AppButtonNavigation, RecipeBox, AppArticle },

  // asyncData() cua Nuxt 2 -> setup() cua Vue 3.
  // Dung useAsyncData nen VAN chay tren server (SSR) nhu ban goc.
  async setup() {
    const { query, $microcms } = buildLegacyContext()

    const { data: __d } = await useAsyncData(
      'page:' + useRoute().fullPath,
      async () => {

        if (import.meta.server) {

        const limitPerFetch = 100;

        let offset = 0;

        const allContents = [];

        const paramsRequest = [];


        if (query.recipe_category && query.recipe_category !== 'すべて') {

          paramsRequest.push(`category[contains]${query.recipe_category}`);

        }


        let keepFetching = true;


        while (keepFetching) {

          const response = await fetchDataV2($microcms, {

            endpoint: 'store-recipes',

            paramsRequest,

            fieldStart: 'open_start',

            orders: '-open_start,-createdAt',

            q: query.q,

            limit: limitPerFetch,

            offset,

          });


          const filtered = response.contents.filter(item =>

            Array.isArray(item.archive) && item.archive.length > 0

          );


          allContents.push(...filtered);


          if (response.contents.length < limitPerFetch) {

            keepFetching = false;

          } else {

            offset += limitPerFetch;

          }

        }


        const initialRecipes = allContents.slice(0, 16);



        return {

          allRecipes: allContents,

          recipeList: initialRecipes,

          categorySelected: query.recipe_category || 'すべて',

          textFilter: query.q || '',

          currentPage: 1,

          limitPerPage: 16,

          isEndOfList: allContents.length <= 16,

        };

        } else {

        return {};

        }
  
      }
    )
    return { ...(__d.value || {}) }
  },

  data() {
    return {
      // Cac khoa categorySelected den tu setup()/useAsyncData.
      // Khai lai o data() se GHI DE gia tri that -> template doc phai null.

      breadcrumbItems: [
        { text: 'ホーム', disabled: false, href: '/' },
        { text: 'サービス', disabled: false, href: '/service/' },
        { text: '遠鉄ストアおすすめレシピ', disabled: true, href: '/service/recipe' },
      ],
      recipeCategories: ['すべて', '野菜レシピ', '肉レシピ', '魚レシピ'],
            isLoading: false
    };
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      const bottomOffset = 1200;
      if (this.isLoading || this.isEndOfList) return;
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - bottomOffset)) {
        this.loadScrollRecipes();
      }
    },

    loadScrollRecipes() {
      if (this.isLoading || this.isEndOfList) return;

      this.isLoading = true;

      const nextStart = this.currentPage * this.limitPerPage;
      const nextItems = this.allRecipes.slice(nextStart, nextStart + this.limitPerPage);

      if (nextItems.length === 0) {
        this.isEndOfList = true;
      } else {
        this.recipeList.push(...nextItems);
        this.currentPage++;
        if (this.recipeList.length >= this.allRecipes.length) {
          this.isEndOfList = true;
        }
      }

      this.isLoading = false;
    },

    filterRecipe() {
      const recipeUrl = '/service/recipe/archive';
      const queryParams = [];

      if (this.textFilter) {
        queryParams.push(`q=${this.textFilter}`);
      }

      if (this.categorySelected) {
        queryParams.push(`recipe_category=${this.categorySelected}`);
      }

      window.location.href = `${recipeUrl}?${queryParams.join('&')}`;
    },
  },
};
</script>

<style lang="scss">
.form_recipe_category-custom {
  .v-input__slot {
    width: 240px !important;

    @media only screen and (max-width: 400px) {
      width: unset !important;
    }
  }
}
</style>
<style scoped lang="scss">
.wrap-content {
  @media only screen and (max-width: 1024px) {
    padding-bottom: 50px;
    border-bottom: 10px solid #f3e7cd;
    margin-bottom: 20px;

    .recipe-item.zebra-stripping-class {
      background-color: #f5f1e8;
    }
  }

  h2 {

    @media only screen and (max-width: 1023px) {
      line-height: 31.2px;
    }

    em {
      font-size: 24px;
      font-style: normal;

      @media only screen and (max-width: 1023px) {
        font-size: 16.8px;
      }
    }
  }

  .btn_box {
    margin-bottom: 60px;
    text-align: center;

    @media only screen and (max-width: 1023px) {
      padding: 0 10px;
      margin-bottom: 30px;

      img {
        width: 100%;
      }
    }
  }

  .filter-box {
    ::v-deep {
      .title-article {
        margin-bottom: 0;
        text-align: center;
      }
    }

    @media only screen and (max-width: 1023px) {
      padding: 0 12px;
    }
  }

  .searchBoxInner {
    padding: 30px 0;
    border: 1px solid #ccc;
    border-top: none;

    .searchBtn {
      margin: 10px 0 0;
      text-align: center;
      display: flex;
      justify-content: center;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }

      .btn-inner {
        appearance: none;
        width: 330px;
        height: 54px;
        padding: 0;
        background: #f3e7cd url('/assets/images/ico_search.webp') right 50px center no-repeat;
        border: none;
        border-radius: 27px;
        font-size: 18px;
        outline: none;
        line-height: 54px;
      }
    }
  }

  .form-search {
    width: 530px;
    margin: 0 auto;

    @media only screen and (max-width: 767px) {
      width: auto;
      padding-right: 12px;
    }

    .form-group {
      display: flex;
      margin-bottom: 15px;

      label {
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        width: 100px;
        padding-right: 20px;
        font-size: 14px;
      }

      @media only screen and (max-width: 390px) {
        ::v-deep {
          .v-input {
            width: 60% !important;
          }
        }
      }
    }
  }

  ::v-deep .v-text-field__details {
    display: none;
  }

  .recipe-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    grid-row-gap: 25px;
    margin-bottom: 50px;

    @media only screen and (min-width: 1024px) {
      margin-top: 60px;
    }

    @media only screen and (max-width: 1023px) {
      display: block;
      margin-bottom: 30px;
    }
  }

  .btn-redirect {
    display: flex;
    justify-content: space-evenly;
    margin-top: 80px;

    ::v-deep {
      .btn-nav {
        a {
          &:not(.btn-back) {
            background-position: right 30px center;
          }
        }
      }
    }
  }
}

::v-deep .v-list-item__title {
  font-size: 16px !important;
}

.custom-btn {
  ::v-deep a {
    background: url('/assets/images/ico_arrow01.webp') no-repeat right 60px center #f3e7cd !important;

    &:hover {
      background-color: #331e0e !important;
      color: #fff;
    }
  }
}

.w-75 {
  @media only screen and (min-width: 1024px) {
    ::v-deep .v-input__slot {
      width: 75%;
    }
  }
}

.lead {
  font-size: 24px;
  line-height: 40px;
  padding-bottom: 50px;
  text-align: center;
  margin: 0 auto;
}

@media only screen and (max-width: 1023px) {

  .lead {
    padding: 0 12px;
    font-size: 18px;
    text-align: left;
    line-height: 25.2px;
    padding-bottom: 15px;
    margin-bottom: 20px;

    br {
      display: block;
    }
  }
}
</style>

<style lang="scss">
.v-application .v-list .v-list-item--active {

  caret-color: unset !important;
  color: #ccc !important;
  background: #ccc !important;

  .v-list-item__title {
    color: #000000de;
  }
}

.v-application .form-group {
  .v-input {
    caret-color: unset !important;
    color: unset !important;
  }

  .v-icon.v-icon::after {
    background-color: #000000de !important;
  }

  .v-icon.v-icon {
    color: #000000de !important;
  }

  .v-input__slot {
    width: 422px;

    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    input {
      font-size: 15px;
      padding: 6px 0 5px 0;
    }
  }
}
</style>
