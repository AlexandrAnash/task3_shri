var CACHE_NAME = 'shri-2016-task3-1';
var urlsToCache = [
  '/',
  '/css/index.css',
  '/js/index.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            }).then(function () {
                console.log('WORKER: install completed');
            })
    );
});

self.addEventListener('fetch', function (event) {
    const requestURL = new URL(event.request.url);
    if (/^\/api\/v1/.test(requestURL.pathname)
        && (event.request.method !== 'GET' && event.request.method !== 'HEAD')) {
        return event.respondWith(fetch(event.request));
    }

    if (/^\/api\/v1/.test(requestURL.pathname)) {
        return event.respondWith(
                fetchAndPutToCache(event.request)
        );
    }

    return event.respondWith(
        fetchAndPutToCache(event.request)
    );
});
self.addEventListener("activate", function (event) {
    /* Just like with the install event, event.waitUntil blocks activate on a promise.
       Activation will fail unless the promise is fulfilled.
    */
    console.log('activate');
});
function fetchAndPutToCache(request) {
    return fetch(request).then((response) => {
        const responseToCache = response.clone();
        return caches.open(CACHE_NAME)
            .then((cache) => {
                cache.put(request, responseToCache);
            })
            .then(() => response);
    })
    .catch(() => caches.match(request));
}

function getFromCache(request) {
    return caches.match(request)
        .then((response) => {
            if (response) {
                return response;
            }

            return Promise.reject();
        });
}
