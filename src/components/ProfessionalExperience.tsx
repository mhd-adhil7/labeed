import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import TimelineLine from './ui/TimelineLine';
import ScrollReveal from './ui/ScrollReveal';

const EXPERIENCE_TIMELINE = [
  {
    step: 'Undergraduate Education',
    title: 'BDS – Bachelor of Dental Surgery',
    description: 'Completed comprehensive undergraduate training in dental surgery at PMNM Dental College & Hospital, learning core dental science and pathology.',
    date: '2013 - 2018',
    icon: GraduationCap,
    color: 'text-primary bg-primary/10 border-primary/20',
  },
  {
    step: 'Clinical Internship',
    title: 'Compulsory Rotatory Residential Internship',
    description: 'Acquired intensive hands-on experience, rotating through multiple clinical dental departments, providing essential treatments.',
    date: '2017 - 2018',
    icon: Briefcase,
    color: 'text-secondary bg-secondary/10 border-secondary/20',
  },
  {
    step: 'Clinical Experience',
    title: 'General Dental Practitioner',
    description: 'Practiced as a general dentist at CH Dental Care & CH Memorial Hospital, managing patient diagnosis, extractions, and restorative procedures.',
    date: '2018 - 2020',
    icon: Briefcase,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-200',
  },
  {
    step: 'Postgraduate Specialization',
    title: 'MDS – Pediatric & Preventive Dentistry',
    description: 'Specialized at Srinivas Institute of Dental Sciences, focusing on child psychology, preventive oral health, and management of children with special health care needs.',
    date: '2020 - 2023',
    icon: GraduationCap,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-200',
  },
  {
    step: 'Current Position',
    title: 'Independent Consultant Pediatric Dentist',
    description: 'Providing advanced consultant-based pediatric care, behavior management, and specialized preventative programs across multiple reputed clinics.',
    date: '2023 - Present',
    icon: Award,
    color: 'text-pink-500 bg-pink-500/10 border-pink-200',
  },
];

export default function ProfessionalExperience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden bg-white z-10">
      
      {/* Decorative ambient blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 w-[40vw] h-[40vw] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-0 w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <ScrollReveal duration={0.6}>
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Career Path</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Professional Experience
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </ScrollReveal>
        </div>

        {/* Timeline Path */}
        <div className="relative ml-4 md:ml-32 pl-8 md:pl-16 space-y-12">
          {/* Scroll progress timeline line */}
          <TimelineLine />
          
          {EXPERIENCE_TIMELINE.map((item, idx) => {
            const Icon = item.icon;
            
            return (
              <ScrollReveal
                key={idx}
                duration={0.6}
                delay={idx * 0.1}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute -left-[49px] md:-left-[81px] top-1.5 w-10 h-10 rounded-full bg-white border border-slate-150 flex items-center justify-center shadow-sm z-10">
                  <div className={`p-2 rounded-full ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Left side year indicator (desktop only) */}
                <div className="hidden md:block absolute -left-[240px] top-3.5 w-32 text-right text-sm font-bold text-secondary font-sans">
                  {item.date}
                </div>

                {/* Content Plaque */}
                <GlassCard hoverEffect={true} className="p-6 md:p-8 rounded-[2rem] border border-white/60 bg-slate-50/30 relative overflow-hidden group">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Date indicator for mobile */}
                  <span className="inline-block md:hidden text-[10px] font-bold text-secondary bg-primary/10 rounded-full px-2.5 py-0.5 mb-2.5">
                    {item.date}
                  </span>

                  <span className="block text-[9px] uppercase tracking-widest font-bold text-secondary mb-1.5">{item.step}</span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-heading mb-3 group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body-text leading-relaxed">
                    {item.description}
                  </p>

                  {/* Connect details */}
                  {idx === EXPERIENCE_TIMELINE.length - 1 && (
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-secondary font-bold">
                      <MapPin className="w-4 h-4" /> Practicing at Partner Clinics
                    </div>
                  )}
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
