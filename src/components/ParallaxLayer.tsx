import type { CSSProperties, ReactNode } from "react";
import { useParallax } from "../hooks/useParallax";

interface ParallaxLayerProps {
  speed?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/** Wrapper that applies the scroll-linked parallax transform to its children. */
export default function ParallaxLayer({
  speed = 0.2,
  className = "",
  style,
  children,
}: ParallaxLayerProps) {
  const ref = useParallax<HTMLDivElement>(speed);
  return (
    <div ref={ref} className={`will-change-transform ${className}`} style={style}>
      {children}
    </div>
  );
}
