'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Eye, Sparkles, Smile } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Book Appointment',
    description: 'Schedule easily online, via WhatsApp, or direct call.',
    icon: Calendar,
    color: 'text-primary border-primary/20 bg-primary/5',
  },
  {
    step: '02',
    title: 'Warm Consultation',
    description: 'Meet Dr. Labeeb for a playful checkup session.',
    icon: Users,
    color: 'text-secondary border-secondary/20 bg-secondary/5',
  },
  {
    step: '03',
    title: 'Gentle Diagnosis',
    description: 'Advanced digital screens without clinical poking.',
    icon: Eye,
    color: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5',
  },
  {
    step: '04',
    title: 'Pain-Free Treatment',
    description: 'Modern micro-treatments with laughing gas options.',
    icon: Sparkles,
    color: 'text-indigo-500 border-indigo-500/20 bg-indigo-500/5',
  },
  {
    step: '05',
    title: 'Healthy Smile',
    description: 'Leave with balloons, stickers, and a radiant smile.',
    icon: Smile,
    color: 'text-amber-500 border-amber-500/20 bg-amber-500/5',
  },
];

export default function TreatmentProcess() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-bg-custom to-white z-10">
      
      {/* Background circles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 w-[40vw] h-[40vw] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-0 w-[35vw] h-[35vw] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">The Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
            Five Simple Steps To <br />
            A Sparking Smile
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
        </div>

        {/* Steps Grid / Timeline Wrapper */}
        <div className="relative">
          
          {/* Animated Connecting Line - Desktop Only */}
          <div className="absolute top-1/2 left-[10%] right-[10%] h-[3px] bg-slate-100 -translate-y-[62px] z-0 hidden lg:block overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Step Bubble wrapper */}
                  <div className="relative mb-6">
                    {/* Floating step label badge */}
                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-white bg-heading rounded-full w-5 h-5 flex items-center justify-center border border-white shadow-sm z-20">
                      {item.step}
                    </span>

                    {/* Step Icon */}
                    <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center shadow-[0_8px_24px_rgba(96,165,250,0.03)] relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 bg-white ${item.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Pulse Glow */}
                    <div className="absolute inset-0 rounded-full bg-secondary/5 blur-md scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 z-0" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-heading mb-2 group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs text-body-text max-w-[200px] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Vertical connecting dash line for Mobile Only */}
                  {idx < STEPS.length - 1 && (
                    <div className="w-[2px] h-12 bg-gradient-to-b from-secondary to-slate-100 absolute -bottom-12 left-1/2 -translate-x-1/2 z-0 lg:hidden" />
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
