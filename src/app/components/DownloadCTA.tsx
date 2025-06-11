"use client";

import { FiZap, FiClock, FiDollarSign, FiShield } from 'react-icons/fi';
import { useEffect, useState } from 'react';

// Define the countdown type
interface CountdownState {
  hours: number;
  minutes: number;
  seconds: number;
}

export default function DownloadCTA() {
  // Initialize with null for server rendering
  const [countdown, setCountdown] = useState<CountdownState | null>(null);
  // Use null instead of false to avoid hydration mismatch
  const [isClient, setIsClient] = useState<boolean | null>(null);

  useEffect(() => {
    // Mark that we're now on the client
    setIsClient(true);

    // Set initial countdown values only on client
    setCountdown({
      hours: 23,
      minutes: 59,
      seconds: 59
    });

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (!prev) return prev;

        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // Reset to 24 hours
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: <FiZap className="text-[#fbbf24]" size={20} />, text: "Fast Installation" },
    { icon: <FiClock className="text-[#fbbf24]" size={20} />, text: "24/7 Gameplay" },
    { icon: <FiDollarSign className="text-[#fbbf24]" size={20} />, text: "Real Money Rewards" },
    { icon: <FiShield className="text-[#fbbf24]" size={20} />, text: "Secure Transactions" }
  ];

  // Render countdown component with placeholder for SSR
  const renderCountdown = () => {
    // If not hydrated yet or countdown not initialized, show static placeholders
    if (!isClient || !countdown) {
      return (
        <div className="bg-black/20 p-4 rounded-lg mb-6 backdrop-blur-sm w-full max-w-md">
          <p className="text-sm text-gray-300 mb-2">Special bonus expires in:</p>
          <div className="flex space-x-3 justify-center">
            <div className="bg-[#132044] p-2 rounded w-16 text-center">
              <div className="text-2xl font-bold text-white">23</div>
              <div className="text-xs text-gray-400">Hours</div>
            </div>
            <div className="bg-[#132044] p-2 rounded w-16 text-center">
              <div className="text-2xl font-bold text-white">59</div>
              <div className="text-xs text-gray-400">Minutes</div>
            </div>
            <div className="bg-[#132044] p-2 rounded w-16 text-center">
              <div className="text-2xl font-bold text-white">59</div>
              <div className="text-xs text-gray-400">Seconds</div>
            </div>
          </div>
        </div>
      );
    }

    // After hydration, render the actual countdown
    return (
      <div className="bg-black/20 p-4 rounded-lg mb-6 backdrop-blur-sm w-full max-w-md">
        <p className="text-sm text-gray-300 mb-2">Special bonus expires in:</p>
        <div className="flex space-x-3 justify-center">
          <div className="bg-[#132044] p-2 rounded w-16 text-center">
            <div className="text-2xl font-bold text-white">{countdown.hours.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">Hours</div>
          </div>
          <div className="bg-[#132044] p-2 rounded w-16 text-center">
            <div className="text-2xl font-bold text-white">{countdown.minutes.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">Minutes</div>
          </div>
          <div className="bg-[#132044] p-2 rounded w-16 text-center">
            <div className="text-2xl font-bold text-white">{countdown.seconds.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">Seconds</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-r from-[#0a1535] to-[#132044] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-[#fbbf24]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-[#1e3a8a]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Download <span className="text-[#fbbf24]">Card Rummy</span> Today
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Get started with Card Rummy and claim your welcome bonus. Join thousands of players enjoying the best card games in Pakistan.
          </p>
          
          {renderCountdown()}

          {/* Feature list */}
          <div className="grid grid-cols-2 gap-3 mb-6 max-w-md mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="bg-white/10 p-2 rounded-full">{feature.icon}</div>
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-400 mt-3">*Available for Android devices only</p>
        </div>
      </div>
    </section>
  );
}
 