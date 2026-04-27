import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { TESTIMONIAL_DATA } from "@/constants";
import { useLanguage } from "@/i18n/LanguageContext";

export function Testimonial() {
  const { t } = useLanguage();
  
  return (
    <section className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-5xl mx-auto text-center">
      <Reveal>
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">{t.testimonial.badge}</span>
        <h2
          className="mt-4 font-display text-ivory"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
        >
          {t.testimonial.title} <em className="shimmer-text not-italic italic font-light">{t.testimonial.titleEm}</em>
        </h2>
      </Reveal>
      <Reveal
        variant="scale"
        delay={120}
        className="mt-12 md:mt-16 relative glass-card rounded-3xl p-8 sm:p-10 md:p-12 rose-gold-glow"
      >
        <span className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 font-display text-7xl sm:text-9xl text-rose-gold leading-none">
          "
        </span>
        <SmartImage
          src={TESTIMONIAL_DATA.img}
          alt={`${TESTIMONIAL_DATA.author}, verified Lumina Beauty customer from ${TESTIMONIAL_DATA.location}`}
          width={800}
          height={800}
          wrapperClassName="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full ring-2 ring-rose-gold"
          className="w-full h-full object-cover"
        />
        <p
          className="mt-6 sm:mt-8 font-display italic text-balance leading-snug text-ivory"
          style={{ fontSize: "clamp(1.125rem, 3vw, 1.875rem)" }}
        >
          {t.testimonial.quote}
        </p>
        <div className="mt-6 sm:mt-8">
          <div className="font-display text-lg sm:text-xl text-ivory">
            {t.testimonial.author}
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
            {t.testimonial.location}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
