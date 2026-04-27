import { createFileRoute, Link } from "@tanstack/react-router";

const SITE_URL = "https://luminabeauty.com";
const TITLE = "About Lumina Beauty — Born from Nature, Refined by Science";
const DESC = "The Lumina Beauty story: botanical laboratories, ancient remedies, modern dermatology — luxury skincare crafted to reveal your natural glow.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Our Story</span>
        <h1 className="mt-4 font-display text-ivory" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          Born from <em className="shimmer-text not-italic italic font-light">Nature.</em>
        </h1>
        <p className="mt-8 text-muted-foreground leading-relaxed">
          Lumina Beauty was founded on a singular belief: that the most powerful beauty ingredients are found in nature. Every formula begins in our botanical laboratories where ancient remedies meet modern dermatology.
        </p>
        <Link to="/" className="mt-10 inline-block shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] rounded-full px-8 py-4 rose-gold-glow">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
