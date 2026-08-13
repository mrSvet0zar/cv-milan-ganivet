// Shared settings engine: language (FR/EN) + theme (dark/light), persisted in
// localStorage. Exposes window.Tweaks { get, set, onChange }. The controls live
// in the page toolbar — this file no longer renders any UI panel.

(function () {
  const DEFAULTS = {
    lang: 'fr',
    theme: 'dark',
    anim: 70,      // 0-100 — fixed, no longer user-facing
    typo: 'mono',  // 'mono' | 'serif' | 'sans' — fixed, no longer user-facing
  };

  const state = Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem('cv_tweaks') || '{}'));
  // Only language and theme are user-facing now; lock the retired settings to
  // their defaults so a stale stored value can't strand a visitor.
  state.typo = DEFAULTS.typo;
  state.anim = DEFAULTS.anim;
  const listeners = new Set();

  function persist() {
    localStorage.setItem('cv_tweaks', JSON.stringify(state));
    applyVars();
    listeners.forEach(fn => { try { fn(state); } catch (e) { console.error(e); } });
  }

  function applyVars() {
    const r = document.documentElement;
    r.setAttribute('data-theme', state.theme);
    r.setAttribute('data-typo', state.typo);
    r.setAttribute('data-lang', state.lang);
    r.style.setProperty('--anim-intensity', state.anim / 100);
    r.style.setProperty('--anim-duration', (1.2 - state.anim / 100) + 's');
  }

  window.Tweaks = {
    get: () => ({ ...state }),
    set: (patch) => { Object.assign(state, patch); persist(); },
    onChange: (fn) => { listeners.add(fn); return () => listeners.delete(fn); },
  };

  applyVars();
})();
