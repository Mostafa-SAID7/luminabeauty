/**
 * useReveal — shared IntersectionObserver singleton per threshold value.
 * Instead of creating one observer per <Reveal> instance, all Reveals
 * that share the same threshold reuse the same observer → fewer GC roots,
 * less memory, fewer layout queries.
 */
import { useEffect, useRef, useState } from "react";

type ObserverEntry = { observer: IntersectionObserver; count: number };
const observerCache = new Map<string, ObserverEntry>();

function getSharedObserver(threshold: number, rootMargin: string): IntersectionObserver {
  const key = `${threshold}|${rootMargin}`;
  if (!observerCache.has(key)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dispatchEvent(new Event("_reveal", { bubbles: false }));
          }
        });
      },
      { threshold, rootMargin },
    );
    observerCache.set(key, { observer, count: 0 });
  }
  const entry = observerCache.get(key)!;
  entry.count++;
  return entry.observer;
}

function releaseSharedObserver(threshold: number, rootMargin: string) {
  const key = `${threshold}|${rootMargin}`;
  const entry = observerCache.get(key);
  if (!entry) return;
  entry.count--;
  if (entry.count === 0) {
    entry.observer.disconnect();
    observerCache.delete(key);
  }
}

export function useReveal(threshold = 0.15, once = true, rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Immediately visible for reduced-motion users
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = getSharedObserver(threshold, rootMargin);

    const handler = () => {
      setVisible(true);
      if (once) {
        observer.unobserve(el);
      }
    };

    el.addEventListener("_reveal", handler);
    observer.observe(el);

    return () => {
      el.removeEventListener("_reveal", handler);
      observer.unobserve(el);
      releaseSharedObserver(threshold, rootMargin);
    };
  }, [threshold, once, rootMargin]);

  return { ref, visible };
}
