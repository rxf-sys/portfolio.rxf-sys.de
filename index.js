/* ============================================================
   Portfolio v4 · Leitstand. One file, three parts:
   1. window.PF_EN: English strings (German lives in the markup)
   2. window.PF_VARIANT: skill graph, monitor wall, activity heatmap
   3. core: theme, i18n, reveals, menu, dialogs, contact composer, Lenis, intro
   Runs without GSAP/Lenis; the jsdom tests check exactly that fallback.
   ============================================================ */
window.PF_EN = {
"skip": "Skip to content",
"proj.homelab.title": "HomeLab · Proxmox VE",
"proj.homelab.meta": "2022 to today · Personal · Infrastructure",
"proj.homelab.desc": "My self-hosted lab: a Proxmox VE node with ten LXC containers for Samba NAS, WireGuard VPN, Vaultwarden, Portainer and my own apps. Vaultwarden replaces the cloud password manager, WireGuard opens a secure tunnel from anywhere.",
"st.live": "Live",
"proj.homelab.s0": "LXC containers",
"proj.homelab.s1": "VMs",
"proj.homelab.s2": "running since",
"proj.homelab.d0": "One Proxmox node, services as LXC instead of VMs: less overhead per service.",
"proj.homelab.d1": "External access only via WireGuard and Cloudflare Tunnel, no open ports.",
"proj.homelab.d2": "Snapshots before every experiment, so a mistake never takes the network down.",
"projects.problem": "The problem",
"proj.homelab.problem": "Own services instead of cloud subscriptions, and a place to learn without risk.",
"projects.decisions": "Decisions",
"projects.asof": "As of 11/2026",
"projects.arch": "Architecture",
"proj.vulpexa.title": "Vulpexa · RMM-Plattform",
"proj.vulpexa.meta": "2026 · Self-hosted · rmm.rxf-sys.de",
"proj.vulpexa.desc": "Lean self-hosted RMM tool for my own servers and the family’s devices, modelled on NinjaOne. Monitoring, patching, scripts with live output and remote support via RustDesk.",
"st.wip": "In progress",
"proj.vulpexa.s0": "Heartbeat",
"proj.vulpexa.s1": "platforms",
"proj.vulpexa.s2": "open ports per device",
"proj.vulpexa.d0": "Agent written in Go as one static binary for Windows, Linux and macOS.",
"proj.vulpexa.d1": "Agents connect outbound via WebSocket: no open ports, no fixed IP.",
"proj.vulpexa.d2": "Signed auto-update (ed25519), TOTP and an audit log for every access.",
"proj.vulpexa.problem": "Look after five to fifteen devices without paying for an enterprise RMM.",
"proj.orynthia.title": "Orynthia · Alltags-App",
"proj.orynthia.meta": "2026 · Self-hosted · Open banking",
"proj.orynthia.desc": "A self-hosted all-rounder for everyday life: finances with open banking (PSD2), calendar, tasks, recipes, meal plan, lists, notes and travel. The modules work together: recipes go into the meal plan, the meal plan creates the shopping list.",
"proj.orynthia.s0": "modules",
"proj.orynthia.s1": "bank access",
"proj.orynthia.s2": "TOTP",
"proj.orynthia.d0": "Monorepo with a NestJS API and React frontend, Prisma as ORM.",
"proj.orynthia.d1": "Bank access via Enable Banking (PSD2), sensitive data AES-256 encrypted.",
"proj.orynthia.d2": "JWT with refresh tokens and TOTP 2FA, refuses to start without valid secrets.",
"proj.orynthia.problem": "Finances, appointments and household lived in five different apps.",
"proj.admin.title": "Admin-Dashboard",
"proj.admin.meta": "2026 · Self-hosted · v2 in progress",
"proj.admin.desc": "Live dashboard for the home server: Proxmox host and guests, UniFi network, Proxmox Backup Server, Cloudflare tunnel and DNS, plus an audit with twelve checks and a score. v2 adds roles, API tokens, TOTP and ntfy push.",
"proj.rmm.title": "RMM-Automatisierung",
"proj.rmm.meta": "2026 · NinjaOne · Automation",
"proj.rmm.desc": "NinjaOne scripting library for recurring maintenance tasks: patch reports, disk health checks and software inventory, written in PowerShell and Bash.",
"proj.magicmirror.title": "MagicMirror",
"proj.magicmirror.meta": "2023 · Smart home",
"proj.magicmirror.desc": "Self-built MagicMirror on a Raspberry Pi 4 with two custom modules for personalized displays and smart home integration.",
"proj.portfolio.title": "Portfolio website",
"proj.portfolio.meta": "2025 · This site",
"proj.portfolio.desc": "This website: static HTML, CSS and JS without a build step, animated with GSAP and Lenis. Self-hosted in my own HomeLab, reachable via Cloudflare Tunnel.",
"proj.ihk.title": "IHK final project",
"proj.ihk.meta": "2025 · IHK Cologne",
"proj.ihk.desc": "Documentation and implementation of my final project as an IT specialist for application development, with a Groovy backend and Bootstrap frontend.",
"st.passed": "Passed",
"proj.ihk.link0": "Documentation",
"nav.about": "About",
"nav.skills": "Skills",
"nav.projects": "Projects",
"nav.certs": "Certificates",
"nav.cv": "Experience",
"nav.contact": "Contact",
"who.seek.k": "Looking for",
"who.seek.v": "A permanent role in system administration",
"who.seek.m": "Cologne, Düsseldorf, Neuss area · available now",
"who.deg.k": "Qualification",
"who.deg.v": "IT specialist for application development",
"who.deg.m": "IHK Cologne · 2025",
"who.focus.k": "Focus",
"who.focus.v": "Linux, Proxmox, networking and automation",
"who.focus.m": "Own HomeLab since 2022",
"hero.chip": "Open to a new role",
"hero.title": "Hi, I’m Robin.<br />I keep <span class=\"hl\">infrastructure</span> running.",
"hero.lede": "Junior system administrator, trained as an IT specialist. Linux, Proxmox, networking and automation: learned on the job, deepened in my own HomeLab.",
"hero.cta1": "Get in touch",
"hero.cta2": "View projects",
"fact.statusV": "Open to a new role",
"fact.status": "Status",
"fact.degreeV": "IT Specialist (AE) · 2025",
"fact.degree": "Degree",
"fact.lastV": "Junior IT sysadmin · Fusion IT",
"fact.last": "Most recently",
"fact.labV": "Proxmox VE · 10 LXC and 2 VMs",
"fact.lab": "HomeLab",
"fact.lang": "Languages",
"fact.loc": "Location",
"facts.title": "Key facts",
"about.title": "About me",
"about.kicker": "Background and values",
"about.quote": "“The best infrastructure is the one nobody notices, because it just works.”",
"about.quoteSrc": "My standard",
"about.p1": "I’m a trained IT specialist for application development and most recently looked after customer infrastructures as a junior IT system administrator at Fusion IT in Langenfeld. My strengths: administering IT infrastructures, networking, and automating recurring tasks.",
"about.p2": "I deliberately moved from application development into administration. I’m fascinated by how systems stay stable, secure and observable under real load.",
"about.p3": "In my free time I run my own HomeLab on Proxmox VE: Samba NAS, WireGuard VPN, Vaultwarden, Portainer and my own apps. Every container is an experiment that deepens my Linux, virtualization and networking skills.",
"skills.title": "Skills",
"skills.intro": "In IT everything is connected. Here are a few nodes I have already got to know. Pick one to see what it builds on and where I use it.",
"graph.base": "base",
"grp.sys": "Systems",
"skill.linux.note": "Everyday base for servers, containers and agents.",
"graph.needs": "builds on",
"graph.feeds": "supports",
"skills.since": "since",
"skill.proxmox.note": "Own node with 10 LXC and 2 VMs, snapshots before every experiment.",
"skill.docker.note": "Every app of mine runs as a Compose stack.",
"skill.ninja.note": "Certified twice, scripts for maintenance and inventory.",
"grp.net": "Network",
"skill.wg.note": "Secure access to the HomeLab from anywhere.",
"skill.dns.note": "Own name resolution and addressing at home.",
"skill.fw.note": "Securepoint UTM operator, networking fundamentals and TCP/IP.",
"skills.none": "Training and work",
"skill.tunnel.note": "Publishing without open ports, security headers in the Caddyfile.",
"grp.dev": "Development",
"skill.java.note": "Training and IHK project with Grails on the JVM.",
"skill.js.note": "From MagicMirror modules to React dashboards.",
"skill.react.note": "Dashboards for my own self-hosted apps.",
"skill.python.note": "REST APIs and WebSocket servers with tests and type checks.",
"skill.go.note": "The Vulpexa agent as one static binary for three platforms.",
"skill.nest.note": "Backend of the Orynthia app with PostgreSQL and Redis.",
"grp.auto": "Data and automation",
"skill.bash.note": "Deploy, backup and setup scripts.",
"skill.ps.note": "Maintenance scripts for Windows fleets.",
"skill.sql.note": "Data models, migrations and reports.",
"skill.git.note": "CI checks on every push, deploys via webhook or self-hosted runner.",
"projects.title": "Projects",
"certs.title": "Certificates",
"certs.kicker": "Qualifications and training",
"cert1.title": "IT Specialist for Application Development",
"cert1.desc": "Completed vocational training at INEOS Manufacturing Deutschland GmbH.",
"certs.view": "View certificate",
"cert2.desc": "Certification as a NinjaOne technician for managed service providers.",
"cert3.desc": "Specialization in IT automation and scripting with the NinjaOne platform.",
"cert4.date": "July 2026",
"cert4.desc": "Operating and initial setup of a Securepoint NextGen UTM firewall, including networking fundamentals, TCP/IP, addressing and routing.",
"cert5.date": "July 2026",
"cert5.desc": "Managing Securepoint Antivirus Pro: unified security, cloud administration and initial setup for endpoint protection.",
"cert6.title": "University of Applied Sciences entrance qualification",
"cert6.desc": "Focus on business and administration, the foundation for the later IHK training.",
"cv.title": "Experience",
"cv.kicker": "Work and education, chronological",
"cv.type.school": "School",
"cv.type.work": "Work",
"cv.type.project": "Project",
"cv.type.cert": "Certificate",
"tl.2009.f5fe09b.t": "Ganztagsgrundschule Mehren",
"tl.2009.f5fe09b.s": "Primary school",
"tl.2013.e8457fd.t": "Drei-Maare-Realschule plus Daun",
"tl.2013.e8457fd.s": "Secondary school certificate",
"tl.2018.68b3570.t": "Johann Energie GmbH",
"tl.2018.68b3570.s": "April: student internship, commercial and technical",
"tl.2019.dbd27bd.t": "BBS Gerolstein",
"tl.2019.dbd27bd.s": "University entrance qualification, focus on computer science",
"tl.2020.0a196b0.t": "TofuTown GmbH",
"tl.2020.0a196b0.s": "August: summer job in packing and quality control",
"tl.2021.e6756bd.t": "HIT Handelsgruppe GmbH & Co. KG",
"tl.2021.e6756bd.s": "May to August: part-time job as cashier and shelf stocker",
"tl.2022.079744f.t": "INEOS Manufacturing Deutschland GmbH",
"tl.2022.079744f.s": "September 2022 to August 2025: training as an IT specialist for application development",
"tl.2022.2efac8f.t": "HomeLab",
"tl.2022.2efac8f.s": "The first Proxmox node goes live",
"tl.2023.3afd102.t": "MagicMirror",
"tl.2023.3afd102.s": "Raspberry Pi 4 with two custom modules",
"tl.2025.0ac0846.t": "IHK-Abschluss",
"tl.2025.0ac0846.s": "August: IT specialist for application development, IHK Cologne",
"tl.2026.df7294c.t": "NinjaOne",
"tl.2026.df7294c.s": "Certified Technician MSP and Automation Specialist",
"tl.2026.04a75c6.t": "Fusion IT, Langenfeld",
"tl.2026.04a75c6.s": "January to September: junior IT system administrator, customer infrastructures, RMM, onboarding",
"tl.2026.a0b6ab2.t": "Securepoint",
"tl.2026.a0b6ab2.s": "July: UTM Operator and Antivirus Pro Operator",
"tl.2026.4fb765d.t": "Vulpexa, Orynthia, Admin-Dashboard",
"tl.2026.4fb765d.s": "My own apps run in the HomeLab",
"cv.type.now": "Today",
"tl.2026.1e87bc8.t": "Open to a new role",
"tl.2026.1e87bc8.s": "Since October 2026",
"contact.title": "Contact",
"contact.head": "Drop me a line.<br />I’ll get <span class=\"hl\">back to you</span>.",
"contact.lede": "Looking for help in system administration? Or want to talk HomeLabs, Linux or automation? I’d love to hear from you.",
"contact.cta1": "Write an e-mail",
"contact.region": "Region",
"contact.regionV": "Dormagen, NRW · remote and on-site",
"contact.response": "Response time",
"contact.responseV": "Usually within 24 hours",
"cc.title": "Prepare a message",
"cc.lede": "Pick a topic and optionally add your name and company. The finished e-mail opens in your mail app; nothing is sent through this page.",
"cc.topic": "What is it about?",
"cc.t.job": "Job offer",
"cc.t.project": "Project",
"cc.t.talk": "Just talk",
"cc.name": "Your name (optional)",
"cc.company": "Company (optional)",
"cc.subject": "Subject",
"cc.send": "Open in mail app",
"cc.copy": "Copy address",
"cc.vcf": "Save contact (.vcf)",
"footer.copy": "© 2026 Robin Frank · All rights reserved",
"footer.imprint": "Imprint",
"footer.privacy": "Privacy",
"footer.top": "Back to top"
};

