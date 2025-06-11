"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiTwitter, FiLinkedin, FiExternalLink } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [imageUrl, setImageUrl] = useState('/Card-rummy.webp');
  
  // Apply cache busting only after hydration is complete
  useEffect(() => {
    // Wait a short time to ensure hydration is complete
    const timer = setTimeout(() => {
      setImageUrl(`/Card-rummy.webp?v=${Date.now()}`);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="bg-[#080f24] text-white py-10 border-t border-[#2a3f73]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src={imageUrl}
                alt="Card Rummy Logo" 
                width={40} 
                height={40} 
                className="rounded-md"
                priority
              />
              <h3 className="text-xl font-bold text-white">Card Rummy</h3>
            </div>
            <p className="text-gray-200 text-sm mb-4 leading-relaxed">
              The ultimate card rummy game experience. Play online or download the app to enjoy
              classic rummy card games with friends and players across Pakistan.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/Card-Rummy/100094559844696/?mibextid=wwXIfr&rdid=zbeHpiTCsVU51Ukd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14xUhrepAF%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[#fbbf24] transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://x.com/cardrummypk" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:text-[#fbbf24] transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/card-rummy-90a832337/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-[#fbbf24] transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://www.pinterest.com/cardrummypk/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-white hover:text-[#fbbf24] transition-colors">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 text-sm hover:text-[#fbbf24] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-200 text-sm hover:text-[#fbbf24] transition-colors">About</Link>
              </li>
              <li>
                <Link href="/how-to-play" className="text-gray-200 text-sm hover:text-[#fbbf24] transition-colors">How to Play</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-200 text-sm hover:text-[#fbbf24] transition-colors">Contact</Link>
              </li>
              <li>
                <a href="https://3pattiparty.com/JoyTechAI-PAK-Label-4.html" target="_blank" rel="noopener noreferrer" className="text-gray-200 text-sm hover:text-[#fbbf24] transition-colors flex items-center">
                  <span>Pakistan Support</span>
                  <FiExternalLink size={12} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-200 text-sm hover:text-[#fbbf24] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/dmca" className="text-gray-200 text-sm hover:text-[#fbbf24] transition-colors">DMCA</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-200 text-sm hover:text-[#fbbf24] transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2a3f73] mt-8 pt-6 text-center">
          <p className="text-gray-200 text-sm">
            &copy; {currentYear} <a href="https://cardrummypk.org" className="hover:text-[#fbbf24] transition-colors">Card Rummy</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 