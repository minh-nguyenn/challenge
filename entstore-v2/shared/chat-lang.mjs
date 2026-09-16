/**
 * Nhận diện ngôn ngữ người dùng gõ (Yêu cầu 4).
 *
 * Làm bằng dải Unicode + từ khoá, KHÔNG cần AI — vì tài khoản Claude có thể
 * hết credit, mà web không được chết vì AI.
 *
 * Hỗ trợ: Nhật / Việt / Anh / Trung / Hàn / Thái
 */


/**
 * Đoán ngôn ngữ của một câu.
 *
 * Thứ tự xét quan trọng: kana (hiragana/katakana) chỉ có ở tiếng Nhật nên
 * xét trước; nếu chỉ có kanji mà không có kana thì nhiều khả năng là tiếng Trung.
 */
export function detectLang(text) {
  const s = String(text || '');
  if (!s.trim()) return 'ja'

  const has = (re) => re.test(s);
  const count = (re) => (s.match(re) || []).length;

  // Hangul → tiếng Hàn (dải riêng, không lẫn với ngôn ngữ khác)
  if (has(/[가-힯ᄀ-ᇿ]/)) return 'ko'

  // Thái (dải riêng)
  if (has(/[฀-๿]/)) return 'th'

  // Kana → chắc chắn tiếng Nhật
  if (has(/[぀-ゟ゠-ヿ]/)) return 'ja'

  // Có kanji nhưng KHÔNG có kana → tiếng Trung
  if (has(/[一-鿿]/)) return 'zh'

  // Dấu tiếng Việt
  if (has(/[ăâđêôơưĂÂĐÊÔƠƯàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/i)) {
    return 'vi'
  }

  // Tiếng Việt không dấu: nhận bằng từ thông dụng
  const viWords = /\b(cua|hang|gio|mo|dong|bao|nhieu|tim|kiem|san|pham|khuyen|mai|dia|chi|cach|nao|khong|duoc|ban|toi|mua|gia)\b/i;
  if (count(viWords) >= 2) return 'vi'

  return 'en'
}

/** Chuỗi giao diện / câu mẫu theo từng ngôn ngữ */
const T = {
  ja: {
    greeting: 'こんにちは！遠鉄ストアについて何でもお聞きください。',
    notFound: '申し訳ございません。その情報は見つかりませんでした。',
    outOfScope: '申し訳ございません。遠鉄ストアのウェブサイトに関するご質問にのみお答えできます。',
    askStore: '価格・在庫・アレルギー・賞味期限については、正確な情報をご利用店舗に直接お問い合わせください。',
    sources: '参考ページ',
    demoWarn: '※ 価格・栄養成分はデモ用の仮データです。',
    placeholder: '質問を入力してください',
    title: '遠鉄ストア AIアシスタント',
  },
  vi: {
    greeting: 'Xin chào! Hãy hỏi tôi bất cứ điều gì về siêu thị Entetsu Store.',
    notFound: 'Xin lỗi, tôi không tìm thấy thông tin đó.',
    outOfScope: 'Xin lỗi, tôi chỉ trả lời được câu hỏi về website của Entetsu Store.',
    askStore: 'Về giá, tồn kho, dị ứng và hạn sử dụng, vui lòng hỏi trực tiếp cửa hàng để có thông tin chính xác.',
    sources: 'Nguồn tham khảo',
    demoWarn: '※ Giá và dinh dưỡng là dữ liệu demo, không phải số thật.',
    placeholder: 'Nhập câu hỏi của bạn',
    title: 'Trợ lý AI Entetsu Store',
  },
  en: {
    greeting: 'Hello! Ask me anything about Entetsu Store.',
    notFound: 'Sorry, I could not find that information.',
    outOfScope: 'Sorry, I can only answer questions about the Entetsu Store website.',
    askStore: 'For prices, stock, allergies and expiry dates, please ask the store directly for accurate information.',
    sources: 'Sources',
    demoWarn: '* Prices and nutrition figures are demo data, not real values.',
    placeholder: 'Type your question',
    title: 'Entetsu Store AI Assistant',
  },
  zh: {
    greeting: '您好！关于远铁超市，有什么可以帮您？',
    notFound: '抱歉，未找到相关信息。',
    outOfScope: '抱歉，我只能回答与远铁超市网站相关的问题。',
    askStore: '关于价格、库存、过敏原和保质期，请直接咨询门店以获得准确信息。',
    sources: '参考页面',
    demoWarn: '※ 价格和营养成分为演示数据，并非真实数值。',
    placeholder: '请输入您的问题',
    title: '远铁超市 AI 助手',
  },
  ko: {
    greeting: '안녕하세요! 엔테츠 스토어에 대해 무엇이든 물어보세요.',
    notFound: '죄송합니다. 해당 정보를 찾을 수 없습니다.',
    outOfScope: '죄송합니다. 엔테츠 스토어 웹사이트 관련 질문만 답변할 수 있습니다.',
    askStore: '가격, 재고, 알레르기, 유통기한은 정확한 정보를 위해 매장에 직접 문의해 주세요.',
    sources: '참고 페이지',
    demoWarn: '※ 가격과 영양 성분은 데모용 임시 데이터입니다.',
    placeholder: '질문을 입력하세요',
    title: '엔테츠 스토어 AI 어시스턴트',
  },
  th: {
    greeting: 'สวัสดีค่ะ! สอบถามเกี่ยวกับ Entetsu Store ได้เลยค่ะ',
    notFound: 'ขออภัย ไม่พบข้อมูลดังกล่าว',
    outOfScope: 'ขออภัย ตอบได้เฉพาะคำถามเกี่ยวกับเว็บไซต์ Entetsu Store เท่านั้น',
    askStore: 'สำหรับราคา สต็อก สารก่อภูมิแพ้ และวันหมดอายุ กรุณาสอบถามที่ร้านโดยตรง',
    sources: 'แหล่งอ้างอิง',
    demoWarn: '※ ราคาและข้อมูลโภชนาการเป็นข้อมูลตัวอย่าง',
    placeholder: 'พิมพ์คำถามของคุณ',
    title: 'ผู้ช่วย AI ของ Entetsu Store',
  },
};

export function t(lang, key) {
  return (T[lang] || T.ja)[key] || T.ja[key]
}

/**
 * Từ điển từ khoá ngoại ngữ → tiếng Nhật.
 *
 * Cần vì index chỉ có tiếng Nhật: đã đo, câu hỏi tiếng Việt
 * "Khuyến mãi lươn đến bao giờ?" tách ra được [khuyến, lươn, mãi] nhưng khớp
 * 0 tài liệu. Dịch sang [特売, うなぎ] thì tìm được ngay.
 *
 * Chỉ gồm từ hay dùng ở siêu thị — đủ cho phần lớn câu hỏi, và không cần AI.
 */
const KEYWORD_MAP = {
  // khuyến mãi
  'khuyến mãi': '特売', 'khuyen mai': '特売', 'giảm giá': '特売', 'sale': '特売',
  'discount': '特売', 'promotion': '特売', 'on sale': '特売',
  '特卖': '特売', '打折': '特売', '할인': '特売', '세일': '特売', 'ลดราคา': '特売',

  // thực phẩm
  'lươn': 'うなぎ', 'luon': 'うなぎ', 'eel': 'うなぎ', '鳗鱼': 'うなぎ', '장어': 'うなぎ',
  'thịt bò': '牛肉', 'beef': '牛肉', '牛肉': '牛肉', '소고기': '牛肉',
  'thịt heo': '豚肉', 'thịt lợn': '豚肉', 'pork': '豚肉', '猪肉': '豚肉',
  'thịt gà': '鶏肉', 'chicken': '鶏肉', '鸡肉': '鶏肉', '닭고기': '鶏肉',
  'cá': '魚', 'fish': '魚', '鱼': '魚', '생선': '魚',
  'tôm': 'えび', 'shrimp': 'えび', 'prawn': 'えび', '虾': 'えび',
  'rau': '野菜', 'vegetable': '野菜', '蔬菜': '野菜', '야채': '野菜',
  'cà chua': 'トマト', 'tomato': 'トマト', '西红柿': 'トマト',
  // Mấy từ bắt đầu bằng "cà/ca" phải khai riêng, nếu không 「cà rốt」 sẽ khớp
  // nhầm vào 'cá' → ra kết quả cá thay vì cà rốt
  'cà rốt': 'にんじん', 'carrot': 'にんじん', '胡萝卜': 'にんじん', '당근': 'にんじん',
  'cà tím': 'なす', 'eggplant': 'なす', '茄子': 'なす',
  'cà phê': 'コーヒー', 'coffee': 'コーヒー', '咖啡': 'コーヒー', '커피': 'コーヒー',
  'khoai tây': 'じゃがいも', 'potato': 'じゃがいも', '土豆': 'じゃがいも', '감자': 'じゃがいも',
  'hành tây': '玉ねぎ', 'onion': '玉ねぎ', '洋葱': '玉ねぎ', '양파': '玉ねぎ',
  'bắp cải': 'キャベツ', 'cabbage': 'キャベツ', '卷心菜': 'キャベツ', '양배추': 'キャベツ',
  'đậu phụ rán': '厚揚げ', 'nấm hương': 'しいたけ',
  'bơ': 'バター', 'butter': 'バター', '黄油': 'バター',
  'phô mai': 'チーズ', 'cheese': 'チーズ', '奶酪': 'チーズ', '치즈': 'チーズ',
  'sữa chua': 'ヨーグルト', 'yogurt': 'ヨーグルト', '酸奶': 'ヨーグルト',
  'trứng': '卵', 'egg': '卵', '鸡蛋': '卵', '계란': '卵',
  'sữa': '牛乳', 'milk': '牛乳', '牛奶': '牛乳', '우유': '牛乳',
  'cơm': 'ご飯', 'rice': '米', '米饭': 'ご飯',
  'cà ri': 'カレー', 'curry': 'カレー', '咖喱': 'カレー', '카레': 'カレー', 'แกงกะหรี่': 'カレー',

  // Tiếng Hàn / Thái cho các nguyên liệu hay tìm — trước đây thiếu nên
  // 「카레」 (cà ri) ra 0 kết quả trong khi 「curry」 ra 45.
  '우유': '牛乳', 'นม': '牛乳',
  '두부': '豆腐', 'đậu phụ': '豆腐', 'tofu': '豆腐', '豆腐': '豆腐', 'เต้าหู้': '豆腐',
  '라면': 'ラーメン', 'ramen': 'ラーメン', 'mì ramen': 'ラーメン',
  '장어덮밥': 'うなぎ', 'ปลาไหล': 'うなぎ',
  '돼지고기': '豚肉', 'หมู': '豚肉',
  '쇠고기': '牛肉', 'เนื้อวัว': '牛肉',
  '새우': 'えび', 'กุ้ง': 'えび',
  '야채': '野菜', 'ผัก': '野菜',
  '계란찜': '卵', 'ไข่': '卵',
  'bánh mì': 'パン', 'bread': 'パン', '面包': 'パン', '빵': 'パン', 'ขนมปัง': 'パン',
  'bún': '麺', 'mì': '麺', 'noodle': '麺', 'noodles': '麺', '面': '麺', '면': '麺',
  'cá hồi': '鮭', 'salmon': '鮭', '三文鱼': '鮭', '연어': '鮭',
  'đậu hũ': '豆腐', 'nấm': 'きのこ', 'mushroom': 'きのこ', '蘑菇': 'きのこ', '버섯': 'きのこ',

  // cửa hàng / dịch vụ
  'cửa hàng': '店舗', 'cua hang': '店舗', 'store': '店舗', 'shop': '店舗',
  '门店': '店舗', '매장': '店舗', 'ร้าน': '店舗',
  'giờ mở cửa': '営業時間', 'gio mo cua': '営業時間', 'opening hours': '営業時間',
  'business hours': '営業時間', 'open': '営業時間', '营业时间': '営業時間',
  '영업시간': '営業時間', 'เวลาเปิด': '営業時間',
  'địa chỉ': '住所', 'dia chi': '住所', 'address': '住所', '地址': '住所', '주소': '住所',
  'bãi đỗ xe': '駐車場', 'parking': '駐車場', '停车场': '駐車場', '주차장': '駐車場',
  'công thức': 'レシピ', 'cong thuc': 'レシピ', 'recipe': 'レシピ', '食谱': 'レシピ',
  '레시피': 'レシピ', 'สูตรอาหาร': 'レシピ',
  'tờ rơi': 'チラシ', 'flyer': 'チラシ', 'leaflet': 'チラシ', '传单': 'チラシ',
  'tuyển dụng': '採用', 'recruit': '採用', 'job': '採用', '招聘': '採用', '채용': '採用',
  'dịch vụ': 'サービス', 'service': 'サービス', '服务': 'サービス', '서비스': 'サービス',
  'công ty': '会社情報', 'company': '会社情報', '公司': '会社情報',
  'tìm kiếm': '検索', 'search': '検索', '搜索': '検索', '검색': '検索',
  'bản đồ': '売場マップ', 'map': '売場マップ', '地图': '売場マップ',
  'giỏ hàng': '買い物リスト', 'cart': '買い物リスト', 'shopping list': '買い物リスト',
  'dinh dưỡng': '栄養成分', 'nutrition': '栄養成分', '营养': '栄養成分',

  // Câu hỏi "trang này làm được gì?" — Yêu cầu 4 nêu đích danh.
  // Không có từ khoá cụ thể nào nên phải bắt theo cả cụm.
  'what can this website': 'なんでも検索',
  'what can this site': 'なんでも検索',
  'what does this site': 'なんでも検索',
  'what can i do': 'なんでも検索',
  'features': 'なんでも検索',
  'trang này làm được gì': 'なんでも検索',
  'trang nay lam duoc gi': 'なんでも検索',
  'website này có gì': 'なんでも検索',
  'có dịch vụ nào': 'サービス',
  'tính năng': 'なんでも検索',
  '这个网站': 'なんでも検索',
  '能做什么': 'なんでも検索',
  '功能': 'なんでも検索',
  '이 사이트': 'なんでも検索',
  '무엇을 할 수': 'なんでも検索',
  '기능': 'なんでも検索',
  'เว็บไซต์นี้': 'なんでも検索',
  'ทำอะไรได้': 'なんでも検索',

  // Tiếng Nhật: các cách hỏi "trang này làm được gì".
  // Cần khai riêng vì tìm theo text thường sẽ ra bài viết ngẫu nhiên.
  'このサイト': 'なんでも検索',
  'このサイトは': 'なんでも検索',
  '何ができ': 'なんでも検索',
  'なにができ': 'なんでも検索',
  'どんなことができ': 'なんでも検索',
  '使い方': 'なんでも検索',
  'サイトの機能': 'なんでも検索',
};

/**
 * Bỏ dấu chữ Latin: "cà ri" -> "ca ri", "sữa" -> "sua", "đậu" -> "dau".
 *
 * Chỉ bỏ dải U+0300–U+036F (dấu phụ của chữ Latin). Dakuten của tiếng Nhật là
 * U+3099/U+309A nên KHÔNG bị đụng tới — nếu bỏ luôn thì 「ガ」 thành 「カ」 và
 * toàn bộ phần chuẩn hoá chữ Nhật sẽ sai.
 */
export function stripLatinMarks(s) {
  return (
    String(s)
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      // BẮT BUỘC ghép lại: NFD tách cả dakuten tiếng Nhật (で → て + U+3099).
      // Dấu đó không nằm trong dải U+0300–U+036F nên không bị xoá, nhưng chuỗi
      // ở dạng tách KHÁC chuỗi gốc, làm mọi mẫu chứa で/ど/だ/ば… trượt hết.
      // Đã đo: 「2000円で作れる料理」 ra 1 món trong khi 「2000円の料理」 ra 64.
      .normalize('NFC')
  )
}

/** Khớp đúng cả TỪ, để "ca" (cá) không dính vào giữa chữ "cari" */
function hasWord(haystack, word) {
  const esc = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return new RegExp('(^|[^a-z0-9])' + esc + '([^a-z0-9]|$)', 'i').test(haystack)
}

/**
 * Dịch các từ khoá ngoại ngữ trong câu sang tiếng Nhật.
 *
 * Người Việt gõ không dấu và không viết cách là chuyện bình thường:
 * 「cà ri」「ca ri」「cari」「CÀ RI」 phải cho ra cùng một kết quả. Bản trước so
 * khớp chuỗi nguyên văn nên chỉ 「cà ri」 chạy, còn 「cari」 ra 0 kết quả.
 */
export function toJapaneseKeywords(text) {
  const raw = String(text || '').toLowerCase()
  const loose = stripLatinMarks(raw)
  const looseCompact = loose.replace(/[^a-z0-9]/g, '')

  const hits = []
  for (const k of Object.keys(KEYWORD_MAP)) {
    const kl = stripLatinMarks(k.toLowerCase())
    // Chữ Latin mới cần bỏ dấu / xét ranh giới từ; chữ Nhật-Trung-Hàn-Thái
    // không có khoảng trắng giữa từ nên cứ so chuỗi con như cũ.
    const isLatin = /^[a-z0-9\s'-]+$/.test(kl)

    let hit
    if (!isLatin) {
      hit = raw.includes(k.toLowerCase())
    } else {
      const kc = kl.replace(/[^a-z0-9]/g, '')
      // Bỏ luôn khoảng trắng chỉ áp dụng cho cụm từ 4 ký tự trở lên:
      // ngắn hơn thì "ca" (cá) sẽ khớp bừa vào "cari", "banana"…
      hit = hasWord(loose, kl) || (kc.length >= 4 && looseCompact.includes(kc))
    }
    if (hit) hits.push({ key: kl, value: KEYWORD_MAP[k] })
  }

  // Cụm ngắn nằm gọn trong cụm dài đã khớp thì bỏ: 「ca ri」 khớp cả 'cà ri'
  // lẫn 'cá', mà người dùng rõ ràng đang hỏi cà ri chứ không phải cá.
  const kept = hits.filter(
    (h) => !hits.some((o) => o !== h && o.key.length > h.key.length && o.key.includes(h.key))
  )

  return [...new Set(kept.map((h) => h.value))]
}


/**
 * Nhận diện câu XÃ GIAO (chào, cảm ơn, tam biet, đồng ý).
 *
 * Cần vì: người dùng mở khung chat thường gõ "chào bạn" trước khi hỏi.
 * Trước đây bot trả "không tìm thấy thông tin đó" — vô lý và làm người dùng
 * tưởng bot hỏng.
 */
export function smallTalkKind(text) {
  // Bỏ dấu để 「chào bạn」 và 「chao ban」 đều được coi là câu xã giao
  const s = stripLatinMarks(String(text || '')).trim().toLowerCase();
  if (!s) return null

  // Chỉ coi là xã giao khi câu NGẮN; "xin chào, cửa hàng mở lúc mấy giờ?"
  // vẫn phải xử lý như câu hỏi thật.
  if (s.length > 24) return null

  const greet = /^(こんにちは|こんばんは|おはよう|はじめまして|やあ|もしもし|ちわ|hi|hello|hey|xin chao|chao ban|chao|alo|你好|您好|안녕|안녕하세요|สวัสดี)[\s!.?！。？]*$/i;
  const thanks = /^(ありがとう|ありがとうございます|どうも|thanks|thank you|thx|cam on|谢谢|감사|ขอบคุณ)[\s!.?！。？]*$/i;
  const bye = /^(さようなら|バイバイ|またね|bye|goodbye|see you|tạm biệt|再见|안녕히|ลาก่อน)[\s!.?！。？]*$/i;
  const okWord = /^(はい|うん|わかりました|ok|okay|yes|yep|duoc|vang|u|好的|네|โอเค)[\s!.?！。？]*$/i;

  if (greet.test(s)) return 'greet'
  if (thanks.test(s)) return 'thanks'
  if (bye.test(s)) return 'bye'
  if (okWord.test(s)) return 'ok'
  return null
}

/** Câu trả lời cho xã giao + gợi ý hỏi tiếp, theo từng ngôn ngữ */
export const SMALLTALK = {
  ja: {
    greet: 'こんにちは！遠鉄ストアについてお答えします。',
    thanks: 'どういたしまして。ほかにも何かあればお聞きください。',
    bye: 'ありがとうございました。またお越しくださいませ。',
    ok: 'かしこまりました。ほかにご質問はありますか？',
  },
  vi: {
    greet: 'Xin chào! Tôi có thể giúp bạn tìm thông tin về siêu thị Entetsu Store.',
    thanks: 'Không có gì! Bạn cần hỏi thêm gì nữa không?',
    bye: 'Cảm ơn bạn. Hẹn gặp lại!',
    ok: 'Vâng ạ. Bạn còn câu hỏi nào khác không?',
  },
  en: {
    greet: 'Hello! I can help you find information about Entetsu Store.',
    thanks: "You're welcome! Anything else I can help with?",
    bye: 'Thank you. See you again!',
    ok: 'Sure. Any other questions?',
  },
  zh: {
    greet: '您好！我可以帮您查询远铁超市的信息。',
    thanks: '不客气！还有什么可以帮您的吗？',
    bye: '谢谢您，欢迎再来！',
    ok: '好的。还有其他问题吗？',
  },
  ko: {
    greet: '안녕하세요! 엔테츠 스토어 정보를 안내해 드릴게요.',
    thanks: '천만에요! 더 궁금한 점 있으신가요?',
    bye: '감사합니다. 또 방문해 주세요!',
    ok: '알겠습니다. 다른 질문 있으신가요?',
  },
  th: {
    greet: 'สวัสดีค่ะ! ยินดีช่วยค้นหาข้อมูลเกี่ยวกับ Entetsu Store ค่ะ',
    thanks: 'ยินดีค่ะ! มีอะไรให้ช่วยอีกไหมคะ',
    bye: 'ขอบคุณค่ะ แล้วพบกันใหม่นะคะ',
    ok: 'รับทราบค่ะ มีคำถามอื่นอีกไหมคะ',
  },
};

/**
 * Gợi ý câu hỏi mẫu — hiện khi bot chào hoặc khi KHÔNG tìm thấy gì.
 * Giúp người dùng biết hỏi được những gì thay vì bế tắc.
 */
export const SUGGESTIONS = {
  ja: ['うなぎの特売はいつまで？', '富塚店の営業時間は？', 'このサイトは何ができますか'],
  vi: ['Khuyến mãi lươn đến bao giờ?', 'Giờ mở cửa cửa hàng?', 'Trang này làm được gì?'],
  en: ['When does the eel sale end?', 'Store opening hours?', 'What can this website do?'],
  zh: ['鳗鱼特卖到什么时候？', '营业时间是几点？', '这个网站能做什么？'],
  ko: ['장어 세일은 언제까지인가요?', '영업시간이 어떻게 되나요?', '이 사이트에서 무엇을 할 수 있나요?'],
  th: ['โปรโมชันปลาไหลถึงเมื่อไหร่', 'ร้านเปิดกี่โมง', 'เว็บไซต์นี้ทำอะไรได้บ้าง'],
};

/** Lời nhắc khi không tìm thấy — kèm hướng dẫn hỏi lại cho cụ thể hơn */
export const NOT_FOUND_HINT = {
  ja: '商品名・料理名・食材・店舗名など、もう少し具体的にお聞きください。',
  vi: 'Bạn thử hỏi cụ thể hơn nhé — tên sản phẩm, món ăn, nguyên liệu hoặc tên cửa hàng.',
  en: 'Please try asking more specifically — a product, dish, ingredient or store name.',
  zh: '请更具体一些，例如商品名、菜名、食材或门店名称。',
  ko: '상품명, 요리명, 재료, 매장명 등으로 좀 더 구체적으로 물어봐 주세요.',
  th: 'ลองถามให้เจาะจงขึ้น เช่น ชื่อสินค้า ชื่ออาหาร วัตถุดิบ หรือชื่อร้าน',
};

/**
 * Câu hỏi thuộc nhóm KHÔNG được đoán: giá, tồn kho, dị ứng, hạn dùng.
 * Với các câu này phải hướng khách hỏi cửa hàng (Yêu cầu 4).
 */
export function needsStoreContact(text) {
  // Bỏ dấu để 「dị ứng」 và 「di ung」 đều chặn được
  const s = stripLatinMarks(String(text || '')).toLowerCase();
  const patterns = [
    /アレルギー|アレルゲン/, /賞味期限|消費期限/, /在庫/, /入荷/,
    /allerg/i, /expir/i, /stock/i, /in stock/i,
    /di ung/i, /han su dung/i, /ton kho/i, /con hang/i,
    /过敏|保质期|库存/, /알레르기|유통기한|재고/,
    /แพ้|หมดอายุ|สต็อก/,
  ];
  return patterns.some((re) => re.test(s))
}
