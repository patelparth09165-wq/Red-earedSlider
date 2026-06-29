import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { TreePine, AlertTriangle, Globe, Heart, ShieldCheck, Recycle } from 'lucide-react';

export default function Conservation() {
  const [ref, inView] = useInView(0.1);

  const threats = [
    { label: 'Habitat Destruction', detail: 'Drainage of wetlands, dam construction, and urban development eliminate critical freshwater habitats' },
    { label: 'Water Pollution', detail: 'Agricultural runoff, plastic waste, and chemical pollutants degrade water quality and poison food sources' },
    { label: 'Illegal Pet Trade', detail: 'Mass collection of wild turtles for the global pet trade has severely reduced native populations in some regions' },
    { label: 'Invasive Spread', detail: 'Released pets have established invasive populations across Europe, Asia, and Africa, competing with native species' },
    { label: 'Road Mortality', detail: 'Females crossing roads to find nesting sites face high mortality risk from vehicle traffic' },
    { label: 'Predation of Nests', detail: 'Raccoons, foxes, and corvids frequently raid turtle nests, with nest success often below 30%' },
  ];

  const roles = [
    { icon: Recycle, title: 'Nutrient Cycling', desc: 'Feed on decaying organic matter and plant material, accelerating decomposition and nutrient return to the water column' },
    { icon: Globe, title: 'Seed Dispersal', desc: 'Seeds from consumed fruits pass through their digestive system intact, aiding aquatic and riparian plant dispersal' },
    { icon: TreePine, title: 'Food Web', desc: 'Serve as prey for herons, otters, alligators, and large fish while simultaneously being predators of insects and small fish' },
    { icon: ShieldCheck, title: 'Biodiversity Indicator', desc: 'Healthy Red-Eared Slider populations often indicate a balanced, productive freshwater ecosystem with clean water and abundant food' },
  ];

  return (
    <section id="conservation" className="py-24 bg-gradient-to-b from-teal-950 to-forest-950/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{ backgroundImage: 'radial-gradient(circle at 15% 85%, #166534 0%, transparent 45%)' }}
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
            Conservation & Ecological Importance
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            Understanding the ecological role and conservation challenges of one of the world's most widespread reptiles
          </p>
        </motion.div>

        {/* Ecosystem Role */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl font-semibold text-teal-300 mb-6 flex items-center gap-2"
          >
            <TreePine size={22} />
            Role in Freshwater Ecosystems
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="glass rounded-xl p-5 card-hover"
                >
                  <Icon size={22} className="text-forest-400 mb-3" />
                  <h4 className="font-semibold text-white text-sm mb-2">{r.title}</h4>
                  <p className="text-teal-100/60 text-xs leading-relaxed">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Threats */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-semibold text-red-400 mb-5 flex items-center gap-2">
              <AlertTriangle size={22} />
              Major Threats
            </h3>
            <div className="space-y-3">
              {threats.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                  className="glass rounded-xl p-4 border border-red-500/15"
                >
                  <h4 className="font-semibold text-red-300 text-sm mb-1">{t.label}</h4>
                  <p className="text-teal-100/65 text-xs leading-relaxed">{t.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden h-56 shadow-2xl">
              <img src="/images/download_(3).jpg" alt="Red-Eared Slider in natural setting" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent" />
            </div>

            <div className="glass rounded-2xl p-6 border border-green-500/20">
              <h3 className="font-display text-xl font-semibold text-green-300 mb-3 flex items-center gap-2">
                <Heart size={18} />
                Conservation Status
              </h3>
              <p className="text-teal-100/75 text-sm leading-relaxed mb-4">
                The Red-Eared Slider is listed as <span className="text-green-400 font-semibold">Least Concern</span> on the IUCN Red List due to its large global population. However, it is recognized by the IUCN as one of the world's <span className="text-red-400 font-semibold">100 most invasive species</span> in regions outside its native range.
              </p>
              <p className="text-teal-100/75 text-sm leading-relaxed">
                In its native range, localized populations face pressure from habitat loss, pollution, and over-collection. Responsible pet ownership and strict trade regulations are essential to prevent further ecological disruption in non-native regions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
