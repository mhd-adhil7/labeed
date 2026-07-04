import React from 'react';
import { Sparkles, ArrowUp } from 'lucide-react';

const FOOTER_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Research & Thesis', href: '#research' },
  { name: 'Awards', href: '#awards' },
  { name: 'Publications', href: '#publications' },
  { name: 'Presentations', href: '#presentations' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-heading text-white/95 pt-20 pb-28 sm:pb-16 overflow-hidden z-10 border-t border-slate-800">
      
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute top-0 left-0 w-[35vw] h-[35vw] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800 items-start">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight">Dr. Mohamed Labeeb KP</span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-primary -mt-1">Pediatric Dentistry Specialist</span>
              </div>
            </div>
            
            <p className="text-sm text-white/70 max-w-md mb-6 leading-relaxed">
              Dr. Mohamed Labeeb KP is an Independent Consultant Pediatric Dentist providing compassionate, specialized care across multiple reputed clinics by prior appointment.
            </p>

            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-primary text-white hover:text-heading transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-800 hover:bg-primary text-white hover:text-heading transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-6 flex flex-col items-start text-left md:items-end">
            <div className="max-w-md w-full">
              <h4 className="font-serif text-lg font-bold mb-6 text-white md:text-right">Quick Portfolio Links</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 w-full text-left">
                {FOOTER_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm text-white/70 hover:text-primary transition-colors py-0.5"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} Dr. Mohamed Labeeb KP. All rights reserved.</span>
          
          <a
            href="#"
            className="mt-6 sm:mt-0 flex items-center gap-1.5 px-4 py-2 border border-slate-800 bg-slate-900/50 hover:bg-slate-800 rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}
