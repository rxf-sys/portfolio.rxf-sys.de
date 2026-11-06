/* Portfolio v3 — "Live System".
   Theme, language (DE/EN), boot sequence, hero intro, cable, reveals,
   counters, services, rack, timeline, terminal, lightbox, app demo.
   Vanilla JS, no build step, no eval. GSAP / ScrollTrigger / SplitText /
   Lenis are optional: without them (or with reduced motion) the page
   stays complete and static.
   Note: data-theme is set by the inline script in <head> and .js /
   .is-booting by assets/js/boot.js — here we only toggle and persist. */
(function () {
  'use strict';

  /* ============ Translations (EN) ============ */
  var EN = {
    'skip': 'Skip to content',
    'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects',
    'nav.certs': 'Certificates', 'nav.cv': 'Experience', 'nav.contact': 'Contact',
    'hero.chip': 'Available for projects',
    'hero.title': 'Hi, I’m Robin —<br />I keep <span class="hl">infrastructure</span> running.',
    'hero.lede': 'Junior IT system administrator at Fusion IT. Linux, Proxmox, networking and automation — at work and in my own HomeLab.',
    'hero.cta1': 'Get in touch', 'hero.cta2': 'View projects',
    'stats.lxc': 'LXC containers', 'stats.ninja': 'NinjaOne certified',
    'stats.uptimeNum': '~3 yrs', 'stats.uptime': 'HomeLab uptime',
    'now.label': 'Currently', 'now.role': 'Junior IT Sysadmin<br />@ Fusion IT', 'now.meta': 'since January 2026 · Langenfeld',
    'about.title': 'About me', 'about.kicker': 'Background & values',
    'about.p1': 'I’m a trained IT specialist for application development, working as a junior IT system administrator at Fusion IT in Langenfeld. My strengths: administering IT infrastructures, networking, and automating recurring tasks.',
    'about.p2': 'I deliberately chose the move from application development into administration — because I’m fascinated by how systems stay stable, secure and observable under real load.',
    'about.p3': 'In my free time I run my own HomeLab on Proxmox VE: Samba NAS, WireGuard VPN, Vaultwarden, Portainer — every container is an experiment that deepens my Linux, virtualization and networking skills.',
    'fact.now': 'Currently', 'fact.degree': 'Degree', 'fact.degreeV': 'IT Specialist (AE) · 2025',
    'fact.lang': 'Languages', 'fact.loc': 'Location',
    'about.quote': '“The best infrastructure is the one nobody notices — because it just works.”',
    'about.quoteSrc': '— My standard',
    'skills.title': 'Skills', 'skills.kicker': 'Stack & practice',
    'skills.g1': 'System administration', 'skills.g2': 'Network & services',
    'skills.g3': 'Development', 'skills.g4': 'Data & tools',
    'skills.daily': 'Daily', 'skills.daily2': 'Daily', 'skills.regular': 'Regularly', 'skills.regular2': 'Regularly',
    'projects.title': 'Projects', 'projects.kicker': 'Selected work',
    'proj.home.meta': '2022 — today · Personal · Infrastructure',
    'proj.home.desc': 'My self-hosted lab: a Proxmox VE node with ten LXC containers for Samba NAS, WireGuard VPN, Vaultwarden, Portainer and Docker workloads. Vaultwarden replaces the cloud password manager, WireGuard opens a secure tunnel from anywhere.',
    'proj.home.s3n': '~3 yrs', 'proj.home.s3l': 'Total uptime', 'proj.home.s4n': 'daily',
    'proj.st.wip': 'In progress', 'proj.st.wip2': 'In progress', 'proj.st.wip3': 'In progress',
    'proj.st.done': 'Completed', 'proj.st.passed': 'Passed',
    'proj.ryntra.desc': 'Lean self-hosted RMM tool: FastAPI server, React dashboard and a Go agent shipped as a single static binary. Agents connect outbound via WebSocket — devices never need open ports.',
    'proj.admin.desc': 'Monitoring dashboard for my home server: watches Proxmox, backups and services with probe histories. FastAPI backend, React frontend and custom session auth with Argon2id and roles.',
    'proj.ory.desc': 'Self-hosted personal finance app with open banking (PSD2): automatic categorization, budgets, contracts and savings goals — React frontend, NestJS backend, PostgreSQL.',
    'proj.rmm.desc': 'NinjaOne scripting library for recurring maintenance tasks: patch reports, disk health checks and software inventory — in PowerShell and Bash.',
    'proj.mm.desc': 'Self-built MagicMirror on a Raspberry Pi 4 with two custom modules for personalized displays and smart home integration.',
    'proj.pf.title': 'Portfolio website', 'proj.pf.meta': '2025 · This site',
    'proj.pf.desc': 'This website — static HTML/CSS/JS without a build step, animated with GSAP and Lenis, self-hosted on my own HomeLab server with a custom domain via Cloudflare Tunnel.',
    'demo.label': 'Interactive demo',
    'demo.title': 'My apps — hands-on',
    'demo.desc': 'Ryntra and Orynthia run right here as a clickable prototype with test data: no login, no backend — just take a look and click through.',
    'demo.cta': 'Click through the prototype',
    'demo.hint': 'Click through the tabs — all test data.',
    'demo.switch': 'Switch to',
    /* Ryntra RMM prototype */
    'demo.ry.nav1': 'Overview', 'demo.ry.nav2': 'Devices', 'demo.ry.nav3': 'Alerts',
    'demo.ry.nav4': 'Patch management', 'demo.ry.nav5': 'Scripts',
    'demo.ry.hi': 'Good afternoon, robin',
    'demo.ry.sub': 'Tuesday, 14 July · 12 of 14 devices reporting on schedule',
    'demo.ry.m1': 'System health', 'demo.ry.m1meta': '2 offline',
    'demo.ry.m2': 'Patch compliance', 'demo.ry.m2v': '28 updates pending', 'demo.ry.m2meta': '6 of them security-critical',
    'demo.ry.m3': 'Open alerts', 'demo.ry.crit': '2 critical',
    'demo.ry.m4': 'Fleet load · now', 'demo.ry.m4meta': 'avg. 34 % CPU across 12 devices',
    'demo.ry.devs': 'Devices', 'demo.ry.sorted': 'sorted by status',
    'demo.ry.dm1': 'Server room · online · just now', 'demo.ry.dm2': 'Robin F. · online · 5 min ago',
    'demo.ry.th1': 'Device', 'demo.ry.th2': 'Assigned', 'demo.ry.th3': 'Load', 'demo.ry.th4': 'Status',
    'demo.ry.st.ok': 'Online', 'demo.ry.st.ok2': 'Online', 'demo.ry.st.warn': 'Disk', 'demo.ry.st.off': 'Offline',
    'demo.ry.al1': 'Storage almost full — nb-robin',
    'demo.ry.al2': 'Device offline — pi-magicmirror', 'demo.ry.al2s': 'no heartbeats for 3 h',
    'demo.ry.al3': 'High CPU load — nb-robin', 'demo.ry.al3s': '78 % for 10 min',
    /* Orynthia prototype */
    'demo.oy.sec1': 'Overview', 'demo.oy.sec2': 'Planning',
    'demo.oy.n2': 'Transactions', 'demo.oy.n3': 'Accounts', 'demo.oy.n5': 'Savings goals', 'demo.oy.n6': 'Portfolio',
    'demo.oy.promot': 'Discover savings', 'demo.oy.promod': 'We help you save on contracts and subscriptions.',
    'demo.oy.hi': 'Hi Robin 👋', 'demo.oy.sub': 'Today is 14 July 2026 · July overview', 'demo.oy.act': 'Transaction',
    'demo.oy.net': 'Net worth', 'demo.oy.inc': 'Income July', 'demo.oy.exp': 'Expenses July', 'demo.oy.rate': 'Savings rate',
    'demo.oy.cashsub': 'Last 6 months · income vs. expenses',
    'demo.oy.inc2': 'Income', 'demo.oy.exp2': 'Expenses',
    'demo.oy.budt': 'Budgets · July',
    'demo.oy.cat1': 'Groceries', 'demo.oy.cat2': 'Leisure', 'demo.oy.cat3': 'Restaurants', 'demo.oy.cat4': 'Transport',
    'demo.oy.savt': 'Savings goals',
    'demo.oy.g1': 'Japan trip', 'demo.oy.g2': 'Emergency fund', 'demo.oy.g3': 'New camera',
    'proj.ihk.title': 'IHK final project',
    'proj.ihk.desc': 'Documentation and implementation of my final project as an IT specialist for application development — with a Groovy backend and Bootstrap frontend.',
    'proj.ihk.link': 'Documentation',
    'certs.title': 'Certificates', 'certs.kicker': 'Qualifications & training',
    'cert1.title': 'IT Specialist for Application Development', 'cert1.date': 'August 2025',
    'cert1.desc': 'Completed vocational training at INEOS Manufacturing Deutschland GmbH.',
    'cert2.desc': 'Certification as a NinjaOne technician for managed service providers.',
    'certs.view': 'View certificate', 'certs.view2': 'View certificate',
    'certs.view3': 'View certificate', 'certs.view4': 'View certificate',
    'cert3.desc': 'Specialization in IT automation and scripting with the NinjaOne platform.',
    'cert5.date': 'July 2026',
    'cert5.desc': 'Operating and initial setup of a Securepoint NextGen UTM firewall — including networking fundamentals, TCP/IP, addressing and routing.',
    'cert6.date': 'July 2026',
    'cert6.desc': 'Managing Securepoint Antivirus Pro — unified security, cloud administration and initial setup for endpoint protection.',
    'cert4.title': 'University of Applied Sciences entrance qualification',
    'cert4.desc': 'Focus on business and administration — the foundation for the later IHK training.',
    'cv.title': 'Experience', 'cv.kicker': 'Work & education, chronological',
    'cv.work': 'Professional', 'cv.school': 'Education', 'cv.current': 'Current',
    'cv.j1.date': 'Jan 2026 — today',
    'cv.j1.role': 'Junior IT system administrator — managing customer infrastructures, RMM, onboarding.',
    'cv.j2.role': 'Vocational training as an IT specialist for application development.',
    'cv.j3.role': 'Part-time job as a cashier and shelf stocker.',
    'cv.j4.role': 'Summer job as a packer and quality inspector.',
    'cv.j5.role': 'Student internship in the commercial and technical departments.',
    'cv.s1.role': 'University entrance qualification — focus on computer science.',
    'cv.s2.role': 'Secondary school certificate.', 'cv.s3.role': 'Primary school.',
    'contact.title': 'Contact', 'contact.kicker': 'Let’s talk',
    'contact.head': 'Drop me a line —<br />I’ll get <span class="hl">back to you</span>.',
    'contact.lede': 'Whether it’s a permanent role, project work or just a good conversation about HomeLabs, Linux or automation — I’d love to hear from you.',
    'contact.cta1': 'Write an e-mail',
    'contact.region': 'Region', 'contact.regionV': 'Dormagen, NRW — remote & on-site',
    'contact.response': 'Response time', 'contact.responseV': 'Usually within 24h',
    'footer.copy': '© 2026 Robin Frank — All rights reserved',
    'footer.imprint': 'Imprint', 'footer.privacy': 'Privacy', 'footer.top': 'Back to top',
    'footer.built': 'handcrafted · runs in my own HomeLab',
    'projects.hint': 'Scroll to slide through the rack',
    'term.title': 'Or just ask the terminal',
    'term.hint': 'Type help and press Enter — or pick a command below.',
    'term.label': 'Enter a command'
  };

  var LS_THEME = 'pf2-theme', LS_LANG = 'pf2-lang', SS_BOOT = 'pf3-booted';
  var html = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var SplitText = window.SplitText;
  var hasGsap = !!(gsap && ScrollTrigger);
  var motion = !reduceMotion;
  var lenis = null;

  // CSS-level motion layer: reveals, marquee, timeline states. Without it
  // (reduced motion) every element simply stays in its final state.
  if (motion) html.classList.add('motion');
  if (hasGsap) gsap.registerPlugin.apply(gsap, [ScrollTrigger].concat(SplitText ? [SplitText] : []));

  function emit(name) { document.dispatchEvent(new CustomEvent(name)); }
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
  var originals = {}; // key -> { de: string }

  function collectOriginals() {
    $all('[data-i18n]').forEach(function (el) {
      originals[el.getAttribute('data-i18n')] = { de: el.textContent };
    });
    $all('[data-i18n-html]').forEach(function (el) {
      originals[el.getAttribute('data-i18n-html')] = { de: el.innerHTML };
    });
  }

  function applyLang(l) {
    // Animations that split or rewrite text undo themselves first
    emit('pf:beforelang');
    $all('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      el.textContent = l === 'en' ? (EN[k] || originals[k].de) : originals[k].de;
    });
    $all('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      el.innerHTML = l === 'en' ? (EN[k] || originals[k].de) : originals[k].de;
    });
    html.setAttribute('lang', l);
    if (langBtn) langBtn.textContent = l === 'en' ? 'DE' : 'EN';
    emit('pf:lang');
  }

  collectOriginals();
  var lang = 'de';
  try { lang = localStorage.getItem(LS_LANG) || 'de'; } catch (e) { lang = 'de'; }
  if (lang === 'en') applyLang('en');

  function setLang(l) {
    lang = l;
    applyLang(lang);
    try { localStorage.setItem(LS_LANG, lang); } catch (e) { /* storage blocked: language just isn't remembered */ }
  }
  if (langBtn) langBtn.addEventListener('click', function () { setLang(lang === 'de' ? 'en' : 'de'); });

  /* ============ Visibility watcher ============
     One rect-based check on scroll (no IntersectionObserver needed, works
     in every embed context). Fires each callback once when the element's
     top crosses `ratio` of the viewport height. */
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
    if (!motion || target <= 1) return;
    var start = null, dur = 1000;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = prefix + Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  // Hero counters start with the hero intro; all others when scrolled into view
  $all('[data-count]').forEach(function (el) {
    if (!el.closest('.hero')) onceVisible(el, animateNum, 0.92);
  });

  /* ============ Header state, progress bar, cable ============ */
  var header = document.getElementById('topbar');
  var progressBar = document.getElementById('scrollProgress');
  var mainEl = document.getElementById('main');
  var cable = document.getElementById('cable');
  var cableFill = document.getElementById('cableFill');
  var packet = document.getElementById('packet');
  var ports = $all('.section-head .port');
  var cableGeo = null;

  function buildCable() {
    cableGeo = null;
    if (!cable || !mainEl || !ports.length) return;
    var first = ports[0].getBoundingClientRect();
    if (!first.width) return; // ports hidden on small screens
    var mr = mainEl.getBoundingClientRect();
    var heroEl = document.getElementById('home');
    var top = heroEl ? heroEl.getBoundingClientRect().bottom - mr.top : 0;
    var portY = ports.map(function (p) {
      var r = p.getBoundingClientRect();
      return r.top + r.height / 2 - mr.top;
    });
    var bottom = portY[portY.length - 1];
    if (bottom <= top) return;
    cableGeo = { top: top, height: bottom - top, ports: portY };
    cable.style.left = (first.left + first.width / 2 - mr.left - 1) + 'px';
    cable.style.top = top + 'px';
    cable.style.height = (bottom - top) + 'px';
    updateCable();
  }
  function updateCable() {
    if (!cableGeo) return;
    // The cable tip follows a fixed line at 62 % of the viewport
    var tip = window.innerHeight * 0.62 - mainEl.getBoundingClientRect().top;
    var f = motion ? clamp((tip - cableGeo.top) / cableGeo.height, 0, 1) : 1;
    cableFill.style.transform = 'scaleY(' + f.toFixed(4) + ')';
    packet.style.transform = 'translateY(' + (f * cableGeo.height).toFixed(1) + 'px)';
    packet.style.opacity = f > 0 && f < 1 ? '1' : '0';
    ports.forEach(function (p, i) { p.classList.toggle('is-live', !motion || cableGeo.ports[i] <= tip); });
  }

  function frame() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 30);
    if (progressBar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (max > 0 ? Math.min(window.scrollY / max, 1) * 100 : 0) + '%';
    }
    watchCheck();
    updateCable();
  }
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; frame(); });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // Keep the CSS header height in sync with the real bar (pinned rack, anchors)
  function syncHeaderHeight() {
    if (header) html.style.setProperty('--topbar-h', header.offsetHeight + 'px');
  }
  syncHeaderHeight();

  function relayout() {
    syncHeaderHeight();
    if (hasGsap) ScrollTrigger.refresh();
    buildCable();
    frame();
  }
  var resizeTimer = 0;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { syncHeaderHeight(); buildCable(); frame(); }, 150);
  }, { passive: true });
  window.addEventListener('load', relayout);
  document.addEventListener('pf:lang', function () { setTimeout(relayout, 60); });
  if (hasGsap) ScrollTrigger.addEventListener('refresh', function () { buildCable(); });

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
    // Clicking a menu item closes the menu again.
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
  // Above the breakpoint the navigation is always visible — drop the open state.
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
  }

  /* ============ Cert lightbox (with focus management) ============ */
  var modal = document.getElementById('certModal');
  var certImg = document.getElementById('certImg');
  var certClose = document.getElementById('certClose');
  // 1×1 transparent GIF — placeholder while no certificate is open
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
      if (e.key === 'Tab') {
        // Only focusable element in the dialog — keep focus there
        e.preventDefault();
        certClose.focus();
      }
    });
  }

  /* ============ App demo: carousel + clickable prototype ============ */
  var demoStage = document.getElementById('demoStage');
  var demoModal = document.getElementById('demoModal');
  if (demoStage && demoModal) {
    var demoSlides = $all('.demo-slide', demoStage);
    var demoDots = $all('.demo-dot');
    var demoCurrent = 0;
    var demoTimer = null;

    var demoGoTo = function (i) {
      demoCurrent = (i + demoSlides.length) % demoSlides.length;
      demoSlides.forEach(function (s, idx) { s.classList.toggle('active', idx === demoCurrent); });
      demoDots.forEach(function (d, idx) { d.classList.toggle('active', idx === demoCurrent); });
    };
    var demoStop = function () { if (demoTimer) { clearInterval(demoTimer); demoTimer = null; } };
    var demoStart = function () {
      // No auto-rotation with reduced motion or while the modal is open
      if (reduceMotion || demoTimer || !demoModal.hidden) return;
      demoTimer = setInterval(function () { demoGoTo(demoCurrent + 1); }, 7000);
    };
    demoDots.forEach(function (d, idx) {
      d.addEventListener('click', function () { demoGoTo(idx); demoStop(); demoStart(); });
    });
    // Rotation pauses while pointer or focus is on the stage
    demoStage.addEventListener('mouseenter', demoStop);
    demoStage.addEventListener('mouseleave', demoStart);
    demoStage.addEventListener('focusin', demoStop);
    demoStage.addEventListener('focusout', demoStart);
    demoStart();

    // Bar widths, column heights and ring percentages from data attributes
    // (no inline styles in the markup — html-validate no-inline-style).
    $all('.proto [data-w]').forEach(function (el) { el.style.width = el.getAttribute('data-w') + '%'; });
    $all('.proto [data-h]').forEach(function (el) { el.style.setProperty('--h', el.getAttribute('data-h') + '%'); });
    $all('.proto [data-pct]').forEach(function (el) { el.style.setProperty('--pct', el.getAttribute('data-pct')); });

    // Tabs of both prototypes — work in the carousel and in the modal
    $all('.proto').forEach(function (proto) {
      var tabs = $all('.p-tab', proto);
      var views = $all('.proto-view', proto);
      tabs.forEach(function (tab, idx) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.classList.remove('active'); });
          views.forEach(function (v) { v.classList.remove('active'); });
          tab.classList.add('active');
          if (views[idx]) views[idx].classList.add('active');
        });
      });
    });

    // Modal: the active prototype moves into the dialog (no duplicate markup)
    // and moves back into its carousel slide on close.
    var demoOpenBtn = document.getElementById('demoOpenBtn');
    var demoHost = document.getElementById('demoHost');
    var demoCloseBtn = document.getElementById('demoClose');
    var demoTitle = document.getElementById('demoTitle');
    var demoSwitch = document.getElementById('demoSwitch');
    var demoSwitchName = document.getElementById('demoSwitchName');
    var demoModalApp = 0;
    var demoTrigger = null;

    var demoUnmount = function () {
      var mounted = demoHost.querySelector('.proto');
      if (mounted && mounted._homeSlide) mounted._homeSlide.appendChild(mounted);
    };
    var demoMount = function (i) {
      demoUnmount();
      demoModalApp = (i + demoSlides.length) % demoSlides.length;
      var slide = demoSlides[demoModalApp];
      var proto = slide.querySelector('.proto');
      proto._homeSlide = slide;
      demoHost.appendChild(proto);
      demoTitle.textContent = slide.getAttribute('data-app');
      demoSwitchName.textContent = demoSlides[(demoModalApp + 1) % demoSlides.length].getAttribute('data-app');
    };
    var demoCloseModal = function () {
      demoUnmount();
      demoModal.classList.remove('open');
      demoModal.hidden = true;
      lockScroll(false);
      demoGoTo(demoModalApp); // carousel shows the app viewed last
      if (demoTrigger) { demoTrigger.focus(); demoTrigger = null; }
      demoStart();
    };
    if (demoOpenBtn) {
      demoOpenBtn.addEventListener('click', function () {
        demoTrigger = demoOpenBtn;
        demoStop();
        demoMount(demoCurrent);
        demoModal.hidden = false;
        demoModal.classList.add('open');
        lockScroll(true);
        demoCloseBtn.focus();
      });
    }
    demoCloseBtn.addEventListener('click', demoCloseModal);
    demoSwitch.addEventListener('click', function () { demoMount(demoModalApp + 1); });
    demoModal.addEventListener('click', function (e) { if (e.target === demoModal) demoCloseModal(); });

    document.addEventListener('keydown', function (e) {
      if (demoModal.hidden) return;
      if (e.key === 'Escape') { demoCloseModal(); return; }
      if (e.key === 'Tab') {
        // Keep focus inside the dialog (close, tabs, switch button)
        var focusables = $all('button', demoModal);
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
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

  /* ============ Marquee: duplicate the items for a seamless loop ============ */
  var marquee = document.querySelector('.marquee-track');
  if (marquee && motion) {
    Array.prototype.slice.call(marquee.children).forEach(function (li) {
      var c = li.cloneNode(true);
      c.setAttribute('aria-hidden', 'true');
      marquee.appendChild(c);
    });
  }

  /* ============ Services: systemd-style start-up when scrolled in ============ */
  var svcNext = 0;
  $all('.service').forEach(function (svc) {
    if (!motion) return;
    var state = svc.querySelector('.svc-state');
    var setState = function (txt) { if (state) state.textContent = txt; };
    svc.classList.add('is-pending');
    setState('inactive (dead)');
    onceVisible(svc, function () {
      // Queue start-ups so services entering together still start one by one
      var now = Date.now(), at = Math.max(now + 150, svcNext);
      svcNext = at + 300;
      setTimeout(function () {
        svc.classList.remove('is-pending');
        svc.classList.add('is-starting');
        setState('activating (start) …');
        setTimeout(function () {
          svc.classList.remove('is-starting');
          setState('active (running)');
        }, 700);
      }, at - now);
    }, 0.82);
  });

  /* ============ Title scramble (decode effect) ============ */
  var GLYPHS = '!<>-_/[]{}=+*^?#01';
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

  /* ============ Magnetic buttons ============ */
  if (motion && finePointer) {
    $all('.magnetic').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        var x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2);
        b.style.transform = 'translate(' + (x * 0.2).toFixed(1) + 'px,' + (y * 0.32).toFixed(1) + 'px)';
      });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
  }

  /* ============ Hero network grid (canvas) ============
     Dot grid that reacts to the pointer; "packets" travel along grid
     lines. Runs only while the hero is on screen and the tab is visible;
     with reduced motion it draws one static frame. */
  (function heroGrid() {
    var cv = document.getElementById('heroGrid');
    var heroEl = document.getElementById('home');
    if (!cv || !heroEl || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    if (!ctx) return;
    var GAP = 34, R = 150;
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
      var near = [];
      ctx.fillStyle = colDot;
      for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          var x = i * GAP, y = j * GAP, dx = x - mouse.x, dy = y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < R * R) near.push([x, y, dx, dy, Math.sqrt(d2)]);
          else ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }
      // Pointer neighbourhood: brighter, larger dots pushed outwards + links
      ctx.fillStyle = colAcc;
      ctx.strokeStyle = colAcc;
      ctx.lineWidth = 1;
      near.forEach(function (n) {
        var k = 1 - n[4] / R, len = n[4] || 1, push = k * 12;
        var px = n[0] + n[2] / len * push, py = n[1] + n[3] / len * push, s = 2 + k * 2.6;
        ctx.globalAlpha = 0.2 + k * 0.8;
        ctx.fillRect(px - s / 2, py - s / 2, s, s);
        if (k > 0.45) {
          ctx.globalAlpha = (k - 0.45) * 0.6;
          ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(px, py); ctx.stroke();
        }
      });
      ctx.globalAlpha = 1;
      // Packets with fading trails
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

  /* ============ Interactive terminal ============ */
  var T = {
    de: {
      help: ['Verfügbare Befehle:',
        '  whoami          wer ist Robin?',
        '  skills          Technik-Stack',
        '  projects        Projekte im Rack',
        '  contact         Kontaktwege',
        '  ls · cd <dir>   durch die Seite springen',
        '  theme · lang    Darstellung umschalten',
        '  date · clear · sudo …'],
      whoami: ['Robin Frank — Junior IT-Systemadministrator bei Fusion IT.', 'Fachinformatiker für Anwendungsentwicklung (IHK, 2025) · Dormagen, NRW.'],
      skills: ['system:  linux · proxmox ve · docker/lxc · wireguard · ninjaone', 'netz:    dns/dhcp · samba · firewall/routing', 'code:    java · javascript · react · groovy · php · sql · bash · powershell'],
      projects: 'Projekte im Rack:',
      contact: ['mail      info@rxf-sys.de', 'github    github.com/rxf-sys', 'linkedin  in/robin-frank-987b26350', 'Antwort üblicherweise innerhalb von 24h.'],
      jump: '→ springe zu ~/{s} …',
      noDir: 'cd: {s}: Verzeichnis nicht gefunden',
      theme: 'Farbschema: {t}',
      lang: 'Sprache: Deutsch',
      hire: ['[sudo] Passwort für guest: ********', 'Zugriff gewährt. Bester nächster Schritt:', '→ info@rxf-sys.de'],
      sudo: 'guest steht nicht in der sudoers-Datei. Dieser Vorfall wird gemeldet. ;)',
      exit: 'logout — bis bald.',
      unknown: 'Befehl nicht gefunden: {c} — tippe help'
    },
    en: {
      help: ['Available commands:',
        '  whoami          who is Robin?',
        '  skills          tech stack',
        '  projects        projects in the rack',
        '  contact         ways to reach me',
        '  ls · cd <dir>   jump through the page',
        '  theme · lang    switch appearance',
        '  date · clear · sudo …'],
      whoami: ['Robin Frank — junior IT system administrator at Fusion IT.', 'IT specialist for application development (IHK, 2025) · Dormagen, NRW.'],
      skills: ['system:  linux · proxmox ve · docker/lxc · wireguard · ninjaone', 'network: dns/dhcp · samba · firewall/routing', 'code:    java · javascript · react · groovy · php · sql · bash · powershell'],
      projects: 'Projects in the rack:',
      contact: ['mail      info@rxf-sys.de', 'github    github.com/rxf-sys', 'linkedin  in/robin-frank-987b26350', 'Usually replies within 24h.'],
      jump: '→ jumping to ~/{s} …',
      noDir: 'cd: {s}: no such directory',
      theme: 'Colour scheme: {t}',
      lang: 'Language: English',
      hire: ['[sudo] password for guest: ********', 'Access granted. Best next step:', '→ info@rxf-sys.de'],
      sudo: 'guest is not in the sudoers file. This incident will be reported. ;)',
      exit: 'logout — see you soon.',
      unknown: 'command not found: {c} — type help'
    }
  };
  var DIRS = { about: 'about', skills: 'skills', projects: 'projects', certificates: 'certificates', certs: 'certificates', experience: 'experience', cv: 'experience', contact: 'contact', home: 'home', '~': 'home' };

  function scrollToId(id) {
    var t = document.getElementById(id);
    if (!t) return;
    if (lenis) lenis.scrollTo(t, { offset: id === 'home' ? 0 : -(header ? header.offsetHeight : 0) });
    else t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  var termOut = document.getElementById('termOut');
  var termForm = document.getElementById('termForm');
  var termIn = document.getElementById('termIn');
  var termHistory = [], termPos = 0;

  function termPrint(lines, cls) {
    [].concat(lines).forEach(function (txt) {
      var p = document.createElement('p');
      p.className = 'term-line' + (cls ? ' ' + cls : '');
      p.textContent = txt;
      termOut.appendChild(p);
    });
    while (termOut.children.length > 80) termOut.removeChild(termOut.firstChild);
    termOut.scrollTop = termOut.scrollHeight;
  }

  function runCommand(raw) {
    var input = raw.trim();
    termPrint(input, 'cmd');
    if (!input) return;
    termHistory.push(input);
    termPos = termHistory.length;
    var L = T[lang] || T.de;
    var parts = input.toLowerCase().split(/\s+/), cmd = parts[0], arg = parts.slice(1).join(' ');
    switch (cmd) {
      case 'help': case '?': termPrint(L.help); break;
      case 'whoami': termPrint(L.whoami); break;
      case 'skills': termPrint(L.skills); break;
      case 'projects': case 'ls-projects':
        termPrint(L.projects);
        termPrint($all('.blade h3').map(function (h, i) { return '  u0' + (i + 1) + '  ' + h.textContent; }));
        termPrint(L.jump.replace('{s}', 'projects'), 'dim');
        scrollToId('projects');
        break;
      case 'contact': case 'mail': termPrint(L.contact, 'ok'); break;
      case 'ls': termPrint('about/  skills/  projects/  certificates/  experience/  contact/'); break;
      case 'cd': {
        var dir = DIRS[arg.replace(/^~\//, '').replace(/\/$/, '')];
        if (!arg || dir === 'home') { termPrint(L.jump.replace('{s}', ''), 'dim'); scrollToId('home'); }
        else if (dir) { termPrint(L.jump.replace('{s}', dir), 'dim'); scrollToId(dir); }
        else termPrint(L.noDir.replace('{s}', arg), 'err');
        break;
      }
      case 'theme': termPrint(L.theme.replace('{t}', toggleTheme())); break;
      case 'lang': setLang(lang === 'de' ? 'en' : 'de'); termPrint(T[lang].lang); break;
      case 'date': termPrint(new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'de-DE', { timeZone: 'Europe/Berlin', dateStyle: 'full', timeStyle: 'medium' }).format(new Date()) + ' (Europe/Berlin)'); break;
      case 'clear': termOut.textContent = ''; break;
      case 'echo': termPrint(raw.trim().slice(5)); break;
      case 'sudo': termPrint(/hire/.test(arg) ? L.hire : L.sudo, /hire/.test(arg) ? 'ok' : 'err'); break;
      case 'exit': case 'logout': termPrint(L.exit, 'dim'); break;
      default: termPrint(L.unknown.replace('{c}', cmd), 'err');
    }
  }

  if (termOut && termForm && termIn) {
    termForm.addEventListener('submit', function (e) {
      e.preventDefault();
      runCommand(termIn.value);
      termIn.value = '';
    });
    termIn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowUp' && termPos > 0) { termPos--; termIn.value = termHistory[termPos]; e.preventDefault(); }
      else if (e.key === 'ArrowDown') { termPos = Math.min(termPos + 1, termHistory.length); termIn.value = termHistory[termPos] || ''; e.preventDefault(); }
    });
    $all('.term-chip').forEach(function (chip) {
      chip.addEventListener('click', function () { runCommand(chip.getAttribute('data-cmd')); });
    });
  }

  /* ============ GSAP layer: Lenis, rack, statement, timeline ============ */
  var topbarH = header ? header.offsetHeight : 72;
  var activeSplits = []; // { split, tween } — undone before a language switch

  if (motion && window.Lenis) {
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
    if (hasGsap) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      var lenisLoop = function (t) { lenis.raf(t); requestAnimationFrame(lenisLoop); };
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
    // Word splitting depends on the final web fonts
    (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(buildStatement);
    document.addEventListener('pf:beforelang', function () {
      if (!statementSplit) return;
      statementSplit.tween.scrollTrigger.kill();
      statementSplit.tween.kill();
      statementSplit.split.revert();
      statementSplit = null;
    });
    document.addEventListener('pf:lang', buildStatement);

    // Projects: pinned horizontal rack on large screens
    var pinEl = document.getElementById('projectsPin');
    var track = document.getElementById('rackTrack');
    var rackIndex = document.getElementById('rackIndex');
    var rackTotal = document.getElementById('rackTotal');
    var rackBar = document.getElementById('rackBar');
    if (pinEl && track) {
      var bladeCount = track.children.length;
      if (rackTotal) rackTotal.textContent = (bladeCount < 10 ? '0' : '') + bladeCount;
      gsap.matchMedia().add('(min-width: 1024px) and (min-height: 640px)', function () {
        pinEl.classList.add('is-pinned');
        var dist = function () { return Math.max(0, track.offsetWidth - window.innerWidth); };
        gsap.to(track, {
          x: function () { return -dist(); },
          ease: 'none',
          scrollTrigger: {
            trigger: pinEl,
            start: 'top top+=' + topbarH,
            end: function () { return '+=' + dist(); },
            pin: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true,
            onUpdate: function (self) {
              var idx = Math.min(bladeCount, Math.round(self.progress * (bladeCount - 1)) + 1);
              if (rackIndex) rackIndex.textContent = (idx < 10 ? '0' : '') + idx;
              if (rackBar) rackBar.style.transform = 'scaleX(' + Math.max(1 / bladeCount, self.progress).toFixed(3) + ')';
            }
          }
        });
        return function () { pinEl.classList.remove('is-pinned'); };
      });
    }

    // Experience: the git graph draws itself, commits light up as it passes
    $all('.timeline').forEach(function (tl) {
      tl.style.setProperty('--tl', '0');
      ScrollTrigger.create({
        trigger: tl, start: 'top 68%', end: 'bottom 62%', scrub: 0.4,
        onUpdate: function (self) { tl.style.setProperty('--tl', self.progress.toFixed(3)); }
      });
      $all('.tl-item', tl).forEach(function (it) {
        ScrollTrigger.create({
          trigger: it, start: 'top 66%',
          onEnter: function () { it.classList.add('is-lit'); },
          onLeaveBack: function () { it.classList.remove('is-lit'); }
        });
      });
    });

    // Sparklines draw in with the hero
    $all('.spark polyline').forEach(function (pl) {
      var len = pl.getTotalLength ? pl.getTotalLength() : 0;
      if (len) gsap.set(pl, { strokeDasharray: len, strokeDashoffset: len });
    });
  } else if (motion) {
    // No GSAP: commits light up via the plain visibility watcher
    $all('.tl-item').forEach(function (it) { onceVisible(it, function () { it.classList.add('is-lit'); }, 0.7); });
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
      gsap.to('.spark polyline', { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', delay: 0.7, stagger: 0.15 });
    }
    html.classList.add('hero-in');
    $all('.hero [data-count]').forEach(function (el) { setTimeout(function () { animateNum(el); }, 650); });
  }

  /* ============ Boot sequence (once per session) ============ */
  function runBoot(done) {
    var boot = document.getElementById('boot');
    var log = document.getElementById('bootLog');
    if (!html.classList.contains('is-booting') || !boot || !log) { done(); return; }
    lockScroll(true);
    document.body.style.overflow = 'hidden';
    var LINES = [
      [['[    0.000] rxf-sys bios v3.0 — power-on self test ....... '], ['ok', 'ok']],
      [['[    0.118] cpu0: robin-frank @ dormagen, nrw']],
      [['[    0.204] mem: homelab experience loaded ............ '], ['ok', 'ok']],
      [['[    0.317] eth0: link up · 1000 Mb/s full duplex']],
      [['['], ['  ok  ', 'ok'], ['] started proxmox-ve.service']],
      [['['], ['  ok  ', 'ok'], ['] started wireguard@wg0.service']],
      [['['], ['  ok  ', 'ok'], ['] started ninjaone-agent.service']],
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
        var s = document.createElement('span');
        if (seg[1]) s.className = seg[1];
        s.textContent = seg[0];
        log.insertBefore(s, cursor);
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
      try { sessionStorage.setItem(SS_BOOT, '1'); } catch (e) { /* storage blocked: boot plays again next visit */ }
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

  buildCable();
  frame();

})();
