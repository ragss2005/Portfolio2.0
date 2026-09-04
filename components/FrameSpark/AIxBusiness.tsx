'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, Sparkles } from 'lucide-react';
import { framesparkData } from '@/data/framespark';

export const AIxBusiness: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  return (
    <div className="space-y-8 p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] shadow-2xl relative overflow-hidden">
      <div className="flex flex-col space-y-2 border-b border-[#202020] pb-4">
        <div className="font-mono-tech text-xs text-[#00E5FF] tracking-widest uppercase flex items-center space-x-2">
          <Sparkles className="w-4 h-4" />
          <span>AI × BUSINESS MATRIX</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-[#F5F5F5] uppercase">
          WHERE AI MEETS BUSINESS.
        </h3>
        <p className="text-xs text-[#8A8A8A] font-mono-tech max-w-xl">
          FrameSpark bridges raw AI capability with market strategy, user insights, and production deployment. Hover any node to inspect details.
        </p>
      </div>

      {/* Interactive Pipeline Node Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono-tech">
        {framesparkData.aiBusinessPipeline.map((node, idx) => {
          const isActive = activeStage === idx;

          return (
            <motion.div
              key={node.id}
              onMouseEnter={() => setActiveStage(idx)}
              animate={isActive ? { scale: 1.03 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-sm border transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#121212] border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.25)]'
                  : 'bg-[#050505] border-[#202020] hover:border-[#333333]'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] text-[#525252] mb-2">
                <span>0{idx + 1}</span>
                <span className={`uppercase font-bold ${isActive ? 'text-[#00E5FF]' : 'text-[#8A8A8A]'}`}>
                  {node.sub}
                </span>
              </div>

              <h4 className={`text-sm font-black mb-1 uppercase ${isActive ? 'text-[#00E5FF]' : 'text-[#F5F5F5]'}`}>
                {node.title}
              </h4>

              <p className="text-[11px] text-[#8A8A8A] leading-relaxed">
                {node.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Active Stage Terminal readout */}
      <div className="p-4 rounded bg-[#050505] border border-[#202020] font-mono-tech text-xs flex items-center justify-between">
        <div className="flex items-center space-x-2 text-[#00E5FF]">
          <Cpu className="w-4 h-4" />
          <span className="font-bold">
            STAGE 0{activeStage + 1}: {framesparkData.aiBusinessPipeline[activeStage].title}
          </span>
        </div>
        <span className="text-[10px] text-[#8A8A8A] hidden sm:inline">
          {framesparkData.aiBusinessPipeline[activeStage].description}
        </span>
      </div>
    </div>
  );
};
