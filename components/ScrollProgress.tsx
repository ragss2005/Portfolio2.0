'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'engineering', label: '01', title: 'ENGINEERING' },
  { id: 'work', label: '02', title: 'SELECTED WORK' },
  { id: 'lab', label: '03', title: 'AI LAB' },
  { id: 'framespark', label: '04', title: 'FRAMESPARK' },
  { id: 'impact', label: '05', title: 'IMPACT' },
  { id: 'creative', label: '06', title: 'BEYOND CODE' },
  { id: 'about', label: '07', title: 'THE HUMAN' },
  { id: 'contact', label: '08', title: 'CONTACT' },
];

export const ScrollProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('engineering');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);

      // Determine active section
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center space-y-4 font-mono-tech text-[10px]">
      {/* Overall thin progress line */}
      <div className="relative h-48 w-0.5 bg-[#202020] rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Section indicators */}
      <div className="flex flex-col space-y-3">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;

          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              title={sec.title}
              className="group flex items-center space-x-2 text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors"
            >
              <span
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#CCFF00] scale-125 shadow-[0_0_10px_#CCFF00]'
                    : 'bg-[#202020] group-hover:bg-[#8A8A8A]'
                }`}
              />
              <span
                className={`transition-all duration-300 ${
                  isActive ? 'text-[#CCFF00] font-bold tracking-wider' : 'opacity-40 group-hover:opacity-100'
                }`}
              >
                {sec.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
