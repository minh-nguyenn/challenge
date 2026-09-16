/**
 * Phân loại nguyên liệu → 売場 (quầy trong siêu thị).
 *
 * Dùng cho: danh sách đi chợ (slide 6) và sơ đồ 売場 tự highlight (slide 7).
 *
 * Đây là bảng tra bằng từ khoá, KHÔNG phải AI — chạy được cả khi không có
 * ANTHROPIC_API_KEY, đúng ràng buộc "web không được chết vì AI".
 */

/** Danh sách quầy — thứ tự bám theo lối đi thường gặp trong siêu thị Nhật */
export const URIBA = [
  { key: 'seika', label: '青果', color: '#4CAF50', desc: '野菜・果物' },
  { key: 'sengyo', label: '鮮魚', color: '#03A9F4', desc: '魚・刺身' },
  { key: 'seiniku', label: '精肉', color: '#E53935', desc: '肉・肉加工品' },
  { key: 'nippai', label: '日配', color: '#FFB300', desc: '牛乳・卵・豆腐・納豆' },
  { key: 'sozai', label: '惣菜', color: '#FF7043', desc: 'お弁当・揚げ物' },
  { key: 'bakery', label: 'ベーカリー', color: '#8D6E63', desc: 'パン' },
  { key: 'grocery', label: 'グロサリー', color: '#7E57C2', desc: '調味料・乾物・缶詰' },
  { key: 'reito', label: '冷凍', color: '#26C6DA', desc: '冷凍食品・アイス' },
  { key: 'drink', label: '飲料', color: '#009688', desc: 'お茶・ジュース・酒' },
];

export const URIBA_BY_KEY = Object.fromEntries(URIBA.map((u) => [u.key, u]))

/**
 * Từ khoá nhận diện từng quầy.
 * Xếp từ CỤ THỂ đến CHUNG CHUNG: 'ひき肉' phải xét trước '肉',
 * '豆腐' trước '豆', nếu không sẽ phân loại sai.
 */
