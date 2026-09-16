<template>
  <div class="wrap-content">
    <main>
      <VxBreadcrumbs
        :items="breadcrumbItems"
        divider=">"
      ></VxBreadcrumbs>
      <h2>食品リサイクル</h2>

      <p class="lead d-none-mobile">遠鉄ストアでは㈱青空農園と共同で、<br>「食品残渣リサイクルによる食品リサイクルループの実現」に取り組んでいます。</p>
      <p class="d-none-des mobile-box lead-mobile">遠鉄ストアでは㈱青空農園と共同で、「食品残渣リサイクルによる食品リサイクルループの実現」に取り組んでいます。</p>

      <div class="food-wrapper">
          <img class="food-image--single" src="/assets/images/company/green/food/no1.webp"  alt="食品リサイクルループの概要イメージ図"/>
          <p class="d-none-mobile">
              食品リサイクルループの概要イメージ図
          </p>
      </div>

      <AppArticle title="1.発酵分解装置による食品残渣の一次発酵物化" class="wrap-outside"/>

      <div class="food-wrapper">
        <div class="food-image--double">
            <img src="/assets/images/company/green/food/no2.webp" alt="リサイクル装置はセンターに隣接して設置"/>
            <img src="/assets/images/company/green/food/no3.webp" alt="食品残渣約600kg/日を投入装置内で回転しながら発酵・分解"/>
        </div>
        <p>
            ㈱遠鉄ストアプロセスセンターに隣接したリサイクル装置で食品残渣を発酵・分解
            <br>
            食品残渣(廃棄物) 年間約225ｔを削減（約85％の削減）
        </p>
      </div>

      <AppArticle title="2.発酵分解装置による食品残渣の一次発酵物化" class="wrap-outside"/>

      <div class="food-wrapper--horizontal">
          <img class="food_image" src="/assets/images/company/green/food/no5.webp" alt="再生堆肥を使用した有機肥料で育成"/>
          <div class="description-wrapper">
              <p>
                  浜松市内のリサイクルセンターで堆肥に再生され、㈱青空農園で再生堆肥を使用した循環農産物を生産
              </p>
              <ul class="red-box">
                  <li>有機肥料の使用によってサイズや密度など、より優良な作物が育ちます</li>
                  <li>再生堆肥を使用した有機肥料は通常の化学肥料より安価です</li>
              </ul>
          </div>
      </div>

      <AppArticle title="3.循環農産物の販売" class="wrap-outside"/>

      <div class="food-wrapper">
        <div class="food-image--double">
            <img src="/assets/images/company/green/food/no6.webp" alt="遠鉄ストア富塚店店頭"/>
            <img src="/assets/images/company/green/food/no7.webp" alt="遠鉄ストア富塚店店頭"/>
        </div>
        <p>
            (株)遠鉄ストアの店頭で新鮮でおいしい地元産の野菜として、地域の食卓へ
        </p>

        <div class="food-chart">
            <p>
                浜松市内事業者の連携により、<br class="d-none-des">全工程を浜松市内とする
                <br>
                安定的な食品リサイクルループを実現しています
            </p>
            <img src="/assets/images/company/green/food/no8.webp" alt="地域社会への貢献"/>
        </div>

        <div class="group-photo">
            <img src="/assets/images/company/green/food/no9.webp" alt="「浜松市3R推進優良事業者表彰制度」の優良事業者として認定を受けました。"/>
            <p>
                2025年1月30日
                <br>
                「浜松市3R推進優良事業者表彰制度」
                <br>
                の優良事業者として認定を受けました。
            </p>
        </div>
      </div>

      <AppButtonNavigation class="d-none-mobile" title="前のページへ戻る" is-back href="/company/green"></AppButtonNavigation>
    </main>
  </div>
</template>

<script>

import AppArticle from "~/components/App/Article.vue";
import AppButtonNavigation from "~/components/App/ButtonNavigation.vue";

