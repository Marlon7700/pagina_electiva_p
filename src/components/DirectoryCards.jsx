import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Copy, Check, MessageSquare, 
  ExternalLink, Search, HeartPulse, Users, Dumbbell, 
  Palette, GraduationCap, ShieldCheck, Sparkles, Building2
} from 'lucide-react';
import { generalContact, directoryAreas } from '../data/directoryData';

export default function DirectoryCards({ onSelectArea }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const getAreaIcon = (iconName, className = "w-6 h-6") => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Dumbbell': return <Dumbbell className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      default: return <ShieldCheck className={className} />;
    }
  };

  const filteredAreas = directoryAreas.filter((area) => {
    const matchesFilter = selectedFilter === 'all' || area.id === selectedFilter;
    const query = searchTerm.toLowerCase();
    const matchesSearch = 
      area.name.toLowerCase().includes(query) ||
      area.shortDesc.toLowerCase().includes(query) ||
      area.email.toLowerCase().includes(query) ||
      area.phone.toLowerCase().includes(query) ||
      area.location.toLowerCase().includes(query) ||
      area.services.some(s => s.toLowerCase().includes(query));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="directorio" className="relative py-16 sm:py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      {/* Background Architectural Accent with subtle opacity */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/bienestar-building-bg.webp')` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-4">
            <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Directorio Oficial de Contactos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            DIRECTORIO DE <span className="text-emerald-700 dark:text-emerald-400">BIENESTAR UNIVERSITARIO</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            {generalContact.slogan}
          </p>

          <p className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 italic mt-2">
            "{generalContact.highlight}"
          </p>
        </div>

        {/* General Reception Contact Card Banner */}
        <div className="glass-card rounded-2xl p-6 mb-10 border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-white dark:via-slate-800/80 to-emerald-500/5 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-600/30">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  {generalContact.reception}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Atención General y Orientación al Usuario
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {generalContact.attentionHours}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">
              <a
                href={`mailto:${generalContact.email}`}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-emerald-500 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs hover:shadow transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>{generalContact.email}</span>
              </a>

              <a
                href="tel:3444333"
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md hover:shadow-emerald-600/30 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>PBX: {generalContact.pbx}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search Bar & Area Filter Buttons */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por área, teléfono, correo, servicio o palabra clave..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs text-sm sm:text-base transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 hover:text-slate-700"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Quick Filter Badges */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-start sm:justify-center no-scrollbar">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                selectedFilter === 'all'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              Todas las Áreas ({directoryAreas.length})
            </button>
            {directoryAreas.map((area) => (
              <button
                key={area.id}
                onClick={() => setSelectedFilter(area.id)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                  selectedFilter === area.id
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Cards Grid */}
        <div id="areas" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className={`glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border-t-4 transition-all ${area.accentBorder}`}
              style={{ borderTopColor: area.color }}
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md"
                    style={{ backgroundColor: area.color }}
                  >
                    {getAreaIcon(area.icon)}
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${area.badgeColor}`}>
                    {area.highlightTag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {area.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {area.shortDesc}
                </p>

                {/* Key Services List */}
                <div className="mb-5 bg-slate-50/70 dark:bg-slate-800/40 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Servicios Destacados
                  </span>
                  <ul className="space-y-1.5">
                    {area.services.slice(0, 3).map((svc, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: area.color }} />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Rows */}
                <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  {/* Email */}
                  <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <a 
                        href={`mailto:${area.email}`}
                        className="truncate font-semibold text-slate-700 dark:text-slate-200 hover:text-emerald-600"
                        title={area.email}
                      >
                        {area.email}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopy(area.email, area.email)}
                      className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      title="Copiar correo"
                    >
                      {copiedText === area.email ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/80">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <div>
                        <a 
                          href={`tel:${area.phone.replace(/\s+/g, '')}`}
                          className="font-bold text-slate-800 dark:text-slate-100 hover:text-emerald-600 block"
                        >
                          {area.phone}
                        </a>
                        <span className="text-[10px] text-slate-400 block">{area.phoneLabel}</span>
                      </div>
                    </div>
                    <a
                      href={`tel:${area.phone.replace(/\s+/g, '')}`}
                      className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-[10px] font-bold hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      Llamar
                    </a>
                  </div>

                  {/* WhatsApp if available */}
                  {area.whatsapp && (
                    <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="font-semibold text-emerald-800 dark:text-emerald-300">
                          {area.whatsappLabel || `WhatsApp: ${area.phone}`}
                        </span>
                      </div>
                      <a
                        href={`https://wa.me/${area.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[10px] font-bold hover:bg-emerald-700 transition-colors"
                      >
                        Chatear
                      </a>
                    </div>
                  )}

                  {/* Location */}
                  <div className="flex items-start gap-2 p-2 text-slate-500 dark:text-slate-400">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-700 dark:text-slate-200 block">
                        {area.location}
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        {area.locationDetail}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onSelectArea(area)}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all text-white shadow-sm hover:shadow"
                  style={{ backgroundColor: area.color }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Conocer más de {area.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredAreas.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-base mb-2">
              No se encontraron áreas o servicios para "{searchTerm}"
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedFilter('all'); }}
              className="text-emerald-600 dark:text-emerald-400 font-bold text-sm underline"
            >
              Ver todas las áreas
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
