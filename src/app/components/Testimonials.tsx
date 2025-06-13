"use client";

import Image from 'next/image';
import { FiStar, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Ahmed Khan',
    role: 'Casual Player',
    quote: 'I\'ve tried many rummy games, but this one has the best interface and gameplay. I love the variety of game modes and the fair matchmaking system.',
    avatar: '',
    rating: 5,
  },
  {
    name: 'Fatima Rehman',
    role: 'Tournament Player',
    quote: 'The tournaments are incredibly fun and competitive. I\'ve won several prizes and made friends with players from around the world.',
    avatar: '',
    rating: 5,
  },
  {
    name: 'Zain Ali',
    role: 'Daily Player',
    quote: 'I play every day during my commute. The mobile app works flawlessly, and I love that I can continue my games across different devices.',
    avatar: '',
    rating: 4,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-[#0d1b3a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#fbbf24]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#1e3a8a]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What Players Say</h2>
          <div className="w-20 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Hear from players who are enjoying Card Rummy across Pakistan
          </p>
        </div>
        
        {/* Desktop view - Show all testimonials */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card p-6 bg-[#132044] rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-2 border border-[#2a3f73]"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${
                      i < testimonial.rating
                        ? 'text-[#fbbf24] fill-[#fbbf24]'
                        : 'text-gray-500'
                    }`}
                    size={18}
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-[#fbbf24]/20 flex items-center justify-center mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden mt-10">
          <div className="relative bg-[#132044] rounded-xl p-6 border border-[#2a3f73] shadow-lg">
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`${
                    i < testimonials[activeIndex].rating
                      ? 'text-[#fbbf24] fill-[#fbbf24]'
                      : 'text-gray-500'
                  }`}
                  size={18}
                />
              ))}
            </div>
            <p className="text-gray-300 italic mb-6">"{testimonials[activeIndex].quote}"</p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-[#fbbf24]/20 flex items-center justify-center mr-4">
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-400">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              <button
                className="h-12 w-12 flex items-center justify-center rounded-full bg-[#fbbf24] text-[#0a1535] shadow-lg hover:bg-[#fbbf24]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2 mx-2 min-w-[44px] min-h-[44px]"
                aria-label="Previous testimonial"
                onClick={handlePrev}
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                className="h-12 w-12 flex items-center justify-center rounded-full bg-[#fbbf24] text-[#0a1535] shadow-lg hover:bg-[#fbbf24]/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#fbbf24] focus:ring-offset-2 mx-2 min-w-[44px] min-h-[44px]"
                aria-label="Next testimonial"
                onClick={handleNext}
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}