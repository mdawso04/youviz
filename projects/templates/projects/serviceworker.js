// Base Service Worker implementation.  To use your own Service Worker, set the PWA_SERVICE_WORKER_PATH variable in settings.py
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
//import {precacheAndRoute} from 'workbox-precaching';
//const {precacheAndRoute} = workbox-precaching;
workbox.loadModule('workbox-precaching');
workbox.loadModule('workbox-routing');
workbox.loadModule('workbox-strategies');

workbox.precaching.precacheAndRoute([
    {url: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css', revision: '1'},
    {url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', revision: '1'},
    {url: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', revision: '1'},
    {% for f in staticfile_list %}{url: '/static/{{f}}', revision: null},
    {% endfor %}
]);

// Handle scripts:
/*
const unicornRoute = new workbox.routing.Route(({ request }) => {
  return /(viz|dataframe|report)/.test(request.url);
}, new workbox.strategies.CacheFirst({
  cacheName: 'unicorn'
}));

// Register routes
workbox.routing.registerRoute(unicornRoute);
*/

workbox.routing.registerRoute(
  ({request}) => /(viz|dataframe|report)/.test(request.url),
  new workbox.strategies.CacheFirst({
    cacheName: 'unicorn',
  })
);