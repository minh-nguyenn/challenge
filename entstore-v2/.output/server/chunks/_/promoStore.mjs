import { r as resolveDataFile } from './store.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { U as URIBA_BY_KEY, a as URIBA } from './uriba.mjs';

const FILE = "demo-promos.json";
function promoFilePath() {
  const found = resolveDataFile(FILE);
  if (found) return found;
  return path.resolve(process.cwd(), "data", FILE);
}
function readPromoFile() {
  const p = promoFilePath();
  if (!fs.existsSync(p)) return { generatedAt: (/* @__PURE__ */ new Date()).toISOString(), data: [] };
  const raw = JSON.parse(fs.readFileSync(p, "utf8"));
  return { generatedAt: raw.generatedAt || (/* @__PURE__ */ new Date()).toISOString(), data: raw.data || [] };
}
function writePromoFile(doc) {
  const p = promoFilePath();
  fs.mkdirSync(path.dirname(p), { recursive: true });
  const tmp = p + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(doc, null, 2) + "\n", "utf8");
  fs.renameSync(tmp, p);
}
function toUribaKey(input) {
  const s = String(input != null ? input : "").trim();
  if (!s) return null;
  if (URIBA_BY_KEY[s]) return s;
  const found = URIBA.find((u) => u.label === s || u.desc === s);
  return found ? found.key : null;
}
function parseDate(input) {
  if (input == null || input === "") return null;
  if (input instanceof Date && !isNaN(input.getTime())) return input;
  if (typeof input === "number" && input > 0 && input < 1e5) {
    const d2 = new Date(Date.UTC(1899, 11, 30) + input * 864e5);
    return isNaN(d2.getTime()) ? null : d2;
  }
  const s = String(input).trim().replace(/[年月]/g, "-").replace(/日/g, "");
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}
function normalizePromo(input) {
  var _a, _b, _c;
  const productName = String((_a = input.productName) != null ? _a : "").trim();
  if (!productName) return { ok: false, error: "\u5546\u54C1\u540D\u304C\u3042\u308A\u307E\u305B\u3093" };
  const normalPrice = Math.round(Number(input.normalPrice));
  const salePrice = Math.round(Number(input.salePrice));
  if (!Number.isFinite(normalPrice) || normalPrice <= 0) {
    return { ok: false, error: "\u901A\u5E38\u4FA1\u683C\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093" };
  }
  if (!Number.isFinite(salePrice) || salePrice <= 0) {
    return { ok: false, error: "\u7279\u58F2\u4FA1\u683C\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093" };
  }
  if (salePrice >= normalPrice) {
    return { ok: false, error: "\u7279\u58F2\u4FA1\u683C\u306F\u901A\u5E38\u4FA1\u683C\u3088\u308A\u5B89\u304F\u3057\u3066\u304F\u3060\u3055\u3044" };
  }
  const end = parseDate(input.endDate);
  if (!end) return { ok: false, error: "\u7D42\u4E86\u65E5\u304C\u3042\u308A\u307E\u305B\u3093\uFF08\u671F\u9650\u5207\u308C\u81EA\u52D5\u9664\u5916\u306B\u5FC5\u8981\uFF09" };
  end.setHours(23, 59, 59, 0);
  const start = parseDate(input.startDate) || /* @__PURE__ */ new Date();
  if (start.getTime() > end.getTime()) {
    return { ok: false, error: "\u958B\u59CB\u65E5\u304C\u7D42\u4E86\u65E5\u3088\u308A\u5F8C\u306B\u306A\u3063\u3066\u3044\u307E\u3059" };
  }
  const uriba = toUribaKey(input.uriba) || "grocery";
  return {
    ok: true,
    promo: {
      id: "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      productName,
      uriba,
      uribaLabel: ((_b = URIBA_BY_KEY[uriba]) == null ? void 0 : _b.label) || uriba,
      normalPrice,
      salePrice,
      discountPercent: Math.round((1 - salePrice / normalPrice) * 100),
      startDate: start.toISOString(),
      endDate: end.toISOString(),
      note: String((_c = input.note) != null ? _c : "").trim(),
      demo: true,
      // Ngay that do nguoi dung nhap -> KHONG dich theo generatedAt
      fixedDate: true
    }
  };
}
function addPromos(inputs) {
  const doc = readPromoFile();
  const added = [];
  const errors = [];
  inputs.forEach((input, i) => {
    var _a, _b;
    const r = normalizePromo(input);
    if (!r.ok) {
      errors.push({ row: (_a = input.__row) != null ? _a : i + 1, name: (_b = input.productName) != null ? _b : "", error: r.error });
      return;
    }
    const key = (p) => `${p.productName}@${String(p.endDate).slice(0, 10)}`;
    const at = doc.data.findIndex((p) => key(p) === key(r.promo));
    if (at >= 0) {
      r.promo.id = doc.data[at].id;
      doc.data[at] = r.promo;
    } else {
      doc.data.push(r.promo);
    }
    added.push(r.promo);
  });
  if (added.length) writePromoFile(doc);
  return { added, errors, total: doc.data.length };
}
function deletePromo(id) {
  const doc = readPromoFile();
  const before = doc.data.length;
  doc.data = doc.data.filter((p) => p.id !== id);
  if (doc.data.length === before) return false;
  writePromoFile(doc);
  return true;
}

export { addPromos as a, deletePromo as d };
//# sourceMappingURL=promoStore.mjs.map
