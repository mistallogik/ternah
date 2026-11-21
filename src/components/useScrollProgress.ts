"use client";

import { useEffect, useRef } from "react";

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * Pinned-section progress. Put `trackRef` on a tall wrapper and `stickyRef` on its
 * position: sticky child. `onProgress(p)` fires (once per frame, only while scrolling)
 * with p going 0 → 1 over the distance the sticky child stays pinned.
 */
export function usePinProgress(onProgress: (p: number) => void) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cb = useRef(onProgress);
  cb.current = onProgress;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const track = trackRef.current;
      const sticky = stickyRef.current;
      if (!track || !sticky) return;
      const top = parseFloat(getComputedStyle(sticky).top) || 0;
      const rect = track.getBoundingClientRect();
      const range = rect.height - sticky.offsetHeight;
      cb.current(range > 0 ? clamp((top - rect.top) / range) : 0);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  /** Scrolls the window so the pinned section shows progress `p`. */
  const scrollToProgress = (p: number) => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky) return;
    const top = parseFloat(getComputedStyle(sticky).top) || 0;
    const range = track.offsetHeight - sticky.offsetHeight;
    const trackTop = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: trackTop - top + p * range, behavior: "smooth" });
  };

  return { trackRef, stickyRef, scrollToProgress };
}
