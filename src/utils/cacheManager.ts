/**
 * Dynamic Cache Management and Service Worker Manager
 */

export const APP_VERSION = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '1.0.1';
export const BUILD_TIME = typeof __BUILD_TIME__ !== 'undefined' ? __BUILD_TIME__ : Date.now().toString();

declare global {
  interface Window {
    __APP_VERSION__?: string;
    __BUILD_TIME__?: string;
  }
}

/**
 * Appends a cache-busting version parameter to unhashed static assets or image URLs
 */
export function getCacheBustedUrl(url: string): string {
  if (!url) return url;
  
  // Skip data URLs, absolute blob URLs, or assets that already contain Vite build hashes
  if (
    url.startsWith('data:') ||
    url.startsWith('blob:') ||
    /\.[a-f0-9]{8,64}\./i.test(url)
  ) {
    return url;
  }

  try {
    const hasParams = url.includes('?');
    const separator = hasParams ? '&' : '?';
    return `${url}${separator}v=${APP_VERSION}_${BUILD_TIME.slice(-6)}`;
  } catch {
    return url;
  }
}

/**
 * Registers the Service Worker and sets up automatic cache invalidation on deployment updates
 */
export function registerServiceWorker(): void {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  // Only register in production or HTTPS/localhost environments
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { updateViaCache: 'none' })
      .then((registration) => {
        // Periodically check for worker updates every 1 hour
        setInterval(() => {
          registration.update().catch((err) => console.debug('[CacheManager] Worker check error:', err));
        }, 60 * 60 * 1000);

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('[CacheManager] New content available; automatically applying update.');
                // Trigger skipWaiting on worker
                installingWorker.postMessage({ type: 'SKIP_WAITING' });
              }
            }
          };
        };
      })
      .catch((error) => {
        console.debug('[CacheManager] ServiceWorker registration failed:', error);
      });

    // When the controlling service worker changes, reload window smoothly to serve fresh code
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  });
}

/**
 * Programmatically clears CacheStorage and unregisters Service Workers (emergency reset)
 */
export async function clearAppCaches(): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  try {
    // 1. Delete all CacheStorage entries
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }

    // 2. Unregister Service Workers
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((reg) => reg.unregister()));
    }

    // 3. Clear SessionStorage
    sessionStorage.clear();

    console.log('[CacheManager] Successfully cleared all application caches.');
    return true;
  } catch (err) {
    console.warn('[CacheManager] Error clearing application caches:', err);
    return false;
  }
}
