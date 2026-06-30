import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock, ExternalLink, BookmarkCheck } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-stone-300 border-t border-brand-burgundy/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand & History */}
        <div className="flex flex-col gap-5">
          <div 
            onClick={() => handleScrollToTop('home')} 
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/12WU5wZWTP3suDWOm0iHY3RAtKW8nvk18" 
              alt="Rockwell Institute Logo" 
              className="h-12 w-auto object-contain bg-white/95 py-1 px-3 rounded-md shadow-sm hover:bg-white transition-colors"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <p className="text-sm text-stone-400 leading-relaxed">
            Washington State's preeminent real estate school for over 50 years. Empowering professionals through industry-certified licensing and continuing education programs.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {/* Social Icons with animated hovers */}
            <a 
              href="https://www.facebook.com/RockwellInstitute/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-brand-burgundy transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.instagram.com/rockwellinstitute/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-brand-burgundy transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://x.com/RockwellSchool" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-stone-800 text-stone-400 hover:text-white hover:bg-brand-burgundy transition-all duration-300"
              aria-label="Twitter / X"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-white tracking-wider mb-6 border-b border-stone-800 pb-3 font-display">
            Syllabus & Programs
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <button 
                onClick={() => handleScrollToTop('courses')} 
                className="hover:text-brand-gold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookmarkCheck size={14} className="text-brand-burgundy" />
                <span>Broker Licensing Pack (90hr)</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScrollToTop('courses')} 
                className="hover:text-brand-gold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookmarkCheck size={14} className="text-brand-burgundy" />
                <span>Broker Exam Prep Cram Course</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScrollToTop('courses')} 
                className="hover:text-brand-gold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookmarkCheck size={14} className="text-brand-burgundy" />
                <span>Continuing Education (CE)</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScrollToTop('courses')} 
                className="hover:text-brand-gold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookmarkCheck size={14} className="text-brand-burgundy" />
                <span>Study Materials & Textbooks</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScrollToTop('calculator')} 
                className="hover:text-brand-gold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BookmarkCheck size={14} className="text-brand-burgundy" />
                <span>Washington Licensing Guide</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info & Hours */}
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="text-base font-semibold text-white tracking-wider mb-2 border-b border-stone-800 pb-3 font-display">
            Get in Touch
          </h3>
          <div className="flex items-start gap-3">
            <Phone size={16} className="text-brand-gold mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-stone-200">Toll-Free Phone:</span>
              <a href="tel:+18002219347" className="hover:text-brand-gold text-stone-300 mt-0.5">+1 (800) 221-9347</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={16} className="text-brand-gold mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-stone-200">Admissions Email:</span>
              <span className="text-stone-300 mt-0.5">info@rockwellinstitute.com</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={16} className="text-brand-gold mt-1 shrink-0" />
            <div className="flex flex-col">
              <span className="font-semibold text-stone-200">Support Hours:</span>
              <span className="text-stone-400 mt-0.5">Monday – Friday: 8:00 AM – 5:00 PM (PST)</span>
            </div>
          </div>
        </div>

        {/* Physical Campus & Map */}
        <div className="flex flex-col">
          <h3 className="text-base font-semibold text-white tracking-wider mb-6 border-b border-stone-800 pb-3 font-display">
            Bellevue Campus Map
          </h3>
          <p className="text-xs text-stone-400 mb-3 flex items-start gap-1.5">
            <MapPin size={14} className="text-brand-burgundy shrink-0 mt-0.5" />
            <span>13218 NE 20th St, Bellevue, WA 98005</span>
          </p>
          
          {/* Interactive Responsive Iframe Map with clean rounded edges and elegant borders */}
          <div className="w-full h-36 rounded-lg overflow-hidden border border-stone-800 bg-stone-900 shadow-inner relative group">
            <iframe
              src="https://maps.google.com/maps?q=13218%20NE%2020th%20Street%2C%20Bellevue%2C%20Washington%2098005&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rockwell Bellevue Campus Map"
            ></iframe>
            <a 
              href="https://maps.google.com/?q=13218+NE+20th+St,+Bellevue,+WA+98005"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 bg-brand-navy/95 border border-stone-700 hover:bg-brand-burgundy px-2.5 py-1 rounded text-[10px] font-semibold text-white flex items-center gap-1 shadow-sm transition-colors"
            >
              Directions <ExternalLink size={10} />
            </a>
          </div>
        </div>

      </div>

      {/* Trademark bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span>&copy; {currentYear} Rockwell Institute. All Rights Reserved.</span>
          <span className="hidden sm:inline">|</span>
          <span>Washington Dept of Licensing Approved School</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => handleScrollToTop('about')} className="hover:text-brand-gold">About School</button>
          <span>•</span>
          <button onClick={() => handleScrollToTop('courses')} className="hover:text-brand-gold">Real Estate Programs</button>
          <span>•</span>
          <button onClick={() => handleScrollToTop('contact')} className="hover:text-brand-gold">Privacy & Support</button>
        </div>
      </div>
    </footer>
  );
}
