import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  X,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  Shield,
} from "lucide-react";
import { SmartImage } from "./SmartImage";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/i18n/LanguageContext";
import { useScrollLock } from "@/hooks/useScrollLock";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

type CheckoutStep = "cart" | "payment" | "confirmation";

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { t } = useLanguage();
  const { items, subtotal, totalItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("cart");
  const [orderNumber, setOrderNumber] = useState("");
  const [mounted, setMounted] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll lock via shared counter hook — safe with other open modals
  useScrollLock(isOpen);

  const handleClose = useCallback(() => {
    if (currentStep === "confirmation") {
      clearCart();
      setCurrentStep("cart");
    }
    onClose();
  }, [currentStep, clearCart, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    if (sidebarRef.current) sidebarRef.current.focus();
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, handleClose]);

  if (!isOpen || !mounted) return null;

  const handleCompleteOrder = () => {
    const orderNum = `LB${Date.now().toString().slice(-8)}`;
    setOrderNumber(orderNum);
    setCurrentStep("confirmation");
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[10010]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        tabIndex={-1}
        className="absolute top-0 right-0 h-[100dvh] w-full max-w-md bg-surface border-l border-border flex flex-col shadow-2xl animate-slide-in-right focus:outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            {currentStep === "cart" && (
              <>
                <ShoppingCart size={24} className="text-rose-gold" />
                <h2 id="cart-title" className="font-display text-2xl text-ivory">
                  {t.cart.title}
                </h2>
                {totalItems > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </>
            )}
            {currentStep === "payment" && (
              <>
                <button
                  onClick={() => setCurrentStep("cart")}
                  className="p-1 -ml-1 text-muted-foreground hover:text-ivory transition-colors group"
                >
                  <ArrowLeft
                    size={20}
                    className="group-hover:-translate-x-1 transition-transform"
                  />
                </button>
                <h2 id="cart-title" className="font-display text-2xl text-ivory">
                  Payment
                </h2>
              </>
            )}
            {currentStep === "confirmation" && (
              <>
                <CheckCircle size={24} className="text-primary" />
                <h2 id="cart-title" className="font-display text-2xl text-ivory">
                  Order Confirmed
                </h2>
              </>
            )}
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-background transition-all text-muted-foreground hover:text-ivory hover:rotate-90"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-thin">
          {currentStep === "cart" && (
            <div className="p-6 h-full flex flex-col animate-fade-in">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-surface-2 flex items-center justify-center mb-6">
                    <ShoppingCart size={32} className="text-muted-foreground opacity-30" />
                  </div>
                  <p className="text-lg text-ivory">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
                    Discover our collection and find your perfect match
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 text-xs uppercase tracking-[0.2em] text-rose-gold hover:text-ivory transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group bg-background border border-border rounded-2xl p-4 hover:border-rose-gold/30 transition-all duration-300"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-surface border border-border/50">
                          <SmartImage
                            src={item.img}
                            alt={item.name}
                            width={100}
                            height={100}
                            wrapperClassName="w-full h-full"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-base text-ivory line-clamp-1 group-hover:text-rose-gold transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                            {item.category}
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, Math.max(1, item.qty - 1))}
                                className="w-7 h-7 rounded-full bg-surface border border-border hover:border-rose-gold transition-colors flex items-center justify-center text-muted-foreground hover:text-ivory"
                              >
                                <Minus size={10} />
                              </button>
                              <span className="text-ivory w-6 text-center text-sm font-medium">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.qty + 1)}
                                className="w-7 h-7 rounded-full bg-surface border border-border hover:border-rose-gold transition-colors flex items-center justify-center text-muted-foreground hover:text-ivory"
                              >
                                <Plus size={10} />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          ${item.price} × {item.qty}
                        </span>
                        <span className="font-display text-lg text-champagne">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentStep === "payment" && (
            <div className="p-6 space-y-6 animate-slide-in-right">
              <div className="bg-surface-2/50 rounded-2xl p-6 border border-border">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-widest text-ivory">Card Details</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-5 bg-muted-foreground/20 rounded" />
                    <div className="w-8 h-5 bg-muted-foreground/20 rounded" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="•••• •••• •••• ••••"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-ivory focus:border-rose-gold focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/30"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-ivory focus:border-rose-gold focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        CVV
                      </label>
                      <input
                        type="password"
                        placeholder="•••"
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-ivory focus:border-rose-gold focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="FULL NAME"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-ivory focus:border-rose-gold focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/30 uppercase"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 flex gap-3">
                <Shield size={18} className="text-primary shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Your payment is secured with 256-bit SSL encryption. We do not store your credit
                  card details.
                </p>
              </div>
            </div>
          )}

          {currentStep === "confirmation" && (
            <div className="p-8 text-center animate-scale-in flex flex-col items-center justify-center h-full min-h-[400px]">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 relative">
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
                <CheckCircle size={48} className="text-primary relative z-10" />
              </div>
              <h1 className="font-display text-4xl text-ivory mb-4">
                {t.confirmation?.title || "Thank You"}
              </h1>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-[280px]">
                Your luxury items are being prepared. A confirmation has been sent to your email.
              </p>
              <div className="bg-background border border-border rounded-2xl p-8 mb-10 w-full shadow-inner">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
                  Order Number
                </p>
                <p className="font-display text-3xl text-champagne tracking-wider">{orderNumber}</p>
              </div>
              <button
                onClick={handleClose}
                className="w-full shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-10 py-5 hover:opacity-90 transition-all duration-300 rose-gold-glow font-bold"
              >
                {t.confirmation?.continueShopping || "Continue Shopping"}
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {currentStep !== "confirmation" && items.length > 0 && (
          <div className="border-t border-border p-8 space-y-6 bg-surface-2 shrink-0">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground uppercase tracking-wider text-[10px]">
                  Subtotal
                </span>
                <span className="text-ivory font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground uppercase tracking-wider text-[10px]">
                  Shipping
                </span>
                <span className="text-rose-gold font-bold uppercase text-[10px] tracking-widest">
                  Complimentary
                </span>
              </div>
              <div className="pt-4 border-t border-border/50 flex justify-between items-end">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Total Amount
                  </span>
                  <span className="font-display text-3xl text-ivory tracking-tight">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <span className="text-champagne/50 text-[10px] uppercase tracking-widest pb-1">
                  VAT Included
                </span>
              </div>
            </div>

            {currentStep === "cart" ? (
              <button
                onClick={() => setCurrentStep("payment")}
                className="w-full shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-8 py-5 hover:opacity-90 transition-all duration-300 rose-gold-glow flex items-center justify-center gap-3 font-bold group"
              >
                Proceed to Checkout
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                onClick={handleCompleteOrder}
                className="w-full shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-8 py-5 hover:opacity-90 transition-all duration-300 rose-gold-glow flex items-center justify-center gap-3 font-bold"
              >
                <CreditCard size={18} />
                Complete Payment
              </button>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
