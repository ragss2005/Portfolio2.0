export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  audioSrc: string;
  duration?: string;
  genre: string;
  bpm: number;
  description: string;
  waveformPattern: number[];
}

export const musicData: {
  headline: string;
  tagline: string;
  bio: string;
  currentTrack: Track;
} = {
  headline: "CODE ISN'T THE ONLY THING I CREATE.",
  tagline: "Exploring spatial soundscapes, rhythmic synth composition, and music production.",
  bio: "Beyond software architecture and machine learning, I produce electronic music under 'Vibe Lounge'—blending heavy basslines, dark ambient soundscapes, and cinematic arrangement.",
  currentTrack: {
    id: "vibe-lounge-intro",
    title: "Vibe Lounge — Intro",
    artist: "Raghunath N",
    album: "Synth & Frequency Experiments",
    audioSrc: "/audio/intro.mp3",
    genre: "Dark Synth / Ambient Cyberpunk",
    bpm: 124,
    description: "An experimental synthesis track combining analog filter sweeps, rhythmic pulse waves, and dark atmosphere.",
    waveformPattern: [
      0.3, 0.45, 0.6, 0.35, 0.8, 0.95, 0.7, 0.4, 0.6, 0.85, 1.0, 0.75, 0.5, 0.3,
      0.65, 0.9, 0.8, 0.4, 0.7, 0.95, 0.6, 0.3, 0.5, 0.85, 0.7, 0.4, 0.9, 1.0,
      0.75, 0.5, 0.6, 0.8, 0.9, 0.45, 0.35, 0.65, 0.85, 0.7, 0.5, 0.4, 0.6
    ]
  }
};
