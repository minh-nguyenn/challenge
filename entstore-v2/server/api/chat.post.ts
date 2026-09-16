import { normalizeJa } from '~~/shared/jp-text.mjs'
import { search, searchQuestion, extractKeywords, groupOf } from '~~/shared/search-engine.mjs'
import {
  detectLang,
  smallTalkKind,
  needsStoreContact,
  toJapaneseKeywords,
  t,
  SMALLTALK,
  SUGGESTIONS,
  NOT_FOUND_HINT,
  stripLatinMarks,
} from '~~/shared/chat-lang.mjs'
import { detectBudget, stripBudget } from '~~/shared/budget.mjs'

/**
 * Hiểu Ý ĐỊNH của câu hỏi, không chỉ tìm từ khoá.
 *
 * Vì sao cần (đo được trên bản trước):
 *   11/13 câu hỏi thật chỉ nhận được "関連する情報が見つかりました：" rồi liệt kê
 *   — đó là dán danh sách, không phải trả lời. Tệ hơn: hỏi
 *   「うなぎのレシピを教えて」 (xin CÔNG THỨC) lại nhận thông tin KHUYẾN MÃI,
 *   vì "うなぎ" khớp mục 特売 có điểm cao nhất.
 *
 * Cách sửa: đọc ý định TRƯỚC, rồi mới lọc tài liệu theo đúng loại người dùng
 * cần, và trả lời bằng câu văn thật thay vì danh sách khô khan.
 *
 * Toàn bộ chạy bằng luật — không cần AI, đúng ràng buộc "web không chết vì AI".
 */

/**
 * Các ý định nhận diện được.
 * Xếp từ CỤ THỂ đến CHUNG CHUNG: 'promo' phải xét trước 'product'.
 */
const INTENTS = [
  {
    // "Mua ở đâu / cửa hàng nào còn hàng" — phải xét TRƯỚC 'shop' và 'product',
    // vì câu 「浜松市で牛乳を買える店は？」 vừa có tên khu vực vừa có tên hàng,
    // trước đây rơi vào "không rõ ý định" rồi trả về mấy bài viết sự kiện.
    key: 'stock',
    want: ['shop'],
    patterns: [
      /買える|買えます|売っている|売ってる|扱って|取り扱|在庫|どこで買|販売して/,
      /where can i buy|which store|in stock|sell|carry/i,
      /mua ở đâu|bán ở đâu|cửa hàng nào|siêu thị nào|còn hàng|có bán/i,
      /哪里买|哪家店|有货|有卖/,
      /어디서 사|어느 매장|재고/,
      /ซื้อได้ที่ไหน|ร้านไหน/,
    ],
  },
  {
    key: 'recipe',
    // Xin công thức / món ăn
    want: ['recipe'],
    patterns: [
      /レシピ|作り方|料理|献立|メニュー|作れる|作りたい|調理/,
      /recipe|dish|cook|how to make/i,
      // 「món nào」「món gì」「nấu gì」 cũng là hỏi công thức — thiếu mấy cụm này
      // nên 「cà ri có món nào không?」 từng rơi vào "không rõ ý định".
      /công thức|món ăn|món nào|món gì|nấu gì|ăn gì|nấu|chế biến/i,
      /食谱|菜谱|怎么做/,
      /레시피|요리/,
      /สูตร|ทำอาหาร/,
    ],
  },
  {
    key: 'promo',
    // Hỏi khuyến mãi / giá rẻ
    want: ['promo'],
    patterns: [
      /特売|セール|割引|お買い得|安い|値引き|オフ|OFF/i,
      /sale|discount|deal|cheap|bargain/i,
      /khuyến mãi|giảm giá|rẻ|ưu đãi/i,
      /特卖|打折|优惠|便宜/,
      /할인|세일|저렴/,
      /ลดราคา|โปรโมชัน/,
    ],
  },
  {
    key: 'shop',
    // Hỏi cửa hàng: địa chỉ, giờ mở, điện thoại, đỗ xe
    want: ['shop'],
    patterns: [
      /店舗|お店|支店|営業時間|何時|住所|場所|どこ|アクセス|駐車場|電話/,
      // \b...\b để 'shop' không nuốt 'online shopping' (đó là dịch vụ, không phải cửa hàng)
      /\b(store|shop|branch|address|location|opening hours|parking|phone|where)\b/i,
      /cửa hàng|địa chỉ|giờ mở|ở đâu|đỗ xe|điện thoại|chi nhánh|siêu thị ở/i,
      /门店|地址|营业时间|停车|电话|在哪/,
      /매장|주소|영업시간|주차|전화|어디/,
      /ร้าน|ที่อยู่|เวลาเปิด|จอดรถ/,
    ],
  },
  {
    key: 'nutrition',
    // Hỏi dinh dưỡng / calo
    want: ['recipe'],
    patterns: [
      /カロリー|kcal|栄養|塩分|たんぱく質|脂質|糖質|ヘルシー|低カロリー/i,
      /calorie|nutrition|protein|healthy|low.fat|salt/i,
      /calo|dinh dưỡng|đạm|béo|lành mạnh|ít calo/i,
      /卡路里|营养|蛋白质|健康/,
      /칼로리|영양|단백질/,
      /แคลอรี|โภชนาการ/,
    ],
  },
  {
    key: 'service',
    // Hỏi dịch vụ của siêu thị
    want: ['page', 'feature'],
    patterns: [
      /サービス|ネット通販|宅配|移動スーパー|ポイント|カード|レシート|LINE|配達/,
      /\b(service|delivery|online shopping|online shop|e-?commerce|point card|receipt)\b/i,
      /dịch vụ|giao hàng|mua online|bán online|thẻ điểm|tích điểm|dich vu|ban online/i,
      /服务|配送|网购|积分/,
      /서비스|배달|포인트/,
      /บริการ|จัดส่ง/,
    ],
  },
  {
    key: 'recruit',
    want: ['page'],
    patterns: [
      /採用|求人|アルバイト|パート|正社員|募集|働/,
      /recruit|job|hiring|career|work/i,
      /tuyển|việc làm|ứng tuyển|nhân viên|tuyen dung|viec lam/i,
      /招聘|求职|工作/,
      /채용|구인|일자리/,
      /สมัครงาน|รับสมัคร/,
    ],
  },
  {
    key: 'chirashi',
    want: ['article', 'page'],
    patterns: [
      /チラシ|広告|折り込み/,
      /flyer|leaflet|circular/i,
      /tờ rơi|quảng cáo/i,
      /传单|广告/,
      /전단|광고/,
      /ใบปลิว/,
    ],
  },
  {
    key: 'company',
    want: ['page'],
    patterns: [
      /会社|企業|沿革|理念|environment|環境|社会活動|個人情報|プライバシー/,
      /company|corporate|privacy|environment/i,
      /công ty|doanh nghiệp|bảo mật|môi trường/i,
      /公司|企业|隐私|环保/,
      /회사|기업|개인정보/,
      /บริษัท|ความเป็นส่วนตัว/,
    ],
  },
  {
    key: 'feature',
    // Hỏi về chính website
    want: ['feature'],
    patterns: [
      /このサイト|使い方|何ができ|なにができ|どんなことができ|機能/,
      /this (web)?site|what can|features|how (do i )?use/i,
      /trang này|website này|tính năng|dùng thế nào|làm được gì/i,
      /这个网站|能做什么|功能|怎么用/,
      /이 사이트|무엇을 할 수|기능/,
      /เว็บไซต์นี้|ทำอะไรได้/,
    ],
  },
];

/**
 * Đọc ý định của câu hỏi.
 * Trả về { key, want } hoặc null nếu không rõ (khi đó tìm chung mọi loại).
 *
 * Một câu có thể khớp nhiều ý định (vd 「うなぎの特売はいつまで？」 khớp cả
 * promo). Lấy ý định có nhiều dấu hiệu nhất; hoà thì lấy cái xếp trước.
 */
/**
 * Bo dau ca CAU HOI lan MAU so khop, roi moi doi chieu.
 *
 * Nguoi Viet go khong dau la chuyen binh thuong: 「cari co mon nao khong?」.
 * Cac mau o day deu viet co dau nen cau khong dau truot het, roi bot tra ve
 * mot danh sach bai viet chang lien quan. Bo dau O CA HAI PHIA thi
 * 「công thức」 va 「cong thuc」 deu khop cung mot mau.
 *
 * Chi bo dau phu cua chu Latin (U+0300–U+036F) nen chu Nhat/Han/Thai
 * trong cung mau van nguyen ven.
 */
