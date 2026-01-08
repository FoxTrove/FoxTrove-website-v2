'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Lock, Search, BarChart3, Binary, ShieldCheck, Gem, AlertTriangle, CheckCircle2, ArrowRight, Phone, Repeat } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, MouseEvent } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Typewriter effect component
const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    // Reset/Setup
    setDisplayText('');
    setStarted(false);

    let timeout: NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
        setStarted(true);
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                // Use functional update correctly? No need if text constant.
                // But better to check bound. 
                // Closure captures 'text'.
                setDisplayText(text.substring(0, i + 1)); 
                i++;
            } else {
                clearInterval(timer);
            }
        }, 30);
        return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
}

const DrillDownTabs = () => {
    const [activeTab, setActiveTab] = useState<'revenue' | 'time' | 'scale'>('revenue');

    const data = {
        revenue: {
            l1: "\"We need more revenue.\"",
            l2: "\"Lead volume is sufficient, but closing rate is low.\"",
            l3: "\"Sales team is not picking up phone calls.\"",
            l4: "Leads arrive at 7PM. Staff leaves at 5PM. 12hr latency kills interest.",
            sol_title: "AI_OVERNIGHT_AGENT.exe",
            sol_desc: "Instant bi-directional voice engagement for after-hours leads. 0s latency."
        },
        time: {
            l1: "\"I don't have enough time.\"",
            l2: "\"I'm spending 4 hours a day on admin work.\"",
            l3: "\"Manually copying data from emails to CRM.\"",
            l4: "Incompatible data schema between Typeform and Salesforce requiring human middleware.",
            sol_title: "AUTONOMOUS_ETL_PIPELINE.exe",
            sol_desc: "Real-time webhook structuring and data injection. 100% automated."
        },
        scale: {
             l1: "\"We can't handle more clients.\"",
             l2: "\"Onboarding new clients takes 3 weeks.\"",
             l3: "\"Waiting for senior staff to review documents manually.\"",
             l4: "Senior staff bottlenecked by repetitive compliance checks on standard forms.",
             sol_title: "AI_COMPLIANCE_OFFICER.exe",
             sol_desc: "LLM-based document analysis verifying 50+ data points in 2 seconds."
        }
    };

    const activeData = data[activeTab];

    return (
        <div className="relative bg-[#0A0A0A] border-[0.5px] border-white/10 rounded-sm p-1 backdrop-blur-xl shadow-2xl min-h-[500px]">
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 blur-[80px] rounded-full pointer-events-none"></div>

             {/* Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5 mb-1">
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">root_cause_analysis_v9</div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-white/5">
                <button 
                    onClick={() => setActiveTab('revenue')}
                    className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider transition-colors border-r border-white/5 hover:bg-white/5 ${activeTab === 'revenue' ? 'text-[#D4AF37] bg-white/[0.03]' : 'text-gray-600'}`}
                >
                    Revenue
                </button>
                <button 
                    onClick={() => setActiveTab('time')}
                    className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider transition-colors border-r border-white/5 hover:bg-white/5 ${activeTab === 'time' ? 'text-[#D4AF37] bg-white/[0.03]' : 'text-gray-600'}`}
                >
                    Time
                </button>
                <button 
                    onClick={() => setActiveTab('scale')}
                    className={`flex-1 py-3 text-xs font-mono uppercase tracking-wider transition-colors hover:bg-white/5 ${activeTab === 'scale' ? 'text-[#D4AF37] bg-white/[0.03]' : 'text-gray-600'}`}
                >
                    Scale
                </button>
            </div>
            
            {/* Main Content Area */}
            <div className="p-8 font-mono text-xs md:text-sm text-gray-400 flex flex-col relative overflow-hidden h-[400px]">
                 {/* Scanning Line */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent animate-[scan_4s_ease-in-out_infinite] opacity-30 pointer-events-none"></div>
                 
                 <div className="space-y-6 z-10 key={activeTab}">
                     <div className="flex justify-between border-b border-white/5 pb-2">
                         <span className="text-white font-bold">SIMULATION: DRILL_DOWN</span>
                         <span>DEPTH: <span className="text-[#D4AF37] animate-pulse">LEVEL 4</span></span>
                     </div>

                     <div className="space-y-4">
                        {/* Level 1 */}
                        <motion.div 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 0.5, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-1 h-full bg-gray-700"></div>
                            <div>
                                <div className="text-[10px] uppercase text-gray-600">Level 1 (Symptom)</div>
                                <div className="text-white">{activeData.l1}</div>
                            </div>
                        </motion.div>

                        {/* Level 2 */}
                         <motion.div 
                             initial={{ opacity: 0, x: -10 }}
                             animate={{ opacity: 0.7, x: 0 }}
                             transition={{ delay: 0.3 }}
                             className="flex items-center gap-3 pl-4"
                         >
                            <div className="w-px h-8 bg-gray-700 absolute -left-2 top-0"></div> {/* connector hack */}
                            <div className="text-gray-600">↳</div>
                            <div>
                                <div className="text-[10px] uppercase text-gray-600">Level 2 (Driver)</div>
                                <div className="text-white">{activeData.l2}</div>
                            </div>
                        </motion.div>

                         {/* Level 3 */}
                         <motion.div
                             initial={{ opacity: 0, x: -10 }}
                             animate={{ opacity: 0.9, x: 0 }}
                             transition={{ delay: 0.5 }}
                             className="flex items-center gap-3 pl-8"
                         >
                            <div className="text-gray-600">↳</div>
                            <div>
                                <div className="text-[10px] uppercase text-gray-600">Level 3 (Pattern)</div>
                                <div className="text-red-400">{activeData.l3}</div>
                            </div>
                        </motion.div>

                          {/* Level 4 - Root Cause */}
                         <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.8 }}
                             className="flex items-center gap-3 pl-12"
                         >
                            <div className="text-[#D4AF37]">↳</div>
                            <div className="p-3 border border-[#D4AF37]/30 bg-[#D4AF37]/10 rounded w-full">
                                <div className="text-[10px] uppercase text-[#D4AF37] font-bold mb-1">Level 4 (ROOT CAUSE)</div>
                                <div className="text-white typing-effect">
                                     <TypewriterText key={activeTab} text={activeData.l4} delay={1000} />
                                </div>
                            </div>
                        </motion.div>
                     </div>

                     <motion.div 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 2.5 }}
                         className="mt-8 pt-6 border-t border-white/5"
                     >
                         <div className="text-[10px] text-gray-500 mb-2">DEPLOYING SOLUTION...</div>
                         <div className="p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37]/90 leading-relaxed shadow-inner rounded flex items-start gap-3">
                             <Binary className="w-5 h-5 shrink-0 mt-0.5" />
                             <div>
                                <span className="font-bold text-[#D4AF37] block mb-1">{activeData.sol_title}</span>
                                <span className="text-xs text-gray-400">{activeData.sol_desc}</span>
                             </div>
                         </div>
                     </motion.div>
                 </div>
            </div>
        </div>
    );
}

