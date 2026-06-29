import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Play, Pause, Volume2, VolumeX, Headphones, RotateCcw, SkipBack, SkipForward } from 'lucide-react';

interface AudioCardProps {
  title: string;
  subtitle: string;
  lang: string;
  src: string;
  flag: string;
  accentColor: string;
  delay: number;
}

function AudioCard({ title, subtitle, lang, src, flag, accentColor, delay }: AudioCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [volume, setVolume] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onMeta = () => { setDuration(audio.duration); setLoaded(true); };
    const onTime = () => {
      setCurrent(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const onEnd = () => setPlaying(false);
    const onErr = () => setError(true);
    const onCanPlay = () => setLoaded(true);

    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnd);
    audio.addEventListener('error', onErr);
    audio.addEventListener('canplay', onCanPlay);

    return () => {
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnd);
      audio.removeEventListener('error', onErr);
      audio.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setError(true);
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * audio.duration;
    setProgress(pct * 100);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const v = Number(e.target.value);
    if (audio) audio.volume = v;
    setVolume(v);
    if (v === 0) setMuted(true);
    else setMuted(false);
  };

  const skip = (secs: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + secs));
  };

  const restart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setProgress(0);
    setCurrent(0);
  };

  const fmt = (s: number) => {
    if (!isFinite(s) || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  const barColor = accentColor === 'teal' ? 'from-teal-400 to-cyan-400' : 'from-ocean-400 to-blue-400';
  const iconColor = accentColor === 'teal' ? 'text-teal-400' : 'text-blue-400';
  const bgAccent = accentColor === 'teal' ? 'border-teal-500/30 from-teal-500/10 to-teal-900/10' : 'border-blue-500/30 from-blue-500/10 to-blue-900/10';
  const btnBg = accentColor === 'teal' ? 'bg-teal-500/20 hover:bg-teal-500/35 border-teal-400/30' : 'bg-blue-500/20 hover:bg-blue-500/35 border-blue-400/30';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className={`glass rounded-2xl p-6 border bg-gradient-to-br ${bgAccent}`}
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-14 h-14 rounded-2xl bg-white/5 border flex items-center justify-center text-3xl flex-shrink-0 ${accentColor === 'teal' ? 'border-teal-400/20' : 'border-blue-400/20'}`}>
          {flag}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-semibold text-white truncate">{title}</h3>
          <p className="text-teal-300/70 text-sm truncate">{subtitle}</p>
          <span className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${accentColor === 'teal' ? 'bg-teal-500/20 text-teal-300' : 'bg-blue-500/20 text-blue-300'}`}>
            {lang}
          </span>
        </div>
      </div>

      {/* Animated waveform */}
      <div className="flex items-end gap-0.5 h-10 mb-5 justify-center overflow-hidden">
        {[...Array(32)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-1 rounded-full ${playing ? (accentColor === 'teal' ? 'bg-teal-400' : 'bg-blue-400') : 'bg-white/15'}`}
            animate={playing ? {
              height: [4, 8 + Math.abs(Math.sin(i * 0.6)) * 24, 4],
            } : { height: 4 }}
            transition={playing ? {
              duration: 0.6 + (i % 4) * 0.15,
              repeat: Infinity,
              delay: i * 0.04,
              ease: 'easeInOut',
            } : { duration: 0.35 }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="h-2 bg-white/10 rounded-full mb-2 cursor-pointer group relative"
        onClick={seek}
      >
        <div
          className={`h-full rounded-full bg-gradient-to-r ${barColor} transition-all relative`}
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Time */}
      <div className="flex justify-between text-xs mb-4" style={{ color: 'rgba(153,246,228,0.5)' }}>
        <span>{fmt(current)}</span>
        <span>{loaded ? fmt(duration) : 'Loading...'}</span>
      </div>

      {/* Main controls */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={restart}
          title="Restart"
          className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
        >
          <RotateCcw size={15} className={iconColor} />
        </button>
        <button
          onClick={() => skip(-10)}
          title="Back 10s"
          className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
        >
          <SkipBack size={15} className={iconColor} />
        </button>

        <button
          onClick={togglePlay}
          disabled={error}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all font-semibold text-sm text-white ${btnBg} ${error ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
          {error ? 'File not found' : playing ? 'Pause' : 'Play'}
        </button>

        <button
          onClick={() => skip(10)}
          title="Forward 10s"
          className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
        >
          <SkipForward size={15} className={iconColor} />
        </button>
        <button
          onClick={toggleMute}
          title={muted ? 'Unmute' : 'Mute'}
          className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all"
        >
          {muted ? <VolumeX size={15} className="text-red-400" /> : <Volume2 size={15} className={iconColor} />}
        </button>
      </div>

      {/* Volume slider */}
      <div className="flex items-center gap-3">
        <Volume2 size={14} className={`${iconColor} flex-shrink-0`} />
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={muted ? 0 : volume}
          onChange={changeVolume}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${accentColor === 'teal' ? '#14b8a6' : '#3b82f6'} ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.1) ${(muted ? 0 : volume) * 100}%)`,
          }}
        />
        <span className="text-xs text-teal-400/50 w-7 flex-shrink-0 text-right">
          {Math.round((muted ? 0 : volume) * 100)}%
        </span>
      </div>
    </motion.div>
  );
}

export default function AudioGuide() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 bg-gradient-to-b from-teal-950 to-ocean-950 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
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
          <p className="text-teal-300/70 text-lg max-w-xl mx-auto">
            Learn about the Red-Eared Slider through full audio narration. Use the controls to
            play, pause, seek, and adjust volume.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          <AudioCard
            title="Listen in English"
            subtitle="Complete audio narration in English"
            lang="English"
            src="/images/Red-eared%20Slider.mp3"
            flag="🔊"
            accentColor="teal"
            delay={0.2}
          />
          <AudioCard
            title="हिंदी में सुनें"
            subtitle="हिंदी में पूर्ण ऑडियो गाइड"
            lang="हिंदी"
            src="/images/Red-Eared-Slider.mp3"
            flag="🔊"
            accentColor="blue"
            delay={0.35}
          />
        </div>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 glass rounded-xl p-4 border border-teal-500/15 flex items-start gap-3"
        >
          <Headphones size={18} className="text-teal-400 flex-shrink-0 mt-0.5" />
          <p className="text-teal-300/60 text-xs leading-relaxed">
            <span className="text-teal-300 font-semibold">Tip:</span> Use headphones for the best listening experience. The waveform
            animates during playback. Click anywhere on the progress bar to seek to that position.
            Use the <strong>+10s / -10s</strong> buttons to skip through sections quickly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
