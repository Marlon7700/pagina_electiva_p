import React from 'react';
import { Building2, MapPin, Sparkles, ArrowDown } from 'lucide-react';
import Reveal from './Reveal';

export default function BuildingHeroHighlight({ onOpenAppointment }) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-slate-900 text-white">
      {/* Background Building Image with Modern Parallax Depth & Institutional Curves */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url('/assets/bienestar-building-bg.webp')` }}
      />
      {/* Gradient Overlays ensuring crisp contrast and senior developer polish */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-slate-950/85 to-emerald-950/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80" />

      {/* SVG Wave at top and bottom mirroring the green wave on the building's facade */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none z-10 opacity-70">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 sm:h-16 text-slate-50 dark:text-slate-900 fill-current">
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Text & Values */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>Casa de Bienestar Universitario • Sede 2</span>
            </div>
            </Reveal>

            <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Un Espacio Diseñado Para Tu <span className="text-emerald-400">Bienestar y Crecimiento</span>
            </h2>
            </Reveal>

            <Reveal>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Nuestra emblemática sede de Bienestar Universitario te abre sus puertas. Aquí convergen la atención médica preventiva, el apoyo psicológico confidencial, el fomento del deporte y la riqueza cultural del Caribe colombiano.
            </p>
            </Reveal>

            {/* Quick Metrics / Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <Reveal><div className="tarjeta-3d p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 block font-mono">5</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 uppercase">Áreas Clave</span>
              </div></Reveal>
              <Reveal><div className="tarjeta-3d p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <span className="text-2xl sm:text-3xl font-black text-amber-300 block font-mono">24/7</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 uppercase">Línea Amiga</span>
              </div></Reveal>
              <Reveal><div className="tarjeta-3d p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <span className="text-2xl sm:text-3xl font-black text-sky-400 block font-mono">100%</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 uppercase">Gratuito</span>
              </div></Reveal>
              <Reveal><div className="tarjeta-3d p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <span className="text-2xl sm:text-3xl font-black text-rose-400 block font-mono">+20</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-300 uppercase">Disciplinas</span>
              </div></Reveal>
            </div>

            {/* CTA Buttons */}
            <Reveal>
            <div className="pt-2 flex flex-wrap items-center gap-3 justify-center lg:justify-start">
              <a
                href="#directorio"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center gap-2"
              >
                <span>Explorar Directorio</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenAppointment}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Solicitar Consulta</span>
              </button>
            </div>
            </Reveal>
          </div>

          {/* Right Column: Visual Frame of the Building with interactive pin */}
          <Reveal className="lg:col-span-5">
          <div>
            <div className="tarjeta-3d relative mx-auto max-w-md rounded-3xl overflow-hidden p-2 bg-gradient-to-tr from-emerald-500/40 via-white/20 to-amber-500/30 backdrop-blur-xl shadow-2xl border border-white/20 group">
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square">
                <img
                  src="/assets/bienestar-building-bg.webp"
                  alt="Fachada oficial de Bienestar Universitario Universidad Simón Bolívar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 text-xs text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-bold text-base">Casa de Bienestar Sede 2</span>
                  </div>
                  <p className="text-sm text-slate-300">
                    Carrera 54 No. 64 - 223, Barranquilla • Atención presencial
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
