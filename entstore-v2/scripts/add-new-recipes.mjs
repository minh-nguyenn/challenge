/**
 * Bo sung cong thuc MOI cua CMS vao chi muc (data/search-index.json).
 *
 * Vi sao can: moi dau thang CMS dang them cong thuc moi (vd. 9 mon thang 10).
 * Chi muc dung truoc do khong co cac mon nay, nen the cong thuc o trang chu /
 * レシピ集 phai chuyen khach sang Kitchen365 — dung luc demo la mat khach.
 *
 * Voi moi mon co trong CMS ma chua co trong chi muc:
 *   - CMS chi luu the gioi thieu + target_url (Kitchen365)
 *   - lay nguyen lieu / cach lam / dinh duong tu trang Kitchen365 do
 *   - them vao chi muc dung dinh dang cac mon kitchen365 san co
 * Mon da co thi KHONG dung toi. Chay lai bao nhieu lan cung duoc.
 *
 *   node scripts/add-new-recipes.mjs           # them va ghi file
 *   node scripts/add-new-recipes.mjs --dry     # chi liet ke, khong ghi
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { normalizeJa } from '../shared/jp-text.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const INDEX = path.join(ROOT, 'data', 'search-index.json')
const DRY = process.argv.includes('--dry')

// .env -> CMS_DOMAIN / CMS_KEY (khong them thu vien dotenv chi vi 2 bien)
const env = Object.fromEntries(
  fs.readFileSync(path.join(ROOT, '.env'), 'utf8')
    .split(/\r?\n/)
    .map((l) => l.match(/^\s*([A-Z_]+)\s*=\s*["']?([^"']*)["']?\s*$/))
    .filter(Boolean)
    .map((m) => [m[1], m[2]])
)
if (!env.CMS_DOMAIN || !env.CMS_KEY) throw new Error('Thieu CMS_DOMAIN / CMS_KEY trong .env')

async function cmsRecipes() {
  const all = []
  for (let offset = 0; ; offset += 100) {
    const url = `https://${env.CMS_DOMAIN}.microcms.io/api/v1/store-recipes?limit=100&offset=${offset}&orders=-open_start`
    const r = await (await fetch(url, { headers: { 'X-MICROCMS-API-KEY': env.CMS_KEY } })).json()
    all.push(...(r.contents || []))
    if (!r.contents?.length || all.length >= r.totalCount) return all
  }
}

const decode = (s) =>
  String(s)
    .replace(/<rt>.*?<\/rt>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()

const num = (s) => (String(s || '').match(/[\d.]+/) || [''])[0]

/** Doc trang chi tiet Kitchen365 -> nguyen lieu, cach lam, dinh duong */
function parseKitchen365(html) {
  const between = (start, end) => {
    const a = html.indexOf(start)
    if (a < 0) return ''
    const b = html.indexOf(end, a + start.length)
    return html.slice(a, b < 0 ? undefined : b)
  }
  const cell = (label) => {
    // <span>エネルギー</span><p>334 kcal</p>
    const m = html.match(new RegExp('<span>' + label + '</span><p>([^<]*)</p>'))
    return m ? m[1] : ''
  }
  // Bang dinh duong ban PC: hang tieu de roi hang so lieu
  const pc = between('<div class="right pc_disp">', '</table>')
  const tds = [...pc.matchAll(/<td>([^<]*)<\/td>/g)].map((m) => num(m[1]))

  const ingBlock = between('材料（', '</ul>')
  const ingredients = [...ingBlock.matchAll(/<li><span>(.*?)<\/span><span>(.*?)<\/span><\/li>/g)].map((m) => ({
    name: decode(m[1]),
    amount: decode(m[2]),
  }))
  const stepBlock = between('<h2 class="detail-ttl">作り方</h2>', '</ul>')
  const steps = [...stepBlock.matchAll(/<li><span>\d+<\/span>([\s\S]*?)<\/li>/g)].map((m) => decode(m[1]))

  const point = decode((between('ワンポイントメモ', '</p>').match(/<p>([\s\S]*)$/) || ['', ''])[1])
  const chef = decode((html.match(/name="data\[Search\]\[teacher\]" value="([^"]*)"/) || ['', ''])[1])
  const issue = decode((html.match(/>(\d{4}年\d{1,2}月号)</) || ['', ''])[1])
  const serving = decode((html.match(/材料（([^）]*)）/) || ['', ''])[1])

  const kcal = num(cell('エネルギー'))
  return {
    ingredients,
    steps,
    point,
    chef,
    issue,
    serving,
    cookTime: num(cell('調理時間')),
    hasVideo: /作り方動画/.test(html),
    nutrition: kcal
      ? {
          kcal,
          salt: num(cell('塩分')),
          // thu tu cot: たんぱく質, 脂質, 糖質, 食物繊維, カルシウム
          protein: tds[0] || '',
          fat: tds[1] || '',
          carb: tds[2] && tds[3] ? String(Math.round((Number(tds[2]) + Number(tds[3])) * 10) / 10) : '',
          sugar: tds[2] || '',
          fiber: tds[3] || '',
          calcium: tds[4] || '',
          basis: '1人分',
          real: true,
        }
      : null,
  }
}

const idx = JSON.parse(fs.readFileSync(INDEX, 'utf8'))
const have = new Set(idx.docs.map((d) => d.id))
const cms = await cmsRecipes()
const missing = cms.filter((r) => !have.has(`recipe:${r.id}`))
console.log(`CMS: ${cms.length} mon — chua co trong chi muc: ${missing.length}`)

const added = []
for (const r of missing) {
  if (!/^https:\/\/cgc-kitchen365\.jp\//.test(r.target_url || '')) {
    console.log(`  bo qua ${r.id} ${r.title}: khong co link Kitchen365`)
    continue
  }
  const html = await (await fetch(r.target_url)).text()
  const k = parseKitchen365(html)
  if (!k.ingredients.length || !k.steps.length) {
    console.log(`  bo qua ${r.id} ${r.title}: khong doc duoc noi dung`)
    continue
  }
  const category = r.category || []
  const text = `${r.title} ${category.join(' ')}`
  added.push({
    id: `recipe:${r.id}`,
    type: 'recipe',
    typeLabel: 'レシピ',
    title: r.title,
    route: `/recipe/${r.id}`,
    image: r.filename1?.url || '',
    date: r.open_start || r.publishedAt,
    category,
    externalUrl: r.target_url,
    hasVideo: !!r.video || k.hasVideo,
    ingredients: k.ingredients,
    steps: k.steps,
    energy: k.nutrition?.kcal || '',
    serving: k.serving,
    cookTime: k.cookTime || num(r.time),
    source: 'kitchen365',
    nutrition: k.nutrition,
    chef: k.chef,
    issue: k.issue,
    ...(k.point ? { point: k.point } : {}),
    text,
    norm: normalizeJa(r.title + ' ' + text),
    normTitle: normalizeJa(r.title),
  })
  console.log(`  + ${r.id} ${r.title}: ${k.ingredients.length} nguyen lieu, ${k.steps.length} buoc, ${k.nutrition?.kcal || '?'}kcal`)
  await new Promise((ok) => setTimeout(ok, 400)) // lich su voi trang nguon
}

if (DRY || !added.length) {
  console.log(DRY ? '(--dry: khong ghi file)' : 'Khong co gi de them.')
} else {
  // Mon moi nhat dung truoc, giong thu tu CMS
  const firstRecipe = idx.docs.findIndex((d) => d.type === 'recipe')
  idx.docs.splice(firstRecipe < 0 ? idx.docs.length : firstRecipe, 0, ...added)
  idx.counts.total = (idx.counts.total || 0) + added.length
  idx.counts.cms = (idx.counts.cms || 0) + added.length
  if (idx.counts.byEndpoint) idx.counts.byEndpoint['store-recipes'] = (idx.counts.byEndpoint['store-recipes'] || 0) + added.length
  idx.updatedAt = new Date().toISOString()
  fs.writeFileSync(INDEX, JSON.stringify(idx))
  console.log(`Da them ${added.length} mon vao data/search-index.json`)
}
