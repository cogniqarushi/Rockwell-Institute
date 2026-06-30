import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../types';
import { COURSES } from '../data/courses';
import { Calculator, Award, ArrowRight, ClipboardCheck, BookOpen, CircleDollarSign, CheckCircle, HelpCircle } from 'lucide-react';

interface LicenseCalculatorProps {
  onAddCourseToCart: (course: Course, format: string) => void;
  setActiveTab: (tab: string) => void;
}

export default function LicenseRequirementCalculator({ onAddCourseToCart, setActiveTab }: LicenseCalculatorProps) {
  const [goal, setGoal] = useState<'new_broker' | 'first_renewal' | 'standard_renewal'>('new_broker');
  const [studyFormat, setStudyFormat] = useState<'online' | 'books'>('online');
  const [includeCramCourse, setIncludeCramCourse] = useState(true);

  // Constants based on Washington DOL and Pearson VUE rules
  const FEES = {
    exam: 138.00,
    license: 146.25,
    fingerprint: 43.00,
  };

  // Pricing engine
  const calculateCosts = () => {
    let tuition = 0;
    let recommendedCourseId = '';
    
    if (goal === 'new_broker') {
      recommendedCourseId = 'wa-90-licensing-pkg';
      const basePkg = COURSES.find(c => c.id === 'wa-90-licensing-pkg');
      tuition = basePkg ? basePkg.price : 489;
      
      if (studyFormat === 'books') {
        tuition += 89; // Textbook fee
      }
    } else if (goal === 'first_renewal') {
      recommendedCourseId = 'wa-ce-first-renewal';
      const renewalPkg = COURSES.find(c => c.id === 'wa-ce-first-renewal');
      tuition = renewalPkg ? renewalPkg.price : 199;
    } else {
      recommendedCourseId = 'wa-core-course';
      const coreCourse = COURSES.find(c => c.id === 'wa-core-course');
      tuition = coreCourse ? coreCourse.price : 49;
    }

    // State fees
    const stateFees = goal === 'new_broker' 
      ? FEES.exam + FEES.license + FEES.fingerprint 
      : FEES.license; // Only renewal fee to state

    const total = tuition + stateFees;

    return {
      tuition,
      stateFees,
      total,
      recommendedCourseId
    };
  };

  const { tuition, stateFees, total, recommendedCourseId } = calculateCosts();
  const recommendedCourse = COURSES.find(c => c.id === recommendedCourseId);

  const handleEnrollRecommended = () => {
    if (recommendedCourse) {
      onAddCourseToCart(recommendedCourse, studyFormat === 'books' ? 'Correspondence' : 'Online');
    }
  };

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-base font-bold text-gold-gradient tracking-widest uppercase font-display">
            Interactive Helper
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-serif font-bold text-luxury-gradient tracking-tight">
            Washington License Cost & Hours Calculator
          </p>
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Washington State licensing criteria are precise. Toggle your career path below to calculate your required academic credit hours, estimated state fees, and view a customized licensing blueprint.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls - Left Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-brand-gold/20 rounded-xl p-6 md:p-8 text-left space-y-6 glass-premium">
            
            <h3 className="text-lg font-serif font-bold text-brand-navy flex items-center gap-2">
              <Calculator size={18} className="text-brand-burgundy" /> Choose Your Blueprint
            </h3>

            {/* Selection 1: Goals */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                1. What is your current real estate goal?
              </label>
              <div className="space-y-2">
                <button
                  onClick={() => setGoal('new_broker')}
                  className={`w-full p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer flex justify-between items-center ${
                    goal === 'new_broker'
                      ? 'bg-brand-burgundy/5 border-brand-burgundy text-brand-burgundy ring-2 ring-brand-burgundy/10'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div>
                    <span className="block font-bold">Earn Washington Broker License</span>
                    <span className="text-[10px] text-stone-400">90 credit hours required for new agents</span>
                  </div>
                  <ArrowRight size={14} className={goal === 'new_broker' ? 'text-brand-burgundy' : 'text-stone-300'} />
                </button>

                <button
                  onClick={() => setGoal('first_renewal')}
                  className={`w-full p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer flex justify-between items-center ${
                    goal === 'first_renewal'
                      ? 'bg-brand-burgundy/5 border-brand-burgundy text-brand-burgundy ring-2 ring-brand-burgundy/10'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div>
                    <span className="block font-bold">First License Renewal (CE)</span>
                    <span className="text-[10px] text-stone-400">30 credit hours required after 2 years active</span>
                  </div>
                  <ArrowRight size={14} className={goal === 'first_renewal' ? 'text-brand-burgundy' : 'text-stone-300'} />
                </button>

                <button
                  onClick={() => setGoal('standard_renewal')}
                  className={`w-full p-3 rounded-lg border text-left text-xs font-medium transition-all cursor-pointer flex justify-between items-center ${
                    goal === 'standard_renewal'
                      ? 'bg-brand-burgundy/5 border-brand-burgundy text-brand-burgundy ring-2 ring-brand-burgundy/10'
                      : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <div>
                    <span className="block font-bold">Standard Subsequent Renewal</span>
                    <span className="text-[10px] text-stone-400">30 credit hours required every 2 years</span>
                  </div>
                  <ArrowRight size={14} className={goal === 'standard_renewal' ? 'text-brand-burgundy' : 'text-stone-300'} />
                </button>
              </div>
            </div>

            {/* Selection 2: Study formats */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider">
                2. Select Study preference
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setStudyFormat('online')}
                  className={`p-3 rounded-lg border text-center text-xs transition-all cursor-pointer ${
                    studyFormat === 'online'
                      ? 'bg-brand-navy border-brand-navy text-white font-bold'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  💻 Fully Digital
                </button>
                <button
                  onClick={() => setStudyFormat('books')}
                  disabled={goal !== 'new_broker'}
                  className={`p-3 rounded-lg border text-center text-xs transition-all cursor-pointer ${
                    studyFormat === 'books'
                      ? 'bg-brand-navy border-brand-navy text-white font-bold'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  } ${goal !== 'new_broker' ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  📦 Plus Printed Books
                </button>
              </div>
              {goal !== 'new_broker' && (
                <span className="text-[10px] text-stone-400 leading-none">
                  *Continuing education renewal programs are completed digitally.
                </span>
              )}
            </div>

            {/* Cost Guarantee Callout */}
            <div className="bg-amber-50 border border-amber-200/60 p-4 rounded-lg text-xs text-amber-900 leading-normal">
              💡 <strong>Note on State Fees:</strong> State license, exam, and fingerprinting costs are paid directly to regulatory agencies (Pearson VUE / WA DOL) at testing time.
            </div>

          </div>

          {/* Results Display - Right Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white/80 border border-brand-gold/20 rounded-xl p-6 md:p-8 text-left space-y-6 shadow-xs glass-premium">
            
            <div className="flex justify-between items-center border-b border-stone-100 pb-4">
              <h3 className="text-xl font-serif font-bold text-brand-navy">
                Licensing Cost Estimate
              </h3>
              <span className="text-[10px] font-bold text-brand-gold bg-brand-navy/5 px-2.5 py-1 rounded-sm uppercase tracking-wider">
                WA DOL Compliant
              </span>
            </div>

            {/* Estimated Pricing Rows */}
            <div className="space-y-3.5">
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-500 font-medium flex items-center gap-1">
                  <BookOpen size={15} className="text-brand-burgundy" />
                  Rockwell Course Tuition:
                </span>
                <span className="font-bold text-brand-navy">${tuition.toFixed(2)}</span>
              </div>

              {goal === 'new_broker' && (
                <>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-stone-500 font-medium flex items-center gap-1">
                      <CircleDollarSign size={15} className="text-brand-burgundy" />
                      State Exam Fee (Pearson VUE):
                    </span>
                    <span className="font-bold text-stone-700">${FEES.exam.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-stone-500 font-medium flex items-center gap-1">
                      <CircleDollarSign size={15} className="text-brand-burgundy" />
                      Fingerprinting & Background Fee:
                    </span>
                    <span className="font-bold text-stone-700">${FEES.fingerprint.toFixed(2)}</span>
                  </div>
                </>
              )}

              <div className="flex justify-between items-center text-sm">
                <span className="text-stone-500 font-medium flex items-center gap-1">
                  <CircleDollarSign size={15} className="text-brand-burgundy" />
                  State License Application Fee:
                </span>
                <span className="font-bold text-stone-700">${FEES.license.toFixed(2)}</span>
              </div>

              {/* Total Calculation Row */}
              <div className="pt-4 border-t border-stone-200 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs text-stone-400 font-semibold uppercase tracking-wider">Total Investment Blueprint</span>
                  <span className="text-[10px] text-stone-500 leading-none">Course Tuition + State Surcharge Fees</span>
                </div>
                <span className="text-3xl font-bold text-brand-burgundy">${total.toFixed(2)}</span>
              </div>

            </div>

            {/* Steps & Timeline Progress */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1">
                <ClipboardCheck size={14} className="text-brand-gold" />
                Step-by-Step Licensing Flow
              </h4>

              {/* Steps timeline for New Brokers vs Renewal */}
              <div className="space-y-3 pl-2.5">
                {goal === 'new_broker' ? (
                  <>
                    <div className="flex gap-2.5 text-xs">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span><strong>Step 1:</strong> Enroll in the approved Rockwell 90-Hour course package (60hr Fundamentals + 30hr Practices).</span>
                    </div>
                    <div className="flex gap-2.5 text-xs">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span><strong>Step 2:</strong> Pass both course exams with 70%+ to unlock official completion certificates.</span>
                    </div>
                    <div className="flex gap-2.5 text-xs">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span><strong>Step 3:</strong> Access Rockwell’s integrated Cram Course simulation guides to study for the state exam.</span>
                    </div>
                    <div className="flex gap-2.5 text-xs">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span><strong>Step 4:</strong> Submit Pearson VUE appointment and pass the State & National Broker licensing exam.</span>
                    </div>
                    <div className="flex gap-2.5 text-xs">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span><strong>Step 5:</strong> Request fingerprint background clearance and file your license application via WA DOL.</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-2.5 text-xs">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span><strong>Step 1:</strong> Complete the mandatory 3-hour cycle Washington Core Course and other approved CE electives.</span>
                    </div>
                    <div className="flex gap-2.5 text-xs">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span><strong>Step 2:</strong> Download official certificates of completion immediately from Rockwell dashboard.</span>
                    </div>
                    <div className="flex gap-2.5 text-xs">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span><strong>Step 3:</strong> File license renewal form via Washington State Dept of Licensing and pay state renewal fees ($146.25).</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Recommended Course Selection CTA */}
            {recommendedCourse && (
              <div className="bg-stone-50 border border-stone-200 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                <div className="text-left space-y-1">
                  <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider block">Recommended Package</span>
                  <span className="text-xs font-bold text-brand-navy block leading-tight">{recommendedCourse.title}</span>
                  <span className="text-[10px] text-stone-400 block">DOL approved course • Price: ${recommendedCourse.price}</span>
                </div>
                
                <button
                  onClick={handleEnrollRecommended}
                  className="bg-brand-burgundy hover:bg-brand-burgundy-dark text-white text-xs font-bold py-2.5 px-5 rounded-md shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-1"
                >
                  <span>Select & Enroll</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
