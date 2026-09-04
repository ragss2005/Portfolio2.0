'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const FrameSparkLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const letters = 'FRAMESPARK'.split('');

  const sizeClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-2xl sm:text-4xl',
    lg: 'text-4xl sm:text-6xl',
  }[size];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="inline-flex items-center space-x-3 cursor-pointer select-none group"
    >
      <div className="p-2 rounded-xs bg-[#0B0B0B] border border-[#202020] group-hover:border-[#CCFF00] transition-colors relative overflow-hidden">
        <Zap className="w-5 h-5 text-[#CCFF00] group-hover:scale-110 transition-transform" />
        {isHovered && (
          <motion.div
            layoutId="spark-glow"
            className="absolute inset-0 bg-[#CCFF00]/20 blur-sm pointer-events-none"
          />
        )}
      </div>

      <div className={`font-black tracking-tighter ${sizeClasses} text-[#F5F5F5] font-mono-tech flex items-center`}>
        {letters.map((char, idx) => (
          <motion.span
            key={idx}
            animate={
              isHovered
                ? {
                    x: idx < 5 ? -1.5 * (5 - idx) : 1.5 * (idx - 4),
                    color: idx >= 5 ? '#CCFF00' : '#F5F5F5',
                  }
                : { x: 0, color: char === 'K' || char === 'S' ? '#F5F5F5' : '#F5F5F5' }
            }
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="inline-block transition-colors"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
