import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmartImage } from "@/components/SmartImage";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect } from "react";

function CartPage() {
  const { items, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();
  const { t } = useLanguage();
  const shipping = 10;
  const total = subtotal + shipping;

  useEffect(() => {
    document.title = "Shopping Cart — Lumina Beauty";
  }, []);

  const handleIncrease = (id: string, currentQty: number) => {
    updateQuantity(id, currentQty + 1);
  };

  const handleDecrease = (id: string, currentQty: number) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-20 px-5 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl text-ivory mb-2">{t.cart.title}</h1>
          <p className="text-muted-foreground text-sm uppercase tracking-widest mb-10">
            {totalItems} {t.cart.itemsInCart}
          </p>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
              <Link
                to="/"
                className="inline-block shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-8 py-4 hover:opacity-90 transition rose-gold-glow"
              >
                {t.cart.continueShopping}
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8">
                <div className="bg-surface rounded-3xl border border-border overflow-hidden">
                  <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground">
                    <div className="col-span-6">{t.cart.product}</div>
                    <div className="col-span-3 text-center">{t.cart.quantity}</div>
                    <div className="col-span-3 text-right">{t.cart.total}</div>
                  </div>

                  <div className="divide-y divide-border">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center"
                      >
                        <div className="col-span-1 sm:col-span-6 flex items-center gap-4">
                          <div className="w-20 h-24 bg-surface-2 rounded-xl border border-border overflow-hidden shrink-0">
                            <SmartImage
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover"
                              width={80}
                              height={96}
                            />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-rose-gold">
                              {item.category}
                            </span>
                            <h3 className="font-display text-lg text-ivory">{item.name}</h3>
                            <p className="text-muted-foreground mt-1">${item.price}</p>
                          </div>
                        </div>
                        <div className="col-span-1 sm:col-span-3 flex items-center sm:justify-center">
                          <div className="flex items-center border border-border rounded-full bg-background overflow-hidden">
                            <button
                              onClick={() => handleDecrease(item.id, item.qty)}
                              className="px-3 py-1 text-muted-foreground hover:text-ivory transition-colors"
                            >
                              -
                            </button>
                            <span className="px-2 text-ivory text-sm">{item.qty}</span>
                            <button
                              onClick={() => handleIncrease(item.id, item.qty)}
                              className="px-3 py-1 text-muted-foreground hover:text-ivory transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-span-1 sm:col-span-3 flex items-center justify-between sm:justify-end">
                          <span className="sm:hidden text-sm text-muted-foreground">
                            {t.cart.total}:
                          </span>
                          <span className="font-display text-xl text-ivory">
                            ${item.price * item.qty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="glass-card rounded-3xl p-8 sticky top-28">
                  <h2 className="font-display text-2xl text-ivory mb-6">{t.cart.orderSummary}</h2>
                  <div className="space-y-4 mb-6 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>{t.cart.subtotal}</span>
                      <span className="text-ivory">${subtotal}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>{t.cart.shipping}</span>
                      <span className="text-ivory">${shipping}</span>
                    </div>
                    <div className="border-t border-border pt-4 flex justify-between items-center mt-2">
                      <span className="text-ivory font-medium">{t.cart.total}</span>
                      <span className="font-display text-2xl text-champagne">${total}</span>
                    </div>
                  </div>
                  <Link
                    to="/confirmation"
                    className="w-full block text-center shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-6 py-4 hover:opacity-90 transition rose-gold-glow"
                  >
                    {t.cart.proceedToCheckout}
                  </Link>
                  <Link
                    to="/"
                    className="w-full block text-center mt-4 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-rose-gold transition-colors"
                  >
                    {t.cart.continueShopping}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CartPage;
