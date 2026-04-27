import { createFileRoute, Link } from "@tanstack/react-router";

const SITE_URL = "https://luminabeauty.com";
const TITLE = "Products — Lumina Beauty Signature Skincare Collection";
const DESC = "Discover Lumina Beauty's signature products: Radiance Glow Serum, Pearl Luminosity Cream, Velvet Lip Elixir and more — clean, dermatologist-tested formulas.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/products` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/products` }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Products</span>
        <h1 className="mt-4 font-display text-ivory" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          Signature <em className="shimmer-text not-italic italic font-light">Formulas.</em>
        </h1>
        <p className="mt-6 text-muted-foreground">Each Lumina product is crafted with botanical actives and clinical results.</p>
        <Link to="/" className="mt-10 inline-block shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] rounded-full px-8 py-4 rose-gold-glow">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
