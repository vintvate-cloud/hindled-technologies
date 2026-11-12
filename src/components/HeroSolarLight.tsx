import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { Zap } from "lucide-react";
import { useContactDrawer } from "./ContactDrawer";

interface HeroSolarLightProps {
  isReady?: boolean;
}

function BatteryChargingHUD({ progress }: { progress: MotionValue<number> }) {
  // Pure Framer Motion transform - ZERO React state re-renders during scroll!
  const fillWidth = useTransform(progress, [0, 1], ["55%", "100%"]);
  const boltColor = useTransform(progress, [0, 0.95, 1], ["#ffffff", "#ffffff", "#fcd34d"]);

  return (
    <div className="relative flex items-center select-none filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]">
      {/* Bold Battery Shell */}
      <div className="w-14 sm:w-20 md:w-24 h-7 sm:h-9 md:h-11 rounded-lg sm:rounded-xl border-2 border-emerald-400/90 p-[3px] sm:p-1 flex items-center bg-black/80 backdrop-blur-md relative overflow-hidden shadow-[0_0_24px_rgba(16,185,129,0.45)]">
        {/* Animated Green Charge Fill */}
        <motion.div
          style={{ width: fillWidth }}
          className="h-full rounded-[4px] sm:rounded-md bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 shadow-[0_0_16px_#10B981] will-change-[width]"
        />
        {/* Pulsing Lightning Bolt Inside Battery */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div style={{ color: boltColor }} className="animate-pulse">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 drop-shadow-lg" />
          </motion.div>
        </div>
      </div>
      {/* Battery Positive Terminal Tip */}
      <div className="w-1 sm:w-1.5 h-3.5 sm:h-4.5 md:h-5 rounded-r-md bg-emerald-400/90 ml-[2px] shadow-[0_0_8px_#10b981]" />
    </div>
  );
}

export function HeroSolarLight({ isReady = true }: HeroSolarLightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openDrawer } = useContactDrawer();

  // Scroll Progress (0 -> 1 over the hero container)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Buttery-smooth spring tuned for mobile touch momentum and desktop scroll wheel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.15,
    restDelta: 0.001,
  });

  // Smooth, gradual progression over the hero scroll runway
  const p = useTransform(smoothProgress, [0, 0.58], [0, 1]);

  // Pure GPU-composited opacity transforms - ZERO React state re-renders during scroll!
  const daySkyOpacity = useTransform(p, [0, 0.42], [1, 0]);
  const duskSkyOpacity = useTransform(p, [0.08, 0.38, 0.72], [0, 1, 0]);
  const nightSkyOpacity = useTransform(p, [0.28, 0.68], [0, 1]);
  const starsOpacity = useTransform(p, [0.35, 0.75], [0, 0.95]);

  // Locked Celestial Orb (Seamless Sun-to-Moon morph in place)
  const sunOpacity = useTransform(p, [0, 0.48], [1, 0]);
  const moonOpacity = useTransform(p, [0.2, 0.65], [0, 1]);
  const moonAuraOpacity = useTransform(p, [0.28, 0.72], [0, 1]);


  // Ground silhouette cross-fades
  const dayGroundOpacity = useTransform(p, [0, 0.42], [1, 0]);
  const nightGroundOpacity = useTransform(p, [0.25, 0.62], [0, 1]);

  // Subtle Single-Source Luminaire Night Illumination
  const luminaireNightGlow = useTransform(p, [0.36, 0.65], [0, 1]);


  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full h-[220vh] sm:h-[220vh] md:h-[240vh] bg-[#071538] touch-pan-y"
    >
      {/* Sticky Fullscreen Cinematic Hero Stage */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-center select-none bg-[#071538]">

        {/* ============================================================ 3 GPU-ACCELERATED SKY LAYERS (0 REFLOWS / 120FPS MOBILE PERFORMANCE) */}

        {/* Layer 1: Radiant Azure Day Sky */}
        <motion.div
          className="absolute inset-0 pointer-events-none will-change-[opacity]"
          style={{
            opacity: daySkyOpacity,
            background: "linear-gradient(180deg, #357ec7 0%, #7dbcf6 45%, #d8eeff 100%)",
          }}
        />

        {/* Layer 2: Golden Sunset & Twilight Sky */}
        <motion.div
          className="absolute inset-0 pointer-events-none will-change-[opacity]"
          style={{
            opacity: duskSkyOpacity,
            background: "linear-gradient(180deg, #1f1b4b 0%, #7c2d58 40%, #e06c3a 75%, #fbb040 100%)",
          }}
        />

        {/* Layer 3: Deep Midnight Blue Starry Sky */}
        <motion.div
          className="absolute inset-0 pointer-events-none will-change-[opacity]"
          style={{
            opacity: nightSkyOpacity,
            background: "linear-gradient(180deg, #061438 0%, #0d2763 45%, #163d8a 82%, #1d4a9e 100%)",
          }}
        />

        {/* Shimmering Night Stars Field */}
        <motion.div
          className="absolute inset-0 pointer-events-none will-change-[opacity]"
          style={{ opacity: starsOpacity }}
        >
          {/* Lightweight repeat star pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_30px,#fff,rgba(0,0,0,0)),radial-gradient(1.5px_1.5px_at_80px_120px,#ffffff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_160px_60px,#ffd599,rgba(0,0,0,0)),radial-gradient(2px_2px_at_240px_180px,#ffffff,rgba(0,0,0,0)),radial-gradient(1.5px_1.5px_at_320px_90px,#a5c4ff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_420px_220px,#ffffff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_560px_80px,#ffffff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_680px_260px,#ffd599,rgba(0,0,0,0)),radial-gradient(1.5px_1.5px_at_800px_140px,#ffffff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_950px_70px,#a5c4ff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_1100px_210px,#ffffff,rgba(0,0,0,0))] bg-repeat bg-[size:360px_360px] opacity-80" />
        </motion.div>

        {/* ============================================================ CELESTIAL ORB (SUN & MOON POSITIONED TO THE LEFT) */}
        <div
          className="absolute z-[4] pointer-events-none top-[88px] sm:top-[11vh] md:top-[12vh] lg:top-[12vh] right-[5vw] sm:right-[34vw] md:right-[38vw] lg:right-[44vw] w-10 h-10 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]"
        >
  {/* Day Mode Subtle Volumetric Solar Rays (Seamless atmospheric glow + crepuscular beams toward ADITI pole) */ }
  <motion.div
    className="hidden sm:block absolute inset-0 pointer-events-none mix-blend-screen will-change-[opacity]"
    style={{ opacity: sunOpacity }}
  >
    {/* Outer Wide Atmospheric Solar Corona (Fades to zero well inside bounds) */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-[38%] -translate-y-[44%] w-[62vw] h-[56vh] rotate-[14deg] pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse 46% 32% at 24% 38%, rgba(255,249,214,0.34) 0%, rgba(253,224,71,0.14) 36%, rgba(251,191,36,0.04) 58%, transparent 74%)",
      }}
    />
    {/* Seamless Feathered Crepuscular Sunbeams (Gradient fades smoothly at both ends — zero mask clipping) */}
    <div
      className="absolute top-[46%] left-[38%] w-[44vw] h-16 rounded-full blur-[18px] rotate-[8deg] origin-[32px_50%]"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,252,225,0) 0%, rgba(255,252,225,0.28) 14%, rgba(254,240,138,0.12) 50%, rgba(254,240,138,0) 88%)",
      }}
    />
    <div
      className="absolute top-[48%] left-[36%] w-[45vw] h-24 rounded-full blur-[22px] rotate-[16deg] origin-[36px_50%]"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,250,210,0) 0%, rgba(255,250,210,0.32) 16%, rgba(253,224,71,0.14) 52%, rgba(253,224,71,0) 90%)",
      }}
    />
    <div
      className="absolute top-[50%] left-[34%] w-[42vw] h-16 rounded-full blur-[20px] rotate-[25deg] origin-[32px_50%]"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,248,200,0) 0%, rgba(255,248,200,0.24) 16%, rgba(251,191,36,0.10) 48%, rgba(251,191,36,0) 86%)",
      }}
    />
  </motion.div>

  {/* Mobile Subtle Solar Rays (Streaming down softly from Sun toward lower-right ADITI column) */ }
  <motion.div
    className="sm:hidden absolute inset-0 pointer-events-none mix-blend-screen will-change-[opacity]"
    style={{ opacity: sunOpacity }}
  >
    <div
      className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-[20%] w-[52vw] h-[48vh] rotate-[86deg] pointer-events-none"
      style={{
        background:
        "radial-gradient(ellipse 46% 32% at 24% 48%, rgba(255,249,214,0.34) 0%, rgba(253,224,71,0.14) 38%, transparent 72%)",
      }}
    />
    <div
      className="absolute top-[52%] left-[44%] w-[40vh] h-10 rounded-full blur-[16px] rotate-[84deg] origin-[16px_50%]"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,250,210,0) 0%, rgba(255,250,210,0.30) 16%, rgba(253,224,71,0.12) 52%, rgba(253,224,71,0) 88%)",
      }}
    />
    <div
      className="absolute top-[54%] left-[40%] w-[38vh] h-12 rounded-full blur-[16px] rotate-[102deg] origin-[16px_50%]"
      style={{
        background:
          "linear-gradient(90deg, rgba(255,248,200,0) 0%, rgba(255,248,200,0.24) 16%, rgba(251,191,36,0.10) 50%, rgba(251,191,36,0) 86%)",
      }}
    />
  </motion.div>

  {/* Sun Layer */ }
  <motion.div
    className="absolute inset-0 rounded-full will-change-[opacity]"
    style={{
      background: "radial-gradient(circle, #fff6c9 0%, #f4a41d 60%, rgba(244,164,29,0) 72%)",
      opacity: sunOpacity,
    }}
  />

  {/* Moon Layer */ }
  <motion.div
    className="absolute inset-0 rounded-full will-change-[opacity]"
    style={{
      background: "radial-gradient(circle, #ffffff 0%, #f1f5f9 28%, #94a3b8 60%, rgba(148,163,184,0) 72%)",
      opacity: moonOpacity,
    }}
  >
    {/* Soft Celestial Moonlight Aura */}
    <motion.div
      className="absolute inset-0 rounded-full will-change-[opacity]"
      style={{
        boxShadow: "0 0 28px rgba(255,255,255,0.45), 0 0 60px rgba(203,213,225,0.25)",
        opacity: moonAuraOpacity,
      }}
    />
  </motion.div>
        </div>

        {/* Ambient Ground Silhouette & Landscape Horizon */}
        <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 md:h-36 z-3 pointer-events-none">
          {/* Day Horizon */}
          <motion.div
            className="absolute inset-0 will-change-[opacity]"
            style={{
              background: "linear-gradient(180deg, transparent 0%, #1d3326 60%, #112017 100%)",
              opacity: dayGroundOpacity,
            }}
          />
          {/* Night Horizon */}
          <motion.div
            className="absolute inset-0 will-change-[opacity]"
            style={{
              background: "linear-gradient(180deg, transparent 0%, #071636 60%, #040d22 100%)",
              opacity: nightGroundOpacity,
            }}
          />
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* ============================================================ ADITI SOLAR SMART POLE */}
        <div className="absolute right-[-4vw] sm:right-[1.5vw] md:right-[3vw] lg:right-[4vw] bottom-0 z-10 h-[42vh] sm:h-[70vh] md:h-[82vh] lg:h-[86vh] pointer-events-none flex items-end justify-center select-none transform-gpu">

          {/* Smart Pole Image Container */}
          <div className="relative z-10 h-full flex items-end justify-center">

            {/* Ground Contact Depth Shadow */}
            <div className="absolute -bottom-2 w-32 h-6 bg-black/85 rounded-full blur-md pointer-events-none" />

            {/* ADITI Solar Smart Luminaire Clean PNG */}
            <img
              src="/removed-aditi-bg.png"
              alt="ADITI Solar Smart Luminaire"
              className="relative z-10 h-full w-auto max-h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
              loading="eager"
            />

            {/* Single Subtle Light Source, Narrow-to-Wide Conical Night Beam & Circular Ground Pool */}
            <motion.div
              style={{ opacity: luminaireNightGlow }}
              className="absolute inset-0 z-20 pointer-events-none will-change-[opacity]"
            >
              {/* Soft, Angled Optical Lens Glow matching the fixture's physical angle */}
              <div className="absolute top-[4.8%] left-[36%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative rotate-[14deg] flex items-center justify-center">
                  {/* Subtle soft lens illumination */}
                  <div className="w-10 sm:w-16 md:w-20 h-2.5 sm:h-4.5 rounded-[999px] bg-gradient-to-r from-amber-100/85 via-white/95 to-amber-100/85 blur-[1.5px] shadow-[0_0_8px_rgba(255,255,240,0.65),0_0_18px_rgba(254,240,138,0.3)] mix-blend-screen" />

                  {/* Soft diffused atmospheric halo */}
                  <div className="absolute inset-0 -m-3 sm:-m-5 rounded-full bg-amber-200/25 blur-md pointer-events-none" />
                </div>
              </div>

              {/* Full-Height Volumetric Conical Canal (Narrow at Lens Top -> Flares Outward -> Circular Pool on Ground) */}
              <svg
                className="absolute top-[4.6%] bottom-[-2%] left-[-40%] w-[135%] h-[97.4%] pointer-events-none mix-blend-screen overflow-visible"
                viewBox="0 0 400 600"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Soft Outer Atmospheric Cone Blur */}
                  <filter id="nightConeFeather" x="-40%" y="-20%" width="180%" height="150%">
                    <feGaussianBlur stdDeviation="24" />
                  </filter>

                  {/* Inner Canal & Circular Pool Feather */}
                  <filter id="nightCoreFeather" x="-40%" y="-20%" width="180%" height="150%">
                    <feGaussianBlur stdDeviation="12" />
                  </filter>

                  {/* Top-to-Bottom Photometric Beam Falloff Gradient */}
                  <linearGradient id="nightConeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fffef2" stopOpacity="0.62" />
                    <stop offset="16%" stopColor="#fef9c3" stopOpacity="0.34" />
                    <stop offset="52%" stopColor="#e0f2fe" stopOpacity="0.16" />
                    <stop offset="85%" stopColor="#fef9c3" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#fef9c3" stopOpacity="0" />
                  </linearGradient>

                  {/* Narrow Focused Center Canal Gradient */}
                  <linearGradient id="nightCanalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.72" />
                    <stop offset="22%" stopColor="#fef9c3" stopOpacity="0.36" />
                    <stop offset="65%" stopColor="#e0f2fe" stopOpacity="0.14" />
                    <stop offset="92%" stopColor="#fef9c3" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#fef9c3" stopOpacity="0" />
                  </linearGradient>

                  {/* Smooth Circular Ground Illumination Pool Gradient */}
                  <radialGradient id="nightGroundPoolGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fffef5" stopOpacity="0.52" />
                    <stop offset="32%" stopColor="#fef9c3" stopOpacity="0.28" />
                    <stop offset="66%" stopColor="#bae6fd" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#bae6fd" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Wide Flared Volumetric Spill Cone (Narrow top canal -> wide curved bottom spread) */}
                <path
                  d="M 210 12 L 240 12 Q 295 290 352 548 C 356 584 285 594 185 594 C 85 594 16 584 22 548 Q 115 290 210 12 Z"
                  fill="url(#nightConeGrad)"
                  filter="url(#nightConeFeather)"
                />

                {/* Concentrated Inner Canal Core (Thin neck at luminaire expanding downward) */}
                <path
                  d="M 218 10 L 232 10 Q 262 280 286 544 C 288 575 245 584 185 584 C 125 584 82 575 86 544 Q 145 280 218 10 Z"
                  fill="url(#nightCanalGrad)"
                  filter="url(#nightCoreFeather)"
                />

                {/* Circular Illuminated Light Pool on the Ground */}
                <ellipse
                  cx="185"
                  cy="562"
                  rx="168"
                  ry="52"
                  fill="url(#nightGroundPoolGrad)"
                  filter="url(#nightCoreFeather)"
                />
                <ellipse
                  cx="185"
                  cy="562"
                  rx="116"
                  ry="34"
                  fill="url(#nightGroundPoolGrad)"
                  opacity="0.9"
                />
                <ellipse
                  cx="185"
                  cy="562"
                  rx="64"
                  ry="18"
                  fill="url(#nightGroundPoolGrad)"
                  opacity="0.85"
                />
              </svg>
            </motion.div>

            {/* ADITI Solar Luminaire Product Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="absolute z-30 bottom-4 left-2 -translate-x-[68%] sm:left-2 sm:-translate-x-full sm:bottom-12 md:bottom-16 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-2xl whitespace-nowrap pointer-events-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10b981] animate-pulse" />
              <span className="font-mono text-[8.5px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-white uppercase">
                ADITI SOLAR SMART POLE
              </span>
            </motion.div>
          </div>
        </div>

        {/* ============================================================ HERO CONTENT / TYPOGRAPHY / HEADLINE */}
        <div className="relative z-20 mx-auto w-full max-w-[1550px] px-5 sm:px-10 lg:px-14 pt-[94px] sm:pt-28 md:pt-32 pb-6 sm:pb-16 flex flex-col justify-start sm:justify-center h-full pointer-events-none">
          {/* Main Headline & Value Proposition */}
          <div className="max-w-full sm:max-w-2xl lg:max-w-3xl pointer-events-auto py-0 sm:py-8">

            {/* Heritage Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-xl mb-4 sm:mb-6 max-w-[75vw] sm:max-w-none"
            >
              <span className="w-2 h-2 rounded-full bg-[#f4a41d] shrink-0 animate-pulse" />
              <span className="font-display font-semibold text-[10px] sm:text-xs md:text-sm text-amber-300 truncate sm:whitespace-normal">
                Beyond efficiency total energy independence
              </span>
            </motion.div>

            {/* Animated Main Headline (Original Text) */}
            <h1 className="font-display text-white text-[9.5vw] sm:text-[7vw] md:text-[5vw] lg:text-[4.6vw] font-extrabold leading-[0.98] sm:leading-[0.92] tracking-[-0.03em] drop-shadow-2xl">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                POWERED BY DAY.
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                BRIGHT BY <span className="text-[#10B981] drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]">NIGHT.</span>
              </motion.div>
            </h1>

            {/* Subtitle / Paragraph (Original Text) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 sm:mt-6 max-w-[92vw] sm:max-w-2xl text-[13.5px] sm:text-lg md:text-xl text-white/95 font-medium leading-[1.48] sm:leading-relaxed drop-shadow-md"
            >
              Make the shift from energy efficiency to complete energy independence — our company range of solar street light, architectural smart poles, and off-grid roadway lighting operates <strong className="font-bold text-white underline decoration-[#10B981] decoration-2 underline-offset-4">100% on solar power</strong>, eliminating electricity bills for modern infrastructure.
            </motion.p>

            {/* Action Buttons (Original Text & Responsive Sizing) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 w-fit sm:max-w-none"
            >
              <a
                href="#featured-products"
                className="rounded-full border border-white/35 hover:border-white bg-black/75 hover:bg-black/90 backdrop-blur-md text-white font-bold uppercase tracking-wider sm:tracking-widest px-5 sm:px-8 py-2.5 sm:py-4 text-[10.5px] sm:text-xs shadow-2xl cursor-pointer inline-flex items-center justify-center gap-2 group transition-all text-center whitespace-nowrap"
              >
                <span>Explore Featured Products</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <button
                onClick={openDrawer}
                className="rounded-full border border-white/30 hover:border-white bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 sm:px-7 py-2.5 sm:py-4 text-[10.5px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-white transition-all cursor-pointer shadow-md text-center whitespace-nowrap"
              >
                Get Free Consultation
              </button>
            </motion.div>

            {/* Live Battery Charge Animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.85, delay: 0.55, ease: "easeOut" }}
              className="mt-3.5 sm:mt-7 flex items-center"
            >
              <BatteryChargingHUD progress={p} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

