'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] border-t border-b border-[#202020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 text-xs font-mono-tech text-[#CCFF00] uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
          <span>IDENTITY & PHILOSOPHY</span>
        </div>

        {/* Large Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight max-w-4xl"
        >
          &ldquo;I’m interested in the space where AI, software and human creativity collide.&rdquo;
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#202020]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <div className="font-mono-tech text-xs text-[#CCFF00]">01 // THE DISCIPLINE</div>
            <h3 className="text-lg font-bold text-[#F5F5F5]">AI Systems & Vision</h3>
            <p className="text-sm text-[#8A8A8A] leading-relaxed">
              Engineering deep learning models for satellite image correspondence (LunaAlign), RAG architectures, and predictive IoT telemetry networks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="font-mono-tech text-xs text-[#00E5FF]">02 // THE EXECUTION</div>
            <h3 className="text-lg font-bold text-[#F5F5F5]">Full-Stack Software</h3>
            <p className="text-sm text-[#8A8A8A] leading-relaxed">
              Architecting production applications with Next.js, TypeScript, Python, and scalable databases built for real-time responsiveness.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-3"
          >
            <div className="font-mono-tech text-xs text-[#FFB700]">03 // THE LEADERSHIP</div>
            <h3 className="text-lg font-bold text-[#F5F5F5]">Impact & Creation</h3>
            <p className="text-sm text-[#8A8A8A] leading-relaxed">
              Technical Lead for YUVA&apos;26, 8+ national hackathons, technical workshop mentor, and producer under &quot;Vibe Lounge&quot; music project.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
