'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, PhoneOff, ArrowRight, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';

export function MissedCallCalculator() {
    // State for inputs
    const [avgJobValue, setAvgJobValue] = useState(850);
    const [weeklyCalls, setWeeklyCalls] = useState(30);
    const [missedRate, setMissedRate] = useState(27); // 27% industry avg

    // State for result
    const [annualLost, setAnnualLost] = useState(0);

    useEffect(() => {
        // Calculation: 
        // Weekly Missed = Weekly Calls * (Missed Rate / 100)
        // Weekly Lost = Weekly Missed * Avg Job Value
        // Annual Lost = Weekly Lost * 52
        
        // We assume not every call converts, but a missed call is a missed OPPORTUNITY.
        // Let's be conservative: assume 40% close rate on answered calls.
        // So a missed call is 40% of a job lost.
        // User request didn't specify close rate, but raw "missed call * job value" might be too aggressive?
        // Actually, for a "pain" calculator, usually raw numbers are used or a conversion rate.
        // Let's use a standard 30% conversion rate assumption for lead-to-job if not specified, 
        // OR just calculate "Potential Revenue at Risk".
        // "Each missed call represents $500-$2,000 in lost revenue" in the docs.
        // So we will treat 1 Missed Call = 1 Lost Job Opportunity? 
        // Let's add a "Conversion Rate" slider or constant to be realistic?
        // For simplicity and IMPACT: 
        // Lost Revenue = (Weekly Calls * Missed%) * AvgJobValue * ConversionRate(35%) * 52
        
        const conversionRate = 0.35; // 35% of callers would have booked
        const weeklyMissed = weeklyCalls * (missedRate / 100);
        const weeklyLost = weeklyMissed * avgJobValue * conversionRate;
        const annual = weeklyLost * 52;
        
        setAnnualLost(Math.round(annual));
    }, [avgJobValue, weeklyCalls, missedRate]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(val);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6">
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                    <Calculator className="w-4 h-4" />
                    Lost Revenue Calculator
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    How Much Is Voicemail <span className="text-red-500">Costing You?</span>
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Adjust the sliders to match your business metrics and see what you&apos;re losing annually to missed calls.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-[#1E293B]/50 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                
                {/* Inputs */}
                <div className="space-y-8">
                    {/* Input 1: Avg Job Value */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-emerald-400" />
                                Average Job Value
                            </label>
                            <span className="font-mono text-white bg-white/5 px-2 py-1 rounded border border-white/10">
                                ${avgJobValue}
                            </span>
                        </div>
                        <Slider 
                            value={[avgJobValue]} 
                            min={150} 
                            max={5000} 
                            step={50} 
                            onValueChange={(val) => setAvgJobValue(val[0])}
                            className="py-2"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                            <span>$150</span>
                            <span>$5,000+</span>
                        </div>
                    </div>

                    {/* Input 2: Weekly Calls */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <PhoneOff className="w-4 h-4 text-blue-400" />
                                Weekly Calls (Volume)
                            </label>
                            <span className="font-mono text-white bg-white/5 px-2 py-1 rounded border border-white/10">
                                {weeklyCalls} calls/wk
                            </span>
                        </div>
                        <Slider 
                            value={[weeklyCalls]} 
                            min={5} 
                            max={200} 
                            step={5} 
                            onValueChange={(val) => setWeeklyCalls(val[0])} 
                            className="py-2"
                        />
                         <div className="flex justify-between text-xs text-gray-500">
                            <span>5 calls</span>
                            <span>200+ calls</span>
                        </div>
                    </div>

                    {/* Input 3: Missed Call Rate */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                                <PhoneOff className="w-4 h-4 text-red-400" />
                                Missed Call Rate (%)
                            </label>
                            <span className="font-mono text-white bg-white/5 px-2 py-1 rounded border border-white/10">
                                {missedRate}%
                            </span>
                        </div>
                        <Slider 
                            value={[missedRate]} 
                            min={0} 
                            max={100} 
                            step={1} 
                            onValueChange={(val) => setMissedRate(val[0])} 
                            className="py-2"
                        />
                        <p className="text-xs text-gray-500 italic">
                            *Industry average is 27-35%
                        </p>
                    </div>
                </div>

                {/* Results Card */}
                <div className="relative">
                    <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full opacity-20"></div>
                    <Card className="relative bg-[#0F172A] border-red-500/30 p-8 text-center overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                        
                        <h4 className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-semibold">
                            Annual Lost Revenue
                        </h4>
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                            {formatCurrency(annualLost)}
                        </div>
                        <p className="text-red-400 text-sm mb-8 font-medium bg-red-500/10 inline-block px-3 py-1 rounded-full border border-red-500/20">
                            ⚠️ That&apos;s potential profit gone
                        </p>

                        <div className="space-y-3">
                           <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 text-lg shadow-[0_4px_14px_0_rgba(220,38,38,0.39)]">
                                Stop The Bleeding
                                <ArrowRight className="w-5 h-5 ml-2" />
                           </Button>
                           <p className="text-xs text-gray-500">
                               Based on 35% conversion rate on missed opportunities.
                           </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

// Simple internal Slider if ui/slider not available, but user has shadcn likely. 
// Assuming @/components/ui/slider exists. If not, I'll need to create it or simple Input range.
