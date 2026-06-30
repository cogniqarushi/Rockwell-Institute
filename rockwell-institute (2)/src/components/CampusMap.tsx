import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Phone, Mail, Compass } from 'lucide-react';

export default function CampusMap() {
  const addressQuery = "13218 NE 20th Street, Bellevue, Washington 98005";
  const encodedAddress = encodeURIComponent(addressQuery);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="campus-map-section" className="py-20 bg-transparent border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Campus Information */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 bg-brand-burgundy/5 border border-brand-burgundy/15 px-3 py-1 rounded-full text-[11px] font-extrabold text-brand-burgundy uppercase tracking-widest mb-6 self-start">
              <Compass size={12} className="text-brand-gold animate-spin-slow" />
              <span>Official WA Headquarters</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy tracking-tight leading-tight">
              Our Bellevue Campus & Learning Center
            </h2>
            
            <p className="mt-4 text-stone-500 text-sm leading-relaxed">
              Rockwell’s main administrative headquarters and live-lecture classrooms are located off NE 20th St in Bellevue. Accessible from SR-520 and I-405, we welcome candidates from across the Puget Sound for in-person materials pick-up, physical textbooks, study counseling, and live reviews.
            </p>

            {/* Direct Information Grid */}
            <div className="mt-8 space-y-4">
              
              <div className="flex gap-4 p-4 rounded-xl bg-white/70 border border-brand-gold/20 hover:border-brand-gold/50 transition-all shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-brand-burgundy/10 flex items-center justify-center text-brand-burgundy shrink-0">
                  <MapPin size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Physical Address</h4>
                  <p className="text-xs text-stone-500 mt-1 leading-normal">
                    13218 NE 20th Street, Bellevue, Washington 98005
                  </p>
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-brand-burgundy hover:text-brand-burgundy-dark font-semibold mt-2 group"
                  >
                    <span>Get Direct Driving Directions</span>
                    <Navigation size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white/70 border border-brand-gold/20 hover:border-brand-gold/50 transition-all shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-brand-navy/10 flex items-center justify-center text-brand-navy shrink-0">
                  <Clock size={20} className="text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-navy">Admissions & Support Hours</h4>
                  <p className="text-xs text-stone-500 mt-1 leading-normal">
                    Monday – Thursday: 8:30 AM – 5:00 PM <br />
                    Friday: 8:30 AM – 4:00 PM <br />
                    Saturday – Sunday: Closed (Online Learning Active)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs text-stone-600 font-semibold">
                  <Phone size={14} className="text-brand-burgundy" />
                  <span>+1 (800) 221-9347</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-stone-600 font-semibold">
                  <Mail size={14} className="text-brand-burgundy" />
                  <span>support@rockwell.edu</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Interactive Iframe */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden border border-stone-200 shadow-xl bg-stone-100 relative group"
            >
              <iframe
                title="Rockwell Institute Bellevue Campus Map"
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-brand-navy text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md border border-brand-gold/35 flex items-center gap-1.5 pointer-events-none">
                <MapPin size={13} className="text-brand-gold" />
                <span>13218 NE 20th St, Bellevue</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
