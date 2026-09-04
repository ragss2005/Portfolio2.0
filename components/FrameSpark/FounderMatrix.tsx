'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { framesparkData } from '@/data/framespark';

export const FounderMatrix: React.FC = () => {
  const relationshipSteps = ['RAGHUNATH', 'ENGINEERING', 'FRAMESPARK', 'PRODUCTS', 'PEOPLE', 'IMPACT'];

  return (
    <div className="space-y-12">
      {/* Built By An Engineer Section */}
      <div className="p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-6 shadow-2xl">
        <div className="space-y-2">
          <div className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
            <span>09 / DISCIPLINE INTEGRATION</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-[#F5F5F5] uppercase">
            BUILT BY AN ENGINEER.
          </h3>
          <p className="text-sm text-[#8A8A8A] font-mono-tech max-w-2xl leading-relaxed">
            {framesparkData.founderQuote} Technology isn&apos;t separate from creativity or business strategy—FrameSpark brings them together under a single engineering framework.
          </p>
        </div>

        {/* Visual Matrix Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono-tech">
          {framesparkData.founderMatrix.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4 rounded-sm bg-[#050505] border border-[#202020] hover:border-[#CCFF00]/60 space-y-2 transition-colors"
            >
              <div className="text-[10px] text-[#525252]">MATRIX 0{idx + 1}</div>
              <div className="font-black text-sm text-[#F5F5F5]">{item.label}</div>
              <div className="text-[10px] text-[#8A8A8A] leading-tight">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Founder Connection */}
      <div className="p-8 rounded-sm bg-[#0B0B0B] border border-[#202020] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 space-y-4 font-mono-tech">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#121212] border border-[#202020] text-xs text-[#CCFF00]">
            <UserCheck className="w-4 h-4" />
            <span>FOUNDER / BUILDER</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#F5F5F5] uppercase leading-tight">
            BUILDING FRAMESPARK <br />
            <span className="text-[#CCFF00]">ONE IDEA AT A TIME.</span>
          </h3>

          <p className="text-xs text-[#8A8A8A] leading-relaxed">
            {framesparkData.founderBio}
          </p>
        </div>

        {/* Dynamic Relationship Pipeline */}
        <div className="lg:col-span-7 space-y-3 font-mono-tech">
          <div className="text-xs text-[#525252]">FOUNDER_VALUE_CHAIN</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {relationshipSteps.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-3 rounded-sm border text-center transition-all ${
                  step === 'FRAMESPARK'
                    ? 'bg-[#CCFF00] text-black font-bold border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                    : 'bg-[#050505] text-[#F5F5F5] border-[#202020]'
                }`}
              >
                <div className="text-[9px] opacity-60">0{idx + 1}</div>
                <div className="text-xs font-bold">{step}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
