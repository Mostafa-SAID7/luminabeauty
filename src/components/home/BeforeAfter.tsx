import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { BEFORE_AFTER_DATA } from "@/constants";
import { useLanguage } from "@/i18n/LanguageContext";

export function BeforeAfter() {
  const { t } = useLanguage();
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const updateFromX = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(95, Math.max(5, p)));
  }, []);

  useEffect(() => {
    const onUp = () => setDragging(false);
    window.addEventListener("mouseup", onUp);
    return () => window.removeEventListener("mouseup", onUp);
  }, []);

  return (
    <section
      id="results"
      className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-6xl mx-auto"
    >
      <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">{t.beforeAfter.badge}</span>
        <h2
          className="mt-4 font-display text-ivory"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
        >
          {t.beforeAfter.title}{" "}
          <em className="shimmer-text not-italic italic font-light">{t.beforeAfter.titleEm}</em>
        </h2>
        <p className="mt-5 md:mt-6 text-sm md:text-base text-muted-foreground">
          {t.beforeAfter.desc}
        </p>
      </Reveal>
      <Reveal variant="scale">
        <div
          ref={ref}
          className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-3xl overflow-hidden rose-gold-glow select-none cursor-ew-resize"
          onMouseDown={(e) => {
            setDragging(true);
            updateFromX(e.clientX);
          }}
          onMouseMove={(e) => {
            if (dragging) updateFromX(e.clientX);
          }}
          onTouchStart={(e) => {
            setDragging(true);
            updateFromX(e.touches[0].clientX);
          }}
          onTouchMove={(e) => updateFromX(e.touches[0].clientX)}
          onTouchEnd={() => setDragging(false)}
        >
          <img
            src={BEFORE_AFTER_DATA.after}
            alt="Lumina Radiance Serum after 14 days — visible glow and even skin tone"
            loading="lazy"
            width={1024}
            height={1280}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${pos}%` }}
          >
            <img
              src={BEFORE_AFTER_DATA.before}
              alt="Skin before using Lumina Radiance Serum — uneven tone and dullness"
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute inset-0 h-full object-cover"
              style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
            />
          </div>
          <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] glass-card rounded-full px-4 py-2 text-ivory pointer-events-none">
            Drag to Compare
          </span>
          <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] glass-card rounded-full px-4 py-2 text-ivory pointer-events-none">
            {t.beforeAfter.before}
          </span>
          <span className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground rounded-full px-4 py-2 pointer-events-none">
            {t.beforeAfter.after}
          </span>
          <div
            className="absolute top-0 bottom-0 w-px bg-ivory/80 pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center rose-gold-glow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
              </svg>
            </div>
          </div>
        </div>
      </Reveal>
      <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {t.beforeAfter.product}
      </p>
    </section>
  );
}
