'use client';

import { ShieldCheck, Check } from 'lucide-react';

export function GuaranteeSection() {
    return (
        <section className="py-24 bg-[#0F0F10] border-t border-white/5 relative overflow-hidden">
             {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 text-center relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                    
                    {/* Top Shine */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    {/* Badge Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-rose-500/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-8 border border-rose-500/30 shadow-[0_0_30px_rgba(225,29,72,0.2)] relative group">
                        <div className="absolute inset-0 bg-rose-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <ShieldCheck className="w-12 h-12 text-rose-400 relative z-10" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 drop-shadow-lg">The &quot;Grand Slam&quot; Guarantee</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        We don&apos;t want your money unless we make you money. It&apos;s that simple. 
                        We represent the <span className="text-rose-200 font-medium border-b border-rose-500/30">only risk-free investment</span> you will make this year.
                    </p>

                    <div className="bg-[#0a0a0a]/50 rounded-2xl p-8 text-left max-w-2xl mx-auto border border-white/5 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                            <span className="text-rose-400">{'///'}</span> Our Promise To You:
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <span className="text-white font-medium group-hover:text-rose-100 transition-colors">60-Day Performance Window</span>
                                    <p className="text-sm text-gray-500">We track results from Day 1 of launch.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <span className="text-white font-medium group-hover:text-rose-100 transition-colors">Minimum $10,000 Revenue Recovery</span>
                                    <p className="text-sm text-gray-500">Documented through rebookings and no-show reductions.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3 group">
                                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <span className="text-white font-medium group-hover:text-rose-100 transition-colors">If We Miss By Even $1...</span>
                                    <p className="text-sm text-gray-500">
                                        We refund 100% of your Setup Fee + Retainer fees instantly.
                                    </p>
                                </div>
                            </li>
                             <li className="flex items-start gap-3 group">
                                <Check className="w-6 h-6 text-rose-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <span className="text-white font-medium group-hover:text-rose-100 transition-colors">The &quot;Work For Free&quot; Clause</span>
                                    <p className="text-sm text-gray-500">
                                        We will continue working for free until you hit the $10,000 goal. We stay comfortably in the boat with you.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
