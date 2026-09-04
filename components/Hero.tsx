'use client';

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ChevronDown, Terminal, Cpu } from 'lucide-react';
import { HeroSystemCore } from './HeroSystemCore';
import { TextScramble } from './TextScramble';
import { HeroScrollTypography } from './ScrollTypography';

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  // Layer parallax transforms
  const gridX = useTransform(parallaxX, [-300, 300], [-8, 8]);
  const gridY = useTransform(parallaxY, [-300, 300], [-8, 8]);

  const coreX = useTransform(parallaxX, [-300, 300], [-15, 15]);
  const coreY = useTransform(parallaxY, [-300, 300], [-15, 15]);

  const textX = useTransform(parallaxX, [-300, 300], [-5, 5]);
  const textY = useTransform(parallaxY, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-[#050505]"
    >
      {/* Layer 1: Parallax Moving Background Grid */}
      <motion.div
        style={{ x: gridX, y: gridY }}
        className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"
      />

      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Layer 2: Top Micro UI Metadata */}
      <motion.div
        style={{ x: textX, y: textY }}
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[10px] font-mono-tech text-[#8A8A8A] pt-4 border-b border-[#202020]/40 pb-4 relative z-10"
      >
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
          <span>STATUS: <strong className="text-[#F5F5F5]">ONLINE</strong></span>
        </div>
        <div>
          LOCATION: <strong className="text-[#F5F5F5]">INDIA</strong>
        </div>
        <div>
          FOCUS: <TextScramble text="AI / ML / SYSTEMS" />
        </div>
        <div className="text-right sm:text-left">
          BUILD: <strong className="text-[#CCFF00]">v2.0.26</strong>
        </div>
      </motion.div>

      {/* Layer 4: Main Hero Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto relative z-10">
        {/* Left Column: Staggered Headlines & CTAs */}
        <motion.div style={{ x: textX, y: textY }} className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-[#0B0B0B] border border-[#202020] text-xs font-mono-tech text-[#CCFF00]"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>AI ENGINEER & FULL-STACK DEVELOPER</span>
          </motion.div>

          {/* Kinetic Scroll-Linked Hero Typography */}
          <HeroScrollTypography />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-base sm:text-lg text-[#8A8A8A] max-w-xl leading-relaxed"
          >
            Computer Science & Engineering student creating deep-learning visualizers, multi-modal alignment architectures, resilient web apps, and technical leadership.
          </motion.p>

          {/* CTAs with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#work"
              data-cursor="VIEW →"
              className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-sm bg-[#CCFF00] text-black font-mono-tech text-xs font-bold tracking-wider hover:bg-[#b8e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:-translate-y-0.5 transition-all"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              data-cursor="CONNECT ↗"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] text-[#F5F5F5] font-mono-tech text-xs font-medium tracking-wider hover:-translate-y-0.5 transition-all"
            >
              <span>LET&apos;S CONNECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#8A8A8A]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Layer 3: AI System Core Canvas Visual */}
        <motion.div
          style={{ x: coreX, y: coreY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-5 relative flex items-center justify-center bg-[#0B0B0B]/60 border border-[#202020] rounded-sm p-4 backdrop-blur-sm shadow-2xl"
        >
          <div className="absolute top-3 left-3 text-[9px] font-mono-tech text-[#525252] flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
            <span>AI_SYSTEM_CORE // INTERACTIVE</span>
          </div>

          <HeroSystemCore />
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-end text-xs font-mono-tech text-[#525252] pt-6 border-t border-[#202020]/40 relative z-10">
        <div className="flex items-center space-x-2">
          <Terminal className="w-3.5 h-3.5 text-[#CCFF00]" />
          <span className="hidden sm:inline">PRESS <kbd className="px-1.5 py-0.5 rounded bg-[#121212] border border-[#202020] text-[#F5F5F5]">CMD+K</kbd> FOR PALETTE</span>
        </div>

        <a
          href="#about"
          className="flex items-center space-x-1.5 text-[#8A8A8A] hover:text-[#CCFF00] transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#CCFF00]" />
        </a>
      </div>
    </section>
  );
};
