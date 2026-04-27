import { HERO_DATA } from "@/constants";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <img
        src={HERO_DATA.img}
        alt="Luxury beauty model with luminous glowing skin — Lumina Beauty"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      {/* Floating particles */}
      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-rose-gold animate-float"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${(i * 83) % 100}%`,
            top: `${(i * 47) % 100}%`,
            animationDelay: `${i * 0.4}s`,
            opacity: 0.5,
          }}
        />
      ))}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-5xl">
        <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-ivory/80 glass-card rounded-full px-4 sm:px-5 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-gentle-pulse" />{" "}
          {t.hero.badge}
        </span>
        <h1
          className="mt-6 sm:mt-8 font-display leading-[0.95] text-balance text-ivory rose-gold-text-glow"
          style={{ fontSize: "clamp(2.5rem, 10vw, 8rem)" }}
        >
          {t.hero.title}
          <br />
          <em className="shimmer-text not-italic font-light italic">{t.hero.titleEm}</em>
        </h1>
        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
          {t.hero.desc}
        </p>
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#products"
            className="shine-btn bg-primary text-primary-foreground text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] rounded-full px-6 sm:px-8 py-3 sm:py-4 hover:opacity-90 transition rose-gold-glow"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#products"
            className="glass-card text-ivory text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] rounded-full px-6 sm:px-8 py-3 sm:py-4 hover:bg-surface-2 transition"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2">
        {t.hero.scrollToExplore}
        <span className="w-px h-10 bg-gradient-to-b from-rose-gold to-transparent animate-scroll-indicator" />
      </div>
    </section>
  );
}
