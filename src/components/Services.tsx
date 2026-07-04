import React from 'react';
import dynamic from 'next/dynamic';
import ViewportDefer from './ui/ViewportDefer';

const ServicesCarouselAndModal = dynamic(() => import('./ui/ServicesCarouselAndModal'));

export default function Services() {
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

        {/* Dynamic Carousel and Modal */}
        <ViewportDefer 
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-64 rounded-3xl bg-slate-100/50 border border-slate-200/50 flex flex-col justify-between p-8 animate-pulse">
                  <div className="w-12 h-12 rounded-xl bg-slate-200" />
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-200 rounded w-2/3" />
                    <div className="h-3 bg-slate-200 rounded w-full" />
                    <div className="h-3 bg-slate-200 rounded w-5/6" />
                  </div>
                  <div className="h-4 bg-slate-200 rounded w-1/4 mt-4" />
                </div>
              ))}
            </div>
          }
        >
          <ServicesCarouselAndModal />
        </ViewportDefer>

      </div>
    </section>
  );
}
