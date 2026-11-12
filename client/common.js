// shared pill nav, footer, CA bar, toasts, formatting
export const X_URL = 'https://x.com/AeonBlockchain', GH_URL = 'https://github.com/AeonBlockchainL1/aeon';
export const $ = (id) => document.getElementById(id), api = (p, d) => fetch(p, d ? { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(d) } : undefined).then((r) => r.json());
export const aeon = (v) => (Number(v) / 1e6).toLocaleString('en-US', { maximumFractionDigits: 6 });
export const short = (h, n = 8) => (h ? h.slice(0, n) + '…' + h.slice(-6) : '');
export const ago = (ts) => { const s = Math.max(0, (Date.now() - ts) / 1000); return s < 60 ? Math.floor(s) + 's ago' : s < 3600 ? Math.floor(s / 60) + 'm ago' : Math.floor(s / 3600) + 'h ago'; };
export function toast(m, err) { const t = document.createElement('div'); t.className = 'toast' + (err ? ' err' : ''); t.textContent = m; document.body.appendChild(t); setTimeout(() => t.remove(), 3600); }
export const copy = (v, what) => navigator.clipboard.writeText(v).then(() => toast((what || 'copied') + ' copied'));
// the A mark: two leaning slabs and a floating crossbar
let gid = 0;
export const MARK = (s = 22, flat) => { const id = 'aeg' + gid++; return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f4efff"/><stop offset=".55" stop-color="#a78bfa"/><stop offset="1" stop-color="#e879f9"/></linearGradient></defs><g fill="${flat || `url(#${id})`}"><rect x="5.2" y="1.6" width="5.2" height="21" rx="2.6" transform="rotate(20 7.8 12.1)"/><rect x="13.6" y="1.6" width="5.2" height="21" rx="2.6" transform="rotate(-20 16.2 12.1)"/><rect x="8.4" y="13.8" width="7.2" height="3.6" rx="1.8"/></g></svg>`; };
// rotating ring of text around the mark
export const BADGE = (s = 120, txt = 'QUANTUM-PROOF PRIVACY · QUANTUM-PROOF PRIVACY · ') => { const id = 'bdg' + gid++; return `<span class="badge" style="width:${s}px;height:${s}px"><svg class="spin" width="${s}" height="${s}" viewBox="0 0 100 100"><defs><path id="${id}" d="M50 50m-40 0a40 40 0 1 1 80 0a40 40 0 1 1-80 0"/></defs><text font-family="Geist Mono,monospace" font-size="7.6" letter-spacing="1.5" fill="currentColor"><textPath href="#${id}">${txt}</textPath></text></svg><span class="mk">${MARK(Math.round(s * 0.36))}</span></span>`; };
export const LANDING = [['/explorer', 'Explorer'], ['/wallet', 'Wallet'], ['/mine', 'Mine'], ['/docs', 'Docs'], ['/whitepaper', 'Whitepaper']];
export const APP = [['/', 'Home'], ['/explorer', 'Explorer'], ['/wallet', 'Wallet'], ['/mine', 'Mine'], ['/docs', 'Docs'], ['/whitepaper', 'Whitepaper']];
export const GH_ICO = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>';
export const X_ICO = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.2h3.7l-8 9.2 9.4 12.4h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L.1 1.2h7.6l5.2 6.9 6-6.9Zm-1.3 19.4h2L6.5 3.3H4.3l13.3 17.3Z"/></svg>';
export function chrome(links = APP, cta = ['/wallet', 'Open wallet']) {
  const h = document.createElement('header'); h.className = 'nav';
  h.innerHTML = `<a class="logo" href="/">${MARK(24)}<span>aeon</span></a><nav>${links.map(([u, t]) => `<a href="${u}" class="${location.pathname === u ? 'on' : ''}">${t}</a>`).join('')}</nav><a class="pbtn xbtn" href="${GH_URL}" target="_blank" rel="noopener" aria-label="Aeon Chain source on GitHub">${GH_ICO}</a><a class="pbtn xbtn" href="${X_URL}" target="_blank" rel="noopener" aria-label="Aeon Chain on X">${X_ICO}</a><a class="pbtn" href="${cta[0]}">${cta[1]}</a><button class="pbtn burger" aria-label="menu">Menu</button>`;
  document.body.prepend(h); h.querySelector('.burger').onclick = () => h.classList.toggle('open'); h.querySelectorAll('nav a').forEach((a) => (a.onclick = () => h.classList.remove('open')));
  const f = document.createElement('footer'); f.className = 'foot';
  f.innerHTML = `<div class="card"><div style="color:var(--fog)">${BADGE(132)}</div><div><a class="logo" href="/" style="font-size:30px">${MARK(32)}<span>aeon</span></a>
    <div class="cols"><div><a href="/whitepaper">Whitepaper</a><a href="/docs">Documentation</a></div><div><a href="/explorer">Explorer</a><a href="/wallet">Wallet</a><a href="/mine">Mine</a></div><div><a href="/#lifecycle">How a payment works</a><a href="/#roadmap">Roadmap</a><a href="/#faq">FAQ</a></div><div><a href="${GH_URL}" target="_blank" rel="noopener">GitHub</a><a href="${X_URL}" target="_blank" rel="noopener">X</a><a href="/docs">API</a></div></div>
    <p class="fine">Aeon Chain is a private proof-of-work chain running as a public testnet. $AEON is the Robinhood Chain token that carries the project to mainnet. Open source under BSD-3-Clause.</p></div></div>`;
  document.body.appendChild(f); return h;
}
export function caBar(el, mint) { if (!el) return; el.innerHTML = `<span class="cap">$AEON</span><code>${mint || 'launching on Robinhood Chain'}</code>`; el.onclick = () => mint && copy(mint, '$AEON address'); }
