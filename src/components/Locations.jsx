import React from 'react';
import { MapPin, Navigation, Clock, Building, Compass, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';

export default function Locations() {
  const locations = [
    {
      title: "Casa de Bienestar Universitario",
      sede: "Sede 2",
      address: "Carrera 54 No. 64 - 223, Barranquilla",
      areas: ["Salud Integral", "Desarrollo Humano", "Recepción y Dirección de Bienestar"],
      hours: "Lunes a Viernes: 8:00 a.m. - 12:00 m. y 2:00 p.m. - 6:00 p.m.",
      badge: "Sede Principal Bienestar",
      image: "/assets/bienestar-building-bg.webp",
      mapQuery: "Carrera 54 No. 64 - 223, Barranquilla"
    },
    {
      title: "Coliseo Eugenio Bolívar",
      sede: "Sede 1",
      address: "Carrera 54 No. 59 - 102, Barranquilla",
      areas: ["Actividad Física, Recreación y Deporte", "Gimnasio", "Selecciones Deportivas"],
      hours: "Lunes a Viernes: 7:00 a.m. - 8:00 p.m. | Sábados: 8:00 a.m. - 2:00 p.m.",
      badge: "Complejo Deportivo",
      image: "/imagenes/image copy 15.webp",
      mapQuery: "Carrera 54 No. 59 - 102, Barranquilla"
    },
    {
      title: "Casa de la Cultura 'La Perla'",
      sede: "Sede Cultural",
      address: "Calle 68 No. 54 - 56, Barranquilla",
      areas: ["Expresión Cultural y Artística", "Banda Folclórica", "Danza y Teatro"],
      hours: "Lunes a Viernes: 8:00 a.m. - 12:00 m. y 2:00 p.m. - 6:00 p.m.",
      badge: "Patrimonio & Folclor",
      image: "/imagenes/image copy 4.webp",
      mapQuery: "Calle 68 No. 54 - 56, Barranquilla"
    },
    {
      title: "Permanencia Estudiantil",
      sede: "Sede 3 Bloque C - Piso 2",
      address: "Carrera 54 No. 64 - 222, Barranquilla",
      areas: ["Permanencia y Desarrollo Estudiantil", "Tutorías", "Alertas Tempranas y Becas"],
      hours: "Lunes a Viernes: 8:00 a.m. - 12:00 m. y 2:00 p.m. - 6:00 p.m.",
      badge: "Acompañamiento Académico",
      image: "/imagenes/image copy 14.webp",
      mapQuery: "Carrera 54 No. 64 - 222, Barranquilla"
    }
  ];

  return (
    <section id="sedes" className="py-16 sm:py-20 bg-slate-100/70 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-4">
            <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Nuestras Instalaciones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            SEDES Y <span className="text-emerald-700 dark:text-emerald-400">PUNTOS DE ATENCIÓN</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Encuéntranos en los diferentes puntos estratégicos del campus universitario de la Universidad Simón Bolívar en Barranquilla.
          </p>
        </div>
        </Reveal>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <Reveal key={i} className="h-full">
            <div
              className="glass-card tarjeta-3d rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row group h-full"
            >
              {/* Image side */}
              <div className="sm:w-2/5 relative h-48 sm:h-auto overflow-hidden bg-slate-900">
                <img
                  src={loc.image}
                  alt={loc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/40" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white shadow-md">
                  {loc.sede}
                </span>
              </div>

              {/* Info side */}
              <div className="sm:w-3/5 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-1">
                    {loc.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {loc.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 flex items-start gap-1.5 mb-3">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Áreas ubicadas aquí:
                    </span>
                    {loc.areas.map((a, j) => (
                      <span
                        key={j}
                        className="inline-block text-[11px] font-medium mr-1.5 mb-1 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {a}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{loc.hours}</span>
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 group/link"
                  >
                    <span>Ver en Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
