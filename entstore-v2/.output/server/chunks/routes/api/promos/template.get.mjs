import { c as defineEventHandler, h as setHeader } from '../../../_/nitro.mjs';
import ExcelJS from 'exceljs';
import { a as URIBA } from '../../../_/uriba.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const template_get = defineEventHandler(async (event) => {
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet("\u7279\u58F2");
  ws.columns = [
    { header: "\u5546\u54C1\u540D", key: "productName", width: 22 },
    { header: "\u901A\u5E38\u4FA1\u683C", key: "normalPrice", width: 12 },
    { header: "\u7279\u58F2\u4FA1\u683C", key: "salePrice", width: 12 },
    { header: "\u58F2\u5834", key: "uriba", width: 14 },
    { header: "\u958B\u59CB\u65E5", key: "startDate", width: 14 },
    { header: "\u7D42\u4E86\u65E5", key: "endDate", width: 14 },
    { header: "\u5099\u8003", key: "note", width: 26 }
  ];
  ws.getRow(1).font = { bold: true };
  const d = (plus) => {
    const x = /* @__PURE__ */ new Date();
    x.setDate(x.getDate() + plus);
    return x.toISOString().slice(0, 10);
  };
  ws.addRow({
    productName: "\u3046\u306A\u304E",
    normalPrice: 1148,
    salePrice: 858,
    uriba: "\u9BAE\u9B5A",
    startDate: d(0),
    endDate: d(7),
    note: "\u571F\u7528\u306E\u4E11\u306E\u65E5"
  });
  ws.addRow({
    productName: "\u725B\u4E73",
    normalPrice: 328,
    salePrice: 298,
    uriba: "\u65E5\u914D",
    startDate: d(0),
    endDate: d(3),
    note: ""
  });
  const help = wb.addWorksheet("\u58F2\u5834\u4E00\u89A7");
  help.columns = [
    { header: "\u58F2\u5834\u540D\uFF08\u3053\u306E\u540D\u524D\u3092\u5165\u529B\uFF09", key: "label", width: 26 },
    { header: "\u53D6\u6271\u5185\u5BB9", key: "desc", width: 30 }
  ];
  help.getRow(1).font = { bold: true };
  for (const u of URIBA) help.addRow({ label: u.label, desc: u.desc });
  const buf = await wb.xlsx.writeBuffer();
  setHeader(event, "content-type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  setHeader(event, "content-disposition", 'attachment; filename="tokubai-template.xlsx"');
  return Buffer.from(buf);
});

export { template_get as default };
//# sourceMappingURL=template.get.mjs.map
