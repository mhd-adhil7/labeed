'use client';

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { BookOpen, Utensils, Shield, CheckCircle, ChevronDown, HeartPulse, Activity } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const TIPS = [
  {
    id: 'first-visit',
    title: 'First Dental Visit',
    icon: BookOpen,
    color: 'text-primary bg-primary/10 border-primary-200/50',
    short: 'Tips to prep your child for their first checkup.',
    details: [
      'Schedule the first dental checkup by their first birthday or when their first tooth emerges.',
      'Read fun children\'s books about dentist characters beforehand.',
      'Practice clinical check roleplay: "Let\'s count your teeth with a toy mirror."',
      'Avoid using anxiety-inducing words like "needle," "drill," "hurt," or "pain."',
    ],
  },
  {
    id: 'brushing',
    title: 'Brushing Techniques',
    icon: CheckCircle,
    color: 'text-secondary bg-secondary/10 border-secondary-200/50',
    short: 'Making twice-daily brushing a healthy, fun routine.',
    details: [
      'Brush teeth twice a day for exactly 2 minutes (use sand timers or fun toothbrush songs).',
      'Use child-sized brushes with a smear of fluoride paste for toddlers (pea-sized for age 3+).',
      'Encourage children to spit out the toothpaste but not rinse with water, leaving protective fluoride on teeth.',
      'Always supervise brushing until your child is at least 7 or 8 years old to ensure proper technique.',
    ],
  },
  {
    id: 'diet',
    title: 'Healthy Food Habits',
    icon: Utensils,
    color: 'text-emerald-500 bg-emerald-500/10 border-emerald-200/50',
    short: 'Smart dietary snacks that naturally defend teeth.',
    details: [
      'Limit sticky sugary foods (gummies, fruit snacks, dry raisins) that cling to tooth crevices.',
      'Encourage dairy snacks (calcium-rich cheeses and yoghurts) which neutralize mouth acids.',
      'Dilute juice boxes with water and restrict them strictly to meal times.',
      'Encourage drinking fluoridated tap water to help reinforce weakened enamel.',
    ],
  },
  {
    id: 'cavity-prevention',
    title: 'Cavity Prevention',
    icon: Shield,
    color: 'text-indigo-500 bg-indigo-500/10 border-indigo-200/50',
    short: 'Proactive steps to block plaque early.',
    details: [
      'Apply dental sealants to deep chewing pits of molars as soon as they emerge.',
      'Floss daily between teeth once they touch to prevent between-teeth cavities.',
      'Bring your child for routine professional checkups and fluoride applications twice a year.',
      'Clean your baby\'s gums with a damp cloth even before the first teeth emerge.',
    ],
  },
  {
    id: 'thumb-sucking',
    title: 'Thumb Sucking',
    icon: Activity,
    color: 'text-amber-500 bg-amber-500/10 border-amber-200/50',
    short: 'Gentle guidance for addressing prolonged oral habits.',
    details: [
      'Praise children for not sucking, rather than scolding them when they do.',
      'Address the root cause: children often suck thumbs for security when anxious.',
      'If sucking continues past age 4-5, discuss custom habit-breaking appliances with Dr. Labeeb.',
      'Use positive motivation charts and rewards to help them phase out the habit naturally.',
    ],
  },
  {
    id: 'emergencies',
    title: 'Dental Emergencies',
    icon: HeartPulse,
    color: 'text-pink-500 bg-pink-500/10 border-pink-200/50',
    short: 'First-aid responses for pediatric tooth injuries.',
    details: [
      'For a knocked-out permanent tooth, keep it moist (in milk or saliva) and seek a dentist within 30 minutes.',
      'For chipped or broken teeth, rinse the mouth with warm water and apply a cold compress to limit swelling.',
      'If a child has a sudden severe toothache, floss gently to clear any trapped food and call for advice.',
      'Avoid placing aspirin directly on gums as it causes chemical burns.',
    ],
  },
];

export default function DentalTips() {
  const [activeTip, setActiveTip] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const toggleTip = (id: string) => {
    setActiveTip(activeTip === id ? null : id);
  };

  const animDuration = isMobile ? 0.15 : 0.45;
  const animEase = (isMobile ? 'linear' : [0.16, 1, 0.3, 1]) as any;

  return (
    <section id="dental-tips" className="relative py-24 md:py-32 overflow-hidden bg-white z-10">
      
      {/* Decorative blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-0 w-[35vw] h-[35vw] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Parent Education</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
            Oral Health Guides & Dental Tips
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
        </div>

        {/* Tips Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TIPS.map((tip) => {
            const isOpen = activeTip === tip.id;
            const Icon = tip.icon;
            
            return (
              <m.div
                key={tip.id}
                layout={!isMobile}
                className="h-full"
              >
                <GlassCard
                  hoverEffect={!isOpen}
                  className={`h-full flex flex-col p-8 bg-white border border-border-custom shadow-sm rounded-3xl transition-all duration-300 ${
                    isOpen ? 'ring-2 ring-primary/20 border-primary/30 shadow-md shadow-primary/5' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3.5 rounded-2xl ${tip.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => toggleTip(tip.id)}
                      className="p-1.5 rounded-full bg-slate-100 text-heading hover:text-secondary hover:bg-slate-200 transition-all cursor-pointer"
                      aria-label="Toggle details"
                    >
                      <m.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: animDuration }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </m.div>
                    </button>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-heading mb-2">
                    {tip.title}
                  </h3>
                  
                  <p className="text-xs text-body-text/80 mb-4 font-semibold">
                    {tip.short}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: animDuration, ease: animEase }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 mt-4 pt-4 border-t border-slate-100 text-xs text-body-text leading-relaxed list-disc pl-4 text-left">
                          {tip.details.map((detail, index) => (
                            <li key={index} className="pl-1">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </m.div>
                    )}
                  </AnimatePresence>

                  {!isOpen && (
                    <button
                      onClick={() => toggleTip(tip.id)}
                      className="text-[10px] font-bold tracking-wider uppercase text-secondary hover:text-primary transition-colors cursor-pointer mt-4 self-start"
                    >
                      Read Guidelines
                    </button>
                  )}
                </GlassCard>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
