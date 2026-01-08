'use client';

import { motion } from 'framer-motion';

const INTEGRATIONS = [
    "Zenoti", "Aesthetic Record", "Jane.app", "Boulevard", 
    "Phorest", "Vagaro", "Booker", "Mindbody", 
    "DrChrono", "ModMed"
];

// Duplicate for marquee effect
const MARQUEE_ITEMS = [...INTEGRATIONS, ...INTEGRATIONS, ...INTEGRATIONS];

export function IntegrationStrip() {
    return (
        <div className="w-full bg-[#0a0a0a] border-y border-white/5 overflow-hidden py-8 relative">
            {/* Gradient Fade Triggers */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

            <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
                 <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Seamlessly Integrates With Your Stack</p>
            </div>

            <div className="flex">
                <motion.div 
                    className="flex gap-16 items-center px-4"
                    animate={{ x: "-50%" }}
                    transition={{ 
                        duration: 30, 
                        repeat: Infinity, 
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {MARQUEE_ITEMS.map((item, i) => (
                        <div key={i} className="flex-shrink-0 group cursor-default">
                           <span className="text-2xl md:text-3xl font-serif text-white/30 group-hover:text-rose-200/80 transition-colors whitespace-nowrap">
                                {item}
                           </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
