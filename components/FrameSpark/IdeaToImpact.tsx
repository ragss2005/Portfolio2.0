'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { framesparkData } from '@/data/framespark';

export const IdeaToImpact: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isAuto, setIsAuto] = useState<boolean>(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAuto) {
      timer = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % framesparkData.processStages.length);
      }, 2400);
    }
    return () => clearInterval(timer);
  }, [isAuto]);

  return (
    <div className="space-y-8 p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] shadow-2xl relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between border-b border-[#202020] pb-4 font-mono-tech">
        <div>
          <div className="text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            <span>PROCESS PIPELINE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#F5F5F5] uppercase">
            FROM IDEA TO IMPACT.
          </h3>
        </div>

        <button
          onClick={() => setIsAuto(!isAuto)}
          className={`px-3 py-1.5 rounded text-[10px] ${
            isAuto ? 'bg-[#CCFF00]/10 border border-[#CCFF00] text-[#CCFF00]' : 'bg-[#121212] border border-[#202020] text-[#8A8A8A]'
          }`}
        >
          {isAuto ? 'PAUSE PROGRESSION' : 'AUTO CYCLE ↺'}
        </button>
      </div>

      {/* Horizontal Interactive Stages for Desktop, Stacked for Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 font-mono-tech relative">
        {framesparkData.processStages.map((stage, idx) => {
          const isActive = activeStage === idx;

          return (
            <motion.div
              key={stage.step}
              onClick={() => {
                setIsAuto(false);
                setActiveStage(idx);
              }}
              onMouseEnter={() => setActiveStage(idx)}
              animate={isActive ? { scale: [1, 1.03, 1] } : { scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`p-4 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-[#121212] border-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.25)]'
                  : 'bg-[#050505] border-[#202020] hover:border-[#333333]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[10px] mb-2">
                  <span className="text-[#525252]">{stage.step}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />}
                </div>

                <div className={`text-sm font-black uppercase mb-1 ${isActive ? 'text-[#CCFF00]' : 'text-[#F5F5F5]'}`}>
                  {stage.title}
                </div>

                <div className="text-[11px] text-[#8A8A8A] leading-tight mb-2">
                  {stage.description}
                </div>
              </div>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-[10px] text-[#CCFF00] pt-2 border-t border-[#202020]"
                >
                  {stage.detail}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Detail Console */}
      <div className="p-4 rounded bg-[#050505] border border-[#202020] font-mono-tech text-xs space-y-1">
        <div className="text-[#525252] text-[10px]">STAGE_0{activeStage + 1}_EXECUTION_DETAILS</div>
        <div className="text-[#F5F5F5] font-bold">
          {framesparkData.processStages[activeStage].title} — {framesparkData.processStages[activeStage].detail}
        </div>
      </div>
    </div>
  );
};
