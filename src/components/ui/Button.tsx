'use client';

import React, { useRef, useState, useEffect } from 'react';
import { m } from 'framer-motion';

type HTMLButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onScroll' | 'onSelect'
>;

interface MagneticButtonProps extends HTMLButtonProps {
  children: React.ReactNode;
  className?: string;
  range?: number;
  strength?: number;
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
  const [isMobile, setIsMobile] = useState(true);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    if (distance < range * 3.5) {
      setPosition({ x: distanceX * strength, y: distanceY * strength });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = {
        id: Date.now() + Math.random(),
        x,
        y,
      };
      
      setRipples((prev) => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  };

  if (isMobile) {
    return (
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`relative inline-flex items-center justify-center font-semibold overflow-hidden transition-all active:scale-[0.98] ${className}`}
        {...props}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '80px',
              height: '80px',
            }}
          />
        ))}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }

  return (
    <m.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center font-semibold overflow-hidden transition-all active:scale-[0.98] ${className}`}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '80px',
            height: '80px',
          }}
        />
      ))}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </m.button>
  );
}
