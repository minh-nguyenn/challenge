import { g as getStore, s as shopsSelling, a as activePromos, d as detectBudget, b as stripBudget } from '../../_/store.mjs';
import { c as defineEventHandler, r as readBody, e as createError, u as useRuntimeConfig } from '../../_/nitro.mjs';
import { n as normalizeJa } from '../../_/jp-text.mjs';
import { l as looksLikeKeyword, e as extractKeywords, s as search, a as searchQuestion, g as groupOf } from '../../_/search-engine.mjs';
import { d as detectLang, s as smallTalkKind, S as SUGGESTIONS, a as SMALLTALK, t, N as NOT_FOUND_HINT, b as toJapaneseKeywords, n as needsStoreContact, c as stripLatinMarks } from '../../_/chat-lang.mjs';
import { d as detectIntent$1 } from '../../_/search-intent.mjs';
import 'node:fs';
import 'node:path';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:crypto';
import 'node:url';

const INTENTS = [
  {
    // "Mua ở đâu / cửa hàng nào còn hàng" — phải xét TRƯỚC 'shop' và 'product',
    // vì câu 「浜松市で牛乳を買える店は？」 vừa có tên khu vực vừa có tên hàng,
    // trước đây rơi vào "không rõ ý định" rồi trả về mấy bài viết sự kiện.
    key: "stock",
    want: ["shop"],
    patterns: [
      /買える|買えます|売っている|売ってる|扱って|取り扱|在庫|どこで買|販売して/,
      /where can i buy|which store|in stock|sell|carry/i,
      /mua ở đâu|bán ở đâu|cửa hàng nào|siêu thị nào|còn hàng|có bán/i,
      /哪里买|哪家店|有货|有卖/,
      /어디서 사|어느 매장|재고/,
      /ซื้อได้ที่ไหน|ร้านไหน/
    ]
  },
  {
    key: "recipe",
    // Xin công thức / món ăn
    want: ["recipe"],
    patterns: [
      /レシピ|作り方|料理|献立|メニュー|作れる|作りたい|調理/,
      /recipe|dish|cook|how to make/i,
      // 「món nào」「món gì」「nấu gì」 cũng là hỏi công thức — thiếu mấy cụm này
      // nên 「cà ri có món nào không?」 từng rơi vào "không rõ ý định".
      /công thức|món ăn|món nào|món gì|nấu gì|ăn gì|nấu|chế biến/i,
      /食谱|菜谱|怎么做/,
      /레시피|요리/,
      /สูตร|ทำอาหาร/
    ]
  },
  {
    key: "promo",
    // Hỏi khuyến mãi / giá rẻ
    want: ["promo"],
    patterns: [
      /特売|セール|割引|お買い得|安い|値引き|オフ|OFF/i,
      /sale|discount|deal|cheap|bargain/i,
      /khuyến mãi|giảm giá|rẻ|ưu đãi/i,
      /特卖|打折|优惠|便宜/,
      /할인|세일|저렴/,
      /ลดราคา|โปรโมชัน/
    ]
  },
  {
    key: "shop",
    // Hỏi cửa hàng: địa chỉ, giờ mở, điện thoại, đỗ xe
    want: ["shop"],
    patterns: [
      /店舗|お店|支店|営業時間|何時|住所|場所|どこ|アクセス|駐車場|電話/,
      // \b...\b để 'shop' không nuốt 'online shopping' (đó là dịch vụ, không phải cửa hàng)
      /\b(store|shop|branch|address|location|opening hours|parking|phone|where)\b/i,
      /cửa hàng|địa chỉ|giờ mở|ở đâu|đỗ xe|điện thoại|chi nhánh|siêu thị ở/i,
      /门店|地址|营业时间|停车|电话|在哪/,
      /매장|주소|영업시간|주차|전화|어디/,
      /ร้าน|ที่อยู่|เวลาเปิด|จอดรถ/
    ]
  },
  {
    key: "nutrition",
    // Hỏi dinh dưỡng / calo
    want: ["recipe"],
    patterns: [
      /カロリー|kcal|栄養|塩分|たんぱく質|脂質|糖質|ヘルシー|低カロリー/i,
      /calorie|nutrition|protein|healthy|low.fat|salt/i,
      /calo|dinh dưỡng|đạm|béo|lành mạnh|ít calo/i,
      /卡路里|营养|蛋白质|健康/,
      /칼로리|영양|단백질/,
      /แคลอรี|โภชนาการ/
    ]
  },
  {
    key: "service",
    // Hỏi dịch vụ của siêu thị
    want: ["page", "feature"],
    patterns: [
      /サービス|ネット通販|宅配|移動スーパー|ポイント|カード|レシート|LINE|配達/,
      /\b(service|delivery|online shopping|online shop|e-?commerce|point card|receipt)\b/i,
      /dịch vụ|giao hàng|mua online|bán online|thẻ điểm|tích điểm|dich vu|ban online/i,
      /服务|配送|网购|积分/,
      /서비스|배달|포인트/,
      /บริการ|จัดส่ง/
    ]
  },
  {
    key: "recruit",
    want: ["page"],
    patterns: [
      /採用|求人|アルバイト|パート|正社員|募集|働/,
      /recruit|job|hiring|career|work/i,
      /tuyển|việc làm|ứng tuyển|nhân viên|tuyen dung|viec lam/i,
      /招聘|求职|工作/,
      /채용|구인|일자리/,
      /สมัครงาน|รับสมัคร/
    ]
  },
  {
    key: "chirashi",
    want: ["article", "page"],
    patterns: [
      /チラシ|広告|折り込み/,
      /flyer|leaflet|circular/i,
      /tờ rơi|quảng cáo/i,
      /传单|广告/,
      /전단|광고/,
      /ใบปลิว/
    ]
  },
  {
    key: "company",
    want: ["page"],
    patterns: [
      /会社|企業|沿革|理念|environment|環境|社会活動|個人情報|プライバシー/,
      /company|corporate|privacy|environment/i,
      /công ty|doanh nghiệp|bảo mật|môi trường/i,
      /公司|企业|隐私|环保/,
      /회사|기업|개인정보/,
      /บริษัท|ความเป็นส่วนตัว/
    ]
  },
  {
    key: "feature",
    // Hỏi về chính website
    want: ["feature"],
    patterns: [
      /このサイト|使い方|何ができ|なにができ|どんなことができ|機能/,
      /this (web)?site|what can|features|how (do i )?use/i,
      /trang này|website này|tính năng|dùng thế nào|làm được gì/i,
      /这个网站|能做什么|功能|怎么用/,
      /이 사이트|무엇을 할 수|기능/,
      /เว็บไซต์นี้|ทำอะไรได้/
    ]
  }
];
const looseText = (s) => stripLatinMarks(String(s || ""));
const looseCache = /* @__PURE__ */ new WeakMap();
function looseRe(re) {
  let out = looseCache.get(re);
  if (!out) {
    out = new RegExp(stripLatinMarks(re.source), re.flags);
    looseCache.set(re, out);
  }
  return out;
}
function detectIntent(text) {
  const s = looseText(text);
  if (!s.trim()) return null;
  let best = null;
  let bestScore = 0;
  for (const it of INTENTS) {
    let score = 0;
    for (const re of it.patterns) {
      const m = s.match(looseRe(re));
      if (!m) continue;
      score += 1 + Math.min(m[0].length, 20) / 20;
    }
    if (score > bestScore) {
      bestScore = score;
      best = it;
    }
  }
  return best;
}
function detectFilters(text) {
  const s = looseText(text);
  const out = {};
  const min = s.match(/(\d{1,3})\s*分(以内|以下)?/);
  if (min) out.maxMinutes = Number(min[1]);
  if (/時短|早く|すぐ|簡単|かんたん|quick|fast|nhanh|快手|빨리/i.test(s) && !out.maxMinutes) {
    out.maxMinutes = 15;
  }
  const kc = s.match(/(\d{2,4})\s*(kcal|キロカロリー)/i);
  if (kc) out.maxKcal = Number(kc[1]);
  if (looseRe(/低カロリー|カロリーが?低|ヘルシー|low.?cal|ít calo|低卡|저칼로리/i).test(s) && !out.maxKcal) {
    out.maxKcal = 400;
  }
  const budget = detectBudget(s);
  if (budget) {
    out.budget = budget;
    const strip = stripBudget(s, budget);
    out.budgetOnly = strip.generic;
    out.budgetRest = strip.rest;
  }
  let residual = s;
  for (const m of [budget == null ? void 0 : budget.match, min == null ? void 0 : min[0], kc == null ? void 0 : kc[0]]) {
    if (m) residual = residual.replace(m, " ");
  }
  const left = stripBudget(residual, null);
  out.genericOnly = left.generic;
  out.residual = left.rest;
  const areaMap = {
    \u6D5C\u677E: "hamamatsu",
    \u78D0\u7530: "iwata",
    \u888B\u4E95: "hukuroi",
    \u639B\u5DDD: "kakegawa",
    \u6E56\u897F: "kosai",
    \u83CA\u5DDD: "kikugawa",
    \u8C4A\u5DDD: "toyokawa",
    \u8C4A\u6A4B: "toyohashi",
    \u5468\u667A: "shuchi",
    \u5929\u7ADC: "tenryu",
    \u6D5C\u540D: "hamana"
  };
  for (const [jp, key] of Object.entries(areaMap)) {
    if (s.includes(jp)) {
      out.areaWord = jp;
      out.areaKey = key;
      break;
    }
  }
  return out;
}
const pick = (obj, lang) => obj[lang] || obj.ja;
function countPhrase(n, lang, what) {
  const W = {
    recipe: { ja: "\u4EF6\u306E\u30EC\u30B7\u30D4", vi: " c\xF4ng th\u1EE9c", en: " recipes", zh: " \u4E2A\u98DF\u8C31", ko: "\uAC1C \uB808\uC2DC\uD53C", th: " \u0E2A\u0E39\u0E15\u0E23" },
    shop: { ja: "\u4EF6\u306E\u5E97\u8217", vi: " c\u1EEDa h\xE0ng", en: " stores", zh: " \u5BB6\u95E8\u5E97", ko: "\uAC1C \uB9E4\uC7A5", th: " \u0E23\u0E49\u0E32\u0E19" },
    promo: { ja: "\u4EF6\u306E\u7279\u58F2", vi: " khuy\u1EBFn m\xE3i", en: " sale items", zh: " \u4E2A\u7279\u5356", ko: "\uAC1C \uD2B9\uAC00", th: " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E25\u0E14\u0E23\u0E32\u0E04\u0E32" },
    page: { ja: "\u4EF6\u306E\u30DA\u30FC\u30B8", vi: " trang", en: " pages", zh: " \u4E2A\u9875\u9762", ko: "\uAC1C \uD398\uC774\uC9C0", th: " \u0E2B\u0E19\u0E49\u0E32" },
    item: { ja: "\u4EF6", vi: " m\u1EE5c", en: " items", zh: " \u9879", ko: "\uAC74", th: " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23" }
  };
  return n + pick(W[what] || W.item, lang);
}
const LEAD = {
  recipe: {
    ja: (n) => `${n}\u898B\u3064\u304B\u308A\u307E\u3057\u305F\u3002\u304A\u3059\u3059\u3081\u306F\u3053\u3061\u3089\u3067\u3059\uFF1A`,
    vi: (n) => `T\xF4i t\xECm \u0111\u01B0\u1EE3c ${n}. G\u1EE3i \xFD cho b\u1EA1n:`,
    en: (n) => `I found ${n}. Here are some suggestions:`,
    zh: (n) => `\u627E\u5230${n}\uFF0C\u63A8\u8350\u5982\u4E0B\uFF1A`,
    ko: (n) => `${n}\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4. \uCD94\uCC9C\uB4DC\uB9BD\uB2C8\uB2E4:`,
    th: (n) => `\u0E1E\u0E1A ${n} \u0E41\u0E19\u0E30\u0E19\u0E33\u0E14\u0E31\u0E07\u0E19\u0E35\u0E49:`
  },
  shop: {
    ja: (n) => `${n}\u304C\u8A72\u5F53\u3057\u307E\u3059\uFF1A`,
    vi: (n) => `C\xF3 ${n} ph\xF9 h\u1EE3p:`,
    en: (n) => `${n} match your question:`,
    zh: (n) => `\u5171\u6709${n}\u7B26\u5408\uFF1A`,
    ko: (n) => `${n}\uAC00 \uD574\uB2F9\uB429\uB2C8\uB2E4:`,
    th: (n) => `\u0E21\u0E35 ${n} \u0E17\u0E35\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E04\u0E33\u0E16\u0E32\u0E21:`
  },
  promo: {
    ja: (n) => `\u73FE\u5728 ${n} \u3092\u5B9F\u65BD\u4E2D\u3067\u3059\uFF1A`,
    vi: (n) => `Hi\u1EC7n \u0111ang c\xF3 ${n}:`,
    en: (n) => `There ${n === "1 sale items" ? "is" : "are"} currently ${n}:`,
    zh: (n) => `\u76EE\u524D\u6709${n}\uFF1A`,
    ko: (n) => `\uD604\uC7AC ${n}\uB97C \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4:`,
    th: (n) => `\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49\u0E21\u0E35 ${n}:`
  },
  page: {
    ja: () => "\u95A2\u9023\u3059\u308B\u30DA\u30FC\u30B8\u306F\u3053\u3061\u3089\u3067\u3059\uFF1A",
    vi: () => "C\xE1c trang li\xEAn quan:",
    en: () => "Here are the related pages:",
    zh: () => "\u76F8\u5173\u9875\u9762\u5982\u4E0B\uFF1A",
    ko: () => "\uAD00\uB828 \uD398\uC774\uC9C0\uC785\uB2C8\uB2E4:",
    th: () => "\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07:"
  }
};
const LBL = {
  min: { ja: "\u5206", vi: " ph\xFAt", en: " min", zh: " \u5206\u949F", ko: "\uBD84", th: " \u0E19\u0E32\u0E17\u0E35" },
  kcal: { ja: "kcal", vi: " kcal", en: " kcal", zh: " \u5343\u5361", ko: "kcal", th: " kcal" },
  salt: { ja: "\u5869\u5206", vi: "mu\u1ED1i", en: "salt", zh: "\u76D0\u5206", ko: "\uC5FC\uBD84", th: "\u0E40\u0E01\u0E25\u0E37\u0E2D" },
  ing: { ja: "\u6750\u6599", vi: "nguy\xEAn li\u1EC7u", en: "ingredients", zh: "\u98DF\u6750", ko: "\uC7AC\uB8CC", th: "\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A" },
  open: { ja: "\u55B6\u696D", vi: "M\u1EDF c\u1EEDa", en: "Open", zh: "\u8425\u4E1A", ko: "\uC601\uC5C5", th: "\u0E40\u0E1B\u0E34\u0E14" },
  until: { ja: "\u307E\u3067", vi: "\u0111\u1EBFn", en: "until", zh: "\u622A\u6B62", ko: "\uAE4C\uC9C0", th: "\u0E16\u0E36\u0E07" },
  // Không được trùng nhãn với LBL.ing, nếu không dòng kết quả đọc ra thành
  // 「nguyên liệu 7・nguyên liệu 1.989 yên」 — không ai hiểu số nào là số nào.
  cost: { ja: "\u6750\u6599\u8CBB", vi: "ti\u1EC1n NL", en: "cost", zh: "\u98DF\u6750\u8D39", ko: "\uC7AC\uB8CC\uBE44", th: "\u0E04\u0E48\u0E32\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A" },
  yen: { ja: "\u5186", vi: " y\xEAn", en: " yen", zh: " \u65E5\u5143", ko: "\uC5D4", th: " \u0E40\u0E22\u0E19" }
};
const COST_NOTE = {
  ja: "\u203B \u6750\u6599\u8CBB\u306F1\u30D1\u30C3\u30AF\u5358\u4F4D\u3067\u8A08\u7B97\u3057\u305F\u30C7\u30E2\u4FA1\u683C\u306E\u6982\u7B97\u3067\u3059\u3002",
  vi: "\u203B Ti\u1EC1n nguy\xEAn li\u1EC7u l\xE0 \u01B0\u1EDBc t\xEDnh tr\xEAn gi\xE1 DEMO, t\xEDnh theo nguy\xEAn g\xF3i.",
  en: "* Ingredient cost is a rough estimate on DEMO prices, counted per whole pack.",
  zh: "\u203B \u98DF\u6750\u8D39\u4E3A\u6309\u6574\u5305\u8BA1\u7B97\u7684 DEMO \u4EF7\u683C\u6982\u7B97\u3002",
  ko: "\u203B \uC7AC\uB8CC\uBE44\uB294 \uD55C \uD329 \uB2E8\uC704\uB85C \uACC4\uC0B0\uD55C DEMO \uAC00\uACA9\uC758 \uAC1C\uC0B0\uC785\uB2C8\uB2E4.",
  th: "\u203B \u0E04\u0E48\u0E32\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13\u0E08\u0E32\u0E01\u0E23\u0E32\u0E04\u0E32 DEMO \u0E42\u0E14\u0E22\u0E04\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1E\u0E47\u0E01"
};
const DEMO_NOTE = {
  ja: "\u203B \u4FA1\u683C\u306F\u30C7\u30E2\u7528\u306E\u4EEE\u30C7\u30FC\u30BF\u3067\u3059\u3002",
  vi: "\u203B Gi\xE1 l\xE0 d\u1EEF li\u1EC7u demo, kh\xF4ng ph\u1EA3i gi\xE1 th\u1EADt.",
  en: "* Prices are demo data, not real values.",
  zh: "\u203B \u4EF7\u683C\u4E3A\u6F14\u793A\u6570\u636E\uFF0C\u5E76\u975E\u771F\u5B9E\u4EF7\u683C\u3002",
  ko: "\u203B \uAC00\uACA9\uC740 \uB370\uBAA8\uC6A9 \uC784\uC2DC \uB370\uC774\uD130\uC785\uB2C8\uB2E4.",
  th: "\u203B \u0E23\u0E32\u0E04\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07"
};
const REAL_NOTE = {
  ja: "\u203B \u6804\u990A\u6210\u5206\u306F Kitchen365 \u306E\u5B9F\u30C7\u30FC\u30BF\u3067\u3059\u3002",
  vi: "\u203B Dinh d\u01B0\u1EE1ng l\xE0 s\u1ED1 TH\u1EACT l\u1EA5y t\u1EEB Kitchen365.",
  en: "* Nutrition figures are real data from Kitchen365.",
  zh: "\u203B \u8425\u517B\u6210\u5206\u4E3A Kitchen365 \u7684\u771F\u5B9E\u6570\u636E\u3002",
  ko: "\u203B \uC601\uC591 \uC131\uBD84\uC740 Kitchen365\uC758 \uC2E4\uC81C \uB370\uC774\uD130\uC785\uB2C8\uB2E4.",
  th: "\u203B \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E42\u0E20\u0E0A\u0E19\u0E32\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E23\u0E34\u0E07\u0E08\u0E32\u0E01 Kitchen365"
};
const MORE = {
  ja: (n) => `\u307B\u304B ${n} \u4EF6\u3042\u308A\u307E\u3059\u3002`,
  vi: (n) => `C\xF2n ${n} k\u1EBFt qu\u1EA3 kh\xE1c.`,
  en: (n) => `${n} more results available.`,
  zh: (n) => `\u8FD8\u6709 ${n} \u6761\u7ED3\u679C\u3002`,
  ko: (n) => `${n}\uAC74 \uB354 \uC788\uC2B5\uB2C8\uB2E4.`,
  th: (n) => `\u0E21\u0E35\u0E2D\u0E35\u0E01 ${n} \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23`
};
const fmtDate = (iso) => {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()}`;
};
const TOPIC_ANSWER = {
  feature: {
    ja: "\u3053\u306E\u30B5\u30A4\u30C8\u3067\u306F\u3001\u4E00\u3064\u306E\u691C\u7D22\u30DC\u30C3\u30AF\u30B9\u3067\u300C\u30EC\u30B7\u30D4\u30FB\u7279\u58F2\u30FB\u5546\u54C1\u30FB\u8A18\u4E8B\u30FB\u5E97\u8217\u300D\u3092\u307E\u3068\u3081\u3066\u63A2\u305B\u307E\u3059\u3002\u30EC\u30B7\u30D4\u306FAI\u304C\u97F3\u58F0\u3067\u8AAD\u307F\u4E0A\u3052\u3001\u6750\u6599\u304B\u3089\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u3068\u58F2\u5834\u30DE\u30C3\u30D7\u3092\u81EA\u52D5\u4F5C\u6210\u3057\u307E\u3059\u3002\u3046\u306A\u304E\u30FB\u30A6\u30CA\u30AE\u30FB\u9C3B\u306E\u3088\u3046\u306A\u8868\u8A18\u3086\u308C\u3082\u540C\u3058\u7D50\u679C\u306B\u306A\u308A\u307E\u3059\u3002",
    vi: 'Trang n\xE0y cho ph\xE9p t\xECm "khuy\u1EBFn m\xE3i \xB7 c\xF4ng th\u1EE9c \xB7 s\u1EA3n ph\u1EA9m \xB7 b\xE0i vi\u1EBFt \xB7 c\u1EEDa h\xE0ng" ch\u1EC9 v\u1EDBi m\u1ED9t \xF4 t\xECm ki\u1EBFm. C\xF4ng th\u1EE9c c\xF3 AI \u0111\u1ECDc b\u1EB1ng gi\u1ECDng n\xF3i, t\u1EF1 t\u1EA1o danh s\xE1ch \u0111i ch\u1EE3 v\xE0 s\u01A1 \u0111\u1ED3 qu\u1EA7y h\xE0ng. G\xF5 \u3046\u306A\u304E/\u30A6\u30CA\u30AE/\u9C3B \u0111\u1EC1u ra c\xF9ng k\u1EBFt qu\u1EA3.',
    en: "This site lets you search sales, recipes, products, articles and stores from a single box. Recipes can be read aloud by AI, and it builds a shopping list and store map automatically. Japanese spelling variants all return the same results.",
    zh: "\u672C\u7F51\u7AD9\u53EF\u901A\u8FC7\u4E00\u4E2A\u641C\u7D22\u6846\u540C\u65F6\u67E5\u627E\u7279\u5356\u3001\u98DF\u8C31\u3001\u5546\u54C1\u3001\u6587\u7AE0\u548C\u95E8\u5E97\u3002\u98DF\u8C31\u652F\u6301AI\u8BED\u97F3\u6717\u8BFB\uFF0C\u5E76\u81EA\u52A8\u751F\u6210\u8D2D\u7269\u6E05\u5355\u548C\u5356\u573A\u5730\u56FE\u3002",
    ko: "\uC774 \uC0AC\uC774\uD2B8\uC5D0\uC11C\uB294 \uAC80\uC0C9\uCC3D \uD558\uB098\uB85C \uD2B9\uB9E4\xB7\uB808\uC2DC\uD53C\xB7\uC0C1\uD488\xB7\uAE30\uC0AC\xB7\uB9E4\uC7A5\uC744 \uD568\uAED8 \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB808\uC2DC\uD53C\uB294 AI\uAC00 \uC74C\uC131\uC73C\uB85C \uC77D\uC5B4\uC8FC\uACE0, \uC1FC\uD551 \uBAA9\uB85D\uACFC \uB9E4\uC7A5 \uC9C0\uB3C4\uB97C \uC790\uB3D9\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
    th: "\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E19\u0E35\u0E49\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E19 \u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23 \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 \u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32\u0E44\u0E14\u0E49\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27 \u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E21\u0E35 AI \u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E2D\u0E01\u0E40\u0E2A\u0E35\u0E22\u0E07 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E41\u0E1C\u0E19\u0E1C\u0E31\u0E07\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34"
  },
  service: {
    ja: "\u9060\u9244\u30B9\u30C8\u30A2\u3067\u306F\u3001\u30CD\u30C3\u30C8\u901A\u8CA9\uFF08shop.entstore.co.jp\uFF09\u3001\u79FB\u52D5\u30B9\u30FC\u30D1\u30FC\u3001\u8ABF\u7406\u30B5\u30FC\u30D3\u30B9\uFF08\u9BAE\u9B5A\u8ABF\u7406\u30FB\u7CBE\u8089\u30AA\u30FC\u30C0\u30FC\u30AB\u30C3\u30C8\u30FB\u5C0F\u5206\u3051\uFF09\u3001\u30B5\u30FC\u30D3\u30B9\u30AB\u30A6\u30F3\u30BF\u30FC\u5404\u7A2E\u53D6\u308A\u6271\u3044\u3001\u30B9\u30DE\u30FC\u30C8\u30EC\u30B7\u30FC\u30C8\u3001LINE\u516C\u5F0F\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u3054\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002",
    vi: "Entetsu Store c\xF3: b\xE1n h\xE0ng online (shop.entstore.co.jp), si\xEAu th\u1ECB l\u01B0u \u0111\u1ED9ng, d\u1ECBch v\u1EE5 ch\u1EBF bi\u1EBFn (l\xE0m c\xE1, c\u1EAFt th\u1ECBt theo y\xEAu c\u1EA7u, chia nh\u1ECF), qu\u1EA7y d\u1ECBch v\u1EE5, ho\xE1 \u0111\u01A1n \u0111i\u1EC7n t\u1EED Smart Receipt v\xE0 t\xE0i kho\u1EA3n LINE ch\xEDnh th\u1EE9c.",
    en: "Entetsu Store offers: online shopping (shop.entstore.co.jp), a mobile supermarket, in-store food prep (fish cleaning, custom meat cutting, repacking), service counter services, Smart Receipt, and an official LINE account.",
    zh: "\u8FDC\u94C1\u8D85\u5E02\u63D0\u4F9B\uFF1A\u7F51\u4E0A\u5546\u57CE\uFF08shop.entstore.co.jp\uFF09\u3001\u79FB\u52A8\u8D85\u5E02\u3001\u52A0\u5DE5\u670D\u52A1\uFF08\u5904\u7406\u9C9C\u9C7C\u3001\u6309\u9700\u5207\u8089\u3001\u5206\u88C5\uFF09\u3001\u670D\u52A1\u67DC\u53F0\u4E1A\u52A1\u3001\u7535\u5B50\u5C0F\u7968\u4EE5\u53CA LINE \u5B98\u65B9\u8D26\u53F7\u3002",
    ko: "\uC5D4\uD14C\uCE20 \uC2A4\uD1A0\uC5B4\uB294 \uC628\uB77C\uC778 \uC1FC\uD551(shop.entstore.co.jp), \uC774\uB3D9 \uC288\uD37C, \uC870\uB9AC \uC11C\uBE44\uC2A4(\uC0DD\uC120 \uC190\uC9C8\xB7\uC815\uC721 \uC8FC\uBB38 \uC808\uB2E8\xB7\uC18C\uBD84), \uC11C\uBE44\uC2A4 \uCE74\uC6B4\uD130, \uC2A4\uB9C8\uD2B8 \uC601\uC218\uC99D, LINE \uACF5\uC2DD \uACC4\uC815\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.",
    th: "Entetsu Store \u0E21\u0E35\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23: \u0E0A\u0E49\u0E2D\u0E1B\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C (shop.entstore.co.jp), \u0E0B\u0E39\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E17\u0E35\u0E48, \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E40\u0E15\u0E23\u0E35\u0E22\u0E21\u0E2D\u0E32\u0E2B\u0E32\u0E23 (\u0E41\u0E25\u0E48\u0E1B\u0E25\u0E32 \u0E15\u0E31\u0E14\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E15\u0E32\u0E21\u0E2A\u0E31\u0E48\u0E07 \u0E41\u0E1A\u0E48\u0E07\u0E1A\u0E23\u0E23\u0E08\u0E38), \u0E40\u0E04\u0E32\u0E19\u0E4C\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23, Smart Receipt \u0E41\u0E25\u0E30\u0E1A\u0E31\u0E0D\u0E0A\u0E35 LINE \u0E17\u0E32\u0E07\u0E01\u0E32\u0E23"
  },
  recruit: {
    ja: "\u9060\u9244\u30B9\u30C8\u30A2\u3067\u306F\u30A2\u30EB\u30D0\u30A4\u30C8\u30FB\u30D1\u30FC\u30C8\u30FB\u6B63\u793E\u54E1\u3092\u7A4D\u6975\u63A1\u7528\u4E2D\u3067\u3059\u3002\u52DF\u96C6\u8077\u7A2E\u3084\u5E97\u8217\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u5FDC\u52DF\u306F\u63A1\u7528\u60C5\u5831\u30DA\u30FC\u30B8\uFF08entstore-recruit.net\uFF09\u304B\u3089\u3054\u78BA\u8A8D\u3044\u305F\u3060\u3051\u307E\u3059\u3002",
    vi: "Entetsu Store \u0111ang tuy\u1EC3n l\xE0m th\xEAm, b\xE1n th\u1EDDi gian v\xE0 nh\xE2n vi\xEAn ch\xEDnh th\u1EE9c. Xem v\u1ECB tr\xED, c\u1EEDa h\xE0ng v\xE0 n\u1ED9p h\u1ED3 s\u01A1 online t\u1EA1i trang tuy\u1EC3n d\u1EE5ng (entstore-recruit.net).",
    en: "Entetsu Store is actively hiring part-time, casual and full-time staff. See open roles, locations and apply online on the recruitment page (entstore-recruit.net).",
    zh: "\u8FDC\u94C1\u8D85\u5E02\u6B63\u5728\u62DB\u8058\u517C\u804C\u3001\u8BA1\u65F6\u5DE5\u548C\u6B63\u5F0F\u5458\u5DE5\u3002\u804C\u4F4D\u3001\u95E8\u5E97\u53CA\u5728\u7EBF\u7533\u8BF7\u8BF7\u89C1\u62DB\u8058\u9875\u9762\uFF08entstore-recruit.net\uFF09\u3002",
    ko: "\uC5D4\uD14C\uCE20 \uC2A4\uD1A0\uC5B4\uB294 \uC544\uB974\uBC14\uC774\uD2B8\xB7\uD30C\uD2B8\uD0C0\uC784\xB7\uC815\uC9C1\uC6D0\uC744 \uBAA8\uC9D1 \uC911\uC785\uB2C8\uB2E4. \uCC44\uC6A9 \uC9C1\uC885\uACFC \uB9E4\uC7A5, \uC628\uB77C\uC778 \uC9C0\uC6D0\uC740 \uCC44\uC6A9 \uD398\uC774\uC9C0(entstore-recruit.net)\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694.",
    th: "Entetsu Store \u0E01\u0E33\u0E25\u0E31\u0E07\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E1E\u0E32\u0E23\u0E4C\u0E17\u0E44\u0E17\u0E21\u0E4C\u0E41\u0E25\u0E30\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E1B\u0E23\u0E30\u0E08\u0E33 \u0E14\u0E39\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E41\u0E25\u0E30\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E31\u0E1A\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E07\u0E32\u0E19 (entstore-recruit.net)"
  },
  chirashi: {
    ja: "\u30C1\u30E9\u30B7\u306F\u6BCE\u9031\u66F4\u65B0\u3055\u308C\u3001\u30C1\u30E9\u30B7\u60C5\u5831\u30DA\u30FC\u30B8\u3067\u3054\u89A7\u3044\u305F\u3060\u3051\u307E\u3059\u3002PDF\u7248\u3082\u3054\u7528\u610F\u3057\u3066\u304A\u308A\u3001\u63B2\u8F09\u671F\u9593\u306F\u5404\u30C1\u30E9\u30B7\u306B\u8A18\u8F09\u3055\u308C\u3066\u3044\u307E\u3059\u3002",
    vi: "T\u1EDD r\u01A1i \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt h\xE0ng tu\u1EA7n, xem t\u1EA1i trang \u30C1\u30E9\u30B7\u60C5\u5831. C\xF3 c\u1EA3 b\u1EA3n PDF, th\u1EDDi gian \xE1p d\u1EE5ng ghi tr\xEAn t\u1EEBng t\u1EDD.",
    en: "Flyers are updated weekly and can be viewed on the flyer page. A PDF version is also available; each flyer shows its valid period.",
    zh: "\u4F20\u5355\u6BCF\u5468\u66F4\u65B0\uFF0C\u53EF\u5728\u4F20\u5355\u9875\u9762\u67E5\u770B\u3002\u4E5F\u63D0\u4F9B PDF \u7248\uFF0C\u5404\u671F\u4F20\u5355\u6807\u6CE8\u6709\u6548\u671F\u3002",
    ko: "\uC804\uB2E8\uC740 \uB9E4\uC8FC \uC5C5\uB370\uC774\uD2B8\uB418\uBA70 \uC804\uB2E8 \uC815\uBCF4 \uD398\uC774\uC9C0\uC5D0\uC11C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. PDF \uBC84\uC804\uB3C4 \uC788\uC73C\uBA70 \uAC8C\uC7AC \uAE30\uAC04\uC774 \uD45C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.",
    th: "\u0E43\u0E1A\u0E1B\u0E25\u0E34\u0E27\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E17\u0E38\u0E01\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C \u0E14\u0E39\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E1A\u0E1B\u0E25\u0E34\u0E27 \u0E21\u0E35\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E0A\u0E31\u0E19 PDF \u0E14\u0E49\u0E27\u0E22 \u0E41\u0E25\u0E30\u0E23\u0E30\u0E1A\u0E38\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49"
  },
  company: {
    ja: "\u9060\u9244\u30B9\u30C8\u30A2\u306F\u9759\u5CA1\u770C\u897F\u90E8\u3092\u4E2D\u5FC3\u306B\u30B9\u30FC\u30D1\u30FC\u30DE\u30FC\u30B1\u30C3\u30C8\u3092\u5C55\u958B\u3057\u3066\u3044\u307E\u3059\u3002\u4F1A\u793E\u6982\u8981\u30FB\u6CBF\u9769\u3001\u30C8\u30C3\u30D7\u30E1\u30C3\u30BB\u30FC\u30B8\u3001\u74B0\u5883\u3078\u306E\u53D6\u308A\u7D44\u307F\u3001\u793E\u4F1A\u6D3B\u52D5\u3001\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u65B9\u91DD\u306F\u4F1A\u793E\u60C5\u5831\u30DA\u30FC\u30B8\u3067\u3054\u89A7\u3044\u305F\u3060\u3051\u307E\u3059\u3002",
    vi: "Entetsu Store l\xE0 chu\u1ED7i si\xEAu th\u1ECB ch\u1EE7 y\u1EBFu \u1EDF mi\u1EC1n t\xE2y t\u1EC9nh Shizuoka. Th\xF4ng tin c\xF4ng ty, l\u1ECBch s\u1EED, th\xF4ng \u0111i\u1EC7p l\xE3nh \u0111\u1EA1o, ho\u1EA1t \u0111\u1ED9ng m\xF4i tr\u01B0\u1EDDng \u2013 x\xE3 h\u1ED9i v\xE0 ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt \u0111\u1EC1u c\xF3 \u1EDF trang \u4F1A\u793E\u60C5\u5831.",
    en: "Entetsu Store operates supermarkets mainly in western Shizuoka. Company profile, history, top message, environmental and social activities, and the privacy policy are on the company information pages.",
    zh: "\u8FDC\u94C1\u8D85\u5E02\u4E3B\u8981\u5728\u9759\u5188\u53BF\u897F\u90E8\u7ECF\u8425\u8D85\u5E02\u3002\u516C\u53F8\u6982\u51B5\u3001\u6CBF\u9769\u3001\u9AD8\u5C42\u81F4\u8F9E\u3001\u73AF\u4FDD\u4E0E\u793E\u4F1A\u6D3B\u52A8\u53CA\u9690\u79C1\u653F\u7B56\u8BF7\u89C1\u516C\u53F8\u4FE1\u606F\u9875\u9762\u3002",
    ko: "\uC5D4\uD14C\uCE20 \uC2A4\uD1A0\uC5B4\uB294 \uC2DC\uC988\uC624\uCE74\uD604 \uC11C\uBD80\uB97C \uC911\uC2EC\uC73C\uB85C \uC288\uD37C\uB9C8\uCF13\uC744 \uC6B4\uC601\uD569\uB2C8\uB2E4. \uD68C\uC0AC \uAC1C\uC694\xB7\uC5F0\uD601, \uB300\uD45C \uBA54\uC2DC\uC9C0, \uD658\uACBD\xB7\uC0AC\uD68C \uD65C\uB3D9, \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638\uBC29\uCE68\uC740 \uD68C\uC0AC \uC815\uBCF4 \uD398\uC774\uC9C0\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.",
    th: "Entetsu Store \u0E14\u0E33\u0E40\u0E19\u0E34\u0E19\u0E01\u0E34\u0E08\u0E01\u0E32\u0E23\u0E0B\u0E39\u0E40\u0E1B\u0E2D\u0E23\u0E4C\u0E21\u0E32\u0E23\u0E4C\u0E40\u0E01\u0E47\u0E15\u0E43\u0E19\u0E20\u0E32\u0E04\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E02\u0E2D\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E0A\u0E34\u0E0B\u0E38\u0E42\u0E2D\u0E01\u0E30 \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 \u0E2A\u0E32\u0E2A\u0E4C\u0E19\u0E1C\u0E39\u0E49\u0E1A\u0E23\u0E34\u0E2B\u0E32\u0E23 \u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E2A\u0E34\u0E48\u0E07\u0E41\u0E27\u0E14\u0E25\u0E49\u0E2D\u0E21\u0E41\u0E25\u0E30\u0E2A\u0E31\u0E07\u0E04\u0E21 \u0E23\u0E27\u0E21\u0E16\u0E36\u0E07\u0E19\u0E42\u0E22\u0E1A\u0E32\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27 \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17"
  }
};
const SEE_MORE = {
  ja: "\u8A73\u3057\u304F\u306F\u3053\u3061\u3089\u306E\u30DA\u30FC\u30B8\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\uFF1A",
  vi: "Xem chi ti\u1EBFt t\u1EA1i c\xE1c trang sau:",
  en: "See these pages for details:",
  zh: "\u8BE6\u60C5\u8BF7\u89C1\u4EE5\u4E0B\u9875\u9762\uFF1A",
  ko: "\uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uB2E4\uC74C \uD398\uC774\uC9C0\uB97C \uCC38\uACE0\uD558\uC138\uC694:",
  th: "\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E40\u0E2B\u0E25\u0E48\u0E32\u0E19\u0E35\u0E49:"
};
function notFoundShop(lang, name, total) {
  const M = {
    ja: `\u7533\u3057\u8A33\u3054\u3056\u3044\u307E\u305B\u3093\u3002\u300C${name}\u300D\u3068\u3044\u3046\u5E97\u8217\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u9060\u9244\u30B9\u30C8\u30A2\u306F\u73FE\u5728 ${total} \u5E97\u8217\u3054\u3056\u3044\u307E\u3059\u3002\u5E97\u8217\u4E00\u89A7\u304B\u3089\u304A\u63A2\u3057\u304F\u3060\u3055\u3044\u3002`,
    vi: `Xin l\u1ED7i, kh\xF4ng c\xF3 c\u1EEDa h\xE0ng n\xE0o t\xEAn "${name}". Entetsu Store hi\u1EC7n c\xF3 ${total} c\u1EEDa h\xE0ng \u2014 b\u1EA1n xem danh s\xE1ch c\u1EEDa h\xE0ng nh\xE9.`,
    en: `Sorry, there is no store called "${name}". Entetsu Store currently has ${total} stores \u2014 please check the store list.`,
    zh: `\u62B1\u6B49\uFF0C\u6CA1\u6709\u540D\u4E3A\u300C${name}\u300D\u7684\u95E8\u5E97\u3002\u8FDC\u94C1\u8D85\u5E02\u76EE\u524D\u5171\u6709 ${total} \u5BB6\u95E8\u5E97\uFF0C\u8BF7\u67E5\u770B\u95E8\u5E97\u4E00\u89C8\u3002`,
    ko: `\uC8C4\uC1A1\uD569\uB2C8\uB2E4. "${name}"\uC774\uB77C\uB294 \uB9E4\uC7A5\uC740 \uC5C6\uC2B5\uB2C8\uB2E4. \uC5D4\uD14C\uCE20 \uC2A4\uD1A0\uC5B4\uB294 \uD604\uC7AC ${total}\uAC1C \uB9E4\uC7A5\uC774 \uC788\uC2B5\uB2C8\uB2E4. \uB9E4\uC7A5 \uBAA9\uB85D\uC744 \uD655\uC778\uD574 \uC8FC\uC138\uC694.`,
    th: `\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E44\u0E21\u0E48\u0E21\u0E35\u0E23\u0E49\u0E32\u0E19\u0E0A\u0E37\u0E48\u0E2D "${name}" \u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 Entetsu Store \u0E21\u0E35 ${total} \u0E2A\u0E32\u0E02\u0E32 \u0E01\u0E23\u0E38\u0E13\u0E32\u0E14\u0E39\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E32\u0E02\u0E32`
  };
  return pick(M, lang);
}
function shopAttrAnswer(lang, shop, attr) {
  const L = {
    phone: {
      ja: (s) => `${s.title}\u306E\u96FB\u8A71\u756A\u53F7\u306F ${s.phone} \u3067\u3059\u3002`,
      vi: (s) => `S\u1ED1 \u0111i\u1EC7n tho\u1EA1i c\u1EE7a ${s.title} l\xE0 ${s.phone}.`,
      en: (s) => `The phone number for ${s.title} is ${s.phone}.`,
      zh: (s) => `${s.title}\u7684\u7535\u8BDD\u662F ${s.phone}\u3002`,
      ko: (s) => `${s.title}\uC758 \uC804\uD654\uBC88\uD638\uB294 ${s.phone}\uC785\uB2C8\uB2E4.`,
      th: (s) => `\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E02\u0E2D\u0E07 ${s.title} \u0E04\u0E37\u0E2D ${s.phone}`
    },
    openTime: {
      ja: (s) => `${s.title}\u306E\u55B6\u696D\u6642\u9593\u306F ${s.openTime} \u3067\u3059\u3002`,
      vi: (s) => `${s.title} m\u1EDF c\u1EEDa ${s.openTime}.`,
      en: (s) => `${s.title} is open ${s.openTime}.`,
      zh: (s) => `${s.title}\u7684\u8425\u4E1A\u65F6\u95F4\u662F ${s.openTime}\u3002`,
      ko: (s) => `${s.title}\uC758 \uC601\uC5C5\uC2DC\uAC04\uC740 ${s.openTime}\uC785\uB2C8\uB2E4.`,
      th: (s) => `${s.title} \u0E40\u0E1B\u0E34\u0E14 ${s.openTime}`
    },
    address: {
      ja: (s) => `${s.title}\u306E\u4F4F\u6240\u306F ${s.address} \u3067\u3059\u3002`,
      vi: (s) => `\u0110\u1ECBa ch\u1EC9 ${s.title}: ${s.address}.`,
      en: (s) => `${s.title} is located at ${s.address}.`,
      zh: (s) => `${s.title}\u7684\u5730\u5740\u662F ${s.address}\u3002`,
      ko: (s) => `${s.title}\uC758 \uC8FC\uC18C\uB294 ${s.address}\uC785\uB2C8\uB2E4.`,
      th: (s) => `\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E02\u0E2D\u0E07 ${s.title} \u0E04\u0E37\u0E2D ${s.address}`
    },
    parking: {
      ja: (s) => s.parking ? `${s.title}\u306B\u306F\u99D0\u8ECA\u5834\u304C\u3054\u3056\u3044\u307E\u3059\uFF08${s.parking}\uFF09\u3002` : `${s.title}\u306E\u99D0\u8ECA\u5834\u60C5\u5831\u306F\u5E97\u8217\u30DA\u30FC\u30B8\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002`,
      vi: (s) => s.parking ? `${s.title} c\xF3 b\xE3i \u0111\u1ED7 xe (${s.parking}).` : `Th\xF4ng tin b\xE3i \u0111\u1ED7 xe c\u1EE7a ${s.title} xem \u1EDF trang c\u1EEDa h\xE0ng.`,
      en: (s) => s.parking ? `${s.title} has parking (${s.parking}).` : `Please see the store page for parking at ${s.title}.`,
      zh: (s) => s.parking ? `${s.title}\u8BBE\u6709\u505C\u8F66\u573A\uFF08${s.parking}\uFF09\u3002` : `${s.title}\u7684\u505C\u8F66\u4FE1\u606F\u8BF7\u89C1\u95E8\u5E97\u9875\u9762\u3002`,
      ko: (s) => s.parking ? `${s.title}\uC5D0\uB294 \uC8FC\uCC28\uC7A5\uC774 \uC788\uC2B5\uB2C8\uB2E4(${s.parking}).` : `${s.title}\uC758 \uC8FC\uCC28 \uC815\uBCF4\uB294 \uB9E4\uC7A5 \uD398\uC774\uC9C0\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694.`,
      th: (s) => s.parking ? `${s.title} \u0E21\u0E35\u0E17\u0E35\u0E48\u0E08\u0E2D\u0E14\u0E23\u0E16 (${s.parking})` : `\u0E14\u0E39\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E08\u0E2D\u0E14\u0E23\u0E16\u0E02\u0E2D\u0E07 ${s.title} \u0E44\u0E14\u0E49\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E23\u0E49\u0E32\u0E19`
    }
  };
  const fn = pick(L[attr] || L.address, lang);
  const line = fn(shop);
  if (attr === "phone" || attr === "openTime") {
    const extra = {
      ja: `\uFF08${shop.address}\uFF09`,
      vi: `(${shop.address})`,
      en: `(${shop.address})`,
      zh: `\uFF08${shop.address}\uFF09`,
      ko: `(${shop.address})`,
      th: `(${shop.address})`
    };
    return line + String.fromCharCode(10) + pick(extra, lang);
  }
  return line;
}
function countAnswer(lang, kind, total) {
  const M = {
    shop: {
      ja: `\u9060\u9244\u30B9\u30C8\u30A2\u306F\u73FE\u5728 ${total} \u5E97\u8217\u3054\u3056\u3044\u307E\u3059\uFF08\u9759\u5CA1\u770C\u897F\u90E8\u3092\u4E2D\u5FC3\u306B\u5C55\u958B\uFF09\u3002\u5E97\u8217\u4E00\u89A7\u304B\u3089\u30A8\u30EA\u30A2\u5225\u306B\u304A\u63A2\u3057\u3044\u305F\u3060\u3051\u307E\u3059\u3002`,
      vi: `Entetsu Store hi\u1EC7n c\xF3 ${total} c\u1EEDa h\xE0ng, ch\u1EE7 y\u1EBFu \u1EDF mi\u1EC1n t\xE2y t\u1EC9nh Shizuoka. B\u1EA1n c\xF3 th\u1EC3 t\xECm theo khu v\u1EF1c \u1EDF trang danh s\xE1ch c\u1EEDa h\xE0ng.`,
      en: `Entetsu Store currently has ${total} stores, mainly in western Shizuoka. You can browse them by area on the store list page.`,
      zh: `\u8FDC\u94C1\u8D85\u5E02\u76EE\u524D\u5171\u6709 ${total} \u5BB6\u95E8\u5E97\uFF0C\u4E3B\u8981\u5206\u5E03\u5728\u9759\u5188\u53BF\u897F\u90E8\u3002\u53EF\u5728\u95E8\u5E97\u4E00\u89C8\u6309\u533A\u57DF\u67E5\u627E\u3002`,
      ko: `\uC5D4\uD14C\uCE20 \uC2A4\uD1A0\uC5B4\uB294 \uD604\uC7AC ${total}\uAC1C \uB9E4\uC7A5\uC774 \uC788\uC73C\uBA70 \uC2DC\uC988\uC624\uCE74\uD604 \uC11C\uBD80\uB97C \uC911\uC2EC\uC73C\uB85C \uC6B4\uC601\uD569\uB2C8\uB2E4.`,
      th: `\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 Entetsu Store \u0E21\u0E35 ${total} \u0E2A\u0E32\u0E02\u0E32 \u0E2A\u0E48\u0E27\u0E19\u0E43\u0E2B\u0E0D\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E17\u0E32\u0E07\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01\u0E02\u0E2D\u0E07\u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14\u0E0A\u0E34\u0E0B\u0E38\u0E42\u0E2D\u0E01\u0E30`
    },
    recipe: {
      ja: `\u30EC\u30B7\u30D4\u306F\u5168\u90E8\u3067 ${total} \u4EF6\u3054\u3056\u3044\u307E\u3059\u3002\u98DF\u6750\u540D\u3084\u6599\u7406\u540D\u3067\u691C\u7D22\u3067\u304D\u307E\u3059\u3002`,
      vi: `C\xF3 t\u1EA5t c\u1EA3 ${total} c\xF4ng th\u1EE9c. B\u1EA1n c\xF3 th\u1EC3 t\xECm theo t\xEAn nguy\xEAn li\u1EC7u ho\u1EB7c t\xEAn m\xF3n.`,
      en: `There are ${total} recipes in total. You can search by ingredient or dish name.`,
      zh: `\u5171\u6709 ${total} \u4E2A\u98DF\u8C31\uFF0C\u53EF\u6309\u98DF\u6750\u6216\u83DC\u540D\u641C\u7D22\u3002`,
      ko: `\uCD1D ${total}\uAC1C\uC758 \uB808\uC2DC\uD53C\uAC00 \uC788\uC2B5\uB2C8\uB2E4. \uC7AC\uB8CC\uB098 \uC694\uB9AC\uBA85\uC73C\uB85C \uAC80\uC0C9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`,
      th: `\u0E21\u0E35\u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14 ${total} \u0E2A\u0E39\u0E15\u0E23 \u0E04\u0E49\u0E19\u0E2B\u0E32\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A\u0E2B\u0E23\u0E37\u0E2D\u0E0A\u0E37\u0E48\u0E2D\u0E2D\u0E32\u0E2B\u0E32\u0E23`
    },
    promo: {
      ja: `\u73FE\u5728 ${total} \u4EF6\u306E\u7279\u58F2\u3092\u5B9F\u65BD\u4E2D\u3067\u3059\u3002\u203B \u4FA1\u683C\u306F\u30C7\u30E2\u7528\u306E\u4EEE\u30C7\u30FC\u30BF\u3067\u3059\u3002`,
      vi: `Hi\u1EC7n \u0111ang c\xF3 ${total} khuy\u1EBFn m\xE3i. \u203B Gi\xE1 l\xE0 d\u1EEF li\u1EC7u demo.`,
      en: `There are currently ${total} items on sale. * Prices are demo data.`,
      zh: `\u76EE\u524D\u6709 ${total} \u4E2A\u7279\u5356\u3002\u203B \u4EF7\u683C\u4E3A\u6F14\u793A\u6570\u636E\u3002`,
      ko: `\uD604\uC7AC ${total}\uAC1C\uC758 \uD2B9\uAC00\uAC00 \uC9C4\uD589 \uC911\uC785\uB2C8\uB2E4. \u203B \uAC00\uACA9\uC740 \uB370\uBAA8 \uB370\uC774\uD130\uC785\uB2C8\uB2E4.`,
      th: `\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49\u0E21\u0E35 ${total} \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E25\u0E14\u0E23\u0E32\u0E04\u0E32 \u203B \u0E23\u0E32\u0E04\u0E32\u0E40\u0E1B\u0E47\u0E19\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07`
    }
  };
  return pick(M[kind] || M.shop, lang);
}
function yesNoPrefix(lang, yes, n) {
  const Y = {
    ja: `\u306F\u3044\u3001\u3054\u3056\u3044\u307E\u3059\u3002${n ? `\uFF08${n}\u4EF6\uFF09` : ""}`,
    vi: `C\xF3 \u1EA1.${n ? ` (${n} k\u1EBFt qu\u1EA3)` : ""}`,
    en: `Yes.${n ? ` (${n} found)` : ""}`,
    zh: `\u6709\u7684\u3002${n ? `\uFF08${n} \u9879\uFF09` : ""}`,
    ko: `\uB124, \uC788\uC2B5\uB2C8\uB2E4.${n ? ` (${n}\uAC74)` : ""}`,
    th: `\u0E21\u0E35\u0E04\u0E48\u0E30${n ? ` (${n} \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23)` : ""}`
  };
  const N = {
    ja: "\u7533\u3057\u8A33\u3054\u3056\u3044\u307E\u305B\u3093\u3002\u8A72\u5F53\u3059\u308B\u60C5\u5831\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002",
    vi: "Xin l\u1ED7i, t\xF4i kh\xF4ng t\xECm th\u1EA5y th\xF4ng tin ph\xF9 h\u1EE3p.",
    en: "Sorry, I could not find matching information.",
    zh: "\u62B1\u6B49\uFF0C\u672A\u627E\u5230\u76F8\u5173\u4FE1\u606F\u3002",
    ko: "\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uD574\uB2F9 \uC815\uBCF4\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
    th: "\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E19"
  };
  return yes ? pick(Y, lang) : pick(N, lang);
}
function noMore(lang) {
  const M = {
    ja: "\u307B\u304B\u306B\u3054\u7D39\u4ECB\u3067\u304D\u308B\u60C5\u5831\u306F\u4EE5\u4E0A\u3067\u3059\u3002\u5225\u306E\u30AD\u30FC\u30EF\u30FC\u30C9\u3067\u304A\u63A2\u3057\u304F\u3060\u3055\u3044\u3002",
    vi: "\u0110\xF3 l\xE0 t\u1EA5t c\u1EA3 nh\u1EEFng g\xEC t\xF4i t\xECm \u0111\u01B0\u1EE3c. B\u1EA1n th\u1EED t\u1EEB kho\xE1 kh\xE1c nh\xE9.",
    en: "That's everything I found. Please try a different keyword.",
    zh: "\u6CA1\u6709\u66F4\u591A\u76F8\u5173\u4FE1\u606F\u4E86\uFF0C\u8BF7\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5\u3002",
    ko: "\uB354 \uC774\uC0C1 \uC548\uB0B4\uB4DC\uB9B4 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uD0A4\uC6CC\uB4DC\uB85C \uAC80\uC0C9\uD574 \uBCF4\uC138\uC694.",
    th: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21\u0E41\u0E25\u0E49\u0E27 \u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E04\u0E33\u0E04\u0E49\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E14\u0E39\u0E19\u0E30\u0E04\u0E30"
  };
  return pick(M, lang);
}
function composeAnswer(intentKey, hits, lang, totalFound = 0, opts = {}) {
  var _a;
  if (!hits.length) return null;
  const L = (o) => pick(o, lang);
  const lines = [];
  if (opts.yesNo && !TOPIC_ANSWER[intentKey]) {
    lines.push(yesNoPrefix(lang, true, totalFound || hits.length));
  }
  if (intentKey === "recipe" || intentKey === "nutrition") {
    lines.push(pick(LEAD.recipe, lang)(countPhrase(totalFound || hits.length, lang, "recipe")));
    let hasRealNutrition = false;
    let hasCost = false;
    for (const h of hits.slice(0, 3)) {
      const bits = [];
      if (h.cookTime) bits.push(String(h.cookTime).replace(/\+$/, "") + L(LBL.min));
      if (h.energy) {
        bits.push(h.energy + L(LBL.kcal));
        hasRealNutrition = true;
      }
      if (h.salt) bits.push(L(LBL.salt) + " " + h.salt + "g");
      if ((_a = h.ingredients) == null ? void 0 : _a.length) bits.push(L(LBL.ing) + " " + h.ingredients.length);
      if (h.estimatedCost) {
        bits.push(L(LBL.cost) + " " + h.estimatedCost.total.toLocaleString() + L(LBL.yen));
        hasCost = true;
      }
      lines.push(`\u30FB${h.title}${bits.length ? "\uFF08" + bits.join("\u30FB") + "\uFF09" : ""}`);
    }
    if (hasCost) lines.push(L(COST_NOTE));
    if (hasRealNutrition) lines.push(L(REAL_NOTE));
  } else if (intentKey === "shop") {
    lines.push(pick(LEAD.shop, lang)(countPhrase(totalFound || hits.length, lang, "shop")));
    for (const h of hits.slice(0, 3)) {
      const bits = [h.address].filter(Boolean);
      if (h.openTime) bits.push(L(LBL.open) + " " + h.openTime);
      if (h.phone) bits.push("TEL " + h.phone);
      lines.push(`\u30FB${h.title}\uFF5C${bits.join("\uFF0F")}`);
    }
  } else if (intentKey === "promo") {
    lines.push(pick(LEAD.promo, lang)(countPhrase(totalFound || hits.length, lang, "promo")));
    for (const h of hits.slice(0, 4)) {
      const p = h.promo;
      if (!p) {
        lines.push(`\u30FB${h.title}`);
        continue;
      }
      lines.push(
        `\u30FB${p.productName}\u3000${p.normalPrice}\u5186 \u2192 ${p.salePrice}\u5186\uFF08${p.discountPercent}%OFF\uFF09\u3000${fmtDate(p.endDate)}${L(LBL.until)}`
      );
    }
    lines.push(L(DEMO_NOTE));
  } else {
    const topic = TOPIC_ANSWER[intentKey];
    if (topic) {
      lines.push(pick(topic, lang));
      lines.push(pick(SEE_MORE, lang));
    } else {
      lines.push(pick(LEAD.page, lang)());
    }
    const seen = /* @__PURE__ */ new Set();
    for (const h of hits) {
      if (seen.has(h.title)) continue;
      seen.add(h.title);
      lines.push(`\u30FB${h.title}\uFF08${h.typeLabel}\uFF09`);
      if (seen.size >= 3) break;
    }
  }
  const shown = Math.min(hits.length, intentKey === "promo" ? 4 : 3);
  if (totalFound > shown) lines.push(pick(MORE, lang)(totalFound - shown));
  return lines.join("\n");
}
function extractShopName(text) {
  const s = String(text || "");
  if (/何店|いくつ|how many/i.test(s)) return null;
  const m = s.match(/([一-鿿ぁ-んァ-ヶA-Za-z0-9ー]{1,8})店/);
  if (!m) return null;
  const name = m[1];
  if (/[のがはをにでとやもへ]|ある|ない|いる/.test(name)) return null;
  const generic = ["\u5E97\u8217", "\u5404", "\u3053\u306E", "\u305D\u306E", "\u3069\u306E", "\u304A", "\u672C", "\u652F", "\u5F53", "\u5168", "\u540C"];
  if (generic.includes(name) || !name) return null;
  if (/[市区町村県]$/.test(name)) return null;
  return name + "\u5E97";
}
function isYesNo(text) {
  const s = looseText(text).trim();
  return [
    /ありますか|ますか|でしょうか|できますか|possible|いますか/,
    /^(is|are|do|does|can|has|have)\b/i,
    /\bkhông\?*$|^có\b/i,
    /吗[？?]?$/,
    /나요[？?]?$|습니까[？?]?$/,
    /ไหม[？?]?$|มั้ย[？?]?$/
  ].some((re) => looseRe(re).test(s));
}
function countQuestion(text) {
  const s = looseText(text);
  if (!looseRe(/何[店件品種類]|いくつ|how many|bao nhiêu|多少|몇\s*(개|곳)|กี่/i).test(s)) return null;
  if (looseRe(/店舗|お店|支店|store|shop|cửa hàng|门店|매장|ร้าน/i).test(s)) return "shop";
  if (looseRe(/レシピ|料理|recipe|công thức|食谱|레시피|สูตร/i).test(s)) return "recipe";
  if (looseRe(/特売|セール|sale|khuyến mãi|特卖|할인|ลดราคา/i).test(s)) return "promo";
  return "any";
}
function isOutOfScope(text) {
  const s = looseText(text).toLowerCase();
  const patterns = [
    /天気|気温|雨|台風|weather|thời tiết|天气|날씨|อากาศ/,
    /ニュース(?!リリース)|政治|選挙|株価|為替|politics|election|stock price/,
    /翻訳して|calculate|計算して|プログラム|コード書/,
    /恋愛|占い|運勢|horoscope|fortune/,
    /コロナ|感染者|ワクチン/
  ];
  return patterns.some((re) => looseRe(re).test(s));
}
function shopAttribute(text) {
  const s = looseText(text);
  if (looseRe(/電話|TEL|tel|phone|điện thoại|电话|전화|โทร/i).test(s)) return "phone";
  if (looseRe(/営業時間|何時|開い|閉ま|hours|open|giờ|营业时间|영업시간|เวลาเปิด/i).test(s)) return "openTime";
  if (looseRe(/住所|場所|どこ|address|location|where|địa chỉ|ở đâu|地址|在哪|주소|어디|ที่อยู่/i).test(s)) return "address";
  if (looseRe(/駐車場|parking|đỗ xe|停车|주차|จอดรถ/i).test(s)) return "parking";
  return null;
}
function isFollowUp(text) {
  const s = looseText(text).trim();
  if (s.length > 20) return null;
  if (looseRe(/^(他に|ほかに|他には|もっと|続き|次|さらに)/).test(s)) return "more";
  if (looseRe(/^(more|others?|what else|anything else)\b/i).test(s)) return "more";
  if (looseRe(/^(còn (gì|nào)|thêm|khác)/i).test(s)) return "more";
  if (looseRe(/^(还有|其他|更多)/).test(s)) return "more";
  if (looseRe(/^(더|또)/).test(s)) return "more";
  return null;
}
function retrieve(question, intent, filters, limit = 8) {
  const { docs, products } = getStore();
  const promoDocs = activePromos().map((p) => {
    const title = `${p.productName} ${p.discountPercent}%OFF`;
    const text = `${p.productName} \u7279\u58F2 \u30BB\u30FC\u30EB \u304A\u8CB7\u3044\u5F97 ${p.discountPercent}%OFF ${p.salePrice}\u5186 ${p.uribaLabel} ${p.endDate.slice(0, 10)}\u307E\u3067`;
    return {
      id: `promo:${p.id}`,
      type: "promo",
      typeLabel: "\u7279\u58F2",
      title,
      route: "/search?q=" + encodeURIComponent(p.productName),
      text,
      norm: normalizeJa(title + " " + text),
      normTitle: normalizeJa(p.productName),
      promo: p
    };
  });
  const all = [...promoDocs, ...docs];
  const wantGroups = (intent == null ? void 0 : intent.want) || null;
  const inWant = (d) => {
    if (!wantGroups) return true;
    const g = groupOf(d);
    return wantGroups.includes(g);
  };
  const generic = /^[^ぁ-んァ-ヶa-z0-9]{0,4}(今日|本日|今|現在|どんな|何|なに|いま)/.test(question) || question.trim().length <= 8;
  let pool = all.filter(inWant);
  const noKeyword = (rest) => !rest || !looksLikeKeyword(all, rest, toJapaneseKeywords(rest));
  const genericOnly = filters.genericOnly || noKeyword(filters.residual);
  const budgetOnly = filters.budgetOnly || noKeyword(filters.budgetRest);
  const topic = detectIntent$1(question);
  if (topic && (topic.kind === "region" || genericOnly || noKeyword(question))) {
    const lists = topic.terms.map(
      (w) => search(pool, w, { limit: limit * 2, perGroup: limit * 2, types: topic.types || void 0 }).items.filter((d) => d.type !== "product")
    );
    const seen = /* @__PURE__ */ new Set();
    const mixed = [];
    for (let i = 0; mixed.length < limit * 3 && lists.some((l) => l[i]); i++) {
      for (const l of lists) {
        const d = l[i];
        if (d && !seen.has(d.id)) {
          seen.add(d.id);
          mixed.push({ ...d, score: 100 - i });
        }
      }
    }
    const rank = (d) => d.type === "recipe" ? 0 : d.type === "promo" ? 1 : 2;
    if (topic.kind === "specialty" || topic.kind === "region") mixed.sort((a, b) => rank(a) - rank(b));
    if (mixed.length) return applyFilters(mixed, filters, all, { budgetOnly });
  }
  if (genericOnly && (wantGroups == null ? void 0 : wantGroups.includes("recipe"))) {
    const allRecipes = pool.filter((d) => d.type === "recipe");
    if (allRecipes.length) {
      return applyFilters(allRecipes.map((d) => ({ ...d, score: 1 })), filters, all, { budgetOnly });
    }
  }
  let items = searchQuestion(pool, question, { limit: limit * 2 }).items;
  const named = [.../* @__PURE__ */ new Set([...toJapaneseKeywords(question), ...extractKeywords(question)])].filter((w) => w.length >= 2);
  if (items.length > 1 && named.length) {
    const nq = named.map((w) => normalizeJa(w)).filter((w) => w.length >= 2);
    const strict = items.filter((d) => {
      const t2 = d.normTitle || normalizeJa(d.title || "");
      return nq.some((w) => t2.includes(w));
    });
    if (strict.length) items = strict;
  }
  if (!items.length) {
    const seen = /* @__PURE__ */ new Map();
    for (const w of toJapaneseKeywords(question)) {
      for (const it of search(pool, w, { limit: 6, perGroup: 4 }).items) {
        const prev = seen.get(it.id);
        seen.set(it.id, { ...it, score: ((prev == null ? void 0 : prev.score) || 0) + (it.score || 0) });
      }
    }
    items = [...seen.values()].sort((a, b) => b.score - a.score);
  }
  if (!items.length && wantGroups && generic) {
    items = pool.slice(0, limit * 2).map((d) => ({ ...d, score: 1 }));
  }
  if (!items.length && wantGroups) {
    items = pool.slice(0, limit).map((d) => ({ ...d, score: 1 }));
  }
  if (!items.length) {
    items = searchQuestion(all, question, { limit }).items;
  }
  return applyFilters(items, filters, all, { budgetOnly });
}
function applyFilters(items, filters, all, opts = {}) {
  if (filters.budget) {
    const { costById } = getStore();
    const b = filters.budget;
    const inBudget = (d) => {
      if (d.type !== "recipe") return true;
      const c = costById.get(d.id);
      return !!c && c.confidence >= 60 && c.total >= b.min && c.total <= b.max;
    };
    const withCost = (d) => {
      const c = costById.get(d.id);
      return c ? { ...d, estimatedCost: c } : d;
    };
    const browseAll = () => {
      const pool = all.filter((d) => d.type === "recipe" && inBudget(d)).map(withCost);
      if (b.kind === "around") {
        pool.sort(
          (x, y) => Math.abs(x.estimatedCost.total - b.raw) - Math.abs(y.estimatedCost.total - b.raw)
        );
      } else if (b.kind === "over") {
        pool.sort((x, y) => x.estimatedCost.total - y.estimatedCost.total);
      } else {
        pool.sort((x, y) => y.estimatedCost.total - x.estimatedCost.total);
      }
      return pool;
    };
    const f = opts.budgetOnly ? browseAll() : items.filter(inBudget).map(withCost);
    items = f.length ? f : browseAll();
    if (!items.length) return [];
  }
  if (filters.maxMinutes) {
    const f = items.filter((d) => {
      const t2 = parseInt(String(d.cookTime || "").replace(/[^0-9]/g, ""), 10);
      return Number.isFinite(t2) && t2 <= filters.maxMinutes;
    });
    if (f.length) items = f;
  }
  if (filters.maxKcal) {
    const f = items.filter((d) => {
      const k = parseInt(String(d.energy || "").replace(/[^0-9]/g, ""), 10);
      return Number.isFinite(k) && k <= filters.maxKcal;
    });
    if (f.length) items = f;
  }
  if (filters.areaWord) {
    const f = items.filter((d) => String(d.address || "").includes(filters.areaWord));
    if (f.length) items = f;
  }
  return dedupeByRoute(items);
}
function dedupeByRoute(hits) {
  const seen = /* @__PURE__ */ new Set();
  return hits.filter((h) => {
    const k = h.title;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
function findProductInQuestion(question, store) {
  const nq = normalizeJa(question);
  const words = [...toJapaneseKeywords(question), ...extractKeywords(question)].map((w) => normalizeJa(w)).filter((w) => w.length >= 2);
  const wordSet = new Set(words);
  let best = null;
  let bestLen = 0;
  for (const p of store.products) {
    const n = normalizeJa(p.name);
    if (n.length < 2) continue;
    if (!nq.includes(n) && !wordSet.has(n)) continue;
    if (n.length > bestLen) {
      bestLen = n.length;
      best = p;
    }
  }
  return best;
}
function stockAnswer(lang, product, shops, areaWord) {
  const nl = String.fromCharCode(10);
  const where = areaWord ? `${areaWord}` : "";
  const head = {
    ja: `\u300C${product.name}\u300D\u306E\u53D6\u6271\u5E97\u8217${where ? `\uFF08${where}\uFF09` : ""}\u306F\u6B21\u306E\u3068\u304A\u308A\u3067\u3059\uFF1A`,
    vi: `C\xE1c si\xEAu th\u1ECB c\xF3 b\xE1n "${product.name}"${where ? ` \u1EDF ${where}` : ""}:`,
    en: `Stores carrying "${product.name}"${where ? ` in ${where}` : ""}:`,
    zh: `\u6709\u552E\u300C${product.name}\u300D\u7684\u95E8\u5E97${where ? `\uFF08${where}\uFF09` : ""}\uFF1A`,
    ko: `"${product.name}"\uC744(\uB97C) \uCDE8\uAE09\uD558\uB294 \uB9E4\uC7A5${where ? `\uFF08${where}\uFF09` : ""}:`,
    th: `\u0E23\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48\u0E21\u0E35 "${product.name}"${where ? ` \u0E43\u0E19 ${where}` : ""}:`
  };
  const lines = [head[lang] || head.ja];
  for (const s of shops) {
    const bits = [s.stock, s.address].filter(Boolean);
    if (s.openTime) bits.push(`${L2(LBL.open, lang)} ${s.openTime}`);
    lines.push(`\u30FB${s.title}\uFF5C${bits.join("\uFF0F")}`);
  }
  const price = {
    ja: `${product.name} \u306F ${product.taxIncluded}\u5186\uFF08\u7A0E\u8FBC\u30FBDEMO\uFF09\u3067\u3059\u3002`,
    vi: `"${product.name}" gi\xE1 ${product.taxIncluded} y\xEAn (\u0111\xE3 g\u1ED3m thu\u1EBF \u2014 s\u1ED1 DEMO).`,
    en: `"${product.name}" is ${product.taxIncluded} yen (tax incl. \u2014 DEMO figure).`,
    zh: `\u300C${product.name}\u300D${product.taxIncluded}\u65E5\u5143\uFF08\u542B\u7A0E\u30FBDEMO\uFF09\u3002`,
    ko: `"${product.name}" ${product.taxIncluded}\uC5D4 (\uC138\uAE08 \uD3EC\uD568\u30FBDEMO).`,
    th: `"${product.name}" ${product.taxIncluded} \u0E40\u0E22\u0E19 (\u0E23\u0E27\u0E21\u0E20\u0E32\u0E29\u0E35\u30FBDEMO)`
  };
  lines.push(price[lang] || price.ja);
  lines.push(t(lang, "demoWarn"));
  return lines.join(nl);
}
function overBudgetAnswer(lang, budget, cheapest) {
  const nl = String.fromCharCode(10);
  const b = budget.max.toLocaleString();
  const c = cheapest.toLocaleString();
  const byLang = {
    ja: `\u7533\u3057\u8A33\u3042\u308A\u307E\u305B\u3093\u3002\u6750\u6599\u8CBB\u304C ${b}\u5186\u4EE5\u5185\u306E\u30EC\u30B7\u30D4\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002${nl}\u3044\u3061\u3070\u3093\u5B89\u3044\u30EC\u30B7\u30D4\u3067\u3082\u6750\u6599\u8CBB\u306F\u7D04 ${c}\u5186\u3067\u3059\u3002${nl}\u203B \u6750\u6599\u8CBB\u306F1\u30D1\u30C3\u30AF\u5358\u4F4D\u3067\u8A08\u7B97\u3057\u305F\u30C7\u30E2\u4FA1\u683C\u306E\u6982\u7B97\u3067\u3059\u3002`,
    vi: `R\u1EA5t ti\u1EBFc, kh\xF4ng c\xF3 c\xF4ng th\u1EE9c n\xE0o c\xF3 ti\u1EC1n nguy\xEAn li\u1EC7u trong ${b} y\xEAn.${nl}M\xF3n r\u1EBB nh\u1EA5t c\u0169ng kho\u1EA3ng ${c} y\xEAn.${nl}\u203B Ti\u1EC1n nguy\xEAn li\u1EC7u l\xE0 \u01B0\u1EDBc t\xEDnh tr\xEAn gi\xE1 DEMO, t\xEDnh theo nguy\xEAn g\xF3i.`,
    en: `Sorry, no recipe fits an ingredient budget of ${b} yen.${nl}Even the cheapest one costs about ${c} yen.${nl}* Ingredient cost is a rough estimate on DEMO prices, counted per whole pack.`,
    zh: `\u62B1\u6B49\uFF0C\u6CA1\u6709\u98DF\u6750\u8D39\u5728 ${b} \u65E5\u5143\u4EE5\u5185\u7684\u98DF\u8C31\u3002${nl}\u6700\u4FBF\u5B9C\u7684\u4E5F\u7EA6\u9700 ${c} \u65E5\u5143\u3002${nl}\u203B \u98DF\u6750\u8D39\u4E3A\u6309\u6574\u5305\u8BA1\u7B97\u7684 DEMO \u4EF7\u683C\u6982\u7B97\u3002`,
    ko: `\uC8C4\uC1A1\uD569\uB2C8\uB2E4. \uC7AC\uB8CC\uBE44\uAC00 ${b}\uC5D4 \uC774\uB0B4\uC778 \uB808\uC2DC\uD53C\uB294 \uC5C6\uC2B5\uB2C8\uB2E4.${nl}\uAC00\uC7A5 \uC800\uB834\uD55C \uAC83\uB3C4 \uC57D ${c}\uC5D4\uC785\uB2C8\uB2E4.${nl}\u203B \uC7AC\uB8CC\uBE44\uB294 \uD55C \uD329 \uB2E8\uC704\uB85C \uACC4\uC0B0\uD55C DEMO \uAC00\uACA9\uC758 \uAC1C\uC0B0\uC785\uB2C8\uB2E4.`,
    th: `\u0E02\u0E2D\u0E2D\u0E20\u0E31\u0E22 \u0E44\u0E21\u0E48\u0E21\u0E35\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E35\u0E48\u0E04\u0E48\u0E32\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19 ${b} \u0E40\u0E22\u0E19${nl}\u0E2A\u0E39\u0E15\u0E23\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E23\u0E32\u0E27 ${c} \u0E40\u0E22\u0E19${nl}\u203B \u0E04\u0E48\u0E32\u0E27\u0E31\u0E15\u0E16\u0E38\u0E14\u0E34\u0E1A\u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13\u0E08\u0E32\u0E01\u0E23\u0E32\u0E04\u0E32 DEMO \u0E42\u0E14\u0E22\u0E04\u0E34\u0E14\u0E40\u0E1B\u0E47\u0E19\u0E41\u0E1E\u0E47\u0E01`
  };
  return byLang[lang] || byLang.ja;
}
function L2(obj, lang) {
  return obj[lang] || obj.ja;
}
function ruleAnswer(question, lang, hits, intentKey, totalFound = 0) {
  const yesNo = isYesNo(question);
  if (needsStoreContact(question)) {
    return { answer: t(lang, "askStore"), mode: "rule", guard: "store-contact" };
  }
  if (!hits.length) {
    return {
      answer: t(lang, "notFound") + String.fromCharCode(10) + (NOT_FOUND_HINT[lang] || NOT_FOUND_HINT.ja),
      mode: "rule",
      suggestions: SUGGESTIONS[lang] || SUGGESTIONS.ja
    };
  }
  if (intentKey) {
    const composed = composeAnswer(intentKey, hits, lang, totalFound, { yesNo });
    if (composed) return { answer: composed, mode: "rule", intent: intentKey };
  }
  const top = hits[0];
  const lines = [];
  if (top.type === "promo" && top.promo) {
    const p = top.promo;
    const until = new Date(p.endDate);
    const d = `${until.getMonth() + 1}/${until.getDate()}`;
    const byLang = {
      ja: `\u300C${p.productName}\u300D\u306F\u73FE\u5728 ${p.discountPercent}%OFF\uFF08${p.salePrice}\u5186\uFF09\u3067\u7279\u58F2\u4E2D\u3067\u3059\u3002${d} \u307E\u3067\u3068\u306A\u3063\u3066\u3044\u307E\u3059\u3002`,
      vi: `"${p.productName}" \u0111ang khuy\u1EBFn m\xE3i ${p.discountPercent}% (c\xF2n ${p.salePrice} y\xEAn), \u0111\u1EBFn h\u1EBFt ng\xE0y ${d}.`,
      en: `"${p.productName}" is on sale at ${p.discountPercent}% off (${p.salePrice} yen), until ${d}.`,
      zh: `\u300C${p.productName}\u300D\u6B63\u5728\u7279\u5356\uFF0C${p.discountPercent}%OFF\uFF08${p.salePrice}\u65E5\u5143\uFF09\uFF0C\u622A\u6B62 ${d}\u3002`,
      ko: `"${p.productName}"\uC740(\uB294) \uD604\uC7AC ${p.discountPercent}% \uD560\uC778(${p.salePrice}\uC5D4) \uC911\uC774\uBA70 ${d}\uAE4C\uC9C0\uC785\uB2C8\uB2E4.`,
      th: `"${p.productName}" \u0E01\u0E33\u0E25\u0E31\u0E07\u0E25\u0E14\u0E23\u0E32\u0E04\u0E32 ${p.discountPercent}% (${p.salePrice} \u0E40\u0E22\u0E19) \u0E16\u0E36\u0E07\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 ${d}`
    };
    lines.push(byLang[lang] || byLang.ja);
    lines.push(t(lang, "demoWarn"));
  } else if (top.type === "shop") {
    const byLang = {
      ja: `${top.title}\uFF1A${top.address}${top.openTime ? `\uFF0F\u55B6\u696D\u6642\u9593 ${top.openTime}` : ""}${top.phone ? `\uFF0FTEL ${top.phone}` : ""}`,
      vi: `${top.title}: ${top.address}${top.openTime ? ` \u2014 Gi\u1EDD m\u1EDF c\u1EEDa ${top.openTime}` : ""}${top.phone ? ` \u2014 \u0110T ${top.phone}` : ""}`,
      en: `${top.title}: ${top.address}${top.openTime ? ` \u2014 Open ${top.openTime}` : ""}${top.phone ? ` \u2014 Tel ${top.phone}` : ""}`,
      zh: `${top.title}\uFF1A${top.address}${top.openTime ? `\uFF0F\u8425\u4E1A\u65F6\u95F4 ${top.openTime}` : ""}${top.phone ? `\uFF0F\u7535\u8BDD ${top.phone}` : ""}`,
      ko: `${top.title}: ${top.address}${top.openTime ? ` / \uC601\uC5C5\uC2DC\uAC04 ${top.openTime}` : ""}${top.phone ? ` / \uC804\uD654 ${top.phone}` : ""}`,
      th: `${top.title}: ${top.address}${top.openTime ? ` / \u0E40\u0E27\u0E25\u0E32\u0E40\u0E1B\u0E34\u0E14 ${top.openTime}` : ""}${top.phone ? ` / \u0E42\u0E17\u0E23 ${top.phone}` : ""}`
    };
    lines.push(byLang[lang] || byLang.ja);
  } else if (top.type === "feature") {
    const byLang = {
      ja: "\u3053\u306E\u30B5\u30A4\u30C8\u3067\u306F\u3001\u4E00\u3064\u306E\u691C\u7D22\u30DC\u30C3\u30AF\u30B9\u3067\u300C\u30EC\u30B7\u30D4\u30FB\u7279\u58F2\u30FB\u5546\u54C1\u30FB\u8A18\u4E8B\u30FB\u5E97\u8217\u300D\u3092\u307E\u3068\u3081\u3066\u63A2\u305B\u307E\u3059\u3002\u30EC\u30B7\u30D4\u306FAI\u304C\u97F3\u58F0\u3067\u8AAD\u307F\u4E0A\u3052\u3001\u6750\u6599\u304B\u3089\u8CB7\u3044\u7269\u30EA\u30B9\u30C8\u3068\u58F2\u5834\u30DE\u30C3\u30D7\u3092\u81EA\u52D5\u4F5C\u6210\u3057\u307E\u3059\u3002",
      vi: 'Trang n\xE0y cho ph\xE9p t\xECm "khuy\u1EBFn m\xE3i \xB7 c\xF4ng th\u1EE9c \xB7 s\u1EA3n ph\u1EA9m \xB7 b\xE0i vi\u1EBFt \xB7 c\u1EEDa h\xE0ng" ch\u1EC9 v\u1EDBi m\u1ED9t \xF4 t\xECm ki\u1EBFm. C\xF4ng th\u1EE9c c\xF3 AI \u0111\u1ECDc b\u1EB1ng gi\u1ECDng n\xF3i, t\u1EF1 t\u1EA1o danh s\xE1ch \u0111i ch\u1EE3 v\xE0 s\u01A1 \u0111\u1ED3 qu\u1EA7y h\xE0ng.',
      en: "This site lets you search sales, recipes, products, articles and stores from a single box. Recipes can be read aloud by AI, and it builds a shopping list and store map automatically.",
      zh: "\u672C\u7F51\u7AD9\u53EF\u901A\u8FC7\u4E00\u4E2A\u641C\u7D22\u6846\u540C\u65F6\u67E5\u627E\u7279\u5356\u3001\u98DF\u8C31\u3001\u5546\u54C1\u3001\u6587\u7AE0\u548C\u95E8\u5E97\u3002\u98DF\u8C31\u652F\u6301AI\u8BED\u97F3\u6717\u8BFB\uFF0C\u5E76\u81EA\u52A8\u751F\u6210\u8D2D\u7269\u6E05\u5355\u548C\u5356\u573A\u5730\u56FE\u3002",
      ko: "\uC774 \uC0AC\uC774\uD2B8\uC5D0\uC11C\uB294 \uAC80\uC0C9\uCC3D \uD558\uB098\uB85C \uD2B9\uB9E4\xB7\uB808\uC2DC\uD53C\xB7\uC0C1\uD488\xB7\uAE30\uC0AC\xB7\uB9E4\uC7A5\uC744 \uD568\uAED8 \uCC3E\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB808\uC2DC\uD53C\uB294 AI\uAC00 \uC74C\uC131\uC73C\uB85C \uC77D\uC5B4\uC8FC\uACE0, \uC1FC\uD551 \uBAA9\uB85D\uACFC \uB9E4\uC7A5 \uC9C0\uB3C4\uB97C \uC790\uB3D9\uC73C\uB85C \uB9CC\uB4E4\uC5B4 \uC90D\uB2C8\uB2E4.",
      th: "\u0E40\u0E27\u0E47\u0E1A\u0E44\u0E0B\u0E15\u0E4C\u0E19\u0E35\u0E49\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E42\u0E1B\u0E23\u0E42\u0E21\u0E0A\u0E31\u0E19 \u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23 \u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 \u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21 \u0E41\u0E25\u0E30\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32\u0E44\u0E14\u0E49\u0E43\u0E19\u0E0A\u0E48\u0E2D\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27 \u0E2A\u0E39\u0E15\u0E23\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E21\u0E35 AI \u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E2D\u0E01\u0E40\u0E2A\u0E35\u0E22\u0E07 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E0B\u0E37\u0E49\u0E2D\u0E02\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E41\u0E1C\u0E19\u0E1C\u0E31\u0E07\u0E23\u0E49\u0E32\u0E19\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34"
    };
    lines.push(byLang[lang] || byLang.ja);
  } else {
    const intro = {
      ja: "\u95A2\u9023\u3059\u308B\u60C5\u5831\u304C\u898B\u3064\u304B\u308A\u307E\u3057\u305F\uFF1A",
      vi: "T\xF4i t\xECm th\u1EA5y th\xF4ng tin li\xEAn quan:",
      en: "I found related information:",
      zh: "\u627E\u5230\u76F8\u5173\u4FE1\u606F\uFF1A",
      ko: "\uAD00\uB828 \uC815\uBCF4\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4:",
      th: "\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E02\u0E49\u0E2D\u0E07:"
    };
    lines.push(intro[lang] || intro.ja);
    const seenTitle = /* @__PURE__ */ new Set();
    for (const h of hits) {
      if (seenTitle.has(h.title)) continue;
      seenTitle.add(h.title);
      lines.push(`\u30FB${h.title}\uFF08${h.typeLabel}\uFF09`);
      if (seenTitle.size >= 3) break;
    }
  }
  return { answer: lines.join("\n"), mode: "rule" };
}
async function aiAnswer(question, lang, hits) {
  var _a, _b;
  const cfg = useRuntimeConfig();
  if (!cfg.anthropicApiKey) return null;
  const context = hits.map((h, i) => `[${i + 1}] ${h.title}\uFF08${h.typeLabel}\uFF09
