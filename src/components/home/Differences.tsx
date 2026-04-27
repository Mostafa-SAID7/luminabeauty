import { Reveal } from "@/components/Reveal";
import { DIFFERENCES } from "@/constants";
import { Sparkles, Heart, ShieldCheck, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ICON_MAP = {
  Sparkles: Sparkles,
  Heart: Heart,
  ShieldCheck: ShieldCheck,
  Star: Star,
};

export function Differences() {
  const { t } = useLanguage();
  
  const items = [
    { icon: "Sparkles", title: t.differences.natural.title, desc: t.differences.natural.desc },
    { icon: "Heart", title: t.differences.crueltyFree.title, desc: t.differences.crueltyFree.desc },
    { icon: "ShieldCheck", title: t.differences.tested.title, desc: t.differences.tested.desc },
    { icon: "Star", title: t.differences.results.title, desc: t.differences.results.desc },
  ];
  
  return (
    <section className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <Reveal className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">{t.differences.badge}</span>
        <h2
          className="mt-5 md:mt-6 font-display text-ivory leading-[0.95]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
        >
          {t.differences.title}
          <br />
          <em className="shimmer-text not-italic italic font-light">{t.differences.titleEm}</em>
        </h2>
      </Reveal>
      <Reveal stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => {
          const Icon = ICON_MAP[it.icon as keyof typeof ICON_MAP];
          return (
            <div
              key={it.title}
              className="glass-card rounded-3xl p-8 transition-all duration-500 hover:rose-gold-glow hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-border flex items-center justify-center text-rose-gold group-hover:scale-110 transition-transform">
                {Icon && <Icon className="w-6 h-6" />}
              </div>
              <h3 className="mt-8 font-display text-2xl text-ivory">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
