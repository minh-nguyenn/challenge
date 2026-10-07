import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import 'nostics';
import 'nostics/formatters/ansi';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/assets/images/mainimg.webp
var mainimg_default = "" + __buildAssetsURL("mainimg.DuM64z_7.webp");
//#endregion
//#region app/assets/images/photo01 (1).webp
var photo01__1__default = "" + __buildAssetsURL("photo01 (1).DgtcIJz-.webp");
//#endregion
//#region app/assets/images/photo02 (39).webp
var photo02__39__default = "" + __buildAssetsURL("photo02 (39).DBcw_MP8.webp");
//#endregion
//#region app/assets/images/photo03 (37).webp
var photo03__37__default = "" + __buildAssetsURL("photo03 (37).dvSPfDkT.webp");
//#endregion
//#region app/assets/images/bnr_nursery.webp
var bnr_nursery_default = "" + __buildAssetsURL("bnr_nursery.BOFBRh62.webp");
//#endregion
//#region app/pages/recruit/index.vue
var _sfc_main = {
	components: { AppButtonNavigation: ButtonNavigation_default },
	data() {
		return {
			breadcrumbItems: [{
				text: "ホーム",
				disabled: false,
				href: "/"
			}, {
				text: "採用情報",
				disabled: true,
				href: "/recruit"
			}],
			recruitData: [
				{
					"youtubeLink": "https://www.youtube.com/embed/d-BbYzFfgf4?rel=0&wmode=transparent",
					"imgUrl": "/assets/images/works06.webp",
					"imgUrlsm": "/assets/images/works06 (1).webp",
					"imgAlt": "鮮魚 遠鉄ストア 笠井店 内田悠紀子 ",
					"recruitName": "鮮魚",
					"recruitStore": "遠鉄ストア 笠井店<br>内田 悠紀子"
				},
				{
					"youtubeLink": "https://www.youtube.com/embed/7gwyUfcnk0Y?rel=0&wmode=transparent",
					"imgUrl": "/assets/images/works02.webp",
					"imgUrlsm": "/assets/images/works02 (1).webp",
					"imgAlt": "青果 遠鉄ストア 立野店 賀茂裕樹",
					"recruitName": "青果",
					"recruitStore": "遠鉄ストア 立野店<br>賀茂 裕樹"
				},
				{
					"youtubeLink": "https://www.youtube.com/embed/qS7Yp4r1Ais?rel=0&wmode=transparent",
					"imgUrl": "/assets/images/works03.webp",
					"imgUrlsm": "/assets/images/works03 (1).webp",
					"imgAlt": "精肉 遠鉄ストア 見付店 川口貴弘",
					"recruitName": "精肉",
					"recruitStore": "遠鉄ストア 見付店<br>川口 貴弘"
				},
				{
					"youtubeLink": "https://www.youtube.com/embed/sx_8p4SgPh4?rel=0&wmode=transparent",
					"imgUrl": "/assets/images/works04.webp",
					"imgUrlsm": "/assets/images/works04 (1).webp",
					"imgAlt": "フロア フードワン きらりタウン店 桐山宏孝",
					"recruitName": "フロア",
					"recruitStore": "フードワン きらりタウン<br>桐山 宏孝"
				},
				{
					"youtubeLink": "https://www.youtube.com/embed/2QCMyd8MQkM?rel=0&wmode=transparent",
					"imgUrl": "/assets/images/works05.webp",
					"imgUrlsm": "/assets/images/works05 (1).webp",
					"imgAlt": "惣菜 遠鉄ストア 大平台店 山本由佳",
					"recruitName": "惣菜",
					"recruitStore": "遠鉄ストア 大平台店<br>山本 由佳"
				}
			]
		};
	},
	setup() {
		useHead$1({ title: "採用情報｜遠鉄ストア" });
	},
	mounted() {
		(void 0).$(".cboxElement").colorbox({
			iframe: true,
			width: "682px",
			height: "460px"
		});
	},
	methods: { toArticle(id) {
		const elementToScrollTo = (void 0).getElementById(id);
		if (elementToScrollTo) elementToScrollTo.scrollIntoView({ behavior: "smooth" });
	} }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-ab176924><main data-v-ab176924>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 class="d-none-des" data-v-ab176924>
        採用情報
      </h2> <div class="mainimg" data-v-ab176924><img${ssrRenderAttr("src", mainimg_default)} alt="" data-v-ab176924></div> <nav class="d-none-mobile" data-v-ab176924><ul class="select" data-v-ab176924><li data-v-ab176924><a data-v-ab176924>遠鉄ストアについて</a></li> <li data-v-ab176924><a data-v-ab176924>遠鉄ストアのお仕事</a></li> <li data-v-ab176924><a href="https://entstore-recruit.net/jobfind-pc/" target="_blank" data-v-ab176924><span data-v-ab176924>今すぐオンライン応募</span></a></li></ul></nav> <p class="textAC top" data-v-ab176924>地域のお客様とのふれあいを大切に、安心と信頼を笑顔でお届けし<br class="d-none-mobile" data-v-ab176924>皆さんに親しまれる店舗を目指しています。<br class="d-none-mobile" data-v-ab176924><br data-v-ab176924>そんな遠鉄ストアに、ぜひあなたの力を貸してください。</p> <article class="article-box" data-v-ab176924><h3 id="topic01" data-v-ab176924>遠鉄ストアについて</h3> <p class="textAC topic01-title" data-v-ab176924>
          温かくて、明るく安心して買物ができる店。<br data-v-ab176924>楽しく買物ができ、楽しい時間を過ごすことができる店。<br data-v-ab176924>笑顔の挨拶と言葉が飛び交う、元気のいい店を作っていきたい。</p> <div class="article-content" data-v-ab176924><section class="section-content" data-v-ab176924><p data-v-ab176924><strong data-v-ab176924>1日約5万人が利用するスーパーマーケット</strong> <span class="content-inner" data-v-ab176924><img class="d-none-des"${ssrRenderAttr("src", photo01__1__default)} alt="" data-v-ab176924> <br class="d-none-des" data-v-ab176924>
                『近隣のお客様から愛される高質スーパーマーケットの実現』に向けて、社員の相互協力のもと地域社会・近隣のお客様・お取引様との密接な関係を築き、「安心・安全・美味しい」食品とその情報提供を通して近隣のお客様の健康で豊かな食生活の実現を支援し、地域社会に貢献し続けることを理想の姿として掲げています。
                <br class="d-none-des" data-v-ab176924>売上高533億円、1日約5万人のお客様にご利用いただき、遠鉄グループの中核企業として躍進しております。
                <br class="d-none-des" data-v-ab176924>社員自らがお客様の声をダイレクトに聴き、商品の見直し、サービスの向上、積極的な食の情報発信を通じて、地域の皆様に信頼され、親しまれる店舗にすることを常に考えています。
              </span></p> <p data-v-ab176924><strong data-v-ab176924>自ら意志を持ちお店作りに関われる</strong> <span class="content-inner" data-v-ab176924><img class="d-none-des"${ssrRenderAttr("src", photo02__39__default)} data-v-ab176924> <br class="d-none-des" data-v-ab176924>
                『お買物の楽しさを演出』私たちは、食を楽しむための情報発信とタイムリーな提案を通じて、商品の美味しさ・価値の見える化を進め、お買物の楽しさを演出しています。
                <br class="d-none-des" data-v-ab176924>朝食・昼食・夕食・夜食などの日常的な用途での提案はもとより、季節や地域の行催事についての提案も各コーナーにおいて展開しています。
                <br class="d-none-des" data-v-ab176924>ディスプレイについても商品の特徴、用途のご案内や必要な材料と作り方がわかるレシピを備え付け、調理されたメニューサンプルを展示するなど、「食の楽しさ」を伝える工夫を一人ひとりが自分たちで考え、地域の皆様に「食のことは遠鉄ストア」と思っていただけるような仕掛け作りが売場に展開されています。
              </span></p> <p data-v-ab176924><strong data-v-ab176924>児童画コンクール など多岐にわたる地域貢献活動</strong> <span class="content-inner" data-v-ab176924><img class="d-none-des"${ssrRenderAttr("src", photo03__37__default)} data-v-ab176924> <br class="d-none-des" data-v-ab176924>
                当社は、自主的活動を通じ、地域社会への貢献を目指しています。
                <br class="d-none-des" data-v-ab176924>
                たとえば、遠鉄ストアが加盟するCGCグループでは、
                絵画を通じて子どもたちの情操教育をサポートし、地域とのコミュニケーションを育成することを目的に全国児童画コンクールへの協賛をしています。「子供たちの未来を応援」する寄付として応募作品1枚につき、CGCグループが寄付金を積立て、文部科学大臣賞3名、最優秀賞3名の計6名の受賞者が居住する市町村へ寄付されます。
                <br class="d-none-des" data-v-ab176924>
                このほか、地域の子どもたちの健全な育成を応援するためにスポーツ大会へも協賛。特に毎年3月に行われる『ちびっ子マラソン』は、地域社会の大きなイベントになっており、運営に携わっています。また『工場見学』など、近隣のお客様が健康で豊かな食生活を送るための情報提供にも力を入れています。
              </span></p></section> <section class="section-img d-none-mobile" data-v-ab176924><img${ssrRenderAttr("src", photo01__1__default)} width="306" height="230" alt="" data-v-ab176924> <img${ssrRenderAttr("src", photo02__39__default)} width="306" height="230" alt="" class="mt-7" data-v-ab176924></section></div> <div class="article-img" data-v-ab176924><a href="http://entetsu-hoikuen.com/" target="_blank" data-v-ab176924><img${ssrRenderAttr("src", bnr_nursery_default)} alt="遠鉄グループ従業員専用保育施設 遠鉄グループ保育園" data-v-ab176924></a></div> <h3 id="topic02" data-v-ab176924>遠鉄ストアのお仕事</h3> <p class="textAC pb-8 fz-18" data-v-ab176924>はじめてでも安心して仕事をスタートしていただくための研修からスキルアップ制度まで。<br data-v-ab176924>楽しくやりがいのもてる職場環境づくりに力を入れています。</p> <div class="recruit-list d-none-mobile" data-v-ab176924><!--[-->`);
	ssrRenderList($data.recruitData, (recruit, index) => {
		_push(`<section class="contentInner" data-v-ab176924><a${ssrRenderAttr("href", recruit.youtubeLink)} class="group1 cboxElement" data-v-ab176924><img${ssrRenderAttr("src", recruit.imgUrl)} width="306" height="290"${ssrRenderAttr("alt", recruit.imgAlt)} data-v-ab176924></a></section>`);
	});
	_push(`<!--]--></div> <div class="recruit-list d-none-des" data-v-ab176924><!--[-->`);
	ssrRenderList($data.recruitData, (recruit, index) => {
		_push(`<section class="serviceInner" data-v-ab176924><a${ssrRenderAttr("href", recruit.youtubeLink)} target="_blank" data-v-ab176924><figure data-v-ab176924><img class="fullImage"${ssrRenderAttr("src", recruit.imgUrlsm)}${ssrRenderAttr("alt", recruit.imgAlt)} data-v-ab176924></figure> <h2 data-v-ab176924>${ssrInterpolate(recruit.recruitName)} <br data-v-ab176924> <span class="d-block mt-2" data-v-ab176924>${recruit.recruitStore ?? ""}</span></h2></a></section>`);
	});
	_push(`<!--]--></div> <h3 id="topic03" data-v-ab176924>オンライン応募について</h3> <p class="textAC topic03-content pb-4 fz-18" data-v-ab176924>パートナー社員・正社員（中途入社）・アルバイト・新卒へのご応募は、
          <br class="d-none-mobile" data-v-ab176924>各リクルートサイトから24時間受け付けています。
          <br class="d-none-mobile" data-v-ab176924> <br data-v-ab176924>思いついた今が、応募する時です。
          <br class="d-none-des" data-v-ab176924> <span class="d-none-des" data-v-ab176924>あなたからのご応募をお待ちしています。</span></p> <p class="textAC recruitsite d-none-mobile fz-18" data-v-ab176924><a href="https://entstore-recruit.net/jobfind-pc/" target="_blank" data-v-ab176924>遠鉄ストア パート・アルバイト 求人サイト</a> <br class="d-none-des" data-v-ab176924> <span data-v-ab176924>あなたからのご応募をお待ちしています。</span></p> <p class="btnRecruitSite d-none-des" data-v-ab176924><a href="https://entstore-recruit.net/jobfind-smartphone/" target="_blank" data-v-ab176924><svg class="logo" data-v-ab176924><use xlink:href="#icon_logo" data-v-ab176924></use></svg> <span data-v-ab176924>採用サイト</span></a></p> <article class="singleColumn" data-v-ab176924><p class="mb-sm-0 md-5 text-custom-mg" data-v-ab176924>労働施策総合推進法に基づく中途採用比率の公表</p> <table class="table-vert" data-v-ab176924><tbody data-v-ab176924><tr data-v-ab176924><th data-v-ab176924></th> <th data-v-ab176924>2023年度</th> <th data-v-ab176924>2024年度</th> <th data-v-ab176924>2025年度</th></tr> <tr data-v-ab176924><td data-v-ab176924>正規雇用労働者の<br data-v-ab176924>中途採用比率</td> <td data-v-ab176924>52%</td> <td data-v-ab176924>48%</td> <td data-v-ab176924>38%</td></tr></tbody></table> <p class="text-right text-custom-mg" data-v-ab176924>公表日：2026年6月26日</p></article></article> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recruit/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var recruit_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ab176924"]]);

export { recruit_default as default };
//# sourceMappingURL=recruit--AItjeRk.mjs.map
