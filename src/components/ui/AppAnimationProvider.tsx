'use client';

import React from 'react';
import { LazyMotion } from 'framer-motion';

const loadFeatures = () => import('@/utils/framer-features').then((res) => res.default);

export default function AppAnimationProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
