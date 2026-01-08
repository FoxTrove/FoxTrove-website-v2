import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { ArrowRight, Phone, Calendar, Hammer, Gem, ShieldCheck, Zap, Database } from 'lucide-react';
import { LivingHeroBackground } from '@/components/visuals/LivingHeroBackground';
import { MagneticButton } from '@/components/visuals/MagneticButton';
import { ScrollCircuit } from '@/components/visuals/ScrollCircuit';
import { ToolTrapVisual, AggregationLeverVisual } from '@/components/visuals/AdoptionGapVisuals';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050505] text-white overflow-hidden selection:bg-[#D4AF37]/30">
      
      {/* 1. HERO SECTION */}
      <Section className="pt-48 pb-32 relative">
         {/* Living Background */}
         <LivingHeroBackground />
         
         {/* Deep Glows */}
         <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
         
        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-gray-400 text-xs font-mono uppercase tracking-wider">System Status: Operational</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1] tracking-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
             Stop Buying AI Tools. <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F8F1D1] to-[#D4AF37] relative inline-block">
                Start Building Leverage.
                <div className="absolute -inset-1 blur-2xl bg-[#D4AF37]/20 -z-10"></div>
             </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.3s'}}>
             Access is easy. <span className="text-white font-medium">Adaptation is hard.</span> We bridge the gap between "having AI" and "profiting from AI" by architecting the custom aggregation layer your business is missing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
             <MagneticButton strength={0.3}>
                <Link 
                    href="#leverage" 
                    className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-sm bg-white px-8 font-medium text-black transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 animate-shimmer bg-[length:200%_100%]"></div>
                    <span className="text-lg tracking-wide">See The Leverage</span>
                </Link>
             </MagneticButton>
             
             <MagneticButton strength={0.1}>
                 <Button variant="ghost" className="text-gray-400 hover:text-white h-14 px-8 text-lg hover:bg-white/5 border border-transparent hover:border-white/10 rounded-sm transition-all">
                    The ROI Audit Framework
                 </Button>
             </MagneticButton>
          </div>

          {/* Trust Ticker */}
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 md:gap-24 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="text-center group hover:-translate-y-1 transition-transform cursor-default">
                  <span className="block text-4xl font-bold text-white mb-1 tabular-nums group-hover:text-[#D4AF37] transition-colors">$12M+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Revenue Automated</span>
              </div>
              <div className="text-center group hover:-translate-y-1 transition-transform cursor-default">
                  <span className="block text-4xl font-bold text-white mb-1 tabular-nums group-hover:text-[#D4AF37] transition-colors">40+</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Active Partners</span>
              </div>
              <div className="text-center group hover:-translate-y-1 transition-transform cursor-default">
                  <span className="block text-4xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">24/7</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">System Uptime</span>
              </div>
          </div>
        </div>
      </Section>

      {/* 2. THE 95% PROBLEM SECTION (AGITATION) */}
      <Section className="py-24 bg-[#050505] border-y border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-red-400 text-xs font-mono uppercase tracking-wider">Market Reality</span>
              </div>
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">95% Of AI Pilots Fail.</h2>
             <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
                 They fail because they start with a tool and hunt for a problem. They buy "access" instead of building "adaptation". 
                 <br/><br/>
                 Real value doesn't come from a chatbot. It comes from deep architectural changes that mold AI around your people, processes, and unique constraints.
             </p>
         </div>
      </Section>

      {/* 3. THE ADOPTION GAP (THE AHA!) */}
      <Section id="leverage" className="py-24 relative bg-[#050505] relative z-10">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">The Adoption Gap</h2>
               <p className="text-gray-400 text-lg">The only difference between a toy and a tool is integration.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative">
               {/* Left: The Trap */}
               <ToolTrapVisual />

               {/* Right: The Lever */}
               <AggregationLeverVisual />
            </div>
         </div>
      </Section>

      {/* 4. METHODOLOGY (THE PROCESS) */}
      <Section className="py-24 bg-[#0B1120] relative">
          <ScrollCircuit />
          
          <div className="text-center mb-16 px-4 relative z-10">
              <h2 className="text-3xl font-serif text-white mb-4">The Aggregation Protocol</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">We don't just "implement". We embed, distinct, and evolve.</p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 px-4 relative z-10">

              {/* Step 1 */}
              <div className="relative text-center group">
                  <div className="w-24 h-24 mx-auto bg-[#0B1120] border border-blue-500/30 rounded-full flex items-center justify-center relative z-10 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:scale-110 transition-transform duration-500 delay-100">
                      <ShieldCheck className="w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-colors" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Multi-Layer Audit</h3>
                  <p className="text-sm text-gray-400 leading-relaxed px-4">We act as a partner, not a vendor. We map problems from surface pain → upstream process → root cause to find leverage point standard tools miss.</p>
              </div>

               {/* Step 2 */}
               <div className="relative text-center group">
                  <div className="w-24 h-24 mx-auto bg-[#0B1120] border border-violet-500/30 rounded-full flex items-center justify-center relative z-10 mb-6 shadow-[0_0_30px_rgba(139,92,246,0.1)] group-hover:scale-110 transition-transform duration-500 delay-100">
                      <div className="text-violet-500 group-hover:text-violet-400 w-10 h-10 flex items-center justify-center font-mono text-xl font-bold transition-colors">{"{AI}"}</div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">The Aggregation Layer</h3>
                  <p className="text-sm text-gray-400 leading-relaxed px-4">We select and stitch together the right mix of AI capabilities. Your team experiences one coherent operating layer, not a mess of apps.</p>
              </div>

               {/* Step 3 */}
               <div className="relative text-center group">
                  <div className="w-24 h-24 mx-auto bg-[#0B1120] border border-emerald-500/30 rounded-full flex items-center justify-center relative z-10 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.1)] group-hover:scale-110 transition-transform duration-500 delay-100">
                      <Zap className="w-10 h-10 text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Adaptive Embedding</h3>
                  <p className="text-sm text-gray-400 leading-relaxed px-4">We design workflows that live inside the tools you already use. As new models emerge, we swap components without breaking your business.</p>
              </div>
          </div>
      </Section>

      {/* 5. VERTICALS (PROOF) */}
      <Section id="verticals" className="py-24 bg-secondary/30 relative z-10">
        <div className="text-center mb-16 px-4">
            <h2 className="text-3xl font-serif mb-4 text-white">Precision Engineered Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">While we serve any industry, here are examples of our deep vertical integrations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            
          {/* Home Services Card */}
          <Link href="/home-services" className="block group">
            <Card hoverEffect className="h-full border-t-4 border-t-blue-500 bg-[#111827] border-white/5">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <Phone className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-blue-400 transition-colors">Home Services</h3>
              <p className="text-gray-400 mb-4">The "Never Miss A Call" System</p>
              <div className="space-y-2 mb-6 text-sm text-gray-300">
                <p>• 24/7 AI Dispatcher & Booking Agent</p>
                <p>• Captures $50K+/yr in lost runtime</p>
              </div>
              <div className="text-blue-400 font-medium flex items-center text-sm">
                View Pilot Program <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Med Spa Card */}
          <Link href="/med-spa" className="block group">
            <Card hoverEffect className="h-full border-t-4 border-t-rose-400 bg-[#111827] border-white/5">
              <div className="bg-rose-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-rose-400/20 transition-colors">
                <Calendar className="text-rose-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-rose-300 transition-colors">Med Spas</h3>
              <p className="text-gray-400 mb-4">Patient Revenue Recovery</p>
               <div className="space-y-2 mb-6 text-sm text-gray-300">
                <p>• Eliminated No-Shows (90% reduction)</p>
                <p>• Automatically rebooks lost patients</p>
              </div>
              <div className="text-rose-400 font-medium flex items-center text-sm">
                View Reactivation Offer <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Construction Card */}
          <Link href="/construction" className="block group">
            <Card hoverEffect className="h-full border-t-4 border-t-amber-600 bg-[#111827] border-white/5">
              <div className="bg-amber-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600/20 transition-colors">
                <Hammer className="text-amber-600 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-amber-500 transition-colors">Construction</h3>
              <p className="text-gray-400 mb-4">Project Command Center</p>
               <div className="space-y-2 mb-6 text-sm text-gray-300">
                <p>• Automated back-office management</p>
                <p>• Turn chaos into competitive advantage</p>
              </div>
              <div className="text-amber-500 font-medium flex items-center text-sm">
                View Management System <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

        </div>
      </Section>

      {/* 6. ELITE PARTNERSHIP (THE OFFER/QUALIFIER) */}
      <Section className="py-32 relative overflow-hidden text-center border-y border-white/5 bg-[#080808]">
          <div className="absolute inset-0 bg-noise opacity-10"></div>
          {/* Subtle Gold Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-md mb-10">
                <Gem className="w-3 h-3 text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em]">Elite Partner Program</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">
                For The <span className="relative">
                    Market Leaders
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#D4AF37] opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                </span>.
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                We partner with companies generating <span className="text-white font-semibold">$2M+ ARR</span> to build custom, end-to-end AI infrastructure that removes human bottlenecks.
            </p>

            <MagneticButton strength={0.4}>
                <Link href="/elite" className="inline-block relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#F8F1D1] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                    <Button size="lg" className="relative bg-gradient-to-r from-[#D4AF37] to-[#B5952F] hover:from-[#E5C146] hover:to-[#C6A640] text-black font-bold text-lg px-12 py-8 h-auto rounded-full ring-1 ring-white/20 shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                        Explore Elite Partnership <ArrowRight className="ml-2 w-5 h-5"/>
                    </Button>
                </Link>
            </MagneticButton>

            <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-500 font-mono">
                 <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                </span>
                 <span>2 Spots Available for Q1</span>
            </div>
          </div>
      </Section>
    </main>
  );
}
