// Retires the service worker left behind by the old Chirpy theme.
// Browsers that cached the old site check this file for updates;
// this version clears the old caches, removes itself, and reloads
// any open tabs so visitors see the current site.

// Step 1: activate immediately instead of waiting for old tabs to close.
self.addEventListener("install", function () {
  self.skipWaiting();
});

// Step 2: delete every cache, unregister this worker, then reload open pages.
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (name) {
            return caches.delete(name);
          })
        );
      })
      .then(function () {
        return self.registration.unregister();
      })
      .then(function () {
        return self.clients.matchAll({ type: "window" });
      })
      .then(function (openPages) {
        openPages.forEach(function (page) {
          page.navigate(page.url);
        });
      })
  );
});
