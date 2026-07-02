'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function TimelineLine() {
  const [fillHeight, setFillHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setFillHeight(100);
      return;
    }

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const elementHeight = rect.height;
      const elementTop = rect.top;
      
      // Calculate scroll progress percentage through the timeline element
      const scrollStartPoint = windowHeight * 0.8; // line starts filling when top of timeline is at 80% viewport
      const scrollEndPoint = windowHeight * 0.3; // line finishes when bottom of timeline reaches 30% viewport
      
      const totalRange = scrollStartPoint - scrollEndPoint;
      const currentPos = scrollStartPoint - elementTop;
      
      let percentage = (currentPos / (elementHeight + totalRange)) * 140;
      percentage = Math.min(Math.max(percentage, 0), 100);
      
      setFillHeight(percentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className="absolute left-0 top-3 bottom-3 w-[2px] bg-slate-100 pointer-events-none">
      <div 
        className="w-full bg-gradient-to-b from-primary to-secondary transition-all duration-300 ease-out shadow-[0_0_8px_rgba(96,165,250,0.5)]" 
        style={{ height: `${fillHeight}%` }} 
      />
    </div>
  );
}
