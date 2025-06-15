import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sitemap | Card Rummy APK Pakistan',
  description: 'Complete sitemap of Card Rummy Pakistan website. Find all sections and pages to navigate our site easily.',
  alternates: {
    canonical: 'https://cardrummypk.org/sitemap',
  },
};

const pages = [
  { name: 'Home', url: '/', description: 'Main page of Card Rummy Pakistan' },
  { name: 'Download', url: '/download', description: 'Download Card Rummy APK for Android' },
  { name: 'How to Play', url: '/how-to-play', description: 'Learn how to play Card Rummy game' },
  { name: 'Tournament', url: '/tournament', description: 'Participate in Card Rummy tournaments' },
  { name: 'Rules', url: '/rules', description: 'Card Rummy game rules and regulations' },
  { name: 'Contact', url: '/contact', description: 'Contact Card Rummy support team' },
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Sitemap</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-6">
          {pages.map((page) => (
            <li key={page.url} className="border-b border-gray-200 pb-4 last:border-0">
              <Link 
                href={page.url}
                className="text-xl font-semibold text-blue-600 hover:text-blue-800"
              >
                {page.name}
              </Link>
              <p className="mt-2 text-gray-600">{page.description}</p>
              <div className="mt-1 text-sm text-gray-500">
                URL: <span className="text-gray-700">https://cardrummypk.org{page.url}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 