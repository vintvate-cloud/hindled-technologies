import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products, imageUrls } from "@/assets/products";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen/X — Engineered Outdoor Lighting" },
      { name: "description", content: "Stadium floodlights, sports lighting and solar systems engineered for the world's most demanding environments." },
      { property: "og:title", content: "Lumen/X — Engineered Outdoor Lighting" },
      { property: "og:description", content: "Stadium floodlights, sports lighting and solar systems engineered for the world's most demanding environments." },
      { property: "og:image", content: imageUrls["light-1"] },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Ecosystem />
      <About />
      <SolarBlock />
      <Stats />
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
      {/* Lamp — centered, contained, visible */}
      <motion.div
        style={{ y: productY, scale: productScale, opacity: productOpacity }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <motion.div
          style={{ x: sx, y: sy }}
          animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-square h-[62vh] max-h-[640px] w-auto"
        >
          <img
            src={imageUrls["light-1"]}
            alt="FL15 Performance Stadium Floodlight"
            className="h-full w-full object-contain"
            style={{ filter: "drop-shadow(0 30px 80px rgba(0,0,0,0.18))" }}
          />
          {/* Light beam */}
          <div
            className="absolute -bottom-32 left-1/2 h-64 w-[140%] -translate-x-1/2 opacity-40 blur-2xl"
            style={{
              background: "radial-gradient(ellipse at center, oklch(0.85 0.18 60 / 0.6), transparent 70%)",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Layered text — refined, not cluttered */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1600px] flex-col justify-between px-6 lg:px-10">
        <motion.div
          style={{ y: textY }}
          className="pt-6"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-mono text-ink/60"
            >
              EST · MMXXV — ENGINEERED WORLDWIDE
            </motion.div>
          </div>
        </motion.div>

        {/* Hero typography — split left/right to give the lamp space */}
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
              From international stadiums to autonomous urban grids, Lumen/X
              designs lighting systems where every photon is engineered, not decorated.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="text-mono group inline-flex items-center gap-3 border border-ink bg-ink px-5 py-3 text-paper transition-colors hover:bg-signal hover:border-signal"
              >
                Explore Products
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-mono pointer-events-none absolute bottom-6 right-6 z-10 text-ink/60">
        FL15 · Flagship Floodlight
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
    {
      k: "Precision Optics",
      v: "Beam control engineered to fractions of a degree. Spill is solved at the lens — not masked by shields.",
      n: "01",
    },
    {
      k: "Thermal Architecture",
      v: "Die-cast aluminium pathways move heat continuously, sustaining drivers at 185 lm/W under load.",
      n: "02",
    },
    {
      k: "Built To Outlast",
      v: "IP66 / IK10 housings field-tested for monsoon, salt-fog, vibration, and broadcast-grade UV exposure.",
      n: "03",
    },
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

        {/* Manifesto paragraph block */}
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

/* ============================================================ ECOSYSTEM (horizontal) */
function Ecosystem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalScroll = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -totalScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute left-0 right-0 top-0 z-10 px-6 pt-28 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-display text-[6vw] leading-[0.9] tracking-[-0.04em] md:text-[3.6vw]"
        >
          The <span className="text-signal">floodlight</span> series.
        </motion.h2>
      </div>

      <div className="h-screen overflow-hidden">
        <div ref={trackRef} className="flex h-full items-center will-change-transform">
          {products.map((p, i) => (
            <div
              key={p.slug}
              className="flex h-full w-screen shrink-0 items-center px-6 lg:px-10"
            >
              <div className="grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 md:grid-cols-2">
                <div className="relative h-[55vh] md:h-[70vh]">
                  <div className="text-display absolute inset-0 z-0 flex items-center justify-center text-[26vw] leading-none text-paper/[0.05] md:text-[18vw]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <img
                    src={imageUrls[p.image]}
                    alt={p.name}
                    className="relative z-10 mx-auto h-full w-full object-contain"
                    style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,.4))" }}
                  />
                </div>
                <div>
                  <div className="text-mono mb-4 text-signal">{p.tagline}</div>
                  <h3 className="text-display text-[14vw] leading-[0.9] tracking-[-0.04em] md:text-[6vw]">
                    {p.name}
                  </h3>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/70">
                    {p.description}
                  </p>
                  <dl className="mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-4 border-t border-paper/15 pt-6">
                    <div>
                      <dt className="text-mono text-paper/50">Efficacy</dt>
                      <dd className="text-display mt-1 text-2xl">{p.efficiency}</dd>
                    </div>
                    <div>
                      <dt className="text-mono text-paper/50">Output</dt>
                      <dd className="text-display mt-1 text-2xl">{p.lumens.split("–")[1]?.trim() ?? p.lumens}</dd>
                    </div>
                    <div>
                      <dt className="text-mono text-paper/50">Protection</dt>
                      <dd className="mt-1 text-sm">{p.ip}</dd>
                    </div>
                    <div>
                      <dt className="text-mono text-paper/50">CCT</dt>
                      <dd className="mt-1 text-sm">{p.cct}</dd>
                    </div>
                  </dl>
                  <Link
                    to="/products"
                    className="text-mono mt-8 inline-flex items-center gap-2 border-b border-paper pb-1"
                  >
                    Full spec sheet →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-mono pointer-events-none absolute bottom-6 right-6 z-10 text-paper/50">
        Scroll · {products.length} platforms
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
        className="pointer-events-none absolute -left-[5vw] top-10 text-display text-[26vw] leading-[0.85] tracking-[-0.05em] text-ink/[0.04]"
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
              src={imageUrls["light-3"]}
              alt="Lumen/X engineering"
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
            <Reveal delay={0.1}>
              engineers,
            </Reveal>
            <Reveal delay={0.2}>
              <span className="text-signal">opticists</span> &amp;
            </Reveal>
            <Reveal delay={0.3}>thermodynamicists.</Reveal>
          </h2>

          <p className="mt-10 max-w-lg text-base leading-relaxed text-ink/70">
            Lumen/X is a quiet collective focused on a single discipline: precision
            outdoor lighting. We don't follow catalogues. Every luminaire begins as
            a thermal sketch and ends as an instrument calibrated to a project's
            geometry, code, and atmosphere.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-ink/10 pt-8 md:grid-cols-3">
            {[
              { k: "12+", v: "Years of optics R&D" },
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

/* ============================================================ SOLAR */
function SolarBlock() {
  return (
    <section className="relative overflow-hidden bg-paper py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-display text-ink text-[12vw] leading-[0.9] tracking-[-0.04em] md:text-[7vw]">
              <Reveal>The future of</Reveal>
              <Reveal delay={0.1}>
                <span className="text-signal">self-sustaining</span>
              </Reveal>
              <Reveal delay={0.2}>lighting.</Reveal>
            </h2>
          </div>
          <div className="self-end lg:col-span-5">
            <p className="text-sm leading-relaxed text-ink/70">
              The JUNO Series is a self-contained lighting platform — HPBC photovoltaics,
              LiFePO₄ storage, and DALI-grade luminaires fused into a single architectural
              object. Highways, parks, gardens, and post-grid environments.
            </p>
            <Link
              to="/products"
              className="text-mono mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-ink"
            >
              Discover JUNO →
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { n: "JUNO Street", spec: "12m · 30W×2 · 400W HPBC" },
            { n: "JUNO Area", spec: "8m · 20W×2 · LiFePO₄" },
            { n: "JUNO Bollard", spec: "1140mm · 1.5W · 170 lm/W" },
          ].map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="hairline-t group flex items-end justify-between pt-6"
            >
              <div>
                <div className="text-mono text-signal">0{i + 1}</div>
                <h3 className="text-display mt-2 text-3xl text-ink">{c.n}</h3>
                <div className="text-mono mt-2 text-ink/60">{c.spec}</div>
              </div>
              <span className="text-mono text-ink/40 transition-all group-hover:translate-x-1 group-hover:text-signal">→</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ STATS */
function Stats() {
  const stats = [
    { v: "185", u: "lm/W", l: "Peak Efficacy" },
    { v: "528K", u: "lumens", l: "Single Luminaire Output" },
    { v: "IP66", u: "/ IK10", l: "Ingress + Impact" },
    { v: "07", u: "series", l: "Floodlight Platforms" },
  ];
  return (
    <section className="bg-stone py-24">
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

/* ============================================================ CLOSER */
function Closer() {
  return (
    <section className="bg-paper py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <h2 className="text-display text-ink text-[12vw] leading-[0.9] tracking-[-0.04em] md:text-[8vw]">
          <Reveal>Built for the</Reveal>
          <Reveal delay={0.1}>world's biggest</Reveal>
          <Reveal delay={0.2}>
            <span className="text-signal">stages.</span>
          </Reveal>
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="text-mono group inline-flex items-center gap-3 border border-ink bg-ink px-6 py-4 text-paper hover:bg-signal hover:border-signal"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
