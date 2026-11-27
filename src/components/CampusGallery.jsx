import React, { useEffect, useState } from 'react';
import { 
  ImageIcon, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import { galleryItems } from '../data/campusGallery';
import Reveal from './Reveal';

export default function CampusGallery() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [narrow, setNarrow] = useState(false);
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
  const active = count === 0 ? 0 : ((index % count) + count) % count;

  const coverOffset = (itemIndex) => {
    let diff = itemIndex - active;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    return diff;
  };

  const coverPose = (offset) => {
    const distance = Math.abs(offset);
    const x = offset * (narrow ? 48 : 62);
    const z = offset === 0 ? 36 : -28 * distance;
    const rot = Math.sign(offset) * Math.min(narrow ? 38 : 46, distance * (narrow ? 28 : 34)) * -1;
    const scale = offset === 0 ? 1 : 0.86 - (distance - 1) * 0.06;
    return `translateX(${x}%) translateZ(${z}px) rotateY(${rot}deg) scale(${scale})`;
  };

  useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (count <= 1 || selectedImage) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => current + 1);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [count, activeCategory, selectedImage, cycle]);

  const goNext = () => {
    setIndex((current) => current + 1);
    setCycle((current) => current + 1);
  };

  const goPrev = () => {
    setIndex((current) => current - 1);
    setCycle((current) => current + 1);
  };

  const focusOffset = (offset) => {
    setIndex((current) => current + offset);
    setCycle((current) => current + 1);
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
        <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Galería de Actividades & Campañas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            VIDA UNIVERSITARIA Y <span className="text-emerald-700 dark:text-emerald-400">EVENTOS</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Conoce nuestras brigadas de salud, festivales de folclor, actividades deportivas, campañas de autocuidado y programas de acompañamiento integral en el campus.
          </p>
        </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal>
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
        </Reveal>

        <div
          className="coverflow-stage"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="coverflow-floor" aria-hidden="true" />
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Imagen anterior"
                className="absolute left-2 sm:left-4 top-[38%] z-40 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-slate-800 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 hover:bg-emerald-600 hover:text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Imagen siguiente"
                className="absolute right-2 sm:right-4 top-[38%] z-40 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/80 text-slate-800 dark:text-white shadow-md border border-slate-200 dark:border-slate-700 hover:bg-emerald-600 hover:text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="coverflow">
            {filteredItems.map((item, itemIndex) => {
              const offset = coverOffset(itemIndex);
              const distance = Math.abs(offset);
              const visible = distance <= (narrow ? 1 : 2);
              return (
                <article
                  key={item.id}
                  onClick={() => (offset === 0 ? setSelectedImage(item) : focusOffset(offset))}
                  className={`coverflow-card group ${offset === 0 ? 'is-front' : ''}`}
                  style={{
                    transform: coverPose(offset),
                    zIndex: 20 - distance,
                    opacity: visible ? 1 : 0,
                    pointerEvents: visible ? 'auto' : 'none',
                  }}
                >
                  <div className="coverflow-face">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                    {offset === 0 && <div className="coverflow-shine" />}
                  </div>
                  <div className="coverflow-reflect" aria-hidden="true">
                    <img src={item.src} alt="" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

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
