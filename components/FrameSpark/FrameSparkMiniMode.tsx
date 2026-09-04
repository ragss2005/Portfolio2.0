'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Zap, Mail, ArrowUpRight } from 'lucide-react';
import { FrameSparkLogo } from './FrameSparkLogo';
import { CorePillars } from './CorePillars';
import { IdeaToImpact } from './IdeaToImpact';
import { AIxBusiness } from './AIxBusiness';
import { FounderMatrix } from './FounderMatrix';
import { FrameSparkShowcase } from './FrameSparkShowcase';
import { framesparkData } from '@/data/framespark';

interface FrameSparkMiniModeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FrameSparkMiniMode: React.FC<FrameSparkMiniModeProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#050505] text-[#F5F5F5] overflow-y-auto font-sans"
      >
        {/* FrameSpark Studio Header */}
        <header className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-[#202020] py-4 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={onClose}
              data-cursor="BACK"
              className="flex items-center space-x-2 px-3 py-1.5 rounded bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] font-mono-tech text-xs text-[#CCFF00] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← BACK TO RAGHUNATH</span>
            </button>

            <FrameSparkLogo size="sm" />
          </div>

          <nav className="hidden md:flex items-center space-x-8 font-mono-tech text-xs tracking-wider">
            <a href="#fs-work" className="text-[#8A8A8A] hover:text-[#CCFF00] transition-colors">WORK</a>
            <a href="#fs-services" className="text-[#8A8A8A] hover:text-[#CCFF00] transition-colors">SERVICES</a>
            <a href="#fs-process" className="text-[#8A8A8A] hover:text-[#CCFF00] transition-colors">PROCESS</a>
            <a href="#fs-about" className="text-[#8A8A8A] hover:text-[#CCFF00] transition-colors">ABOUT</a>
            <a href="#fs-contact" className="text-[#8A8A8A] hover:text-[#CCFF00] transition-colors">CONTACT</a>
          </nav>
        </header>

        {/* FrameSpark Studio Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          {/* Hero Statement */}
          <div className="space-y-6 text-center max-w-4xl mx-auto py-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#0B0B0B] border border-[#202020] font-mono-tech text-xs text-[#CCFF00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FRAMESPARK DIGITAL STUDIO</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-[#F5F5F5] uppercase leading-none">
              IDEAS <br />
              <span className="text-[#CCFF00]">INTO</span> <br />
              EXPERIENCES.
            </h1>

            <p className="text-base sm:text-lg text-[#8A8A8A] font-mono-tech max-w-2xl mx-auto leading-relaxed">
              {framesparkData.supportingStatement}
            </p>
          </div>

          {/* Pillars */}
          <div id="fs-services">
            <CorePillars />
          </div>

          {/* Process */}
          <div id="fs-process">
            <IdeaToImpact />
          </div>

          {/* AI x Business */}
          <AIxBusiness />

          {/* Work */}
          <div id="fs-work">
            <FrameSparkShowcase />
          </div>

          {/* Founder Matrix */}
          <div id="fs-about">
            <FounderMatrix />
          </div>

          {/* FrameSpark Studio Contact */}
          <div id="fs-contact" className="p-8 sm:p-12 rounded-sm bg-[#0B0B0B] border border-[#202020] text-center space-y-6 font-mono-tech">
            <h2 className="text-3xl sm:text-5xl font-black text-[#F5F5F5] uppercase">
              HAVE AN IDEA?
            </h2>
            <p className="text-sm text-[#8A8A8A]">
              Let&apos;s turn it into something real.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="mailto:raghunath.n.official@gmail.com"
                className="px-8 py-4 rounded bg-[#CCFF00] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-colors"
              >
                START A PROJECT →
              </a>
              <button
                onClick={onClose}
                className="px-8 py-4 rounded bg-[#050505] border border-[#202020] text-[#F5F5F5] text-xs font-mono-tech"
              >
                RETURN TO PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
