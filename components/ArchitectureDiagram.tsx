'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, HardDrive, Monitor, Layers } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  type: 'input' | 'process' | 'ai' | 'storage' | 'output';
}

interface ArchitectureDiagramProps {
  steps: Step[];
  projectTitle: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ steps, projectTitle }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [packetIndex, setPacketIndex] = useState<number>(0);

  // Traveling data packet animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setPacketIndex((prev) => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [steps.length]);

  const getIcon = (type: Step['type']) => {
    switch (type) {
      case 'input':
        return Monitor;
      case 'ai':
        return Cpu;
      case 'storage':
        return Database;
      case 'output':
        return HardDrive;
      default:
        return Layers;
    }
  };

  return (
    <div className="space-y-4 p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] font-mono-tech relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#202020] pb-3 text-xs">
        <div className="flex items-center space-x-2 text-[#CCFF00]">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
          <span>DATA_FLOW // ARCHITECTURE // {projectTitle}</span>
        </div>
        <span className="text-[10px] text-[#525252]">LIVE TELEMETRY STREAM</span>
      </div>

      {/* Horizontal Flow Diagram for Desktop, Stacked for Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2 relative">
        {steps.map((step, idx) => {
          const StepIcon = getIcon(step.type);
          const isHovered = activeStep === idx;
          const isPacketActive = packetIndex === idx;

          return (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-4 rounded-sm border transition-all duration-300 cursor-pointer relative ${
                  isPacketActive || isHovered
                    ? 'bg-[#121212] border-[#CCFF00] shadow-[0_0_20px_rgba(204,255,0,0.25)] scale-102'
                    : 'bg-[#050505] border-[#202020] hover:border-[#333333]'
                }`}
              >
                {/* Active Data Packet Pulse Ring */}
                {isPacketActive && (
                  <motion.div
                    layoutId="activePacket"
                    className="absolute inset-0 border border-[#CCFF00] rounded-sm pointer-events-none"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}

                <div className="flex items-center justify-between text-[10px] text-[#525252] mb-2">
                  <span>STEP 0{idx + 1}</span>
                  <span className={`uppercase text-[9px] ${isPacketActive ? 'text-[#CCFF00] font-bold' : 'text-[#8A8A8A]'}`}>
                    {step.type}
                  </span>
                </div>

                <div className={`p-2 rounded bg-[#0B0B0B] border w-fit mb-3 transition-colors ${isPacketActive ? 'border-[#CCFF00] text-[#CCFF00]' : 'border-[#202020] text-[#8A8A8A]'}`}>
                  <StepIcon className="w-4 h-4" />
                </div>

                <h4 className="text-xs font-bold text-[#F5F5F5] mb-1 leading-snug">{step.title}</h4>
                <p className="text-[11px] text-[#8A8A8A] leading-relaxed line-clamp-3">{step.description}</p>
              </motion.div>

              {/* Arrow separator with glowing pulse */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-[#202020]">
                  <ArrowRight className={`w-4 h-4 transition-colors ${packetIndex === idx ? 'text-[#CCFF00] animate-pulse' : 'text-[#525252]'}`} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
