import { _ as _plugin_vue_export_helper_default, u as useHead$1 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
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

//#region app/assets/images/img_map.gif
var img_map_default = "" + __buildAssetsURL("img_map.Byv_WckH.gif");
//#endregion
//#region app/pages/company/profile.vue
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
				text: "会社概要・沿革",
				disabled: true,
				href: "/company/profile"
			}
		] };
	},
	setup() {
		useHead$1({ title: "会社概要・沿革｜会社情報｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-fecbb3b7><main data-v-fecbb3b7>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-fecbb3b7>会社概要・沿革</h2> `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "会社概要",
		class: "wrap-outside wrap-outside-map-custom"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="mobile-box" data-v-fecbb3b7${_scopeId}><table data-v-fecbb3b7${_scopeId}><tbody data-v-fecbb3b7${_scopeId}><tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>会社名</th> <td data-v-fecbb3b7${_scopeId}>株式会社遠鉄ストア</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>本部住所</th> <td data-v-fecbb3b7${_scopeId}>〒432-8021 浜松市中央区佐鳴台四丁目16番10号フードワン佐鳴台店2階（<a href="#map" data-v-fecbb3b7${_scopeId}>交通案内はこちら</a>）</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>本部電話番号</th> <td data-v-fecbb3b7${_scopeId}>053-445-1000（代表）<br data-v-fecbb3b7${_scopeId}>受付時間 9:30〜12:00 / 13:00〜17:00 月曜日～金曜日（土日祝日、 1月1日～3日は、受付をしておりません。）</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>創業</th> <td data-v-fecbb3b7${_scopeId}>昭和48年10月</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>資本金</th> <td data-v-fecbb3b7${_scopeId}>1億円</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>役員</th> <td data-v-fecbb3b7${_scopeId}><dl class="companyMember" data-v-fecbb3b7${_scopeId}><dt data-v-fecbb3b7${_scopeId}>代表取締役社長</dt> <dd data-v-fecbb3b7${_scopeId}>宮田 洋</dd> <dt data-v-fecbb3b7${_scopeId}>専務取締役</dt> <dd data-v-fecbb3b7${_scopeId}>遠藤 正樹</dd> <dt data-v-fecbb3b7${_scopeId}>常務取締役</dt> <dd data-v-fecbb3b7${_scopeId}>池谷 航之介</dd> <dt data-v-fecbb3b7${_scopeId}>取締役</dt> <dd data-v-fecbb3b7${_scopeId}>大石 浩司</dd> <dt data-v-fecbb3b7${_scopeId}>取締役</dt> <dd data-v-fecbb3b7${_scopeId}>犬塚 賢</dd> <dt data-v-fecbb3b7${_scopeId}>取締役</dt> <dd data-v-fecbb3b7${_scopeId}>平井 賢太郎</dd> <dt data-v-fecbb3b7${_scopeId}>取締役</dt> <dd data-v-fecbb3b7${_scopeId}>丸山 晃司</dd> <dt data-v-fecbb3b7${_scopeId}>取締役</dt> <dd data-v-fecbb3b7${_scopeId}>飯尾 圭介</dd> <dt data-v-fecbb3b7${_scopeId}>取締役</dt> <dd data-v-fecbb3b7${_scopeId}>岡野 裕貴</dd> <dt data-v-fecbb3b7${_scopeId}>監査役</dt> <dd data-v-fecbb3b7${_scopeId}>鈴木 憲之</dd></dl></td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>従業員</th> <td data-v-fecbb3b7${_scopeId}>2,855人（2026年3月末時点）</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>売上高</th> <td data-v-fecbb3b7${_scopeId}>533億円</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>事業内容</th> <td data-v-fecbb3b7${_scopeId}>生鮮食品・一般食品・日用雑貨品を取り扱うスーパーマーケット、ドラッグストア事業、調剤事業、不動産事業</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>店舗数</th> <td data-v-fecbb3b7${_scopeId}>38店舗(2025年10月末時点)</td></tr></tbody></table></div>`);
			else return [createVNode("div", { class: "mobile-box" }, [createVNode("table", null, [createVNode("tbody", null, [
				createVNode("tr", null, [
					createVNode("th", null, "会社名"),
					createTextVNode(),
					createVNode("td", null, "株式会社遠鉄ストア")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "本部住所"),
					createTextVNode(),
					createVNode("td", null, [
						createTextVNode("〒432-8021\xA0浜松市中央区佐鳴台四丁目16番10号フードワン佐鳴台店2階（"),
						createVNode("a", { href: "#map" }, "交通案内はこちら"),
						createTextVNode("）")
					])
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "本部電話番号"),
					createTextVNode(),
					createVNode("td", null, [
						createTextVNode("053-445-1000（代表）"),
						createVNode("br"),
						createTextVNode("受付時間\xA09:30〜12:00 / 13:00〜17:00\xA0月曜日～金曜日（土日祝日、 1月1日～3日は、受付をしておりません。）")
					])
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "創業"),
					createTextVNode(),
					createVNode("td", null, "昭和48年10月")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "資本金"),
					createTextVNode(),
					createVNode("td", null, "1億円")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "役員"),
					createTextVNode(),
					createVNode("td", null, [createVNode("dl", { class: "companyMember" }, [
						createVNode("dt", null, "代表取締役社長"),
						createTextVNode(),
						createVNode("dd", null, "宮田 洋"),
						createTextVNode(),
						createVNode("dt", null, "専務取締役"),
						createTextVNode(),
						createVNode("dd", null, "遠藤 正樹"),
						createTextVNode(),
						createVNode("dt", null, "常務取締役"),
						createTextVNode(),
						createVNode("dd", null, "池谷 航之介"),
						createTextVNode(),
						createVNode("dt", null, "取締役"),
						createTextVNode(),
						createVNode("dd", null, "大石 浩司"),
						createTextVNode(),
						createVNode("dt", null, "取締役"),
						createTextVNode(),
						createVNode("dd", null, "犬塚 賢"),
						createTextVNode(),
						createVNode("dt", null, "取締役"),
						createTextVNode(),
						createVNode("dd", null, "平井 賢太郎"),
						createTextVNode(),
						createVNode("dt", null, "取締役"),
						createTextVNode(),
						createVNode("dd", null, "丸山 晃司"),
						createTextVNode(),
						createVNode("dt", null, "取締役"),
						createTextVNode(),
						createVNode("dd", null, "飯尾 圭介"),
						createTextVNode(),
						createVNode("dt", null, "取締役"),
						createTextVNode(),
						createVNode("dd", null, "岡野 裕貴"),
						createTextVNode(),
						createVNode("dt", null, "監査役"),
						createTextVNode(),
						createVNode("dd", null, "鈴木 憲之")
					])])
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "従業員"),
					createTextVNode(),
					createVNode("td", null, "2,855人（2026年3月末時点）")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "売上高"),
					createTextVNode(),
					createVNode("td", null, "533億円")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "事業内容"),
					createTextVNode(),
					createVNode("td", null, "生鮮食品・一般食品・日用雑貨品を取り扱うスーパーマーケット、ドラッグストア事業、調剤事業、不動産事業")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "店舗数"),
					createTextVNode(),
					createVNode("td", null, "38店舗(2025年10月末時点)")
				])
			])])])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		title: "沿革",
		class: "wrap-outside wrap-outside-map-custom"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="mobile-box" data-v-fecbb3b7${_scopeId}><table data-v-fecbb3b7${_scopeId}><tbody data-v-fecbb3b7${_scopeId}><tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和48年10月</th> <td data-v-fecbb3b7${_scopeId}>設立<br data-v-fecbb3b7${_scopeId}>向平店（現富塚店）営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和49年</th> <td data-v-fecbb3b7${_scopeId}>向宿店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和50年</th> <td data-v-fecbb3b7${_scopeId}>湖西店・磐田店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和51年</th> <td data-v-fecbb3b7${_scopeId}>西ヶ崎店・笠井店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和52年</th> <td data-v-fecbb3b7${_scopeId}>鴨江店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和53年</th> <td data-v-fecbb3b7${_scopeId}>佐鳴台店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和54年</th> <td data-v-fecbb3b7${_scopeId}>三島店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和55年</th> <td data-v-fecbb3b7${_scopeId}>立野店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和57年</th> <td data-v-fecbb3b7${_scopeId}>浜北店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和59年</th> <td data-v-fecbb3b7${_scopeId}>POSシステム 西ヶ崎店へ導入<br data-v-fecbb3b7${_scopeId}>※62年3月には全店がPOS導入</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和60年</th> <td data-v-fecbb3b7${_scopeId}>竜洋店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>昭和61年</th> <td data-v-fecbb3b7${_scopeId}>池田店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成3年</th> <td data-v-fecbb3b7${_scopeId}>浅羽店（パディ内）・初生店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成5年</th> <td data-v-fecbb3b7${_scopeId}>大人見店（ピーワンプラザ内）<br data-v-fecbb3b7${_scopeId}>天王店（ピーワンプラザ内） 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成6年</th> <td data-v-fecbb3b7${_scopeId}>篠原店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成7年</th> <td data-v-fecbb3b7${_scopeId}>新橋店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成8年</th> <td data-v-fecbb3b7${_scopeId}>リブロス笠井 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成11年</th> <td data-v-fecbb3b7${_scopeId}>大平台店・掛川中央店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成12年</th> <td data-v-fecbb3b7${_scopeId}>天竜店 営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成16年</th> <td data-v-fecbb3b7${_scopeId}>桜台店　営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成18年</th> <td data-v-fecbb3b7${_scopeId}>本部をフードワン佐鳴台店の2階へ移転</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成21年</th> <td data-v-fecbb3b7${_scopeId}>フードワンきらりタウン店・フードワン南浅田店　営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成22年</th> <td data-v-fecbb3b7${_scopeId}>フードワン泉店・三ヶ日店　営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成24年</th> <td data-v-fecbb3b7${_scopeId}>フードワン高林店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成25年</th> <td data-v-fecbb3b7${_scopeId}>菊川店営業開始・株式会社マツモトキヨシとフランチャイズ契約締結</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成26年</th> <td data-v-fecbb3b7${_scopeId}>フードワン東伊場店・マツモトキヨシ東伊場店営業開始、マツモトキヨシ池田店・見付店・マツモトキヨシ磐田店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成27年</th> <td data-v-fecbb3b7${_scopeId}>マツモトキヨシ菊川店・マツモトキヨシ浅羽店・豊川店・マツモトキヨシ豊川店・マツモトキヨシ立野店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成29年</th> <td data-v-fecbb3b7${_scopeId}>マツモトキヨシ新橋店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th data-v-fecbb3b7${_scopeId}>平成30年</th> <td data-v-fecbb3b7${_scopeId}>浜松市浜北区にプロセスセンターを開設（肉・魚介類・惣菜加工工場）</td></tr> <tr data-v-fecbb3b7${_scopeId}><th rowspan="4" data-v-fecbb3b7${_scopeId}>令和2年</th> <td data-v-fecbb3b7${_scopeId}>プロセスセンターが浜松市ＨＡＣＣＰ型食品衛生管理認証を取得</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>西伝寺店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>ほほえみ薬局西ヶ崎店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>浜松市西区に雄踏トレーニングセンターを開設（会議・研修施設）</td></tr> <tr data-v-fecbb3b7${_scopeId}><th rowspan="3" data-v-fecbb3b7${_scopeId}>令和3年</th> <td data-v-fecbb3b7${_scopeId}>薬局マツモトキヨシ菊川店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>豊橋曙店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>遠鉄ストアの移動スーパー運営開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th rowspan="3" data-v-fecbb3b7${_scopeId}>令和4年</th> <td data-v-fecbb3b7${_scopeId}>シャトレーゼ遠鉄ストア菊川店営業開始・株式会社シャトレーゼとフランチャイズ契約締結</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>マツモトキヨシさぎの宮駅前店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>マツモトキヨシ笠井店・薬局マツモトキヨシ笠井店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th rowspan="2" data-v-fecbb3b7${_scopeId}>令和5年</th> <td data-v-fecbb3b7${_scopeId}>シャトレーゼ遠鉄ストア湖西店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>掛川高御所店・マツモトキヨシ掛川高御所店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th rowspan="2" data-v-fecbb3b7${_scopeId}>令和6年</th> <td data-v-fecbb3b7${_scopeId}>袋井久能店営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>スーパーマーケットみっかび営業開始</td></tr> <tr data-v-fecbb3b7${_scopeId}><th rowspan="2" data-v-fecbb3b7${_scopeId}>令和7年</th> <td data-v-fecbb3b7${_scopeId}>マツモトキヨシ浜北店営業開始
                </td></tr> <tr data-v-fecbb3b7${_scopeId}><td data-v-fecbb3b7${_scopeId}>森店営業開始</td></tr></tbody></table></div>`);
			else return [createVNode("div", { class: "mobile-box" }, [createVNode("table", null, [createVNode("tbody", null, [
				createVNode("tr", null, [
					createVNode("th", null, "昭和48年10月"),
					createTextVNode(),
					createVNode("td", null, [
						createTextVNode("設立"),
						createVNode("br"),
						createTextVNode("向平店（現富塚店）営業開始")
					])
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和49年"),
					createTextVNode(),
					createVNode("td", null, "向宿店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和50年"),
					createTextVNode(),
					createVNode("td", null, "湖西店・磐田店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和51年"),
					createTextVNode(),
					createVNode("td", null, "西ヶ崎店・笠井店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和52年"),
					createTextVNode(),
					createVNode("td", null, "鴨江店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和53年"),
					createTextVNode(),
					createVNode("td", null, "佐鳴台店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和54年"),
					createTextVNode(),
					createVNode("td", null, "三島店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和55年"),
					createTextVNode(),
					createVNode("td", null, "立野店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和57年"),
					createTextVNode(),
					createVNode("td", null, "浜北店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和59年"),
					createTextVNode(),
					createVNode("td", null, [
						createTextVNode("POSシステム 西ヶ崎店へ導入"),
						createVNode("br"),
						createTextVNode("※62年3月には全店がPOS導入")
					])
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和60年"),
					createTextVNode(),
					createVNode("td", null, "竜洋店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "昭和61年"),
					createTextVNode(),
					createVNode("td", null, "池田店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成3年"),
					createTextVNode(),
					createVNode("td", null, "浅羽店（パディ内）・初生店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成5年"),
					createTextVNode(),
					createVNode("td", null, [
						createTextVNode("大人見店（ピーワンプラザ内）"),
						createVNode("br"),
						createTextVNode("天王店（ピーワンプラザ内） 営業開始")
					])
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成6年"),
					createTextVNode(),
					createVNode("td", null, "篠原店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成7年"),
					createTextVNode(),
					createVNode("td", null, "新橋店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成8年"),
					createTextVNode(),
					createVNode("td", null, "リブロス笠井 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成11年"),
					createTextVNode(),
					createVNode("td", null, "大平台店・掛川中央店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成12年"),
					createTextVNode(),
					createVNode("td", null, "天竜店 営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成16年"),
					createTextVNode(),
					createVNode("td", null, "桜台店　営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成18年"),
					createTextVNode(),
					createVNode("td", null, "本部をフードワン佐鳴台店の2階へ移転")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成21年"),
					createTextVNode(),
					createVNode("td", null, "フードワンきらりタウン店・フードワン南浅田店　営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成22年"),
					createTextVNode(),
					createVNode("td", null, "フードワン泉店・三ヶ日店　営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成24年"),
					createTextVNode(),
					createVNode("td", null, "フードワン高林店営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成25年"),
					createTextVNode(),
					createVNode("td", null, "菊川店営業開始・株式会社マツモトキヨシとフランチャイズ契約締結")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成26年"),
					createTextVNode(),
					createVNode("td", null, "フードワン東伊場店・マツモトキヨシ東伊場店営業開始、マツモトキヨシ池田店・見付店・マツモトキヨシ磐田店営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成27年"),
					createTextVNode(),
					createVNode("td", null, "マツモトキヨシ菊川店・マツモトキヨシ浅羽店・豊川店・マツモトキヨシ豊川店・マツモトキヨシ立野店営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成29年"),
					createTextVNode(),
					createVNode("td", null, "マツモトキヨシ新橋店営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", null, "平成30年"),
					createTextVNode(),
					createVNode("td", null, "浜松市浜北区にプロセスセンターを開設（肉・魚介類・惣菜加工工場）")
				]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", { rowspan: "4" }, "令和2年"),
					createTextVNode(),
					createVNode("td", null, "プロセスセンターが浜松市ＨＡＣＣＰ型食品衛生管理認証を取得")
				]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "西伝寺店営業開始")]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "ほほえみ薬局西ヶ崎店営業開始")]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "浜松市西区に雄踏トレーニングセンターを開設（会議・研修施設）")]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", { rowspan: "3" }, "令和3年"),
					createTextVNode(),
					createVNode("td", null, "薬局マツモトキヨシ菊川店営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "豊橋曙店営業開始")]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "遠鉄ストアの移動スーパー運営開始")]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", { rowspan: "3" }, "令和4年"),
					createTextVNode(),
					createVNode("td", null, "シャトレーゼ遠鉄ストア菊川店営業開始・株式会社シャトレーゼとフランチャイズ契約締結")
				]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "マツモトキヨシさぎの宮駅前店営業開始")]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "マツモトキヨシ笠井店・薬局マツモトキヨシ笠井店営業開始")]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", { rowspan: "2" }, "令和5年"),
					createTextVNode(),
					createVNode("td", null, "シャトレーゼ遠鉄ストア湖西店営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "掛川高御所店・マツモトキヨシ掛川高御所店営業開始")]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", { rowspan: "2" }, "令和6年"),
					createTextVNode(),
					createVNode("td", null, "袋井久能店営業開始")
				]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "スーパーマーケットみっかび営業開始")]),
				createTextVNode(),
				createVNode("tr", null, [
					createVNode("th", { rowspan: "2" }, "令和7年"),
					createTextVNode(),
					createVNode("td", null, "マツモトキヨシ浜北店営業開始\n                ")
				]),
				createTextVNode(),
				createVNode("tr", null, [createVNode("td", null, "森店営業開始")])
			])])])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		id: "map",
		title: "交通ご案内",
		class: "wrap-outside mb-md-8 wrap-outside-map-custom"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<p class="mb-0 mobile-box article-title" data-v-fecbb3b7${_scopeId}>浜松駅より車で約8分。浜松西ICより車で約20分。</p>`);
			else return [createVNode("p", { class: "mb-0 mobile-box article-title" }, "浜松駅より車で約8分。浜松西ICより車で約20分。")];
		}),
		_: 1
	}, _parent));
	_push(` <div class="group-content mobile-box" data-v-fecbb3b7><h4 data-v-fecbb3b7>バスの場合</h4> <p class="article-content" data-v-fecbb3b7><strong data-v-fecbb3b7>『佐鳴台団地』バス停下車</strong></p> <p data-v-fecbb3b7>浜松駅バスターミナル3番のりば<br data-v-fecbb3b7>「9 掛塚さなる台線 （鴨江 医療センター行） 」 （降車停留所まで15分）</p> <br data-v-fecbb3b7> <p data-v-fecbb3b7>浜松駅バスターミナル2番のりば<br data-v-fecbb3b7>「0 遠州蜆塚線 （蜆塚 佐鳴台行） 」 （降車停留所まで16分）</p> <p data-v-fecbb3b7><img${ssrRenderAttr("src", img_map_default)} width="450" height="317" alt="遠鉄ストア本部地図" data-v-fecbb3b7></p></div></main> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "前のページへ戻る",
		class: "mt-16 d-none-mobile",
		"is-back": "",
		href: "/company"
	}, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company/profile.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var profile_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fecbb3b7"]]);

export { profile_default as default };
//# sourceMappingURL=profile-MVQ5F85k.mjs.map
