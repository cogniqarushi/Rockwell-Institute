import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../types';
import { COURSES } from '../data/courses';
import { Star, ShieldAlert, BadgeCheck, Clock, BookOpen, AlertCircle, ShoppingCart, Check, ChevronRight } from 'lucide-react';
import TiltCard from './TiltCard';

interface FeaturedCoursesProps {
  initialFilter?: 'licensing' | 'examprep' | 'ce' | 'books' | 'all';
  onAddToCart: (course: Course, selectedFormat: string) => void;
}

export default function FeaturedCourses({ initialFilter = 'all', onAddToCart }: FeaturedCoursesProps) {
  const [filter, setFilter] = useState<string>(initialFilter);
  const [isPending, startTransition] = useTransition();
  const [enrollingCourse, setEnrollingCourse] = useState<Course | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [enrollForm, setEnrollForm] = useState({ name: '', email: '', phone: '' });
  const [successMessage, setSuccessMessage] = useState(false);

  const filterCategories = [
    { id: 'all', label: 'All Catalog' },
    { id: 'licensing', label: 'Licensing Courses' },
    { id: 'examprep', label: 'Exam Prep (Cram Course)' },
    { id: 'ce', label: 'Continuing Education (CE)' },
    { id: 'books', label: 'Books & Manuals' },
  ];

  const handleFilterChange = (id: string) => {
    startTransition(() => {
      setFilter(id);
    });
  };

  const filteredCourses = filter === 'all'
    ? COURSES
    : COURSES.filter(c => c.category === filter);

  const startEnrollmentFlow = (course: Course) => {
    setEnrollingCourse(course);
    setSelectedFormat(course.format); // Default format
    setEnrollForm({ name: '', email: '', phone: '' });
    setSuccessMessage(false);
  };

  const submitEnrollment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollingCourse) return;
    
    // Add to cart
    onAddToCart(enrollingCourse, selectedFormat);
    setSuccessMessage(true);
    
    setTimeout(() => {
      setEnrollingCourse(null);
      setSuccessMessage(false);
    }, 1800);
  };

  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Background visual shapes */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-burgundy/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-bold text-gold-gradient tracking-widest uppercase font-display"
          >
            Approved Training Programs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl md:text-4xl font-serif font-bold text-luxury-gradient tracking-tight"
          >
            Explore Course Offerings
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-stone-600 text-sm md:text-base leading-relaxed"
          >
            All courses are 100% approved by the Washington Department of Licensing (DOL) and updated for the current licensing term. Choose your preferred study pace and format.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-brand-burgundy text-brand-gold-light border-brand-gold shadow-md'
                  : 'bg-white text-stone-700 border-stone-200/80 hover:border-brand-gold/50 hover:text-brand-burgundy'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isPending ? 'opacity-60 transition-opacity' : ''}`}>
          {filteredCourses.map((course, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              key={course.id}
              className="h-full"
            >
              <TiltCard
                scale={1.025}
                maxTilt={8}
                glowColor="rgba(192, 158, 91, 0.12)"
                className="group flex flex-col justify-between bg-white rounded-xl border border-stone-200/70 hover:border-brand-gold/60 hover:shadow-xl h-full relative overflow-hidden transition-all duration-500"
              >
                <div className="flex flex-col justify-between h-full">
                  {/* Cover Image */}
                  {course.image && (
                    <div className="h-44 w-full overflow-hidden relative border-b border-stone-100 bg-stone-100">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      {course.featured && (
                        <div className="absolute top-3 right-3 bg-brand-burgundy text-brand-gold text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow-xs border border-brand-gold/25" style={{ transform: 'translateZ(10px)' }}>
                          Popular Choice
                        </div>
                      )}
                    </div>
                  )}

                  {/* Course Top Information */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3" style={{ transform: 'translateZ(5px)' }}>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-burgundy bg-brand-gold-light/20 px-2 py-1 rounded-sm">
                          {course.categoryLabel}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-green-700 bg-green-50 font-bold px-2 py-1 rounded-sm border border-green-100">
                          <BadgeCheck size={11} /> DOL Approved
                        </span>
                      </div>

                      <h3 className="text-lg font-serif font-bold text-brand-navy tracking-tight group-hover:text-brand-burgundy transition-colors line-clamp-2">
                        {course.title}
                      </h3>

                      <p className="text-stone-500 text-xs mt-2 line-clamp-3 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Rating & Reviews */}
                      <div className="flex items-center gap-2 mt-4 text-xs">
                        <div className="flex text-brand-gold">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={12} 
                              fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'} 
                              className="stroke-1"
                            />
                          ))}
                        </div>
                        <span className="font-bold text-stone-700">{course.rating}</span>
                        <span className="text-stone-400">({course.reviewCount} reviews)</span>
                      </div>

                      {/* Course parameters */}
                      <div className="flex items-center gap-4 mt-5 pt-4 border-t border-stone-100 text-stone-500 text-xs font-medium">
                        {course.hours > 0 && (
                          <span className="flex items-center gap-1.5">
                            <Clock size={14} className="text-brand-burgundy" />
                            <span>{course.hours} Credit Hours</span>
                          </span>
                        )}
                        <span className="flex items-center gap-1.5">
                          <BookOpen size={14} className="text-brand-burgundy" />
                          <span>Format: {course.format}</span>
                        </span>
                      </div>

                      {/* Key Syllabus Highlights */}
                      <div className="mt-4 space-y-1.5">
                        {course.highlights.slice(0, 3).map((hl, index) => (
                          <div key={index} className="flex items-start gap-1.5 text-xs text-stone-600 leading-normal">
                            <span className="text-brand-gold shrink-0 mt-0.5">•</span>
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer Actions */}
                    <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider">Tuition Fee</span>
                        <span className="text-2xl font-bold text-brand-navy">${course.price}</span>
                      </div>

                      <button
                        onClick={() => startEnrollmentFlow(course)}
                        className="bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-semibold text-xs py-2.5 px-4 rounded-md transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer border border-brand-gold/15 hover:shadow-md hover-lift"
                      >
                        <span>Quick Enroll</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>



      </div>

      {/* Interactive Quick Enroll Modal */}
      <AnimatePresence>
        {enrollingCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEnrollingCourse(null)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-xl shadow-2xl border border-stone-200 max-w-lg w-full p-6 md:p-8 relative z-10 max-h-[90vh] overflow-y-auto text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setEnrollingCourse(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>

              {successMessage ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="h-16 w-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                    <Check size={32} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-brand-navy">Enrollment Added!</h3>
                  <p className="text-xs text-stone-500 mt-2 max-w-xs">
                    "{enrollingCourse.title}" has been successfully added to your course roster.
                  </p>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-gold bg-brand-navy/5 px-2 py-0.5 rounded-sm">
                      {enrollingCourse.categoryLabel}
                    </span>
                    <span className="text-[9px] text-stone-500 font-medium">Approved by WA State DOL</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-brand-navy tracking-tight">
                    Quick Course Registration
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Complete your registration info to unlock instant online dashboard credentials.
                  </p>

                  <div className="bg-stone-50 rounded-lg p-3.5 border border-stone-150 my-4 text-xs text-stone-700 space-y-1">
                    <div className="font-semibold text-brand-burgundy">{enrollingCourse.title}</div>
                    <div className="flex justify-between text-[11px] text-stone-500 pt-1 border-t border-stone-200">
                      <span>Course Credits: {enrollingCourse.hours} Hours</span>
                      <span className="font-bold text-brand-navy">Tuition: ${enrollingCourse.price}</span>
                    </div>
                  </div>

                  <form onSubmit={submitEnrollment} className="space-y-4">
                    {/* Format Selection (Interactive) */}
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                        Select Learning Format
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Online', 'Correspondence', 'Live Lecture'].map((fmt) => {
                          const isBookOrSpecial = enrollingCourse.format === 'Book';
                          if (isBookOrSpecial && fmt !== 'Online' && fmt !== 'Correspondence') return null;
                          return (
                            <button
                              key={fmt}
                              type="button"
                              onClick={() => setSelectedFormat(fmt)}
                              className={`p-2.5 rounded-md border text-center text-xs transition-all cursor-pointer ${
                                selectedFormat === fmt
                                  ? 'border-brand-burgundy bg-brand-burgundy/5 text-brand-burgundy font-semibold'
                                  : 'border-stone-200 hover:bg-stone-50 text-stone-600'
                              }`}
                            >
                              {fmt === 'Online' && '📱 Fully Online'}
                              {fmt === 'Correspondence' && '📦 Correspondence'}
                              {fmt === 'Live Lecture' && '🏫 Live Classroom'}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Student Info */}
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                          Full Name (For Certificate)
                        </label>
                        <input
                          type="text"
                          required
                          value={enrollForm.name}
                          onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                          className="w-full text-xs p-2.5 border border-stone-300 rounded-md focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy focus:outline-hidden"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={enrollForm.email}
                            onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                            className="w-full text-xs p-2.5 border border-stone-300 rounded-md focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy focus:outline-hidden"
                            placeholder="jane@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={enrollForm.phone}
                            onChange={(e) => setEnrollForm({ ...enrollForm, phone: e.target.value })}
                            className="w-full text-xs p-2.5 border border-stone-300 rounded-md focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy focus:outline-hidden"
                            placeholder="(425) 555-0190"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Guarantee and requirements alert */}
                    {enrollingCourse.requirements && (
                      <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 p-2.5 rounded text-[11px] text-amber-800">
                        <AlertCircle size={15} className="shrink-0 mt-0.5" />
                        <span><strong>Prerequisite Reminder:</strong> {enrollingCourse.requirements}</span>
                      </div>
                    )}

                    <div className="pt-4 flex items-center justify-between border-t border-stone-100">
                      <span className="text-xs text-stone-400 flex items-center gap-1.5 font-medium">
                        <ShieldAlert size={12} className="text-brand-burgundy" /> Secure Enrollment
                      </span>
                      <button
                        type="submit"
                        className="bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-semibold text-xs py-3 px-6 rounded-md shadow-md transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <ShoppingCart size={14} />
                        <span>Enroll & Add to Cart</span>
                      </button>
                    </div>

                  </form>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
