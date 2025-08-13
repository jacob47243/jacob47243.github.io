// Always start Home at the top (fresh visit or from /demo)
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

// Run on normal load and bfcache restore
const resetToTop = () => {
  if (location.hash) return; // allow deep links to sections
  // Temporarily disable smooth behavior for a hard jump to 0,0
  const prev = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';

  // Use two RAFs so layout & sticky header settle before we jump, then re-enable snap
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = prev || 'smooth';
      document.body.classList.remove('first-load');
    });
  });
};

window.addEventListener('load', resetToTop);
window.addEventListener('pageshow', (e) => { if (e.persisted) resetToTop(); });

// Map ALL assets under project-pages AND experience-pages
const PAGE_ASSETS = import.meta.glob('/src/{project-pages,experience-pages}/**/*', {
    as: 'url',
    eager: true,
  });
  
  // Generic hydrator (works for either, driven by data-base on the root)
  function hydrateAssets(scopeEl) {
    if (!scopeEl) return;
  
    // Example root elem: <section data-base="/src/experience-pages/amazon/">
    const base = scopeEl.closest('[data-base]')?.getAttribute('data-base')
              || '/src/experience-pages/';
  
    const resolveAsset = (pathLike) => {
      const key = pathLike.startsWith('/src/')
        ? pathLike
        : new URL(pathLike, new URL(base, window.location.origin)).pathname;
      return PAGE_ASSETS[key]; // undefined if not found
    };
  
    // Generic: any element with [data-asset] gets its src/href filled
    scopeEl.querySelectorAll('[data-asset]').forEach((el) => {
      const url = resolveAsset(el.getAttribute('data-asset'));
      if (!url) return;
      if ('src' in el)  el.src  = url;   // <img>, <video>, <source>, etc.
      if ('href' in el) el.href = url;   // <a>
    });

        // Office viewer: turn a PPTX asset into an Office embed URL
    scopeEl.querySelectorAll('iframe[data-office-src]').forEach((ifr) => {
        const asset = ifr.getAttribute('data-office-src');
        const fileUrl = resolveAsset(asset);
        if (!fileUrl) return;
        const absolute = new URL(fileUrl, window.location.origin).toString();
        ifr.src = 'https://view.officeapps.live.com/op/embed.aspx?src=' + encodeURIComponent(absolute);
    });
  
  
    // (Optional) Keep any legacy/special cases (safe to leave in)
    const chessVid = scopeEl.querySelector('#chessarm-local');
    if (chessVid) {
      const url = resolveAsset('chess_arm_full_demo.mp4');
      if (url) chessVid.src = url;
    }
    const chessDl = scopeEl.querySelector('#chessarm-download');
    if (chessDl) {
      const url = resolveAsset('chess_arm_full_demo.mp4');
      if (url) chessDl.href = url;
    }
  }
  

// Smooth-scroll is handled by CSS; this sets active link on scroll.
const links = [...document.querySelectorAll('#top-nav .nav-link')];
const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));

const observer = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      const id = e.target.id;
      links.forEach(a => a.classList.toggle('active', a === map.get(id)));
      links.forEach(a => a.setAttribute('aria-current', a.classList.contains('active') ? 'page' : 'false'));
    }
  }
}, { root: null, threshold: 0.6 }); // 60% of section in view to activate

document.querySelectorAll('main > section[id]').forEach(sec => observer.observe(sec));

// Optional: close gaps when clicking same-hash links quickly (prevents “late” highlight)
links.forEach(a => a.addEventListener('click', () => {
  links.forEach(x => x.classList.remove('active'));
  a.classList.add('active');
}));

// --- Inline demo fullscreen + loader ---
(() => {
    const embed = document.getElementById('demo-embed');
    const frame = document.getElementById('demoFrame');
    const fsBtn = document.querySelector('.demo-fullscreen');
    const loader = embed?.querySelector('.demo-loading');
  
    if (!embed || !frame || !fsBtn) return;
  
    // Hide "Loading…" once the iframe paints
    frame.addEventListener('load', () => {
      if (loader) loader.style.display = 'none';
    });
  
    const isFs = () => !!document.fullscreenElement;
  
    const toggleFs = () => {
      if (!isFs()) {
        // Request fullscreen on the wrapper so the overlay controls stay visible
        (embed.requestFullscreen || embed.webkitRequestFullscreen || embed.msRequestFullscreen)?.call(embed);
      } else {
        (document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen)?.call(document);
      }
    };
  
    fsBtn.addEventListener('click', toggleFs);
    document.addEventListener('fullscreenchange', () => {
      const active = isFs();
      fsBtn.setAttribute('aria-pressed', String(active));
      fsBtn.textContent = active ? 'Exit Fullscreen' : '⤢ Fullscreen';
    });
  })();
  

  // ── Detail loader: uses Vite's glob to bring in HTML content ──