/* Variant C · Leitstand: skill graph, monitor wall with power-on, activity heatmap. */
window.PF_VARIANT = function (api) {
  'use strict';
  var $all = api.$all;

  /* ---------- Skills: graph focus shows a node, its dependencies and details ---------- */
  var graph = document.querySelector('.sgraph');
  if (graph) {
    var nodes = $all('.sg-node', graph);
    var edges = $all('.sg-edge', graph);
    var cards = $all('.sg-card', graph);
    nodes.forEach(function (n, i) { n.style.setProperty('--d', i); });
    var current = null;
    var focus = function (id) {
      current = id;
      graph.classList.toggle('has-focus', !!id);
      var near = {};
      edges.forEach(function (e) {
        var on = !!id && (e.getAttribute('data-a') === id || e.getAttribute('data-b') === id);
        e.classList.toggle('is-on', on);
        if (on) { near[e.getAttribute('data-a')] = 1; near[e.getAttribute('data-b')] = 1; }
      });
      nodes.forEach(function (n) {
        var sid = n.getAttribute('data-skill');
        n.classList.toggle('is-on', sid === id);
        n.classList.toggle('is-near', !!near[sid] && sid !== id);
      });
      cards.forEach(function (c) { c.classList.toggle('is-on', c.getAttribute('data-skill') === id); });
    };
    nodes.forEach(function (n) {
      var sid = n.getAttribute('data-skill');
      n.addEventListener('mouseenter', function () { if (api.finePointer) focus(sid); });
      n.addEventListener('click', function () { focus(current === sid ? null : sid); });
      n.addEventListener('focus', function () { focus(sid); });
      n.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); focus(current === sid ? null : sid); }
      });
    });
    focus('linux');
  }

  /* ---------- Projects: screens power on as they scroll in; dialog zooms out of the screen ---------- */
  $all('.screen').forEach(function (s, i) {
    if (!api.motion) { s.classList.add('on'); return; }
    api.onceVisible(s, function () { setTimeout(function () { s.classList.add('on'); }, (i % 4) * 110); }, 0.9);
  });
  api.setProjectAnimator(function (trigger, dlg) {
    if (!api.hasGsap || !trigger) return;
    var glass = trigger.querySelector('.scr-glass') || trigger;
    var panel = dlg.querySelector('.pd-panel');
    if (!panel) return;
    var gr = glass.getBoundingClientRect(), pr = panel.getBoundingClientRect();
    api.gsap.fromTo(panel,
      { x: gr.left + gr.width / 2 - (pr.left + pr.width / 2), y: gr.top + gr.height / 2 - (pr.top + pr.height / 2), scale: Math.max(0.2, gr.width / pr.width), opacity: 0.5 },
      { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.6, ease: 'expo.out', clearProps: 'transform,opacity' });
  });

  /* ---------- Experience: pick a year on the heatmap ---------- */
  var heat = document.getElementById('heat');
  if (heat) {
    var cells = $all('.hm-cell', heat);
    var ybtns = $all('.hm-yb', heat);
    var panels = $all('.hm-panel', heat);
    cells.forEach(function (c, i) { c.style.setProperty('--d', i % 18 + Math.floor(i / 18) * 3); });
    var pick = function (y) {
      y = String(y);
      ybtns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-year') === y)); });
      cells.forEach(function (c) { c.classList.toggle('is-sel', c.getAttribute('data-year') === y); });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-year') !== y; });
    };
    ybtns.forEach(function (b) { b.addEventListener('click', function () { pick(b.getAttribute('data-year')); api.relayout(); }); });
    cells.forEach(function (c) { c.addEventListener('click', function () { pick(c.getAttribute('data-year')); }); });
    pick(2026);
  }
};

