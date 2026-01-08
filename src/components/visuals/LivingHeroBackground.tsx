'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Generate random particles
const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // %
    y: Math.random() * 100, // %
    size: Math.random() * 3 + 1, // px
    duration: Math.random() * 20 + 10, // s
    delay: Math.random() * 10, // s
  }));
};

export function LivingHeroBackground() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = generateParticles(30);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
       {/* Central Core - The "Aggregation Layer" */}
       <motion.div 
         animate={{ 
           scale: [1, 1.1, 1],
           opacity: [0.3, 0.5, 0.3],
         }}
         transition={{ 
           duration: 8, 
           repeat: Infinity,
           ease: "easeInOut"
         }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-transparent rounded-full blur-[100px] mix-blend-screen"
       />

       {/* Floating Particles - The "Tools" drifting in */}
       {particles.map((p) => (
         <motion.div
            key={p.id}
            className="absolute bg-white/10 rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
         />
       ))}

       {/* Grid Overlay for structure */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-30"></div>
    </div>
  );
}
