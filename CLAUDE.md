# portfolio.rxf-sys.de

Portfolio-Website: statisches HTML/CSS/JS, kein Build-Schritt.
Konzept „Leitstand" (v4): die Seite wirkt wie ein nächtlicher Kontrollraum
(Konsolen-Kacheln, Skill-Graph, Monitorwand für Projekte mit Fallstudien,
Aktivitäts-Heatmap im Werdegang, Nachrichten-Baukasten im Kontakt). Palette „Leitstand"
(Warmschwarz `#100E0B`, Hell `#F1F0EE`, ein Akzent Bernstein `#FFB23E`,
als Text im Hellmodus `#8A4E00`), Dark Mode, DE/EN-Sprachumschalter.
Sichtbare Texte enthalten **keine Gedankenstriche** (— oder –), weder DE noch EN.

## Designsystem (eigenständig seit v3)

Die Tokens in `index.css` (`:root` / `html[data-theme="dark"]`) sind
**nicht** mit www.rxf-sys.de synchron: Farb- und Schriftänderungen
hier gehören **nicht** automatisch ins Schwester-Repo.

- **Aufbau `index.css`**: erst der Kern (Layout, Kopfleiste, Sektionen,
  Zertifikate, Kontakt-Baukasten, Dialoge, Rechtsseiten), danach der
  Block „Variant C · Leitstand", der die Tokens überschreibt und die
  Sektions-Komponenten (Graph, Monitorwand, Heatmap) enthält
- **Schriften**, selbst gehostet in `assets/fonts/` (woff2, OFL, aus
  Fontsource): Bricolage Grotesque (`--head`, `font-stretch` 84–92 %) ·
  Instrument Sans (`--sans`) · Martian Mono (`--mono`, `font-stretch` 87,5 %)
- **Farbregeln**: genau ein Akzent (Bernstein), kein Violett; Bernstein als
  Fläche immer mit dunkler Schrift (`--on-accent`), als Textfarbe im
  Hellmodus `--accent-ink`. Kontraste: Fließtext ≥ 10:1, `--muted` ≥ 5,5:1

## Motion-Schicht

- **Bibliotheken** selbst gehostet in `assets/vendor/` (unverändert aus npm):
  GSAP 3.13 (`gsap`, `ScrollTrigger`, `SplitText`, `Flip`) und Lenis 1.3.
  Updates: Datei ersetzen und den `?v=`-Parameter im `<script src>` anheben
- **`assets/js/boot.js`** läuft synchron im `<head>` und setzt nur `html.js`
  (Leitstand hat keine Boot-Sequenz; der Code dafür im Kern greift nur, wenn
  `#boot` und `html.is-booting` existieren)
- **`index.js`** besteht aus drei Teilen: `window.PF_EN`
  (EN-Texte), `window.PF_VARIANT(api)` (Graph, Monitorwand, Heatmap) und dem
  Kern (Theme, i18n, Reveals, Menü, Lightbox, Projektdialog, Kontakt-Baukasten,
  Lenis, Intro). Strings in `<template>`-Elementen (Fallstudien) werden von
  der Sprachumschaltung mit erfasst
- **Progressive Enhancement**: Startzustände (versteckt/gedimmt) gelten nur
  unter `html.motion` bzw. `html.js:not(.hero-in)`; CSS-Failsafes blenden
  den Hero (5 s) auch ohne JS wieder ein. `index.js` muss ohne GSAP/Lenis
  lauffähig bleiben: die jsdom-Tests prüfen genau diesen Fallback
- **Texte, die gesplittet/überschrieben werden** (SplitText, Scramble)
  machen das vor einem Sprachwechsel rückgängig: `applyLang` feuert
  `pf:beforelang` und danach `pf:lang`; neue Text-Effekte müssen darauf
  reagieren
- **Reduced Motion**: kein Scrub, kein Lenis, keine Einschalt-Effekte;
  jedes Element zeigt seinen Endzustand

### Gemeinsame Kopfleiste

Die Kopfleiste bleibt **strukturell** mit www.rxf-sys.de identisch (nur die
Farben folgen der eigenen Palette). Beide Seiten nutzen **dieselben Klassen
und dieselbe Reihenfolge**:
`.topbar` (randlos, `padding: 14px clamp(16px, 3vw, 48px)`, sticky) mit
`.brand` → `.topbar-nav` → `.lang-toggle` → `.topbar-cta` → `.theme-toggle`
→ `.nav-toggle`. Änderungen daran gehören immer in beide Repos.

- Unter **900 px** klappt `.topbar-nav` zu einem Panel unter der Leiste auf:
  `.nav-num` (Sektionsnummer, mono) und `.nav-cta` (Kontakt-Knopf) werden
  sichtbar, `.topbar-cta` verschwindet
- Der Schleier ist `.topbar::after`, absolut bei `top: 100%` — geschlossen mit
  `height: 0`, damit er nichts zum Scrollbereich beiträgt
- IDs, die das JS erwartet: `#topbar`, `#topbarNav`, `#navToggle`,
  `#themeBtn`, `#langBtn`

## Struktur

