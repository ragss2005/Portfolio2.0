'use client';

import React, { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  autostart?: boolean;
}

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const TextScramble: React.FC<TextScrambleProps> = ({ text, className = '', autostart = true }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length * 2.5;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 2.5) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration += 1;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 28);
  };

  useEffect(() => {
    if (autostart) {
      scramble();
    }
  }, []);

  return (
    <span onMouseEnter={scramble} className={`inline-block cursor-default ${className}`}>
      {displayText}
    </span>
  );
};
