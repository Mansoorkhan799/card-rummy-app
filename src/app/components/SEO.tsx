// This is a no-op component since metadata is now handled in layout.tsx
// We keep it as a component to avoid breaking existing code
interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  path?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
      type?: string;
    }>;
    siteName?: string;
  };
  additionalMetaTags?: Array<{
    name: string;
    content: string;
  }>;
}

export default function SEO(_props: SEOProps) {
  // In Next.js App Router, metadata is defined in layout.tsx or page.tsx
  // This component is kept as a no-op to maintain compatibility with existing code
  return null;
} 