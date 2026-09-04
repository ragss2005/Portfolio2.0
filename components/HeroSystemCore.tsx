'use client';

import React, { useEffect, useRef } from 'react';

interface Node {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

export const HeroSystemCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const width = canvas.width;
    const height = canvas.height;

    const centerX = width / 2;
    const centerY = height / 2;

    const nodes: Node[] = [
      { id: 'core', label: 'RAGHUNATH', sub: 'SYSTEM CORE', x: centerX, y: centerY, baseX: centerX, baseY: centerY, radius: 34, color: '#CCFF00' },
      { id: 'cv', label: 'COMPUTER VISION', sub: 'OpenCV / PyTorch', x: centerX, y: centerY - 145, baseX: centerX, baseY: centerY - 145, radius: 22, color: '#00FF88' },
      { id: 'llm', label: 'LLM SYSTEMS', sub: 'Agents & Prompt AI', x: centerX - 185, y: centerY, baseX: centerX - 185, baseY: centerY, radius: 22, color: '#00E5FF' },
      { id: 'rag', label: 'RAG ARCHITECTURE', sub: 'Vector DBs / Embeddings', x: centerX + 185, y: centerY, baseX: centerX + 185, baseY: centerY, radius: 22, color: '#FFB700' },
      { id: 'fullstack', label: 'FULL STACK', sub: 'Next.js / Node / Cloud', x: centerX, y: centerY + 145, baseX: centerX, baseY: centerY + 145, radius: 22, color: '#CCFF00' },
    ];

    // Background floating energy particles
    const bgParticles: Particle[] = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.5 ? '#CCFF00' : '#00E5FF',
      size: Math.random() * 2 + 1,
    }));

    let mouse = { x: centerX, y: centerY, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Active data beam pulses
    const pulses = [
      { from: 1, to: 0, progress: 0, speed: 0.009 },
      { from: 2, to: 0, progress: 0.35, speed: 0.008 },
      { from: 3, to: 0, progress: 0.7, speed: 0.01 },
      { from: 4, to: 0, progress: 0.25, speed: 0.0075 },
    ];

    let angle = 0;
    let orbitAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.018;
      orbitAngle += 0.01;

      const currentCenterX = canvas.width / 2;
      const currentCenterY = canvas.height / 2;
      const scale = Math.min(canvas.width / 600, canvas.height / 450, 1);

      nodes[0].baseX = currentCenterX;
      nodes[0].baseY = currentCenterY;
      nodes[1].baseX = currentCenterX;
      nodes[1].baseY = currentCenterY - 145 * scale;
      nodes[2].baseX = currentCenterX - 185 * scale;
      nodes[2].baseY = currentCenterY;
      nodes[3].baseX = currentCenterX + 185 * scale;
      nodes[3].baseY = currentCenterY;
      nodes[4].baseX = currentCenterX;
      nodes[4].baseY = currentCenterY + 145 * scale;

      // Update background particles
      bgParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Update node magnetic position
      nodes.forEach((node, idx) => {
        const floatX = Math.sin(angle + idx) * 5;
        const floatY = Math.cos(angle + idx * 1.4) * 5;

        if (mouse.active) {
          const dx = mouse.x - node.baseX;
          const dy = mouse.y - node.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 20;
            node.x = node.baseX + (dx / dist) * force + floatX;
            node.y = node.baseY + (dy / dist) * force + floatY;
          } else {
            node.x = node.baseX + floatX;
            node.y = node.baseY + floatY;
          }
        } else {
          node.x = node.baseX + floatX;
          node.y = node.baseY + floatY;
        }
      });

      const coreNode = nodes[0];

      // Draw Rotating Cybernetic Orbital Rings around Core
      ctx.save();
      ctx.translate(coreNode.x, coreNode.y);
      ctx.rotate(orbitAngle);

      ctx.beginPath();
      ctx.ellipse(0, 0, 75 * scale, 30 * scale, Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 6]);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, 85 * scale, 35 * scale, -Math.PI / 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.restore();
      ctx.setLineDash([]);

      // Draw vector connecting lines with glowing gradients
      nodes.slice(1).forEach((node) => {
        const grad = ctx.createLinearGradient(coreNode.x, coreNode.y, node.x, node.y);
        grad.addColorStop(0, '#CCFF00');
        grad.addColorStop(1, node.color);

        ctx.beginPath();
        ctx.moveTo(coreNode.x, coreNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = grad;
        ctx.globalAlpha = 0.25;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // Draw active data pulses
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const targetNode = nodes[p.from];
        const px = targetNode.x + (coreNode.x - targetNode.x) * p.progress;
        const py = targetNode.y + (coreNode.y - targetNode.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = targetNode.color;
        ctx.shadowColor = targetNode.color;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render Nodes with tech rings
      nodes.forEach((node) => {
        // Outer aura glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * scale + 14, 0, Math.PI * 2);
        ctx.fillStyle = node.id === 'core' ? 'rgba(204, 255, 0, 0.08)' : 'rgba(255, 255, 255, 0.04)';
        ctx.fill();

        // Base Circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = '#0B0B0B';
        ctx.strokeStyle = node.color;
        ctx.lineWidth = node.id === 'core' ? 3 : 1.8;
        ctx.stroke();
        ctx.fill();

        // Pulsing Core Center
        if (node.id === 'core') {
          const pulseR = (Math.sin(angle * 2.5) + 1) * 7 + 10;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseR, 0, Math.PI * 2);
          ctx.fillStyle = '#CCFF00';
          ctx.shadowColor = '#CCFF00';
          ctx.shadowBlur = 16;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Labels
        ctx.font = node.id === 'core' ? 'bold 12px JetBrains Mono' : '10px JetBrains Mono';
        ctx.fillStyle = '#F5F5F5';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.x, node.y + node.radius * scale + 18);

        ctx.font = '9px JetBrains Mono';
        ctx.fillStyle = '#8A8A8A';
        ctx.fillText(node.sub, node.x, node.y + node.radius * scale + 30);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[460px] sm:h-[520px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
    </div>
  );
};
