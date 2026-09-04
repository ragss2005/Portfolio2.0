'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layers, Cpu, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { framesparkData, FrameSparkProject } from '@/data/framespark';

export const FrameSparkShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<FrameSparkProject | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col space-y-2">
        <div className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
          <span>FRAMESPARK WORK & PRODUCTS</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-[#F5F5F5] uppercase">
          WORK PROTOTYPES & INITIATIVES.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {framesparkData.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            onClick={() => setSelectedProject(project)}
            data-cursor="VIEW"
            className="p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden group box-lime-glow"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100"
              style={{ backgroundColor: project.imageAccent }}
            />

            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono-tech text-xs">
                <span className="px-2.5 py-1 rounded bg-[#121212] border border-[#202020] text-[#CCFF00]">
                  {project.status}
                </span>
                <span className="text-[#8A8A8A]">{project.category}</span>
              </div>

              <div>
                <h4 className="text-2xl font-black text-[#F5F5F5] tracking-tight uppercase group-hover:text-[#CCFF00] transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs font-mono-tech text-[#8A8A8A] tracking-wider uppercase mt-1">
                  {project.subtitle}
                </p>
              </div>

              <p className="text-xs text-[#8A8A8A] leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.services.map((srv) => (
                  <span
                    key={srv}
                    className="px-2 py-0.5 rounded bg-[#121212] border border-[#202020] font-mono-tech text-[10px] text-[#8A8A8A]"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#202020] flex items-center justify-between font-mono-tech text-xs text-[#F5F5F5]">
              <span className="group-hover:text-[#CCFF00] transition-colors">VIEW INITIATIVE</span>
              <ArrowUpRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#CCFF00] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* FrameSpark Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md font-sans">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-[#050505] border border-[#202020] rounded-sm p-6 sm:p-8 overflow-y-auto font-sans text-[#F5F5F5] shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded bg-[#0B0B0B] border border-[#202020] text-[#8A8A8A] hover:text-[#CCFF00]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3 border-b border-[#202020] pb-6">
                <div className="font-mono-tech text-xs text-[#CCFF00]">
                  {selectedProject.status}
                </div>
                <h3 className="text-3xl font-black uppercase text-[#F5F5F5]">{selectedProject.title}</h3>
                <p className="text-sm font-mono-tech text-[#8A8A8A]">{selectedProject.subtitle}</p>
                <p className="text-sm text-[#F5F5F5] pt-2">{selectedProject.description}</p>
              </div>

              <div className="space-y-4 font-mono-tech text-xs">
                <div className="text-[#525252]">SERVICES & CAPABILITIES</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((s) => (
                    <span key={s} className="px-3 py-1 rounded bg-[#0B0B0B] border border-[#202020] text-[#CCFF00]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#202020] font-mono-tech text-xs">
                <div className="text-[#525252]">TECHNOLOGY STACK</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technology.map((t) => (
                    <span key={t} className="px-3 py-1 rounded bg-[#0B0B0B] border border-[#202020] text-[#8A8A8A]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
