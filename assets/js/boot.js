/* Boot gate — runs synchronously in <head> before the first paint.
   Marks the document as JS-capable and decides whether the boot
   sequence plays (once per browser session, never with reduced motion).
   External file on purpose: the CSP only allows hashed inline scripts. */
(function () {
  var d = document.documentElement;
  d.classList.add('js');
  try {
    var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!calm && !sessionStorage.getItem('pf3-booted')) d.classList.add('is-booting');
  } catch (e) {
    /* sessionStorage blocked (privacy mode): skip the boot sequence */
  }
})();
