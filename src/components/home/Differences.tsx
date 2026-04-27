import { Reveal } from "@/components/Reveal";

export function Differences() {
  const items = [
    {
      t: "Natural Ingredients",
      d: "100% botanically sourced actives. No parabens, sulfates, or synthetic fragrances. Just pure, effective nature.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M9.5 3l1.2 3.3L14 7.5l-3.3 1.2L9.5 12 8.3 8.7 5 7.5l3.3-1.2L9.5 3z" />
          <path d="M17 13l.8 2.2L20 16l-2.2.8L17 19l-.8-2.2L14 16l2.2-.8L17 13z" />
          <path d="M5 16l.6 1.6L7.2 18l-1.6.6L5 20l-.6-1.4L3 18l1.6-.4L5 16z" />
        </svg>
      ),
    },
    {
      t: "Cruelty-Free",
      d: "Every Lumina formula is certified cruelty-free and vegan. Beauty that respects all life.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      t: "Dermatologist Tested",
      d: "Clinically validated by independent dermatologists. Safe for all skin types including sensitive.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      t: "Visible Results",
      d: "91% of users report visibly brighter skin within 14 days. Results you can see, not just feel.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.3l6.1-.7L12 3z" />
        </svg>
      ),
    },
  ];
  return (
    <section className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <Reveal className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Why Lumina</span>
        <h2 className="mt-5 md:mt-6 font-display text-ivory leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}>
          The Lumina<br />Difference.
        </h2>
      </Reveal>
      <Reveal stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.t} className="glass-card rounded-3xl p-8 transition-all duration-500 hover:rose-gold-glow hover:-translate-y-1 group">
            <div className="w-14 h-14 rounded-2xl bg-surface-2 border border-border flex items-center justify-center text-rose-gold group-hover:scale-110 transition-transform">
              {it.icon}
            </div>
            <h3 className="mt-8 font-display text-2xl text-ivory">{it.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
