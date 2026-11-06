// Guarda la app (no los datos) para que abra aunque no haya señal.
// Los datos de pacientes los guarda Firebase en el dispositivo, cifrados por el navegador.
const CACHE = "lista-tr-v6";
const ARCHIVOS = ["./", "./index.html", "./manifest.json", "./icon.svg", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return; // Firebase va directo
  // Red primero (para recibir actualizaciones de la app), caché si no hay señal
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put(e.request, c)); return r; })
    .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