const looseText = (s: string) => stripLatinMarks(String(s || ''))
const looseCache = new WeakMap<RegExp, RegExp>()
function looseRe(re: RegExp) {
  let out = looseCache.get(re)
  if (!out) {
    out = new RegExp(stripLatinMarks(re.source), re.flags)
    looseCache.set(re, out)
  }
  return out
}

function detectIntent(text) {
  const s = looseText(text);
  if (!s.trim()) return null

  let best = null;
  let bestScore = 0;
  for (const it of INTENTS) {
    let score = 0;
    for (const re of it.patterns) {
      const m = s.match(looseRe(re));
      if (!m) continue
      // Khớp CỤM DÀI đáng tin hơn khớp một từ ngắn.
      // Cần cho "online shopping": vừa khớp 'shop' (cửa hàng) vừa khớp
      // 'online shopping' (dịch vụ) — phải chọn cụm dài hơn.
      score += 1 + Math.min(m[0].length, 20) / 20;
    }
    if (score > bestScore) {
      bestScore = score;
      best = it;
    }
  }
  return best
}

/**
 * Các "bộ lọc phụ" đọc thêm được từ câu hỏi, dùng để chọn đúng tài liệu:
 *   - maxKcal   : 「カロリーが低い」「300kcal以下」
 *   - maxMinutes: 「15分で作れる」「時短」
 *   - area      : 「浜松市の店舗」
 */
function detectFilters(text) {
  const s = looseText(text);
  const out = {};

  // Số phút: 「15分」「10分以内」
  const min = s.match(/(\d{1,3})\s*分(以内|以下)?/);
  if (min) out.maxMinutes = Number(min[1]);
  if (/時短|早く|すぐ|簡単|かんたん|quick|fast|nhanh|快手|빨리/i.test(s) && !out.maxMinutes) {
    out.maxMinutes = 15;
  }

  // Calo: 「300kcal以下」「カロリーが低い」
  const kc = s.match(/(\d{2,4})\s*(kcal|キロカロリー)/i);
  if (kc) out.maxKcal = Number(kc[1]);
  if (looseRe(/低カロリー|カロリーが?低|ヘルシー|low.?cal|ít calo|低卡|저칼로리/i).test(s) && !out.maxKcal) {
    out.maxKcal = 400;
  }

  // Ngân sách: 「2000円以内」「món ăn trong tầm giá 2000 yên」.
  // Trước đây không đọc số tiền nên 2000円以内 ra 1 món còn 1000円以下 ra 16 món —
  // câu trả lời mâu thuẫn với chính nó.
  const budget = detectBudget(s)
  if (budget) {
    out.budget = budget
    out.budgetOnly = stripBudget(s, budget).generic
  }

  // Câu CHỈ có điều kiện, không có từ khoá nào: 「15分で作れる料理」,
  // 「2000円以内の料理」. Với dạng này phải duyệt toàn bộ công thức rồi lọc,
  // chứ đem 「15分」 đi tìm theo chữ thì chỉ ra vài món tình cờ có chữ đó.
  let residual = s
  for (const m of [budget?.match, min?.[0], kc?.[0]]) {
    if (m) residual = residual.replace(m, ' ')
  }
  out.genericOnly = stripBudget(residual, null).generic

  // Khu vực cửa hàng
  const areaMap = {
    浜松: 'hamamatsu', 磐田: 'iwata', 袋井: 'hukuroi', 掛川: 'kakegawa',
    湖西: 'kosai', 菊川: 'kikugawa', 豊川: 'toyokawa', 豊橋: 'toyohashi',
    周智: 'shuchi', 天竜: 'tenryu', 浜名: 'hamana',
  };
  for (const [jp, key] of Object.entries(areaMap)) {
    if (s.includes(jp)) { out.areaWord = jp; out.areaKey = key; break }
  }

  return out
}

/**
 * Soạn câu TRẢ LỜI theo đúng ý định người hỏi, ở 6 ngôn ngữ.
 *
 * Vì sao tách riêng file này:
 *   Bản trước chỉ trả "関連する情報が見つかりました：" rồi liệt kê tiêu đề —
 *   11/13 câu hỏi thật đều nhận đúng một câu đó. Đó là dán danh sách, không
 *   phải trả lời.
 *
 * Nguyên tắc:
 *   - Trả lời bằng CÂU VĂN, có số liệu cụ thể lấy từ tài liệu
 *   - Không bịa: mọi con số đều đến từ dữ liệu, không tự nghĩ ra
 *   - Nói rõ số nào là DEMO, số nào là thật
 */

/** Ghép chuỗi theo ngôn ngữ, thiếu thì lùi về tiếng Nhật */
const pick = (obj, lang) => obj[lang] || obj.ja;

/** Đếm: "3 món" / "3 dishes" / "3 món ăn" */
function countPhrase(n, lang, what) {
  const W = {
    recipe: { ja: '件のレシピ', vi: ' công thức', en: ' recipes', zh: ' 个食谱', ko: '개 레시피', th: ' สูตร' },
    shop: { ja: '件の店舗', vi: ' cửa hàng', en: ' stores', zh: ' 家门店', ko: '개 매장', th: ' ร้าน' },
    promo: { ja: '件の特売', vi: ' khuyến mãi', en: ' sale items', zh: ' 个特卖', ko: '개 특가', th: ' รายการลดราคา' },
    page: { ja: '件のページ', vi: ' trang', en: ' pages', zh: ' 个页面', ko: '개 페이지', th: ' หน้า' },
    item: { ja: '件', vi: ' mục', en: ' items', zh: ' 项', ko: '건', th: ' รายการ' },
  };
  return n + pick(W[what] || W.item, lang)
}

/** Câu mở đầu theo ý định */
const LEAD = {
  recipe: {
    ja: (n) => `${n}見つかりました。おすすめはこちらです：`,
    vi: (n) => `Tôi tìm được ${n}. Gợi ý cho bạn:`,
    en: (n) => `I found ${n}. Here are some suggestions:`,
    zh: (n) => `找到${n}，推荐如下：`,
    ko: (n) => `${n}를 찾았습니다. 추천드립니다:`,
    th: (n) => `พบ ${n} แนะนำดังนี้:`,
  },
  shop: {
    ja: (n) => `${n}が該当します：`,
    vi: (n) => `Có ${n} phù hợp:`,
    en: (n) => `${n} match your question:`,
    zh: (n) => `共有${n}符合：`,
    ko: (n) => `${n}가 해당됩니다:`,
    th: (n) => `มี ${n} ที่ตรงกับคำถาม:`,
  },
  promo: {
    ja: (n) => `現在 ${n} を実施中です：`,
    vi: (n) => `Hiện đang có ${n}:`,
    en: (n) => `There ${n === '1 sale items' ? 'is' : 'are'} currently ${n}:`,
    zh: (n) => `目前有${n}：`,
    ko: (n) => `현재 ${n}를 진행 중입니다:`,
    th: (n) => `ขณะนี้มี ${n}:`,
  },
  page: {
    ja: () => '関連するページはこちらです：',
    vi: () => 'Các trang liên quan:',
    en: () => 'Here are the related pages:',
    zh: () => '相关页面如下：',
    ko: () => '관련 페이지입니다:',
    th: () => 'หน้าที่เกี่ยวข้อง:',
  },
};

/** Nhãn phụ hiển thị sau tên món/cửa hàng */
const LBL = {
  min: { ja: '分', vi: ' phút', en: ' min', zh: ' 分钟', ko: '분', th: ' นาที' },
  kcal: { ja: 'kcal', vi: ' kcal', en: ' kcal', zh: ' 千卡', ko: 'kcal', th: ' kcal' },
  salt: { ja: '塩分', vi: 'muối', en: 'salt', zh: '盐分', ko: '염분', th: 'เกลือ' },
  ing: { ja: '材料', vi: 'nguyên liệu', en: 'ingredients', zh: '食材', ko: '재료', th: 'วัตถุดิบ' },
  open: { ja: '営業', vi: 'Mở cửa', en: 'Open', zh: '营业', ko: '영업', th: 'เปิด' },
  until: { ja: 'まで', vi: 'đến', en: 'until', zh: '截止', ko: '까지', th: 'ถึง' },
  // Không được trùng nhãn với LBL.ing, nếu không dòng kết quả đọc ra thành
  // 「nguyên liệu 7・nguyên liệu 1.989 yên」 — không ai hiểu số nào là số nào.
  cost: { ja: '材料費', vi: 'tiền NL', en: 'cost', zh: '食材费', ko: '재료비', th: 'ค่าวัตถุดิบ' },
  yen: { ja: '円', vi: ' yên', en: ' yen', zh: ' 日元', ko: '엔', th: ' เยน' },
};

