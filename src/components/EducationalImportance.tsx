import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Droplets, Globe, Heart, TreePine } from 'lucide-react';

const topics = [
  {
    icon: GraduationCap,
    title: 'Importance for Students',
    desc: 'The Red-Eared Slider is an ideal subject for biology and zoology students. Studying its anatomy, physiology, and behavior provides hands-on exposure to reptile biology, ectothermy, thermoregulation, and taxonomic classification — foundational concepts across life sciences.',
    color: 'text-amber-400',
    border: 'border-amber-500/20',
  },
  {
    icon: Droplets,
    title: 'Freshwater Conservation',
    desc: 'Learning about the Red-Eared Slider illuminates the fragility of freshwater ecosystems. Their dependence on clean, warm water with specific chemical balance makes them excellent bioindicators — when slider populations decline, it signals broader environmental degradation.',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
  },
  {
    icon: Globe,
    title: 'Wildlife Awareness',
    desc: 'The Red-Eared Slider\'s status as both a popular pet and an invasive species in many regions provides a real-world case study in how human choices — including the pet trade and irresponsible releases — can dramatically alter natural ecosystems globally.',
    color: 'text-teal-400',
    border: 'border-teal-500/20',
  },
  {
    icon: Heart,
    title: 'Responsible Pet Care',
    desc: 'Studying Red-Eared Sliders teaches the importance of informed, long-term pet ownership. With lifespans exceeding 30 years and complex care requirements, they help young learners understand animal welfare, veterinary responsibility, and the commitment involved in caring for exotic pets.',
    color: 'text-rose-400',
    border: 'border-rose-500/20',
  },
  {
    icon: TreePine,
    title: 'Environmental Education',
    desc: 'Red-Eared Sliders serve as engaging ambassadors for broader environmental education. Their story connects learners to topics including invasive species management, habitat preservation, water quality, and the importance of biodiversity — making abstract conservation concepts tangible and relatable.',
    color: 'text-green-400',
    border: 'border-green-500/20',
  },
];

export default function EducationalImportance() {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-24 bg-gradient-to-b from-ocean-950 to-teal-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-8"
        style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #0369a1 0%, transparent 45%)' }}
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
            Educational Importance
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            Why the Red-Eared Slider is a valuable subject of study for students, educators, and conservationists
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden h-72 shadow-2xl"
          >
            <img src="/images/download_(2).jpg" alt="Educational study of Red-Eared Slider" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="glass rounded-xl p-3 text-center">
                <p className="text-white text-sm font-semibold">A Living Classroom</p>
                <p className="text-teal-300 text-xs mt-1">The Red-Eared Slider teaches biology, ecology, and responsibility</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-teal-100/80 leading-relaxed">
              The Red-Eared Slider occupies a unique position in wildlife education: it is accessible, familiar, and yet remarkably complex. As both a common pet and a subject of serious conservation concern, it bridges the gap between domestic animal care and wild ecosystem science.
            </p>
            <p className="text-teal-100/80 leading-relaxed">
              Schools, aquariums, zoos, and wildlife centers around the world use Red-Eared Sliders to teach children and adults alike about freshwater biodiversity, the responsibilities of pet ownership, the dangers of invasive species, and the importance of conservation action.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Reptile Biology', 'Ecology', 'Conservation', 'Animal Welfare', 'Biodiversity', 'Freshwater Science'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 glass rounded-full text-xs text-teal-300 font-medium border border-teal-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className={`glass rounded-xl p-5 border card-hover ${t.border}`}
              >
                <Icon size={22} className={`${t.color} mb-3`} />
                <h3 className={`font-semibold text-sm mb-2 ${t.color}`}>{t.title}</h3>
                <p className="text-teal-100/65 text-xs leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