URL: ${h.route}
${(h.snippet || "").slice(0, 300)}`).join("\n\n");
  const langName = { ja: "\u65E5\u672C\u8A9E", vi: "Ti\u1EBFng Vi\u1EC7t", en: "English", zh: "\u4E2D\u6587", ko: "\uD55C\uAD6D\uC5B4", th: "\u0E44\u0E17\u0E22" }[lang] || "\u65E5\u672C\u8A9E";
  const system = [
    "B\u1EA1n l\xE0 tr\u1EE3 l\xFD c\u1EE7a website si\xEAu th\u1ECB \u9060\u9244\u30B9\u30C8\u30A2 (Entetsu Store).",
    `TR\u1EA2 L\u1EDCI B\u1EB0NG ${langName}. Ng\u01B0\u1EDDi d\xF9ng h\u1ECFi b\u1EB1ng ng\xF4n ng\u1EEF n\xE0y, ph\u1EA3i \u0111\xE1p \u0111\xFAng ng\xF4n ng\u1EEF \u0111\xF3 d\xF9 t\xE0i li\u1EC7u g\u1ED1c l\xE0 ti\u1EBFng Nh\u1EADt.`,
    "CH\u1EC8 d\xF9ng th\xF4ng tin trong ph\u1EA7n T\xC0I LI\u1EC6U d\u01B0\u1EDBi \u0111\xE2y. Tuy\u1EC7t \u0111\u1ED1i KH\xD4NG b\u1ECBa.",
    "N\u1EBFu t\xE0i li\u1EC7u kh\xF4ng \u0111\u1EE7 \u0111\u1EC3 tr\u1EA3 l\u1EDDi, h\xE3y n\xF3i th\u1EB3ng l\xE0 kh\xF4ng t\xECm th\u1EA5y.",
    "V\u1EDBi c\xE2u h\u1ECFi v\u1EC1 gi\xE1, t\u1ED3n kho, d\u1ECB \u1EE9ng, h\u1EA1n s\u1EED d\u1EE5ng: KH\xD4NG \u0111o\xE1n, h\u01B0\u1EDBng d\u1EABn kh\xE1ch h\u1ECFi tr\u1EF1c ti\u1EBFp c\u1EEDa h\xE0ng.",
    "Gi\xE1 v\xE0 dinh d\u01B0\u1EE1ng trong t\xE0i li\u1EC7u l\xE0 D\u1EEE LI\u1EC6U DEMO \u2014 ph\u1EA3i n\xF3i r\xF5 \u0111i\u1EC1u \u0111\xF3 khi nh\u1EAFc t\u1EDBi.",
    "Tr\u1EA3 l\u1EDDi ng\u1EAFn g\u1ECDn, t\u1ED1i \u0111a 4 c\xE2u."
  ].join("\n");
  try {
    const res = await $fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": String(cfg.anthropicApiKey),
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
      },
      body: {
        model: cfg.anthropicModel || "claude-sonnet-5",
        max_tokens: 600,
        system,
        messages: [{ role: "user", content: `T\xC0I LI\u1EC6U:
