import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Pause, Play, Sparkles, 
  ArrowRight, Phone, ExternalLink 
} from 'lucide-react';
import { carouselSlides } from '../data/carouselSlides';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const autoPlayRef = useRef(null);

  // Auto-advance every 5000ms (5 seconds)
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPlaying, currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

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

  const currentSlide = carouselSlides[currentIndex];

  return (
    <section 
      id="inicio"
      className="relative w-full overflow-hidden bg-slate-900 text-white select-none group"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
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

        {/* Carousel Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Foto anterior"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-emerald-600/80 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Siguiente foto"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/40 hover:bg-emerald-600/80 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110 focus:outline-none"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Carousel Controls Bar (5s Progress Bar + Thumbnails Dots + Play/Pause) */}
        <div className="absolute bottom-4 inset-x-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-black/40 backdrop-blur-md rounded-2xl py-2.5 px-4 border border-white/10">
            {/* Slide Indicators with 5-Second Timer Bar */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              {carouselSlides.map((slide, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    aria-label={`Ir a la diapositiva ${index + 1}`}
                    className={`group relative h-2.5 sm:h-3 rounded-full transition-all overflow-hidden ${
                      isActive ? 'w-12 sm:w-16 bg-white/30' : 'w-3 sm:w-3.5 bg-white/20 hover:bg-white/40'
                    }`}
                  >
                    {isActive && isPlaying && (
                      <div 
                        key={`${currentIndex}-${isPlaying}`}
                        className="h-full bg-emerald-400 rounded-full animate-progress-5s"
                      />
                    )}
                    {isActive && !isPlaying && (
                      <div className="h-full bg-amber-400 rounded-full w-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Slide Info & Play/Pause Button */}
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="font-semibold">
                <span className="text-emerald-400">{currentIndex + 1}</span> / {carouselSlides.length}
              </span>
              <span className="text-slate-500">|</span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white font-medium"
                title={isPlaying ? 'Pausar rotación automática' : 'Reanudar rotación automática'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-300" />
                    <span className="hidden sm:inline">Pausar (5s)</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="hidden sm:inline">Reanudar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
