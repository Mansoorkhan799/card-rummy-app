'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're on the client side
    setIsClient(true);
    
    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };
    
    // Prevent body scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="mobile-menu-container">
      {/* Mobile menu button - only show on client side */}
      {isClient && (
        <button 
          className="md:hidden text-[#fbbf24] p-2 rounded-full hover:bg-[#1e293b] transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      )}
      
      {/* Mobile Navigation */}
      {isClient && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-[#0f172a]/95 backdrop-blur-sm z-50 md:hidden border-t border-[#2a3f73] pb-safe">
          <nav className="flex flex-col p-4 h-full">
            <Link 
              href="/" 
              className="py-4 px-4 text-gray-200 text-lg font-medium flex items-center border-b border-[#2a3f73]/30 active:bg-[#1e293b] rounded-lg mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              className="py-4 px-4 text-gray-200 text-lg font-medium flex items-center border-b border-[#2a3f73]/30 active:bg-[#1e293b] rounded-lg mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/how-to-play" 
              className="py-4 px-4 text-gray-200 text-lg font-medium flex items-center border-b border-[#2a3f73]/30 active:bg-[#1e293b] rounded-lg mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Play
            </Link>
            <Link 
              href="/blog/card-rummy-for-pc" 
              className="py-4 px-4 text-gray-200 text-lg font-medium flex items-center border-b border-[#2a3f73]/30 active:bg-[#1e293b] rounded-lg mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PC Guide
            </Link>
            <Link 
              href="/contact-us" 
              className="py-4 px-4 text-gray-200 text-lg font-medium flex items-center border-b border-[#2a3f73]/30 active:bg-[#1e293b] rounded-lg mb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
} 