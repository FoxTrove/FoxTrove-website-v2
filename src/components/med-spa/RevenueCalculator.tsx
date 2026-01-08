'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Calculator, ArrowRight, DollarSign, RefreshCcw, Lock, ChevronLeft, ChevronRight, Check, X, Loader2, ScanSearch, FileText } from 'lucide-react';
import { submitLead } from '@/app/actions/submitLead';

interface RevenueCalculatorProps {
  mode?: 'audit' | 'offer'; // audit = default flow, offer = purchase flow
}

export function RevenueCalculator({ mode = 'audit' }: RevenueCalculatorProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [analysisStep, setAnalysisStep] = useState(0); // 0: None, 1: Processing, 2: Ready
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showContact, setShowContact] = useState(true);
  
  // Form State
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      appointments: 50,
      avgValue: 450,
      noShowRate: 22,
      rebookingRate: 35,
      hasAutomatedFollowup: false,
      hasAfterHoursResponse: false,
      pms: '',
      goal: ''
  });

  // Calculations
  const annualAppointments = formData.appointments * 52;
  const targetRebookingRate = 70; // Best practice target
  
  const lostToNoShows = Math.round(annualAppointments * (formData.noShowRate / 100) * formData.avgValue);
  const lostToRetention = Math.round(annualAppointments * ((targetRebookingRate - formData.rebookingRate) / 100) * formData.avgValue);
  const totalLeakage = lostToNoShows + lostToRetention;
  const recoveryPotential = Math.round(totalLeakage * 0.65);

  const questions = [
      {
          id: 'appointments',
          title: 'Weekly Volume',
          question: 'How many appointments do you book per week?',
          component: (
              <div className="space-y-8">
                  <div className="text-5xl font-serif text-white text-center font-medium">
                      {formData.appointments}
                  </div>
                  <Slider 
                      value={[formData.appointments]} 
                      min={10} 
                      max={200} 
                      step={5} 
                      onValueChange={(val: number[]) => setFormData({...formData, appointments: val[0]})}
                      className="py-4"
                  />
                  <p className="text-center text-gray-500 text-sm">Most med spas range from 30-100/week</p>
              </div>
          )
      },
      {
          id: 'avgValue',
          title: 'Average Ticket',
          question: 'What is your average ticket value?',
          component: (
              <div className="space-y-8">
                  <div className="text-5xl font-serif text-white text-center font-medium">
                      ${formData.avgValue}
                  </div>
                  <Slider 
                      value={[formData.avgValue]} 
                      min={100} 
                      max={2000} 
                      step={50} 
                      onValueChange={(val: number[]) => setFormData({...formData, avgValue: val[0]})}
                      className="py-4"
                  />
              </div>
          )
      },
      {
          id: 'noShowRate',
          title: 'No-Show Rate',
          question: 'What percentage of appointments cancel or no-show?',
          component: (
              <div className="space-y-8">
                  <div className="text-5xl font-serif text-white text-center font-medium">
                      {formData.noShowRate}%
                  </div>
                  <Slider 
                      value={[formData.noShowRate]} 
                      min={0} 
                      max={50} 
                      step={1} 
                      onValueChange={(val: number[]) => setFormData({...formData, noShowRate: val[0]})}
                      className="py-4"
                  />
                  <p className="text-center text-gray-500 text-sm">Industry Average: 22%</p>
              </div>
          )
      },
      {
          id: 'rebookingRate',
          title: 'Retention',
          question: 'What percentage of patients rebook before leaving?',
          component: (
              <div className="space-y-8">
                   <div className="text-5xl font-serif text-white text-center font-medium">
                      {formData.rebookingRate}%
                  </div>
                  <Slider 
                      value={[formData.rebookingRate]} 
                      min={0} 
                      max={100} 
                      step={5} 
                      onValueChange={(val: number[]) => setFormData({...formData, rebookingRate: val[0]})}
                      className="py-4"
                  />
                   <p className="text-center text-gray-500 text-sm">Top Performers: 70%+</p>
              </div>
          )
      },
      {
          id: 'systems_check',
          title: 'System Diagnosis',
          question: 'Do you currently have an automated system to fill last-minute cancellations?',
          component: (
              <div className="flex gap-4 justify-center py-6">
                <button
                    onClick={() => setFormData({...formData, hasAutomatedFollowup: true})}
                    className={`flex-1 max-w-[160px] p-6 rounded-2xl border-2 transition-all ${formData.hasAutomatedFollowup ? 'border-rose-500 bg-rose-500/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                >
                    <Check className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">Yes</div>
                </button>
                 <button
                    onClick={() => setFormData({...formData, hasAutomatedFollowup: false})}
                    className={`flex-1 max-w-[160px] p-6 rounded-2xl border-2 transition-all ${!formData.hasAutomatedFollowup ? 'border-rose-500 bg-rose-500/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                >
                    <X className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">No</div>
                </button>
              </div>
          )
      },
       {
          id: 'after_hours_check',
          title: 'Missed Opportunity Check',
          question: 'Are leads who call after-hours instantly texted back by an agent?',
          component: (
              <div className="flex gap-4 justify-center py-6">
                <button
                    onClick={() => setFormData({...formData, hasAfterHoursResponse: true})}
                    className={`flex-1 max-w-[160px] p-6 rounded-2xl border-2 transition-all ${formData.hasAfterHoursResponse ? 'border-rose-500 bg-rose-500/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                >
                    <Check className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">Yes</div>
                </button>
                 <button
                    onClick={() => setFormData({...formData, hasAfterHoursResponse: false})}
                    className={`flex-1 max-w-[160px] p-6 rounded-2xl border-2 transition-all ${!formData.hasAfterHoursResponse ? 'border-rose-500 bg-rose-500/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                >
                    <X className="w-8 h-8 mx-auto mb-2" />
                    <div className="font-medium">No</div>
                </button>
              </div>
          )
      },
      {
          id: 'pms',
          title: 'Tech Compatibility',
          question: 'Which booking software do you currently use?',
          component: (
              <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto py-2">
                 {['Jane', 'Vagaro', 'Mindbody', 'Zenoti', 'Boulevard', 'Other'].map((pms) => (
                    <button
                        key={pms}
                        onClick={() => setFormData({...formData, pms})}
                        className={`p-4 rounded-xl border transition-all text-sm font-medium ${formData.pms === pms ? 'border-rose-500 bg-rose-500/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                    >
                        {pms}
                    </button>
                 ))}
              </div>
          )
      },
      {
          id: 'primary_goal',
          title: 'Your #1 Priority',
          question: 'What is the single biggest improvement you want to see?',
          component: (
              <div className="space-y-3 max-w-lg mx-auto py-2">
                 {[
                     'Reduce No-Shows & Cancellations',
                     'Get More New Patients',
                     'Increase Patient Retention/LTV',
                     'Stop Staff from Being Overwhelmed'
                    ].map((goal) => (
                    <button
                        key={goal}
                        onClick={() => setFormData({...formData, goal})}
                        className={`w-full p-4 rounded-xl border transition-all text-left text-sm font-medium ${formData.goal === goal ? 'border-rose-500 bg-rose-500/10 text-white' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                    >
                        {goal}
                    </button>
                 ))}
              </div>
          )
      }
  ];

  const handleNext = () => {
        // If last question, start simulation
      if (currentQuestion === questions.length - 1) {
          startAnalysis();
      } else {
          setCurrentQuestion(prev => prev + 1);
      }
  };

  const startAnalysis = () => {
    setAnalysisStep(1);
  };
    const handleAnalysisComplete = async () => {
        setLoading(true);
        
        const result = await submitLead({
            name: formData.name || 'Med Spa Inquiry',
            email: formData.email,
            vertical: 'med-spa',
            source: mode === 'offer' ? 'RevenueCalculator_Offer' : 'RevenueCalculator_Audit',
            metadata: {
                appointments: formData.appointments,
                avgValue: formData.avgValue,
                noShowRate: formData.noShowRate,
                rebookingRate: formData.rebookingRate,
                hasAutomatedFollowup: formData.hasAutomatedFollowup,
                hasAfterHoursResponse: formData.hasAfterHoursResponse,
                pms: formData.pms,
                goal: formData.goal,
                leakage: totalLeakage,
                recovery: recoveryPotential,
                intent: mode
            }
        });
        
        setLoading(false);
        setIsComplete(true);
    };
  
  const handleBack = () => {
      if (currentQuestion > 0) {
          setCurrentQuestion(prev => prev - 1);
      }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if(formData.email) {
          setShowContact(false);
      }
  };

  if (isComplete) {
      return (
          <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
          >
              <div className="text-center mb-6">
                  <h3 className="text-rose-500 font-bold tracking-wider text-xl mb-2 animate-pulse">CONGRATULATIONS!</h3>
                  <h4 className="text-white text-lg mb-6">Your practice qualifies for our Revenue Recovery System.</h4>
                  <p className="text-gray-400 text-sm">We have 3 spots available for Med Spas in your area.</p>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-6 mb-8">
                   <div className="flex items-start gap-4">
                      <RefreshCcw className="w-8 h-8 text-rose-500 shrink-0 mt-1" />
                      <div>
                          {mode === 'offer' ? (
                              <>
                                  <h4 className="text-lg font-bold text-rose-100 mb-1">Founder's Rate Eligibility: CONFIRMED</h4>
                                  <p className="text-rose-200/70 text-sm">
                                      Based on your inputs, your practice is an ideal candidate. You can lock in the $497/mo rate (First Month Free) today.
                                  </p>
                              </>
                          ) : (
                              <>
                                  <h4 className="text-lg font-bold text-rose-100 mb-1">Recovery Potential: ${recoveryPotential.toLocaleString()}/yr</h4>
                                  <p className="text-rose-200/70 text-sm">
                                      By implementing our AI Rebooking & No-Show Prevention system, a conservative estimate shows you can recover <strong>${recoveryPotential.toLocaleString()}</strong> in profit annually.
                                  </p>
                              </>
                          )}
                      </div>
                   </div>
              </div>

              <div className="space-y-4">
                  <Button 
                      onClick={() => window.location.href = 'https://buy.stripe.com/test_6oU6oJ5Ev9KgcMi9Lj0Ba04'}
                      className="w-full bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white text-xl py-8 h-auto rounded-full shadow-[0_0_30px_rgba(225,29,72,0.4)] animate-pulse"
                  >
                      {mode === 'offer' ? 'Activate My Free Month' : 'Claim Your Spot Now'}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                      Secure checkout • 30-Day Risk-Free Trial
                  </p>
              </div>
          </motion.div>
      )
  }
  
  // Analyzing View
  if (analysisStep === 1) {
       return (
           <ProcessingSteps onComplete={handleAnalysisComplete} />
       )
  }

  // Contact View (First)
  if (showContact) {
      return (
          <div className="w-full max-w-lg mx-auto">
             <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="space-y-6 text-center"
             >
                 <div className="mb-8">
                      <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-rose-500/20">
                           <Calculator className="w-10 h-10 text-rose-500" />
                      </div>
                      <h3 className="text-3xl font-serif text-white mb-2">
                          {mode === 'offer' ? 'Availability Check & Setup' : 'Revenue Recovery Audit'}
                      </h3>
                      <p className="text-gray-400">
                          {mode === 'offer' 
                              ? 'Let\'s confirm your eligibility for the Founder\'s Rate.' 
                              : 'Discover how much revenue your practice is leaking annually.'}
                      </p>
                 </div>

                 <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                     <div className="space-y-2">
                         <Label>Practice / Contact Name</Label>
                         <Input 
                             value={formData.name}
                             onChange={(e) => setFormData({...formData, name: e.target.value})}
                             placeholder="Dr. Smith / Luxe Med Spa"
                             className="bg-white/5 border-white/10"
                             required
                         />
                     </div>
                     <div className="space-y-2">
                         <Label>Email Address</Label>
                         <Input 
                             type="email"
                             value={formData.email}
                             onChange={(e) => setFormData({...formData, email: e.target.value})}
                             placeholder="admin@luxemedspa.com"
                             className="bg-white/5 border-white/10"
                             required
                         />
                     </div>
                     <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-500 text-lg py-6 mt-4">
                         {mode === 'offer' ? 'Check Eligibility' : 'Start Free Audit'} <ArrowRight className="w-4 h-4 ml-2" />
                     </Button>
                 </form>
             </motion.div>
          </div>
      )
  }

  // Question Flow
  return (
    <div className="w-full max-w-2xl mx-auto">
        <div className="relative overflow-hidden min-h-[500px] flex flex-col justify-center">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Calculator className="w-32 h-32 text-gray-500" />
            </div>

            {/* Progress */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                <motion.div 
                    className="h-full bg-rose-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={questions[currentQuestion].id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                >
                    <div className="text-center mb-12">
                        <span className="text-rose-500 font-medium text-sm tracking-wider uppercase mb-2 block">
                            Question {currentQuestion + 1} of {questions.length}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif text-white">
                            {questions[currentQuestion].question}
                        </h3>
                    </div>

                    <div className="mb-12">
                            {questions[currentQuestion].component}
                    </div>

                    <div className="flex justify-between items-center mt-8">
                        <Button 
                            variant="ghost" 
                            onClick={handleBack}
                            disabled={currentQuestion === 0}
                            className={`text-gray-500 hover:text-white ${currentQuestion === 0 ? 'invisible' : ''}`}
                        >
                            <ChevronLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <Button 
                            onClick={handleNext}
                            className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 h-auto text-lg font-medium"
                        >
                            {currentQuestion === questions.length - 1 ? 'Analyze My Practice' : 'Next'} <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
  );
}

function ProcessingSteps({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(0);
    const steps = [
        "Analyzing practice volume...",
        "Benchmarking against top 1% of Med Spas...",
        "Calculating missed revenue opportunities...",
        "Generating improvements roadmap..."
    ];

    useEffect(() => {
        if (step < steps.length) {
            const timer = setTimeout(() => {
                setStep(prev => prev + 1);
            }, 800); // 800ms per step
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [step, steps.length, onComplete]);

    return (
         <div className="w-full max-w-xl mx-auto text-center py-20">
             <div className="w-20 h-20 mx-auto bg-rose-500/10 rounded-full flex items-center justify-center mb-10 relative">
                 <Loader2 className="w-10 h-10 text-rose-500 animate-spin" />
                 <div className="absolute inset-0 rounded-full border border-rose-500/30 animate-ping opacity-20"></div>
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
                        className={`text-xl font-medium ${step === index ? 'text-white' : 'text-gray-500'}`}
                     >
                         <div className="flex items-center justify-center gap-3">
                             {step > index ? (
                                 <Check className="w-5 h-5 text-green-500" />
                             ) : (
                                <ScanSearch className={`w-5 h-5 ${step === index ? 'text-rose-500' : 'text-gray-700'}`} />
                             )}
                             {text}
                         </div>
                     </motion.div>
                 ))}
             </div>
         </div>
    )
}

