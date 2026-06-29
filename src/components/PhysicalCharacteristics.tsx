import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Ruler, Weight, Palette, Eye, Clock, Users, Shield } from 'lucide-react';

const characteristics = [
  {
    icon: Ruler,
    title: 'Average Length',
    value: '15–30 cm',
    detail: 'Females typically reach 25–30 cm while males remain smaller at 15–20 cm',
    color: 'from-teal-500/20 to-teal-600/10 border-teal-500/30',
    iconColor: 'text-teal-400',
  },
  {
    icon: Weight,
    title: 'Weight',
    value: '0.2–2.7 kg',
    detail: 'Adults weigh between 200 g and 2.7 kg depending on sex and age',
    color: 'from-ocean-500/20 to-ocean-600/10 border-ocean-500/30',
    iconColor: 'text-ocean-400',
  },
  {
    icon: Palette,
    title: 'Shell Color',
    value: 'Olive-Green',
    detail: 'The carapace is olive to dark green with yellow markings; plastron is yellow with black spots',
    color: 'from-forest-500/20 to-forest-600/10 border-forest-500/30',
    iconColor: 'text-forest-400',
  },
  {
    icon: Eye,
    title: 'Red Ear Marking',
    value: 'Vivid Red Stripe',
    detail: 'A bright red or orange-red stripe behind each eye — the species\' most iconic feature',
    color: 'from-red-500/20 to-red-600/10 border-red-500/30',
    iconColor: 'text-red-400',
  },
  {
    icon: Clock,
    title: 'Lifespan',
    value: '20–40+ years',
    detail: 'Wild individuals live 20–30 years; captive specimens often exceed 40 years with proper care',
    color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Users,
    title: 'Gender Differences',
    value: 'Dimorphic',
    detail: 'Males have longer front claws and a longer, thicker tail. Females are significantly larger',
    color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Shield,
    title: 'Shell Structure',
    value: 'Bony Carapace',
    detail: 'The shell consists of 60 fused bones including the spine. It is a living part of the turtle\'s body with nerves and blood vessels',
    color: 'from-earth-500/20 to-earth-600/10 border-earth-500/30',
    iconColor: 'text-earth-400',
  },
];

export default function PhysicalCharacteristics() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 bg-gradient-to-b from-ocean-950 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 45%)' }}
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
            Physical Characteristics
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            Remarkable anatomical features that make the Red-Eared Slider one of nature's most distinctive reptiles
          </p>
        </motion.div>

        {/* Feature image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-2xl"
        >
          <img
            src="/images/download_(2).jpg"
            alt="Red-Eared Slider physical features"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/70 via-transparent to-ocean-950/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/90 font-display text-2xl font-semibold">Anatomy & Appearance</p>
              <p className="text-teal-300/80 text-sm mt-1 italic">Trachemys scripta elegans</p>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {characteristics.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className={`rounded-2xl p-5 border bg-gradient-to-br ${c.color} card-hover`}
              >
                <div className={`w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-4`}>
                  <Icon size={22} className={c.iconColor} />
                </div>
                <h3 className="font-semibold text-white/90 text-sm mb-1">{c.title}</h3>
                <p className={`text-lg font-bold mb-2 ${c.iconColor}`}>{c.value}</p>
                <p className="text-teal-100/60 text-xs leading-relaxed">{c.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
