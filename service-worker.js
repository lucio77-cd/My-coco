const CACHE_NAME = "mycoco-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./capture.html",
  "./css/style.css",
  "./css/dashboard.css",
  "./css/capture.css",
  "./js/app.js",
  "./js/db.js",
  "./js/camera.js",
  "./js/dashboard.js",
  "./js/food.js",
  "./js/hydration.js",
  "./js/stool.js"
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );

});

self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );

});
