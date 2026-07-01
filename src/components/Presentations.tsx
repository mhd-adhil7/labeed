'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, ShieldCheck, Award, Users, Star } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const PRESENTATIONS = [
  {
    title: 'Digital Health Records & Child Patient Management',
    conference: 'KIDS WEBCON',
    year: '2020',
    description: 'Presented a detailed study on implementing paperless digital health charts and records for child tracking in specialized pediatric dentistry.',
    highlight: 'Second Best Poster Award recipient.',
    icon: Presentation,
    color: 'text-sky-500 bg-sky-500/10 border-sky-200/50',
  },
  {
    title: 'Interceptive Guidance for Early Skeletal Crowding',
    conference: 'Pedodisha State Chapter',
    year: '2021',
    description: 'Detailed analysis of functional expansion appliances and space guidelines used in pediatric growth phases to prevent severe permanent crowding.',
    highlight: 'Highly appreciated clinical review.',
    icon: Users,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-200/50',
  },
  {
    title: 'Management of Fear of Dental Drill Using a Novel Distraction Technique',
    conference: 'Pedoverse – 19th National ISPPD PG Convention',
    year: '2023',
    description: 'Clinical trial showcase demonstrating the safety and anxiety-reducing metrics of the copyrighted Airo-Magic Brush behavior distraction system.',
    highlight: 'Selected for the prestigious Grant Scientific Award Session.',
    icon: Award,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-200/50',
  },
  {
    title: 'Managing Pediatric Oral Habits: Behavioural & Appliance Therapy',
    conference: 'Pedo Pulse Conference',
    year: '2023',
    description: 'Clinical review focused on non-invasive psychological training and custom habit-breaking appliances to resolve prolonged thumb-sucking and tongue-thrusting.',
    highlight: 'Featured expert panel presentation.',
    icon: Star,
    color: 'text-amber-500 bg-amber-500/10 border-amber-200/50',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 120, damping: 15 },
  },
};

export default function Presentations() {
  return (
    <section id="presentations" className="relative py-24 md:py-32 overflow-hidden bg-white z-10">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-0 w-[35vw] h-[35vw] rounded-full bg-secondary/5 blur-[100px]" />
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
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Academic Presentations</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Conference Presentations
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </motion.div>
        </div>

        {/* Presentations list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto text-left"
        >
          {PRESENTATIONS.map((pres, index) => {
            const Icon = pres.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="h-full"
              >
                <GlassCard
                  hoverEffect={true}
                  className="h-full flex flex-col justify-between p-8 bg-white border border-border-custom shadow-sm rounded-3xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl ${pres.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold text-secondary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        {pres.year}
                      </span>
                    </div>

                    {/* Conference and title */}
                    <span className="block text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                      {pres.conference}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-heading mb-4 group-hover:text-secondary transition-colors duration-300 leading-snug">
                      {pres.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-body-text leading-relaxed mb-6">
                      {pres.description}
                    </p>
                  </div>

                  {/* Highlights block */}
                  <div className="flex items-center gap-2 border-t border-slate-100/80 pt-4 text-xs font-semibold text-heading">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{pres.highlight}</span>
                  </div>

                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
