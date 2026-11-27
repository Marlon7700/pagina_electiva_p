import React, { useEffect, useState } from 'react';
import { 
  ImageIcon, X, ZoomIn, ChevronLeft, ChevronRight
} from 'lucide-react';
import { galleryItems } from '../data/campusGallery';

export default function CampusGallery() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [step, setStep] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const categories = [
    'Todas',
    'Cultura',
    'Salud',
    'Deporte',
    'Desarrollo Humano',
    'Permanencia',
    'Institucional'
  ];

  const filteredItems = activeCategory === 'Todas'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const count = filteredItems.length;
  const slides = count > 1
    ? [...filteredItems, filteredItems[0], filteredItems[1] ?? filteredItems[0]]
    : filteredItems;

  useEffect(() => {
    setAnimate(false);
    setIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (animate) return undefined;
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setAnimate(true));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [animate, index]);

  useEffect(() => {
    if (count <= 1 || index < count) return undefined;
    const timer = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, 700);
    return () => window.clearTimeout(timer);
  }, [index, count]);

  useEffect(() => {
    if (count <= 1 || paused || selectedImage) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => current + 1);
      setStep((current) => current + 1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [count, activeCategory, paused, selectedImage, cycle]);

  const goNext = () => {
    setIndex((current) => current + 1);
    setStep((current) => current + 1);
    setCycle((current) => current + 1);
  };

  const goPrev = () => {
    setCycle((current) => current + 1);
    setStep((current) => current + 1);
    if (index === 0 && count > 1) {
      setAnimate(false);
      setIndex(count);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(count - 1);
        });
      });
      return;
    }
    setIndex((current) => Math.max(0, current - 1));
  };

  const handleTouchStart = (event) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart == null || touchEnd == null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goNext();
    else if (distance < -50) goPrev();
  };

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Galería de Actividades & Campañas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            VIDA UNIVERSITARIA Y <span className="text-emerald-700 dark:text-emerald-400">EVENTOS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Conoce nuestras brigadas de salud, festivales de folclor, actividades deportivas, campañas de autocuidado y programas de acompañamiento integral en el campus.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 justify-start sm:justify-center no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carrusel horizontal: siempre dos columnas, avanza de lado */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Imagen anterior"
                className="absolute left-1 sm:left-2 top-[28%] z-10 p-2 rounded-full bg-white/90 dark:bg-slate-900/80 text-slate-800 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 hover:bg-emerald-600 hover:text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Imagen siguiente"
                className="absolute right-1 sm:right-2 top-[28%] z-10 p-2 rounded-full bg-white/90 dark:bg-slate-900/80 text-slate-800 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 hover:bg-emerald-600 hover:text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <div
              className={`flex w-full ${animate ? 'transition-transform duration-700 ease-out' : ''}`}
              style={{ transform: `translateX(-${index * 50}%)` }}
            >
          {slides.map((item, slideIndex) => (
            <div key={`${item.id}-${slideIndex}`} className="px-2" style={{ flex: '0 0 50%' }}>
            <div
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:shadow-xl flex flex-col justify-between h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-slate-900/10 dark:bg-slate-900/60 flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-2 text-white text-xs font-semibold">
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                    <span>Ver afiche en grande</span>
                  </div>
                </div>

                {/* Badge top right */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-400/30">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Text metadata */}
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 line-clamp-3 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
            </div>
          ))}
            </div>
          </div>
        </div>

        {count > 1 && (
          <div className="max-w-md mx-auto mt-6">
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-3">
              El carrusel avanza cada 5 segundos · {(index % count) + 1} de {count}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
              {filteredItems.map((item, dotIndex) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Ir a la imagen ${dotIndex + 1}`}
                  onClick={() => {
                    setAnimate(true);
                    setIndex(dotIndex);
                    setStep((current) => current + 1);
                    setCycle((current) => current + 1);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    dotIndex === index % count ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div key={step} className="h-full bg-emerald-600 animate-progress-5s" />
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {selectedImage.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
                    {selectedImage.title}
                  </h4>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image display */}
              <div className="overflow-auto p-4 flex items-center justify-center bg-black/40 grow">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[62vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Modal Caption */}
              <div className="p-4 sm:p-5 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-300">
                <div>
                  <span className="text-emerald-400 font-bold block mb-0.5">{selectedImage.area}</span>
                  <p className="text-slate-300">{selectedImage.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shrink-0 self-end sm:self-auto"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
