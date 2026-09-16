/**
 * Danh sách đi chợ + giỏ hàng (slide 6, và Yêu cầu 3).
 *
 * Lưu trong localStorage của trình duyệt: không cần đăng nhập, không gửi dữ
 * liệu đi đâu. Đây là bản demo nên chưa có tài khoản người dùng.
 *
 * ⚠️ Giá là số ẢO — mọi chỗ hiển thị phải kèm badge 「DEMO」.
 */
const KEY = 'entstore.shoppingList.v1'

export type ListItem = {
  name: string
  amount?: string
  uriba?: string
  from?: string          // tên món ăn đã thêm nguyên liệu này
  qty: number
  checked?: boolean
}

const items = ref<ListItem[]>([])
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

export function useShoppingList() {
  load()

  function add(item: Omit<ListItem, 'qty'> & { qty?: number }) {
    const found = items.value.find((i) => i.name === item.name)
    if (found) found.qty += item.qty || 1
    else items.value.push({ ...item, qty: item.qty || 1 })
    persist()
  }

  function addMany(list: Array<Omit<ListItem, 'qty'>>) {
    for (const it of list) add(it)
  }

  function remove(name: string) {
    items.value = items.value.filter((i) => i.name !== name)
    persist()
  }

  function setQty(name: string, qty: number) {
    const it = items.value.find((i) => i.name === name)
    if (!it) return
    if (qty <= 0) return remove(name)
    it.qty = qty
    persist()
  }

  function toggle(name: string) {
    const it = items.value.find((i) => i.name === name)
    if (!it) return
    it.checked = !it.checked
    persist()
  }

  function clear() {
    items.value = []
    persist()
  }

  const count = computed(() => items.value.reduce((a, i) => a + i.qty, 0))
  const uribaKeys = computed(() => [...new Set(items.value.map((i) => i.uriba).filter(Boolean))])

  return { items, count, uribaKeys, add, addMany, remove, setQty, toggle, clear }
}
