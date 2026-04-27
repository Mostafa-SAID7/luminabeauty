import { createFileRoute, Link } from "@tanstack/react-router";

const SITE_URL = "https://luminabeauty.com";
const TITLE = "Shop All — Lumina Beauty Luxury Skincare & Makeup";
const DESC = "Shop the full Lumina Beauty collection: serums, creams, lip elixirs, bronzers and more — natural, cruelty-free luxury beauty.";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/shop` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/shop` }],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Shop</span>
        <h1 className="mt-4 font-display text-ivory" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          The Full <em className="shimmer-text not-italic italic font-light">Collection.</em>
        </h1>
        <p className="mt-6 text-muted-foreground">Browse every Lumina Beauty formula — skincare, makeup, hair and body.</p>
        <Link to="/" className="mt-10 inline-block shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] rounded-full px-8 py-4 rose-gold-glow">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
