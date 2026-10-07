import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featured, catalogue, solutionApplications, advisorProfile, type SolutionApplication } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";
import { SolarArchitectureAnimation } from "../components/SolarArchitectureAnimation";
import { FeaturedProductsSection } from "../components/FeaturedProductsSection";
import { EditorialPreloader } from "../components/EditorialPreloader";
import { ZapOff, Sun, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Radio } from "lucide-react";

import heroBgWebp from "@/assets/hero_light_bg_hires.webp";
import heroBgJpg from "@/assets/hero_light_bg_hires.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="overflow-hidden py-1">
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: false }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function IndexPage() {
  useMeta({
    title: "HINDLED Technologies — 360° Solar & Infrastructure Lighting Solutions",
    description: "Lighting consultant & solution provider: 360° Solar Smart Poles, Stadium Floodlights, CCTV Solar Security, Industrial High-Bays, and Custom Off-Grid Lighting without electricity.",
  });

  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      <EditorialPreloader onComplete={() => setHeroReady(true)} />
      <Hero isReady={heroReady} />
      <Philosophy />
      <SolarArchitectureAnimation />
      <FeaturedProductsSection />
      <SolutionsShowcase />
      <AdvisorSection />
      <About />
      <Stats />
      <FAQ />
      <Closer />
    </>
  );
}

