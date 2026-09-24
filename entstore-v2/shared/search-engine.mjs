import { normalizeJa, bigrams } from './jp-text.mjs'

/**
 * Bộ máy tìm kiếm cục bộ — chấm điểm và nhóm kết quả.
 *
 * Kết quả xếp theo nhóm
 *   レシピ → 特売 → 商品 → 記事 → 店舗
 * kèm số lượng từng nhóm.
 */

/**
 * Thứ tự nhóm hiển thị.
 *
 * レシピ đứng trước 特売: phần lớn câu người dùng gõ là tên món hoặc nguyên
 * liệu, nên công thức mới là thứ họ tìm; khuyến mãi là thông tin đi kèm.
 * (Proposal ban đầu xếp 特売 lên đầu — đã đổi theo yêu cầu.)
 */
export const GROUP_ORDER = ['recipe', 'promo', 'product', 'article', 'shop', 'page', 'feature'];

export const GROUP_LABEL = {
  promo: '特売',
  recipe: 'レシピ',
  product: '商品',
  article: '記事',
  shop: '店舗',
  page: 'ページ',
  feature: '機能',
};

/** Gộp 4 loại bài viết của CMS thành một nhóm 記事 cho gọn */
const ARTICLE_TYPES = new Set(['news', 'info', 'event', 'blog', 'special', 'chirashi']);

export function groupOf(doc) {
  if (doc.type === 'promo') return 'promo'
  if (doc.type === 'recipe') return 'recipe'
  if (doc.type === 'product') return 'product'
  if (doc.type === 'shop') return 'shop'
  if (doc.type === 'page') return 'page'
  if (doc.type === 'feature') return 'feature'
  if (ARTICLE_TYPES.has(doc.type)) return 'article'
  return 'article'
}

/**
 * Chấm điểm một tài liệu với truy vấn đã chuẩn hoá.
 *
 * Nguyên tắc: khớp ở TIÊU ĐỀ đáng giá hơn khớp trong nội dung, và khớp
 * nguyên cụm đáng giá hơn khớp từng mảnh 2 ký tự.
 */
function scoreDoc(doc, nq, grams) {
  const title = doc.normTitle || '';
  const body = doc.norm || '';
  if (!nq) return 0

  let score = 0;

  // 1. Khớp nguyên cụm
  if (title === nq) score += 1000;                       // trùng khít tiêu đề
  else if (title.startsWith(nq)) score += 400;           // tiêu đề bắt đầu bằng từ khoá
  else if (title.includes(nq)) score += 250;             // tiêu đề có chứa
  if (body.includes(nq)) score += 60;

  // 2. Khớp từng mảnh 2 ký tự — cứu các trường hợp gõ thiếu/thừa
  if (score === 0 && grams.length) {
    let hitT = 0, hitB = 0;
    for (const g of grams) {
      if (title.includes(g)) hitT++;
      if (body.includes(g)) hitB++;
    }
    const rT = hitT / grams.length;
    const rB = hitB / grams.length;
    // Yêu cầu khớp phần lớn các mảnh, tránh kết quả rác
    if (rT >= 0.7) score += 120 * rT;
    else if (rB >= 0.8) score += 40 * rB;
  }

  if (score === 0) return 0

  // 3. Ưu tiên nhẹ theo loại: đúng thứ tự nhóm của slide 5
  const bonus = { promo: 30, recipe: 20, product: 15, shop: 10, feature: 8, page: 5 };
  score += bonus[groupOf(doc)] || 0;

  // 4. Tài liệu mới hơn nhỉnh hơn một chút (chỉ để phá thế hoà)
  if (doc.date) {
    const days = (Date.now() - new Date(doc.date).getTime()) / 86400000;
    if (days >= 0 && days < 400) score += (400 - days) / 40;
  }

  return score
}

/**
 * Từ/ngữ nên bỏ khi tách từ khoá ra khỏi CÂU HỎI đầy đủ.
 *
 * Cần cho chatbot: người dùng gõ cả câu 「うなぎの特売はいつまで？」 chứ không
 * gõ mỗi từ khoá. Đã đo: tìm nguyên câu ra 0 kết quả, trong khi 「うなぎ」 ra 31.
 */
