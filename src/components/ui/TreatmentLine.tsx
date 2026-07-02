'use client';

import React from 'react';
import { m } from 'framer-motion';

export default function TreatmentLine() {
  return (
    <m.div
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
    />
  );
}
