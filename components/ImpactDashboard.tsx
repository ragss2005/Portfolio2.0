'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { profileData } from '@/data/profile';
import { achievementsData, timelineData } from '@/data/achievements';
import { ScrollWordReveal, AnimatedParagraph, BackgroundTypography } from './ScrollTypography';

const CounterStat: React.FC<{ value: string; label: string; subtext: string; delay: number }> = ({
  value,
  label,
  subtext,
  delay,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayVal, setDisplayVal] = useState(0);

  const numericTarget = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView || numericTarget === 0) return;

    let start = 0;
    const duration = 1200;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const current = Math.floor(progress * numericTarget);
      setDisplayVal(current);

      if (progress >= 1) {
        clearInterval(interval);
        setDisplayVal(numericTarget);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, numericTarget]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00]/50 space-y-2 transition-all"
    >
      <div className="text-3xl sm:text-5xl font-black text-[#CCFF00] tracking-tight font-mono-tech">
        {numericTarget > 0 ? `${displayVal}${suffix}` : value}
      </div>
      <div className="text-xs font-bold font-mono-tech text-[#F5F5F5] tracking-wider uppercase">
        {label}
      </div>
      <div className="text-[11px] text-[#8A8A8A]">{subtext}</div>
    </motion.div>
  );
};

export const ImpactDashboard: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-[#050505] relative border-b border-[#202020] overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="IMPACT" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Entrance */}
        <div className="flex flex-col space-y-2 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2"
          >
            <span className="font-bold text-sm">06</span>
            <span className="text-[#8A8A8A]">/ IMPACT & LEADERSHIP</span>
          </motion.div>

          <ScrollWordReveal
            text="BUILDING WITH PEOPLE."
            className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F5F5] uppercase"
            highlightWords={['PEOPLE.']}
          />

          <AnimatedParagraph
            text="Technical leadership for national flagship events, hackathon sprints, peer workshops, and continuous engineering iterations."
            className="text-sm text-[#8A8A8A] max-w-2xl font-mono-tech"
            delay={0.2}
          />
        </div>

        {/* Animated Metric Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {profileData.stats.map((stat, idx) => (
            <CounterStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              subtext={stat.subtext}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Leadership & Achievement Cards (Horizontal Scrollable Wall) */}
        <div className="space-y-6 mb-20">
          <div className="flex items-center justify-between font-mono-tech text-xs">
            <span className="text-[#CCFF00] flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>ACHIEVEMENT WALL // HACKATHONS & LEADERSHIP</span>
            </span>
            <span className="text-[#525252] hidden sm:inline">SWIPE / SCROLL HORIZONTALLY →</span>
          </div>

          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pt-2">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                className="w-80 shrink-0 p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] transition-all duration-300 space-y-4 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono-tech text-xs">
                    <span className="px-2 py-0.5 rounded bg-[#121212] border border-[#202020] text-[#CCFF00]">
                      {ach.category}
                    </span>
                    <span className="text-[#8A8A8A]">{ach.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#F5F5F5] leading-snug">
                    {ach.title}
                  </h3>

                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#202020] font-mono-tech text-[11px] text-[#CCFF00]">
                  IMPACT: {ach.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Timeline with Growing Line */}
        <div className="space-y-8 relative">
          <div className="font-mono-tech text-xs text-[#8A8A8A] uppercase tracking-widest flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#CCFF00]" />
            <span>EDITORIAL TIMELINE</span>
          </div>

          <div className="space-y-6 relative">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00]/50 grid grid-cols-1 md:grid-cols-12 gap-6 items-center transition-colors"
              >
                <div className="md:col-span-2 font-mono-tech text-xl font-bold text-[#CCFF00]">
                  {item.year}
                </div>

                <div className="md:col-span-7 space-y-1">
                  <h4 className="text-base font-bold text-[#F5F5F5]">{item.role}</h4>
                  <div className="text-xs font-mono-tech text-[#8A8A8A]">{item.organization}</div>
                  <p className="text-xs text-[#8A8A8A] pt-1">{item.details}</p>
                </div>

                <div className="md:col-span-3 flex flex-wrap gap-1.5 justify-start md:justify-end">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-[#121212] border border-[#202020] text-[10px] font-mono-tech text-[#8A8A8A]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
