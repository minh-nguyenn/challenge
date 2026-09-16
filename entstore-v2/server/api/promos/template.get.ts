/**
 * Tai file Excel mau de nhap khuyen mai.
 *
 * Sinh tai cho thay vi de san mot file tinh, de cot va vi du luon khop voi
 * bo kiem tra o import.post.ts — sua luat mot noi thi file mau doi theo.
 */
import ExcelJS from 'exceljs'
import { URIBA } from '~~/shared/uriba.mjs'

export default defineEventHandler(async (event) => {
  const wb = new ExcelJS.Workbook()
  const ws = wb.addWorksheet('特売')

  ws.columns = [
    { header: '商品名', key: 'productName', width: 22 },
    { header: '通常価格', key: 'normalPrice', width: 12 },
    { header: '特売価格', key: 'salePrice', width: 12 },
    { header: '売場', key: 'uriba', width: 14 },
    { header: '開始日', key: 'startDate', width: 14 },
    { header: '終了日', key: 'endDate', width: 14 },
    { header: '備考', key: 'note', width: 26 },
  ]
  ws.getRow(1).font = { bold: true }

  const d = (plus: number) => {
    const x = new Date()
    x.setDate(x.getDate() + plus)
    return x.toISOString().slice(0, 10)
  }

  ws.addRow({
    productName: 'うなぎ',
    normalPrice: 1148,
    salePrice: 858,
    uriba: '鮮魚',
    startDate: d(0),
    endDate: d(7),
    note: '土用の丑の日',
  })
  ws.addRow({
    productName: '牛乳',
    normalPrice: 328,
    salePrice: 298,
    uriba: '日配',
    startDate: d(0),
    endDate: d(3),
    note: '',
  })

  // Sheet phu: liet ke ten quay hop le, khoi phai doan
  const help = wb.addWorksheet('売場一覧')
  help.columns = [
    { header: '売場名（この名前を入力）', key: 'label', width: 26 },
    { header: '取扱内容', key: 'desc', width: 30 },
  ]
  help.getRow(1).font = { bold: true }
  for (const u of URIBA as any[]) help.addRow({ label: u.label, desc: u.desc })

  const buf = await wb.xlsx.writeBuffer()

  setHeader(event, 'content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  setHeader(event, 'content-disposition', 'attachment; filename="tokubai-template.xlsx"')
  return Buffer.from(buf)
})
