'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Sparkles, CalendarCheck, MessageCircle, UserCheck, Clock } from 'lucide-react';
import { RevenueCalculator } from '@/components/med-spa/RevenueCalculator';
import { OfferStack } from '@/components/med-spa/OfferStack';
import { ComparisonTable } from '@/components/med-spa/ComparisonTable';
import { GuaranteeSection } from '@/components/med-spa/GuaranteeSection';
import { IntegrationStrip } from '@/components/med-spa/IntegrationStrip';
import { FAQSection } from '@/components/med-spa/FAQSection';
import { Modal } from '@/components/ui/modal';
import { useState, useEffect, useRef } from 'react';

import { useScarcity } from '@/hooks/useScarcity';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function MedSpaPage() {
  const [modalState, setModalState] = useState<{isOpen: boolean, mode: 'audit' | 'offer'}>({
      isOpen: false,
      mode: 'audit'
  });

  const openModal = (mode: 'audit' | 'offer') => {
      setModalState({ isOpen: true, mode });
  };
  const { spotsLeft } = useScarcity();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
        hero.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
        if(hero) hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans relative selection:bg-rose-500/30 selection:text-rose-200">
      
      {/* 1. HERO - "Ethereal Silk & Serum" Aesthetic */}
      <Section ref={heroRef} container={false} className="relative overflow-hidden py-20 lg:py-28 group">
        
        {/* --- MOUSE GLOW SPOTLIGHT (Scoped to Hero) --- */}
        <div 
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(244, 63, 94, 0.15), transparent 40%)`
          }}
        />
        
        {/* --- ETHEREAL SILK BACKGROUND --- */}
        <div className="absolute inset-0 bg-[#0f0505] z-0"></div>
        
        {/* 1. Fluid Mesh Gradients (Silk Effect) */}
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.15),transparent_70%)] blur-[120px] pointer-events-none mix-blend-screen opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-20%] w-[1200px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(251,113,133,0.1),transparent_70%)] blur-[150px] pointer-events-none opacity-40"></div>
        
        {/* 2. Floating "Micro-Bubbles" (Serum Effect) */}
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-rose-500/5 rounded-full blur-[40px] animate-float-slow pointer-events-none"></div>
        <div className="absolute bottom-[30%] right-[20%] w-48 h-48 bg-pink-400/5 rounded-full blur-[50px] animate-float-medium pointer-events-none"></div>

        {/* 3. Floating "Gold Dust" Particles (Depth) */}
        <div className="absolute top-[15%] left-[25%] w-1 h-1 bg-rose-200/40 rounded-full blur-[1px] animate-pulse pointer-events-none"></div>
        <div className="absolute top-[45%] right-[15%] w-1.5 h-1.5 bg-yellow-100/30 rounded-full blur-[1px] animate-pulse delay-700 pointer-events-none"></div>
        <div className="absolute bottom-[25%] left-[40%] w-1 h-1 bg-white/20 rounded-full blur-[0.5px] animate-bounce delay-1000 duration-[5000ms] pointer-events-none"></div>

        {/* 4. AI Generated Liquid Silk Texture */}
        <div className="absolute inset-0 opacity-40 mix-blend-soft-light pointer-events-none" 
             style={{ 
                 backgroundImage: `url("/images/med-spa-bg.png")`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat'
             }}>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* LEFT COLUMN: Text Content */}
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="flex flex-col items-start text-left max-w-2xl"
                >
                     {/* Badge */}
                     <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/30 border border-rose-500/30 text-rose-200 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(225,29,72,0.15)] backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 fill-rose-300" />
                        For Med Spa Owners
                    </div>
                    
                    {/* Headline - "Breathing" Shimmer Effect */}
                    <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-6 tracking-tight text-white">
                        Stop Losing <br/>
                        <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffe4e6,45%,#ffffff,55%,#ffe4e6)] bg-[length:220%_100%] drop-shadow-[0_0_25px_rgba(225,29,72,0.3)] italic animate-shimmer">
                            $150k/Year
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-rose-100/70 mb-10 leading-relaxed max-w-lg font-light">
                        The Patient Revenue Recovery System plugs the 3 biggest leaks in your business: No-Shows, Low Rebooking, and Slow Lead Response.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
                        <Button 
                            onClick={() => openModal('offer')}
                            className="w-full sm:w-auto bg-gradient-to-r from-rose-700 to-rose-600 hover:from-rose-600 hover:to-rose-500 text-white text-base px-8 py-6 h-auto font-medium shadow-[0_0_30px_rgba(225,29,72,0.3)] border border-rose-400/20 rounded-full transition-all hover:scale-105 relative group overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center">
                                Check Availability
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">»</span>
                            </span>
                             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        </Button>
                        
                        <Button 
                            onClick={() => openModal('audit')}
                            variant="outline" 
                            className="w-full sm:w-auto border-rose-200/20 bg-rose-500/5 text-rose-100/80 hover:text-white hover:bg-rose-500/10 text-base px-8 py-6 h-auto rounded-full backdrop-blur-sm transition-all"
                        >
                            <Clock className="w-4 h-4 mr-2" /> 
                            Get ROI Report
                        </Button>
                    </div>

                    {/* Guarantee & Scarcity */}
                    <div className="flex flex-col gap-3">
                         <div className="flex items-center gap-2 text-xs font-medium text-rose-300/80">
                             <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                            </span>
                            Only {spotsLeft} Founder's Rate spots left
                        </div>
                         <p className="text-sm text-gray-500 font-medium tracking-wide">
                             <span className="text-rose-400">Guarantee:</span> $10k Recovered in 60 Days.
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Ethereal Floating Visuals */}
                <div className="relative h-[600px] w-full hidden lg:block perspective-[1000px]">
                     
                     {/* 1. Main Card - Booking Velocity */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40, rotateX: 5, rotateY: 5 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, zIndex: 50 }}
                        className="absolute top-[15%] right-[10%] w-72 bg-gradient-to-b from-rose-950/40 to-[#0f0505]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl hover:shadow-rose-500/20 hover:border-rose-400/30 transition-all group"
                     >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-600/10 flex items-center justify-center mb-4 border border-rose-500/20 group-hover:border-rose-400/40 transition-colors">
                            <CalendarCheck className="w-6 h-6 text-rose-300" />
                        </div>
                        <h3 className="text-3xl font-serif font-medium text-white mb-2">24/7</h3>
                        <p className="text-sm text-rose-100/60 leading-tight">
                            Smart booking agent fills your calendar while you sleep.
                        </p>
                     </motion.div>

                     {/* 2. Secondary Card - Response Time */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40, rotateX: 5, rotateY: -5 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, zIndex: 50 }}
                        className="absolute bottom-[20%] left-[10%] w-64 bg-gradient-to-b from-rose-950/40 to-[#0f0505]/60 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl hover:shadow-rose-500/20 hover:border-rose-400/30 transition-all"
                     >
                        <h3 className="text-3xl font-serif font-medium text-white mb-1">&lt; 1 Min</h3>
                        <p className="text-xs text-rose-100/50 uppercase tracking-widest mb-2 font-semibold">Response Time</p>
                        <p className="text-sm text-rose-100/60 leading-tight">
                             No lead goes cold. Instant follow-up for every inquiry.
                        </p>
                     </motion.div>

                </div>

            </div>
        </div>
      </Section>

      {/* Calculator Modal */}
      <Modal isOpen={modalState.isOpen} onClose={() => setModalState({ ...modalState, isOpen: false })}>
           <div className="p-4 md:p-8">
               <RevenueCalculator mode={modalState.mode} />
           </div>
      </Modal>

      {/* 2. THE PROBLEM - "The Three Revenue Killers" */}
      <Section container={false} className="py-24 bg-[#0F0F10] relative overflow-hidden">
        {/* Background Texture Overlay (Geometric/Data) */}
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-soft-light" 
             style={{ 
                 backgroundImage: `url("/images/med-spa-data-bg.png")`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
             }}>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The "Silent" Revenue Leaks</h2>
                 <p className="text-gray-400 text-lg max-w-2xl mx-auto">You don't have a traffic problem. You have a bucket problem.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                {/* Problem 1: Rebooking Gap */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative group hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <UserCheck className="w-10 h-10 text-rose-500 mb-6 group-hover:drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all" />
                    <h3 className="text-xl font-bold text-white mb-3">1. The Rebooking Gap</h3>
                    <p className="text-gray-400 text-sm mb-4">Most med spas only rebook 35% of patients. Top performers hit 80%. That gap is worth $200k+ in LTV.</p>
                    <div className="bg-rose-950/30 border border-rose-500/20 text-rose-300 text-xs px-3 py-1 rounded inline-block shadow-[0_0_10px_rgba(244,63,94,0.1)]">Loss: $228,150/yr</div>
                </div>

                {/* Problem 2: No-Show Drain */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative group hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-300 hover:-translate-y-1">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CalendarCheck className="w-10 h-10 text-rose-500 mb-6 group-hover:drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all" />
                    <h3 className="text-xl font-bold text-white mb-3">2. The No-Show Drain</h3>
                    <p className="text-gray-400 text-sm mb-4">Average cancellation rate is 22%. That's 1 in 5 slots wasted. Manual reminders don't work anymore.</p>
                    <div className="bg-rose-950/30 border border-rose-500/20 text-rose-300 text-xs px-3 py-1 rounded inline-block shadow-[0_0_10px_rgba(244,63,94,0.1)]">Loss: $308,880/yr</div>
                </div>

                {/* Problem 3: Lead Response Lag */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative group hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-300 hover:-translate-y-1">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <MessageCircle className="w-10 h-10 text-rose-500 mb-6 group-hover:drop-shadow-[0_0_15px_rgba(244,63,94,0.4)] transition-all" />
                    <h3 className="text-xl font-bold text-white mb-3">3. Response Lag</h3>
                    <p className="text-gray-400 text-sm mb-4">Answering in 5 mins = 100x conversion. Most leads go cold overnight while your front desk sleeps.</p>
                    <div className="bg-rose-950/30 border border-rose-500/20 text-rose-300 text-xs px-3 py-1 rounded inline-block shadow-[0_0_10px_rgba(244,63,94,0.1)]">Impact: Massive</div>
                </div>
             </div>
        </div>
      </Section>
      
      {/* 3. COMPARISON - "Why FoxTrove" */}
      <Section className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The Smartest Investment You'll Make</h2>
                 <p className="text-gray-400 text-lg max-w-2xl mx-auto">Stop lighting money on fire with inefficient systems.</p>
             </div>
             <ComparisonTable />
        </div>
      </Section>

      {/* 5. GUARANTEE SECTION */}
      <GuaranteeSection />

      {/* 6. INTEGRATIONS */}
      <IntegrationStrip />

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. THE OFFER STACK */}
      <Section id="offer" className="py-32 bg-[#0F0F10] border-t border-white/5 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
             <OfferStack onClaim={() => openModal('offer')} />
        </div>
      </Section>
    </main>
  );
}
