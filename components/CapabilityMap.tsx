'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Database, Terminal } from 'lucide-react';
import { skillsData } from '@/data/skills';
import { TextScramble } from './TextScramble';
import { ScrollWordReveal, AnimatedParagraph, BackgroundTypography } from './ScrollTypography';

export const CapabilityMap: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const isConnected = (skillName: string) => {
    if (!activeSkill) return false;
    if (activeSkill === skillName) return true;

    for (const cat of skillsData) {
      const activeObj = cat.skills.find((s) => s.name === activeSkill);
      if (activeObj && activeObj.connections.includes(skillName)) return true;

      const targetObj = cat.skills.find((s) => s.name === skillName);
      if (targetObj && targetObj.connections.includes(activeSkill)) return true;
    }
    return false;
  };

  return (
    <section id="engineering" className="py-24 bg-[#050505] relative border-b border-[#202020] overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="ENGINEERING" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Entrance */}
        <div className="flex flex-col space-y-2 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2"
          >
            <span className="font-bold text-sm">01</span>
            <span className="text-[#8A8A8A]">/ ENGINEERING</span>
          </motion.div>

          <ScrollWordReveal
            text="BUILDING SYSTEMS THAT THINK."
            className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F5F5] uppercase"
            highlightWords={['THINK.']}
          />

          <AnimatedParagraph
            text="An ecosystem view of technologies and architectural layers I work across. Hover any node to view connected capabilities."
            className="text-sm text-[#8A8A8A] max-w-2xl font-mono-tech"
            delay={0.2}
          />
        </div>

        {/* Capability Ecosystem Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {skillsData.map((category, catIdx) => {
            const icons = [Cpu, Layers, Database];
            const CategoryIcon = icons[catIdx % icons.length];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIdx * 0.12 }}
                className="tech-card p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00]/60 space-y-6 transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-[#202020] pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded bg-[#121212] border border-[#202020] text-[#CCFF00]">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-mono-tech text-xs font-bold text-[#F5F5F5] tracking-wider uppercase">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono-tech text-[#525252]">LAYER 0{catIdx + 1}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Nodes */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => {
                    const active = activeSkill === skill.name;
                    const connected = isConnected(skill.name);

                    return (
                      <button
                        key={skill.name}
                        onMouseEnter={() => setActiveSkill(skill.name)}
                        onMouseLeave={() => setActiveSkill(null)}
                        onClick={() => setActiveSkill(active ? null : skill.name)}
                        data-cursor="NODE"
                        className={`px-3 py-1.5 rounded-sm font-mono-tech text-xs transition-all duration-200 border ${
                          active
                            ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-[0_0_15px_rgba(204,255,0,0.4)] scale-105'
                            : connected
                            ? 'bg-[#121212] text-[#CCFF00] border-[#CCFF00]/80 shadow-[0_0_10px_rgba(204,255,0,0.15)]'
                            : 'bg-[#121212] text-[#F5F5F5] border-[#202020] hover:border-[#333333]'
                        }`}
                      >
                        <span className="flex items-center space-x-1.5">
                          <TextScramble text={skill.name} autostart={false} />
                          {connected && !active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-ping" />
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Languages & Ecosystem Badges */}
        <div className="mt-12 p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs">
          <div className="flex items-center space-x-2 text-[#8A8A8A]">
            <Terminal className="w-4 h-4 text-[#CCFF00]" />
            <span>PRIMARY STACK:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[#F5F5F5]">
            {['Python', 'C / C++', 'Java', 'TypeScript', 'JavaScript', 'PyTorch', 'OpenCV', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Git', 'Linux'].map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded bg-[#121212] border border-[#202020] text-[11px] text-[#8A8A8A] hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-all">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
