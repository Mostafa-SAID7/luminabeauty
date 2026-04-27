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

const SITE_URL = "https://luminabeauty.com";
const PAGE_TITLE = "Lumina Beauty — Luxury Natural Skincare for Radiant, Glowing Skin";
const PAGE_DESC = "Discover Lumina Beauty: luxury natural skincare with botanical actives, vitamin C, and rose hip oil. Cruelty-free, dermatologist-tested formulas — visible glow in 14 days.";

const products = [
  { img: pSerum, badge: "Best Seller", category: "Skincare", name: "Radiance Glow Serum", desc: "Vitamin C + Rose Hip Oil complex", price: 78, alt: "Radiance Glow Serum bottle with vitamin C and rose hip oil — Lumina Beauty skincare", slug: "radiance-glow-serum" },
  { img: pLip, badge: "New", category: "Makeup", name: "Velvet Lip Elixir", desc: "Hydrating shea + natural pigments", price: 42, alt: "Velvet Lip Elixir tube with hydrating shea butter and natural pigments — Lumina Beauty", slug: "velvet-lip-elixir" },
  { img: pCream, badge: "Award Winner", category: "Skincare", name: "Pearl Luminosity Cream", desc: "Pearl extract + hyaluronic acid", price: 95, alt: "Pearl Luminosity Cream jar with pearl extract and hyaluronic acid — Lumina Beauty", slug: "pearl-luminosity-cream" },
  { img: pBronzer, badge: "Trending", category: "Makeup", name: "Golden Hour Bronzer", desc: "Micro-shimmer + mineral pigments", price: 55, alt: "Golden Hour Bronzer compact with micro-shimmer mineral pigments — Lumina Beauty", slug: "golden-hour-bronzer" },
  { img: pToner, badge: null, category: "Skincare", name: "Rose Petal Toner", desc: "Damascena rose water + niacinamide", price: 48, alt: "Rose Petal Toner bottle with Damascena rose water and niacinamide — Lumina Beauty", slug: "rose-petal-toner" },
  { img: pMask, badge: "Limited", category: "Skincare", name: "Midnight Repair Mask", desc: "Retinol + black pearl + squalane", price: 88, alt: "Midnight Repair Mask jar with retinol, black pearl and squalane — Lumina Beauty", slug: "midnight-repair-mask" },
];

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
              itemListElement: products.map((p, i) => ({
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
                  offers: { "@type": "Offer", price: p.price, priceCurrency: "USD", availability: "https://schema.org/InStock", url: `${SITE_URL}/products/${p.slug}` },
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
