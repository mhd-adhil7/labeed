'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Heart, Award, FileText } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function ResearchInnovation() {
  return (
    <section id="research" className="relative py-24 md:py-32 overflow-hidden bg-white z-10">
      {/* Decorative Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-primary/10 blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-secondary/5 blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Research & Innovation</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Clinical Inventions & Research
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>
        </div>

        {/* Featured Innovation: Airo-Magic Brush */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard 
              hoverEffect={true}
              className="bg-gradient-to-tr from-primary/15 via-secondary/5 to-white border border-primary/20 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              {/* Decorative light reflection */}
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Text Side */}
                <div className="lg:col-span-7 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/25 text-secondary text-xs font-bold font-sans mb-6">
                    <Sparkles className="w-4 h-4 text-secondary fill-secondary/10" /> Featured Innovation
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-heading mb-4">
                    Airo-Magic Brush
                  </h3>
                  
                  <span className="block text-sm font-bold text-secondary uppercase tracking-wider mb-6">
                    A Novel Behaviour Management Technique for Pediatric Dentistry
                  </span>

                  <p className="text-sm md:text-base text-body-text leading-relaxed mb-6">
                    The **"Airo-Magic Brush"** is Dr. Labeeb’s proprietary behavior management and clinical distraction tool. Designed to alleviate childhood anxiety surrounding the dental drill, it replaces intimidating clinical sounds and physical triggers with a friendly, interactive narrative.
                  </p>

                  <p className="text-sm text-body-text/90 leading-relaxed mb-8">
                    By gamifying the dental cleaning and preparation process, the Airo-Magic Brush helps children view restorative treatments as a playful, sensory-friendly cooperative experience rather than an invasive clinical procedure.
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-100 text-green-600 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-bold text-xs text-heading">Copyright Registered</span>
                        <span className="block text-[10px] text-body-text/80">Government of India IP Protection</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-red-100 text-red-500 mt-0.5">
                        <Heart className="w-4 h-4 fill-red-500/10" />
                      </div>
                      <div>
                        <span className="block font-bold text-xs text-heading">Clinically Validated</span>
                        <span className="block text-[10px] text-body-text/80">Proven to reduce dental anxiety</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diagram / Graphics Card Side */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm rounded-3xl bg-white border border-border-custom shadow-md p-6 relative overflow-hidden flex flex-col items-center">
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 text-secondary/30 animate-float-slow">
                      <Sparkles className="w-8 h-8 fill-secondary/5" />
                    </div>

                    {/* Golden Award Badge */}
                    <div className="w-16 h-16 rounded-full bg-amber-100 border border-amber-200 text-amber-600 flex items-center justify-center mb-6">
                      <Award className="w-8 h-8" />
                    </div>

                    <h4 className="font-serif text-lg font-bold text-heading text-center mb-2">
                      PEDOVERSE 2023
                    </h4>
                    <p className="text-[11px] text-secondary font-bold uppercase tracking-wider text-center mb-4">
                      Research Recognition
                    </p>

                    <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left mb-4">
                      <span className="block text-[9px] uppercase font-bold text-secondary mb-1">Clinical Trial Study</span>
                      <p className="text-xs font-semibold text-heading leading-snug mb-2">
                        "Management of fear of dental drill using a novel distraction technique: Fiction or future of Pediatric dentistry"
                      </p>
                      <span className="block text-[10px] text-body-text">
                        Evaluated FLACC anxiety scales, heart rates, and behavioral patterns in young children.
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-secondary">
                      <FileText className="w-4 h-4" /> Copyright Reg: Literary & Dramatic Work
                    </div>

                  </div>
                </div>

              </div>
            </GlassCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
