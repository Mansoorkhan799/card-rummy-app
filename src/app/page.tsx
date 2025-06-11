'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HomeContent from './components/HomeContent';
import Testimonials from './components/Testimonials';
import DownloadCTA from './components/DownloadCTA';
import { FiMessageSquare, FiArrowUp } from 'react-icons/fi';
import ClientOnly from './components/ClientOnly';

export default function Home() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  // Use null instead of false to avoid hydration mismatch
  const [isClient, setIsClient] = useState<boolean | null>(null);

  // Only run client-side effects after component mounts
  useEffect(() => {
    setIsClient(true);
    
    // Show WhatsApp button after user has scrolled down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Floating action buttons that should only render on client
  const FloatingButtons = () => (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Message Button */}
      <div className={`transition-all duration-300 ${showWhatsApp ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <a 
          href="https://3pattiparty.com/JoyTechAI-PAK-Label-4.html" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 group"
          aria-label="Contact Support"
        >
          <FiMessageSquare size={26} className="text-white" />
          <span className="absolute -top-10 right-0 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Support
          </span>
        </a>
      </div>
      
      {/* Scroll to Top Button */}
      {showWhatsApp && (
        <button
          onClick={scrollToTop}
          className="bg-[#3b82f6] hover:bg-[#2563eb] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={26} className="text-white" />
          <span className="absolute -top-10 right-0 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Top
          </span>
        </button>
      )}
    </div>
  );

  return (
    <>
      <ClientOnly>
        <Header />
      </ClientOnly>
      <main>
        <ClientOnly>
          <HeroSection />
        </ClientOnly>
        <ClientOnly>
          <HomeContent />
        </ClientOnly>
        <ClientOnly>
          <Testimonials />
        </ClientOnly>
        <ClientOnly>
          <DownloadCTA />
        </ClientOnly>
        
        {/* Floating Buttons - only render on client side */}
        {isClient && <ClientOnly><FloatingButtons /></ClientOnly>}
      </main>
      <ClientOnly>
        <Footer />
      </ClientOnly>
    </>
  );
}
