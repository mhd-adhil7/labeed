'use client';

import React, { useEffect, useState, useRef } from 'react';

interface NumberCounterProps {
  value: number;
  suffix?: string;
}

export default function NumberCounter({ value, suffix = '' }: NumberCounterProps) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setMounted(true);
    if (window.innerWidth < 768) {
      setCount(value);
      return;
    }

    let observer: IntersectionObserver;
    let frameId: number;

    const startCounter = () => {
      const duration = 1500; // 1.5s
      const startTime = performance.now();

      const update = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Out-cubic easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeProgress * value);
        
        setCount(currentCount);

        if (progress < 1) {
          frameId = requestAnimationFrame(update);
        } else {
          setCount(value);
        }
      };

      frameId = requestAnimationFrame(update);
    };

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startCounter();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }
    } else {
      setCount(value);
    }

    return () => {
      if (observer) observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value]);

  if (!mounted) {
    return <span ref={ref}>{value}{suffix}</span>;
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
