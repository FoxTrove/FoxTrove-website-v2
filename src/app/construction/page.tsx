'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Hammer, HardHat, FileText, Smartphone, DollarSign, ArrowRight, ShieldCheck, ClipboardCheck } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-[#0f0f10] text-gray-100 font-sans overflow-hidden">
      
      {/* 1. HERO - Pragmatic, Blue Collar Focus */}
      <Section className="min-h-[90vh] flex flex-col items-center justify-center relative border-b border-white/5 !py-0">
        {/* Background - Industrial / Blueprint vibe */}
        <div className="absolute inset-0 bg-[#0f0f10]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-600/10 via-[#0f0f10] to-[#0f0f10] pointer-events-none"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-5xl mx-auto relative z-10 px-4 pt-20"
        >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-yellow-950/30 border border-yellow-600/30 text-yellow-500 text-sm font-bold mb-8 uppercase tracking-widest">
                <HardHat className="w-4 h-4" />
                For General Contractors & Remodelers
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans leading-tight mb-8 tracking-tighter text-white">
                You Build. <br/>
                <span className="text-yellow-500">We Run The Office.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
                Stop losing bids because you're stuck on a job site. The <span className="text-white font-bold">Ironclad Operating System</span> chases your leads, schedules your subs, and follows up on estimates 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Button size="lg" className="w-full sm:w-auto bg-yellow-600 text-black hover:bg-yellow-500 font-bold text-lg px-10 py-8 h-auto rounded-sm transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    Start "Ghosted Bid" Recovery
                </Button>
                <Button variant="ghost" size="lg" className="w-full sm:w-auto text-gray-400 hover:text-white hover:bg-white/5 text-lg px-8 py-8 h-auto">
                    How It Works
                </Button>
            </div>
            <p className="mt-8 text-sm text-gray-500 font-mono uppercase tracking-wider">
                 <span className="text-green-500">Free Trial:</span> We recover your last 10 lost bids for free.
            </p>
        </motion.div>
      </Section>

      {/* 2. THE PROBLEM - "The Chaos" */}
      <Section className="py-24 bg-[#141416]">
        <div className="max-w-6xl mx-auto">
             <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Great Work. <br/> <span className="text-gray-500">Terrible Ops.</span></h2>
                     <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                         You didn't start a construction company to play secretary. But right now, you're losing $50k/month because you can't answer the phone while you're framing a wall.
                     </p>
                     
                     <div className="space-y-6">
                        <div className="flex gap-4">
                            <Smartphone className="w-8 h-8 text-red-500 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">The "Voicemail Graveyard"</h4>
                                <p className="text-gray-500 text-sm">Leads call, you don't answer, they call the next guy. Gone forever.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <FileText className="w-8 h-8 text-red-500 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">The Ghosted Estimate</h4>
                                <p className="text-gray-500 text-sm">You spend 4 hours on a bid, send it, and never follow up. They forget you exist.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Hammer className="w-8 h-8 text-red-500 shrink-0" />
                            <div>
                                <h4 className="text-white font-bold text-lg">Subcontractor Chaos</h4>
                                <p className="text-gray-500 text-sm">Texts, calls, emails. Coordination is eating 3 hours of your day.</p>
                            </div>
                        </div>
                     </div>
                </div>

                {/* Visual Representation of Peace vs Chaos */}
                <div className="relative bg-[#0a0a0a] border border-white/5 rounded-xl p-8 aspect-square flex flex-col justify-center">
                    <div className="space-y-4">
                        {/* Message Bubble - Chaos */}
                        <div className="bg-red-950/20 border border-red-900/40 p-4 rounded-lg rounded-tl-none max-w-[80%] opacity-50">
                            <div className="text-red-400 text-xs font-bold mb-1">CLIENT (MISSED CALL)</div>
                            <div className="text-gray-400 text-sm">Hey, just checking on that quote from Tuesday? We're looking to move forward...</div>
                        </div>
                         {/* Message Bubble - Solution */}
                        <div className="self-end ml-auto bg-yellow-950/20 border border-yellow-600/40 p-4 rounded-lg rounded-tr-none max-w-[90%] shadow-lg">
                            <div className="flex justify-between items-center mb-1">
                                <div className="text-yellow-500 text-xs font-bold">FOX TROVE AGENT (AUTO-REPLY)</div>
                                <div className="text-[10px] text-gray-500">INSTANT</div>
                            </div>
                            <div className="text-white text-sm">Hi John! Received your voicemail. I've pulled up your file. We can schedule that walkthrough for Thursday at 9am. Does that work?</div>
                        </div>
                        {/* Success Notification */}
                         <div className="bg-green-950/20 border border-green-900/40 p-3 rounded-lg flex items-center gap-3 mt-6">
                            <div className="bg-green-500 rounded-full p-1"><DollarSign className="w-4 h-4 text-black" /></div>
                            <div>
                                <div className="text-green-400 text-sm font-bold">Deposit Received: $12,500</div>
                                <div className="text-[10px] text-gray-500">You were on a roof when this happened.</div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </Section>

      {/* 3. THE OFFER - "Ironclad OS" */}
      <Section className="py-32 bg-[#0f0f10] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-yellow-600 font-bold tracking-widest uppercase text-xs mb-4 block">THE CORE SYSTEM</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">The Ironclad Operating System.</h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
                A "Digital Project Manager" that never sleeps, never complains, and never misses a lead.
            </p>

             <div className="grid md:grid-cols-3 gap-6 mb-16">
                 <div className="bg-[#18181b] border border-white/5 p-8 rounded-sm hover:border-yellow-600/40 transition-colors text-left">
                     <ShieldCheck className="w-10 h-10 text-yellow-500 mb-4" />
                     <h3 className="text-lg font-bold text-white mb-2">Automated Bid Chase</h3>
                     <p className="text-gray-400 text-sm">We follow up with your leads for 12 months until they buy or die.</p>
                 </div>
                 <div className="bg-[#18181b] border border-white/5 p-8 rounded-sm hover:border-yellow-600/40 transition-colors text-left">
                     <ClipboardCheck className="w-10 h-10 text-yellow-500 mb-4" />
                     <h3 className="text-lg font-bold text-white mb-2">Zero-Touch Scheduling</h3>
                     <p className="text-gray-400 text-sm">Leads book their own discovery calls directly into your calendar. Only qualified jobs.</p>
                 </div>
                 <div className="bg-[#18181b] border border-white/5 p-8 rounded-sm hover:border-yellow-600/40 transition-colors text-left">
                     <DollarSign className="w-10 h-10 text-yellow-500 mb-4" />
                     <h3 className="text-lg font-bold text-white mb-2">Instant Invoicing</h3>
                     <p className="text-gray-400 text-sm">Automated deposit requests and payment reminders. Get paid faster.</p>
                 </div>
             </div>

             {/* THE GRAND SLAM - FREE ENTRY */}
             <div className="bg-gradient-to-br from-[#1c1c1f] to-[#121214] border border-white/10 rounded-sm p-10 md:p-14 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[60px] group-hover:bg-yellow-500/20 transition-all"></div>
                 
                 <div className="relative z-10 flex flex-col items-center">
                     <h3 className="text-3xl font-bold text-white mb-4">Try It Before You Pay.</h3>
                     <p className="text-lg text-gray-300 mb-8 max-w-xl">
                         Give us your last 10 dead leads ("ghosted bids"). We will run our reactivation sequence on them for free. Only if we recover a job do we discuss a partnership.
                     </p>
                     
                     <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
                         <div className="px-6 py-3 bg-green-500/10 border border-green-500/20 rounded text-green-400 font-mono text-sm uppercase font-bold">
                             Recovered 1-2 Jobs (Avg)
                         </div>
                         <ArrowRight className="text-gray-600 hidden md:block" />
                         <div className="px-6 py-3 bg-white/5 border border-white/10 rounded text-gray-300 font-mono text-sm uppercase font-bold">
                             $0 Investment
                         </div>
                     </div>

                     <Button size="lg" className="w-full md:w-auto bg-yellow-600 text-black hover:bg-yellow-500 font-bold text-lg px-12 py-6 h-auto rounded-sm shadow-xl">
                        Start "Ghosted Bid" Recovery
                    </Button>
                    <p className="mt-6 text-sm text-gray-500 font-medium">
                        <span className="text-yellow-500 font-bold">GUARANTEE:</span> We find $50k in lost opportunities in 30 days or we pay you.
                    </p>
                 </div>
             </div>
        </div>
      </Section>
    </main>
  );
}
