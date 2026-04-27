import { createFileRoute, Link } from "@tanstack/react-router";

const SITE_URL = "https://luminabeauty.com";
const TITLE = "Contact Lumina Beauty — Customer Care & Press Inquiries";
const DESC = "Get in touch with Lumina Beauty for customer support, press inquiries or wholesale partnerships.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold">Contact</span>
        <h1 className="mt-4 font-display text-ivory" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
          Get in <em className="shimmer-text not-italic italic font-light">Touch.</em>
        </h1>
        <p className="mt-6 text-muted-foreground">Email <a className="text-rose-gold underline-offset-4 hover:underline" href="mailto:hello@luminabeauty.com">hello@luminabeauty.com</a> — we reply within one business day.</p>
        <Link to="/" className="mt-10 inline-block shine-btn bg-primary text-primary-foreground text-xs uppercase tracking-[0.25em] rounded-full px-8 py-4 rose-gold-glow">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