/* ============================================================ HERO WITH INSTANT CINEMATIC FADE */
function Hero({ isReady = true }: { isReady?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const { openDrawer } = useContactDrawer();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants: any = {
    hidden: { y: "115%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fadeUpVariants: any = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[100vh] lg:min-h-[105vh] w-full overflow-hidden bg-[#0A0A0A] flex flex-col justify-end items-center"
      style={{
        backgroundImage: `url(${heroBgWebp}), url(${heroBgJpg}), url('/hero_light_bg_hires.webp'), url('/hero_light_bg_hires.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* High-Resolution Cinematic Image Layer */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      >
        <picture className="w-full h-full">
          <source srcSet={heroBgWebp} type="image/webp" />
          <motion.img
            src={heroBgJpg}
            alt="HINDLED Solar Infrastructure Illumination"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            initial={{ scale: 1.08, filter: "brightness(0.7)" }}
            animate={isReady ? { scale: 1, filter: "brightness(1)" } : { scale: 1.08, filter: "brightness(0.7)" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full w-full object-cover object-center"
          />
        </picture>

        {/* Ambient Solar Photon Glow Bloom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={isReady ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0.6 }}
          transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-signal/25 rounded-full blur-[140px] pointer-events-none z-1"
        />

        {/* Cinematic Contrast Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15 z-1" />
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-end items-center text-center px-6 pb-20 pt-36 md:pb-28 lg:px-12">
        <motion.div
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate={isReady ? "visible" : "hidden"}
          className="max-w-4xl flex flex-col items-center text-center mx-auto"
        >

          {/* Headline with Masked Cinematic Slide-up */}
          <h1 className="font-display text-white text-[11vw] sm:text-[8vw] md:text-[5.5vw] font-extrabold leading-[0.92] tracking-[-0.04em] drop-shadow-2xl text-center">
            <div className="overflow-hidden py-1">
              <motion.span variants={lineVariants} className="block">
                POWERED BY DAY.
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span variants={lineVariants} className="block">
                BRIGHT BY <span className="text-signal">NIGHT.</span>
              </motion.span>
            </div>
          </h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeUpVariants}
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/90 font-light leading-relaxed drop-shadow-md text-center mx-auto"
          >
            Advanced 360° vertical solar smart poles, integrated off-grid CCTV surveillance, and high-power stadium floodlights engineered to operate <strong className="font-bold text-white underline decoration-signal decoration-2 underline-offset-4">100% without electricity</strong> across India and global infrastructure.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#featured-products"
              className="rounded-full bg-signal hover:bg-signal/90 text-white font-bold uppercase tracking-widest px-8 py-4 text-xs shadow-2xl cursor-pointer inline-flex items-center gap-2 group transition-all"
            >
              Explore Featured Products
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            
            <button
              onClick={openDrawer}
              className="rounded-full border border-white/30 hover:border-white bg-black/40 hover:bg-black/60 backdrop-blur-md px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all cursor-pointer shadow-md"
            >
              Consult Engineering Desk
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================ PHILOSOPHY */
function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const ctx = gsap.context(() => {
      const words = titleRef.current!.querySelectorAll(".phil-word");
      gsap.from(words, {
        yPercent: 110,
        stagger: 0.06,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const lines = ["Engineered", "for the world's", "demanding zero-grid", "environments."];
  const tenets = [
    { k: "100% Zero-Grid Independence", v: "Vertical 6-sided HPBC monocrystalline arrays harvest omnidirectional solar energy, eliminating utility grid electricity bills forever.", n: "01" },
    { k: "Precision Optical Control", v: "Beam control engineered to fractions of a degree. Asymmetric Type II/III and symmetric Type V distributions solve spill at the PMMA lens.", n: "02" },
    { k: "Passive Convective Chimney", v: "Modular ADC12 aluminium pathways continuously duct heat away, sustaining 190 lm/W output under extreme 50°C Indian summer ambient loads.", n: "03" },
  ];

  return (
    <section ref={sectionRef} className="relative bg-paper py-32 lg:py-48 hairline-t">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <h2
          ref={titleRef}
          className="text-display text-ink text-[10vw] leading-[0.92] tracking-[-0.04em] md:text-[6.2vw] font-bold"
        >
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <span className="phil-word inline-block">{line}</span>
            </div>
          ))}
        </h2>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {tenets.map((b, i) => (
            <motion.div
              key={b.k}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hairline-t pt-6"
            >
              <div className="text-mono mb-3 text-signal font-bold">{b.n}</div>
              <h3 className="text-display text-2xl text-ink font-bold">{b.k}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 font-light">{b.v}</p>
            </motion.div>
          ))}
        </div>

        {/* Consultancy & Turnkey Solutions Callout with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 grid grid-cols-12 gap-6 hairline-t pt-12"
        >
          <div className="col-span-12 md:col-span-4">
            <div className="text-mono text-xs uppercase tracking-widest text-signal font-bold">
              Consultancy &amp; Turnkey Solutions
            </div>
          </div>
          <p className="col-span-12 text-display text-2xl leading-[1.2] tracking-[-0.02em] text-ink md:col-span-8 md:text-4xl font-bold">
            We don't merely supply fixtures. We operate as lighting consultants and solution providers — engineering{" "}
            <span className="text-signal">custom zero-electricity instruments</span> calibrated to each site's physical geometry, DIALux simulation code, and local atmosphere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================ SOLUTIONS SHOWCASE (ORGANIZED AROUND APPLICATIONS) */
function SolutionsShowcase() {
  const { openDrawer } = useContactDrawer();

  return (
    <section id="solutions-showcase" className="relative bg-paper text-ink py-28 lg:py-36 hairline-t">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16"
        >
          <div>
            <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-3">
              — FIELD SOLUTIONS
            </span>
            <h2 className="text-display text-ink text-[9vw] leading-[0.92] tracking-[-0.04em] md:text-[5vw] font-bold">
              Organized around <span className="text-signal">applications.</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm text-ink/70 font-light leading-relaxed">
              Specialized infrastructure lighting applications engineered for complex environments with field installation optics.
            </p>
          </div>
        </motion.div>

        {/* 6 Core Application Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutionApplications.map((app: SolutionApplication, idx: number) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-stone p-3 sm:p-5 border border-ink/10 hover:border-signal hover:shadow-xl transition-all shadow-sm"
            >
              <div>
                {/* Project-Based Field Image (Full Box Occupancy, Zero Leak) */}
                <div className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-paper mb-2.5 sm:mb-4 border border-ink/5">
                  <img
                    src={app.projectPic}
                    alt={`${app.title} project`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider bg-ink/90 backdrop-blur-md text-paper px-2 py-0.5 rounded-full z-10 shadow-sm">
                    {app.category}
                  </span>
                </div>

                <h3 className="font-display text-sm sm:text-xl font-bold text-ink tracking-tight leading-snug sm:leading-normal">
                  {app.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-ink/70 line-clamp-2 leading-relaxed font-light">
                  {app.description}
                </p>
              </div>

              <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="text-[8px] sm:text-[10px] font-mono text-signal font-bold truncate max-w-[70%]">
                  {app.luxRecommendation.split("(")[0]}
                </span>
                <Link
                  to="/products"
                  className="text-mono text-[9px] sm:text-xs font-bold uppercase tracking-wider text-ink hover:text-signal transition-colors shrink-0"
                >
                  Specs →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ============================================================ ADVISOR SECTION (MR. BRIJ BHATIA) */
function AdvisorSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-paper text-ink py-28 lg:py-40 border-t border-ink/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 border-b border-ink/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-2">
              — TECHNICAL LEADERSHIP
            </span>
            <h2 className="text-display text-ink text-[8vw] leading-[0.92] tracking-[-0.04em] md:text-[4.5vw] font-bold">
              Chief Technical <span className="text-signal">Advisory.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink/70 font-light leading-relaxed">
            Infrastructure engineering &amp; photometrics tailored for Indian climate extremes, power grids, and municipal standards.
          </p>
        </motion.div>

        {/* Premium Editorial Card with Scroll Reveal */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[36px] bg-stone border border-ink/15 p-8 md:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Large Editorial Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="relative w-full max-w-[440px] h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] rounded-[32px] overflow-hidden border-2 border-ink/20 shadow-2xl bg-paper group">
              <img
                src={advisorProfile.image}
                alt={advisorProfile.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
              <span className="absolute bottom-5 left-5 right-5 text-center font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-paper/95 backdrop-blur-md text-ink py-3 rounded-2xl border border-ink/10 shadow-lg">
                {advisorProfile.experienceYears} Industry Leadership
              </span>
            </div>
          </motion.div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <span className="text-mono text-xs font-bold uppercase tracking-widest text-signal block mb-2">
                  — BIOGRAPHY &amp; IMPACT
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                  {advisorProfile.name}
                </h3>
                <p className="text-xs sm:text-sm text-signal font-mono font-bold tracking-wider uppercase mt-2">
                  {advisorProfile.title}
                </p>
              </motion.div>

              {/* Refined Editorial Bio */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="border-l-3 border-signal pl-5 py-1"
              >
                <p className="text-base sm:text-lg lg:text-xl text-ink/85 font-light leading-relaxed">
                  "{advisorProfile.bio}"
                </p>
              </motion.div>

              {/* Core Guidance Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {advisorProfile.indianMarketAdvice.slice(0, 4).map((advice, aIdx) => (
                  <motion.div
                    key={advice.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 + aIdx * 0.08 }}
                    className="p-3.5 rounded-2xl bg-paper border border-ink/10 shadow-xs"
                  >
                    <span className="font-display text-xs font-bold text-ink block mb-1">
                      {advice.title}
                    </span>
                    <p className="text-[11px] text-ink/65 leading-relaxed font-light line-clamp-3">
                      {advice.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

/* ============================================================ ABOUT */
function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const bigY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper pt-8 pb-24 lg:pt-12 lg:pb-32 hairline-t">
      <motion.div
        style={{ y: bigY }}
        className="text-display pointer-events-none absolute -left-[5vw] top-0 text-[26vw] leading-[0.85] tracking-[-0.05em] text-ink/[0.04]"
      >
        STUDIO
      </motion.div>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-10 lg:gap-14 px-6 lg:px-10 items-start">
        <div className="col-span-12 lg:col-span-6 flex items-start -mt-2 lg:-mt-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden rounded-[32px] shadow-2xl border border-ink/10 group"
          >
            <img
              src={featured[0].image}
              alt="HINDLED Technologies engineering"
              className="w-full h-auto min-h-[380px] sm:min-h-[480px] lg:min-h-[520px] object-cover rounded-[32px] group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-6 flex flex-col justify-start -mt-4 lg:-mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-mono text-xs uppercase tracking-widest text-signal font-bold"
          >
            About — The Studio
          </motion.div>

          <h2 className="text-display mt-3 text-[10vw] leading-[0.92] tracking-[-0.04em] text-ink md:text-[5vw] font-bold">
            <Reveal>A studio of</Reveal>
            <Reveal delay={0.1}>engineers,</Reveal>
            <Reveal delay={0.2}>
              <span className="text-signal">opticists</span> &amp;
            </Reveal>
            <Reveal delay={0.3}>thermodynamicists.</Reveal>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-2xl text-lg sm:text-xl md:text-2xl leading-relaxed text-ink/80 font-light"
          >
            HINDLED Technologies is a focused engineering collective specializing in precision outdoor lighting, zero-grid solar infrastructure, and broadcast stadium luminaires. Every instrument is calibrated to a project's geometry, DIALux photometric code, and atmosphere.
          </motion.p>

          <div className="mt-6 grid grid-cols-2 gap-8 border-t border-ink/10 pt-5 md:grid-cols-3">
            {[
              { k: "21", v: "Engineered Products" },
              { k: "100%", v: "Solar Grid Autonomy" },
              { k: "360K", v: "Lumens Peak Stadium Output" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-display text-4xl text-ink md:text-5xl font-bold">{s.k}</div>
                <div className="text-mono mt-2 text-ink/70 text-xs sm:text-sm font-bold uppercase tracking-wider">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ STATS */
function Stats() {
  const stats = [
    { v: "200", u: "Lm/W", l: "Peak Efficacy" },
    { v: "360K", u: "lumens", l: "HL GAJ Stadium Luminaire" },
    { v: "IP66", u: "/ IK10", l: "Ingress + Impact Armor" },
    { v: "21", u: "platforms", l: "Catalogue Inventory" },
  ];
  return (
    <section className="bg-stone/60 py-24 border-t border-b border-ink/10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-display flex items-baseline gap-2 text-ink font-bold">
              <span className="text-5xl md:text-7xl">{s.v}</span>
              <span className="text-mono text-signal text-xs md:text-sm font-bold">{s.u}</span>
            </div>
            <div className="text-mono mt-2 text-ink/60 text-xs font-bold uppercase tracking-wider">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ FAQ */
const faqs = [
  {
    q: "How do HINDLED vertical solar smart poles operate 100% without electricity?",
    a: "Platforms like SOLERA, ZONO, and TEJAS integrate 6-sided cylindrical HPBC monocrystalline photovoltaic modules wrapped directly around the pole column. High-density LiFePO4 batteries store generated energy, delivering 100% off-grid autonomy for both high-lumen LED lighting and continuous CCTV security recording without drawing any municipal electricity.",
  },
  {
    q: "How does the TEJAS series integrate CCTV camera security and lighting simultaneously?",
    a: "TEJAS features an integrated smart bay supporting high-definition PTZ / dome security cameras with 4G LTE/Wi-Fi telemetry. The vertical solar matrix and dedicated LiFePO4 battery power both the camera (24/7 continuous recording) and the luminaire without any external electrical wiring.",
  },
  {
    q: "What makes HL GAJ the ideal stadium and sports floodlight?",
    a: "HL GAJ scales from 600W up to 2250W delivering up to 360,000 lumens. It features a 5° forward-tilted optical surface to eliminate backlight and spectator glare, modular convective thermal chimney heat dissipation, ±45° vertical aiming with 56-increment precision scale, and HDTV 4K/8K broadcast compliance with DMX512 / DALI controls.",
  },
  {
    q: "What is the difference between Solar and Hybrid Solar + AC platforms?",
    a: "Our pure solar platforms run 100% off-grid with 4–8 days of autonomy. Hybrid platforms (like Solar + AC Hybrid and HL Pranjal) run on solar power primarily, with automatic AC grid backup during extended severe monsoon periods for 100% guaranteed 365-day uptime.",
  },
  {
    q: "Do you offer custom OEM / ODM specifications and photometric DIALux planning?",
    a: "Yes. Our engineering team provides custom optical profiles, tailored mounting brackets, 3D CAD drawings, and certified DIALux photometric simulations for complex infrastructure tenders and iconic architecture.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="bg-paper py-32 lg:py-48">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-10 px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-4"
        >
          <div className="text-mono text-xs uppercase tracking-widest text-signal font-bold">FAQ</div>
          <h2 className="text-display mt-4 text-ink text-[10vw] leading-[0.92] tracking-[-0.04em] md:text-[4.5vw] font-bold">
            Engineering <span className="text-signal">questions,</span> answered.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70 font-light">
            Zero-electricity solar autonomy, CCTV integration, stadium optics, warranty, and custom DIALux simulations.
          </p>
        </motion.div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="faq-row hairline-t"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left cursor-pointer"
                >
                  <span className="text-display text-xl text-ink md:text-2xl font-bold">
                    {f.q}
                  </span>
                  <span
                    className={`text-mono text-signal transition-transform duration-500 font-bold text-xl ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-6 pr-12 text-sm leading-relaxed text-ink/75 font-light">
                      {f.a}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ CLOSER */
function Closer() {
  const { openDrawer } = useContactDrawer();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current!.querySelectorAll(".closer-line"), {
        yPercent: 100,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });
    }, headingRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-paper pb-32 pt-20 lg:pb-48 hairline-t">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <h2
          ref={headingRef}
          className="text-display text-ink text-[11vw] sm:text-[9vw] md:text-[7.5vw] font-bold leading-[0.95] tracking-[-0.04em]"
        >
          <div className="overflow-hidden py-1">
            <span className="closer-line inline-block">Built for the</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="closer-line inline-block">world's biggest</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="closer-line inline-block text-signal">stages.</span>
          </div>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap items-center gap-6"
        >
          <button
            onClick={openDrawer}
            className="text-mono group inline-flex items-center gap-4 rounded-full border border-ink bg-ink px-10 py-5 text-xs font-bold uppercase tracking-widest text-white hover:border-signal hover:bg-signal cursor-pointer shadow-xl transition-all"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </button>
          
          <Link
            to="/products"
            className="text-mono inline-flex items-center gap-3 rounded-full border border-ink/20 hover:border-ink px-8 py-5 text-xs font-bold uppercase tracking-widest text-ink transition-colors"
          >
            Browse Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
