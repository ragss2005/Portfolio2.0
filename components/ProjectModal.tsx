'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Lightbulb, AlertTriangle, Cpu, Layers } from 'lucide-react';
import { Project } from '@/data/projects';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#050505] border border-[#202020] rounded-sm p-6 sm:p-8 overflow-y-auto font-sans text-[#F5F5F5] shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-sm bg-[#0B0B0B] border border-[#202020] text-[#8A8A8A] hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-4 border-b border-[#202020] pb-6">
            <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs text-[#8A8A8A]">
              <span className="px-2.5 py-1 rounded bg-[#0B0B0B] border border-[#202020] text-[#CCFF00]">
                {project.year}
              </span>
              <span>{project.category}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-[#F5F5F5]">
              {project.title}
            </h2>
            <p className="text-sm font-mono-tech text-[#8A8A8A] tracking-wider uppercase">
              {project.subtitle}
            </p>

            <div className="space-y-2 pt-2">
              <div className="font-mono-tech text-xs text-[#CCFF00]">01 / OVERVIEW</div>
              <p className="text-base text-[#F5F5F5] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-2 font-mono-tech text-xs">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] text-[#F5F5F5] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#CCFF00]" />
                  <span>VIEW REPOSITORY</span>
                  <ExternalLink className="w-3 h-3 text-[#8A8A8A]" />
                </a>
              )}
            </div>
          </div>

          {/* Tech Badges */}
          <div className="py-6 border-b border-[#202020] space-y-2">
            <div className="font-mono-tech text-xs text-[#525252]">05 / TECHNOLOGY STACK</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-sm bg-[#0B0B0B] border border-[#202020] text-xs font-mono-tech text-[#8A8A8A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Sections */}
          <div className="space-y-8 py-8">
            {/* 02 Problem */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#FFB700]">
                <AlertTriangle className="w-4 h-4" />
                <span>02 / PROBLEM STATEMENT</span>
              </div>
              <p className="text-sm text-[#8A8A8A] leading-relaxed bg-[#0B0B0B] p-4 rounded-sm border border-[#202020]">
                {project.problem}
              </p>
            </div>

            {/* 03 Approach */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#CCFF00]">
                <Lightbulb className="w-4 h-4" />
                <span>03 / ENGINEERING APPROACH & SOLUTION</span>
              </div>
              <p className="text-sm text-[#F5F5F5] leading-relaxed bg-[#0B0B0B] p-4 rounded-sm border border-[#202020]">
                {project.solution}
              </p>
            </div>

            {/* 04 Architecture Diagram */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#00E5FF]">
                <Layers className="w-4 h-4" />
                <span>04 / SYSTEM ARCHITECTURE & DATA FLOW</span>
              </div>
              <ArchitectureDiagram steps={project.architectureSteps} projectTitle={project.title} />
            </div>

            {/* AI / ML Pipeline if available */}
            {project.aiPipeline && (
              <div className="space-y-3">
                <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#00FF88]">
                  <Cpu className="w-4 h-4" />
                  <span>AI & MODEL PIPELINE DETAILS</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.aiPipeline.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-sm bg-[#0B0B0B] border border-[#202020]">
                      <div className="font-mono-tech text-xs text-[#CCFF00] font-bold mb-1">{item.stage}</div>
                      <div className="text-xs text-[#8A8A8A]">{item.details}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 06 Implementation Features */}
            <div className="space-y-3">
              <div className="font-mono-tech text-xs text-[#8A8A8A]">06 / IMPLEMENTATION CAPABILITIES</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-[#8A8A8A] bg-[#0B0B0B] p-3 rounded-sm border border-[#202020]">
                    <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 07 Result & 08 Lessons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-2">
                <div className="font-mono-tech text-xs text-[#CCFF00]">07 / VERIFIED RESULT</div>
                <p className="text-xs text-[#F5F5F5] leading-relaxed">{project.result}</p>
              </div>

              <div className="p-4 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-2">
                <div className="font-mono-tech text-xs text-[#8A8A8A]">08 / LESSONS LEARNED</div>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">{project.lessons}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
