'use client';

import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Clock, PhoneCall, Calendar,
  Send, CheckCircle, MessageCircle, Sparkles, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import GlassCard from './ui/GlassCard';
import Carousel from './ui/Carousel';

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    date: '',
    service: 'Checkup',
    notes: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Monitor scroll to display mobile sticky bottom bar
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
      
      setFormData({
        parentName: '',
        childName: '',
        childAge: '',
        email: '',
        phone: '',
        date: '',
        service: 'Checkup',
        notes: '',
      });
    }, 1500);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Dr. Labeeb! I'd like to schedule a consultant pediatric dental visit for my child.");
    window.open(`https://wa.me/919632756102?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919632756102', '_self');
  };

  const animDuration = isMobile ? 0.25 : 0.6;

  return (
    <>
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-bg-custom via-white to-bg-custom z-10">
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-0 w-[45vw] h-[45vw] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute bottom-[10%] left-0 w-[35vw] h-[35vw] rounded-full bg-secondary/5 blur-[100px] animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          
          {/* Final CTA Gradient Section */}
          <m.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animDuration }}
            className="rounded-[3rem] bg-gradient-to-tr from-secondary via-primary to-secondary p-8 md:p-16 text-center text-white relative overflow-hidden shadow-[0_24px_50px_rgba(96,165,250,0.25)] border border-white/20 mb-20"
          >
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5 blur-2xl" />
            
            <span className="inline-block text-[10px] tracking-widest uppercase font-bold bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
              ⭐ Consultant Pediatric Care
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Request A Specialized <br className="hidden sm:block" />
              Pediatric Consultation
            </h2>
            <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Dr. Labeeb practices across multiple trusted dental clinics. Book a slot here to coordinate his availability.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  document.querySelector('#booking-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-heading hover:bg-slate-50 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-98 cursor-pointer"
              >
                Schedule Consultation
              </button>
              <button
                onClick={handleCall}
                className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full font-bold border border-white/30 backdrop-blur-md transition-transform hover:-translate-y-0.5 active:scale-98 cursor-pointer flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Me
              </button>
              <button
                onClick={handleWhatsApp}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold shadow-md transition-transform hover:-translate-y-0.5 active:scale-98 cursor-pointer flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-white/10" /> WhatsApp Me
              </button>
            </div>
          </m.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact details */}
            <m.div
              initial={{ opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 10 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: animDuration }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <h3 className="font-serif text-3xl font-bold text-heading">Contact Details</h3>
              
              <Carousel desktopSlidesToShow={1} className="w-full">
                {/* Availability info */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-tr from-secondary/5 to-white border border-secondary/20 shadow-sm h-full w-full">
                  <div className="p-3 rounded-xl bg-secondary/15 text-secondary">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-body-text/80 uppercase font-bold">Clinical Availability</span>
                    <span className="block text-sm font-bold text-heading mt-0.5">Consultations Across Reputed Dental Clinics</span>
                    <span className="block text-xs text-body-text/90 mt-1">Available by prior appointment only. Fill out the booking request to secure a slot.</span>
                  </div>
                </div>

                {/* Phone detail */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border-custom shadow-sm h-full w-full">
                  <div className="p-3 rounded-xl bg-primary/10 text-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-body-text/80 uppercase font-bold">Phone Contact</span>
                    <a href="tel:+919632756102" className="block text-sm font-bold text-heading mt-0.5 hover:text-secondary transition-colors">
                      +91 96327 56102
                    </a>
                  </div>
                </div>

                {/* Email detail */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border-custom shadow-sm h-full w-full">
                  <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[10px] text-body-text/80 uppercase font-bold">Email Address</span>
                    <a href="mailto:hello@drlabeeb.com" className="block text-sm font-bold text-heading mt-0.5 hover:text-secondary transition-colors">
                      hello@drlabeeb.com
                    </a>
                  </div>
                </div>
              </Carousel>

              {/* Social Channels */}
              <div className="flex items-center gap-3 mt-2">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white hover:bg-secondary/10 text-heading hover:text-secondary border border-border-custom transition-all shadow-sm" aria-label="Instagram">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white hover:bg-secondary/10 text-heading hover:text-secondary border border-border-custom transition-all shadow-sm" aria-label="LinkedIn">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </m.div>

            {/* Right Column: Appointment Form */}
            <m.div
              id="booking-form"
              initial={{ opacity: 0, x: isMobile ? 0 : 30, y: isMobile ? 10 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: animDuration }}
              className="lg:col-span-7"
            >
              <GlassCard hoverEffect={false} className="p-8 md:p-10 border border-white/60 bg-white/70 shadow-lg">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-heading mb-1.5 flex items-center gap-2">
                  Request Consultation <Sparkles className="w-5 h-5 text-accent fill-accent/20" />
                </h3>
                <p className="text-xs text-body-text/80 mb-8">Fill out details below. Dr. Labeeb will confirm clinic locations and times.</p>

                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <m.div
                      key="success"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl text-center flex flex-col items-center py-12"
                    >
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mb-4">
                        <CheckCircle className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-heading mb-2">Request Received!</h4>
                      <p className="text-sm text-body-text max-w-xs leading-relaxed mb-6">
                        Thank you! Your consult scheduling request has been received. We will contact you to coordinate dates and partner clinic setups.
                      </p>
                      <button
                        onClick={() => setFormStatus('idle')}
                        className="px-6 py-2 border border-emerald-500/20 text-emerald-700 bg-white hover:bg-emerald-50/50 rounded-xl text-xs font-semibold shadow-sm transition-colors cursor-pointer"
                      >
                        Request Another Consultation
                      </button>
                    </m.div>
                  ) : (
                    <m.form key="form" onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Parent Name */}
                        <div>
                          <label className="block text-[11px] font-bold text-heading uppercase mb-1.5">Parent Full Name *</label>
                          <input
                            type="text"
                            name="parentName"
                            required
                            value={formData.parentName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white/80 focus:border-secondary focus:bg-white outline-none transition-all text-sm text-heading font-medium focus:ring-4 focus:ring-primary/10"
                          />
                        </div>

                        {/* Child Name */}
                        <div>
                          <label className="block text-[11px] font-bold text-heading uppercase mb-1.5">Child Full Name *</label>
                          <input
                            type="text"
                            name="childName"
                            required
                            value={formData.childName}
                            onChange={handleChange}
                            placeholder="Leo Doe"
                            className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white/80 focus:border-secondary focus:bg-white outline-none transition-all text-sm text-heading font-medium focus:ring-4 focus:ring-primary/10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {/* Child Age */}
                        <div>
                          <label className="block text-[11px] font-bold text-heading uppercase mb-1.5">Child's Age *</label>
                          <input
                            type="number"
                            name="childAge"
                            required
                            min="0"
                            max="21"
                            value={formData.childAge}
                            onChange={handleChange}
                            placeholder="5"
                            className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white/80 focus:border-secondary focus:bg-white outline-none transition-all text-sm text-heading font-medium focus:ring-4 focus:ring-primary/10"
                          />
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-2">
                          <label className="block text-[11px] font-bold text-heading uppercase mb-1.5">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="parent@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white/80 focus:border-secondary focus:bg-white outline-none transition-all text-sm text-heading font-medium focus:ring-4 focus:ring-primary/10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div>
                          <label className="block text-[11px] font-bold text-heading uppercase mb-1.5">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(617) 555-0122"
                            className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white/80 focus:border-secondary focus:bg-white outline-none transition-all text-sm text-heading font-medium focus:ring-4 focus:ring-primary/10"
                          />
                        </div>

                        {/* Appointment Date */}
                        <div>
                          <label className="block text-[11px] font-bold text-heading uppercase mb-1.5">Preferred Date *</label>
                          <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white/80 focus:border-secondary focus:bg-white outline-none transition-all text-sm text-heading font-medium focus:ring-4 focus:ring-primary/10"
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div>
                        <label className="block text-[11px] font-bold text-heading uppercase mb-1.5">Requested Specialty *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white/80 focus:border-secondary focus:bg-white outline-none transition-all text-sm text-heading font-medium focus:ring-4 focus:ring-primary/10"
                        >
                          <option value="Checkup">Preventive Dentistry Checkup</option>
                          <option value="Fluoride">Fluoride Therapy</option>
                          <option value="Crowns">Stainless Steel Crowns</option>
                          <option value="Pulp">Pulp Therapy</option>
                          <option value="Maintainers">Space Maintainers</option>
                          <option value="Education">Oral Health Education</option>
                        </select>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-[11px] font-bold text-heading uppercase mb-1.5">Special Notes / Fears</label>
                        <textarea
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="My child is scared of dental tools..."
                          className="w-full px-4 py-3 rounded-xl border border-border-custom bg-white/80 focus:border-secondary focus:bg-white outline-none transition-all text-sm text-heading font-medium focus:ring-4 focus:ring-primary/10"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-4 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white font-bold rounded-2xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
                      >
                        {formStatus === 'submitting' ? (
                          <span>Sending Request...</span>
                        ) : (
                          <>
                            Request Consultation <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </m.form>
                  )}
                </AnimatePresence>
              </GlassCard>
            </m.div>

          </div>
        </div>
      </section>

      {/* Floating Sticky Bottom CTA for Mobile */}
      <AnimatePresence>
        {showStickyCTA && (
          <m.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-lg border-t border-border-custom p-4 flex sm:hidden items-center justify-between gap-3 shadow-[0_-8px_30px_rgba(15,23,42,0.06)]"
          >
            <button
              onClick={() => {
                document.querySelector('#booking-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 py-3 bg-secondary text-white font-bold rounded-xl text-center text-xs shadow-md animate-pulse-slow"
            >
              Request Consult
            </button>
            <button
              onClick={handleCall}
              className="px-4 py-3 border border-border-custom text-heading rounded-xl text-xs font-semibold hover:bg-slate-50 flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" /> Call
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-4 py-3 bg-emerald-500 text-white rounded-xl text-xs font-bold hover:bg-emerald-600 flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" /> Chat
            </button>
          </m.div>
        )}
      </AnimatePresence>

      {/* Floating Sticky WhatsApp Button (Visible above sm viewport) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <m.button
          whileHover={{ scale: 1.1, rotate: 6 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/20 border border-emerald-400/20 cursor-pointer"
          aria-label="Chat with Dr. Labeeb on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white/10" />
        </m.button>
      </div>
    </>
  );
}
