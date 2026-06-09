import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { products, solar, imageUrls } from "@/assets/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Lumen/X Floodlights & Solar Systems" },
      { name: "description", content: "FL15, FL12, FL10, FL08, FL07, PL08 floodlights and the JUNO solar series. Full technical specifications." },
      { property: "og:title", content: "Lumen/X Products — Engineered Luminaires" },
      { property: "og:description", content: "Performance, modular, and solar lighting platforms for stadiums and infrastructure." },
      { property: "og:image", content: imageUrls["light-1"] },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="bg-paper pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <h1 className="text-display text-ink text-[14vw] leading-[0.88] tracking-[-0.04em] md:text-[8vw]">
            Every lumen.
            <br />
            <span className="text-signal">Engineered.</span>
          </h1>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink/70">
            Seven floodlight platforms and a self-sustaining solar series. Built across power
            classes from 200W community luminaires to 3200W modular stadium arrays.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          {products.map((p, i) => (
            <ProductRow key={p.slug} p={p} idx={i} />
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-paper">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <h2 className="text-display text-[12vw] leading-[0.9] tracking-[-0.04em] md:text-[7vw]">
            Self-sustaining.
            <br />
            <span className="text-signal">Always on.</span>
          </h2>
          <div className="mt-16 grid gap-px bg-paper/10 md:grid-cols-2">
            {solar.map((s) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-ink p-8 lg:p-12"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-mono text-signal">{s.slug.toUpperCase()}</div>
                    <h3 className="text-display mt-3 text-3xl">{s.name}</h3>
                    <p className="mt-3 max-w-md text-sm text-paper/70">{s.description}</p>
                  </div>
                  <img src={imageUrls[s.image]} alt={s.name} className="h-32 w-32 object-contain" />
                </div>
                <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-paper/15 pt-6 text-sm">
                  {Object.entries(s.specs).map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-mono text-paper/50">{k}</dt>
                      <dd className="mt-1">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.applications.map((a) => (
                    <span key={a} className="text-mono border border-paper/20 px-2 py-1 text-paper/70">
                      {a}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-end lg:px-10">
          <h3 className="text-display text-ink text-5xl md:text-7xl">Need a custom spec?</h3>
          <Link to="/contact" className="text-mono border border-ink bg-ink px-6 py-4 text-paper hover:bg-signal hover:border-signal">
            Talk to engineering →
          </Link>
        </div>
      </section>
    </>
  );
}

function ProductRow({ p, idx }: { p: typeof products[number]; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="hairline-t grid grid-cols-1 gap-10 py-20 lg:grid-cols-12 lg:gap-12"
    >
      {/* IMAGE — left, sticky-feel */}
      <div className="lg:col-span-6">
        <div className="relative aspect-[5/4] w-full overflow-hidden bg-stone">
          <motion.img
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            src={imageUrls[p.image]}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-contain p-6"
          />
          <div className="text-mono absolute bottom-4 left-4 text-ink/60">
            {String(idx + 1).padStart(2, "0")} · {p.name}
          </div>
        </div>
      </div>

      {/* INFO + SPECS — right, side by side */}
      <div className="lg:col-span-6">
        <div className="text-mono text-signal">{p.tagline}</div>
        <h2 className="text-display mt-2 text-6xl text-ink md:text-8xl tracking-[-0.04em]">
          {p.name}
        </h2>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink/70">{p.description}</p>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
          <Spec label="Power" value={p.power.join(" · ")} />
          <Spec label="Efficiency" value={p.efficiency} />
          <Spec label="Lumens" value={p.lumens} />
          <Spec label="CRI" value={p.cri.join(" · ")} />
          <Spec label="CCT" value={p.cct} />
          <Spec label="Protection" value={p.ip} />
          <Spec label="Controls" value={p.controls.join(" · ")} />
          <Spec label="Beam Angles" value={p.beam.join(" · ")} />
        </dl>

        <div className="mt-10">
          <div className="text-mono mb-3 text-ink/50">Features</div>
          <ul className="grid grid-cols-1 gap-1.5 text-sm md:grid-cols-2">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2 text-ink/80">
                <span className="text-signal">+</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.applications.map((a) => (
            <span key={a} className="text-mono border border-ink/15 px-2 py-1 text-ink/60">
              {a}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-mono text-ink/50">{label}</dt>
      <dd className="mt-1 text-sm text-ink">{value}</dd>
    </div>
  );
}
