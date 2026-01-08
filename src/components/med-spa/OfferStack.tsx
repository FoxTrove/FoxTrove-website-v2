'use client';

import { CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useScarcity } from '@/hooks/useScarcity';

interface OfferStackProps {
    onClaim?: () => void;
}

export function OfferStack({ onClaim }: OfferStackProps) {
    const { spotsLeft, spotsClaimed, totalSpots } = useScarcity();
    const progressPercentage = (spotsClaimed / totalSpots) * 100;

    return (
        <div className="max-w-4xl mx-auto relative perspective-[1000px]">
             {/* "Black Glass" Card Container */}
             <div className="bg-[#0f0505]/90 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] relative group hover:shadow-[0_0_80px_rgba(225,29,72,0.15)] transition-all duration-500">
                
                {/* Subtle sheen animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                {/* Header */}
                <div className="bg-gradient-to-r from-[#1f0f0f] to-[#0a0a0a] px-8 py-10 text-center border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2 tracking-tight">The "Founder's Rate" Stack</h3>
                    <p className="text-rose-300/90 font-medium mb-8">Everything Included For First {totalSpots} Partners</p>
                    
                    {/* Scarcity Meter */}
                    <div className="max-w-xs mx-auto">
                        <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest">
                            <span className="text-gray-400">
                                {spotsClaimed} Spots Taken
                            </span>
                            <span className="text-rose-400 drop-shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:text-rose-300 group-hover:drop-shadow-[0_0_15px_rgba(244,63,94,0.8)]">
                                {spotsLeft} Spots Left
                            </span>
                        </div>
                        <div className="h-2.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
                            <div 
                                className="h-full bg-gradient-to-r from-rose-700 via-rose-500 to-rose-400 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.6)] transition-all duration-1000 ease-out relative"
                                style={{ width: `${progressPercentage}%` }}
                            >
                                <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Stack */}
                <div className="p-8 md:p-12 space-y-8 relative z-10">
                    <div className="space-y-6">
                        <StackItem 
                            title="AI Rebooking Engine" 
                            value="$997/mo"
                            desc="Automated follow-ups & retention sequences." 
                        />
                        <StackItem 
                            title="No-Show Prevention System" 
                            value="$497/mo"
                            desc="Multi-channel reminders & confirmation workflows." 
                        />
                        <StackItem 
                            title="24/7 Lead Response Agent" 
                            value="$397/mo"
                            desc="Instant after-hours capture & qualification." 
                        />
                        <StackItem 
                            title="Revenue Analytics Dashboard" 
                            value="$197/mo"
                            desc="Real-time tracking of every recovered dollar." 
                        />
                    </div>

                    <div className="h-px bg-white/10 my-8"></div>

                    {/* Bonuses */}
                    <div className="bg-rose-950/10 -mx-8 -mt-8 -mb-4 p-8 md:px-12 rounded-b-3xl border-t border-rose-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Star className="w-40 h-40 text-rose-500" />
                        </div>
                        
                        <div className="flex flex-col mb-6">
                            <h4 className="text-xl font-bold text-rose-300 flex items-center gap-2">
                                <Star className="w-5 h-5 fill-rose-300" /> Fast Action Bonuses
                            </h4>
                            <div className="ml-7 mt-1 text-xs font-mono text-rose-400/70 flex items-center gap-2">
                                <span className="bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded text-rose-300 font-bold">INCLUDED FREE</span>
                                <span>Becomes paid add-on after spot #{totalSpots}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                             <StackItem 
                                title="Bonus 1: Revenue Leakage Audit" 
                                value="$997"
                                desc="Custom recovery roadmap for your specific metrics."
                                isBonus 
                            />
                             <StackItem 
                                title="Bonus 2: Treatment Reminder Library" 
                                value="$497"
                                desc="Pre-written sequences for Botox, Fillers, Laser, etc." 
                                isBonus
                            />
                             <StackItem 
                                title="Bonus 3: No-Show Recovery Playbook" 
                                value="$297"
                                desc="Scripts for chronic offenders & deposit enforcement." 
                                isBonus
                            />
                        </div>
                    </div>
                </div>

                {/* Total Value Footer */}
                 <div className="bg-white/5 p-8 text-center border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
                        
                        {/* Comparison - Standard */}
                        <div className="text-center md:text-right opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                             <div className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-semibold">Standard Pricing</div>
                             <div className="flex flex-col items-center md:items-end gap-0.5">
                                <div className="text-xl text-gray-400 line-through decoration-rose-500/50 decoration-2">$6,000 Setup</div>
                                <div className="text-xl text-gray-400 line-through decoration-rose-500/50 decoration-2">+ $997/mo</div>
                             </div>
                        </div>

                        {/* Arrow/Separator */}
                         <div className="hidden md:block text-2xl text-rose-500/40">
                            ➔
                         </div>

                         {/* Founder Rate */}
                        <div className="text-center md:text-left relative">
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 whitespace-nowrap bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-rose-400">
                                SAVE $7,000+ IN YEAR 1
                            </div>
                             <div className="text-rose-300 text-xs uppercase tracking-widest mb-2 font-bold">Your Founder's Rate</div>
                             <div className="flex flex-col items-center md:items-start">
                                <div className="text-2xl font-bold text-white">$2,500 Setup</div>
                                <div className="text-4xl font-serif text-white font-medium flex items-baseline gap-1">
                                    + $497<span className="text-lg text-gray-400 font-sans font-normal">/mo (First Month Free)</span>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* CTA Button Area */}
                    <div className="mt-10 max-w-md mx-auto">
                        <Button 
                            onClick={onClaim}
                            className="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-serif text-xl py-8 h-auto rounded-xl shadow-[0_0_40px_rgba(225,29,72,0.4)] hover:shadow-[0_0_60px_rgba(225,29,72,0.6)] hover:-translate-y-1 transition-all border border-rose-400/30 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
                            <span className="relative z-10 flex flex-col items-center leading-tight">
                                <span>Claim 1 of {totalSpots} Founder Spots</span>
                                <span className="text-xs font-sans font-normal opacity-90 mt-1 uppercase tracking-wider">100% Risk-Free • 60-Day Guarantee</span>
                            </span>
                        </Button>
                        <p className="mt-4 text-xs text-gray-500">
                            <span className="text-rose-400 font-bold">Guarantee:</span> $10k in 60 Days or we pay you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StackItem({ title, value, desc, isBonus = false }: { title: string, value: string, desc: string, isBonus?: boolean }) {
    return (
        <div className="flex justify-between items-start gap-4 group">
            <div className="flex gap-3 items-start">
                 <CheckCircle2 className={`w-6 h-6 shrink-0 mt-0.5 ${isBonus ? 'text-rose-400' : 'text-gray-400'}`} />
                 <div>
                     <h4 className={`text-lg font-bold ${isBonus ? 'text-rose-100' : 'text-white'}`}>{title}</h4>
                     <p className={`text-sm ${isBonus ? 'text-rose-200/60' : 'text-gray-400'}`}>{desc}</p>
                 </div>
            </div>
            <div className={`text-right ${isBonus ? 'opacity-90' : 'opacity-60'} group-hover:opacity-100 transition-opacity`}>
                <div className="text-[10px] uppercase tracking-wider font-bold mb-0.5 text-gray-500">Value</div>
                <div className={`font-mono text-sm ${isBonus ? 'text-rose-300' : 'text-gray-300'} bg-white/5 px-2 py-1 rounded inline-block`}>
                    {value}
                </div>
            </div>
        </div>
    )
}
