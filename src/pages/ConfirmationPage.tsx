import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";

function ConfirmationPage() {
  const { t } = useLanguage();
  const { totalItems, subtotal } = useCart();
  const orderNumber = `LB-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const shipping = 10;
  const total = subtotal + shipping;

  useEffect(() => {
    document.title = "Order Confirmed — Lumina Beauty";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex items-center justify-center px-5 sm:px-6">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(139,47,78,0.07) 0%, rgba(232,180,184,0.04) 40%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center py-20">
          {/* Animated checkmark */}
          <div className="mx-auto mb-8 w-24 h-24 rounded-full bg-surface border border-border flex items-center justify-center rose-gold-glow">
            <svg
              className="w-12 h-12 text-rose-gold"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">
            {t.confirmation.badge}
          </span>

          <h1
            className="mt-4 font-display leading-[0.95] text-ivory"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            {t.confirmation.title}
            <br />
            <em className="shimmer-text not-italic italic font-light">{t.confirmation.titleEm}</em>
          </h1>

          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md mx-auto">
            {t.confirmation.desc}
          </p>

          {/* Order details card */}
          <div className="mt-10 glass-card rounded-3xl p-8 text-left space-y-5">
            <div className="flex justify-between items-center text-sm border-b border-border pb-4">
              <span className="text-muted-foreground uppercase tracking-widest text-[10px]">
                {t.confirmation.orderNumber}
              </span>
              <span className="font-display text-champagne text-lg">{orderNumber}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-border pb-4">
              <span className="text-muted-foreground uppercase tracking-widest text-[10px]">
                {t.confirmation.estimatedDelivery}
              </span>
              <span className="text-ivory text-sm">{t.confirmation.deliveryTime}</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-border pb-4">
              <span className="text-muted-foreground uppercase tracking-widest text-[10px]">
                {t.confirmation.items}
              </span>
              <span className="text-ivory text-sm">{totalItems} {t.confirmation.itemsCount}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground uppercase tracking-widest text-[10px]">
                {t.cart.total}
              </span>
              <span className="font-display text-champagne text-xl">${total}</span>
            </div>
          </div>

          {/* Perks */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { icon: "🌿", label: t.confirmation.perks.natural },
              { icon: "🐰", label: t.confirmation.perks.crueltyFree },
              { icon: "✨", label: t.confirmation.perks.glow },
            ].map((p) => (
              <div key={p.label} className="glass-card rounded-2xl p-4 text-center">
                <span className="text-2xl">{p.icon}</span>
                <p className="mt-2 text-[9px] uppercase tracking-widest text-muted-foreground">
                  {p.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-8 py-4 hover:opacity-90 transition rose-gold-glow"
            >
              {t.confirmation.continueShopping}
            </Link>
            <a
              href="mailto:hello@luminabeauty.com"
              className="glass-card text-ivory text-xs uppercase tracking-[0.2em] rounded-full px-8 py-4 hover:bg-surface-2 transition"
            >
              {t.confirmation.contactSupport}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ConfirmationPage;
