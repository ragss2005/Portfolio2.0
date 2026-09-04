'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Fast inner dot spring
  const dotSpringConfig = { damping: 32, stiffness: 480, mass: 0.15 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Outer reticle spring
  const reticleSpringConfig = { damping: 24, stiffness: 260, mass: 0.4 };
  const reticleX = useSpring(mouseX, reticleSpringConfig);
  const reticleY = useSpring(mouseY, reticleSpringConfig);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else {
        const isInteractive = target?.closest('button, a, input, textarea, [role="button"], canvas');
        if (isInteractive) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Cybernetic Reticle Bracket Symbol */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center font-mono-tech text-[10px] tracking-widest text-[#CCFF00]"
        style={{
          x: reticleX,
          y: reticleY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorText ? 88 : isHovered ? 44 : 26,
          height: cursorText ? 88 : isHovered ? 44 : 26,
          scale: isMouseDown ? 0.8 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 280 }}
      >
        {/* Reticle Corner Brackets symbol */}
        <div className="absolute inset-0 flex flex-col justify-between p-0.5 pointer-events-none">
          <div className="flex justify-between">
            <span className="w-2 h-2 border-t-2 border-l-2 border-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span className="w-2 h-2 border-t-2 border-r-2 border-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
          </div>
          <div className="flex justify-between">
            <span className="w-2 h-2 border-b-2 border-l-2 border-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
            <span className="w-2 h-2 border-b-2 border-r-2 border-[#CCFF00] shadow-[0_0_8px_#CCFF00]" />
          </div>
        </div>

        {/* Text Badge inside reticle when hovering elements */}
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, rotate: isHovered ? -45 : 0 }}
            className="text-center font-bold uppercase leading-tight text-black bg-[#CCFF00] px-2.5 py-1 rounded-xs shadow-[0_0_12px_#CCFF00] tracking-wider z-10"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Precision Crosshair Center Symbol */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center text-[#CCFF00]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: cursorText ? 0 : 1,
          scale: isMouseDown ? 1.5 : isHovered ? 1.2 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450 }}
      >
        {/* Diamond Reticle Crosshair Core */}
        <div className="w-2 h-2 rounded-xs bg-[#CCFF00] rotate-45 shadow-[0_0_10px_#CCFF00]" />
      </motion.div>
    </>
  );
};
