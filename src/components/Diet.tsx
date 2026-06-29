import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Leaf, Fish, Bug, Apple, Utensils, Zap } from 'lucide-react';

const foods = [
  { icon: Leaf, label: 'Aquatic Plants', detail: 'Water lettuce, duckweed, water hyacinth, algae, and aquatic grasses form the vegetable foundation of their diet', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
  { icon: Bug, label: 'Insects & Larvae', detail: 'Dragonfly larvae, beetles, water bugs, and crickets provide essential protein, especially for juveniles', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
  { icon: Fish, label: 'Small Fish', detail: 'Slow-moving or injured small fish such as guppies and minnows are eagerly hunted as a high-protein food source', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: Zap, label: 'Worms', detail: 'Earthworms, bloodworms, and aquatic worms are nutritious, easily digestible prey frequently consumed', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
  { icon: Utensils, label: 'Crustaceans', detail: 'Small crayfish, freshwater shrimp, and snails supplement their diet with calcium and protein', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
  { icon: Apple, label: 'Fruits', detail: 'Fallen fruits, berries, and soft fruits near water bodies are consumed opportunistically', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
  { icon: Fish, label: 'Tadpoles & Frogs', detail: 'An opportunistic predator of amphibian larvae and small frogs, especially in nutrient-rich pond environments', color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
  { icon: Utensils, label: 'Commercial Food', detail: 'High-quality turtle pellets are nutritionally balanced for captive individuals and should supplement fresh foods', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
];

export default function Diet() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="diet" className="py-24 bg-gradient-to-b from-forest-950/80 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #15803d 0%, transparent 45%)' }}
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
            Diet & Feeding Habits
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            An adaptable omnivore — the Red-Eared Slider thrives on a varied diet that shifts with age and season
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-5"
          >
            <div className="relative rounded-2xl overflow-hidden h-52 shadow-2xl">
              <img src="/images/download.jpg" alt="Red-Eared Slider foraging" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 via-transparent" />
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="font-display text-lg font-semibold text-teal-300 mb-3">Feeding Behaviour</h3>
              <div className="space-y-3 text-sm text-teal-100/70 leading-relaxed">
                <p>Red-Eared Sliders are opportunistic feeders that must eat <span className="text-teal-300">underwater</span> — their tongues are fixed and cannot generate sufficient suction to swallow on land.</p>
                <p>Juveniles lean heavily toward animal protein to fuel rapid growth, while adults shift toward a more <span className="text-teal-300">plant-based diet</span> as their metabolism slows.</p>
                <p>In the wild, they feed most actively during warm morning hours. In cool weather, feeding frequency decreases significantly.</p>
              </div>
            </div>

            <div className="glass rounded-xl p-5">
              <h3 className="font-semibold text-white text-sm mb-3">Dietary Breakdown (Adults)</h3>
              <div className="space-y-2">
                {[
                  { label: 'Plant Matter', pct: 60, color: 'bg-green-500' },
                  { label: 'Animal Protein', pct: 30, color: 'bg-amber-500' },
                  { label: 'Other', pct: 10, color: 'bg-teal-500' },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-xs text-teal-200/70 mb-1">
                      <span>{b.label}</span>
                      <span>{b.pct}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${b.pct}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                        className={`h-full rounded-full ${b.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {foods.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                  className={`rounded-xl p-4 border card-hover ${f.bg}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className={f.color} />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-sm mb-1 ${f.color}`}>{f.label}</h3>
                      <p className="text-teal-100/60 text-xs leading-relaxed">{f.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
