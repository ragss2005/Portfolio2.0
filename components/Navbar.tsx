'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Menu, X, Terminal, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
  onOpenAIModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, onOpenAIModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ENGINEERING', href: '#engineering' },
    { label: 'AI LAB', href: '#lab' },
    { label: 'FRAMESPARK', href: '#framespark' },
    { label: 'IMPACT', href: '#impact' },
    { label: 'CREATIVE', href: '#creative' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/85 backdrop-blur-md border-b border-[#202020] py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 group text-[#F5F5F5] font-mono-tech tracking-tight"
            data-cursor="HOME"
          >
            <div className="w-8 h-8 rounded-sm bg-[#0B0B0B] border border-[#202020] flex items-center justify-center group-hover:border-[#CCFF00] transition-colors">
              <span className="font-bold text-sm text-[#CCFF00]">R</span>
            </div>
            <span className="font-bold text-sm hidden sm:inline-block tracking-wider group-hover:text-[#CCFF00] transition-colors">
              RAGHUNATH.N
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-mono-tech text-xs tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors hover:border-b hover:border-[#CCFF00] pb-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Tools & Status */}
          <div className="flex items-center space-x-3">
            {/* Status dot */}
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0B0B0B] border border-[#202020] text-[10px] font-mono-tech text-[#8A8A8A]">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              <span className="tracking-widest text-[#F5F5F5]">AVAILABLE</span>
            </div>

            {/* AI Assistant Button */}
            {onOpenAIModal && (
              <button
                onClick={onOpenAIModal}
                data-cursor="RAGSS AI"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] text-xs font-mono-tech text-[#F5F5F5] transition-all"
                title="Ask RAGSS AI"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span className="hidden sm:inline">RAGSS.AI</span>
              </button>
            )}

            {/* Command Palette button */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                data-cursor="CMD+K"
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] text-xs font-mono-tech text-[#8A8A8A] hover:text-[#F5F5F5] transition-all"
                title="Open Command Palette (Cmd+K)"
              >
                <Command className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[10px]">K</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm bg-[#0B0B0B] border border-[#202020] text-[#F5F5F5]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#050505] flex flex-col justify-between p-8 pt-28 font-mono-tech border-b border-[#202020] lg:hidden"
          >
            <div className="space-y-6">
              <div className="text-xs text-[#8A8A8A] tracking-widest uppercase">NAVIGATION</div>
              <div className="flex flex-col space-y-4 text-2xl font-bold">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-[#F5F5F5] hover:text-[#CCFF00] transition-colors py-1 border-b border-[#202020]/50"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-[#8A8A8A] font-mono">0{idx + 1}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#202020]">
              <div className="flex items-center space-x-2 text-xs text-[#8A8A8A]">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                <span>RAGHUNATH N // AI ENGINEER</span>
              </div>
              <div className="text-xs text-[#525252]">INDIA • v2.0.26</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
