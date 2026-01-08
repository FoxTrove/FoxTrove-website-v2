'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Database, ShieldCheck } from 'lucide-react';

export function ToolTrapVisual() {
  return (
    <motion.div 
      initial="initial"
      whileHover="hover"
      className="relative p-8 rounded-2xl border border-red-500/10 bg-red-900/5 backdrop-blur-sm group overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-50">
          <div className="w-20 h-20 bg-red-500/10 rounded-full blur-[40px]"></div>
      </div>
      
      <div className="flex items-center gap-4 mb-6">
          {/* Jittering Icon */}
          <motion.div 
            variants={{
                initial: { x: 0, y: 0 },
                hover: { 
                    x: [0, -2, 2, -1, 1, 0],
                    y: [0, 1, -1, 2, -2, 0],
                    transition: { repeat: Infinity, duration: 0.5 }
                }
            }}
            className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500"
          >
            <ArrowRight className="w-6 h-6 rotate-45" />
          </motion.div>
          <h3 className="text-2xl font-serif text-red-200">The Tool Trap</h3>
      </div>
      
      <div className="space-y-6 relative z-10">
          <p className="text-gray-400 leading-relaxed">
            Buying distinct apps. Data trapped in silos. Workers overwhelmed by new logins. This is why <span className="text-red-400">95% of pilots fail</span>. It adds friction, not flow.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
             {[
               { label: "Fragmented Data", color: "bg-red-500" },
               { label: "High Friction", color: "bg-red-500" },
               { label: "No ROI", color: "bg-red-500" },
               { label: "Chaos", color: "bg-red-500" }
             ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={{
                      hover: {
                          x: Math.random() * 4 - 2,
                          y: Math.random() * 4 - 2,
                          rotate: Math.random() * 2 - 1,
                          transition: { 
                              repeat: Infinity, 
                              duration: 0.2 + Math.random() * 0.3,
                              repeatType: "reverse"
                          }
                      }
                  }}
                  className="p-4 rounded-lg bg-black/40 border border-white/5 text-sm text-gray-500 flex items-center gap-2"
                >
                    <span className={`w-2 h-2 rounded-full ${item.color}`}></span> {item.label}
                </motion.div>
             ))}
          </div>
      </div>
    </motion.div>
  );
}

export function AggregationLeverVisual() {
    return (
      <motion.div 
        initial="initial"
        whileHover="hover"
        className="relative p-8 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/5 to-black backdrop-blur-sm group shadow-[0_0_50px_-20px_rgba(212,175,55,0.1)] overflow-hidden"
      >
         <motion.div 
            variants={{
                hover: { opacity: 0.5 }
            }}
            className="absolute -inset-[1px] bg-gradient-to-r from-[#D4AF37]/20 to-transparent rounded-2xl opacity-20 blur-sm transition-opacity duration-500"
         ></motion.div>
        
        <div className="flex items-center gap-4 mb-6 relative z-10">
           {/* Pulsing Icon */}
           <motion.div 
              variants={{
                  hover: { scale: [1, 1.1, 1], boxShadow: ["0 0 0 0px rgba(212,175,55,0)", "0 0 0 10px rgba(212,175,55,0.1)", "0 0 0 0px rgba(212,175,55,0)"] }
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]"
           >
              <Zap className="w-6 h-6 fill-current" />
           </motion.div>
           <h3 className="text-2xl font-serif text-[#D4AF37]">The Aggregation Layer</h3>
        </div>
        
        <div className="space-y-6 relative z-10">
           <p className="text-gray-300 leading-relaxed">
              One unified partner. Custom workflows that bend around your business. AI becomes invisible infrastructure, not another task.
           </p>
           
           <div className="grid grid-cols-1 gap-3">
              {[
                  { icon: ShieldCheck, label: "One Coherent Operating System" },
                  { icon: Database, label: "Data Flowing Between All Tools" },
                  { icon: Zap, label: "Instant, Measurable Leverage" }
              ].map((Item, i) => (
                  <motion.div 
                    key={i}
                    variants={{
                        initial: { x: 0, opacity: 0.8 },
                        hover: { x: 5, opacity: 1, borderColor: "rgba(212,175,55,0.4)", backgroundColor: "rgba(212,175,55,0.15)" }
                    }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-sm text-[#F8F1D1] flex items-center gap-3"
                  >
                     <Item.icon className="w-4 h-4 text-[#D4AF37]" /> {Item.label}
                  </motion.div>
              ))}
           </div>
        </div>
      </motion.div>
    );
  }
