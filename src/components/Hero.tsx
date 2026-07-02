import React from 'react';
import { Shield, Heart, Sparkles, Smile, Award } from 'lucide-react';
import Image from 'next/image';
import NumberCounter from './ui/NumberCounter';
import HeroAnimations from './ui/HeroAnimations';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-bg-custom"
    >
      {/* Dynamic Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Ambient background light blurs */}
        <div className="absolute -top-[10%] -left-[5%] w-[45vw] h-[45vw] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[5%] w-[50vw] h-[50vw] rounded-full bg-secondary/15 blur-[140px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[35vw] h-[35vw] rounded-full bg-accent/15 blur-[120px]" />

        {/* Dynamic client animations wrapper: loads bubbles & sparkles only on desktop */}
        <HeroAnimations />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/70 border border-white/60 shadow-[0_6px_20px_rgba(125,211,252,0.06)] backdrop-blur-md mb-6">
            <span className="text-sm">⭐</span>
            <span className="text-xs font-bold tracking-wider uppercase text-secondary font-sans">Independent Consultant Pediatric Dentist</span>
          </div>

          {/* Heading with static layout and CSS transition delay on desktop mount */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-heading leading-[1.08] mb-6 overflow-hidden">
            <span className="block animate-slide-up-fade">
              Dr. Mohamed Labeeb KP
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary/80 bg-size-200 text-3xl sm:text-4xl md:text-5xl block mt-3 font-sans font-medium tracking-normal animate-slide-up-fade animation-delay-200">
              MDS – Pediatric & Preventive Dentistry
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-body-text max-w-xl mb-8 leading-relaxed">
            "Providing compassionate, evidence-based pediatric dental care with a strong focus on prevention, behaviour management, and creating positive dental experiences for children across multiple trusted dental clinics."
          </p>

          {/* CTAs using direct HTML links instead of JS click state triggers */}
          <div className="flex flex-wrap gap-3.5 mb-12">
            <a
              href="#about"
              className="px-7 py-3.5 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white rounded-full font-bold shadow-[0_8px_20px_rgba(96,165,250,0.2)] hover:shadow-[0_12px_28px_rgba(96,165,250,0.3)] transition-all duration-300 inline-flex items-center justify-center text-center cursor-pointer"
            >
              View Profile
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold shadow-md transition-all duration-300 inline-flex items-center justify-center text-center cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-border-custom w-full max-w-lg">
            <div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-heading">
                <NumberCounter value={5} suffix="+" />
              </span>
              <span className="block text-xs font-semibold text-body-text/80 mt-1">Years Experience</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-heading font-serif">MDS</span>
              <span className="block text-xs font-semibold text-body-text/80 mt-1">Specialist Degree</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-heading">
                <NumberCounter value={10} suffix="+" />
              </span>
              <span className="block text-xs font-semibold text-body-text/80 mt-1">Partner Clinics</span>
            </div>
          </div>
        </div>

        {/* Right Side Illustration & Floating Cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[450px] md:min-h-[520px]">
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
            
            {/* Blob Image Container */}
            <div 
              className="relative w-76 h-76 sm:w-96 sm:h-96 bg-gradient-to-tr from-secondary/30 via-primary/30 to-accent/20 p-2 overflow-hidden shadow-[0_32px_60px_rgba(96,165,250,0.12)]"
              style={{
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                animation: 'spin-slow 20s linear infinite',
              }}
            >
              <div 
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animation: 'spin-slow 20s linear infinite reverse',
                }}
              >
                <Image
                  src="/dr_labeeb_hero.webp"
                  alt="Dr. Mohamed Labeeb KP"
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, 384px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Floating Card 1: Consultant Dentist */}
            <div className="absolute top-0 -left-6 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-slow">
              <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Consultant Dentist</span>
                <span className="block text-[10px] text-body-text/80">Specialized Pediatric Care</span>
              </div>
            </div>

            {/* Floating Card 2: Dental Clinics */}
            <div className="absolute bottom-6 -left-10 bg-white/85 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-[0_16px_32px_rgba(15,23,42,0.08)] border border-white/60 flex items-center gap-3 animate-float-reverse-slow">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-secondary">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Clinical Consultations</span>
                <span className="block text-[10px] text-body-text/80">Across Reputed Clinics</span>
              </div>
            </div>

            {/* Floating Card 3: preventive shield */}
            <div className="absolute top-1/2 -right-6 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-slow">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Preventive Care</span>
                <span className="block text-[10px] text-body-text/80">Decay Free Smiles</span>
              </div>
            </div>

            {/* Floating Card 4: Hearts */}
            <div className="absolute bottom-0 right-4 bg-white/85 backdrop-blur-md p-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center justify-center animate-float-reverse-slow">
              <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
