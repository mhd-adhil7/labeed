'use client';

import React, { useEffect, useState } from 'react';
import { m, HTMLMotionProps } from 'framer-motion';

interface AnimateWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export default function AnimateWrapper({ children, className = '', ...props }: AnimateWrapperProps) {
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // SSR and initial hydration render standard static div for performance.
  // Mobile devices continue to render static div, avoiding all framer-motion overhead.
  if (!mounted || isMobile) {
    const {
      variants,
      initial,
      animate,
      exit,
      transition,
      viewport,
      whileHover,
      whileTap,
      whileInView,
      layout,
      ...staticProps
    } = props as any;
    return (
      <div className={className} {...staticProps}>
        {children}
      </div>
    );
  }

  return (
    <m.div className={className} {...props}>
      {children}
    </m.div>
  );
}
