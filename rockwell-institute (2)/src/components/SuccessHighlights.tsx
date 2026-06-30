import { motion } from 'motion/react';
import { Award, Users, Trophy, BookOpen, Star, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

export default function SuccessHighlights() {
  const stats = [
    {
      id: 'stat-1',
      number: '50+',
      label: 'Years of Experience',
      desc: 'Founded in Bellevue, WA in 1974, providing trusted legal and market training through five decades of changing real estate cycles.',
      icon: <Award className="text-brand-gold" size={24} />
    },
    {
      id: 'stat-2',
      number: '100,000+',
      label: 'Graduates Trained',
      desc: 'Over one hundred thousand brokers, managing brokers, and agents have completed their licensing and renewals through Rockwell.',
      icon: <Users className="text-brand-gold" size={24} />
    },
    {
      id: 'stat-3',
      number: '90%+',
      label: 'Exam Pass Rate',
      desc: 'Students utilizing our Cram Course pass the challenging Washington state and national licensing exams on their very first attempt.',
      icon: <Trophy className="text-brand-gold" size={24} />
    },
    {
      id: 'stat-4',
      number: '4.9 / 5',
      label: 'Student Rating',
      desc: 'Consistently rated 5 stars by new agents and experienced brokers for our readable textbooks, responsive support, and instant credits.',
      icon: <Star className="text-brand-gold" size={24} fill="currentColor" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-navy text-stone-100 border-b border-brand-gold/15 relative overflow-hidden">
      {/* Luxury Dot Grid Overlay Background */}
      <div className="absolute inset-0 luxury-grid opacity-15 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 pb-12 border-b border-stone-800">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold text-brand-gold tracking-widest uppercase flex items-center gap-1.5 mb-2 font-display">
              <Sparkles size={14} /> Legitimate Academic Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
              Why Washington’s Top Agencies <br className="hidden sm:inline" />
              Exclusively Trust Rockwell
            </h2>
          </div>
          <div className="lg:col-span-5 text-left lg:text-right">
            <p className="text-stone-400 text-sm leading-relaxed max-w-lg">
              When you enroll at Rockwell, you get more than slide decks. You inherit a curriculum developed by real estate legal counsels, leading economists, and senior educators with unmatched state authorization.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              key={st.id}
              className="h-full"
            >
              <TiltCard
                scale={1.03}
                maxTilt={12}
                glowColor="rgba(212, 163, 89, 0.12)" // gorgeous gold glowing ray
                className="bg-brand-navy-light/30 border border-stone-800 hover:border-brand-gold/45 p-6 rounded-lg text-left h-full flex flex-col justify-between group"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="h-10 w-10 rounded-md bg-stone-900/55 border border-stone-800 flex items-center justify-center mb-4" style={{ transform: 'translateZ(10px)' }}>
                      {st.icon}
                    </div>
                    
                    <div className="text-4xl font-serif font-bold text-white tracking-tight" style={{ transform: 'translateZ(15px)' }}>
                      {st.number}
                    </div>
                    
                    <div className="text-sm font-semibold text-brand-gold mt-1 uppercase tracking-wider font-display">
                      {st.label}
                    </div>

                    <p className="text-stone-400 text-xs mt-3 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Credentials */}
        <div className="mt-16 bg-stone-900/40 border border-stone-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5 text-left">
            <div className="p-2.5 rounded-full bg-brand-burgundy/10 border border-brand-burgundy/25 text-brand-burgundy shrink-0">
              <BookOpen size={20} className="text-brand-gold" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">
                Department of Licensing Approved Curriculum #WA-RES-074
              </h4>
              <p className="text-[11px] text-stone-500">
                All 90 hours are officially registered, satisfying RCW 18.85 requirements for real estate brokers in WA.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-400 font-medium">Affiliated Corporate Sponsors:</span>
            <div className="flex items-center gap-3 font-serif font-bold text-stone-600 text-sm tracking-widest select-none">
              <span className="hover:text-stone-400 transition-colors">WRE</span>
              <span className="text-brand-gold">•</span>
              <span className="hover:text-stone-400 transition-colors">CB</span>
              <span className="text-brand-gold">•</span>
              <span className="hover:text-stone-400 transition-colors">RE/MAX</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
