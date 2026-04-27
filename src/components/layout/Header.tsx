import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-rose-gold">
        <path d="M12 2c1 4 4 7 8 8-4 1-7 4-8 8-1-4-4-7-8-8 4-1 7-4 8-8z" fill="currentColor" />
      </svg>
      <span className="font-display text-2xl tracking-tight text-ivory">
        Lumina<span className="text-rose-gold">.</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-card" : ""}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="/#products" className="hover:text-ivory transition">Products</a>
          <a href="/#about" className="hover:text-ivory transition">About</a>
          <a href="/#results" className="hover:text-ivory transition">Results</a>
          <a href="/#newsletter" className="hover:text-ivory transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs tracking-widest border border-border rounded-full px-3 py-1.5 text-muted-foreground">
            <span className="text-ivory">EN</span><span>|</span><span>AR</span>
          </div>
          <Link
            to="/cart"
            className="relative p-2 text-muted-foreground hover:text-ivory transition-colors"
            aria-label="View cart"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold">
              2
            </span>
          </Link>
          <a
            href="/#products"
            className="shine-btn bg-primary text-primary-foreground text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 hover:opacity-90 transition rose-gold-glow"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
}
