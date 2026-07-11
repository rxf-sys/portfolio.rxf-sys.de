# portfolio.rxf-sys.de

Persönliche Portfolio-Website von [Robin Frank](https://github.com/rxf-sys) —
statisches HTML/CSS/JS **ohne Build-Schritt**, self-hosted auf dem eigenen
HomeLab (Proxmox-LXC) hinter einem Cloudflare Tunnel, ausgeliefert von Caddy.

**Live:** <https://portfolio.rxf-sys.de>

## Features

- **Design „Bento / Soft Modern"** — 12-Spalten-Bento-Grid, Farbpalette
  des eigenen RMM-Tools („Uxintace sunset": Navy / Peach / Terracotta),
  Bricolage Grotesque + Manrope
- **Dark Mode** — folgt initial `prefers-color-scheme`, umschaltbar und
  persistent; ohne Theme-Flash dank Inline-Init im `<head>` (per CSP-Hash
  freigegeben, kein `unsafe-inline`)
- **DE/EN-Sprachumschalter** — DE-Texte im Markup, EN-Wörterbuch in
  `index.js`, Mapping über `data-i18n`-Attribute
- **Animationen** — gestaffelte Scroll-Reveals, hochzählende Statistiken,
  Scroll-Fortschrittsbalken, Zertifikat-Lightbox; respektiert durchgängig
  `prefers-reduced-motion`
- **Barrierefrei** — Tastaturbedienung mit sichtbaren Fokus-Stilen,
  Skip-Link, Fokus-Management in der Lightbox (Trap, Escape, Fokus-Rückgabe)

## Struktur

```
├── index.html          # Hauptseite (One-Pager, 7 Sektionen)
├── index.css           # Stylesheet (Design-Tokens in :root / html[data-theme="dark"])
├── index.js            # Theme, i18n, Reveal, Counter, Lightbox (Vanilla JS)
├── impressum.html      # Rechtsseite (noindex)
├── datenschutz.html    # Rechtsseite (noindex)
├── tests/dom.test.js   # jsdom-Smoke-Tests
├── assets/             # Bilder, Icons, PDF
└── infrastructure/     # Caddyfile, Deploy-Script, Webhook-Konfiguration
```

## Lokale Entwicklung

Kein Build, kein npm für die Site — Dateien direkt bearbeiten. Wegen der
absoluten Pfade (`/index.css`, `/assets/…`) lokal am besten über einen
kleinen HTTP-Server testen statt per `file://`:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Tests & CI

GitHub Actions ([`ci.yml`](.github/workflows/ci.yml)) prüft bei jedem
Push/PR auf `main` — alle Jobs sind blocking:

| Check | Lokal ausführen |
| --- | --- |
| HTML-Validierung (html-validate@11) | `npx html-validate@11 "*.html"` |
| DOM-Smoke-Tests (jsdom) | `npm install --no-save jsdom && node tests/dom.test.js` |
| Link-Check (Lychee) | läuft in CI; LinkedIn/Xing ausgenommen (Bot-Blocking) |

## Deployment

```
git push origin main → GitHub-Webhook → adnanh/webhook (LXC) → deploy.sh
→ git reset --hard origin/main → Caddy liefert automatisch neu aus
```

Änderungen am [`infrastructure/Caddyfile`](infrastructure/Caddyfile) werden
**nicht** automatisch übernommen — Config auf dem Server aktualisieren und
`caddy reload` ausführen.

## Sicherheit

- CSP ohne `unsafe-eval`/`unsafe-inline` für Scripts (Inline-Theme-Init per
  SHA-256-Hash), `frame-ancestors 'none'`, `object-src 'none'`
- HSTS, `X-Content-Type-Options`, `X-Frame-Options`, Referrer- und
  Permissions-Policy — zentral im Caddyfile
- Repo-Metadaten (`/infrastructure/`, `/.git/`, `/.github/`, `/CLAUDE.md`,
  `/README.md`) werden vom Webserver mit 404 blockiert

## Lizenz

© Robin Frank — alle Rechte vorbehalten. Der Code darf als Referenz gelesen
werden; Inhalte, Texte und Bilder sind nicht zur Weiterverwendung freigegeben.
