'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import MagneticButton from './ui/Button';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Certifications', href: '#certificates' },
  { name: 'Education', href: '#dental-tips' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
          scrolled 
            ? 'px-4 md:px-8 mt-2 md:mt-4' 
            : 'px-6 md:px-12 mt-0'
        }`}
      >
        <div 
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? 'glass-premium rounded-full px-6 py-3 shadow-[0_12px_40px_rgba(96,165,250,0.08)] border border-white/60' 
              : 'bg-transparent py-4 border-b border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-[0_4px_12px_rgba(125,211,252,0.3)] transition-transform duration-500 group-hover:rotate-12">
              <Sparkles className="w-5 h-5 fill-white/10" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-heading">Dr. Labeeb</span>
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-secondary -mt-1">Pediatric Dentistry</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-body-text rounded-full transition-all duration-300 hover:text-secondary group"
              >
                {item.name}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary rounded-full transition-all duration-300 group-hover:w-4" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <MagneticButton 
              onClick={() => {
                const contact = document.querySelector('#contact');
                contact?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:inline-flex px-6 py-2.5 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white rounded-full text-sm font-semibold shadow-[0_8px_20px_rgba(96,165,250,0.2)] hover:shadow-[0_12px_28px_rgba(96,165,250,0.3)] hover:-translate-y-0.5 border border-white/20 transition-all duration-300"
            >
              Contact Me
            </MagneticButton>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-heading hover:text-secondary hover:bg-primary/10 rounded-full transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Background Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/30 backdrop-blur-md z-50 lg:hidden"
            />

            {/* Slide-out Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 p-6 flex flex-col justify-between border-l border-border-custom lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border-custom">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-serif text-lg font-bold text-heading">Dr. Labeeb</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-heading hover:text-secondary hover:bg-primary/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 mt-8">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-3 text-lg font-medium text-heading rounded-2xl hover:bg-primary/10 hover:text-secondary transition-all"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pb-8">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-2xl shadow-lg"
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
