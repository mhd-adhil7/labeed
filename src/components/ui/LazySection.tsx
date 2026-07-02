'use client';

import React, { useEffect, useState, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
}

export default function LazySection({
  children,
  fallback = <div className="min-h-[200px]" />,
  rootMargin = '200px',
}: LazySectionProps) {
  const [isIntersected, setIsIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsIntersected(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  return (
    <div ref={ref} className="w-full">
      {isIntersected ? children : fallback}
    </div>
  );
}
