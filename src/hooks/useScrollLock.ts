/**
 * useScrollLock — counter-based body scroll lock.
 * Safe to call from multiple components simultaneously:
 * scroll is only restored when ALL locks are released.
 */
import { useEffect } from "react";

let lockCount = 0;

export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    lockCount++;
    document.body.style.overflow = "hidden";
    return () => {
      lockCount--;
      if (lockCount === 0) document.body.style.overflow = "";
    };
  }, [active]);
}
