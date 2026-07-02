'use client';

import React, { useEffect, useState } from 'react';
import { m } from 'framer-motion';

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
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  // Mobile optimization:
  // - Reduce animation duration by 50%
  // - Reduce translate/scale values to minimize rendering workload
  // - Always force once: true to avoid triggering updates repeatedly
  const optimizedDuration = isMobile ? duration * 0.5 : duration;
  const optimizedY = isMobile ? Math.min(y, 8) : y;
  const optimizedX = isMobile ? Math.min(x, 8) : x;
  const optimizedScale = isMobile ? 1 : scale;
  const optimizedOnce = isMobile ? true : once;

  const variants = {
    hidden: { 
      opacity: 0, 
      y: optimizedY, 
      x: optimizedX, 
      scale: optimizedScale 
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: optimizedDuration,
        delay: isMobile ? delay * 0.5 : delay,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: optimizedOnce, margin: isMobile ? '0px' : '-80px' }}
      variants={variants}
      className={className}
    >
      {children}
    </m.div>
  );
}
