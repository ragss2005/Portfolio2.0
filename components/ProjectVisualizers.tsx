'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProjectVisualizerProps {
  projectId: string;
  isHovered: boolean;
}

export const ProjectVisualizer: React.FC<ProjectVisualizerProps> = ({ projectId, isHovered }) => {
  // Terminal log ticker for RAGHUNATH_OS
  const [terminalLine, setTerminalLine] = useState(0);
  const terminalLogs = [
    'BOOTING RAGHUNATH_OS...',
    'INITIALIZING KERNEL v2.0...',
    'ALLOCATING MEMORY BLOCKS...',
    'STARTING PROCESS MANAGER...',
    'SYSTEM READY // CPU: 100%'
  ];

  useEffect(() => {
    if (projectId === 'r-os' && isHovered) {
      const interval = setInterval(() => {
        setTerminalLine((prev) => (prev + 1) % terminalLogs.length);
      }, 700);
      return () => clearInterval(interval);
    }
  }, [projectId, isHovered, terminalLogs.length]);

  // MRI scanning line position for Brain Tumor Detection
  const [scanPos, setScanPos] = useState(15);
  useEffect(() => {
    if (projectId === 'brain-tumor' && isHovered) {
      const interval = setInterval(() => {
        setScanPos((prev) => (prev >= 85 ? 15 : prev + 10));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [projectId, isHovered]);

  return (
    <div className="h-36 bg-[#050505] border border-[#202020] rounded-sm p-4 relative overflow-hidden font-mono-tech flex items-center justify-center">
      {/* 01: RAGHUNATH_OS (Terminal / Kernel Simulation) */}
      {projectId === 'r-os' && (
        <div className="w-full h-full flex flex-col justify-between text-[10px]">
          <div className="flex items-center justify-between border-b border-[#202020] pb-1.5 text-[#525252]">
            <span className="text-[#CCFF00] font-bold">KERNEL_LOGS // V2.0</span>
            <span>MEM: 64MB / 128MB</span>
          </div>

          <div className="space-y-1 text-[#8A8A8A] pt-1">
            {terminalLogs.slice(0, terminalLine + 1).map((log, idx) => (
              <div key={idx} className="flex items-center space-x-1.5">
                <span className="text-[#CCFF00]">&gt;</span>
                <span className={idx === terminalLine ? 'text-[#F5F5F5] font-bold' : ''}>{log}</span>
              </div>
            ))}
          </div>

          {/* Memory Block Visualization */}
          <div className="flex space-x-1 pt-2">
            {[1, 1, 0, 1, 0, 1, 1, 0, 1, 1].map((used, bIdx) => (
              <div
                key={bIdx}
                className={`h-2 flex-1 rounded-xs transition-colors ${
                  used ? 'bg-[#CCFF00]' : 'bg-[#202020]'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* 02: BRAIN TUMOR DETECTION (MRI Image Scan & Detection Reticle) */}
      {projectId === 'brain-tumor' && (
        <div className="w-full h-full relative flex items-center justify-center">
          {/* Simulated MRI Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* Brain Contour Simulation */}
          <div className="w-24 h-24 rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/5 flex items-center justify-center relative">
            {/* Detection Bounding Box */}
            <motion.div
              animate={isHovered ? { scale: [1, 1.08, 1] } : { scale: 1 }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-12 h-12 border-2 border-dashed border-[#CCFF00] rounded-sm relative flex items-center justify-center"
            >
              <span className="text-[8px] font-mono-tech text-[#CCFF00] font-bold bg-[#050505] px-1">ROI</span>
            </motion.div>
          </div>

          {/* MRI Scan Line */}
          <motion.div
            className="absolute left-0 right-0 h-0.5 bg-[#00E5FF] shadow-[0_0_12px_#00E5FF]"
            style={{ top: `${scanPos}%` }}
          />

          <div className="absolute bottom-2 left-2 text-[9px] text-[#8A8A8A] bg-[#0B0B0B] px-2 py-0.5 rounded border border-[#202020]">
            AI_INFERENCE // ANALYZING MRI SLICE
          </div>
        </div>
      )}

      {/* 03: QFORGE (Quantum Circuit & Bloch Sphere Qubits) */}
      {projectId === 'qforge' && (
        <div className="w-full h-full flex flex-col justify-between text-[10px]">
          <div className="flex items-center justify-between border-b border-[#202020] pb-1 text-[#00E5FF]">
            <span className="font-bold">QFORGE // QUANTUM LAB</span>
            <span>PROBABILITY: |Ψ⟩</span>
          </div>

          {/* Qubit Circuit Lines */}
          <div className="space-y-3 pt-1">
            <div className="flex items-center space-x-2">
              <span className="text-[#CCFF00] font-bold">|0⟩</span>
              <div className="flex-1 h-0.5 bg-[#202020] relative flex items-center justify-around">
                <span className="px-1.5 py-0.5 rounded bg-[#121212] border border-[#CCFF00] text-[8px] text-[#CCFF00]">H</span>
                <span className="px-1.5 py-0.5 rounded bg-[#121212] border border-[#00E5FF] text-[8px] text-[#00E5FF]">X</span>
              </div>
              <span className="text-[#8A8A8A]">M</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-[#00E5FF] font-bold">|1⟩</span>
              <div className="flex-1 h-0.5 bg-[#202020] relative flex items-center justify-around">
                <span className="px-1.5 py-0.5 rounded bg-[#121212] border border-[#00E5FF] text-[8px] text-[#00E5FF]">CNOT</span>
              </div>
              <span className="text-[#8A8A8A]">M</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-[#525252] pt-1 border-t border-[#202020]">
            <span>SUPERPOSITION</span>
            <span>ENTANGLEMENT</span>
            <span>MEASUREMENT</span>
          </div>
        </div>
      )}

      {/* 04: OPEN SOURCE MUSIC COMMUNITY (Audio Wave Visualizer) */}
      {projectId === 'music-community' && (
        <div className="w-full h-full flex flex-col justify-between text-[10px]">
          <div className="flex items-center justify-between border-b border-[#202020] pb-1 text-[#FF9900]">
            <span className="font-bold">OPEN SOURCE MUSIC HUB</span>
            <span>COLLABORATIVE SPECTRUM</span>
          </div>

          {/* Soundwave Bars */}
          <div className="h-16 flex items-center justify-around gap-1">
            {[0.4, 0.7, 0.9, 0.3, 0.8, 1.0, 0.6, 0.4, 0.85, 0.95, 0.5, 0.75, 0.3, 0.8, 0.6, 0.4].map((amp, idx) => (
              <motion.div
                key={idx}
                animate={
                  isHovered
                    ? { height: [`${amp * 30}%`, `${Math.max(20, amp * 90)}%`, `${amp * 30}%`] }
                    : { height: `${amp * 45}%` }
                }
                transition={{ duration: 0.6, repeat: Infinity, delay: (idx % 4) * 0.1 }}
                className="w-1.5 rounded-full bg-[#FF9900] shadow-[0_0_6px_rgba(255,153,0,0.4)]"
              />
            ))}
          </div>

          <div className="text-[9px] text-[#525252] text-center">
            CREATORS → COLLABORATION → OPEN SOURCE SOUND
          </div>
        </div>
      )}

      {/* Default Visualizer for other projects */}
      {['lunaalign', 'fitex', 'studin', 'ev-charging'].includes(projectId) && (
        <div className="w-full h-full flex flex-col justify-between text-[10px]">
          <div className="flex items-center justify-between border-b border-[#202020] pb-1 text-[#CCFF00]">
            <span>PROJECT_TELEMETRY // {projectId.toUpperCase()}</span>
            <span>STATUS: VERIFIED</span>
          </div>
          <div className="flex items-center justify-center space-x-3 my-auto">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
            <span className="text-xs text-[#F5F5F5] font-bold uppercase">SYSTEM ARCHITECTURE ACTIVE</span>
          </div>
        </div>
      )}
    </div>
  );
};
