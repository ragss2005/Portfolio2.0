'use client';

import React, { useState } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { CapabilityMap } from '@/components/CapabilityMap';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { AILab } from '@/components/AILab';
import { FrameSparkSection } from '@/components/FrameSpark/FrameSparkSection';
import { Terminal } from '@/components/Terminal';
import { ImpactDashboard } from '@/components/ImpactDashboard';
import { MusicPlayer } from '@/components/MusicPlayer';
import { HumanSection } from '@/components/HumanSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { PortfolioAI } from '@/components/PortfolioAI';
import { CommandPalette } from '@/components/CommandPalette';
import { ScrollProgress } from '@/components/ScrollProgress';
import { MouseSpotlight } from '@/components/MouseSpotlight';

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#CCFF00] selection:text-black">
      {/* Precision Dual-Element Reticle Cursor */}
      <CustomCursor />

      {/* Ambient Mouse Spotlight */}
      <MouseSpotlight />

      {/* Vertical Section Scroll Tracker */}
      <ScrollProgress />

      {/* Vertical Split OS Boot Loader */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenAIModal={() => setAiModalOpen(true)}
      />

      {/* Multi-Layer Parallax Hero */}
      <Hero />

      {/* Identity & Philosophy */}
      <Introduction />

      {/* 01 / Engineering Capabilities */}
      <CapabilityMap />

      {/* 02 / Selected Work */}
      <ProjectShowcase />

      {/* 03 / AI Research Lab */}
      <AILab />

      {/* 04 / FrameSpark Startup Showcase */}
      <FrameSparkSection />

      {/* Interactive Developer Terminal */}
      <Terminal />

      {/* 05 / Impact & Leadership */}
      <ImpactDashboard />

      {/* 06 / Beyond Code - Music (Vibe Lounge) */}
      <MusicPlayer />

      {/* 07 / The Human */}
      <HumanSection />

      {/* 08 / Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <PortfolioAI isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenAIModal={() => setAiModalOpen(true)}
      />
    </main>
  );
}
