import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { PRODUCTS } from "@/constants";

export function Products() {
  return (
    <section
      id="products"
      className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto"
    >
      <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Best Sellers</span>
        <h2
          className="mt-4 font-display text-ivory"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
        >
          Signature <em className="shimmer-text not-italic italic font-light">Collection.</em>
        </h2>
        <p className="mt-5 md:mt-6 text-sm md:text-base text-muted-foreground">
          Our most-loved formulas, trusted by thousands.
        </p>
      </Reveal>
      <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PRODUCTS.map((p) => (
          <article
            key={p.name}
            className="product-card-hover group relative bg-surface border border-border rounded-3xl overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-background">
              <SmartImage
                src={p.img}
                alt={p.alt}
                width={800}
                height={1024}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {p.badge && (
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full px-3 py-1.5">
                  {p.badge}
                </span>
              )}
              <button className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] glass-card rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100 transition text-ivory">
                Quick View
              </button>
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {p.category}
              </span>
              <h3 className="mt-2 font-display text-2xl text-ivory">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-display text-2xl text-champagne">${p.price}</span>
                <button className="shine-btn text-xs uppercase tracking-[0.2em] border border-border rounded-full px-4 py-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition text-ivory">
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
