import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "404 - Page Not Found — Lumina Beauty";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 overflow-hidden">
      <div className="grain-overlay" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl animate-gentle-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-champagne/5 rounded-full blur-3xl animate-gentle-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-md text-center">
        {/* 404 Number with animation */}
        <div className="animate-slide-in-top">
          <h1 className="text-8xl md:text-9xl font-display text-transparent bg-clip-text bg-gradient-to-br from-rose-gold via-champagne to-ivory animate-gentle-pulse">
            404
          </h1>
        </div>

        {/* Content with staggered animation */}
        <div className="animate-slide-in-bottom" style={{ animationDelay: "0.1s" }}>
          <h2 className="mt-6 text-2xl md:text-3xl font-display text-ivory">Page not found</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on
            track.
          </p>
        </div>

        {/* Buttons with animation */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-scale-in"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-105 rose-gold-glow shine-btn"
          >
            <Home size={16} />
            Go home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-ivory transition-all duration-300 hover:border-rose-gold hover:scale-105"
          >
            <ArrowLeft size={16} />
            Go back
          </button>
        </div>

        {/* Decorative element */}
        <div
          className="mt-12 flex justify-center gap-2 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="w-2 h-2 rounded-full bg-rose-gold/40 animate-gentle-pulse" />
          <span
            className="w-2 h-2 rounded-full bg-champagne/40 animate-gentle-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="w-2 h-2 rounded-full bg-ivory/40 animate-gentle-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
