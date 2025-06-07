'use client';

import JsonLd from './JsonLd';

interface WebsiteJsonLdProps {
  websiteData: Record<string, any>;
}

export default function WebsiteJsonLd({ websiteData }: WebsiteJsonLdProps) {
  return <JsonLd type="WebSite" data={websiteData} />;
} 