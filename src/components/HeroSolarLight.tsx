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

function SolarChargingStreamlines({ sunOpacity }: { sunOpacity: MotionValue<number> }) {
  return (
    <motion.div
      style={{ opacity: sunOpacity }}
      className="absolute inset-0 pointer-events-none z-[6] overflow-hidden will-change-[opacity]"
    >
      <style>{`
        @keyframes rayBreath {
          0%, 100% { opacity: 0.38; transform: scale(0.99); }
          50% { opacity: 0.62; transform: scale(1.01); }
        }
        @keyframes pvHarvestScan {
          0% { transform: translateY(-100%); opacity: 0; }
          25% { opacity: 0.65; }
          75% { opacity: 0.65; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>

      {/* Desktop / Tablet Atmospheric Sun Rays (Pure Volumetric Gradient Glow — Zero Internal Lines) */}
      <svg
        className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Deep Volumetric Ray Feathering: Renders 100% soft Gaussian gradient light */}
          <filter id="sunRayFeather" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>

          {/* Broad Crepuscular Fan Atmosphere Filter */}
          <filter id="fanAtmosphereBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="24" />
          </filter>

          {/* Soft Absorption Bloom Diffusion */}
          <filter id="bloomSoftBlur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" />
          </filter>

          {/* Radial Bloom for Solar Energy Absorption Nodes */}
          <radialGradient id="absorptionGlow">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#10b981" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>

          {/* Volumetric Sunray Gradients: Pure continuous gradient with 0% falloff at origin (sun) & target (pole) */}
          <linearGradient id="volumetricSunRay1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="0" />
            <stop offset="10%" stopColor="#fef08a" stopOpacity="0.45" />
            <stop offset="38%" stopColor="#fde047" stopOpacity="0.35" />
            <stop offset="68%" stopColor="#38bdf8" stopOpacity="0.28" />
            <stop offset="92%" stopColor="#10b981" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="volumetricSunRay2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="0" />
            <stop offset="12%" stopColor="#fef08a" stopOpacity="0.4" />
            <stop offset="42%" stopColor="#fbbf24" stopOpacity="0.3" />
            <stop offset="72%" stopColor="#67e8f9" stopOpacity="0.28" />
            <stop offset="92%" stopColor="#34d399" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 1. BROAD ATMOSPHERIC CREPUSCULAR HAZE (Soft fan of light from Sun toward ADITI pole) */}
        <g filter="url(#fanAtmosphereBlur)" className="mix-blend-screen origin-top-left" style={{ animation: "rayBreath 5.5s ease-in-out infinite" }}>
          <polygon points="535,166 825,250 825,430" fill="url(#volumetricSunRay1)" opacity="0.38" />
          <polygon points="535,166 825,410 825,550" fill="url(#volumetricSunRay2)" opacity="0.34" />
          <polygon points="535,166 825,530 825,640" fill="url(#volumetricSunRay1)" opacity="0.28" />
        </g>

        {/* 2. VOLUMETRIC SUNBEAM SHAFTS (Ultra-Soft Seamless Gaussian Rays — Zero Lines, Pure Gradient) */}
        <g filter="url(#sunRayFeather)" className="mix-blend-screen">
          <path d="M 535 166 C 630 170, 740 215, 825 265" fill="none" stroke="url(#volumetricSunRay1)" strokeWidth="42" strokeLinecap="round" opacity="0.55" />
          <path d="M 535 166 C 635 190, 745 275, 825 355" fill="none" stroke="url(#volumetricSunRay2)" strokeWidth="46" strokeLinecap="round" opacity="0.6" />
          <path d="M 535 166 C 640 215, 750 345, 825 445" fill="none" stroke="url(#volumetricSunRay1)" strokeWidth="44" strokeLinecap="round" opacity="0.55" />
          <path d="M 535 166 C 650 240, 750 420, 825 535" fill="none" stroke="url(#volumetricSunRay2)" strokeWidth="40" strokeLinecap="round" opacity="0.5" />
          <path d="M 535 166 C 660 265, 750 495, 825 625" fill="none" stroke="url(#volumetricSunRay1)" strokeWidth="36" strokeLinecap="round" opacity="0.45" />
        </g>

        {/* 3. PHOTOVOLTAIC ABSORPTION BLOOMS (Soft radial light blooms on the vertical silicon collector) */}
        <g filter="url(#bloomSoftBlur)" className="mix-blend-screen">
          <circle cx="825" cy="265" r="10" fill="url(#absorptionGlow)" />
          <circle cx="825" cy="265" r="15" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.35" className="animate-ping" />

          <circle cx="825" cy="355" r="12" fill="url(#absorptionGlow)" />
          <circle cx="825" cy="355" r="18" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.4" className="animate-ping" />

          <circle cx="825" cy="445" r="11" fill="url(#absorptionGlow)" />
          <circle cx="825" cy="445" r="16" fill="none" stroke="#34d399" strokeWidth="1" opacity="0.35" className="animate-ping" />

          <circle cx="825" cy="535" r="10" fill="url(#absorptionGlow)" />
          <circle cx="825" cy="535" r="14" fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0.35" className="animate-ping" />

          <circle cx="825" cy="625" r="9" fill="url(#absorptionGlow)" />
          <circle cx="825" cy="625" r="13" fill="none" stroke="#fde047" strokeWidth="1" opacity="0.3" className="animate-ping" />
        </g>
      </svg>

      {/* Mobile Sun Rays (Pure Volumetric Gradient Glow) */}
      <svg
        className="sm:hidden absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Mobile Volumetric Fan */}
        <g filter="url(#fanAtmosphereBlur)" className="mix-blend-screen origin-top-left" style={{ animation: "rayBreath 5.5s ease-in-out infinite" }}>
          <polygon points="720,80 840,350 840,650" fill="url(#volumetricSunRay1)" opacity="0.4" />
        </g>

        {/* Mobile Volumetric Ray Shafts */}
        <g filter="url(#sunRayFeather)" className="mix-blend-screen">
          <path d="M 720 80 C 760 170, 800 280, 840 370" fill="none" stroke="url(#volumetricSunRay1)" strokeWidth="30" strokeLinecap="round" opacity="0.55" />
          <path d="M 720 80 C 760 220, 800 370, 840 480" fill="none" stroke="url(#volumetricSunRay2)" strokeWidth="32" strokeLinecap="round" opacity="0.6" />
          <path d="M 720 80 C 770 270, 800 480, 840 590" fill="none" stroke="url(#volumetricSunRay1)" strokeWidth="26" strokeLinecap="round" opacity="0.5" />
        </g>

        {/* Mobile Absorption Blooms */}
        <g filter="url(#bloomSoftBlur)" className="mix-blend-screen">
          <circle cx="840" cy="370" r="9" fill="url(#absorptionGlow)" />
          <circle cx="840" cy="480" r="10" fill="url(#absorptionGlow)" />
          <circle cx="840" cy="590" r="8" fill="url(#absorptionGlow)" />
        </g>
      </svg>
    </motion.div>
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
          className="absolute z-[4] pointer-events-none top-[8vh] sm:top-[11vh] md:top-[12vh] lg:top-[12vh] right-[28vw] sm:right-[34vw] md:right-[38vw] lg:right-[44vw] w-14 h-14 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]"
        >
          {/* Sun Layer */}
          <motion.div
            className="absolute inset-0 rounded-full will-change-[opacity]"
            style={{
              background: "radial-gradient(circle, #fff6c9 0%, #f4a41d 60%, rgba(244,164,29,0) 72%)",
              boxShadow: "0 0 24px rgba(251, 191, 36, 0.45), 0 0 48px rgba(245, 158, 11, 0.2)",
              opacity: sunOpacity,
            }}
          />

          {/* Moon Layer */}
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

        {/* ============================================================ SOLAR CHARGING STREAMLINES (ACTIVE DAYLIGHT ENERGY HARVEST) */}
        <SolarChargingStreamlines sunOpacity={sunOpacity} />

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
        <div className="absolute right-1 sm:right-[1.5vw] md:right-[3vw] lg:right-[4vw] bottom-0 z-10 h-[62vh] sm:h-[70vh] md:h-[82vh] lg:h-[86vh] pointer-events-none flex items-end justify-center select-none transform-gpu">

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

            {/* Photovoltaic Vertical Silicon Absorption Column (Daylight Harvesting Sheen — Exactly over 360° Solar Panels) */}
            <motion.div
              style={{ opacity: sunOpacity }}
              className="absolute z-15 top-[12.8%] bottom-[40.8%] left-[44.6%] w-[10.8%] pointer-events-none overflow-hidden rounded-t-[8px] rounded-b-[4px] will-change-[opacity]"
            >
              {/* Ambient Translucent Crystal Luminescence */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-200/10 via-cyan-400/15 to-emerald-400/20 mix-blend-screen" />

              {/* Cascading Photon Absorption Sweep across Hexagonal Solar Cells */}
              <div
                className="w-full h-full mix-blend-screen opacity-65"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(254,240,138,0.25) 20%, rgba(56,189,248,0.5) 50%, rgba(16,185,129,0.5) 80%, transparent 100%)",
                  animation: "pvHarvestScan 3.2s ease-in-out infinite",
                }}
              />
            </motion.div>


            {/* Single Subtle Light Source & Volumetric Night Rays (Illuminating from optical lens face) */}
            <motion.div
              style={{ opacity: luminaireNightGlow }}
              className="absolute z-20 top-[4.8%] left-[36%] -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-[opacity]"
            >
              {/* Soft, Angled Optical Lens Glow matching the fixture's physical angle */}
              <div className="relative rotate-[14deg] flex items-center justify-center">
                {/* Subtle soft lens illumination */}
                <div className="w-12 sm:w-16 md:w-20 h-3 sm:h-4.5 rounded-[999px] bg-gradient-to-r from-amber-100/80 via-white/95 to-amber-100/80 blur-[2px] shadow-[0_0_10px_rgba(255,255,240,0.5),0_0_20px_rgba(254,240,138,0.2)] mix-blend-screen" />

                {/* Soft diffused atmospheric halo */}
                <div className="absolute inset-0 -m-3 sm:-m-5 rounded-full bg-amber-200/20 blur-lg pointer-events-none" />
              </div>

              {/* Downward Photometric Volumetric Light Pool - 100% Seamless Soft Gaussian Radial Falloff (Zero Hard Edges) */}
              <div
                className="absolute top-2 left-1/2 -translate-x-[54%] w-[260px] sm:w-[380px] md:w-[460px] h-[46vh] sm:h-[54vh] md:h-[62vh] pointer-events-none origin-top rotate-[8deg] mix-blend-screen rounded-full"
                style={{
                  maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 15%, transparent 85%)",
                  WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 15%, transparent 85%)",
                }}
              >
                {/* Wide Feathered Photometric Spill Cone */}
                <div
                  className="w-full h-full rounded-full blur-[32px] sm:blur-[44px]"
                  style={{
                    background:
                      "radial-gradient(ellipse 65% 75% at 50% 20%, rgba(255,253,240,0.30) 0%, rgba(224,242,254,0.12) 36%, rgba(186,230,253,0.02) 60%, transparent 75%)",
                  }}
                />

                {/* Soft Core Optical Light Column */}
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-[50%] h-[75%] rounded-full blur-[20px] sm:blur-[28px]"
                  style={{
                    background:
                      "radial-gradient(ellipse 55% 65% at 50% 25%, rgba(255,254,242,0.38) 0%, rgba(254,249,195,0.12) 38%, transparent 70%)",
                  }}
                />
              </div>
            </motion.div>

            {/* ADITI Solar Luminaire Product Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="absolute z-30 bottom-3 sm:bottom-12 md:bottom-16 right-1 sm:right-auto sm:left-2 sm:-translate-x-full flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-2xl whitespace-nowrap pointer-events-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10b981] animate-pulse" />
              <span className="font-mono text-[8px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-white uppercase">
                ADITI SOLAR SMART POLE
              </span>
            </motion.div>
          </div>
        </div>

        {/* ============================================================ HERO CONTENT / TYPOGRAPHY / HEADLINE */}
        <div className="relative z-20 mx-auto w-full max-w-[1550px] px-4 sm:px-10 lg:px-14 pt-20 sm:pt-28 md:pt-32 pb-6 sm:pb-16 flex flex-col justify-center h-full pointer-events-none">
          {/* Main Headline & Value Proposition */}
          <div className="max-w-[82vw] sm:max-w-2xl lg:max-w-3xl pointer-events-auto py-2 sm:py-8">

            {/* Heritage Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-xl mb-2.5 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f4a41d] animate-pulse" />
              <span className="font-display font-semibold text-[10px] sm:text-xs md:text-sm text-amber-300">
                Beyond efficiency total energy independence
              </span>
            </motion.div>

            {/* Animated Main Headline (Original Text) */}
            <h1 className="font-display text-white text-[8.5vw] sm:text-[7vw] md:text-[5vw] lg:text-[4.6vw] font-extrabold leading-[1.02] sm:leading-[0.92] tracking-[-0.03em] drop-shadow-2xl">
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
              className="mt-4 sm:mt-6 max-w-[94%] sm:max-w-2xl text-sm sm:text-lg md:text-xl text-white/95 font-medium leading-relaxed drop-shadow-md"
            >
              Make the shift from energy efficiency to complete energy independence — our company range of solar street light, architectural smart poles, and off-grid roadway lighting operates <strong className="font-bold text-white underline decoration-[#10B981] decoration-2 underline-offset-4">100% on solar power</strong>, eliminating electricity bills for modern infrastructure.
            </motion.p>

            {/* Action Buttons (Original Text & Responsive Sizing) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 max-w-[290px] sm:max-w-none"
            >
              <a
                href="#featured-products"
                className="rounded-full border border-white/35 hover:border-white bg-black/75 hover:bg-black/90 backdrop-blur-md text-white font-bold uppercase tracking-wider sm:tracking-widest px-5 sm:px-8 py-2.5 sm:py-4 text-[11px] sm:text-xs shadow-2xl cursor-pointer inline-flex items-center justify-center gap-2 group transition-all text-center"
              >
                <span>Explore Featured Products</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <button
                onClick={openDrawer}
                className="rounded-full border border-white/30 hover:border-white bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 sm:px-7 py-2.5 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest text-white transition-all cursor-pointer shadow-md text-center"
              >
                Get Free Consultation
              </button>
            </motion.div>

            {/* Live Battery Charge Animation */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.85, delay: 0.55, ease: "easeOut" }}
              className="mt-4 sm:mt-7 flex items-center"
            >
              <BatteryChargingHUD progress={p} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

