/**
 * Đọc NGÂN SÁCH từ câu người dùng gõ, và ước tính chi phí nấu một món.
 *
 * Vì sao cần: đề bài đòi 「món ăn trong tầm giá 2000 yên」 phải ra kết quả đúng.
 * Đã đo trên bản trước — hoàn toàn sai, vì máy tìm kiếm chỉ so chuỗi:
 *
 *     2000円以内の料理  ->  0 kết quả
 *     1000円以下        -> 16 kết quả   (nhiều hơn 2000円, vô lý)
 *
 * Nguyên nhân: "2000" chỉ được coi là một từ khoá, không ai hiểu nó là GIÁ.
 * Nên phải tách riêng: đọc số tiền ra khỏi câu, rồi LỌC theo số tiền đó.
 *
 * Chạy bằng luật, không cần AI — đúng ràng buộc "web không được chết vì AI".
 */

/**
 * Bỏ tiền tố nhóm gia vị kiểu "A）しょうゆ" và phần ghi chú trong ngoặc.
 * Tên sau khi dọn mới khớp được với tên sản phẩm trong data/demo-products.json.
 */
export function cleanIngredientName(name) {
  return String(name || '')
    .replace(/^[A-Za-z][）)．.、,]\s*/, '')
    .replace(/[（(].*?[）)]/g, '')
    .trim()
}

/** Đơn vị tiền tệ người dùng có thể gõ, ở 6 ngôn ngữ */
const YEN_WORD = '(?:円|yen|yên|en|엔|日元|元|บาท|¥)'

/** "tối đa / trong vòng" — 2000円以内 */
const UNDER_WORD =
  '(?:以内|以下|まで|未満|以下で|以内で|under|below|less than|within|max|budget|' +
  'dưới|duoi|trong tầm|trong tam|tối đa|toi da|không quá|khong qua|' +
  '以内的|以下的|이하|이내|ไม่เกิน)'

/** "từ … trở lên" — 2000円以上. Phải xét TRƯỚC, nếu không sẽ hiểu ngược thành trần giá */
const OVER_WORD =
  '(?:以上|超|より上|over|above|more than|at least|' +
  'trên|tren|từ|tu|hơn|hon|以上的|이상|มากกว่า)'

/** "khoảng chừng" — 2000円くらい */
const AROUND_WORD =
  '(?:くらい|ぐらい|程度|前後|ほど|around|about|approx|roughly|' +
  'khoảng|khoang|tầm|tam|cỡ|co|左右|정도|쯤|ประมาณ)'

/** Bỏ dấu phân cách hàng nghìn: 1,000 / 1.000 / 1 000 */
const toNumber = (s) => Number(String(s).replace(/[,.\s]/g, ''))

/**
 * Đọc ngân sách từ câu.
 *
 * @returns {{min:number, max:number, raw:number, kind:'under'|'around'}|null}
 *
 * Ví dụ:
 *   2000円以内        -> { min: 0,    max: 2000, kind: 'under'  }
 *   2000円くらい      -> { min: 1600, max: 2400, kind: 'around' }
 *   dưới 2000 yên     -> { min: 0,    max: 2000, kind: 'under'  }
 *   món trong tầm giá 2000 yên -> { min: 0, max: 2000, kind: 'under' }
 */
