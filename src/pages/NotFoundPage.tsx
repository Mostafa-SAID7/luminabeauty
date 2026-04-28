import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "404 - Page Not Found — Lumina Beauty";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 overflow-hidden relative">
      <div className="grain-overlay" />

      {/* Floating Particles - Match Home Page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-rose-gold/20 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Animated background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-gold/10 rounded-full blur-[120px] animate-gentle-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-champagne/10 rounded-full blur-[150px] animate-gentle-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        {/* 404 Number with animation */}
        <div className="animate-scale-in">
          <h1
            className="text-[12rem] md:text-[20rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-rose-gold via-champagne to-ivory opacity-20 select-none"
            style={{ filter: "drop-shadow(0 0 30px rgba(232, 180, 184, 0.3))" }}
          >
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
