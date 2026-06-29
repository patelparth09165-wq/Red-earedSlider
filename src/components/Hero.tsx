import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Waves } from 'lucide-react';

const slides = [
  { src: '/images/download.jpg', alt: 'Red-Eared Slider on rocky shore' },
  { src: '/images/download_(1).jpg', alt: 'Red-Eared Slider swimming' },
  { src: '/images/download_(2).jpg', alt: 'Red-Eared Slider on white background' },
  { src: '/images/download_(3).jpg', alt: 'Red-Eared Slider on green plants' },
  { src: '/images/download_(4).jpg', alt: 'Red-Eared Slider on green surface' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Layered overlay for deep aquatic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/80 via-teal-900/60 to-teal-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/50 via-transparent to-ocean-950/50" />
      </div>

      {/* Animated water ripple decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-teal-400/10"
            style={{
              width: 200 + i * 150,
              height: 200 + i * 150,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.04, 0.15] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 1.2, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
        >
          <Waves size={16} className="text-teal-400" />
          <span className="text-teal-300 text-sm font-medium tracking-widest uppercase">Wildlife Awareness</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-3 leading-tight"
        >
          Red-Eared
          <br />
          <span className="text-gradient">Slider</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-display italic text-teal-300 text-xl md:text-2xl mb-6 tracking-wide"
        >
          Trachemys scripta elegans
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="text-teal-100/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          One of the world's most beloved freshwater turtles, instantly recognized by the
          vivid <span className="text-red-400 font-semibold">red stripe</span> behind each eye.
          A graceful ambassador of aquatic ecosystems — thriving in rivers, ponds, and wetlands
          across the globe.
        </motion.p>

        {/* Slide dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-2 mb-10"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-teal-400 w-6' : 'bg-white/30'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="inline-flex flex-col items-center gap-2 text-teal-300/70 hover:text-teal-300 transition-colors group"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ChevronDown size={22} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
