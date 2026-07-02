'use client';

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Sparkles, Shield, HeartPulse, 
  Crown, Smile, Activity, Compass, ShieldAlert,
  ArrowRight, X, Clock
} from 'lucide-react';
import GlassCard from './ui/GlassCard';
import Carousel from './ui/Carousel';

const EXPERTISE_LIST = [
  {
    id: 'preventive',
    title: 'Preventive Pediatric Dentistry',
    description: 'Advanced diagnostic screenings, dental sealants, and custom fluoride regimes to protect primary enamel from tooth decay.',
    icon: Shield,
    gridClass: 'bg-gradient-to-br from-primary/10 via-secondary/5 to-white border border-primary/20',
    details: 'Preventive pediatric dentistry focuses on establishing a foundation of oral health. Through early cavity risk assessments, protective sealants in deep molar grooves, and customized topical fluoride treatments, we help keep your child’s teeth strong and cavity-free.',
  },
  {
    id: 'behaviour',
    title: 'Behaviour Management',
    description: 'Reassuring child-psychology techniques including Tell-Show-Do, positive reinforcement, and specialized distraction tools.',
    icon: Smile,
    gridClass: 'bg-white border border-border-custom',
    details: 'Managing children’s anxiety is central to successful dental treatment. Dr. Labeeb uses proven psychological approaches, warm communications, and custom non-clinical distraction methodologies to create a pleasant and stress-free environment.',
  },
  {
    id: 'pulp',
    title: 'Pulp Therapy',
    description: 'Gentle therapeutic pulpotomy and pulpectomy to treat and save primary teeth with infected inner nerve chambers.',
    icon: HeartPulse,
    gridClass: 'bg-white border border-border-custom',
    details: 'Often known as a baby root canal, pulp therapy is designed to treat infected primary teeth. Removing the decayed pulp relieves deep toothaches and stops infection from affecting the bone and developing permanent teeth.',
  },
  {
    id: 'crowns',
    title: 'Aesthetic Crowns',
    description: 'High-durability pediatric zirconia and composite crowns to restore heavily decayed front and back teeth.',
    icon: Crown,
    gridClass: 'bg-white border border-border-custom',
    details: 'When simple fillings are insufficient to support a badly decayed tooth, pediatric crowns act as a protective cap. Dr. Labeeb uses premium, natural-looking tooth-colored crowns to preserve dental function and appearance.',
  },
  {
    id: 'orthodontics',
    title: 'Preventive & Interceptive Orthodontics',
    description: 'Early screenings and functional growth guidance appliances to prevent dental crowding and bite alignment issues.',
    icon: Compass,
    gridClass: 'bg-white border border-border-custom',
    details: 'Interceptive orthodontics addresses dental alignment problems while a child’s jaw is still growing. Custom-designed active or passive growth guidance appliances help direct jaw development, simplifying or preventing future orthodontic treatments.',
  },
  {
    id: 'sedation',
    title: 'Nitrous Oxide Sedation',
    description: 'Safe and comfortable inhalation sedation (laughing gas) to ease mild to moderate dental anxiety during procedures.',
    icon: Activity,
    gridClass: 'bg-white border border-border-custom',
    details: 'Nitrous oxide, or laughing gas, is a safe and mild sedative. Inhaled through a small nose mask, it induces a relaxed, happy state in children, allowing them to remain fully conscious and co-operative during treatment.',
  },
  {
    id: 'ga',
    title: 'Management under General Anaesthesia',
    description: 'Full-mouth dental rehabilitation under general anaesthesia for extremely anxious, very young, or special needs patients.',
    icon: Sparkles,
    gridClass: 'bg-white border border-border-custom',
    details: 'For children who are very young, have severe dental phobias, or have special health needs, dental treatments can be carried out under GA in an operating theater. This ensures the child’s absolute safety and allows for full treatment in a single visit.',
  },
  {
    id: 'trauma',
    title: 'Dental Trauma Management',
    description: 'Urgent stabilization, splinting, and restorative care for fractures, displacements, or knocked-out (avulsed) teeth.',
    icon: ShieldAlert,
    gridClass: 'bg-gradient-to-br from-red-500/5 to-white border border-red-500/10',
    details: 'Children often experience dental injuries during play or sports. Dr. Labeeb provides expert emergency dental care, including tooth splinting, restorative crown builds, and root treatment to protect adjacent permanent tooth germs.',
  },
  {
    id: 'space-maintainers',
    title: 'Space Maintainers',
    description: 'Custom acrylic or metal retainers that hold open critical gaps left by primary teeth lost prematurely.',
    icon: Clock,
    gridClass: 'bg-white border border-border-custom',
    details: 'If a primary tooth falls out early due to decay or injury, surrounding teeth can drift into the empty space. A space maintainer holds that gap open, ensuring the underlying permanent tooth has enough room to emerge properly.',
  },
  {
    id: 'school-programs',
    title: 'School Dental Health Programs',
    description: 'Community-wide school screenings, oral hygiene workshops, and educational seminars for kids, parents, and teachers.',
    icon: GraduationCap,
    gridClass: 'bg-white border border-border-custom',
    details: 'Education is key to oral health. Dr. Labeeb actively designs and hosts pediatric workshops and screening camps at local schools, educating parents and children on proper tooth brushing techniques and cavity-preventive lifestyles.',
  },
];

