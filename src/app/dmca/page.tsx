import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiFileText, FiShield } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'DMCA | Card Rummy Pakistan',
  description: 'DMCA policy for Card Rummy. Learn about our copyright compliance procedures and how to report potential copyright infringement.',
  keywords: ['DMCA policy', 'copyright', 'Card Rummy DMCA', 'intellectual property', 'takedown'],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'DMCA | Card Rummy Pakistan',
    description: 'DMCA policy for Card Rummy. Learn about our copyright compliance procedures.',
    images: [
      {
        url: '/images/dmca-card-rummy.jpg',
        width: 1200,
        height: 630,
        alt: 'Card Rummy DMCA Policy',
      }
    ],
    type: 'website',
  }
};

export default function DMCAPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                DMCA <span className="text-[#fbbf24]">Policy</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white">
                Our commitment to respecting intellectual property rights and copyright laws.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#0a1535] p-8 rounded-lg shadow-md text-white">
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#2a3f73] pb-3 flex items-center">
                <FiShield className="mr-3 text-[#fbbf24]" size={28} />
                DMCA Notice & Takedown Policy
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg">
                  Card Rummy APK Pakistan respects the intellectual property rights of others. We comply with the Digital Millennium Copyright Act (DMCA) and respond promptly to valid copyright infringement notices.
                </p>
                
                <p className="text-lg mt-6">
                  If you believe that any content on this website infringes your copyright, please send a written notice containing the following information to our designated DMCA agent:
                </p>
                
                <ul className="list-disc pl-8 space-y-2 text-lg">
                  <li>A physical or electronic signature of the copyright owner or person authorized to act on their behalf.</li>
                  <li>Identification of the copyrighted work claimed to have been infringed.</li>
                  <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to locate the material (such as the URL of the infringing page).</li>
                  <li>Your contact information, including name, address, telephone number, and email address.</li>
                  <li>A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                  <li>A statement that the information in the notice is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
                </ul>
                
                <div className="mt-8 bg-[#132044] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-white border-b border-[#2a3f73] pb-2">DMCA Agent Contact Information:</h3>
                  <p className="text-lg">Email: support@cardrummy.com</p>
                  <p className="text-lg">Subject: DMCA Notice</p>
                </div>
                
                <p className="text-lg mt-6">
                  Upon receipt of a valid DMCA notice, we will promptly remove or disable access to the allegedly infringing material and notify the affected party.
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