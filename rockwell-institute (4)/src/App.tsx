import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from './types';

// Importing Custom Rebuilt Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedCourses from './components/FeaturedCourses';
import LearningOptions from './components/LearningOptions';
import SuccessHighlights from './components/SuccessHighlights';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import LicenseRequirementCalculator from './components/LicenseRequirementCalculator';
import EnrollmentCTA from './components/EnrollmentCTA';
import Testimonials3D from './components/Testimonials3D';
import CampusMap from './components/CampusMap';
import GeminiChatbot from './components/GeminiChatbot';
import StudentSuccessTicker from './components/StudentSuccessTicker';
import AestheticGallery from './components/AestheticGallery';
import ScrollToTop from './components/ScrollToTop';

import { ShoppingCart, Trash2, ShieldCheck, Lock, CheckCircle, Ticket, Calendar, Phone, GraduationCap } from 'lucide-react';

interface CartItem {
  id: string;
  course: Course;
  selectedFormat: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [inquiries, setInquiries] = useState<any[]>([]);

  // Checkout states
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'form' | 'success'>('cart');
  const [checkoutForm, setCheckoutForm] = useState({ name: '', email: '', phone: '', card: '', expiry: '', cvc: '' });
  const [purchaseReceipt, setPurchaseReceipt] = useState<any>(null);

  // Filter propagation from Hero
  const [courseFilter, setCourseFilter] = useState<'licensing' | 'examprep' | 'ce' | 'books' | 'all'>('all');

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Scroll to top when active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  const handleAddToCart = (course: Course, selectedFormat: string) => {
    // Check if course already added
    const alreadyExists = cart.some(item => item.course.id === course.id);
    if (alreadyExists) {
      // Open cart to show user
      setIsCartOpen(true);
      return;
    }

    const newItem: CartItem = {
      id: `${course.id}-${Date.now()}`,
      course,
      selectedFormat
    };

    setCart([...cart, newItem]);
    setIsCartOpen(true);
    setCheckoutStep('cart'); // Reset step
  };

