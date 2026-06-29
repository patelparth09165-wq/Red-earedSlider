import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Home, Droplets, Sun, Thermometer, Utensils, Trash2, HeartPulse, Scale } from 'lucide-react';

const careItems = [
  {
    icon: Home,
    title: 'Aquarium Setup',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10 border-teal-500/20',
    points: [
      'Minimum 120-litre tank for one adult; 200+ litres recommended',
      'Provide both deep swimming area and a dry basking platform',
      'Use aquarium-safe substrate (smooth gravel or bare bottom)',
      'Install a secure lid — Red-Eared Sliders can climb',
    ],
  },
  {
    icon: Droplets,
    title: 'Water Quality',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    points: [
      'Maintain water temperature between 24–28°C (75–82°F)',
      'Use a powerful canister or submersible filter rated for 2–3× tank volume',
      'Change 25–30% of water weekly to prevent ammonia buildup',
      'Test water regularly for ammonia, nitrites, and nitrates',
    ],
  },
  {
    icon: Sun,
    title: 'UVB Lighting',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    points: [
      'UVB 5.0 or 10.0 fluorescent bulb is essential for vitamin D3 synthesis',
      'Replace UVB bulb every 6–12 months even if still illuminated',
      'Provide 12–14 hours of light per day to simulate natural photoperiod',
      'Glass blocks UVB — do not place the enclosure behind window glass',
    ],
  },
  {
    icon: Thermometer,
    title: 'Heating',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
    points: [
      'Basking spot temperature: 30–35°C (85–95°F)',
      'Ambient air temperature above water: 24–28°C (75–82°F)',
      'Use a submersible heater with a thermometer guard to maintain water temperature',
      'Never allow water to drop below 18°C to prevent respiratory infections',
    ],
  },
  {
    icon: Utensils,
    title: 'Proper Diet',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
    points: [
      'Juveniles: feed daily with 70% protein, 30% plant matter',
      'Adults: feed every other day with 60% leafy greens, 40% protein',
      'Offer leafy greens: kale, romaine, collard, dandelion',
      'Supplement with calcium powder twice per week',
    ],
  },
  {
    icon: Trash2,
    title: 'Tank Cleaning',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    points: [
      'Spot-clean daily to remove uneaten food and waste',
      'Perform partial water changes weekly (25–30%)',
      'Deep-clean the entire tank and filter monthly',
      'Never use soap or household cleaners — rinse with hot water only',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Health Care',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/20',
    points: [
      'Annual veterinary check-up with a reptile-experienced vet',
      'Watch for signs of illness: shell rot, respiratory wheezing, lethargy, swollen eyes',
      'Provide vitamin A through dark leafy greens to prevent eye infections',
      'Quarantine any new turtle for at least 30 days before introducing to existing animals',
    ],
  },
  {
    icon: Scale,
    title: 'Responsible Ownership',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    points: [
      'Red-Eared Sliders live 20–40+ years — a lifetime commitment',
      'NEVER release captive turtles into local waterways — it is harmful and illegal in many regions',
      'Wash hands before and after handling to prevent salmonella transmission',
      'Research local regulations — ownership is restricted in some countries',
    ],
  },
];

export default function CareGuide() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="care" className="py-24 bg-gradient-to-b from-ocean-950 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{ backgroundImage: 'radial-gradient(circle at 60% 20%, #0ea5e9 0%, transparent 45%)' }}
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
            Care Guide
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            Everything you need to provide a healthy, enriching life for a captive Red-Eared Slider
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {careItems.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 + i * 0.08 }}
                className={`rounded-2xl p-5 border card-hover ${c.bg}`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon size={20} className={c.color} />
                  </div>
                  <h3 className={`font-semibold text-sm ${c.color}`}>{c.title}</h3>
                </div>
                <ul className="space-y-2">
                  {c.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-1.5 text-teal-100/65 text-xs leading-relaxed">
                      <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${c.color.replace('text-', 'bg-')}`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Warning banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-8 glass rounded-2xl p-6 border border-amber-500/30 bg-amber-500/5"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Scale size={20} className="text-amber-400" />
            </div>
            <div>
              <h3 className="font-semibold text-amber-300 mb-2">Important: Salmonella Risk</h3>
              <p className="text-teal-100/70 text-sm leading-relaxed">
                All turtles can carry <em>Salmonella</em> bacteria without appearing ill. Always wash hands thoroughly with soap and water after handling your turtle or cleaning its enclosure. Keep turtles away from food preparation areas and do not allow children under 5 years old to handle turtles without direct adult supervision.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
