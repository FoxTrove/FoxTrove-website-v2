'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Check, Loader2, ArrowRight, DollarSign, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider'; // Assuming this exists from previous step context
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { submitLead } from '@/app/actions/submitLead';


// Types
type FormData = {
    industry: string;
    teamSize: string;
    callHandling: string;
    weeklyCalls: number;
    avgJobValue: number;
    email: string;
    name: string;
};

const INDUSTRIES = ['HVAC', 'Plumbing', 'Roofing', 'Electrical', 'Solar', 'Radon', 'Other'];
const TEAM_SIZES = ['1-2 (Owner Op)', '3-9 (Growing)', '10-25 (Established)', '25+ (Market Leader)'];
const HANDLING_METHODS = ['I answer mostly', 'Office Manager', 'Answering Service', 'Goes to Voicemail'];

interface LeadGenModalProps {
    isOpen: boolean;
    onClose: () => void;
    vertical?: string;
}

export function LeadGenModal({ isOpen, onClose, vertical = 'home-services' }: LeadGenModalProps) {
    const [step, setStep] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<number | null>(null);

    const [data, setData] = useState<FormData>({
        industry: '',
        teamSize: '',
        callHandling: '',
        weeklyCalls: 40,
        avgJobValue: 850,
        email: '',
        name: ''
    });

    const totalSteps = 7; // Intro -> Contact -> Industry -> Size -> Handling -> Volume/Value -> Analyzing -> Result

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const handleBack = () => {
        if (step > 0) setStep(step - 1);
    };

    const calculateLostRevenue = () => {
        // Simple logic similar to before
        // Weekly Calls * 27% (industry avg missed) * Avg Value * 35% (close rate) * 52 weeks
        const missedCalls = data.weeklyCalls * 0.27;
        const lostRevenueWeekly = missedCalls * data.avgJobValue * 0.35;
        return Math.round(lostRevenueWeekly * 52);
    };

    const handleAnalysisComplete = () => {
        setStep(7); // Go to results
    };

    const runSubmission = async () => {
        setIsSubmitting(true);
        const lostRev = calculateLostRevenue();
        setResult(lostRev);

        // Submit to Supabase
        await submitLead({
            name: data.name,
            email: data.email,
            vertical: vertical, 
            source: 'LeadGenModal',
            metadata: {
                industry: data.industry,
                teamSize: data.teamSize,
                callHandling: data.callHandling,
                weeklyCalls: data.weeklyCalls,
                avgJobValue: data.avgJobValue,
                lostRevenue: lostRev
            }
        });
        
        setIsSubmitting(false);
        setStep(6); // Start Analysis
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const lostRev = calculateLostRevenue();
        setResult(lostRev);

        const result = await submitLead({
            name: data.name,
            email: data.email,
            vertical: vertical, 
            source: 'LeadGenModal',
            metadata: {
                industry: data.industry,
                teamSize: data.teamSize,
                callHandling: data.callHandling,
                weeklyCalls: data.weeklyCalls,
                avgJobValue: data.avgJobValue,
                lostRevenue: lostRev
            }
        });
        
        setIsSubmitting(false);

        if (result.success) {
            setStep(totalSteps + 1); // Show result
        } else {
            alert("Failed to save your report. Please try again.");
            // Optional: still show result even if save fails?
            // setStep(totalSteps + 1); 
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-[#0F172A] border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden"
            >
                {/* Progress Bar */}
                <div className="h-1 bg-gray-800 w-full">
                    <motion.div 
                        className="h-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((step) / totalSteps) * 100}%` }}
                    />
                </div>

                <div className="p-8">
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div 
                                key="step0"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="text-center py-8"
                            >
                                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <DollarSign className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Missed Call Audit</h3>
                                <p className="text-gray-400 mb-8">
                                    Answer 5 quick questions to see exactly how much revenue your voicemail is costing you annually.
                                </p>
                                <Button onClick={handleNext} className="w-full bg-blue-600 hover:bg-blue-500 text-lg py-6">
                                    Start Free Audit <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        )}

                        {step === 1 && (
                            <motion.div 
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Let's get started</h3>
                                    <p className="text-gray-400 text-sm">We'll prepare a custom report for you.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name</Label>
                                        <Input 
                                            id="name" 
                                            required
                                            value={data.name}
                                            onChange={(e) => setData({...data, name: e.target.value})}
                                            placeholder="John Doe"
                                            className="bg-white/5 border-white/10"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input 
                                            id="email" 
                                            type="email" 
                                            required
                                            value={data.email}
                                            onChange={(e) => setData({...data, email: e.target.value})}
                                            placeholder="john@company.com"
                                            className="bg-white/5 border-white/10"
                                        />
                                    </div>
                                    <Button 
                                        onClick={handleNext}
                                        disabled={!data.name || !data.email}
                                        className="w-full bg-blue-600 hover:bg-blue-500"
                                    >
                                        Next <ChevronRight className="w-4 h-4 ml-1"/>
                                    </Button>
                                </div>
                                <div className="flex justify-start pt-2">
                                    <Button variant="ghost" size="sm" onClick={handleBack}>Back</Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div 
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-bold text-white">What industry are you in?</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    {INDUSTRIES.map((ind) => (
                                        <button
                                            key={ind}
                                            onClick={() => { setData({...data, industry: ind}); handleNext(); }}
                                            className={cn(
                                                "p-4 rounded-xl border text-left transition-all hover:border-blue-500/50 hover:bg-blue-500/5",
                                                data.industry === ind 
                                                    ? "border-blue-500 bg-blue-500/10 text-blue-100" 
                                                    : "border-gray-700 bg-gray-800/30 text-gray-400"
                                            )}
                                        >
                                            {ind}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-between pt-4">
                                    <Button variant="ghost" onClick={handleBack}>Back</Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div 
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-bold text-white">How big is your team?</h3>
                                <div className="space-y-3">
                                    {TEAM_SIZES.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => { setData({...data, teamSize: size}); handleNext(); }}
                                            className={cn(
                                                "w-full p-4 rounded-xl border text-left transition-all hover:border-blue-500/50 hover:bg-blue-500/5 flex items-center justify-between",
                                                data.teamSize === size 
                                                    ? "border-blue-500 bg-blue-500/10 text-blue-100" 
                                                    : "border-gray-700 bg-gray-800/30 text-gray-400"
                                            )}
                                        >
                                            <span className="flex items-center gap-3">
                                                <Users className="w-4 h-4 opacity-50"/> {size}
                                            </span>
                                            {data.teamSize === size && <Check className="w-4 h-4 text-blue-500"/>}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-between pt-4">
                                    <Button variant="ghost" onClick={handleBack}>Back</Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div 
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h3 className="text-xl font-bold text-white">Who handles calls right now?</h3>
                                <div className="space-y-3">
                                    {HANDLING_METHODS.map((method) => (
                                        <button
                                            key={method}
                                            onClick={() => { setData({...data, callHandling: method}); handleNext(); }}
                                            className={cn(
                                                "w-full p-4 rounded-xl border text-left transition-all hover:border-blue-500/50 hover:bg-blue-500/5 flex items-center justify-between",
                                                data.callHandling === method 
                                                    ? "border-blue-500 bg-blue-500/10 text-blue-100" 
                                                    : "border-gray-700 bg-gray-800/30 text-gray-400"
                                            )}
                                        >
                                            <span className="flex items-center gap-3">
                                                <Phone className="w-4 h-4 opacity-50"/> {method}
                                            </span>
                                            {data.callHandling === method && <Check className="w-4 h-4 text-blue-500"/>}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex justify-between pt-4">
                                    <Button variant="ghost" onClick={handleBack}>Back</Button>
                                </div>
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div 
                                key="step5"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <h3 className="text-xl font-bold text-white">Let's crunch the numbers.</h3>
                                
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <Label>Weekly Call Volume</Label>
                                        <span className="text-blue-400 font-mono">{data.weeklyCalls} calls</span>
                                    </div>
                                    <Slider 
                                        value={[data.weeklyCalls]} 
                                        onValueChange={(v) => setData({...data, weeklyCalls: v[0]})}
                                        min={5} max={300} step={5}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <Label>Average Job Value ($)</Label>
                                        <span className="text-green-400 font-mono">${data.avgJobValue}</span>
                                    </div>
                                    <Slider 
                                        value={[data.avgJobValue]} 
                                        onValueChange={(v) => setData({...data, avgJobValue: v[0]})}
                                        min={100} max={5000} step={50}
                                    />
                                    <div className="flex gap-2 mt-2">
                                        {[450, 850, 1500, 2500].map(val => (
                                            <button 
                                                key={val}
                                                onClick={() => setData({...data, avgJobValue: val})}
                                                className="text-xs px-2 py-1 bg-white/5 rounded hover:bg-white/10 text-gray-400"
                                            >
                                                ${val}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between pt-4">
                                    <Button variant="ghost" onClick={handleBack}>Back</Button>
                                    <Button onClick={runSubmission} className="bg-blue-600 hover:bg-blue-500">
                                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin"/> : "Generate Report"}
                                    </Button>
                                </div>
                            </motion.div>
                        )}


                        {step === 6 && (
                             <motion.div 
                                key="step6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <ProcessingSteps onComplete={handleAnalysisComplete} />
                            </motion.div>
                        )}
                        
                        {step === 7 && (
                             <motion.div 
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-6"
                            >
                                 <h3 className="text-green-500 font-bold tracking-wider text-xl mb-2 animate-pulse">CONGRATULATIONS!</h3>
                                 <h4 className="text-white text-lg mb-6">We have 3 spots available for {data.industry} in your area.</h4>

                                 <h3 className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-4">Potential Revenue Lost</h3>
                                 <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-6 font-mono">
                                     ${result?.toLocaleString()}
                                     <span className="text-xl text-gray-500 block mt-2 font-sans font-normal">per year</span>
                                 </div>
                                 
                                 <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-8 text-left">
                                     <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                                         <Check className="w-5 h-5" /> Report Sent to {data.email}
                                     </h4>
                                     <p className="text-gray-300 text-sm">
                                         We've broken down exactly how FoxTrove can recapture this revenue.
                                     </p>
                                 </div>

                                 <div className="space-y-4">
                                    <Button size="lg" className="w-full bg-green-600 hover:bg-green-500 font-bold text-lg animate-pulse" onClick={() => window.location.href = 'https://buy.stripe.com/test_00wdRb1of09GaEacXv0Ba03'}>
                                        Claim Your Spot Now
                                    </Button>
                                    <p className="text-xs text-gray-400 max-w-sm mx-auto">
                                        By clicking above, you'll be taken to our secure checkout to finalize your 30-day free trial setup.
                                    </p>
                                 </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}

function ProcessingSteps({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(0);
    const steps = [
        "Analyzing call volume patterns...",
        "Benchmarking against industry standards...",
        "Identifying revenue leakage...",
        "Generating recovery roadmap..."
    ];

    useEffect(() => {
        if (step < steps.length) {
            const timer = setTimeout(() => {
                setStep(prev => prev + 1);
            }, 800); 
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [step, steps.length, onComplete]);

    return (
         <div className="text-center py-12">
             <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-8 relative">
                 <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                 <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-ping opacity-20"></div>
             </div>
             
             <div className="space-y-4">
                 {steps.map((text, index) => (
                     <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                            opacity: step === index ? 1 : step > index ? 0.3 : 0,
                            y: 0,
                            scale: step === index ? 1.05 : 1
                        }}
                        className={`text-lg font-medium ${step === index ? 'text-white' : 'text-gray-500'}`}
                     >
                         <div className="flex items-center justify-center gap-3">
                             {step > index ? (
                                 <Check className="w-5 h-5 text-green-500" />
                             ) : (
                                <div className={`w-2 h-2 rounded-full ${step === index ? 'bg-blue-500' : 'bg-gray-700'}`} />
                             )}
                             {text}
                         </div>
                     </motion.div>
                 ))}
             </div>
         </div>
    )
}
