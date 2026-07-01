'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Cpu, BrainCircuit, MessageSquareCode } from 'lucide-react';
import GlassCard from './ui/GlassCard';

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  },
} as const;

export default function KidsFriendlyApproach() {
  return (
    <section id="approach" className="relative py-24 md:py-32 overflow-hidden bg-white z-10">
      
      {/* Background design accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Our Methodology</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
            Dr. Labeeb's Kids-Friendly <br />
            Treatment Approach
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {APPROACH_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`group ${item.gridClass}`}
              >
                <GlassCard 
                  hoverEffect={true} 
                  className={`h-full flex flex-col items-start text-left bg-white border border-border-custom shadow-sm transition-all duration-500 hover:-translate-y-2 ${item.hoverGlow}`}
                >
                  <div className={`p-4 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-heading mb-3 group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-sm text-body-text leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
