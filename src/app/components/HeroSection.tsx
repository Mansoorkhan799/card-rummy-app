import Link from 'next/link';
import { FiDownload, FiUsers, FiAward, FiDollarSign } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';
import OptimizedImage from './OptimizedImage';

export default function HeroSection() {
  // Use null as initial state instead of false to avoid hydration mismatch
  const [isClient, setIsClient] = useState<boolean | null>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mark component as hydrated
    setIsClient(true);

    // Optimize LCP with Intersection Observer
    if (heroImageRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class only when in viewport
            entry.target.classList.add('animate-appear');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(heroImageRef.current);
      return () => observer.disconnect();
    }
  }, []);

  // Simplify download button render
  const renderDownloadButton = () => {
    if (!isClient) return null;
    
    // After hydration, render the actual button
    return (
      <a href="https://pkcardrummy.com/?from_gameid=5784509&channelCode=100000" 
         className="relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-[#0a1535] border-2 border-[#00e1ff] rounded-full hover:opacity-90 transition-all shadow-lg text-base sm:text-xl text-white font-bold w-full sm:w-auto mx-auto sm:mx-0">
        <span className="tracking-wider mr-2">DOWNLOAD CARD RUMMY</span>
        <div className="absolute right-0 bg-[#ff9800] rounded-full w-12 h-12 flex items-center justify-center">
          <FiDownload className="text-white" size={20} />
        </div>
      </a>
    );
  };

  return (
    <section id="hero" className="hero-section py-10 md:py-16 bg-[#0a1535] text-white relative overflow-hidden">
      {/* Simplified background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, #132044 0%, #0a1535 50%, #080f24 100%)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 pl-4 md:pl-10 text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight md:leading-snug text-left">
              Card Rummy APK <span className="text-[#fbbf24]">Pakistan</span> <span className="text-[#fbbf24]">Download</span> Latest Version for <span className="text-[#fbbf24]">Android</span>
            </h1>
            
            <div className="flex flex-col items-start">
              <p className="text-base md:text-xl mb-6 md:mb-8 max-w-lg leading-relaxed opacity-90 text-left mx-0 px-0 md:pr-10">
                Card Rummy is the best 3 Patti game in Pakistan. This application is only available for Android - download it now and start playing.
              </p>
              
              {/* Stats section */}
              <div className="grid grid-cols-3 gap-4 w-full mb-8">
                <div className="flex flex-col items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <FiUsers className="text-[#fbbf24] mb-1" size={22} />
                  <span className="text-white text-xl font-bold">10K+</span>
                  <span className="text-gray-300 text-xs">Players</span>
                </div>
                <div className="flex flex-col items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <FiAward className="text-[#fbbf24] mb-1" size={22} />
                  <span className="text-white text-xl font-bold">30+</span>
                  <span className="text-gray-300 text-xs">Games</span>
                </div>
                <div className="flex flex-col items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <FiDollarSign className="text-[#fbbf24] mb-1" size={22} />
                  <span className="text-white text-xl font-bold">₨100K</span>
                  <span className="text-gray-300 text-xs">Max Payout</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-start gap-4 w-full">
                {renderDownloadButton()}
                <div className="text-xs text-gray-300 mt-2 italic w-full text-center sm:text-left">*Available for Android devices only</div>
              </div>
            </div>
          </div>
          <div ref={heroImageRef} className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center items-center">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              <OptimizedImage
                src="/optimized/Card-rummy.webp"
                webpSrc="/optimized/Card-rummy.webp"
                avifSrc="/optimized/Card-rummy.avif"
                alt="Screenshot of Card Rummy game interface"
                width={400}
                height={400}
                sizes="(max-width: 640px) 320px, 400px"
                quality={80}
                priority
                fetchPriority="high"
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvXp1PQAGTwJs6OQmwAAAAABJRU5ErkJggg=="
                className="rounded-lg shadow-xl"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 