import { Logo } from "@/components/layout/Header";

export function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Lumina Beauty — Crafted with nature.
        </p>
        <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#" className="hover:text-rose-gold transition">
            Instagram
          </a>
          <a href="#" className="hover:text-rose-gold transition">
            Pinterest
          </a>
          <a href="#" className="hover:text-rose-gold transition">
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}
