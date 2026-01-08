'use client';

import { Check, X, Minus } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/utils';

export function ComparisonTable() {
    return (
        <Section className="py-24 bg-gradient-to-b from-[#0B1120] to-[#1a2333] relative overflow-hidden">
             {/* Background glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[100px] rounded-full pointing-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why The Old Way Is <span className="text-red-500">Costing You.</span></h2>
                    <p className="text-gray-400 text-lg">See how FoxTrove AI stacks up against the alternatives.</p>
                </div>

                <div className="overflow-x-auto">
                    {/* Inner container removed, grid sits directly in section */}
                    <div className="min-w-[800px]">
                        <div className="grid grid-cols-4 gap-4 mb-8 border-b border-white/10 pb-6">
                            <div className="text-gray-500 font-semibold uppercase tracking-wider text-xs flex items-end pb-2">Features</div>
                            <div className="text-center">
                                <span className="text-gray-400 font-bold block mb-1">Standard Voicemail</span>
                                <span className="text-xs text-gray-500">The &quot;Free&quot; Option</span>
                            </div>
                            <div className="text-center">
                                <span className="text-gray-400 font-bold block mb-1">Answering Service</span>
                                <span className="text-xs text-gray-500">The &quot;Human&quot; Option</span>
                            </div>
                            <div className="text-center relative">
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-lg">
                                    Winner
                                </div>
                                <span className="text-blue-400 font-bold block mb-1 text-xl">FoxTrove AI</span>
                                <span className="text-xs text-blue-500/80">The Growth Option</span>
                            </div>
                        </div>

                        {/* Row 1: Response Time */}
                        <div className="grid grid-cols-4 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
                            <div className="font-bold text-gray-300">Response Time</div>
                            <div className="text-center text-gray-500">Hours / Days</div>
                            <div className="text-center text-gray-400">2-10 Minutes</div>
                            <div className="text-center font-bold text-green-400 bg-green-500/10 py-1 rounded-lg">Instant (0s)</div>
                        </div>

                        {/* Row 2: Booking Capability */}
                        <div className="grid grid-cols-4 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
                            <div className="font-bold text-gray-300">Books Appointments?</div>
                            <div className="text-center text-gray-600"><X className="w-5 h-5 mx-auto"/></div>
                            <div className="text-center text-gray-600"><Minus className="w-5 h-5 mx-auto"/> (Takes Messages)</div>
                            <div className="text-center font-bold text-blue-400"><Check className="w-6 h-6 mx-auto text-blue-500"/></div>
                        </div>

                        {/* Row 3: Cost Structure */}
                        <div className="grid grid-cols-4 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
                            <div className="font-bold text-gray-300">Cost Structure</div>
                            <div className="text-center text-red-400 font-bold">Lost Revenue</div>
                            <div className="text-center text-gray-400">$2.00 - $3.00 / min</div>
                            <div className="text-center font-bold text-green-400">Flat Monthly Rate</div>
                        </div>

                        {/* Row 4: 24/7 Availability */}
                        <div className="grid grid-cols-4 gap-4 py-6 border-b border-white/5 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
                            <div className="font-bold text-gray-300">24/7 Availability</div>
                            <div className="text-center text-gray-600"><Check className="w-5 h-5 mx-auto"/> (Ideally)</div>
                            <div className="text-center text-yellow-500 font-bold">Extra Fees</div>
                            <div className="text-center font-bold text-blue-400"><Check className="w-6 h-6 mx-auto text-blue-500"/> Included</div>
                        </div>

                         {/* Row 5: Knowledge Base */}
                         <div className="grid grid-cols-4 gap-4 py-6 items-center hover:bg-white/5 transition-colors rounded-lg px-2">
                            <div className="font-bold text-gray-300">Business Knowledge</div>
                            <div className="text-center text-gray-600">None</div>
                            <div className="text-center text-gray-400">Generic Scripts</div>
                            <div className="text-center font-bold text-blue-400">Deep Custom Training</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
