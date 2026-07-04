'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const LoadingScreen = dynamic(() => import('@/components/ui/LoadingScreen'), { ssr: false });

export default function DesktopWidgets() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only load cursor/preloader on desktop screen sizes (>= 768px) and fine pointer devices (mouse)
    const checkDesktop = () => {
      const isFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isLargeScreen = window.innerWidth >= 768;
      setIsDesktop(isLargeScreen && isFinePointer);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <CustomCursor />
      <LoadingScreen />
    </>
  );
}