/**
 * Ghi chú bắt buộc khi nói ra tiền nguyên liệu.
 * Con số tính theo giá CẢ GÓI trên dữ liệu DEMO (công thức ghi 「塩 少々」 vẫn
 * tính nguyên gói muối), nên phải nói rõ là ước tính, không được để hiểu nhầm.
 */
const COST_NOTE = {
  ja: '※ 材料費は1パック単位で計算したデモ価格の概算です。',
  vi: '※ Tiền nguyên liệu là ước tính trên giá DEMO, tính theo nguyên gói.',
  en: '* Ingredient cost is a rough estimate on DEMO prices, counted per whole pack.',
  zh: '※ 食材费为按整包计算的 DEMO 价格概算。',
  ko: '※ 재료비는 한 팩 단위로 계산한 DEMO 가격의 개산입니다.',
  th: '※ ค่าวัตถุดิบเป็นการประมาณจากราคา DEMO โดยคิดเป็นแพ็ก',
};

const DEMO_NOTE = {
  ja: '※ 価格はデモ用の仮データです。',
  vi: '※ Giá là dữ liệu demo, không phải giá thật.',
  en: '* Prices are demo data, not real values.',
  zh: '※ 价格为演示数据，并非真实价格。',
  ko: '※ 가격은 데모용 임시 데이터입니다.',
  th: '※ ราคาเป็นข้อมูลตัวอย่าง',
};

const REAL_NOTE = {
  ja: '※ 栄養成分は Kitchen365 の実データです。',
  vi: '※ Dinh dưỡng là số THẬT lấy từ Kitchen365.',
  en: '* Nutrition figures are real data from Kitchen365.',
  zh: '※ 营养成分为 Kitchen365 的真实数据。',
  ko: '※ 영양 성분은 Kitchen365의 실제 데이터입니다.',
  th: '※ ข้อมูลโภชนาการเป็นข้อมูลจริงจาก Kitchen365',
};

const MORE = {
  ja: (n) => `ほか ${n} 件あります。`,
  vi: (n) => `Còn ${n} kết quả khác.`,
  en: (n) => `${n} more results available.`,
  zh: (n) => `还有 ${n} 条结果。`,
  ko: (n) => `${n}건 더 있습니다.`,
  th: (n) => `มีอีก ${n} รายการ`,
};

