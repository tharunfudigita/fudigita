import { useEffect, useRef } from "react";

/**
 * Moves an element vertically as the page scrolls.
 * speed > 0 : element drifts slower than the page (classic background parallax)
 * speed < 0 : element drifts faster / opposite direction
 * The offset is measured from the centre of the viewport so it is 0 when
 * the element is centred on screen.
 */
export function useParallax<T extends HTMLElement>(speed = 0.2) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const viewportCentre = window.innerHeight / 2;
      const elementCentre = rect.top + rect.height / 2;
      const offset = (elementCentre - viewportCentre) * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return ref;
}