const RULES = [
  // --- ベーカリー đặt ĐẦU TIÊN ---
  // Đã đo: để sau 日配 thì 'ロイヤルバターロール' khớp 'バター' → vào nhầm 日配.
  // Tên bánh mì hay chứa tên nguyên liệu khác nên phải xét trước.
  ['bakery', ['食パン', 'バゲット', 'フランスパン', 'ロールパン', 'バターロール',
    'クロワッサン', 'ナン', 'トルティーヤ', 'ベーグル', 'マフィン', 'ドッグパン']],

  // --- 日配 (đặt trước 精肉/青果 vì 卵/豆腐 dễ bị bắt nhầm) ---
  ['nippai', ['牛乳', '生クリーム', 'ヨーグルト', 'チーズ', 'バター', 'マーガリン',
    '卵', 'たまご', 'タマゴ', '豆腐', 'とうふ', '納豆', '油揚げ', '厚揚げ', 'がんもどき',
    'こんにゃく', 'しらたき', 'ちくわ', 'かまぼこ', 'はんぺん', 'さつま揚げ',
    'キムチ', '漬物', 'うどん', '焼きそば', '中華麺', '餃子の皮', 'ピザ生地']],

  // --- 精肉 ---
  ['seiniku', ['ひき肉', '挽肉', 'ミンチ', '牛肉', '豚肉', '鶏肉', '鶏もも', '鶏むね',
    'ささみ', '手羽', 'バラ肉', 'ロース', 'もも肉', 'むね肉', 'ステーキ', 'ベーコン',
    'ソーセージ', 'ウインナー', 'ハム', '生ハム', '豚こま', '牛こま', '合いびき',
    'レバー', 'ラム', '鴨', '肉']],

  // --- 鮮魚 ---
  ['sengyo', ['うなぎ', 'まぐろ', 'マグロ', 'さけ', '鮭', 'サーモン', 'さば', 'サバ',
    'ぶり', 'ブリ', 'たい', '鯛', 'かつお', 'たら', 'タラ', 'あじ', 'アジ', 'いわし',
    'さんま', 'ほっけ', 'かれい', 'ひらめ', 'えび', 'エビ', '海老', 'かに', 'カニ',
    'いか', 'イカ', 'たこ', 'タコ', 'ほたて', 'あさり', 'しじみ', 'かき', '牡蠣',
    'しらす', 'ちりめん', '明太子', 'たらこ', '刺身', '切り身', '魚']],

  // --- 青果 ---
  ['seika', ['玉ねぎ', 'たまねぎ', '玉葱', '長ねぎ', '青ねぎ', '小ねぎ', '細ねぎ', 'ねぎ',
    'にんじん', '人参', 'じゃがいも', 'さつまいも', '大根', 'だいこん', 'キャベツ',
    '白菜', 'はくさい', 'レタス', 'トマト', 'きゅうり', 'なす', 'ナス', 'ピーマン',
    'パプリカ', 'ブロッコリー', 'カリフラワー', 'ほうれん草', '小松菜', '水菜',
    'かぼちゃ', 'ごぼう', 'れんこん', 'アスパラ', 'オクラ', 'ズッキーニ', 'セロリ',
    'にんにく', 'しょうが', '生姜', 'みょうが', '大葉', 'しそ', 'パセリ', '三つ葉',
    'もやし', '豆苗', '枝豆', 'そら豆', 'とうもろこし', 'コーン',
    'しめじ', 'えのき', 'まいたけ', 'エリンギ', 'しいたけ', 'マッシュルーム', 'きのこ',
    'りんご', 'バナナ', 'みかん', 'オレンジ', 'レモン', 'ゆず', 'すだち', 'いちご',
    'ぶどう', 'メロン', 'すいか', '桃', '梨', '柿', 'キウイ', 'アボカド',
    'ミニトマト', '長芋', '里芋', 'かぶ', 'たけのこ', 'ニラ', 'にら', 'チンゲン菜']],

  // パン粉 là đồ khô ở グロサリー, không phải bánh mì — phải xét TRƯỚC quy tắc 'パン'
  ['grocery', ['パン粉']],

  // --- ベーカリー (mọi thứ còn lại có chữ パン) ---
  ['bakery', ['パン']],

  // --- 冷凍 ---
  ['reito', ['冷凍', 'アイス', 'シューマイ', '冷凍うどん']],

  // --- 飲料 ---
  ['drink', ['牛乳パック', 'ジュース', 'お茶', '緑茶', '紅茶', 'コーヒー', 'ワイン',
    'ビール', '日本酒', '炭酸水', '水']],

  // --- 惣菜 ---
  ['sozai', ['惣菜', '弁当', 'コロッケ', '天ぷら', '唐揚げ']],

  // --- グロサリー (bắt cuối, gồm mọi gia vị và đồ khô) ---
  ['grocery', ['しょうゆ', '醤油', 'みそ', '味噌', '塩', 'こしょう', '砂糖', '酢', 'みりん',
    '酒', '料理酒', 'サラダ油', 'ごま油', 'オリーブオイル', 'ラー油', '揚げ油', '油',
    '片栗粉', '小麦粉', '薄力粉', '強力粉', 'パン粉', 'だし', 'コンソメ', '鶏がら',
    'ケチャップ', 'マヨネーズ', 'ソース', 'ドレッシング', 'めんつゆ', 'ポン酢',
    'オイスターソース', 'カレー粉', 'カレールー', 'ルー', '豆板醤', 'コチュジャン',
    'わさび', 'からし', '七味', '一味', 'ごま', 'のり', '海苔', 'わかめ', 'ひじき',
    '昆布', 'かつお節', '干し椎茸', '春雨', 'パスタ', 'スパゲティ', 'マカロニ',
    'そば', 'そうめん', '米', 'ご飯', 'ごはん', 'もち', '缶詰', 'ツナ', 'トマト缶',
    'はちみつ', 'バニラ', 'ベーキングパウダー', 'ゼラチン', 'ナッツ', 'レーズン',
    'スープの素', '中華スープ', 'つゆ', 'たれ', 'ジャム', '練りごま', '豆']],
];

/**
 * Đoán quầy của một nguyên liệu.
 * Trả về key của quầy, mặc định 'grocery' (gia vị/đồ khô) nếu không nhận ra.
 */
export function uribaOf(ingredientName) {
  if (!ingredientName) return 'grocery'

  // Bỏ tiền tố nhóm gia vị kiểu "A）しょうゆ", "A. 酒", "B) 水"
  let n = String(ingredientName)
    .replace(/^[A-Za-z][）)．.、,]\s*/, '')
    .replace(/[（(].*?[）)]/g, '')
    .trim();

  for (const [key, words] of RULES) {
    for (const w of words) {
      if (n.includes(w)) return key
    }
  }
  return 'grocery'
}

/**
 * Nhóm danh sách nguyên liệu theo quầy — đúng thứ tự lối đi trong siêu thị,
 * để khách đi một vòng là mua đủ.
 */
export function groupByUriba(ingredients) {
  const map = new Map();
  for (const ing of ingredients) {
    const name = typeof ing === 'string' ? ing : ing.name;
    const amount = typeof ing === 'string' ? '' : ing.amount || '';
    const key = uribaOf(name);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push({ name, amount });
  }
  return URIBA.filter((u) => map.has(u.key)).map((u) => ({
    ...u,
    items: map.get(u.key),
  }))
}
