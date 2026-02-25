/* ===========================================================
 * sw.js
 * ===========================================================
 * Minimal service worker for static Jekyll pages.
 * - Caches the offline page and home route on install
 * - Serves cached offline page for failed navigations
 * - Caches same-origin assets on first successful request
 * ========================================================== */

'use strict';

var CACHE_VERSION = 'mahsa-site-v1';
var OFFLINE_URL = '/offline.html';
var STATIC_ASSETS = ['/', OFFLINE_URL];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then(function (cache) {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys
            .filter(function (key) {
              return key !== CACHE_VERSION;
            })
            .map(function (key) {
              return caches.delete(key);
            })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', function (event) {
  var request = event.request;

  if (request.method !== 'GET') return;

  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(function () {
        return caches.match(OFFLINE_URL);
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(function (cachedResponse) {
      if (cachedResponse) return cachedResponse;

      return fetch(request).then(function (networkResponse) {
        if (
          !networkResponse ||
          networkResponse.status !== 200 ||
          networkResponse.type !== 'basic'
        ) {
          return networkResponse;
        }

        var responseToCache = networkResponse.clone();
        caches.open(CACHE_VERSION).then(function (cache) {
          cache.put(request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});
