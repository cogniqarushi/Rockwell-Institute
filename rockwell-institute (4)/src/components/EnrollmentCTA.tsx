import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, PhoneCall, Award, Users, CheckCircle } from 'lucide-react';

interface EnrollmentCTAProps {
  onBrowseCourses: () => void;
  onOpenContact: () => void;
}

export default function EnrollmentCTA({ onBrowseCourses, onOpenContact }: EnrollmentCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-[#FAF8F4]/30 border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-brand-gold/30 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 glass-premium">
          
          {/* Left Side: Copy and Features */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-brand-burgundy/5 border border-brand-burgundy/15 px-3 py-1 rounded-full text-[11px] font-bold text-brand-burgundy uppercase tracking-wider mb-6">
                <Award size={13} className="text-brand-gold" />
                <span>Immediate Class Access</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy tracking-tight leading-tight">
                Ready to Start Your Real Estate Journey?
              </h2>
              
              <p className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed">
                Join over 100,000 successful brokers who got their start with Rockwell Institute. Registration takes less than 2 minutes, and you can begin your online modules immediately.
              </p>

              {/* Benefit Checklist */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  '100% Mobile & Desktop Friendly Modules',
                  'In-house Legal Vetted Curriculum',
                  '90%+ State Exam First-Time Pass Rate',
                  'Legendary Rockwell Cram Course Prep',
                  'Course Certificates Issued Instantly',
                  'Support from Certified Instructors'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-stone-700 font-semibold">
                    <CheckCircle size={15} className="text-brand-burgundy shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 pt-8 border-t border-stone-100/80 flex flex-wrap items-center gap-4">
              <button
                onClick={onBrowseCourses}
                className="bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-medium text-sm px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer hover-lift btn-double-border"
              >
                <GraduationCap size={18} className="text-brand-gold-light" />
                <span>Browse Approved Courses</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenContact}
                className="bg-white hover:bg-[#FAF8F5] text-brand-navy hover:text-brand-burgundy border border-brand-gold/30 font-medium text-sm px-6 py-3.5 rounded-md transition-all flex items-center gap-2 cursor-pointer shadow-xs hover-lift"
              >
                <PhoneCall size={16} className="text-brand-gold" />
                <span>Speak with Admissions</span>
              </button>
            </div>
          </div>

          {/* Right Side: Professional Image Overlay */}
          <div className="lg:col-span-5 h-64 lg:h-auto min-h-[350px] relative bg-stone-100">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
              alt="Real estate transaction client handshake"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Dark overlay with branding statistics */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent flex flex-col justify-end p-8 text-left">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-10 w-10 rounded-full bg-brand-burgundy/80 flex items-center justify-center text-white font-serif font-bold text-sm border border-brand-gold/30">
                  R
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">The Rockwell Standard</h4>
                  <span className="text-[11px] text-stone-300">Bellevue, Washington Since 1974</span>
                </div>
              </div>
              <p className="text-stone-200 text-xs leading-relaxed font-medium">
                "Our textbooks are written in-house by legal experts to prepare you not just to pass the exam, but to build a prosperous, regulatory-compliant career."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
