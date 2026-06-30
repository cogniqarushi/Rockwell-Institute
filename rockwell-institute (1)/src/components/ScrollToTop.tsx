import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      // Only show when the user is near the bottom of the page (near the footer/bottom sections)
      // and has scrolled at least 1000px from the top.
      if (distanceFromBottom < 900 && scrollTop > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Trigger check on load/mount too in case they are already at the bottom
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="scroll-to-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: 1.12, 
            y: -4,
            boxShadow: "0 20px 25px -5px rgba(163, 22, 51, 0.25), 0 10px 10px -5px rgba(163, 22, 51, 0.15)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-24 z-40 bg-white/95 backdrop-blur-md text-brand-burgundy border-2 border-brand-burgundy/15 p-3.5 rounded-full shadow-lg hover:bg-brand-burgundy hover:text-white hover:border-brand-burgundy transition-all duration-300 flex items-center justify-center cursor-pointer group focus:outline-hidden"
          title="Scroll to Top"
          aria-label="Scroll to top"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          {/* Subtle 3D inner rings */}
          <span className="absolute inset-0 rounded-full border border-brand-gold/0 group-hover:border-brand-gold/30 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
          
          <motion.div
            style={{ transform: 'translateZ(10px)' }}
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
          >
            <ArrowUp size={20} className="stroke-[2.5px]" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
