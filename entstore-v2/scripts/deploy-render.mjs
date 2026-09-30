/**
 * Day ban da build san len nhanh `deploy` de Render chi viec chay.
 *
 * Vi sao can: goi Free cua Render chi co 512MB RAM, ma `nuxt build` ton ~1,7GB
 * -> build tren Render bi "Out of memory". Luc CHAY server chi can ~170MB, nen
 * build o may minh roi dua ban build len la chay duoc.
 *
 * Cach lam: dung mot index git TAM (GIT_INDEX_FILE) de gom .output + data vao
 * mot commit mo coi (khong co cha), roi day de len nhanh `deploy`.
 * -> Khong dung toi index / working tree / nhanh main dang lam viec.
 * -> Moi lan chay la mot commit duy nhat, day de, nen nhanh deploy khong phinh ra.
 *
 * Dung:
 *   npm run deploy:render              build + day len GitHub (Render tu deploy)
 *   node scripts/deploy-render.mjs --no-build   dung .output hien co, khong build lai
 *   node scripts/deploy-render.mjs --no-push    chi tao commit de kiem tra, khong day
 */
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const BRANCH = 'deploy'
const args = new Set(process.argv.slice(2))
const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const git = (argv, opts = {}) =>
  execFileSync('git', argv, {
    cwd: opts.cwd || appDir,
    env: opts.env || process.env,
    encoding: 'utf8',
    input: opts.input,
  }).trim()

/**
 * package.json RIENG cho nhanh deploy — khong dung package.json that.
 * Voi package.json that, neu o Build/Start Command tren Render bi dien nham
 * (vd `npm run build`) thi Nuxt se build lai mot app RONG (nhanh deploy khong
 * co ma nguon) de len ban build san. Ban nay:
 *   - khong co dependency -> `npm install` / `npm ci` xong ngay
 *   - `build` chi in mot dong, khong dong vao .output
 *   - `start` chay server
 * => Build `npm install` (hay `npm ci && npm run build`) + Start `npm start`
 *    deu chay dung.
 */
const DEPLOY_PKG =
  JSON.stringify(
    {
      name: 'entstore-v2-deploy',
      private: true,
      type: 'module',
      scripts: {
        build: 'echo "Ban build san tu may local - khong can build lai"',
        start: 'node .output/server/index.mjs',
      },
      engines: { node: '>=20' },
    },
    null,
    2
  ) + '\n'
const DEPLOY_LOCK =
  JSON.stringify(
    { name: 'entstore-v2-deploy', lockfileVersion: 3, requires: true, packages: { '': { name: 'entstore-v2-deploy' } } },
    null,
    2
  ) + '\n'

const root = git(['rev-parse', '--show-toplevel'])
const app = path.relative(root, appDir).split(path.sep).join('/') || '.'

// ── 1. Build ────────────────────────────────────────────────────────────
if (!args.has('--no-build')) {
  console.log('▶ Dang build (mat khoang 1 phut)…')
  execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], {
    cwd: appDir,
    stdio: 'inherit',
    shell: process.platform === 'win32',
  })
}
if (!fs.existsSync(path.join(appDir, '.output/server/index.mjs'))) {
  console.error('✗ Khong thay .output/server/index.mjs — hay build truoc.')
  process.exit(1)
}

// ── 2. Gom .output + data vao mot commit mo coi, bang index tam ─────────
const idx = path.join(os.tmpdir(), 'entstore-deploy-index-' + process.pid)
const env = { ...process.env, GIT_INDEX_FILE: idx }
try {
  git(['read-tree', '--empty'], { cwd: root, env })
  git(['add', '-f', '--', `${app}/.output`, `${app}/data`], { cwd: root, env })
  for (const [name, body] of [['package.json', DEPLOY_PKG], ['package-lock.json', DEPLOY_LOCK]]) {
    const blob = git(['hash-object', '-w', '--stdin'], { cwd: root, input: body })
    git(['update-index', '--add', '--cacheinfo', `100644,${blob},${app}/${name}`], { cwd: root, env })
  }
  const files = git(['ls-files'], { cwd: root, env }).split('\n').filter(Boolean).length
  const tree = git(['write-tree'], { cwd: root, env })
  const src = git(['rev-parse', '--short', 'HEAD'], { cwd: root })
  const stamp = new Date().toISOString().replace('T', ' ').slice(0, 16)
  const commit = git(['commit-tree', tree, '-m', `deploy: ban build san tu ${src} (${stamp})`], { cwd: root })
  console.log(`✓ Da gom ${files} file vao commit ${commit.slice(0, 7)} (nguon: ${src})`)

  // ── 3. Day len nhanh deploy ─────────────────────────────────────────
  if (args.has('--no-push')) {
    console.log(`(--no-push) Chua day. Lenh day tay: git push -f origin ${commit}:refs/heads/${BRANCH}`)
  } else {
    console.log(`▶ Dang day len nhanh "${BRANCH}"… (lan dau hoi lau vi co thu muc _nuxt)`)
    execFileSync('git', ['push', '-f', 'origin', `${commit}:refs/heads/${BRANCH}`], { cwd: root, stdio: 'inherit' })
    console.log(`✓ Xong. Render se tu deploy nhanh "${BRANCH}" trong vai phut.`)
  }
} finally {
  fs.rmSync(idx, { force: true })
}
