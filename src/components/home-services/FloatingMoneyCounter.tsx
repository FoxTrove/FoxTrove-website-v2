'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Floating money particle component
const MoneyParticle = ({ delay, x, value }: { delay: number; x: number; value: string }) => (
    <motion.div
        initial={{ y: 200, opacity: 0, scale: 0.5 }}
        animate={{ 
            y: -200, 
            opacity: [0, 0.4, 0], // Fade in then out
            scale: [0.8, 1, 0.8] 
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            delay: delay,
            ease: "linear",
            repeatDelay: Math.random() * 2
        }}
        className="absolute bottom-0 text-red-600/30 font-bold text-4xl md:text-6xl font-mono select-none pointer-events-none z-0"
        style={{ left: `${x}%` }}
    >
        {value}
    </motion.div>
);

export function FloatingMoneyCounter() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    // Generate random particles
    const particles = [
        { value: "-$50", x: 10, delay: 0 },
        { value: "-$120", x: 25, delay: 2 },
        { value: "-$300", x: 40, delay: 1 },
        { value: "-$85", x: 60, delay: 4 },
        { value: "-$250", x: 75, delay: 0.5 },
        { value: "-$1000", x: 85, delay: 3 },
        { value: "-$40", x: 15, delay: 5 },
        { value: "-$500", x: 50, delay: 2.5 },
    ];

    return (
        <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden pointer-events-none z-0">
             {/* Gradient fade to ensure particles disappear cleanly at top - much lighter now */}
             <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-transparent to-transparent z-10 opacity-30"></div>
             
             {particles.map((p, i) => (
                 <MoneyParticle key={i} {...p} />
             ))}
        </div>
    );
}
