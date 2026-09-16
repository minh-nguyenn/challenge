<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs :items="breadcrumbItems" divider=">"></VxBreadcrumbs>
      <h2>
        <em>かんたん 美味しく 楽しく♪</em>
        <br>遠鉄ストアおすすめレシピ
      </h2>
      <div class="btn_box">
        <a href="https://cgc-kitchen365.jp/" target="_blank">
          <img src="/assets/images/btn_cooking.webp" alt="Kitchen365 by ふれ愛交差点">
        </a>
      </div>
      <AppArticle title="レシピ検索" class="filter-box">
        <div class="searchBoxInner">
          <div class="form-search">
            <div class="form-group">
              <label>カテゴリ</label>
              <select id="form_recipe_category" v-model="categorySelected" class="w-75" name="recipe_category">
                <option value="すべて" selected="selected">すべて</option>
                <option value="野菜レシピ">野菜レシピ</option>
                <option value="肉レシピ">肉レシピ</option>
                <option value="魚レシピ">魚レシピ</option>
                <option value="その他">その他</option>
              </select>
            </div>
            <div class="form-group form-txt-search-custom">
              <label>キーワード</label>
              <VxTextField class="form-txt-search" v-model="textFilter" dense outlined></VxTextField>
            </div>
          </div>
          <div class="searchBtn" @click="filterRecipe">
            <div class="btn-inner">検索</div>
          </div>
        </div>
      </AppArticle>

      <div class="recipe-list">
        <RecipeBox v-for="recipe in recipeList" :key="recipe.id" :recipe-item="recipe" />
        <VxSheet v-if="isLoading && !isEndOfList" class="pa-3 v-sheet-custom">
          <VxSkeletonLoader class="mx-auto" max-width="300" type="card"></VxSkeletonLoader>
        </VxSheet>
      </div>

      <div class="btn-redirect d-none-mobile">
        <AppButtonNavigation title="前のページへ戻る" is-back  href="/service"/>
        <AppButtonNavigation title="過去のレシピを見る" href="/service/recipe/archive" />
      </div>
      <AppButtonNavigation href="/service/recipe/archive" class="d-none-des custom-btn" title="過去のレシピを見る" long-btn />
    </main>
  </div>
</template>

<script>
import AppArticle from "~/components/App/Article.vue";
import RecipeBox from "~/components/RecipeBox.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";
import { fetchDataV2 } from "~/utils/index.js";

export default {
  components: {
    AppArticle,
    RecipeBox,
    AppButtonNavigation,
  },
  data() {
    return {
      breadcrumbItems: [
        { text: 'ホーム', disabled: false, href: '/' },
        { text: 'サービス', disabled: false, href: '/service/' },
        { text: '遠鉄ストアおすすめレシピ', disabled: true, href: '/service/recipe' },
      ],
      recipeCategories: ['すべて', '野菜レシピ', '肉レシピ', '魚レシピ', 'その他'],
      categorySelected: 'すべて',
      textFilter: '',
      recipeList: [],
      currentPage: 1,
      limitPerPage: 16,
      isLoading: false,
      isEndOfList: false,
    };
  },
  setup() {
    useHead({

        title: '遠鉄ストアおすすめレシピ｜サービス｜遠鉄ストア - 静岡県西部のスーパーマーケット（浜松市,磐田市,袋井市,湖西市,掛川市）',

      })
  },
  mounted() {
    const query = this.$route.query;
    this.categorySelected = query.recipe_category || 'すべて';
    this.textFilter = query.q || '';
    this.loadRecipes();
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
    async loadRecipes() {
      if (this.isLoading || this.isEndOfList) return;

      this.isLoading = true;

      const paramsRequest = [];

      if (this.categorySelected && this.categorySelected !== 'すべて') {
        paramsRequest.push(`category[contains]${this.categorySelected}`);
      }

      const payload = {
        endpoint: 'store-recipes',
        fieldStart: 'open_start',
        orders: '-open_start,-createdAt',
        paramsRequest,
        q: this.textFilter,
        limit: this.limitPerPage,
        offset: (this.currentPage - 1) * this.limitPerPage,
      };

      try {
        const response = await fetchDataV2(this.$microcms, payload);

        let itemsContent = []

        if (this.textFilter) {
          itemsContent = response.contents
        } else {
          itemsContent = response.contents.filter(item =>
            !item.archive || item.archive.length === 0
          );
        }

        if (itemsContent.length < this.limitPerPage) {
          this.isEndOfList = true;
        }

        this.recipeList = itemsContent;
        this.currentPage++;
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      } finally {
        this.isLoading = false;
      }
    },

    async loadScrollRecipes() {
      if (this.isLoading || this.isEndOfList) return;

      this.isLoading = true;

      const paramsRequest = [];

      if (this.categorySelected && this.categorySelected !== 'すべて') {
        paramsRequest.push(`category[contains]${this.categorySelected}`);
      }

      const payload = {
        endpoint: 'store-recipes',
        fieldStart: 'open_start',
        orders: '-open_start,-createdAt',
        paramsRequest,
        q: this.textFilter,
        limit: this.limitPerPage,
        offset: (this.currentPage - 1) * this.limitPerPage,
      };

      try {
        const response = await fetchDataV2(this.$microcms, payload);

        let itemsContent = []

        if (this.textFilter) {
          itemsContent = response.contents
        } else {
          itemsContent = response.contents.filter(item =>
            !item.archive || item.archive.length === 0
          );
        }

        if (itemsContent.length < this.limitPerPage) {
          this.isEndOfList = true;
        }

        this.recipeList.push(...itemsContent);
        this.currentPage++;
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      } finally {
        this.isLoading = false;
      }
    },

    filterRecipe() {
      const recipeUrl = '/service/recipe';
      const queryParams = [];

      if (this.textFilter) {
        queryParams.push(`q=${this.textFilter}`);
      }

      if (this.categorySelected) {
        queryParams.push(`recipe_category=${this.categorySelected}`);
      }

      window.location.href = `${recipeUrl}?${queryParams.join('&')}`;
    }
  }
};
</script>

