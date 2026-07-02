'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  desktopSlidesToShow?: 1 | 2 | 3 | 4;
  className?: string;
}

export default function Carousel({
  children,
  desktopSlidesToShow = 3,
  className = '',
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: false,
    loop: false,
    duration: 35,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  let slideWidthClass = 'flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]';
  if (desktopSlidesToShow === 1) {
    slideWidthClass = 'flex-[0_0_85%] md:flex-[0_0_100%] lg:flex-[0_0_100%]';
  } else if (desktopSlidesToShow === 2) {
    slideWidthClass = 'flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_50%]';
  } else if (desktopSlidesToShow === 4) {
    slideWidthClass = 'flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]';
  }

  return (
    <div className={`relative group w-full ${className}`}>
      {/* Viewport */}
      <div className="overflow-hidden w-full px-2" ref={emblaRef}>
        <div className="flex -mx-3 touch-pan-y">
          {React.Children.map(children, (child, index) => {
            const isActive = index === selectedIndex;
            return (
              <div
                key={index}
                className={`${slideWidthClass} px-3 py-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive 
                    ? 'scale-102 opacity-100 z-10' 
                    : 'scale-[0.96] opacity-50 -translate-y-1 pointer-events-none md:pointer-events-auto'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Desktop hover animation: translateY(-6px) + soft shadow */}
                <div className="h-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[6px] hover:shadow-[0_30px_60px_rgba(96,165,250,0.15)]">
                  {child}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Prev / Next buttons (Desktop only) */}
      {prevBtnEnabled && (
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 w-12 h-12 rounded-full glass-premium border border-white/60 shadow-lg items-center justify-center text-heading hover:text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {nextBtnEnabled && (
        <button
          onClick={scrollNext}
          className="hidden md:flex absolute top-1/2 right-2 -translate-y-1/2 w-12 h-12 rounded-full glass-premium border border-white/60 shadow-lg items-center justify-center text-heading hover:text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Pagination Dots */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2.5 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                index === selectedIndex ? 'w-6 bg-secondary font-semibold' : 'w-2 bg-slate-200 hover:bg-slate-350'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
