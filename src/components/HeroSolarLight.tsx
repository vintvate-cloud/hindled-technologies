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

  // Soft Volumetric Illumination Beam & Ground Pool
  const coneOpacity = useTransform(p, [0.22, 0.68], [0, 1]);

  // Ground silhouette cross-fades
  const dayGroundOpacity = useTransform(p, [0, 0.42], [1, 0]);
  const nightGroundOpacity = useTransform(p, [0.25, 0.62], [0, 1]);

  // Solar active harvest pulse overlay
  const solarPulseOpacity = useTransform(p, [0, 0.32], [0.45, 0]);

  // Smart CCTV status LED
  const cctvDayOpacity = useTransform(p, [0, 0.38], [1, 0]);
  const cctvNightOpacity = useTransform(p, [0.38, 0.55], [0, 1]);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full h-[220vh] sm:h-[220vh] md:h-[240vh] bg-[#070913] touch-pan-y"
    >
      {/* Sticky Fullscreen Cinematic Hero Stage */}
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-center select-none bg-[#070913]">
        
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

        {/* Layer 3: Deep Midnight Starry Sky */}
        <motion.div
          className="absolute inset-0 pointer-events-none will-change-[opacity]"
          style={{
            opacity: nightSkyOpacity,
            background: "linear-gradient(180deg, #050711 0%, #0a0e20 45%, #11172e 100%)",
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

        {/* ============================================================ LOCKED CELESTIAL ORB (MOON/SUN IN OPEN SKY - CLEAR OF POLE) */}
        <div
          className="absolute z-2 pointer-events-none top-[7.5vh] sm:top-[10vh] right-[14vw] sm:right-[22vw] md:right-[24vw] lg:right-[26vw] w-14 h-14 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px]"
        >
          {/* Sun Layer */}
          <motion.div
            className="absolute inset-0 rounded-full will-change-[opacity]"
            style={{
              background: "radial-gradient(circle, #fff6c9 0%, #f4a41d 60%, rgba(244,164,29,0) 72%)",
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
              background: "linear-gradient(180deg, transparent 0%, #060810 60%, #030408 100%)",
              opacity: nightGroundOpacity,
            }}
          />
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* ============================================================ TEJAS SMART POLE (LIGHT EMANATING NATURALLY FROM UNDER LUMINAIRE WITH ZERO HARSH OVERLAYS) */}
        <div className="absolute right-2 sm:right-[3vw] md:right-[6vw] lg:right-[10vw] bottom-0 z-10 h-[62vh] sm:h-[70vh] md:h-[82vh] lg:h-[86vh] pointer-events-none flex items-end justify-center select-none transform-gpu">
          
          {/* Volumetric Night Illumination Cone & Ground Shadow/Pool (Placed cleanly BEHIND/UNDER pole fixture) */}
          <motion.div
            style={{ opacity: coneOpacity }}
            className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none will-change-[opacity]"
          >
            {/* SVG Illumination Cone - Starts directly under the luminaire bracket and casts a wide downward beam */}
            <svg
              className="absolute -bottom-8 w-[440%] h-[126%] -left-[170%] overflow-visible pointer-events-none"
              viewBox="0 0 600 860"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="heroBeamBlurWide" x="-50%" y="-30%" width="200%" height="160%">
                  <feGaussianBlur stdDeviation="34" />
                </filter>
                <filter id="heroBeamBlurCore" x="-30%" y="-20%" width="160%" height="140%">
                  <feGaussianBlur stdDeviation="14" />
                </filter>
                <filter id="heroGroundBlur" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="22" />
                </filter>
                <filter id="poleShadowBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>

                {/* Soft feathered volumetric radial gradient starting cleanly under luminaire neck */}
                <radialGradient id="heroRadialGrad" cx="296" cy="40" rx="420" ry="860" fx="296" fy="40" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.88" />
                  <stop offset="16%" stopColor="#fef08a" stopOpacity="0.52" />
                  <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.18" />
                  <stop offset="78%" stopColor="#d97706" stopOpacity="0.03" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                </radialGradient>

                {/* Core directional linear beam gradient angled downwards to the left */}
                <linearGradient id="heroLinearBeamGrad" x1="296" y1="40" x2="245" y2="840" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                  <stop offset="14%" stopColor="#fef08a" stopOpacity="0.48" />
                  <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.16" />
                  <stop offset="80%" stopColor="#d97706" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                </linearGradient>

                {/* Ambient ground pool illumination biased towards the front-left */}
                <radialGradient id="heroGroundGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.85" />
                  <stop offset="35%" stopColor="#fde68a" stopOpacity="0.5" />
                  <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>

                {/* Ground Contact Shadow */}
                <radialGradient id="poleContactShadow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#000000" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Directional Ground Shadow under the pole base */}
              <ellipse
                cx="335"
                cy="830"
                rx="65"
                ry="13"
                fill="url(#poleContactShadow)"
                filter="url(#poleShadowBlur)"
              />
              <path
                d="M 305 825 L 430 835 L 410 842 L 295 830 Z"
                fill="#000000"
                opacity="0.7"
                filter="url(#poleShadowBlur)"
              />

              {/* Layer 1: Wide atmospheric haze cone angled down and left from beneath luminaire */}
              <polygon
                points="288,40 -40,845 550,845 304,40"
                fill="url(#heroRadialGrad)"
                opacity="0.68"
                filter="url(#heroBeamBlurWide)"
              />

              {/* Layer 2: Core luminous focused beam */}
              <polygon
                points="292,40 50,845 445,845 300,40"
                fill="url(#heroLinearBeamGrad)"
                opacity="0.78"
                filter="url(#heroBeamBlurCore)"
              />

              {/* Extended Ground Pool of warm ambient light */}
              <ellipse
                cx="250"
                cy="830"
                rx="280"
                ry="48"
                fill="url(#heroGroundGrad)"
                filter="url(#heroGroundBlur)"
              />

              {/* Floating luminous dust motes */}
              <circle cx="275" cy="160" r="2" fill="#fff" opacity="0.8" />
              <circle cx="215" cy="320" r="2.5" fill="#fef08a" opacity="0.65" />
              <circle cx="320" cy="460" r="1.5" fill="#fff" opacity="0.65" />
              <circle cx="165" cy="620" r="2.5" fill="#fde047" opacity="0.5" />
              <circle cx="345" cy="700" r="2" fill="#fff" opacity="0.55" />
              <circle cx="110" cy="760" r="2" fill="#fef08a" opacity="0.4" />
              <circle cx="380" cy="780" r="1.8" fill="#fff" opacity="0.45" />
            </svg>
          </motion.div>

          {/* Smart Pole Image Container */}
          <div className="relative z-10 h-full flex items-end justify-center">
            
            {/* Ground Contact Depth Shadow */}
            <div className="absolute -bottom-2 w-32 h-6 bg-black/85 rounded-full blur-md pointer-events-none" />

            {/* Daytime Solar Harvest Pulse Glow */}
            <motion.div
              style={{ opacity: solarPulseOpacity }}
              className="absolute inset-y-16 w-20 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-md pointer-events-none will-change-[opacity]"
            />

            {/* TEJAS Smart Pole Clean PNG (Crisp Foreground, No Harsh Blobs On Top) */}
            <img
              src="/tejas_hero_pole_crop-removebg-preview.png"
              alt="TEJAS Solar Smart Pole"
              className="relative z-10 h-full w-auto max-h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
              loading="eager"
            />

            {/* Smart CCTV Camera Live Telemetry Indicator (Subtle LED on Camera Lens) */}
            <div className="absolute z-20 top-[9.6%] left-[34%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
              {/* Daytime Status (Green Ping) */}
              <motion.div
                style={{ opacity: cctvDayOpacity }}
                className="relative flex items-center justify-center will-change-[opacity]"
              >
                <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
              </motion.div>

              {/* Night Active IR Surveillance (Red Ping) */}
              <motion.div
                style={{ opacity: cctvNightOpacity }}
                className="absolute inset-0 flex items-center justify-center will-change-[opacity]"
              >
                <span className="absolute w-2.5 h-2.5 rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_6px_#ef4444]" />
              </motion.div>
            </div>

            {/* HL Tejas Smart Pole Product Tag placed cleanly */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="absolute z-30 bottom-3 sm:bottom-12 md:bottom-16 right-1 sm:right-auto sm:left-2 sm:-translate-x-full flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-2xl whitespace-nowrap pointer-events-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10b981] animate-pulse" />
              <span className="font-mono text-[8px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-white uppercase">
                HL TEJAS SMART POLE
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
                सूरज से जलती रोशनी
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
              className="mt-3 sm:mt-6 max-w-[92%] sm:max-w-2xl text-[12px] sm:text-base md:text-lg text-white/90 font-normal sm:font-light leading-snug sm:leading-relaxed drop-shadow-md"
            >
              Architectural solar smart poles, off-grid roadway lighting, and high-power solar floodlights engineered to operate <strong className="font-bold text-white underline decoration-[#10B981] decoration-2 underline-offset-4">100% on solar power</strong> with zero electricity bills across roads, campuses, and infrastructure.
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
                className="rounded-full bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold uppercase tracking-wider sm:tracking-widest px-5 sm:px-8 py-2.5 sm:py-4 text-[11px] sm:text-xs shadow-2xl cursor-pointer inline-flex items-center justify-center gap-2 group transition-all text-center"
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

