'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, Cpu, FolderGit2, Mail, Sparkles, Music, User, X } from 'lucide-react';
import { projectsData } from '@/data/projects';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAIModal?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenAIModal }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Trigger open via document event or prop
          const btn = document.querySelector('[data-cursor="CMD+K"]') as HTMLButtonElement;
          btn?.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Go to Work / Selected Projects', href: '#work', icon: FolderGit2, category: 'Navigation' },
    { label: 'Go to Engineering Capabilities', href: '#engineering', icon: Cpu, category: 'Navigation' },
    { label: 'Go to AI Research Lab', href: '#lab', icon: Terminal, category: 'Navigation' },
    { label: 'Go to FrameSpark Startup Showcase', href: '#framespark', icon: Sparkles, category: 'Navigation' },
    { label: 'Go to Impact & Achievements', href: '#impact', icon: User, category: 'Navigation' },
    { label: 'Go to Creative Studio (Vibe Lounge)', href: '#creative', icon: Music, category: 'Navigation' },
    { label: 'Go to About & Identity', href: '#about', icon: User, category: 'Navigation' },
    { label: 'Go to Contact', href: '#contact', icon: Mail, category: 'Navigation' },
  ];

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredActions = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href?: string, actionFn?: () => void) => {
    onClose();
    if (actionFn) actionFn();
    else if (href) {
      window.location.href = href;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md font-mono-tech">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-xl bg-[#050505] border border-[#202020] rounded-sm shadow-2xl overflow-hidden"
        >
          {/* Input Header */}
          <div className="p-4 border-b border-[#202020] flex items-center space-x-3 bg-[#0B0B0B]">
            <Search className="w-4 h-4 text-[#CCFF00]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, skills, or jump to section..."
              className="flex-1 bg-transparent text-xs text-[#F5F5F5] outline-none caret-[#CCFF00]"
              autoFocus
            />
            <button onClick={onClose} className="text-[#8A8A8A] hover:text-[#F5F5F5]">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Results list */}
          <div className="max-h-[350px] overflow-y-auto p-2 space-y-4 text-xs">
            {/* Ask AI Trigger Option */}
            {onOpenAIModal && (
              <div>
                <button
                  onClick={() => handleSelect(undefined, onOpenAIModal)}
                  className="w-full p-3 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] flex items-center justify-between text-left group"
                >
                  <div className="flex items-center space-x-3 text-[#CCFF00]">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-bold">ASK RAGSS AI ASSISTANT</span>
                  </div>
                  <span className="text-[10px] text-[#525252] group-hover:text-[#F5F5F5]">PROMPT →</span>
                </button>
              </div>
            )}

            {/* Filtered Projects */}
            {filteredProjects.length > 0 && (
              <div className="space-y-1">
                <div className="text-[10px] text-[#525252] px-3 uppercase">PROJECTS</div>
                {filteredProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleSelect('#work')}
                    className="w-full px-3 py-2 rounded-sm hover:bg-[#121212] flex items-center justify-between text-left text-[#F5F5F5]"
                  >
                    <div>
                      <div className="font-bold text-[#CCFF00]">{proj.title}</div>
                      <div className="text-[10px] text-[#8A8A8A]">{proj.subtitle}</div>
                    </div>
                    <span className="text-[10px] text-[#525252]">{proj.year}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Navigation Actions */}
            {filteredActions.length > 0 && (
              <div className="space-y-1">
                <div className="text-[10px] text-[#525252] px-3 uppercase">NAVIGATION</div>
                {filteredActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.label}
                      onClick={() => handleSelect(action.href)}
                      className="w-full px-3 py-2 rounded-sm hover:bg-[#121212] flex items-center space-x-3 text-left text-[#8A8A8A] hover:text-[#F5F5F5]"
                    >
                      <Icon className="w-4 h-4 text-[#CCFF00]" />
                      <span>{action.label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-2.5 bg-[#0B0B0B] border-t border-[#202020] flex justify-between text-[10px] text-[#525252]">
            <span>PRESS <kbd className="px-1 bg-[#050505] text-[#F5F5F5] rounded">ESC</kbd> TO CLOSE</span>
            <span>RAGHUNATH_OS // PALETTE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
