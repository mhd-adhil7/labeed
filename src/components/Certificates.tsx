'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, X, ZoomIn, Calendar } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const CERTIFICATES = [
  {
    id: 'mds',
    title: 'Master of Dental Surgery (MDS)',
    organization: 'Srinivas Institute of Dental Sciences, Mangaluru',
    year: '2023',
    credentialId: 'MDS-PEDO-2023-99',
    color: 'border-amber-200 shadow-amber-500/5',
    logoBg: 'bg-amber-500/10 text-amber-600',
    description: 'Postgraduate specialization degree in Pediatric & Preventive Dentistry, detailing child psychology, clinical pediatric therapy, and interceptive orthodontics.',
  },
  {
    id: 'bds',
    title: 'Bachelor of Dental Surgery (BDS)',
    organization: 'PMNM Dental College & Hospital',
    year: '2018',
    credentialId: 'BDS-PMNM-2018-07',
    color: 'border-sky-200 shadow-sky-500/5',
    logoBg: 'bg-sky-500/10 text-sky-600',
    description: 'Undergraduate dental surgery degree covering oral pathology, anatomy, restorative therapies, and clinical outpatient dentistry.',
  },
  {
    id: 'kdc',
    title: 'Registered Dental Specialist',
    organization: 'Kerala Dental Council (KDC)',
    year: '2018',
    credentialId: 'KDC-REG-48902-A',
    color: 'border-emerald-200 shadow-emerald-500/5',
    logoBg: 'bg-emerald-500/10 text-emerald-600',
    description: 'Official registration permit issued by the state council, validating professional credentials and authorization to consult in pediatric dentistry.',
  },
  {
    id: 'copyright',
    title: 'Intellectual Property Copyright',
    organization: 'Copyright Office, Government of India',
    year: '2023',
    credentialId: 'ROC-L-110825/2023',
    color: 'border-rose-200 shadow-rose-500/5',
    logoBg: 'bg-rose-500/10 text-rose-600',
    description: 'Official copyright certification granted for "Airo-Magic Brush" – a novel behavior distraction technique in pediatric dentistry.',
  },
  {
    id: 'sedation',
    title: 'Conscious Sedation & GA Workshop',
    organization: 'Specialized Clinical Workshop',
    year: '2021',
    credentialId: 'WSH-SED-2021-12',
    color: 'border-purple-200 shadow-purple-500/5',
    logoBg: 'bg-purple-500/10 text-purple-600',
    description: 'Certified clinical training for administering nitrous oxide inhalation sedation and pediatric general anaesthesia care.',
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATES[0] | null>(null);

  return (
    <section id="certificates" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-bg-custom z-10">
      
      {/* Decorative background shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-secondary font-sans">Accreditations</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-heading mt-3 mb-6">
            Certified Excellence & <br />
            Professional Accreditations
          </h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              onClick={() => setSelectedCert(cert)}
              className="cursor-pointer group"
            >
              <GlassCard 
                hoverEffect={true} 
                className={`relative flex flex-col justify-between p-8 rounded-[2rem] bg-white border border-border-custom hover:-translate-y-2.5 transition-all duration-500 shadow-sm ${cert.color}`}
              >
                {/* Luxury Certificate layout */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl ${cert.logoBg}`}>
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold text-body-text/80 bg-slate-100 rounded-full px-3 py-1">
                      <Calendar className="w-3.5 h-3.5" /> {cert.year}
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-heading mb-1.5 group-hover:text-secondary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <span className="block text-xs font-semibold text-secondary mb-4">
                    {cert.organization}
                  </span>

                  <p className="text-xs text-body-text/95 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 border-t border-border-custom/50 pt-4">
                  <span className="text-[10px] font-mono tracking-widest text-body-text/60">ID: {cert.credentialId}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-secondary group-hover:text-primary transition-colors">
                    View Plaque <ZoomIn className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Full Plaque Modal Zoom */}
        <AnimatePresence>
          {selectedCert && (
            <>
              {/* Overlay Blur */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-md z-50 flex items-center justify-center p-4"
              >
                {/* Plaque container */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-stone-50 border-8 border-amber-800 rounded-3xl p-8 md:p-12 max-w-xl w-full shadow-2xl relative text-center overflow-hidden flex flex-col items-center"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(139, 92, 26, 0.1)',
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Golden seal container */}
                  <div className="w-20 h-20 rounded-full bg-amber-500/10 border-4 border-amber-600/30 flex items-center justify-center text-amber-600 mb-8 animate-spin-slow">
                    <Award className="w-10 h-10" />
                  </div>

                  <span className="text-[10px] tracking-widest uppercase font-bold text-stone-500">Board Accreditation Certificate</span>
                  <h4 className="font-serif text-3xl font-bold text-stone-900 mt-2 mb-1">{selectedCert.title}</h4>
                  <span className="text-sm font-semibold text-amber-800 mb-8 block">{selectedCert.organization}</span>

                  <div className="w-16 h-0.5 bg-amber-600/30 mb-8" />

                  <p className="text-sm text-stone-700 leading-relaxed max-w-sm italic mb-8">
                    "This document certifies that the individual named has successfully passed all clinical criteria and boards necessary to practice specialized children\'s dental care."
                  </p>

                  <div className="flex justify-between w-full border-t border-stone-200 pt-6">
                    <div className="text-left">
                      <span className="block text-[10px] text-stone-500 uppercase font-semibold">Granted Year</span>
                      <span className="font-bold text-stone-800">{selectedCert.year}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-stone-500 uppercase font-semibold">Verification ID</span>
                      <span className="font-mono text-xs text-stone-800">{selectedCert.credentialId}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