const STOP_PARTS = [
  // trợ từ và đuôi câu tiếng Nhật
  'について', 'ですか', 'でしょうか', 'ください', 'たいです', 'いつまで', 'どこ', 'なに', 'なん',
  '教えて', 'を', 'は', 'が', 'の', 'に', 'へ', 'と', 'で', 'も', 'や', 'か', 'ね', 'よ',
  'です', 'ます', 'ある', 'あります', 'したい', 'できる', 'できますか',
  // tiếng Việt
  'của', 'là', 'gì', 'nào', 'bao', 'nhiêu', 'đến', 'bao giờ', 'có', 'không', 'ở', 'đâu',
  'cho', 'tôi', 'xin', 'hỏi', 'thế', 'này', 'các', 'và', 'thì', 'được', 'làm', 'sao',
  // tiếng Anh
  'what', 'where', 'when', 'which', 'how', 'can', 'does', 'do', 'is', 'are', 'the', 'a',
  'an', 'this', 'that', 'website', 'site', 'please', 'tell', 'me', 'about', 'much', 'many',
];

/**
 * Tách các cụm từ khoá có khả năng nhất từ một CÂU HỎI.
 * Trả về mảng ứng viên, xếp cụm dài trước (cụ thể hơn).
 */
export function extractKeywords(question) {
  const raw = String(question || '');
  const out = new Set();

  // 1. Cụm chữ Latin / số (tên riêng, tiếng Anh, tiếng Việt)
  for (const m of raw.matchAll(/[A-Za-zÀ-ỹ0-9]{2,}/g)) {
    const w = m[0].toLowerCase();
    if (!STOP_PARTS.includes(w)) out.add(w);
  }

  // 2. Cụm kanji/kana liên tục, rồi cắt bớt trợ từ ở hai đầu
  for (const m of raw.matchAll(/[぀-ゟ゠-ヿ一-鿿ｦ-ﾟ]{2,}/g)) {
    let seg = m[0];
    let changed = true;
    while (changed) {
      changed = false;
      for (const p of STOP_PARTS) {
        if (seg.length > p.length && seg.endsWith(p)) { seg = seg.slice(0, -p.length); changed = true; }
        if (seg.length > p.length && seg.startsWith(p)) { seg = seg.slice(p.length); changed = true; }
      }
    }
    if (seg.length >= 2) out.add(seg);

    // Thêm các cụm con 2–4 ký tự: bắt được 「特売」 trong 「うなぎの特売」
    for (let n = 4; n >= 2; n--) {
      for (let i = 0; i + n <= seg.length; i++) {
        const sub = seg.slice(i, i + n);
        if (!STOP_PARTS.includes(sub)) out.add(sub);
      }
    }
  }

  return [...out].sort((a, b) => b.length - a.length)
}

/**
 * Tìm theo CÂU HỎI đầy đủ (dùng cho chatbot).
 * Thử nguyên câu trước; không ra gì thì lần lượt thử từng cụm từ khoá.
 */
export function searchQuestion(docs, question, opts = {}) {
  const direct = search(docs, question, opts);
  if (direct.total > 0) return direct

  const seen = new Map();
  for (const kw of extractKeywords(question)) {
    if (kw.length < 2) continue
    const r = search(docs, kw, { ...opts, perGroup: 4 });
    for (const it of r.items) {
      // Cụm dài khớp thì đáng tin hơn — cộng điểm theo độ dài từ khoá
      const prev = seen.get(it.id);
      const score = (it.score || 0) + kw.length * 12;
      if (!prev || score > prev.score) seen.set(it.id, { ...it, score });
    }
    if (seen.size >= (opts.limit || 8) * 3) break
  }

  const items = [...seen.values()].sort((a, b) => b.score - a.score).slice(0, opts.limit || 8);
  return { query: question, normalized: normalizeJa(question), total: items.length, groups: [], items }
}

