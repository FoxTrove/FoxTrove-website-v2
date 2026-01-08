'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have a utils file for merging classes

interface NavDropdownProps {
  label: string;
  href?: string;
  items: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export function NavDropdown({ label, href, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href={href || '#'}
        className={cn(
            "flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider py-2",
            isOpen && "text-white"
        )}
      >
        {label}
        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-64 pt-2"
          >
            <div className="bg-[#0B1120]/95 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl overflow-hidden">
                <div className="p-2 space-y-1">
                    {items.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href}
                            className="block p-3 rounded-sm hover:bg-white/5 transition-colors group/item"
                        >
                            <div className="text-sm font-bold text-white group-hover/item:text-[#D4AF37] transition-colors mb-0.5">
                                {item.label}
                            </div>
                            {item.description && (
                                <div className="text-xs text-gray-500 group-hover/item:text-gray-400">
                                    {item.description}
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