import { EliteApplicationModal } from '@/components/elite/EliteApplicationModal';

// ... (imports remain)

export default function ElitePage() {
  // Modal State
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  // Mouse Glow Logic for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight Logic for Cards
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-hidden selection:bg-[#D4AF37]/30">
      
      {/* Lead Capture Modal */}
      <EliteApplicationModal 
        isOpen={isApplicationOpen} 
        onClose={() => setIsApplicationOpen(false)} 
      />

      {/* Global Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* 1. HERO - "Private Equity" Vibe */}
      <Section 
        className="min-h-screen flex flex-col items-center justify-center relative border-b border-white/5 !py-0 overflow-hidden group"
        onMouseMove={handleMouseMove}
        container={false}
      >
        {/* Interactive Mouse Glow */}
        <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
            style={{
                background: useMotionTemplate`
                radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(212, 175, 55, 0.08),
                    transparent 80%
                )
                `,
            }}
        />

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <Image 
                src="/images/elite-background.png" 
                alt="Elite Background" 
                fill 
                className="object-cover opacity-50 mix-blend-luminosity"
                priority
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#050505]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-center max-w-5xl mx-auto mt-20"
            >
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs font-bold mb-10 uppercase tracking-[0.25em] backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Gem className="w-3 h-3" />
                    Elite Partner Program
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-white tracking-tight">
                    Your Business <br/>
                    <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#F1D675] to-[#996515] font-serif pr-2">Perfected.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed font-light font-sans mix-blend-plus-lighter">
                    We embed into <span className="text-white font-medium">$2M+ ARR</span> companies to architect custom AI infrastructures that permanently solve operational bottlenecks.
                </p>

                <div className="flex flex-col gap-8 items-center">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button 
                            onClick={() => setIsApplicationOpen(true)}
                            size="lg" 
                            className="bg-white text-black hover:bg-gray-200 text-lg px-12 py-8 h-auto font-medium rounded-full min-w-[240px] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border border-white/50"
                        >
                            Check Eligibility
                        </Button>
                        <div className="flex flex-col items-start gap-1">
                            <div className="text-xs text-[#D4AF37] font-mono tracking-wider uppercase flex items-center gap-2 bg-[#D4AF37]/5 px-3 py-1 rounded-full border border-[#D4AF37]/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                                Status: Waitlist Only
                            </div>
                            <div className="text-sm text-gray-500 font-mono pl-1">
                                Q1 Partners: 2/2 Selected
                            </div>
                        </div>
                    </div>
                    
                    {/* Hero Guarantee Badge */}
                    <div className="flex items-center gap-2 text-[#D4AF37]/80 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity cursor-default">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Backed by our $300k Performance Guarantee</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </Section>

      {/* 2. THE HIGH STAKES - Entropy */}
      <Section className="bg-[#050505] relative overflow-hidden !py-0" container={false}>
          {/* THE ENTROPY: Abstract Background */}
          <div className="absolute inset-0 z-0 opacity-40">
              <Image 
                src="/elite-entropy.png" 
                alt="Entropy" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
              <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 py-32 relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-red-400 text-xs font-mono uppercase tracking-wider">System Critical</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Adoption Gap</span> used by 95% of companies.
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Recent studies show that <strong className="text-white">95% of AI pilots fail</strong> to deliver ROI. Why? Because they treat AI as a &quot;tool&quot; to be bought, not an &quot;infrastructure&quot; to be adapted. 
                  <br/><br/>
                  While your competitors are stuck in &quot;Pilot Purgatory,&quot; your operation is decaying from the invisible entropy of manual processes.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8 rounded-sm bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                      <div className="text-4xl font-mono text-white mb-2">4hrs</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">Avg. Lead Response</div>
                  </div>
                   <div className="p-8 rounded-sm bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                      <div className="text-4xl font-mono text-white mb-2">63%</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">Unqueried Leads</div>
                  </div>
                   <div className="p-8 rounded-sm bg-white/[0.02] border border-white/10 backdrop-blur-sm">
                      <div className="text-4xl font-mono text-white mb-2">$1.2M</div>
                      <div className="text-sm text-gray-500 uppercase tracking-widest">Est. Annual Leakage</div>
                  </div>
              </div>
          </div>
      </Section>

      {/* 2. THE MECHANISM - "Audit -> Rank -> Build" */}
      <Section className="py-40 bg-black relative">
        <div className="max-w-7xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
                        Precision Engineering <br/>
                        For Your Operations.
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl">
                        Every business is constrained by three universal constants: <span className="text-white font-medium">Revenue</span>, <span className="text-white font-medium">Time</span>, and <span className="text-white font-medium">Scale</span>.
                        <br/><br/>
                        We drill down past the surface-level symptoms to find the <span className="text-white italic">atomic unit of friction</span> that is silently killing your growth in these areas.
                    </p>
                    
                    <div className="space-y-12 relative before:absolute before:left-6 before:top-6 before:bottom-6 before:w-px before:bg-gradient-to-b before:from-[#D4AF37]/50 before:to-transparent before:opacity-30 hidden md:block">
                        {[
                            {
                                icon: Search,
                                title: "1. Fractal Root Cause Analysis",
                                desc: "We don't stop at 'Revenue is down.' We drill 4 levels deep—past the metrics, into the workflows, down to the single missing API call or unhandled objection."
                            },
                             {
                                icon: BarChart3,
                                title: "2. The Impact Ranking",
                                desc: "Once we find the root causes, we rank them by financial impact. We identify the single bottleneck that, if solved, renders other problems irrelevant."
                            },
                             {
                                icon: Binary,
                                title: "3. Custom Architecture",
                                desc: "We code bespoke AI agents that plug into your existing stack to permanently solve the root cause, not just patch the symptom."
                            }
                        ].map((item, i) => (
                             <div key={i} className="flex gap-8 items-start relative z-10 group">
                                 <div className="w-12 h-12 bg-[#0A0A0A] border border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-colors duration-500 rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.05)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                     <item.icon className="w-5 h-5 text-[#D4AF37]" />
                                 </div>
                                 <div className="pt-2">
                                     <h4 className="text-white text-xl font-medium mb-2 group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                                     <p className="text-gray-400 leading-relaxed max-w-sm">{item.desc}</p>
                                 </div>
                             </div>
                        ))}
                    </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                     {/* Tabbed Drill Down Visualization */}
                     <DrillDownTabs />
                </div>
             </div>
        </div>
      </Section>

      {/* 2.5 THE DEPLOYMENT PROTOCOL - Timeline */}
      <Section className="py-32 bg-[#050505] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 relative z-10">
              <div className="text-center mb-24">
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">The Deployment Protocol</h2>
                  <p className="text-gray-400 max-w-2xl mx-auto text-lg">We don&apos;t guess. We execute a military-grade rollout sequence designed to mitigate risk and guarantee adoption.</p>
              </div>

              <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent"></div>

                  {[
                      {
                          step: "01",
                          title: "Deep-Dive Audit",
                          desc: "We deploy non-intrusive monitoring to map your current workflows for 72 hours, identifying every bottleneck.",
                          align: "right"
                      },
                      {
                          step: "02",
                          title: "The Architecture",
                          desc: "We design a bespoke lattice of AI agents tailored to your specific infrastructure (CRM, VoIP, ERP).",
                          align: "left"
                      },
                      {
                          step: "03",
                          title: "The Pilot (Control Group)",
                          desc: "We launch the system on 10% of your traffic or one location. We verify ROI before full commitment.",
                          align: "right"
                      },
                      {
                          step: "04",
                          title: "Full-Scale Scale",
                          desc: "Once efficacy is proven, we flip the switch. Your entire operation is upgraded instantly.",
                          align: "left"
                      }
                  ].map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0.1, filter: "blur(10px)", scale: 0.95 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.3 }}
                        key={i} 
                        className={`relative flex items-center mb-20 ${item.align === 'left' ? 'md:flex-row-reverse' : ''}`}
                      >
                          {/* Node on Line */}
                          <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050505] border border-[#D4AF37] z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                              <div className="w-full h-full rounded-full bg-[#D4AF37] animate-ping opacity-20"></div>
                          </div>

                          {/* Mobile Spacer (Left) */}
                          <div className="w-[60px] md:w-1/2 shrink-0"></div>

                          {/* Content */}
                          <div className={`w-full md:w-1/2 pl-6 md:pl-0 ${item.align === 'left' ? 'md:text-left md:pr-16' : 'md:text-left md:pl-16'}`}>
                              <div className="text-[#D4AF37] font-mono text-sm mb-2 opacity-80">PHASE {item.step}</div>
                              <h3 className="text-2xl text-white font-serif mb-3">{item.title}</h3>
                              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </Section>

      {/* 2.75 THE PARTNER PRIVILEGES - Value Prop Add */}
      <Section className="py-32 bg-black border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
                 {/* Pillar 1 */}
                 <div className="px-6 py-6 md:py-0">
                     <div className="text-[#D4AF37] mb-6 flex justify-center md:justify-start">
                        <Phone className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-serif text-white mb-4">Direct-Line Access</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                         You don&apos;t deal with support tickets or junior managers. You get a direct Slack line to our engineering team and founders. We become your fractional CTO.
                     </p>
                 </div>
                 
                 {/* Pillar 2 */}
                 <div className="px-6 py-6 md:py-0">
                     <div className="text-[#D4AF37] mb-6 flex justify-center md:justify-start">
                        <Lock className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-serif text-white mb-4">Full IP Sovereignty</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                         We don&apos;t rent you software. We build assets. You own the code, the agents, and the data. No vendor lock-in. 100% transferability.
                     </p>
                 </div>

                 {/* Pillar 3 */}
                 <div className="px-6 py-6 md:py-0">
                     <div className="text-[#D4AF37] mb-6 flex justify-center md:justify-start">
                        <Repeat className="w-8 h-8" />
                     </div>
                     <h3 className="text-xl font-serif text-white mb-4">Continuous Evolution</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                         The market moves fast. We don&apos;t just &quot;deploy and leave.&quot; We monitor your system quarterly, upgrading models as new LLMs are released to keep your edge sharp.
                     </p>
                 </div>
              </div>
          </div>
      </Section>

      {/* 3. THE QUALIFICATION FILTER */}
      <Section className="py-40 border-t border-white/5 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                   <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Partnership Criteria</h2>
                   <p className="text-gray-400 max-w-2xl mx-auto text-lg">We maintain strict selectivity to ensure a 100% success rate. We only accept partners where we see clear, math-based ROI.</p>
              </div>
             
              <div className="grid md:grid-cols-3 gap-8" onMouseLeave={() => setHoveredCard(null)}>
                  {[
                      {
                        title: "$2M+ Revenue",
                        desc: "You have existing momentum and data. We multiply what's working; we don't start from zero."
                      },
                      {
                        title: "High Complexity",
                        desc: "You have complex logistics, high-volume leads, or complex operations where AI can create massive leverage in your systems."
                      },
                      {
                        title: "Founder-Led",
                        desc: "We work directly with decision makers. We execute fast. We don't do 'committee approvals.'"
                      }
                  ].map((card, i) => (
                      <div 
                        key={i} 
                        className="relative p-10 bg-gradient-to-b from-white/5 to-transparent rounded-sm border border-white/5 transition-all duration-300 group overflow-hidden"
                        onMouseEnter={() => setHoveredCard(i)}
                      >
                           {/* Card Spotlight Effect */}
                           {hoveredCard === i && (
                                <motion.div
                                    layoutId="card-spotlight"
                                    className="absolute inset-0 z-0 bg-white/[0.03]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                           )}
                           
                          <div className="relative z-10">
                            <div className="w-12 h-1 bg-white/20 mb-8 group-hover:bg-[#D4AF37] transition-colors duration-300"></div>
                            <h3 className="text-2xl font-serif text-white mb-4 group-hover:translate-x-1 transition-transform">{card.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">{card.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>

                {/* 4. INVESTMENT PROTOCOL (Unified Master Contract) */}
               <div className="mt-32 max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Capital Requirements</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            An integrated partnership model. You invest in the <strong>Construction</strong> ($120k) and the <strong>Sustainment</strong> ($5k/mo).
                        </p>
                    </div>

                    <div className="relative p-[1px] rounded-sm bg-gradient-to-b from-[#D4AF37]/50 to-white/10 mx-auto max-w-4xl group">
                        <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#D4AF37]/20 transition-colors duration-700"></div>
                        
                        <div className="bg-[#0A0A0A] relative rounded-sm overflow-hidden">
                             
                             {/* Header Banner */}
                             <div className="bg-white/5 border-b border-white/10 px-8 py-4 flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                     <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                                     <span className="text-gray-300 font-serif tracking-wide uppercase text-sm">Enterprise System Agreement</span>
                                 </div>
                                 <div className="text-[#D4AF37] text-xs font-mono">
                                     Est. Timeline: 60-90 Days
                                 </div>
                             </div>

                             <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                                
                                {/* Phase 1: Initiation */}
                                <div className="p-10 md:p-12 relative">
                                     <div className="absolute top-0 right-0 p-4 opacity-50">
                                        <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest border border-gray-800 px-2 py-1 rounded-sm">Step 1</span>
                                     </div>

                                     <h3 className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-4 text-[#D4AF37]">Phase 1: Architecture</h3>
                                     <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-4xl font-serif text-white">$120,000</span>
                                        <span className="text-gray-500 text-sm font-light">/ one-time</span>
                                     </div>

                                     <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="bg-green-500/10 p-1 rounded-full mt-0.5 min-w-[20px]"><CheckCircle2 className="w-3 h-3 text-green-500" /></div>
                                            <span className="text-gray-400 text-sm">Validating & Audit Phase (Scope Definition)</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-green-500/10 p-1 rounded-full mt-0.5 min-w-[20px]"><CheckCircle2 className="w-3 h-3 text-green-500" /></div>
                                            <span className="text-gray-400 text-sm">Full Stack Development & Integration</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-green-500/10 p-1 rounded-full mt-0.5 min-w-[20px]"><CheckCircle2 className="w-3 h-3 text-green-500" /></div>
                                            <span className="text-gray-400 text-sm">Staff Training & Workflow Installation</span>
                                        </li>
                                     </ul>
                                </div>

                                {/* Phase 2: Continuous Evolution */}
                                <div className="p-10 md:p-12 relative bg-white/[0.02]">
                                     <div className="absolute top-0 right-0 p-4 opacity-50">
                                        <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest border border-gray-800 px-2 py-1 rounded-sm">Step 2</span>
                                     </div>

                                    <h3 className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-4 text-[#D4AF37]">Phase 2: Compounding Growth</h3>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-4xl font-serif text-white">$5,000</span>
                                        <span className="text-gray-500 text-sm font-light">/ month</span>
                                    </div>
                                    
                                    {/* Incentive Badge */}
                                    <div className="flex items-center gap-2 mb-6">
                                        <span className="bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm border border-green-500/20">
                                            Waived Months 1-3
                                        </span>
                                    </div>

                                     <ul className="space-y-4 mb-8">
                                        <li className="flex items-start gap-3">
                                            <div className="bg-[#D4AF37]/10 p-1 rounded-full mt-0.5 min-w-[20px]"><CheckCircle2 className="w-3 h-3 text-[#D4AF37]" /></div>
                                            <span className="text-gray-300 text-sm">Rolled Implementation of Audit Roadmap</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-[#D4AF37]/10 p-1 rounded-full mt-0.5 min-w-[20px]"><CheckCircle2 className="w-3 h-3 text-[#D4AF37]" /></div>
                                            <span className="text-gray-300 text-sm">Dedicated Enterprise Infrastructure</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-[#D4AF37]/10 p-1 rounded-full mt-0.5 min-w-[20px]"><CheckCircle2 className="w-3 h-3 text-[#D4AF37]" /></div>
                                            <span className="text-gray-300 text-sm">New Systems Deployed Monthly</span>
                                        </li>
                                     </ul>

                                     <div className="border-t border-white/10 pt-4 mt-auto">
                                        <p className="text-[#D4AF37]/60 text-xs font-medium text-center italic">
                                            &quot;We keep building. You keep growing.&quot;
                                        </p>
                                     </div>
                                </div>

                             </div>

                             {/* ROI Trajectory Footer */}
                             <div className="bg-white/[0.03] border-t border-white/10 p-8 md:p-10">
                                <h4 className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-8 text-center">The Path to Compounding ROI</h4>
                                <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 max-w-3xl mx-auto">
                                    {/* Line Connector */}
                                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 md:hidden"></div>
                                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-red-500/20 via-[#D4AF37]/40 to-green-500/20 hidden md:block"></div>

                                    {/* Milestone 1 */}
                                    <div className="relative z-10 bg-[#0A0A0A] p-4 border border-white/10 rounded-sm text-center w-48 shadow-lg">
                                        <div className="text-red-400 text-xs font-bold mb-1">Day 1</div>
                                        <div className="text-white font-serif text-lg mb-1">Capital Deploy</div>
                                        <div className="text-gray-500 text-[10px]">Investment (-$120k)</div>
                                    </div>

                                    {/* Milestone 2 */}
                                    <div className="relative z-10 bg-[#0A0A0A] p-4 border border-[#D4AF37]/30 rounded-sm text-center w-48 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                        <div className="text-[#D4AF37] text-xs font-bold mb-1">Day 90</div>
                                        <div className="text-white font-serif text-lg mb-1">System Live</div>
                                        <div className="text-gray-500 text-[10px]">Core Revenue Online</div>
                                    </div>

                                    {/* Milestone 3 */}
                                    <div className="relative z-10 bg-[#0A0A0A] p-4 border border-green-500/30 rounded-sm text-center w-48 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                                        <div className="text-green-500 text-xs font-bold mb-1">Year 1+</div>
                                        <div className="text-white font-serif text-lg mb-1">Compounding</div>
                                        <div className="text-gray-500 text-[10px]">Continuous System Additions</div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
               </div>

               {/* Guarantee Section */}
              <div className="mt-32 relative group">
                  <div className="absolute inset-0 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#D4AF37]/10 transition-colors duration-1000"></div>
                  <div className="relative p-12 md:p-16 border border-white/10 bg-[#0A0A0A] backdrop-blur-xl max-w-4xl mx-auto text-center rounded-sm hover:border-[#D4AF37]/30 transition-colors duration-500">
                      
                      {/* THE VAULT ICON */}
                      <div className="relative w-24 h-24 mx-auto mb-6">
                            <Image 
                                src="/elite-vault.png" 
                                alt="Vault Guarantee" 
                                fill 
                                className="object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                            />
                      </div>

                      <h3 className="text-3xl font-serif text-white mb-8">The &quot;Zero-Risk&quot; Protocol</h3>
                      
                      <div className="bg-white/[0.03] border border-white/10 rounded-sm p-8 max-w-3xl mx-auto mb-10 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                          <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic font-light">
                              &quot;If we accept you as a partner, we guarantee a minimum of <span className="text-[#D4AF37] font-bold">$300,000</span> in added value (Revenue or Savings) in Year 1, or we <span className="text-[#D4AF37] font-bold border-b border-[#D4AF37]/30">refund 100% of our fees</span>.&quot;
                          </p>
                      </div>

                      <p className="text-gray-500 max-w-xl mx-auto mb-10 text-sm">
                          We pre-qualify partners rigorously so we can remove implementation risk entirely.
                      </p>
                      
                      <Button 
                        onClick={() => setIsApplicationOpen(true)}
                        size="lg" 
                        className="bg-gradient-to-r from-[#D4AF37] to-[#B4941F] hover:from-[#E5C148] hover:to-[#C6A22C] text-white font-medium px-12 py-8 rounded-full text-lg shadow-[0_10px_40px_-10px_rgba(212,175,55,0.3)] hover:shadow-[0_10px_40px_-5px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1"
                      >
                          Request Access
                          <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                  </div>
              </div>
          </div>
      </Section>

      {/* 4. STRATEGIC RESERVE FOOTER */}
      <footer className="py-12 bg-black border-t border-white/5 text-center md:text-left">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="mb-4 md:mb-0">
                  <p className="text-[#D4AF37] font-serif tracking-widest uppercase text-xs mb-1">FoxTrove Elite Division</p>
                  <p className="text-gray-600 text-[10px] font-mono">AUTHORIZED PERSONNEL ONLY // SECTOR 7 // LEVEL 4 CLEARANCE</p>
              </div>
              <div className="flex gap-8 text-xs font-mono text-gray-500">
                  <span className="hover:text-white cursor-pointer transition-colors">DIRECT_LINE_ACCESS</span>
                  <span className="hover:text-white cursor-pointer transition-colors">SECURE_LOGIN</span>
              </div>
          </div>
      </footer>
      
    </main>
  );
}
