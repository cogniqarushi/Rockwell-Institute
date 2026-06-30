import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  glowColor?: string; // Optional custom glow overlay
}

export default function TiltCard({ 
  children, 
  className = '', 
  maxTilt = 12, 
  scale = 1.03,
  glowColor = 'rgba(163, 22, 51, 0.08)' // default subtle brand burgundy glow
}: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high performance rotation response
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), { stiffness: 150, damping: 15 });

  // Floating background light source glow that tracks the cursor position
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ['0%', '100%']), { stiffness: 150, damping: 15 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ['0%', '100%']), { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`relative rounded-xl transition-shadow duration-300 overflow-hidden ${className}`}
    >
      {/* Interactive cursor-tracking radial reflection glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 180px at ${glowX} ${glowY}, ${glowColor}, transparent)`,
          transform: 'translateZ(10px)'
        }}
      />
      
      {/* Inner wrapper with depth factor */}
      <div style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}
