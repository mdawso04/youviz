// Base Service Worker implementation.  To use your own Service Worker, set the PWA_SERVICE_WORKER_PATH variable in settings.py

var staticCacheName = "django-pwa-v" + new Date().getTime();
var filesToCache = [
    {% for f in staticfile_list %}'/static/{{f}}',
    {% endfor %}
    //'/offline',
    //'/css/django-pwa-app.css',
    //'/images/icons/icon-72x72.png',
    //'/images/icons/icon-96x96.png',
    //'/images/icons/icon-128x128.png',
    //'/images/icons/icon-144x144.png',
    //'/images/icons/icon-152x152.png',
    //'/images/icons/icon-192x192.png',
    //'/images/icons/icon-384x384.png',
    //'/images/icons/icon-512x512.png',
    //'/static/images/icons/splash-640x1136.png',
    //'/static/images/icons/splash-750x1334.png',
    //'/static/images/icons/splash-1242x2208.png',
    //'/static/images/icons/splash-1125x2436.png',
    //'/static/images/icons/splash-828x1792.png',
    //'/static/images/icons/splash-1242x2688.png',
    //'/static/images/icons/splash-1536x2048.png',
    //'/static/images/icons/splash-1668x2224.png',
    //'/static/images/icons/splash-1668x2388.png',
    //'/static/images/icons/splash-2048x2732.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
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