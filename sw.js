/* Pomodori — service worker do app de pedido (PWA).
   Deixa o cardápio abrir mesmo sem internet e o app carregar instantâneo.
   Ao mudar arquivos do app, suba o número da versão (CACHE) para forçar atualização. */

const CACHE = "pomodori-app-v4";

// Casca do app (mesma origem). Ícones e fontes entram sob demanda.
const CORE = [
  "pedido.html",
  "menu.js",
  "app.js",
  "manifest.json",
  "fotos/logo.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "favicon-32.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)));
});

// a página pede para a nova versão assumir na hora (botão "Atualizar")
self.addEventListener("message", (e) => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // Navegações: rede primeiro (pega atualização), cai pro cache offline.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).then((res) => {
        if (sameOrigin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match(req).then((r) => r || caches.match("pedido.html")))
    );
    return;
  }

  // Demais GET: cache primeiro, com atualização em segundo plano.
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200 && (sameOrigin || res.type === "cors")) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
