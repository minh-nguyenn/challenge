import { _ as _plugin_vue_export_helper_default, u as useHead$1, j as appendWebpFormat } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { A as Article_default } from './Article-LWI8gJDh.mjs';
import { p as photo01__7__default, a as photo02__1__default, b as photo03_default, c as photo04_default, d as photo05_default } from './photo05-Dev8uvXg.mjs';
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

//#region app/pages/traceability/preview.vue
var _sfc_main = {
	components: {
		AppArticle: Article_default,
		AppButtonNavigation: ButtonNavigation_default
	},
	data() {
		const now = /* @__PURE__ */ new Date();
		return {
			breadcrumbItems: [{
				text: "ホーム",
				disabled: false,
				href: "/"
			}, {
				text: "牛肉安全・安心システム",
				disabled: true,
				href: "/traceability"
			}],
			eventList: [],
			calendarYear: +this.$route.query.year || now.getFullYear(),
			calendarMonth: +this.$route.query.month || now.getMonth() + 1,
			isMobile: false
		};
	},
	watch: {
		calendarYear: "fetchEvents",
		calendarMonth: "fetchEvents",
		isMobile(newVal, oldVal) {
			this.renderCalendar();
		}
	},
	mounted() {
		this.fetchEvents().then(() => {
			this.renderCalendar();
		});
		this.checkIsMobile();
		(void 0).addEventListener("resize", this.checkIsMobile);
	},
	beforeUnmount() {
		(void 0).removeEventListener("resize", this.checkIsMobile);
	},
	methods: {
		checkIsMobile() {
			this.isMobile = (void 0).innerWidth <= 768;
		},
		async fetchEvents() {
			const id = this.$route.query.id;
			const draftKey = this.$route.query.draftKey;
			const response = await this.$microcms.get({
				endpoint: `store-traceability`,
				contentId: id,
				queries: {
					offset: 0,
					orders: ["-posting"],
					fields: ["posting", "filename1"],
					limit: 100,
					draftKey: draftKey || ""
				}
			});
			const data = [];
			if (response) data.push(response);
			this.eventList = data || [];
			this.renderCalendar();
		},
		renderCalendar() {
			const ele = (void 0).getElementById("calendar");
			if (!ele) return;
			const opts = {
				year: this.calendarYear,
				month: this.calendarMonth,
				abbrDay: true,
				abbrYear: false,
				onMonthChanged: (month, year) => {
					this.calendarMonth = month;
					this.calendarYear = year;
				},
				onEventClick: (events) => {
					const linkElement = (void 0).createElement("a");
					linkElement.href = events.fileUrl;
					linkElement.target = "_blank";
					linkElement.click();
				},
				onDayClick: (day, events) => {
					if (!events || events.length === 0) return;
					if (events.length === 1) (void 0).open(events[0].fileUrl, "_blank");
					else {
						const container = (void 0).createElement("div");
						container.style.display = "flex";
						container.style.flexDirection = "column";
						container.style.alignItems = "center";
						container.style.gap = "8px";
						events.forEach((event, index) => {
							const btn = (void 0).createElement("a");
							btn.textContent = `ダウンロード`;
							btn.href = event.fileUrl;
							btn.target = "_blank";
							btn.className = "file";
							container.appendChild(btn);
						});
						const overlay = (void 0).createElement("div");
						overlay.style.position = "fixed";
						overlay.style.top = "0";
						overlay.style.left = "0";
						overlay.style.width = "100vw";
						overlay.style.height = "100vh";
						overlay.style.backgroundColor = "rgba(0,0,0,0.4)";
						overlay.style.display = "flex";
						overlay.style.justifyContent = "center";
						overlay.style.alignItems = "center";
						overlay.style.zIndex = "9999";
						const popup = (void 0).createElement("div");
						popup.style.background = "white";
						popup.style.padding = "20px";
						popup.style.borderRadius = "8px";
						popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
						popup.style.minWidth = "200px";
						popup.appendChild(container);
						overlay.appendChild(popup);
						overlay.onclick = (e) => {
							if (e.target === overlay) (void 0).body.removeChild(overlay);
						};
						(void 0).body.appendChild(overlay);
					}
				},
				events: this.eventList.map((event) => {
					const date = new Date(event.posting);
					date.setHours(date.getHours() + 9);
					return {
						desc: "ダウンロード",
						date: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
						fileUrl: appendWebpFormat(event.filename1?.url)
					};
				})
			};
			if (calendar) {
				new calendar(ele, opts);
				if (this.$route.query.month && this.$route.query.year) setTimeout(() => {
					ele.scrollIntoView({
						block: "center",
						inline: "nearest",
						behavior: "smooth"
					});
				}, 100);
			}
		}
	},
	setup() {
		useHead$1({ title: "サイトマップ｜遠鉄ストア" });
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppArticle = Article_default;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content" }, _attrs))} data-v-7e455938><main data-v-7e455938>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: $data.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` <h2 data-v-7e455938>牛肉安全・安心システム</h2> `);
	_push(ssrRenderComponent(_component_AppArticle, { title: "トレーサビリティについて" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="artitle-content mobile-box" data-v-7e455938${_scopeId}><p data-v-7e455938${_scopeId}>遠鉄ストアではお客様に安心して牛肉を購入して頂けるために、トレーサビリティシステムによる国産牛肉の生産履歴を検索するサービスを実施しています。<br data-v-7e455938${_scopeId}>
                        これは、パッケージに貼付された「個体識別番号」もしくは「ロット番号」をインターネットを通じて照合することで、牛の個体情報をお知らせするシステムです。
                    </p> <img class="fullImage"${ssrRenderAttr("src", photo01__7__default)} alt="" data-v-7e455938${_scopeId}></div>`);
			else return [createVNode("div", { class: "artitle-content mobile-box" }, [
				createVNode("p", null, [
					createTextVNode("遠鉄ストアではお客様に安心して牛肉を購入して頂けるために、トレーサビリティシステムによる国産牛肉の生産履歴を検索するサービスを実施しています。"),
					createVNode("br"),
					createTextVNode("\n                        これは、パッケージに貼付された「個体識別番号」もしくは「ロット番号」をインターネットを通じて照合することで、牛の個体情報をお知らせするシステムです。\n                    ")
				]),
				createTextVNode(),
				createVNode("img", {
					class: "fullImage",
					src: photo01__7__default,
					alt: ""
				})
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, { title: "「個体識別番号」「ロット番号」とは" }, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<div class="mobile-box" data-v-7e455938${_scopeId}><h4 class="content-title" data-v-7e455938${_scopeId}>個体識別番号</h4> <section class="contentInner" data-v-7e455938${_scopeId}><img${ssrRenderAttr("src", photo02__1__default)} alt="" data-v-7e455938${_scopeId}> <p data-v-7e455938${_scopeId}>国内で生まれ、飼育された全ての牛に、10桁の番号が印字された標識が耳に着けられます。1頭1頭の生産から店頭までの履歴は、この番号により独立行政法人
                            家畜改良センターで識別・管理されています。</p></section> <h4 class="content-title" data-v-7e455938${_scopeId}>ロット番号</h4> <section class="contentInner" data-v-7e455938${_scopeId}><img${ssrRenderAttr("src", photo03_default)} alt="" data-v-7e455938${_scopeId}> <p data-v-7e455938${_scopeId}>
                            遠鉄ストアプロセスセンターでは、納品された「部分肉」をスライス・カットして「パック肉」として商品化しています。<br data-v-7e455938${_scopeId}>当センター製造商品では、一括大量生産のため一つの商品に複数原料の国産牛肉が使用される可能性があります。<br data-v-7e455938${_scopeId}>そのため、当日加工した複数の個体識別番号がまとめてわかるロット番号（13桁）を採用し、個体を識別管理しています。
                        </p></section></div>`);
			else return [createVNode("div", { class: "mobile-box" }, [
				createVNode("h4", { class: "content-title" }, "個体識別番号"),
				createTextVNode(),
				createVNode("section", { class: "contentInner" }, [
					createVNode("img", {
						src: photo02__1__default,
						alt: ""
					}),
					createTextVNode(),
					createVNode("p", null, "国内で生まれ、飼育された全ての牛に、10桁の番号が印字された標識が耳に着けられます。1頭1頭の生産から店頭までの履歴は、この番号により独立行政法人\n                            家畜改良センターで識別・管理されています。")
				]),
				createTextVNode(),
				createVNode("h4", { class: "content-title" }, "ロット番号"),
				createTextVNode(),
				createVNode("section", { class: "contentInner" }, [
					createVNode("img", {
						src: photo03_default,
						alt: ""
					}),
					createTextVNode(),
					createVNode("p", null, [
						createTextVNode("\n                            遠鉄ストアプロセスセンターでは、納品された「部分肉」をスライス・カットして「パック肉」として商品化しています。"),
						createVNode("br"),
						createTextVNode("当センター製造商品では、一括大量生産のため一つの商品に複数原料の国産牛肉が使用される可能性があります。"),
						createVNode("br"),
						createTextVNode("そのため、当日加工した複数の個体識別番号がまとめてわかるロット番号（13桁）を採用し、個体を識別管理しています。\n                        ")
					])
				])
			])];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppArticle, {
		class: "wrap-custom",
		title: "調べ方について"
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<h4 class="h4_step" data-v-7e455938${_scopeId}><span data-v-7e455938${_scopeId}>STEP 1</span>お買い上げ商品のシールをご確認ください</h4> <section class="picBox mobile-box" data-v-7e455938${_scopeId}><div class="picBoxInner" data-v-7e455938${_scopeId}><p data-v-7e455938${_scopeId}>商品の右下に貼付けられたラベル</p> <img${ssrRenderAttr("src", photo04_default)} width="410" height="230" alt="" data-v-7e455938${_scopeId}></div> <div class="picBoxInner" data-v-7e455938${_scopeId}><p data-v-7e455938${_scopeId}>商品の左上に貼付けられたラベル</p> <img${ssrRenderAttr("src", photo05_default)} width="270" height="230" alt="" data-v-7e455938${_scopeId}></div></section> <div class="mobile-box" data-v-7e455938${_scopeId}><h4 class="h4_step" data-v-7e455938${_scopeId}><span data-v-7e455938${_scopeId}>STEP 2</span>ラベルに記載の番号の種類によって確認方法が異なります</h4> <h4 class="content-title" data-v-7e455938${_scopeId}>個体識別番号の場合</h4> <p data-v-7e455938${_scopeId}>下記の（独）家畜改良センターのサイトより、個体識別番号を入力すると牛肉の履歴をご確認いただけます。</p></div>`);
			else return [
				createVNode("h4", { class: "h4_step" }, [createVNode("span", null, "STEP 1"), createTextVNode("お買い上げ商品のシールをご確認ください")]),
				createTextVNode(),
				createVNode("section", { class: "picBox mobile-box" }, [
					createVNode("div", { class: "picBoxInner" }, [
						createVNode("p", null, "商品の右下に貼付けられたラベル"),
						createTextVNode(),
						createVNode("img", {
							src: photo04_default,
							width: "410",
							height: "230",
							alt: ""
						})
					]),
					createTextVNode(),
					createVNode("div", { class: "picBoxInner" }, [
						createVNode("p", null, "商品の左上に貼付けられたラベル"),
						createTextVNode(),
						createVNode("img", {
							src: photo05_default,
							width: "270",
							height: "230",
							alt: ""
						})
					])
				]),
				createTextVNode(),
				createVNode("div", { class: "mobile-box" }, [
					createVNode("h4", { class: "h4_step" }, [createVNode("span", null, "STEP 2"), createTextVNode("ラベルに記載の番号の種類によって確認方法が異なります")]),
					createTextVNode(),
					createVNode("h4", { class: "content-title" }, "個体識別番号の場合"),
					createTextVNode(),
					createVNode("p", null, "下記の（独）家畜改良センターのサイトより、個体識別番号を入力すると牛肉の履歴をご確認いただけます。")
				])
			];
		}),
		_: 1
	}, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		target: "_blank",
		class: "btn-next-custom",
		title: `独立行政法人 家畜改良センター`,
		href: "https://www.id.nlbc.go.jp/top.html",
		next: ""
	}, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) _push(`<strong data-v-7e455938${_scopeId}>牛の個体識別情報検索サービス</strong>`);
			else return [createVNode("strong", null, "牛の個体識別情報検索サービス")];
		}),
		_: 1
	}, _parent));
	_push(` <div class="mobile-box calendarJS-custom" data-v-7e455938><h4 class="content-title" data-v-7e455938>ロット番号の場合</h4> <p data-v-7e455938>下記カレンダーより、消費期限の日付を選択しロット番号に含まれる個体識別番号をお調べください。</p> <div id="calendar" data-v-7e455938></div></div> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		title: "前のページへ戻る",
		class: "btn-back btn-back-traceability",
		"is-back": "",
		href: "/shop"
	}, null, _parent));
	_push(`</main></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/traceability/preview.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var preview_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7e455938"]]);

export { preview_default as default };
//# sourceMappingURL=preview-Cw7HCOle.mjs.map
