import React from 'react';
import { 
  ShieldAlert, Phone, HeartHandshake, AlertCircle, 
  Clock, MapPin, CheckCircle2, ChevronRight, HeartPulse 
} from 'lucide-react';
import Reveal from './Reveal';

export default function CodigoDorado() {
  const steps = [
    {
      num: "01",
      title: "Alerta de la Comunidad",
      desc: "La comunidad bolivariana (estudiante, docente o amigo) reporta señales de alarma o crisis llamando a la línea directa 315 3778669.",
      badge: "Detección Oportuna"
    },
    {
      num: "02",
      title: "Activación Psicológica",
      desc: "El equipo de profesionales en psicología de Bienestar Universitario hace contacto inmediato para brindar contención.",
      badge: "Respuesta Inmediata"
    },
    {
      num: "03",
      title: "Primeros Auxilios Emocionales",
      desc: "Acompañamiento seguro, valoración clínica confidencial y estabilización del estudiante en la Casa de Bienestar.",
      badge: "Espacio Seguro"
    },
    {
      num: "04",
      title: "Remisión Prioritaria",
      desc: "Si la vida corre peligro o se requiere atención clínica especializada, se activa de inmediato el servicio de ambulancia y red de urgencias.",
      badge: "Atención Médica"
    }
  ];

  return (
    <section id="codigo-dorado" className="py-16 sm:py-20 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent dark:from-amber-950/20 dark:via-slate-900 dark:to-slate-900 border-y border-amber-200/60 dark:border-amber-900/40 relative overflow-hidden">
      {/* Decorative pulse blur circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-amber-400/50 shadow-xl bg-white/95 dark:bg-slate-900/95">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <Reveal className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-white shadow-sm">
                <ShieldAlert className="w-4 h-4 animate-bounce" />
                <span>Protocolo de Emergencia en Salud Mental</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                RUTA DE ATENCIÓN <span className="text-amber-600 dark:text-amber-400">CÓDIGO DORADO</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                En la Universidad Simón Bolívar tu vida y bienestar emocional son lo primero. Si estás pasando por un momento difícil, sientes angustia, depresión o conoces a alguien en riesgo, activa la red de apoyo inmediatamente. ¡No estás solo!
              </p>

              <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-amber-500" />
                  Atención prioritaria y confidencial
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Casa de Bienestar Sede 2
                </span>
              </div>
            </Reveal>

            {/* Direct Emergency Call Box */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Reveal><div className="tarjeta-3d p-5 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg text-center">
                <span className="text-xs uppercase tracking-widest font-bold opacity-90 block mb-1">
                  Línea Código Dorado
                </span>
                <a 
                  href="tel:3153778669"
                  className="text-2xl sm:text-3xl font-black tracking-tight hover:underline flex items-center justify-center gap-2"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
                  <span>315 3778669</span>
                </a>
                <span className="text-[11px] opacity-80 block mt-1">Llamada y WhatsApp de Urgencia</span>
              </div></Reveal>

              <Reveal><div className="tarjeta-3d p-4 rounded-2xl bg-gradient-to-br from-rose-600 to-rose-700 text-white shadow-lg text-center">
                <span className="text-xs uppercase tracking-widest font-bold opacity-90 block mb-1">
                  Línea Amiga Bienestar
                </span>
                <a 
                  href="tel:3172163682"
                  className="text-xl sm:text-2xl font-black tracking-tight hover:underline flex items-center justify-center gap-2"
                >
                  <HeartPulse className="w-5 h-5 animate-pulse" />
                  <span>317 2163682</span>
                </a>
                <span className="text-[11px] opacity-80 block mt-1">Apoyo y escucha activa</span>
              </div></Reveal>
            </div>
          </div>

          {/* 4 Step Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((st) => (
              <Reveal key={st.num} className="h-full">
              <div 
                className="tarjeta-3d p-5 rounded-2xl bg-amber-50/50 dark:bg-slate-800/80 border border-amber-200/80 dark:border-slate-700 relative overflow-hidden group hover:border-amber-400 transition-colors h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black text-amber-500 dark:text-amber-400 font-mono">
                    {st.num}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/60 dark:bg-amber-900/40 text-amber-900 dark:text-amber-300">
                    {st.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1.5">
                  {st.title}
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
