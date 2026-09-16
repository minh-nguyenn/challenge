/**
 * Chuẩn hoá chữ Nhật cho tìm kiếm.
 *
 * Đây là lý do CHÍNH phải tự dựng index thay vì dùng `q` của microCMS:
 * microCMS tìm khớp chuỗi con, không có bảng đồng nghĩa. Đã đo trên dữ liệu thật:
 *
 *     q=うなぎ  -> 10 kết quả   (dữ liệu chỉ lưu dạng hiragana)
 *     q=ウナギ  ->  0 kết quả
 *     q=ｳﾅｷﾞ   ->  0 kết quả
 *     q=鰻     ->  0 kết quả
 *
 * Yêu cầu 6 của đề bài đòi うなぎ = ウナギ = ｳﾅｷﾞ = 鰻 phải ra cùng kết quả,
 * nên phải tự chuẩn hoá ở phía mình.
 */

/** Bảng kanji ↔ kana cho từ thực phẩm hay gặp ở siêu thị.
 *  microCMS không có bảng này; muốn 鰻 = うなぎ thì phải tự khai. */
const KANJI_KANA = {
  鰻: 'うなぎ',
  鮪: 'まぐろ',
  鮭: 'さけ',
  鯖: 'さば',
  鰤: 'ぶり',
  鯛: 'たい',
  鰹: 'かつお',
  鱈: 'たら',
  鮎: 'あゆ',
  鰯: 'いわし',
  秋刀魚: 'さんま',
  海老: 'えび',
  蟹: 'かに',
  烏賊: 'いか',
  蛸: 'たこ',
  帆立: 'ほたて',
  牡蠣: 'かき',
  浅蜊: 'あさり',
  蜆: 'しじみ',
  玉葱: 'たまねぎ',
  人参: 'にんじん',
  大根: 'だいこん',
  白菜: 'はくさい',
  馬鈴薯: 'じゃがいも',
  甘藷: 'さつまいも',
  南瓜: 'かぼちゃ',
  茄子: 'なす',
  胡瓜: 'きゅうり',
  蓮根: 'れんこん',
  牛蒡: 'ごぼう',
  生姜: 'しょうが',
  大蒜: 'にんにく',
  葱: 'ねぎ',
  韮: 'にら',
  菠薐草: 'ほうれんそう',
  小松菜: 'こまつな',
  椎茸: 'しいたけ',
  舞茸: 'まいたけ',
  占地: 'しめじ',
  筍: 'たけのこ',
  枝豆: 'えだまめ',
  西瓜: 'すいか',
  苺: 'いちご',
  蜜柑: 'みかん',
  林檎: 'りんご',
  葡萄: 'ぶどう',
  桃: 'もも',
  梨: 'なし',
  柿: 'かき',
  栗: 'くり',
  卵: 'たまご',
  豆腐: 'とうふ',
  納豆: 'なっとう',
  味噌: 'みそ',
  醤油: 'しょうゆ',
  砂糖: 'さとう',
  塩: 'しお',
  酢: 'す',
  米: 'こめ',
  麦: 'むぎ',
  蕎麦: 'そば',
  饂飩: 'うどん',
  牛肉: 'ぎゅうにく',
  豚肉: 'ぶたにく',
  鶏肉: 'とりにく',
  挽肉: 'ひきにく',
  鶏: 'とり',
  豚: 'ぶた',
  牛: 'うし',
};

/** Chuyển katakana → hiragana (dải U+30A1–U+30F6) */
export function kataToHira(s) {
  return s.replace(/[ァ-ヶ]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0x60)
  )
}

/**
 * Chuẩn hoá một chuỗi về "dạng tra cứu":
 *   NFKC (gộp ｳﾅｷﾞ nửa chiều rộng → ウナギ, Ａ→A, １→1)
 *   → thường hoá chữ Latin
 *   → kanji thực phẩm → kana
 *   → katakana → hiragana
 *   → bỏ khoảng trắng và dấu câu
 *
 * Nhờ vậy うなぎ / ウナギ / ｳﾅｷﾞ / 鰻 đều cho ra cùng một chuỗi "うなぎ".
 */
export function normalizeJa(input) {
  if (!input) return ''
  let s = String(input).normalize('NFKC').toLowerCase();

  // kanji → kana: thay từ dài trước để 秋刀魚 không bị 魚 cắt mất
  const keys = Object.keys(KANJI_KANA).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    if (s.includes(k)) s = s.split(k).join(KANJI_KANA[k]);
  }

  s = kataToHira(s);
  // bỏ khoảng trắng, dấu câu, ký tự trang trí — giữ chữ và số
  s = s.replace(/[\s　]+/g, '');
  // KHÔNG bỏ dấu trường âm ー: nó mang nghĩa thật.
  // Đã đo: bỏ đi thì カレー → かれ, khớp nhầm かれい (cá bơn) và bị chấm điểm
  // cao nhất, đẩy các món cà ri thật xuống dưới.
  s = s.replace(/[・･、。，．,.\-−〜~!！?？"'’“”()（）\[\]【】「」『』:;：；/／\\|]+/g, '');
  return s
}

/**
 * Cắt chuỗi Nhật thành các đoạn n-gram để tìm khớp một phần.
 * Tiếng Nhật không có khoảng trắng giữa từ nên tách theo n-gram là cách đơn giản
 * và đủ tốt; n=2 là mức cân bằng giữa độ chính xác và kích thước index.
 */
export function bigrams(s, n = 2) {
  const t = normalizeJa(s);
  if (t.length < n) return t ? [t] : []
  const out = [];
  for (let i = 0; i <= t.length - n; i++) out.push(t.slice(i, i + n));
  return out
}
