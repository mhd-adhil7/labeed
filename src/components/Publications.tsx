import React from 'react';
import { BookOpen, Calendar, Users, ExternalLink } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import ScrollReveal from './ui/ScrollReveal';

const PUBLICATIONS = [
  {
    title: 'Evaluation of Effectiveness of an Educational Intervention Program on the Knowledge, Attitude, and Practice Regarding Use and Storage of Toothbrush among Parents and Children',
    journal: 'International Journal of Clinical Pediatric Dentistry (IJCPD)',
    date: 'December 2025',
    authors: 'Patilla Amreen Shaban, K. Reshma Pai, Mohamed Labeeb KP, Mohammad Hashir',
    abstract: 'This study evaluates the effectiveness of educational programs in modifying oral hygiene habits in families. Results showed significant improvements in knowledge, storage safety, and daily toothbrushing methods among children and parents following structured educational intervention.',
    doi: '10.5005/jp-journals-10005-2741',
    link: 'https://pubmed.ncbi.nlm.nih.gov/',
    badge: 'PubMed Indexed',
  },
  {
    title: 'Management of Fear of Dental Drill Using a Novel Distraction Technique: Fiction or Future of Pediatric Dentistry - A Clinical Trial',
    journal: 'Presented at the 19th National ISPPD PG Convention, PEDOVERSE',
    date: 'February 2023',
    authors: 'Mohamed Labeeb KP, Department of Pedodontics & Preventive Dentistry',
    abstract: 'A randomized clinical trial exploring a novel non-pharmacological distraction technique (Airo-Magic Brush) to manage pediatric dental drill phobia. Measured significant reductions in heart rates, FLACC anxiety scores, and negative behaviors during operative appointments.',
    doi: 'Convention Paper / Clinical Trial',
    link: 'https://srinivasgroup.com',
    badge: 'Award Nominated Study',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative py-24 md:py-32 overflow-hidden bg-bg-custom z-10">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-0 w-[35vw] h-[35vw] rounded-full bg-secondary/10 blur-[100px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal duration={0.6}>
            <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Academic Research</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
              Publications & Papers
            </h2>
            <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
          </ScrollReveal>
        </div>

        {/* Publications Journal List */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8 text-left">
          {PUBLICATIONS.map((pub, index) => (
            <ScrollReveal
              key={index}
              duration={0.8}
              delay={index * 0.1}
            >
              <GlassCard
                hoverEffect={true}
                className="bg-white border border-border-custom rounded-3xl p-8 shadow-sm flex flex-col gap-6"
              >
                
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                      {pub.journal}
                    </span>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-body-text/80 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {pub.date}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                      <span className="font-mono text-slate-500">
                        {pub.doi}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-secondary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                    <BookOpen className="w-3 h-3" /> {pub.badge}
                  </span>
                </div>

                {/* Main Content */}
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-heading mb-4 hover:text-secondary transition-colors duration-300">
                    {pub.title}
                  </h3>
                  
                  {/* Authors block */}
                  <div className="flex items-start gap-2.5 text-xs text-body-text font-medium mb-4 bg-slate-50 border border-slate-100/80 rounded-xl p-3.5">
                    <Users className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-[10px] text-body-text/75 uppercase font-bold mb-0.5">Authors</span>
                      <span className="text-heading font-semibold">{pub.authors}</span>
                    </div>
                  </div>

                  {/* Abstract summary */}
                  <p className="text-xs md:text-sm text-body-text leading-relaxed mt-2 pl-2 border-l-2 border-primary/40">
                    <span className="font-bold text-heading">Abstract Summary: </span>
                    {pub.abstract}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="flex justify-end pt-2">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors cursor-pointer group"
                  >
                    View Journal Source 
                    <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
