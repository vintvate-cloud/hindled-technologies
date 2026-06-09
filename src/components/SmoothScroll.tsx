import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function LenisGsapBridge() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(raf);
    };
  }, [lenis]);
  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const Lenis = ReactLenis as unknown as React.ComponentType<{
    root?: boolean;
    options?: Record<string, unknown>;
    children?: ReactNode;
  }>;
  return (
    <Lenis
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        autoRaf: false,
      }}
    >
      <LenisGsapBridge />
      {children}
    </Lenis>
  );
}
