'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ViewportDeferProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
}

export default function ViewportDefer({
  children,
  fallback = null,
  rootMargin = '200px',
}: ViewportDeferProps) {
  const [inView, setInView] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for the window load / paint event to guarantee Hero is rendered first
    const handleReady = () => {
      setIsReady(true);
    };

    if (document.readyState === 'complete') {
      handleReady();
    } else {
      window.addEventListener('load', handleReady, { once: true });
      const timer = setTimeout(handleReady, 150); // Fallback to let paint complete
      return () => {
        window.removeEventListener('load', handleReady);
        clearTimeout(timer);
      };
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;

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
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isReady, rootMargin]);

  return (
    <div ref={ref} className="w-full min-h-[50px]">
      {inView ? children : fallback}
    </div>
  );
}
