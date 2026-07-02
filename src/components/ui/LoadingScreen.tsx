'use client';

import React, { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip preloader execution on mobile screens to prevent layout blocking
    if (window.innerWidth < 768) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setProgress(100);
      const fadeTimer = setTimeout(() => setLoading(false), 200);
      return () => clearTimeout(fadeTimer);
    }, 800);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <m.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-bg-custom hidden md:flex"
        >
          <div className="flex flex-col items-center max-w-xs w-full px-6">
            <m.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-[0_8px_32px_rgba(96,165,250,0.15)] mb-6 relative"
            >
              <m.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-white/20 border-t-white"
              />
              <Sparkles className="w-6 h-6 fill-white/10" />
            </m.div>

            <h2 className="font-serif text-xl font-bold text-heading tracking-tight text-center mb-1">
              Dr. Labeeb
            </h2>
            <p className="text-[9px] tracking-widest uppercase font-bold text-secondary text-center mb-6">
              Pediatric Dentistry
            </p>

            <div className="w-32 h-[2px] bg-slate-100 rounded-full overflow-hidden relative mb-2">
              <m.div
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[8px] font-bold text-secondary uppercase tracking-widest text-center">
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
