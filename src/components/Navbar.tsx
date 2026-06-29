import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shell } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Habitat', href: '#habitat' },
  { label: 'Diet', href: '#diet' },
  { label: 'Behaviour', href: '#behaviour' },
  { label: 'Care', href: '#care' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Conservation', href: '#conservation' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-2xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
            <Shell size={18} className="text-teal-300" />
          </div>
          <span className="font-display font-semibold text-teal-100 text-sm leading-tight hidden sm:block">
            Red-Eared<br />
            <span className="text-teal-400 text-xs font-normal italic">Trachemys scripta elegans</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-teal-200/80 hover:text-white hover:bg-teal-600/20 rounded-lg transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden text-teal-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm text-teal-200 hover:text-white hover:bg-teal-600/20 rounded-lg transition-all"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
