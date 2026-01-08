'use client';

import { motion } from 'framer-motion';

const INTEGRATIONS = [
    "ServiceTitan",
    "Housecall Pro",
    "Jobber",
    "Salesforce",
    "HubSpot",
    "Google Calendar",
    "FieldEdge",
    "Workiz",
    "Zapier",
    "Clio"
];

export function IntegrationMarquee() {
    return (
        <div className="w-full bg-[#0F172A] border-y border-white/5 py-10 overflow-hidden relative z-20">
             <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Universal Integration With Your Stack</p>
             </div>
            
            <div className="flex relative items-center">
                 {/* Left Fade */}
                 <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none"></div>
                 {/* Right Fade */}
                 <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none"></div>

                <motion.div 
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}
                >
                    {/* Duplicate list 3 times to ensure smooth loop */}
                    {[...INTEGRATIONS, ...INTEGRATIONS, ...INTEGRATIONS].map((integration, i) => (
                        <div key={i} className="text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-400 transition-colors cursor-default select-none">
                            {integration}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
