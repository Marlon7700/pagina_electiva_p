import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, ArrowRight
} from 'lucide-react';
import { carouselSlides } from '../data/carouselSlides';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef(null);

  // Auto-advance every 5000ms (5 seconds), without requiring visible controls.
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselSlides.length);
  };

  // Mobile Swipe Handlers (iOS & Android touch events)
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section 
      id="inicio"
      className="relative w-full overflow-hidden bg-slate-900 text-white select-none group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Carrusel de imágenes de Bienestar Universitario"
    >
      {/* Aspect Ratio Container: optimized for mobile (tall), tablet and desktop (widescreen) */}
      <div className="relative min-h-[480px] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex items-center">
        {/* Carousel Slides */}
        {carouselSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Zoom Pan Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {/* Advanced Gradient Overlays for High Legibility & Premium Look */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-slate-950/75 to-transparent" />
                {/* Subtle institutional pattern overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>

              {/* Slide Content Box */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end sm:justify-center pb-20 sm:pb-16 pt-16 z-20">
                <div className="max-w-2xl space-y-4">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
                    <span>{slide.tag}</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>

                  {/* Subtitle & Highlight */}
                  <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm sm:text-base">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>{slide.highlight}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={slide.ctaLink}
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center gap-2 group/btn"
                    >
                      <span>{slide.ctaText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>

                    {slide.secondaryLink && (
                      <a
                        href={slide.secondaryLink}
                        className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
                      >
                        <span>{slide.secondaryText}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
