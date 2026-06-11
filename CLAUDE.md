# portfolio.rxf-sys.de

Portfolio-Website — statisches HTML/CSS/JS, kein Build-Schritt.
Design: „Bento / Soft Modern" (Navy/Slate/Blau-Grau/Sand), Dark Mode,
DE/EN-Sprachumschalter, Scroll-Animationen.

## Struktur

```
├── index.html          # Hauptseite (One-Pager, 7 Sektionen)
├── index.css           # Stylesheet (Design-Tokens in :root / html[data-theme="dark"])
├── index.js            # Theme, i18n (EN-Wörterbuch), Reveal, Counter, Lightbox
├── datenschutz.html    # nutzt .legal-*-Klassen aus index.css
├── impressum.html      # nutzt .legal-*-Klassen aus index.css
├── .htmlvalidate.json  # html-validate-Konfiguration (void-style: selfclosing)
├── robots.txt          # SEO: alles erlaubt, verweist auf sitemap.xml
├── sitemap.xml         # SEO: nur die Hauptseite (Rechtsseiten sind noindex)
├── tests/
│   └── dom.test.js     # jsdom-Smoke-Tests (Theme, i18n, Lightbox, Reveal)
├── assets/             # Bilder, Icons, PDF
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
- **Interne Pfade** (`/infrastructure/`, `/.git/`, `/.github/`, `/_headers`, `/CLAUDE.md`)
  werden von Caddy mit 404 blockiert
- **CSP**: kein `unsafe-eval`, kein `unsafe-inline` für Scripts. Das einzige
  Inline-Script ist das Theme-Init im `<head>` aller drei HTML-Dateien (verhindert
  Theme-Flash); es ist per **SHA-256-Hash** in der CSP im Caddyfile freigegeben.
  **Wird das Script geändert, muss es in allen drei HTML-Dateien byte-identisch
  bleiben und der Hash im Caddyfile neu berechnet werden:**
  `echo -n '<script-inhalt>' | openssl dgst -sha256 -binary | base64`
- **Cache-Busting**: `index.css`/`index.js` werden mit `?v=…` referenziert und von
  Caddy 7 Tage gecacht — **bei Änderungen an CSS/JS den `?v=`-Parameter in allen
  HTML-Dateien bumpen** (z. B. auf das aktuelle Datum)
- **Externe Ressourcen**: Google Fonts (Bricolage Grotesque, Manrope) und
  Font Awesome 6.5.0 via cdnjs — bei neuen externen Quellen die CSP im Caddyfile
  erweitern
- **i18n**: DE-Texte stehen im Markup, EN im `EN`-Objekt in `index.js`
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
