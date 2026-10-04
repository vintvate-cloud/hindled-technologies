import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  featured,
  type CatalogueItem,
  enrichProduct,
  type EnrichedProduct
} from "@/assets/products";
import { useContactDrawer } from "./ContactDrawer";
import {
  Camera,
  Sun,
  ZapOff,
  ShieldCheck,
  Cpu,
  Eye,
  Layers,
  ArrowRight,
  Info,
  CheckCircle2,
  Maximize2
} from "lucide-react";

export function FeaturedProductsSection() {
  const { openDrawer } = useContactDrawer();
  const [selectedProduct, setSelectedProduct] = useState<EnrichedProduct | null>(null);

  // Enriched featured items
  const enrichedList = featured.map(enrichProduct);
  const tejasProduct = enrichedList.find((p) => p.slug === "tejas-smart-pole")!;
  const otherFeatured = enrichedList.filter((p) => p.slug !== "tejas-smart-pole");

  return (
    <section id="featured-products" className="relative bg-paper py-28 lg:py-40 hairline-t overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-3">
              — BENCHMARK HARDWARE
            </span>
            <h2 className="text-display text-ink text-[9vw] leading-[0.92] tracking-[-0.04em] md:text-[5vw] font-bold">
              Featured <span className="text-signal">Platforms.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-ink/70 font-light leading-relaxed">
              Flagship luminaires engineered for critical municipal highways, professional stadiums, royal heritage sites, and zero-grid autonomous smart security.
            </p>
          </div>

          <Link
            to="/products"
            className="text-mono text-xs font-bold uppercase tracking-wider text-ink inline-flex items-center gap-3 border-b-2 border-signal pb-1 hover:border-ink hover:text-signal transition-colors shrink-0 self-start md:self-end"
          >
            Full 21-Platform Catalogue
            <span>→</span>
          </Link>
        </div>

        {/* 1. HERO SPOTLIGHT CARD: TEJAS SERIES (CAMERA + SOLAR LIGHT WITHOUT ELECTRICITY) */}
        <div className="mb-16 rounded-[36px] bg-stone border-2 border-signal/40 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden group">
          {/* Subtle Accent Glow */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-signal/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative w-full rounded-[28px] overflow-hidden bg-paper border border-ink/10 p-6 sm:p-8 flex items-center justify-center min-h-[360px] sm:min-h-[420px] shadow-sm">
              <img
                src={tejasProduct.image}
                alt={tejasProduct.name}
                className="max-h-[360px] sm:max-h-[420px] max-w-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-md"
              />

              {/* Zero Electricity Badge */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-signal text-white shadow-lg">
                  <ZapOff className="w-3.5 h-3.5" />
                  100% Without Electricity
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-ink text-paper shadow-md">
                  <Camera className="w-3 h-3 text-signal" />
                  Integrated CCTV + Solar Light
                </span>
              </div>

              <span className="absolute bottom-4 right-4 text-mono text-xs bg-paper/90 backdrop-blur-md px-3 py-1 rounded-full text-ink font-bold border border-ink/10 shadow-sm">
                Series 11 · TEJAS
              </span>
            </div>

            {/* Right Story & Dual System Breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-mono text-xs font-extrabold uppercase tracking-widest text-signal block mb-2">
                  ★ SPECIAL HIGHLIGHT PLATFORM
                </span>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.05]">
                  {tejasProduct.name}
                </h3>
                <p className="text-sm font-mono text-ink/60 mt-1 uppercase font-bold">
                  {tejasProduct.tagline}
                </p>
              </div>

              <p className="text-base sm:text-lg text-ink/80 leading-relaxed font-light">
                A breakthrough in off-grid infrastructure: TEJAS combines <strong className="font-bold text-ink">continuous HD security surveillance</strong> and <strong className="font-bold text-ink">high-lumen solar area illumination</strong> on a single unified pole — <strong className="text-signal font-bold">operating 100% without electricity</strong>. Zero conduit trenching, zero grid dependency, and zero monthly electric bills.
              </p>

              {/* Dual System Capabilities Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-paper border border-ink/10 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-signal font-bold text-xs uppercase font-mono">
                    <Camera className="w-4 h-4" />
                    <span>Off-Grid Security Camera</span>
                  </div>
                  <p className="text-xs text-ink/70 leading-relaxed font-light">
                    24/7 continuous wireless recording & 4G/Wi-Fi live cloud feed powered entirely by vertical PV battery backup.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-paper border border-ink/10 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-signal font-bold text-xs uppercase font-mono">
                    <Sun className="w-4 h-4" />
                    <span>High-Output Solar Lighting</span>
                  </div>
                  <p className="text-xs text-ink/70 leading-relaxed font-light">
                    170 lm/W optical LED illumination with 4-step autonomous dimming and 5+ rainy days weather backup.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedProduct(tejasProduct)}
                  className="rounded-full bg-ink hover:bg-signal px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
                >
                  Inspect Specifications
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={openDrawer}
                  className="rounded-full border border-ink/20 hover:border-signal bg-paper px-6 py-4 text-xs font-bold uppercase tracking-widest text-ink hover:text-signal transition-all cursor-pointer shadow-sm"
                >
                  Consult Engineering
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 2. THREE COMPANION FEATURED PRODUCTS: HL GAJ, HL ADITI, SANDHYA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherFeatured.map((prod) => (
            <motion.div
              key={prod.slug}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between rounded-[32px] bg-stone border border-ink/10 p-6 sm:p-8 hover:border-signal hover:shadow-xl transition-all group"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden bg-paper border border-ink/5 p-4 flex items-center justify-center mb-6">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-sm"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-wider bg-ink text-paper px-2.5 py-1 rounded-full">
                    {prod.code} · {prod.series}
                  </span>
                  {prod.highlightBadge && (
                    <span className="absolute bottom-3 right-3 text-[9px] font-mono font-bold uppercase tracking-wider bg-signal text-white px-2.5 py-0.5 rounded-full shadow-sm">
                      {prod.highlightBadge.split("·")[0]}
                    </span>
                  )}
                </div>

                <span className="text-mono text-[10px] font-extrabold uppercase tracking-widest text-signal block mb-1">
                  {prod.series} PLATFORM
                </span>
                <h3 className="font-display text-2xl font-bold text-ink tracking-tight">
                  {prod.name}
                </h3>
                <p className="mt-2 text-xs text-ink/70 line-clamp-3 leading-relaxed font-light">
                  {prod.description}
                </p>

                {/* Specs Pill List */}
                <div className="mt-4 pt-4 border-t border-ink/10 space-y-1.5">
                  {Object.entries(prod.specs).slice(0, 3).map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-ink/50 uppercase">{k}:</span>
                      <span className="font-bold text-ink truncate max-w-[60%]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="text-mono text-xs font-bold uppercase tracking-wider text-ink hover:text-signal transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  Technical Specs →
                </button>
                <button
                  onClick={openDrawer}
                  className="text-mono text-[10px] font-bold uppercase tracking-wider text-signal hover:underline cursor-pointer"
                >
                  Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Technical Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-0 md:p-6"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ y: "100%", opacity: 0.9 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="relative flex h-full w-full max-w-[1100px] md:h-[85vh] flex-col overflow-hidden rounded-none md:rounded-[32px] bg-paper border border-ink/10 shadow-2xl text-ink"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex-shrink-0 flex items-center justify-between px-8 py-5 border-b border-ink/10 bg-paper">
                <div className="flex flex-col">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-stone text-ink/70 w-fit">
                    {selectedProduct.category} · Platform {selectedProduct.code}
                  </span>
                  <h3 className="font-display mt-1 text-2xl font-bold tracking-tight text-ink">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone text-ink hover:bg-ink hover:text-paper transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Showcase Body */}
              <div className="flex-grow overflow-y-auto p-6 md:p-10 no-scrollbar" data-lenis-prevent>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start h-full">

                  {/* Left Column Image */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="relative w-full rounded-[24px] overflow-hidden shadow-sm border border-ink/10 bg-stone p-6 flex items-center justify-center min-h-[320px]">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="max-h-[360px] w-auto h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Right Column Specs & Summary */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-mono text-xs text-ink/40 uppercase tracking-widest font-bold">Engineering Overview</h4>
                      <p className="mt-2 text-sm text-ink/80 leading-relaxed font-light">
                        {selectedProduct.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-mono text-xs text-ink/40 uppercase tracking-widest font-bold mb-3">Specifications</h4>
                      <div className="border border-ink/10 rounded-2xl overflow-hidden bg-paper shadow-sm">
                        <table className="w-full text-left border-collapse text-xs">
                          <tbody>
                            {Object.entries(selectedProduct.specs).map(([key, val], idx) => (
                              <tr key={key} className={`border-b border-ink/5 ${idx % 2 === 0 ? "bg-paper" : "bg-stone/50"}`}>
                                <td className="px-4 py-2.5 font-bold text-ink/50 uppercase tracking-wider text-[10px]">{key}</td>
                                <td className="px-4 py-2.5 font-medium text-ink">{val}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-ink/10">
                      <button
                        onClick={() => {
                          setSelectedProduct(null);
                          openDrawer();
                        }}
                        className="flex-1 rounded-full bg-ink hover:bg-signal py-3.5 text-center text-xs font-bold uppercase tracking-widest text-white transition-all cursor-pointer shadow-md"
                      >
                        Request Quote & Photometrics
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
