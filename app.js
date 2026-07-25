/* Pomodori — runtime helpers that replace the Claude Design (.dc.html) engine.
   Handles: inline logo injection (desenhado em CSS, sem depender de imagem)
   + hover styles (the `style-hover` attribute). */

const LOGO_HTML = `
<div style="display:inline-flex;flex-direction:column;align-items:center;line-height:1;font-family:'Baloo 2',system-ui,sans-serif;">
  <div style="position:relative;padding:0.85em 2.3em 0.7em;">
    <div style="position:absolute;inset:0;border:0.17em solid #D6291F;border-radius:50%;"></div>
    <div style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;">
      <div style="font-family:'Baloo 2',system-ui,sans-serif;font-weight:800;font-size:2.7em;line-height:0.82;color:#D6291F;text-shadow:0.11em 0.11em 0 #1B4A3F;letter-spacing:0.03em;transform:skewX(-7deg);padding:0 0.08em;">pomodori</div>
      <div style="display:flex;align-items:flex-end;gap:0.55em;margin-top:0.2em;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.09em;">
          <div style="display:flex;gap:0.13em;">
            ${'<span style="width:0.78em;height:1.05em;border:0.1em solid #1B4A3F;border-bottom:none;border-radius:0.45em 0.45em 0 0;display:block;"></span>'.repeat(7)}
          </div>
          <div style="display:flex;gap:0.13em;">
            ${'<span style="width:0.78em;height:1.15em;border:0.1em solid #1B4A3F;border-bottom:none;border-radius:0.45em 0.45em 0 0;display:block;"></span>'.repeat(8)}
          </div>
          <div style="width:100%;height:0.16em;background:#1B4A3F;border-radius:0.1em;"></div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-start;padding-bottom:0.2em;">
          <div style="font-family:'Baloo 2',system-ui,sans-serif;font-weight:600;font-size:1.15em;line-height:1;color:#1B4A3F;letter-spacing:0.24em;">pizzaria</div>
          <div style="font-family:'Figtree',sans-serif;font-weight:700;font-size:0.5em;letter-spacing:0.16em;color:#5a5348;margin-top:0.32em;">DESDE 1987</div>
        </div>
      </div>
    </div>
  </div>
</div>`;

function initLogos() {
  document.querySelectorAll('.logo').forEach(el => {
    const size = el.getAttribute('data-size') || '7.5';
    el.style.fontSize = size + 'px';
    el.style.display = 'inline-block';
    el.innerHTML = LOGO_HTML;
  });
}

function initHover() {
  document.querySelectorAll('[style-hover]').forEach(el => {
    const base = el.getAttribute('style') || '';
    const hover = el.getAttribute('style-hover');
    el.addEventListener('mouseenter', () => { el.setAttribute('style', base + ';' + hover); });
    el.addEventListener('mouseleave', () => { el.setAttribute('style', base); });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLogos();
  initHover();
});
