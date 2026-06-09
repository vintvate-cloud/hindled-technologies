import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Lumen/X Engineering" },
      { name: "description", content: "Optics, thermal architecture, drivers, control protocols and solar autonomy. The engineering behind Lumen/X." },
      { property: "og:title", content: "Technology — Lumen/X Engineering" },
      { property: "og:description", content: "The engineering systems behind every Lumen/X luminaire." },
    ],
  }),
  component: TechPage,
});

const pillars = [
  { n: "01", t: "Precision Optics", d: "Custom-cast PMMA lenses delivering beam angles from 10° to 120°, with FT6 and P-series asymmetric distributions for spill-critical environments." },
  { n: "02", t: "Thermal Architecture", d: "Die-cast aluminium heat pathways engineered for continuous output at ambient temperatures up to 50°C — preserving lumen maintenance beyond L90/B10 at 100,000h." },
  { n: "03", t: "Driver Platform", d: "Flicker-free constant-current drivers with surge protection to 20kV. DALI-2, DMX512, and 0–10V integration for broadcast and architectural control." },
  { n: "04", t: "Solar Autonomy", d: "HPBC photovoltaics paired with LiFePO₄ banks rated for 3000+ cycles. Onboard MPPT, smart dimming, and bird-spike protection." },
  { n: "05", t: "Modular Service", d: "Tool-free module replacement on flagship FL07 keeps stadiums lit during maintenance windows. Independent driver-per-module redundancy." },
  { n: "06", t: "Ingress & Impact", d: "Tested to IP66 and IK10. Salt-fog, vibration, monsoon and UV cycles validated against IEC 60598." },
];

function TechPage() {
  return (
    <>
      <section className="bg-paper pt-40 pb-20">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="text-mono mb-8 text-ink/60">— Discipline / Technology</div>
          <h1 className="text-display text-ink text-[12vw] leading-[0.88] md:text-[9vw]">
            ENGINEERED
            <br />
            <span className="text-signal">PHOTON BY PHOTON.</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-ink/70">
            Every Lumen/X luminaire is the sum of six engineering disciplines working in concert.
            Below: the systems behind the performance.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-32">
        <div className="mx-auto grid max-w-[1600px] gap-px bg-border px-0 lg:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-paper p-10 lg:p-16"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-mono text-signal">{p.n}</span>
                <span className="text-mono text-ink/40">PILLAR</span>
              </div>
              <h2 className="text-display mt-6 text-4xl text-ink md:text-5xl">{p.t}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-32 text-paper">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <h2 className="text-display text-[12vw] leading-[0.9] md:text-[8vw]">
            STANDARDS WE
            <br />
            <span className="text-signal">EXCEED.</span>
          </h2>
          <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            {["IEC 60598", "ENEC", "CE / UKCA", "RoHS", "FCC", "IES TM-30", "DALI-2 DiiA", "IDA Dark-Sky"].map((s) => (
              <div key={s} className="hairline-t border-paper/15 pt-4">
                <div className="text-mono text-paper/60">Certified</div>
                <div className="text-display mt-2 text-2xl">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
