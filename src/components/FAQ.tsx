import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What type of habitat does the Red-Eared Slider prefer?',
    a: 'Red-Eared Sliders are semi-aquatic and prefer warm, slow-moving freshwater environments such as lakes, ponds, rivers, swamps, and marshes. They require both a deep water area for swimming and a dry, sun-exposed basking platform to regulate their body temperature. Water temperatures between 24–28°C (75–82°F) are ideal.',
  },
  {
    q: 'What do Red-Eared Sliders eat in the wild?',
    a: 'In the wild, Red-Eared Sliders are omnivores with a diet that shifts with age. Juveniles are primarily carnivorous, eating aquatic insects, larvae, worms, small fish, and tadpoles. Adults become increasingly herbivorous, consuming large amounts of aquatic plants, algae, and water vegetation, supplemented with animal protein.',
  },
  {
    q: 'How long do Red-Eared Sliders live?',
    a: 'Red-Eared Sliders are long-lived reptiles. In the wild, they typically live 20–30 years. Captive individuals with proper nutrition, lighting, clean water, and veterinary care regularly live 30–40 years. Some well-documented individuals have exceeded 40 years. Prospective owners must consider this multi-decade commitment before acquiring one.',
  },
  {
    q: 'How should I care for a Red-Eared Slider in captivity?',
    a: 'Captive care requires a spacious aquarium (minimum 120 litres for one adult), a powerful water filter, a UVB 5.0–10.0 bulb, a basking platform with temperatures of 30–35°C, and water maintained at 24–28°C. Diet should include leafy greens, commercial turtle pellets, and occasional protein. Clean the tank weekly and schedule annual vet check-ups with a reptile-experienced veterinarian.',
  },
  {
    q: 'Are Red-Eared Sliders aggressive or social?',
    a: 'Red-Eared Sliders are generally not aggressive toward humans, though they may bite if mishandled or frightened. They are tolerant of other sliders when sharing basking spots, but competition for prime positions can lead to pushing. Males actively court females during breeding season using elaborate claw-vibrating displays. They are best kept with turtles of similar size.',
  },
  {
    q: 'How do Red-Eared Sliders reproduce?',
    a: 'Mating occurs from March to July in water. Males use their elongated front claws to perform a courtship display, vibrating them before the female\'s face. Females leave water to find nesting sites, laying 2–30 oval white eggs in warm sandy or loamy soil. Eggs incubate for 59–112 days depending on temperature. Nest temperature during incubation determines the sex of hatchlings.',
  },
  {
    q: 'Is it legal to own a Red-Eared Slider as a pet?',
    a: 'Laws vary significantly by country and region. In the USA, it is illegal to sell turtles with a shell length under 4 inches due to salmonella risk concerns. In the European Union, import and trade of Red-Eared Sliders is heavily restricted under invasive species regulations. In many Asian and Australian states they are prohibited entirely. Always research your local regulations before acquiring one.',
  },
  {
    q: 'Why should I never release a pet Red-Eared Slider into the wild?',
    a: 'Releasing pet Red-Eared Sliders into local waterways is both harmful and illegal in many jurisdictions. Captive turtles can carry diseases that infect native wildlife. They also compete aggressively with native turtle species for food and basking sites. The Red-Eared Slider is already listed among the world\'s 100 most invasive species due to pet releases. If you can no longer care for your turtle, contact a reptile rescue, herpetological society, or wildlife rehabilitator.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 + index * 0.07 }}
      className="glass rounded-xl border border-white/10 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-white text-sm font-medium leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={18} className="text-teal-400" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 border-t border-white/10">
              <p className="text-teal-100/70 text-sm leading-relaxed pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-ocean-950 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 20%, #0369a1 0%, transparent 45%)' }}
      />

      <div className="max-w-3xl mx-auto px-4" ref={ref as React.RefObject<HTMLDivElement>}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-divider" />
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-5">
            <HelpCircle size={16} className="text-teal-400" />
            <span className="text-teal-300 text-sm font-medium">Common Questions</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-teal-300/70 text-lg">
            Answers to the most common questions about the Red-Eared Slider
          </p>
        </motion.div>

        <div className="space-y-3">
          {inView && faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
