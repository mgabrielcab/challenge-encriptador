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
];
/* El código anterior está instalando el trabajador de servicio. */
self.addEventListener("install", function (event) {
  console.log("El servicio de trabajo está instalando");
  event.waitUntil(
    caches.open("mi-cache").then(function (cache) {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
