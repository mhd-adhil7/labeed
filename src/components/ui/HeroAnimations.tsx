'use client';

import React, { useState, useEffect } from 'react';
import { m, LazyMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const loadFeatures = () => import('@/utils/framer-features').then((res) => res.default);

export default function HeroAnimations() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only mount on desktop pointer fine viewports to minimize CPU/JS overhead on mobile
    if (window.innerWidth < 768) return;
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <LazyMotion features={loadFeatures} strict>

    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(12)].map((_, i) => (
          <m.div
            key={i}
            className="absolute rounded-full bg-primary/10 border border-white/20"
            style={{
              width: 25 + (i * 3) % 25,
              height: 25 + (i * 3) % 25,
              left: `${(i * 17) % 95}%`,
              top: `${(i * 23) % 90}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, (i % 2 === 0 ? 20 : -20), 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10 + (i % 4) * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Sparkles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <m.div
            key={i}
            className="absolute text-accent"
            style={{
              left: `${10 + (i * 15) % 80}%`,
              top: `${15 + (i * 13) % 70}%`,
            }}
            animate={{
              scale: [0.6, 1.1, 0.6],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3) * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          >
            <Sparkles className="w-5 h-5 fill-accent/20" />
          </m.div>
        ))}
      </div>
    </div>
    </LazyMotion>
  );
}
