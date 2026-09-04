'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import { FrameSparkLogo } from './FrameSparkLogo';
import { CorePillars } from './CorePillars';
import { IdeaToImpact } from './IdeaToImpact';
import { AIxBusiness } from './AIxBusiness';
import { FounderMatrix } from './FounderMatrix';
import { FrameSparkShowcase } from './FrameSparkShowcase';
import { FrameSparkMiniMode } from './FrameSparkMiniMode';
import { framesparkData } from '@/data/framespark';
import { FrameSparkSpecialHeading, BackgroundTypography, AnimatedParagraph } from '../ScrollTypography';

export const FrameSparkSection: React.FC = () => {
  const [miniModeOpen, setMiniModeOpen] = useState(false);

  return (
    <section id="framespark" className="py-24 bg-[#050505] relative border-b border-[#202020] bg-dot-pattern overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="FRAMESPARK" />

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#CCFF00]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#202020] pb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2"
            >
              <span className="font-bold text-sm">04</span>
              <span className="text-[#8A8A8A]">/ FRAMESPARK</span>
            </motion.div>

            {/* Status indicator */}
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-[#8A8A8A]">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
              <span className="text-[#F5F5F5] font-bold">{framesparkData.statusIndicator}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1 font-mono-tech">
                <FrameSparkLogo size="lg" />
              </div>

              {/* Special FrameSpark Kinetic Reveal with Traveling Accent Glow */}
              <FrameSparkSpecialHeading />

              <AnimatedParagraph
                text={framesparkData.supportingStatement}
                className="text-sm sm:text-base text-[#8A8A8A] font-mono-tech max-w-2xl leading-relaxed pt-2"
                delay={0.2}
              />
            </div>

            {/* Enter FrameSpark Mini Mode Button */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => setMiniModeOpen(true)}
                data-cursor="ENTER"
                className="inline-flex items-center space-x-3 px-6 py-4 rounded-sm bg-[#CCFF00] text-black font-mono-tech text-xs font-bold tracking-wider hover:bg-[#b8e600] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)] transition-all"
              >
                <span>ENTER FRAMESPARK</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <CorePillars />

        {/* Idea to Impact Process */}
        <IdeaToImpact />

        {/* AI x Business Matrix */}
        <AIxBusiness />

        {/* FrameSpark Work & Initiatives */}
        <FrameSparkShowcase />

        {/* Founder Matrix */}
        <FounderMatrix />

        {/* Reconnect Block: Engineer + Founder + Creator */}
        <div className="p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-4 font-mono-tech text-xs">
          <div className="text-[#525252]">INTEGRATED_IDENTITY // RAGHUNATH N</div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm font-bold text-[#F5F5F5]">
              ENGINEER <span className="text-[#CCFF00]">+</span> FOUNDER <span className="text-[#00E5FF]">+</span> CREATOR
            </div>
            <div className="flex items-center space-x-2 text-[#8A8A8A]">
              <span>ENGINEERING</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CCFF00]" />
              <span>FRAMESPARK</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>CREATIVE</span>
            </div>
          </div>
        </div>

        {/* FrameSpark CTA */}
        <div className="p-10 rounded-sm bg-[#0B0B0B] border border-[#202020] text-center space-y-6 font-mono-tech shadow-2xl relative overflow-hidden">
          <div className="space-y-2">
            <h3 className="text-3xl sm:text-5xl font-black text-[#F5F5F5] uppercase">
              HAVE AN IDEA?
            </h3>
            <p className="text-sm text-[#8A8A8A]">
              Let&apos;s turn it into something real.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-sm bg-[#CCFF00] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] transition-colors"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMiniModeOpen(true)}
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-sm bg-[#050505] border border-[#202020] text-[#F5F5F5] text-xs font-mono-tech hover:border-[#CCFF00] transition-colors"
            >
              <span>EXPLORE FRAMESPARK</span>
              <ArrowUpRight className="w-4 h-4 text-[#8A8A8A]" />
            </button>
          </div>
        </div>
      </div>

      {/* FrameSpark Mini Website Mode Overlay */}
      <FrameSparkMiniMode isOpen={miniModeOpen} onClose={() => setMiniModeOpen(false)} />
    </section>
  );
};
