import React from 'react';
import { Award, Trophy, Medal, Video, FileText, Sparkles, GraduationCap } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import ScrollReveal from './ui/ScrollReveal';
import Carousel from './ui/Carousel';

const AWARDS = [
  {
    title: 'Second Best Poster Award',
    event: 'KIDS WEBCON 2020',
    description: 'Recognized for excellent research presentation on digital health monitoring in pediatric dentistry.',
    icon: Award,
    year: '2020',
    color: 'text-sky-500 bg-sky-500/10 border-sky-200/50',
  },
  {
    title: 'Third Prize',
    event: 'ISPPD Awareness Video Competition 2021',
    description: 'Awarded by the Indian Society of Pedodontics and Preventive Dentistry for oral hygiene awareness video content.',
    icon: Video,
    year: '2021',
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-200/50',
  },
  {
    title: 'Second Prize',
    event: 'ISPPD Teachers\' Day Competition 2021',
    description: 'National recognition for academic and clinical presentation achievements in pediatric dental education.',
    icon: Trophy,
    year: '2021',
    color: 'text-amber-500 bg-amber-500/10 border-amber-200/50',
  },
  {
    title: 'First Prize',
    event: 'FSCD Autism Board Awareness Competition 2021',
    description: 'Awarded for creating highly effective visual board materials explaining dental care routines to children with autism.',
    icon: Medal,
    year: '2021',
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-200/50',
  },
  {
    title: 'First Prize',
    event: 'FSCD Reel Competition 2022',
    description: 'Recognized for educational and creative social-media video engagement promoting children\'s oral health.',
    icon: Video,
    year: '2022',
    color: 'text-pink-500 bg-pink-500/10 border-pink-200/50',
  },
  {
    title: 'ISPPD Student Research Assistance Grant',
    event: 'Research Funding Grant',
    description: 'Prestigious national grant awarded by ISPPD supporting innovative clinical research in pediatric preventive dentistry.',
    icon: GraduationCap,
    year: '2022',
    color: 'text-purple-500 bg-purple-500/10 border-purple-200/50',
  },
  {
    title: 'Grant Scientific Award Session Selector',
    event: 'Pedoverse PG Convention',
    description: 'Research poster selected for the high-prestige Grant Scientific Award Session at the 19th National ISPPD Convention.',
    icon: Sparkles,
    year: '2023',
    color: 'text-cyan-500 bg-cyan-500/10 border-cyan-200/50',
  },
  {
    title: 'Copyright Registration',
    event: 'Airo-Magic Brush',
    description: 'Official copyright grant for "Airo-Magic Brush" - an innovative non-clinical behavior distraction methodology.',
    icon: FileText,
    year: '2023',
    color: 'text-rose-500 bg-rose-500/10 border-rose-200/50',
  },
];

export default function AwardsAchievements() {
  return (
    <section id="awards" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-bg-custom z-10">
      {/* Decorative Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] right-0 w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[30%] left-0 w-[35vw] h-[35vw] rounded-full bg-secondary/10 blur-[100px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal duration={0.6}>
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Achievements</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Awards & Recognition
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </ScrollReveal>
        </div>

        {/* Awards Horizontal Slider */}
        <ScrollReveal duration={0.6} y={20}>
          <Carousel desktopSlidesToShow={4}>
            {AWARDS.map((award, idx) => {
              const Icon = award.icon;
              return (
                <GlassCard
                  key={idx}
                  hoverEffect={false}
                  className="h-full flex flex-col justify-between p-6 bg-white border border-border-custom shadow-sm rounded-3xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3.5 rounded-2xl ${award.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-secondary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        {award.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-heading mb-1.5 leading-snug">
                      {award.title}
                    </h3>
                    
                    <span className="block text-[11px] font-bold text-secondary uppercase tracking-wider mb-3">
                      {award.event}
                    </span>

                    <p className="text-xs text-body-text leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </Carousel>
        </ScrollReveal>

      </div>
    </section>
  );
}
