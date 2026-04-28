import { useMemo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ShoppingCart, Plus } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/i18n/LanguageContext";
import { PRODUCTS } from "@/constants";
import { useScrollLock } from "@/hooks/useScrollLock";

interface CategoryLightboxProps {
  category: string;
  categoryImage: string;
  productCount: number;
  onClose: () => void;
}

export function CategoryLightbox({
  category,
  categoryImage,
  productCount,
  onClose,
}: CategoryLightboxProps) {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while lightbox is mounted
  useScrollLock(true);

  useEffect(() => {
    if (modalRef.current) modalRef.current.focus();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Memoize products generation for better performance
  const allProducts = useMemo(() => {
    // Filter products by category
    const categoryProducts = PRODUCTS.filter((p) => p.category === category);
    
    // Use the first product as a fallback template if this category has no real products yet
    const templateSource = categoryProducts.length > 0 ? categoryProducts : [PRODUCTS[0]];

    // Generate placeholder products if we need more to match the count
    const products = [...categoryProducts];
    while (products.length < productCount) {
      const template = templateSource[products.length % templateSource.length];
      products.push({
        ...template,
        name: `${category} Item ${products.length + 1}`,
        category: category,
        slug: `${template.slug}-${category.toLowerCase().replace(/\s+/g, '-')}-${products.length}`,
      });
    }
    return products;
  }, [category, productCount]);

  const handleAddToCart = (product: (typeof PRODUCTS)[0]) => {
    addToCart({
      id: product.slug,
      name: product.name,
      category: product.category,
      price: product.price,
      img: product.img,
      slug: product.slug,
    });
  };

  const categoryNames: Record<string, string> = {
    Skincare: t.categories.items.skincare,
    Makeup: t.categories.items.makeup,
    "Hair Care": t.categories.items.haircare,
    "Body Care": t.categories.items.bodycare,
  };

  return createPortal(
    <div 
      className="fixed inset-0 z-[10005] flex items-center justify-center p-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-title"
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
        className="relative w-full h-[100dvh] md:h-auto max-w-6xl md:max-h-[90vh] bg-surface border-0 md:border border-border md:rounded-3xl overflow-hidden shadow-2xl animate-scale-in flex flex-col focus:outline-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[10006] p-2 rounded-full bg-surface-2 border border-border shadow-xl text-muted-foreground hover:text-ivory transition-all hover:rotate-90 group"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Header with category info */}
        <div className="relative h-40 md:h-56 overflow-hidden shrink-0">
          <SmartImage
            src={categoryImage}
            alt={category}
            width={1920}
            height={400}
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold font-bold">
                {productCount} {t.categories.products}
              </span>
              <h2 id="category-title" className="mt-2 font-display text-4xl md:text-6xl text-ivory leading-tight">
                {categoryNames[category] || category}
              </h2>
            </div>
          </div>
        </div>

        {/* Table Container - Scrollable */}
        <div className="flex-1 overflow-auto">
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead className="sticky top-0 bg-surface-2 border-b border-border z-10">
                <tr>
                  <th className="text-left py-6 px-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                    Product
                  </th>
                  <th className="text-left py-6 px-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                    Description
                  </th>
                  <th className="text-right py-6 px-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                    Price
                  </th>
                  <th className="text-center py-6 px-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                {allProducts.map((product, index) => (
                  <tr
                    key={`${product.slug}-${index}`}
                    className="group hover:bg-background/40 transition-colors duration-300"
                  >
                    <td className="py-6 px-10">
                      <div className="flex items-center gap-6">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-background border border-border group-hover:border-rose-gold/30 transition-colors">
                          <SmartImage
                            src={product.img}
                            alt={product.alt}
                            width={100}
                            height={100}
                            wrapperClassName="w-full h-full"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {product.badge && (
                            <span className="absolute top-1.5 left-1.5 text-[8px] uppercase tracking-wider bg-primary text-primary-foreground rounded-full px-2 py-0.5 font-bold">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg text-ivory group-hover:text-rose-gold transition-colors truncate">
                            {product.name}
                          </h3>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                            {product.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 px-10">
                      <p className="text-sm text-muted-foreground line-clamp-2 max-w-sm leading-relaxed">
                        {product.desc}
                      </p>
                    </td>
                    <td className="py-6 px-10 text-right">
                      <span className="font-display text-2xl text-champagne">${product.price}</span>
                    </td>
                    <td className="py-6 px-10 text-center">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border text-ivory hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 text-[10px] uppercase tracking-[0.2em] font-bold rose-gold-glow-hover"
                        aria-label={t.products.addToCart}
                      >
                        <Plus size={14} />
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-border/50">
            {allProducts.map((product, index) => (
              <div
                key={`${product.slug}-${index}`}
                className="p-6 hover:bg-background/40 transition-colors duration-300"
              >
                <div className="flex gap-6">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 bg-background border border-border">
                    <SmartImage
                      src={product.img}
                      alt={product.alt}
                      width={120}
                      height={120}
                      wrapperClassName="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                    {product.badge && (
                      <span className="absolute top-1.5 left-1.5 text-[8px] uppercase tracking-wider bg-primary text-primary-foreground rounded-full px-2 py-0.5 font-bold">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-ivory truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                      {product.desc}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-display text-xl text-champagne">${product.price}</span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-[10px] uppercase tracking-wider font-bold"
                        aria-label={t.products.addToCart}
                      >
                        <ShoppingCart size={14} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-6 border-t border-border bg-surface-2 text-center shrink-0">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium">
            Lumina Beauty • Luxury Natural Skincare • Clean Beauty
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
