import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, FileText } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import ScrollReveal from './ui/ScrollReveal';

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
          <ScrollReveal duration={0.6}>
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Research & Innovation</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Clinical Inventions & Research
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </ScrollReveal>
        </div>

        {/* Factual Academic Research & Thesis */}
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          
          {/* Card 1: MDS Thesis & Research Grant */}
          <ScrollReveal duration={0.8}>
            <GlassCard 
              hoverEffect={true}
              className="bg-gradient-to-tr from-primary/10 via-secondary/5 to-white border border-primary/20 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/15 blur-3xl" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/25 text-secondary text-xs font-bold font-sans mb-6">
                    <FileText className="w-4 h-4" /> Postgraduate Thesis
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-heading mb-4">
                    MDS Thesis & Research
                  </h3>
                  
                  <span className="block text-sm font-bold text-secondary uppercase tracking-wider mb-6">
                    Comparative evaluation of microhardness and depth of cure of three glass ionomer cements - An in-vitro study
                  </span>

                  <p className="text-sm md:text-base text-body-text leading-relaxed mb-6">
                    Dr. Labeeb’s postgraduate research evaluated the microhardness and depth of cure of three glass ionomer cements (GICs). This clinical study provides valuable data for materials selection in pediatric restorative dentistry.
                  </p>

                  <div className="space-y-3.5 text-xs text-body-text/90">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span><strong>Guide:</strong> Prof. (Dr.) K. Reshma Pai, Dean & HOD, Srinivas Institute of Dental Sciences</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span><strong>Institution:</strong> Srinivas Institute of Dental Sciences, Mangaluru</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm rounded-3xl bg-white border border-border-custom shadow-md p-6 relative overflow-hidden flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-amber-100 border border-amber-200 text-amber-600 flex items-center justify-center mb-6">
                      <Award className="w-8 h-8" />
                    </div>

                    <h4 className="font-serif text-lg font-bold text-heading text-center mb-2">
                      ISPPD Grant Recipient
                    </h4>
                    <p className="text-[11px] text-secondary font-bold uppercase tracking-wider text-center mb-4">
                      Research Assistance Grant
                    </p>

                    <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left">
                      <span className="block text-[9px] uppercase font-bold text-secondary mb-1">Grant Awarded</span>
                      <p className="text-xs font-semibold text-heading leading-snug">
                        Approved research proposal for the Indian Society of Pedodontics and Preventive Dentistry (ISPPD) Research Assistance Grant 2021.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Card 2: Airo-Magic Brush */}
          <ScrollReveal duration={0.8}>
            <GlassCard 
              hoverEffect={true}
              className="bg-white border border-border-custom rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 text-left">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-secondary text-xs font-bold font-sans mb-6">
                    <Sparkles className="w-4 h-4 text-secondary fill-secondary/10" /> Clinical Innovation
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-heading mb-4">
                    Airo-Magic Brush
                  </h3>
                  
                  <span className="block text-sm font-bold text-secondary uppercase tracking-wider mb-6">
                    A Novel Behaviour Management Distraction Technique
                  </span>

                  <p className="text-sm md:text-base text-body-text leading-relaxed mb-6">
                    The **"Airo-Magic Brush"** represents Dr. Labeeb’s research into active behavior management and clinical distraction. Designed to ease pediatric anxiety surrounding standard restorative dental drills, it utilizes clinical storytelling and sensory distraction.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-green-100 text-green-600 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-bold text-xs text-heading">Copyright Registered</span>
                        <span className="block text-[10px] text-body-text/80">Reg No: ROC-L-110825/2023</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-red-100 text-red-500 mt-0.5">
                        <Heart className="w-4 h-4 fill-red-500/10" />
                      </div>
                      <div>
                        <span className="block font-bold text-xs text-heading">Clinically Evaluated</span>
                        <span className="block text-[10px] text-body-text/80">Presented in Clinical Trial</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-full max-w-sm rounded-3xl bg-slate-50 border border-slate-150/40 p-6 relative overflow-hidden flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-slate-200 text-secondary flex items-center justify-center mb-6">
                      <Sparkles className="w-6 h-6" />
                    </div>

                    <h4 className="font-serif text-lg font-bold text-heading text-center mb-2">
                      PEDOVERSE 2023
                    </h4>
                    <p className="text-[11px] text-secondary font-bold uppercase tracking-wider text-center mb-4">
                      Conference Presentation
                    </p>

                    <div className="w-full bg-white border border-slate-100 rounded-2xl p-4 text-left">
                      <span className="block text-[9px] uppercase font-bold text-secondary mb-1">Clinical Trial Study</span>
                      <p className="text-xs font-semibold text-heading leading-snug mb-2">
                        "Management of fear of dental drill using a novel distraction technique: Fiction or future of Pediatric dentistry"
                      </p>
                      <span className="block text-[10px] text-body-text">
                        Presented at the 19th National ISPPD PG Convention.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
