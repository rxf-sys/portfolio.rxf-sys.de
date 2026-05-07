/* Robin Frank — Portfolio scripts
   - Scroll-spy for the side rail
   - Reveal-on-scroll
   - Certificate lightbox (with focus trap)
   - Skill-bar a11y augmentation
*/
(function () {
  'use strict';

  const sections = ['home','about','skills','projects','certificates','experience','contact'];
  const railLinks = document.querySelectorAll('#railNav a');

  function setActive(id) {
    railLinks.forEach(a => a.classList.toggle('active', a.dataset.section === id));
  }

  // Reveal-on-scroll for any element marked .reveal (and the section itself)
  const revealIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        revealIo.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  document.querySelectorAll('section, .reveal').forEach(s => revealIo.observe(s));

  // Scroll-spy: mark the section that crosses ~30% from the top as active
  const spyIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting && sections.indexOf(e.target.id) !== -1) {
        setActive(e.target.id);
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('section').forEach(s => spyIo.observe(s));

  // Skill-bars: enrich with ARIA so screen-readers announce the level
  document.querySelectorAll('.skill-row').forEach(row => {
    const lvl = row.querySelector('.lvl');
    const name = row.querySelector('.name');
    if (!lvl || !name) return;
    const dots = lvl.querySelectorAll('span');
    const filled = lvl.querySelectorAll('span.on').length;
    const total = dots.length;
    lvl.setAttribute('role', 'meter');
    lvl.setAttribute('aria-valuemin', '0');
    lvl.setAttribute('aria-valuemax', String(total));
    lvl.setAttribute('aria-valuenow', String(filled));
    lvl.setAttribute('aria-label', `${name.textContent.trim()}: ${filled} von ${total}`);
  });

  // Cert lightbox with focus trap
  const modal = document.getElementById('certModal');
  const modalImg = document.getElementById('certImg');
  const closeBtn = document.getElementById('certClose');
  let lastTrigger = null;

  if (modal && modalImg && closeBtn) {
    document.querySelectorAll('.cert-view').forEach(b => {
      b.addEventListener('click', () => {
        lastTrigger = b;
        modalImg.src = b.dataset.img;
        modalImg.alt = b.dataset.alt || '';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        closeBtn.focus();
      });
    });
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key === 'Tab') {
        // Only one focusable element -> keep focus on close button
        e.preventDefault();
        closeBtn.focus();
      }
    });
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
  }
})();
