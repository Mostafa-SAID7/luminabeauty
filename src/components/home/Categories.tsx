import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import catSkincare from "@/assets/cat-skincare.webp";
import catMakeup from "@/assets/cat-makeup.webp";
import catHair from "@/assets/cat-hair.webp";
import catBody from "@/assets/cat-body.webp";

const categories = [
  { img: catSkincare, count: 42, name: "Skincare", alt: "Lumina Beauty skincare collection — serums, creams and toners for radiant skin" },
  { img: catMakeup, count: 28, name: "Makeup", alt: "Lumina Beauty makeup collection — lip elixirs, bronzers and natural pigments" },
  { img: catHair, count: 19, name: "Hair Care", alt: "Lumina Beauty hair care collection — botanical shampoos and luminous treatments" },
  { img: catBody, count: 15, name: "Body Care", alt: "Lumina Beauty body care collection — natural lotions and nourishing oils" },
];

export function Categories() {
  return (
    <section className="relative py-20 md:py-32 px-5 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      <Reveal className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Shop by Category</span>
        <h2 className="mt-4 font-display text-ivory" style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}>Explore the <em className="shimmer-text not-italic italic font-light">Collection.</em></h2>
      </Reveal>
      <Reveal stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {categories.map((c) => (
          <a key={c.name} href="#products" className="product-card-hover group relative aspect-[3/4] rounded-3xl overflow-hidden block">
            <SmartImage src={c.img} alt={c.alt} width={1024} height={1280} wrapperClassName="absolute inset-0 w-full h-full" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold">{c.count} Products</span>
              <h3 className="mt-2 font-display text-3xl text-ivory">{c.name}</h3>
              <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-ivory transition inline-flex items-center gap-2">
                Shop <span aria-hidden>→</span>
              </span>
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}
