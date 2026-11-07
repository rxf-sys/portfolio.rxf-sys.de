/* Boot gate: runs synchronously in <head> before the first paint and
   marks the document as JS-capable, so CSS can hide elements that the
   motion layer animates in (failsafes show them again after 5 s).
   External file on purpose: the CSP only allows hashed inline scripts. */
document.documentElement.classList.add('js');
