import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { catalogue, type CatalogueItem } from "@/assets/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Handled Technologies" },
      { name: "description", content: "The complete Handled Technologies catalogue: solar street, area, garden, bollard and wall-wash lighting plus FL18 / SP02 / HB12 / FL17 outdoor & industrial luminaires." },
      { property: "og:title", content: "Handled Technologies — Product Catalogue 2026" },
      { property: "og:description", content: "21 platforms across solar lighting and outdoor & industrial luminaires." },
      { property: "og:image", content: catalogue[18].image },
    ],
  }),
  component: ProductsPage,
});

const filters = ["All", "Solar", "Outdoor & Industrial"] as const;
type Filter = (typeof filters)[number];

function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = useMemo(
    () =>
      filter === "All" ? catalogue : catalogue.filter((c) => c.category === filter),
    [filter],
  );

  return (
    <>
      <section className="bg-paper pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="text-mono text-ink/60">Catalogue · 2026</div>
          <h1 className="text-display mt-4 text-ink text-[14vw] leading-[0.88] tracking-[-0.04em] md:text-[8vw]">
            Every lumen.
            <br />
            <span className="text-signal">Engineered.</span>
          </h1>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-ink/70">
            Twenty-one platforms across two disciplines — a full solar-lighting portfolio
            and mains-powered outdoor & industrial luminaires. Every model carries
            specifications transcribed directly from HANDLED engineering data.
          </p>

          <div className="mt-12 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-mono border px-4 py-2 transition-all ${
                  filter === f
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
            <div className="text-mono ml-auto self-end text-ink/40">
              {String(items.length).padStart(2, "0")} models
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          {items.map((p, i) => (
            <ProductRow key={p.slug} p={p} idx={i} />
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-end lg:px-10">
          <h3 className="text-display text-ink text-5xl md:text-7xl">
            Need a custom spec?
          </h3>
          <Link
            to="/contact"
            className="text-mono border border-ink bg-ink px-6 py-4 text-paper hover:border-signal hover:bg-signal"
          >
            Talk to engineering →
          </Link>
        </div>
      </section>
    </>
  );
}

function ProductRow({ p, idx }: { p: CatalogueItem; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="hairline-t grid grid-cols-1 gap-10 py-20 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-6">
        <div className="relative aspect-[5/4] w-full overflow-hidden bg-stone">
          <motion.img
            initial={{ scale: 1.06 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            src={p.image}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-contain p-6"
          />
          <div className="text-mono absolute bottom-4 left-4 text-ink/60">
            {p.code} · {p.series}
          </div>
          <div className="text-mono absolute right-4 top-4 text-ink/40">
            {String(idx + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="text-mono text-signal">{p.tagline}</div>
        <h2 className="text-display mt-2 text-4xl text-ink md:text-6xl tracking-[-0.03em]">
          {p.name}
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/70">{p.description}</p>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5">
          {Object.entries(p.specs).map(([k, v]) => (
            <div key={k}>
              <dt className="text-mono text-ink/50">{k}</dt>
              <dd className="mt-1 text-sm text-ink">{v}</dd>
            </div>
          ))}
        </dl>

        {p.features && p.features.length > 0 && (
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
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="text-mono border border-ink/15 px-2 py-1 text-ink/60">
            {p.category}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
