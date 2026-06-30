import { motion } from 'motion/react';
import { Smartphone, Users, Package, Clock, CheckCircle, GraduationCap, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

interface LearningOptionsProps {
  onBrowseCourses: () => void;
}

export default function LearningOptions({ onBrowseCourses }: LearningOptionsProps) {
  const formats = [
    {
      id: 'online',
      name: 'Fully Online Courses',
      icon: <Smartphone className="text-brand-burgundy" size={22} />,
      tagline: 'Study on Your Own Timeline',
      description: 'Ideal for independent learners who need maximum study flexibility. Log in from any laptop, tablet, or phone, 24/7. Your progress is saved automatically.',
      benefits: [
        'Study 24/7 from any modern web-enabled device',
        'Interactive, modular lessons with digital flashcards',
        '1 full year of continuous course access',
        'Immediate automatic grading & certificate delivery'
      ],
      ctaLabel: 'Browse Online Courses',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'live',
      name: 'Live-Lecture Classes',
      icon: <Users className="text-brand-burgundy" size={22} />,
      tagline: 'Learn From Industry Icons',
      description: 'Perfect for students who prefer real-time classroom instruction, immediate Q&A, and networking opportunities. Hosted at our modern Bellevue campus.',
      benefits: [
        'Direct physical interaction with licensed industry experts',
        'Network with other aspiring and active local agents',
        'Structured classroom schedules keep you on track',
        'Includes all physical textbooks & course guides'
      ],
      ctaLabel: 'Browse Live Schedules',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'correspondence',
      name: 'Correspondence Courses',
      icon: <Package className="text-brand-burgundy" size={22} />,
      tagline: 'Offline Study With Physical Texts',
      description: 'The best option for those who prefer physical books, highlighting, and studying off-screen. Materials are shipped straight to your Washington doorstep.',
      benefits: [
        'Premium high-quality printed textbooks and study materials',
        'Complete courses and study entirely without an internet connection',
        'Take your final tests online or mail them in for grading',
        'Continuous support from Rockwell instructors via toll-free phone'
      ],
      ctaLabel: 'Browse Book Packages',
      image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent border-y border-brand-gold/15 relative overflow-hidden">
      {/* Decorative Parallax Background Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-brand-burgundy/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold text-gold-gradient tracking-widest uppercase font-display"
          >
            Study Formats
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-serif font-bold text-luxury-gradient tracking-tight"
          >
            Flexible Learning Options
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed"
          >
            Every candidate learns differently. At Rockwell, we provide three distinct, state-approved avenues to complete your licensing education and exam preparation.
          </motion.p>
        </div>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {formats.map((fmt, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              key={fmt.id}
              className="h-full"
            >
              <TiltCard 
                scale={1.03}
                maxTilt={10}
                glowColor="rgba(192, 158, 91, 0.12)"
                className="bg-white rounded-xl border border-stone-200/60 shadow-xs hover:shadow-xl hover:border-brand-gold/40 flex flex-col justify-between h-full group transition-all duration-300 overflow-hidden text-left"
              >
                <div className="flex flex-col justify-between h-full">
                  {/* Top Image Cover */}
                  <div className="h-44 w-full overflow-hidden relative bg-stone-100 border-b border-stone-150">
                    <img 
                      src={fmt.image} 
                      alt={fmt.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                    <div className="absolute bottom-3.5 left-4 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-md text-brand-burgundy shrink-0">
                        {fmt.icon}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-white bg-brand-burgundy/80 border border-brand-gold/25 px-2 py-0.5 rounded-sm font-bold shadow-xs">
                        State Approved
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-7 flex-grow flex flex-col justify-between">
                    <div>
                      <div>
                        <h3 className="text-lg font-serif font-bold text-brand-navy leading-none group-hover:text-brand-burgundy transition-colors">
                          {fmt.name}
                        </h3>
                        <span className="text-xs text-brand-gold font-semibold tracking-wide mt-1.5 inline-block">
                          {fmt.tagline}
                        </span>
                      </div>

                      {/* Body Copy */}
                      <p className="text-stone-500 text-xs leading-relaxed mt-4 mb-6">
                        {fmt.description}
                      </p>

                      {/* Bullet checklist */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-[10px] font-bold text-stone-700 uppercase tracking-wider">
                          Key Features:
                        </h4>
                        {fmt.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-2 text-xs text-stone-600 leading-normal">
                            <CheckCircle size={14} className="text-brand-gold shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action */}
                    <button
                      onClick={() => onBrowseCourses()}
                      className="w-full bg-stone-50 border border-stone-200 hover:border-brand-burgundy hover:bg-brand-burgundy/5 hover:text-brand-burgundy text-stone-700 font-semibold text-xs py-3 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-4"
                    >
                      <span>{fmt.ctaLabel}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Flexibility statement */}
        <div className="mt-16 text-center">
          <p className="text-xs text-stone-500 max-w-2xl mx-auto font-medium leading-relaxed">
            💡 <strong>Can’t decide?</strong> Our academic advisors are standing by. You can also mix and match formats (e.g. complete your Core education online and join us on-campus in Bellevue for the live Cram Course). Call us toll-free: <strong>1-800-221-9347</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
