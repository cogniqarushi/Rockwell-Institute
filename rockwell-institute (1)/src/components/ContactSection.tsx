import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldCheck, ClipboardCheck, ArrowRight, CornerDownRight } from 'lucide-react';

interface ContactSectionProps {
  onAddInquiry?: (inquiry: any) => void;
}

export default function ContactSection({ onAddInquiry }: ContactSectionProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'new_license',
    message: ''
  });
  
  const [success, setSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const randomTicket = `RKW-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomTicket);

    const ticketData = {
      ...form,
      id: randomTicket,
      date: new Date().toLocaleTimeString(),
      status: 'Admissions Desk Assigned'
    };

    if (onAddInquiry) {
      onAddInquiry(ticketData);
    }

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        topic: 'new_license',
        message: ''
      });
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base font-bold text-brand-gold tracking-widest uppercase font-display">
            Contact Admissions
          </h2>
          <p className="mt-2 text-3xl md:text-4xl font-serif font-bold text-brand-navy tracking-tight">
            Here to Help You Succeed
          </p>
          <p className="mt-3 text-stone-600 text-sm leading-relaxed">
            Have questions about Washington licensing requirements, class schedules, or exam preparation options? Our responsive academic advising desk is standing by.
          </p>
        </div>

        {/* Contact Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-serif font-bold text-brand-navy tracking-tight">
                Academic Office Details
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Rockwell Institute is headquartered in Bellevue, WA. Candidates can register online or visit our office during business hours to purchase physical textbooks, speak with enrollment officers, or submit testing documents.
              </p>

              {/* Contact Information Rows */}
              <div className="space-y-5 pt-2">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-4 rounded-lg bg-white/70 border border-brand-gold/20 hover:border-brand-gold/50 transition-all shadow-sm glass-premium">
                  <div className="h-10 w-10 rounded-md bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy shrink-0">
                    <Phone size={18} className="text-brand-gold" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-stone-400 font-extrabold uppercase tracking-wider block">Toll-Free Registrar Desk</span>
                    <a href="tel:+18002219347" className="text-base font-bold text-brand-navy hover:text-brand-burgundy transition-colors">+1 (800) 221-9347</a>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Monday – Friday, 8:00 AM – 5:00 PM PST</span>
                  </div>
                </div>
 
                {/* Email */}
                <div className="flex items-start gap-3.5 p-4 rounded-lg bg-white/70 border border-brand-gold/20 hover:border-brand-gold/50 transition-all shadow-sm glass-premium">
                  <div className="h-10 w-10 rounded-md bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy shrink-0">
                    <Mail size={18} className="text-brand-gold" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] text-stone-400 font-extrabold uppercase tracking-wider block">General Inquiries</span>
                    <span className="text-base font-bold text-brand-navy block">info@rockwellinstitute.com</span>
                    <span className="text-[10px] text-stone-500 block mt-0.5">Most inquiries are answered in under 2 business hours.</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-4 rounded-lg bg-white/70 border border-brand-gold/20 hover:border-brand-gold/50 transition-all shadow-sm glass-premium">
                  <div className="h-10 w-10 rounded-md bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy shrink-0">
                    <MapPin size={18} className="text-brand-gold" />
                  </div>
                  <div className="text-left flex-grow">
                    <span className="text-[10px] text-stone-400 font-extrabold uppercase tracking-wider block">Bellevue Campus Location</span>
                    <span className="text-sm font-bold text-brand-navy block mt-0.5">13218 NE 20th St</span>
                    <span className="text-xs text-stone-500 font-medium block">Bellevue, Washington, USA (98005)</span>
                  </div>
                </div>

              </div>

              {/* Interactive map card */}
              <div className="w-full h-48 rounded-xl overflow-hidden border border-brand-gold/20 shadow-sm relative group bg-white/70 glass-premium mt-4">
                <iframe
                  title="Contact Bellevue Campus Map"
                  src="https://maps.google.com/maps?q=13218%20NE%2020th%20Street%2C%20Bellevue%2C%20Washington%2098005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-navy/90 text-white px-2.5 py-1 rounded text-[10px] font-semibold flex items-center gap-1 shadow-xs">
                  <MapPin size={11} className="text-brand-gold" />
                  <span>Bellevue Headquarters</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=13218+NE+20th+St,+Bellevue,+WA+98005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-white hover:bg-stone-50 border border-stone-200 text-brand-navy hover:text-brand-burgundy font-bold text-[10px] px-3 py-1.5 rounded-md transition-colors shadow-xs flex items-center gap-1 cursor-pointer"
                >
                  <span>Directions</span>
                  <CornerDownRight size={10} className="text-brand-gold" />
                </a>
              </div>
            </div>

            {/* Quick response stats */}
            <div className="bg-brand-navy text-stone-100 p-5 rounded-lg border border-brand-gold/15 flex items-center gap-4 text-left">
              <div className="h-12 w-12 rounded bg-brand-burgundy/10 flex items-center justify-center text-brand-gold border border-brand-burgundy/30 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <span className="text-xs font-semibold text-brand-gold block">Admissions SLA Policy</span>
                <p className="text-[11px] text-stone-300 leading-normal mt-0.5">
                  Our admissions board answers submitted tickets during business hours in under <strong>45 minutes</strong> on average.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-stone-50 rounded-xl border border-stone-200 p-6 md:p-8 relative">
              
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="h-16 w-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                      <ClipboardCheck size={32} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-brand-navy">Admissions Request Logged!</h3>
                    <p className="text-xs text-stone-500 mt-2 max-w-sm">
                      Your inquiry has been registered with ticket <strong>{ticketId}</strong>. A Washington registrar coordinator will call or email you shortly.
                    </p>

                    <div className="mt-6 bg-white border border-stone-200 rounded-md p-4 max-w-md w-full text-left text-xs text-stone-600 space-y-2.5">
                      <div className="font-bold text-brand-navy border-b border-stone-100 pb-1.5 flex justify-between">
                        <span>Ticket Dashboard Summary</span>
                        <span className="text-[10px] text-green-600">{success ? '● Active Inquiry' : ''}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Student Name:</span>
                        <span className="font-medium text-stone-800">{form.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-medium text-stone-800">{form.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Assigned Desk:</span>
                        <span className="font-bold text-brand-burgundy">Bellevue Admissions Unit</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <h3 className="text-lg font-serif font-bold text-brand-navy mb-1 text-left flex items-center gap-1.5">
                      <MessageSquare size={18} className="text-brand-burgundy" /> Inquiry / Callback Form
                    </h3>
                    <p className="text-xs text-stone-500 mb-6 text-left">
                      Fill out this quick callback form and our registrar team will contact you directly to configure your program path.
                    </p>

                    <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                            Your Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Alex Smith"
                            className="w-full text-xs p-2.5 border border-stone-300 rounded-md bg-white focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy focus:outline-hidden"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                            Inquiry Topic
                          </label>
                          <select
                            value={form.topic}
                            onChange={(e) => setForm({ ...form, topic: e.target.value })}
                            className="w-full text-xs p-2.5 border border-stone-300 rounded-md bg-white focus:ring-1 focus:ring-brand-burgundy focus:outline-hidden"
                          >
                            <option value="new_license">Earn Real Estate Broker License (90 Hr)</option>
                            <option value="cram_course">Exam Prep Cram Course Prep</option>
                            <option value="first_renewal">Broker First Renewal CE (30 Hr)</option>
                            <option value="general_ce">General Continuing Education</option>
                            <option value="corporate">Agency / Bulk Group Training</option>
                            <option value="books">Textbook & Logistics Support</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="alex@smith.com"
                            className="w-full text-xs p-2.5 border border-stone-300 rounded-md bg-white focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy focus:outline-hidden"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="(425) 555-0190"
                            className="w-full text-xs p-2.5 border border-stone-300 rounded-md bg-white focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy focus:outline-hidden"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                          Inquiry Details / Message
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="How can our Bellevue registrar team assist you? Specify if you require printed textbooks or online login support."
                          className="w-full text-xs p-2.5 border border-stone-300 rounded-md bg-white focus:ring-1 focus:ring-brand-burgundy focus:border-brand-burgundy focus:outline-hidden"
                        />
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-[10px] text-stone-400 flex items-center gap-1">
                          <ShieldCheck size={13} className="text-green-600" /> Data encrypted & secure
                        </span>
                        
                        <button
                          type="submit"
                          className="bg-brand-burgundy hover:bg-brand-burgundy-dark text-white font-semibold text-xs py-3 px-6 rounded-md shadow-md transition-all flex items-center gap-2 cursor-pointer hover-lift border border-brand-gold/15"
                        >
                          <span>Log Admissions Ticket</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>

                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
