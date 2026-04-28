import { useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  wrapperClassName?: string;
  /** Use eager loading + high fetchpriority for above-the-fold images */
  priority?: boolean;
}

/**
 * Image with built-in LQIP blur placeholder, lazy loading, async decode,
 * and explicit aspect ratio (prevents CLS). All site images should use this.
 */
export function SmartImage({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  priority = false,
  ...rest
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <span className={cn("lqip block overflow-hidden", wrapperClassName)} aria-hidden={false}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={priority ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={cn(loaded && "is-loaded", className)}
        {...rest}
      />
    </span>
  );
}