const fmtDate = (iso) => {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()}`
};


/**
 * Câu trả lời soạn sẵn cho các chủ đề hay hỏi mà chỉ liệt kê link thì vô ích.
 *
 * Vì sao cần: hỏi 「ネット通販はありますか」 (có bán online không?) mà chỉ đưa
 * danh sách trang là chưa trả lời. Người ta cần biết CÓ hay KHÔNG trước đã.
 *
 * Nội dung lấy từ chính nội dung website, không bịa.
 */
const TOPIC_ANSWER = {
  feature: {
    ja: 'このサイトでは、一つの検索ボックスで「特売・レシピ・商品・記事・店舗」をまとめて探せます。レシピはAIが音声で読み上げ、材料から買い物リストと売場マップを自動作成します。うなぎ・ウナギ・鰻のような表記ゆれも同じ結果になります。',
    vi: 'Trang này cho phép tìm "khuyến mãi · công thức · sản phẩm · bài viết · cửa hàng" chỉ với một ô tìm kiếm. Công thức có AI đọc bằng giọng nói, tự tạo danh sách đi chợ và sơ đồ quầy hàng. Gõ うなぎ/ウナギ/鰻 đều ra cùng kết quả.',
    en: 'This site lets you search sales, recipes, products, articles and stores from a single box. Recipes can be read aloud by AI, and it builds a shopping list and store map automatically. Japanese spelling variants all return the same results.',
    zh: '本网站可通过一个搜索框同时查找特卖、食谱、商品、文章和门店。食谱支持AI语音朗读，并自动生成购物清单和卖场地图。',
    ko: '이 사이트에서는 검색창 하나로 특매·레시피·상품·기사·매장을 함께 찾을 수 있습니다. 레시피는 AI가 음성으로 읽어주고, 쇼핑 목록과 매장 지도를 자동으로 만들어 줍니다.',
    th: 'เว็บไซต์นี้ค้นหาโปรโมชัน สูตรอาหาร สินค้า บทความ และร้านค้าได้ในช่องเดียว สูตรอาหารมี AI อ่านออกเสียง พร้อมสร้างรายการซื้อของและแผนผังร้านอัตโนมัติ',
  },
  service: {
    ja: '遠鉄ストアでは、ネット通販（shop.entstore.co.jp）、移動スーパー、調理サービス（鮮魚調理・精肉オーダーカット・小分け）、サービスカウンター各種取り扱い、スマートレシート、LINE公式アカウントをご用意しています。',
    vi: 'Entetsu Store có: bán hàng online (shop.entstore.co.jp), siêu thị lưu động, dịch vụ chế biến (làm cá, cắt thịt theo yêu cầu, chia nhỏ), quầy dịch vụ, hoá đơn điện tử Smart Receipt và tài khoản LINE chính thức.',
    en: 'Entetsu Store offers: online shopping (shop.entstore.co.jp), a mobile supermarket, in-store food prep (fish cleaning, custom meat cutting, repacking), service counter services, Smart Receipt, and an official LINE account.',
    zh: '远铁超市提供：网上商城（shop.entstore.co.jp）、移动超市、加工服务（处理鲜鱼、按需切肉、分装）、服务柜台业务、电子小票以及 LINE 官方账号。',
    ko: '엔테츠 스토어는 온라인 쇼핑(shop.entstore.co.jp), 이동 슈퍼, 조리 서비스(생선 손질·정육 주문 절단·소분), 서비스 카운터, 스마트 영수증, LINE 공식 계정을 제공합니다.',
    th: 'Entetsu Store มีบริการ: ช้อปออนไลน์ (shop.entstore.co.jp), ซูเปอร์เคลื่อนที่, บริการเตรียมอาหาร (แล่ปลา ตัดเนื้อตามสั่ง แบ่งบรรจุ), เคาน์เตอร์บริการ, Smart Receipt และบัญชี LINE ทางการ',
  },
  recruit: {
    ja: '遠鉄ストアではアルバイト・パート・正社員を積極採用中です。募集職種や店舗、オンライン応募は採用情報ページ（entstore-recruit.net）からご確認いただけます。',
    vi: 'Entetsu Store đang tuyển làm thêm, bán thời gian và nhân viên chính thức. Xem vị trí, cửa hàng và nộp hồ sơ online tại trang tuyển dụng (entstore-recruit.net).',
    en: 'Entetsu Store is actively hiring part-time, casual and full-time staff. See open roles, locations and apply online on the recruitment page (entstore-recruit.net).',
    zh: '远铁超市正在招聘兼职、计时工和正式员工。职位、门店及在线申请请见招聘页面（entstore-recruit.net）。',
    ko: '엔테츠 스토어는 아르바이트·파트타임·정직원을 모집 중입니다. 채용 직종과 매장, 온라인 지원은 채용 페이지(entstore-recruit.net)에서 확인하세요.',
    th: 'Entetsu Store กำลังรับสมัครพนักงานพาร์ทไทม์และพนักงานประจำ ดูตำแหน่งและสมัครออนไลน์ได้ที่หน้ารับสมัครงาน (entstore-recruit.net)',
  },
  chirashi: {
    ja: 'チラシは毎週更新され、チラシ情報ページでご覧いただけます。PDF版もご用意しており、掲載期間は各チラシに記載されています。',
    vi: 'Tờ rơi được cập nhật hàng tuần, xem tại trang チラシ情報. Có cả bản PDF, thời gian áp dụng ghi trên từng tờ.',
    en: 'Flyers are updated weekly and can be viewed on the flyer page. A PDF version is also available; each flyer shows its valid period.',
    zh: '传单每周更新，可在传单页面查看。也提供 PDF 版，各期传单标注有效期。',
    ko: '전단은 매주 업데이트되며 전단 정보 페이지에서 볼 수 있습니다. PDF 버전도 있으며 게재 기간이 표시되어 있습니다.',
    th: 'ใบปลิวอัปเดตทุกสัปดาห์ ดูได้ที่หน้าใบปลิว มีเวอร์ชัน PDF ด้วย และระบุช่วงเวลาที่ใช้ได้',
  },
  company: {
    ja: '遠鉄ストアは静岡県西部を中心にスーパーマーケットを展開しています。会社概要・沿革、トップメッセージ、環境への取り組み、社会活動、個人情報保護方針は会社情報ページでご覧いただけます。',
    vi: 'Entetsu Store là chuỗi siêu thị chủ yếu ở miền tây tỉnh Shizuoka. Thông tin công ty, lịch sử, thông điệp lãnh đạo, hoạt động môi trường – xã hội và chính sách bảo mật đều có ở trang 会社情報.',
    en: 'Entetsu Store operates supermarkets mainly in western Shizuoka. Company profile, history, top message, environmental and social activities, and the privacy policy are on the company information pages.',
    zh: '远铁超市主要在静冈县西部经营超市。公司概况、沿革、高层致辞、环保与社会活动及隐私政策请见公司信息页面。',
    ko: '엔테츠 스토어는 시즈오카현 서부를 중심으로 슈퍼마켓을 운영합니다. 회사 개요·연혁, 대표 메시지, 환경·사회 활동, 개인정보 보호방침은 회사 정보 페이지에 있습니다.',
    th: 'Entetsu Store ดำเนินกิจการซูเปอร์มาร์เก็ตในภาคตะวันตกของจังหวัดชิซุโอกะ ข้อมูลบริษัท ประวัติ สาส์นผู้บริหาร กิจกรรมสิ่งแวดล้อมและสังคม รวมถึงนโยบายความเป็นส่วนตัว อยู่ในหน้าข้อมูลบริษัท',
  },
};

const SEE_MORE = {
  ja: '詳しくはこちらのページをご覧ください：',
  vi: 'Xem chi tiết tại các trang sau:',
  en: 'See these pages for details:',
  zh: '详情请见以下页面：',
  ko: '자세한 내용은 다음 페이지를 참고하세요:',
  th: 'ดูรายละเอียดได้ที่หน้าเหล่านี้:',
};


/**
 * Cửa hàng KHÔNG tồn tại → nói thẳng, không gợi ý cửa hàng khác thay thế.
 * Lỗi cũ: hỏi 上島店 (không có) lại liệt kê 16 cửa hàng khác → khách đi nhầm.
 */
function notFoundShop(lang, name, total) {
  const M = {
    ja: `申し訳ございません。「${name}」という店舗は見つかりませんでした。遠鉄ストアは現在 ${total} 店舗ございます。店舗一覧からお探しください。`,
    vi: `Xin lỗi, không có cửa hàng nào tên "${name}". Entetsu Store hiện có ${total} cửa hàng — bạn xem danh sách cửa hàng nhé.`,
    en: `Sorry, there is no store called "${name}". Entetsu Store currently has ${total} stores — please check the store list.`,
    zh: `抱歉，没有名为「${name}」的门店。远铁超市目前共有 ${total} 家门店，请查看门店一览。`,
    ko: `죄송합니다. "${name}"이라는 매장은 없습니다. 엔테츠 스토어는 현재 ${total}개 매장이 있습니다. 매장 목록을 확인해 주세요.`,
    th: `ขออภัย ไม่มีร้านชื่อ "${name}" ปัจจุบัน Entetsu Store มี ${total} สาขา กรุณาดูรายชื่อสาขา`,
  };
  return pick(M, lang)
}

/**
 * Hỏi MỘT thuộc tính của MỘT cửa hàng → trả thẳng thuộc tính đó.
 * Lỗi cũ: 「富塚店の電話番号は？」 vẫn đọc cả khối "1件の店舗が該当します：".
 */
function shopAttrAnswer(lang, shop, attr) {
  const L = {
    phone: {
      ja: (s) => `${s.title}の電話番号は ${s.phone} です。`,
      vi: (s) => `Số điện thoại của ${s.title} là ${s.phone}.`,
      en: (s) => `The phone number for ${s.title} is ${s.phone}.`,
      zh: (s) => `${s.title}的电话是 ${s.phone}。`,
      ko: (s) => `${s.title}의 전화번호는 ${s.phone}입니다.`,
      th: (s) => `เบอร์โทรของ ${s.title} คือ ${s.phone}`,
    },
    openTime: {
      ja: (s) => `${s.title}の営業時間は ${s.openTime} です。`,
      vi: (s) => `${s.title} mở cửa ${s.openTime}.`,
      en: (s) => `${s.title} is open ${s.openTime}.`,
      zh: (s) => `${s.title}的营业时间是 ${s.openTime}。`,
      ko: (s) => `${s.title}의 영업시간은 ${s.openTime}입니다.`,
      th: (s) => `${s.title} เปิด ${s.openTime}`,
    },
    address: {
      ja: (s) => `${s.title}の住所は ${s.address} です。`,
      vi: (s) => `Địa chỉ ${s.title}: ${s.address}.`,
      en: (s) => `${s.title} is located at ${s.address}.`,
      zh: (s) => `${s.title}的地址是 ${s.address}。`,
      ko: (s) => `${s.title}의 주소는 ${s.address}입니다.`,
      th: (s) => `ที่อยู่ของ ${s.title} คือ ${s.address}`,
    },
    parking: {
      ja: (s) => (s.parking ? `${s.title}には駐車場がございます（${s.parking}）。` : `${s.title}の駐車場情報は店舗ページをご確認ください。`),
      vi: (s) => (s.parking ? `${s.title} có bãi đỗ xe (${s.parking}).` : `Thông tin bãi đỗ xe của ${s.title} xem ở trang cửa hàng.`),
      en: (s) => (s.parking ? `${s.title} has parking (${s.parking}).` : `Please see the store page for parking at ${s.title}.`),
      zh: (s) => (s.parking ? `${s.title}设有停车场（${s.parking}）。` : `${s.title}的停车信息请见门店页面。`),
      ko: (s) => (s.parking ? `${s.title}에는 주차장이 있습니다(${s.parking}).` : `${s.title}의 주차 정보는 매장 페이지를 확인해 주세요.`),
      th: (s) => (s.parking ? `${s.title} มีที่จอดรถ (${s.parking})` : `ดูข้อมูลที่จอดรถของ ${s.title} ได้ที่หน้าร้าน`),
    },
  };
  const fn = pick(L[attr] || L.address, lang);
  const line = fn(shop);

  // Kèm địa chỉ cho câu hỏi điện thoại/giờ để khách đỡ phải hỏi tiếp
  if (attr === 'phone' || attr === 'openTime') {
    const extra = {
      ja: `（${shop.address}）`, vi: `(${shop.address})`, en: `(${shop.address})`,
      zh: `（${shop.address}）`, ko: `(${shop.address})`, th: `(${shop.address})`,
    };
    return line + String.fromCharCode(10) + pick(extra, lang)
  }
  return line
}

/**
 * Câu ĐẾM số lượng → trả tổng số THẬT trong dữ liệu.
 * Lỗi cũ: 「店舗は何店ありますか」 trả "2件" (thực tế 37).
 */
function countAnswer(lang, kind, total) {
  const M = {
    shop: {
      ja: `遠鉄ストアは現在 ${total} 店舗ございます（静岡県西部を中心に展開）。店舗一覧からエリア別にお探しいただけます。`,
      vi: `Entetsu Store hiện có ${total} cửa hàng, chủ yếu ở miền tây tỉnh Shizuoka. Bạn có thể tìm theo khu vực ở trang danh sách cửa hàng.`,
      en: `Entetsu Store currently has ${total} stores, mainly in western Shizuoka. You can browse them by area on the store list page.`,
      zh: `远铁超市目前共有 ${total} 家门店，主要分布在静冈县西部。可在门店一览按区域查找。`,
      ko: `엔테츠 스토어는 현재 ${total}개 매장이 있으며 시즈오카현 서부를 중심으로 운영합니다.`,
      th: `ปัจจุบัน Entetsu Store มี ${total} สาขา ส่วนใหญ่อยู่ทางตะวันตกของจังหวัดชิซุโอกะ`,
    },
    recipe: {
      ja: `レシピは全部で ${total} 件ございます。食材名や料理名で検索できます。`,
      vi: `Có tất cả ${total} công thức. Bạn có thể tìm theo tên nguyên liệu hoặc tên món.`,
      en: `There are ${total} recipes in total. You can search by ingredient or dish name.`,
      zh: `共有 ${total} 个食谱，可按食材或菜名搜索。`,
      ko: `총 ${total}개의 레시피가 있습니다. 재료나 요리명으로 검색할 수 있습니다.`,
      th: `มีสูตรอาหารทั้งหมด ${total} สูตร ค้นหาได้จากชื่อวัตถุดิบหรือชื่ออาหาร`,
    },
    promo: {
      ja: `現在 ${total} 件の特売を実施中です。※ 価格はデモ用の仮データです。`,
      vi: `Hiện đang có ${total} khuyến mãi. ※ Giá là dữ liệu demo.`,
      en: `There are currently ${total} items on sale. * Prices are demo data.`,
      zh: `目前有 ${total} 个特卖。※ 价格为演示数据。`,
      ko: `현재 ${total}개의 특가가 진행 중입니다. ※ 가격은 데모 데이터입니다.`,
      th: `ขณะนี้มี ${total} รายการลดราคา ※ ราคาเป็นข้อมูลตัวอย่าง`,
    },
  };
  return pick(M[kind] || M.shop, lang)
}


/**
 * Mở đầu cho câu hỏi CÓ/KHÔNG.
 * Lỗi cũ: 「駐車場ありますか」 liệt kê 16 cửa hàng mà không hề nói "có".
 * Người hỏi cần biết CÓ hay KHÔNG trước, rồi mới tới dẫn chứng.
 */
function yesNoPrefix(lang, yes, n) {
  const Y = {
    ja: `はい、ございます。${n ? `（${n}件）` : ''}`,
    vi: `Có ạ.${n ? ` (${n} kết quả)` : ''}`,
    en: `Yes.${n ? ` (${n} found)` : ''}`,
    zh: `有的。${n ? `（${n} 项）` : ''}`,
    ko: `네, 있습니다.${n ? ` (${n}건)` : ''}`,
    th: `มีค่ะ${n ? ` (${n} รายการ)` : ''}`,
  };
  const N = {
    ja: '申し訳ございません。該当する情報は見つかりませんでした。',
    vi: 'Xin lỗi, tôi không tìm thấy thông tin phù hợp.',
    en: 'Sorry, I could not find matching information.',
    zh: '抱歉，未找到相关信息。',
    ko: '죄송합니다. 해당 정보를 찾을 수 없습니다.',
    th: 'ขออภัย ไม่พบข้อมูลที่ตรงกัน',
  };
  return yes ? pick(Y, lang) : pick(N, lang)
}


/** Đã hết mục để giới thiệu thêm (trả lời cho 「他には？」 lần thứ n) */
function noMore(lang) {
  const M = {
    ja: 'ほかにご紹介できる情報は以上です。別のキーワードでお探しください。',
    vi: 'Đó là tất cả những gì tôi tìm được. Bạn thử từ khoá khác nhé.',
    en: "That's everything I found. Please try a different keyword.",
    zh: '没有更多相关信息了，请换个关键词试试。',
    ko: '더 이상 안내드릴 정보가 없습니다. 다른 키워드로 검색해 보세요.',
    th: 'ไม่มีข้อมูลเพิ่มเติมแล้ว ลองใช้คำค้นอื่นดูนะคะ',
  };
  return pick(M, lang)
}

/**
 * Soạn câu trả lời.
 * @param intentKey  ý định đọc được ('recipe' | 'shop' | 'promo' | ...)
 * @param hits       tài liệu đã lọc theo ý định
 * @param lang       ngôn ngữ trả lời
 * @param totalFound tổng số khớp (để nói "còn N kết quả khác")
 */
function composeAnswer(intentKey, hits, lang, totalFound = 0, opts = {}) {
  if (!hits.length) return null
  const L = (o) => pick(o, lang);
  const lines = [];

  // Câu hỏi Có/Không: khẳng định trước, dẫn chứng sau.
  // KHÔNG áp cho nhóm có câu trả lời soạn sẵn (service/recruit/chirashi/company/
  // feature) — ở đó nội dung mô tả đã trả lời trọn vẹn, thêm "はい、ございます"
  // rồi cắt mất phần mô tả là làm câu trả lời tệ đi.
  if (opts.yesNo && !TOPIC_ANSWER[intentKey]) {
    lines.push(yesNoPrefix(lang, true, totalFound || hits.length));
  }

  // ---------------- CÔNG THỨC ----------------
  if (intentKey === 'recipe' || intentKey === 'nutrition') {
    lines.push(pick(LEAD.recipe, lang)(countPhrase(totalFound || hits.length, lang, 'recipe')));

    let hasRealNutrition = false;
    let hasCost = false;
    for (const h of hits.slice(0, 3)) {
      const bits = [];
      if (h.cookTime) bits.push(String(h.cookTime).replace(/\+$/, '') + L(LBL.min));
      if (h.energy) { bits.push(h.energy + L(LBL.kcal)); hasRealNutrition = true; }
      if (h.salt) bits.push(L(LBL.salt) + ' ' + h.salt + 'g');
      if (h.ingredients?.length) bits.push(L(LBL.ing) + ' ' + h.ingredients.length);
      // Hỏi theo ngân sách thì phải nói ra con số, nếu không người dùng không
      // có cách nào kiểm chứng câu trả lời
      if (h.estimatedCost) {
        bits.push(L(LBL.cost) + ' ' + h.estimatedCost.total.toLocaleString() + L(LBL.yen));
        hasCost = true;
      }
      lines.push(`・${h.title}${bits.length ? '（' + bits.join('・') + '）' : ''}`);
    }
    if (hasCost) lines.push(L(COST_NOTE));
    if (hasRealNutrition) lines.push(L(REAL_NOTE));
  }

  // ---------------- CỬA HÀNG ----------------
  else if (intentKey === 'shop') {
    lines.push(pick(LEAD.shop, lang)(countPhrase(totalFound || hits.length, lang, 'shop')));
    for (const h of hits.slice(0, 3)) {
      const bits = [h.address].filter(Boolean);
      if (h.openTime) bits.push(L(LBL.open) + ' ' + h.openTime);
      if (h.phone) bits.push('TEL ' + h.phone);
      lines.push(`・${h.title}｜${bits.join('／')}`);
    }
  }

  // ---------------- KHUYẾN MÃI ----------------
  else if (intentKey === 'promo') {
    lines.push(pick(LEAD.promo, lang)(countPhrase(totalFound || hits.length, lang, 'promo')));
    for (const h of hits.slice(0, 4)) {
      const p = h.promo;
      if (!p) { lines.push(`・${h.title}`); continue }
      lines.push(
        `・${p.productName}　${p.normalPrice}円 → ${p.salePrice}円（${p.discountPercent}%OFF）` +
        `　${fmtDate(p.endDate)}${L(LBL.until)}`
      );
    }
    lines.push(L(DEMO_NOTE));
  }

  // ---------------- TRANG / DỊCH VỤ ----------------
  else {
    // Có câu trả lời soạn sẵn cho chủ đề này thì nói thẳng nội dung trước,
    // rồi mới dẫn link. Chỉ liệt kê link là chưa trả lời câu hỏi.
    const topic = TOPIC_ANSWER[intentKey];
    if (topic) {
      lines.push(pick(topic, lang));
      lines.push(pick(SEE_MORE, lang));
    } else {
      lines.push(pick(LEAD.page, lang)());
    }
    const seen = new Set();
    for (const h of hits) {
      if (seen.has(h.title)) continue
      seen.add(h.title);
      lines.push(`・${h.title}（${h.typeLabel}）`);
      if (seen.size >= 3) break
    }
  }

  // Còn bao nhiêu kết quả nữa
  const shown = Math.min(hits.length, intentKey === 'promo' ? 4 : 3);
  if (totalFound > shown) lines.push(pick(MORE, lang)(totalFound - shown));

  return lines.join('\n')
}

/**
 * Các "chốt chặn" để chatbot không trả lời sai.
 *
 * Sinh ra từ 6 lỗi đo được trên bản trước:
 *   A. Hỏi 「上島店はどこ？」 (cửa hàng KHÔNG tồn tại) → trả về 16 cửa hàng khác.
 *      Đây là lỗi nguy hiểm nhất: khách có thể đi nhầm cửa hàng.
 *   C. 「駐車場ありますか」 (câu Có/Không) → liệt kê 16 cửa hàng, không nói "có".
 *   D. 「店舗は何店ありますか」 (câu đếm) → trả "2件", thật ra là 37.
 *   F. 「明日の天気は？」 (ngoài phạm vi) → vẫn cố liệt kê bài viết.
 */

/**
 * Câu hỏi có nêu TÊN RIÊNG của cửa hàng không? (vd 「上島店」「富塚店」)
 * Trả về tên đọc được, hoặc null.
 */
function extractShopName(text) {
  const s = String(text || '');
  // Câu đếm 「店舗は何店ありますか」 không phải tên riêng — loại trước
  if (/何店|いくつ|how many/i.test(s)) return null

  // Tên cửa hàng thật đứng NGAY TRƯỚC 「店」 và không kèm trợ từ.
  // Chỉ nhận cụm ngắn (1–6 ký tự) không chứa trợ từ/động từ:
  //   OK   富塚店 · 上島店 · フードワン佐鳴台店
  //   BỎ   「浜松市の店」「駐車場がある店」 — đó là câu mô tả, không phải tên
  const m = s.match(/([一-鿿ぁ-んァ-ヶA-Za-z0-9ー]{1,8})店/);
  if (!m) return null
  const name = m[1];

  // Có trợ từ / động từ ⇒ là mệnh đề mô tả, không phải tên riêng
  if (/[のがはをにでとやもへ]|ある|ない|いる/.test(name)) return null

  // Từ chung, không phải tên cửa hàng
  const generic = ['店舗', '各', 'この', 'その', 'どの', 'お', '本', '支', '当', '全', '同'];
  if (generic.includes(name) || !name) return null

  // Hậu tố địa danh ⇒ đang nói về khu vực, không phải một cửa hàng cụ thể
  if (/[市区町村県]$/.test(name)) return null

  return name + '店'
}

/**
 * Câu hỏi dạng CÓ/KHÔNG.
 * Cần vì 「駐車場ありますか」 phải mở đầu bằng はい/いいえ rồi mới dẫn chứng.
 */
function isYesNo(text) {
  const s = looseText(text).trim();
  return [
    /ありますか|ますか|でしょうか|できますか|possible|いますか/,
    /^(is|are|do|does|can|has|have)\b/i,
    /\bkhông\?*$|^có\b/i,
    /吗[？?]?$/,
    /나요[？?]?$|습니까[？?]?$/,
    /ไหม[？?]?$|มั้ย[？?]?$/,
  ].some((re) => looseRe(re).test(s))
}

/**
 * Câu hỏi ĐẾM SỐ LƯỢNG (「何店」「何件」「いくつ」「how many」).
 * Trả về loại cần đếm hoặc null.
 */
function countQuestion(text) {
  const s = looseText(text);
  if (!looseRe(/何[店件品種類]|いくつ|how many|bao nhiêu|多少|몇\s*(개|곳)|กี่/i).test(s)) return null

  if (looseRe(/店舗|お店|支店|store|shop|cửa hàng|门店|매장|ร้าน/i).test(s)) return 'shop'
  if (looseRe(/レシピ|料理|recipe|công thức|食谱|레시피|สูตร/i).test(s)) return 'recipe'
  if (looseRe(/特売|セール|sale|khuyến mãi|特卖|할인|ลดราคา/i).test(s)) return 'promo'
  return 'any'
}

/**
 * Chủ đề NGOÀI PHẠM VI website — phải từ chối lịch sự, không đoán.
 * Đề bài yêu cầu rõ: "Câu ngoài phạm vi thì từ chối".
 */
function isOutOfScope(text) {
  const s = looseText(text).toLowerCase();
  const patterns = [
    /天気|気温|雨|台風|weather|thời tiết|天气|날씨|อากาศ/,
    /ニュース(?!リリース)|政治|選挙|株価|為替|politics|election|stock price/,
    /翻訳して|calculate|計算して|プログラム|コード書/,
    /恋愛|占い|運勢|horoscope|fortune/,
    /コロナ|感染者|ワクチン/,
  ];
  return patterns.some((re) => looseRe(re).test(s))
}

/**
 * Người dùng hỏi THUỘC TÍNH cụ thể nào của cửa hàng?
 * Dùng để trả thẳng thông tin đó thay vì đọc cả khối.
 */
function shopAttribute(text) {
  const s = looseText(text);
  if (looseRe(/電話|TEL|tel|phone|điện thoại|电话|전화|โทร/i).test(s)) return 'phone'
  if (looseRe(/営業時間|何時|開い|閉ま|hours|open|giờ|营业时间|영업시간|เวลาเปิด/i).test(s)) return 'openTime'
  if (looseRe(/住所|場所|どこ|address|location|where|địa chỉ|ở đâu|地址|在哪|주소|어디|ที่อยู่/i).test(s)) return 'address'
  if (looseRe(/駐車場|parking|đỗ xe|停车|주차|จอดรถ/i).test(s)) return 'parking'
  return null
}

/** Câu hỏi tiếp nối, cần ngữ cảnh lượt trước (「他には？」「もっと教えて」) */
function isFollowUp(text) {
  const s = looseText(text).trim();
  if (s.length > 20) return null
  if (looseRe(/^(他に|ほかに|他には|もっと|続き|次|さらに)/).test(s)) return 'more'
  if (looseRe(/^(more|others?|what else|anything else)\b/i).test(s)) return 'more'
  if (looseRe(/^(còn (gì|nào)|thêm|khác)/i).test(s)) return 'more'
  if (looseRe(/^(还有|其他|更多)/).test(s)) return 'more'
  if (looseRe(/^(더|또)/).test(s)) return 'more'
  return null
}

function retrieve(question, intent, filters, limit = 8) {
  const { docs, products } = getStore();
  const promoDocs = activePromos().map((p) => {
    const title = `${p.productName} ${p.discountPercent}%OFF`;
    const text = `${p.productName} 特売 セール お買い得 ${p.discountPercent}%OFF ${p.salePrice}円 ${p.uribaLabel} ${p.endDate.slice(0, 10)}まで`;
    return {
      id: `promo:${p.id}`,
      type: "promo",
      typeLabel: "特売",
      title,
      route: "/search?q=" + encodeURIComponent(p.productName),
      text,
      norm: normalizeJa(title + " " + text),
      normTitle: normalizeJa(p.productName),
      promo: p
    };
  });
  const all = [...promoDocs, ...docs];
  const wantGroups = intent?.want || null;
  const inWant = (d) => {
    if (!wantGroups) return true;
    const g = groupOf(d);
    return wantGroups.includes(g);
  };
  const generic = /^[^ぁ-んァ-ヶa-z0-9]{0,4}(今日|本日|今|現在|どんな|何|なに|いま)/.test(question) || question.trim().length <= 8;
  let pool = all.filter(inWant);

  // Câu chỉ có điều kiện (「15分で作れる料理」) thì lấy TOÀN BỘ công thức làm
  // ứng viên rồi để các bộ lọc bên dưới cắt, thay vì tìm theo chữ.
  // Trước đây 「15分で作れる料理」 chỉ ra 1 món — là món tình cờ có chữ khớp.
  if (filters.genericOnly && wantGroups?.includes('recipe')) {
    const allRecipes = pool.filter((d) => d.type === 'recipe');
    if (allRecipes.length) {
      return applyFilters(allRecipes.map((d) => ({ ...d, score: 1 })), filters, all)
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
        seen.set(it.id, { ...it, score: (prev?.score || 0) + (it.score || 0) });
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
  return applyFilters(items, filters, all)
}

/**
 * Áp các bộ lọc đọc được từ câu hỏi: ngân sách, thời gian nấu, calo, khu vực.
 *
 * Tách riêng để dùng được ở hai chỗ: sau khi tìm theo chữ, và khi duyệt thẳng
 * toàn bộ công thức (câu chỉ có điều kiện, không có từ khoá).
 */
function applyFilters(items, filters, all) {
  // --- NGÂN SÁCH --- (chi phí nguyên liệu ước tính, xem shared/budget.mjs)
  if (filters.budget) {
    const { costById } = getStore();
    const b = filters.budget;
    // Chỉ nhận món tra được giá cho >=60% nguyên liệu, để con số 「概算」 nói ra
    // còn có cơ sở; 949/1000 món đạt mức này.
    const inBudget = (d) => {
      if (d.type !== 'recipe') return true
      const c = costById.get(d.id);
      return !!c && c.confidence >= 60 && c.total >= b.min && c.total <= b.max
    };
    const withCost = (d) => {
      const c = costById.get(d.id);
      return c ? { ...d, estimatedCost: c } : d
    };

    // Duyệt TOÀN BỘ công thức theo giá — dùng khi câu hỏi chỉ có mỗi ngân sách,
    // vì "2000" không phải từ khoá nằm trong tài liệu nào.
    const browseAll = () => {
      const pool = all.filter((d) => d.type === 'recipe' && inBudget(d)).map(withCost);
      // 「khoảng 2000円」 -> gần con số đó nhất; 「từ 2000円 trở lên」 -> rẻ nhất
      // trước; 「2000円以内」 -> đắt nhất trong ngân sách trước, vì người hỏi
      // muốn biết "2000 yên nấu được gì" chứ không phải món rẻ nhất.
      if (b.kind === 'around') {
        pool.sort((x, y) =>
          Math.abs(x.estimatedCost.total - b.raw) - Math.abs(y.estimatedCost.total - b.raw)
        );
      } else if (b.kind === 'over') {
        pool.sort((x, y) => x.estimatedCost.total - y.estimatedCost.total);
      } else {
        pool.sort((x, y) => y.estimatedCost.total - x.estimatedCost.total);
      }
      return pool
    };

    const f = filters.budgetOnly ? browseAll() : items.filter(inBudget).map(withCost);
    // KHÔNG rơi về danh sách chưa lọc khi rỗng. Không có món nào trong tầm giá
    // thì phải trả về rỗng để bot nói thẳng, thay vì đọc ra mấy món sai giá.
    items = f.length ? f : browseAll();
    if (!items.length) return []
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
/**
 * Tìm mặt hàng người dùng nhắc tới trong câu, để trả lời "mua ở đâu".
 * Nhận cả tên ngoại ngữ ("sữa" -> 牛乳) và mọi cách viết tiếng Nhật.
 */
function findProductInQuestion(question, store) {
  const nq = normalizeJa(question);
  const words = [...toJapaneseKeywords(question), ...extractKeywords(question)]
    .map((w) => normalizeJa(w))
    .filter((w) => w.length >= 2);

  // Chỉ nhận khi TÊN HÀNG nằm gọn trong câu hỏi, hoặc trùng khít một từ khoá.
  // Không được nới theo chiều ngược lại (tên hàng chứa từ khoá): làm vậy thì
  // 「うなぎを売っている店はどこ？」 khớp ra 「新物ボイルわかめ」, còn 「牛乳」
  // khớp ra 「〔Ａ〕牛乳」 — sai hẳn mặt hàng người dùng hỏi.
  const wordSet = new Set(words);

  let best = null;
  let bestLen = 0;
  for (const p of store.products) {
    const n = normalizeJa(p.name);
    if (n.length < 2) continue
    if (!nq.includes(n) && !wordSet.has(n)) continue
    // Trong số các tên cùng xuất hiện, tên DÀI hơn là cụ thể hơn
    if (n.length > bestLen) {
      bestLen = n.length;
      best = p;
    }
  }
  return best
}

/** Câu trả lời cho "mua ở đâu" — 6 ngôn ngữ, luôn kèm cảnh báo số liệu DEMO */
function stockAnswer(lang, product, shops, areaWord) {
  const nl = String.fromCharCode(10);
  const where = areaWord ? `${areaWord}` : '';

  const head = {
    ja: `「${product.name}」の取扱店舗${where ? `（${where}）` : ''}は次のとおりです：`,
    vi: `Các siêu thị có bán "${product.name}"${where ? ` ở ${where}` : ''}:`,
    en: `Stores carrying "${product.name}"${where ? ` in ${where}` : ''}:`,
    zh: `有售「${product.name}」的门店${where ? `（${where}）` : ''}：`,
    ko: `"${product.name}"을(를) 취급하는 매장${where ? `（${where}）` : ''}:`,
    th: `ร้านที่มี "${product.name}"${where ? ` ใน ${where}` : ''}:`,
  };

  const lines = [head[lang] || head.ja];
  for (const s of shops) {
    const bits = [s.stock, s.address].filter(Boolean);
    if (s.openTime) bits.push(`${L2(LBL.open, lang)} ${s.openTime}`);
    lines.push(`・${s.title}｜${bits.join('／')}`);
  }

  const price = {
    ja: `${product.name} は ${product.taxIncluded}円（税込・DEMO）です。`,
    vi: `"${product.name}" giá ${product.taxIncluded} yên (đã gồm thuế — số DEMO).`,
    en: `"${product.name}" is ${product.taxIncluded} yen (tax incl. — DEMO figure).`,
    zh: `「${product.name}」${product.taxIncluded}日元（含税・DEMO）。`,
    ko: `"${product.name}" ${product.taxIncluded}엔 (세금 포함・DEMO).`,
    th: `"${product.name}" ${product.taxIncluded} เยน (รวมภาษี・DEMO)`,
  };
  lines.push(price[lang] || price.ja);
  lines.push(t(lang, 'demoWarn'));

  return lines.join(nl)
}

/**
 * Trả lời khi ngân sách thấp hơn mọi món có trong dữ liệu.
 * Nói rõ mức rẻ nhất để người dùng còn biết hỏi lại con số nào cho hợp lý.
 */
function overBudgetAnswer(lang, budget, cheapest) {
  const nl = String.fromCharCode(10);
  const b = budget.max.toLocaleString();
  const c = cheapest.toLocaleString();
  const byLang = {
    ja: `申し訳ありません。材料費が ${b}円以内のレシピは見つかりませんでした。${nl}いちばん安いレシピでも材料費は約 ${c}円です。${nl}※ 材料費は1パック単位で計算したデモ価格の概算です。`,
    vi: `Rất tiếc, không có công thức nào có tiền nguyên liệu trong ${b} yên.${nl}Món rẻ nhất cũng khoảng ${c} yên.${nl}※ Tiền nguyên liệu là ước tính trên giá DEMO, tính theo nguyên gói.`,
    en: `Sorry, no recipe fits an ingredient budget of ${b} yen.${nl}Even the cheapest one costs about ${c} yen.${nl}* Ingredient cost is a rough estimate on DEMO prices, counted per whole pack.`,
    zh: `抱歉，没有食材费在 ${b} 日元以内的食谱。${nl}最便宜的也约需 ${c} 日元。${nl}※ 食材费为按整包计算的 DEMO 价格概算。`,
    ko: `죄송합니다. 재료비가 ${b}엔 이내인 레시피는 없습니다.${nl}가장 저렴한 것도 약 ${c}엔입니다.${nl}※ 재료비는 한 팩 단위로 계산한 DEMO 가격의 개산입니다.`,
    th: `ขออภัย ไม่มีสูตรที่ค่าวัตถุดิบไม่เกิน ${b} เยน${nl}สูตรที่ถูกที่สุดราว ${c} เยน${nl}※ ค่าวัตถุดิบเป็นการประมาณจากราคา DEMO โดยคิดเป็นแพ็ก`,
  };
  return byLang[lang] || byLang.ja
}

/** Lấy nhãn theo ngôn ngữ (bản dùng ngoài composeAnswer) */
function L2(obj, lang) {
  return obj[lang] || obj.ja
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
      ja: `「${p.productName}」は現在 ${p.discountPercent}%OFF（${p.salePrice}円）で特売中です。${d} までとなっています。`,
      vi: `"${p.productName}" đang khuyến mãi ${p.discountPercent}% (còn ${p.salePrice} yên), đến hết ngày ${d}.`,
      en: `"${p.productName}" is on sale at ${p.discountPercent}% off (${p.salePrice} yen), until ${d}.`,
      zh: `「${p.productName}」正在特卖，${p.discountPercent}%OFF（${p.salePrice}日元），截止 ${d}。`,
      ko: `"${p.productName}"은(는) 현재 ${p.discountPercent}% 할인(${p.salePrice}엔) 중이며 ${d}까지입니다.`,
      th: `"${p.productName}" กำลังลดราคา ${p.discountPercent}% (${p.salePrice} เยน) ถึงวันที่ ${d}`
    };
    lines.push(byLang[lang] || byLang.ja);
    lines.push(t(lang, "demoWarn"));
  } else if (top.type === "shop") {
    const byLang = {
      ja: `${top.title}：${top.address}${top.openTime ? `／営業時間 ${top.openTime}` : ""}${top.phone ? `／TEL ${top.phone}` : ""}`,
      vi: `${top.title}: ${top.address}${top.openTime ? ` — Giờ mở cửa ${top.openTime}` : ""}${top.phone ? ` — ĐT ${top.phone}` : ""}`,
      en: `${top.title}: ${top.address}${top.openTime ? ` — Open ${top.openTime}` : ""}${top.phone ? ` — Tel ${top.phone}` : ""}`,
      zh: `${top.title}：${top.address}${top.openTime ? `／营业时间 ${top.openTime}` : ""}${top.phone ? `／电话 ${top.phone}` : ""}`,
      ko: `${top.title}: ${top.address}${top.openTime ? ` / 영업시간 ${top.openTime}` : ""}${top.phone ? ` / 전화 ${top.phone}` : ""}`,
      th: `${top.title}: ${top.address}${top.openTime ? ` / เวลาเปิด ${top.openTime}` : ""}${top.phone ? ` / โทร ${top.phone}` : ""}`
    };
    lines.push(byLang[lang] || byLang.ja);
  } else if (top.type === "feature") {
    const byLang = {
      ja: "このサイトでは、一つの検索ボックスで「特売・レシピ・商品・記事・店舗」をまとめて探せます。レシピはAIが音声で読み上げ、材料から買い物リストと売場マップを自動作成します。",
      vi: 'Trang này cho phép tìm "khuyến mãi · công thức · sản phẩm · bài viết · cửa hàng" chỉ với một ô tìm kiếm. Công thức có AI đọc bằng giọng nói, tự tạo danh sách đi chợ và sơ đồ quầy hàng.',
      en: "This site lets you search sales, recipes, products, articles and stores from a single box. Recipes can be read aloud by AI, and it builds a shopping list and store map automatically.",
      zh: "本网站可通过一个搜索框同时查找特卖、食谱、商品、文章和门店。食谱支持AI语音朗读，并自动生成购物清单和卖场地图。",
      ko: "이 사이트에서는 검색창 하나로 특매·레시피·상품·기사·매장을 함께 찾을 수 있습니다. 레시피는 AI가 음성으로 읽어주고, 쇼핑 목록과 매장 지도를 자동으로 만들어 줍니다.",
      th: "เว็บไซต์นี้ค้นหาโปรโมชัน สูตรอาหาร สินค้า บทความ และร้านค้าได้ในช่องเดียว สูตรอาหารมี AI อ่านออกเสียง พร้อมสร้างรายการซื้อของและแผนผังร้านอัตโนมัติ"
    };
    lines.push(byLang[lang] || byLang.ja);
  } else {
    const intro = {
      ja: "関連する情報が見つかりました：",
      vi: "Tôi tìm thấy thông tin liên quan:",
      en: "I found related information:",
      zh: "找到相关信息：",
      ko: "관련 정보를 찾았습니다:",
      th: "พบข้อมูลที่เกี่ยวข้อง:"
    };
    lines.push(intro[lang] || intro.ja);
    const seenTitle = /* @__PURE__ */ new Set();
    for (const h of hits) {
      if (seenTitle.has(h.title)) continue;
      seenTitle.add(h.title);
      lines.push(`・${h.title}（${h.typeLabel}）`);
      if (seenTitle.size >= 3) break;
    }
  }
  return { answer: lines.join("\n"), mode: "rule" };
}
async function aiAnswer(question, lang, hits) {
  const cfg = useRuntimeConfig();
  if (!cfg.anthropicApiKey) return null;
  const context = hits.map((h, i) => `[${i + 1}] ${h.title}（${h.typeLabel}）
