import { createFileRoute, Link } from "@tanstack/react-router";
import { PRODUCTS_PAGE_DATA, SITE_URL } from "@/constants";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: PRODUCTS_PAGE_DATA.title },
      { name: "description", content: PRODUCTS_PAGE_DATA.desc },
      { property: "og:title", content: PRODUCTS_PAGE_DATA.title },
      { property: "og:description", content: PRODUCTS_PAGE_DATA.desc },
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
