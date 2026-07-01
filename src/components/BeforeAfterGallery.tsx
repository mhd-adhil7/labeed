'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MoveHorizontal } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function BeforeAfterGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50); // Percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // Support interactive click/tap positioning on the container
  const handleContainerClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="smile-gallery" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-bg-custom to-white z-10">
      
      {/* Background blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-0 w-[40vw] h-[40vw] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-0 w-[35vw] h-[35vw] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Smile Gallery</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
            Before & After Smile Transformations
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
        </div>

        {/* Main layout: Text + Interactive Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Text */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <h3 className="font-serif text-3xl font-bold text-heading">Visualizing Healthy Outcomes</h3>
            <p className="text-base text-body-text leading-relaxed">
              Dr. Labeeb uses advanced, interceptive orthodontics and conservative cavity restoration techniques to guide children's teeth into perfect, healthy symmetry.
            </p>
            <p className="text-sm text-body-text leading-relaxed">
              Drag or tap the slider handle on the right to see a stylized dental treatment transformation from a crooked, spotted baby tooth into a glowing, straight, healthy smile.
            </p>
            
            {/* Legend indicators */}
            <div className="flex gap-4 mt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-body-text/80 bg-slate-100 rounded-full px-3.5 py-1.5 border border-border-custom">
                👈 Before: Crooked & Cavity Spot
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-primary/10 rounded-full px-3.5 py-1.5 border border-primary/20">
                👉 After: Perfectly Healthy Smile
              </span>
            </div>
          </div>

          {/* Right Interactive Comparison Slider */}
          <div className="lg:col-span-7 flex justify-center">
            <div 
              ref={containerRef}
              onClick={handleContainerClick}
              className="relative w-full max-w-lg aspect-square rounded-[2rem] bg-gradient-to-tr from-primary/10 via-secondary/15 to-white border border-white/80 overflow-hidden shadow-2xl cursor-ew-resize select-none"
            >
              
              {/* Left Side SVG: Crooked, Spotted Tooth (Before) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white flex flex-col items-center justify-center p-8">
                <div className="w-56 h-56 flex flex-col items-center justify-center opacity-85 rotate-[-8deg] relative">
                  {/* Styled Before Tooth SVG */}
                  <svg className="w-40 h-40 text-slate-300 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C10.5.5 9 1.5 8 3c-1 1.5-2.5 2-4 2-1.5 0-3 1.5-3 3.5v5c0 3.5 3 6.5 6.5 7.5l2 1.5c1.5 1 3 1 4.5 0l2-1.5C18.5 20.5 21.5 17.5 21.5 14v-5c0-2-1.5-3.5-3-3.5-1.5 0-3-.5-4-2-1-1.5-2.5-2.5-4.5-2.5z" />
                  </svg>
                  {/* Cavity Spot */}
                  <div className="absolute top-[40%] right-[38%] w-5 h-5 rounded-full bg-slate-600/40 border border-slate-500/30 flex items-center justify-center">
                    <span className="text-[6px] text-slate-800 font-bold">👾</span>
                  </div>
                  <span className="text-slate-400 font-bold text-sm mt-4 font-mono">Micro-Cavity Spot</span>
                </div>
              </div>

              {/* Right Side SVG: Straight, Glowing Tooth (After) */}
              <div 
                className="absolute inset-y-0 right-0 left-0 bg-gradient-to-tr from-secondary/15 via-white to-primary/10 flex flex-col items-center justify-center p-8 overflow-hidden"
                style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
              >
                <div className="w-56 h-56 flex flex-col items-center justify-center relative scale-105">
                  {/* Styled After Tooth SVG */}
                  <svg className="w-40 h-40 text-white fill-white drop-shadow-[0_12px_28px_rgba(96,165,250,0.3)] border-white" viewBox="0 0 24 24">
                    <path d="M12 .5C10.5.5 9 1.5 8 3c-1 1.5-2.5 2-4 2-1.5 0-3 1.5-3 3.5v5c0 3.5 3 6.5 6.5 7.5l2 1.5c1.5 1 3 1 4.5 0l2-1.5C18.5 20.5 21.5 17.5 21.5 14v-5c0-2-1.5-3.5-3-3.5-1.5 0-3-.5-4-2-1-1.5-2.5-2.5-4.5-2.5z" />
                  </svg>
                  {/* Cute face overlay to make it child-friendly */}
                  <div className="absolute top-[42%] left-1/2 -translate-x-1/2 flex items-center gap-4 text-secondary">
                    <span className="text-sm font-bold">👀</span>
                  </div>
                  <div className="absolute top-[52%] left-1/2 -translate-x-1/2 text-pink-400 text-sm">
                    <span>👅</span>
                  </div>
                  {/* Sparkles */}
                  <div className="absolute top-4 right-6 text-amber-400 animate-pulse">
                    <Sparkles className="w-6 h-6 fill-amber-300" />
                  </div>
                  <div className="absolute bottom-12 left-4 text-amber-400 animate-pulse delay-500">
                    <Sparkles className="w-5 h-5 fill-amber-300" />
                  </div>
                  <span className="text-secondary font-bold text-sm mt-4">100% Corrected Smile</span>
                </div>
              </div>

              {/* Vertical Slider Bar (Handle Line) */}
              <div 
                className="absolute inset-y-0 w-1 bg-secondary shadow-md cursor-ew-resize z-20 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
              >
                {/* Round Drag Button */}
                <div className="w-10 h-10 rounded-full bg-white border border-secondary shadow-lg flex items-center justify-center text-secondary -translate-x-[0px] hover:scale-110 active:scale-95 transition-transform duration-200">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
