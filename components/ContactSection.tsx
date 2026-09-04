'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { profileData } from '@/data/profile';
import { MaskedTextReveal, AnimatedParagraph, BackgroundTypography } from './ScrollTypography';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative border-b border-[#202020] bg-grid-pattern overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="CONTACT" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2 mb-8">
          <span className="font-bold text-sm">09</span>
          <span className="text-[#8A8A8A]">/ CONTACT</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Masked Reveal 3-Line Headline & Links */}
          <div className="lg:col-span-6 space-y-8">
            <MaskedTextReveal
              lines={["LET'S BUILD", 'SOMETHING', 'UNEXPECTED.']}
              className="space-y-1 font-black tracking-tighter uppercase text-4xl sm:text-6xl leading-[0.95]"
              highlightWords={['UNEXPECTED.']}
              highlightClass="text-[#CCFF00] text-shadow-lime"
            />

            <AnimatedParagraph
              text="Open for full-time AI engineering roles, high-impact full-stack contracts, technical event collaborations, or creative engineering projects."
              className="text-sm text-[#8A8A8A] max-w-lg leading-relaxed font-mono-tech"
              delay={0.25}
            />

            <div className="space-y-4 pt-4 font-mono-tech text-xs">
              <a
                href={`mailto:${profileData.socials.email}`}
                className="flex items-center space-x-3 text-[#F5F5F5] hover:text-[#CCFF00] transition-colors p-4 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] hover:shadow-[0_0_15px_rgba(204,255,0,0.2)]"
              >
                <Mail className="w-5 h-5 text-[#CCFF00]" />
                <span className="font-bold">{profileData.socials.email}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8A8A8A] ml-auto" />
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] text-[#F5F5F5] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#CCFF00]" />
                  <span>GITHUB</span>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-3 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] text-[#F5F5F5] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#00E5FF]" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-[#0B0B0B] border border-[#202020] rounded-sm p-8 space-y-6 shadow-2xl">
            <div className="font-mono-tech text-xs text-[#F5F5F5] border-b border-[#202020] pb-4 flex justify-between">
              <span>SEND A DIRECT MESSAGE</span>
              <span className="text-[#8A8A8A]">DIRECT GATEWAY</span>
            </div>

            {status === 'success' ? (
              <div className="p-6 bg-[#CCFF00]/10 border border-[#CCFF00] rounded-sm text-center space-y-3 font-mono-tech text-xs">
                <CheckCircle2 className="w-8 h-8 text-[#CCFF00] mx-auto" />
                <div className="font-bold text-[#F5F5F5] text-sm">MESSAGE DISPATCHED!</div>
                <p className="text-[#8A8A8A]">Thank you for reaching out. Raghunath will respond directly to your email.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-4 py-2 rounded bg-[#050505] border border-[#202020] text-[#CCFF00] hover:bg-[#121212]"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech text-xs">
                {status === 'error' && (
                  <div className="p-3 rounded bg-red-950/40 border border-red-500/50 text-red-400 flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="text-[#8A8A8A]">NAME *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-[#050505] border border-[#202020] focus:border-[#CCFF00] rounded-sm px-4 py-3 text-[#F5F5F5] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#8A8A8A]">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@company.com"
                    className="w-full bg-[#050505] border border-[#202020] focus:border-[#CCFF00] rounded-sm px-4 py-3 text-[#F5F5F5] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#8A8A8A]">MESSAGE / PROJECT DETAILS *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, role, or collaboration inquiry..."
                    className="w-full bg-[#050505] border border-[#202020] focus:border-[#CCFF00] rounded-sm px-4 py-3 text-[#F5F5F5] outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-sm bg-[#CCFF00] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#b8e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all flex items-center justify-center space-x-2"
                >
                  {status === 'loading' ? (
                    <span>DISPATCHING MESSAGE...</span>
                  ) : (
                    <>
                      <span>DISPATCH MESSAGE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
