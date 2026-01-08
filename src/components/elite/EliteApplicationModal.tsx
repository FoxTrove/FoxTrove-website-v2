'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, ChevronRight, Loader2, AlertCircle, Building2, Database, Sparkles } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { submitLead } from '@/app/actions/submitLead';
import { scheduleLead } from '@/app/actions/scheduleLead';

interface EliteApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function EliteApplicationModal({ isOpen, onClose }: EliteApplicationModalProps) {
    // 1. Modal State
    const [step, setStep] = useState<'form' | 'qualified' | 'disqualified' | 'scheduled'>('form');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [leadId, setLeadId] = useState<string | null>(null);

    // 2. Scheduler State
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // 3. Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        revenue: '' as '' | '<$2M' | '$2M-$10M' | '$10M+',
        teamSize: '' as '' | '1-5' | '6-20' | '21-50' | '50+',
        crm: '',
        magicWand: ''
    });

    // Load from LocalStorage on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('fox_elite_status');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    // Check if the saved booking is recent (optional, but good practice)
                    setFormData(prev => ({ ...prev, email: parsed.email }));
                    setSelectedDate(new Date(parsed.date));
                    setSelectedTime(parsed.time);
                    setStep('scheduled');
                } catch (e) {
                    console.error("Failed to parse saved booking", e);
                }
            }
        }
    }, [isOpen]); // Re-check when modal opens

    // Calendar Helper Functions
    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const days = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        return { days, firstDay };
    };

    const { days, firstDay } = getDaysInMonth(currentMonth);
    const daysArray = Array.from({ length: days }, (_, i) => i + 1);
    const paddingArray = Array.from({ length: firstDay }, (_, i) => i);

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
    ];

    const handleSchedule = async () => {
        if (!selectedDate || !selectedTime || !leadId) return;
        
        setIsSubmitting(true);
        
        // Format Booking Data
        const bookingDate = selectedDate.toISOString();
        const bookingTime = selectedTime;

        // Call Server Action
        await scheduleLead({
            leadId,
            date: bookingDate,
            time: bookingTime
        });

        // Simulate API call to book slot latency
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Save to LocalStorage
        localStorage.setItem('fox_elite_status', JSON.stringify({
            email: formData.email,
            date: bookingDate,
            time: bookingTime,
            leadId: leadId
        }));
        
        setIsSubmitting(false);
        setStep('scheduled');
    };

    const revenueOptions = [
        { label: '< $2M', value: '<$2M', desc: 'Growth Phase' },
        { label: '$2M - $10M', value: '$2M-$10M', desc: 'Scaling Phase' },
        { label: '$10M +', value: '$10M+', desc: 'Expansion Phase' },
    ];

    const teamSizeOptions = [
        { label: '1-5', value: '1-5' },
        { label: '6-20', value: '6-20' },
        { label: '21-50', value: '21-50' },
        { label: '50+', value: '50+' },
    ];

    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};
        let isValid = true;

        // Name
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        // Email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // Website
        // Requires at least "domain.com"
        const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
        if (!formData.website || !urlRegex.test(formData.website)) {
            newErrors.website = 'Please enter a valid URL (e.g., example.com)';
            isValid = false;
        }

        // Revenue
        if (!formData.revenue) {
            newErrors.revenue = 'Please select a revenue range';
            isValid = false;
        }

        // Team Size
        if (!formData.teamSize) {
            newErrors.teamSize = 'Please select a team size';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Validating form...", formData);

        if (!validateForm()) {
            console.log("Validation failed", errors);
            return;
        }

        console.log("Validation passed, submitting...");
        setIsSubmitting(true);

        const result = await submitLead({
            name: formData.name,
            email: formData.email,
            website: formData.website,
            revenue: formData.revenue,
            teamSize: formData.teamSize,
            crm: formData.crm,
            magicWand: formData.magicWand
        });

        setIsSubmitting(false);

        if (!result.success || !result.leadId) {
            console.error(result.error);
            alert("Something went wrong. Please try again.");
            return;
        }

        // Store Lead ID for later scheduling
        setLeadId(result.leadId);
        
        // Qualification Logic: Must be $2M+
        if (formData.revenue === '<$2M') {
            setStep('disqualified');
        } else {
            setStep('qualified');
        }
    };

    const handleClose = () => {
        setStep('form');
        setFormData({
            name: '',
            email: '',
            website: '',
            revenue: '',
            teamSize: '',
            crm: '',
            magicWand: ''
        });
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <div className={`bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-center transition-all duration-500 ${step === 'qualified' ? 'min-h-[800px] p-0' : 'min-h-[600px] p-8 md:p-12 relative'}`}>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <AnimatePresence mode="wait">
                    {step === 'form' && (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="relative z-10 max-w-2xl mx-auto w-full"
                        >
                            {/* Header */}
                            <div className="mb-8 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-red-400 text-[10px] font-mono uppercase tracking-widest">Q1 Availability: 1 Spot Remaining</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">Does Your Business Qualify?</h2>
                                <p className="text-gray-400">We carefully curate our partners to ensure we can deliver massive impact. Answer a few questions to see if we're a match.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                {/* Basic Info */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-xs uppercase tracking-wider text-gray-500">Name</Label>
                                        <Input 
                                            id="name" 
                                            required
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({...formData, name: e.target.value});
                                                if (errors.name) setErrors({...errors, name: ''});
                                            }}
                                            className={`bg-white/[0.03] border-white/10 focus:border-[#D4AF37]/50 h-10 ${errors.name ? 'border-red-500' : ''}`}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-xs uppercase tracking-wider text-gray-500">Work Email</Label>
                                        <Input 
                                            id="email" 
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({...formData, email: e.target.value});
                                                if (errors.email) setErrors({...errors, email: ''});
                                            }}
                                            className={`bg-white/[0.03] border-white/10 focus:border-[#D4AF37]/50 h-10 ${errors.email ? 'border-red-500' : ''}`}
                                            placeholder="name@company.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="website" className="text-xs uppercase tracking-wider text-gray-500">Company Website</Label>
                                    <Input 
                                        id="website"
                                        type="url"
                                        required
                                        value={formData.website}
                                        onChange={(e) => {
                                            setFormData({...formData, website: e.target.value});
                                            if (errors.website) setErrors({...errors, website: ''});
                                        }}
                                        className={`bg-white/[0.03] border-white/10 focus:border-[#D4AF37]/50 h-10 ${errors.website ? 'border-red-500' : ''}`}
                                        placeholder="example.com"
                                    />
                                    {errors.website && <p className="text-red-500 text-[10px] mt-1">{errors.website}</p>}
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 pt-2">
                                    {/* Revenue Selector */}
                                    <div className="space-y-3">
                                        <Label className="text-xs uppercase tracking-wider text-gray-500">Annual Revenue</Label>
                                        <div className="flex flex-col gap-2">
                                            {revenueOptions.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    type="button"
                                                    onClick={() => {
                                                        setFormData({...formData, revenue: opt.value as any});
                                                        if (errors.revenue) setErrors({...errors, revenue: ''});
                                                    }}
                                                    className={`p-2.5 rounded-sm border text-left transition-all flex items-center justify-between group ${
                                                        formData.revenue === opt.value 
                                                        ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white' 
                                                        : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/[0.05]'
                                                    } ${errors.revenue ? 'border-red-500/50' : ''}`}
                                                >
                                                    <span className={`font-mono text-sm ${formData.revenue === opt.value ? 'text-[#D4AF37]' : 'text-gray-300'}`}>{opt.label}</span>
                                                    <span className="text-[10px] opacity-60 uppercase">{opt.desc}</span>
                                                </button>
                                            ))}
                                        </div>
                                        {errors.revenue && <p className="text-red-500 text-[10px]">{errors.revenue}</p>}
                                    </div>

                                    <div className="space-y-4">
                                        {/* Team Size */}
                                        <div className="space-y-2">
                                            <Label className="text-xs uppercase tracking-wider text-gray-500 flex items-center gap-2">
                                                <Building2 className="w-3 h-3" />
                                                Team Size
                                            </Label>
                                            <div className="grid grid-cols-4 gap-2">
                                                {teamSizeOptions.map((opt) => (
                                                    <button
                                                        key={opt.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setFormData({...formData, teamSize: opt.value as any});
                                                            if (errors.teamSize) setErrors({...errors, teamSize: ''});
                                                        }}
                                                        className={`p-2 rounded-sm border text-center transition-all text-sm font-mono ${
                                                            formData.teamSize === opt.value
                                                            ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white'
                                                            : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20'
                                                        } ${errors.teamSize ? 'border-red-500/50' : ''}`}
                                                    >
                                                        {opt.label}
                                                    </button>
                                                ))}
                                            </div>
                                            {errors.teamSize && <p className="text-red-500 text-[10px]">{errors.teamSize}</p>}
                                        </div>

                                        {/* CRM Field */}
                                        <div className="space-y-2">
                                            <Label htmlFor="crm" className="text-xs uppercase tracking-wider text-gray-500 flex items-center gap-2">
                                                <Database className="w-3 h-3" />
                                                Primary CRM / Database
                                            </Label>
                                            <Input 
                                                id="crm" 
                                                value={formData.crm}
                                                onChange={(e) => setFormData({...formData, crm: e.target.value})}
                                                className="bg-white/[0.03] border-white/10 focus:border-[#D4AF37]/50 h-10"
                                                placeholder="e.g. Salesforce, HubSpot, GoHighLevel"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Magic Wand Question */}
                                <div className="space-y-2 pt-2">
                                    <Label htmlFor="magicWand" className="text-xs uppercase tracking-wider text-[#D4AF37] flex items-center gap-2">
                                        <Sparkles className="w-3 h-3" />
                                        The "Magic Wand" Question
                                    </Label>
                                    <p className="text-xs text-gray-500 mb-2">If you could solve one problem in your business today, what would it be?</p>
                                    <Textarea
                                        id="magicWand"
                                        value={formData.magicWand}
                                        onChange={(e) => setFormData({...formData, magicWand: e.target.value})}
                                        className="bg-white/[0.03] border-white/10 focus:border-[#D4AF37]/50 min-h-[80px]"
                                        placeholder="Describe the bottleneck..."
                                    />
                                </div>

                                {/* Submit */}
                                <Button 
                                    className="w-full h-12 bg-[#D4AF37] text-black hover:bg-[#F1D675] font-bold text-lg rounded-sm mt-4"
                                    disabled={!formData.name || !formData.email || !formData.revenue || !formData.teamSize || isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <Loader2 className="animate-spin w-5 h-5 mx-auto" />
                                    ) : (
                                        "Check Eligibility"
                                    )}
                                </Button>
                            </form>
                        </motion.div>
                    )}

                    {step === 'disqualified' && (
                        <motion.div
                            key="disqualified"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative z-10 max-w-lg mx-auto w-full text-center"
                        >
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-serif text-white mb-4">Assessment Received</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Thank you, {formData.name}. We've received your details.
                                <br/><br/>
                                Our team is currently reviewing your profile to see if our systems are a good fit for your infrastructure. You can expect a personal response at <strong>{formData.email}</strong> shortly regarding next steps.
                            </p>
                            <Button 
                                onClick={handleClose}
                                variant="outline" 
                                className="border-white/10 text-white hover:bg-white/5"
                            >
                                Return to Site
                            </Button>
                        </motion.div>
                    )}

                    {step === 'qualified' && (
                        <motion.div
                            key="qualified"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative z-10 w-full h-full flex flex-col"
                        >
                            <div className="p-8 md:p-12 text-center border-b border-white/10 bg-[#0A0A0A] relative z-20">
                                <h2 className="text-2xl md:text-3xl font-serif text-white mb-2 flex items-center justify-center gap-3">
                                    <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                                    <span>Congratulations.</span>
                                </h2>
                                <p className="text-gray-400">Based on your initial profile, it's likely you qualify for the Elite Partner Program.</p>
                            </div>
                            
                            {/* Custom On-Brand Scheduler Logic */}
                            <div className="flex-grow bg-[#111] relative min-h-[500px] w-full p-8 md:p-12 flex flex-col md:flex-row gap-8">
                                
                                {/* 1. Date Picker */}
                                <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-sm p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="text-white font-serif">Select Date</h4>
                                        <div className="text-xs text-gray-500 font-mono">
                                            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-2 text-center text-[10px] text-gray-600 mb-4 uppercase tracking-wider">
                                        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-2">
                                        {paddingArray.map((_, i) => <div key={`padding-${i}`}></div>)}
                                        {daysArray.map(day => {
                                            const isSelected = selectedDate?.getDate() === day;
                                            return (
                                                <button
                                                    key={day}
                                                    onClick={() => {
                                                        const newDate = new Date(currentMonth);
                                                        newDate.setDate(day);
                                                        setSelectedDate(newDate);
                                                        setSelectedTime(null); // Reset time on date change
                                                    }}
                                                    className={`h-10 w-full rounded-sm flex items-center justify-center text-sm transition-all ${
                                                        isSelected
                                                            ? 'bg-[#D4AF37] text-black font-bold'
                                                            : 'hover:bg-white/5 text-gray-400'
                                                    }`}
                                                >
                                                    {day}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* 2. Time Picker (Conditional) */}
                                <div className="flex-1 flex flex-col border border-white/10 rounded-sm bg-[#0A0A0A] p-6 relative">
                                     {!selectedDate ? (
                                         <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm">
                                             Select a date to view times
                                         </div>
                                     ) : (
                                        <>
                                            <h4 className="text-white font-serif mb-6">Select Time</h4>
                                            <div className="grid grid-cols-1 gap-3 overflow-y-auto custom-scrollbar max-h-[300px]">
                                                {timeSlots.map(time => (
                                                    <button
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`p-3 rounded-sm border text-left transition-all flex items-center justify-between group ${
                                                            selectedTime === time
                                                            ? 'bg-[#D4AF37]/10 border-[#D4AF37] text-white'
                                                            : 'bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20'
                                                        }`}
                                                    >
                                                        <span className="font-mono text-sm">{time}</span>
                                                        {selectedTime === time && <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="mt-auto pt-6">
                                                <Button 
                                                    onClick={handleSchedule}
                                                    className="w-full bg-[#D4AF37] text-black hover:bg-[#F1D675] font-bold"
                                                    disabled={!selectedTime || isSubmitting}
                                                >
                                                    {isSubmitting ? <Loader2 className="animate-spin w-4 h-4" /> : "Confirm Session"}
                                                </Button>
                                            </div>
                                        </>
                                     )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 'scheduled' && (
                        <motion.div
                            key="scheduled"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative z-10 max-w-lg mx-auto w-full text-center"
                        >
                            <div className="w-20 h-20 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#D4AF37]/20">
                                <Sparkles className="w-10 h-10 text-[#D4AF37]" />
                            </div>
                            <h2 className="text-3xl font-serif text-white mb-4">You're Booked.</h2>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Transformation Initiated.
                                <br/><br/>
                                We have confirmed your Discovery Call for <strong>{selectedDate?.toLocaleDateString()} at {selectedTime}</strong>.
                                A calendar invitation with Zoom details has been sent to {formData.email}.
                            </p>
                            <Button 
                                onClick={handleClose}
                                variant="outline" 
                                className="border-white/10 text-white hover:bg-white/5"
                            >
                                Return to Site
                            </Button>
                        </motion.div> 
                    )}
                </AnimatePresence>
            </div>
        </Modal>
    );
}
