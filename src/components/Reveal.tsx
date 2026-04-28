import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

type RevealVariant = "up" | "left" | "right" | "scale" | "zoom" | "clip" | "blur";

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
  blur: "reveal reveal-blur",
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
  const { ref, visible } = useReveal(threshold, once);

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
