/* Service worker : permet d'utiliser Cap'Autonomie hors ligne une fois ouvert une première fois.
   Après chaque modification des fichiers, augmentez le numéro de VERSION pour forcer la mise à jour. */
var VERSION = "cap-v13";
var FICHIERS = [
  "./", "index.html", "css/app.css", "icone.svg", "manifest.webmanifest",
  "js/config.js", "js/store.js", "js/engines.js", "js/fiches.js", "js/app.js",
  "data/piliers.js", "data/actualites.js", "data/situations.js", "data/cps-seconde.js", "data/cps-premiere.js", "data/cps-terminale.js", "data/evars-seconde.js", "data/evars-premiere.js", "data/evars-terminale.js", "data/cyber-seconde.js", "data/cyber-premiere.js", "data/cyber-terminale.js", "data/orientation-seconde.js", "data/orientation-premiere.js", "data/orientation-terminale.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (cles) {
    return Promise.all(cles.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Réseau d'abord (pour avoir les dernières mises à jour), cache si hors ligne.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  var memeSite = new URL(e.request.url).origin === location.origin;
  // « no-cache » : on vérifie toujours auprès du serveur, pour voir les mises à jour tout de suite.
  e.respondWith(
    fetch(memeSite ? new Request(e.request, { cache: "no-cache" }) : e.request).then(function (rep) {
      if (rep && rep.ok && new URL(e.request.url).origin === location.origin) {
        var copie = rep.clone();
        caches.open(VERSION).then(function (c) { c.put(e.request, copie); });
      }
      return rep;
    }).catch(function () { return caches.match(e.request); })
  );
});
