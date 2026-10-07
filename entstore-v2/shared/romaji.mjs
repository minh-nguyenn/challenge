/**
 * Romaji -> hiragana cho GOI Y KHI GO.
 *
 * Nguoi nuoc ngoai (va ca nguoi Nhat tren may chua bat IME) hay go 「unagi」
 * 「kare-」「gyuuniku」. Du lieu toan chu Nhat nen truoc day khong goi y gi.
 *
 * Doi theo kieu "go den dau doi den do": phu am cuoi chua du am tiet
 * (「unag」) thi bo qua phan do, de goi y van chay theo tung ky tu.
 * Tra ve '' neu chuoi co ky tu khong phai romaji (vd. tieng Viet 「cà」).
 */
const TABLE = {
  a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
  ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
  ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご',
  sa: 'さ', si: 'し', shi: 'し', su: 'す', se: 'せ', so: 'そ',
  za: 'ざ', zi: 'じ', ji: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
  ta: 'た', ti: 'ち', chi: 'ち', tu: 'つ', tsu: 'つ', te: 'て', to: 'と',
  da: 'だ', di: 'ぢ', du: 'づ', de: 'で', do: 'ど',
  na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
  ha: 'は', hi: 'ひ', hu: 'ふ', fu: 'ふ', he: 'へ', ho: 'ほ',
  ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
  pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ',
  ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
  ya: 'や', yu: 'ゆ', yo: 'よ',
  ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
  la: 'ら', li: 'り', lu: 'る', le: 'れ', lo: 'ろ',
  wa: 'わ', wo: 'を', nn: 'ん', "n'": 'ん',
  kya: 'きゃ', kyu: 'きゅ', kyo: 'きょ', gya: 'ぎゃ', gyu: 'ぎゅ', gyo: 'ぎょ',
  sha: 'しゃ', shu: 'しゅ', sho: 'しょ', sya: 'しゃ', syu: 'しゅ', syo: 'しょ',
  ja: 'じゃ', ju: 'じゅ', jo: 'じょ', zya: 'じゃ', zyu: 'じゅ', zyo: 'じょ',
  cha: 'ちゃ', chu: 'ちゅ', cho: 'ちょ', tya: 'ちゃ', tyu: 'ちゅ', tyo: 'ちょ',
  nya: 'にゃ', nyu: 'にゅ', nyo: 'にょ', hya: 'ひゃ', hyu: 'ひゅ', hyo: 'ひょ',
  bya: 'びゃ', byu: 'びゅ', byo: 'びょ', pya: 'ぴゃ', pyu: 'ぴゅ', pyo: 'ぴょ',
  mya: 'みゃ', myu: 'みゅ', myo: 'みょ', rya: 'りゃ', ryu: 'りゅ', ryo: 'りょ',
  fa: 'ふぁ', fi: 'ふぃ', fe: 'ふぇ', fo: 'ふぉ', she: 'しぇ', je: 'じぇ', che: 'ちぇ',
  ti_: 'てぃ', di_: 'でぃ', '-': 'ー',
}
const MAX = 3

export function romajiToHira(input) {
  const s = String(input || '').toLowerCase().trim()
  // Chi nhan chuoi toan chu Latin khong dau (romaji); co dau la tieng Viet/Phap…
  if (!s || !/^[a-z' -]+$/.test(s)) return ''
  const src = s.replace(/\s+/g, '')
  if (src.length < 2) return ''

  let out = ''
  let i = 0
  while (i < src.length) {
    const c = src[i]
    const next = src[i + 1]
    // Phu am doi -> っ (「katsu」 khong, 「kitte」 co)
    if (next && c === next && /[bcdfghjkmprstwz]/.test(c)) {
      out += 'っ'
      i++
      continue
    }
    // 「n」 dung truoc phu am (khong phai y) -> ん: 「ninjin」 -> にんじん
    if (c === 'n' && next && !/[aiueoyn']/.test(next)) {
      out += 'ん'
      i++
      continue
    }
    let hit = ''
    for (let len = MAX; len >= 1; len--) {
      const k = src.slice(i, i + len)
      if (TABLE[k] && !k.endsWith('_')) {
        hit = k
        break
      }
    }
    if (!hit) {
      // Phan cuoi chua go xong am tiet (「unag」「gy」) -> dung o day, van goi y
      // theo phan da doi. Neu khong phai o cuoi thi day khong phai romaji.
      const tail = src.slice(i)
      if (/^[a-z]{1,2}$/.test(tail) && !/[aiueo]/.test(tail)) {
        // 「n」 o cuoi: co the la ん hoac dang go な/に… -> giu phan da doi
        break
      }
      return ''
    }
    out += TABLE[hit]
    i += hit.length
  }
  return out
}
