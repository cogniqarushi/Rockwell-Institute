import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, GraduationCap, MapPin, ShoppingCart, Award } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Header({ activeTab, setActiveTab, cartCount, onOpenCart }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses & Programs' },
    { id: 'calculator', label: 'License Guide' },
    { id: 'about', label: 'Our Story' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-stone-200/50 shadow-xs">
      {/* Premium Gradient Top-Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-brand-burgundy via-brand-gold to-brand-burgundy-light w-full"></div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div 
            onClick={() => setActiveTab('home')} 
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/12WU5wZWTP3suDWOm0iHY3RAtKW8nvk18" 
              alt="Rockwell Institute Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-[1.02] duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-brand-burgundy font-semibold' : 'text-stone-600 hover:text-brand-burgundy hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Cart and Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Cart Button */}
            <button 
              onClick={onOpenCart}
              className="relative p-2.5 text-stone-600 hover:text-brand-burgundy hover:bg-stone-50 rounded-full cursor-pointer transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-burgundy text-[10px] font-bold text-white shadow-sm ring-2 ring-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Main CTA */}
            <button
              onClick={() => setActiveTab('courses')}
              className="flex items-center gap-2 bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-medium text-sm py-2.5 px-5 rounded-md shadow-md hover:shadow-lg hover-lift btn-double-border transition-all cursor-pointer"
            >
              <GraduationCap size={16} className="text-brand-gold-light" />
              <span className="tracking-wide">Browse Catalog</span>
            </button>
          </div>

          {/* Mobile menu button & Cart */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Cart Button (Mobile) */}
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-stone-600 hover:text-brand-burgundy rounded-full cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={21} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-brand-burgundy text-[9px] font-bold text-white ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-stone-600 hover:text-brand-burgundy focus:outline-hidden cursor-pointer"
              aria-label="Main Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-stone-100 bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    activeTab === item.id
                      ? 'bg-brand-burgundy/5 text-brand-burgundy border-l-4 border-brand-burgundy font-semibold'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-brand-burgundy'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-stone-100 mt-2 flex flex-col gap-3 px-4">
                <button
                  onClick={() => {
                    setActiveTab('courses');
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-brand-burgundy text-white py-3 px-4 rounded-md font-medium text-sm shadow-sm"
                >
                  <GraduationCap size={16} className="text-brand-gold" />
                  Enroll in a Course
                </button>
                <div className="flex justify-center items-center gap-2 text-xs text-stone-500 font-medium py-1">
                  <Phone size={12} className="text-brand-burgundy" /> Toll-Free: 1-800-221-9347
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
