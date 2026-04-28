import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import { CartProvider } from "./context/CartContext";
import { ChatWidget } from "./components/ChatWidget";
import { CartAddedFeedback } from "./components/CartAddedFeedback";
import { Toaster } from "@/components/ui/sonner";

const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[10002] bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          {/* Pulsing logo/icon */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-rose-gold animate-gentle-pulse">
            <path d="M12 2c1 4 4 7 8 8-4 1-7 4-8 8-1-4-4-7-8-8 4-1 7-4 8-8z" fill="currentColor" />
          </svg>
          {/* Spinning ring */}
          <div className="absolute inset-[-12px] border-2 border-rose-gold/20 border-t-rose-gold rounded-full animate-spin" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-ivory text-xl tracking-[0.2em] uppercase">Lumina</span>
          <div className="w-32 h-1 bg-surface-2 rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function BackToTop() {
  const { pathname } = useLocation();
  const [show, setShow] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // Show button after scrolling 400px down
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide when footer is in view — same pattern as ChatWidget
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        {
          threshold: 0.1,
          rootMargin: "0px 0px 50px 0px",
        },
      );

      const footer = document.querySelector("footer");
      if (footer) observer.observe(footer);

      return () => {
        if (footer) observer.unobserve(footer);
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  const visible = show && !footerVisible;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[10001] bg-surface-2 border border-border p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-500 hover:border-rose-gold text-muted-foreground hover:text-ivory ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="rotate-180">
        <path
          d="M7 13L12 18L17 13M7 6L12 11L17 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <CartProvider>
        <ScrollToTop />
        <div className="grain-overlay" />
        <div
          key={location.pathname}
          className="page-transition fadeIn"
          style={{ animationDelay: "0.1s" }}
        >
          <Suspense fallback={<LoadingScreen />}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <ChatWidget />
        <BackToTop />
        <CartAddedFeedback />
        <Toaster position="top-center" expand={true} richColors />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
