import { computed, ref } from 'vue';

//#region app/composables/useCart.ts
/** Giỏ hàng của trang EC thật — nút mua hàng sẽ mở đúng trang này */
var EC_CART_URL = "https://shop.entstore.co.jp/p/cart";
var items = ref([]);
function useCart() {
	function add(p, qty = 1) {
		const found = items.value.find((i) => i.id === p.id);
		if (found) found.qty += qty;
		else items.value.push({
			id: p.id,
			name: p.name,
			price: Number(p.price) || 0,
			taxIncluded: Number(p.taxIncluded || p.price) || 0,
			unit: p.unit,
			uriba: p.uriba,
			uribaLabel: p.uribaLabel,
			salePrice: p.promo ? Number(p.promo.salePrice) : null,
			qty
		});
	}
	function remove(id) {
		items.value = items.value.filter((i) => i.id !== id);
	}
	function setQty(id, qty) {
		const it = items.value.find((i) => i.id === id);
		if (!it) return;
		if (qty <= 0) return remove(id);
		it.qty = Math.min(99, qty);
	}
	function clear() {
		items.value = [];
	}
	const has = (id) => items.value.some((i) => i.id === id);
	const count = computed(() => items.value.reduce((a, i) => a + i.qty, 0));
	/** Đơn giá thực tế: có 特売 thì lấy giá khuyến mãi */
	const unitPrice = (i) => i.salePrice && i.salePrice > 0 ? i.salePrice : i.taxIncluded;
	return {
		items,
		count,
		subtotal: computed(() => items.value.reduce((a, i) => a + unitPrice(i) * i.qty, 0)),
		saved: computed(() => items.value.reduce((a, i) => a + (i.salePrice ? (i.taxIncluded - i.salePrice) * i.qty : 0), 0)),
		unitPrice,
		add,
		remove,
		setQty,
		clear,
		has
	};
}

export { EC_CART_URL as E, useCart as u };
//# sourceMappingURL=useCart-DarJ4RET.mjs.map
