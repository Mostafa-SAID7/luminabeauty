import heroImg from "@/assets/hero.webp";
import storyImg from "@/assets/story.webp";
import beforeImg from "@/assets/before.webp";
import afterImg from "@/assets/after.webp";
import testimonialImg from "@/assets/testimonial.webp";
import pSerum from "@/assets/p-serum.webp";
import pLip from "@/assets/p-lip.webp";
import pCream from "@/assets/p-cream.webp";
import pBronzer from "@/assets/p-bronzer.webp";
import pToner from "@/assets/p-toner.webp";
import pMask from "@/assets/p-mask.webp";
import catSkincare from "@/assets/cat-skincare.webp";
import catMakeup from "@/assets/cat-makeup.webp";
import catHair from "@/assets/cat-hair.webp";
import catBody from "@/assets/cat-body.webp";

export const SITE_URL = "https://luminabeauty.com";
export const PAGE_TITLE = "Lumina Beauty — Luxury Natural Skincare for Radiant, Glowing Skin";
export const PAGE_DESC = "Discover Lumina Beauty: luxury natural skincare with botanical actives, vitamin C, and rose hip oil. Cruelty-free, dermatologist-tested formulas — visible glow in 14 days.";

export const PRODUCTS_PAGE_DATA = {
  title: "Products — Lumina Beauty Signature Skincare Collection",
  desc: "Discover Lumina Beauty's signature products: Radiance Glow Serum, Pearl Luminosity Cream, Velvet Lip Elixir and more — clean, dermatologist-tested formulas.",
};

export const HERO_DATA = {
  img: heroImg,
  badge: "Luxury Natural Beauty",
  title: "Discover Your",
  titleEm: "Natural Glow.",
  desc: "Premium skincare crafted with nature's finest ingredients for skin that radiates from within.",
  cta1: "Shop Now",
  cta2: "Discover Products"
};

export const STORY_DATA = {
  img: storyImg,
  quote: '"Beauty is not about perfection. It\'s about confidence in your own luminous skin."',
  title: "Born from Nature,",
  titleBr: "Refined by Science.",
  desc: "Lumina Beauty was founded on a singular belief: that the most powerful beauty ingredients are found in nature. Every formula begins in our botanical laboratories, where ancient remedies meet modern dermatology to create products that don't just enhance your beauty — they reveal it.",
  stats: [["12+", "Years of Expertise"], ["97%", "Customer Satisfaction"], ["100%", "Natural Ingredients"]]
};

export const BEFORE_AFTER_DATA = {
  before: beforeImg,
  after: afterImg,
  title: "Before",
  titleEm: "& After.",
  desc: "Unretouched. Unfiltered. Real Lumina users, real transformations.",
  labelBefore: "Before",
  labelAfter: "After — 14 Days",
  product: "Lumina Radiance Serum — 14 Day Result"
};

export const TESTIMONIAL_DATA = {
  img: testimonialImg,
  quote: '"The Radiance Serum transformed my skin in just two weeks. I\'ve never received so many compliments. Lumina is the only brand I trust."',
  author: "Sarah Mitchell",
  location: "New York, USA"
};

export const NEWSLETTER_DATA = {
  badge: "Join the Club",
  title: "Join the Lumina",
  titleEm: "Glow Club.",
  desc: "Exclusive access to new launches, member-only offers, and personalized beauty rituals delivered to your inbox.",
  placeholder: "Your email address",
  cta: "Join the Glow"
};

export const DIFFERENCES = [
  {
    t: "Natural Ingredients",
    d: "100% botanically sourced actives. No parabens, sulfates, or synthetic fragrances. Just pure, effective nature.",
    icon: "Sparkles"
  },
  {
    t: "Cruelty-Free",
    d: "Every Lumina formula is certified cruelty-free and vegan. Beauty that respects all life.",
    icon: "Heart"
  },
  {
    t: "Dermatologist Tested",
    d: "Clinically validated by independent dermatologists. Safe for all skin types including sensitive.",
    icon: "ShieldCheck"
  },
  {
    t: "Visible Results",
    d: "91% of users report visibly brighter skin within 14 days. Results you can see, not just feel.",
    icon: "Star"
  }
];

export const PRODUCTS = [
  { img: pSerum, badge: "Best Seller", category: "Skincare", name: "Radiance Glow Serum", desc: "Vitamin C + Rose Hip Oil complex", price: 78, alt: "Radiance Glow Serum bottle with vitamin C and rose hip oil — Lumina Beauty skincare", slug: "radiance-glow-serum" },
  { img: pLip, badge: "New", category: "Makeup", name: "Velvet Lip Elixir", desc: "Hydrating shea + natural pigments", price: 42, alt: "Velvet Lip Elixir tube with hydrating shea butter and natural pigments — Lumina Beauty", slug: "velvet-lip-elixir" },
  { img: pCream, badge: "Award Winner", category: "Skincare", name: "Pearl Luminosity Cream", desc: "Pearl extract + hyaluronic acid", price: 95, alt: "Pearl Luminosity Cream jar with pearl extract and hyaluronic acid — Lumina Beauty", slug: "pearl-luminosity-cream" },
  { img: pBronzer, badge: "Trending", category: "Makeup", name: "Golden Hour Bronzer", desc: "Micro-shimmer + mineral pigments", price: 55, alt: "Golden Hour Bronzer compact with micro-shimmer mineral pigments — Lumina Beauty", slug: "golden-hour-bronzer" },
  { img: pToner, badge: null, category: "Skincare", name: "Rose Petal Toner", desc: "Damascena rose water + niacinamide", price: 48, alt: "Rose Petal Toner bottle with Damascena rose water and niacinamide — Lumina Beauty", slug: "rose-petal-toner" },
  { img: pMask, badge: "Limited", category: "Skincare", name: "Midnight Repair Mask", desc: "Retinol + black pearl + squalane", price: 88, alt: "Midnight Repair Mask jar with retinol, black pearl and squalane — Lumina Beauty", slug: "midnight-repair-mask" },
];

export const CATEGORIES = [
  { img: catSkincare, count: 42, name: "Skincare", alt: "Lumina Beauty skincare collection — serums, creams and toners for radiant skin" },
  { img: catMakeup, count: 28, name: "Makeup", alt: "Lumina Beauty makeup collection — lip elixirs, bronzers and natural pigments" },
  { img: catHair, count: 19, name: "Hair Care", alt: "Lumina Beauty hair care collection — botanical shampoos and luminous treatments" },
  { img: catBody, count: 15, name: "Body Care", alt: "Lumina Beauty body care collection — natural lotions and nourishing oils" },
];
