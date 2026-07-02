import React from 'react';
import { Sparkles, Heart, Cpu, BrainCircuit, MessageSquareCode } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import ScrollReveal from './ui/ScrollReveal';

const APPROACH_ITEMS = [
  {
    title: 'Child Psychology-Based Treatment',
    description: 'We utilize the classic "Tell-Show-Do" technique. We explain dental tools using fun cartoon character analogies (like "tooth vacuum" for suction) and show how they tickle first before treating.',
    icon: BrainCircuit,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-200/50',
    gridClass: 'lg:col-span-2',
    hoverGlow: 'hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)]',
  },
  {
    title: 'Pain-Free Dentistry',
    description: 'Practicing micro-dentistry using state-of-the-art dental lasers, pre-numbing warming gels, and computer-guided local anesthesia for absolute comfort.',
    icon: Sparkles,
    color: 'text-secondary bg-secondary/10 border-secondary-200/50',
    gridClass: 'col-span-1',
    hoverGlow: 'hover:shadow-[0_20px_40px_rgba(96,165,250,0.1)]',
  },
  {
    title: 'Gentle Care',
    description: 'Slowing down to match your child\'s pace. We take multiple comfort breaks, offer soft weighted blankets, and maintain a quiet, calming posture.',
    icon: Heart,
    color: 'text-primary bg-primary/10 border-primary-200/50',
    gridClass: 'col-span-1',
    hoverGlow: 'hover:shadow-[0_20px_40px_rgba(125,211,252,0.1)]',
  },
  {
    title: 'Advanced Equipment',
    description: 'Utilizing specialized kid-sized sensors, digital intraoral scanners (no sticky impressions), and lowest-dose digital radiography.',
    icon: Cpu,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-200/50',
    gridClass: 'col-span-1',
    hoverGlow: 'hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)]',
  },
  {
    title: 'Parent-Friendly Communication',
    description: 'We believe parents are our partners. Dr. Labeeb provides transparent post-visit consults, explains all findings in simple terms, and creates custom home brushing guides.',
    icon: MessageSquareCode,
    color: 'text-pink-500 bg-pink-500/10 border-pink-200/50',
    gridClass: 'lg:col-span-2',
    hoverGlow: 'hover:shadow-[0_20px_40px_rgba(236,72,153,0.1)]',
  },
];

export default function KidsFriendlyApproach() {
  return (
    <section id="approach" className="relative py-24 md:py-32 overflow-hidden bg-bg-custom z-10">
      {/* Decorative Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 w-[45vw] h-[45vw] rounded-full bg-secondary/5 blur-[125px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-0 w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal duration={0.6}>
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Our Approach</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Kids-Friendly Environment <br />
              & Calm Care
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {APPROACH_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={idx}
                duration={0.6}
                delay={idx * 0.05}
                y={20}
                className={`${item.gridClass} h-full`}
              >
                <GlassCard
                  hoverEffect={true}
                  className={`h-full flex flex-col justify-between p-8 bg-white border border-border-custom shadow-sm rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2.5 ${item.hoverGlow}`}
                >
                  <div className="text-left">
                    <div className={`p-4 rounded-2xl inline-flex mb-6 ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-heading mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-body-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
