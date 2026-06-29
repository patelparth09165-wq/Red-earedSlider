import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, Zap, Clock, Sun, UtensilsCrossed, Wind, Waves, Eye, Award, Leaf } from 'lucide-react';

const facts = [
  {
    icon: Star,
    number: '01',
    title: 'The Red Stripe Mystery',
    desc: 'The vivid red stripe behind each eye is not actually an ear — turtles have no external ears. The marking simply covers the area where an opening for hearing would be, and scientists believe it may help attract mates.',
    color: 'text-red-400',
    bg: 'from-red-500/15 to-red-900/10 border-red-500/25',
  },
  {
    icon: Waves,
    number: '02',
    title: 'Exceptional Swimmers',
    desc: 'Their powerful, paddle-like hind feet generate impressive thrust through water. They can swim up to 0.7 km/h (0.4 mph) and dive to depths of several metres, able to remain completely submerged for hours when resting.',
    color: 'text-blue-400',
    bg: 'from-blue-500/15 to-blue-900/10 border-blue-500/25',
  },
  {
    icon: Clock,
    number: '03',
    title: 'Living Over 30 Years',
    desc: 'Red-Eared Sliders are one of the longest-lived popular pet reptiles. With proper care, captive individuals routinely surpass 30 years, and some well-documented cases have reached over 40 years of age.',
    color: 'text-teal-400',
    bg: 'from-teal-500/15 to-teal-900/10 border-teal-500/25',
  },
  {
    icon: Sun,
    number: '04',
    title: 'Basking Champions',
    desc: 'Red-Eared Sliders are prolific sunbathers, spending 4–6 hours daily on basking platforms. Basking is critical for thermoregulation, digestion, vitamin D3 production, and killing skin parasites.',
    color: 'text-amber-400',
    bg: 'from-amber-500/15 to-amber-900/10 border-amber-500/25',
  },
  {
    icon: UtensilsCrossed,
    number: '05',
    title: 'Truly Omnivorous',
    desc: 'As juveniles they are primarily carnivorous, aggressively hunting insects and worms. As adults they become predominantly herbivorous, consuming large amounts of aquatic vegetation — a complete dietary shift over their lifetime.',
    color: 'text-green-400',
    bg: 'from-green-500/15 to-green-900/10 border-green-500/25',
  },
  {
    icon: Wind,
    number: '06',
    title: 'Remarkable Sense of Smell',
    desc: 'Red-Eared Sliders have an excellent olfactory sense, able to detect food sources and chemical signals in water from considerable distances. They use scent to find mates, avoid predators, and locate suitable nesting sites.',
    color: 'text-pink-400',
    bg: 'from-pink-500/15 to-pink-900/10 border-pink-500/25',
  },
  {
    icon: Zap,
    number: '07',
    title: 'Underwater Breathing',
    desc: 'During brumation, Red-Eared Sliders absorb dissolved oxygen from water through highly vascularized tissue in their cloaca — a form of cloacal bursae breathing — allowing survival for months without surfacing.',
    color: 'text-cyan-400',
    bg: 'from-cyan-500/15 to-cyan-900/10 border-cyan-500/25',
  },
  {
    icon: Eye,
    number: '08',
    title: 'Excellent Colour Vision',
    desc: 'Turtles are among the most visually capable reptiles. Red-Eared Sliders have four types of cone cells compared to humans\' three, meaning they can perceive colours in the ultraviolet spectrum invisible to the human eye.',
    color: 'text-violet-400',
    bg: 'from-violet-500/15 to-violet-900/10 border-violet-500/25',
  },
  {
    icon: Award,
    number: '09',
    title: 'Most Popular Pet Turtle',
    desc: 'The Red-Eared Slider holds the record as the most traded reptile in history. In the peak years of the US pet trade (1970s–1990s), over 10 million hatchlings were exported annually to homes worldwide.',
    color: 'text-orange-400',
    bg: 'from-orange-500/15 to-orange-900/10 border-orange-500/25',
  },
  {
    icon: Leaf,
    number: '10',
    title: 'Keystone Aquatic Species',
    desc: 'In healthy native ecosystems, Red-Eared Sliders help maintain ecological balance by controlling populations of aquatic vegetation, insects, and small fish, while also providing nutrition for larger predators in the food web.',
    color: 'text-lime-400',
    bg: 'from-lime-500/15 to-lime-900/10 border-lime-500/25',
  },
];

export default function InterestingFacts() {
  const [ref, inView] = useInView(0.05);

  return (
    <section className="py-24 bg-gradient-to-b from-forest-950/80 to-ocean-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0ea5e9 0%, transparent 60%)' }}
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
            10 Fascinating Facts
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            Surprising discoveries about one of the animal kingdom's most captivating freshwater reptiles
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {facts.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.07 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`rounded-2xl p-5 border bg-gradient-to-br card-hover ${f.bg}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon size={20} className={f.color} />
                  </div>
                  <span className={`font-display text-3xl font-bold opacity-20 ${f.color}`}>{f.number}</span>
                </div>
                <h3 className={`font-semibold text-sm mb-2 ${f.color}`}>{f.title}</h3>
                <p className="text-teal-100/60 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
