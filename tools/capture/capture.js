/* Captures real screenshots of my apps for the case studies.
   Each recipe opens a locally running instance with fictional demo data,
   signs in if needed and shoots the listed pages in light and dark at
   desktop and phone width. Output: WebP files in assets/images/projects/.

   Usage (from the repo root, see tools/capture/README.md):
     npm install --no-save playwright@1
     CAPTURE_PASSWORD=... node tools/capture/capture.js finance [--base http://localhost:5173]
     node tools/capture/capture.js www --base http://localhost:8766
   ImageMagick (`convert`) turns the PNGs into WebP. */
'use strict';

const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const OUT = path.resolve(__dirname, '..', '..', 'assets', 'images', 'projects');
const VIEWPORTS = {
  desk: { width: 1440, height: 900 },
  phone: { width: 390, height: 844 },
};

const RECIPES = {
  finance: {
    base: 'http://localhost:5173',
    async signIn(page, base) {
      const password = process.env.CAPTURE_PASSWORD;
      if (!password) throw new Error('Set CAPTURE_PASSWORD to the demo password used with seed-demo.');
      await page.goto(base + '/login');
      await page.getByLabel('E-Mail').fill('demo@example.org');
      await page.getByLabel('Passwort').fill(password);
      await page.getByRole('button', { name: 'Anmelden', exact: true }).click();
      await page.waitForURL((url) => !url.pathname.startsWith('/login'));
    },
    // The demo account has no second factor on purpose; hide only that reminder.
    async beforeShot(page) {
      await page.evaluate(() => {
        for (const link of document.querySelectorAll('a[href="/security"]')) {
          const box = link.parentElement;
          if (box && /nur mit einem Passwort/.test(box.textContent)) box.style.display = 'none';
        }
      });
    },
    pages: [
      { name: 'dashboard', path: '/' },
      { name: 'contracts', path: '/contracts' },
      { name: 'goals', path: '/goals' },
      { name: 'forecast', path: '/forecast' },
    ],
  },
  vulpexa: {
    // Backend seeded with rmm.rxf-sys.de/backend/tests/fixtures/seed_demo.py; personal names in
    // that seed are replaced in the scratch database before capturing (see README).
    base: 'http://127.0.0.1:4173',
    async signIn(page, base, scheme) {
      await page.addInitScript((theme) => {
        try {
          localStorage.setItem('vulpexa-theme-pref', theme);
          sessionStorage.setItem('vulpexa-boot-seen', '1');
        } catch (e) { /* storage blocked: defaults apply */ }
      }, scheme);
      const r = await page.request.post(base + '/api/auth/login', { data: { username: 'admin', password: 'demo-passwort-123' } });
      if (!r.ok()) throw new Error('Vulpexa demo login failed: ' + r.status());
    },
    pages: [
      { name: 'overview', path: '/' },
      { name: 'devices', path: '/devices' },
      { name: 'device', path: '/devices/1' },
      { name: 'patches', path: '/patches' },
    ],
  },
  www: {
    base: 'http://localhost:8766',
    pages: [{ name: 'home', path: '/' }],
  },
};

function arg(name, fallback) {
  const i = process.argv.indexOf('--' + name);
  return i > 0 ? process.argv[i + 1] : fallback;
}

async function main() {
  const name = process.argv[2];
  const recipe = RECIPES[name];
  if (!recipe) {
    console.error(`Unknown recipe "${name}". Known: ${Object.keys(RECIPES).join(', ')}`);
    process.exit(2);
  }
  const base = arg('base', recipe.base);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'capture-'));
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();
  try {
    for (const scheme of ['light', 'dark']) {
      for (const [vpName, viewport] of Object.entries(VIEWPORTS)) {
        const context = await browser.newContext({ viewport, deviceScaleFactor: 2, colorScheme: scheme, reducedMotion: 'reduce', locale: 'de-DE' });
        const page = await context.newPage();
        if (recipe.signIn) await recipe.signIn(page, base, scheme);
        for (const shot of recipe.pages) {
          await page.goto(base + shot.path, { waitUntil: 'networkidle' });
          await page.waitForTimeout(400);
          if (recipe.beforeShot) await recipe.beforeShot(page);
          const file = `${name}-${shot.name}-${scheme}-${vpName}`;
          const png = path.join(tmp, file + '.png');
          await page.screenshot({ path: png });
          // 2x capture, stored at 1x display width plus a sharp 2x variant
          execFileSync('convert', [png, '-resize', `${viewport.width}x`, '-quality', '82', path.join(OUT, file + '.webp')]);
          execFileSync('convert', [png, '-quality', '78', path.join(OUT, file + '@2x.webp')]);
          console.log('  ✓', file);
        }
        await context.close();
      }
    }
  } finally {
    await browser.close();
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
