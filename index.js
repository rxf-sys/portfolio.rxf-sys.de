/* Portfolio v2 — Theme, Sprache (DE/EN), Reveal, Counter, Lightbox.
   Vanilla JS, kein Build-Schritt, kein eval.
   Hinweis: data-theme wird bereits vom Inline-Script im <head> gesetzt
   (kein Flash beim Laden) — hier wird nur noch umgeschaltet/persistiert. */
(function () {
  'use strict';

  /* ============ Übersetzungen (EN) ============ */
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
    'proj.pf.desc': 'This website — static HTML/CSS/JS without build tools, self-hosted on my own HomeLab server with a custom domain via Cloudflare Tunnel.',
    'demo.label': 'Interactive demo',
    'demo.title': 'My apps — hands-on',
    'demo.desc': 'Ryntra and Orynthia run right here as a clickable prototype with test data: no login, no backend — just take a look and click through.',
    'demo.cta': 'Click through the prototype',
    'demo.hint': 'Click through the tabs — all test data.',
    'demo.switch': 'Switch to',
    'demo.ry.s1': 'Devices online', 'demo.ry.s2': 'Warning', 'demo.ry.s3': 'Jobs today',
    'demo.ry.offline': 'offline for 3 h',
    'demo.ry.chart': 'Avg. cluster CPU load', 'demo.ry.now': 'now',
    'demo.ry.done': 'Succeeded', 'demo.ry.running': 'Running', 'demo.ry.planned': 'Scheduled',
    'demo.oy.tab3': 'Savings goals',
    'demo.oy.s1': 'Total balance', 'demo.oy.s2': 'Income', 'demo.oy.s3': 'Expenses',
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
    'footer.imprint': 'Imprint', 'footer.privacy': 'Privacy', 'footer.top': 'Back to top'
  };

  var LS_THEME = 'pf2-theme', LS_LANG = 'pf2-lang';
  var html = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============ Theme ============ */
  var themeBtn = document.getElementById('themeBtn');
  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    if (!themeBtn) return;
    var icon = themeBtn.querySelector('i');
    if (icon) icon.className = t === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
  // Initialer Zustand kommt vom Inline-Script im <head>; hier Icon angleichen.
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var t = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(t);
      try { localStorage.setItem(LS_THEME, t); } catch (e) {}
    });
  }

  /* ============ Sprache ============ */
  var langBtn = document.getElementById('langBtn');
  var originals = {}; // key -> { de: string, html: bool }

  function collectOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      originals[el.getAttribute('data-i18n')] = { de: el.textContent, html: false };
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      originals[el.getAttribute('data-i18n-html')] = { de: el.innerHTML, html: true };
    });
  }

  function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      el.textContent = lang === 'en' ? (EN[k] || originals[k].de) : originals[k].de;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      el.innerHTML = lang === 'en' ? (EN[k] || originals[k].de) : originals[k].de;
    });
    html.setAttribute('lang', lang);
    if (langBtn) langBtn.textContent = lang === 'en' ? 'DE' : 'EN';
  }

  collectOriginals();
  var lang = 'de';
  try { lang = localStorage.getItem(LS_LANG) || 'de'; } catch (e) {}
  if (lang === 'en') applyLang('en');

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      lang = lang === 'de' ? 'en' : 'de';
      applyLang(lang);
      try { localStorage.setItem(LS_LANG, lang); } catch (e) {}
    });
  }

  /* ============ Sticky Header + Scroll-Fortschritt ============ */
  var header = document.getElementById('siteHeader');
  var progressBar = document.getElementById('scrollProgress');
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 30);
    if (progressBar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (max > 0 ? Math.min(window.scrollY / max, 1) * 100 : 0) + '%';
    }
    revealCheck();
    numCheck();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ============ Reveal (gestaffelt) ============ */
  // Sektionsüberschriften nur bei aktivem JS animieren (progressive enhancement)
  document.querySelectorAll('.section-head').forEach(function (el) { el.classList.add('reveal'); });

  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function revealIn(el) {
    // Kinder (Kacheln, Timeline-Einträge) gestaffelt einblenden
    var kids = el.querySelectorAll('.tile, .tl-item');
    kids.forEach(function (k, idx) {
      k.style.transitionDelay = Math.min(idx * 70, 560) + 'ms';
    });
    el.classList.add('in');
    if (kids.length) {
      setTimeout(function () {
        kids.forEach(function (k) { k.style.transitionDelay = ''; });
      }, 1500);
    }
    var i = revealEls.indexOf(el);
    if (i !== -1) revealEls.splice(i, 1);
  }
  // Fallback-Check über getBoundingClientRect — IntersectionObserver ist in
  // manchen Embed-Kontexten unzuverlässig, daher läuft beides parallel.
  function revealCheck() {
    if (!revealEls.length) return;
    revealEls.slice().forEach(function (el) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) revealIn(el);
    });
  }
  if ('IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { ro.unobserve(en.target); revealIn(en.target); }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(function (el) { ro.observe(el); });
  }
  window.addEventListener('resize', revealCheck, { passive: true });
  window.addEventListener('load', function () { revealCheck(); numCheck(); });
  revealCheck();

  /* ============ Hochzählende Zahlen ============ */
  var numEls = Array.prototype.slice.call(document.querySelectorAll('.stat .num, .feature-stat .num'));
  function animateNum(el) {
    var m = el.textContent.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!m) return;
    var prefix = m[1], target = parseInt(m[2], 10), suffix = m[3];
    if (reduceMotion || target <= 1) return;
    var start = null, dur = 950;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function numCheck() {
    if (!numEls.length) return;
    numEls.slice().forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
        var i = numEls.indexOf(el);
        if (i !== -1) numEls.splice(i, 1);
        animateNum(el);
      }
    });
  }
  numCheck();

  /* ============ Aktive Navigation ============ */
  var navLinks = document.querySelectorAll('.nav-pills a');
  var sections = [];
  navLinks.forEach(function (a) {
    var sec = document.getElementById(a.getAttribute('data-section'));
    if (sec) sections.push({ a: a, sec: sec });
  });
  if ('IntersectionObserver' in window && sections.length) {
    var no = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          navLinks.forEach(function (a) { a.classList.remove('active'); });
          var hit = sections.filter(function (s) { return s.sec === en.target; })[0];
          if (hit) hit.a.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(function (s) { no.observe(s.sec); });
  }

  /* ============ Cert-Lightbox (mit Fokus-Management) ============ */
  var modal = document.getElementById('certModal');
  var certImg = document.getElementById('certImg');
  var certClose = document.getElementById('certClose');
  // 1×1 transparentes GIF — Platzhalter, solange kein Zertifikat geöffnet ist
  var BLANK_IMG = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  var lastTrigger = null;

  function closeModal() {
    modal.classList.remove('open');
    modal.hidden = true;
    certImg.src = BLANK_IMG;
    certImg.alt = '';
    if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
  }

  if (modal && certImg && certClose) {
    document.querySelectorAll('.cert-view').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lastTrigger = btn;
        certImg.src = btn.getAttribute('data-img');
        certImg.alt = btn.getAttribute('data-alt') || '';
        modal.hidden = false;
        modal.classList.add('open');
        certClose.focus();
      });
    });
    certClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });

    /* ============ Tastatur ============ */
    document.addEventListener('keydown', function (e) {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab') {
        // Einziges fokussierbares Element im Dialog — Fokus dort halten
        e.preventDefault();
        certClose.focus();
      }
    });
  }

  /* ============ App-Demo: Carousel + klickbarer Prototyp ============ */
  var demoStage = document.getElementById('demoStage');
  var demoModal = document.getElementById('demoModal');
  if (demoStage && demoModal) {
    var demoSlides = Array.prototype.slice.call(demoStage.querySelectorAll('.demo-slide'));
    var demoDots = Array.prototype.slice.call(document.querySelectorAll('.demo-dot'));
    var demoCurrent = 0;
    var demoTimer = null;

    var demoGoTo = function (i) {
      demoCurrent = (i + demoSlides.length) % demoSlides.length;
      demoSlides.forEach(function (s, idx) { s.classList.toggle('active', idx === demoCurrent); });
      demoDots.forEach(function (d, idx) { d.classList.toggle('active', idx === demoCurrent); });
    };
    var demoStop = function () { if (demoTimer) { clearInterval(demoTimer); demoTimer = null; } };
    var demoStart = function () {
      // Keine Auto-Rotation bei reduzierter Bewegung oder offenem Modal
      if (reduceMotion || demoTimer || !demoModal.hidden) return;
      demoTimer = setInterval(function () { demoGoTo(demoCurrent + 1); }, 7000);
    };
    demoDots.forEach(function (d, idx) {
      d.addEventListener('click', function () { demoGoTo(idx); demoStop(); demoStart(); });
    });
    // Rotation pausiert, solange Maus oder Fokus auf der Bühne liegt
    demoStage.addEventListener('mouseenter', demoStop);
    demoStage.addEventListener('mouseleave', demoStart);
    demoStage.addEventListener('focusin', demoStop);
    demoStage.addEventListener('focusout', demoStart);
    demoStart();

    // Balken-Breiten/-Höhen aus data-Attributen setzen (kein Inline-Style im
    // Markup — html-validate-Regel no-inline-style; CSS animiert via transform)
    document.querySelectorAll('.proto .p-bar i[data-w]').forEach(function (el) {
      el.style.width = el.getAttribute('data-w') + '%';
    });
    document.querySelectorAll('.proto .p-col[data-h]').forEach(function (el) {
      el.style.setProperty('--h', el.getAttribute('data-h') + '%');
    });

    // Tabs beider Prototypen — funktionieren im Carousel und im Modal
    document.querySelectorAll('.proto').forEach(function (proto) {
      var tabs = Array.prototype.slice.call(proto.querySelectorAll('.p-tab'));
      var views = Array.prototype.slice.call(proto.querySelectorAll('.proto-view'));
      tabs.forEach(function (tab, idx) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) { t.classList.remove('active'); });
          views.forEach(function (v) { v.classList.remove('active'); });
          tab.classList.add('active');
          if (views[idx]) views[idx].classList.add('active');
        });
      });
    });

    // Modal: der aktive Prototyp zieht in den Dialog um (kein doppeltes Markup);
    // beim Schließen wandert er zurück in seinen Carousel-Slide.
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
      demoGoTo(demoModalApp); // Carousel zeigt die zuletzt betrachtete App
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
        // Fokus im Dialog halten (Schließen, Tabs, Wechseln-Button)
        var focusables = Array.prototype.slice.call(demoModal.querySelectorAll('button'));
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

})();
