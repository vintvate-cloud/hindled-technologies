import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useContactDrawer } from "./ContactDrawer";

interface HeroSolarLightProps {
  isReady?: boolean;
}

export function HeroSolarLight({ isReady = true }: HeroSolarLightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openDrawer } = useContactDrawer();

  // Scroll Progress (0 -> 1 over the 190vh container)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.2,
  });

  const [currentP, setCurrentP] = useState(0);

  useEffect(() => {
    const unsubscribe = smoothScrollProgress.on("change", (latest) => {
      // Fast, prompt transition completing at 40% scroll, holding steady for the remaining 60%
      const mapped = Math.min(1, Math.max(0, latest / 0.40));
      setCurrentP(mapped);
    });
    return () => unsubscribe();
  }, [smoothScrollProgress]);

  // Derived phase (0..0.30 Day, 0.30..0.60 Dusk, 0.60..1.0 Night)
  const isDay = currentP < 0.30;
  const isDusk = currentP >= 0.30 && currentP < 0.60;
  const isNight = currentP >= 0.60;

  // Sky gradient calculations
  const getSkyStyle = (p: number) => {
    const clamped = Math.max(0, Math.min(1, p));
    
    if (clamped < 0.35) {
      // Rapid, smooth Day -> Golden Sunset transition
      const factor = clamped / 0.35;
      return {
        background: `linear-gradient(180deg, 
          color-mix(in srgb, #357ec7 ${Math.round((1 - factor) * 100)}%, #201c4e) 0%, 
          color-mix(in srgb, #7dbcf6 ${Math.round((1 - factor) * 100)}%, #a8424b) 50%, 
          color-mix(in srgb, #d8eeff ${Math.round((1 - factor) * 100)}%, #f59e0b) 100%)`,
      };
    } else {
      // Golden Sunset -> Midnight Starry Sky
      const factor = (clamped - 0.35) / 0.65;
      return {
        background: `linear-gradient(180deg, 
          color-mix(in srgb, #201c4e ${Math.round((1 - factor) * 100)}%, #050711) 0%, 
          color-mix(in srgb, #7c2d58 ${Math.round((1 - factor) * 100)}%, #0a0e20) 45%, 
          color-mix(in srgb, #c25934 ${Math.round((1 - factor) * 100)}%, #11172e) 100%)`,
      };
    }
  };

  // Solar Light Cone Opacity & Intensity (Lights up proactively at dusk)
  const coneOpacity = Math.max(0, Math.min(1, (currentP - 0.20) * 2.2));

  // Stars opacity at night
  const starsOpacity = Math.max(0, (currentP - 0.30) * 2.5);

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full h-[210vh] sm:h-[230vh] bg-[#0A0D1A]"
    >
      {/* Sticky Fullscreen Cinematic Hero Stage */}
      <div
        className="sticky top-0 h-[100vh] w-full overflow-hidden flex flex-col justify-between transition-colors duration-500 select-none"
        style={getSkyStyle(currentP)}
      >
        {/* ============================================================ CELESTIAL ELEMENTS (SUN, MOON, STARS, CLOUDS) */}
        
        {/* Shimmering Night Stars Field */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700 z-1"
          style={{ opacity: starsOpacity }}
        >
          {/* Constellation Canvas / Star Particles */}
          <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_30px,#fff,rgba(0,0,0,0)),radial-gradient(1.5px_1.5px_at_80px_120px,#ffffff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_160px_60px,#ffd599,rgba(0,0,0,0)),radial-gradient(2px_2px_at_240px_180px,#ffffff,rgba(0,0,0,0)),radial-gradient(1.5px_1.5px_at_320px_90px,#a5c4ff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_420px_220px,#ffffff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_560px_80px,#ffffff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_680px_260px,#ffd599,rgba(0,0,0,0)),radial-gradient(1.5px_1.5px_at_800px_140px,#ffffff,rgba(0,0,0,0)),radial-gradient(1px_1px_at_950px_70px,#a5c4ff,rgba(0,0,0,0)),radial-gradient(2px_2px_at_1100px_210px,#ffffff,rgba(0,0,0,0))] bg-repeat bg-[size:400px_400px] opacity-80" />
        </div>

        {/* ==================== LOCKED CELESTIAL ORB (SNAPPY FAST SUN-TO-MOON MORPH) ==================== */}
        <div
          className="absolute z-2 pointer-events-none"
          style={{
            top: "12vh",
            right: "14vw",
            width: "120px",
            height: "120px",
          }}
        >
          {/* Sun Layer (Fades out promptly) */}
          <div
            className="absolute inset-0 rounded-full transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle, #fff6c9 0%, #f4a41d 60%, rgba(244,164,29,0) 72%)",
              opacity: Math.max(0, 1 - currentP * 2.4),
            }}
          />

          {/* Moon Layer (Rises in swiftly and luminously) */}
          <div
            className="absolute inset-0 rounded-full transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, #f1f5f9 28%, #94a3b8 60%, rgba(148,163,184,0) 72%)",
              opacity: Math.min(1, Math.max(0, currentP * 2.5)),
            }}
          >
            {/* Soft Celestial Moonlight Aura */}
            <div
              className="absolute inset-0 rounded-full transition-opacity duration-500"
              style={{
                boxShadow: "0 0 35px rgba(255,255,255,0.45), 0 0 75px rgba(203,213,225,0.25)",
                opacity: Math.min(1, Math.max(0, currentP * 2.2)),
              }}
            />
          </div>
        </div>

        {/* Ambient Ground Silhouette & Landscape Horizon */}
        <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 z-3 pointer-events-none">
          {/* Ground surface plane */}
          <div
            className="w-full h-full transition-colors duration-700"
            style={{
              background: isNight
                ? "linear-gradient(180deg, transparent 0%, #060810 60%, #030408 100%)"
                : isDusk
                ? "linear-gradient(180deg, transparent 0%, #201328 60%, #150a1e 100%)"
                : "linear-gradient(180deg, transparent 0%, #1d3326 60%, #112017 100%)",
            }}
          />
          {/* Road / Surface Grid line */}
          <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* ============================================================ HL TEJAS ARCHITECTURAL SMART POLE VECTOR (PRECISION SVG & VOLUMETRIC CONE) */}
        <div className="absolute right-[3vw] sm:right-[7vw] md:right-[10vw] lg:right-[12vw] bottom-0 z-10 h-[72vh] sm:h-[80vh] md:h-[86vh] w-[300px] sm:w-[380px] md:w-[460px] pointer-events-none flex items-end justify-center">
          
          {/* SVG Smart Pole + Illumination Cone */}
          <svg
            className="w-full h-full drop-shadow-2xl overflow-visible"
            viewBox="0 0 340 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Soft atmospheric blur filters for realistic diffused beam edges */}
              <filter id="beamFeather" x="-50%" y="-20%" width="200%" height="140%">
                <feGaussianBlur stdDeviation="24" />
              </filter>
              <filter id="coreBeamFeather" x="-30%" y="-20%" width="160%" height="140%">
                <feGaussianBlur stdDeviation="10" />
              </filter>
              <filter id="wideHaze" x="-60%" y="-30%" width="220%" height="160%">
                <feGaussianBlur stdDeviation="45" />
              </filter>
              <filter id="groundGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="16" />
              </filter>

              {/* Volumetric Glowing Light Beam Gradients */}
              <linearGradient id="volumetricConeGrad" x1="100" y1="80" x2="100" y2="700" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fffdf0" stopOpacity="0.95" />
                <stop offset="12%" stopColor="#fef08a" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.35" />
                <stop offset="90%" stopColor="#d97706" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.0" />
              </linearGradient>

              <radialGradient id="groundPoolGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#fde68a" stopOpacity="0.5" />
                <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.2" />
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
                <stop offset="0%" stopColor="#f59e0b" stopOpacity={isDay ? "0.6" : "0.1"} />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity={isDay ? "0.8" : "0.2"} />
                <stop offset="100%" stopColor="#10b981" stopOpacity={isDay ? "0.9" : "0.3"} />
              </linearGradient>

              {/* Metal Column Gradient */}
              <linearGradient id="poleMetalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e2433" />
                <stop offset="35%" stopColor="#3d4960" />
                <stop offset="70%" stopColor="#1e2433" />
                <stop offset="100%" stopColor="#0d111a" />
              </linearGradient>

              {/* Luminaire Glow Filter */}
              <filter id="lampGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* ==================== VOLUMETRIC LIGHT BEAM CONE (FEATHERED GRADIENT NO SHARP EDGES) ==================== */}
            <g
              style={{
                opacity: coneOpacity,
                transition: "opacity 0.25s ease-out",
              }}
            >
              {/* Wide ambient atmospheric haze */}
              <polygon
                points="75,82 -180,700 400,700 125,82"
                fill="url(#volumetricConeGrad)"
                opacity="0.55"
                filter="url(#wideHaze)"
              />

              {/* Mid diffused soft volumetric beam */}
              <polygon
                points="76,82 -110,700 330,700 124,82"
                fill="url(#volumetricConeGrad)"
                opacity="0.75"
                filter="url(#beamFeather)"
              />

              {/* Focused central core with gentle edge blur */}
              <polygon
                points="80,82 -30,700 230,700 115,82"
                fill="url(#volumetricConeGrad)"
                opacity="0.85"
                filter="url(#coreBeamFeather)"
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

              {/* Floating Luminous Light Dust Photons in Beam */}
              <circle cx="85" cy="200" r="2" fill="#fff" opacity="0.8" />
              <circle cx="40" cy="350" r="2.5" fill="#fef08a" opacity="0.6" />
              <circle cx="140" cy="480" r="1.5" fill="#fff" opacity="0.7" />
              <circle cx="-10" cy="580" r="3" fill="#fde047" opacity="0.5" />
              <circle cx="180" cy="620" r="2" fill="#fff" opacity="0.6" />
            </g>

            {/* ==================== HL TEJAS STRUCTURAL COLUMN ==================== */}

            {/* Sturdy Structural Base Flange */}
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
                strokeWidth={isDay ? "1.5" : "0.5"}
                strokeOpacity={isDay ? "0.9" : "0.3"}
              />

              {/* Active Sunlight Harvest Energy Overlay (Flowing during day) */}
              {isDay && (
                <rect
                  x="162"
                  y="141"
                  width="24"
                  height="338"
                  rx="3"
                  fill="url(#solarHarvestGrad)"
                  opacity="0.45"
                  className="animate-pulse"
                />
              )}

              {/* Glass Specular Gloss Highlight */}
              <line x1="164" y1="145" x2="164" y2="475" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
              <line x1="184" y1="145" x2="184" y2="475" stroke="#000000" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
            </g>

            {/* ==================== INTERNAL LiFePO4 BATTERY CORE CUTAWAY ==================== */}
            <g>
              {/* Lower Pole Battery Housing Chamber */}
              <rect x="163" y="500" width="22" height="130" rx="3" fill="#0d111a" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.6" />
              
              {/* Battery Cells Stack Representation */}
              <rect x="166" y="506" width="16" height="24" rx="2" fill="#15803d" />
              <rect x="166" y="534" width="16" height="24" rx="2" fill="#15803d" />
              <rect x="166" y="562" width="16" height="24" rx="2" fill="#15803d" />
              <rect x="166" y="590" width="16" height="24" rx="2" fill="#15803d" />
              
              {/* Battery Charge LED Gauge Pulse */}
              <circle cx="174" cy="622" r="2.5" fill="#22c55e" className="animate-pulse" />
            </g>

            {/* ==================== ARCHITECTURAL LUMINAIRE ARM & FIXTURE ==================== */}
            <g>
              {/* Cantilever Arm Connection (similar to html: path d="M130 70 L60 62") */}
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

              {/* Luminaire Head Body */}
              <rect x="52" y="66" width="76" height="16" rx="6" fill="#111827" stroke="#374151" strokeWidth="1.5" />

              {/* Precision LED Optics Lens Plate */}
              <rect
                x="60"
                y="80"
                width="60"
                height="6"
                rx="2"
                fill={coneOpacity > 0.1 ? "#fffbeb" : "#cbd5e1"}
                stroke={coneOpacity > 0.1 ? "#fde047" : "#64748b"}
                strokeWidth="1"
                filter={coneOpacity > 0.1 ? "url(#lampGlow)" : undefined}
              />

              {/* Micro LED Diodes Array (Illuminated at Night) */}
              <g fill={coneOpacity > 0.1 ? "#ffffff" : "#475569"}>
                <circle cx="68" cy="83" r="1.5" />
                <circle cx="78" cy="83" r="1.5" />
                <circle cx="88" cy="83" r="1.5" />
                <circle cx="98" cy="83" r="1.5" />
                <circle cx="108" cy="83" r="1.5" />
              </g>
            </g>

            {/* ==================== SMART CCTV SURVEILLANCE & IoT SENSOR TOP HEAD ==================== */}
            <g>
              {/* Mast Top Cap */}
              <rect x="162" y="70" width="24" height="12" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />

              {/* 4G/5G IoT Antenna Mast */}
              <line x1="174" y1="70" x2="174" y2="40" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="174" cy="38" r="3" fill="#ef4444" className="animate-pulse" />

              {/* CCTV Camera Bracket & 360° Dome */}
              <rect x="180" y="88" width="14" height="6" fill="#1e293b" />
              <path d="M192 86 L206 82 L206 100 L192 96 Z" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              
              {/* Camera Optical Lens & IR Status Ring */}
              <circle cx="206" cy="91" r="5" fill="#020617" stroke="#38bdf8" strokeWidth="1" />
              <circle
                cx="206"
                cy="91"
                r="2"
                fill={isNight ? "#ef4444" : "#22c55e"}
                className="animate-ping"
              />
            </g>
          </svg>
        </div>

        {/* ============================================================ HERO CONTENT / TYPOGRAPHY / HEADLINE */}
        <div className="relative z-20 mx-auto w-full max-w-[1550px] px-6 sm:px-10 lg:px-14 pt-28 sm:pt-32 pb-12 sm:pb-20 flex flex-col justify-center h-full pointer-events-none">
          {/* Main Headline & Value Proposition */}
          <div className="max-w-2xl lg:max-w-3xl pointer-events-auto py-6 sm:py-8">
            
            {/* Heritage Badge - positioned neatly above the headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white shadow-xl mb-5 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#f4a41d] animate-pulse" />
              <span className="font-display font-semibold text-xs sm:text-sm text-amber-300">
                सूरज से जलती रोशनी
              </span>
              <span className="text-white/40 text-xs">|</span>
              <span className="font-mono text-[11px] sm:text-xs text-white/90 uppercase tracking-widest">
                HL Tejas Solar Smart Pole
              </span>
            </motion.div>

            {/* Animated Main Headline (Original Text) */}
            <h1 className="font-display text-white text-[11vw] sm:text-[7.5vw] lg:text-[4.8vw] font-extrabold leading-[0.92] tracking-[-0.04em] drop-shadow-2xl">
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
              className="mt-6 max-w-2xl text-base sm:text-lg text-white/90 font-light leading-relaxed drop-shadow-md"
            >
              Architectural solar smart poles, off-grid roadway lighting, and high-power solar floodlights engineered to operate <strong className="font-bold text-white underline decoration-[#10B981] decoration-2 underline-offset-4">100% on solar power</strong> with zero electricity bills across roads, campuses, and infrastructure.
            </motion.p>

            {/* Action Buttons (Original Text & Styling) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#featured-products"
                className="rounded-full bg-[#10B981] hover:bg-[#10B981]/90 text-white font-bold uppercase tracking-widest px-8 py-4 text-xs shadow-2xl cursor-pointer inline-flex items-center gap-2 group transition-all"
              >
                <span>Explore Featured Products</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <button
                onClick={openDrawer}
                className="rounded-full border border-white/30 hover:border-white bg-black/40 hover:bg-black/60 backdrop-blur-md px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all cursor-pointer shadow-md"
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