/**
 * Tìm kiếm.
 * @param docs  mảng tài liệu đã có sẵn `norm` và `normTitle`
 * @param query chuỗi người dùng gõ (mọi cách viết đều được)
 * @param opts  { limit, perGroup, types }
 * @returns { query, total, groups: [{key,label,count,items}], items }
 */
export function search(docs, query, opts = {}) {
  const { limit = 100, perGroup = 8, types = null } = opts;
  const nq = normalizeJa(query);

  if (!nq) {
    return { query, normalized: '', total: 0, groups: [], items: [] }
  }

  const grams = bigrams(nq);
  const scored = [];

  for (const d of docs) {
    if (types && !types.includes(groupOf(d))) continue
    const s = scoreDoc(d, nq, grams);
    if (s > 0) scored.push({ doc: d, score: s });
  }

  scored.sort((a, b) => b.score - a.score);

  // Gom nhóm theo đúng thứ tự của slide 5
  const byGroup = new Map();
  for (const { doc, score } of scored) {
    const g = groupOf(doc);
    if (!byGroup.has(g)) byGroup.set(g, []);
    byGroup.get(g).push({ ...doc, score: Math.round(score) });
  }

  const groups = GROUP_ORDER.filter((g) => byGroup.has(g)).map((g) => {
    const all = byGroup.get(g);
    return {
      key: g,
      label: GROUP_LABEL[g],
      count: all.length,               // TỔNG số, không phải số đang hiển thị
      items: all.slice(0, perGroup).map(stripHeavy),
    }
  });

  return {
    query,
    normalized: nq,
    total: scored.length,
    groups,
    items: scored.slice(0, limit).map((s) => stripHeavy({ ...s.doc, score: Math.round(s.score) })),
  }
}

/** Bỏ các trường nặng khi trả về cho client (norm/text dài không cần thiết) */
function stripHeavy(d) {
  const { norm, normTitle, text, ...rest } = d;
  return { ...rest, snippet: (text || '').slice(0, 120) }
}

/**
 * Phần chữ còn lại sau khi tách điều kiện — có phải TỪ KHOÁ THẬT không?
 *
 * Dùng cho câu kiểu 「2000円で何を食べますか」: sau khi tách "2000円" ra, còn
 * 「食べますか」 — chữ này không phải thứ người dùng muốn tìm.
 *
 * Cách nhận biết: từ khoá thật thì xuất hiện trong TÊN của ít nhất một tài
 * liệu; từ thừa thì không. Đã đo trên index thật:
 *
 *     食べますか → 0 tên    ランチ → 16 tên
 *     何食べよう → 0 tên    カレー → 31 tên
 *     作れる     → 0 tên    うなぎ → 13 tên
 *
 * Làm theo cách này thì không phải liệt kê tay từng cách hỏi mới — cách hỏi
 * nào lạ đến đâu cũng tự rơi vào đúng nhóm.
 */
export function looksLikeKeyword(docs, term, extraTerms = []) {
  for (const c of [term, ...extraTerms]) {
    if (!c) continue
    const n = normalizeJa(c)
    if (n.length < 2) continue
    for (const d of docs) {
      if ((d.normTitle || '').includes(n)) return true
    }
  }
  return false
}

/**
 * Gợi ý khi đang gõ (slide 5: "人気ワードもワンタップ").
 * Chỉ trả tiêu đề để danh sách gợi ý nhẹ và hiện nhanh.
 */
export function suggest(docs, query, limit = 8) {
  const nq = normalizeJa(query);
  if (!nq) return []

  const out = [];
  const seen = new Set();
  for (const d of docs) {
    const t = d.normTitle || '';
    if (!t.includes(nq)) continue
    const key = d.title;
    if (seen.has(key)) continue
    seen.add(key);
    out.push({
      title: d.title,
      type: d.type,
      group: groupOf(d),
      label: GROUP_LABEL[groupOf(d)],
      route: d.route,
      // tiêu đề bắt đầu bằng từ khoá thì xếp trước
      _p: t.startsWith(nq) ? 0 : 1,
    });
    if (out.length > limit * 4) break
  }

  return out
    .sort((a, b) => a._p - b._p || a.title.length - b.title.length)
    .slice(0, limit)
    .map(({ _p, ...r }) => r)
}

