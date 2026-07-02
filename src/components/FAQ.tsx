'use client';

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'At what age should my child first visit the dentist?',
    answer: 'According to the AAPD, your child should visit the dentist by their first birthday or within six months of their first tooth appearing. Early visits help children build comfort in a dental environment and prevent early decay.',
  },
  {
    question: 'How is a pediatric dentist different from a general dentist?',
    answer: 'Pediatric dentists complete 2-3 additional years of post-doctoral residency training focused entirely on infants, kids, teenagers, and children with special needs. They are certified specialists in child psychology, dental development, and pain management.',
  },
  {
    question: 'How often does my child need dental check-ups?',
    answer: 'Dr. Labeeb recommends standard cleanings and preventive check-ups every six months. Regular visits allow him to track dental growth milestones and apply sealants or fluoride to stop cavities before they expand.',
  },
  {
    question: 'Are dental X-rays safe for children?',
    answer: 'Yes! Modern pediatric dentistry utilizes digital X-ray sensors which reduce radiation exposure by up to 80% compared to traditional films. Dr. Labeeb ensures the use of child-sized lead aprons and shields for complete safety.',
  },
  {
    question: 'What are dental sealants and does my child need them?',
    answer: 'Dental sealants are thin, protective coatings painted onto the chewing surfaces of the back molars. They seal out food particles and cavity bacteria from settling in deep crevices. They are highly recommended for children as primary molars emerge.',
  },
  {
    question: 'What should I do if my child has a dental emergency?',
    answer: 'If your child experiences a dental emergency (like a knocked-out tooth or severe fracture), you should seek clinical help immediately. Please refer to our dental emergency first-aid guidelines in the Parent Education section for immediate steps to preserve the tooth.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const animDuration = isMobile ? 0.15 : 0.45;
  const animEase = (isMobile ? 'linear' : [0.16, 1, 0.3, 1]) as any; // Premium cubic-bezier on desktop

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-white z-10">
      
      {/* Decorative Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-0 w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-0 w-[35vw] h-[35vw] rounded-full bg-secondary/5 blur-[100px] animate-pulse-slow" />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Frequently Asked Questions</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
            Common Inquiries <br />
            & Parent Guides
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: isMobile ? 5 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: animDuration, delay: isMobile ? 0 : index * 0.04 }}
              >
                <div 
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen 
                      ? 'bg-gradient-to-tr from-primary/5 via-secondary/5 to-white border-primary/20 shadow-md shadow-primary/5' 
                      : 'bg-white border-border-custom hover:border-slate-300'
                  }`}
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-secondary' : 'text-slate-400'}`} />
                      <span className="font-serif text-base md:text-lg font-bold text-heading">
                        {faq.question}
                      </span>
                    </div>
                    <m.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: animDuration, ease: 'easeInOut' }}
                      className="p-1 rounded-full bg-slate-100 text-heading flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </m.div>
                  </button>

                  {/* Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: animDuration, ease: animEase }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-sm text-body-text leading-relaxed pl-15 border-t border-slate-100 mt-2">
                          {faq.answer}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
