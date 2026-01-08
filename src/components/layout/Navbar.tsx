import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NavDropdown } from '@/components/ui/nav-dropdown';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 h-[90px] transition-all duration-300">
      {/* Background with Nano Texture */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
         <Image
            src="/images/header-bg.png"
            alt="Header Background"
            fill
            className="object-cover opacity-90"
            quality={100}
            priority
         />
         <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      </div>

      {/* Premium Gradient Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
      
      <div className="container mx-auto px-6 h-full flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/" className="relative h-12 w-48 transition-opacity hover:opacity-80" onClick={() => setIsMobileMenuOpen(false)}>
           <Image 
              src="/images/FOXTROVE-Gold.png" 
              alt="FoxTrove" 
              fill
              className="object-contain object-left"
              priority
           />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white hover:tracking-wide transition-all duration-300 uppercase tracking-wider relative group">
                Manifesto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <NavDropdown 
                label="Verticals" 
                href="/verticals"
                items={[
                    { label: 'Overview', href: '/verticals', description: 'See all industry cores' },
                    { label: 'Home Services', href: '/home-services', description: 'HVAC, Plumbing, Electrical' },
                    { label: 'Med Spa', href: '/med-spa', description: 'Clinics & Wellness Centers' },
                    { label: 'Construction', href: '/construction', description: 'General Contractors & Builders' },
                ]}
            />

            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white hover:tracking-wide transition-all duration-300 uppercase tracking-wider relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
            <Link href="/elite">
              <Button size="sm" className="h-10 px-6 font-bold relative overflow-hidden bg-[linear-gradient(110deg,rgba(212,175,55,0.9),45%,rgba(255,255,255,0.6),55%,rgba(212,175,55,0.9))] bg-[length:200%_100%] animate-shimmer text-black border border-yellow-400/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all uppercase tracking-wide [text-shadow:0px_1px_0px_rgba(255,255,255,0.25)] opacity-90 hover:opacity-100">
                Explore Elite Partnership
              </Button>
            </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
        >
            <Menu className="w-8 h-8" />
        </button>
      </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed inset-0 z-[100] bg-[#0B1120] md:hidden flex flex-col"
                >
                    {/* Header */}
                    <div className="h-[90px] flex items-center justify-between px-6 border-b border-white/10">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative h-10 w-40">
                             <Image 
                                src="/images/FOXTROVE-Gold.png" 
                                alt="FoxTrove" 
                                fill
                                className="object-contain object-left"
                             />
                        </Link>
                        <button 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white p-2 hover:bg-white/10 rounded-md"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        <div className="space-y-6">
                             <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors">
                                Manifesto
                             </Link>
                             
                             <div className="space-y-4">
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Verticals</div>
                                <div className="pl-4 space-y-4 border-l border-white/10">
                                    <Link href="/verticals" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl text-gray-300 hover:text-white">Overview</Link>
                                    <Link href="/home-services" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl text-gray-300 hover:text-white">Home Services</Link>
                                    <Link href="/med-spa" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl text-gray-300 hover:text-white">Med Spa</Link>
                                    <Link href="/construction" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl text-gray-300 hover:text-white">Construction</Link>
                                </div>
                             </div>

                             <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-2xl font-serif text-white hover:text-[#D4AF37] transition-colors">
                                Contact
                             </Link>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <Link href="/elite" onClick={() => setIsMobileMenuOpen(false)}>
                                <Button className="w-full h-14 text-lg font-bold bg-[#D4AF37] text-black hover:bg-[#b4941f]">
                                    Apply For Elite Partner
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </nav>
  );
}

