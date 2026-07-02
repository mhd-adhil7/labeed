'use client';

import { useRef, useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Shield, Heart, Sparkles, Smile, Award } from 'lucide-react';
import Image from 'next/image';
import MagneticButton from './ui/Button';
import NumberCounter from './ui/NumberCounter';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768 || !containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const x = (e.clientX / clientWidth - 0.5) * 30;
      const y = (e.clientY / clientHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleCTA = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pre-calculated styling configurations
  const bubbleCount = 12;
  const sparkleCount = 6;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-bg-custom"
    >
      {/* Dynamic Animated Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft floating blur circles */}
        <div 
          className="absolute -top-[10%] -left-[5%] w-[45vw] h-[45vw] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow"
          style={{ 
            transform: !isMobile && mounted
              ? `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` 
              : 'none' 
          }}
        />
        <div 
          className="absolute bottom-[10%] -right-[5%] w-[50vw] h-[50vw] rounded-full bg-secondary/15 blur-[140px] animate-pulse-slow"
          style={{ 
            transform: !isMobile && mounted
              ? `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` 
              : 'none' 
          }}
        />
        <div 
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[35vw] h-[35vw] rounded-full bg-accent/15 blur-[120px]"
          style={{ 
            transform: !isMobile && mounted
              ? `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.2}px)` 
              : 'none' 
          }}
        />

        {/* Floating Bubble particles - COMPLETELY DISABLED ON MOBILE */}
        {!isMobile && mounted && (
          <div className="absolute inset-0 opacity-40">
            {[...Array(bubbleCount)].map((_, i) => (
              <m.div
                key={i}
                className="absolute rounded-full bg-primary/10 border border-white/20"
                style={{
                  width: 25 + (i * 3) % 25,
                  height: 25 + (i * 3) % 25,
                  left: `${(i * 17) % 95}%`,
                  top: `${(i * 23) % 90}%`,
                }}
                animate={{
                  y: [0, -80, 0],
                  x: [0, (i % 2 === 0 ? 20 : -20), 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 10 + (i % 4) * 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        )}

        {/* Small floating sparkles - COMPLETELY DISABLED ON MOBILE */}
        {!isMobile && mounted && (
          <div className="absolute inset-0">
            {[...Array(sparkleCount)].map((_, i) => (
              <m.div
                key={i}
                className="absolute text-accent"
                style={{
                  left: `${10 + (i * 15) % 80}%`,
                  top: `${15 + (i * 13) % 70}%`,
                }}
                animate={{
                  scale: [0.6, 1.1, 0.6],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + (i % 3) * 2,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.5,
                }}
              >
                <Sparkles className="w-5 h-5 fill-accent/20" />
              </m.div>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/70 border border-white/60 shadow-[0_6px_20px_rgba(125,211,252,0.06)] backdrop-blur-md mb-6">
            <span className="text-sm">⭐</span>
            <span className="text-xs font-bold tracking-wider uppercase text-secondary font-sans">Independent Consultant Pediatric Dentist</span>
          </div>

          {/* Heading with reveal effects on Desktop */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-heading leading-[1.08] mb-6 overflow-hidden">
            {!isMobile && mounted ? (
              <m.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Dr. Mohamed Labeeb KP
              </m.span>
            ) : (
              <span className="block">Dr. Mohamed Labeeb KP</span>
            )}
            
            {!isMobile && mounted ? (
              <m.span
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary/80 bg-size-200 text-3xl sm:text-4xl md:text-5xl block mt-3 font-sans font-medium tracking-normal"
              >
                MDS – Pediatric & Preventive Dentistry
              </m.span>
            ) : (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary/80 bg-size-200 text-3xl sm:text-4xl md:text-5xl block mt-3 font-sans font-medium tracking-normal">
                MDS – Pediatric & Preventive Dentistry
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-body-text max-w-xl mb-8 leading-relaxed">
            "Providing compassionate, evidence-based pediatric dental care with a strong focus on prevention, behaviour management, and creating positive dental experiences for children across multiple trusted dental clinics."
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3.5 mb-12">
            <MagneticButton
              onClick={() => handleCTA('#about')}
              className="px-7 py-3.5 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white rounded-full font-bold shadow-[0_8px_20px_rgba(96,165,250,0.2)] hover:shadow-[0_12px_28px_rgba(96,165,250,0.3)] transition-all duration-300"
            >
              View Profile
            </MagneticButton>
            <MagneticButton
              onClick={() => {
                alert("Downloading Dr. Labeeb's professional CV...");
              }}
              className="px-7 py-3.5 bg-white/75 border border-white/95 hover:bg-white text-heading rounded-full font-bold shadow-[0_8px_20px_rgba(125,211,252,0.04)] transition-all duration-300"
            >
              Download CV
            </MagneticButton>
            <MagneticButton
              onClick={() => handleCTA('#contact')}
              className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold shadow-md transition-all duration-300"
            >
              Contact Me
            </MagneticButton>
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
          {/* Parallax Container */}
          <div 
            className="relative w-full max-w-md h-full flex items-center justify-center transition-all duration-300 ease-out"
            style={{
              transform: !isMobile && mounted
                ? `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)` 
                : 'none',
            }}
          >
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
            <div
              className="absolute top-0 -left-6 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-slow"
              style={{ 
                transform: !isMobile && mounted
                  ? `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * -0.2}px)` 
                  : 'none' 
              }}
            >
              <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Consultant Dentist</span>
                <span className="block text-[10px] text-body-text/80">Specialized Pediatric Care</span>
              </div>
            </div>

            {/* Floating Card 2: Child-Friendly Care */}
            <div
              className="absolute top-10 -right-6 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-reverse-slow"
              style={{ 
                transform: !isMobile && mounted
                  ? `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.3}px)` 
                  : 'none' 
              }}
            >
              <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Heart className="w-5 h-5 fill-secondary/10" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Child-Friendly Care</span>
                <span className="block text-[10px] text-body-text/80">Positive Experience</span>
              </div>
            </div>

            {/* Floating Card 3: Pediatric Dentistry */}
            <div
              className="absolute bottom-6 -right-2 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-slow"
              style={{ 
                transform: !isMobile && mounted
                  ? `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * -0.4}px)` 
                  : 'none' 
              }}
            >
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Pediatric Dentistry</span>
                <span className="block text-[10px] text-body-text/80">MDS Specialization</span>
              </div>
            </div>

            {/* Floating Card 4: 5+ Years Experience */}
            <div
              className="absolute bottom-0 -left-8 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-reverse-slow"
              style={{ 
                transform: !isMobile && mounted
                  ? `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * 0.5}px)` 
                  : 'none' 
              }}
            >
              <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">5+ Years Experience</span>
                <span className="block text-[10px] text-body-text/80">Clinical Pedodontics</span>
              </div>
            </div>

            {/* Floating Card 5: Preventive Dentistry */}
            <div
              className="absolute top-[50%] -left-12 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-slow"
              style={{ 
                transform: !isMobile && mounted
                  ? `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)` 
                  : 'none' 
              }}
            >
              <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                <Sparkles className="w-5 h-5 fill-amber-300" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Preventive Dentistry</span>
                <span className="block text-[10px] text-body-text/80">Early Intervention</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
