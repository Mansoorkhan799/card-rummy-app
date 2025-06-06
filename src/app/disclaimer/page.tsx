import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiAlertTriangle, FiInfo } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Disclaimer | Card Rummy Pakistan',
  description: 'Disclaimer for Card Rummy. Important information about our services, user responsibilities, and content accuracy.',
  keywords: ['disclaimer', 'Card Rummy disclaimer', 'legal notice', 'terms of use', 'liability'],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Disclaimer | Card Rummy Pakistan',
    description: 'Disclaimer for Card Rummy. Important information about our services and user responsibilities.',
    images: [
      {
        url: '/images/disclaimer-card-rummy.jpg',
        width: 1200,
        height: 630,
        alt: 'Card Rummy Disclaimer',
      }
    ],
    type: 'website',
  }
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                <span className="text-[#fbbf24]">Disclaimer</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white">
                Important information about Card Rummy's services and your use of our platform.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#0a1535] p-8 rounded-lg shadow-md text-white">
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#2a3f73] pb-3 flex items-center">
                <FiAlertTriangle className="mr-3 text-[#fbbf24]" size={28} />
                Disclaimer Notice
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg">
                  Card Rummy APK Pakistan is an unofficial guide and resource website. We do not host or distribute the original Card Rummy app file on our servers. Instead, we provide information and guidance for players on how to download, install, and enjoy the Card Rummy game. All app files, logos, trademarks, and names belong to their respective owners and developers.
                </p>
                
                <p className="text-lg">
                  This site is intended for educational and informational purposes only. We do not claim any ownership or affiliation with the official Card Rummy app, nor do we endorse any illegal activities such as modifying or hacking the game.
                </p>
                
                <p className="text-lg">
                  Downloading and using third-party APK files may violate the terms of service of the original developers or app stores. We advise all users to review the app's official website and terms before installing any APK files.
                </p>
                
                <p className="text-lg">
                  Use the app at your own risk. We are not responsible for any issues, data loss, or damages that may occur from downloading or using APK files from external sources.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 