export default function Services() {
  const [selectedExpertise, setSelectedExpertise] = useState<typeof EXPERTISE_LIST[0] | null>(null);

  return (
    <section id="expertise" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-bg-custom z-10">
      
      {/* Decorative Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] right-0 w-[45vw] h-[45vw] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-0 w-[35vw] h-[35vw] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Areas of Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
            Pediatric Dentistry Specializations
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
        </div>

        {/* Horizontal Slider/Carousel */}
        <Carousel desktopSlidesToShow={3}>
          {EXPERTISE_LIST.map((exp) => {
            const Icon = exp.icon;
            return (
              <GlassCard
                key={exp.id}
                hoverEffect={false}
                className={`h-full flex flex-col items-start p-8 rounded-3xl transition-all duration-500 bento-card ${exp.gridClass}`}
              >
                <div className="p-4.5 rounded-2xl bg-primary/10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-heading mb-3">
                  {exp.title}
                </h3>

                <p className="text-sm text-body-text leading-relaxed mb-6">
                  {exp.description}
                </p>

                <button
                  onClick={() => setSelectedExpertise(exp)}
                  className="mt-auto inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors cursor-pointer group/btn"
                >
                  Details
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </GlassCard>
            );
          })}
        </Carousel>

        {/* Modal Detail Overlay */}
        <AnimatePresence>
          {selectedExpertise && (
            <>
              {/* Blur Overlay */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedExpertise(null)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
              >
                {/* Modal Container */}
                <m.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative border border-border-custom overflow-hidden"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedExpertise(null)}
                    className="absolute top-4 right-4 p-2 text-heading hover:text-secondary hover:bg-primary/10 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-2xl bg-secondary/15 text-secondary">
                      {React.createElement(selectedExpertise.icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <span className="text-[10px] tracking-wider uppercase font-bold text-secondary">Clinical Expertise Area</span>
                      <h4 className="font-serif text-2xl font-bold text-heading mt-0.5">{selectedExpertise.title}</h4>
                    </div>
                  </div>

                  <p className="text-base text-body-text leading-relaxed mb-6">
                    {selectedExpertise.details}
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        setSelectedExpertise(null);
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 py-3 bg-secondary hover:bg-primary text-white font-semibold rounded-2xl text-center shadow-lg transition-colors cursor-pointer"
                    >
                      Request Consult
                    </button>
                    <button
                      onClick={() => setSelectedExpertise(null)}
                      className="px-6 py-3 border border-border-custom text-heading font-semibold rounded-2xl transition-colors hover:bg-slate-50 cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </m.div>
              </m.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
