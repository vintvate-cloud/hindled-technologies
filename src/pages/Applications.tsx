import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { solutionApplications } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";
import { FileDown, Compass, Sparkles } from "lucide-react";

const CATALOGUE_PDF_PATH = encodeURI("/(21 x 25 cm) HINDLED Catalogue 2026.pdf");

export default function AppsPage() {
  const { openDrawer } = useContactDrawer();

  useMeta({
    title: "Applications — HINDLED Technologies Lighting Solutions",
    description: "Solar Smart Poles, Sports Arenas, Industrial Warehouses, Façades, Tunnels, Airports, and EV Charging Poles engineered for India and global environments.",
  });

  return (
    <>
      <section className="bg-paper pt-40 pb-16">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="flex items-center gap-2 text-mono mb-6 text-signal font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" /> Lighting Infrastructure Applications
          </div>
          <h1 className="text-display text-ink text-[12vw] leading-[0.88] sm:text-[10vw] md:text-[8vw] max-w-6xl font-bold tracking-tight">
            WHERE THE LIGHT
            <br />
            <span className="text-signal">HAS TO PERFORM.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-ink/75 font-light">
            We consult, engineer, and deploy high-performance illumination solutions across 8 specialized infrastructure categories. Tailored for extreme thermal, electrical, and environmental demands.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={openDrawer}
              className="rounded-full bg-signal px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-ink transition-all cursor-pointer"
            >
              Request Application Audit →
            </button>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-stone/60 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink hover:bg-ink hover:text-paper transition-all cursor-pointer"
            >
              Explore 21 Hardware Platforms →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          {solutionApplications.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`hairline-t grid items-center gap-10 py-16 md:grid-cols-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              {/* Dual Image Box: Luminaire + Project Field Pic */}
              <div className="md:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-paper border border-ink/10 shadow-sm p-3 flex items-center justify-center">
                    <img src={app.image} alt={app.title} className="w-full h-full max-h-full max-w-full object-contain" />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider bg-ink text-paper px-2 py-0.5 rounded-full shadow-xs">
                      Platform Luminaire
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone border border-ink/10 shadow-sm">
                    <img src={app.projectPic} alt={`${app.title} field project`} className="w-full h-full object-cover" />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider bg-signal text-white px-2 py-0.5 rounded-full shadow-xs">
                      Field Installation
                    </span>
                  </div>
                </div>
              </div>

              {/* Application Details */}
              <div className="md:col-span-5 space-y-4">
                <div className="text-mono text-signal font-bold text-xs">
                  {String(i + 1).padStart(2, "0")} · {app.category}
                </div>
                <h2 className="text-display text-3xl font-bold text-ink sm:text-4xl md:text-5xl tracking-tight">
                  {app.title}
                </h2>
                <p className="text-xs font-semibold text-ink/50 uppercase tracking-wider">
                  {app.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-ink/75 font-light">
                  {app.description}
                </p>
                
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-ink/80 space-y-1">
                  <span className="font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1.5 text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Consultant Guidance
                  </span>
                  <p className="text-[11px] leading-relaxed">
                    {app.consultantNote}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/products"
                    className="text-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 text-signal border-b border-signal pb-1 hover:text-ink hover:border-ink transition-colors"
                  >
                    View Product Platforms & Photometrics →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
