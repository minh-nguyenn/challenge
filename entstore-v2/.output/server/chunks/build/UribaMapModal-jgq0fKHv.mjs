import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { C as ClientOnly } from './client-only-BGdwY8sH.mjs';
import { computed, ref, watch, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderTeleport, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { a as URIBA } from '../_/uriba.mjs';

//#region app/composables/useShoppingList.ts
var items = ref([]);
function useShoppingList() {
	function add(item) {
		const found = items.value.find((i) => i.name === item.name);
		if (found) found.qty += item.qty || 1;
		else items.value.push({
			...item,
			qty: item.qty || 1
		});
	}
	function addMany(list) {
		for (const it of list) add(it);
	}
	function remove(name) {
		items.value = items.value.filter((i) => i.name !== name);
	}
	function setQty(name, qty) {
		const it = items.value.find((i) => i.name === name);
		if (!it) return;
		if (qty <= 0) return remove(name);
		it.qty = qty;
	}
	function toggle(name) {
		const it = items.value.find((i) => i.name === name);
		if (!it) return;
		it.checked = !it.checked;
	}
	function clear() {
		items.value = [];
	}
	return {
		items,
		count: computed(() => items.value.reduce((a, i) => a + i.qty, 0)),
		uribaKeys: computed(() => [...new Set(items.value.map((i) => i.uriba).filter(Boolean))]),
		add,
		addMany,
		remove,
		setQty,
		toggle,
		clear
	};
}
//#endregion
//#region app/components/UribaMapModal.vue
var _sfc_main = {
	__name: "UribaMapModal",
	__ssrInlineRender: true,
	props: {
		modelValue: {
			type: Boolean,
			default: false
		},
		highlight: {
			type: Array,
			default: () => []
		},
		title: {
			type: String,
			default: "売場マップ"
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		/**
		* Sơ đồ 売場 dạng MODAL, tự highlight các quầy có trong danh sách đi chợ.
		* Slide 7: 「売場マップ：買い物リストの売場を自動ハイライト」
		*
		* Sơ đồ vẽ bằng SVG nên co giãn theo màn hình, không cần file ảnh.
		*/
		const props = __props;
		/**
		* Bố cục quầy trong siêu thị.
		* Theo lối đi thường gặp ở siêu thị Nhật: vào cửa gặp 青果 trước,
		* đi vòng theo tường là 鮮魚 → 精肉 → 日配, giữa sảnh là グロサリー.
		*/
		const LAYOUT = {
			seika: {
				x: 20,
				y: 40,
				w: 150,
				h: 90
			},
			sengyo: {
				x: 180,
				y: 40,
				w: 120,
				h: 90
			},
			seiniku: {
				x: 310,
				y: 40,
				w: 120,
				h: 90
			},
			nippai: {
				x: 440,
				y: 40,
				w: 120,
				h: 90
			},
			grocery: {
				x: 100,
				y: 150,
				w: 200,
				h: 110
			},
			reito: {
				x: 310,
				y: 150,
				w: 110,
				h: 110
			},
			drink: {
				x: 430,
				y: 150,
				w: 130,
				h: 110
			},
			bakery: {
				x: 20,
				y: 280,
				w: 130,
				h: 70
			},
			sozai: {
				x: 160,
				y: 280,
				w: 140,
				h: 70
			}
		};
		const isOn = (key) => props.highlight.includes(key);
		/**
		* Sau khi bấm 「お店で買う」 ở trang công thức, modal này mở ra — nhưng trước
		* đây từ đây không có lối nào đi tiếp sang 買い物リスト, phải tự để ý link
		* trên thanh tìm kiếm. Nên thêm luôn nút đi tới danh sách (trừ khi đang ở đó).
		*/
		useShoppingList();
		const route = useRoute();
		computed(() => route.path === "/list");
		const shown = computed(() => URIBA.filter((u) => LAYOUT[u.key]).map((u) => ({
			...u,
			box: LAYOUT[u.key],
			on: isOn(u.key)
		})));
		watch(() => props.modelValue, (v) => {});
		return (_ctx, _push, _parent, _attrs) => {
			const _component_ClientOnly = ClientOnly;
			ssrRenderTeleport(_push, (_push) => {
				if (__props.modelValue) {
					_push(`<div class="um-overlay" data-v-4ec7ea4d><div class="um-dialog" role="dialog" aria-modal="true"${ssrRenderAttr("aria-label", __props.title)} data-v-4ec7ea4d><header class="um-head" data-v-4ec7ea4d><h3 data-v-4ec7ea4d>${ssrInterpolate(__props.title)}</h3> <button type="button" class="um-close" aria-label="閉じる" data-v-4ec7ea4d>×</button></header> <div class="um-body" data-v-4ec7ea4d><p class="um-note" data-v-4ec7ea4d>
            買い物リストの材料がある売場を
            <span class="um-note-hl" data-v-4ec7ea4d>ハイライト</span>
            しています。
          </p> <svg class="um-map" viewBox="0 0 580 370" role="img" aria-label="店内売場マップ" data-v-4ec7ea4d><rect x="10" y="10" width="560" height="350" rx="8" fill="#faf7f1" stroke="#d9cdb8" data-v-4ec7ea4d></rect> <rect x="440" y="300" width="120" height="50" rx="6" fill="#eee" stroke="#ccc" data-v-4ec7ea4d></rect> <text x="500" y="330" text-anchor="middle" class="um-label-sm" data-v-4ec7ea4d>入口・レジ</text> <!--[-->`);
					ssrRenderList(shown.value, (u) => {
						_push(`<g data-v-4ec7ea4d><rect${ssrRenderAttr("x", u.box.x)}${ssrRenderAttr("y", u.box.y)}${ssrRenderAttr("width", u.box.w)}${ssrRenderAttr("height", u.box.h)} rx="6"${ssrRenderAttr("fill", u.on ? u.color : "#fff")}${ssrRenderAttr("stroke", u.on ? u.color : "#d5cbb9")}${ssrRenderAttr("stroke-width", u.on ? 3 : 1)}${ssrRenderAttr("opacity", u.on ? 1 : .55)} data-v-4ec7ea4d></rect> <text${ssrRenderAttr("x", u.box.x + u.box.w / 2)}${ssrRenderAttr("y", u.box.y + u.box.h / 2 - 2)} text-anchor="middle" class="um-label"${ssrRenderAttr("fill", u.on ? "#fff" : "#8a7c6a")} data-v-4ec7ea4d>${ssrInterpolate(u.label)}</text> <text${ssrRenderAttr("x", u.box.x + u.box.w / 2)}${ssrRenderAttr("y", u.box.y + u.box.h / 2 + 16)} text-anchor="middle" class="um-label-sm"${ssrRenderAttr("fill", u.on ? "rgba(255,255,255,.9)" : "#b3a795")} data-v-4ec7ea4d>${ssrInterpolate(u.desc)}</text></g>`);
					});
					_push(`<!--]--></svg> <ul class="um-legend" data-v-4ec7ea4d><!--[-->`);
					ssrRenderList(shown.value.filter((x) => x.on), (u) => {
						_push(`<li data-v-4ec7ea4d><span class="um-dot" style="${ssrRenderStyle({ background: u.color })}" data-v-4ec7ea4d></span>${ssrInterpolate(u.label)}</li>`);
					});
					_push(`<!--]--> `);
					if (!__props.highlight.length) _push(`<li class="um-legend-empty" data-v-4ec7ea4d>
              （買い物リストが空です）
            </li>`);
					else _push(`<!---->`);
					_push(`</ul></div> `);
					_push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
					_push(`</div></div>`);
				} else _push(`<!---->`);
			}, "body", false, _parent);
		};
	}
};
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UribaMapModal.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var UribaMapModal_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["__scopeId", "data-v-4ec7ea4d"]]);

export { UribaMapModal_default as U, useShoppingList as u };
//# sourceMappingURL=UribaMapModal-jgq0fKHv.mjs.map
