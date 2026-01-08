'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Gem, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileEliteCTA() {
  const [stage, setStage] = useState<'hidden' | 'full' | 'minimized'>('hidden');

  useEffect(() => {
    // Stage 1: Appear after 3 seconds
    const appearTimer = setTimeout(() => {
        setStage('full');
    }, 3000);

    // Stage 2: Minimize after 8 seconds (total 11s from start)
    const minimizeTimer = setTimeout(() => {
        setStage('minimized');
    }, 11000);

    return () => {
        clearTimeout(appearTimer);
        clearTimeout(minimizeTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-[60] md:hidden pointer-events-none p-4 w-full flex justify-end">
      <AnimatePresence mode="wait">
        
        {/* FULL BANNER MODE */}
        {stage === 'full' && (
            <motion.div
                key="full-cta"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ type: 'spring', damping: 20 }}
                className="w-full pointer-events-auto bg-[#0B1120]/95 backdrop-blur-xl border border-[#D4AF37]/30 p-4 rounded-xl shadow-2xl relative"
            >
                <button 
                    onClick={() => setStage('minimized')}
                    className="absolute -top-2 -right-2 bg-black border border-white/20 rounded-full p-1 text-white hover:text-red-400"
                >
                    <X className="w-3 h-3" />
                </button>

                <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0">
                        <Gem className="w-5 h-5 text-[#D4AF37] animate-pulse" />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">Elite Partner Program</h4>
                        <p className="text-xs text-[#D4AF37]">For $2M+ Businesses</p>
                    </div>
                </div>
                <Link href="/elite">
                    <Button className="w-full bg-[#D4AF37] text-black font-bold h-10 hover:bg-[#b4941f]">
                        Apply Now
                    </Button>
                </Link>
            </motion.div>
        )}

        {/* MINIMIZED GEM MODE */}
        {stage === 'minimized' && (
            <motion.div
                 key="minimized-cta"
                 initial={{ x: 100, opacity: 0, scale: 0.5 }}
                 animate={{ x: 0, opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 whileHover={{ scale: 1.1 }}
                 className="pointer-events-auto"
            >
                <Link href="/elite">
                    <div className="w-14 h-14 bg-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/30 animate-pulse-slow"></div>
                        <Gem className="w-6 h-6 text-black relative z-10" />
                    </div>
                </Link>
            </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
