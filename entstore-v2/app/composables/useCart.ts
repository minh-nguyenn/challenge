/**
 * Giỏ hàng (カート) — bản demo, chỉ tới bước "thêm vào giỏ".
 *
 * Vì sao dừng ở đó: 遠鉄ストア đã có sẵn trang bán hàng hoàn chỉnh
 * https://shop.entstore.co.jp/ nên bản này KHÔNG làm lại khâu thanh toán.
 * Nút 「ご購入手続きへ」 sẽ chuyển sang giỏ hàng của trang đó.
 *
 * ⚠️ Hai trang khác tên miền nên trình duyệt KHÔNG chia sẻ được giỏ hàng.
 * Muốn giữ nguyên hàng đã thêm thì phải nối bằng API/SSO phía 遠鉄ストア.
 * Bản demo vì vậy chỉ mở đúng trang giỏ hàng và nói rõ điều này trên màn hình
 * (slide thuyết trình ghi rõ đây là điểm cần bên EC mở API).
 *
 * Khác với 買い物リスト (useShoppingList): danh sách đi chợ là để
 * cầm đi siêu thị, còn giỏ hàng là để mua online.
 */
const KEY = 'entstore.cart.v1'

/** Giỏ hàng của trang EC thật — nút mua hàng sẽ mở đúng trang này */
export const EC_CART_URL = 'https://shop.entstore.co.jp/p/cart'

export type CartItem = {
  id: string
  name: string
  price: number           // giá chưa thuế (số DEMO)
  taxIncluded: number     // giá đã gồm thuế (số DEMO)
  unit?: string
  uriba?: string
  uribaLabel?: string
  /** Giá khuyến mãi nếu sản phẩm đang có 特売 lúc thêm vào giỏ */
  salePrice?: number | null
  qty: number
}

const items = ref<CartItem[]>([])
let loaded = false

function persist() {
  if (!import.meta.client) return
  try {
    localStorage.setItem(KEY, JSON.stringify(items.value))
  } catch {
    // Chế độ riêng tư có thể chặn localStorage — bỏ qua, không làm hỏng trang
  }
}

function load() {
  if (loaded || !import.meta.client) return
  loaded = true
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) items.value = JSON.parse(raw)
  } catch {
    items.value = []
  }
}

export function useCart() {
  load()

  function add(p: any, qty = 1) {
    const found = items.value.find((i) => i.id === p.id)
    if (found) {
      found.qty += qty
    } else {
      items.value.push({
        id: p.id,
        name: p.name,
        price: Number(p.price) || 0,
        taxIncluded: Number(p.taxIncluded || p.price) || 0,
        unit: p.unit,
        uriba: p.uriba,
        uribaLabel: p.uribaLabel,
        salePrice: p.promo ? Number(p.promo.salePrice) : null,
        qty,
      })
    }
    persist()
  }

  function remove(id: string) {
    items.value = items.value.filter((i) => i.id !== id)
    persist()
  }

  function setQty(id: string, qty: number) {
    const it = items.value.find((i) => i.id === id)
    if (!it) return
    if (qty <= 0) return remove(id)
    it.qty = Math.min(99, qty)
    persist()
  }

  function clear() {
    items.value = []
    persist()
  }

  const has = (id: string) => items.value.some((i) => i.id === id)

  const count = computed(() => items.value.reduce((a, i) => a + i.qty, 0))

  /** Đơn giá thực tế: có 特売 thì lấy giá khuyến mãi */
  const unitPrice = (i: CartItem) => (i.salePrice && i.salePrice > 0 ? i.salePrice : i.taxIncluded)

  const subtotal = computed(() => items.value.reduce((a, i) => a + unitPrice(i) * i.qty, 0))

  /** Số tiền tiết kiệm được nhờ 特売 — để hiện trên màn hình giỏ hàng */
  const saved = computed(() =>
    items.value.reduce((a, i) => a + (i.salePrice ? (i.taxIncluded - i.salePrice) * i.qty : 0), 0)
  )

  return { items, count, subtotal, saved, unitPrice, add, remove, setQty, clear, has }
}
