import React from 'react';
import { 
  ShieldCheck, Phone, Mail, MapPin, ExternalLink, 
  Heart, ArrowUp, Sparkles, Building2, CheckCircle2 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { generalContact } from '../data/directoryData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#005a30] text-emerald-50 border-t-4 border-[#004223] transition-colors relative z-20">
      {/* 1. Top Call-to-Action Banner with Exact Institutional Logo Green (#006837) */}
      <div className="bg-[#006837] border-b border-[#004d28] py-7 px-4 text-white shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#006837] flex items-center justify-center font-black text-2xl shadow-md shrink-0">
              U
            </div>
            <div>
              <h4 className="font-extrabold text-white text-lg sm:text-xl tracking-tight">
                ¿Necesitas apoyo o tienes alguna duda?
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100 font-medium mt-0.5">
                Estamos a un mensaje o llamada de distancia. ¡Cuando lo necesites!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="tel:3172163682"
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all"
              title="Llamada de urgencia a Línea Amiga"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Línea Amiga: 317 2163682</span>
            </a>

            <a
              href={`mailto:${generalContact.email}`}
              className="px-5 py-2.5 rounded-xl bg-[#004825] hover:bg-[#00381d] text-white font-bold text-xs sm:text-sm flex items-center gap-2 border border-emerald-400/40 shadow-sm transition-all"
              title="Enviar correo institucional a Bienestar"
            >
              <Mail className="w-4 h-4 text-emerald-300" />
              <span>{generalContact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body: 4 Columns in Rich Green with Pristine Typography */}
      <div className="bg-[#004f2a] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Col 1: Institutional Identity & Logo */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/assets/logo-unisimon-white.webp" 
                  alt="Universidad Simón Bolívar" 
                  className="h-10 w-auto filter brightness-0 invert"
                />
              </div>

              <div className="pt-1">
                <span className="font-extrabold text-base text-white tracking-tight block">
                  BIENESTAR UNIVERSITARIO
                </span>
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                  Universidad Simón Bolívar
                </span>
              </div>

              <p className="text-xs text-emerald-100/90 leading-relaxed">
                Comprometidos con el desarrollo integral, la salud física y mental, la cultura, el deporte y el éxito académico de toda la comunidad bolivariana.
              </p>

              <div className="pt-2 text-xs text-emerald-200/90 space-y-1">
                <p className="font-semibold text-white">Barranquilla y Cúcuta - Colombia</p>
                <p className="text-amber-300 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Vigilada Mineducación</span>
                </p>
              </div>
            </div>

            {/* Col 2: Áreas de Atención */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Áreas de Atención
              </h4>
              <ul className="space-y-2 text-xs text-emerald-100">
                <li>
                  <a href="#directorio" className="hover:text-amber-300 transition-colors block py-0.5">
                    • Salud Integral (Medicina y Enfermería)
                  </a>
                </li>
                <li>
                  <a href="#directorio" className="hover:text-amber-300 transition-colors block py-0.5">
                    • Desarrollo Humano (Psicología y Talleres)
                  </a>
                </li>
                <li>
                  <a href="#directorio" className="hover:text-amber-300 transition-colors block py-0.5">
                    • Actividad Física, Recreación y Deporte
                  </a>
                </li>
                <li>
                  <a href="#directorio" className="hover:text-amber-300 transition-colors block py-0.5">
                    • Expresión Cultural y Artística (La Perla)
                  </a>
                </li>
                <li>
                  <a href="#directorio" className="hover:text-amber-300 transition-colors block py-0.5">
                    • Permanencia y Desarrollo Estudiantil
                  </a>
                </li>
                <li>
                  <a href="#codigo-dorado" className="text-amber-300 font-bold hover:underline block pt-1">
                    ★ Ruta Código Dorado (Salud Mental)
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Sedes en Barranquilla */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Sedes en Barranquilla
              </h4>
              <ul className="space-y-3 text-xs text-emerald-100">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Casa de Bienestar (Sede 2)</span>
                    <span className="text-emerald-200">Carrera 54 No. 64 - 223</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Coliseo Eugenio Bolívar (Sede 1)</span>
                    <span className="text-emerald-200">Carrera 54 No. 59 - 102</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Casa de la Cultura La Perla</span>
                    <span className="text-emerald-200">Calle 68 No. 54 - 56</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5 pt-1">
                  <Phone className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">PBX: 3444333 Ext. 1857 / 168</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Redes Sociales Oficiales */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Redes Sociales
              </h4>
              <p className="text-xs text-emerald-100 mb-3.5 leading-relaxed">
                Síguenos en nuestras cuentas oficiales para enterarte de eventos, torneos y convocatorias:
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/bienestarusb_bq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#004022] hover:bg-[#00341c] text-xs text-white border border-emerald-600/40 hover:border-amber-400 transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-300 shrink-0" />
                  <span className="truncate">Instagram: <strong>@bienestarusb_bq</strong></span>
                </a>

                <a
                  href="https://www.facebook.com/bienestarusbbq/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#004022] hover:bg-[#00341c] text-xs text-white border border-emerald-600/40 hover:border-amber-400 transition-all shadow-xs"
                >
                  <FacebookIcon className="w-4 h-4 text-blue-300 shrink-0" />
                  <span className="truncate">Facebook: <strong>Bienestar Unisimon BAQ</strong></span>
                </a>

                <a
                  href="https://www.tiktok.com/@bienestarusb_bq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#004022] hover:bg-[#00341c] text-xs text-white border border-emerald-600/40 hover:border-amber-400 transition-all shadow-xs"
                >
                  <TikTokIcon className="w-4 h-4 text-emerald-200 shrink-0" />
                  <span className="truncate">TikTok: <strong>@bienestarusb_bq</strong></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Legal & Copyright Section in Deep Green (#003d1f) */}
      <div className="bg-[#003d1f] py-6 px-4 border-t border-emerald-700/50 text-xs text-emerald-200/90">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-bold text-white text-xs sm:text-sm">
              © {currentYear} Universidad Simón Bolívar. Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-emerald-200/80 leading-relaxed max-w-3xl">
              Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional. Personería Jurídica Resolución 330 del 1 de diciembre de 1972. Acreditación Institucional en Alta Calidad.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 px-3.5 rounded-xl bg-[#005a30] hover:bg-amber-400 hover:text-slate-950 text-white font-bold text-xs transition-colors shadow-md flex items-center gap-1.5 shrink-0"
            title="Volver al inicio de la página"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Subir</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-emerald-800/60 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-[11px] text-emerald-300/80">
          <span className="hover:text-white cursor-pointer transition-colors">Política de Tratamiento de Datos Personales (Ley 1581 de 2012)</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition-colors">Términos y Condiciones</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition-colors">Canal PQRSF</span>
          <span>•</span>
          <span className="hover:text-white cursor-pointer transition-colors">Acreditación Multicampus</span>
        </div>
      </div>
    </footer>
  );
}