export function detectBudget(text) {
  const s = String(text || '')
  if (!s) return null

  // Số tiền phải có ít nhất 2 chữ số để không bắt nhầm "3 người ăn", "15 phút"
  const NUM = '(\\d{1,3}(?:[,.\\s]\\d{3})+|\\d{2,6})'

  // Giữa chữ chỉ định và số tiền có thể còn vài chữ: "trong tầm GIÁ 2000 yên",
  // "under a budget of 2000 yen". Cho phép tối đa 8 ký tự không phải chữ số.
  const GAP = '\\D{0,8}'

  // 1. Dạng "…以内 / dưới …" — chữ chỉ định có thể đứng trước hoặc sau số tiền
  const under = [
    new RegExp(NUM + '\\s*' + YEN_WORD + '\\s*' + UNDER_WORD, 'i'),
    new RegExp(UNDER_WORD + GAP + NUM + '\\s*' + YEN_WORD, 'i'),
    // "予算2000円" / "ngân sách 2000 yên" — có chữ ngân sách thì cũng là trần giá
    new RegExp('(?:予算|ngân sách|ngan sach|budget|预算|예산)\\D{0,4}' + NUM + '\\s*' + YEN_WORD + '?', 'i'),
  ]
  for (const re of under) {
    const m = s.match(re)
    if (m) {
      const v = toNumber(m[1])
      if (v >= 10) return { min: 0, max: v, raw: v, kind: 'under', match: m[0] }
    }
  }

  // 2. Dạng "khoảng 2000円" — cho biên ±20% để không quá khắt khe
  const around = [
    new RegExp(NUM + '\\s*' + YEN_WORD + '\\s*' + AROUND_WORD, 'i'),
    new RegExp(AROUND_WORD + GAP + NUM + '\\s*' + YEN_WORD, 'i'),
  ]
  for (const re of around) {
    const m = s.match(re)
    if (m) {
      const v = toNumber(m[1])
      if (v >= 10) {
        return {
          min: Math.round(v * 0.8),
          max: Math.round(v * 1.2),
          raw: v,
          kind: 'around',
          match: m[0],
        }
      }
    }
  }

  // 3. Dạng "từ 2000円 trở lên" — sàn giá, không phải trần
  const over = [
    new RegExp(NUM + '\\s*' + YEN_WORD + '\\s*' + OVER_WORD, 'i'),
    new RegExp(OVER_WORD + GAP + NUM + '\\s*' + YEN_WORD, 'i'),
  ]
  for (const re of over) {
    const m = s.match(re)
    if (m) {
      const v = toNumber(m[1])
      if (v >= 10) return { min: v, max: Infinity, raw: v, kind: 'over', match: m[0] }
    }
  }

  // 4. CHỈ có số tiền, không kèm chữ chỉ định: 「ăn gì với 2000 yên」,
  //    「2000円で作れる料理」, 「what can i eat with 2000 yen」.
  //
  //    Nhắc tới tiền trong câu hỏi về đồ ăn thì gần như luôn là NGÂN SÁCH.
  //    Trước đây dạng này không được nhận, nên 「ăn gì với 2000 yên」 đem cả câu
  //    đi tìm theo chữ và ra 0 kết quả.
  const bare = String(s).match(new RegExp(NUM + '\\s*' + YEN_WORD, 'i'))
  if (bare) {
    const v = toNumber(bare[1])
    if (v >= 10) return { min: 0, max: v, raw: v, kind: 'under', match: bare[0], implied: true }
  }

  return null
}

/**
 * Giá dùng tạm cho nguyên liệu không có trong bảng sản phẩm demo.
 *
 * 86,6% nguyên liệu khớp được tên sản phẩm; 13,4% còn lại (hàng hiệu như
 * 「キユーピー 具だくさん和風タルタル」) không có giá. Bỏ qua chúng thì món nào
 * nhiều hàng hiệu sẽ rẻ giả tạo, nên gán một giá trung vị để ước tính ổn định.
 */
const FALLBACK_PRICE = 198

/**
 * Ước tính chi phí nguyên liệu của một món.
 *
 * ⚠️ Là SỐ ƯỚC TÍNH trên giá DEMO: tính theo giá cả gói/cả bó, không chia theo
 * lượng thực dùng (công thức ghi 「塩 少々」 nhưng vẫn tính nguyên gói muối).
 * Vì vậy giao diện phải ghi rõ 「概算」 + badge DEMO, không được nói là giá thật.
 *
 * @param ingredients   mảng nguyên liệu của công thức
 * @param productByName Map tên sản phẩm -> sản phẩm demo
 */
export function estimateRecipeCost(ingredients, productByName) {
  const list = Array.isArray(ingredients) ? ingredients : []
  if (!list.length) return null

  let total = 0
  let matched = 0
  for (const ing of list) {
    const name = cleanIngredientName(typeof ing === 'string' ? ing : ing.name)
    const p = productByName.get(name)
    if (p) {
      total += Number(p.taxIncluded || p.price || 0)
      matched++
    } else {
      total += FALLBACK_PRICE
    }
  }

  return {
    total: Math.round(total),
    matched,
    count: list.length,
    // Tỉ lệ nguyên liệu tra được giá thật trong bảng demo — để giao diện nói thật
    confidence: list.length ? Math.round((matched / list.length) * 100) : 0,
  }
}

/**
 * Từ chỉ "món ăn" nói chung — không phải từ khoá tìm kiếm.
 *
 * Cần vì sau khi bỏ vế ngân sách khỏi 「2000円以内の料理」 chỉ còn 「料理」;
 * đem 「料理」 đi tìm thì chỉ ra các món có chữ đó trong tên, trong khi ý người
 * dùng là "MỌI món nấu được với 2000 yên".
 */
/**
 * Nhóm 1 — chữ Nhật/Trung/Hàn/Thái. Bỏ bằng cách cắt chuỗi con, nên MỌI mục
 * phải dài từ 2 ký tự trở lên: để lọt 「物」 thì 「煮物」 bị cắt thành 「煮」,
 * để lọt 「菜」 thì 「白菜」 hỏng theo.
 */
