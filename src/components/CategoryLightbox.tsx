import { X, ShoppingCart, Plus } from "lucide-react";
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
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-background/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] bg-surface border border-border rounded-3xl overflow-hidden shadow-2xl animate-scale-in flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-ivory hover:rotate-90 transition-all duration-300"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        {/* Header with category info */}
        <div className="relative h-32 md:h-40 overflow-hidden shrink-0">
          <SmartImage
            src={categoryImage}
            alt={category}
            width={1920}
            height={300}
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold">
                {productCount} {t.categories.products}
              </span>
              <h2 className="mt-1 font-display text-3xl md:text-4xl text-ivory">
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
                  <th className="text-left py-4 px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-normal">
                    Product
                  </th>
                  <th className="text-left py-4 px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-normal">
                    Description
                  </th>
                  <th className="text-right py-4 px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-normal">
                    Price
                  </th>
                  <th className="text-center py-4 px-6 text-xs uppercase tracking-[0.2em] text-muted-foreground font-normal">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((product, index) => (
                  <tr
                    key={`${product.slug}-${index}`}
                    className="border-b border-border hover:bg-background/50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-background">
                          <SmartImage
                            src={product.img}
                            alt={product.alt}
                            width={100}
                            height={100}
                            wrapperClassName="w-full h-full"
                            className="w-full h-full object-cover"
                          />
                          {product.badge && (
                            <span className="absolute top-1 left-1 text-[8px] uppercase tracking-wider bg-primary text-primary-foreground rounded px-1.5 py-0.5">
                              {product.badge}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display text-base text-ivory truncate">
                            {product.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">{product.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.desc}</p>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="font-display text-xl text-champagne">${product.price}</span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs uppercase tracking-wider"
                        aria-label={t.products.addToCart}
                      >
                        <Plus size={14} />
                        <span className="hidden lg:inline">Add</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden divide-y divide-border">
            {allProducts.map((product, index) => (
              <div
                key={`${product.slug}-${index}`}
                className="p-4 hover:bg-background/50 transition-colors duration-200"
              >
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-background">
                    <SmartImage
                      src={product.img}
                      alt={product.alt}
                      width={100}
                      height={100}
                      wrapperClassName="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                    {product.badge && (
                      <span className="absolute top-1 left-1 text-[8px] uppercase tracking-wider bg-primary text-primary-foreground rounded px-1.5 py-0.5">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base text-ivory line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {product.desc}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="font-display text-lg text-champagne">${product.price}</span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs uppercase tracking-wider"
                        aria-label={t.products.addToCart}
                      >
                        <ShoppingCart size={12} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
