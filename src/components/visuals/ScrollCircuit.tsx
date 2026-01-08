'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ScrollCircuit() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to drawing path length
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="absolute top-12 left-0 w-full h-[100px] pointer-events-none hidden md:block z-0">
       <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          {/* Base Path (faint) */}
          <path 
             d="M100 50 L 1100 50" 
             stroke="rgba(255,255,255,0.05)" 
             strokeWidth="2" 
             fill="none" 
             strokeDasharray="10 10"
          />
          
          {/* Animated "Energy" Path */}
          <motion.path
             d="M100 50 L 1100 50"
             stroke="url(#circuit-gradient)"
             strokeWidth="3"
             fill="none"
             style={{ pathLength }}
          />
          
          <defs>
             <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#10B981" />
             </linearGradient>
          </defs>
       </svg>
    </div>
  );
}
