import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Sun, Moon, Snowflake, Shield, Users, Zap, Activity } from 'lucide-react';

const behaviours = [
  {
    icon: Zap,
    title: 'Swimming Ability',
    desc: 'Powerful, webbed hind feet make Red-Eared Sliders exceptional swimmers. They can dive quickly to escape predators and swim long distances in search of food, mates, and new habitat.',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    icon: Sun,
    title: 'Basking Behaviour',
    desc: 'Thermoregulation through basking is critical. They often stack on top of each other on logs or rocks. Basking increases body temperature, aids digestion, synthesizes vitamin D3, and eliminates parasites.',
    color: 'text-amber-400',
    border: 'border-amber-500/20',
  },
  {
    icon: Activity,
    title: 'Daily Activities',
    desc: 'Most active during daylight hours. Morning hours are devoted to basking and warming up. Midday is for foraging, while afternoons bring more basking. They retreat to deep water at night for safety.',
    color: 'text-teal-400',
    border: 'border-teal-500/20',
  },
  {
    icon: Moon,
    title: 'Seasonal Behaviour',
    desc: 'Activity levels track water temperature closely. In spring and summer, they are highly active and feed vigorously. In autumn, metabolism slows. In cold climates, they become dormant in winter.',
    color: 'text-indigo-400',
    border: 'border-indigo-500/20',
  },
  {
    icon: Snowflake,
    title: 'Brumation (Hibernation)',
    desc: 'In cold climates, Red-Eared Sliders undergo brumation — a reptilian form of hibernation. They bury themselves in mud at the bottom of ponds, slowing their heart rate and surviving on stored fat for months.',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
  },
  {
    icon: Shield,
    title: 'Defensive Behaviour',
    desc: 'Their primary defence is retreating quickly into the water or withdrawing into the shell. When cornered, they may scratch with claws or bite. They are alert and flee at the slightest disturbance.',
    color: 'text-red-400',
    border: 'border-red-500/20',
  },
  {
    icon: Users,
    title: 'Social Interaction',
    desc: 'Generally tolerant of others of the same species, especially when basking. However, competition for prime basking spots can lead to pushing. During breeding season, males actively court females.',
    color: 'text-green-400',
    border: 'border-green-500/20',
  },
];

export default function Behaviour() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="behaviour" className="py-24 bg-gradient-to-b from-teal-950 to-ocean-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, #0284c7 0%, transparent 45%)' }}
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
            Behaviour
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            Understanding the daily rhythms, social patterns, and seasonal strategies of the Red-Eared Slider
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {behaviours.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.09 }}
                  className={`glass rounded-xl p-5 border card-hover ${b.border}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={18} className={b.color} />
                    <h3 className={`font-semibold text-sm ${b.color}`}>{b.title}</h3>
                  </div>
                  <p className="text-teal-100/65 text-xs leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden h-56 shadow-2xl"
            >
              <img src="/images/download_(1).jpg" alt="Red-Eared Slider swimming" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="glass rounded-xl p-5"
            >
              <h3 className="font-display text-lg font-semibold text-teal-300 mb-3">Reproduction</h3>
              <div className="space-y-3 text-sm text-teal-100/70 leading-relaxed">
                <p>Mating season runs from March to July. Males court females with a unique display — extending their long foreclaws and vibrating them against the female's face.</p>
                <p>Females nest between May and August, laying 2–30 eggs per clutch in warm, sandy or loamy soil away from water.</p>
                <p>Eggs incubate for 59–112 days, with nest temperature determining hatchling sex — cooler nests yield more males.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="glass rounded-xl p-5"
            >
              <h3 className="font-semibold text-white text-sm mb-3">Activity Timeline</h3>
              <div className="space-y-2">
                {[
                  { time: 'Dawn', activity: 'Warming & Basking', color: 'text-amber-400' },
                  { time: 'Morning', activity: 'Active Foraging', color: 'text-green-400' },
                  { time: 'Midday', activity: 'Peak Basking', color: 'text-yellow-400' },
                  { time: 'Afternoon', activity: 'Swimming & Resting', color: 'text-blue-400' },
                  { time: 'Night', activity: 'Rest at Waterbed', color: 'text-indigo-400' },
                ].map((t) => (
                  <div key={t.time} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-teal-400/70 text-xs font-medium">{t.time}</span>
                    <span className={`text-xs font-semibold ${t.color}`}>{t.activity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
