'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface StickyMobileCTAProps {
    onOpen: () => void;
}

export function StickyMobileCTA({ onOpen }: StickyMobileCTAProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 600px (past hero usually)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0B1120]/90 backdrop-blur-lg border-t border-white/10 md:hidden"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <p className="text-xs text-gray-400 mb-1">Limited Availability</p>
                            <p className="text-sm font-bold text-white leading-none">Don&apos;t Let Revenue Slip.</p>
                        </div>
                        <Button 
                            onClick={onOpen}
                            className="bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-600/20"
                        >
                            Secure Your Spot
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
