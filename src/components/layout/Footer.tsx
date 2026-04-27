import { Logo } from "@/components/layout/Header";
import { useLanguage } from "@/i18n/LanguageContext";
import { Instagram, PinIcon as Pinterest } from "lucide-react";

// TikTok icon component (not in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t border-border mt-20 py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          © {new Date().getFullYear()} Lumina Beauty — {t.footer.tagline}
        </p>
        <div className="flex gap-6 text-muted-foreground">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-gold transition-colors"
            aria-label={t.footer.social.instagram}
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-gold transition-colors"
            aria-label={t.footer.social.pinterest}
          >
            <Pinterest size={20} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-gold transition-colors"
            aria-label={t.footer.social.tiktok}
          >
            <TikTokIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
