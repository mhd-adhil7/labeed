'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Star, GraduationCap, Sparkles, Globe } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-bg-custom to-white z-10">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-secondary/10 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">About Me</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Dr. Mohamed Labeeb KP
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image and Value Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Curved Image Card */}
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-[0_24px_48px_rgba(96,165,250,0.1)] border-4 border-white">
              <div 
                className="w-full h-80 md:h-[350px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/dr_labeeb_hero.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-heading/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider bg-secondary/80 backdrop-blur-md px-3 py-1 rounded-full">MDS – Pediatric Dentistry</span>
                <p className="mt-2 text-sm text-white/90">Independent Consultant Dentist</p>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="p-6 rounded-2xl bg-white border border-border-custom shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-secondary">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-heading mb-1">Clinical Philosophy</h4>
                <p className="text-xs text-body-text leading-relaxed">
                  Building pleasant dental relationships through positive pediatric psychology and gentle, evidence-based care.
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div className="p-6 rounded-2xl bg-white border border-border-custom shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
                <Star className="w-5 h-5 fill-emerald-500/10" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-heading mb-1">Professional Focus</h4>
                <p className="text-xs text-body-text leading-relaxed">
                  Prevention, micro-invasive procedures, child psychology, and compassionate care for children with special health needs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio, Education & Specialization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8 text-left"
          >
            {/* Biography */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl font-bold text-heading">Professional Biography</h3>
              <p className="text-sm md:text-base text-body-text leading-relaxed">
                Dr. Mohamed Labeeb KP is a dedicated **Independent Consultant Pediatric Dentist** with over **5 years of clinical experience**. Rather than operating a single static clinic, Dr. Labeeb partners with multiple reputed dental centers, bringing high-quality, specialized pediatric dental care directly to local communities.
              </p>
              <p className="text-sm md:text-base text-body-text leading-relaxed">
                His passion for pediatric dentistry drives him to look beyond standard restorative treatments towards **Preventive Oral Healthcare**. He believes that early intervention, parental guidance, and positive motivation can prevent tooth decay from ever taking root, setting children up for a lifetime of healthy smiles.
              </p>
              <p className="text-sm md:text-base text-body-text leading-relaxed">
                A specialist in **Behaviour Management**, Dr. Labeeb uses pediatric psychology techniques to make dental visits feel like a fun, reassuring adventure. He also specializes in treating **Children with Special Health Care Needs (CSHCN)**, ensuring they receive patient, highly adapted, and compassionate dental care in a secure environment.
              </p>
              <p className="text-sm md:text-base text-body-text leading-relaxed">
                As part of his commitment to public health education, Dr. Labeeb actively initiates and leads **School Dental Health Programs**, teaching proper brushing, nutrition, and hygiene habits to children, teachers, and parents.
              </p>
            </div>

            {/* Education Summary */}
            <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-tr from-primary/5 to-white border border-primary/20 shadow-sm">
              <h4 className="font-serif text-xl font-bold text-heading mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-secondary" /> Academic Background
              </h4>
              <div className="space-y-4">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-secondary">Postgraduate Specialization</span>
                  <span className="block text-sm font-bold text-heading">MDS – Pediatric & Preventive Dentistry</span>
                  <span className="block text-xs text-body-text">Srinivas Institute of Dental Sciences, Mangaluru (2020 – 2023)</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-secondary">Undergraduate Degree</span>
                  <span className="block text-sm font-bold text-heading">BDS – Bachelor of Dental Surgery</span>
                  <span className="block text-xs text-body-text">PMNM Dental College & Hospital (2013 – 2018)</span>
                </div>
              </div>
            </div>

            {/* Languages and Specializations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Specializations List */}
              <div className="p-6 md:p-8 rounded-3xl bg-white border border-border-custom shadow-sm">
                <h4 className="font-serif text-lg font-bold text-heading mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" /> Clinical Focus
                </h4>
                <div className="space-y-2 text-xs text-body-text font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Behaviour Management
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Special Health Care Needs (CSHCN)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Preventive Pediatric Dentistry
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> School Oral Health Initiatives
                  </div>
                </div>
              </div>

              {/* Languages Chips */}
              <div className="p-6 md:p-8 rounded-3xl bg-white border border-border-custom shadow-sm flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg font-bold text-heading mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-secondary" /> Spoken Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Malayalam', 'Kannada', 'Hindi', 'Arabic'].map((lang) => (
                      <span 
                        key={lang} 
                        className="px-3 py-1 bg-primary/10 text-secondary text-xs font-semibold rounded-full border border-primary/20"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
