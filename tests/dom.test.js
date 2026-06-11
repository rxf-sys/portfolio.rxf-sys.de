/* DOM-Smoke-Tests für index.html + index.js (jsdom).
   Prüft: Theme-Init/-Toggle, DE/EN-Umschaltung, Lightbox inkl.
   Fokus-Management, Reveal-Fallback, Anker-Integrität.
   Ausführung (CI oder lokal): npm install --no-save jsdom && node tests/dom.test.js */
'use strict';

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(ROOT, 'index.js'), 'utf8');

// Externes <script src> entfernen — index.js wird unten direkt injiziert
const dom = new JSDOM(html.replace(/<script src="[^"]+"><\/script>/, ''), {
  url: 'https://portfolio.rxf-sys.de/',
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  beforeParse(window) {
    // jsdom implementiert matchMedia nicht (Browser-Standard seit IE10) — Stub
    window.matchMedia = (q) => ({
      matches: false, media: q,
      addEventListener() {}, removeEventListener() {},
      addListener() {}, removeListener() {},
    });
  },
});
const { window } = dom;
const { document } = window;

let pass = 0, fail = 0;
function check(name, cond) {
  if (cond) { pass++; console.log('  ✓', name); }
  else { fail++; console.log('  ✗', name); }
}

console.log('== Inline-Head-Script ==');
check('data-theme nach Head-Script gesetzt (light, matchMedia=false)',
  document.documentElement.getAttribute('data-theme') === 'light');

// index.js im Seitenkontext ausführen
const s = document.createElement('script');
s.textContent = js;
document.body.appendChild(s);

console.log('== Struktur ==');
check('Skip-Link-Ziel existiert', !!document.querySelector(document.querySelector('.skip-link').getAttribute('href')));
document.querySelectorAll('.nav-pills a').forEach((a) => {
  check('Nav-Ziel #' + a.getAttribute('data-section') + ' existiert', !!document.getElementById(a.getAttribute('data-section')));
});
check('Modal initial hidden', document.getElementById('certModal').hidden === true);

console.log('== Theme-Toggle ==');
const themeBtn = document.getElementById('themeBtn');
check('Icon initial Mond', themeBtn.querySelector('i').className === 'fas fa-moon');
themeBtn.click();
check('Klick → dark', document.documentElement.getAttribute('data-theme') === 'dark');
check('Icon → Sonne', themeBtn.querySelector('i').className === 'fas fa-sun');
check('localStorage persistiert', window.localStorage.getItem('pf2-theme') === 'dark');
themeBtn.click();
check('Klick → wieder light', document.documentElement.getAttribute('data-theme') === 'light');

console.log('== Sprachumschalter ==');
const langBtn = document.getElementById('langBtn');
const navAbout = document.querySelector('[data-i18n="nav.about"]');
const heroTitle = document.querySelector('[data-i18n-html="hero.title"]');
langBtn.click();
check('lang → en', document.documentElement.getAttribute('lang') === 'en');
check('Nav übersetzt', navAbout.textContent === 'About');
check('HTML-Übersetzung (hero.title) enthält Highlight-Span', heroTitle.innerHTML.includes('<span class="hl">infrastructure</span>'));
check('Button zeigt DE', langBtn.textContent === 'DE');
check('localStorage pf2-lang=en', window.localStorage.getItem('pf2-lang') === 'en');
langBtn.click();
check('Rückübersetzung DE', navAbout.textContent === 'Über mich' && document.documentElement.getAttribute('lang') === 'de');

console.log('== Lightbox ==');
const modal = document.getElementById('certModal');
const certImg = document.getElementById('certImg');
const certClose = document.getElementById('certClose');
const viewBtn = document.querySelector('.cert-view');
viewBtn.click();
check('Modal offen (hidden=false, .open)', modal.hidden === false && modal.classList.contains('open'));
check('Bildpfad übernommen', certImg.getAttribute('src') === viewBtn.getAttribute('data-img'));
check('Alt-Text übernommen', certImg.alt === viewBtn.getAttribute('data-alt'));
check('Fokus auf Schließen-Button', document.activeElement === certClose);
document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true }));
check('Tab hält Fokus im Dialog', document.activeElement === certClose);
document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
check('Escape schließt Modal', modal.hidden === true && !modal.classList.contains('open'));
check('Bild zurückgesetzt (Platzhalter)', certImg.getAttribute('src').startsWith('data:image/gif'));
check('Fokus zurück auf Trigger', document.activeElement === viewBtn);

console.log('== Reveal-Fallback ==');
check('Reveals ohne IntersectionObserver eingeblendet',
  Array.from(document.querySelectorAll('.reveal')).every((el) => el.classList.contains('in')));

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
