import { Reveal } from "@/components/Reveal";
import { DIFFERENCES } from "@/constants";
import { Sparkles, Heart, ShieldCheck, Star } from "lucide-react";

const ICON_MAP = {
  Sparkles: Sparkles,
  Heart: Heart,
  ShieldCheck: ShieldCheck,
  Star: Star,
};

export function Differences() {
  return (
    <section className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <Reveal className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Why Lumina</span>
        <h2
          className="mt-5 md:mt-6 font-display text-ivory leading-[0.95]"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
        >
          The Lumina
          <br />
          Difference.
        </h2>
      </Reveal>
      <Reveal stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIFFERENCES.map((it) => {
          const Icon = ICON_MAP[it.icon as keyof typeof ICON_MAP];
          return (
            <div
              key={it.t}
              className="glass-card rounded-3xl p-8 transition-all duration-500 hover:rose-gold-glow hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-border flex items-center justify-center text-rose-gold group-hover:scale-110 transition-transform">
                {Icon && <Icon className="w-6 h-6" />}
              </div>
              <h3 className="mt-8 font-display text-2xl text-ivory">{it.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
