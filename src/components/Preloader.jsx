import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Preloader({ onLoaded }) {
  const [progress, setProgress] = useState(15);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(65), 180);
    const timer2 = setTimeout(() => setProgress(100), 450);
    const timer3 = setTimeout(() => {
      setFadeOut(true);
      if (onLoaded) onLoaded();
    }, 750);
    const timer4 = setTimeout(() => setHidden(true), 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onLoaded]);

  if (hidden) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-400 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background glow */}
      <div className="absolute w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative flex flex-col items-center text-center p-6 max-w-sm">
        {/* Emblem with spinning glow rings */}
        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-300 opacity-60 blur-md animate-pulse" />
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 flex items-center justify-center text-white shadow-2xl border border-emerald-400/40">
            <span className="font-extrabold text-4xl tracking-tighter">U</span>
          </div>
          {/* Subtle spinning ring */}
          <div className="absolute -inset-2 border-2 border-dashed border-emerald-400/40 rounded-3xl animate-spin-slow pointer-events-none" />
        </div>

        {/* Text */}
        <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-400 mb-1 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Universidad Simón Bolívar
        </span>

        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4">
          BIENESTAR UNIVERSITARIO
        </h2>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2 border border-slate-700/60">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-[11px] text-slate-400 font-medium">
          Cargando directorio y servicios... {progress}%
        </p>
      </div>
    </div>
  );
}
