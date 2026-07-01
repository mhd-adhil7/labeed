'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { 
        y: -8, 
        boxShadow: '0 20px 40px 0 rgba(96, 165, 250, 0.08)',
        borderColor: 'rgba(96, 165, 250, 0.4)' 
      } : {}}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`glass rounded-[2rem] p-6 md:p-8 backdrop-blur-md transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