export default {
  components: {AppButtonNavigation, AppArticle},
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'ホーム',
          disabled: false,
          href: '/',
        },
        {
          text: '会社情報',
          disabled: false,
          href: '/company',
        },
        {
          text: '環境への取り組み',
          disabled: false,
          href: '/company/green',
        },
        {
          text: '食品リサイクル',
          disabled: true,
        },
      ],
    }
  },
  setup() {
    useHead({

        title: '食品リサイクル｜環境への取り組み｜会社情報｜遠鉄ストア',

      })
  },
}
</script>

<style scoped lang="scss">
.wrap-content {
  .lead {
    font-size: 24px;
    line-height: 40px;
    padding-bottom: 30px;
    text-align: center;
    margin: 0 auto;
  }

  .lead-mobile {
    font-size: 18px;
    text-align: left;
    line-height: 25.2px;
    margin-bottom: 30px;
  }

  .wrap-outside {
    ::v-deep {
      .title-article {
        margin-bottom: 0 !important;
      }

      @media only screen and (max-width: 1023px) {
        &.singleColumn {
          margin-bottom: 15px !important;
        }
      }
    }
  }
}

.food-wrapper {
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 20px;
  margin-bottom: 32px;
  padding: 10px;
  
  .food-image--single {
    width: 80%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1023px) {
    .food-image--single {
      width: 100%;
    }
  }

  .food-image--double {
    display: flex;
    gap: 45px;
    justify-content: center;

    img {
      width: 304px;
      height: 203px;
    }
  }

  @media only screen and (max-width: 1023px) {
    .food-image--double {
      flex-direction: column;
      align-items: center;
      gap: 10px;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

	p {
		padding: 0 !important;
		font-size: 16px;
    margin-bottom: 0px;
	}

  @media only screen and (max-width: 1023px) {
    p {
      font-size: 14px;
      text-align: left;
    }
  }

	.description-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 2px solid #4a4a4a;
		padding: 20px 50px;
		align-self: center;
		background-color: #fff59d;
		border-radius: 15px;

		.description {
			font-size: 24px;
		}

		.check-list {
			display: flex;
			gap: 30px;
			margin-top: 20px !important;
			color: #01019c;
			font-size: 20px;
			font-weight: bold;
		
			li {
				background: none !important;
				display: flex !important;
				align-items: center;
			}
		
			li::before {
				content: '';
				display: inline-block;
				width: 30px;
				height: 30px;
				background-image: url('/assets/images/ico/checkbox-checked.svg') !important;
				background-size: contain;
				background-repeat: no-repeat;
				margin-right: 0;
			}
		}
	}

	.food-chart {
		margin-top: 20px;

		p {
			font-weight: bold;
			font-size: 25px;
      margin-bottom: 16px;
		}
	}
  
  @media only screen and (max-width: 1023px) {
    .food-chart {
      margin-top: 0px;

      p {
        font-weight: bold;
        font-size: 16px;
        text-align: center;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .group-photo {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

.food-wrapper--horizontal {
	display: flex;
	padding-left: 50px;
	gap: 50px;
  margin-bottom: 32px;

  .food_image {
    width: 304px;
    height: 203px;
  }

	.description-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;

		p {
			padding: 0 !important;
			font-size: 16px;
		}

		.red-box {
			margin-top: 0 !important;
			font-size: 16px;

			li {
				background: none !important;
				display: flex !important;
				align-items: center;
				padding-left: 0 !important;
			}
		
			li::before {
				content: '';
				display: inline-block;
				width: 30px;
				height: 30px;
				background-image: url('~assets/images/ico/checkbox-checked.svg') !important;
				background-size: contain;
				background-repeat: no-repeat;
				margin-right: 0;
			}
		}
	}
}

@media only screen and (max-width: 1023px) {
  .food-wrapper--horizontal {
    flex-direction: column;
    padding: 10px;
    gap: 10px;

    .food_image {
      width: 100%;
      height: auto;
    }

    .description-wrapper {
      p {
        font-size: 14px;
      }

      .red-box {
        font-size: 14px;

        li::before {
          min-width: 25px;
          min-height: 25px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
