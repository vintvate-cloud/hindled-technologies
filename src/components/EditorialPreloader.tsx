import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EditorialPreloaderProps {
  onComplete?: () => void;
}

export function EditorialPreloader({ onComplete }: EditorialPreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState<"loading" | "centering" | "exiting">("loading");
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let isCancelled = false;
    let animationFrameId: number;

    // Pre-warm high-resolution assets in background
    try {
      const img1 = new Image();
      img1.src = "/hero_light_bg_hires.webp";
      const img2 = new Image();
      img2.src = "/hero_light_bg_hires.jpg";
      const sym = new Image();
      sym.src = "/logo_symbol.png";
      const word = new Image();
      word.src = "/logo_wordmark.png";
    } catch {
      // safe fallback
    }

    let start: number | null = null;
    const duration = 1100; // ms: silky, brisk luxury pacing

    const animate = (timestamp: number) => {
      if (isCancelled) return;
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cubic deceleration (1 - (1 - t)^3)
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(eased * 100);
      setPercent(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setPercent(100);

        // Phase 2: Wordmark leaves, Art Logo glides to the center
        setTimeout(() => {
          if (isCancelled) return;
          setPhase("centering");

          // Phase 3: Multi-layer curtain wipe unveils the website
          setTimeout(() => {
            if (isCancelled) return;
            setPhase("exiting");

            // Trigger hero scale-down & reveal in tandem with the lifting shutters
            setTimeout(() => {
              if (isCancelled) return;
              onCompleteRef.current?.();
            }, 180);
          }, 850);
        }, 150);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    // Hard fail-safe: guaranteed never stuck under any circumstance
    const failsafe = setTimeout(() => {
      if (isCancelled) return;
      setPercent(100);
      setPhase("exiting");
      onCompleteRef.current?.();
    }, 3600);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      clearTimeout(failsafe);
    };
  }, []);

  const isExiting = phase === "exiting";
  const isCentering = phase === "centering";

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader-overlay-root"
          className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden"
        >
          {/* ======================================================== LAYER 1 (BACKDROP CURTAIN) */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{
              y: "-100%",
              transition: {
                duration: 1.05,
                delay: 0.0,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="absolute inset-0 bg-[#030303] pointer-events-none"
          />

          {/* ======================================================== LAYER 2 (MIDDLE EMERALD DEPTH CURTAIN) */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.98,
                delay: 0.08,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="absolute inset-0 bg-[#05130D] border-b border-signal/20 pointer-events-none"
          />

          {/* ======================================================== LAYER 3 (FOREGROUND STAGE CURTAIN) */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.92,
                delay: 0.16,
                ease: [0.76, 0, 0.24, 1],
              },
            }}
            className="absolute inset-0 bg-[#070707] flex flex-col justify-between p-7 sm:p-12 md:p-16 overflow-hidden border-b border-signal/35 pointer-events-auto"
          >
            {/* Top Header Label */}
            <motion.div
              animate={isCentering ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 flex items-center justify-between w-full text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/35 uppercase"
            >
              <span>HINDLED TECHNOLOGIES</span>
              <span className="hidden sm:inline">SOLAR ARCHITECTURE</span>
            </motion.div>

            {/* Center Brand Focal Point (Transforming Logo) */}
            <div className="relative z-10 flex flex-col items-center justify-center my-auto w-full">
              <motion.div
                layout
                className="flex items-center justify-center relative"
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* 1. The Art Emblem Logo (Smoothly centers as the wordmark collapses) */}
                <motion.div
                  layout
                  animate={
                    isCentering
                      ? {
                          scale: 1.35,
                        }
                      : {
                          scale: 1,
                        }
                  }
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0 flex items-center justify-center"
                >
                  <img
                    src="/logo_symbol.png"
                    alt="HINDLED Art Logo"
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                  />
                </motion.div>

                {/* 2. The HINDLED Text Wordmark (Slides & collapses out smoothly) */}
                <motion.div
                  animate={
                    isCentering
                      ? {
                          opacity: 0,
                          width: 0,
                          marginLeft: 0,
                          x: 24,
                          filter: "blur(6px)",
                        }
                      : {
                          opacity: 1,
                          width: "auto",
                          marginLeft: 14,
                          x: 0,
                          filter: "blur(0px)",
                        }
                  }
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden flex items-center shrink-0"
                >
                  <img
                    src="/logo_wordmark.png"
                    alt="HINDLED"
                    className="h-8 sm:h-10 md:h-11 w-auto max-w-[260px] sm:max-w-[320px] object-contain"
                  />
                </motion.div>
              </motion.div>

              {/* 1px Hairline Solar Progress Bar (Fades away during centering) */}
              <motion.div
                animate={isCentering ? { opacity: 0, scale: 0.85, y: 10 } : { opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative mt-8 w-44 sm:w-56 h-[1.5px] bg-white/10 rounded-full overflow-hidden"
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-signal"
                  style={{ width: `${percent}%` }}
                />
              </motion.div>
            </div>

            {/* Bottom spacer / empty footer */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EditorialPreloader;
export { EditorialPreloader as ArchitecturalPreloader };
