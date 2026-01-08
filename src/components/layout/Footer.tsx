import Link from 'next/link';
import { ShieldCheck, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-xl font-serif text-white tracking-tight">FoxTrove<span className="text-[#D4AF37]">.ai</span></span>
            </Link>
            <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
              The AI aggregation and adaptation layer for high-performance businesses. We embed directly into your operations to architect outcome-certain growth.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37]/60">
              <ShieldCheck className="w-4 h-4" />
              <span>SECURE_CONNECTION_ESTABLISHED</span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-serif mb-6">Exploration</h4>
            <ul className="space-y-4 text-gray-500 font-mono text-xs">
              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors">HOME_BASE</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">THE_MANIFESTO</Link>
              </li>
              <li>
                <Link href="/elite" className="hover:text-[#D4AF37] transition-colors">ELITE_DIVISION</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-serif mb-6">Verticals</h4>
            <ul className="space-y-4 text-gray-500 font-mono text-xs">
              <li>
                <Link href="/home-services" className="hover:text-[#D4AF37] transition-colors">HOME_SERVICES</Link>
              </li>
              <li>
                <Link href="/med-spa" className="hover:text-[#D4AF37] transition-colors">MED_SPA</Link>
              </li>
              <li>
                <Link href="/construction" className="hover:text-[#D4AF37] transition-colors">CONSTRUCTION</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-60">
          <div className="text-xs text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} FoxTrove AI Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-gray-600 font-mono">
             <div className="flex items-center gap-2">
                <Lock className="w-3 h-3" />
                <span>AUTHORIZED PERSONNEL ONLY</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
