import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EditorialPreloaderProps {
  onComplete?: () => void;
}

export function EditorialPreloader({ onComplete }: EditorialPreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Eagerly pre-warm hero imagery
    const img1 = new Image();
    img1.src = "/hero_light_bg_hires.webp";
    const img2 = new Image();
    img2.src = "/hero_light_bg_hires.jpg";

    // 1.3s of clean, serene logo display
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="clean-fade-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1], // Pure silky-smooth Apple/Leica ease curve
            },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white overflow-hidden pointer-events-none select-none"
        >
          {/* Subtle Ambient Radial Light Halo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.4 }}
            animate={{
              scale: [0.9, 1.12, 0.95],
              opacity: [0.4, 0.7, 0.45],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(16, 185, 129, 0.28) 0%, rgba(52, 211, 153, 0.14) 40%, rgba(255, 255, 255, 0) 70%)",
            }}
          />

          {/* Central Official HINDLED Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10 flex items-center justify-center p-6"
          >
            <img
              src="/logo_horizontal.png"
              alt="HINDLED Technologies"
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[280px] sm:max-w-[340px] object-contain drop-shadow-[0_4px_16px_rgba(16,185,129,0.12)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EditorialPreloader;
