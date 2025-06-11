import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FiMonitor, FiDownload, FiCheckCircle, FiZap } from 'react-icons/fi';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Card Rummy for PC | Play on Windows & Mac',
  description: 'Learn how to play Card Rummy on your PC or laptop. Step-by-step guide for installing and enjoying the game on larger screens for a better experience.',
  keywords: ['card rummy pc', 'card rummy on computer', 'card rummy for windows', 'card rummy for mac', 'play rummy on laptop'],
  openGraph: {
    title: 'Card Rummy for PC | Play on Windows & Mac',
    description: 'Learn how to play Card Rummy on your PC or laptop for a better gaming experience with larger screens.',
    images: [
      {
        url: '/images/card-rummy-on-pc.jpg',
        width: 1200,
        height: 630,
        alt: 'Card Rummy on PC',
      }
    ],
    type: 'article',
  }
};

export default function CardRummyForPCPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
              Card Rummy for PC
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-center mb-8 text-white">
              Learn how to play Card Rummy on your computer for a better gaming experience with larger screens
            </p>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">How to Download and Play Card Rummy on PC</h2>
              
              <p className="mb-6 text-gray-700">
                <Link href="/" className="text-[#fbbf24] hover:underline font-medium">Card Rummy</Link> is a popular Pakistani card game app, similar to 3 Patti Lucky and Teen Patti Gold, offering a thrilling gaming experience right at your fingertips. Although designed for mobile devices, many players now prefer enjoying Card Rummy on a PC—thanks to the larger screen, smoother performance, and enhanced controls. In this guide, we'll walk you through everything you need to know to download and play Card Rummy on your PC.
              </p>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <FiMonitor className="mr-3 text-primary" size={24} />
                  Why Play Card Rummy on PC?
                </h3>
                <ul className="space-y-3 pl-10 list-disc text-gray-700">
                  <li><strong>Bigger Screen:</strong> Enjoy crisp graphics and a more immersive experience than on a small mobile screen.</li>
                  <li><strong>Improved Controls:</strong> Use your keyboard and mouse for precise moves and faster gameplay.</li>
                  <li><strong>Better Performance:</strong> PCs generally have more RAM and processing power, ensuring lag-free gaming.</li>
                </ul>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <FiZap className="mr-3 text-primary" size={24} />
                  Card Rummy PC Gameplay
                </h3>
                <p className="mb-4 text-gray-700">
                  To play <Link href="/" className="text-[#fbbf24] hover:underline font-medium">Card Rummy</Link> on a PC, you'll need an Android emulator like BlueStacks or NoxPlayer. These emulators let you run mobile apps seamlessly on your desktop or laptop. Here's how to get started:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary mb-6">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">Step-by-Step Guide:</h4>
                  <div className="space-y-6">
                    <div>
                      <p className="flex items-start mb-2">
                        <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                        <strong>Download an Emulator</strong>
                      </p>
                      <ul className="pl-8 space-y-1 text-gray-700 list-disc">
                        <li>Visit the official BlueStacks or NoxPlayer website.</li>
                        <li>Download the installer for your operating system (Windows or macOS).</li>
                        <li>Follow the on-screen instructions to complete the installation.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="flex items-start mb-2">
                        <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                        <strong>Log in to Google Play Store</strong>
                      </p>
                      <ul className="pl-8 space-y-1 text-gray-700 list-disc">
                        <li>Open the emulator and sign in with your Google account.</li>
                        <li>This allows you to access the Play Store and download apps.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="flex items-start mb-2">
                        <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                        <strong>Install Card Rummy</strong>
                      </p>
                      <ul className="pl-8 space-y-1 text-gray-700 list-disc">
                        <li>In the Play Store, search for "Card Rummy".</li>
                        <li>Click Download and let it install on your emulator.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="flex items-start mb-2">
                        <FiCheckCircle className="text-primary mt-1 mr-2 flex-shrink-0" size={18} />
                        <strong>Start Playing</strong>
                      </p>
                      <ul className="pl-8 space-y-1 text-gray-700 list-disc">
                        <li>Launch Card Rummy from the emulator's home screen.</li>
                        <li>Customize controls using the emulator's key mapping feature for smoother gameplay.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">System Requirements</h3>
                <p className="mb-4 text-gray-700">
                  For the best experience, make sure your PC meets these minimum specs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-800 mb-1">Operating System</p>
                    <p className="text-gray-700">Windows 7 or later, or macOS Sierra or later</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-800 mb-1">Processor</p>
                    <p className="text-gray-700">Intel or AMD CPU</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-800 mb-1">RAM</p>
                    <p className="text-gray-700">At least 4 GB</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-800 mb-1">Storage</p>
                    <p className="text-gray-700">Minimum 5 GB of free disk space</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-800 mb-1">Graphics</p>
                    <p className="text-gray-700">Updated GPU drivers</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-800 mb-1">Internet</p>
                    <p className="text-gray-700">Stable internet connection for downloading and online play</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <p className="font-bold text-gray-800 mb-2">Is it safe to play Card Rummy on a PC?</p>
                    <p className="text-gray-700">Yes, using reputable emulators like BlueStacks or NoxPlayer is safe as long as you download them from their official websites.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <p className="font-bold text-gray-800 mb-2">Can I play Card Rummy on PC without an emulator?</p>
                    <p className="text-gray-700">No, currently there's no official PC version of Card Rummy. An emulator is required.</p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <p className="font-bold text-gray-800 mb-2">Do I need to pay to play Card Rummy on PC?</p>
                    <p className="text-gray-700">Card Rummy itself is free to download and play. However, in-app purchases may be available.</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Final Thoughts</h3>
                <p className="mb-4 text-gray-700">
                  Playing Card Rummy on your PC opens up a new level of gaming enjoyment—bigger screens, better controls, and smoother performance. With just a few simple steps using an emulator, you can bring your favorite Pakistani card game to life on your desktop.
                </p>
                <p className="text-gray-700 font-medium">
                  Ready to elevate your gaming? Download BlueStacks or NoxPlayer today and start enjoying Card Rummy on your PC!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Play Card Rummy?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
              Download the app now and start enjoying Card Rummy on any device!
            </p>
            <a 
              href="https://cardrummypk.org/?from_gameid=5784509&channelCode=100000" 
              className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <FiDownload className="mr-2" />
              Download Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 