import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiUsers, FiAward, FiTarget, FiHeart, FiCalendar, FiGlobe, FiMap } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Card Rummy Pakistan',
  description: 'Learn about Card Rummy, the mission, team, and the story behind the classic card game platform that connects Pakistani players nationwide.',
  keywords: ['about card rummy', 'card rummy team', 'rummy game history', 'card game mission', 'card rummy story'],
  openGraph: {
    title: 'About | Card Rummy Pakistan',
    description: 'Learn about Card Rummy, the mission, team, and the story behind the classic card game platform.',
    images: [
      {
        url: '/images/about-card-rummy.jpg',
        width: 1200,
        height: 630,
        alt: 'About Card Rummy',
      }
    ],
    type: 'website',
  }
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-primary to-secondary">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                About <span className="text-accent">Card Rummy</span>
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white">
                The story, mission, and the team behind Pakistan's favorite <Link href="/" className="text-[#fbbf24] hover:underline">Card Rummy</Link> game.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-3xl">
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center transform transition-transform hover:scale-105">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <FiCalendar className="text-primary" size={28} />
                  </div>
                  <p className="font-bold text-gray-800 text-lg">Est. 2020</p>
                  <p className="text-gray-600">Founded by card enthusiasts</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center transform transition-transform hover:scale-105">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <FiMap className="text-primary" size={28} />
                  </div>
                  <p className="font-bold text-gray-800 text-lg">Nationwide Appeal</p>
                  <p className="text-gray-600">Players from all over Pakistan</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center transform transition-transform hover:scale-105">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <FiUsers className="text-primary" size={28} />
                  </div>
                  <p className="font-bold text-gray-800 text-lg">20+ Team Members</p>
                  <p className="text-gray-600">Passionate about games</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#0a1535] p-8 rounded-lg shadow-md text-white">
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#2a3f73] pb-3">The Story</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  <Link href="/" className="text-[#fbbf24] hover:underline">Card Rummy</Link> was founded in 2020 by a group of passionate card game enthusiasts who wanted to create the ultimate digital Rummy experience for Pakistani players. What started as a small project among friends has grown into a platform loved by players throughout Pakistan.
                </p>
                <p className="text-lg leading-relaxed">
                  The journey began with a simple idea: to bring the classic card game of Rummy to the digital world while preserving its traditional charm and social aspects that are beloved in Pakistan. The team worked tirelessly to create a platform that feels authentic, engaging, and accessible to players of all skill levels.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, Card Rummy is played by thousands of players across Pakistan, bringing together Rummy enthusiasts from different cities and backgrounds to enjoy this timeless card game.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#0a1535] p-8 rounded-lg shadow-md text-white">
              <h2 className="text-3xl font-bold mb-6 text-white border-b border-[#2a3f73] pb-3">Mission & Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-[#132044] p-6 rounded-lg transform transition-all hover:shadow-lg">
                  <div className="bg-[#fbbf24]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                    <FiUsers className="text-[#fbbf24]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community First</h3>
                  <p>
                    Card Rummy believes in building a welcoming, inclusive community where Pakistani players from all walks of life can connect through their love of Rummy.
                  </p>
                </div>
                
                <div className="bg-[#132044] p-6 rounded-lg transform transition-all hover:shadow-lg">
                  <div className="bg-[#fbbf24]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                    <FiAward className="text-[#fbbf24]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality Experience</h3>
                  <p>
                    The platform is committed to providing a premium gaming experience with intuitive design, fair play, and smooth performance optimized for Pakistani users.
                  </p>
                </div>
                
                <div className="bg-[#132044] p-6 rounded-lg transform transition-all hover:shadow-lg">
                  <div className="bg-[#fbbf24]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                    <FiTarget className="text-[#fbbf24]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
                  <p>
                    The Card Rummy team constantly strives to improve the platform, listening to Pakistani player feedback and implementing new features that enhance the game.
                  </p>
                </div>
                
                <div className="bg-[#132044] p-6 rounded-lg transform transition-all hover:shadow-lg">
                  <div className="bg-[#fbbf24]/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                    <FiHeart className="text-[#fbbf24]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Passion for the Game</h3>
                  <p>
                    The developers are genuine Rummy enthusiasts who love the game and are dedicated to preserving its tradition while bringing it to new audiences across Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join The Community</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Whether you're a Rummy veteran or just starting out, you're welcome to join the growing community of Pakistani card game enthusiasts.
            </p>
            <Link href="/contact-us" className="bg-white text-primary px-8 py-3 rounded-lg font-medium shadow-md hover:bg-gray-100 transition-all transform hover:-translate-y-1">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 