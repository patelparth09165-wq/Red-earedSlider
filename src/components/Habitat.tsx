import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Droplets, Thermometer, Sun, MapPin, Waves } from 'lucide-react';

const habitats = [
  {
    icon: Waves,
    title: 'Freshwater Lakes',
    desc: 'Prefer large, warm, slow-moving lakes with abundant aquatic vegetation and shallow basking areas along the shoreline.',
  },
  {
    icon: Droplets,
    title: 'Rivers & Streams',
    desc: 'Inhabit slow to moderately flowing rivers with muddy or sandy bottoms, submerged logs, and overhanging vegetation.',
  },
  {
    icon: Droplets,
    title: 'Ponds',
    desc: 'Small permanent ponds provide ideal conditions with warm shallow water, algae, aquatic insects, and sunny basking rocks.',
  },
  {
    icon: Waves,
    title: 'Wetlands & Marshes',
    desc: 'Thrive in freshwater marshes and wetlands rich in emergent vegetation, offering food, shelter, and nesting sites.',
  },
  {
    icon: Droplets,
    title: 'Swamps',
    desc: 'Adaptable to still, murky swamp water with dense plant cover — excellent for hiding from predators and foraging.',
  },
  {
    icon: Thermometer,
    title: 'Water Temperature',
    desc: 'Optimal water temperature is 24–28°C (75–82°F). They become sluggish below 10°C and enter brumation in cold climates.',
  },
  {
    icon: Sun,
    title: 'Basking Areas',
    desc: 'Require elevated basking platforms such as logs, rocks, or riverbanks exposed to direct sunlight for thermoregulation and vitamin D synthesis.',
  },
  {
    icon: MapPin,
    title: 'Geographic Distribution',
    desc: 'Native to the Mississippi River Valley, USA, and northeastern Mexico. Now invasive on every continent except Antarctica due to the pet trade.',
  },
];

export default function Habitat() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="habitat" className="py-24 bg-gradient-to-b from-teal-950 to-forest-950/80 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #22c55e 0%, transparent 40%)' }}
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
            Natural Habitat
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            From southern US river valleys to introduced populations worldwide — where the Red-Eared Slider calls home
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80">
              <img
                src="/images/download_(4).jpg"
                alt="Red-Eared Slider in habitat"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-teal-100/80 leading-relaxed text-sm md:text-base">
              The Red-Eared Slider is a highly adaptable freshwater semi-aquatic turtle, found naturally throughout the southeastern and south-central United States — particularly along the Mississippi River drainage system extending through Illinois, Indiana, Ohio, Kansas, Oklahoma, Arkansas, Louisiana, and Texas into northeastern Mexico.
            </p>
            <p className="text-teal-100/80 leading-relaxed text-sm md:text-base">
              These turtles favor warm, still or slow-moving freshwater environments with abundant aquatic vegetation, soft muddy substrates, and reliable basking platforms. They are ectothermic (cold-blooded) and depend on environmental heat sources to regulate body temperature, making sun-exposed basking spots essential to their survival.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {['Warm water', 'Sun exposure', 'Aquatic plants', 'Soft substrate', 'Slow current'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 glass rounded-full text-xs text-teal-300 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {habitats.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.09 }}
                className="glass rounded-xl p-5 card-hover"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-500/20 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-teal-400" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{h.title}</h3>
                <p className="text-teal-100/60 text-xs leading-relaxed">{h.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
