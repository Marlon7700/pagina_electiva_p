import React from 'react';
import { X, Download, ExternalLink, ZoomIn, BookOpen } from 'lucide-react';

export default function PosterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/90">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-white text-sm sm:text-base">
              Afiche Oficial: Directorio de Bienestar Universitario
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Poster Image Container */}
        <div className="overflow-auto p-2 sm:p-4 flex items-center justify-center bg-slate-950 grow">
          <img
            src="/assets/directorio-bienestar-poster.webp"
            alt="Afiche oficial del Directorio de Bienestar Universitario"
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-800"
          />
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 text-xs">
          <span className="text-slate-400 hidden sm:inline">
            Directorio oficial Universidad Simón Bolívar
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href="/assets/directorio-bienestar-poster.png"
              download="Directorio_Bienestar_Unisimon.png"
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Descargar Imagen</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
