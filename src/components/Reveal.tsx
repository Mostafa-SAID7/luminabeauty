import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "scale" | "zoom" | "clip";

interface RevealProps {
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
  once?: boolean;
  stagger?: boolean;
  className?: string;
  children: ReactNode;
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal reveal-left",
  right: "reveal reveal-right",
  scale: "reveal reveal-scale",
  zoom: "img-zoom-in",
  clip: "img-clip-reveal",
};

export function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
  stagger = false,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set visible immediately if prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        variantClass[variant],
        stagger && "stagger",
        visible && "is-visible",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
