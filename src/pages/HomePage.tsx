import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { Products } from "@/components/home/Products";
import { Differences } from "@/components/home/Differences";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { Testimonial } from "@/components/home/Testimonial";
import { Categories } from "@/components/home/Categories";
import { Newsletter } from "@/components/home/Newsletter";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    document.title = "Lumina Beauty — Luxury Natural Skincare & Clean Beauty";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
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

export default HomePage;
