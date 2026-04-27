import { X, ShoppingCart } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Product } from "@/models";

interface ProductLightboxProps {
  product: Product;
  onClose: () => void;
}

export function ProductLightbox({ product, onClose }: ProductLightboxProps) {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const handleAddToCart = () => {
    addToCart({
      id: product.slug,
      name: product.name,
      category: product.category,
      price: product.price,
      img: product.img,
      slug: product.slug,
    });
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-surface border border-border rounded-3xl overflow-hidden shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-ivory hover:rotate-90 transition-all duration-300"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Image */}
          <div className="relative aspect-square md:aspect-auto bg-background">
            <SmartImage
              src={product.img}
              alt={product.alt}
              width={800}
              height={800}
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full px-4 py-2">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Details */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold">
                {product.category}
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-ivory leading-tight">
                {product.name}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{product.desc}</p>

              {/* Features */}
              <div className="mt-8 space-y-3">
                <h3 className="text-xs uppercase tracking-[0.3em] text-ivory">Key Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-gold mt-1">✦</span>
                    <span>Premium natural ingredients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-gold mt-1">✦</span>
                    <span>Dermatologically tested</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-gold mt-1">✦</span>
                    <span>Cruelty-free & vegan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-gold mt-1">✦</span>
                    <span>Suitable for all skin types</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    Price
                  </span>
                  <p className="mt-1 font-display text-4xl text-champagne">${product.price}</p>
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full shine-btn bg-primary text-primary-foreground text-sm uppercase tracking-[0.2em] rounded-full px-8 py-4 hover:opacity-90 transition-all duration-300 rose-gold-glow flex items-center justify-center gap-3"
              >
                <ShoppingCart size={18} />
                {t.products.addToCart}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
