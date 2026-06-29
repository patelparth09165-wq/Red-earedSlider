import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { BookOpen, Globe, Clock, Leaf, Heart } from 'lucide-react';

const classificationData = [
  { label: 'Kingdom', value: 'Animalia' },
  { label: 'Phylum', value: 'Chordata' },
  { label: 'Class', value: 'Reptilia' },
  { label: 'Order', value: 'Testudines' },
  { label: 'Family', value: 'Emydidae' },
  { label: 'Genus', value: 'Trachemys' },
  { label: 'Species', value: 'T. scripta elegans' },
];

const sections = [
  {
    icon: BookOpen,
    title: 'Introduction',
    text: 'The Red-Eared Slider (Trachemys scripta elegans) is a semi-aquatic freshwater turtle and one of the most recognized reptiles in the world. Named for the distinctive red or orange stripe located behind each eye, these turtles are native to the warm freshwater environments of the southern United States and northern Mexico. Their adaptability, striking appearance, and relatively manageable size have made them the world\'s most traded reptile.',
  },
  {
    icon: Globe,
    title: 'Origin & Natural History',
    text: 'Originally native to the Mississippi Valley in the United States — from Illinois to the Gulf of Mexico — and parts of northeastern Mexico, the Red-Eared Slider has been introduced to habitats on every continent except Antarctica through the pet trade. Fossil records indicate that members of the Trachemys lineage date back over 15 million years, making them ancient and highly evolved survivors of changing climates and environments.',
  },
  {
    icon: Clock,
    title: 'Lifespan & Growth',
    text: 'In the wild, Red-Eared Sliders typically live 20 to 30 years, while well-cared-for individuals in captivity can exceed 40 years. Hatchlings emerge at just 25–35 mm in length, growing steadily through their first decade. Females grow larger than males, often reaching 25–30 cm in shell length. Growth rate slows significantly after sexual maturity, which occurs between 2 and 5 years of age.',
  },
  {
    icon: Leaf,
    title: 'Importance in Freshwater Ecosystems',
    text: 'Red-Eared Sliders serve a critical role in freshwater food webs. As opportunistic omnivores, they regulate populations of aquatic insects, small fish, and vegetation. Their basking behaviour exposes them to sunlight, supporting metabolic processes and parasite control. Dead turtles contribute nutrients back to the ecosystem. In regions where they have been introduced, however, their adaptability can threaten native species through competition for food and basking spots.',
  },
  {
    icon: Heart,
    title: 'Popularity as a Pet',
    text: 'For decades, Red-Eared Sliders have topped the charts as the most popular pet turtle worldwide. Their engaging personality, manageable size, and hardy constitution make them appealing to reptile enthusiasts. At peak demand in the 1970s–90s, millions were exported from the United States annually. Today, responsible ownership — including understanding their long lifespan and specific care requirements — is emphasized by herpetologists and conservation advocates.',
  },
];

export default function About() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-teal-950 to-ocean-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #14b8a6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #0ea5e9 0%, transparent 50%)' }}
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
            About the Red-Eared Slider
          </h2>
          <p className="text-teal-300/70 text-lg max-w-2xl mx-auto">
            A comprehensive introduction to one of nature's most fascinating freshwater reptiles
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image + Classification */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/download_(3).jpg"
                alt="Red-Eared Slider in natural habitat"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-display italic text-teal-300 text-sm">Trachemys scripta elegans in its natural environment</span>
              </div>
            </div>

            {/* Scientific Classification Table */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold text-teal-300 mb-4 flex items-center gap-2">
                <BookOpen size={18} />
                Scientific Classification
              </h3>
              <div className="space-y-2">
                {classificationData.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                  >
                    <span className="text-teal-400/70 text-sm font-medium">{item.label}</span>
                    <span className="text-white text-sm font-semibold italic">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6">
            {sections.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="glass rounded-xl p-5 card-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1.5">{s.title}</h3>
                      <p className="text-teal-100/70 text-sm leading-relaxed">{s.text}</p>
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
