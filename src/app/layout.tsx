import { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import JsonLd from './components/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#0a1535',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pkcardrummy.com'),
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
      { url: '/Card-rummy.webp' }
    ],
    apple: '/Card-rummy.webp',
  },
  openGraph: {
    title: 'Card Rummy APK Pakistan | Download Latest Version for Android',
    description: 'Play Card Rummy online or download the app. Experience the classic card game with friends and players across Pakistan.',
    images: [
      {
        url: '/Card-rummy.webp',
        width: 1200,
        height: 630,
        alt: 'Card Rummy Game',
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Card Rummy APK Pakistan | Download Latest Version for Android',
    description: 'Play Card Rummy online or download the app. Experience the classic card game with friends and players across Pakistan.',
    images: ['/Card-rummy.webp'],
  },
  other: {
    "theme-color": "#0a1535",
  }
};

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Card Rummy Pakistan",
  "url": "https://pkcardrummy.com",
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
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full overflow-x-hidden`}>
        <JsonLd type="WebSite" data={websiteData} />
        {children}
      </body>
    </html>
  )
}
