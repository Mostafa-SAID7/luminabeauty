import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { STORY_DATA } from "@/constants";
import { useLanguage } from "@/i18n/LanguageContext";

export function Story() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-full max-w-[500px] h-[300px] sm:h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,180,184,0.04) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
        <Reveal variant="left" className="lg:col-span-5 relative">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden group">
            <Reveal variant="zoom" as="div" className="w-full h-full">
              <SmartImage
                src={STORY_DATA.img}
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
              {t.story.quote}
            </p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={150} className="lg:col-span-7">
          <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold font-bold">
            {t.story.badge}
          </span>
          <h2
            className="mt-5 font-display text-balance leading-[0.95] text-ivory font-light"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
          >
            {t.story.title}
            <br />
            {t.story.titleBr}
          </h2>
          <p className="mt-8 text-muted-foreground leading-relaxed max-w-xl font-light">
            {t.story.desc}
          </p>
          <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-6 border-t border-border pt-8 md:pt-10">
            <div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-rose-gold">
                {STORY_DATA.stats[0][0]}
              </div>
              <div className="mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {t.story.stats.years}
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-rose-gold">
                {STORY_DATA.stats[1][0]}
              </div>
              <div className="mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {t.story.stats.satisfaction}
              </div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-rose-gold">
                {STORY_DATA.stats[2][0]}
              </div>
              <div className="mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                {t.story.stats.natural}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
