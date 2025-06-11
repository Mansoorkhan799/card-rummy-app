'use client';

import { ReactNode, useEffect, useState } from 'react';

interface SuppressHydrationWarningProps {
  children: ReactNode;
}

/**
 * Component that suppresses React hydration warnings by only rendering children on the client side
 * Use this for components that are expected to differ between server and client
 */
export default function SuppressHydration({ children }: SuppressHydrationWarningProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return null on the server and children only on the client
  if (!isClient) {
    return null; // Render nothing during SSR
  }

  return <>{children}</>; // Render children only on client-side
} 