/**
 * Doc/ghi danh sach khuyen mai xuong data/demo-promos.json.
 *
 * Vi sao can: man /admin/promo truoc day chi giu muc moi trong bien cua trang,
 * F5 mot cai la mat, va trang search khong bao gio thay — vi search lay du lieu
 * tu server. Muon demo tron ven luong "dang ky -> hien ngay o tim kiem" thi
 * phai ghi that xuong file.
 *
 * ⚠️ BAN DEMO, KHONG CO DANG NHAP. Bat ky ai goi duoc API deu sua duoc du lieu.
 * Truoc khi dua len moi truong that phai them xac thuc (xem README).
 */
import fs from 'node:fs'
import path from 'node:path'
import { URIBA, URIBA_BY_KEY } from '~~/shared/uriba.mjs'

const FILE = 'demo-promos.json'

/** Duong dan file khuyen mai; chua co thi tao o data/ canh thu muc lam viec */
function promoFilePath() {
  const found = resolveDataFile(FILE)
  if (found) return found
  return path.resolve(process.cwd(), 'data', FILE)
}

/** Doc NGUYEN file, khong dich ngay — dung khi ghi lai */
export function readPromoFile() {
  const p = promoFilePath()
  if (!fs.existsSync(p)) return { generatedAt: new Date().toISOString(), data: [] }
  const raw = JSON.parse(fs.readFileSync(p, 'utf8'))
  return { generatedAt: raw.generatedAt || new Date().toISOString(), data: raw.data || [] }
}

/** Ghi de file. Ghi ra file tam roi doi ten de khong bao gio de lai file vo */
export function writePromoFile(doc: any) {
  const p = promoFilePath()
  fs.mkdirSync(path.dirname(p), { recursive: true })
  const tmp = p + '.tmp'
  fs.writeFileSync(tmp, JSON.stringify(doc, null, 2) + '\n', 'utf8')
  fs.renameSync(tmp, p)
}

/** Doi 「青果」 hoac 'seika' -> key quay hop le; khong nhan ra thi tra ve null */
export function toUribaKey(input: any) {
  const s = String(input ?? '').trim()
  if (!s) return null
  if (URIBA_BY_KEY[s]) return s
  const found = URIBA.find((u: any) => u.label === s || u.desc === s)
  return found ? found.key : null
}

/**
 * Doc ngay tu o Excel / chuoi nguoi dung go.
 * Nhan: Date san co, so serial cua Excel, 「2026-09-30」, 「2026/9/30」.
 */
export function parseDate(input: any) {
  if (input == null || input === '') return null
  if (input instanceof Date && !isNaN(input.getTime())) return input

  // Excel luu ngay thanh so ngay ke tu 1899-12-30
  if (typeof input === 'number' && input > 0 && input < 100000) {
    const d = new Date(Date.UTC(1899, 11, 30) + input * 86400000)
    return isNaN(d.getTime()) ? null : d
  }

  const s = String(input).trim().replace(/[年月]/g, '-').replace(/日/g, '')
  const d = new Date(s)
  return isNaN(d.getTime()) ? null : d
}

/**
 * Kiem tra va chuan hoa MOT muc khuyen mai.
 * Tra ve { ok, promo } hoac { ok: false, error } — noi ro sai o dau de man hinh
 * import bao duoc "dong 5: thieu 終了日" thay vi chi bao "loi".
 */
export function normalizePromo(input: any) {
  const productName = String(input.productName ?? '').trim()
  if (!productName) return { ok: false, error: '商品名がありません' }

  const normalPrice = Math.round(Number(input.normalPrice))
  const salePrice = Math.round(Number(input.salePrice))
  if (!Number.isFinite(normalPrice) || normalPrice <= 0) {
    return { ok: false, error: '通常価格が正しくありません' }
  }
  if (!Number.isFinite(salePrice) || salePrice <= 0) {
    return { ok: false, error: '特売価格が正しくありません' }
  }
  if (salePrice >= normalPrice) {
    return { ok: false, error: '特売価格は通常価格より安くしてください' }
  }

  // 終了日 bat buoc: co che tu go khuyen mai het han dua han vao truong nay
  const end = parseDate(input.endDate)
  if (!end) return { ok: false, error: '終了日がありません（期限切れ自動除外に必要）' }
  end.setHours(23, 59, 59, 0)

  const start = parseDate(input.startDate) || new Date()
  if (start.getTime() > end.getTime()) {
    return { ok: false, error: '開始日が終了日より後になっています' }
  }

  const uriba = toUribaKey(input.uriba) || 'grocery'

  return {
    ok: true,
    promo: {
      id: 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      productName,
      uriba,
      uribaLabel: URIBA_BY_KEY[uriba]?.label || uriba,
      normalPrice,
      salePrice,
      discountPercent: Math.round((1 - salePrice / normalPrice) * 100),
      startDate: start.toISOString(),
      endDate: end.toISOString(),
      note: String(input.note ?? '').trim(),
      demo: true,
      // Ngay that do nguoi dung nhap -> KHONG dich theo generatedAt
      fixedDate: true,
    },
  }
}

/**
 * Them nhieu muc cung luc.
 * Trung ten + trung ngay ket thuc thi GHI DE muc cu, de import lai cung mot file
 * khong sinh ra hang chuc ban sao.
 */
export function addPromos(inputs: any[]) {
  const doc = readPromoFile()
  const added: any[] = []
  const errors: any[] = []

  inputs.forEach((input, i) => {
    const r = normalizePromo(input)
    if (!r.ok) {
      errors.push({ row: input.__row ?? i + 1, name: input.productName ?? '', error: r.error })
      return
    }
    const key = (p: any) => `${p.productName}@${String(p.endDate).slice(0, 10)}`
    const at = doc.data.findIndex((p: any) => key(p) === key(r.promo))
    if (at >= 0) {
      // Giu nguyen id cu khi ghi de: import lai cung mot file ma id doi thi
      // moi cho dang tham chieu toi no (nut xoa, link) deu tro thanh sai.
      r.promo.id = doc.data[at].id
      doc.data[at] = r.promo
    } else {
      doc.data.push(r.promo)
    }
    added.push(r.promo)
  })

  if (added.length) writePromoFile(doc)
  return { added, errors, total: doc.data.length }
}

/** Xoa mot muc theo id. Tra ve true neu that su co muc bi xoa */
export function deletePromo(id: string) {
  const doc = readPromoFile()
  const before = doc.data.length
  doc.data = doc.data.filter((p: any) => p.id !== id)
  if (doc.data.length === before) return false
  writePromoFile(doc)
  return true
}
