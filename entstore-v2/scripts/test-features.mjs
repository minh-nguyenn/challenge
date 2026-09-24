/**
 * Kiem thu tinh nang theo yeu cau de bai.
 *
 * Chay khi dang co server (dev hoac ban build):
 *   npm run dev            # roi mo tab khac
 *   npm run test:features
 *
 * Doi cong khac: BASE_URL=http://localhost:3021 node scripts/test-features.mjs
 */
const B = process.env.BASE_URL || 'http://localhost:3010'
const get = async (p) => (await fetch(B + p)).json()
const ask = async (m) => (await fetch(B + '/api/chat', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ message: m }) })).json()

let pass = 0, fail = 0
const check = (name, ok, detail) => {
  if (ok) { pass++; console.log('  OK   ' + name) }
  else { fail++; console.log('  FAIL ' + name + (detail ? '  -> ' + detail : '')) }
}

;(async () => {
  console.log('--- 1. Search: bien the chu Nhat ---')
  const forms = await Promise.all(['うなぎ', 'ウナギ', 'ｳﾅｷﾞ', '鰻'].map((t) => get('/api/search?q=' + encodeURIComponent(t))))
  check('4 cach viet cho cung so ket qua', new Set(forms.map((r) => r.total)).size === 1, forms.map((r) => r.total).join('/'))

  console.log('--- 2. Search: tieng nuoc ngoai ---')
  for (const [term, note] of [['cà ri', 'VI'], ['curry', 'EN'], ['咖喱', 'ZH'], ['카레', 'KO'], ['sữa', 'VI']]) {
    const r = await get('/api/search?q=' + encodeURIComponent(term))
    check(`${note} "${term}" ra ket qua`, r.total > 0 && !!r.translatedFrom, 'total=' + r.total)
  }

  console.log('--- 2b. Search: tieng Viet KHONG DAU ---')
  {
    // Nguoi Viet go khong dau la binh thuong. Truoc day chi 'cà ri' chay,
    // con 'cari' ra 0 ket qua.
    for (const [plain, accented] of [['cari', 'cà ri'], ['ca ri', 'cà ri'], ['sua', 'sữa'], ['thit bo', 'thịt bò']]) {
      const [a, b] = await Promise.all([
        get('/api/search?q=' + encodeURIComponent(plain)),
        get('/api/search?q=' + encodeURIComponent(accented)),
      ])
      check(`"${plain}" ra ket qua nhu "${accented}"`,
        a.total > 0 && String(a.translatedFrom) === String(b.translatedFrom),
        `${a.total} vs ${b.total}, dich ${a.translatedFrom} vs ${b.translatedFrom}`)
    }
    // 'cà rốt' khong duoc khop nham vao 'cá'
    const carrot = await get('/api/search?q=' + encodeURIComponent('ca rot'))
    check('"ca rot" ra ca rot chu khong phai ca', String(carrot.translatedFrom) === 'にんじん', String(carrot.translatedFrom))

    // Thu tu nhom phai bam slide 5, ke ca khi ket qua duoc gop tu ban dich.
    // Da tung sai: go 'cari' thi nhom ページ (trang tinh, khop nhieu) nhay len dau.
    const ORDER = ['レシピ', '特売', '商品', '記事', '店舗', 'ページ', '機能']
    for (const q of ['cari', 'sua', 'thit bo']) {
      const r = await get('/api/search?q=' + encodeURIComponent(q))
      const idx = (r.groups || []).map((g) => ORDER.indexOf(g.label))
      const sorted = idx.every((v, i) => i === 0 || v > idx[i - 1])
      check(`"${q}": nhom xep dung thu tu hien thi`, sorted,
        (r.groups || []).map((g) => g.label).join(' > '))
    }

    // Trang ket qua chi hien 5 nhom chinh. 'ページ' (43 trang tinh) va '機能'
    // (5 bai gioi thieu tinh nang) bi an di — nhung VAN phai con cho chatbot dung.
    for (const q of ['cari', 'うなぎ', '浜松', 'このサイトで何ができますか']) {
      const r = await get('/api/search?q=' + encodeURIComponent(q))
      const labels = (r.groups || []).map((g) => g.label)
      check(`"${q}": khong hien nhom ページ/機能`,
        !labels.includes('ページ') && !labels.includes('機能'), labels.join(' '))
    }
    const feat = await ask('このサイトで何ができますか')
    check('chatbot van dung duoc tai lieu 機能',
      feat.intent === 'feature' && (feat.sources || []).some((x) => x.type === '機能'),
      'intent=' + feat.intent)

    // Chatbot: cau co dau va khong dau phai cho cung y dinh
    for (const [plain, accented] of [['cari co mon nao khong?', 'cà ri có món nào không?'], ['sua mua o dau?', 'sữa mua ở đâu?']]) {
      const [a, b] = await Promise.all([ask(plain), ask(accented)])
      check(`chatbot: "${plain}" hieu nhu cau co dau`, a.intent === b.intent && !!a.intent,
        `${a.intent} vs ${b.intent}`)
    }
  }

  console.log('--- 3. Search: loc theo gia ---')
  const b2000 = await get('/api/search?q=' + encodeURIComponent('2000円以内の料理'))
  const b1500 = await get('/api/search?q=' + encodeURIComponent('1500円以内の料理'))
  const vi = await get('/api/search?q=' + encodeURIComponent('món ăn trong tầm giá 2000 yên'))
  const rc = (r) => (r.groups.find((g) => g.key === 'recipe')?.count) || 0
  check('2000 yen ra nhieu mon hon 1500 yen', rc(b2000) > rc(b1500), `${rc(b2000)} vs ${rc(b1500)}`)
  check('cau tieng Viet cho cung ket qua', rc(vi) === rc(b2000), `${rc(vi)} vs ${rc(b2000)}`)
  const over = (b2000.groups.find((g) => g.key === 'recipe')?.items || []).filter((i) => i.estimatedCost && i.estimatedCost.total > 2000)
  check('khong mon nao vuot ngan sach', over.length === 0, over.length + ' mon vuot')

  console.log('--- 3b. Search: cau hoi ngan sach kieu tu nhien ---')
  {
    // Nguoi dung khong go '以内'. 'an gi voi 2000 yen' phai hieu 2000 la NGAN SACH.
    const base = await get('/api/search?q=' + encodeURIComponent('2000円以内の料理'))
    const n = (r) => (r.groups || []).find((g) => g.key === 'recipe')?.count || 0
    for (const q of ['ăn gì với 2000 yên', 'an gi voi 2000 yen', 'what can i eat with 2000 yen', '2000円で作れる料理']) {
      const r = await get('/api/search?q=' + encodeURIComponent(q))
      check(`"${q}" hieu 2000 la ngan sach`, !!r.budget && n(r) === n(base),
        `ngan sach=${r.budget ? r.budget.max : '-'}, ${n(r)} mon vs ${n(base)}`)
    }

    // '以上' la SAN gia, khong duoc hieu nguoc thanh tran gia
    const over = await get('/api/search?q=' + encodeURIComponent('2000円以上の料理'))
    check('"2000円以上" hieu la san gia', over.budget?.kind === 'over' && over.budget?.min === 2000,
      JSON.stringify(over.budget && { kind: over.budget.kind, min: over.budget.min }))

    // Chatbot phai tra ve cung so mon
    for (const q of ['ăn gì với 2000 yên', '2000円で何が作れる？', 'what can i eat with 2000 yen']) {
      const r = await ask(q)
      check(`chatbot "${q}" tra loi theo ngan sach`,
        r.intent === 'recipe' && /64/.test(r.answer), 'intent=' + r.intent)
    }

    // Dakuten: bo dau chu Latin KHONG duoc lam hong chu Nhat (で = て + U+3099)
    for (const [q, want] of [['どんな料理が作れますか', 'recipe'], ['駐車場はありますか', 'shop'], ['15分で作れる料理', 'recipe']]) {
      const r = await ask(q)
      check(`dakuten: "${q}" -> ${want}`, r.intent === want, 'intent=' + r.intent)
    }
  }

  console.log('--- 3c. Moi cach hoi ngan sach deu cho cung ket qua ---')
  {
    // Danh sach tu thua viet tay khong bao giò phu het cach hoi. Phan chu con
    // lai duoc doi chieu voi TEN tai lieu trong index: khong khop ten nao thi
    // coi nhu khong co tu khoa. Nho vay moi cach hoi deu ra cung mot ket qua.
    const WAYS = [
      '2000円で何を食べますか', '2000円で何が作れる？', '2000円で作れる料理',
      '2000円以内の料理', '2000円で何食べよう', '2000円で食べられるもの',
      'ăn gì với 2000 yên', 'what can i eat with 2000 yen',
    ]
    const n = (r) => (r.groups || []).find((g) => g.key === 'recipe')?.count ?? 0
    const base = n(await get('/api/search?q=' + encodeURIComponent(WAYS[0])))
    check('cau dau tien tra ve co ket qua', base > 0, 'so mon = ' + base)
    for (const q of WAYS.slice(1)) {
      const r = await get('/api/search?q=' + encodeURIComponent(q))
      check(`"${q}" cho cung so mon`, n(r) === base, `${n(r)} vs ${base}`)
    }
    // Chatbot phai khop voi trang tim kiem
    for (const q of ['2000円で何を食べますか', 'ăn gì với 2000 yên']) {
      const r = await ask(q)
      check(`chatbot "${q}" khop trang tim kiem`,
        r.intent === 'recipe' && String(r.answer).includes(String(base)),
        'intent=' + r.intent + ', khong thay so ' + base)
    }
    // Cau CO tu khoa that thi van phai loc theo tu khoa, khong duoc duyet het
    const curry = await get('/api/search?q=' + encodeURIComponent('2000円以内のカレー'))
    check('"2000円以内のカレー" van loc theo tu khoa', n(curry) < base, n(curry) + ' vs ' + base)
  }

  console.log('--- 4. Search: sieu thi co ban ---')
  const milk = await get('/api/search?q=' + encodeURIComponent('牛乳'))
  check('co danh sach cua hang', !!milk.nearbyShops && milk.nearbyShops.items.length > 0)
  check('dung san pham 牛乳', milk.nearbyShops?.product?.name === '牛乳', milk.nearbyShops?.product?.name)
  const geo = await get('/api/search?q=' + encodeURIComponent('牛乳') + '&lat=34.71&lng=137.72')
  const ds = (geo.nearbyShops?.items || []).map((s) => s.distanceKm)
  check('xep theo khoang cach khi co toa do', ds.length > 1 && ds.every((d, i) => i === 0 || d >= ds[i - 1]), ds.join(','))

  console.log('--- 5. Khuyen mai con han ---')
  const promos = await get('/api/promos')
  const all = await get('/api/promos?all=1')
  check('co khuyen mai dang chay', promos.total > 0, 'total=' + promos.total)
  check('van giu 2 cai het han de chung minh co che tu go', all.expired === 2, 'expired=' + all.expired)

  console.log('--- 6. Chatbot ---')
  const cases = [
    ['1000円以下の料理を教えて', (r) => r.guard === 'over-budget', 'noi that khi khong co mon nao'],
    ['2000円以内で作れる料理は？', (r) => /材料費/.test(r.answer), 'noi ra tien nguyen lieu'],
    ['浜松市で牛乳を買える店は？', (r) => r.intent === 'stock' && /牛乳/.test(r.answer), 'dung mat hang + cua hang'],
    ['特売は何がありますか', (r) => /%OFF/.test(r.answer), 'liet ke dung khuyen mai'],
    ['cà ri có món nào không?', (r) => r.intent === 'recipe', 'hieu cau hoi tieng Viet'],
    ['15分で作れる料理', (r) => /件のレシピ/.test(r.answer), 'loc theo thoi gian'],
    ['このサイトで何ができますか', (r) => r.intent === 'feature', 'gioi thieu trang'],
  ]
  for (const [q, ok, name] of cases) {
    const r = await ask(q)
    check(name, ok(r), 'intent=' + r.intent + ' guard=' + r.guard)
  }

  console.log('--- 7. Dang ky khuyen mai + import Excel ---')
  {
    const d = (plus) => {
      const x = new Date()
      x.setDate(x.getDate() + plus)
      return x.toISOString().slice(0, 10)
    }
    const before = await get('/api/promos?all=1')

    // Dang ky 1 muc dung + 1 muc sai -> phai nhan cai dung, tu choi cai sai
    const name = '__test_' + Date.now()
    const post = await (
      await fetch(B + '/api/promos', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          items: [
            { productName: name, normalPrice: 500, salePrice: 400, uriba: '青果', endDate: d(5) },
            { productName: name + '_ng', normalPrice: 200, salePrice: 300, endDate: d(5) },
          ],
        }),
      })
    ).json()
    check('dang ky: nhan muc dung, bo muc sai', post.addedCount === 1 && post.errorCount === 1,
      `them ${post.addedCount} / loi ${post.errorCount}`)
    check('bao dung ly do bi tu choi', /安く/.test(post.errors?.[0]?.error || ''), post.errors?.[0]?.error)

    // Ghi that xuong file -> tim kiem phai thay ngay, khong can khoi dong lai
    const s2 = await get('/api/search?q=' + encodeURIComponent(name))
    const pg = (s2.groups || []).find((g) => g.key === 'promo')
    check('khuyen mai moi hien ngay o tim kiem', !!pg && pg.count >= 1, 'nhom 特売: ' + (pg?.count ?? 0))

    // File mau Excel tai duoc
    const tpl = await fetch(B + '/api/promos/template')
    const buf = await tpl.arrayBuffer()
    check('tai duoc file Excel mau', tpl.status === 200 && buf.byteLength > 3000, tpl.status + ', ' + buf.byteLength + ' bytes')

    // Don dep: xoa muc vua them
    const del = await (await fetch(B + '/api/promos?id=' + post.added[0].id, { method: 'DELETE' })).json()
    const after = await get('/api/promos?all=1')
    check('xoa duoc va ve dung so cu', del.removed === true && after.total === before.total,
      `${before.total} -> ${after.total}`)
  }

  console.log('--- 8. Trang ---')
  for (const p of ['/', '/promo', '/products', '/cart', '/list', '/search?q=' + encodeURIComponent('カレー'), '/recipe/mz0vi5knj', '/admin/promo', '/shop/']) {
    const res = await fetch(B + p)
    check('GET ' + p, res.status === 200, 'status=' + res.status)
  }

  console.log(`\nTONG: ${pass} dat / ${fail} khong dat`)
})()

process.on('exit', () => {})
