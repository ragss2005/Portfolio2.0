'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 750; // Under 1s total fast OS boot

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          if (onComplete) onComplete();
        }, 180);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="cinematic-loader"
          className="fixed inset-0 z-50 flex pointer-events-none"
        >
          {/* Left Curtain Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%', transition: { duration: 0.7, ease: [0.77, 0, 0.175, 1] } }}
            className="w-1/2 h-full bg-[#050505] border-r border-[#202020] flex flex-col justify-between p-8 font-mono-tech text-[#F5F5F5] pointer-events-auto"
          >
            <div className="text-xs text-[#8A8A8A]">
              RAGHUNATH_OS // v2.0.26
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-4xl font-black text-[#F5F5F5] tracking-tight">
                RAGHUNATH.N
              </div>
              <div className="text-xs text-[#CCFF00] flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
                <span>INITIALIZING RAGHUNATH.OS</span>
              </div>
            </div>
            <div className="text-[10px] text-[#525252]">BUILDING DIGITAL EXPERIENCE...</div>
          </motion.div>

          {/* Right Curtain Panel */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%', transition: { duration: 0.7, ease: [0.77, 0, 0.175, 1] } }}
            className="w-1/2 h-full bg-[#050505] flex flex-col justify-between p-8 font-mono-tech text-[#F5F5F5] pointer-events-auto text-right"
          >
            <div className="text-xs text-[#8A8A8A]">
              BOOT_PROGRESS
            </div>
            <div className="space-y-4">
              <div className="text-4xl sm:text-6xl font-black text-[#CCFF00] tracking-tighter">
                {progress}%
              </div>
              <div className="h-1 w-full bg-[#202020] overflow-hidden rounded-full ml-auto max-w-xs">
                <div
                  className="h-full bg-[#CCFF00] transition-all duration-75 ease-out shadow-[0_0_12px_#CCFF00]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="text-[10px] text-[#525252]">SYSTEM_STATUS // ONLINE</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
