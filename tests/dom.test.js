/* DOM-Smoke-Tests für index.html + index.js (jsdom).
   Prüft: Theme-Init/-Toggle, DE/EN-Umschaltung, Lightbox und
   Projektdialog inkl. Fokus-Management, Reveal-Fallback, Anker,
   Skill-Graph, Heatmap, Monitorwand, Kontakt-Baukasten, Hero-Intro. Läuft ohne GSAP/Lenis (externe Scripts werden
   nicht geladen) und prüft damit zugleich den Fallback ohne Libraries.
   Ausführung (CI oder lokal): npm install --no-save jsdom && node tests/dom.test.js */
'use strict';

const { JSDOM, VirtualConsole } = require('jsdom');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const js = fs.readFileSync(path.join(ROOT, 'index.js'), 'utf8');

// jsdom kennt kein Canvas — diese eine erwartete Meldung ausblenden,
// alle anderen Fehler weiterhin ausgeben.
const virtualConsole = new VirtualConsole();
virtualConsole.on('jsdomError', (e) => {
  if (!/Not implemented: HTMLCanvasElement/.test(e.message)) console.error(e);
});
virtualConsole.on('error', (...a) => console.error(...a));

// Externe <script src> entfernen (Vendor-Libs, boot.js, index.js) —
// index.js wird unten direkt injiziert
const dom = new JSDOM(html.replace(/<script src="[^"]+"><\/script>/g, ''), {
  virtualConsole,
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
document.querySelectorAll('.topbar-nav a[data-section]').forEach((a) => {
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

console.log('== Mobil-Menü ==');
const topbar = document.getElementById('topbar');
const navToggle = document.getElementById('navToggle');
const topbarNav = document.getElementById('topbarNav');
check('Menü initial geschlossen',
  !topbar.classList.contains('nav-open') && navToggle.getAttribute('aria-expanded') === 'false');
navToggle.click();
check('Klick öffnet Menü', topbar.classList.contains('nav-open'));
check('aria-expanded = true', navToggle.getAttribute('aria-expanded') === 'true');
check('Hintergrund gesperrt', document.body.classList.contains('nav-locked'));
navToggle.click();
check('Zweiter Klick schließt', !topbar.classList.contains('nav-open'));
check('Sperre wieder aufgehoben', !document.body.classList.contains('nav-locked'));
navToggle.click();
topbarNav.querySelector('a[data-section]').click();
check('Klick auf Menüpunkt schließt', !topbar.classList.contains('nav-open'));
navToggle.click();
document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
check('Escape schließt', !topbar.classList.contains('nav-open'));
check('Kontakt-Knopf liegt im Menü', !!topbarNav.querySelector('.nav-cta'));
check('Jeder Menüpunkt hat eine Sektionsnummer',
  Array.from(topbarNav.querySelectorAll('a[data-section]')).every((a) => !!a.querySelector('.nav-num')));

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

console.log('== Projektdialog (Fallstudie) ==');
const pd = document.getElementById('projDialog');
const pdBody = document.getElementById('projDialogBody');
const pdClose = document.getElementById('projDialogClose');
const openBtn = document.querySelector('[data-open-project="vulpexa"]');
check('Dialog initial hidden', pd.hidden === true);
openBtn.click();
check('Klick öffnet Dialog', pd.hidden === false);
check('Inhalt aus Template (Titel Vulpexa)', pdBody.textContent.includes('Vulpexa'));
check('Architekturdiagramm vorhanden', !!pdBody.querySelector('svg.arch-svg'));
// Fokus und Schließen laufen zeitversetzt (rAF bzw. Ausblend-Animation)
setTimeout(() => {
  check('Fokus auf Schließen-Button', document.activeElement === pdClose);
  document.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
}, 200);
check('Jedes Projekt hat ein Dialog-Template',
  Array.from(document.querySelectorAll('[data-open-project]')).every((b) => !!document.getElementById('tpl-proj-' + b.getAttribute('data-open-project'))));

console.log('== Skill-Graph ==');
const node = document.querySelector('.sg-node[data-skill="docker"]');
node.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
check('Klick auf Knoten zeigt passende Karte', document.querySelector('.sg-card[data-skill="docker"]').classList.contains('is-on'));
check('Abhängigkeiten hervorgehoben', document.querySelectorAll('.sg-edge.is-on').length > 0);

console.log('== Heatmap ==');
check('Initial ist 2026 gewählt', !document.querySelector('.hm-panel[data-year="2026"]').hidden);
document.querySelector('.hm-yb[data-year="2022"]').click();
check('Jahr 2022 wählbar', !document.querySelector('.hm-panel[data-year="2022"]').hidden && document.querySelector('.hm-panel[data-year="2026"]').hidden);
check('2022 enthält die Ausbildung', document.querySelector('.hm-panel[data-year="2022"]').textContent.includes('INEOS'));

console.log('== Texte ==');
check('Keine Gedankenstriche im sichtbaren Text (DE)', !/[\u2013\u2014]/.test(document.body.textContent));
check('Keine Gedankenstriche in den EN-Texten', Object.values(window.PF_EN).every((v) => !/[\u2013\u2014]/.test(v)));
check('Fusion IT nicht mehr als aktuell geführt', !document.body.textContent.includes('Fusion IT, Langenfeld Aktuell'));

console.log('== Reveal-Fallback ==');
check('Reveals ohne IntersectionObserver eingeblendet',
  Array.from(document.querySelectorAll('.reveal')).every((el) => el.classList.contains('in')));
check('Motion-Schicht aktiv (html.motion)', document.documentElement.classList.contains('motion'));
check('Ohne boot.js kein Boot-Overlay', !document.documentElement.classList.contains('is-booting'));

console.log('== Kontakt-Baukasten ==');
const ccSend = document.getElementById('ccSend');
const ccSubject = document.getElementById('ccSubject');
check('Kein Terminal mehr', !document.getElementById('term'));
check('Betreff vorbelegt (Stellenangebot)', ccSubject.textContent === 'Stellenangebot für dich');
const talk = document.querySelector('input[name="ccTopic"][value="talk"]');
talk.checked = true;
talk.dispatchEvent(new window.Event('change', { bubbles: true }));
document.getElementById('ccCompany').value = 'ACME';
document.getElementById('ccCompany').dispatchEvent(new window.Event('input', { bubbles: true }));
check('Thema und Firma landen im Betreff', ccSubject.textContent === 'Austausch zu HomeLab und Linux · ACME');
check('mailto-Link mit kodiertem Betreff', ccSend.getAttribute('href').startsWith('mailto:info@rxf-sys.de?subject=Austausch%20zu%20HomeLab'));
document.getElementById('langBtn').click();
check('Betreff folgt der Sprache (EN)', ccSubject.textContent.startsWith('Let’s talk HomeLab'));
document.getElementById('langBtn').click();
check('vCard verlinkt', document.querySelector('.cc-vcf').getAttribute('href') === '/assets/robin-frank.vcf');

console.log('== Runde-3-Inhalte ==');
check('Keine Selbsteinschätzung mehr', !document.body.textContent.includes('Selbsteinschätzung') && !/\d\/5/.test(document.querySelector('.sgraph').textContent));
check('Skills: Einleitung statt Untertitel', !!document.querySelector('#skills .section-intro') && !document.querySelector('#skills .kicker'));
check('Projekte und Kontakt ohne Untertitel', !document.querySelector('#projects .kicker') && !document.querySelector('#contact .kicker'));
check('Footer ohne GitHub-Link und ohne Bauvermerk', !document.querySelector('.footer a[href*="github"]') && !document.querySelector('.footer-built'));
check('RMM-Automatisierung und MagicMirror ohne Status', ['rmm', 'magicmirror'].every((id) => !document.querySelector('.screen[data-project="' + id + '"] .project-status')));
check('Admin-Dashboard in Arbeit (v2)', !!document.querySelector('.screen[data-project="admin"] .st-wip'));
check('NinjaOne-Zertifikate 2026', Array.from(document.querySelectorAll('.cert')).filter((c) => c.textContent.includes('NinjaOne')).every((c) => c.textContent.includes('2026')));

console.log('== Asynchron: Hero-Intro, Monitorwand ==');
setTimeout(() => {
  check('Hero-Intro gestartet (html.hero-in)', document.documentElement.classList.contains('hero-in'));
  check('Monitore ohne GSAP eingeschaltet',
    Array.from(document.querySelectorAll('.screen')).every((s) => s.classList.contains('on')));
  check('Escape schließt Dialog', pd.hidden === true && pdBody.children.length === 0);
  check('Fokus zurück auf Trigger', document.activeElement === openBtn);
  check('Ortszeit wird angezeigt', /^\d{2}:\d{2}:\d{2}$/.test(document.getElementById('localTime').textContent));

  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  process.exit(fail ? 1 : 0);
}, 3200);
