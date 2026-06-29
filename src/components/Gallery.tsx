import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/images/download.jpg', caption: 'Red-Eared Slider on rocky shore', aspect: 'tall' },
  { src: '/images/download_(1).jpg', caption: 'Submerged slider — golden hues', aspect: 'wide' },
  { src: '/images/download_(2).jpg', caption: 'Full body view on white background', aspect: 'wide' },
  { src: '/images/download_(3).jpg', caption: 'Slider amid lush green vegetation', aspect: 'tall' },
  { src: '/images/download_(4).jpg', caption: 'Resting on a green surface', aspect: 'wide' },
];

export default function Gallery() {
  const [ref, inView] = useInView(0.1);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((l) => (l! - 1 + images.length) % images.length);
  const next = () => setLightbox((l) => (l! + 1) % images.length);

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-ocean-950 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #0d9488 0%, transparent 45%)' }}
      />

      <div className="max-w-7xl mx-auto px-4" ref={ref as React.RefObject<HTMLDivElement>}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Photo Gallery
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            A visual journey through the world of the Red-Eared Slider — click any image for a closer look
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl break-inside-avoid"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-teal-950/0 group-hover:bg-teal-950/50 transition-all duration-400 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </motion.div>
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-teal-950/80 via-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={20} />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].caption}
                className="w-full h-full object-contain"
              />
              <div className="bg-teal-950/90 p-4 text-center">
                <p className="text-teal-200 text-sm">{images[lightbox].caption}</p>
                <p className="text-teal-400/60 text-xs mt-1">{lightbox + 1} / {images.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
