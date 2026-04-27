import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmartImage } from "@/components/SmartImage";
import pSerum from "@/assets/p-serum.webp";
import pCream from "@/assets/p-cream.webp";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  // Mock cart data
  const cartItems = [
    {
      id: "radiance-glow-serum",
      name: "Radiance Glow Serum",
      category: "Skincare",
      price: 78,
      img: pSerum,
      qty: 1,
    },
    {
      id: "pearl-luminosity-cream",
      name: "Pearl Luminosity Cream",
      category: "Skincare",
      price: 95,
      img: pCream,
      qty: 1,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay" />
      <Header />
      <main className="pt-24 pb-20 px-5 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl text-ivory mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-10">2 items in your cart</p>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="bg-surface rounded-3xl border border-border overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-border text-[10px] uppercase tracking-widest text-muted-foreground">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>

              <div className="divide-y divide-border">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center">
                    <div className="col-span-1 sm:col-span-6 flex items-center gap-4">
                      <div className="w-20 h-24 bg-surface-2 rounded-xl border border-border overflow-hidden shrink-0">
                        <SmartImage src={item.img} alt={item.name} className="w-full h-full object-cover" width={80} height={96} />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-rose-gold">{item.category}</span>
                        <h3 className="font-display text-lg text-ivory">{item.name}</h3>
                        <p className="text-muted-foreground mt-1">${item.price}</p>
                      </div>
                    </div>
                    <div className="col-span-1 sm:col-span-3 flex items-center sm:justify-center">
                      <div className="flex items-center border border-border rounded-full bg-background overflow-hidden">
                        <button className="px-3 py-1 text-muted-foreground hover:text-ivory transition-colors">-</button>
                        <span className="px-2 text-ivory text-sm">{item.qty}</span>
                        <button className="px-3 py-1 text-muted-foreground hover:text-ivory transition-colors">+</button>
                      </div>
                    </div>
                    <div className="col-span-1 sm:col-span-3 flex items-center justify-between sm:justify-end">
                      <span className="sm:hidden text-sm text-muted-foreground">Total:</span>
                      <span className="font-display text-xl text-ivory">${item.price * item.qty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass-card rounded-3xl p-8 sticky top-28">
              <h2 className="font-display text-2xl text-ivory mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="text-ivory">${subtotal}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-ivory">${shipping}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between items-center mt-2">
                  <span className="text-ivory font-medium">Total</span>
                  <span className="font-display text-2xl text-champagne">${total}</span>
                </div>
              </div>
              <Link
                to="/confirmation"
                className="w-full block text-center shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-6 py-4 hover:opacity-90 transition rose-gold-glow"
              >
                Proceed to Checkout
              </Link>
              <Link to="/" className="w-full block text-center mt-4 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-rose-gold transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
