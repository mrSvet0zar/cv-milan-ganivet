// Shared tweak bar logic — reused across all 5 variations.
// Handles: language toggle (FR/EN), theme (dark/light), animation intensity, typography.
// Registers with host edit-mode protocol AND offers an always-visible floating panel.

(function () {
  const DEFAULTS = {
    lang: 'fr',
    theme: 'dark',
    anim: 70,      // 0-100
    typo: 'mono',  // 'mono' | 'serif' | 'sans'
  };

  const state = Object.assign({}, DEFAULTS, JSON.parse(localStorage.getItem('cv_tweaks') || '{}'));
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

  // Floating tweaks panel (visible by default — users want these controls).
  function mountPanel() {
    const panel = document.createElement('div');
    panel.className = 'tweaks-panel';
    panel.innerHTML = `
      <button class="tweaks-toggle" aria-label="Toggle tweaks">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
        <span>Tweaks</span>
      </button>
      <div class="tweaks-body">
        <div class="tweaks-title">Tweaks</div>

        <div class="tweak-row">
          <label>Language</label>
          <div class="seg" data-key="lang">
            <button data-value="fr">FR</button>
            <button data-value="en">EN</button>
          </div>
        </div>

        <div class="tweak-row">
          <label>Theme</label>
          <div class="seg" data-key="theme">
            <button data-value="dark">Dark</button>
            <button data-value="light">Light</button>
          </div>
        </div>

        <div class="tweak-row">
          <label>Typography</label>
          <div class="seg seg-3" data-key="typo">
            <button data-value="mono">Mono</button>
            <button data-value="serif">Serif</button>
            <button data-value="sans">Sans</button>
          </div>
        </div>

        <div class="tweak-row">
          <label>Animations <span class="anim-val">${state.anim}</span></label>
          <input type="range" min="0" max="100" step="5" value="${state.anim}" data-key="anim" class="slider"/>
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    const refresh = () => {
      panel.querySelectorAll('.seg').forEach(seg => {
        const k = seg.dataset.key;
        seg.querySelectorAll('button').forEach(b => {
          b.classList.toggle('on', b.dataset.value === state[k]);
        });
      });
      const slider = panel.querySelector('[data-key="anim"]');
      if (slider) slider.value = state.anim;
      panel.querySelector('.anim-val').textContent = state.anim;
    };
    refresh();

    panel.querySelectorAll('.seg button').forEach(b => {
      b.addEventListener('click', () => {
        const key = b.parentElement.dataset.key;
        state[key] = b.dataset.value;
        persist();
        refresh();
      });
    });
    panel.querySelector('[data-key="anim"]').addEventListener('input', (e) => {
      state.anim = parseInt(e.target.value, 10);
      panel.querySelector('.anim-val').textContent = state.anim;
      persist();
    });

    panel.querySelector('.tweaks-toggle').addEventListener('click', () => {
      panel.classList.toggle('open');
    });
  }

  const style = document.createElement('style');
  style.textContent = `
    .tweaks-panel { position: fixed; bottom: 16px; right: 16px; z-index: 9999; font-family: ui-monospace, "JetBrains Mono", Menlo, monospace; font-size: 12px; }
    .tweaks-toggle { display: inline-flex; align-items: center; gap: 6px; padding: 8px 12px; background: rgba(20,20,20,0.92); color: #e5e5e5; border: 1px solid rgba(255,255,255,0.14); border-radius: 999px; cursor: pointer; backdrop-filter: blur(8px); }
    .tweaks-toggle:hover { background: rgba(30,30,30,0.95); }
    [data-theme="light"] .tweaks-toggle { background: rgba(250,250,250,0.94); color: #111; border-color: rgba(0,0,0,0.12); }
    .tweaks-body { display: none; position: absolute; bottom: 42px; right: 0; width: 260px; background: rgba(18,18,20,0.96); color: #e5e5e5; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 14px; backdrop-filter: blur(12px); box-shadow: 0 12px 32px rgba(0,0,0,0.4); }
    [data-theme="light"] .tweaks-body { background: rgba(252,252,252,0.98); color: #111; border-color: rgba(0,0,0,0.1); }
    .tweaks-panel.open .tweaks-body { display: block; }
    .tweaks-title { font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.55; margin-bottom: 10px; }
    .tweak-row { margin-bottom: 12px; }
    .tweak-row label { display: flex; justify-content: space-between; font-size: 11px; opacity: 0.7; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.08em; }
    .anim-val { font-variant-numeric: tabular-nums; opacity: 1; }
    .seg { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: rgba(255,255,255,0.06); border-radius: 6px; padding: 2px; }
    [data-theme="light"] .seg { background: rgba(0,0,0,0.05); }
    .seg.seg-3 { grid-template-columns: 1fr 1fr 1fr; }
    .seg button { background: transparent; color: inherit; border: 0; padding: 6px 8px; font: inherit; font-size: 11px; border-radius: 4px; cursor: pointer; opacity: 0.65; }
    .seg button.on { background: rgba(255,255,255,0.14); opacity: 1; }
    [data-theme="light"] .seg button.on { background: rgba(0,0,0,0.1); }
    .slider { width: 100%; accent-color: #8b5cf6; }
  `;
  document.head.appendChild(style);

  // Host edit-mode protocol
  window.addEventListener('message', (e) => {
    const data = e.data || {};
    if (data.type === '__activate_edit_mode') {
      document.querySelector('.tweaks-panel')?.classList.add('open');
    } else if (data.type === '__deactivate_edit_mode') {
      document.querySelector('.tweaks-panel')?.classList.remove('open');
    }
  });

  function init() {
    applyVars();
    mountPanel();
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
