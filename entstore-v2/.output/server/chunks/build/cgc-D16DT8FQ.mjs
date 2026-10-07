import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { i as ico_arrow01_default } from './ico_arrow01-CM4m5EZn.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/assets/images/photo01 (3).webp
var photo01__3__default = "" + __buildAssetsURL("photo01 (3).B0xJoa63.webp");
//#endregion
//#region app/assets/images/photo02.webp
var photo02_default = "" + __buildAssetsURL("photo02.Dkcq3qaB.webp");
//#endregion
//#region app/pages/company/social/cgc.vue
var _sfc_main = {
	components: {
		AppButtonNavigation: ButtonNavigation_default,
		AppArticle: Article_default
	},
	data() {
		return { breadcrumbItems: [
			{
				text: "ホーム",
				disabled: false,
				href: "/"
			},
			{
				text: "会社情報",
				disabled: false,
				href: "/company"
			},
			{
				text: "社会活動への取り組み",
				disabled: false,
				href: "/company/social"
			},
			{
				text: "全国児童画コンクール",
				disabled: true,
				href: "/company/social/cgc"
			}
		] };
	},
	setup() {
		useHead$1({ title: "全国児童画コンクール｜社会活動への取り組み｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-2b4572c1><main data-v-2b4572c1>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-2b4572c1>全国児童画コンクール</h2> <p class="textAC mobile-box" data-v-2b4572c1>
        遠鉄ストアが加盟するCGCグループでは、絵画を通じて子どもたちの情操教育をサポートし、
        <br class="d-none-mobile" data-v-2b4572c1>
        地域とのコミュニケーションを育成することを目的に全国児童画コンクールへの協賛をしています。
        <br class="d-none-mobile" data-v-2b4572c1> <br data-v-2b4572c1>
        これまで同様、「子どもたちの未来を応援」する寄付として
        <br class="d-none-mobile" data-v-2b4572c1>
        応募作品１枚につき、ＣＧＣグループが寄付金を積み立て、
        <br class="d-none-mobile" data-v-2b4572c1>
        文部科学大臣賞を受賞された４名が居住する市町村へ寄付されます。
      </p> <p class="social mobile-box" data-v-2b4572c1><a href="https://www.cgcjapan.co.jp/cgcgroups/csr/contest/report.php" target="_blank" data-v-2b4572c1><img${ssrRenderAttr("src", ico_arrow01_default)} width="24" height="24" alt="" data-v-2b4572c1> <span data-v-2b4572c1>第４４回ＣＧＣ全国児童画コンクール<br class="d-none-des" data-v-2b4572c1>審査結果発表</span></a></p> <article class="d-flex main-content" data-v-2b4572c1><section class="contentInner d-none-mobile" data-v-2b4572c1><div class="pb-8" data-v-2b4572c1><img${ssrRenderAttr("src", photo01__3__default)} data-v-2b4572c1></div> <div data-v-2b4572c1><img${ssrRenderAttr("src", photo02_default)} data-v-2b4572c1></div></section> <section class="section-content" data-v-2b4572c1>`);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "応募要項",
		class: "wrap-outside"
	}, null, _parent));
	_push(` <div class="mobile-box" data-v-2b4572c1><div class="banner d-none-des" data-v-2b4572c1><img class="fullImage"${ssrRenderAttr("src", photo01__3__default)} data-v-2b4572c1> <img class="fullImage"${ssrRenderAttr("src", photo02_default)} data-v-2b4572c1></div> <div class="group-content" data-v-2b4572c1><h4 data-v-2b4572c1>応募資格</h4> <p class="article-content" data-v-2b4572c1>全国の幼児と小学生(3歳以上～12歳までのお子様が応募の対象です)</p></div> <div class="group-content" data-v-2b4572c1><h4 data-v-2b4572c1>応募規定</h4> <ol data-v-2b4572c1><li data-v-2b4572c1>画題、絵のテーマは設けていません。<br data-v-2b4572c1>使用する画材も絵の具・クレヨン・クレパス・色鉛筆など自由です。</li> <li data-v-2b4572c1>ＣＧＣグループのお店で配布する「専用応募画用紙」に描いて応募された作品のみ審査対象となります。「専用応募画用紙」以外の画用紙に描いた作品、「専用応募画用紙」をコピーしてそれに描いた作品、前回応募した作品の再応募は審査対象外となります。</li> <li data-v-2b4572c1>応募は一人一枚とし、未発表の作品に限ります。<br data-v-2b4572c1>合作など、二人以上で描いた作品は審査対象外となります。<br data-v-2b4572c1>版画、貼り絵、作品の一部にスタンプなどを押したもの、折り紙などを貼ったものなども審査対象外となります。絵や写真、キャラクターを真似るなど、他者の著作権を侵害する作品の応募はご遠慮ください。</li> <li data-v-2b4572c1>応募用紙の必要事項に記入もれなどの不備があると、入賞できない場合がありますので必ずご記入ください。<span class="text-red" data-v-2b4572c1>応募用紙の「保護者署名」がない作品は、審査の対象外となります。</span></li> <li data-v-2b4572c1>ご応募いただいた作品は当コンクールに関する出版・印刷物、報道、広告、ウェブサイト、ソーシャルメディア、展示会、その他関連制作物などに使用することがあります。</li></ol></div> <div class="group-content" data-v-2b4572c1><h4 data-v-2b4572c1>応募受付期間</h4> <p class="article-content" data-v-2b4572c1>2026年7月1日（水）～9月5日（土）</p></div> <div class="group-content" data-v-2b4572c1><h4 data-v-2b4572c1>応募受付</h4> <p class="article-content" data-v-2b4572c1>鴨江店・森店・篠原店・西伝寺店を除く３１店舗で受け付けています。</p></div> <div class="group-content" data-v-2b4572c1><h4 data-v-2b4572c1>団体応募について</h4> <p class="article-content" data-v-2b4572c1>
                団体応募をご希望のお客様は、作品と合わせて団体受付名簿のご持参をお願いいたします。<br data-v-2b4572c1>
                ご応募希望店舗にてお申し出いただければ団体受付名簿をお渡しさせていただきますが、下記内容が含まれているものであれば、形式は問いません。<br data-v-2b4572c1><br data-v-2b4572c1>

                ・団体名<br data-v-2b4572c1>
                ・団体責任者名<br data-v-2b4572c1>
                ・ご連絡先電話番号<br data-v-2b4572c1>
                ・応募総数（作品数）<br data-v-2b4572c1>
                ・応募されるお子様の氏名<br data-v-2b4572c1> <br data-v-2b4572c1>
                ご用意いただいた名簿はコピーし、作品返却時まで弊社にて保管させていただきます。<br data-v-2b4572c1> <br data-v-2b4572c1>
                団体ご応募用の名簿は<a href="/pdf/2026_作品授受簿(団体ご応募用).xlsx" target="_blank" data-v-2b4572c1>こちら</a>からダウンロードをお願いいたします。<br data-v-2b4572c1> <br data-v-2b4572c1> <span class="text-red" data-v-2b4572c1>団体応募の際も「保護者署名」欄の記入がないものは審査対象外となります。</span><br data-v-2b4572c1>
                お子様の個人情報の取り扱いについての同意となるため、親権者等の法定代理人の方の署名が必要となります。先生、団体責任者様等の署名は無効となりますので、ご注意ください。
              </p></div> <div class="group-content" data-v-2b4572c1><h4 data-v-2b4572c1>お問い合わせ</h4> <p class="article-content" data-v-2b4572c1>（株）遠鉄ストア 営業企画課<br data-v-2b4572c1>TEL：053-445-1050</p></div></div></section></article> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		class: "d-none-mobile",
		title: "前のページへ戻る",
		"is-back": "",
		href: "/company/social"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/social/cgc.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var cgc_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2b4572c1"]]);

export { cgc_default as default };
//# sourceMappingURL=cgc-D16DT8FQ.mjs.map
