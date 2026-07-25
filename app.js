/* Pomodori — runtime helpers that replace the Claude Design (.dc.html) engine.
   Handles: inline logo injection + hover styles (the `style-hover` attribute). */

const LOGO_SRC = 'logo.png';

function initLogos() {
  document.querySelectorAll('.logo').forEach(el => {
    const size = parseFloat(el.getAttribute('data-size') || '7.5');
    el.style.display = 'inline-flex';
    el.innerHTML = '<img src="' + LOGO_SRC + '" alt="Pomodori Pizzaria — desde 1987" ' +
      'style="display:block;height:' + Math.round(size * 6.4) + 'px;width:auto;">';
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
