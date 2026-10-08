import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useContactDrawer } from "./ContactDrawer";

interface HeroSolarLightProps {
  isReady?: boolean;
}

export function HeroSolarLight({ isReady = true }: HeroSolarLightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openDrawer } = useContactDrawer();

  // Scroll Progress (0 -> 1 over the hero container)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Fast, responsive spring tailored for buttery mobile touch gestures (120fps / zero jank)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 28,
    mass: 0.1,
    restDelta: 0.0005,
  });

  // Complete the Sun-to-Moon day-to-night conversion smoothly in the first 42% of scroll
  // and hold rock-solid for the rest of the section
  const p = useTransform(smoothProgress, [0, 0.42], [0, 1]);

  // Pure GPU-composited opacity transforms - ZERO React state re-renders during scroll!
  const daySkyOpacity = useTransform(p, [0, 0.38], [1, 0]);
  const duskSkyOpacity = useTransform(p, [0, 0.3, 0.65], [0, 1, 0]);
  const nightSkyOpacity = useTransform(p, [0.22, 0.6], [0, 1]);
  const starsOpacity = useTransform(p, [0.3, 0.7], [0, 0.95]);

  // Locked Celestial Orb (Seamless Sun-to-Moon morph in place)
  const sunOpacity = useTransform(p, [0, 0.42], [1, 0]);
  const moonOpacity = useTransform(p, [0.16, 0.58], [0, 1]);
  const moonAuraOpacity = useTransform(p, [0.22, 0.65], [0, 1]);

  // Soft Volumetric Illumination Beam & Ground Pool
  const coneOpacity = useTransform(p, [0.18, 0.58], [0, 1]);

  // Ground silhouette cross-fades
  const dayGroundOpacity = useTransform(p, [0, 0.35], [1, 0]);
  const nightGroundOpacity = useTransform(p, [0.2, 0.55], [0, 1]);

  // Solar active harvest pulse overlay
  const solarPulseOpacity = useTransform(p, [0, 0.28], [0.45, 0]);

  // Smart CCTV status LED
  const cctvDayOpacity = useTransform(p, [0, 0.32], [1, 0]);
  const cctvNightOpacity = useTransform(p, [0.32, 0.48], [0, 1]);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full h-[180vh] sm:h-[210vh] md:h-[240vh] bg-[#070913] touch-pan-y"
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

        {/* ============================================================ LOCKED CELESTIAL ORB (SNAPPY SUN-TO-MOON MORPH) */}
        <div
          className="absolute z-2 pointer-events-none top-[8vh] sm:top-[12vh] right-[5vw] sm:right-[10vw] md:right-[14vw] w-18 h-18 sm:w-28 sm:h-28 md:w-[120px] md:h-[120px]"
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

        {/* ============================================================ HL TEJAS ARCHITECTURAL SMART POLE VECTOR (MOBILE RESPONSIVE & SMOOTH VOLUMETRIC CONE) */}
        <div className="absolute -right-4 sm:right-[2vw] md:right-[6vw] lg:right-[10vw] bottom-0 z-10 h-[56vh] sm:h-[70vh] md:h-[82vh] lg:h-[86vh] w-[210px] sm:w-[320px] md:w-[400px] lg:w-[460px] pointer-events-none flex items-end justify-center transform-gpu">
          
          {/* SVG Smart Pole + Illumination Cone */}
          <svg
            className="w-full h-full drop-shadow-2xl overflow-visible"
            viewBox="0 0 340 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Ultra-soft feathering blur filters for completely seamless gradient beam */}
              <filter id="beamSoftBlur" x="-60%" y="-20%" width="220%" height="150%">
                <feGaussianBlur stdDeviation="24" />
              </filter>
              <filter id="beamMidBlur" x="-40%" y="-15%" width="180%" height="130%">
                <feGaussianBlur stdDeviation="14" />
              </filter>
              <filter id="coreGlow" x="-30%" y="-15%" width="160%" height="130%">
                <feGaussianBlur stdDeviation="8" />
              </filter>
              <filter id="groundGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="16" />
              </filter>

              {/* Volumetric Radial Cone Gradient (Smooth falloff in all directions with 0 sharp edges) */}
              <radialGradient id="volumetricRadialGrad" cx="90" cy="80" rx="300" ry="630" fx="90" fy="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="10%" stopColor="#fffbeb" stopOpacity="0.75" />
                <stop offset="28%" stopColor="#fef08a" stopOpacity="0.45" />
                <stop offset="55%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="82%" stopColor="#d97706" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.0" />
              </radialGradient>

              {/* Soft Linear Beam Gradient */}
              <linearGradient id="softLinearGrad" x1="90" y1="80" x2="90" y2="700" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="15%" stopColor="#fef08a" stopOpacity="0.6" />
                <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.25" />
                <stop offset="80%" stopColor="#d97706" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.0" />
              </linearGradient>

              <radialGradient id="groundPoolGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#fde68a" stopOpacity="0.55" />
                <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>

              {/* Solar Panel Monocrystalline Texture Pattern */}
              <pattern id="solarGridPattern" width="16" height="12" patternUnits="userSpaceOnUse">
                <rect width="16" height="12" fill="#0f172a" stroke="#1e293b" strokeWidth="0.8" />
                <path d="M0 6h16M8 0v12" stroke="#334155" strokeWidth="0.5" />
                <circle cx="8" cy="6" r="1" fill="#38bdf8" opacity="0.4" />
              </pattern>

              {/* Solar Panel Active Energy Harvest Pulse Gradient */}
              <linearGradient id="solarHarvestGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
              </linearGradient>

              {/* Metal Column Gradient */}
              <linearGradient id="poleMetalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e2433" />
                <stop offset="35%" stopColor="#3d4960" />
                <stop offset="70%" stopColor="#1e2433" />
                <stop offset="100%" stopColor="#0d111a" />
              </linearGradient>

              {/* Luminaire Glow Filter */}
              <filter id="lampGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ==================== VOLUMETRIC LIGHT BEAM CONE (100% FEATHERED GRADIENT NO SHARP EDGES) ==================== */}
            <motion.g
              style={{
                opacity: coneOpacity,
              }}
              className="will-change-[opacity]"
            >
              {/* Layer 1: Wide atmospheric feathered ambient haze */}
              <polygon
                points="75,82 -200,700 420,700 125,82"
                fill="url(#volumetricRadialGrad)"
                opacity="0.6"
                filter="url(#beamSoftBlur)"
              />

              {/* Layer 2: Mid diffused soft volumetric beam */}
              <polygon
                points="76,82 -120,700 340,700 124,82"
                fill="url(#volumetricRadialGrad)"
                opacity="0.75"
                filter="url(#beamMidBlur)"
              />

              {/* Layer 3: Soft feathered luminous central core (blurred to eliminate hard edges) */}
              <polygon
                points="80,82 -40,700 240,700 118,82"
                fill="url(#softLinearGrad)"
                opacity="0.7"
                filter="url(#coreGlow)"
              />

              {/* Ground Pool of Light */}
              <ellipse
                cx="100"
                cy="685"
                rx="240"
                ry="45"
                fill="url(#groundPoolGrad)"
                filter="url(#groundGlow)"
              />

              {/* Floating Light Dust Particles */}
              <circle cx="85" cy="200" r="2" fill="#fff" opacity="0.8" />
              <circle cx="40" cy="350" r="2.5" fill="#fef08a" opacity="0.6" />
              <circle cx="140" cy="480" r="1.5" fill="#fff" opacity="0.7" />
              <circle cx="-10" cy="580" r="3" fill="#fde047" opacity="0.5" />
              <circle cx="180" cy="620" r="2" fill="#fff" opacity="0.6" />
            </motion.g>

            {/* ==================== HL TEJAS STRUCTURAL COLUMN ==================== */}

            {/* Sturdy Base Flange */}
            <rect x="156" y="660" width="36" height="30" rx="3" fill="#0f131c" />
            <rect x="148" y="682" width="52" height="10" rx="2" fill="#1c2436" stroke="#2d3b55" strokeWidth="1" />
            <circle cx="156" cy="687" r="2.5" fill="#64748b" />
            <circle cx="192" cy="687" r="2.5" fill="#64748b" />

            {/* Main Structural Pole Mast */}
            <rect x="165" y="80" width="18" height="585" rx="2" fill="url(#poleMetalGrad)" stroke="#0b0e17" strokeWidth="1" />

            {/* ==================== 360° VERTICAL HPBC SOLAR MODULE WRAP ==================== */}
            <g>
              {/* Solar Panel Housing Base */}
              <rect
                x="161"
                y="140"
                width="26"
                height="340"
                rx="4"
                fill="url(#solarGridPattern)"
                stroke="#38bdf8"
                strokeWidth="1"
                strokeOpacity="0.7"
              />

              {/* Active Sunlight Harvest Energy Overlay (GPU opacity fade during dusk) */}
              <motion.rect
                x="162"
                y="141"
                width="24"
                height="338"
                rx="3"
                fill="url(#solarHarvestGrad)"
                style={{ opacity: solarPulseOpacity }}
                className="animate-pulse will-change-[opacity]"
              />

              {/* Glass Specular Gloss Highlight */}
              <line x1="164" y1="145" x2="164" y2="475" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
              <line x1="184" y1="145" x2="184" y2="475" stroke="#000000" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
            </g>

            {/* ==================== INTERNAL LiFePO4 BATTERY CORE ==================== */}
            <g>
              <rect x="163" y="500" width="22" height="130" rx="3" fill="#0d111a" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.6" />
              
              <rect x="166" y="506" width="16" height="24" rx="2" fill="#15803d" />
              <rect x="166" y="534" width="16" height="24" rx="2" fill="#15803d" />
              <rect x="166" y="562" width="16" height="24" rx="2" fill="#15803d" />
              <rect x="166" y="590" width="16" height="24" rx="2" fill="#15803d" />
              
              <circle cx="174" cy="622" r="2.5" fill="#22c55e" className="animate-pulse" />
            </g>

            {/* ==================== ARCHITECTURAL LUMINAIRE ARM & FIXTURE ==================== */}
            <g>
              <path
                d="M174 100 C174 65, 140 68, 90 74"
                stroke="#171d2b"
                strokeWidth="12"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M174 100 C174 65, 140 68, 90 74"
                stroke="#334155"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />

              <rect x="52" y="66" width="76" height="16" rx="6" fill="#111827" stroke="#374151" strokeWidth="1.5" />

              {/* Day Off Lens */}
              <rect
                x="60"
                y="80"
                width="60"
                height="6"
                rx="2"
                fill="#cbd5e1"
                stroke="#64748b"
                strokeWidth="1"
              />

              {/* Night Glowing Active Luminaire Lens */}
              <motion.rect
                x="60"
                y="80"
                width="60"
                height="6"
                rx="2"
                fill="#fffbeb"
                stroke="#fde047"
                strokeWidth="1"
                filter="url(#lampGlow)"
                style={{ opacity: coneOpacity }}
                className="will-change-[opacity]"
              />

              {/* LED Multi-Emitter Array */}
              <g fill="#475569">
                <circle cx="68" cy="83" r="1.5" />
                <circle cx="78" cy="83" r="1.5" />
                <circle cx="88" cy="83" r="1.5" />
                <circle cx="98" cy="83" r="1.5" />
                <circle cx="108" cy="83" r="1.5" />
              </g>
            </g>

            {/* ==================== SMART CCTV SURVEILLANCE & IoT SENSOR TOP HEAD ==================== */}
            <g>
              <rect x="162" y="70" width="24" height="12" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />

              <line x1="174" y1="70" x2="174" y2="40" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="174" cy="38" r="3" fill="#ef4444" className="animate-pulse" />

              <rect x="180" y="88" width="14" height="6" fill="#1e293b" />
              <path d="M192 86 L206 82 L206 100 L192 96 Z" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              
              <circle cx="206" cy="91" r="5" fill="#020617" stroke="#38bdf8" strokeWidth="1" />
              
              {/* Day CCTV indicator (Green) */}
              <motion.circle
                cx="206"
                cy="91"
                r="2"
                fill="#22c55e"
                style={{ opacity: cctvDayOpacity }}
                className="animate-ping will-change-[opacity]"
              />
              {/* Night CCTV indicator (Active Red IR) */}
              <motion.circle
                cx="206"
                cy="91"
                r="2"
                fill="#ef4444"
                style={{ opacity: cctvNightOpacity }}
                className="animate-ping will-change-[opacity]"
              />
            </g>
          </svg>
        </div>

        {/* ============================================================ HERO CONTENT / TYPOGRAPHY / HEADLINE */}
        <div className="relative z-20 mx-auto w-full max-w-[1550px] px-5 sm:px-10 lg:px-14 pt-16 sm:pt-28 md:pt-32 pb-8 sm:pb-16 flex flex-col justify-center h-full pointer-events-none">
          {/* Main Headline & Value Proposition */}
          <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl pointer-events-auto py-3 sm:py-8">
            
            {/* Heritage Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-xl mb-3 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f4a41d] animate-pulse" />
              <span className="font-display font-semibold text-[11px] sm:text-xs md:text-sm text-amber-300">
                सूरज से जलती रोशनी
              </span>
              <span className="text-white/40 text-xs">|</span>
              <span className="font-mono text-[10px] sm:text-[11px] md:text-xs text-white/90 uppercase tracking-widest">
                HL Tejas Smart Pole
              </span>
            </motion.div>

            {/* Animated Main Headline (Original Text) */}
            <h1 className="font-display text-white text-[10.5vw] sm:text-[7vw] md:text-[5vw] lg:text-[4.6vw] font-extrabold leading-[0.92] tracking-[-0.04em] drop-shadow-2xl">
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
              className="mt-3.5 sm:mt-6 max-w-xl sm:max-w-2xl text-xs sm:text-base md:text-lg text-white/90 font-light leading-relaxed drop-shadow-md"
            >
              Architectural solar smart poles, off-grid roadway lighting, and high-power solar floodlights engineered to operate <strong className="font-bold text-white underline decoration-[#10B981] decoration-2 underline-offset-4">100% on solar power</strong> with zero electricity bills across roads, campuses, and infrastructure.
            </motion.p>

            {/* Action Buttons (Original Text & Styling) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#featured-products"
                className="rounded-full bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold uppercase tracking-widest px-5 sm:px-8 py-3 sm:py-4 text-[11px] sm:text-xs shadow-2xl cursor-pointer inline-flex items-center gap-2 group transition-all"
              >
                <span>Explore Featured Products</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <button
                onClick={openDrawer}
                className="rounded-full border border-white/30 hover:border-white bg-black/40 hover:bg-black/60 backdrop-blur-md px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white transition-all cursor-pointer shadow-md"
              >
                Get Free Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

