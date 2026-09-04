import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Lightbulb, AlertTriangle, Cpu, Layers } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';

interface WorkPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function WorkDetailPage({ params }: WorkPageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#F5F5F5] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back navigation */}
        <Link
          href="/#work"
          className="inline-flex items-center space-x-2 font-mono-tech text-xs text-[#8A8A8A] hover:text-[#CCFF00] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO SELECTED WORK</span>
        </Link>

        {/* Header */}
        <div className="space-y-4 border-b border-[#202020] pb-8">
          <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs text-[#8A8A8A]">
            <span className="px-2.5 py-1 rounded bg-[#0B0B0B] border border-[#202020] text-[#CCFF00]">
              {project.year}
            </span>
            <span>{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase text-[#F5F5F5]">
            {project.title}
          </h1>
          <p className="text-sm font-mono-tech text-[#8A8A8A] tracking-wider uppercase">
            {project.subtitle}
          </p>

          <p className="text-lg text-[#F5F5F5] leading-relaxed pt-2">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 pt-4 font-mono-tech text-xs">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-sm bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00] text-[#F5F5F5] transition-colors"
              >
                <Github className="w-4 h-4 text-[#CCFF00]" />
                <span>VIEW GITHUB REPOSITORY</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8A8A8A]" />
              </a>
            )}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3">
          <div className="font-mono-tech text-xs text-[#525252]">TECHNOLOGIES & FRAMEWORKS</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-sm bg-[#0B0B0B] border border-[#202020] text-xs font-mono-tech text-[#8A8A8A]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Case Study Detailed Breakdown */}
        <div className="space-y-12">
          {/* 01 Problem */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#FFB700]">
              <AlertTriangle className="w-4 h-4" />
              <span>01 / THE PROBLEM</span>
            </div>
            <p className="text-base text-[#8A8A8A] leading-relaxed bg-[#0B0B0B] p-6 rounded-sm border border-[#202020]">
              {project.problem}
            </p>
          </div>

          {/* 02 Idea */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#CCFF00]">
              <Lightbulb className="w-4 h-4" />
              <span>02 / THE ARCHITECTURAL SOLUTION</span>
            </div>
            <p className="text-base text-[#F5F5F5] leading-relaxed bg-[#0B0B0B] p-6 rounded-sm border border-[#202020]">
              {project.solution}
            </p>
          </div>

          {/* 03 System Architecture */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#00E5FF]">
              <Layers className="w-4 h-4" />
              <span>03 / SYSTEM ARCHITECTURE & DATA FLOW</span>
            </div>
            <ArchitectureDiagram steps={project.architectureSteps} projectTitle={project.title} />
          </div>

          {/* 04 AI Pipeline */}
          {project.aiPipeline && (
            <div className="space-y-3">
              <div className="flex items-center space-x-2 font-mono-tech text-xs text-[#00FF88]">
                <Cpu className="w-4 h-4" />
                <span>04 / DEEP LEARNING & AI PIPELINE</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.aiPipeline.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-sm bg-[#0B0B0B] border border-[#202020]">
                    <div className="font-mono-tech text-xs text-[#CCFF00] font-bold mb-1">{item.stage}</div>
                    <div className="text-xs text-[#8A8A8A]">{item.details}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 05 Features */}
          <div className="space-y-3">
            <div className="font-mono-tech text-xs text-[#8A8A8A]">05 / KEY SYSTEM CAPABILITIES</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-[#8A8A8A] bg-[#0B0B0B] p-4 rounded-sm border border-[#202020]">
                  <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 06 & 07 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-2">
              <div className="font-mono-tech text-xs text-[#CCFF00]">06 / VERIFIED RESULT & IMPACT</div>
              <p className="text-sm text-[#F5F5F5] leading-relaxed">{project.result}</p>
            </div>

            <div className="p-6 rounded-sm bg-[#0B0B0B] border border-[#202020] space-y-2">
              <div className="font-mono-tech text-xs text-[#8A8A8A]">07 / LESSONS & TAKEAways</div>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">{project.lessons}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
