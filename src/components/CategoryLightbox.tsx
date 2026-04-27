import { X, ShoppingCart } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/i18n/LanguageContext";
import { PRODUCTS } from "@/constants";

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

  // Filter products by category
  const categoryProducts = PRODUCTS.filter((p) => p.category === category);

  // Generate placeholder products if we need more to match the count
  const allProducts = [...categoryProducts];
  while (allProducts.length < productCount) {
    const template = categoryProducts[allProducts.length % categoryProducts.length];
    allProducts.push({
      ...template,
      name: `${template.name} ${Math.floor(allProducts.length / categoryProducts.length) + 1}`,
      slug: `${template.slug}-${allProducts.length}`,
    });
  }

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

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl bg-surface border border-border rounded-3xl overflow-hidden shadow-2xl animate-scale-in my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-ivory hover:rotate-90 transition-all duration-300"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Header with category image */}
        <div className="relative h-48 md:h-64 overflow-hidden">
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
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold">
                {productCount} {t.categories.products}
              </span>
              <h2 className="mt-2 font-display text-4xl md:text-5xl text-ivory">
                {categoryNames[category] || category}
              </h2>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="p-6 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {allProducts.map((product, index) => (
              <article
                key={`${product.slug}-${index}`}
                className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-rose-gold/30 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                  <SmartImage
                    src={product.img}
                    alt={product.alt}
                    width={400}
                    height={533}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.2em] bg-primary text-primary-foreground rounded-full px-2 py-1">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base md:text-lg text-ivory line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{product.desc}</p>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="font-display text-lg text-champagne">${product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                      aria-label={t.products.addToCart}
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