/* ============================================================
   Portfolio v4 core: theme, i18n (EN from window.PF_EN), visibility
   watcher, reveals, counters, header state, mobile menu, active nav,
   cert lightbox, project dialog, clock, title scramble, hero grid,
   contact composer, Lenis + statement, hero intro, boot sequence.
   A variant script may register window.PF_VARIANT(api) for its own
   sections; the core runs fine without it, and without GSAP/Lenis.
   ============================================================ */
(function () {
  'use strict';

  var EN = window.PF_EN || {};

  var LS_THEME = 'pf2-theme', LS_LANG = 'pf2-lang', SS_BOOT = 'pf3-booted';
  var html = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var SplitText = window.SplitText;
  var Flip = window.Flip;
  var hasGsap = !!(gsap && ScrollTrigger);
  var motion = !reduceMotion;
  var lenis = null;

  // CSS-level motion layer: reveals and scroll states. Without it
  // (reduced motion) every element simply stays in its final state.
  if (motion) html.classList.add('motion');
  if (hasGsap) {
    gsap.registerPlugin.apply(gsap, [ScrollTrigger].concat(SplitText ? [SplitText] : [], Flip ? [Flip] : []));
  }

  function emit(name, detail) { document.dispatchEvent(new CustomEvent(name, { detail: detail })); }
  function clamp(v, a, b) { return Math.min(Math.max(v, a), b); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function lockScroll(on) { if (lenis) { if (on) lenis.stop(); else lenis.start(); } }

  /* ============ Theme ============ */
  var themeBtn = document.getElementById('themeBtn');
  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    if (themeBtn) {
      var icon = themeBtn.querySelector('i');
      if (icon) icon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    emit('pf:theme');
  }
  function toggleTheme() {
    var t = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(t);
    try { localStorage.setItem(LS_THEME, t); } catch (e) { /* storage blocked: theme just isn't remembered */ }
    return t;
  }
  // Initial state comes from the inline script in <head>; only sync the icon.
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  /* ============ Language ============ */
  var langBtn = document.getElementById('langBtn');
  var originals = {}; // key -> German original

  function collectOriginals() {
    // Templates (project dialogs, radar details) carry strings too
    var roots = [document].concat($all('template').map(function (tp) { return tp.content; }));
    roots.forEach(function (root) {
      $all('[data-i18n]', root).forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        if (originals[k] === undefined) originals[k] = el.textContent;
      });
      $all('[data-i18n-html]', root).forEach(function (el) {
        var k = el.getAttribute('data-i18n-html');
        if (originals[k] === undefined) originals[k] = el.innerHTML;
      });
    });
  }
  function applyLang(l) {
    // Animations that split or rewrite text undo themselves first
    emit('pf:beforelang');
    $all('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (originals[k] === undefined) originals[k] = el.textContent;
      el.textContent = l === 'en' && EN[k] !== undefined ? EN[k] : originals[k];
    });
    $all('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (originals[k] === undefined) originals[k] = el.innerHTML;
      el.innerHTML = l === 'en' && EN[k] !== undefined ? EN[k] : originals[k];
    });
    html.setAttribute('lang', l);
    if (langBtn) {
      langBtn.textContent = l === 'en' ? 'DE' : 'EN';
      langBtn.setAttribute('aria-label', l === 'en' ? 'Auf Deutsch umschalten' : 'Switch to English');
    }
    emit('pf:lang');
  }

  collectOriginals();
  var lang = 'de';
  try { lang = localStorage.getItem(LS_LANG) === 'en' ? 'en' : 'de'; } catch (e) { lang = 'de'; }
  if (lang === 'en') applyLang('en');

  function setLang(l) {
    lang = l;
    applyLang(lang);
    try { localStorage.setItem(LS_LANG, lang); } catch (e) { /* storage blocked: language just isn't remembered */ }
  }
  if (langBtn) langBtn.addEventListener('click', function () { setLang(lang === 'de' ? 'en' : 'de'); });
  function t(key) { return lang === 'en' && EN[key] !== undefined ? EN[key] : (originals[key] !== undefined ? originals[key] : key); }

  /* ============ Visibility watcher ============
     One rect-based check per scroll frame. Fires each callback once when
     the element's top crosses `ratio` of the viewport height. */
  var watchers = [];
  function onceVisible(el, fn, ratio) { watchers.push({ el: el, fn: fn, ratio: ratio || 0.9 }); }
  function watchCheck() {
    if (!watchers.length) return;
    var vh = window.innerHeight, due = [];
    watchers = watchers.filter(function (w) {
      if (w.el.getBoundingClientRect().top < vh * w.ratio) { due.push(w); return false; }
      return true;
    });
    due.forEach(function (w) { w.fn(w.el); });
  }

  /* ============ Reveal (staggered children) ============ */
  $all('.section-head').forEach(function (el) { el.classList.add('reveal'); });
  $all('[data-stagger]').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (kid, i) { kid.style.setProperty('--d', Math.min(i, 8)); });
  });
  $all('.reveal').forEach(function (el) {
    onceVisible(el, function () { el.classList.add('in'); }, 0.92);
  });

  /* ============ Counting numbers ============ */
  function animateNum(el) {
    var m = el.textContent.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!m) return;
    var prefix = m[1], target = parseInt(m[2], 10), suffix = m[3];
    if (!motion || target <= 1 || target > 1900) return;
    var start = null, dur = 1000;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = prefix + Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  $all('[data-count]').forEach(function (el) {
    if (!el.closest('.hero')) onceVisible(el, animateNum, 0.92);
  });

  /* ============ Header state, progress bar, scroll hooks ============ */
  var header = document.getElementById('topbar');
  var progressBar = document.getElementById('scrollProgress');
  var frameHooks = [], relayoutHooks = [];

  function frame() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 30);
    if (progressBar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (max > 0 ? Math.min(window.scrollY / max, 1) * 100 : 0) + '%';
    }
    watchCheck();
    frameHooks.forEach(function (fn) { fn(); });
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; frame(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Keep the CSS header height in sync with the real bar (pinning, anchors)
  function syncHeaderHeight() {
    if (header) html.style.setProperty('--topbar-h', header.offsetHeight + 'px');
  }
  syncHeaderHeight();

  function relayout() {
    syncHeaderHeight();
    if (hasGsap) ScrollTrigger.refresh();
    relayoutHooks.forEach(function (fn) { fn(); });
    frame();
  }
  var resizeTimer = 0;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      syncHeaderHeight();
      relayoutHooks.forEach(function (fn) { fn(); });
      frame();
    }, 150);
  }, { passive: true });
  window.addEventListener('load', relayout);
  document.addEventListener('pf:lang', function () { setTimeout(relayout, 60); });
  if (hasGsap) ScrollTrigger.addEventListener('refresh', function () { relayoutHooks.forEach(function (fn) { fn(); }); });

  /* ============ Mobile menu ============ */
  var navToggle = document.getElementById('navToggle');
  var topbarNav = document.getElementById('topbarNav');

  function setMenu(open) {
    if (!header || !navToggle) return;
    header.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    document.body.classList.toggle('nav-locked', open);
    lockScroll(open);
  }
  function menuOpen() { return !!header && header.classList.contains('nav-open'); }

  if (navToggle) navToggle.addEventListener('click', function () { setMenu(!menuOpen()); });
  if (topbarNav) {
    topbarNav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOpen()) {
      setMenu(false);
      if (navToggle) navToggle.focus();
    }
  });
  document.addEventListener('click', function (e) {
    if (menuOpen() && header && !header.contains(e.target)) setMenu(false);
  });
  var wide = window.matchMedia('(min-width: 901px)');
  if (wide.addEventListener) wide.addEventListener('change', function (e) { if (e.matches) setMenu(false); });

  /* ============ Active navigation ============ */
  var navLinks = $all('.topbar-nav a[data-section]');
  var sections = [];
  navLinks.forEach(function (a) {
    var sec = document.getElementById(a.getAttribute('data-section'));
    if (sec) sections.push({ a: a, sec: sec });
  });
  if ('IntersectionObserver' in window && sections.length) {
    var no = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.remove('active'); });
        var hit = sections.filter(function (s) { return s.sec === en.target; })[0];
        if (hit) hit.a.classList.add('active');
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { no.observe(s.sec); });
    /* Sections without a nav entry (hero, contact) only clear the marker */
    ['home', 'contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) no.observe(el);
    });
  }

  /* ============ Cert lightbox (with focus management) ============ */
  var modal = document.getElementById('certModal');
  var certImg = document.getElementById('certImg');
  var certClose = document.getElementById('certClose');
  var BLANK_IMG = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  var lastTrigger = null;

  function closeModal() {
    modal.classList.remove('open');
    modal.hidden = true;
    certImg.src = BLANK_IMG;
    certImg.alt = '';
    lockScroll(false);
    if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
  }
  if (modal && certImg && certClose) {
    $all('.cert-view').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lastTrigger = btn;
        certImg.src = btn.getAttribute('data-img');
        certImg.alt = btn.getAttribute('data-alt') || '';
        modal.hidden = false;
        modal.classList.add('open');
        lockScroll(true);
        certClose.focus();
      });
    });
    certClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab') { e.preventDefault(); certClose.focus(); }
    });
  }

  /* ============ Project dialog (case studies) ============
     Content comes from <template id="tpl-proj-ID">; a variant can animate
     the opening with api.setProjectAnimator(fn(trigger, panel)). */
  var pd = document.getElementById('projDialog');
  var pdBody = document.getElementById('projDialogBody');
  var pdClose = document.getElementById('projDialogClose');
  var pdTrigger = null, pdAnimator = null;

  function focusables(root) {
    return $all('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', root)
      .filter(function (el) { return el.offsetParent !== null || el === pdClose; });
  }
  function openProject(id, trigger) {
    var tpl = document.getElementById('tpl-proj-' + id);
    if (!pd || !pdBody || !tpl) return;
    pdTrigger = trigger || null;
    pdBody.textContent = '';
    pdBody.appendChild(tpl.content.cloneNode(true));
    // Strings inside the template follow the current language
    $all('[data-i18n]', pdBody).forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $all('[data-i18n-html]', pdBody).forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    pd.hidden = false;
    pd.setAttribute('data-project', id);
    lockScroll(true);
    document.body.classList.add('pd-open');
    requestAnimationFrame(function () {
      pd.classList.add('open');
      if (pdAnimator && motion) pdAnimator(trigger, pd);
      pdClose.focus({ preventScroll: true });
    });
    emit('pf:projopen', { id: id });
  }
  function closeProject() {
    if (!pd || pd.hidden) return;
    pd.classList.remove('open');
    var finish = function () {
      pd.hidden = true;
      pdBody.textContent = '';
      document.body.classList.remove('pd-open');
      lockScroll(false);
      if (pdTrigger) { pdTrigger.focus({ preventScroll: true }); pdTrigger = null; }
    };
    if (motion) setTimeout(finish, 280); else finish();
  }
  if (pd && pdClose) {
    document.addEventListener('click', function (e) {
      var tr = e.target.closest('[data-open-project]');
      if (tr) { e.preventDefault(); openProject(tr.getAttribute('data-open-project'), tr); }
    });
    pdClose.addEventListener('click', closeProject);
    pd.addEventListener('click', function (e) { if (e.target === pd) closeProject(); });
    document.addEventListener('keydown', function (e) {
      if (pd.hidden) return;
      if (e.key === 'Escape') { closeProject(); return; }
      if (e.key === 'Tab') {
        var f = focusables(pd);
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ============ Local time (Europe/Berlin) ============ */
  var timeEl = document.getElementById('localTime');
  var berlinTime = new Intl.DateTimeFormat('de-DE', {
    timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
  if (timeEl) {
    var tickClock = function () { timeEl.textContent = berlinTime.format(new Date()); };
    tickClock();
    setInterval(tickClock, 1000);
  }

  /* ============ Title scramble (decode effect) ============ */
  var GLYPHS = '!<>/[]{}=+*^?#01';
  var scrambles = [];
  function scramble(el) {
    if (!motion) return;
    var target = el.textContent, len = target.length, total = 28, frameNo = 0;
    var job = { el: el, target: target, raf: 0 };
    scrambles.push(job);
    var step = function () {
      var out = '';
      for (var i = 0; i < len; i++) {
        var settle = (i / len) * total * 0.75 + 4;
        out += frameNo >= settle || target[i] === ' ' ? target[i] : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
      frameNo++;
      if (frameNo <= total) { job.raf = requestAnimationFrame(step); return; }
      el.textContent = target;
      scrambles.splice(scrambles.indexOf(job), 1);
    };
    step();
  }
  document.addEventListener('pf:beforelang', function () {
    scrambles.forEach(function (j) { cancelAnimationFrame(j.raf); j.el.textContent = j.target; });
    scrambles = [];
  });
  $all('[data-scramble]').forEach(function (h) { onceVisible(h, scramble, 0.85); });

  /* ============ Hero network grid (canvas) ============
     Dot grid that reacts to the pointer; packets travel along grid lines.
     Runs only while the hero is visible; reduced motion draws one frame.
     data-grid="lines" draws a blueprint grid instead of dots. */
  (function heroGrid() {
    var cv = document.getElementById('heroGrid');
    var heroEl = document.getElementById('home');
    if (!cv || !heroEl || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    if (!ctx) return;
    var linesMode = cv.getAttribute('data-grid') === 'lines';
    var GAP = linesMode ? 40 : 34, R = 150;
    var w = 0, h = 0, cols = 0, rows = 0;
    var mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    var packets = [], lastSpawn = 0, raf = 0, onScreen = true;
    var colDot = '', colAcc = '';

    function readColors() {
      var cs = getComputedStyle(html);
      colDot = cs.getPropertyValue('--grid-dot').trim() || 'rgba(128,128,128,0.2)';
      colAcc = cs.getPropertyValue('--accent').trim() || '#C6F432';
    }
    function resize() {
      var r = cv.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / GAP) + 1; rows = Math.ceil(h / GAP) + 1;
      draw(0);
    }
    function spawn(now) {
      if (packets.length > 5 || now - lastSpawn < 650) return;
      lastSpawn = now;
      var horiz = Math.random() < 0.6;
      packets.push(horiz
        ? { x: -GAP * 3, y: ((Math.random() * rows) | 0) * GAP, dx: 1, dy: 0, v: 1.4 + Math.random() * 1.8 }
        : { x: ((Math.random() * cols) | 0) * GAP, y: -GAP * 3, dx: 0, dy: 1, v: 1.2 + Math.random() * 1.4 });
    }
    function draw(now) {
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.15;
      mouse.y += (mouse.ty - mouse.y) * 0.15;
      var near = [], i, j;
      if (linesMode) {
        ctx.strokeStyle = colDot;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (i = 0; i < cols; i++) { ctx.moveTo(i * GAP + 0.5, 0); ctx.lineTo(i * GAP + 0.5, h); }
        for (j = 0; j < rows; j++) { ctx.moveTo(0, j * GAP + 0.5); ctx.lineTo(w, j * GAP + 0.5); }
        ctx.stroke();
        for (i = 0; i < cols; i++) {
          for (j = 0; j < rows; j++) {
            var lx = i * GAP, ly = j * GAP, ldx = lx - mouse.x, ldy = ly - mouse.y, ld2 = ldx * ldx + ldy * ldy;
            if (ld2 < R * R) near.push([lx, ly, ldx, ldy, Math.sqrt(ld2)]);
          }
        }
      } else {
        ctx.fillStyle = colDot;
        for (i = 0; i < cols; i++) {
          for (j = 0; j < rows; j++) {
            var x = i * GAP, y = j * GAP, dx = x - mouse.x, dy = y - mouse.y, d2 = dx * dx + dy * dy;
            if (d2 < R * R) near.push([x, y, dx, dy, Math.sqrt(d2)]);
            else ctx.fillRect(x - 1, y - 1, 2, 2);
          }
        }
      }
      ctx.fillStyle = colAcc;
      ctx.strokeStyle = colAcc;
      ctx.lineWidth = 1;
      near.forEach(function (n) {
        var k = 1 - n[4] / R, len = n[4] || 1, push = linesMode ? 0 : k * 12;
        var px = n[0] + n[2] / len * push, py = n[1] + n[3] / len * push, s = 2 + k * 2.6;
        ctx.globalAlpha = 0.2 + k * 0.8;
        if (linesMode) { ctx.beginPath(); ctx.arc(px, py, s * 0.6, 0, Math.PI * 2); ctx.stroke(); }
        else ctx.fillRect(px - s / 2, py - s / 2, s, s);
        if (!linesMode && k > 0.45) {
          ctx.globalAlpha = (k - 0.45) * 0.6;
          ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(px, py); ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;
      if (motion) {
        spawn(now);
        ctx.lineWidth = 2;
        packets = packets.filter(function (p) {
          p.x += p.dx * p.v * 2.2; p.y += p.dy * p.v * 2.2;
          var tl = GAP * 3, x0 = p.x - p.dx * tl, y0 = p.y - p.dy * tl;
          var g = ctx.createLinearGradient(x0, y0, p.x, p.y);
          g.addColorStop(0, 'rgba(0,0,0,0)');
          g.addColorStop(1, colAcc);
          ctx.strokeStyle = g;
          ctx.globalAlpha = 0.85;
          ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(p.x, p.y); ctx.stroke();
          ctx.fillStyle = colAcc;
          ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
          return p.x < w + tl && p.y < h + tl;
        });
        ctx.globalAlpha = 1;
      }
    }
    function loop(now) {
      raf = 0;
      if (!onScreen || document.hidden) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    }
    function start() { if (motion && !raf) raf = requestAnimationFrame(loop); }

    readColors();
    resize();
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('pf:theme', function () { readColors(); draw(0); });
    if (!motion) return;
    if (finePointer) {
      heroEl.addEventListener('pointermove', function (e) {
        var r = cv.getBoundingClientRect();
        mouse.tx = e.clientX - r.left; mouse.ty = e.clientY - r.top;
        if (mouse.x < -1000) { mouse.x = mouse.tx; mouse.y = mouse.ty; }
      });
      heroEl.addEventListener('pointerleave', function () { mouse.tx = mouse.ty = -9999; mouse.x = mouse.y = -9999; });
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { onScreen = en[0].isIntersecting; if (onScreen) start(); }).observe(heroEl);
    }
    document.addEventListener('visibilitychange', start);
    start();
  })();

  function scrollToId(id) {
    var tgt = document.getElementById(id);
    if (!tgt) return;
    if (lenis) lenis.scrollTo(tgt, { offset: id === 'home' ? 0 : -(header ? header.offsetHeight : 0) });
    else tgt.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  /* ============ Contact composer ============
     Builds a prefilled mailto link from topic, name and company. Nothing
     is sent by the page itself; the visitor's mail app takes over. */
  var MAIL = {
    job: {
      de: ['Stellenangebot für dich', 'wir suchen Verstärkung in der Systemadministration und würden dich gern kennenlernen.'],
      en: ['A job offer for you', 'we are looking for support in system administration and would like to get to know you.']
    },
    project: {
      de: ['Projektanfrage', 'ich habe ein Projekt, bei dem ich deine Unterstützung brauche:'],
      en: ['Project inquiry', 'I have a project I would like your help with:']
    },
    talk: {
      de: ['Austausch zu HomeLab und Linux', 'ich bin über dein Portfolio gestolpert und würde mich gern mit dir austauschen.'],
      en: ['Let’s talk HomeLab and Linux', 'I came across your portfolio and would like to have a chat.']
    }
  };
  var cc = document.getElementById('cc');
  if (cc) {
    var ccSend = document.getElementById('ccSend');
    var ccSubject = document.getElementById('ccSubject');
    var ccName = document.getElementById('ccName');
    var ccCompany = document.getElementById('ccCompany');
    var ccCopy = document.getElementById('ccCopy');
    var ccCopyLabel = document.getElementById('ccCopyLabel');
    var EMAIL = ccCopy ? ccCopy.getAttribute('data-email') : 'info@rxf-sys.de';
    var composeMail = function () {
      var picked = cc.querySelector('input[name="ccTopic"]:checked');
      var m = (MAIL[picked ? picked.value : 'job'] || MAIL.job)[lang === 'en' ? 'en' : 'de'];
      var name = ccName.value.trim(), company = ccCompany.value.trim();
      var subject = m[0] + (company ? ' · ' + company : '');
      var greet = lang === 'en' ? 'Hi Robin,' : 'Hallo Robin,';
      var bye = lang === 'en' ? 'Best regards' : 'Viele Grüße';
      var sign = [name, company].filter(Boolean).join(', ');
      var bodyText = greet + '\n\n' + m[1] + '\n\n\n' + bye + (sign ? '\n' + sign : '');
      ccSubject.textContent = subject;
      ccSend.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyText);
    };
    cc.addEventListener('input', composeMail);
    cc.addEventListener('change', composeMail);
    document.addEventListener('pf:lang', composeMail);
    composeMail();
    if (ccCopy) {
      var copied = function () {
        if (!ccCopyLabel) return;
        ccCopyLabel.textContent = t('cc.copied');
        setTimeout(function () { ccCopyLabel.textContent = t('cc.copy'); }, 2000);
      };
      ccCopy.addEventListener('click', function () {
        var fallback = function () {
          // Clipboard refused (older browsers, embedded views): select the address instead
          var mail = document.querySelector('.ci-item a[href^="mailto:"]');
          if (mail && window.getSelection) {
            var range = document.createRange();
            range.selectNodeContents(mail);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
          }
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(EMAIL).then(copied, fallback);
        } else {
          fallback();
        }
      });
    }
  }

  /* ============ Lenis + statement ============ */
  var activeSplits = []; // { split, tween }: undone before a language switch

  if (motion && window.Lenis) {
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
    if (hasGsap) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (tm) { lenis.raf(tm * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      var lenisLoop = function (tm) { lenis.raf(tm); requestAnimationFrame(lenisLoop); };
      requestAnimationFrame(lenisLoop);
    }
    // In-page anchors glide via Lenis and land below the sticky header
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a || e.defaultPrevented) return;
      var id = a.getAttribute('href').slice(1);
      var target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      if (a.classList.contains('skip-link')) { target.focus({ preventScroll: true }); }
      scrollToId(id);
      if (history.replaceState) history.replaceState(null, '', '#' + id);
    });
  }

  document.addEventListener('pf:beforelang', function () {
    activeSplits.forEach(function (s) { if (s.tween) s.tween.kill(); s.split.revert(); });
    activeSplits = [];
  });

  if (hasGsap && motion) {
    // Statement: words light up one by one while scrolling through it
    var statementEl = document.getElementById('statement');
    var statementSplit = null;
    var buildStatement = function () {
      if (!statementEl || !SplitText || statementSplit) return;
      var split = new SplitText(statementEl, { type: 'words', wordsClass: 'word' });
      var tween = gsap.fromTo(split.words, { opacity: 0.14 }, {
        opacity: 1, ease: 'none', stagger: 0.12,
        scrollTrigger: { trigger: statementEl, start: 'top 80%', end: 'bottom 42%', scrub: 0.5 }
      });
      statementSplit = { split: split, tween: tween };
    };
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(buildStatement);
    document.addEventListener('pf:beforelang', function () {
      if (!statementSplit) return;
      statementSplit.tween.scrollTrigger.kill();
      statementSplit.tween.kill();
      statementSplit.split.revert();
      statementSplit = null;
    });
    document.addEventListener('pf:lang', buildStatement);
  }

  /* ============ Variant hook ============ */
  var introHooks = [];
  var api = {
    gsap: gsap, ScrollTrigger: ScrollTrigger, SplitText: SplitText, Flip: Flip,
    hasGsap: hasGsap, motion: motion, reduceMotion: reduceMotion, finePointer: finePointer,
    lenis: function () { return lenis; },
    lang: function () { return lang; }, t: t,
    onceVisible: onceVisible, lockScroll: lockScroll, animateNum: animateNum,
    onFrame: function (fn) { frameHooks.push(fn); },
    onRelayout: function (fn) { relayoutHooks.push(fn); },
    onIntro: function (fn) { introHooks.push(fn); },
    relayout: relayout, scrollToId: scrollToId, $all: $all, clamp: clamp,
    header: header, topbarH: function () { return header ? header.offsetHeight : 72; },
    setProjectAnimator: function (fn) { pdAnimator = fn; },
    openProject: openProject
  };
  if (typeof window.PF_VARIANT === 'function') {
    try { window.PF_VARIANT(api); }
    catch (err) { if (window.console) console.error('variant init failed', err); }
  }

  /* ============ Hero intro ============ */
  function heroIntro() {
    $all('.hero [data-intro]').forEach(function (el, i) { el.style.setProperty('--i', i); });
    var title = document.getElementById('heroTitle');
    if (hasGsap && SplitText && motion && title) {
      title.style.transition = 'none';
      var split = new SplitText(title, { type: 'lines', mask: 'lines' });
      var entry = { split: split, tween: null };
      entry.tween = gsap.from(split.lines, {
        yPercent: 115, duration: 1.15, ease: 'expo.out', stagger: 0.1, delay: 0.05,
        onComplete: function () {
          split.revert();
          title.style.transition = '';
          activeSplits.splice(activeSplits.indexOf(entry), 1);
        }
      });
      activeSplits.push(entry);
    }
    html.classList.add('hero-in');
    $all('.hero [data-count]').forEach(function (el) { setTimeout(function () { animateNum(el); }, 650); });
    introHooks.forEach(function (fn) { fn(); });
  }

  /* ============ Boot sequence (once per session, variants with #boot) ============ */
  function runBoot(done) {
    var boot = document.getElementById('boot');
    var log = document.getElementById('bootLog');
    if (!html.classList.contains('is-booting') || !boot || !log) { html.classList.remove('is-booting'); done(); return; }
    lockScroll(true);
    document.body.style.overflow = 'hidden';
    var LINES = [
      [['[    0.000] rxf-sys bios v4.0 · power-on self test ...... '], ['ok', 'ok']],
      [['[    0.118] cpu0: robin-frank @ dormagen, nrw']],
      [['[    0.204] mem: homelab experience loaded ............ '], ['ok', 'ok']],
      [['[    0.317] eth0: link up · 1000 Mb/s full duplex']],
      [['['], ['  ok  ', 'ok'], ['] started proxmox-ve.service']],
      [['['], ['  ok  ', 'ok'], ['] started wireguard@wg0.service']],
      [['['], ['  ok  ', 'ok'], ['] started vulpexa-agent.service']],
      [['['], ['  ok  ', 'ok'], ['] reached target '], ['portfolio.target', 'hi']],
      [['welcome, '], ['guest', 'hi'], ['. ']]
    ];
    var cursor = document.createElement('span');
    cursor.className = 'cursor';
    log.appendChild(cursor);
    var i = 0, timer = 0, finished = false;

    function addLine() {
      if (i >= LINES.length) { timer = setTimeout(finish, 420); return; }
      LINES[i].forEach(function (seg) {
        var sp = document.createElement('span');
        if (seg[1]) sp.className = seg[1];
        sp.textContent = seg[0];
        log.insertBefore(sp, cursor);
      });
      i++;
      if (i < LINES.length) log.insertBefore(document.createTextNode('\n'), cursor);
      timer = setTimeout(addLine, i < 4 ? 170 : 130);
    }
    function finish(e) {
      // A key that skips the boot must not also scroll the page
      if (e && e.type === 'keydown' && e.key !== 'Tab') e.preventDefault();
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      document.removeEventListener('keydown', finish);
      boot.removeEventListener('click', finish);
      try { sessionStorage.setItem(SS_BOOT, '1'); } catch (err) { /* storage blocked: boot plays again next visit */ }
      boot.classList.add('is-leaving');
      document.body.style.overflow = '';
      lockScroll(false);
      done();
      setTimeout(function () { html.classList.remove('is-booting'); }, 760);
    }
    document.addEventListener('keydown', finish);
    boot.addEventListener('click', finish);
    timer = setTimeout(addLine, 250);
  }

  /* ============ Start ============ */
  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  var started = false;
  function startIntro() {
    if (started) return;
    started = true;
    runBoot(heroIntro);
  }
  // Wait for the web fonts (line splitting depends on them), at most 0.8 s
  fontsReady.then(function () { relayout(); startIntro(); });
  setTimeout(startIntro, reduceMotion ? 0 : 800);

  relayoutHooks.forEach(function (fn) { fn(); });
  frame();
})();
