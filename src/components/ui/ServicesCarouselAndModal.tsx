'use client';

import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, Sparkles, Shield, HeartPulse, 
  Crown, Smile, Activity, Compass, ShieldAlert,
  ArrowRight, X, Clock
} from 'lucide-react';
import GlassCard from './GlassCard';
import Carousel from './Carousel';

const EXPERTISE_LIST = [
  {
    id: 'preventive',
    title: 'Pediatric Dentistry',
    description: 'Comprehensive dental care for children, focusing on diagnostic screenings, primary dentition therapy, and decay prevention.',
    icon: Shield,
    gridClass: 'bg-gradient-to-br from-primary/10 via-secondary/5 to-white border border-primary/20',
    details: 'Pediatric dentistry focuses on establishing a foundation of oral health in children. Through early cavity risk assessments, primary tooth restorations, and decay prevention strategies, we help keep children’s smiles healthy.',
  },
  {
    id: 'behaviour',
    title: 'Behaviour Management',
    description: 'Reassuring child-psychology techniques including Tell-Show-Do, positive reinforcement, and specialized distraction tools.',
    icon: Smile,
    gridClass: 'bg-white border border-border-custom',
    details: 'Managing children’s anxiety is central to successful dental treatment. Dr. Labeeb uses proven psychological approaches, warm communications, and custom behavior guidance techniques to create a pleasant and stress-free environment.',
  },
  {
    id: 'pulp',
    title: 'Pulp Therapy',
    description: 'Gentle therapeutic pulpotomy and pulpectomy to treat and save primary teeth with infected inner nerve chambers.',
    icon: HeartPulse,
    gridClass: 'bg-white border border-border-custom',
    details: 'Often known as a baby root canal, pulp therapy is designed to treat infected primary teeth. Removing the decayed pulp relieves deep toothaches and stops infection from affecting developing permanent teeth.',
  },
  {
    id: 'crowns',
    title: 'Aesthetic Crowns',
    description: 'High-durability pediatric zirconia and composite crowns to restore heavily decayed front and back teeth.',
    icon: Crown,
    gridClass: 'bg-white border border-border-custom',
    details: 'When simple fillings are insufficient to support a badly decayed tooth, pediatric crowns act as a protective cap. Dr. Labeeb uses natural-looking tooth-colored crowns to preserve dental function and appearance.',
  },
  {
    id: 'orthodontics',
    title: 'Preventive & Interceptive Orthodontics',
    description: 'Early screenings and functional growth guidance appliances to prevent dental crowding and bite alignment issues.',
    icon: Compass,
    gridClass: 'bg-white border border-border-custom',
    details: 'Interceptive orthodontics addresses dental alignment problems while a child’s jaw is still growing. Custom-designed active or passive growth guidance appliances help direct jaw development, simplifying future orthodontic treatments.',
  },
  {
    id: 'sedation',
    title: 'Nitrous Oxide Inhalation Sedation',
    description: 'Safe and comfortable inhalation sedation (laughing gas) to ease mild to moderate dental anxiety during clinical procedures.',
    icon: Activity,
    gridClass: 'bg-white border border-border-custom',
    details: 'Nitrous oxide inhalation sedation is a safe and mild sedative technique. Inhaled through a small nose mask, it induces a relaxed, happy state in children, allowing them to remain conscious and co-operative during treatment.',
  },
  {
    id: 'ga',
    title: 'General Anaesthesia Patient Management',
    description: 'Comprehensive dental rehabilitation under general anaesthesia for extremely anxious, very young, or special needs patients.',
    icon: Sparkles,
    gridClass: 'bg-white border border-border-custom',
    details: 'For children who are very young, have severe dental phobias, or have special health needs, dental treatments can be managed under general anaesthesia. This ensures the child’s absolute safety and allows for full treatment in a single visit.',
  },
  {
    id: 'school-programs',
    title: 'School Dental Health Programmes',
    description: 'Community school screenings, oral hygiene workshops, and educational seminars for kids, parents, and teachers.',
    icon: GraduationCap,
    gridClass: 'bg-white border border-border-custom',
    details: 'Education is key to oral health. Dr. Labeeb actively designs and hosts pediatric screening camps and workshops at local schools, educating parents and children on proper tooth brushing techniques and cavity-preventive lifestyles.',
  },
];

export default function ServicesCarouselAndModal() {
  const [selectedExpertise, setSelectedExpertise] = useState<typeof EXPERTISE_LIST[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedExpertise) {
      const timer = setTimeout(() => setShowModal(true), 10);
      return () => clearTimeout(timer);
    } else {
      setShowModal(false);
    }
  }, [selectedExpertise]);

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedExpertise(null), 300);
  };

  return (
    <>
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
      {selectedExpertise && (
        <div
          onClick={handleCloseModal}
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            showModal ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative border border-border-custom overflow-hidden transition-all duration-300 ${
              showModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            {/* Close button */}
            <button
              onClick={handleCloseModal}
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
                  handleCloseModal();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-3 bg-secondary hover:bg-primary text-white font-semibold rounded-2xl text-center shadow-lg transition-colors cursor-pointer"
              >
                Request Consult
              </button>
              <button
                onClick={handleCloseModal}
                className="px-6 py-3 border border-border-custom text-heading font-semibold rounded-2xl transition-colors hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
