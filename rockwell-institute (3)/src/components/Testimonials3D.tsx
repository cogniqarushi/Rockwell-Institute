import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { REVIEWS } from '../data/reviews';
import { Star, MessageSquare, Quote, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

// Interactive 3D Card wrapper
function TiltCard({ children, className = '' }: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`relative rounded-2xl p-8 bg-white border border-stone-200 shadow-lg hover:shadow-xl transition-shadow duration-300 select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Testimonials3D() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className="py-20 bg-transparent border-t border-brand-gold/15 overflow-hidden relative">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-brand-gold/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-brand-burgundy/5 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-brand-burgundy/5 border border-brand-burgundy/15 px-3 py-1 rounded-full text-[11px] font-extrabold text-brand-burgundy uppercase tracking-widest mb-4">
            <MessageSquare size={12} className="text-brand-gold" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy tracking-tight leading-none">
            Endorsed by Over 100,000 Graduates
          </h2>
          <p className="mt-4 text-stone-500 text-sm md:text-base leading-relaxed">
            Move your cursor or swipe over the cards to experience our interactive 3D success directory. Discover how real Rockwell alumni earned their Washington Broker licenses.
          </p>
        </div>

        {/* 3D Testimonials Showcase Grid & Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive 3D Spotlight Card */}
          <div className="lg:col-span-7 flex flex-col justify-center relative perspective-[1000px]">
            <TiltCard className="bg-radial from-white to-stone-50/30 overflow-hidden border-stone-200/90 relative">
              
              {/* Backing decorative watermark quote icon */}
              <div className="absolute -top-6 -right-6 text-stone-100/75 pointer-events-none -z-10">
                <Quote size={180} className="text-stone-100 fill-stone-50/10" />
              </div>

              {/* Verified Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex text-brand-gold gap-0.5">
                  {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" className="stroke-1" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-1.5 bg-green-50 border border-green-200/60 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <CheckCircle size={11} /> Verified Graduate
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-brand-navy text-base md:text-lg font-serif italic font-medium leading-relaxed mb-8 select-none">
                "{REVIEWS[activeIndex].comment}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-stone-200/80 mb-6"></div>

              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center font-serif font-bold border border-brand-gold/30">
                    {REVIEWS[activeIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-brand-navy leading-none">{REVIEWS[activeIndex].name}</h4>
                    <span className="text-[11px] text-stone-500 font-medium mt-1 inline-block">
                      {REVIEWS[activeIndex].role} • {REVIEWS[activeIndex].location}
                    </span>
                  </div>
                </div>
                <div className="bg-brand-burgundy/5 border border-brand-burgundy/10 px-3 py-1.5 rounded text-left">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400 block">Class Program</span>
                  <span className="text-[11px] font-semibold text-brand-burgundy line-clamp-1">{REVIEWS[activeIndex].courseName}</span>
                </div>
              </div>

            </TiltCard>

            {/* Carousel Navigation Controllers */}
            <div className="flex items-center justify-between mt-6 px-2">
              <span className="text-xs text-stone-400 font-medium">
                Record <strong className="text-brand-navy">{activeIndex + 1}</strong> of {REVIEWS.length} graduates
              </span>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-brand-navy transition-colors cursor-pointer shadow-xs"
                  aria-label="Previous story"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-brand-navy transition-colors cursor-pointer shadow-xs"
                  aria-label="Next story"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Key Achievements and Quotes List */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <h3 className="text-xl font-serif font-bold text-brand-navy tracking-tight mb-2">
              Real Careers. Proven Outcomes.
            </h3>
            <p className="text-stone-500 text-xs leading-relaxed mb-4">
              Click any of our highlighted candidate logs below to load their real verified feedback into the active 3D viewport:
            </p>

            <div className="space-y-3.5">
              {REVIEWS.map((rev, idx) => (
                <div
                  key={rev.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    activeIndex === idx
                      ? 'bg-white border-brand-burgundy shadow-md ring-1 ring-brand-burgundy/10'
                      : 'bg-white/60 border-stone-200 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold font-serif ${
                      activeIndex === idx ? 'bg-brand-burgundy text-white' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-brand-navy">{rev.name}</h4>
                      <p className="text-[10px] text-stone-500">{rev.role} — {rev.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-stone-100 px-2 py-1 rounded">
                    <Star size={10} className="fill-brand-gold text-brand-gold" />
                    <span className="text-[10px] font-bold text-stone-600">{rev.rating}.0</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
