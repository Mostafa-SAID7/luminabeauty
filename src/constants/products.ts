import pSerum from "@/assets/p-serum.webp";
import pLip from "@/assets/p-lip.webp";
import pCream from "@/assets/p-cream.webp";
import pBronzer from "@/assets/p-bronzer.webp";
import pToner from "@/assets/p-toner.webp";
import pMask from "@/assets/p-mask.webp";

export const PRODUCTS_PAGE_DATA = {
  title: "Products — Lumina Beauty Signature Skincare Collection",
  desc: "Discover Lumina Beauty's signature products: Radiance Glow Serum, Pearl Luminosity Cream, Velvet Lip Elixir and more — clean, dermatologist-tested formulas.",
};

export const PRODUCTS = [
  {
    img: pSerum,
    badge: "Best Seller",
    category: "Skincare",
    name: "Radiance Glow Serum",
    desc: "Vitamin C + Rose Hip Oil complex",
    price: 78,
    alt: "Radiance Glow Serum bottle with vitamin C and rose hip oil — Lumina Beauty skincare",
    slug: "radiance-glow-serum",
  },
  {
    img: pLip,
    badge: "New",
    category: "Makeup",
    name: "Velvet Lip Elixir",
    desc: "Hydrating shea + natural pigments",
    price: 42,
    alt: "Velvet Lip Elixir tube with hydrating shea butter and natural pigments — Lumina Beauty",
    slug: "velvet-lip-elixir",
  },
  {
    img: pCream,
    badge: "Award Winner",
    category: "Skincare",
    name: "Pearl Luminosity Cream",
    desc: "Pearl extract + hyaluronic acid",
    price: 95,
    alt: "Pearl Luminosity Cream jar with pearl extract and hyaluronic acid — Lumina Beauty",
    slug: "pearl-luminosity-cream",
  },
  {
    img: pBronzer,
    badge: "Trending",
    category: "Makeup",
    name: "Golden Hour Bronzer",
    desc: "Micro-shimmer + mineral pigments",
    price: 55,
    alt: "Golden Hour Bronzer compact with micro-shimmer mineral pigments — Lumina Beauty",
    slug: "golden-hour-bronzer",
  },
  {
    img: pToner,
    badge: null,
    category: "Skincare",
    name: "Rose Petal Toner",
    desc: "Damascena rose water + niacinamide",
    price: 48,
    alt: "Rose Petal Toner bottle with Damascena rose water and niacinamide — Lumina Beauty",
    slug: "rose-petal-toner",
  },
  {
    img: pMask,
    badge: "Limited",
    category: "Skincare",
    name: "Midnight Repair Mask",
    desc: "Retinol + black pearl + squalane",
    price: 88,
    alt: "Midnight Repair Mask jar with retinol, black pearl and squalane — Lumina Beauty",
    slug: "midnight-repair-mask",
  },
];
