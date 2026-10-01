import { c as defineEventHandler, f as readMultipartFormData, e as createError } from '../../../_/nitro.mjs';
import { a as addPromos } from '../../../_/promoStore.mjs';
import ExcelJS from 'exceljs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../../../_/store.mjs';
import '../../../_/uriba.mjs';

const COLUMN_MAP = {
  \u5546\u54C1\u540D: "productName",
  \u54C1\u540D: "productName",
  productname: "productName",
  name: "productName",
  product: "productName",
  \u901A\u5E38\u4FA1\u683C: "normalPrice",
  \u5B9A\u4FA1: "normalPrice",
  normalprice: "normalPrice",
  price: "normalPrice",
  \u7279\u58F2\u4FA1\u683C: "salePrice",
  \u58F2\u4FA1: "salePrice",
  saleprice: "salePrice",
  sale: "salePrice",
  \u58F2\u5834: "uriba",
  uriba: "uriba",
  category: "uriba",
  \u958B\u59CB\u65E5: "startDate",
  startdate: "startDate",
  start: "startDate",
  \u7D42\u4E86\u65E5: "endDate",
  enddate: "endDate",
  end: "endDate",
  \u5099\u8003: "note",
  note: "note",
  memo: "note"
};
const normHeader = (s) => String(s != null ? s : "").trim().toLowerCase().replace(/[\s_－ー-]/g, "");
function cellValue(cell) {
  const v = cell == null ? void 0 : cell.value;
  if (v == null) return "";
  if (v instanceof Date) return v;
  if (typeof v === "object") {
    if ("result" in v) return v.result;
    if ("text" in v) return v.text;
    if ("richText" in v) return v.richText.map((t) => t.text).join("");
    return "";
  }
  return v;
}
function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          cur += '"';
          i++;
        } else quoted = false;
      } else cur += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(cur);
      cur = "";
    } else if (c === "\n") {
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
    } else if (c !== "\r") cur += c;
  }
  if (cur !== "" || row.length) {
    row.push(cur);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => String(c).trim() !== ""));
}
const import_post = defineEventHandler(async (event) => {
  const parts = await readMultipartFormData(event);
  const file = parts == null ? void 0 : parts.find((p) => p.name === "file" && p.filename);
  if (!file) {
    throw createError({ statusCode: 400, statusMessage: "\u30D5\u30A1\u30A4\u30EB\u304C\u6DFB\u4ED8\u3055\u308C\u3066\u3044\u307E\u305B\u3093" });
  }
  if (file.data.length > 5 * 1024 * 1024) {
    throw createError({ statusCode: 400, statusMessage: "\u30D5\u30A1\u30A4\u30EB\u304C\u5927\u304D\u3059\u304E\u307E\u3059\uFF085MB\u307E\u3067\uFF09" });
  }
  const name = String(file.filename || "").toLowerCase();
  const isCsv = name.endsWith(".csv") || name.endsWith(".txt");
  const isXlsx = name.endsWith(".xlsx") || name.endsWith(".xlsm");
  if (!isCsv && !isXlsx) {
    throw createError({
      statusCode: 400,
      statusMessage: ".xlsx \u307E\u305F\u306F .csv \u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\uFF08.xls \u5F62\u5F0F\u306F\u672A\u5BFE\u5FDC\u3067\u3059\uFF09"
    });
  }
  let table = [];
  if (isCsv) {
    table = parseCsv(file.data.toString("utf8").replace(/^﻿/, ""));
  } else {
    const wb = new ExcelJS.Workbook();
    try {
      await wb.xlsx.load(file.data);
    } catch {
      throw createError({ statusCode: 400, statusMessage: "Excel\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u53D6\u308C\u307E\u305B\u3093\u3067\u3057\u305F" });
    }
    const ws = wb.worksheets[0];
    if (!ws) throw createError({ statusCode: 400, statusMessage: "\u30B7\u30FC\u30C8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093" });
    ws.eachRow({ includeEmpty: false }, (row) => {
      const cells = [];
      row.eachCell({ includeEmpty: true }, (cell, col) => {
        cells[col - 1] = cellValue(cell);
      });
      table.push(cells);
    });
  }
  if (table.length < 2) {
    throw createError({
      statusCode: 400,
      statusMessage: "\u898B\u51FA\u3057\u884C\u3068\u30C7\u30FC\u30BF\u884C\u304C\u5FC5\u8981\u3067\u3059\uFF082\u884C\u4EE5\u4E0A\uFF09"
    });
  }
  const header = table[0].map(normHeader);
  const fieldAt = {};
  header.forEach((h, i) => {
    const f = COLUMN_MAP[h];
    if (f) fieldAt[i] = f;
  });
  const mapped = Object.values(fieldAt);
  const missing = ["productName", "normalPrice", "salePrice", "endDate"].filter(
    (f) => !mapped.includes(f)
  );
  if (missing.length) {
    const label = {
      productName: "\u5546\u54C1\u540D",
      normalPrice: "\u901A\u5E38\u4FA1\u683C",
      salePrice: "\u7279\u58F2\u4FA1\u683C",
      endDate: "\u7D42\u4E86\u65E5"
    };
    throw createError({
      statusCode: 400,
      statusMessage: `\u898B\u51FA\u3057\u306B ${missing.map((m) => label[m]).join("\u30FB")} \u304C\u3042\u308A\u307E\u305B\u3093`
    });
  }
  const inputs = [];
  for (let r = 1; r < table.length; r++) {
    const row = table[r];
    if (!row || row.every((c) => String(c != null ? c : "").trim() === "")) continue;
    const rec = { __row: r + 1 };
    for (const [i, field] of Object.entries(fieldAt)) {
      rec[field] = row[Number(i)];
    }
    inputs.push(rec);
  }
  if (!inputs.length) {
    throw createError({ statusCode: 400, statusMessage: "\u30C7\u30FC\u30BF\u884C\u304C\u3042\u308A\u307E\u305B\u3093" });
  }
  if (inputs.length > 500) {
    throw createError({ statusCode: 400, statusMessage: "\u4E00\u5EA6\u306B\u53D6\u308A\u8FBC\u3081\u308B\u306E\u306F500\u4EF6\u307E\u3067\u3067\u3059" });
  }
  const { added, errors, total } = addPromos(inputs);
  return {
    demo: true,
    fileName: file.filename,
    rowCount: inputs.length,
    addedCount: added.length,
    errorCount: errors.length,
    total,
    added,
    errors
  };
});

export { import_post as default };
//# sourceMappingURL=import.post.mjs.map
