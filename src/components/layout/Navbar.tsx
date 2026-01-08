import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
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
        <Link href="/" className="relative h-12 w-48 transition-opacity hover:opacity-80">
           <Image 
              src="/images/FOXTROVE-Gold.png" 
              alt="FoxTrove" 
              fill
              className="object-contain object-left"
              priority
           />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-10">
            <Link href="#methodology" className="text-sm font-medium text-gray-300 hover:text-white hover:tracking-wide transition-all duration-300 uppercase tracking-wider relative group">
                Methodology
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
             <Link href="#verticals" className="text-sm font-medium text-gray-300 hover:text-white hover:tracking-wide transition-all duration-300 uppercase tracking-wider relative group">
                Verticals
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
            <Link href="/elite">
              <Button size="sm" className="h-10 px-6 font-bold relative overflow-hidden bg-[linear-gradient(110deg,rgba(212,175,55,0.9),45%,rgba(255,255,255,0.6),55%,rgba(212,175,55,0.9))] bg-[length:200%_100%] animate-shimmer text-black border border-yellow-400/50 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all uppercase tracking-wide [text-shadow:0px_1px_0px_rgba(255,255,255,0.25)] opacity-90 hover:opacity-100">
                Explore Elite Partnership
              </Button>
            </Link>
        </div>
      </div>
    </nav>
  );
}
