// Post-build step: renders every route with a headless browser and writes the
// resulting HTML (with the per-route <title>/meta/OG/JSON-LD that Seo.jsx sets
// at runtime) as static files. Social crawlers (Facebook, LinkedIn, Twitter,
// WhatsApp) do not execute JS, so without this every shared page would show
// the homepage's title/description/image. The SPA still hydrates and takes
// over client-side routing normally after load.
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'

const distDir = path.resolve('dist')
const port = 4319
const routes = ['/', '/o-nama', '/usluge', '/kontakt', '/politika-privatnosti', '/uslovi-koriscenja']

const mimeTypes = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
}

async function resolveFile(requestPath) {
  const cleanPath = decodeURIComponent(requestPath.split('?')[0])
  const candidate = path.join(distDir, cleanPath)
  if (!candidate.startsWith(distDir)) return null
  try {
    const info = await stat(candidate)
    if (info.isFile()) return candidate
  } catch {
    // fall through to SPA shell
  }
  return null
}

function startServer() {
  const server = createServer(async (req, res) => {
    const file = await resolveFile(req.url ?? '/')
    const filePath = file ?? path.join(distDir, 'index.html')
    try {
      const body = await readFile(filePath)
      const ext = path.extname(filePath)
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] ?? 'application/octet-stream' })
      res.end(body)
    } catch {
      res.writeHead(404)
      res.end('Not found')
    }
  })
  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => resolve(server))
  })
}

async function main() {
  if (!existsSync(distDir)) {
    throw new Error('dist/ not found — run "vite build" before the prerender step.')
  }

  const server = await startServer()
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const rendered = new Map()

  try {
    for (const route of routes) {
      const page = await browser.newPage()
      // 'domcontentloaded' only: the muted autoplay hero video never reaches
      // network-idle, so waiting for network silence would hang forever.
      await page.goto(`http://127.0.0.1:${port}${route}`, { waitUntil: 'domcontentloaded' })
      await page.waitForSelector('link[rel="canonical"]', { timeout: 15000 })
      const html = await page.content()
      rendered.set(route, `<!doctype html>\n${html}`)
      await page.close()
      console.log(`prerendered ${route}`)
    }
  } finally {
    await browser.close()
    server.close()
  }

  for (const [route, html] of rendered) {
    const outPath = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route.slice(1), 'index.html')
    await mkdir(path.dirname(outPath), { recursive: true })
    await writeFile(outPath, html, 'utf8')
  }

  console.log(`Prerendered ${rendered.size} routes into dist/.`)
}

main().catch((error) => {
  console.error('Prerender failed:', error)
  process.exit(1)
})
