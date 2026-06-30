import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, ArrowRight, Award, CheckCircle2, Search, BookOpen, Star, HelpCircle } from 'lucide-react';
import TiltCard from './TiltCard';

interface HeroProps {
  onBrowseCourses: (filterCategory?: 'licensing' | 'examprep' | 'ce' | 'books') => void;
  onOpenCalculator: () => void;
}

export default function Hero({ onBrowseCourses, onOpenCalculator }: HeroProps) {
  // Quick Program Finder Wizard State
  const [goal, setGoal] = useState<string>('');
  const [experience, setExperience] = useState<string>('');

  const handleFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal === 'earn') {
      onBrowseCourses('licensing');
    } else if (goal === 'pass') {
      onBrowseCourses('examprep');
    } else if (goal === 'renew') {
      onBrowseCourses('ce');
    } else if (goal === 'materials') {
      onBrowseCourses('books');
    } else {
      onBrowseCourses();
    }
  };

  return (
    <section className="relative overflow-hidden bg-transparent py-12 lg:py-20 lg:min-h-[calc(100vh-80px)] flex items-center border-b border-stone-200/40">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-96 w-96 rounded-full bg-brand-burgundy/5 blur-3xl"></div>

      {/* Floating Animated 3D/Parallax Shapes */}
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 360],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-[15%] w-16 h-16 rounded-xl bg-brand-gold/15 border border-brand-gold/20 blur-sm pointer-events-none -z-10 hidden md:block"
        style={{ transformStyle: 'preserve-3d', rotateX: 45, rotateY: 45 }}
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [360, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-24 right-[25%] w-24 h-24 rounded-full bg-brand-burgundy/10 border border-brand-burgundy/15 blur-md pointer-events-none -z-10 hidden md:block"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero Left: Core Copy */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5 xl:gap-6 text-left">
            
            {/* Trust Indicator Pill */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-1.5 self-start bg-brand-burgundy/5 border border-brand-burgundy/15 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-burgundy uppercase tracking-wider"
            >
              <Award size={14} className="text-brand-gold animate-bounce" />
              <span>Washington State Approved Since 1974</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-brand-navy leading-[1.08] tracking-tight"
            >
              Unlock Your <br />
              <span className="text-luxury-gradient relative inline-block pb-1">
                Real Estate Career
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-brand-gold/65" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M1 8c30-4.7 75-7 150-7s119 2.3 148 7" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              <br />with Washington’s Leader
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-stone-600 leading-relaxed max-w-xl"
            >
              For over 50 years, Rockwell Institute has helped more than 100,000 students pass the state exam and build thriving brokerage careers. Enjoy industry-recognized curriculum and ultimate study flexibility.
            </motion.p>

            {/* Key Value Checklist */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2 text-stone-700 text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-brand-gold shrink-0" />
                <span>90%+ Exam First-Time Pass Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-brand-gold shrink-0" />
                <span>100% Approved by WA State DOL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-brand-gold shrink-0" />
                <span>Learn Anywhere: Online, Textbooks, Live</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-brand-gold shrink-0" />
                <span>Official Certificates Issued Instantly</span>
              </div>
            </motion.div>

            {/* Primary Action Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => onBrowseCourses()}
                className="bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-medium px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 cursor-pointer hover-lift btn-double-border"
              >
                <GraduationCap size={19} className="text-brand-gold-light" />
                <span>View Real Estate Courses</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={onOpenCalculator}
                className="bg-white hover:bg-[#FAF8F5] text-brand-navy hover:text-brand-burgundy border border-brand-gold/30 hover:border-brand-gold/60 font-medium px-6 py-3.5 rounded-md transition-all flex items-center gap-2 cursor-pointer shadow-xs hover-lift"
              >
                <BookOpen size={17} className="text-brand-gold" />
                <span>Licensing Cost & Hours Calculator</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-6 pt-4 lg:pt-3 xl:pt-5 border-t border-stone-200/80 mt-1 lg:mt-0"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs text-stone-500 font-medium">
                  <strong>4.9/5 Rating</strong> (10,000+ Reviews)
                </span>
              </div>
              <div className="h-4 w-px bg-stone-300"></div>
              <span className="text-xs text-stone-500 font-medium uppercase tracking-wider">
                Founded in <strong>Bellevue, WA</strong>
              </span>
            </motion.div>

          </div>

          {/* Hero Right: Beautiful 3D interactive real estate banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative perspective-[1200px]"
          >
            <TiltCard 
              scale={1.03}
              maxTilt={12}
              glowColor="rgba(192, 158, 91, 0.16)"
              className="h-[400px] md:h-[460px] lg:h-[420px] xl:h-[480px] relative rounded-2xl shadow-2xl border border-stone-200/80 bg-stone-900 group overflow-hidden"
            >
              {/* Layer 1: Background Image with depth -translate-z */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ transform: 'translateZ(-15px) scale(1.08)', transformStyle: 'preserve-3d' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern luxury estate in Bellevue, Washington" 
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-stone-950/10" />
              </div>

              {/* Layer 2: Floating Top-Left Status Badge (Depth 45px) */}
              <div 
                className="absolute top-6 left-6 bg-stone-950/85 backdrop-blur-md px-3 py-2 rounded-lg border border-brand-gold/30 shadow-lg flex items-center gap-2"
                style={{ transform: 'translateZ(45px)', transformStyle: 'preserve-3d' }}
              >
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <div className="text-left">
                  <span className="text-[9px] uppercase tracking-wider text-brand-gold font-extrabold block">License Status</span>
                  <span className="text-[10px] text-white font-bold leading-tight">100% State Approved</span>
                </div>
              </div>

              {/* Layer 3: Floating Top-Right Performance Badge (Depth 75px) */}
              <div 
                className="absolute top-6 right-6 bg-brand-burgundy/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-brand-gold/45 shadow-lg text-center"
                style={{ transform: 'translateZ(75px)', transformStyle: 'preserve-3d' }}
              >
                <div className="text-brand-gold text-[10px] uppercase font-bold tracking-widest">Pass Ratio</div>
                <div className="text-white text-base font-serif font-bold leading-tight">98.4%</div>
              </div>

              {/* Layer 4: Interactive Floating Student Progress Panel (Depth 110px) */}
              <div 
                className="absolute bottom-28 left-6 right-6 bg-stone-900/90 backdrop-blur-lg px-4 py-3.5 rounded-xl border border-stone-700/60 shadow-2xl text-left"
                style={{ transform: 'translateZ(110px)', transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold">WA Broker Pre-Licensing</span>
                  <span className="text-[10px] text-stone-300 font-bold bg-brand-burgundy/40 px-1.5 py-0.5 rounded-sm">On Track</span>
                </div>
                <div className="text-white text-xs font-bold font-sans">90-Hour Pre-Licensing Package</div>
                <div className="mt-2.5 flex items-center gap-3">
                  <div className="flex-grow bg-stone-800 h-2 rounded-full overflow-hidden border border-stone-700">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1.8, ease: "easeOut", delay: 0.5 }}
                      className="bg-brand-gold h-full rounded-full" 
                    />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-brand-gold">92%</span>
                </div>
                <div className="text-[9px] text-stone-400 mt-2 flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold animate-ping" />
                  <span>Next: Cram Media Practice Exam (Unlocked)</span>
                </div>
              </div>

              {/* Layer 5: Beautiful Base Copy (Depth 30px) */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6 pt-16 bg-gradient-to-t from-stone-950 via-stone-950/85 to-transparent text-left"
                style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}
              >
                <span className="text-[9px] uppercase tracking-widest text-brand-gold font-bold mb-1 block">Alumni Network Showcase</span>
                <h3 className="text-white text-base font-serif font-bold leading-snug">Premium Bellevue Administrative Campus & Estate</h3>
                <p className="text-stone-300 text-[10px] sm:text-xs mt-1.5 leading-relaxed">
                  Join over 100,000 licensed brokers who launched their careers through Rockwell since 1974.
                </p>
              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
