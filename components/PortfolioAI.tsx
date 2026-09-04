'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Bot, User } from 'lucide-react';
import { profileData } from '@/data/profile';
import { projectsData } from '@/data/projects';

interface Message {
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const PortfolioAI: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "Hello! I'm RAGSS AI, grounded directly in Raghunath's engineering portfolio. Ask me about his projects (LunaAlign, FITEX, STUDIN, EV Charging Monitor), tech stack, leadership at YUVA'26, or how to get in touch.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: Message = { sender: 'user', text: query, timestamp: time };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    setTimeout(() => {
      const replyText = generateGroundedAnswer(query);
      const aiMsg: Message = { sender: 'ai', text: replyText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages((prev) => [...prev, aiMsg]);
    }, 400);
  };

  const generateGroundedAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('lunaalign') || q.includes('lunar') || q.includes('image correspondence')) {
      return `LUNAALIGN is Raghunath's multi-modal lunar image correspondence project. It uses deep feature matching (PyTorch & OpenCV) combined with RANSAC homography to achieve sub-pixel spatial alignment for satellite orbiter images across varying light and shadow conditions. Result: 94.8% feature match precision.`;
    }

    if (q.includes('fitex') || q.includes('fitness') || q.includes('workout')) {
      return `FITEX is a full-stack workout ecosystem built with TypeScript, React, Next.js, Node.js, and MongoDB. It tracks workout volume, biometric telemetry, PR trajectory charts, and recovery metrics with sub-100ms dashboard updates.`;
    }

    if (q.includes('studin') || q.includes('student')) {
      return `STUDIN is a collaborative student platform built with React, PostgreSQL, Node.js, and Firebase. It provides peer skill matching for hackathons, real-time study rooms, and campus event hubs.`;
    }

    if (q.includes('ev') || q.includes('charging') || q.includes('iot')) {
      return `The EV Charging Station Monitor is a real-time IoT smart grid dashboard using Python, React, MQTT, and MongoDB to track charger availability, power telemetry, and predictive wait times.`;
    }

    if (q.includes('framespark') || q.includes('startup') || q.includes('founder') || q.includes('agency')) {
      return `FrameSpark is Raghunath's digital-focused startup built around Web Development, Content Creation, and Business Strategy. It combines engineering discipline, AI integration, and digital product design to turn ambitious ideas into digital experiences.`;
    }

    if (q.includes('yuva') || q.includes('leadership') || q.includes('event')) {
      return `Raghunath served as the Technical Lead & Coordinator for YUVA'26, directing technical operations, digital platforms, and student execution across 20+ event tracks.`;
    }

    if (q.includes('vibe') || q.includes('music') || q.includes('creative')) {
      return `Beyond engineering, Raghunath produces electronic music under the 'Vibe Lounge' project, blending heavy basslines, ambient synth composition, and spatial soundscapes.`;
    }

    if (q.includes('skill') || q.includes('stack') || q.includes('technology')) {
      return `Raghunath's core stack includes Python, PyTorch, OpenCV, TensorFlow, C/C++, Java, TypeScript, JavaScript, React, Next.js, Node.js, PostgreSQL, MongoDB, Firebase, Git, and Linux.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire')) {
      return `You can reach Raghunath at ${profileData.socials.email} or connect via GitHub (${profileData.socials.github}) and LinkedIn (${profileData.socials.linkedin}). He is currently available for high-impact AI and full-stack engineering roles.`;
    }

    return `Raghunath N is a Computer Science & Engineering student focused on AI engineering, computer vision, and full-stack software development. He has built 15+ projects (including LunaAlign and FITEX), led technical operations for YUVA'26, and competed in 8+ national hackathons like Smart India Hackathon.`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg h-[600px] max-h-[85vh] bg-[#050505] border border-[#202020] rounded-sm flex flex-col justify-between overflow-hidden shadow-2xl"
        >
          {/* Top Bar */}
          <div className="p-4 border-b border-[#202020] bg-[#0B0B0B] flex items-center justify-between font-mono-tech text-xs">
            <div className="flex items-center space-x-2 text-[#CCFF00]">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold tracking-wider">RAGSS AI</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#8A8A8A] hover:text-[#F5F5F5]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="p-3 bg-[#080808] border-b border-[#202020] flex gap-2 overflow-x-auto no-scrollbar font-mono-tech text-[10px]">
            {["LunaAlign details?", "Top tech skills?", "YUVA'26 role?", "Vibe Lounge music?", "How to contact?"].map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded bg-[#121212] border border-[#202020] hover:border-[#CCFF00] text-[#8A8A8A] hover:text-[#F5F5F5] whitespace-nowrap transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono-tech text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded bg-[#0B0B0B] border border-[#CCFF00] flex items-center justify-center text-[#CCFF00] shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-sm max-w-[82%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#CCFF00] text-black font-semibold'
                      : 'bg-[#0B0B0B] border border-[#202020] text-[#F5F5F5]'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`block text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-black/60' : 'text-[#525252]'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded bg-[#121212] border border-[#202020] flex items-center justify-center text-[#8A8A8A] shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0B0B0B] border-t border-[#202020] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask RAGSS AI about projects, skills, music..."
              className="flex-1 bg-[#050505] border border-[#202020] focus:border-[#CCFF00] rounded-sm px-3 py-2 text-xs font-mono-tech text-[#F5F5F5] outline-none"
            />
            <button
              type="submit"
              className="p-2 rounded bg-[#CCFF00] text-black font-bold hover:bg-[#b8e600] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
