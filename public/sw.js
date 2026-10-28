/* The 14Lights Service Worker with Dynamic Cache Invalidation */

const CACHE_PREFIX = '14lights-cache-';
const CURRENT_CACHE_VERSION = `${CACHE_PREFIX}v1.0.1`;

const STATIC_ASSETS_TO_PRECACHE = [
  '/',
  '/index.html',
  '/assets/VR_LOGO.webp',
  '/favicon.ico',
  '/favicon.png',
];

// 1. Install Event: Precache essential assets and force skip waiting
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CURRENT_CACHE_VERSION).then((cache) => {
      return cache.addAll(STATIC_ASSETS_TO_PRECACHE).catch((err) => {
        console.warn('[SW] Pre-caching partial warning:', err);
      });
    })
  );
});

// 2. Activate Event: Dynamic Cache Invalidation & Stale Cache Key Cleanup
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName.startsWith(CACHE_PREFIX) && cacheName !== CURRENT_CACHE_VERSION) {
            console.log('[SW] Deleting stale cache key:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// 3. Fetch Event: Tailored Cache Strategies (Network-First for HTML, Cache-First for Hashed Assets, Stale-While-Revalidate for Media)
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests or external extensions
  if (request.method !== 'GET' || url.protocol.startsWith('chrome-extension')) {
    return;
  }

  // A. Navigation / HTML Requests: Network-First (Never serve stale HTML when online)
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CURRENT_CACHE_VERSION).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Offline fallback
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/index.html');
          });
        })
    );
    return;
  }

  // B. Hashed Assets (/assets/): Cache-First Strategy
  if (url.pathname.startsWith('/assets/') && /\.[a-f0-9]{8,64}\./.test(url.pathname)) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CURRENT_CACHE_VERSION).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // C. Unhashed Media & Images (/team/, /platforms/, .webp, .png, .jpg): Stale-While-Revalidate Strategy
  if (
    url.pathname.startsWith('/team/') ||
    url.pathname.startsWith('/platforms/') ||
    /\.(webp|png|jpg|jpeg|gif|ico|svg|css)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              caches.open(CURRENT_CACHE_VERSION).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Default network fetch with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

// 4. Message Listener for Instant Client-Triggered Updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
