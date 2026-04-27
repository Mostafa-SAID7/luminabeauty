import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import heroImg from "@/assets/hero.webp";
import pSerum from "@/assets/p-serum.webp";
import pLip from "@/assets/p-lip.webp";
import pCream from "@/assets/p-cream.webp";
import pBronzer from "@/assets/p-bronzer.webp";
import pToner from "@/assets/p-toner.webp";
import pMask from "@/assets/p-mask.webp";

// Home Components
import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { Products } from "@/components/home/Products";
import { Differences } from "@/components/home/Differences";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Testimonial } from "@/components/home/Testimonial";
import { Categories } from "@/components/home/Categories";
import { Newsletter } from "@/components/home/Newsletter";

import { SITE_URL, PAGE_TITLE, PAGE_DESC, PRODUCTS } from "@/constants";

export const Route = createFileRoute("/")({
  component: LuminaHome,
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}${heroImg}` },
      { property: "og:image:alt", content: "Lumina Beauty — Discover Your Natural Glow" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
      { name: "twitter:image", content: `${SITE_URL}${heroImg}` },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}#organization`,
              name: "Lumina Beauty",
              url: SITE_URL,
              logo: `${SITE_URL}/favicon.svg`,
              sameAs: [
                "https://instagram.com/luminabeauty",
                "https://pinterest.com/luminabeauty",
                "https://tiktok.com/@luminabeauty",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}#website`,
              url: SITE_URL,
              name: "Lumina Beauty",
              description: PAGE_DESC,
              publisher: { "@id": `${SITE_URL}#organization` },
              inLanguage: "en-US",
            },
            {
              "@type": "ItemList",
              name: "Lumina Beauty Signature Collection",
              itemListElement: PRODUCTS.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                item: {
                  "@type": "Product",
                  name: p.name,
                  category: p.category,
                  description: p.desc,
                  image: `${SITE_URL}${p.img}`,
                  url: `${SITE_URL}/products/${p.slug}`,
                  brand: { "@type": "Brand", name: "Lumina Beauty" },
                  offers: {
                    "@type": "Offer",
                    price: p.price,
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: `${SITE_URL}/products/${p.slug}`,
                  },
                },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function LuminaHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay" />
      <Header />
      <main>
        <Hero />
        <Story />
        <Products />
        <Differences />
        <BeforeAfter />
        <Testimonial />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
