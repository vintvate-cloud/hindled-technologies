import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  featured,
  enrichProduct,
  type EnrichedProduct
} from "@/assets/products";
import { useContactDrawer } from "./ContactDrawer";
import {
  Camera,
  Sun,
  ZapOff,
  ShieldCheck,
  ArrowRight,
  Radio,
  Sparkles,
  Layers,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Curated highlight cards for each of the 4 featured products
const productHighlights: Record<string, { badge1: string; badge2: string; icon1: any; title1: string; desc1: string; icon2: any; title2: string; desc2: string }> = {
  "tejas-smart-pole": {
    badge1: "100% Without Electricity",
    badge2: "Integrated CCTV + Solar Light",
    icon1: Camera,
    title1: "Off-Grid Security Camera",
    desc1: "24/7 continuous wireless recording & 4G/Wi-Fi live cloud feed powered entirely by vertical PV battery backup.",
    icon2: Sun,
    title2: "High-Output Solar Lighting",
    desc2: "170 lm/W optical LED illumination with 4-step autonomous dimming and 5+ rainy days weather backup.",
  },
  "hl-gaj": {
    badge1: "Up to 360,000 Lumens",
    badge2: "HDTV Broadcast Ready",
    icon1: Radio,
    title1: "Broadcast-Grade HDTV 4K/8K",
    desc1: "Flicker-free TLCI >90 sports optics, up to 360,000 lm output, and precision DMX512 / DALI arena controls.",
    icon2: ShieldCheck,
    title2: "5° Anti-Glare Forward Tilt",
    desc2: "Modular die-cast thermal chimney cooling and 56-increment precision vertical & horizontal aiming scale.",
  },
  "hl-aditi": {
    badge1: "100% Without Electricity",
    badge2: "All-In-Two Solar Luminaire",
    icon1: ZapOff,
    title1: "Zero Grid Power Required",
    desc1: "Internal high-capacity LiFePO4 battery matrix & intelligent MPPT controller with 4-step adaptive dimming.",
    icon2: Sun,
    title2: "High-Efficacy Roadway Optics",
    desc2: "160–170 lm/W optical LED engine with Type II & Type III highway distributions from 4m to 12m poles.",
  },
  "sandhya": {
    badge1: "100% Without Electricity",
    badge2: "Heritage Architectural Luminaire",
    icon1: Sun,
    title1: "360° Monocrystalline PV Column",
    desc1: "Vertical wrap solar capture seamlessly integrated into classic heritage architectural column aesthetics.",
    icon2: Sparkles,
    title2: "360° Low-Glare Illumination",
    desc2: "Delivers soft, glare-free 360° warm illumination for heritage promenades, royal hotels, and civic plazas.",
  },
};

export function FeaturedProductsSection() {
  const { openDrawer } = useContactDrawer();
  const [selectedProduct, setSelectedProduct] = useState<EnrichedProduct | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Enriched featured items (4 products: TEJAS, HL GAJ, HL ADITI, SANDHYA)
  const enrichedList = featured.map(enrichProduct);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % enrichedList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, enrichedList.length]);

  const currentProd = enrichedList[currentIndex];
  const highlights = productHighlights[currentProd.slug] || {
    badge1: "100% Without Electricity",
    badge2: `${currentProd.series} Series`,
    icon1: Sun,
    title1: "High Performance Optics",
    desc1: "Engineered with precision LED drivers and ultra-high efficiency luminous flux.",
    icon2: ShieldCheck,
    title2: "Industrial Grade Build",
    desc2: "Corrosion-resistant housing rated for harsh outdoor environments.",
  };

  const slideVariants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  return (
    <section id="featured-products" className="relative bg-paper py-24 lg:py-36 hairline-t overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-14"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-3"
            >
              — BENCHMARK HARDWARE
            </motion.span>
            <h2 className="text-display text-ink text-[9vw] leading-[0.92] tracking-[-0.04em] md:text-[5vw] font-bold">
              Featured <span className="text-signal">Products.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-ink/70 font-light leading-relaxed">
              Flagship luminaires engineered for critical municipal highways, professional stadiums, royal heritage sites, and zero-grid autonomous smart security.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="self-start md:self-end"
          >
            <Link
              to="/products"
              className="text-mono text-xs font-bold uppercase tracking-wider text-ink inline-flex items-center gap-3 border-b-2 border-signal pb-1 hover:border-ink hover:text-signal transition-colors shrink-0"
            >
              Full 21-Product Catalogue
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Sliding Featured Product Showcase Card Container with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[540px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prominent Floating Left Shift Button */}
          <button
            onClick={() => goToSlide((currentIndex - 1 + enrichedList.length) % enrichedList.length)}
            aria-label="Previous product"
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md text-ink hover:text-signal border border-ink/15 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Prominent Floating Right Shift Button */}
          <button
            onClick={() => goToSlide((currentIndex + 1) % enrichedList.length)}
            aria-label="Next product"
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md text-ink hover:text-signal border border-ink/15 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProd.slug}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="rounded-[36px] sm:rounded-[44px] bg-white border border-ink/10 p-7 sm:p-10 lg:p-14 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              {/* Subtle Ambient Solar Glow */}
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-signal/10 rounded-full blur-[120px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Left Image Showcase - Clean Floating Hero (No Box, No Border) */}
                <div className="lg:col-span-6 relative w-full flex items-center justify-center py-6 sm:py-8 lg:py-12 min-h-[320px] sm:min-h-[420px]">
                  <img
                    src={currentProd.image}
                    alt={currentProd.name}
                    className="max-h-[340px] sm:max-h-[420px] lg:max-h-[460px] max-w-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
                  />
                </div>

                {/* Right Story & Product Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.08]">
                      {currentProd.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-ink/60 mt-1.5 uppercase tracking-wider font-semibold">
                      {currentProd.tagline}
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-ink/75 leading-relaxed font-light">
                    {currentProd.description}
                  </p>

                  {/* Clean Minimal Architectural Highlights */}
                  <div className="pt-3 pb-3 border-y border-ink/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-signal/10 flex items-center justify-center text-signal shrink-0 mt-0.5">
                        <highlights.icon1 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-display text-sm font-bold text-ink">{highlights.title1}</div>
                        <p className="text-xs text-ink/65 leading-relaxed font-light mt-0.5">{highlights.desc1}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-signal/10 flex items-center justify-center text-signal shrink-0 mt-0.5">
                        <highlights.icon2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-display text-sm font-bold text-ink">{highlights.title2}</div>
                        <p className="text-xs text-ink/65 leading-relaxed font-light mt-0.5">{highlights.desc2}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setSelectedProduct(currentProd)}
                      className="rounded-full bg-ink hover:bg-signal px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all cursor-pointer shadow-lg inline-flex items-center gap-2"
                    >
                      Inspect Specifications
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={openDrawer}
                      className="rounded-full border border-ink/20 hover:border-signal bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink hover:text-signal transition-all cursor-pointer shadow-sm"
                    >
                      Consult Engineering
                    </button>
                  </div>

                </div>

              </div>

              {/* Minimal Slide Controls */}
              <div className="mt-8 pt-5 flex items-center justify-between border-t border-ink/10">
                <div className="text-mono text-xs font-bold text-ink/40 tracking-widest">
                  0{currentIndex + 1} <span className="text-ink/20">/</span> 0{enrichedList.length}
                </div>

                {/* Indicator Dots */}
                <div className="flex items-center gap-2">
                  {enrichedList.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => goToSlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                        dotIdx === currentIndex ? "w-8 bg-signal" : "w-2 bg-ink/20 hover:bg-ink/40"
                      }`}
                    />
                  ))}
                </div>

                {/* Next / Prev Chevrons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => goToSlide((currentIndex - 1 + enrichedList.length) % enrichedList.length)}
                    aria-label="Previous product"
                    className="w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => goToSlide((currentIndex + 1) % enrichedList.length)}
                    aria-label="Next product"
                    className="w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center text-ink/60 hover:text-ink hover:bg-ink/5 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </motion.div>

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
                    {selectedProduct.category} · Product {selectedProduct.code}
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
