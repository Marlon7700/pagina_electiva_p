import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, HeartPulse, Sparkles, Moon, Sun, 
  MapPin, Image as ImageIcon, BookOpen, Share2, HelpCircle, 
  Building2, ChevronRight, ShieldAlert 
} from 'lucide-react';
import { generalContact } from '../data/directoryData';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';

export default function Navbar({ darkMode, setDarkMode, onOpenPoster, onOpenAppointment }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Directorio', href: '#directorio' },
    { name: '5 Áreas', href: '#areas' },
    { name: 'Código Dorado', href: '#codigo-dorado', isEmergency: true },
    { name: 'Galería y Eventos', href: '#galeria' },
    { name: 'Sedes', href: '#sedes' },
    { name: 'Redes Sociales', href: '#redes' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav 
        className={`sticky top-0 z-40 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 shadow-md py-2 border-b border-slate-200 dark:border-slate-800' 
            : 'bg-white dark:bg-slate-900 py-2.5 border-b border-slate-200/80 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left side on mobile: Hamburger Menu button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none"
                aria-label="Abrir menú de navegación lateral"
              >
                <Menu className="w-5 h-5 text-[#006837] dark:text-emerald-400" />
              </button>

              {/* Brand Logo & Name */}
              <a 
                href="#inicio" 
                className="flex items-center gap-2.5 group"
                aria-label="Inicio Bienestar Universitario"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#006837] flex items-center justify-center text-white shadow-sm shrink-0">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tighter">U</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#006837] dark:text-emerald-400 leading-none">
                    BIENESTAR
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
                    Universidad Simón Bolívar
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    link.isEmergency
                      ? 'text-amber-800 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-200 hover:bg-amber-50 dark:hover:bg-amber-950/40'
                      : 'text-slate-700 dark:text-slate-200 hover:text-[#006837] dark:hover:text-emerald-400 hover:bg-emerald-50/70 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.isEmergency && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  )}
                </a>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Dark Mode Instant Switcher */}
              <button
                onClick={handleToggleTheme}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 cursor-pointer"
                title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                aria-label="Alternar modo oscuro o claro"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
                )}
              </button>

              <button
                onClick={onOpenPoster}
                className="hidden md:flex px-3 py-1.5 rounded-xl text-xs font-semibold border border-[#006837]/40 text-[#006837] dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 items-center gap-1.5 cursor-pointer"
                title="Ver afiche oficial del Directorio"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Afiche Oficial</span>
              </button>

              <button
                onClick={onOpenAppointment}
                className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#006837] hover:bg-[#00552d] shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span className="hidden sm:inline">Solicitar Orientación</span>
                <span className="sm:hidden">Orientación</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE OFF-CANVAS SLIDE-OVER DRAWER OPENING FROM THE LEFT */}
      {/* 1. Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* 2. Side Drawer (Slides in from the LEFT: -translate-x-full to translate-x-0) */}
      <div 
        className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-slate-900 shadow-2xl z-50 lg:hidden flex flex-col justify-between transform transition-transform duration-300 ease-out border-r border-slate-200 dark:border-slate-800 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-label="Menú de navegación lateral"
      >
        {/* Drawer Header with Official Brand Logos */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-[#006837] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white text-[#006837] flex items-center justify-center font-black text-base shadow-sm">
              U
            </div>
            <div>
              <span className="font-extrabold text-sm text-white block leading-tight">
                BIENESTAR
              </span>
              <span className="text-[10px] text-emerald-200 uppercase tracking-wide">
                Universidad Simón Bolívar
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10"
            aria-label="Cerrar menú lateral"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links List */}
        <div className="overflow-y-auto p-4 space-y-1 grow">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-3 py-1">
            Secciones Principales
          </span>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                link.isEmergency
                  ? 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>{link.name}</span>
              {link.isEmergency ? (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white">
                  Urgencias
                </span>
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </a>
          ))}

          {/* Quick Action Buttons inside drawer */}
          <div className="pt-4 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block px-3 py-1">
              Accesos Rápidos
            </span>

            <button
              onClick={() => {
                onOpenPoster();
                setIsOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-xl border border-[#006837]/30 text-[#006837] dark:text-emerald-400 text-xs font-semibold flex items-center gap-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ver Afiche Oficial del Directorio</span>
            </button>

            <button
              onClick={() => {
                onOpenAppointment();
                setIsOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-xl text-white font-bold text-xs bg-[#006837] hover:bg-[#00552d] shadow-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Solicitar Orientación / Cita</span>
            </button>

            <a
              href="tel:3172163682"
              className="w-full py-2.5 px-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 text-xs font-bold flex items-center justify-center gap-2"
            >
              <ShieldAlert className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>Línea Amiga: 317 2163682</span>
            </a>
          </div>
        </div>

        {/* Drawer Footer with Social Channels */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2 text-center">
            Redes Sociales Oficiales
          </span>
          <div className="flex items-center justify-around">
            <a
              href="https://www.instagram.com/bienestarusb_bq/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-800 text-pink-500 shadow-xs hover:scale-110 transition-transform"
              title="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/bienestarusbbq/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-800 text-blue-600 shadow-xs hover:scale-110 transition-transform"
              title="Facebook"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@bienestarusb_bq/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-xs hover:scale-110 transition-transform"
              title="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
