import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCart } from "@/context/CartContext";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-card" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <a href="/#products" className="hover:text-ivory transition">
              {t.header.products}
            </a>
            <a href="/#about" className="hover:text-ivory transition">
              {t.header.about}
            </a>
            <a href="/#results" className="hover:text-ivory transition">
              {t.header.results}
            </a>
            <a href="/#newsletter" className="hover:text-ivory transition">
              {t.header.contact}
            </a>
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 text-xs tracking-widest border border-border rounded-full px-3 py-1.5 text-muted-foreground hover:border-rose-gold transition-colors"
              aria-label="Toggle language"
            >
              <span className={language === "en" ? "text-ivory" : ""}>EN</span>
              <span>|</span>
              <span className={language === "ar" ? "text-ivory" : ""}>AR</span>
            </button>
            <Link
              to="/cart"
              className="relative p-2 text-muted-foreground hover:text-ivory transition-colors"
              aria-label={t.header.viewCart}
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <a
              href="/#products"
              className="hidden sm:inline-block shine-btn bg-primary text-primary-foreground text-[10px] sm:text-xs uppercase tracking-[0.2em] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 hover:opacity-90 transition rose-gold-glow"
            >
              {t.header.shopNow}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-ivory transition-colors"
              aria-label={t.header.toggleMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden"
          onClick={closeMenu}
        >
          <nav
            className="flex flex-col items-center justify-center h-full gap-8 text-lg uppercase tracking-[0.2em]"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="/#products"
              onClick={closeMenu}
              className="text-muted-foreground hover:text-ivory transition"
            >
              {t.header.products}
            </a>
            <a
              href="/#about"
              onClick={closeMenu}
              className="text-muted-foreground hover:text-ivory transition"
            >
              {t.header.about}
            </a>
            <a
              href="/#results"
              onClick={closeMenu}
              className="text-muted-foreground hover:text-ivory transition"
            >
              {t.header.results}
            </a>
            <a
              href="/#newsletter"
              onClick={closeMenu}
              className="text-muted-foreground hover:text-ivory transition"
            >
              {t.header.contact}
            </a>
            {/* Mobile Language Toggle */}
            <button
              onClick={() => {
                toggleLanguage();
                closeMenu();
              }}
              className="flex items-center gap-2 text-sm tracking-widest border border-border rounded-full px-4 py-2 text-muted-foreground mt-4 hover:border-rose-gold transition-colors"
            >
              <span className={language === "en" ? "text-ivory" : ""}>EN</span>
              <span>|</span>
              <span className={language === "ar" ? "text-ivory" : ""}>AR</span>
            </button>
            <a
              href="/#products"
              onClick={closeMenu}
              className="shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] rounded-full px-8 py-4 hover:opacity-90 transition rose-gold-glow mt-4"
            >
              {t.header.shopNow}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
