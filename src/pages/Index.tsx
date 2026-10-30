import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featured, catalogue } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";
import { SolarArchitectureAnimation } from "../components/SolarArchitectureAnimation";
import { FeaturedProductsSection } from "../components/FeaturedProductsSection";
import { EditorialPreloader } from "../components/EditorialPreloader";
import { ZapOff, Sun, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Radio } from "lucide-react";

import { HeroSolarLight } from "../components/HeroSolarLight";

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
  const handlePreloaderComplete = useCallback(() => {
    setHeroReady(true);
  }, []);

  return (
    <>
      <EditorialPreloader onComplete={handlePreloaderComplete} />
      <HeroSolarLight isReady={heroReady} />
      <Philosophy />
      <SolarArchitectureAnimation />
      <FeaturedProductsSection />
      <About />
      <Stats />
      <FAQ />
      <Closer />
    </>
  );
}

/* ============================================================ PHILOSOPHY / VALUE PROPOSITION */
function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { openDrawer } = useContactDrawer();

  useEffect(() => {
    if (!titleRef.current) return;
    const ctx = gsap.context(() => {
      const words = titleRef.current!.querySelectorAll(".phil-word");
      gsap.from(words, {
        yPercent: 110,
        stagger: 0.08,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const lines = [
    "Engineered for",
    "pure solar lighting.",
    "Zero electric bills.",
  ];

  const tenets = [
    {
      n: "01",
      icon: Sun,
      k: "100% Solar-Powered Freedom",
      v: "Eliminates monthly electricity bills completely. High-efficiency vertical solar cells absorb sunlight from every angle to power your lighting completely free from the electric grid.",
      tag: "Zero Electricity Bills · Off-Grid",
    },
    {
      n: "02",
      icon: Sparkles,
      k: "Brilliant All-Night Illumination",
      v: "Engineered for high-output, low-glare illumination from dusk until dawn. High-capacity battery storage delivers dependable light even during consecutive rainy or overcast days.",
      tag: "Dusk-to-Dawn Automation · Multi-Day Backup",
    },
    {
      n: "03",
      icon: ShieldCheck,
      k: "Complete Turnkey Solutions",
      v: "We act as your lighting partner from start to finish — assessing your project, calculating exact lux requirements, and delivering customized lighting solutions built to withstand extreme climates.",
      tag: "Customized Lighting Solution · Turnkey Projects",
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-paper py-28 lg:py-44 hairline-t">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        
        {/* Subtle Category Badge */}
        <div className="mb-5 sm:mb-6 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-signal shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
          <span className="font-sans text-xs sm:text-[13px] uppercase tracking-wider text-signal font-bold">
            Solar Infrastructure Illumination
          </span>
        </div>

        {/* Proportionate, Bold, Dark & Visible Headline */}
        <h2
          ref={titleRef}
          className="text-display text-ink text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] leading-[1.08] sm:leading-[1.06] tracking-[-0.03em] font-extrabold max-w-5xl"
        >
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden pb-1.5 sm:pb-2.5 pt-0.5">
              <span className="phil-word inline-block">{line}</span>
            </div>
          ))}
        </h2>

        {/* 3 Premium Glassmorphic Feature Cards with Micro-Animations */}
        <div className="mt-16 sm:mt-20 grid gap-6 md:grid-cols-3">
          {tenets.map((b, i) => (
            <motion.div
              key={b.k}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.14, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="group relative flex flex-col justify-between rounded-3xl bg-white/80 backdrop-blur-md p-7 sm:p-9 border border-ink/10 hover:border-signal/50 hover:shadow-2xl hover:shadow-signal/10 transition-all shadow-sm overflow-hidden"
            >
              {/* Animated Top Laser Hairline on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-signal/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

              {/* Ambient Glowing Solar Bloom on Hover */}
              <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-signal/15 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                {/* Number graphic placed cleanly on right side */}
                <div className="flex items-center justify-end mb-8">
                  <span className="font-display text-3xl font-extrabold text-signal tracking-tight">
                    {b.n}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-ink font-bold tracking-tight group-hover:text-signal transition-colors duration-300">
                  {b.k}
                </h3>
                <p className="mt-3.5 text-sm leading-relaxed text-ink/70 font-normal">
                  {b.v}
                </p>
              </div>

              {/* Bottom Tag Bar with Interactive Accent */}
              <div className="relative z-10 mt-8 pt-4 border-t border-ink/10 flex items-center justify-between text-[11px] font-sans font-medium text-ink/50 group-hover:text-ink/80 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal/60 group-hover:bg-signal group-hover:scale-125 transition-all" />
                  <span>{b.tag}</span>
                </div>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-signal font-bold">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Consultancy & Turnkey Solutions Callout with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 sm:mt-28 rounded-3xl bg-stone/60 border border-ink/10 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 backdrop-blur-sm shadow-sm"
        >
          <div className="max-w-2xl">
            <div className="font-sans text-xs uppercase tracking-wider text-signal font-bold mb-3">
              Consultancy &amp; Turnkey Projects
            </div>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
              We don't just supply lights. We design <span className="text-signal">complete solar illumination systems</span> for your project.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-ink/70 leading-relaxed font-light">
              From project evaluations and lux calculations to customized engineering solutions and turnkey installation across roads, townships, landscapes, and industrial projects.
            </p>
          </div>

          <button
            onClick={openDrawer}
            className="shrink-0 rounded-full bg-signal hover:bg-signal/90 text-white font-bold uppercase tracking-widest px-8 py-4 text-xs transition-all shadow-lg hover:shadow-signal/25 cursor-pointer flex items-center gap-2 group self-start md:self-center"
          >
            <span>Request Project Consultation</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
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
    { v: "360K", u: "lumens", l: "GAJ Stadium Luminaire" },
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
    q: "What makes GAJ the ideal stadium and sports floodlight?",
    a: "GAJ scales from 600W up to 2250W delivering up to 360,000 lumens. It features a 5° forward-tilted optical surface to eliminate backlight and spectator glare, modular convective thermal chimney heat dissipation, ±45° vertical aiming with 56-increment precision scale, and HDTV 4K/8K broadcast compliance with DMX512 / DALI controls.",
  },
  {
    q: "What is the difference between Solar and Hybrid Solar + AC platforms?",
    a: "Our pure solar platforms run 100% off-grid with 4–8 days of autonomy. Hybrid platforms (like HL Voltage and HL Pranjal) run on solar power primarily, with automatic AC grid backup during extended severe monsoon periods for 100% guaranteed 365-day uptime.",
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
            <span className="closer-line inline-block">Illuminating</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="closer-line inline-block">India’s next</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="closer-line inline-block text-signal">chapter.</span>
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
