'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.interactive-card') ||
        target.classList.contains('cursor-pointer') ||
        target.style.cursor === 'pointer';
      
      setHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, hidden]);

  if (hidden) return null;

  return (
    <>
      {/* Outer Glowing Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-secondary/40 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: hovered ? 64 : 32,
          height: hovered ? 64 : 32,
          backgroundColor: hovered ? 'rgba(96, 165, 250, 0.1)' : 'rgba(125, 211, 252, 0.03)',
          boxShadow: hovered ? '0 0 25px rgba(125, 211, 252, 0.4)' : 'none',
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-secondary pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
