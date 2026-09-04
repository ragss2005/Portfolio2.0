'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useReducedMotion,
} from 'framer-motion';

// ==========================================
// 1. SCROLL WORD REVEAL (Word-by-word stagger)
// ==========================================
interface ScrollWordRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div';
  stagger?: number;
  delay?: number;
  scrollLinked?: boolean;
  highlightWords?: string[];
  highlightClass?: string;
}

export const ScrollWordReveal: React.FC<ScrollWordRevealProps> = ({
  text,
  className = '',
  as = 'h2',
  stagger = 0.06,
  delay = 0,
  scrollLinked = false,
  highlightWords = [],
  highlightClass = 'text-[#CCFF00]',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 180,
  });

  const Component = motion[as] || motion.h2;

  if (shouldReduceMotion) {
    return (
      <Component className={className}>
        {words.map((word, i) => {
          const cleanWord = word.replace(/[^a-zA-Z0-9']/g, '');
          const isHighlighted = highlightWords.some(
            (h) => h.toLowerCase() === cleanWord.toLowerCase()
          );
          return (
            <span
              key={i}
              className={`inline-block mr-[0.25em] ${isHighlighted ? highlightClass : ''}`}
            >
              {word}
            </span>
          );
        })}
      </Component>
    );
  }

  if (scrollLinked) {
    return (
      <Component ref={containerRef} className={`flex flex-wrap ${className}`}>
        {words.map((word, index) => {
          const cleanWord = word.replace(/[^a-zA-Z0-9']/g, '');
          const isHighlighted = highlightWords.some(
            (h) => h.toLowerCase() === cleanWord.toLowerCase()
          );

          const stepStart = (index / words.length) * 0.7;
          const stepEnd = Math.min(1, stepStart + 0.3);

          const y = useTransform(smoothProgress, [stepStart, stepEnd], [40, 0]);
          const opacity = useTransform(smoothProgress, [stepStart, stepEnd], [0, 1]);
          const blurVal = useTransform(smoothProgress, [stepStart, stepEnd], [8, 0]);
          const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

          return (
            <span
              key={index}
              className="inline-block overflow-hidden pb-1 my-[-4px] mr-[0.25em]"
            >
              <motion.span
                style={{ y, opacity, filter }}
                className={`inline-block ${isHighlighted ? highlightClass : ''}`}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </Component>
    );
  }

  // Viewport trigger word reveal with stagger
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Component
      ref={containerRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9']/g, '');
        const isHighlighted = highlightWords.some(
          (h) => h.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={index}
            className="inline-block overflow-hidden py-1 my-[-4px] mr-[0.25em]"
          >
            <motion.span
              variants={wordVariants}
              className={`inline-block ${isHighlighted ? highlightClass : ''}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
};

// ==========================================
// 2. MASKED TEXT REVEAL (Lines rising from clip container)
// ==========================================
interface MaskedTextRevealProps {
  lines: string[];
  className?: string;
  stagger?: number;
  delay?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export const MaskedTextReveal: React.FC<MaskedTextRevealProps> = ({
  lines,
  className = '',
  stagger = 0.15,
  delay = 0,
  highlightWords = [],
  highlightClass = 'text-[#CCFF00]',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {lines.map((line, idx) => (
          <div key={idx} className="block">
            {line}
          </div>
        ))}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    hidden: {
      y: '100%',
      opacity: 0,
      filter: 'blur(8px)',
    },
    visible: {
      y: '0%',
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={className}
    >
      {lines.map((line, idx) => {
        const words = line.split(' ');
        return (
          <div key={idx} className="overflow-hidden py-1 my-[-4px]">
            <motion.div variants={lineVariants} className="block">
              {words.map((word, wIdx) => {
                const cleanWord = word.replace(/[^a-zA-Z0-9']/g, '');
                const isHighlighted = highlightWords.some(
                  (h) => h.toLowerCase() === cleanWord.toLowerCase()
                );
                return (
                  <span
                    key={wIdx}
                    className={`inline-block mr-[0.25em] ${isHighlighted ? highlightClass : ''}`}
                  >
                    {word}
                  </span>
                );
              })}
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
};

// ==========================================
// 3. ANIMATED PARAGRAPH (Fast line / group slide-up)
// ==========================================
interface AnimatedParagraphProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  text,
  className = '',
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <p className={className}>{text}</p>;
  }

  // Split into sentences or lines
  const sentences = text.match(/[^.!?]+[.!?]+|\s*[^.!?]+$/g) || [text];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const sentenceVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants}
      className={className}
    >
      {sentences.map((sentence, idx) => (
        <motion.span key={idx} variants={sentenceVariants} className="inline">
          {sentence}{' '}
        </motion.span>
      ))}
    </motion.p>
  );
};

// ==========================================
// 4. BACKGROUND TYPOGRAPHY (Parallax Depth Typography)
// ==========================================
interface BackgroundTypographyProps {
  text: string;
  className?: string;
}

export const BackgroundTypography: React.FC<BackgroundTypographyProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.01, 0.04, 0.01]);
  const smoothY = useSpring(y, { damping: 25, stiffness: 120 });

  if (shouldReduceMotion) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0 ${className}`}
      >
        <span className="text-[12vw] font-black tracking-tighter uppercase text-white/5 opacity-3 text-stroke">
          {text}
        </span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      <motion.span
        style={{ y: smoothY, opacity }}
        className="text-[14vw] sm:text-[16vw] font-black tracking-tighter uppercase text-white/10 font-mono-tech whitespace-nowrap blur-[1px]"
      >
        {text}
      </motion.span>
    </div>
  );
};

// ==========================================
// 5. FRAMESPARK SPECIAL HEADING EFFECT
// ==========================================
export const FrameSparkSpecialHeading: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.2'],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 28, stiffness: 160 });

  const word1Y = useTransform(smoothProgress, [0, 0.3], [40, 0]);
  const word1Opacity = useTransform(smoothProgress, [0, 0.3], [0, 1]);

  const word2Y = useTransform(smoothProgress, [0.2, 0.5], [40, 0]);
  const word2Opacity = useTransform(smoothProgress, [0.2, 0.5], [0, 1]);

  const word3Y = useTransform(smoothProgress, [0.4, 0.7], [40, 0]);
  const word3Opacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);

  const glowX = useTransform(smoothProgress, [0.6, 1], ['-100%', '200%']);

  if (shouldReduceMotion) {
    return (
      <div className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-[#F5F5F5] leading-none pt-2">
        <span className="inline-block mr-3">BUILDING</span>
        <span className="inline-block mr-3 text-[#CCFF00]">BEYOND</span>
        <span className="inline-block text-[#F5F5F5]">CODE.</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative text-4xl sm:text-6xl font-black tracking-tighter uppercase text-[#F5F5F5] leading-none pt-2 overflow-hidden"
    >
      {/* Horizontal Traveling Accent Glow */}
      <motion.div
        style={{ x: glowX }}
        className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent skew-x-12 pointer-events-none z-10 blur-sm"
      />

      <div className="flex flex-wrap items-center">
        {/* Word 1: BUILDING */}
        <span className="inline-block overflow-hidden mr-3 py-1">
          <motion.span
            style={{ y: word1Y, opacity: word1Opacity }}
            className="inline-block text-[#F5F5F5]"
          >
            BUILDING
          </motion.span>
        </span>

        {/* Word 2: BEYOND */}
        <span className="inline-block overflow-hidden mr-3 py-1">
          <motion.span
            style={{ y: word2Y, opacity: word2Opacity }}
            className="inline-block text-[#CCFF00]"
          >
            BEYOND
          </motion.span>
        </span>

        {/* Word 3: CODE. */}
        <span className="inline-block overflow-hidden py-1">
          <motion.span
            style={{ y: word3Y, opacity: word3Opacity }}
            className="inline-block text-[#F5F5F5]"
          >
            CODE.
          </motion.span>
        </span>
      </div>
    </div>
  );
};

// ==========================================
// 6. HERO SCROLL TYPOGRAPHY (I BUILD INTELLIGENT THINGS.)
// ==========================================
export const HeroScrollTypography: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ['-0.05em', '-0.02em']);

  if (shouldReduceMotion) {
    return (
      <div className="space-y-1 overflow-hidden">
        <div className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-[#F5F5F5] uppercase leading-[0.95]">
          I BUILD
        </div>
        <div className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5] to-[#CCFF00] uppercase leading-[0.95]">
          INTELLIGENT
        </div>
        <div className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-[#F5F5F5] uppercase leading-[0.95]">
          THINGS.
        </div>
      </div>
    );
  }

  return (
    <motion.div ref={heroRef} style={{ y: textY, scale }} className="space-y-1 overflow-hidden">
      {/* Line 1 */}
      <div className="overflow-hidden py-1">
        <motion.div
          initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ letterSpacing }}
          className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-[#F5F5F5] uppercase leading-[0.95]"
        >
          I BUILD
        </motion.div>
      </div>

      {/* Line 2 */}
      <div className="overflow-hidden py-1">
        <motion.div
          initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ letterSpacing }}
          className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5] to-[#CCFF00] uppercase leading-[0.95]"
        >
          INTELLIGENT
        </motion.div>
      </div>

      {/* Line 3 */}
      <div className="overflow-hidden py-1">
        <motion.div
          initial={{ y: '100%', opacity: 0, filter: 'blur(12px)', scale: 0.95 }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ letterSpacing }}
          className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-[#F5F5F5] uppercase leading-[0.95]"
        >
          THINGS.
        </motion.div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 7. KINETIC SCROLL TEXT (Scroll Velocity Shifts)
// ==========================================
export const KineticScrollText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 30, stiffness: 200 });

  const skewX = useTransform(smoothVelocity, [-2000, 2000], [-3, 3]);
  const x = useTransform(smoothVelocity, [-2000, 2000], [-8, 8]);

  return (
    <motion.div style={{ skewX, x }} className={className}>
      {children}
    </motion.div>
  );
};
