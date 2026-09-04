'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Play, RefreshCw, Terminal, Layers, Sparkles } from 'lucide-react';
import { ScrollWordReveal, AnimatedParagraph, BackgroundTypography } from './ScrollTypography';

export const AILab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rag' | 'agent' | 'cv'>('rag');

  // RAG Visualizer interactive state
  const [ragStep, setRagStep] = useState<number>(0);
  const ragSteps = [
    { title: "USER QUESTION", detail: '"How does LunaAlign handle multi-spectral lunar orbiter imagery?"', type: "query" },
    { title: "EMBEDDING MODEL", detail: "Generating 1536-dim vector embedding via OpenAI / SentenceTransformers", type: "vector" },
    { title: "VECTOR SEARCH", detail: "Cosine similarity search in Pinecone / FAISS across lunar research corpus", type: "db" },
    { title: "RETRIEVAL", detail: "Retrieved top-k relevant research chunks (similarity score: 0.942)", type: "retrieval" },
    { title: "LLM INFERENCE", detail: "Synthesizing grounded response using retrieved context + system prompt", type: "llm" }
  ];

  // AI Agent Visualizer loop state
  const [agentStep, setAgentStep] = useState<number>(0);
  const [isAgentAuto, setIsAgentAuto] = useState<boolean>(true);

  const agentSteps = [
    { name: "GOAL", status: "User objective: 'Align optical frame with SAR orbital map'", icon: "🎯" },
    { name: "PLANNER", status: "Decomposing task: Prep -> Detect Keypoints -> Estimate Homography", icon: "🧠" },
    { name: "TOOLS", status: "Executing PyTorch SIFT feature detector & RANSAC matrix filter", icon: "🛠️" },
    { name: "MEMORY", status: "Caching 1,420 matched keypoint vectors in vector context", icon: "💾" },
    { name: "EXECUTION", status: "Computing sub-pixel homography spatial transformation", icon: "⚡" },
    { name: "RESULT", status: "Outputting aligned 94.8% precision composite orthomosaic", icon: "✅" }
  ];

  // Auto-run Agent loop continuous execution
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAgentAuto && activeTab === 'agent') {
      timer = setInterval(() => {
        setAgentStep((prev) => (prev + 1) % agentSteps.length);
      }, 2200);
    }
    return () => clearInterval(timer);
  }, [isAgentAuto, activeTab, agentSteps.length]);

  // CV Demo threshold state
  const [cvThreshold, setCvThreshold] = useState<number>(75);

  return (
    <section id="lab" className="py-24 bg-[#050505] relative border-b border-[#202020] bg-grid-pattern overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="AI LAB" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2"
          >
            <span className="font-bold text-sm">03</span>
            <span className="text-[#8A8A8A]">/ AI LAB</span>
          </motion.div>

          <ScrollWordReveal
            text="EXPERIMENTING WITH INTELLIGENCE."
            className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F5F5] uppercase"
            highlightWords={['INTELLIGENCE.']}
          />

          <AnimatedParagraph
            text="Interactive visualizers demonstrating RAG retrieval pipelines, autonomous agent tool calling loops, and computer vision keypoint extraction."
            className="text-sm text-[#8A8A8A] max-w-2xl font-mono-tech"
            delay={0.2}
          />
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono-tech text-xs">
          <button
            onClick={() => setActiveTab('rag')}
            className={`px-4 py-2 rounded-sm border transition-all flex items-center space-x-2 ${
              activeTab === 'rag'
                ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                : 'bg-[#0B0B0B] text-[#8A8A8A] border-[#202020] hover:border-[#333333]'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>RAG RETRIEVAL PIPELINE</span>
          </button>

          <button
            onClick={() => setActiveTab('agent')}
            className={`px-4 py-2 rounded-sm border transition-all flex items-center space-x-2 ${
              activeTab === 'agent'
                ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                : 'bg-[#0B0B0B] text-[#8A8A8A] border-[#202020] hover:border-[#333333]'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>AUTONOMOUS AI AGENT LOOP</span>
          </button>

          <button
            onClick={() => setActiveTab('cv')}
            className={`px-4 py-2 rounded-sm border transition-all flex items-center space-x-2 ${
              activeTab === 'cv'
                ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                : 'bg-[#0B0B0B] text-[#8A8A8A] border-[#202020] hover:border-[#333333]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>COMPUTER VISION SIMULATOR</span>
          </button>
        </div>

        {/* TAB 1: RAG VISUALIZER */}
        {activeTab === 'rag' && (
          <div className="p-6 sm:p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between border-b border-[#202020] pb-4 font-mono-tech text-xs">
              <span className="text-[#CCFF00]">RAG_VISUALIZER // STEP {ragStep + 1} OF {ragSteps.length}</span>
              <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                <button
                  onClick={() => setRagStep((prev) => (prev + 1) % ragSteps.length)}
                  className="px-3 py-1.5 rounded bg-[#121212] border border-[#202020] hover:border-[#CCFF00] text-[#F5F5F5] flex items-center space-x-1.5"
                >
                  <Play className="w-3.5 h-3.5 text-[#CCFF00]" />
                  <span>NEXT STEP</span>
                </button>
                <button
                  onClick={() => setRagStep(0)}
                  className="px-3 py-1.5 rounded bg-[#121212] border border-[#202020] text-[#8A8A8A] hover:text-[#F5F5F5]"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Step Pipeline Flow */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {ragSteps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setRagStep(idx)}
                  className={`p-4 rounded-sm border transition-all cursor-pointer font-mono-tech ${
                    ragStep === idx
                      ? 'bg-[#121212] border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.15)] scale-102'
                      : idx < ragStep
                      ? 'bg-[#0B0B0B] border-[#00FF88]/40 text-[#8A8A8A]'
                      : 'bg-[#050505] border-[#202020] opacity-50'
                  }`}
                >
                  <div className="text-[10px] text-[#525252] mb-1">0{idx + 1}</div>
                  <div className="text-xs font-bold text-[#F5F5F5] mb-2">{step.title}</div>
                  <div className="text-[11px] text-[#8A8A8A] leading-tight line-clamp-3">{step.detail}</div>
                </div>
              ))}
            </div>

            {/* Active Output Terminal Display */}
            <div className="p-4 rounded bg-[#050505] border border-[#202020] font-mono-tech text-xs space-y-2">
              <div className="text-[#525252] flex items-center space-x-2">
                <Terminal className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>INFERENCE_LOG // {ragSteps[ragStep].title}</span>
              </div>
              <div className="text-[#CCFF00] font-mono">{ragSteps[ragStep].detail}</div>
              <div className="text-[11px] text-[#8A8A8A] pt-2 border-t border-[#202020]/60">
                Grounded context is passed to the LLM to prevent hallucinated research metrics.
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI AGENT LOOP VISUALIZER */}
        {activeTab === 'agent' && (
          <div className="p-6 sm:p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between border-b border-[#202020] pb-4 font-mono-tech text-xs">
              <span className="text-[#00E5FF] flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>AUTONOMOUS_AGENT_REASONING_LOOP // STEP {agentStep + 1}</span>
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsAgentAuto(!isAgentAuto)}
                  className={`px-3 py-1.5 rounded border text-[10px] ${
                    isAgentAuto ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF]' : 'bg-[#121212] border-[#202020] text-[#8A8A8A]'
                  }`}
                >
                  {isAgentAuto ? 'PAUSE AUTO LOOP' : 'RESUME AUTO LOOP ↺'}
                </button>
                <button
                  onClick={() => setAgentStep((prev) => (prev + 1) % agentSteps.length)}
                  className="px-3 py-1.5 rounded bg-[#121212] border border-[#202020] hover:border-[#00E5FF] text-[#F5F5F5] flex items-center space-x-1.5"
                >
                  <Play className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>MANUAL STEP</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono-tech">
              {agentSteps.map((step, idx) => {
                const isActive = agentStep === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setAgentStep(idx)}
                    animate={isActive ? { scale: [1, 1.04, 1] } : { scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-sm border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#121212] border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.3)]'
                        : 'bg-[#050505] border-[#202020]'
                    }`}
                  >
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <div className={`text-xs font-bold ${isActive ? 'text-[#00E5FF]' : 'text-[#F5F5F5]'}`}>{step.name}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-4 rounded bg-[#050505] border border-[#202020] font-mono-tech text-xs space-y-2">
              <div className="text-[#00E5FF] font-bold">ACTIVE_AGENT_STATE [STAGE 0{agentStep + 1}]:</div>
              <p className="text-[#F5F5F5]">{agentSteps[agentStep].status}</p>
            </div>
          </div>
        )}

        {/* TAB 3: CV KEYPOINT SIMULATOR */}
        {activeTab === 'cv' && (
          <div className="p-6 sm:p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between border-b border-[#202020] pb-4 font-mono-tech text-xs">
              <span className="text-[#00FF88]">OPENCV_SIFT_KEYPOINT_DETECTOR</span>
              <div className="flex items-center space-x-3">
                <span className="text-[#8A8A8A]">SENSITIVITY: {cvThreshold}%</span>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={cvThreshold}
                  onChange={(e) => setCvThreshold(Number(e.target.value))}
                  className="accent-[#00FF88] cursor-pointer"
                />
              </div>
            </div>

            <div className="relative h-64 bg-[#050505] border border-[#202020] rounded-sm overflow-hidden flex items-center justify-center font-mono-tech">
              <div className="absolute inset-0 bg-grid-pattern opacity-40" />

              {/* Simulated Feature Points */}
              <div className="relative w-full h-full p-8 flex flex-wrap justify-around items-center">
                {Array.from({ length: Math.floor((cvThreshold / 100) * 24) }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.5 + (i % 3), repeat: Infinity }}
                    className="w-3 h-3 rounded-full border border-[#00FF88] bg-[#00FF88]/20 flex items-center justify-center text-[8px] text-[#00FF88]"
                  >
                    +
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-3 left-3 text-[10px] text-[#8A8A8A] bg-[#0B0B0B]/80 px-2 py-1 rounded border border-[#202020]">
                KEYPOINTS DETECTED: {Math.floor((cvThreshold / 100) * 24)} // RANSAC INLIERS: {Math.floor((cvThreshold / 100) * 21)}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
