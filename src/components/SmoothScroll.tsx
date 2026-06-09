import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const Lenis = ReactLenis as unknown as React.ComponentType<{
    root?: boolean;
    options?: Record<string, unknown>;
    children?: ReactNode;
  }>;
  return (
    <Lenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true }}>
      {children}
    </Lenis>
  );
}
