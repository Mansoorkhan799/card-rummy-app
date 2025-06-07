'use client';

import { useEffect } from 'react';
import WebsiteJsonLd from './WebsiteJsonLd';

interface ClientLayoutProps {
  children: React.ReactNode;
  websiteData: Record<string, any>;
}

export default function ClientLayout({ children, websiteData }: ClientLayoutProps) {
  // Check for cache refresh from localStorage after component mounts
  useEffect(() => {
    // This only runs on the client, so it's safe from hydration errors
    const lastRefresh = localStorage.getItem('cache_refresh_time');
    const imageElements = document.querySelectorAll('img');
    
    // If we have a recent cache refresh timestamp, add cache busting to images
    if (lastRefresh) {
      imageElements.forEach(img => {
        // Only modify src if it doesn't already have a cache parameter
        if (img.src && !img.src.includes('?v=') && !img.src.includes('&v=')) {
          const separator = img.src.includes('?') ? '&' : '?';
          img.src = `${img.src}${separator}v=${lastRefresh}`;
        }
      });
      
      // Clear the timestamp so we don't keep modifying on every page load
      localStorage.removeItem('cache_refresh_time');
    }
  }, []);

  return (
    <>
      <WebsiteJsonLd websiteData={websiteData} />
      {children}
    </>
  );
} 