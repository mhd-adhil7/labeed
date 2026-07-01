'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const MEMBERSHIPS = [
  {
    name: 'Indian Society of Pedodontics and Preventive Dentistry (ISPPD)',
    role: 'Active Life Member',
    details: 'The premier national body promoting and advancing pediatric dental research, preventive programs, and clinical guidelines in India.',
    icon: Award,
    color: 'text-secondary bg-secondary/10 border-secondary/20',
  },
  {
    name: 'Kerala Dental Council Registration',
    role: 'Registered Specialist Practitioner',
    details: 'Official state licensing authority validating clinical qualifications, compliance, and clinical pediatric dentistry practice.',
    icon: ShieldCheck,
    color: 'text-emerald-600 bg-emerald-100 border-emerald-200/50',
  },
];

export default function Trust() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-bg-custom to-white border-y border-border-custom z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="text-[10px] tracking-widest uppercase font-bold text-secondary">Affiliations & Memberships</span>
          <h3 className="font-serif text-2xl font-bold text-heading mt-2">Professional Accreditations</h3>
        </div>

        {/* Badges Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto">
          {MEMBERSHIPS.map((mem, idx) => {
            const Icon = mem.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="w-full md:w-1/2"
              >
                <GlassCard
                  hoverEffect={true}
                  className="flex items-start gap-4 p-6 bg-white border border-border-custom shadow-sm rounded-2xl h-full"
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 ${mem.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] uppercase font-bold text-secondary mb-1">
                      {mem.role}
                    </span>
                    <h4 className="font-serif text-base font-bold text-heading mb-1.5 leading-snug">
                      {mem.name}
                    </h4>
                    <p className="text-xs text-body-text leading-relaxed">
                      {mem.details}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
