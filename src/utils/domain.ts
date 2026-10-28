/**
 * Domain & Subdomain Routing Utilities for The 14Lights & EduraXR
 * Subdomain: eduraxr.the14lights.com
 * Main Domain: the14lights.com
 */

export const MAIN_DOMAIN = 'https://the14lights.com';
export const EDURAXR_SUBDOMAIN = 'https://eduraxr.the14lights.com';

/**
 * Checks if the user is visiting on the production domain (the14lights.com or eduraxr.the14lights.com)
 */
export const isProductionThe14Lights = (): boolean => {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname.toLowerCase();
  return host === 'the14lights.com' || host === 'www.the14lights.com' || host === 'eduraxr.the14lights.com' || host.endsWith('.the14lights.com');
};

/**
 * Checks if the current request is for the EduraXR subdomain:
 * - In production: hostname is eduraxr.the14lights.com (or starts with eduraxr.)
 * - In dev/preview: query parameter ?subdomain=eduraxr or pathname starts with /eduraxr
 */
export const isEduraXRSubdomain = (): boolean => {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname.toLowerCase();
  if (host === 'eduraxr.the14lights.com' || host.startsWith('eduraxr.')) {
    return true;
  }
  const params = new URLSearchParams(window.location.search);
  if (params.get('subdomain') === 'eduraxr') {
    return true;
  }
  const path = window.location.pathname.toLowerCase();
  if (path === '/eduraxr' || path.startsWith('/eduraxr/')) {
    return true;
  }
  return false;
};

/**
 * Returns the appropriate URL to navigate to EduraXR:
 * - On production the14lights.com -> https://eduraxr.the14lights.com${path}
 * - In development / preview -> /eduraxr or with ?subdomain=eduraxr
 */
export const getEduraXRLink = (path: string = '/'): string => {
  if (typeof window === 'undefined') return `${EDURAXR_SUBDOMAIN}${path}`;
  if (isProductionThe14Lights()) {
    return `${EDURAXR_SUBDOMAIN}${path === '/' ? '' : path}`;
  }
  // For dev / AI studio preview / local
  if (path === '/' || path === '') return '/eduraxr';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanPath}${cleanPath.includes('?') ? '&' : '?'}subdomain=eduraxr`;
};

/**
 * Returns the appropriate URL to navigate back to the main 14Lights website
 */
export const getMainDomainLink = (path: string = '/'): string => {
  if (typeof window === 'undefined') return `${MAIN_DOMAIN}${path}`;
  if (isProductionThe14Lights()) {
    return `${MAIN_DOMAIN}${path === '/' ? '' : path}`;
  }
  return `${path === '' ? '/' : path}${path.includes('?') ? '&' : '?'}subdomain=main`;
};