URL: ${h.route}
${(h.snippet || "").slice(0, 300)}`).join("\n\n");
  const langName = { ja: "日本語", vi: "Tiếng Việt", en: "English", zh: "中文", ko: "한국어", th: "ไทย" }[lang] || "日本語";
  const system = [
    "Bạn là trợ lý của website siêu thị 遠鉄ストア (Entetsu Store).",
    `TRẢ LỜI BẰNG ${langName}. Người dùng hỏi bằng ngôn ngữ này, phải đáp đúng ngôn ngữ đó dù tài liệu gốc là tiếng Nhật.`,
    "CHỈ dùng thông tin trong phần TÀI LIỆU dưới đây. Tuyệt đối KHÔNG bịa.",
    "Nếu tài liệu không đủ để trả lời, hãy nói thẳng là không tìm thấy.",
    "Với câu hỏi về giá, tồn kho, dị ứng, hạn sử dụng: KHÔNG đoán, hướng dẫn khách hỏi trực tiếp cửa hàng.",
    "Giá và dinh dưỡng trong tài liệu là DỮ LIỆU DEMO — phải nói rõ điều đó khi nhắc tới.",
    "Trả lời ngắn gọn, tối đa 4 câu."
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
        messages: [{ role: "user", content: `TÀI LIỆU:
