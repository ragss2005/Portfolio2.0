'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { profileData } from '@/data/profile';
import { ScrollWordReveal, AnimatedParagraph, BackgroundTypography } from './ScrollTypography';

export const HumanSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative border-b border-[#202020] overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="HUMAN" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Entrance */}
        <div className="flex flex-col space-y-2 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2"
          >
            <span className="font-bold text-sm">08</span>
            <span className="text-[#8A8A8A]">/ ABOUT</span>
          </motion.div>

          <ScrollWordReveal
            text="THE HUMAN BEHIND THE SYSTEM."
            className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F5F5] uppercase"
            highlightWords={['SYSTEM.']}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-[#8A8A8A] text-base leading-relaxed">
            {profileData.bioParagraphs.map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-[#0B0B0B] p-6 rounded-sm border border-[#202020] hover:border-[#CCFF00]/40 transition-colors"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Currently Building Status Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-6 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-[#202020] pb-4 font-mono-tech text-xs">
                <div className="flex items-center space-x-2 text-[#CCFF00]">
                  <Activity className="w-4 h-4" />
                  <span>CURRENTLY BUILDING</span>
                </div>
                <span className="text-[10px] text-[#525252]">LIVE TELEMETRY</span>
              </div>

              <div className="space-y-3 font-mono-tech text-xs">
                {profileData.currentlyBuilding.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-[#050505] border border-[#202020] hover:border-[#CCFF00]/50 flex items-center justify-between transition-colors"
                  >
                    <div className="space-y-0.5">
                      <div className="text-[#F5F5F5] font-bold">{item.title}</div>
                      <div className="text-[10px] text-[#8A8A8A]">{item.category}</div>
                    </div>

                    <div className="flex items-center space-x-1.5 text-[10px] text-[#CCFF00]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
                      <span>ACTIVE</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