const PROJECT_PAGES = import.meta.glob('/src/project-pages/**/index.html', { as: 'raw', eager: true });
const EXP_PAGES     = import.meta.glob('/src/experience-pages/**/index.html', { as: 'raw', eager: true });

const drawer = document.getElementById('detail-drawer');
const modal  = document.getElementById('detail-modal');

const $ = (sel, root=document) => root.querySelector(sel);

let lastFocus = null;
const lockScroll = (lock) => document.body.classList.toggle('no-scroll', !!lock);

// Stop any playing media inside a container (videos, audio, Drive/YouTube iframes)
function stopAllMedia(root) {
    if (!root) return;
  
    // HTML5 video/audio
    root.querySelectorAll('video, audio').forEach(el => {
      try {
        el.pause();
        el.currentTime = 0;
        // fully stop loading on Safari/iOS
        el.removeAttribute('src');
        el.load();
      } catch {}
    });
  
    // Embeds (Google Drive / YouTube / etc.)
    root.querySelectorAll('iframe').forEach(frame => {
      try {
        // blank it; we re-inject fresh HTML on next open anyway
        frame.src = 'about:blank';
      } catch {}
    });
  }
  

function openPanel(kind, id, titleText){
    lastFocus = document.activeElement;
    const isDrawer = kind === 'drawer';
    const host = isDrawer ? drawer : modal;
    if (!host) return;
  
    const title = isDrawer ? $('#drawer-title', host) : $('#modal-title', host);
    const body  = isDrawer ? $('#drawer-body', host)  : $('#modal-body', host);
    title.textContent = titleText || '';
  
    const slug = id.replace(/\s+/g,'_');
    const projKey = `/src/project-pages/${slug}/index.html`;
    const expKey  = `/src/experience-pages/${slug}/index.html`;
    const html    = PROJECT_PAGES[projKey] || EXP_PAGES[expKey];
  
    body.innerHTML = html || `<p class="muted">No details yet for <code>${id}</code>.</p>`;
  
    // 👉 Reset scroll position so each detail view starts at the top
    body.scrollTop = 0;
    body.scrollLeft = 0;
    requestAnimationFrame(() => body.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
  
    // Set correct base + hydrate assets
    const base = (html === PROJECT_PAGES[projKey])
      ? `/src/project-pages/${slug}/`
      : `/src/experience-pages/${slug}/`;
    body.setAttribute('data-base', base);
    hydrateAssets(body);
  
    host.setAttribute('aria-hidden', 'false');
    lockScroll(true);
  
    (host.querySelector('button, [href], [tabindex]:not([tabindex="-1"])') || (isDrawer ? $('.drawer__close', host) : $('.modal__close', host)))?.focus();
  
    const hash = isDrawer ? `#project=${slug}` : `#exp=${slug}`;
    history.replaceState(null, '', hash);
  }
  
  

  function closePanels(){
    [drawer, modal].forEach(el => {
      if (!el) return;
      stopAllMedia(el);                 // 👈 stop audio/video
      el.setAttribute('aria-hidden', 'true');
    });
    lockScroll(false);
    if (lastFocus) lastFocus.focus();
    lastFocus = null;
    if (location.hash) history.replaceState(null, '', ' ');
  }
  

document.addEventListener('click', (e) => {
  const card = e.target.closest('[data-detail]');
  if (card){
    const id = card.getAttribute('data-detail');
    const kind = card.getAttribute('data-view') || 'drawer';
    const title = card.querySelector('h3')?.textContent || id;
    openPanel(kind, id, title);
    e.preventDefault();
  }
  if (e.target.matches('.drawer__close, .modal__close, [data-close]')) {
    closePanels();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePanels();
});

// Deep-link open: #project=slug or #exp=slug
window.addEventListener('load', () => {
  if (!location.hash) return;
  const m = location.hash.match(/#(project|exp)=([^&]+)/);
  if (!m) return;
  const [_, kindKey, slug] = m;
  const kind = (kindKey === 'project') ? 'drawer' : 'modal';
  openPanel(kind, slug, slug.replace(/_/g,' '));
});
