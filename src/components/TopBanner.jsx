import React from 'react';
import { Phone, Mail, ShieldAlert, Clock, Sparkles } from 'lucide-react';
import { generalContact } from '../data/directoryData';

export default function TopBanner() {
  return (
    <header className="w-full bg-[#006837] text-white shadow-md relative z-30">
      {/* 1. Top Compact Info Strip (Clean & Readable on Mobile and Desktop) */}
      <div className="bg-[#00522c] border-b border-emerald-600/40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[10px] sm:text-xs">
          {/* Schedule */}
          <div className="flex items-center gap-2 font-medium text-emerald-100">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping shrink-0" />
            <span>Barranquilla y Cúcuta</span>
            <span className="hidden sm:inline text-emerald-400">•</span>
            <span className="hidden sm:inline text-emerald-200">Lun - Vie 8:00 a.m. - 6:00 p.m.</span>
          </div>

          {/* Quick Contact Links */}
          <div className="flex items-center gap-2 sm:gap-5 flex-wrap ml-auto">
            <a 
              href="tel:3444333" 
              className="flex items-center gap-1 text-emerald-100 hover:text-white transition-colors"
              title="Llamar al PBX institucional"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300 shrink-0" />
              <span className="whitespace-nowrap">PBX: 3444333 Ext. 1857</span>
            </a>

            <span className="text-emerald-700 hidden sm:inline">|</span>

            <a 
              href="tel:3172163682"
              className="flex items-center gap-1.5 font-bold text-amber-300 hover:text-white transition-colors"
              title="Línea Amiga de Urgencias"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-amber-300 animate-pulse shrink-0" />
              <span className="whitespace-nowrap">Línea Amiga: 317 2163682</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Official Institutional Logos Centered Showcase */}
      <div className="py-2 sm:py-4 px-3 sm:px-4 bg-gradient-to-b from-[#006837] to-[#005b30]">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          {/* Centered Logos Row (White Logo + High Quality Accreditation Medal) */}
          <div className="flex items-center justify-center gap-2 sm:gap-8 md:gap-12 flex-nowrap w-full">
            {/* Logo 1: Universidad Simón Bolívar Emblem in Crisp White */}
            <a 
              href="#inicio" 
              className="flex items-center justify-center hover:opacity-95 transition-opacity"
              title="Universidad Simón Bolívar"
            >
              <img 
                src="/assets/logo-unisimon-white.webp" 
                alt="Logo Universidad Simón Bolívar" 
                className="h-8 sm:h-12 md:h-16 w-auto max-w-[130px] sm:max-w-[200px] object-contain drop-shadow-sm filter brightness-0 invert"
                loading="eager"
              />
            </a>

            {/* Subtle Divider (Desktop only) */}
            <div className="h-8 sm:h-12 w-px bg-emerald-500/40" />

            {/* Logo 2: Acreditación Institucional en Alta Calidad (Medalla Oficial Unisimon) */}
            <div className="flex items-center justify-center">
              <img 
                src="/assets/medalla2-white.webp" 
                alt="Acreditación Institucional en Alta Calidad - Universidad Simón Bolívar" 
                className="h-7 sm:h-11 md:h-14 w-auto max-w-[175px] sm:max-w-[300px] object-contain drop-shadow-sm"
                loading="eager"
              />
            </div>
          </div>

          {/* Subtitle Badge Centered */}
          <div className="mt-1.5 sm:mt-2.5 max-w-full inline-flex items-center justify-center gap-1 px-2.5 sm:px-3 py-1 sm:py-0.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-[8px] sm:text-xs font-bold uppercase tracking-[0.12em] sm:tracking-widest leading-tight text-emerald-200">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span className="text-center">Dirección de Bienestar Universitario • ¡Cuando lo necesites!</span>
          </div>
        </div>
      </div>
    </header>
  );
}
