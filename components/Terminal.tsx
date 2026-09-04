'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';
import { achievementsData } from '@/data/achievements';
import { ScrollWordReveal, BackgroundTypography } from './ScrollTypography';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'help',
      output: (
        <div className="space-y-1 text-[#8A8A8A]">
          <div>RAGHUNATH_OS [Version 2.0.26]</div>
          <div>Type one of the available commands below:</div>
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[#CCFF00]">
            <span>about</span>
            <span>projects</span>
            <span>skills</span>
            <span>achievements</span>
            <span>experience</span>
            <span>music</span>
            <span>contact</span>
            <span>clear</span>
          </div>
          <div className="text-[11px] text-[#525252] pt-1">Try special commands: sudo hire-raghunath, coffee</div>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'sudo hire-raghunath') {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
        const hireOutput = (
          <div className="p-4 bg-[#CCFF00]/10 border border-[#CCFF00] rounded text-[#CCFF00] space-y-2 animate-pulse font-mono-tech">
            <div className="text-[10px] text-[#8A8A8A]">ACCESSING SYSTEM... AUTHENTICATING...</div>
            <div className="font-bold text-sm">&gt;&gt;&gt; ACCESS GRANTED.</div>
            <div>LET&apos;S BUILD SOMETHING EXTRAORDINARY.</div>
            <div className="text-xs text-[#F5F5F5]">Email raghunath.n.official@gmail.com to initiate contract / full-time discussions.</div>
          </div>
        );
        setHistory((prev) => [...prev, { command: cmdStr, output: hireOutput }]);
      }, 600);
      setInput('');
      return;
    }

    let responseOutput: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        responseOutput = (
          <div className="space-y-1 text-[#8A8A8A]">
            <div>Available commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[#CCFF00] pt-1">
              <span>about</span>
              <span>projects</span>
              <span>skills</span>
              <span>achievements</span>
              <span>experience</span>
              <span>music</span>
              <span>contact</span>
              <span>clear</span>
            </div>
          </div>
        );
        break;

      case 'about':
        responseOutput = (
          <div className="space-y-1 text-[#F5F5F5]">
            <div className="text-[#CCFF00] font-bold">RAGHUNATH N // AI ENGINEER & FULL-STACK DEVELOPER</div>
            <div>Computer Science & Engineering student focused on deep learning, computer vision, RAG architectures, and scalable web platforms.</div>
            <div className="text-[#8A8A8A]">Location: {profileData.location} | Build: {profileData.buildVersion}</div>
          </div>
        );
        break;

      case 'projects':
        responseOutput = (
          <div className="space-y-2 text-[#F5F5F5]">
            <div className="text-[#CCFF00]">VERIFIED PROJECTS:</div>
            {projectsData.map((p, idx) => (
              <div key={p.id} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#202020] pb-1">
                <span className="font-bold">0{idx + 1} {p.title}</span>
                <span className="text-[#8A8A8A] text-[11px]">{p.category}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        responseOutput = (
          <div className="space-y-1 text-[#8A8A8A]">
            <div><strong className="text-[#CCFF00]">AI / ML:</strong> Python, PyTorch, OpenCV, TensorFlow, RAG, Vector DBs</div>
            <div><strong className="text-[#00E5FF]">FULL-STACK:</strong> TypeScript, JavaScript, React, Next.js, Node.js, Express, Tailwind CSS</div>
            <div><strong className="text-[#FFB700]">SYSTEMS & DB:</strong> C/C++, Java, PostgreSQL, MongoDB, Firebase, Git, Linux</div>
          </div>
        );
        break;

      case 'achievements':
        responseOutput = (
          <div className="space-y-2 text-[#F5F5F5]">
            {achievementsData.map((ach) => (
              <div key={ach.id} className="border-l-2 border-[#CCFF00] pl-3">
                <div className="font-bold text-[#CCFF00]">{ach.title} ({ach.year})</div>
                <div className="text-[#8A8A8A] text-xs">{ach.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        responseOutput = (
          <div className="space-y-1 text-[#8A8A8A]">
            <div><strong className="text-[#F5F5F5]">2026:</strong> Technical Lead @ YUVA&apos;26 | LunaAlign CV Research | RAG Systems</div>
            <div><strong className="text-[#F5F5F5]">2025:</strong> FITEX Full-Stack Ecosystem | Smart India Hackathon</div>
            <div><strong className="text-[#F5F5F5]">2024:</strong> STUDIN Community Hub | EV Charging Telemetry Platform</div>
          </div>
        );
        break;

      case 'music':
        responseOutput = (
          <div className="space-y-1 text-[#F5F5F5]">
            <div className="text-[#CCFF00]">PROJECT: Vibe Lounge</div>
            <div>Track: Vibe Lounge (Dark Synth / Ambient Cyberpunk) | BPM: 124</div>
            <div className="text-[#8A8A8A]">Exploring spatial soundscapes, rhythmic synth composition, and music production.</div>
          </div>
        );
        break;

      case 'contact':
        responseOutput = (
          <div className="space-y-1 text-[#F5F5F5]">
            <div>Email: <a href={`mailto:${profileData.socials.email}`} className="text-[#CCFF00] underline">{profileData.socials.email}</a></div>
            <div>GitHub: <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="text-[#00E5FF] underline">{profileData.socials.github}</a></div>
            <div>LinkedIn: <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="text-[#00E5FF] underline">{profileData.socials.linkedin}</a></div>
          </div>
        );
        break;

      case 'coffee':
        responseOutput = (
          <div className="text-red-400 font-bold">
            STATUS: CRITICAL // COFFEE RESERVES DEPLETED // RE-FUELING REQUIRED...
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        responseOutput = (
          <div className="text-red-400">
            Command not recognized: &quot;{cleanCmd}&quot;. Type <span className="text-[#CCFF00] underline">help</span> for available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: responseOutput }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-24 bg-[#050505] relative border-b border-[#202020] overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="BUILDER" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <div className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2">
            <span className="font-bold text-sm">05</span>
            <span className="text-[#8A8A8A]">/ BUILDER&apos;S LAB</span>
          </div>

          <ScrollWordReveal
            text="EXPERIMENTING IN PUBLIC."
            className="text-3xl sm:text-4xl font-black tracking-tight text-[#F5F5F5] uppercase"
            highlightWords={['PUBLIC.']}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`rounded-sm bg-[#0B0B0B] border transition-colors ${
            isGlitching ? 'border-[#CCFF00] shadow-[0_0_30px_#CCFF00]' : 'border-[#202020]'
          } overflow-hidden shadow-2xl font-mono-tech`}
        >
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#121212] border-b border-[#202020] flex items-center justify-between text-xs text-[#8A8A8A]">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="text-[#F5F5F5] font-bold">raghunath@portfolio:~ (zsh)</span>
            </div>

            <div className="flex items-center space-x-2 text-[10px]">
              <span className="px-2 py-0.5 rounded bg-[#050505] border border-[#202020] text-[#CCFF00]">
                RAGHUNATH_OS
              </span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-[400px] overflow-y-auto space-y-4 text-xs relative">
            {isGlitching && (
              <div className="absolute inset-0 bg-[#CCFF00]/10 backdrop-blur-[2px] flex items-center justify-center text-[#CCFF00] font-bold text-sm z-20">
                AUTHENTICATING CREDENTIALS...
              </div>
            )}

            {history.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center space-x-2 text-[#CCFF00]">
                  <span>raghunath@portfolio:~$</span>
                  <span className="text-[#F5F5F5]">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}

            {/* Input Line with Blinking Cursor */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(input);
              }}
              className="flex items-center space-x-2 text-[#CCFF00] pt-2"
            >
              <span>raghunath@portfolio:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command (e.g. help, projects, sudo hire-raghunath)..."
                className="flex-1 bg-transparent text-[#F5F5F5] outline-none font-mono-tech caret-[#CCFF00]"
                autoFocus={false}
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
