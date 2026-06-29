import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Ban, Droplets, Trash2, Eye, HeartHandshake } from 'lucide-react';

const tips = [
  {
    icon: Ban,
    title: 'Never Release Pet Turtles',
    desc: 'Releasing captive Red-Eared Sliders into local waterways is one of the most harmful things a pet owner can do. Captive turtles carry diseases, displace native species, and become invasive. If you can no longer care for your turtle, contact a reptile rescue or herpetological society.',
    color: 'text-red-400',
    bg: 'from-red-500/10 to-red-900/5 border-red-500/20',
  },
  {
    icon: Droplets,
    title: 'Protect Freshwater Habitats',
    desc: 'Support local conservation efforts that protect wetlands, lakes, rivers, and marshes. Oppose unnecessary drainage and development of freshwater ecosystems. Participate in habitat restoration projects and advocate for strong freshwater protection laws in your community.',
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-blue-900/5 border-blue-500/20',
  },
  {
    icon: Trash2,
    title: 'Keep Water Bodies Clean',
    desc: 'Participate in river and lake clean-up events. Dispose of plastic waste, fishing line, and chemicals responsibly — these pollutants directly harm turtles and the entire aquatic food web. Avoid using pesticides and fertilizers near water bodies to prevent harmful runoff.',
    color: 'text-teal-400',
    bg: 'from-teal-500/10 to-teal-900/5 border-teal-500/20',
  },
  {
    icon: Eye,
    title: 'Respect Wildlife',
    desc: 'Observe wild turtles from a safe distance. Never remove turtles from the wild to keep as pets. If you find a turtle crossing a road, help it safely to the side it was heading toward — never place it back where it came from, as it was heading somewhere for a reason.',
    color: 'text-amber-400',
    bg: 'from-amber-500/10 to-amber-900/5 border-amber-500/20',
  },
  {
    icon: HeartHandshake,
    title: 'Support Conservation Efforts',
    desc: 'Donate to or volunteer with organizations protecting freshwater biodiversity. Support legislation against the unsustainable wildlife trade. Educate friends, family, and community members about the importance of responsible pet ownership and freshwater conservation.',
    color: 'text-green-400',
    bg: 'from-green-500/10 to-green-900/5 border-green-500/20',
  },
];

export default function ConservationTips() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 bg-gradient-to-b from-teal-950 to-forest-950/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 80%, #14532d 0%, transparent 50%)' }}
      />

      <div className="max-w-7xl mx-auto px-4" ref={ref as React.RefObject<HTMLDivElement>}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-divider" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Conservation Tips
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            Simple, meaningful actions every individual can take to protect freshwater turtles and their habitats
          </p>
        </motion.div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-10 h-56 shadow-2xl"
        >
          <img src="/images/download_(3).jpg" alt="Conservation awareness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-950/70 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div className="max-w-lg">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Every Action Counts
              </h3>
              <p className="text-teal-200/80 text-sm leading-relaxed">
                The future of freshwater ecosystems depends on informed, compassionate choices made by millions of individuals. Learn, act, and inspire others.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className={`rounded-2xl p-6 border bg-gradient-to-br card-hover ${t.bg}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                  <Icon size={24} className={t.color} />
                </div>
                <h3 className={`font-semibold text-base mb-3 ${t.color}`}>{t.title}</h3>
                <p className="text-teal-100/65 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
