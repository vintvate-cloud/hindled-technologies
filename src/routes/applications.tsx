import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { imageUrls } from "@/assets/products";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — HINDLED-TECHNOLOGIES Technologies" },
      { name: "description", content: "Stadiums, sports venues, infrastructure, urban grids and landscape environments lit by HINDLED-TECHNOLOGIES Technologies." },
      { property: "og:title", content: "Applications — HINDLED-TECHNOLOGIES Technologies" },
      { property: "og:description", content: "Where HINDLED-TECHNOLOGIES engineering meets the field." },
      { property: "og:image", content: imageUrls["fl18"] },
    ],
  }),
  component: AppsPage,
});

const apps = [
  { t: "Stadiums", d: "Broadcast-grade uniformity for football, cricket and athletics venues from regional to international scale.", img: "fl18", series: "FL18 · SP02" },
  { t: "High-Mast & Ports", d: "Long-throw distribution for airports, ports, interchanges and logistics yards.", img: "sp02", series: "SP02" },
  { t: "Industrial High Bay", d: "9-in-1 switchable high-bay luminaires for warehousing and manufacturing.", img: "hb12", series: "HB12" },
  { t: "Highways & Roads", d: "Autonomous solar street lighting from 6m to 12m. Smart dimming and LiFePO₄ storage.", img: "juno-street", series: "JUNO Street" },
  { t: "Civic & Commercial", d: "Architectural area lighting for business parks, plazas and public infrastructure.", img: "juno-area-a", series: "JUNO Area" },
  { t: "Landscape & Hospitality", d: "Bollards and post-tops crafted for resorts, gardens and pedestrian environments.", img: "juno-bollard", series: "JUNO Bollard · Post-Top" },
];

function AppsPage() {
  return (
    <>
      <section className="bg-paper pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="text-mono mb-8 text-ink/60">— Field / Applications</div>
          <h1 className="text-display text-ink text-[12vw] leading-[0.88] md:text-[9vw]">
            WHERE THE LIGHT
            <br />
            <span className="text-signal">HAS TO PERFORM.</span>
          </h1>
        </div>
      </section>
      <section className="bg-paper pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          {apps.map((a, i) => (
            <motion.div
              key={a.t}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className={`hairline-t grid items-center gap-10 py-16 md:grid-cols-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-7">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
                  <img src={imageUrls[a.img]} alt={a.t} className="absolute inset-0 h-full w-full object-contain mix-blend-multiply" />
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="text-mono text-signal">{String(i + 1).padStart(2, "0")} · {a.series}</div>
                <h2 className="text-display mt-3 text-5xl text-ink md:text-7xl">{a.t}</h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/70">{a.d}</p>
                <Link to="/contact" className="text-mono mt-6 inline-flex border-b border-ink pb-1">
                  Plan a project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