<style scoped lang="scss">
.wrap-content {
  @media only screen and (max-width: 1024px) {
    padding-bottom: 50px;
    border-bottom: 10px solid #f3e7cd;
    margin-bottom: 20px;
  }

  h2 {

    @media only screen and (max-width: 1023px) {
      line-height: 31.2px;
      padding: 25px 10px;
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

    a {
      img {
        &:hover {
          opacity: 0.6;
        }
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
      padding: 0 10px;
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
        width: 120px;
        padding-right: 20px;
        font-size: 18px;
        min-width: 120px;
        white-space: nowrap;

        @media only screen and (max-width: 767px) {
          width: 92px;
          font-size: 14px;
        }
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
    gap: 19px;
    grid-row-gap: 30px;
    margin-bottom: 50px;

    @media only screen and (min-width: 1024px) {
      margin-top: 60px;
    }

    @media only screen and (max-width: 1023px) {
      display: block;
      margin-bottom: 30px;

      ::v-deep {
        .recipe-item {

          &:first-child {
            border-top: 2px solid #ccc;
          }

          &:nth-child(even) {
            .recipe-box-mb {
              background-color: #f5f1e8;
              ;
            }
          }

          .recipe-box-mb {
            &:hover {
              background-color: #f3e7cd;
            }
          }
        }
      }
    }
  }

  .btn-redirect {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 80px;

    ::v-deep {
      .btn-nav {
        a {
          width: 330px;

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
    // background: url('/assets/images/ico_arrow01.webp') no-repeat right 60px center #f3e7cd !important;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    svg{
      margin-top: -4px;
    }

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

::v-deep {
  .primary--text {
    caret-color: unset !important;
  }

  .v-input--is-focused {
    .v-input__slot {
      fieldset {
        border: 1px solid #ccc;
      }
    }
  }

  .v-input__slot {
    fieldset {
      border: 1px solid #ccc;
    }
  }

}

#form_recipe_category {
  border: 1px solid #ccc;
  max-width: 100%;
  width: 240px;
  height: 40.8px;
  padding: 5px;
  border-radius: 4px;
  background: url('/assets/images/arrow_select.webp') right no-repeat #fff;
  font-size: 16px;
  color: #323232;

  @media only screen and (max-width: 767px) {
    width: 260px;
    font-size: 15px;
  }
}
</style>


<style lang="scss">
.v-sheet-custom {
  background: #f3e7cd !important;

  .v-skeleton-loader__card-heading {
    background: transparent !important;
  }
}

.form-group.form-txt-search-custom {
  .v-input {
    caret-color: unset !important;
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
