'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Video, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { framesparkData, FrameSparkPillar } from '@/data/framespark';

export const CorePillars: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <div className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
          <span>CORE PILLARS</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-[#F5F5F5] uppercase">
          WHAT FRAMESPARK DOES.
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {framesparkData.pillars.map((pillar, idx) => {
          const isHovered = activePillar === pillar.id;

          return (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onMouseEnter={() => setActivePillar(pillar.id)}
              onMouseLeave={() => setActivePillar(null)}
              data-cursor="EXPLORE"
              className="p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] transition-all duration-300 flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden group box-lime-glow"
            >
              {/* Pillar Accent Bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100"
                style={{ backgroundColor: pillar.accentColor }}
              />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between font-mono-tech text-xs">
                  <span className="text-2xl font-black text-[#CCFF00]">{pillar.number}</span>
                  <span className="px-2.5 py-1 rounded bg-[#121212] border border-[#202020] text-[#8A8A8A] uppercase">
                    PILLAR
                  </span>
                </div>

                <h4 className="text-2xl font-black text-[#F5F5F5] tracking-tight uppercase group-hover:text-[#CCFF00] transition-colors">
                  {pillar.title}
                </h4>

                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Animated Interactive Visual Preview based on Pillar */}
                <div className="h-32 bg-[#050505] border border-[#202020] rounded-sm p-4 relative overflow-hidden flex items-center justify-center font-mono-tech text-xs">
                  {/* Pillar 1: Digital Wireframe */}
                  {pillar.id === 'digital-products' && (
                    <div className="w-full space-y-2">
                      <div className="flex justify-between items-center border-b border-[#202020] pb-2">
                        <div className="flex space-x-1">
                          <span className="w-2 h-2 rounded-full bg-red-500/60" />
                          <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                          <span className="w-2 h-2 rounded-full bg-green-500/60" />
                        </div>
                        <span className="text-[9px] text-[#525252]">app.framespark.dev</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 pt-1">
                        <motion.div
                          animate={isHovered ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="h-8 rounded bg-[#121212] border border-[#CCFF00]/40 flex items-center justify-center text-[9px] text-[#CCFF00]"
                        >
                          UI
                        </motion.div>
                        <div className="h-8 rounded bg-[#0B0B0B] border border-[#202020] col-span-2 p-1 text-[9px] text-[#8A8A8A]">
                          &lt;Next.js /&gt;
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pillar 2: Content Film Frame & Waveform */}
                  {pillar.id === 'content-creation' && (
                    <div className="w-full space-y-2">
                      <div className="flex justify-between items-center text-[9px] text-[#00E5FF]">
                        <span>REC ● 4K 60FPS</span>
                        <span>FRAMESPARK MEDIA</span>
                      </div>
                      <div className="h-14 flex items-center justify-around bg-[#0B0B0B] border border-[#202020] rounded p-1">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <motion.div
                            key={i}
                            animate={
                              isHovered
                                ? { height: ['20%', '85%', '30%'] }
                                : { height: `${(i % 5) * 15 + 20}%` }
                            }
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.05 }}
                            className="w-1 bg-[#00E5FF] rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pillar 3: Strategy & Growth Network */}
                  {pillar.id === 'strategy-growth' && (
                    <div className="w-full space-y-2 text-[9px]">
                      <div className="text-[#FF9900] font-bold">GROWTH_PIPELINE:</div>
                      <div className="flex items-center justify-between text-[#8A8A8A]">
                        {['IDEA', 'STRATEGY', 'GROWTH'].map((step, sIdx) => (
                          <motion.div
                            key={step}
                            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                            transition={{ duration: 0.8, repeat: Infinity, delay: sIdx * 0.2 }}
                            className={`p-1.5 rounded border ${
                              sIdx === 2
                                ? 'border-[#FF9900] text-[#FF9900] bg-[#FF9900]/10 font-bold'
                                : 'border-[#202020] bg-[#0B0B0B]'
                            }`}
                          >
                            {step}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Capability tags */}
                <div className="space-y-2 font-mono-tech text-xs">
                  <div className="text-[#525252] text-[10px]">CAPABILITIES</div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-2 py-1 rounded bg-[#121212] border border-[#202020] text-[11px] text-[#8A8A8A] group-hover:text-[#F5F5F5] transition-colors"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
