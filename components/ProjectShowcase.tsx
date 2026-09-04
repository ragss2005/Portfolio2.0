'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Cpu, Code2, Layers, Database, Sparkles, Terminal, Atom, Radio } from 'lucide-react';
import { projectsData, Project } from '@/data/projects';
import { ProjectModal } from './ProjectModal';
import { ProjectVisualizer } from './ProjectVisualizers';
import { ScrollWordReveal, AnimatedParagraph, BackgroundTypography } from './ScrollTypography';

const filterCategories = [
  'ALL',
  'AI / ML',
  'SYSTEMS',
  'QUANTUM',
  'OPEN SOURCE',
  'CREATIVE',
] as const;

const TiltProjectCard: React.FC<{
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}> = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 300, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 300, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const getCategoryIcon = (filterCat: string) => {
    switch (filterCat) {
      case 'SYSTEMS':
        return Terminal;
      case 'QUANTUM':
        return Atom;
      case 'OPEN SOURCE':
      case 'CREATIVE':
        return Radio;
      case 'AI / ML':
        return Cpu;
      default:
        return Layers;
    }
  };

  const CatIcon = getCategoryIcon(project.filterCategory);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      data-cursor="EXPLORE →"
      className="perspective-1000 group relative bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] rounded-sm p-8 transition-colors duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl box-lime-glow space-y-6"
    >
      {/* Top Accent Line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100"
        style={{ backgroundColor: project.imageAccent }}
      />

      {/* Cybernetic Scanline Sweep */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-full transition-all duration-1000 pointer-events-none" />

      <div className="space-y-6 relative z-10">
        {/* Metadata */}
        <div className="flex items-center justify-between font-mono-tech text-xs text-[#8A8A8A]">
          <div className="flex items-center space-x-2">
            <CatIcon className="w-4 h-4 text-[#CCFF00]" />
            <span>{project.category}</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#121212] border border-[#202020] text-[#CCFF00]">
            0{index + 1} // {project.year}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#F5F5F5] tracking-tight uppercase group-hover:text-[#CCFF00] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono-tech text-[#8A8A8A] tracking-wider uppercase mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project-Specific Interactive Visualizer */}
        <ProjectVisualizer projectId={project.id} isHovered={isHovered} />

        {/* Description */}
        <p className="text-sm text-[#8A8A8A] leading-relaxed line-clamp-3">
          {project.tagline}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-sm bg-[#121212] border border-[#202020] font-mono-tech text-[11px] text-[#8A8A8A] group-hover:border-[#CCFF00]/40 group-hover:text-[#F5F5F5] transition-colors"
            >
              [{tech.toUpperCase()}]
            </span>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-6 border-t border-[#202020] flex items-center justify-between font-mono-tech text-xs text-[#F5F5F5] relative z-10">
        <span className="group-hover:text-[#CCFF00] transition-colors flex items-center space-x-1.5">
          <span>EXPLORE CASE STUDY</span>
          <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#CCFF00] transition-opacity" />
        </span>
        <ArrowUpRight className="w-4 h-4 text-[#8A8A8A] group-hover:text-[#CCFF00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </motion.div>
  );
};

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<(typeof filterCategories)[number]>('ALL');

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI / ML') return p.filterCategory === 'AI / ML';
    if (activeFilter === 'SYSTEMS') return p.filterCategory === 'SYSTEMS';
    if (activeFilter === 'QUANTUM') return p.filterCategory === 'QUANTUM';
    if (activeFilter === 'OPEN SOURCE') return p.filterCategory === 'OPEN SOURCE';
    if (activeFilter === 'CREATIVE') return p.filterCategory === 'CREATIVE';
    return true;
  });

  return (
    <section id="work" className="py-24 bg-[#050505] relative border-b border-[#202020] overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="SYSTEMS" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col space-y-4 mb-12">
          <div className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            <span>02 / SELECTED WORK</span>
          </div>

          <ScrollWordReveal
            text="SYSTEMS I'VE BUILT."
            className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F5F5] uppercase"
            highlightWords={['BUILT.']}
          />

          <AnimatedParagraph
            text="From operating systems and intelligent applications to quantum computing laboratories and open-source creative communities."
            className="text-sm text-[#8A8A8A] max-w-2xl font-mono-tech"
            delay={0.2}
          />

          {/* Interactive Filter Bar */}
          <div className="flex flex-wrap gap-2 pt-4 font-mono-tech text-xs">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-sm border transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-[0_0_12px_rgba(204,255,0,0.3)]'
                    : 'bg-[#0B0B0B] text-[#8A8A8A] border-[#202020] hover:border-[#333333] hover:text-[#F5F5F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Tilt Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <TiltProjectCard
                key={project.id}
                project={project}
                index={idx}
                onSelect={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
