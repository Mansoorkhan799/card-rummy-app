/**
 * Utility functions to help with React hydration issues
 */

/**
 * Safely access window object and browser APIs
 * @returns true if code is running in browser, false if running on server
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Get a stable string for server-side rendering and a dynamic one for client-side
 * @param fallback - Value to use during server-side rendering
 * @param clientValue - Function to generate client-side value
 */
export function useStableValue<T>(fallback: T, clientValue: () => T): T {
  if (!isBrowser()) {
    return fallback;
  }
  return clientValue();
}

/**
 * Generate a stable value for dates that won't cause hydration mismatches
 * @returns A stable date string for SSR, actual date on client
 */
export function getStableDate(): string {
  // Use a fixed date for server rendering
  if (!isBrowser()) {
    return 'January 1, 2023';
  }
  
  // Use actual date on client
  return new Date().toLocaleDateString();
}

/**
 * Add the suppressHydrationWarning prop to an element's attributes
 * @param props - The element's props
 * @returns The props with suppressHydrationWarning added
 */
export function withSuppressHydrationWarning<T extends object>(props: T): T & { suppressHydrationWarning: boolean } {
  return {
    ...props,
    suppressHydrationWarning: true
  };
} 