'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#202020] py-12 font-mono-tech text-xs text-[#8A8A8A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-[#202020]">
          <div>
            <div className="text-lg font-bold text-[#F5F5F5] tracking-wider">
              {profileData.name}
            </div>
            <div className="text-xs text-[#8A8A8A] mt-1 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              <span>SYSTEM ONLINE // {profileData.title}</span>
            </div>
          </div>

          {/* Social Links with Left-to-Right Underline Draw */}
          <div className="flex items-center space-x-6 text-[#F5F5F5]">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative py-1 group hover:text-[#CCFF00] transition-colors"
            >
              <span>GITHUB</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CCFF00] group-hover:w-full transition-all duration-300" />
            </a>

            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="relative py-1 group hover:text-[#CCFF00] transition-colors"
            >
              <span>LINKEDIN</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CCFF00] group-hover:w-full transition-all duration-300" />
            </a>

            <a
              href={`mailto:${profileData.socials.email}`}
              className="relative py-1 group hover:text-[#CCFF00] transition-colors"
            >
              <span>EMAIL</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CCFF00] group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#525252]">
          <div>
            © {new Date().getFullYear()} {profileData.name}. BUILT WITH ☕ + CODE.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-[#8A8A8A] hover:text-[#CCFF00] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 animate-bounce text-[#CCFF00]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
