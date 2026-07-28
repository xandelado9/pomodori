/* Pomodori — runtime helpers that replace the Claude Design (.dc.html) engine.
   Handles: inline logo injection (imagem logo.png, fundo transparente)
   + hover styles (the `style-hover` attribute). */

const LOGO_SRC = 'logo.png';

/* O CSS ja reserva a caixa do `.logo` pelo data-size, entao a imagem so
   preenche o espaco que existe — nada de layout shift no cabecalho grudado.
   `width`/`height` sao os pixels reais do arquivo (832x832). */
function initLogos() {
  document.querySelectorAll('.logo').forEach(el => {
    const size = parseFloat(el.getAttribute('data-size') || '7.5');
    const px = Math.round(size * 6.4);
    el.style.display = 'inline-flex';
    el.innerHTML = '<img src="' + LOGO_SRC + '" alt="Pomodori Pizzaria — desde 1987" ' +
      'width="832" height="832" decoding="async" ' +
      'style="display:block;height:' + px + 'px;width:' + px + 'px;object-fit:contain;">';
  });
}

/* O destaque de `style-hover` so vale onde existe cursor de verdade.
   No toque o `mouseenter` dispara mas o `mouseleave` nunca vem, e o link
   ficava preso no estado de hover depois do tap. */
function initHover() {
  const podeHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  document.querySelectorAll('[style-hover]').forEach(el => {
    const base = el.getAttribute('style') || '';
    const hover = el.getAttribute('style-hover');
    const liga = () => { el.setAttribute('style', base + ';' + hover); };
    const desliga = () => { el.setAttribute('style', base); };

    if (podeHover) {
      el.addEventListener('mouseenter', liga);
      el.addEventListener('mouseleave', desliga);
    }

    // Teclado: o mesmo destaque no foco — mas so no foco de teclado.
    // Ligar em todo `focus` deixava o link presa na cor de hover depois
    // de um tap num link ancora (#sobre), porque no toque nao existe
    // `mouseleave` para desfazer.
    el.addEventListener('focus', () => {
      try {
        if (el.matches(':focus-visible')) liga();
      } catch (e) {
        // navegador sem :focus-visible — nao destaca, mas nunca trava
      }
    });
    el.addEventListener('blur', desliga);

    // toque: destaca enquanto o dedo esta no elemento e sempre desfaz
    el.addEventListener('touchstart', liga, { passive: true });
    el.addEventListener('touchend', desliga, { passive: true });
    el.addEventListener('touchcancel', desliga, { passive: true });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLogos();
  initHover();
});
