import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featured, catalogue } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndexPage() {
  useMeta({
    title: "HINDLED-TECHNOLOGIES Technologies — Engineered Outdoor Lighting",
    description: "Stadium floodlights, high-mast, industrial high-bay and a complete solar lighting portfolio. Engineered in India, shipped worldwide.",
  });

  return (
    <>
      <Hero />
      <Philosophy />
      <Showcase />
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
  const productY = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const productScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const productOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 30);
      my.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-paper pt-28">
      <motion.div
        style={{ y: productY, scale: productScale, opacity: productOpacity }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 h-full w-full">
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2400&auto=format&fit=crop" 
            alt="Minimalist subtle architectural background" 
            className="h-full w-full object-cover opacity-60"
          />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1600px] flex-col justify-end px-6 lg:px-10">

        <div className="grid grid-cols-12 items-end gap-6 pb-16">
          <motion.h1
            style={{ y: textY }}
            className="text-display col-span-12 text-ink text-[12vw] leading-[0.88] tracking-[-0.045em] md:col-span-7 md:text-[7.2vw]"
          >
            <Reveal delay={0.1}>Lighting</Reveal>
            <Reveal delay={0.2}>
              the <span className="text-signal">future</span>
            </Reveal>
            <Reveal delay={0.3}>of performance.</Reveal>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.9 }}
            className="col-span-12 flex flex-col gap-6 md:col-span-4 md:col-start-9"
          >
            <p className="max-w-sm text-sm leading-relaxed text-ink/70">
              From international stadiums to autonomous solar grids, HINDLED
              designs lighting systems where every photon is engineered, not decorated.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="text-mono group inline-flex items-center gap-3 border border-signal bg-signal px-5 py-3 text-paper transition-colors hover:border-ink hover:bg-ink"
              >
                Explore the catalogue
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
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
            <div className="text-mono text-ink/50">Philosophy</div>
          </div>
          <p className="col-span-12 text-display text-2xl leading-[1.2] tracking-[-0.02em] text-ink md:col-span-8 md:text-4xl">
            We don't build fixtures. We design{" "}
            <span className="text-signal">instruments</span> that shape photons into
            architecture — bright enough for a final whistle, quiet enough for a midnight
            highway, durable enough for a decade of seasons.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================ SHOWCASE */
