'use client';

import React, { useEffect, useState, useRef } from 'react';

export default function TreatmentLine() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setInView(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`h-full bg-gradient-to-r from-primary via-secondary to-accent ${
        inView ? 'animate-treatment-line' : 'w-0'
      }`}
    />
  );
}
