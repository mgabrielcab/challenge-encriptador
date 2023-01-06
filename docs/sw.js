const assets = [
  "/",
  "index.html",
  "css/estilo.css",
  "css/reset.css",
  "img/arbol.png",
  "img/Groupinformacion.png",
  "img/persona.png",
  "img/Vectora.png",
  "img/Vectora.svg",
  "js/funcion.js",
  "json/manifest.json",
];
var cacheName = "GabbDev";

/* El código anterior está instalando el trabajador de servicio. */
self.addEventListener("install", function (event) {
  console.log("El servicio de trabajo está instalando");
  event.waitUntil(
    caches.open("mi-cache").then(function (cache) {
      return cache.addAll(assets);
    })
  );
  self.skipWaiting();
});

/* Este es el código que está manejando la solicitud. */
self.addEventListener("fetch", (fetchEvent) => {
  console.log(
    "El servicio de trabajo esta manejando la solicitud de:",
    event.request.url
  );
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

/* Un detector de eventos de búsqueda. */
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      if (res) {
        // Si el recurso existe en la caché, lo devuelvo
        return res;
      } else {
        // Si no existe, hago una petición al servidor y almaceno el recurso en la caché
        return fetch(fetchEvent.request).then((response) => {
          return caches.open("mi-cache").then((cache) => {
            cache.put(fetchEvent.request, response.clone());
            return response;
          });
        });
      }
    })
  );
});