function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".show-card", {
        y: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
      if (headingRef.current) {
        gsap.from(headingRef.current.querySelectorAll(".sw"), {
          yPercent: 110,
          stagger: 0.08,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
        });
      }
      gsap.utils.toArray<HTMLElement>(".parallax-img").forEach((el) => {
        gsap.to(el, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-paper py-32 text-ink lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-mono text-ink/50">Selected Platforms</div>
        <h2
          ref={headingRef}
          className="text-display mt-4 text-[12vw] leading-[0.9] tracking-[-0.04em] md:text-[6vw]"
        >
          <div className="overflow-hidden"><span className="sw inline-block">Light shaped</span></div>
          <div className="overflow-hidden"><span className="sw inline-block">for every <span className="text-signal">scale.</span></span></div>
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <div key={p.slug} className="show-card group relative overflow-hidden bg-paper">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                <img
                  src={p.image}
                  alt={p.name}
                  className="parallax-img absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="text-display absolute left-6 top-6 text-6xl leading-none text-ink/[0.07]">
                  {p.code}
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="text-mono text-signal">{p.series}</div>
                <h3 className="text-display mt-2 text-2xl">{p.name}</h3>
                <p className="mt-3 line-clamp-2 text-sm text-ink/60">{p.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-end justify-between">
          <p className="max-w-md text-sm text-ink/60">
            A condensed selection — explore the full {catalogue.length}-model catalogue spanning
            solar lighting, high-mast, stadium and industrial luminaires.
          </p>
          <Link
            to="/products"
            className="text-mono group inline-flex items-center gap-2 border-b border-ink pb-1"
          >
            Full catalogue
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
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
              alt="HINDLED-TECHNOLOGIES Technologies engineering"
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
            HINDLED-TECHNOLOGIES Technologies is a quiet collective focused on a single discipline:
            precision outdoor lighting. We don't follow catalogues. Every luminaire
            begins as a thermal sketch and ends as an instrument calibrated to a
            project's geometry, code, and atmosphere.
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
      "HINDLED-TECHNOLOGIES engineered our solar street-lighting upgrade with a quiet rigor — every pole, every photon accounted for. Years on, the system is still hitting day-one outputs.",
    name: "Karina Vasquez",
    role: "Director of Infrastructure · Vista Municipality",
  },
  {
    quote:
      "Working with HINDLED-TECHNOLOGIES is closer to working with a research lab than a manufacturer. They challenge the brief, then deliver fixtures that quietly outperform it.",
    name: "Daniel Okafor",
    role: "Lighting Designer · ATELIER 9",
  },
];

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
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
    <section ref={ref} className="relative overflow-hidden bg-stone py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="text-mono text-ink/50">Field Reports</div>
            <h2 className="text-display mt-4 text-ink text-[10vw] leading-[0.92] tracking-[-0.04em] md:text-[5.5vw]">
              Trusted on the <span className="text-signal">ground.</span>
            </h2>
          </div>
          <p className="col-span-12 self-end text-sm leading-relaxed text-ink/70 md:col-span-5 md:col-start-8">
            A small selection from architects, consultants and infrastructure leads who
            specify HINDLED-TECHNOLOGIES on the projects that matter most.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px bg-ink/10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="t-card flex flex-col gap-10 bg-stone p-10 lg:p-12">
              <div className="text-display text-6xl leading-none text-signal">"</div>
              <p className="text-lg leading-relaxed text-ink md:text-xl">{t.quote}</p>
              <div className="hairline-t mt-auto pt-5">
                <div className="text-display text-lg text-ink">{t.name}</div>
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
    q: "Which environments are HINDLED-TECHNOLOGIES luminaires built for?",
    a: "Every fixture targets IP66 / IK10 with salt-spray, monsoon and broadcast-grade UV testing. Our portfolio is deployed across stadiums, airports, highways, ports and remote off-grid landscapes.",
  },
  {
    q: "What is the warranty across the catalogue?",
    a: "Solar platforms ship with a 5–10 year warranty depending on configuration. Outdoor & industrial luminaires (SP02, FL18, HB12, FL17) carry a 5-year warranty as standard.",
  },
  {
    q: "Do you support DALI, DMX and 0-10V controls?",
    a: "Yes — flagship floodlights including FL18 support DMX512, DALI, DALI-2 and 0-10V. Most HB12 and SP02 SKUs are dimming-ready and project-configurable.",
  },
  {
    q: "Can the solar systems run fully off-grid?",
    a: "Yes. The JUNO and Mars platforms pair HPBC monocrystalline panels with LiFePO4 storage and adaptive 4-step dimming, sized for 3–8 days of autonomy depending on geography.",
  },
  {
    q: "Do you offer OEM / ODM and custom specifications?",
    a: "Absolutely. The engineering team co-develops bespoke optics, finishes and control profiles. Talk to engineering with a brief and we'll respond with a project file.",
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
            Specifications, controls, warranty, OEM — the most-asked questions from
            consultants and infrastructure leads.
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
                    className={`text-mono text-signal transition-transform duration-500 ${isOpen ? "rotate-45" : ""
                      }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
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
  return (
    <section className="bg-paper pb-32 pt-16 lg:pb-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <h2 className="text-display text-ink text-[12vw] leading-[0.9] tracking-[-0.04em] md:text-[8vw]">
          <Reveal>Built for the</Reveal>
          <Reveal delay={0.1}>world's biggest</Reveal>
          <Reveal delay={0.2}>
            <span className="text-signal">stages.</span>
          </Reveal>
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <button
            onClick={openDrawer}
            className="text-mono group inline-flex items-center gap-3 border border-ink bg-ink px-6 py-4 text-paper hover:border-signal hover:bg-signal cursor-pointer"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
