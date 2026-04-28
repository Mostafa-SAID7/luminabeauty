import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ShoppingCart, Star, Shield, Truck, RotateCcw } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Product } from "@/models";
import { useScrollLock } from "@/hooks/useScrollLock";

interface ProductLightboxProps {
  product: Product;
  onClose: () => void;
}

export function ProductLightbox({ product, onClose }: ProductLightboxProps) {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while modal is mounted
  useScrollLock(true);

  useEffect(() => {
    if (modalRef.current) modalRef.current.focus();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      img: product.img,
      slug: product.slug,
    });
    onClose();
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[10005] flex items-center justify-center p-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full h-[100dvh] md:h-auto md:max-h-[90vh] max-w-5xl bg-surface border-0 md:border border-border md:rounded-3xl overflow-hidden shadow-2xl animate-scale-in flex flex-col focus:outline-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[10006] p-2 rounded-full bg-surface-2 border border-border shadow-xl text-muted-foreground hover:text-ivory transition-all hover:rotate-90 group"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2 gap-0 overflow-y-auto flex-1">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-background overflow-hidden">
            <SmartImage
              src={product.img}
              alt={product.alt}
              width={1000}
              height={1000}
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full px-4 py-2 font-bold shadow-lg">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details Section */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold font-bold">
                {product.category}
              </span>
              <h2 id="product-title" className="mt-4 font-display text-3xl md:text-5xl text-ivory leading-tight">
                {product.name}
              </h2>
              
              {/* Ratings and Reviews */}
              <div className="mt-4 flex items-center gap-4">
                <div className="flex text-rose-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">(4.8 / 5.0)</span>
              </div>

              <p className="mt-6 text-muted-foreground leading-relaxed">
                {product.desc}. Designed with clean, high-performance ingredients to deliver visible results while maintaining your skin's natural balance.
              </p>

              <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-rose-gold">
                    <Shield size={16} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-medium">Dermatologically Tested</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-rose-gold">
                    <RotateCcw size={16} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-medium">100% Vegan & Cruelty-Free</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-2 border border-border flex items-center justify-center text-rose-gold">
                    <Truck size={16} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-medium">Free Global Shipping</span>
                </li>
              </ul>
            </div>

            {/* Price and CTA */}
            <div className="mt-auto pt-8 border-t border-border">
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
    </div>,
    document.body
  );
}