const GENERIC_CJK = [
  '料理', 'レシピ', '御飯', 'ご飯', 'ごはん', '食事', 'メニュー', 'もの', '作れる', '作る',
  '菜谱', '食谱', '요리', '음식', 'อาหาร', 'สูตร',
  // Lời nhờ vả — không phải từ khoá. Thiếu nhóm này thì
  // 「1000円以下の料理を教えて」 còn lại chữ 「教えて」, bị coi là có từ khoá,
  // nên đi tìm theo chữ và LỜ MẤT ngân sách (đã đo: trả về 16 món không lọc giá).
  // Từ để hỏi trong tiếng Nhật — 「2000円で何が作れる？」 sau khi bỏ tiền còn
  // 「何が作れる」, không phải từ khoá nào cả. Mọi mục phải từ 2 ký tự trở lên.
  '何が', '何を', '何か', '何が作れ', 'なにが', 'なにを', 'どんな', 'できる', 'できます',
  '教えて', 'おしえて', 'ください', 'お願い', 'おすすめ', 'オススメ', 'ほしい',
  'ありますか', 'あります', '探して', 'さがして', '知りたい',
  '推荐', '告诉我', '想要', '알려줘', '추천', '찾아', 'แนะนำ', 'บอก',
]

/**
 * Nhóm 2 — chữ Latin. Bỏ theo RANH GIỚI TỪ, không cắt chuỗi con:
 * cắt chuỗi con thì 'an' sẽ xé nát 'banana', 'mon' xé 'lemon'.
 */
const GENERIC_LATIN = [
  'dish', 'dishes', 'recipe', 'recipes', 'meal', 'meals', 'food', 'cook', 'make',
  'món', 'mon', 'món ăn', 'mon an', 'đồ ăn', 'do an', 'nấu', 'nau', 'ăn', 'an',
  'tell me', 'show me', 'give me', 'please', 'suggest', 'recommend', 'find', 'want',
  'cho tôi', 'cho toi', 'gợi ý', 'goi y', 'giới thiệu', 'gioi thieu', 'tìm', 'tim',
  'muốn', 'muon', 'xin', 'hãy', 'hay',

  // Từ để hỏi và từ nối — 「ăn gì với 2000 yên」 sau khi bỏ tiền còn lại
  // 「ăn gì với」, toàn từ rỗng nghĩa. Thiếu nhóm này thì câu bị coi là "có từ
  // khoá" rồi đem 「gì với」 đi tìm, ra 0 kết quả.
  'trở lên', 'tro len', 'trở xuống', 'tro xuong', 'or more', 'or less',
  'gì', 'gi', 'nào', 'nao', 'với', 'voi', 'cùng', 'cung', 'bằng', 'bang',
  'có', 'co', 'không', 'khong', 'thì', 'thi', 'là', 'la', 'của', 'cua',
  'được', 'duoc', 'nên', 'nen', 'bây giờ', 'bay gio', 'hôm nay', 'hom nay',
  'what', 'which', 'can', 'could', 'i', 'we', 'you', 'with', 'for', 'under',
  'today', 'eat', 'buy', 'get', 'something', 'anything', 'some', 'any',
  'the', 'a', 'an', 'is', 'are', 'do', 'does', 'to', 'of', 'on', 'in',
]

/**
 * Bỏ vế ngân sách ra khỏi câu, trả lại phần từ khoá còn lại.
 *
 * 「2000円以内の料理」      -> { rest: '',      generic: true  }  (mọi món)
 * 「2000円以内のカレー」    -> { rest: 'カレー', generic: false }  (chỉ món cà ri)
 */
export function stripBudget(text, budget) {
  let rest = String(text || '')
  if (budget?.match) rest = rest.replace(budget.match, ' ')

  // Bỏ trợ từ dính lại ở mép và các từ "món ăn" chung chung
  rest = rest.replace(/^[\s のでがはをにと、,]+|[\s のでがはをにと、,]+$/g, '')
  let stripped = rest
  for (const w of GENERIC_CJK) {
    stripped = stripped.split(w).join(' ')
  }
  // Cụm dài trước, để 'món ăn' được bỏ trọn thay vì còn trơ lại 'ăn'
  for (const w of [...GENERIC_LATIN].sort((a, b) => b.length - a.length)) {
    const esc = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    stripped = stripped.replace(new RegExp('(^|[^\\p{L}])' + esc + '(?![\\p{L}])', 'giu'), '$1 ')
  }
  stripped = stripped.replace(/[\s のでがはをにと、,？?！!。.]+/g, ' ').trim()

  return { rest: stripped, generic: stripped.length < 2 }
}

/** Món có nằm trong ngân sách không (dùng chung cho search và chatbot) */
export function withinBudget(cost, budget) {
  if (!budget || !cost) return true
  return cost.total >= budget.min && cost.total <= budget.max
}
