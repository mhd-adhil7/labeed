'use client';

import React, { useEffect, useState, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 20,
  x = 0,
  scale = 1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only set up observer on desktop screens (>= 768px)
    if (window.innerWidth < 768) {
      setIsVisible(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.05, rootMargin: '-40px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Add resize listener to handle resizing between desktop and mobile viewport dynamically
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsVisible(true);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [once]);

  const customStyles = {
    '--reveal-x': `${x}px`,
    '--reveal-y': `${y}px`,
    '--reveal-scale': scale,
    '--reveal-duration': `${duration}s`,
    '--reveal-delay': `${delay}s`,
  } as React.CSSProperties;

  return (
    <div 
      ref={ref} 
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={customStyles}
    >
      {children}
    </div>
  );
}
