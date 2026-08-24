import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featured, catalogue, solutionApplications, advisorProfile, type SolutionApplication } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="overflow-hidden py-1">
      <motion.div
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function IndexPage() {
  useMeta({
    title: "HINDLED Technologies — Infrastructure Lighting Solutions",
    description: "Lighting consultant & solution provider: Solar Smart Poles, Sports Lighting, High-Mast, Industrial High-Bays, Roadways, Airports, and EV Charging Poles.",
  });

  return (
    <>
      <Hero />
      <Philosophy />
      <SolutionsShowcase />
      <AdvisorSection />
      <About />
      <Testimonials />
      <Stats />
      <FAQ />
      <Closer />
    </>
  );
}

/* ============================================================ HERO */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Full-bleed crisp background image without black filter */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <img 
          src="/product_hero_bg.png" 
          alt="Smart City & Infrastructure Illumination Background" 
          className="h-full w-full object-cover filter brightness-110 contrast-105"
        />
        {/* Text shadow backdrop & subtle gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 z-1" />
      </motion.div>

      {/* Minimal Left-Aligned Text Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-20 md:pb-28 lg:px-12">
        <motion.div style={{ y: textY }} className="max-w-2xl text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-mono text-xs uppercase tracking-widest text-signal font-semibold mb-4"
          >
            — HINDLED TECHNOLOGIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white text-[11vw] sm:text-[8vw] md:text-[6vw] font-bold leading-[0.92] tracking-[-0.04em]"
          >
            LIGHTING
            <br />
            THE <span className="text-signal">FUTURE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-6 max-w-md text-sm md:text-base text-white/75 font-light leading-relaxed"
          >
            Engineered outdoor illumination & autonomous solar smart grid solutions for complex infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <a
              href="#solutions-showcase"
              className="text-mono text-xs font-bold uppercase tracking-wider text-white inline-flex items-center gap-3 border-b-2 border-signal pb-1 hover:border-white transition-colors"
            >
              Explore Solutions
              <span>→</span>
            </a>
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

  const lines = ["Engineered", "for the world's", "most demanding", "environments."];
  const tenets = [
    { k: "Precision Optics", v: "Beam control engineered to fractions of a degree. Spill is solved at the lens — not masked by shields.", n: "01" },
    { k: "Thermal Architecture", v: "Die-cast aluminium pathways move heat continuously, sustaining drivers at 185 lm/W under load.", n: "02" },
    { k: "Built To Outlast", v: "IP66 / IK10 housings field-tested for monsoon, salt-fog, vibration, and broadcast-grade UV exposure.", n: "03" },
  ];

  return (
    <section ref={sectionRef} className="relative bg-paper py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <h2
          ref={titleRef}
          className="text-display text-ink text-[10vw] leading-[0.92] tracking-[-0.04em] md:text-[6.5vw]"
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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hairline-t pt-6"
            >
              <div className="text-mono mb-3 text-signal">{b.n}</div>
              <h3 className="text-display text-2xl text-ink">{b.k}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{b.v}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="text-mono text-ink/50">Consultancy & Solutions</div>
          </div>
          <p className="col-span-12 text-display text-2xl leading-[1.2] tracking-[-0.02em] text-ink md:col-span-8 md:text-4xl">
            We don't just supply fixtures. We operate as lighting consultants and solution providers — designing{" "}
            <span className="text-signal">instruments</span> calibrated to a project's physical geometry, DIALux simulation code, and local atmosphere.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ SOLUTIONS SHOWCASE (8 APPLICATIONS) */
function SolutionsShowcase() {
  const { openDrawer } = useContactDrawer();

  return (
    <section id="solutions-showcase" className="relative bg-paper text-ink py-28 lg:py-36 hairline-t">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <h2 className="text-display text-ink text-[9vw] leading-[0.92] tracking-[-0.04em] md:text-[5vw]">
              Organized around <span className="text-signal">applications.</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm text-ink/70 font-light leading-relaxed">
              8 specialized lighting applications engineered for complex environments with field installation optics.
            </p>
          </div>
        </div>

        {/* 8 Applications Clean Grid (2 per row on mobile) */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutionApplications.map((app: SolutionApplication, idx: number) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.08 }}
              className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-stone p-3 sm:p-5 border border-ink/10 hover:border-signal transition-all shadow-sm"
            >
              <div>
                {/* Project-Based Field Image */}
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-paper mb-2.5 sm:mb-4 border border-ink/5">
                  <img src={app.projectPic} alt={`${app.title} project`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider bg-ink text-paper px-1.5 sm:px-2 py-0.5 rounded-full">
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

/* ============================================================ ADVISOR SECTION (PREMIUM GSAP EDITORIAL CARD) */
function AdvisorSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const { openDrawer } = useContactDrawer();

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      // GSAP Entrance animation
      gsap.from(cardRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      });

      if (imgRef.current) {
        gsap.from(imgRef.current, {
          scale: 0.95,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 85%",
          },
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-paper text-ink py-28 lg:py-40 border-t border-ink/10 relative overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-14 border-b border-ink/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-2">
              — TECHNICAL LEADERSHIP
            </span>
            <h2 className="text-display text-ink text-[8vw] leading-[0.92] tracking-[-0.04em] md:text-[4.5vw]">
              Chief Technical <span className="text-signal">Advisory.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink/70 font-light leading-relaxed">
            Infrastructure engineering & photometrics tailored for Indian climate extremes, power grids, and municipal standards.
          </p>
        </div>

        {/* Premium GSAP Editorial Card */}
        <div
          ref={cardRef}
          className="rounded-[36px] bg-stone border border-ink/15 p-8 md:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Large Editorial Portrait Image */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div
              ref={imgRef}
              className="relative w-full max-w-[440px] h-[400px] sm:h-[480px] md:h-[540px] lg:h-[580px] rounded-[32px] overflow-hidden border-2 border-ink/20 shadow-2xl bg-paper group"
            >
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
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-mono text-xs font-bold uppercase tracking-widest text-signal block mb-2">
                  — BIOGRAPHY & IMPACT
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                  {advisorProfile.name}
                </h3>
                <p className="text-xs sm:text-sm text-signal font-mono font-bold tracking-wider uppercase mt-2">
                  {advisorProfile.title}
                </p>
              </div>

              {/* Refined Editorial Bio */}
              <div className="border-l-3 border-signal pl-5 py-1">
                <p className="text-base sm:text-lg lg:text-xl text-ink/85 font-light leading-relaxed">
                  "{advisorProfile.bio}"
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ============================================================ ABOUT */
function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const bigY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper py-32 lg:py-48">
      <motion.div
        style={{ y: bigY }}
        className="text-display pointer-events-none absolute -left-[5vw] top-10 text-[26vw] leading-[0.85] tracking-[-0.05em] text-ink/[0.04]"
      >
        STUDIO
      </motion.div>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-12 gap-10 px-6 lg:px-10">
        <div className="col-span-12 md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden bg-stone"
          >
            <motion.img
              style={{ y: imgY }}
              src={featured[1].image}
              alt="HINDLED Technologies engineering"
              className="absolute inset-0 h-[120%] w-full object-contain p-10"
            />
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-7 md:pl-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mono text-ink/50"
          >
            About — The Studio
          </motion.div>

          <h2 className="text-display mt-6 text-[10vw] leading-[0.92] tracking-[-0.04em] text-ink md:text-[5.5vw]">
            <Reveal>A studio of</Reveal>
            <Reveal delay={0.1}>engineers,</Reveal>
            <Reveal delay={0.2}>
              <span className="text-signal">opticists</span> &amp;
            </Reveal>
            <Reveal delay={0.3}>thermodynamicists.</Reveal>
          </h2>

          <p className="mt-10 max-w-lg text-base leading-relaxed text-ink/70">
            HINDLED Technologies is a quiet collective focused on a single discipline:
            precision outdoor lighting. Every luminaire begins as a thermal sketch and ends as an instrument calibrated to a project's geometry, code, and atmosphere.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-ink/10 pt-8 md:grid-cols-3">
            {[
              { k: "21", v: "Engineered platforms" },
              { k: "40+", v: "Countries deployed" },
              { k: "200+", v: "Sports venues lit" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className="text-display text-4xl text-ink md:text-5xl">{s.k}</div>
                <div className="text-mono mt-2 text-ink/60">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ TESTIMONIALS */
const testimonials = [
  {
    quote:
      "The FL18 array delivered acceptance-grade photometrics on the first measurement pass. We've never seen a project move this cleanly from spec to commissioning.",
    name: "Arjun Mehta",
    role: "Principal · Stadia Consultancy",
  },
  {
    quote:
      "HINDLED Technologies engineered our solar street-lighting upgrade with a quiet rigor — every pole, every photon accounted for. Years on, the system is still hitting day-one outputs.",
    name: "Karina Vasquez",
    role: "Director of Infrastructure · Vista Municipality",
  },
  {
    quote:
      "Working with HINDLED Technologies is closer to working with a research lab than a manufacturer. They challenge the brief, then deliver fixtures that quietly outperform it.",
    name: "Daniel Okafor",
    role: "Lighting Designer · ATELIER 9",
  },
];

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Automatic sideways slide autoplay interval for mobile view
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".t-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-6">
            <h2 className="text-display text-ink text-[10vw] leading-[0.92] tracking-[-0.04em] md:text-[5.5vw]">
              Trusted on the <span className="text-signal">ground.</span>
            </h2>
          </div>
          <p className="col-span-12 self-end text-sm leading-relaxed text-ink/70 md:col-span-5 md:col-start-8">
            A small selection from architects, consultants and infrastructure leads who specify HINDLED Technologies.
          </p>
        </div>

        {/* Mobile View: Premium Auto-Sliding Card Carousel */}
        <div className="mt-12 md:hidden">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-paper p-7 shadow-xl">
            {/* Sliding Quote Content with Medium Typography */}
            <div className="relative min-h-[200px] flex flex-col justify-between">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 40 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-5"
                >
                  <div className="text-display text-5xl leading-none text-signal">"</div>
                  <p className="text-base sm:text-lg leading-relaxed text-ink font-medium">
                    {testimonials[activeIndex].quote}
                  </p>
                  <div className="pt-4 border-t border-black/10">
                    <div className="text-display text-base font-bold text-ink">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-mono mt-0.5 text-xs text-ink/60">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls: Dots + Prev / Next Arrows */}
            <div className="flex items-center justify-between pt-6 border-t border-black/10 mt-6">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > activeIndex ? 1 : -1);
                      setActiveIndex(i);
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIndex ? "w-6 bg-signal" : "w-2 bg-black/20 hover:bg-black/40"
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-stone text-ink hover:bg-ink hover:text-white transition-colors cursor-pointer active:scale-95 shadow-sm"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-stone text-ink hover:bg-ink hover:text-white transition-colors cursor-pointer active:scale-95 shadow-sm"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="mt-20 hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="t-card flex flex-col gap-10 bg-paper border border-black/10 rounded-3xl p-10 lg:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="text-display text-6xl leading-none text-signal">"</div>
              <p className="text-lg leading-relaxed text-ink md:text-xl">{t.quote}</p>
              <div className="hairline-t mt-auto pt-5">
                <div className="text-display text-lg text-ink font-bold">{t.name}</div>
                <div className="text-mono mt-1 text-ink/60">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ STATS */
function Stats() {
  const stats = [
    { v: "200", u: "Lm/W", l: "Peak Efficacy" },
    { v: "261K", u: "lumens", l: "Single Luminaire Output" },
    { v: "IP66", u: "/ IK10", l: "Ingress + Impact" },
    { v: "21", u: "series", l: "Engineered Platforms" },
  ];
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="text-display flex items-baseline gap-2 text-ink">
              <span className="text-6xl md:text-7xl">{s.v}</span>
              <span className="text-mono text-ink/60">{s.u}</span>
            </div>
            <div className="text-mono mt-2 text-ink/60">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ FAQ */
const faqs = [
  {
    q: "Which environments are HINDLED Technologies luminaires built for?",
    a: "Every fixture targets IP66 / IK10 with salt-spray, monsoon and broadcast-grade UV testing. Our portfolio is deployed across stadiums, airports, highways, ports and remote off-grid landscapes.",
  },
  {
    q: "What is the warranty across the catalogue?",
    a: "Solar platforms ship with a 5–10 year warranty depending on configuration. Outdoor & industrial luminaires carry a 5-year warranty as standard.",
  },
  {
    q: "Do you support DALI, DMX and 0-10V controls?",
    a: "Yes — flagship floodlights including FL18 support DMX512, DALI, DALI-2 and 0-10V. Most HB12 and SP02 SKUs are dimming-ready.",
  },
  {
    q: "Can the solar systems run fully off-grid?",
    a: "Yes. The JUNO and Mars platforms pair HPBC monocrystalline panels with LiFePO4 storage and adaptive 4-step dimming, sized for 3–8 days of autonomy.",
  },
  {
    q: "Do you offer OEM / ODM and custom specifications?",
    a: "Absolutely. The engineering team co-develops bespoke optics, finishes and control profiles. Talk to engineering with a brief.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-row", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-paper py-32 lg:py-48">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-10 px-6 lg:px-10">
        <div className="col-span-12 md:col-span-4">
          <div className="text-mono text-ink/50">FAQ</div>
          <h2 className="text-display mt-4 text-ink text-[10vw] leading-[0.92] tracking-[-0.04em] md:text-[4.5vw]">
            Engineering <span className="text-signal">questions,</span> answered.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/70">
            Specifications, controls, warranty, OEM — the most-asked questions from consultants and leads.
          </p>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="faq-row hairline-t">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-display text-xl text-ink md:text-2xl">
                    {f.q}
                  </span>
                  <span
                    className={`text-mono text-signal transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-6 pr-12 text-sm leading-relaxed text-ink/70">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
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

        <div className="mt-14 flex flex-wrap items-center gap-6">
          <button
            onClick={openDrawer}
            className="text-mono group inline-flex items-center gap-4 border border-ink bg-ink px-8 py-5 text-sm font-bold uppercase tracking-widest text-white hover:border-signal hover:bg-signal cursor-pointer shadow-xl transition-all"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
