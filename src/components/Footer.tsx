import { motion } from 'framer-motion';
import { Shell, Mail, Globe, BookOpen, Heart, Waves } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/30 flex items-center justify-center">
                <Shell size={20} className="text-teal-300" />
              </div>
              <div>
                <p className="font-display font-semibold text-white leading-tight">Red-Eared Slider</p>
                <p className="text-teal-400 text-xs italic">Trachemys scripta elegans</p>
              </div>
            </div>
            <p className="text-teal-200/65 text-sm leading-relaxed mb-5 max-w-sm">
              A comprehensive wildlife awareness and educational resource dedicated to the Red-Eared Slider — one of the world's most fascinating and widely kept freshwater turtles.
            </p>
            <div className="flex items-center gap-1.5 text-teal-400 text-sm">
              <Heart size={14} className="text-red-400 fill-red-400" />
              <span className="text-teal-300/60">Built for Wildlife Awareness & Conservation Education</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Natural Habitat', href: '#habitat' },
                { label: 'Diet & Feeding', href: '#diet' },
                { label: 'Behaviour', href: '#behaviour' },
                { label: 'Care Guide', href: '#care' },
                { label: 'Conservation', href: '#conservation' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'FAQ', href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-teal-300/60 hover:text-teal-300 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conservation */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-widest">Conservation</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Waves size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-teal-300/60 text-xs leading-relaxed">
                  Protect freshwater ecosystems — they are home to thousands of species that depend on clean, healthy water.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <BookOpen size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-teal-300/60 text-xs leading-relaxed">
                  Learn, share, and educate. Conservation starts with awareness and grows through community action.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                <p className="text-teal-300/60 text-xs leading-relaxed">
                  Never release captive turtles into wild habitats — it causes irreversible ecological harm.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-white text-sm mb-3 uppercase tracking-widest">Contact</h4>
              <div className="flex gap-3">
                <a
                  href="mailto:info@redslider.edu"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg glass border border-teal-400/20 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 transition-colors"
                >
                  <Mail size={16} />
                </a>
                <a
                  href="#hero"
                  aria-label="Website"
                  className="w-9 h-9 rounded-lg glass border border-teal-400/20 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 transition-colors"
                >
                  <Globe size={16} />
                </a>
                <a
                  href="#about"
                  aria-label="Resources"
                  className="w-9 h-9 rounded-lg glass border border-teal-400/20 flex items-center justify-center text-teal-400 hover:bg-teal-500/20 transition-colors"
                >
                  <BookOpen size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass rounded-xl p-5 mb-8 border border-teal-500/15">
          <p className="text-teal-300/60 text-xs leading-relaxed text-center">
            <span className="text-teal-400 font-semibold">Educational Disclaimer:</span> This website is created purely for educational and wildlife awareness purposes. All information presented is researched from peer-reviewed sources, herpetological literature, and reputable wildlife organizations. This resource is intended for academic study, conservation awareness, and responsible pet ownership guidance.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-teal-400/50 text-xs"
          >
            &copy; {year} Red-Eared Slider Wildlife Awareness &amp; Conservation. All rights reserved.
          </motion.p>
          <div className="flex items-center gap-1.5 text-xs text-teal-400/50">
            <span>Built with</span>
            <Heart size={11} className="text-red-400 fill-red-400" />
            <span>for freshwater conservation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
