# portfolio.rxf-sys.de

Persönliche Portfolio-Website von [Robin Frank](https://github.com/rxf-sys) —
statisches HTML/CSS/JS **ohne Build-Schritt**, self-hosted auf dem eigenen
HomeLab (Proxmox-LXC) hinter einem Cloudflare Tunnel, ausgeliefert von Caddy.

**Live:** <https://portfolio.rxf-sys.de>

## Features

- **Konzept „Live System"** — die Seite inszeniert sich als laufender
  Server: kurze Boot-Sequenz beim ersten Besuch pro Sitzung (jede Taste
  überspringt), ein „Kabel" in der linken Randspalte, das beim Scrollen
  mitläuft und jede Sektion an ihrem Port aufleuchten lässt, Kennzahlen als
  Monitoring-Leiste mit Live-Ortszeit
- **Palette „Phosphor"** — Grün-Schwarz `#0B0F0E`, Papier `#ECEEE6`, ein
  Akzent Signal-Lime `#C6F432` (im Hellmodus als Text `#436100`), Amber für
  Warnzustände. Archivo (breite Display-Schrift) + Manrope (Fließtext) +
  JetBrains Mono (Zahlen, Labels, Terminal). Eigenständig — seit v3 nicht
  mehr mit `www.rxf-sys.de` synchron
- **Animationen** (GSAP 3.13 + ScrollTrigger + SplitText, Lenis 1.3 —
  selbst gehostet unter `assets/vendor/`):
  - Hero: zeilenweise maskierter Titel-Reveal, Netzwerk-Raster im
    Hintergrund (Canvas), das auf den Mauszeiger reagiert und Pakete
    über das Gitter schickt, magnetische Buttons, Tech-Stack-Laufband
  - Über mich: Leitsatz, dessen Wörter beim Scrollen nacheinander
    aufleuchten
  - Skills als systemd-Services, die beim Hineinscrollen „starten"
  - Projekte als horizontales, gepinntes Server-Rack mit Zähler
  - Zertifikate mit Scan-Linie, Werdegang als `git log --graph`, der sich
    beim Scrollen zeichnet, Sektionstitel mit Decode-Effekt
  - Ohne Libraries oder mit `prefers-reduced-motion` bleibt die Seite
    vollständig und statisch (kein Boot, kein Pinning, alles sichtbar)
- **Interaktives Terminal** im Kontaktbereich — `help`, `whoami`,
  `projects`, `cd <sektion>`, `theme`, `lang`, `sudo hire robin` …
  (Ausgabe nur per `textContent`, kein HTML)
- **Dark Mode** — folgt initial `prefers-color-scheme`, umschaltbar und
  persistent; ohne Theme-Flash dank Inline-Init im `<head>` (per CSP-Hash
  freigegeben, kein `unsafe-inline`)
- **DE/EN-Sprachumschalter** — DE-Texte im Markup, EN-Wörterbuch in
  `index.js`, Mapping über `data-i18n`-Attribute
- **Barrierefrei** — Tastaturbedienung mit sichtbaren Fokus-Stilen,
  Skip-Link, Fokus-Management in den Dialogen (Trap, Escape,
  Fokus-Rückgabe), Kontraste ≥ 4,5:1 (Fließtext ≥ 10:1)
- **Interaktive App-Demo** — Ryntra RMM und Orynthia als klickbare
  Prototypen mit Testdaten: Carousel in der Projekte-Sektion plus
  Prototyp-Modal mit Tab-Navigation

## Struktur

```
├── index.html          # Hauptseite (One-Pager, Hero + 6 Sektionen)
├── index.css           # Stylesheet (Design-Tokens in :root / html[data-theme="dark"])
├── index.js            # Theme, i18n, Boot, Motion-Schicht, Terminal, Lightbox, Demo
├── impressum.html      # Rechtsseite (noindex)
├── datenschutz.html    # Rechtsseite (noindex)
├── tests/dom.test.js   # jsdom-Smoke-Tests (laufen ohne GSAP → prüfen den Fallback)
├── assets/
│   ├── js/boot.js      # synchrones Boot-Gate im <head> (.js / .is-booting)
│   ├── vendor/         # GSAP, ScrollTrigger, SplitText, Lenis (unverändert, minified)
│   └── …               # Bilder, Icons, PDF
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
- Animations-Bibliotheken sind selbst gehostet (`script-src 'self'`) — kein
  zusätzliches CDN, keine CSP-Änderung nötig
- HSTS, `X-Content-Type-Options`, `X-Frame-Options`, Referrer- und
  Permissions-Policy — zentral im Caddyfile
- Repo-Metadaten (`/infrastructure/`, `/.git/`, `/.github/`, `/CLAUDE.md`,
  `/README.md`) werden vom Webserver mit 404 blockiert

## Lizenz

© Robin Frank — alle Rechte vorbehalten. Der Code darf als Referenz gelesen
werden; Inhalte, Texte und Bilder sind nicht zur Weiterverwendung freigegeben.
