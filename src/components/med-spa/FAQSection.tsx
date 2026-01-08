'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from '@/components/ui/section';

const FAQS = [
    {
        question: "Does this integrate with my EMR (Zenoti, Jane, etc.)?",
        answer: "Yes. FoxTrove integrates directly with all major Med Spa EMRs including Zenoti, Aesthetic Record, Jane, Boulevard, and Booker. We sync availability in real-time so double-bookings are impossible."
    },
    {
        question: "I already have a front desk team. Does this replace them?",
        answer: "No, it empowers them. FoxTrove handles the 2 AM leads, the overflow calls, and the repetitive rebooking tasks. This frees your human staff to focus on the high-value in-person experience (upselling, hospitality, and care) rather than being glued to a phone."
    },
    {
        question: "Is this HIPAA compliant?",
        answer: "Absolutely. We are a fully HIPAA-compliant platform. All patient data is encrypted, and we sign a BAA (Business Associate Agreement) with every partner from Day 1."
    },
    {
        question: "How long does setup take?",
        answer: "Our 'White Glove' onboarding takes less than 7 days. We build your knowledge base, train the AI on your specific services/pricing, and integrate with your EMR. You just hand us the keys, and we hand you back a fully separate revenue engine."
    },
    {
        question: "What if the AI messes up?",
        answer: "FoxTrove is programmed with 'Safe Handoff' protocols. If a conversation gets too complex or emotional, it instantly flags a human team member to take over. You are never out of control."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10 px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Common Questions</h2>
                    <p className="text-gray-400">Everything you need to know about the partnership.</p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div 
                            key={index}
                            className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
                                openIndex === index 
                                ? 'bg-white/5 border-rose-500/30 shadow-[0_0_30px_rgba(244,63,94,0.1)]' 
                                : 'bg-[#121214]/50 border-white/5 hover:border-white/10'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-medium pr-8 transition-colors ${
                                    openIndex === index ? 'text-white' : 'text-gray-300'
                                }`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full border transition-all ${
                                    openIndex === index 
                                    ? 'bg-rose-500/20 border-rose-500/50 text-rose-400 rotate-180' 
                                    : 'border-white/10 text-gray-500'
                                }`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