${context}

C\xC2U H\u1ECEI: ${question}` }]
      },
      timeout: 2e4
    });
    const text = (_b = (_a = res == null ? void 0 : res.content) == null ? void 0 : _a[0]) == null ? void 0 : _b.text;
    return text ? { answer: String(text).trim(), mode: "ai" } : null;
  } catch (e) {
    console.warn("[chat] Claude kh\xF4ng d\xF9ng \u0111\u01B0\u1EE3c, chuy\u1EC3n sang rule-based:", (e == null ? void 0 : e.message) || e);
    return null;
  }
}
const chat_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const question = String((body == null ? void 0 : body.message) || "").slice(0, 500).trim();
  const prev = (body == null ? void 0 : body.context) || null;
  if (!question) {
    throw createError({ statusCode: 400, statusMessage: "message tr\u1ED1ng" });
  }
  const lang = detectLang(question);
  const talk = smallTalkKind(question);
  if (talk) {
    const pack = SMALLTALK[lang] || SMALLTALK.ja;
    return {
      lang,
      mode: "rule",
      kind: talk,
      answer: pack[talk],
      // Sau lời chào thì gợi ý luôn để người dùng biết hỏi được gì
      suggestions: talk === "bye" ? [] : SUGGESTIONS[lang] || SUGGESTIONS.ja,
      sources: []
    };
  }
  let intent = detectIntent(question);
  let filters = detectFilters(question);
  let effectiveQuestion = question;
  const follow = isFollowUp(question);
  let skipIds = [];
  if (follow && (prev == null ? void 0 : prev.question)) {
    effectiveQuestion = prev.question;
    intent = detectIntent(prev.question);
    filters = detectFilters(prev.question);
    skipIds = Array.isArray(prev.shownIds) ? prev.shownIds : [];
  } else if (follow) {
    return {
      lang,
      mode: "rule",
      guard: "need-context",
      answer: t(lang, "notFound") + String.fromCharCode(10) + (NOT_FOUND_HINT[lang] || NOT_FOUND_HINT.ja),
      suggestions: SUGGESTIONS[lang] || SUGGESTIONS.ja,
      sources: []
    };
  }
  if (isOutOfScope(question)) {
    return {
      lang,
      mode: "rule",
      guard: "out-of-scope",
      answer: t(lang, "outOfScope"),
      suggestions: SUGGESTIONS[lang] || SUGGESTIONS.ja,
      sources: []
    };
  }
  const store = getStore();
  const askedShop = extractShopName(question);
  if (askedShop) {
    const shops = store.docs.filter((d) => d.type === "shop");
    const found = shops.filter(
      (d) => normalizeJa(d.title).includes(normalizeJa(askedShop.replace(/店$/, "")))
    );
    if (!found.length) {
      return {
        lang,
        mode: "rule",
        guard: "shop-not-found",
        answer: notFoundShop(lang, askedShop, shops.length),
        suggestions: SUGGESTIONS[lang] || SUGGESTIONS.ja,
        sources: [{ title: "\u5E97\u8217\u4E00\u89A7", route: "/shop/", type: "\u30DA\u30FC\u30B8" }]
      };
    }
    const attr = shopAttribute(question);
    if (found.length === 1 && attr) {
      return {
        lang,
        mode: "rule",
        intent: "shop",
        answer: shopAttrAnswer(lang, found[0], attr),
        sources: [{ title: found[0].title, route: found[0].route, type: "\u5E97\u8217" }]
      };
    }
  }
  const askingBudgetOnly = !!filters.budget && (filters.budgetOnly || !filters.budgetRest || !looksLikeKeyword(store.docs, filters.budgetRest, toJapaneseKeywords(filters.budgetRest)));
  if (askingBudgetOnly && (intent == null ? void 0 : intent.key) !== "promo" && (intent == null ? void 0 : intent.key) !== "shop") {
    intent = INTENTS.find((i) => i.key === "recipe") || intent;
  }
  if (filters.budget) {
    const b = filters.budget;
    const costs = [...store.costById.values()].filter((c) => c.confidence >= 60);
    const fits = costs.filter((c) => c.total >= b.min && c.total <= b.max);
    if (costs.length && !fits.length) {
      const cheapest = Math.min(...costs.map((c) => c.total));
      return {
        lang,
        mode: "rule",
        intent: "recipe",
        guard: "over-budget",
        answer: overBudgetAnswer(lang, b, cheapest),
        suggestions: SUGGESTIONS[lang] || SUGGESTIONS.ja,
        sources: []
      };
    }
  }
  if ((intent == null ? void 0 : intent.key) === "stock") {
    const product = findProductInQuestion(effectiveQuestion, store);
    if (product) {
      const shops = shopsSelling(product, { area: null, limit: 12 });
      const inArea = filters.areaWord ? shops.filter((s) => String(s.address || "").includes(filters.areaWord)) : shops;
      const list = (inArea.length ? inArea : shops).slice(0, 4);
      if (list.length) {
        return {
          lang,
          mode: "rule",
          intent: "stock",
          answer: stockAnswer(lang, product, list, filters.areaWord),
          sources: list.map((s) => ({ title: s.title, route: s.route, type: "\u5E97\u8217" }))
        };
      }
    }
  }
  const counting = countQuestion(question);
  if (counting && counting !== "any") {
    const total = counting === "shop" ? store.docs.filter((d) => d.type === "shop").length : counting === "recipe" ? store.docs.filter((d) => d.type === "recipe").length : activePromos().length;
    return {
      lang,
      mode: "rule",
      intent: counting,
      guard: "count",
      answer: countAnswer(lang, counting, total),
      sources: []
    };
  }
  let hits = retrieve(effectiveQuestion, intent, filters, follow ? 16 : 8);
  if (skipIds.length) {
    const rest = hits.filter((h) => !skipIds.includes(h.id));
    if (!rest.length) {
      return {
        lang,
        mode: "rule",
        guard: "no-more",
        answer: noMore(lang),
        suggestions: SUGGESTIONS[lang] || SUGGESTIONS.ja,
        sources: []
      };
    }
    hits = rest;
  }
  if (needsStoreContact(question)) {
    return {
      lang,
      mode: "rule",
      guard: "store-contact",
      answer: t(lang, "askStore"),
      sources: hits.slice(0, 3).map((h) => ({ title: h.title, route: h.route, type: h.typeLabel }))
    };
  }
  const ai = await aiAnswer(question, lang, hits);
  const result = ai || ruleAnswer(question, lang, hits, (intent == null ? void 0 : intent.key) || null, hits.length);
  return {
    lang,
    intent: (intent == null ? void 0 : intent.key) || null,
    // Client giữ lại và gửi kèm lượt sau, để hiểu 「他には？」
    context: {
      question: effectiveQuestion,
      shownIds: [...skipIds, ...hits.slice(0, 4).map((h) => h.id)]
    },
    filters: Object.keys(filters).length ? filters : void 0,
    ...result,
    // Bắt buộc trích nguồn có link (Yêu cầu 4)
    sources: dedupeByRoute(hits).slice(0, 4).map((h) => ({
      title: h.title,
      route: h.route,
      type: h.typeLabel
    }))
  };
});

export { chat_post as default };
//# sourceMappingURL=chat.post.mjs.map
