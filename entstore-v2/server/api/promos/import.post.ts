/**
 * Import danh sach khuyen mai tu file Excel (.xlsx) hoac CSV.
 *
 * Nguoi phu trach 特売 lam viec bang Excel, khong go JSON. Man hinh nay nhan
 * thang file ho dang co.
 *
 * Doc file o PHIA SERVER chu khong phai trinh duyet, vi phan kiem tra du lieu
 * (gia am, thieu 終了日, 特売価格 cao hon 通常価格…) phai dung mot bo luat voi
 * luc dang ky tay — de o hai noi thi som muon cung lech nhau.
 */
import ExcelJS from 'exceljs'

/** Ten cot chap nhan duoc -> truong du lieu. Nhan ca tieng Nhat lan tieng Anh */
const COLUMN_MAP: Record<string, string> = {
  商品名: 'productName',
  品名: 'productName',
  productname: 'productName',
  name: 'productName',
  product: 'productName',

  通常価格: 'normalPrice',
  定価: 'normalPrice',
  normalprice: 'normalPrice',
  price: 'normalPrice',

  特売価格: 'salePrice',
  売価: 'salePrice',
  saleprice: 'salePrice',
  sale: 'salePrice',

  売場: 'uriba',
  uriba: 'uriba',
  category: 'uriba',

  開始日: 'startDate',
  startdate: 'startDate',
  start: 'startDate',

  終了日: 'endDate',
  enddate: 'endDate',
  end: 'endDate',

  備考: 'note',
  note: 'note',
  memo: 'note',
}

const normHeader = (s: any) =>
  String(s ?? '')
    .trim()
    .toLowerCase()
    .replace(/[\s_－ー-]/g, '')

/** Lay gia tri that cua o Excel (o co the la cong thuc, rich text, hyperlink) */
function cellValue(cell: any) {
  const v = cell?.value
  if (v == null) return ''
  if (v instanceof Date) return v
  if (typeof v === 'object') {
    if ('result' in v) return v.result          // o cong thuc
    if ('text' in v) return v.text              // hyperlink
    if ('richText' in v) return v.richText.map((t: any) => t.text).join('')
    return ''
  }
  return v
}

/** Tach CSV co xet dau nhay kep, de 「うなぎ, 国産」 khong bi cat lam doi */
function parseCsv(text: string) {
  const rows: string[][] = []
  let row: string[] = []
  let cur = ''
  let quoted = false

  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++ }
        else quoted = false
      } else cur += c
    } else if (c === '"') quoted = true
    else if (c === ',') { row.push(cur); cur = '' }
    else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = '' }
    else if (c !== '\r') cur += c
  }
  if (cur !== '' || row.length) { row.push(cur); rows.push(row) }
  return rows.filter((r) => r.some((c) => String(c).trim() !== ''))
}

export default defineEventHandler(async (event) => {
  const parts = await readMultipartFormData(event)
  const file = parts?.find((p) => p.name === 'file' && p.filename)
  if (!file) {
    throw createError({ statusCode: 400, statusMessage: 'ファイルが添付されていません' })
  }
  if (file.data.length > 5 * 1024 * 1024) {
    throw createError({ statusCode: 400, statusMessage: 'ファイルが大きすぎます（5MBまで）' })
  }

  const name = String(file.filename || '').toLowerCase()
  const isCsv = name.endsWith('.csv') || name.endsWith('.txt')
  const isXlsx = name.endsWith('.xlsx') || name.endsWith('.xlsm')
  if (!isCsv && !isXlsx) {
    throw createError({
      statusCode: 400,
      statusMessage: '.xlsx または .csv を選んでください（.xls 形式は未対応です）',
    })
  }

  // --- 1. Doc file thanh bang 2 chieu ---
  let table: any[][] = []
  if (isCsv) {
    // Excel tieng Nhat xuat CSV thuong kem BOM; bo di keo cot dau hong ten
    table = parseCsv(file.data.toString('utf8').replace(/^﻿/, ''))
  } else {
    const wb = new ExcelJS.Workbook()
    try {
      await wb.xlsx.load(file.data)
    } catch {
      throw createError({ statusCode: 400, statusMessage: 'Excelファイルを読み取れませんでした' })
    }
    const ws = wb.worksheets[0]
    if (!ws) throw createError({ statusCode: 400, statusMessage: 'シートが見つかりません' })
    ws.eachRow({ includeEmpty: false }, (row) => {
      const cells: any[] = []
      row.eachCell({ includeEmpty: true }, (cell, col) => {
        cells[col - 1] = cellValue(cell)
      })
      table.push(cells)
    })
  }

  if (table.length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: '見出し行とデータ行が必要です（2行以上）',
    })
  }

  // --- 2. Doc dong tieu de ---
  const header = table[0].map(normHeader)
  const fieldAt: Record<number, string> = {}
  header.forEach((h, i) => {
    const f = COLUMN_MAP[h]
    if (f) fieldAt[i] = f
  })

  const mapped = Object.values(fieldAt)
  const missing = ['productName', 'normalPrice', 'salePrice', 'endDate'].filter(
    (f) => !mapped.includes(f)
  )
  if (missing.length) {
    const label: Record<string, string> = {
      productName: '商品名',
      normalPrice: '通常価格',
      salePrice: '特売価格',
      endDate: '終了日',
    }
    throw createError({
      statusCode: 400,
      statusMessage: `見出しに ${missing.map((m) => label[m]).join('・')} がありません`,
    })
  }

  // --- 3. Doi tung dong thanh ban ghi ---
  const inputs: any[] = []
  for (let r = 1; r < table.length; r++) {
    const row = table[r]
    if (!row || row.every((c) => String(c ?? '').trim() === '')) continue
    const rec: any = { __row: r + 1 }   // so dong nhu nguoi dung thay trong Excel
    for (const [i, field] of Object.entries(fieldAt)) {
      rec[field] = row[Number(i)]
    }
    inputs.push(rec)
  }

  if (!inputs.length) {
    throw createError({ statusCode: 400, statusMessage: 'データ行がありません' })
  }
  if (inputs.length > 500) {
    throw createError({ statusCode: 400, statusMessage: '一度に取り込めるのは500件までです' })
  }

  // --- 4. Kiem tra + ghi, dung chung bo luat voi dang ky tay ---
  const { added, errors, total } = addPromos(inputs)

  return {
    demo: true,
    fileName: file.filename,
    rowCount: inputs.length,
    addedCount: added.length,
    errorCount: errors.length,
    total,
    added,
    errors,
  }
})
