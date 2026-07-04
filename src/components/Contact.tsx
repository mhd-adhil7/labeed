import React from 'react';
import dynamic from 'next/dynamic';
import { Phone, MessageCircle } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import ViewportDefer from './ui/ViewportDefer';

const ContactFormAndCarousel = dynamic(() => import('./ui/ContactFormAndCarousel'));

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-bg-custom via-white to-bg-custom z-10">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-0 w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-0 w-[35vw] h-[35vw] rounded-full bg-secondary/5 blur-[100px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Final CTA Gradient Section using ScrollReveal (CSS transitions) */}
        <ScrollReveal duration={0.8}>
          <div className="rounded-[3rem] bg-gradient-to-tr from-secondary via-primary to-secondary p-8 md:p-16 text-center text-white relative overflow-hidden shadow-[0_24px_50px_rgba(96,165,250,0.25)] border border-white/20 mb-20">
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
            
            <span className="inline-block text-[10px] tracking-widest uppercase font-bold bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
              ⭐ Consultant Pediatric Care
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Request A Specialized <br className="hidden sm:block" />
              Pediatric Consultation
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Dr. Labeeb practices across multiple trusted dental clinics. Book a slot here to coordinate his availability.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#booking-form"
                className="px-8 py-4 bg-white text-heading hover:bg-slate-50 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-98 cursor-pointer text-sm"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+919632756102"
                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full font-bold border border-white/30 backdrop-blur-md transition-transform hover:-translate-y-0.5 active:scale-98 cursor-pointer flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" /> Call Me
              </a>
              <a
                href="https://wa.me/919632756102?text=Hello%20Dr.%20Labeeb!%20I'd%20like%20to%20schedule%20a%20consultant%20pediatric%20dental%20visit%20for%20my%20child."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold shadow-md transition-transform hover:-translate-y-0.5 active:scale-98 cursor-pointer flex items-center gap-2 text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-white/10" /> WhatsApp Me
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Carousel and Form */}
        <ViewportDefer 
          fallback={
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
              <div className="lg:col-span-5 flex flex-col gap-6 animate-pulse">
                <div className="h-8 bg-slate-100 rounded w-1/3" />
                <div className="h-44 bg-slate-100 rounded-2xl w-full" />
              </div>
              <div className="lg:col-span-7 animate-pulse">
                <div className="h-96 bg-slate-150/40 rounded-3xl w-full" />
              </div>
            </div>
          }
        >
          <ContactFormAndCarousel />
        </ViewportDefer>

      </div>
    </section>
  );
}
