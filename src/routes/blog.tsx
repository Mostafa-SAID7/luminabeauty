import { createFileRoute, Link } from "@tanstack/react-router";

const SITE_URL = "https://luminabeauty.com";
const TITLE = "Beauty Journal — Lumina Beauty Skincare Tips & Rituals";
const DESC = "Editorial guides, ingredient deep-dives and natural beauty rituals from the Lumina Beauty journal.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/blog` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Journal</span>
        <h1 className="mt-4 font-display text-ivory" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          Beauty <em className="shimmer-text not-italic italic font-light">Journal.</em>
        </h1>
        <p className="mt-6 text-muted-foreground">Stories, science, and rituals from the Lumina Beauty editors.</p>
        <Link to="/" className="mt-10 inline-block shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] rounded-full px-8 py-4 rose-gold-glow">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
