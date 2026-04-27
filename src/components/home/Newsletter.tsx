import { Reveal } from "@/components/Reveal";
import { NEWSLETTER_DATA } from "@/constants";
import { useLanguage } from "@/i18n/LanguageContext";

export function Newsletter() {
  const { t } = useLanguage();
  
  return (
    <section id="newsletter" className="relative py-20 md:py-32 px-5 sm:px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139,47,78,0.08) 0%, rgba(232,180,184,0.04) 40%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal
          variant="scale"
          className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Corner accent brackets */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-rose-gold/20 rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-rose-gold/20 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-rose-gold/20 rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-rose-gold/20 rounded-br-2xl pointer-events-none" />

          <span className="block text-[10px] font-bold uppercase tracking-[0.5em] text-rose-gold mb-6">
            {t.newsletter.badge}
          </span>
          <h2
            className="font-display font-light leading-[0.95] tracking-tight text-ivory mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {t.newsletter.title}
            <br />
            <em className="shimmer-text not-italic italic font-light">{t.newsletter.titleEm}</em>
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
            {t.newsletter.desc}
          </p>
          <form onSubmit={(e) => e.preventDefault()} noValidate>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                name="email"
                aria-label="Email address"
                placeholder={t.newsletter.placeholder}
                className="flex-1 bg-surface-2 border border-border rounded-full px-6 py-4 text-sm text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-rose-gold transition-all duration-300"
              />
              <button
                type="submit"
                className="shine-btn whitespace-nowrap bg-primary text-primary-foreground font-bold text-[11px] uppercase tracking-[0.2em] rounded-full px-8 py-4 hover:bg-champagne transition-all duration-300 rose-gold-glow"
              >
                {t.newsletter.cta}
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground/60 mt-4 uppercase tracking-widest">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
