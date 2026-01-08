'use client';

import { Section } from '@/components/ui/section';
import { ShieldCheck, Network, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white selection:bg-[#D4AF37]/30">
      
      {/* HERO: The Philosophy */}
      <Section className="pt-40 pb-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
                Not A Vendor. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">An Adaptation Layer.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                We believe that mainly buying &quot;AI tools&quot; is a trap. The true leverage comes from embedding a partner who molds the technology around your specific business reality.
            </p>
         </div>
      </Section>

      {/* THE CORE BELIEF */}
      <Section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
              <div>
                  <div className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest mb-4">The Reality</div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">The &quot;Tool&quot; Trap</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                      Most businesses are now &quot;in the age of AI&quot;, but almost none are actually getting value from it. 
                      Leaders feel the pressure to &quot;do something,&quot; so they buy a chatbot or sign up for a pilot.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-8">
                       The result? <strong>95% of these initiatives fail.</strong> They fail because they start with a tool and go hunting for a problem. 
                       They leave the burden of &quot;figuring it out&quot; on your already-overwhelmed team.
                  </p>
                  
                  <div className="p-6 bg-red-500/5 border-l-2 border-red-500/50">
                      <p className="text-red-200 italic font-medium">
                          &quot;The core issue is not access to tools—it is the lack of a partner who can translate AI into your specific context.&quot;
                      </p>
                  </div>
              </div>
              <div className="relative h-[400px] bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10 overflow-hidden">
                   {/* Abstract visualization of chaos vs order */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <Network className="w-48 h-48 text-gray-700" />
                   </div>
                   <div className="absolute bottom-6 left-6 right-6">
                       <div className="bg-[#0B1120]/90 backdrop-blur border border-white/10 p-4 rounded-sm">
                           <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                               <span>Traditional Approach</span>
                               <span className="text-red-500 font-bold">FAILURE DETECTED</span>
                           </div>
                           <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                               <div className="w-[5%] h-full bg-red-500"></div>
                           </div>
                       </div>
                   </div>
              </div>
          </div>
      </Section>

      {/* OUR APPROACH */}
      <Section className="py-32 bg-[#0B1120]">
          <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The Aggregation Layer</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">We don&apos;t ask you to adapt to us. We adapt the future to you.</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
              {/* Card 1 */}
              <div className="p-8 bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors group">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Deep Context</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                      We embed as a partner inside your business. We don&apos;t just &quot;install software.&quot; We audit your goals, constraints, and bottlenecks to uncover the problems AI can truly impact.
                  </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors group">
                  <div className="w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mb-6 text-violet-400 group-hover:scale-110 transition-transform">
                      <Network className="w-6 h-6"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Aggregation</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                      We evaluate and combine multiple AI tools behind the scenes. Your team experiences one coherent system, not a fragmented mess of logins and subscriptions.
                  </p>
              </div>

               {/* Card 3 */}
               <div className="p-8 bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/30 transition-colors group">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-6 h-6"/>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Sovereignty</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                      We build systems that you own. As the landscape evolves, we swap components and upgrade capabilities without forcing you to rebuild your entire operation.
                  </p>
              </div>
          </div>

      </Section>

      {/* TWO MODES OF DEPLOYMENT */}
      <Section className="py-24 bg-[#050505] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
               <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">One Philosophy. Two Modes Of Deployment.</h2>
                   <p className="text-gray-400 max-w-2xl mx-auto">
                       Whether you need a specialized system adjacent to your current stack, or a complete operational overhaul, the engineering principle remains the same: <span className="text-white">Adaptation First.</span>
                   </p>
               </div>

               <div className="grid md:grid-cols-2 gap-12">
                   {/* Mode 1: Vertical Cores */}
                   <div className="p-8 md:p-12 rounded-sm border border-white/10 bg-white/[0.02] relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                       <div className="absolute top-0 right-0 p-4 opacity-50">
                            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest border border-blue-500/30 px-2 py-1 rounded-sm">Rapid Deployment</span>
                       </div>
                       <h3 className="text-2xl font-serif text-white mb-4">1. Vertical Cores</h3>
                       <p className="text-gray-400 leading-relaxed mb-8 min-h-[80px]">
                           For specific industries, we have already done the deep audit and adaptation work. These are pre-engineered systems designed to solve the exact, high-value bottlenecks of your sector (e.g., missed calls, patient no-shows).
                       </p>
                       <ul className="space-y-3 mb-8">
                           <li className="flex items-center gap-3 text-sm text-gray-300">
                               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                               <span>Instant Deployment (48-72 Hours)</span>
                           </li>
                           <li className="flex items-center gap-3 text-sm text-gray-300">
                               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                               <span>Pre-Trained on Industry Best Practices</span>
                           </li>
                           <li className="flex items-center gap-3 text-sm text-gray-300">
                               <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                               <span>Zero-Friction Integration</span>
                           </li>
                       </ul>
                       <Link href="/#examples">
                           <Button variant="outline" className="w-full border-white/10 hover:bg-blue-500/10 hover:text-blue-400 transition-colors">View Industry Solutions</Button>
                       </Link>
                   </div>

                   {/* Mode 2: Elite Partnership */}
                   <div className="p-8 md:p-12 rounded-sm border border-[#D4AF37]/20 bg-[#D4AF37]/5 relative overflow-hidden group hover:border-[#D4AF37]/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest border border-[#D4AF37]/30 px-2 py-1 rounded-sm">Full Architecture</span>
                       </div>
                       <h3 className="text-2xl font-serif text-white mb-4">2. The Elite Partnership</h3>
                       <p className="text-[#D4AF37]/80 leading-relaxed mb-8 min-h-[80px]">
                           For complex organizations ($2M+) with unique constraints. We embed directly into your company to architect bespoke AI infrastructure from the ground up, acting as your fractional AI executive team.
                       </p>
                       <ul className="space-y-3 mb-8">
                           <li className="flex items-center gap-3 text-sm text-[#D4AF37]/80">
                               <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                               <span>Custom-Built Architecture</span>
                           </li>
                           <li className="flex items-center gap-3 text-sm text-[#D4AF37]/80">
                               <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                               <span>Deep-Dive Operational Audit</span>
                           </li>
                           <li className="flex items-center gap-3 text-sm text-[#D4AF37]/80">
                               <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                               <span>Full IP Sovereignty</span>
                           </li>
                       </ul>
                       <Link href="/elite">
                           <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#b4941f] font-bold">Apply For Elite Partner</Button>
                       </Link>
                   </div>
               </div>
          </div>
      </Section>

      {/* FOOTER CTA */}
      <Section className="py-32 bg-[#050505] text-center border-t border-white/5">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-serif text-white mb-8">Stop Experimenting. Start Adapting.</h2>
              <p className="text-gray-400 mb-10 text-lg">
                  Let us show you what an actual AI architecture looks like for your business. No fluff. No jargon. Just engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/elite">
                       <Button size="lg" className="bg-[#D4AF37] hover:bg-[#b4941f] text-black font-bold h-14 px-8 rounded-full">
                           Explore Elite Partnership
                       </Button>
                  </Link>
                  <Link href="/">
                       <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5 h-14 px-8 rounded-full">
                           Back to Home
                       </Button>
                  </Link>
              </div>
          </div>
      </Section>

    </main>
  );
}
