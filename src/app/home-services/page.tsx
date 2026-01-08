'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Phone, Play, Pause, ShieldAlert, ShieldCheck, Zap, HelpCircle, Calculator, CalendarCheck, Split, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LeadGenModal } from '@/components/home-services/LeadGenModal';
import { ComparisonTable } from '@/components/home-services/ComparisonTable';
import { IntegrationMarquee } from '@/components/home-services/IntegrationMarquee';
import { StickyMobileCTA } from '@/components/home-services/StickyMobileCTA';
import { FloatingMoneyCounter } from '@/components/home-services/FloatingMoneyCounter';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function HomeServicesPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Dynamic Scarcity Logic
    const [scarcity, setScarcity] = useState({
        month: 'January',
        spotsLeft: 5,
        percentFull: 50
    });

    useEffect(() => {
        const now = new Date();
        const currentMonth = now.toLocaleString('default', { month: 'long' });
        const day = now.getDate();
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        
        // Target: Start of month (day 1) = 5 spots left (50% full)
        // End of month (day 30/31) = 1 spot left (90% full)
        // Total Spots = 10
        
        // Progress 0..1
        const progress = (day - 1) / (daysInMonth - 1); 
        
        // Claimed range: 5 to 9
        // 5 + (progress * 4) -> 5..9
        const spotsTaken = 5 + Math.floor(progress * 4); 
        
        // Ensure bounds
        const safeSpotsTaken = Math.min(Math.max(spotsTaken, 5), 9);
        
        const spotsLeft = 10 - safeSpotsTaken;
        const percentFull = safeSpotsTaken * 10; // Simple percentage for 10 spots

        setScarcity({
            month: currentMonth,
            spotsLeft,
            percentFull
        });
    }, []);

  return (
    <main className="min-h-screen bg-[#0B1120] text-white overflow-hidden font-sans">
      
      {/* 1. HERO - Deep Blue Tech / DataBahn Style */}
      <Section container={false} className="min-h-screen flex items-center relative overflow-hidden pt-0 pb-0">
        
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-[#0B1120] z-0"></div>
        
        {/* --- TECH GRID BACKGROUND --- */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-60 pointer-events-none">
            {/* 1. Large Base Grid */}
            <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:96px_96px]"
                style={{ maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)' }}
            ></div>

            {/* 2. Intersection Crosses (+ marks) */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '96px 96px', backgroundPosition: '48px 48px', opacity: 0.3 }}></div>

            {/* 3. Textured "Active" Cells (Simulating the mesh look) */}
            {/* Left Box */}
            <div className="absolute top-[20%] left-[10%] w-[192px] h-[192px] border border-blue-500/10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:8px_8px] opacity-20 mask-image:linear-gradient(to_bottom,black,transparent)"></div>
            
            {/* Center-Right Box (Faint) */}
            <div className="absolute top-[15%] left-[35%] w-[96px] h-[288px] border-l border-r border-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[size:16px_16px]"></div>

            {/* Bottom Left Digital Noise */}
            <div className="absolute bottom-[20%] left-[5%] w-[288px] h-[96px] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            
            {/* Faint Binary Data Effect (Optional subtle text texture) */}
            <div className="absolute top-[40%] left-[20%] font-mono text-[10px] text-blue-500/10 leading-none select-none">
                101001<br/>001101<br/>110010
            </div>
             <div className="absolute top-[60%] right-[40%] font-mono text-[10px] text-blue-500/10 leading-none select-none">
                01<br/>11
            </div>
        </div>

        {/* The "Spotlight Beam" - Central/Right-leaning Blue Glow */}
        <div className="absolute top-[-10%] right-[10%] w-[600px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-60 pointer-events-none z-0 rotate-12"></div>
        <div className="absolute top-[10%] right-[25%] w-[300px] h-[500px] bg-cyan-400/10 rounded-full blur-[80px] mix-blend-screen opacity-50 pointer-events-none z-0"></div>
        {/* Conic Beam - Moved here for full bleed */}
        <div className="absolute -top-20 right-0 w-1/2 h-full bg-[conic-gradient(from_0deg_at_50%_-20%,transparent_45%,rgba(59,130,246,0.1)_50%,transparent_55%)] pointer-events-none z-0 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* LEFT COLUMN: Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-start text-left max-w-2xl"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121c2e] border border-blue-500/30 text-blue-200 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse box-content border-2 border-blue-500/20" />
                        AI Reception Management
                    </div>
                    
                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
                        Your Competitors <br/> Answer 
                        <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                            At 2 AM.
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
                        Our AI-powered voice agent empowers home service businesses to instantly answer, qualify, and route every call—ensuring you never miss revenue, even while you sleep.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button 
                            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })} 
                            className="bg-blue-600/90 hover:bg-blue-500 text-white text-base px-8 py-6 h-auto font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-blue-400/30 rounded-lg backdrop-blur-sm transition-all group"
                        >
                            Secure Your Spot 
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">»</span>
                        </Button>
                        
                         <Button 
                            variant="outline" 
                            className="border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 text-base px-8 py-6 h-auto rounded-lg backdrop-blur-sm transition-all"
                        >
                            Hear The Demo
                        </Button>
                    </div>

                    {/* Scarcity Indicator (Subtle) */}
                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-blue-300/80">
                         <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Only {scarcity.spotsLeft} spots remaining for {scarcity.month}
                    </div>
                    
                    {/* MOBILE STATS (Hidden on LG, Visible on Mobile/Tablet) */}
                    <div className="grid grid-cols-3 gap-2 w-full mt-10 lg:hidden border-t border-white/5 pt-8">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white">24/7</h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Coverage</p>
                        </div>
                        <div className="text-center border-l border-white/5">
                            <h3 className="text-2xl font-bold text-white">100%</h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Response</p>
                        </div>
                        <div className="text-center border-l border-white/5">
                            <h3 className="text-2xl font-bold text-white">5 Jobs</h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Guaranteed</p>
                        </div>
                    </div>
                    
                    {/* Trust/Guarantee Micro-copy */}
                    <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
                         <div className="flex -space-x-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-[#0B1120] flex items-center justify-center text-[10px] text-white overflow-hidden">
                                     <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
                                </div>
                            ))}
                         </div>
                         <p>Trusted by 40+ Trades</p>
                    </div>
                </motion.div>

                {/* RIGHT COLUMN: Visuals / Floating Cards */}
                <div className="relative h-[600px] w-full hidden lg:block perspective-[1000px]">
                     {/* Light Beam Visual removed from here */}

                     {/* 1. Top Card: Coverage */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40, rotateX: 5, rotateY: 5 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, zIndex: 50 }}
                        className="absolute top-[10%] right-[10%] w-64 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30 transition-colors"
                     >
                        <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                        <p className="text-sm text-gray-400 leading-tight">
                            Full coverage answering. Captures leads nights, weekends, and holidays.
                        </p>
                     </motion.div>

                     {/* 2. Middle Card: Response Rate (Left side) */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40, rotateX: 5, rotateY: -5 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, zIndex: 50 }}
                        className="absolute top-[35%] left-[5%] w-72 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30 transition-colors"
                     >
                        <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
                        <p className="text-sm text-gray-400 leading-tight">
                             Instant response rate. No more "I'll call you back" voicemail tags.
                        </p>
                     </motion.div>

                     {/* 3. Bottom Card: Guarantee (Bottom Right) */}
                     <motion.div 
                        initial={{ opacity: 0, y: 40, rotateX: -5, rotateY: 5 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        whileHover={{ scale: 1.05, rotateX: -5, rotateY: -5, zIndex: 50 }}
                        className="absolute bottom-[10%] right-[15%] w-64 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30 transition-colors"
                     >
                        <h3 className="text-4xl font-bold text-white mb-2">5 Jobs</h3>
                        <p className="text-sm text-gray-400 leading-tight">
                            Guaranteed booked jobs in first 30 days or you pay nothing.
                        </p>
                     </motion.div>
                </div>

            </div>
        </div>
      </Section>

      {/* 2. REVENUE CALCULATOR CTA SECTION */}
      <IntegrationMarquee />
      
      <Section container={false} className="py-36 bg-gradient-to-b from-[#0B1120] to-[#1a2333] relative overflow-hidden flex flex-col items-center justify-center min-h-[600px]">
          {/* Unified Background Elements - Now spanning full width */}
          <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay pointer-events-none"></div>
          <FloatingMoneyCounter />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointing-events-none z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
               <div className="w-24 h-24 bg-blue-600/10 rounded-3xl flex items-center justify-center mb-12 border border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.15)] backdrop-blur-sm">
                    <Calculator className="w-12 h-12 text-blue-400" />
               </div>
               
               <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
                   You&apos;re losing money every day. <br/>
                   <span className="text-white/50">Find out exactly how much.</span>
               </h2>

               <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl leading-relaxed font-light">
                   Our free audit tool analyzes your call volume, industry averages, and job value to show you the exact annual cost of your voicemail box.
               </p>
               
               <Button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-black hover:bg-gray-100 text-xl px-16 py-10 h-auto font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
               >
                   Run Free Revenue Assessment
               </Button>
          </div>
      </Section>


      {/* 3. THE MECHANISM - "It's Not A Bot" */}
      <Section className="py-24 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Paying Answering Services To <span className="text-blue-500">Take Messages.</span></h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Traditional answering services are passive. They take notes and email you a "lead" to chase later. By then, the homeowner has already called the next guy on Google.
                        <br/><br/>
                        FoxTrove AI is an <strong>Action Engine</strong>. It connects directly with your existing CRM and calendar to complete the job, 100% autonomously.
                    </p>
                    
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                                <CalendarCheck className="text-blue-500 w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Full Calendar Control</h4>
                                <p className="text-sm text-gray-400">The AI can check availability, <strong>book</strong> appointments, <strong>cancel</strong> or <strong>reschedule</strong> meetings in real-time without you lifting a finger.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                                <Split className="text-blue-500 w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Intelligent Decision Routing</h4>
                                <p className="text-sm text-gray-400">It recognizes context. Routine maintenance? <strong>Books it for next week.</strong> Burst pipe flooding the basement? <strong>Simultaneously calls your on-call tech and texts you immediately.</strong></p>
                            </div>
                        </li>
                         <li className="flex gap-4">
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                                <CheckCircle2 className="text-blue-500 w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Universal Integration</h4>
                                <p className="text-sm text-gray-400">We integrate with your systems. Whether you use enterprise software or a simple Google Calendar, we push data where it needs to go.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Simulated Audio/UI Interface (Same as before, it works well) */}
                 <div className="relative bg-[#1E293B] rounded-xl border border-white/10 p-8 shadow-2xl">
                     <div className="absolute -top-4 -right-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        LIVE CALL
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                                <Phone className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-blue-500/20 p-4 rounded-r-xl rounded-bl-xl text-sm text-blue-100">
                                "Thanks for calling Mike's Plumbing. This is Sarah. Are you calling about a residential issue or a commercial emergency?"
                            </div>
                        </div>
                        <div className="flex gap-4 flex-row-reverse">
                            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center shrink-0">
                                <span className="text-xs font-bold">C</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-l-xl rounded-br-xl text-sm text-gray-300">
                                "Yeah, hi. My basement is flooding right now. I need someone ASAP."
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                                <Phone className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-blue-500/20 p-4 rounded-r-xl rounded-bl-xl text-sm text-blue-100">
                                "I see you're in the 84109 area. I have a tech 10 minutes away. I am booking him now. You will receive a text confirmation in 10 seconds."
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                         <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Voice Clarity Demo</div>
                         <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors"
                         >
                             {isPlaying ? <Pause className="w-4 h-4 fill-current"/> : <Play className="w-4 h-4 fill-current ml-1"/> }
                         </button>
                    </div>
                </div>
            </div>
        </div>
      </Section>
      
      <ComparisonTable />
      
      {/* Modal Injection */}
      <LeadGenModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <StickyMobileCTA onOpen={() => setIsModalOpen(true)} />

      {/* 4. THE GRAND SLAM OFFER STACK */}
      <Section id="offer" className="py-32 bg-[#0B1120] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">The "Never Miss Another Call" Package</h2>
                <p className="text-xl text-gray-400">Everything you need to dominate your market. Results Guaranteed.</p>
            </div>

            {/* The Stack Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {/* Core Item */}
                <div className="bg-blue-600/10 border border-blue-500/50 p-6 rounded-lg relative overflow-hidden col-span-full md:col-span-1 lg:col-span-1">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1">CORE</div>
                    <h3 className="text-xl font-bold text-white mb-2">The AI Voice Agent</h3>
                    <p className="text-sm text-gray-400 mb-4">24/7 Intelligent Answering & Booking.</p>
                    <p className="text-lg font-bold text-blue-400">Value: PRICELESS</p>
                </div>

                {/* Bonus 1 */}
                 <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Speed-To-Lead SMS</h3>
                    <p className="text-sm text-gray-400 mb-4">Instant text follow-up to keep leads warm.</p>
                    <p className="text-sm font-bold text-gray-500 line-through">Value: $197/mo</p>
                    <p className="text-lg font-bold text-white">Included: FREE</p>
                </div>

                {/* Bonus 2 */}
                 <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Emergency Protocol</h3>
                    <p className="text-sm text-gray-400 mb-4">Escalation logic for urgent jobs only.</p>
                    <p className="text-sm font-bold text-gray-500 line-through">Value: $297/setup</p>
                    <p className="text-lg font-bold text-white">Included: FREE</p>
                </div>

                 {/* Bonus 3 */}
                 <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">72-Hour Launch</h3>
                    <p className="text-sm text-gray-400 mb-4">We build and deploy in 3 days. Not weeks.</p>
                    <p className="text-sm font-bold text-gray-500 line-through">Value: $500</p>
                    <p className="text-lg font-bold text-white">Included: FREE</p>
                </div>

                 {/* Bonus 4 */}
                 <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Missed Call Audit</h3>
                    <p className="text-sm text-gray-400 mb-4">We analyze your logs to find lost revenue.</p>
                    <p className="text-sm font-bold text-gray-500 line-through">Value: $497</p>
                    <p className="text-lg font-bold text-white">Included: FREE</p>
                </div>
                
                 {/* Bonus 5 */}
                 <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">Analytics Dashboard</h3>
                    <p className="text-sm text-gray-400 mb-4">See exactly how much revenue we generated.</p>
                    <p className="text-sm font-bold text-gray-500 line-through">Value: $97/mo</p>
                    <p className="text-lg font-bold text-white">Included: FREE</p>
                </div>
            </div>

            {/* THE GUARANTEE BOX & PRICE */}
             <div id="guarantee" className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-blue-500 rounded-2xl p-12 text-center relative max-w-4xl mx-auto shadow-[0_0_60px_-15px_rgba(59,130,246,0.5)] overflow-visible scroll-mt-32">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold px-8 py-3 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2 border-4 border-[#0B1120]">
                     <ShieldAlert className="w-5 h-5" />
                     The Ironclad Guarantee
                 </div>
                 <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-6 leading-tight">
                     5 Booked Jobs In 30 Days. <br/> Or You Pay <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 decoration-red-500/30">Nothing</span>.
                 </h3>
                 <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                     If our AI doesn&apos;t book at least 5 new service calls in the first month, we refund your setup fee 100%. <br/>
                     <strong className="text-white">You keep the agent. You keep the leads. We part friends.</strong>
                 </p>
                 
                     {/* Cost & Scarcity */}
                 <div className="flex flex-col gap-3 mb-10 items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 max-w-lg mx-auto w-full backdrop-blur-sm">
                     <div className="text-sm text-blue-300 font-semibold uppercase tracking-wider">Investment</div>
                     <span className="text-5xl font-bold text-white tracking-tight">$2,500 <span className="text-xl font-normal text-gray-400">+ $297/mo</span></span>
                     
                     {/* Scarcity Progress Bar */}
                     <div className="w-full max-w-[260px] mt-4">
                        <div className="flex justify-between text-xs mb-2 font-medium">
                            <span className="text-gray-400">{scarcity.month} Intake</span>
                            <span className="text-red-400 animate-pulse">{scarcity.percentFull}% Full</span>
                        </div>
                        <div className="w-full bg-gray-700/50 h-3 rounded-full overflow-hidden border border-white/5">
                             <div 
                                className="bg-gradient-to-r from-blue-500 to-red-500 h-full shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-all duration-1000"
                                style={{ width: `${scarcity.percentFull}%` }}
                             ></div>
                        </div>
                        <div className="text-center mt-3 text-sm text-white font-medium flex items-center justify-center gap-2">
                            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400"/> Only {scarcity.spotsLeft} Spot{scarcity.spotsLeft !== 1 ? 's' : ''} Remaining
                        </div>
                     </div>
                 </div>

                 <Button onClick={() => setIsModalOpen(true)} size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl px-16 py-8 h-auto uppercase shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all rounded-xl relative overflow-hidden group">
                     <span className="relative z-10">Claim Offer</span>
                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                 </Button>
                 <p className="mt-4 text-xs text-gray-500">Zero risk. Full setup included. 72-hour turnaround.</p>
             </div>
        </div>
      </Section>

      {/* 5. OBJECTION HANDLING (FAQ) */}
      <Section className="py-24 bg-[#0B1120] text-center">
          <div className="max-w-3xl mx-auto text-left">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h4 className="font-bold text-white mb-2 flex items-center"><HelpCircle className="w-5 h-5 text-blue-500 mr-2"/> I already have an answering service. Why switch?</h4>
                      <p className="text-gray-400">Answering services cost $1-2/minute and take messages. We cost a fraction of that and <strong>book jobs</strong>. Plus, we guarantee results. Do they?</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h4 className="font-bold text-white mb-2 flex items-center"><HelpCircle className="w-5 h-5 text-blue-500 mr-2"/> Does it sound like a robot?</h4>
                      <p className="text-gray-400">78% of callers can&apos;t tell it&apos;s AI. It pauses, thinks, and speaks naturally. And if they really want a human, it transfers to you instantly.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h4 className="font-bold text-white mb-2 flex items-center"><HelpCircle className="w-5 h-5 text-blue-500 mr-2"/> Is there a long-term contract?</h4>
                      <p className="text-gray-400">No. Month to month. Cancel anytime. We earn your business every 30 days.</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                      <h4 className="font-bold text-white mb-2 flex items-center"><HelpCircle className="w-5 h-5 text-blue-500 mr-2"/> How hard is it to setup?</h4>
                      <p className="text-gray-400">Effortless. Our AI voice agent will call <strong>YOU</strong> for a 15-minute onboarding interview to learn your business. You can also email us any reference docs. We handle the rest.</p>
                  </div>
              </div>
          </div>
      </Section>

    </main>
  );
}
