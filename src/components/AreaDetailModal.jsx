import React from 'react';
import { 
  X, Mail, Phone, MapPin, MessageSquare, 
  CheckCircle2, Sparkles, Clock, HeartPulse, 
  Users, Dumbbell, Palette, GraduationCap, ShieldCheck 
} from 'lucide-react';

export default function AreaDetailModal({ area, onClose, onOpenAppointment }) {
  if (!area) return null;

  const getAreaIcon = (iconName) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-8 h-8" />;
      case 'Users': return <Users className="w-8 h-8" />;
      case 'Dumbbell': return <Dumbbell className="w-8 h-8" />;
      case 'Palette': return <Palette className="w-8 h-8" />;
      case 'GraduationCap': return <GraduationCap className="w-8 h-8" />;
      default: return <ShieldCheck className="w-8 h-8" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with area accent color */}
        <div 
          className="p-6 text-white relative overflow-hidden"
          style={{ backgroundColor: area.color }}
        >
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                {getAreaIcon(area.icon)}
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {area.highlightTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black">{area.name}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 grow text-slate-700 dark:text-slate-200">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Descripción Institucional
            </h4>
            <p className="text-sm sm:text-base leading-relaxed font-normal">
              {area.fullDesc}
            </p>
          </div>

          {/* Services list */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Servicios y Programas que Ofrece:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {area.services.map((svc, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Canales Directos de Comunicación:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a
                href={`mailto:${area.email}`}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2.5"
              >
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="truncate">
                  <span className="text-[10px] text-slate-400 block font-semibold">Correo Electrónico</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{area.email}</span>
                </div>
              </a>

              <a
                href={`tel:${area.phone.replace(/\s+/g, '')}`}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">{area.phoneLabel}</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{area.phone}</span>
                </div>
              </a>
            </div>

            {area.whatsapp && (
              <a
                href={`https://wa.me/${area.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{area.whatsappLabel || `Escribir por WhatsApp al ${area.phone}`}</span>
              </a>
            )}

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800 dark:text-slate-200 block">Ubicación Física:</span>
                <span>{area.location} — {area.locationDetail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenAppointment(area);
            }}
            className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Agendar Cita o Consulta</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold hover:bg-slate-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