  const handleRemoveFromCart = (itemId: string) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const handleAddInquiry = (newInquiry: any) => {
    setInquiries([newInquiry, ...inquiries]);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `RKW-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setPurchaseReceipt({
      orderNumber,
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.course.price, 0),
      buyer: checkoutForm.name,
      email: checkoutForm.email
    });
    setCheckoutStep('success');
  };

  const handleCompletePurchase = () => {
    setCart([]);
    setIsCartOpen(false);
    setCheckoutStep('cart');
    setCheckoutForm({ name: '', email: '', phone: '', card: '', expiry: '', cvc: '' });
    // Redirect to success / dashboard anchor
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBrowseCoursesWithFilter = (filter: 'licensing' | 'examprep' | 'ce' | 'books' | 'all' = 'all') => {
    setCourseFilter(filter);
    setActiveTab('courses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F4] select-none text-[#1F2825] font-sans relative overflow-hidden">
      
      {/* Real-time Dynamic Cursor Follower glow ball */}
      <motion.div
        className="hidden md:block fixed pointer-events-none rounded-full bg-radial from-brand-gold/15 to-transparent blur-3xl -z-5 w-[380px] h-[380px]"
        animate={{
          x: mousePosition.x - 190,
          y: mousePosition.y - 190,
        }}
        transition={{
          type: "spring",
          damping: 45,
          stiffness: 65,
          mass: 0.6
        }}
      />

      {/* Premium Ambient Background Visual Elements */}
      <div className="absolute top-[4%] left-[-15%] w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] ambient-glow-blur rounded-full opacity-[0.45] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '18s' }}></div>
      <div className="absolute top-[35%] right-[-15%] w-[50vw] h-[50vw] md:w-[35vw] md:h-[35vw] ambient-glow-blur rounded-full opacity-[0.35] pointer-events-none -z-10" style={{ transform: 'rotate(45deg)' }}></div>
      <div className="absolute bottom-[15%] left-[-10%] w-[55vw] h-[55vw] md:w-[38vw] md:h-[38vw] ambient-glow-blur rounded-full opacity-[0.4] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '24s' }}></div>
      
      {/* Interactive 3D Floating Orbs and moving geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Floating Orb 1 */}
        <motion.div
          animate={{
            y: [0, -35, 35, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[12%] right-[10%] w-24 h-24 rounded-full bg-gradient-to-tr from-brand-gold/15 to-transparent border border-brand-gold/20 backdrop-blur-xs flex items-center justify-center opacity-70"
          style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        >
          <div className="w-12 h-12 rounded-full border border-brand-gold/10 bg-brand-gold/5 shadow-inner"></div>
        </motion.div>

        {/* Floating Orb 2 */}
        <motion.div
          animate={{
            y: [0, 45, -45, 0],
            x: [0, -30, 30, 0],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[48%] left-[8%] w-32 h-32 rounded-3xl bg-gradient-to-br from-brand-burgundy/5 to-brand-gold/5 border border-brand-gold/10 backdrop-blur-xs flex items-center justify-center opacity-50"
        >
          <div className="w-16 h-16 rounded-2xl border border-brand-gold/5 rotate-45"></div>
        </motion.div>

        {/* Floating Orb 3 */}
        <motion.div
          animate={{
            y: [0, -25, 25, 0],
            x: [0, 40, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[25%] right-[5%] w-20 h-20 rounded-full bg-gradient-to-bl from-brand-burgundy/10 to-transparent border border-brand-burgundy/10 opacity-60"
        />

        {/* Floating Orb 4 */}
        <motion.div
          animate={{
            y: [0, 30, -30, 0],
            x: [0, -25, 25, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[75%] left-[20%] w-16 h-16 rounded-full bg-gradient-to-r from-brand-gold/10 to-brand-burgundy/5 border border-brand-gold/10 opacity-45"
        />
      </div>

      {/* Ultra-subtle luxury dots mesh overlay */}
      <div className="absolute inset-0 luxury-grid opacity-[0.7] pointer-events-none -z-20"></div>

      {/* Universal Sticky Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Tab Controller with motion transition wrappers */}
      <main className="grow">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Animated Landing Hero */}
              <Hero 
                onBrowseCourses={handleBrowseCoursesWithFilter}
                onOpenCalculator={() => setActiveTab('calculator')}
              />

              {/* Dynamic Live Success Marquee Feed */}
              <StudentSuccessTicker />

              {/* Flex Learning Formats */}
              <LearningOptions onBrowseCourses={handleBrowseCoursesWithFilter} />

              {/* Course Catalog (Featured preview) */}
              <FeaturedCourses onAddToCart={handleAddToCart} initialFilter="all" />

              {/* Academic Milestones & Statistics */}
              <SuccessHighlights />

              {/* 3D Interactive Success Testimonials */}
              <Testimonials3D />

              {/* Aesthetic Portfolio Gallery Grid */}
              <AestheticGallery />

              {/* Bellevue HQ Interactive Google Map Campus */}
              <CampusMap />

              {/* Enrollment CTA Section */}
              <EnrollmentCTA 
                onBrowseCourses={() => handleBrowseCoursesWithFilter('all')}
                onOpenContact={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />

              {/* Active Tickets log if any exists in current session */}
              {inquiries.length > 0 && (
                <section className="bg-stone-100 py-10 border-b border-stone-200">
                  <div className="max-w-4xl mx-auto px-4 text-left">
                    <h3 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-4 flex items-center gap-1.5">
                      <Ticket size={16} className="text-brand-burgundy" />
                      Active Student Inquiry Tickets ({inquiries.length})
                    </h3>
                    <div className="space-y-3">
                      {inquiries.map((inq) => (
                        <div key={inq.id} className="bg-white p-4 rounded-lg border border-stone-200 text-xs flex justify-between items-center gap-4 shadow-sm">
                          <div>
                            <span className="font-semibold text-brand-burgundy block">{inq.name} ({inq.email})</span>
                            <span className="text-stone-500 mt-1 block">Topic: <strong className="text-stone-700">{inq.topic}</strong> • Logged at: {inq.date}</span>
                          </div>
                          <span className="bg-brand-gold/10 border border-brand-gold/20 text-brand-navy font-bold px-3 py-1 rounded text-[10px] uppercase">
                            {inq.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
            </motion.div>
          )}

          {activeTab === 'courses' && (
            <motion.div
              key="courses"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FeaturedCourses onAddToCart={handleAddToCart} initialFilter={courseFilter} />
            </motion.div>
          )}

          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LicenseRequirementCalculator 
                onAddCourseToCart={handleAddToCart} 
                setActiveTab={setActiveTab}
              />
            </motion.div>
          )}

          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AboutUs />
              <SuccessHighlights />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ContactSection onAddInquiry={handleAddInquiry} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Universal Footer with map and social linkages */}
      <Footer setActiveTab={setActiveTab} />

      {/* Slide-over Registration Shopping Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
            />

            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
              >
                {/* Drawer Header */}
                <div className="p-6 bg-brand-navy text-stone-100 flex items-center justify-between border-b border-brand-burgundy/20">
                  <h2 className="text-lg font-serif font-bold tracking-tight flex items-center gap-2">
                    <ShoppingCart size={18} className="text-brand-gold animate-pulse" />
                    <span>Selected Enrollments ({cart.length})</span>
                  </h2>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-stone-400 hover:text-white transition-colors cursor-pointer text-sm font-semibold"
                  >
                    ✕ Close
                  </button>
                </div>

                {/* Main Slide-over Content Section */}
                <div className="grow overflow-y-auto p-6 text-left">
                  {checkoutStep === 'cart' && (
                    <div className="space-y-6">
                      {cart.length > 0 ? (
                        <>
                          <div className="space-y-4">
                            {cart.map((item) => (
                              <div key={item.id} className="p-4 rounded-lg bg-stone-50 border border-stone-200 flex justify-between gap-4 text-xs">
                                <div className="space-y-1">
                                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-brand-gold bg-brand-navy/5 px-2 py-0.5 rounded-sm">
                                    Approved • {item.selectedFormat}
                                  </span>
                                  <h4 className="font-bold text-brand-navy pt-1 leading-snug">{item.course.title}</h4>
                                  <span className="text-stone-500 block">Duration: {item.course.hours} Credits</span>
                                </div>
                                
                                <div className="flex flex-col justify-between items-end">
                                  <span className="font-bold text-sm text-brand-burgundy">${item.course.price}</span>
                                  <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="p-1.5 text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                                    aria-label="Delete item"
                                  >
                                    <Trash2 size={15} />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Order Summary Calculations */}
                          <div className="border-t border-stone-200 pt-4 space-y-2">
                            <div className="flex justify-between text-xs text-stone-500 font-medium">
                              <span>Syllabus Tuition:</span>
                              <span>${cart.reduce((sum, item) => sum + item.course.price, 0).toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-xs text-stone-500 font-medium">
                              <span>Washington State DOL Filing:</span>
                              <span className="text-green-600 font-semibold">FREE Reporting Included</span>
                            </div>
                            <div className="flex justify-between text-sm font-bold text-brand-navy pt-2 border-t border-stone-100">
                              <span>Total Investment:</span>
                              <span>${cart.reduce((sum, item) => sum + item.course.price, 0).toFixed(2)}</span>
                            </div>
                          </div>

                          {/* Proceed to checkout CTA */}
                          <button
                            onClick={() => setCheckoutStep('form')}
                            className="w-full bg-brand-burgundy hover:bg-brand-burgundy-dark text-white py-3.5 rounded-md font-semibold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Lock size={14} className="text-brand-gold" />
                            <span>Proceed to Secure Registration</span>
                          </button>
                        </>
                      ) : (
                        <div className="py-16 text-center space-y-4">
                          <ShoppingCart className="mx-auto text-stone-300" size={48} />
                          <h3 className="text-sm font-semibold text-stone-500">Your enrollment list is empty</h3>
                          <p className="text-xs text-stone-400">Browse Washington's approved real estate catalog and select "Quick Enroll" to get started.</p>
                          <button
                            onClick={() => {
                              setIsCartOpen(false);
                              setActiveTab('courses');
                            }}
                            className="bg-brand-burgundy text-white text-xs font-semibold py-2.5 px-6 rounded-md shadow-xs cursor-pointer"
                          >
                            Explore Courses
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {checkoutStep === 'form' && (
                    <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                      <div className="border-b border-stone-100 pb-3">
                        <h3 className="font-bold text-brand-navy text-sm">Student Billing & Credentials</h3>
                        <p className="text-[10px] text-stone-400 mt-0.5">Please provide credit details to create your secure student portal.</p>
                      </div>

                      <div className="space-y-3.5">
                        <div>
                          <label className="block text-[10px] font-bold text-stone-700 uppercase tracking-wider mb-1">Student Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Jane Doe"
                            value={checkoutForm.name}
                            onChange={(e) => setCheckoutForm({...checkoutForm, name: e.target.value})}
                            className="w-full text-xs p-2.5 border border-stone-300 rounded focus:outline-hidden focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-stone-700 uppercase tracking-wider mb-1">Email</label>
                            <input
                              type="email"
                              required
                              placeholder="jane@doe.com"
                              value={checkoutForm.email}
                              onChange={(e) => setCheckoutForm({...checkoutForm, email: e.target.value})}
                              className="w-full text-xs p-2.5 border border-stone-300 rounded focus:outline-hidden focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-stone-700 uppercase tracking-wider mb-1">Phone</label>
                            <input
                              type="tel"
                              required
                              placeholder="(425) 555-0190"
                              value={checkoutForm.phone}
                              onChange={(e) => setCheckoutForm({...checkoutForm, phone: e.target.value})}
                              className="w-full text-xs p-2.5 border border-stone-300 rounded focus:outline-hidden focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-stone-700 uppercase tracking-wider mb-1">Credit Card Number</label>
                          <input
                            type="text"
                            required
                            placeholder="4111 2222 3333 4444"
                            value={checkoutForm.card}
                            onChange={(e) => setCheckoutForm({...checkoutForm, card: e.target.value})}
                            className="w-full text-xs p-2.5 border border-stone-300 rounded focus:outline-hidden focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] font-bold text-stone-700 uppercase tracking-wider mb-1">Expiry Date</label>
                            <input
                              type="text"
                              required
                              placeholder="MM/YY"
                              value={checkoutForm.expiry}
                              onChange={(e) => setCheckoutForm({...checkoutForm, expiry: e.target.value})}
                              className="w-full text-xs p-2.5 border border-stone-300 rounded focus:outline-hidden focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold text-stone-700 uppercase tracking-wider mb-1">CVC Code</label>
                            <input
                              type="text"
                              required
                              placeholder="123"
                              value={checkoutForm.cvc}
                              onChange={(e) => setCheckoutForm({...checkoutForm, cvc: e.target.value})}
                              className="w-full text-xs p-2.5 border border-stone-300 rounded focus:outline-hidden focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-stone-50 p-3 rounded text-[10px] text-stone-500 leading-normal border border-stone-150 flex items-start gap-1.5">
                        <ShieldCheck size={14} className="text-green-600 mt-0.5 shrink-0" />
                        <span>I understand this is a simulated transaction. All credentials generated are valid for testing purposes inside this preview app.</span>
                      </div>

                      <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                        <button 
                          type="button" 
                          onClick={() => setCheckoutStep('cart')}
                          className="text-xs text-stone-500 font-semibold cursor-pointer"
                        >
                          ← Back to Cart
                        </button>
                        <button
                          type="submit"
                          className="bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-semibold text-xs py-3 px-6 rounded-md shadow-md transition-all cursor-pointer"
                        >
                          Complete Tuition Payment
                        </button>
                      </div>
                    </form>
                  )}

                  {checkoutStep === 'success' && purchaseReceipt && (
                    <div className="text-center py-6 space-y-6">
                      <div className="h-16 w-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center text-green-600 mx-auto animate-bounce">
                        <CheckCircle size={32} />
                      </div>
                      
                      <div className="space-y-1">
                        <h3 className="text-lg font-serif font-bold text-brand-navy">Registration Successful!</h3>
                        <p className="text-xs text-stone-500">Your student dashboard is now ready.</p>
                      </div>

                      {/* Receipt card */}
                      <div className="bg-stone-50 rounded-lg p-5 border border-stone-200 text-left text-xs text-stone-600 space-y-3">
                        <div className="font-bold text-brand-navy border-b border-stone-200 pb-2 flex justify-between">
                          <span>Official Receipt</span>
                          <span>{purchaseReceipt.orderNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Student Account:</span>
                          <span className="font-medium text-stone-800">{purchaseReceipt.buyer}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Authorized Email:</span>
                          <span className="font-medium text-stone-800">{purchaseReceipt.email}</span>
                        </div>
                        <div className="border-t border-stone-100 pt-2 font-semibold text-brand-navy flex justify-between">
                          <span>Tuition Charge Paid:</span>
                          <span>${purchaseReceipt.total.toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="bg-amber-50 border border-amber-100 p-3.5 rounded text-[11px] text-amber-800 text-left leading-normal flex items-start gap-1.5">
                        <span className="font-bold shrink-0">📱 Access Instructions:</span>
                        <span>We have registered your courses on our simulated Bellevue LMS database. Tap the button below to close checkout and return to the main dashboard.</span>
                      </div>

                      <button
                        onClick={handleCompletePurchase}
                        className="w-full bg-brand-navy hover:bg-stone-900 text-white py-3.5 rounded font-bold text-xs shadow-sm transition-colors cursor-pointer"
                      >
                        Launch Student Portal
                      </button>
                    </div>
                  )}
                </div>

                {/* Drawer Footer info */}
                <div className="p-4 bg-stone-50 border-t border-stone-200 text-[10px] text-stone-400 font-medium text-center">
                  🔐 Secured by Rockwell Registrar • Approved School License #WA-RES-074
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <GeminiChatbot />
      <ScrollToTop />

    </div>
  );
}
