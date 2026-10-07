import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EditorialPreloaderProps {
  onComplete?: () => void;
}

export function EditorialPreloader({ onComplete }: EditorialPreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Pre-warm hero high-resolution textures in browser memory
    const img1 = new Image();
    img1.src = "/hero_light_bg_hires.webp";
    const img2 = new Image();
    img2.src = "/hero_light_bg_hires.jpg";

    let start: number | null = null;
    const duration = 1200; // ms: silky, brisk luxury pacing
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      // Silky cubic deceleration (fast launch, calm precision glide to 100)
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(eased * 100);
      setPercent(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setPercent(100);
        // Brief poised hold at 100% before shutter lifts
        setTimeout(() => {
          setIsExiting(true);
          // Trigger hero scale-down & reveal in tandem with the lifting shutter
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 140);
        }, 180);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="architectural-curtain-container"
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.95,
              ease: [0.76, 0, 0.24, 1], // Quintessential luxury easing curve
            },
          }}
          className="fixed inset-0 z-[99999] bg-[#070707] flex flex-col justify-between p-7 sm:p-12 md:p-16 select-none overflow-hidden border-b border-signal/25 shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
        >
          {/* Subtle Ambient Solar Photon Halo */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0.25 }}
            animate={{
              scale: [0.85, 1.08, 0.92],
              opacity: [0.25, 0.45, 0.3],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(5, 150, 105, 0.12) 40%, transparent 70%)",
            }}
          />

          {/* Top Header Label */}
          <div className="relative z-10 flex items-center justify-between w-full text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/35 uppercase">
            <span>HINDLED TECHNOLOGIES</span>
            <span className="hidden sm:inline">SOLAR ARCHITECTURE</span>
          </div>

          {/* Center Brand Focal Point */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <img
                src="/logo_horizontal_dark.png"
                alt="HINDLED Technologies"
                className="h-10 sm:h-12 md:h-14 w-auto max-w-[280px] sm:max-w-[340px] object-contain brightness-110 drop-shadow-[0_4px_24px_rgba(16,185,129,0.22)]"
              />

              {/* 1px Hairline Solar Progress Bar */}
              <div className="relative mt-8 w-44 sm:w-56 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-signal shadow-[0_0_10px_rgba(16,185,129,0.85)]"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer Info & Minimalist Counter */}
          <div className="relative z-10 flex items-center justify-between w-full font-mono text-[11px] sm:text-[12px] tracking-widest text-white/40">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-signal/70 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-white/30 uppercase">
                INITIALIZING
              </span>
            </div>

            <div className="tabular-nums font-medium">
              <span className="text-white/80">{String(percent).padStart(3, "0")}</span>
              <span className="text-white/20"> / 100</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EditorialPreloader;
export { EditorialPreloader as ArchitecturalPreloader };

