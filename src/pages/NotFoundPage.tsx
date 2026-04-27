import { Link } from "react-router-dom";
import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "404 - Page Not Found — Lumina Beauty";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="grain-overlay" />
      <div className="relative z-10 max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.2em] font-medium text-primary-foreground transition-colors hover:bg-primary/90 rose-gold-glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
