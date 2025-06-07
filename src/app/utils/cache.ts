/**
 * Cache utility functions for the Card Rummy website
 */

// Generate a stable version string for initial render to prevent hydration errors
export const getStableVersion = () => {
  return 'v1';
};

// Generate a dynamic version string for cache busting
// ONLY use this in client-side effects after hydration
export const getDynamicVersion = () => {
  return `v=${Date.now()}`;
};

// Safely add cache busting to URLs - use this for static rendering
export const addStableCacheBuster = (url: string) => {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${getStableVersion()}`;
};

// Client-side cache busting - ONLY use this in useEffect or event handlers
export const addDynamicCacheBuster = (url: string) => {
  if (typeof window === 'undefined') {
    return addStableCacheBuster(url); // Use stable version during SSR
  }
  
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${getDynamicVersion()}`;
};

// Function to dynamically set cache control headers
export const setCacheHeaders = (headers: Headers) => {
  headers.set('Cache-Control', 'no-store, must-revalidate');
  headers.set('Pragma', 'no-cache');
  headers.set('Expires', '0');
}; 