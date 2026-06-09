import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { products, imageUrls } from "@/assets/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen/X — Lighting The Future Of Performance" },
      { name: "description", content: "Stadium floodlights, sports lighting and solar systems engineered for the world's most demanding environments." },
      { property: "og:title", content: "Lumen/X — Lighting The Future Of Performance" },
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
      <SolarBlock />
      <Stats />
      <Closer />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const productY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const productScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const title = ["LIGHTING", "THE FUTURE OF", "PERFORMANCE."];

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-paper pt-24">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1600px] flex-col justify-between px-6 lg:px-10">
        <div className="text-mono flex items-center justify-between text-ink/60">
          <span>— 01 / Manifesto</span>
          <span className="hidden md:inline">Est. MMXXV · Engineered worldwide</span>
        </div>

        <motion.div style={{ y: textY }} className="relative z-10 -mb-6 mt-8 md:mt-0">
          <h1 className="text-display text-ink text-[16vw] leading-[0.86] tracking-[-0.045em] md:text-[12vw]">
            {title.map((line, li) => (
              <div key={li} className="overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, delay: 0.15 * li, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  {li === 2 ? (
                    <>
                      <span className="text-signal">PER</span>FORMANCE.
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </div>
            ))}
          </h1>
        </motion.div>

        <div className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="max-w-md text-sm leading-relaxed text-ink/70"
          >
            From international stadiums to autonomous urban grids, Lumen/X designs lighting systems
            where every photon is engineered. Not decorated.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              to="/products"
              className="text-mono group inline-flex items-center gap-3 border border-ink bg-ink px-5 py-3 text-paper transition-colors hover:bg-signal hover:border-signal"
            >
              Explore Products
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/applications"
              className="text-mono group inline-flex items-center gap-3 border border-ink/20 px-5 py-3 text-ink hover:border-ink"
            >
              View Applications
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      >
        <motion.div
          style={{ y: productY, scale: productScale }}
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-[78vh] w-[78vh] max-w-[90vw]"
        >
          <img
            src={imageUrls["light-1"]}
            alt="FL15 Performance Stadium Floodlight"
            className="h-full w-full object-contain mix-blend-multiply"
          />
        </motion.div>
      </motion.div>

      <div className="text-mono pointer-events-none absolute bottom-6 right-6 z-10 text-ink/60">
        FL15 · Flagship Floodlight
      </div>
    </section>
  );
}

function Philosophy() {
  const lines = ["ENGINEERED", "FOR THE WORLD'S", "MOST DEMANDING", "ENVIRONMENTS."];
  return (
    <section className="relative bg-paper py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-mono mb-16 flex justify-between text-ink/60">
          <span>— 02 / Philosophy</span>
          <span>Belief System</span>
        </div>
        <h2 className="text-display text-ink text-[10vw] leading-[0.9] md:text-[7vw]">
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                {line}
              </motion.span>
            </div>
          ))}
        </h2>
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {[
            { k: "Precision Optics", v: "Beam control engineered down to fractions of a degree, controlling spill at the source." },
            { k: "Thermal Architecture", v: "Die-cast aluminium pathways dissipate heat continuously — pushing efficacy to 185 lm/W." },
            { k: "Built To Outlast", v: "IP66 / IK10 housings tested for monsoon, salt-fog, vibration, and broadcast-grade UV." },
          ].map((b, i) => (
            <motion.div
              key={b.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="hairline-t pt-6"
            >
              <div className="text-mono mb-3 text-signal">0{i + 1}</div>
              <h3 className="text-display text-2xl text-ink">{b.k}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{b.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section ref={ref} className="relative bg-ink text-paper" style={{ height: `${products.length * 80}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <div className="text-mono flex items-center justify-between px-6 pt-28 text-paper/60 lg:px-10">
          <span>— 03 / Ecosystem</span>
          <span>Scroll · Floodlight series</span>
        </div>

        <motion.div style={{ x }} className="flex h-full items-center">
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
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    src={imageUrls[p.image]}
                    alt={p.name}
                    className="relative z-10 mx-auto h-full w-full object-contain"
                    style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,.4))" }}
                  />
                </div>
                <div>
                  <div className="text-mono mb-4 text-signal">{p.tagline}</div>
                  <h3 className="text-display text-[14vw] leading-[0.9] md:text-[7vw]">
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
        </motion.div>
      </div>
    </section>
  );
}

function SolarBlock() {
  return (
    <section className="relative overflow-hidden bg-paper py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-mono mb-12 flex justify-between text-ink/60">
          <span>— 04 / JUNO Series</span>
          <span>Solar Ecosystem</span>
        </div>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-display text-ink text-[12vw] leading-[0.88] md:text-[8vw]">
              THE FUTURE OF
              <br />
              <span className="text-signal">SELF-SUSTAINING</span>
              <br />
              LIGHTING.
            </h2>
          </div>
          <div className="self-end lg:col-span-5">
            <p className="text-sm leading-relaxed text-ink/70">
              The JUNO Series is a self-contained lighting platform — HPBC photovoltaics,
              LiFePO₄ storage, and DALI-grade luminaires fused into a single architectural object.
              Highways, parks, gardens, and post-grid environments.
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

function Closer() {
  return (
    <section className="bg-paper py-32 lg:py-48">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="text-mono mb-10 text-ink/60">— 05 / Invitation</div>
        <h2 className="text-display text-ink text-[12vw] leading-[0.9] md:text-[9vw]">
          BUILT FOR THE
          <br />
          WORLD'S BIGGEST
          <br />
          <span className="text-signal">STAGES.</span>
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="text-mono group inline-flex items-center gap-3 border border-ink bg-ink px-6 py-4 text-paper hover:bg-signal hover:border-signal"
          >
            Start a project
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link to="/technology" className="text-mono text-ink/60 hover:text-ink">
            How we engineer light →
          </Link>
        </div>
      </div>
    </section>
  );
}
