import React from 'react';
import { 
  Share2, ExternalLink, Sparkles, Check, Copy, Heart, MessageCircle 
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import Reveal from './Reveal';

export default function SocialSection() {
  const [copiedHandle, setCopiedHandle] = React.useState(null);

  const socials = [
    {
      id: "instagram",
      name: "Instagram",
      handle: "@bienestarusb_bq",
      tagline: "Historias, reels, eventos y vida universitaria en vivo",
      url: "https://www.instagram.com/bienestarusb_bq/",
      icon: InstagramIcon,
      gradient: "from-pink-500 via-rose-500 to-amber-500",
      btnText: "Seguir en Instagram",
      stats: "+10K Comunidad",
      badge: "Oficial"
    },
    {
      id: "facebook",
      name: "Facebook",
      handle: "Bienestar Unisimon BAQ",
      tagline: "Transmisiones en vivo, álbumes de fotos y comunicados",
      url: "https://www.facebook.com/bienestarusbbq/?locale=es_LA",
      icon: FacebookIcon,
      gradient: "from-blue-600 to-indigo-700",
      btnText: "Ver Página en Facebook",
      stats: "Comunidad BAQ",
      badge: "Oficial"
    },
    {
      id: "tiktok",
      name: "TikTok",
      handle: "@bienestarusb_bq",
      tagline: "Tendencias, tips de estudio, retos saludables y comedia estudiantil",
      url: "https://www.tiktok.com/@bienestarusb_bq/",
      icon: TikTokIcon,
      gradient: "from-slate-900 via-neutral-900 to-zinc-950",
      btnText: "Seguir en TikTok",
      stats: "Videos Virales",
      badge: "Oficial"
    }
  ];

  const handleCopy = (handle) => {
    navigator.clipboard.writeText(handle);
    setCopiedHandle(handle);
    setTimeout(() => setCopiedHandle(null), 2500);
  };

  return (
    <section id="redes" className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900 transition-colors relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-4">
            <Share2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Comunidad Digital</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            SÍGUENOS EN NUESTRAS <span className="text-emerald-700 dark:text-emerald-400">REDES SOCIALES</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Conéctate con nosotros en Instagram, Facebook y TikTok. Entérate de convocatorias de becas, torneos deportivos, festivales de folclor, pausas activas y tips de bienestar.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Reveal key={social.id} className="h-full">
              <div
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 dark:border-slate-800 relative group overflow-hidden h-full"
              >
                {/* Top glow accent */}
                <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${social.gradient}`} />

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${social.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {social.stats}
                    </span>
                  </div>

                  {/* Title & Handle */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {social.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-sm font-bold text-emerald-600 dark:text-emerald-400">
                      {social.handle}
                    </span>
                    <button
                      onClick={() => handleCopy(social.handle)}
                      className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                      title="Copiar usuario"
                    >
                      {copiedHandle === social.handle ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {social.tagline}
                  </p>
                </div>

                {/* Follow Button */}
                <div>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r ${social.gradient} shadow-md hover:shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2`}
                  >
                    <span>{social.btnText}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
