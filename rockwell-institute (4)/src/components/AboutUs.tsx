import { motion } from 'motion/react';
import { Calendar, Building, Landmark, Compass, Award, ShieldCheck, HelpCircle } from 'lucide-react';

export default function AboutUs() {
  const milestones = [
    {
      year: '1974',
      title: 'Foundation in Bellevue',
      desc: 'Rockwell Institute was established in Bellevue, Washington, targeting high-quality legal & contractual licensing instruction for aspiring real estate brokers.'
    },
    {
      year: '1988',
      title: 'First Prop-Tech Textbook',
      desc: 'Authored and published our first state-specific real estate fundamentals curriculum. It became the gold-standard textbook used by dozens of colleges.'
    },
    {
      year: '1999',
      title: 'Launch of Online Platform',
      desc: 'Pioneered one of the first approved online real estate learning systems in Washington State, offering remote study ahead of the regulatory curve.'
    },
    {
      year: '2014',
      title: '100,000 Students Served',
      desc: 'Achieved our historic milestone of training over 100,000 licensed brokers, managing brokers, and appraisal professionals.'
    },
    {
      year: 'Present',
      title: 'Redesigned Modern Classrooms',
      desc: 'Equipping students with mobile-friendly dashboards, live-lecture digital integrations, and a 90%+ pass guarantee.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-transparent border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-bold text-gold-gradient tracking-widest uppercase block mb-2 font-display">
              Our 50-Year Heritage
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-gradient tracking-tight leading-tight">
              Empowering Real Estate Excellence Since 1974
            </h2>
            <p className="mt-4 text-stone-600 text-sm leading-relaxed">
              For over half a century, Rockwell Institute has stood as a pillar of real estate education in Washington State. Established in Bellevue with a dedication to academic rigorousness, we have guided generations of real estate professionals from their very first licensing course through to senior managing broker levels.
            </p>
            <p className="mt-3 text-stone-600 text-sm leading-relaxed">
              We believe real estate education shouldn’t just prepare you to pass a test — it should prepare you to operate a compliant, prosperous brokerage. That’s why our textbooks are authored in-house by licensed real estate attorneys, veteran industry economists, and curriculum design authorities.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-white/80 p-6 rounded-lg border border-brand-gold/20 shadow-xs text-left glass-premium">
              <div className="h-10 w-10 rounded bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy mb-4">
                <Landmark size={20} className="text-brand-gold" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">Authoritative Faculty</h3>
              <p className="text-stone-500 text-xs mt-2 leading-relaxed">
                Courses and exam questions are vetted directly by real estate legal counsels for absolute compliance.
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-lg border border-brand-gold/20 shadow-xs text-left glass-premium">
              <div className="h-10 w-10 rounded bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy mb-4">
                <ShieldCheck size={20} className="text-brand-gold" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">DOL Accredited</h3>
              <p className="text-stone-500 text-xs mt-2 leading-relaxed">
                100% certified by the Washington Department of Licensing to fulfill RCW regulatory guidelines.
              </p>
            </div>

            <div className="bg-white/80 rounded-lg border border-brand-gold/20 shadow-xs overflow-hidden col-span-2 grid grid-cols-1 sm:grid-cols-2 glass-premium">
              <div className="p-6 text-left flex flex-col justify-center">
                <div className="h-10 w-10 rounded bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy mb-4">
                  <Compass size={20} className="text-brand-gold" />
                </div>
                <h3 className="text-base font-bold text-brand-navy">Our Bellevue Campus</h3>
                <p className="text-stone-500 text-xs mt-2 leading-relaxed">
                  Our main administrative headquarters and live-lecture classrooms are located off NE 20th St, accessible to candidates across the Puget Sound region.
                </p>
              </div>
              <div className="h-44 sm:h-auto bg-stone-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                  alt="Bellevue Administrative Campus"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline Segment */}
        <div className="border-t border-stone-200/80 pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-serif font-bold text-brand-navy tracking-tight">
              Chronology of Milestones
            </h3>
            <p className="text-xs text-stone-500 mt-2">
              Explore our journey from a local Bellevue classroom into Washington's most trusted online and live school.
            </p>
          </div>

          {/* Interactive timeline rows with staggers */}
          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-0">
            {/* Center line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-stone-200 -translate-x-1/2 hidden sm:block"></div>
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-200 sm:hidden"></div>

            <div className="space-y-12">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    key={idx}
                    className="relative flex flex-col sm:flex-row items-stretch"
                  >
                    {/* Circle marker */}
                    <div className="absolute left-6 sm:left-1/2 h-4 w-4 rounded-full bg-brand-burgundy border-4 border-white -translate-x-1/2 z-10 shadow-sm top-1"></div>

                    {/* Left box (Even index gets text, Odd index gets empty helper on desktop) */}
                    <div className={`w-full sm:w-1/2 flex justify-start sm:justify-end pr-0 sm:pr-8 pl-12 sm:pl-0 text-left ${isEven ? 'sm:text-right' : 'sm:opacity-0 pointer-events-none hidden sm:flex'}`}>
                      <div>
                        <span className="inline-block px-2.5 py-1 bg-brand-burgundy text-brand-gold text-[11px] font-bold rounded-sm mb-2 font-display">
                          {m.year}
                        </span>
                        <h4 className="text-base font-bold text-brand-navy">{m.title}</h4>
                        <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                    {/* Right box (Odd index gets text, Even index gets empty helper on desktop) */}
                    <div className={`w-full sm:w-1/2 flex justify-start pl-12 sm:pl-8 text-left ${!isEven ? '' : 'sm:opacity-0 pointer-events-none hidden sm:flex'}`}>
                      <div>
                        <span className="inline-block px-2.5 py-1 bg-brand-burgundy text-brand-gold text-[11px] font-bold rounded-sm mb-2 font-display">
                          {m.year}
                        </span>
                        <h4 className="text-base font-bold text-brand-navy">{m.title}</h4>
                        <p className="text-stone-500 text-xs mt-1.5 leading-relaxed">{m.desc}</p>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Core Values / Promise Block */}
        <div className="mt-24 bg-white rounded-xl border border-stone-200 p-8 md:p-12 text-left relative overflow-hidden shadow-xs">
          <div className="max-w-3xl">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-navy tracking-tight flex items-center gap-2">
              Our Educational Promise
            </h3>
            <p className="mt-4 text-stone-600 text-sm leading-relaxed">
              At Rockwell, we hold that professional real estate education should be accessible, flexible, and accurate. We promise to provide courses that reflect the latest legislative changes, to stand by our 90%+ first-time state exam pass rate, and to support you at every single step of your professional real estate journey.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-xs font-serif font-bold text-brand-navy">
                R
              </div>
              <div>
                <span className="text-xs font-bold text-brand-navy block">The Rockwell Academic Board</span>
                <span className="text-[10px] text-stone-400 font-medium">Bellevue, Washington</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
