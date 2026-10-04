import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EditorialPreloaderProps {
  onComplete?: () => void;
}

export function EditorialPreloader({ onComplete }: EditorialPreloaderProps) {
  const [phase, setPhase] = useState<"intro" | "open" | "done">("intro");

  useEffect(() => {
    // Eagerly pre-warm hero imagery during animation
    const img1 = new Image();
    img1.src = "/hero_light_bg_hires.webp";
    const img2 = new Image();
    img2.src = "/hero_light_bg_hires.jpg";

    // 1. Hold logo & gentle center glow for 750ms
    const openTimer = setTimeout(() => {
      setPhase("open");
      if (onComplete) onComplete();
    }, 750);

    // 2. Complete transition and clean unmount
    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 1850);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none overflow-hidden select-none">
      
      {/* 1. Main White Shutter Canvas with Smooth Center-Out Iris Reveal */}
      <motion.div
        initial={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
        animate={{
          clipPath: phase === "open" ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
          opacity: phase === "open" ? [1, 1, 0.8, 0] : 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1], // Ultra-luxurious, organic cubic-bezier
        }}
        className="absolute inset-0 w-full h-full bg-white flex items-center justify-center"
        style={{ willChange: "clip-path, opacity" }}
      >
        {/* Soft Ambient Radial Light Behind Logo (Natural, Organic, No Borders) */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{
            scale: phase === "open" ? 1.6 : [0.92, 1.1, 0.96],
            opacity: phase === "open" ? 0 : [0.35, 0.6, 0.45],
          }}
          transition={{
            duration: phase === "open" ? 0.7 : 2,
            ease: "easeInOut",
            repeat: phase === "intro" ? Infinity : 0,
          }}
          className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(52, 211, 153, 0.12) 40%, rgba(255, 255, 255, 0) 70%)",
          }}
        />

        {/* Minimalist Official Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{
            opacity: phase === "open" ? 0 : 1,
            scale: phase === "open" ? 1.06 : 1,
          }}
          transition={{
            duration: phase === "open" ? 0.5 : 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10 flex items-center justify-center p-6"
        >
          <img
            src="/logo_horizontal.png"
            alt="HINDLED Technologies"
            className="h-10 sm:h-12 md:h-14 w-auto max-w-[260px] sm:max-w-[320px] object-contain drop-shadow-[0_4px_20px_rgba(16,185,129,0.15)]"
          />
        </motion.div>
      </motion.div>

      {/* 2. Soft Luminous Center Dissolve Fill (Ensures Buttery Feathered Transition) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: phase === "open" ? [0, 0.5, 0] : 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
        }}
      />
    </div>
  );
}

export default EditorialPreloader;
