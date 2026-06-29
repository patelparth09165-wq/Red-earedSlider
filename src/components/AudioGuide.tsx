import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Play, Pause, Volume2, VolumeX, Headphones } from 'lucide-react';

interface AudioCardProps {
  title: string;
  subtitle: string;
  lang: string;
  src: string;
  flag: string;
  delay: number;
}

function AudioCard({ title, subtitle, lang, src, flag, delay }: AudioCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const onTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    setProgress(pct);
    setCurrent(audio.currentTime);
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const onEnded = () => setPlaying(false);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audio.currentTime = pct * audio.duration;
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="glass rounded-2xl p-6 border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-ocean-500/10"
    >
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-2xl">
          {flag}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
          <p className="text-teal-300/70 text-sm">{subtitle}</p>
          <span className="inline-block mt-1 px-2 py-0.5 bg-teal-500/20 rounded-full text-teal-400 text-xs font-medium">{lang}</span>
        </div>
      </div>

      {/* Waveform animation */}
      <div className="flex items-end gap-0.5 h-10 mb-5 justify-center">
        {[...Array(28)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 rounded-full ${playing ? 'bg-teal-400' : 'bg-teal-600/40'}`}
            animate={playing ? {
              height: [8, 16 + Math.sin(i * 0.5) * 16, 8],
            } : { height: 4 }}
            transition={playing ? {
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.05,
              ease: 'easeInOut',
            } : { duration: 0.3 }}
            style={{ height: 4 }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="h-2 bg-white/10 rounded-full mb-3 cursor-pointer overflow-hidden"
        onClick={seek}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 to-ocean-400 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Time */}
      <div className="flex justify-between text-xs text-teal-400/60 mb-5">
        <span>{fmt(current)}</span>
        <span>{duration ? fmt(duration) : '--:--'}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/30 transition-all text-white font-medium text-sm"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={toggleMute}
          className="w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-teal-300 transition-all"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>
    </motion.div>
  );
}

export default function AudioGuide() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 bg-gradient-to-b from-teal-950 to-ocean-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #14b8a6 0%, transparent 55%)' }}
      />

      <div className="max-w-4xl mx-auto px-4" ref={ref as React.RefObject<HTMLDivElement>}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-divider" />
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-5">
            <Headphones size={16} className="text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Audio Narration</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Red-Eared Slider Audio Guide
          </h2>
          <p className="text-teal-300/70 text-lg">
            Learn about the Red-Eared Slider through audio narration available in English and Hindi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <AudioCard
            title="Listen in English"
            subtitle="Complete audio guide narrated in English"
            lang="English"
            src="/english.mp3"
            flag="🔊"
            delay={0.2}
          />
          <AudioCard
            title="हिंदी में सुनें"
            subtitle="हिंदी में पूर्ण ऑडियो गाइड"
            lang="हिंदी"
            src="/hindi.mp3"
            flag="🔊"
            delay={0.35}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center text-teal-400/50 text-xs mt-6"
        >
          Audio files must be placed in the public folder as /english.mp3 and /hindi.mp3
        </motion.p>
      </div>
    </section>
  );
}
