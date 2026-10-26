// Service worker mínimo. Su único propósito es que Chrome considere la
// página "instalable" (es uno de los requisitos técnicos para que aparezca
// la opción "Instalar app" en vez de solo "Crear acceso directo"). No
// cachea nada ni intercepta las peticiones — todo sigue yendo directo a la
// red, incluyendo lo que carga adentro del iframe hacia Apps Script.

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // No-op a propósito: dejamos pasar todas las peticiones sin tocar nada.
});
