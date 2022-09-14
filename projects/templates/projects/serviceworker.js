// Base Service Worker implementation.  To use your own Service Worker, set the PWA_SERVICE_WORKER_PATH variable in settings.py
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
//const {strategies} = workbox;

//import {precacheAndRoute} from 'workbox-precaching';
//const {precacheAndRoute} = workbox-precaching;
workbox.loadModule('workbox-precaching');
//import { registerRoute, Route } from 'workbox-routing';
//import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
workbox.loadModule('workbox-routing');
workbox.loadModule('workbox-strategies');

workbox.precaching.precacheAndRoute([
    {% for f in staticfile_list %}{url: '/static/{{f}}', revision: null}, 
    {% endfor %}
    {url: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css', revision: '1'},
    {url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', revision: '1'},
    {url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', revision: '1'},
    /*{url: '/dataframe/8', revision: '1'},
    {url: '/report/153', revision: '1'},
    {url: 'https://unpkg.com/bootstrap-table@1.20.2/dist/bootstrap-table.min.css', revision: '1'},
    {url: 'https://code.jquery.com/jquery-3.5.1.min.js', revision: '1'},
    {url: 'https://unpkg.com/bootstrap-table@1.20.2/dist/bootstrap-table.min.js', revision: '1'},
    {url: 'https://cdn.plot.ly/plotly-2.14.0.min.js', revision: '1'},*/
]);


// Handle scripts:
const unicornRoute = new workbox.routing.Route(({ request }) => {
  return /(dataframe|report)/.test(request.url);
}, new workbox.strategies.CacheFirst({
  cacheName: 'unicorn'
}));

/*
// Handle styles:
const stylesRoute = new Route(({ request }) => {
  return request.destination === 'style';
}, new CacheFirst({
  cacheName: 'styles'
}));
*/
// Register routes
workbox.routing.registerRoute(unicornRoute);

/*
var staticCacheName = "django-pwa-v" + new Date().getTime();
var filesToCache = [
    {% for f in staticfile_list %}'/static/{{f}}',
    {% endfor %}
    '/dataframe/8',
    '/report/153',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css',
    'https://unpkg.com/dropzone@5/dist/min/dropzone.min.css',
    'https://unpkg.com/bootstrap-table@1.20.2/dist/bootstrap-table.min.css',
    'https://code.jquery.com/jquery-3.5.1.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', 
    'https://unpkg.com/bootstrap-table@1.20.2/dist/bootstrap-table.min.js',
    'https://cdn.plot.ly/plotly-2.14.0.min.js'
];

// Cache on install
self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
});

// Clear cache on activate
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("django-pwa-")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});

// Serve from Cache
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});
*/