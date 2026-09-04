'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Disc } from 'lucide-react';
import { musicData } from '@/data/music';
import { ScrollWordReveal, AnimatedParagraph, BackgroundTypography } from './ScrollTypography';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(180);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error('Audio playback error:', err);
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || duration === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const newTime = pct * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="creative" className="py-24 bg-[#050505] relative border-b border-[#202020] overflow-hidden">
      {/* Background Depth Parallax Typography */}
      <BackgroundTypography text="CREATIVE" />

      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={musicData.currentTrack.audioSrc}
        preload="metadata"
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Entrance */}
        <div className="flex flex-col space-y-2 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono-tech text-xs text-[#CCFF00] tracking-widest uppercase flex items-center space-x-2"
          >
            <span className="font-bold text-sm">07</span>
            <span className="text-[#8A8A8A]">/ CREATIVE</span>
          </motion.div>

          <ScrollWordReveal
            text="BEYOND CODE."
            className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F5F5] uppercase"
            highlightWords={['CODE.']}
          />

          <AnimatedParagraph
            text={musicData.tagline}
            className="text-sm text-[#8A8A8A] max-w-2xl font-mono-tech"
            delay={0.2}
          />
        </div>

        {/* Creative Music Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B0B0B] border border-[#202020] hover:border-[#CCFF00]/40 rounded-sm p-6 sm:p-10 relative overflow-hidden shadow-2xl transition-colors"
        >
          <div className="absolute top-0 right-0 p-3 text-[10px] font-mono-tech text-[#525252]">
            CREATIVE_STUDIO // PROD. RAGHUNATH
          </div>

          {/* Left info column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#121212] border border-[#202020] text-xs font-mono-tech text-[#CCFF00]">
              <Disc className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
              <span>PROJECT: Vibe Lounge</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#F5F5F5] uppercase">
              {musicData.currentTrack.title}
            </h3>

            <p className="text-xs font-mono-tech text-[#8A8A8A]">
              {musicData.currentTrack.genre} • {musicData.currentTrack.bpm} BPM
            </p>

            <p className="text-sm text-[#8A8A8A] leading-relaxed">
              {musicData.bio}
            </p>
          </div>

          {/* Right interactive player column */}
          <div className="lg:col-span-7 space-y-6 bg-[#050505] p-6 rounded-sm border border-[#202020]">
            {/* Dynamic Waveform Visualizer */}
            <div className="h-20 flex items-center justify-between gap-1 px-2 py-3 bg-[#0B0B0B] rounded border border-[#202020]">
              {musicData.currentTrack.waveformPattern.map((amp, idx) => {
                const isActive = duration > 0 && (idx / musicData.currentTrack.waveformPattern.length) <= (currentTime / duration);

                return (
                  <motion.div
                    key={idx}
                    animate={
                      isPlaying
                        ? { height: [`${amp * 35}%`, `${Math.max(20, amp * 90)}%`, `${amp * 35}%`] }
                        : { height: `${amp * 50}%` }
                    }
                    transition={{ duration: 0.5, repeat: Infinity, delay: (idx % 5) * 0.08 }}
                    className={`w-1 rounded-full transition-colors ${
                      isActive ? 'bg-[#CCFF00] shadow-[0_0_8px_#CCFF00]' : 'bg-[#202020]'
                    }`}
                  />
                );
              })}
            </div>

            {/* Time & Progress Bar */}
            <div className="space-y-2 font-mono-tech text-xs">
              <div className="flex justify-between text-[#8A8A8A]">
                <span>{formatTime(currentTime)}</span>
                <span className="text-[#CCFF00] font-bold tracking-wider">
                  {isPlaying ? 'PLAYING INTRO.MP3' : 'PAUSED'}
                </span>
                <span>{formatTime(duration)}</span>
              </div>

              <div
                onClick={handleSeek}
                className="h-1.5 w-full bg-[#202020] rounded-full overflow-hidden cursor-pointer"
              >
                <div
                  className="h-full bg-[#CCFF00] transition-all duration-150 shadow-[0_0_10px_#CCFF00]"
                  style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-between font-mono-tech">
              <button
                onClick={toggleMute}
                className="p-2 rounded bg-[#0B0B0B] border border-[#202020] text-[#8A8A8A] hover:text-[#F5F5F5]"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#CCFF00]" />}
              </button>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    if (audioRef.current) audioRef.current.currentTime = Math.max(0, currentTime - 10);
                  }}
                  className="p-2 rounded bg-[#0B0B0B] border border-[#202020] text-[#8A8A8A] hover:text-[#F5F5F5]"
                >
                  <SkipBack className="w-4 h-4" />
                </button>

                {/* Morphing Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  data-cursor={isPlaying ? "PAUSE" : "PLAY"}
                  className="w-12 h-12 rounded-full bg-[#CCFF00] text-black flex items-center justify-center font-bold hover:bg-[#b8e600] hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all"
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black ml-0.5" />}
                </button>

                <button
                  onClick={() => {
                    if (audioRef.current) audioRef.current.currentTime = Math.min(duration, currentTime + 10);
                  }}
                  className="p-2 rounded bg-[#0B0B0B] border border-[#202020] text-[#8A8A8A] hover:text-[#F5F5F5]"
                >
                  <SkipForward className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[10px] text-[#525252] hidden sm:block">
                AUDIO_ENGINE // MP3
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
