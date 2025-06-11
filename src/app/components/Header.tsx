"use client";

import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { useState, useEffect } from 'react';
import { FiX, FiDownload, FiRefreshCw } from 'react-icons/fi';

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [devMode, setDevMode] = useState(false);

  useEffect(() => {
    // Mark that we're now on the client
    setIsClient(true);
    
    // Check for developer mode in localStorage
    const storedDevMode = localStorage.getItem('cardRummyDevMode') === 'true';
    setDevMode(storedDevMode);
    
    // Check URL parameter for dev mode
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('dev') === 'true') {
      setDevMode(true);
      localStorage.setItem('cardRummyDevMode', 'true');
    }
    
    // Track scroll position for header appearance
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Developer mode key combo listener (Ctrl+Shift+D)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        const newDevMode = !devMode;
        setDevMode(newDevMode);
        localStorage.setItem('cardRummyDevMode', newDevMode.toString());
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [devMode]);

  // Function to refresh the page and clear cache
  const refreshCache = () => {
    // Call our API endpoint to clear server-side cache
    fetch('/api/clear-cache?secret=card-rummy-cache-token')
      .then(response => response.json())
      .then(data => {
        console.log('Cache cleared:', data);
        
        // Then refresh the page with a stable cache buster
        // Use a timestamp in localStorage instead of URL to avoid hydration issues
        localStorage.setItem('cache_refresh_time', Date.now().toString());
        window.location.reload();
      })
      .catch(err => {
        console.error('Error clearing cache:', err);
        // Fallback to simple reload
        window.location.reload();
      });
  };

  return (
    <>
      {/* Top notification banner - only show on client side */}
      {isClient && showBanner && (
        <div className="bg-gradient-to-r from-[#fbbf24] to-[#e67e22] text-[#0f172a] py-2 relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium flex-1">
                <span className="hidden md:inline">Limited Time Offer:</span> Download now and get ₨10 free bonus!
              </p>
              <a 
                href="https://cardrummypk.org/?from_gameid=5784509&channelCode=100000" 
                className="ml-2 px-4 py-1.5 bg-[#0f172a] text-white text-xs md:text-sm font-bold rounded-md hover:bg-[#1e293b] transition-colors inline-flex items-center whitespace-nowrap"
              >
                <FiDownload className="mr-1.5" size={14} />
                Get App
              </a>
              <button 
                onClick={() => setShowBanner(false)}
                className="ml-2 text-[#0f172a] hover:text-[#0f172a]/70 transition-colors p-1.5"
                aria-label="Close banner"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    
      <header className={`${isScrolled ? 'py-2 bg-[#0f172a]/95 backdrop-blur-sm shadow-lg' : 'py-4 bg-[#0f172a]'} sticky top-0 z-50 transition-all duration-300 border-b border-[#2a3f73]`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="w-8 h-8 rounded mr-2 group-hover:scale-110 transition-transform overflow-hidden">
              <img 
                src="/Card-rummy.webp" 
                alt="Card Rummy" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-[#fbbf24] transition-colors">Card Rummy</span>
          </Link>
          
          {/* Mobile menu component */}
          <MobileMenu />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-200 hover:text-[#fbbf24] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-200 hover:text-[#fbbf24] font-medium transition-colors">
              About
            </Link>
            <Link href="/how-to-play" className="text-gray-200 hover:text-[#fbbf24] font-medium transition-colors">
              How to Play
            </Link>
            <Link href="/blog/card-rummy-for-pc" className="text-gray-200 hover:text-[#fbbf24] font-medium transition-colors">
              PC Guide
            </Link>
            <Link href="/contact-us" className="text-gray-200 hover:text-[#fbbf24] font-medium transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Download and Refresh buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {devMode && (
              <button
                onClick={refreshCache}
                className="inline-flex items-center bg-transparent border border-[#fbbf24] text-[#fbbf24] px-3 py-1.5 rounded-lg hover:bg-[#fbbf24]/10 transition-colors text-sm font-medium"
                title="Refresh cache"
              >
                <FiRefreshCw className="mr-1" size={14} />
                <span>Refresh</span>
              </button>
            )}
            <a
              href="https://cardrummypk.org/?from_gameid=5784509&channelCode=100000"
              className="inline-flex items-center bg-[#fbbf24] text-[#0f172a] px-4 py-2 rounded-lg hover:bg-[#fbbf24]/90 transition-colors text-sm font-bold"
            >
              <FiDownload className="mr-2" size={14} />
              <span>Download</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
} 