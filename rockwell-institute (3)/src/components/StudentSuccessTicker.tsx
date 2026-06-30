import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, CheckCircle2, UserCheck, Play } from 'lucide-react';

const RECENT_ACTIVITIES = [
  {
    id: 1,
    icon: <Trophy size={13} className="text-brand-gold animate-bounce" />,
    text: "Sarah M. from Bellevue just passed the WA Broker State Exam! (94% Score)",
    type: "pass"
  },
  {
    id: 2,
    icon: <UserCheck size={13} className="text-emerald-400" />,
    text: "James L. from Seattle enrolled in the 90-Hour Pre-Licensing Package",
    type: "enroll"
  },
  {
    id: 3,
    icon: <CheckCircle2 size={13} className="text-brand-gold" />,
    text: "David K. from Tacoma instantly certified and reported CE hours to WA DOL",
    type: "ce"
  },
  {
    id: 4,
    icon: <Sparkles size={13} className="text-yellow-300 animate-pulse" />,
    text: "Melissa P. from Spokane scored 98% on the Cram Media Mock Exam",
    type: "prep"
  },
  {
    id: 5,
    icon: <Trophy size={13} className="text-brand-gold animate-bounce" />,
    text: "Robert T. from Vancouver passed PSI Washington Exam on first attempt!",
    type: "pass"
  },
  {
    id: 6,
    icon: <UserCheck size={13} className="text-emerald-400" />,
    text: "Elena G. from Redmond completed her 60-Hour Real Estate Fundamentals",
    type: "enroll"
  },
];

export default function StudentSuccessTicker() {
  // Duplicate list to achieve seamless infinite loops
  const duplicatedList = [...RECENT_ACTIVITIES, ...RECENT_ACTIVITIES, ...RECENT_ACTIVITIES];

  return (
    <div className="w-full bg-brand-navy border-y border-brand-gold/25 overflow-hidden py-3 relative z-10 shadow-md">
      {/* Absolute side overlays for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-navy to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-navy to-transparent z-20 pointer-events-none" />
      
      <div className="flex items-center">
        {/* Static Prefix Title */}
        <div className="shrink-0 bg-brand-burgundy px-3.5 py-1 text-[10px] font-bold tracking-wider text-brand-gold uppercase flex items-center gap-1.5 rounded-sm border border-brand-gold/20 ml-4 relative z-30 shadow-md">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
          </span>
          <span>Live Success Feed</span>
        </div>

        {/* Scrolling tape wrapper */}
        <div className="overflow-hidden w-full relative">
          <motion.div 
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex items-center gap-8 whitespace-nowrap pl-6"
          >
            {duplicatedList.map((item, idx) => (
              <div 
                key={`${item.id}-${idx}`} 
                className="inline-flex items-center gap-2 bg-brand-navy-light/45 border border-stone-800 hover:border-brand-gold/30 px-3 py-1.5 rounded-full transition-colors group select-none cursor-pointer"
              >
                <span className="bg-stone-900/50 p-1 rounded-full shrink-0 flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="text-[11px] font-medium text-stone-200 tracking-wide font-sans group-hover:text-white transition-colors">
                  {item.text}
                </span>
                <span className="text-[9px] text-stone-500 font-bold uppercase ml-1">
                  • {item.type}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
