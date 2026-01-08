'use client';

import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Hammer, Stethoscope, Briefcase } from 'lucide-react';

export default function VerticalsPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white selection:bg-[#D4AF37]/30">
      
      {/* HERO */}
      <Section className="pt-40 pb-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                Industry-Specific <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">AI Cores.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                Pre-engineered, battle-tested AI systems designed to solve the unique bottlenecks of your industry. Deployed in days, not months.
            </p>
         </div>
      </Section>

      {/* VERTICALS GRID */}
      <Section className="py-20 bg-[#050505] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
              
              {/* Home Services */}
              <div className="group relative p-8 rounded-sm bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.04] flex flex-col">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-7 h-7"/>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-blue-400 transition-colors">Home Services</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                      For HVAC, Plumbing, and Electrical businesses. Stop missing calls and chasing leads. Our AI handles intake, scheduling, and follow-ups 24/7.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-blue-500 rounded-full"></span> 24/7 Voice Receptionist
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-blue-500 rounded-full"></span> Automated Scheduling
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-blue-500 rounded-full"></span> Service Titan Integration
                        </li>
                  </ul>
                  <Link href="/home-services" className="mt-auto">
                      <Button variant="outline" className="w-full border-white/10 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 group">
                          View Solution <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                      </Button>
                  </Link>
              </div>

               {/* Med Spa */}
               <div className="group relative p-8 rounded-sm bg-white/[0.02] border border-white/5 hover:border-pink-500/30 transition-all duration-300 hover:bg-white/[0.04] flex flex-col">
                  <div className="w-14 h-14 bg-pink-500/10 rounded-full flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
                      <Stethoscope className="w-7 h-7"/>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-pink-400 transition-colors">Med Spas</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                      For Clinics and Wellness Centers. Elevate the patient experience. Automate booking, pre-treatment instructions, and post-care follow-ups.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-pink-500 rounded-full"></span> Patient Voice Concierge
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-pink-500 rounded-full"></span> EMR Integration
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-pink-500 rounded-full"></span> No-Show Reduction
                        </li>
                  </ul>
                  <Link href="/med-spa" className="mt-auto">
                      <Button variant="outline" className="w-full border-white/10 hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/30 group">
                          View Solution <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                      </Button>
                  </Link>
              </div>

               {/* Construction */}
               <div className="group relative p-8 rounded-sm bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-white/[0.04] flex flex-col">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                      <Hammer className="w-7 h-7"/>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-orange-400 transition-colors">Construction</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                      For General Contractors and Builders. Streamline project management, bid follow-ups, and subcontractor coordination.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-orange-500 rounded-full"></span> Project Bid Automation
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-orange-500 rounded-full"></span> Subcontractor Coord
                        </li>
                        <li className="flex items-center gap-2">
                             <span className="w-1 h-1 bg-orange-500 rounded-full"></span> Procore Integration
                        </li>
                  </ul>
                  <Link href="/construction" className="mt-auto">
                      <Button variant="outline" className="w-full border-white/10 hover:bg-orange-500/10 hover:text-orange-400 hover:border-orange-500/30 group">
                          View Solution <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                      </Button>
                  </Link>
              </div>

          </div>
      </Section>
    </main>
  );
}