${context}

CÂU HỎI: ${question}` }]
      },
      timeout: 2e4
    });
    const text = res?.content?.[0]?.text;
    return text ? { answer: String(text).trim(), mode: "ai" } : null;
  } catch (e) {
    console.warn("[chat] Claude không dùng được, chuyển sang rule-based:", e?.message || e);
    return null;
  }
}
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const question = String(body?.message || "").slice(0, 500).trim();
  const prev = body?.context || null;
  if (!question) {
    throw createError({ statusCode: 400, statusMessage: "message trống" });
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
  if (follow && prev?.question) {
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
        sources: [{ title: "店舗一覧", route: "/shop/", type: "ページ" }]
      };
    }
    const attr = shopAttribute(question);
    if (found.length === 1 && attr) {
      return {
        lang,
        mode: "rule",
        intent: "shop",
        answer: shopAttrAnswer(lang, found[0], attr),
        sources: [{ title: found[0].title, route: found[0].route, type: "店舗" }]
      };
    }
  }
  // Câu CHỈ có ngân sách, không còn từ khoá nào — 「ăn gì với 2000 yên」,
  // 「what can i eat with 2000 yen」 — luôn là hỏi NẤU/ĂN GÌ.
  //
  // Phải ép về ý định 'recipe': 「what can i eat…」 trùng mẫu 「what can i do」
  // của ý định 'feature', nên bot từng đáp bằng bài giới thiệu website —
  // chẳng liên quan gì tới câu hỏi.
  if (filters.budget && filters.budgetOnly && intent?.key !== 'promo' && intent?.key !== 'shop') {
    intent = INTENTS.find((i) => i.key === 'recipe') || intent
  }

  // --- Ngân sách quá thấp: nói thẳng, kèm mức rẻ nhất thực tế ---
  // Không món nào dưới 1000 yên (rẻ nhất 1.001 yên). Trước đây bot lặng lẽ bỏ
  // qua ngân sách rồi đọc ra 16 món KHÔNG hề rẻ như vậy — trả lời sai sự thật.
  if (filters.budget) {
    const b = filters.budget;
    const costs = [...store.costById.values()].filter((c) => c.confidence >= 60);
    const fits = costs.filter((c) => c.total >= b.min && c.total <= b.max);
    if (costs.length && !fits.length) {
      const cheapest = Math.min(...costs.map((c) => c.total));
      return {
        lang,
        mode: 'rule',
        intent: 'recipe',
        guard: 'over-budget',
        answer: overBudgetAnswer(lang, b, cheapest),
        suggestions: SUGGESTIONS[lang] || SUGGESTIONS.ja,
        sources: [],
      };
    }
  }

  // --- "Mua ở đâu?" -> liệt kê siêu thị CÓ BÁN mặt hàng đó ---
  // Phải trả lời bằng bảng sản phẩm + tồn kho, không phải bằng tìm chữ:
  // 「浜松市で牛乳を買える店は？」 trước đây khớp nhầm mấy bài viết có chữ 浜松市.
  if (intent?.key === 'stock') {
    const product = findProductInQuestion(effectiveQuestion, store);
    if (product) {
      const shops = shopsSelling(product, { area: null, limit: 12 });
      const inArea = filters.areaWord
        ? shops.filter((s) => String(s.address || '').includes(filters.areaWord))
        : shops;
      const list = (inArea.length ? inArea : shops).slice(0, 4);

      if (list.length) {
        return {
          lang,
          mode: 'rule',
          intent: 'stock',
          answer: stockAnswer(lang, product, list, filters.areaWord),
          sources: list.map((s) => ({ title: s.title, route: s.route, type: '店舗' })),
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
  const result = ai || ruleAnswer(question, lang, hits, intent?.key || null, hits.length);
  return {
    lang,
    intent: intent?.key || null,
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

