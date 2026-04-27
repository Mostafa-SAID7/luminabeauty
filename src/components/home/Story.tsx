import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import storyImg from "@/assets/story.webp";

export function Story() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,180,184,0.04) 0%, transparent 70%)" }} aria-hidden />
      <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
        <Reveal variant="left" className="lg:col-span-5 relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden group">
            <Reveal variant="zoom" as="div" className="w-full h-full">
              <SmartImage
                src={storyImg}
                alt="Founder of Lumina Beauty — elegant woman with luminous, glowing skin in warm golden light"
                width={1024}
                height={1365}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover grayscale-[0.2] sepia-[0.1] group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-[1.03] transition-all duration-1000"
              />
            </Reveal>
          </div>
          <div className="absolute -bottom-8 -right-8 hidden md:block max-w-xs glass-card rounded-2xl p-6 rose-gold-glow">
            <p className="font-display italic text-lg leading-snug text-ivory">
              "Beauty is not about perfection. It's about confidence in your own luminous skin."
            </p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={150} className="lg:col-span-7">
          <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold font-bold">Our Story</span>
          <h2 className="mt-5 font-display text-balance leading-[0.95] text-ivory font-light" style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}>
            Born from Nature,<br />Refined by Science.
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed max-w-xl font-light">
            Lumina Beauty was founded on a singular belief: that the most powerful beauty ingredients are found in nature. Every formula begins in our botanical laboratories, where ancient remedies meet modern dermatology to create products that don't just enhance your beauty — they reveal it.
          </p>
          <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-6 border-t border-border pt-8 md:pt-10">
            {[["12+", "Years of Expertise"], ["97%", "Customer Satisfaction"], ["100%", "Natural Ingredients"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-rose-gold">{n}</div>
                <div className="mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
