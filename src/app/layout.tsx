import { Metadata, Viewport } from 'next';
import './globals.css';
import JsonLd from './components/JsonLd';
import Script from 'next/script';
import { Inter } from 'next/font/google';

// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'sans-serif'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0a1535',
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://cardrummypk.org'),
  title: 'Card Rummy APK Pakistan | Download Latest Version for Android',
  description: 'Play Card Rummy online or download the app. Experience the classic card game with friends and players across Pakistan, with tournaments and prizes.',
  keywords: ['card rummy', 'rummy online', 'card game', 'multiplayer rummy', 'free rummy game', 'Pakistan card games', 'card rummy apk', 'card rummy download'],
  manifest: '/manifest.json',
  applicationName: 'Card Rummy APK',
  verification: {
    google: 'ADD_YOUR_VERIFICATION_CODE_HERE',
  },
  appleWebApp: {
    capable: true,
    title: 'Card Rummy APK',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/optimized/Card-rummy.webp' }
    ],
    apple: '/optimized/Card-rummy.webp',
  },
  openGraph: {
    title: 'Card Rummy APK Pakistan | Download Latest Version for Android',
    description: 'Play Card Rummy online or download the app. Experience the classic card game with friends and players across Pakistan.',
    images: [
      {
        url: '/optimized/Card-rummy.webp',
        width: 1200,
        height: 630,
        alt: 'Card Rummy Game',
      }
    ],
    locale: "en_US",
    type: "website",
    siteName: "Card Rummy Pakistan",
    url: "https://cardrummypk.org",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Card Rummy APK Pakistan | Download Latest Version for Android',
    description: 'Play Card Rummy online or download the app. Experience the classic card game with friends and players across Pakistan.',
    images: ['/optimized/Card-rummy.webp'],
    site: "@cardrummypk",
  },
  other: {
    "theme-color": "#0a1535",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0a1535",
    "msapplication-tap-highlight": "no",
    "canonical": "https://cardrummypk.org"
  },
  alternates: {
    canonical: "https://cardrummypk.org"
  },
  category: 'games',
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Card Rummy Pakistan",
  "url": "https://cardrummypk.org",
  "description": "Play Card Rummy online or download the app. Experience the classic card game with friends and players across Pakistan.",
  "potentialAction": {
    "@type": "DownloadAction",
    "target": "https://pkcardrummy.com/?from_gameid=5784509&channelCode=100000"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <head>
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/optimized/Card-rummy.webp" 
          as="image"
          fetchPriority="high"
          type="image/webp"
        />
        <link 
          rel="preload"
          href="/optimized/Card-rummy.avif"
          as="image"
          fetchPriority="high" 
          type="image/avif"
        />
        
        {/* Preconnects for critical third-party resources */}
        <link rel="preconnect" href="https://pkcardrummy.com" crossOrigin="anonymous" />

        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://cardrummypk.org" />
        
        {/* DNS prefetching */}
        <link rel="dns-prefetch" href="//pkcardrummy.com" />
        
        {/* Hide render-blocking script until interaction */}
        <Script id="hydration-fix" strategy="lazyOnload">
          {`
            (function() {
              // Clear any extension-added attributes that might cause hydration issues
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(function() {
                  const body = document.body;
                  if (body) {
                    // Remove common extension attributes that cause hydration mismatches
                    if (body.hasAttribute('data-new-gr-c-s-check-loaded')) {
                      body.removeAttribute('data-new-gr-c-s-check-loaded');
                    }
                    if (body.hasAttribute('data-gr-ext-installed')) {
                      body.removeAttribute('data-gr-ext-installed');
                    }
                  }
                }, 0);
              });
            })();
          `}
        </Script>
      </head>
      <body className="font-sans h-full overflow-x-hidden" suppressHydrationWarning>
        <JsonLd type="WebSite" data={websiteData} />
        {children}
      </body>
    </html>
  )
}
