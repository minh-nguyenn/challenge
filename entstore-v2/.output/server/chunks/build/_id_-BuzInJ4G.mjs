import { _ as _plugin_vue_export_helper_default, u as useHead$1, a as useRoute$2 } from '../virtual/entry.mjs';
import { _ as _sfc_main$1 } from './VxBreadcrumbs-iMGSAw81.mjs';
import { B as ButtonNavigation_default } from './ButtonNavigation-C1Lbf-BA.mjs';
import { u as useAsyncData } from './asyncData-BfWWpet8.mjs';
import { c as checkLengthTitle, f as fetchDataV2 } from './utils-CzPagAGc.mjs';
import { b as buildLegacyContext } from './useAsyncDataCompat-C4fFw-R-.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/pages/service/recipe/archive/detail/[id].vue
var _sfc_main = {
	async setup() {
		useHead$1({ title: "牛焼肉のペッパーチーズライス｜チャチャッとクッキング｜サービス｜遠鉄ストア - 静岡県西部のスーパーマーケット（浜松市,磐田市,袋井市,湖西市,掛川市）" });
		const { params, $microcms } = buildLegacyContext();
		const { data: __d } = await useAsyncData("page:" + useRoute$2().fullPath, async () => {
			const id = params.id;
			{
				const paramsRequest = [`id[contains]${id}`];
				const response = await fetchDataV2($microcms, {
					endpoint: "store-recipes",
					paramsRequest,
					fieldStart: "open_start",
					orders: "-open_start,-createdAt"
				});
				return { archiveDetail: response.contents && response.contents[0] ? response.contents[0] : null };
			}
		}, "$Zh0dxkGp1C");
		return { ...__d.value || {} };
	},
	data() {
		return { categoryColor: {
			野菜レシピ: "#47800d",
			肉レシピ: "#800d0d",
			魚レシピ: "#0d5980",
			その他: "#000000"
		} };
	},
	computed: {},
	mounted() {},
	methods: {
		checkLengthTitle,
		formatTextTime(time) {
			if (time) time = time + "";
			let timeCut = this.checkLengthTitle(time, 3);
			if (timeCut.includes("...")) timeCut = timeCut.replace(/\.\.\./g, "");
			return timeCut;
		},
		convertYouTubeUrlToEmbed(url) {
			const match = (this.archiveDetail.archive?.[0]?.url).match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
			if (match && match[1]) return `https://www.youtube.com/embed/${match[1]}`;
			return null;
		}
	}
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_VxBreadcrumbs = _sfc_main$1;
	const _component_AppButtonNavigation = ButtonNavigation_default;
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap-content recipe-archive-detail" }, _attrs))}><main>`);
	_push(ssrRenderComponent(_component_VxBreadcrumbs, {
		items: _ctx.breadcrumbItems,
		divider: ">"
	}, null, _parent));
	_push(` `);
	if (_ctx.archiveDetail) {
		_push(`<div><h2 class="header-h2 d-none-mobile"><em>チャチャッとクッキング</em><br>${ssrInterpolate(_ctx.archiveDetail.title)}</h2> <div class="category" style="${ssrRenderStyle({ "background-color": $data.categoryColor[_ctx.archiveDetail.category?.toString()] })}">${ssrInterpolate(_ctx.archiveDetail.category?.toString())}</div> <h2 class="header-h2 d-none-des">サラダチキンとトマトのカプレーゼ</h2> <div class="box-archive"><div class="box-left"><div class="gr-img-point"><div class="points"><div class="recipePoint"><small>調理時間</small> <br> <span>${ssrInterpolate(_ctx.archiveDetail.time)}分</span></div> <div class="recipePoint"><small>エネルギー（1人）</small> <br> <span>${ssrInterpolate(_ctx.archiveDetail.archive?.[0]?.energy)}kcal</span></div></div> <div><img${ssrRenderAttr("src", _ctx.$appendWebpFormat(_ctx.archiveDetail.filename1?.url))} alt=""></div></div> `);
		if (_ctx.archiveDetail && _ctx.archiveDetail.archive?.[0]?.url) _push(`<div><div class="header-archive-table">レシピ動画</div> <div class="box-iframe-youtube"><iframe${ssrRenderAttr("src", $options.convertYouTubeUrlToEmbed(_ctx.archiveDetail.archive?.[0]?.url))} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div>`);
		else _push(`<!---->`);
		_push(`</div> <div class="box-right"><div class="header-archive-table">材料（${ssrInterpolate(_ctx.archiveDetail.archive?.[0]?.ingredients?.[0]?.serving_no)}）
                        </div> <div class="table-info">${_ctx.archiveDetail.archive?.[0]?.ingredients?.[0]?.ingredients ?? ""}</div> <div class="header-archive-table">作り方</div> <div class="steps-info">${_ctx.archiveDetail.archive?.[0]?.steps ?? ""}</div> `);
		if (_ctx.archiveDetail.archive?.[0]?.point) _push(`<div class="point-info"><strong>ここがポイント！</strong> <div>${_ctx.archiveDetail.archive?.[0]?.point ?? ""}</div></div>`);
		else _push(`<!---->`);
		_push(`</div></div></div>`);
	} else _push(`<!---->`);
	_push(`</main> `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		href: "/service/recipe/archive/",
		class: "d-none-mobile custom-chirashi-back",
		title: "前のページへ戻る",
		"is-back": ""
	}, null, _parent));
	_push(` `);
	_push(ssrRenderComponent(_component_AppButtonNavigation, {
		href: "/service/recipe/archive/",
		class: "d-none-des custom-recipe-archive",
		title: "一覧へ戻る"
	}, null, _parent));
	_push(`</div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service/recipe/archive/detail/[id].vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var _id__default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id__default as default };
//# sourceMappingURL=_id_-BuzInJ4G.mjs.map
