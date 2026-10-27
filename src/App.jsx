import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import BuildingHeroHighlight from './components/BuildingHeroHighlight';
import DirectoryCards from './components/DirectoryCards';
import CodigoDorado from './components/CodigoDorado';
import CampusGallery from './components/CampusGallery';
import Locations from './components/Locations';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import PosterModal from './components/PosterModal';
import AreaDetailModal from './components/AreaDetailModal';
import QuickAppointmentModal from './components/QuickAppointmentModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('unisimon_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isPosterOpen, setIsPosterOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null);

  // Synchronous, instant theme toggling
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('unisimon_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('unisimon_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenAppointmentForArea = (area) => {
    setSelectedArea(area);
    setIsAppointmentOpen(true);
  };

  return (
    <>
      {/* Loading Animation Splash Screen */}
      <Preloader />

      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 selection:bg-emerald-600 selection:text-white">
        {/* 1. Official Header Banner with "Tu Universidad" & Universidad Simón Bolívar Logo */}
        <TopBanner />

        {/* 2. Responsive Navigation Bar with Mobile Left Drawer & Instant Dark Mode */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenPoster={() => setIsPosterOpen(true)}
          onOpenAppointment={() => {
            setSelectedArea(null);
            setIsAppointmentOpen(true);
          }}
        />

        {/* 3. High-Impact Image Carousel at Top (Changes every 5 seconds, phone-friendly swipe gestures) */}
        <main className="grow">
          <HeroCarousel />

          {/* 4. Building Architecture Hero Highlight with Wave Motif & Background */}
          <BuildingHeroHighlight 
            onOpenAppointment={() => {
              setSelectedArea(null);
              setIsAppointmentOpen(true);
            }} 
          />

          {/* 5. Directorio de Bienestar Universitario (5 Areas, Search, Copy, Call & WhatsApp) */}
          <DirectoryCards 
            onSelectArea={(area) => setSelectedArea(area)} 
          />

          {/* 6. Protocolo Código Dorado & Salud Mental (Líneas 315 3778669 y 317 2163682) */}
          <CodigoDorado />

          {/* 7. Galería de Fotos y Campañas de la Carpeta de Imágenes */}
          <CampusGallery />

          {/* 8. Sedes y Puntos de Atención (Casa de Bienestar, Coliseo, La Perla, Sede 3) */}
          <Locations />

          {/* 9. Redes Sociales Oficiales: Instagram, Facebook y TikTok */}
          <SocialSection />
        </main>

        {/* 10. Footer con Derechos de Autor, Leyes y Respaldo Institucional */}
        <Footer />

        {/* Interactive Modals */}
        <PosterModal
          isOpen={isPosterOpen}
          onClose={() => setIsPosterOpen(false)}
        />

        <AreaDetailModal
          area={selectedArea && !isAppointmentOpen ? selectedArea : null}
          onClose={() => setSelectedArea(null)}
          onOpenAppointment={handleOpenAppointmentForArea}
        />

        <QuickAppointmentModal
          isOpen={isAppointmentOpen}
          onClose={() => {
            setIsAppointmentOpen(false);
            setSelectedArea(null);
          }}
          preselectedArea={selectedArea}
        />
      </div>
    </>
  );
}
