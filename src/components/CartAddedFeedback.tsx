import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ShoppingCart, X } from "lucide-react";
import { SmartImage } from "./SmartImage";
import { useCart } from "@/context/CartContext";

/**
 * CartAddedFeedback
 * Persistent bottom-center status card showing the last added product.
 * - Has an X button to dismiss it until the next item is added.
 * - Automatically hides when the cart sidebar is open (no overlap).
 * - Reappears whenever a new item is added to the cart.
 */
export function CartAddedFeedback() {
  const { lastAddedItem, items, totalItems, setIsCartOpen, isCartOpen } = useCart();
  const [dismissed, setDismissed] = useState(false);

  // Track the last item id that triggered the card so we can re-show on new adds
  const lastItemKeyRef = useRef<string | null>(null);

  // Compute a stable key for the most-recently-added item
  const displayItem =
    lastAddedItem ?? (items.length > 0 ? items[items.length - 1] : null);
  const currentKey = displayItem
    ? `${displayItem.id}-${totalItems}`
    : null;

  // Re-show the card whenever a brand-new item/quantity change arrives
  useEffect(() => {
    if (currentKey && currentKey !== lastItemKeyRef.current) {
      lastItemKeyRef.current = currentKey;
      setDismissed(false);
    }
  }, [currentKey]);

  // Nothing to show
  if (!displayItem || totalItems === 0) return null;

  // Hide while cart sidebar is open (avoid overlap)
  if (isCartOpen) return null;

  // User dismissed the card
  if (dismissed) return null;

  return createPortal(
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-2rem)] max-w-sm animate-fade-in">
      <div className="bg-surface border border-border rounded-2xl p-4 shadow-[0_8px_40px_rgba(0,0,0,0.55)] flex gap-4 items-center relative">

        {/* Close (X) button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-2 right-2 p-1.5 rounded-full text-muted-foreground hover:text-ivory hover:bg-background transition-all duration-200"
          aria-label="Dismiss notification"
        >
          <X size={14} />
        </button>

        {/* Product Image */}
        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-background border border-border/50">
          <SmartImage
            src={displayItem.img}
            alt={displayItem.name}
            width={80}
            height={80}
            wrapperClassName="w-full h-full"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 pr-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {displayItem.category}
          </p>
          <h3 className="font-display text-base text-ivory leading-tight line-clamp-1 mt-0.5">
            {displayItem.name}
          </h3>
          <span className="font-display text-champagne text-base mt-1 block">
            ${displayItem.price}
          </span>
        </div>

        {/* View Cart CTA */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="shrink-0 flex flex-col items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] text-rose-gold hover:text-ivory border border-rose-gold/40 hover:bg-primary hover:border-primary rounded-xl px-3 py-2.5 transition-all duration-300"
          aria-label="Open cart"
        >
          <div className="relative">
            <ShoppingCart size={18} />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground rounded-full w-4 h-4 text-[9px] font-bold flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <span>Cart</span>
        </button>

      </div>
    </div>,
    document.body
  );
}
