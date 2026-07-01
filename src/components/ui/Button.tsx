'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type HTMLButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onScroll' | 'onSelect'
>;

interface MagneticButtonProps extends HTMLButtonProps {
  children: React.ReactNode;
  className?: string;
  range?: number; // Hover range area (radius)
  strength?: number; // Attraction strength (0 to 1)
}

export default function MagneticButton({
  children,
  className = '',
  range = 40,
  strength = 0.35,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Check distance from center
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < range * 3.5) {
      // Attract button position
      setPosition({ x: distanceX * strength, y: distanceY * strength });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center font-semibold overflow-hidden transition-all active:scale-[0.98] ${className}`}
      {...props}
    >
      {/* Ripple/Glow effect child elements can go inside here */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
