import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const facts = [
  { label: 'Scientific Name', value: 'Trachemys scripta elegans', accent: true },
  { label: 'Common Name', value: 'Red-Eared Slider' },
  { label: 'Kingdom', value: 'Animalia' },
  { label: 'Phylum', value: 'Chordata' },
  { label: 'Class', value: 'Reptilia' },
  { label: 'Order', value: 'Testudines' },
  { label: 'Family', value: 'Emydidae' },
  { label: 'Diet', value: 'Omnivore' },
  { label: 'Habitat', value: 'Freshwater lakes, rivers, ponds & wetlands' },
  { label: 'Lifespan', value: '20–40+ years' },
  { label: 'Weight', value: '200 g – 2.7 kg' },
  { label: 'Conservation Status', value: 'Least Concern (IUCN)', accent: true },
];

export default function QuickFacts() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 bg-gradient-to-b from-teal-950 to-ocean-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #0f766e 0%, transparent 40%)' }}
      />

      <div className="max-w-5xl mx-auto px-4" ref={ref as React.RefObject<HTMLDivElement>}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Quick Reference Facts
          </h2>
          <p className="text-teal-300/70 text-lg">
            Essential data at a glance for the Red-Eared Slider
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.05 + i * 0.06 }}
              className={`rounded-xl p-5 border card-hover ${
                f.accent
                  ? 'glass-teal border-teal-400/30'
                  : 'glass border-white/10'
              }`}
            >
              <p className="text-teal-400/70 text-xs font-medium uppercase tracking-widest mb-1.5">{f.label}</p>
              <p className={`font-semibold text-sm leading-snug ${f.accent ? 'text-teal-300' : 'text-white'}`}>{f.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