```
├── README.md           # Projekt-Doku (Features, lokale Entwicklung, CI, Deployment)
├── index.html          # Hauptseite (One-Pager, Hero + 6 Sektionen)
├── index.css           # Stylesheet (Design-Tokens in :root / html[data-theme="dark"])
├── index.js            # EN-Wörterbuch, Sektions-Module, Kern (Theme, i18n, Dialoge, Kontakt, Motion)
├── datenschutz.html    # nutzt .legal-*-Klassen aus index.css
├── impressum.html      # nutzt .legal-*-Klassen aus index.css
├── .htmlvalidate.json  # html-validate-Konfiguration (void-style: selfclosing)
├── robots.txt          # SEO: alles erlaubt, verweist auf sitemap.xml
├── sitemap.xml         # SEO: nur die Hauptseite (Rechtsseiten sind noindex)
├── tests/
│   └── dom.test.js     # jsdom-Smoke-Tests (Theme, i18n, Dialoge, Graph, Heatmap, Kontakt-Baukasten, Fallback ohne GSAP)
├── assets/             # Bilder, Icons, PDF
│   ├── js/boot.js      # synchrones Gate im <head> (setzt html.js)
│   ├── fonts/          # selbst gehostete Schriften (woff2)
│   ├── robin-frank.vcf # Kontaktkarte für „Kontakt speichern“
│   └── vendor/         # GSAP, ScrollTrigger, SplitText, Flip, Lenis (selbst gehostet)
├── _headers            # INAKTIV — nur historische Referenz (Cloudflare Pages Format)
└── infrastructure/
    ├── Caddyfile       # Webserver-Konfiguration (Security-Header, Caching, file_server)
    ├── deploy.sh       # Deploy-Script (Ziel: /opt/portfolio/deploy.sh auf LXC)
    ├── webhook.json    # adnanh/webhook Konfiguration
    └── webhook.service # systemd-Unit für den Webhook-Daemon
```

## Deployment

`git push origin main` → GitHub-Webhook → adnanh/webhook auf LXC → `deploy.sh`
→ `git fetch && git reset --hard origin/main` → Caddy liefert automatisch neu aus.

### Einmaliges Setup auf dem LXC

1. `deploy.sh` nach `/opt/portfolio/deploy.sh` kopieren: `chmod +x /opt/portfolio/deploy.sh`
2. In `webhook.json` den Platzhalter `HIER_WEBHOOK_SECRET_EINSETZEN` ersetzen
3. GitHub → Settings → Webhooks → URL: `https://portfolio.rxf-sys.de/hooks/deploy-portfolio`

## Wichtige Konventionen

- **Kein Build-Schritt, kein npm für die Site** — Änderungen direkt in
  HTML/CSS/JS-Dateien; npm-Tooling nur für CI-Checks (html-validate, jsdom-Tests)
- **Security-Header** werden **ausschließlich im `infrastructure/Caddyfile`** gesetzt
- **`_headers`** wird von Caddy **nicht gelesen** (Cloudflare Pages Format, inaktiv)
- **Interne Pfade** (`/infrastructure/`, `/.git/`, `/.github/`, `/_headers`, `/CLAUDE.md`,
  `/README.md`) werden von Caddy mit 404 blockiert
- **CSP**: kein `unsafe-eval`, kein `unsafe-inline` für Scripts. Das einzige
  Inline-Script ist das Theme-Init im `<head>` aller drei HTML-Dateien (verhindert
  Theme-Flash); es ist per **SHA-256-Hash** in der CSP im Caddyfile freigegeben.
  **Wird das Script geändert, muss es in allen drei HTML-Dateien byte-identisch
  bleiben und der Hash im Caddyfile neu berechnet werden:**
  `echo -n '<script-inhalt>' | openssl dgst -sha256 -binary | base64`
- **Cache-Busting**: `index.css`/`index.js` werden mit `?v=…` referenziert und von
  Caddy 7 Tage gecacht (`/assets/*` sogar 30 Tage, also auch `boot.js` und
  `vendor/`) — **bei Änderungen an CSS/JS den `?v=`-Parameter in allen
  HTML-Dateien bumpen** (z. B. auf das aktuelle Datum)
- **Externe Ressourcen**: nur noch Font Awesome 6.5.0 via cdnjs; die
  Schriften liegen selbst gehostet in `assets/fonts/` (kein Google Fonts).
  Scripts kommen **nur** von `'self'` (Libraries liegen in `assets/vendor/`) —
  bei neuen externen Quellen die CSP im Caddyfile erweitern
- **i18n**: DE-Texte stehen im Markup, EN in `window.PF_EN` am Anfang von `index.js`
  (Mapping über `data-i18n`/`data-i18n-html`) — neue Texte immer in beiden Sprachen
  pflegen
- **`X-Frame-Options: DENY`** + `frame-ancestors 'none'` — die Site soll nirgendwo
  eingebettet werden

## CI

`.github/workflows/ci.yml` bei jedem Push/PR auf `main`:

- **HTML-Validierung** (html-validate@11, blocking) — Konfiguration in
  `.htmlvalidate.json`; lokal prüfen mit `npx html-validate@11 "*.html"`
- **DOM-Smoke-Tests** (jsdom, blocking) — `tests/dom.test.js`; lokal:
  `npm install --no-save jsdom && node tests/dom.test.js`
- **Lychee Link-Check** (blocking) — LinkedIn/Xing sind ausgenommen
  (Bot-Blocking); alle anderen externen Links müssen erreichbar sein
