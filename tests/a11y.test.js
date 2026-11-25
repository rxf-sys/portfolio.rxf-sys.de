/* Browser checks with Playwright and axe: the page and every case study at
   1440 and 390 px in light and dark. Fails on serious or critical axe
   violations, horizontal scrolling and console errors; writes screenshots
   to tests/screenshots/ for review (CI uploads them as an artifact).
   Run: npm install --no-save playwright@1.63.0 @axe-core/playwright@4.14.1
        python3 -m http.server 8765 &  then  node tests/a11y.test.js [http://127.0.0.1:8765] */
'use strict';

const { chromium } = require('playwright');
const { AxeBuilder } = require('@axe-core/playwright');
const fs = require('fs');
const path = require('path');

const BASE = process.argv[2] || 'http://127.0.0.1:8765';
const SHOTS = path.join(__dirname, 'screenshots');
const VARIANTS = [
  ['desktop', { width: 1440, height: 900 }],
  ['phone', { width: 390, height: 844 }],
];
// The sticky bar covers whatever scrolls beneath it; axe would count that as obscured content.
const UNSTICK = '.topbar { position: static !important; }';

let pass = 0, fail = 0;
function check(name, ok, detail) {
  if (ok) { pass++; console.log('  ✓', name); }
  else { fail++; console.log('  ✗', name + (detail ? '\n      ' + detail : '')); }
}

async function axe(page) {
  const r = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  return r.violations
    .filter((v) => v.impact === 'serious' || v.impact === 'critical')
    .map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`);
}

(async () => {
  fs.mkdirSync(SHOTS, { recursive: true });
  const browser = await chromium.launch();
  try {
    for (const [device, viewport] of VARIANTS) {
      for (const scheme of ['light', 'dark']) {
        const label = `${device}-${scheme}`;
        console.log(`== ${label} ==`);
        const context = await browser.newContext({ viewport, colorScheme: scheme, reducedMotion: 'reduce' });
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', (e) => errors.push(e.message));
        page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
        page.on('response', (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });

        await page.goto(BASE + '/', { waitUntil: 'networkidle' });
        await page.addStyleTag({ content: UNSTICK });
        await page.screenshot({ path: path.join(SHOTS, `page-${label}.png`), fullPage: true });
        const pageIssues = await axe(page);
        check('Seite ohne ernste axe-Verstöße', pageIssues.length === 0, pageIssues.join('\n      '));
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        check('kein seitliches Scrollen', overflow <= 0, `${overflow}px zu breit`);

        const ids = await page.$$eval('.wall [data-open-project]', (els) => els.map((e) => e.getAttribute('data-open-project')));
        for (const id of ids) {
          await page.evaluate((pid) => document.querySelector(`.wall [data-open-project="${pid}"]`).click(), id);
          await page.waitForSelector('#projDialog.open');
          await page.waitForTimeout(300);
          await page.screenshot({ path: path.join(SHOTS, `case-${id}-${label}.png`) });
          const issues = await axe(page);
          check(`Fallstudie ${id} ohne ernste axe-Verstöße`, issues.length === 0, issues.join('\n      '));
          await page.keyboard.press('Escape');
          await page.waitForSelector('#projDialog', { state: 'hidden' });
        }
        check('keine Konsolenfehler oder fehlenden Dateien', errors.length === 0, errors.join('\n      '));
        await context.close();
      }
    }
  } finally {
    await browser.close();
  }
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
