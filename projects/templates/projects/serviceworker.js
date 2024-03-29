// Base Service Worker implementation.  To use your own Service Worker, set the PWA_SERVICE_WORKER_PATH variable in settings.py
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);
//import {precacheAndRoute} from 'workbox-precaching';
//const {precacheAndRoute} = workbox-precaching;
workbox.loadModule('workbox-precaching');
workbox.loadModule('workbox-routing');
workbox.loadModule('workbox-strategies');
workbox.loadModule('workbox-expiration');

workbox.precaching.precacheAndRoute([
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
    ({url}) => url.pathname === '/', 
    new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
    ({url}) => url.pathname.startsWith('/admin/'), 
    new workbox.strategies.NetworkOnly()
);

workbox.routing.registerRoute(
    ({url}) => /^\/(viz|datasource|report)/.test(url.pathname),
    //({request}) => /(viz|datasource|report)/.test(request.url),
    //({url}) => url.pathname.startsWith(('/viz/', '/datasource/', '/report/')),
    new workbox.strategies.CacheFirst({
    cacheName: 'unicorn',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // Only cache requests for a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
        // Only cache 10 requests.
        //maxEntries: 10,
      }),
    ],
  })
);