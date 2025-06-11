'use client';

import { ReactNode, useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * A wrapper component that only renders its children on the client side
 * Use this when a component contains client-specific logic that would cause
 * hydration errors if rendered during SSR
 */
export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return fallback or nothing during SSR
  if (!mounted) {
    return <>{fallback}</>;
  }

  // Return children once component is mounted on the client
  return <>{children}</>;
} 