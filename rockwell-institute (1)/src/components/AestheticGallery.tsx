import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Layers, Sparkles, Home, MapPin, Eye, Calendar, BookOpen, User } from 'lucide-react';
import TiltCard from './TiltCard';

interface GalleryItem {
  id: string;
  category: 'estates' | 'campus' | 'materials' | 'all';
  categoryLabel: string;
  title: string;
  description: string;
  imageUrl: string;
  location?: string;
  badge?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'estate-1',
    category: 'estates',
    categoryLabel: 'Luxury Estates',
    title: 'Mid-Century Modern Waterfront',
    description: 'A spectacular contemporary glass residence situated along Mercer Island shorelines, illustrating the premium Washington dream homes our brokers represent.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    location: 'Mercer Island, WA',
    badge: 'Premier Listing'
  },
  {
    id: 'campus-1',
    category: 'campus',
    categoryLabel: 'Bellevue HQ',
    title: 'Bellevue Administrative Campus',
    description: 'Our state-of-the-art learning center and administrative classrooms situated off NE 20th St, featuring modern multimedia spaces for live lecture series.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    location: 'Bellevue, WA',
    badge: 'HQ Classrooms'
  },
  {
    id: 'materials-1',
    category: 'materials',
    categoryLabel: 'Curriculum & Materials',
    title: 'Attorney-Authored Courseware',
    description: 'Rockwell proprietary textbooks, course guides, and exam preparation guides authored by local real estate lawyers and economists for perfect legal compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000',
    location: 'Published in WA',
    badge: '98% Pass Rate Books'
  },
  {
    id: 'estate-2',
    category: 'estates',
    categoryLabel: 'Luxury Estates',
    title: 'Contemporary Bellevue Mansion',
    description: 'A masterpiece of Northwest contemporary architecture featuring cedar logs, high glass window walls, and manicured landscaping in Meydenbauer Bay.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    location: 'Bellevue, WA',
    badge: 'Active Showcase'
  },
  {
    id: 'materials-2',
    category: 'materials',
    categoryLabel: 'Curriculum & Materials',
    title: 'Dynamic Student Dashboard',
    description: 'Interactive custom learning management software. Access quizzes, full-length timed mock exams, and real-time support from your phone, tablet, or desktop.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000',
    location: 'Mobile Friendly',
    badge: 'Cram Media Exam Prep'
  },
  {
    id: 'campus-2',
    category: 'campus',
    categoryLabel: 'Bellevue HQ',
    title: 'Collaborative Study Spaces',
    description: 'Bright, open-air study areas and private mock testing cubicles designed to give Rockwell candidates quiet environments for final cram sessions.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000',
    location: 'Seattle Center, WA',
    badge: 'Study Lounge'
  }
];

export default function AestheticGallery() {
  const [selectedCategory, setSelectedCategory] = useState<'estates' | 'campus' | 'materials' | 'all'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filterTags = [
    { id: 'all', label: 'All Media' },
    { id: 'estates', label: 'Luxury Northwest Estates' },
    { id: 'campus', label: 'Instruction Facilities' },
    { id: 'materials', label: 'Course Books & Portals' }
  ] as const;

  const filteredItems = selectedCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 md:py-24 bg-[#FAF9F6] border-t border-brand-gold/15 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 luxury-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-burgundy/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-brand-burgundy/5 border border-brand-burgundy/15 px-3 py-1 rounded-full text-[10px] font-bold text-brand-burgundy uppercase tracking-wider mb-3">
            <Sparkles size={12} className="text-brand-gold animate-spin-slow" />
            <span>Rockwell Creative Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy tracking-tight">
            The World of Rockwell Excellence
          </h2>
          <p className="mt-3.5 text-stone-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Explore our state-approved administrative facilities, premium attorney-authored physical textbooks, and stunning luxury properties representing the Pacific Northwest brokerage career waiting for you.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {filterTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => setSelectedCategory(tag.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                selectedCategory === tag.id
                  ? 'bg-brand-burgundy text-brand-gold-light border-brand-gold shadow-md'
                  : 'bg-white text-stone-700 border-stone-200/80 hover:border-brand-gold/50 hover:text-brand-burgundy'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Bento Grid layout with Framer Motion transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                key={item.id}
                className="h-full"
              >
                <TiltCard
                  scale={1.03}
                  maxTilt={10}
                  glowColor="rgba(192, 158, 91, 0.15)"
                  className="group flex flex-col h-full bg-white rounded-xl border border-stone-200/60 shadow-sm hover:shadow-xl overflow-hidden cursor-pointer"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient visual layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-3.5 right-3.5 bg-brand-navy/90 text-brand-gold text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded shadow-md border border-brand-gold/20">
                        {item.badge}
                      </span>
                    )}

                    {/* Overlaid location and bottom metadata */}
                    <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white">
                      {item.location && (
                        <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wide bg-stone-900/40 backdrop-blur-xs px-2 py-0.5 rounded-sm">
                          <MapPin size={10} className="text-brand-gold" />
                          {item.location}
                        </span>
                      )}
                      
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold-light group-hover:underline flex items-center gap-1">
                        View Details <Eye size={10} />
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 text-left flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-brand-burgundy block mb-1">
                        {item.categoryLabel}
                      </span>
                      <h3 className="text-base font-serif font-bold text-brand-navy tracking-tight group-hover:text-brand-burgundy transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-stone-500 text-xs mt-2.5 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveItem(item)}
                      className="mt-4 pt-3.5 border-t border-stone-100 w-full text-left text-xs font-semibold text-brand-navy group-hover:text-brand-burgundy flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Learn more about this format</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="text-brand-gold"
                      >
                        →
                      </motion.span>
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Popup Drawer */}
        <AnimatePresence>
          {activeItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveItem(null)}
                className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs cursor-pointer"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full relative z-10 border border-brand-gold/30"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveItem(null)}
                  className="absolute top-4 right-4 h-8 w-8 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center z-20 shadow-md cursor-pointer transition-colors"
                >
                  ✕
                </button>

                <div className="h-56 w-full relative bg-stone-100">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 text-white">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold block mb-1">
                      {activeItem.categoryLabel}
                    </span>
                    <h3 className="text-lg md:text-xl font-serif font-bold tracking-tight">
                      {activeItem.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 text-left space-y-4">
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {activeItem.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-stone-100 text-xs text-stone-500">
                    <div className="flex items-center gap-2">
                      <MapPin size={15} className="text-brand-gold" />
                      <div>
                        <span className="block font-bold text-stone-700 text-[10px] uppercase">Location</span>
                        <span>{activeItem.location || "Washington State"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Sparkles size={15} className="text-brand-gold" />
                      <div>
                        <span className="block font-bold text-stone-700 text-[10px] uppercase">Feature</span>
                        <span>Official Certification</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveItem(null)}
                      className="bg-brand-navy hover:bg-brand-burgundy hover:text-white text-brand-gold font-semibold text-xs px-6 py-2.5 rounded-md transition-colors shadow-xs cursor-pointer border border-brand-gold/25"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
