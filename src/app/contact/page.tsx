'use client';

import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white selection:bg-[#D4AF37]/30">
      
      {/* HERO */}
      <Section className="pt-40 pb-20 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                Let&apos;s Talk.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
                Have questions about our vertical cores? Need a custom architecture? We are here to help you navigate the age of AI.
            </p>
         </div>
      </Section>

      {/* CONTACT OPTIONS */}
      <Section className="py-20 bg-[#050505] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
              
              {/* General Inquiries */}
              <div className="p-8 rounded-sm bg-white/[0.02] border border-white/5 flex flex-col items-center text-center hover:border-blue-500/30 transition-colors">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                      <Mail className="w-8 h-8"/>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">General Inquiries</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      For general questions, media, or partnerships. We monitor this inbox daily.
                  </p>
                  <a href="mailto:hello@foxtrove.ai" className="text-xl font-bold text-white hover:text-blue-400 transition-colors border-b border-white/10 pb-1 hover:border-blue-400">
                      hello@foxtrove.ai
                  </a>
              </div>

               {/* Elite Partnership */}
               <div className="p-8 rounded-sm bg-[#D4AF37]/5 border border-[#D4AF37]/20 flex flex-col items-center text-center hover:border-[#D4AF37]/50 transition-colors">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 text-[#D4AF37]">
                      <MessageSquare className="w-8 h-8"/>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">Elite Partnership</h3>
                  <p className="text-[#D4AF37]/80 text-sm leading-relaxed mb-8">
                      Ready to build a custom AI architecture? Skip the inbox and apply directly for our Elite Partner program.
                  </p>
                  <Link href="/elite">
                      <Button className="bg-[#D4AF37] text-black hover:bg-[#b4941f] font-bold px-8">
                          Apply Now <ArrowRight className="w-4 h-4 ml-2"/>
                      </Button>
                  </Link>
              </div>

          </div>
      </Section>
    </main>
  );
}
