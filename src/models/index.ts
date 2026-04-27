export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
  slug: string;
  desc: string;
  alt: string;
  badge?: string | null;
}

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  img: string;
  qty: number;
  slug: string;
}

export interface Category {
  name: string;
  img: string;
  alt: string;
  count: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  img: string;
}

export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}
