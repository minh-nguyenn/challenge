import { c as stripLatinMarks } from './chat-lang.mjs';

/**
 * Hieu Y DINH cua cau hoi khong co tu khoa cu the.
 *
 * 「trưa nay ăn gì」「các món ăn mùa thu」「đặc sản hokkaido」「秋の料理」 deu ra 0
 * ket qua: tim theo chu thi khong tai lieu nao chua dung cac tu do, trong khi
 * khach dang hoi mot dieu rat ro — goi y mon an trua / mon theo mua / dac san.
 *
 * Moi y dinh doi ra mot nhom tu khoa tieng Nhat co that trong du lieu (da do so
 * ket qua tung tu), va mot nhan de trang ket qua noi ro 「…として検索しました」.
 * Viet tay, khong can AI — du cho cac cach hoi hay gap.
 */

/** Ten vung viet Latin -> tieng Nhat. Dung cho 「đặc sản hokkaido」 「hokkaido specialty」 */
const REGIONS = {
  hokkaido: '北海道', 'bac hai dao': '北海道',
  shizuoka: '静岡', hamamatsu: '浜松', hamanako: '浜名湖', 'ho hamana': '浜名湖',
  enshu: '遠州', okinawa: '沖縄', kyushu: '九州', kagoshima: '鹿児島',
  tokyo: '東京', osaka: '大阪', kyoto: '京都', nagoya: '名古屋', aichi: '愛知',
  aomori: '青森', akita: '秋田', niigata: '新潟', shinshu: '信州', nagano: '長野',
};
const REGION_JA = ['北海道', '静岡', '浜松', '浜名湖', '遠州', '沖縄', '九州', '鹿児島', '東京', '大阪', '京都', '名古屋', '愛知', '青森', '秋田', '新潟', '信州', '長野'];

// Mon trua: nhanh, mot dia — 丼・麺・チャーハン・お弁当 (moi tu deu co 10–40 mon)
const LUNCH = ['丼', 'うどん', 'パスタ', 'チャーハン', '麺', '弁当'];

// Nguyen lieu theo mua — giong banner 季節のおすすめ o thanh tim kiem.
// Khong dung 「栗」: mot chu Han nen khop lan sang 「クリーム」 (224 ket qua nhieu).
const SEASONS = {
  spring: { label: '春の料理', terms: ['春', '菜の花', 'たけのこ', '新玉ねぎ', 'キャベツ'] },
  summer: { label: '夏の料理', terms: ['夏', 'うなぎ', 'トマト', 'なす', 'きゅうり'] },
  autumn: { label: '秋の味覚', terms: ['秋', 'さんま', 'きのこ', 'さつまいも', 'かぼちゃ'] },
  winter: { label: '冬の料理', terms: ['鍋', '白菜', '大根', 'ぶり'] },
};

const SEASON_PATTERNS = [
  ['spring', /mua xuan|\bspring\b|春/],
  ['summer', /mua he|\bsummer\b|夏/],
  ['autumn', /mua thu|\bautumn\b|\bfall\b|秋(?!田)/],
  ['winter', /mua dong|\bwinter\b|冬/],
];

const LUNCH_RE = /\b(bua )?trua\b|\blunch\b|昼ごはん|昼ご飯|昼食|お昼|ランチ|午餐|점심/;
const SPECIALTY_RE = /dac san|dac trung|\bspecialt(y|ies)\b|\blocal food\b|特産|名産|ご当地|名物|土産/;

/**
 * Tra ve { kind, label, terms, types } hoac null.
 * `types` gioi han nhom ket qua: hoi mon an thi chi lay cong thuc + KM + san pham,
 * de bai viet khuyen mai 「ランチご招待キャンペーン」 khong chen len dau.
 */
function detectIntent(q) {
  const raw = String(q || '').toLowerCase();
  const s = stripLatinMarks(raw);

  // 1. Dac san theo vung: co vung thi tim dung vung do
  const regions = [
    ...Object.entries(REGIONS).filter(([k]) => new RegExp('\\b' + k + '\\b').test(s)).map(([, v]) => v),
    ...REGION_JA.filter((r) => raw.includes(r)),
  ];
  const uniqRegions = [...new Set(regions)];
  if (SPECIALTY_RE.test(s)) {
    return uniqRegions.length
      ? { kind: 'specialty', label: `${uniqRegions.join('・')}の特産・ご当地`, terms: uniqRegions, types: null }
      : { kind: 'specialty', label: '特産・ご当地の味', terms: ['浜名湖', '遠州', '特産', '産地', 'ご当地'], types: null }
  }
  // Chi go ten vung bang chu Latin (「hokkaido」) cung dich luon
  if (uniqRegions.length && !REGION_JA.some((r) => raw.includes(r))) {
    return { kind: 'region', label: uniqRegions.join('・'), terms: uniqRegions, types: null }
  }

  // 2. Mon theo mua
  for (const [key, re] of SEASON_PATTERNS) {
    if (re.test(s)) {
      const season = SEASONS[key];
      return { kind: 'season', label: season.label, terms: season.terms, types: ['recipe', 'promo', 'product'] }
    }
  }

  // 3. Bua trua
  if (LUNCH_RE.test(s)) {
    return { kind: 'lunch', label: 'お昼ごはん（丼・麺・お弁当など）', terms: LUNCH, types: ['recipe', 'promo', 'product'] }
  }

  return null
}

export { REGIONS as R, detectIntent as d };
//# sourceMappingURL=search-intent.mjs.map
