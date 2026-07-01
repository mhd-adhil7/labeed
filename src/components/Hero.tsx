'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Sparkles, Smile, Award } from 'lucide-react';
import Image from 'next/image';
import MagneticButton from './ui/Button';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubbleCount, setBubbleCount] = useState(0);
  const [sparkleCount, setSparkleCount] = useState(0);

  // Parallax offsets based on mouse positions
  useEffect(() => {
    setBubbleCount(window.innerWidth < 768 ? 4 : 12);
    setSparkleCount(window.innerWidth < 768 ? 2 : 6);
    
    if (window.innerWidth < 768) return; // Disable heavy mouse parallax on mobile

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const x = (e.clientX / clientWidth - 0.5) * 30; // Max 30px offset
      const y = (e.clientY / clientHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleCTA = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

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
          style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
        />
        <div 
          className="absolute bottom-[10%] -right-[5%] w-[50vw] h-[50vw] rounded-full bg-secondary/15 blur-[140px] animate-pulse-slow"
          style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        />
        <div 
          className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[35vw] h-[35vw] rounded-full bg-accent/15 blur-[120px]"
          style={{ transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * 0.2}px)` }}
        />

        {/* Floating Bubble particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(bubbleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10 border border-white/20"
              style={{
                width: Math.random() * 40 + 15,
                height: Math.random() * 40 + 15,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 40 - 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Small floating sparkles */}
        <div className="absolute inset-0">
          {[...Array(sparkleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-accent"
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                scale: [0.6, 1.2, 0.6],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 1,
              }}
            >
              <Sparkles className="w-5 h-5 fill-accent/20" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-4.5 py-1.5 rounded-full bg-white/70 border border-white/60 shadow-[0_6px_20px_rgba(125,211,252,0.06)] backdrop-blur-md mb-6"
          >
            <span className="text-sm">⭐</span>
            <span className="text-xs font-bold tracking-wider uppercase text-secondary font-sans">Independent Consultant Pediatric Dentist</span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-heading leading-[1.08] mb-6">
            Dr. Mohamed Labeeb KP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary/80 bg-size-200 text-3xl sm:text-4xl md:text-5xl block mt-3 font-sans font-medium tracking-normal">
              MDS – Pediatric & Preventive Dentistry
            </span>
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
              <span className="block font-serif text-3xl md:text-4xl font-bold text-heading">5+</span>
              <span className="block text-xs font-semibold text-body-text/80 mt-1">Years Experience</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-heading">MDS</span>
              <span className="block text-xs font-semibold text-body-text/80 mt-1">Specialist Degree</span>
            </div>
            <div>
              <span className="block font-serif text-3xl md:text-4xl font-bold text-heading">10+</span>
              <span className="block text-xs font-semibold text-body-text/80 mt-1">Partner Clinics</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side Illustration & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[450px] md:min-h-[520px]"
        >
          {/* Parallax Container */}
          <div 
            className="relative w-full max-w-md h-full flex items-center justify-center transition-all duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)`,
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
            <motion.div
              className="absolute top-0 -left-6 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-slow"
              style={{ transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * -0.2}px)` }}
            >
              <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Consultant Dentist</span>
                <span className="block text-[10px] text-body-text/80">Specialized Pediatric Care</span>
              </div>
            </motion.div>

            {/* Floating Card 2: Child-Friendly Care */}
            <motion.div
              className="absolute top-10 -right-6 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-reverse-slow"
              style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * 0.3}px)` }}
            >
              <div className="w-9 h-9 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                <Heart className="w-5 h-5 fill-secondary/10" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Child-Friendly Care</span>
                <span className="block text-[10px] text-body-text/80">Positive Experience</span>
              </div>
            </motion.div>

            {/* Floating Card 3: Pediatric Dentistry */}
            <motion.div
              className="absolute bottom-6 -right-2 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-slow"
              style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * -0.4}px)` }}
            >
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Pediatric Dentistry</span>
                <span className="block text-[10px] text-body-text/80">MDS Specialization</span>
              </div>
            </motion.div>

            {/* Floating Card 4: 5+ Years Experience */}
            <motion.div
              className="absolute bottom-0 -left-8 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-reverse-slow"
              style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * 0.5}px)` }}
            >
              <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-500">
                <Smile className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">5+ Years Experience</span>
                <span className="block text-[10px] text-body-text/80">Clinical Pedodontics</span>
              </div>
            </motion.div>

            {/* Floating Card 5: Preventive Dentistry */}
            <motion.div
              className="absolute top-[50%] -left-12 bg-white/85 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_24px_rgba(15,23,42,0.06)] border border-white/60 flex items-center gap-3 animate-float-slow"
              style={{ transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)` }}
            >
              <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                <Sparkles className="w-5 h-5 fill-amber-300" />
              </div>
              <div>
                <span className="block font-bold text-xs text-heading">Preventive Dentistry</span>
                <span className="block text-[10px] text-body-text/80">Early Intervention</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
