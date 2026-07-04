import React from 'react';
import { Heart, Compass, Star, GraduationCap, Sparkles, Globe } from 'lucide-react';
import Image from 'next/image';
import GlassCard from './ui/GlassCard';
import ScrollReveal from './ui/ScrollReveal';

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
          <ScrollReveal duration={0.6}>
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">About Me</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Dr. Mohamed Labeeb KP
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image and Value Cards */}
          <ScrollReveal
            duration={0.8}
            x={-30}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Curved Image Card */}
            <div className="relative group rounded-[2.5rem] overflow-hidden shadow-[0_24px_48px_rgba(96,165,250,0.1)] border-4 border-white">
              <div className="relative w-full h-80 md:h-[350px] overflow-hidden">
                <Image 
                  src="/dr_labeeb_hero.webp"
                  alt="Dr. Mohamed Labeeb KP profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-heading/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider bg-secondary/80 backdrop-blur-md px-3 py-1 rounded-full">MDS – Pediatric & Preventive Dentistry</span>
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
          </ScrollReveal>

          {/* Right Column: Bio, Education & Specialization */}
          <ScrollReveal
            duration={0.8}
            x={30}
            className="lg:col-span-7 flex flex-col gap-8 text-left"
          >
            {/* Biography */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-2xl font-bold text-heading">Professional Biography</h3>
              <p className="text-sm md:text-base text-body-text leading-relaxed">
                Dr. Mohamed Labeeb KP is a dedicated **Independent Consultant Pediatric Dentist**. He holds a Master of Dental Surgery (MDS) in Pediatric & Preventive Dentistry and is specialized in providing high-quality, clinical pediatric dental treatments.
              </p>
              <p className="text-sm md:text-base text-body-text leading-relaxed">
                His focus is centered on **Preventive Oral Healthcare** and early clinical intervention. He believes that parental guidance, dental health education, and early diagnostics can prevent decay, establishing a foundation for a lifetime of healthy smiles.
              </p>
              <p className="text-sm md:text-base text-body-text leading-relaxed">
                As a specialist in **Behaviour Management**, Dr. Labeeb utilizes pediatric psychology techniques to make dental visits comfortable and reassuring for children. He is also trained in managing **Children with Special Health Care Needs (CSHCN)**, ensuring they receive patient, highly adapted, and compassionate dental care.
              </p>
              <p className="text-sm md:text-base text-body-text leading-relaxed">
                Committed to community oral health, Dr. Labeeb actively participates in **School Dental Health Programmes**, promoting proper brushing habits, diet guidelines, and preventive hygiene routines to children, teachers, and parents.
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
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
