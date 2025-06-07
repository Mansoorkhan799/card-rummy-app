import Image from 'next/image';
import Link from 'next/link';
import { FiDownload, FiUsers, FiAward, FiDollarSign, FiChevronDown } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="hero-section py-10 md:py-24 bg-[#0a1535] text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-[#fbbf24]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-[#1e3a8a]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-[#fbbf24]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      {/* Center split gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, #132044 0%, #0a1535 50%, #080f24 100%)'
        }}
      ></div>
      
      {/* Light highlight effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e3a8a]/30 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#0f1d40]/20 to-transparent z-0"></div>
      
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
                <div className="flex flex-col items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm transform transition-all hover:scale-105">
                  <FiUsers className="text-[#fbbf24] mb-1" size={22} />
                  <span className="text-white text-xl font-bold">10K+</span>
                  <span className="text-gray-300 text-xs">Players</span>
                </div>
                <div className="flex flex-col items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm transform transition-all hover:scale-105">
                  <FiAward className="text-[#fbbf24] mb-1" size={22} />
                  <span className="text-white text-xl font-bold">30+</span>
                  <span className="text-gray-300 text-xs">Games</span>
                </div>
                <div className="flex flex-col items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm transform transition-all hover:scale-105">
                  <FiDollarSign className="text-[#fbbf24] mb-1" size={22} />
                  <span className="text-white text-xl font-bold">₨100K</span>
                  <span className="text-gray-300 text-xs">Max Payout</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-start gap-4 w-full">
                {isClient ? (
                  <a href="https://pkcardrummy.com/?from_gameid=5784509&channelCode=100000" 
                     className="relative inline-flex items-center justify-center px-6 pr-16 sm:pr-20 py-3 sm:px-8 sm:py-4 bg-[#0a1535] border-2 border-[#00e1ff] rounded-full hover:opacity-90 transition-all shadow-lg text-base sm:text-xl text-white font-bold w-full sm:w-auto mx-auto sm:mx-0">
                    <span className="tracking-wider mr-2">DOWNLOAD CARD RUMMY</span>
                    <div className="absolute right-0 bg-[#ff9800] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                      <FiChevronDown className="text-white" size={20} />
                    </div>
                  </a>
                ) : (
                  <div className="h-14 w-64 bg-[#0a1535] border-2 border-[#00e1ff] rounded-full"></div>
                )}
                <div className="text-xs text-gray-300 mt-2 italic w-full text-center sm:text-left">*Available for Android devices only</div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center items-center">
            <div className="relative w-auto h-auto max-w-[250px] md:max-w-[400px] max-h-[250px] md:max-h-[400px]">
              <Image
                src="/Card-rummy.webp"
                alt="Rummy Card Game"
                width={250}
                height={250}
                className="transform transition-all hover:scale-105 img-optimize"
                sizes="(max-width: 768px) 250px, 400px"
                quality={80}
                style={{ objectFit: "contain" }}
                priority
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcvXp1PQAGTwJs6OQmwAAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a1535]/70 to-transparent"></div>
    </section>
  );
} 