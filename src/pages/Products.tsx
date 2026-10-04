import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import { enrichedCatalogue, solutionApplications, type EnrichedProduct, type SolutionApplication } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";

// Lucide icons
import {
  Sun,
  BatteryCharging,
  ShieldAlert,
  Cpu,
  Lightbulb,
  Thermometer,
  ShieldCheck,
  Milestone,
  Building2,
  Car,
  Trophy,
  Ship,
  Warehouse,
  TrendingUp,
  Leaf,
  CheckCircle2,
  Settings,
  Activity,
  Info,
  FileText,
  DollarSign,
  BookOpen,
  ArrowUpRight,
  Layers,
  Sparkles
} from "lucide-react";

// Dynamic Icon Renderer
const IconRenderer = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, any> = {
    Sun,
    BatteryCharging,
    ShieldAlert,
    Cpu,
    Lightbulb,
    Thermometer,
    ShieldCheck,
    Milestone,
    Building: Building2,
    Car,
    Trophy,
    Ship,
    Warehouse,
    TrendingUp,
    Leaf,
    CheckCircle2,
    Settings,
    Activity,
    Info,
    FileText,
    DollarSign,
    BookOpen
  };
  const IconComponent = icons[name] || Info;
  return <IconComponent className={className} />;
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<EnrichedProduct | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [activeApplicationId, setActiveApplicationId] = useState<string>("solar-smart-poles");
  const [activeInfoTab, setActiveInfoTab] = useState<"overview" | "specs">("overview");
  const [viewingSpecImage, setViewingSpecImage] = useState(false);
  const { openDrawer } = useContactDrawer();

  useMeta({
    title: "Products & Applications Catalogue — HINDLED Technologies",
    description: "Awards-level technical luminaire inventory categorized by 8 infrastructure applications.",
  });

  const lenis = useLenis();

  useEffect(() => {
    if (isDetailModalOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isDetailModalOpen, lenis]);

  // Map products to their matched application categories
  const appGroupedProducts = useMemo(() => {
    return solutionApplications.map((app) => {
      const matched = enrichedCatalogue.filter((prod) =>
        app.matchingSlugs.includes(prod.slug) ||
        (app.category === "Solar" && prod.category === "Solar") ||
        (app.category === "Outdoor & Industrial" && prod.category === "Outdoor & Industrial")
      );
      const uniqueMatched = Array.from(new Set(matched.map(m => m.slug)))
        .map(slug => matched.find(m => m.slug === slug)!);

      return {
        app,
        products: uniqueMatched.slice(0, 4)
      };
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-paper text-ink font-sans selection:bg-signal selection:text-white pt-24 pb-32">

      {/* Minimal Editorial Header */}
      <section className="mx-auto max-w-[1600px] px-6 lg:px-10 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold block mb-3">
            — HARDWARE PORTFOLIO
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-ink tracking-tight leading-[0.95]">
            Hardware Inventory by <span className="text-signal">Application.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-ink/70 font-light leading-relaxed">
            Precision luminaires and solar smart platforms organized across 8 infrastructure applications.
          </p>
        </motion.div>

        {/* Minimal Application Quick Navigation Bar */}
        <div className="mt-12 flex flex-wrap gap-2 border-t border-b border-ink/10 py-4 no-scrollbar overflow-x-auto">
          {solutionApplications.map((app) => (
            <a
              key={app.id}
              href={`#${app.id}`}
              onClick={() => setActiveApplicationId(app.id)}
              className={`rounded-full px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeApplicationId === app.id
                  ? "bg-ink text-paper shadow-md"
                  : "bg-stone text-ink/70 hover:bg-ink/10 hover:text-ink border border-ink/5"
              }`}
            >
              {app.title}
            </a>
          ))}
        </div>
      </section>

      {/* 8 Application Storytelling Sections */}
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 space-y-32">
        {appGroupedProducts.map(({ app, products }, index) => (
          <section
            key={app.id}
            id={app.id}
            className="scroll-mt-32 pt-8 hairline-t"
          >
            {/* Storytelling Application Banner */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

              {/* Left Editorial Cover Photo (Full Box Occupancy, Zero Leak) */}
              <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[340px] lg:h-[380px] rounded-[28px] overflow-hidden border border-ink/10 bg-stone shadow-md group">
                <img
                  src={app.projectPic}
                  alt={`${app.title} application field`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-xs z-10">
                  <span className="bg-signal text-paper px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-sm">
                    {app.category}
                  </span>
                  <span className="bg-paper/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-ink font-bold border border-ink/10 shadow-xs">
                    Target: {app.luxRecommendation.split("(")[0]}
                  </span>
                </div>
              </div>

              {/* Right Application Story Text */}
              <div className="lg:col-span-6 flex flex-col justify-between p-2 lg:p-4">
                <div>
                  <span className="text-mono text-[10px] uppercase tracking-widest text-signal font-extrabold block mb-2">
                    0{index + 1} — APPLICATION CATEGORY
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
                    {app.title}
                  </h2>
                  <p className="text-xs font-mono text-ink/60 mt-1">{app.subtitle}</p>

                  <p className="mt-4 text-sm md:text-base text-ink/80 leading-relaxed font-light">
                    {app.description}
                  </p>

                  {/* Minimal Advisory Note Box */}
                  <div className="mt-6 p-4 rounded-2xl bg-stone border border-ink/10 text-xs text-ink/80 space-y-1">
                    <span className="font-bold text-[10px] uppercase tracking-wider text-signal block">
                      Consultant Guidance
                    </span>
                    <p className="text-xs text-ink/70 leading-relaxed font-light">
                      {app.consultantNote}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-ink/10">
                  {app.keySpecs.map((ks, i) => (
                    <span key={i} className="text-[10px] font-mono bg-stone border border-ink/10 text-ink/80 px-2.5 py-1 rounded-lg">
                      {ks.label}: <strong className="font-bold text-ink">{ks.value}</strong>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Award-Level Luminaire Cards Grid (2 per row on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {products.map((p) => (
                <ProductCard
                  key={p.slug}
                  p={p}
                  onLearnMore={() => {
                    setSelectedProduct(p);
                    setIsDetailModalOpen(true);
                    setActiveInfoTab("overview");
                    setViewingSpecImage(false);
                  }}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Technical Detail Modal */}
      <AnimatePresence>
        {isDetailModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-0 md:p-6"
            onClick={() => {
              setSelectedProduct(null);
              setIsDetailModalOpen(false);
            }}
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
                  onClick={() => {
                    setSelectedProduct(null);
                    setIsDetailModalOpen(false);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone text-ink hover:bg-ink hover:text-paper transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Showcase Body */}
              <div className="flex-grow overflow-y-auto p-6 md:p-10 no-scrollbar" data-lenis-prevent>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start h-full">

                  {/* Left Column (Fully Unclipped Modal Image) */}
                  <div className="lg:col-span-5 lg:sticky lg:top-0 space-y-6">
                    <div className="relative w-full rounded-[24px] overflow-hidden shadow-sm border border-ink/10 bg-stone p-6 flex items-center justify-center min-h-[320px]">
                      <img
                        src={viewingSpecImage && selectedProduct.specImage ? selectedProduct.specImage : selectedProduct.image}
                        alt={selectedProduct.name}
                        className="max-h-[360px] w-auto h-auto object-contain z-10"
                      />
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex border-b border-ink/10">
                      {[
                        { id: "overview", label: "Overview", icon: Info },
                        { id: "specs", label: "Specifications", icon: FileText },
                      ].map((t) => {
                        const IconComponent = t.icon;
                        const active = activeInfoTab === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => {
                              setActiveInfoTab(t.id as any);
                              if (t.id === "specs" && selectedProduct.specImage) {
                                setViewingSpecImage(true);
                              } else {
                                setViewingSpecImage(false);
                              }
                            }}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 border-b-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${active
                                ? "border-signal text-signal"
                                : "border-transparent text-ink/50 hover:text-ink"
                              }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                            <span>{t.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="min-h-[260px]">
                      {activeInfoTab === "overview" && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-mono text-xs text-ink/40 uppercase tracking-widest font-bold">Summary</h4>
                            <p className="mt-2 text-sm text-ink/80 leading-relaxed font-light">
                              {selectedProduct.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-mono text-xs text-ink/40 uppercase tracking-widest font-bold mb-3">Highlights</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {selectedProduct.featuresDetails.map((f) => (
                                <div key={f.title} className="p-3.5 rounded-xl bg-stone border border-ink/10 flex items-start gap-3">
                                  <div className="p-1.5 rounded-lg bg-paper text-signal shrink-0">
                                    <IconRenderer name={f.icon} className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h5 className="font-bold text-xs text-ink">{f.title}</h5>
                                    <p className="text-[11px] text-ink/60 leading-relaxed mt-0.5">{f.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeInfoTab === "specs" && (
                        <div className="space-y-6">
                          <div className="border border-ink/10 rounded-2xl overflow-hidden bg-paper shadow-sm">
                            <table className="w-full text-left border-collapse text-xs">
                              <thead>
                                <tr className="bg-stone border-b border-ink/10 text-ink/60 uppercase font-bold text-mono">
                                  <th className="px-5 py-3">Engineering Parameter</th>
                                  <th className="px-5 py-3">Specification Value</th>
                                </tr>
                              </thead>
                              <tbody>
                                {Object.entries(selectedProduct.specs).map(([key, val], idx) => (
                                  <tr key={key} className={`border-b border-ink/5 ${idx % 2 === 0 ? "bg-paper" : "bg-stone/50"}`}>
                                    <td className="px-5 py-3 font-bold text-ink/50 uppercase tracking-wider text-[10px]">{key}</td>
                                    <td className="px-5 py-3 font-medium text-ink">{val}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-ink/10">
                      <button
                        onClick={openDrawer}
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

    </div>
  );
}

// Award-Level Minimal Product Card (Unclipped Image Container)
function ProductCard({
  p,
  onLearnMore,
}: {
  p: EnrichedProduct;
  onLearnMore: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between rounded-[24px] border border-ink/10 bg-stone p-4 transition-all hover:border-signal hover:shadow-lg"
    >
      <div>
        {/* Product image container using object-contain & p-3 to ensure full image visibility */}
        <div className="relative w-full rounded-[18px] bg-paper border border-ink/5 aspect-[4/3] flex items-center justify-center p-3 overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            className="max-h-full max-w-full w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-sm"
          />
          <span className="text-mono absolute top-2.5 left-2.5 text-[9px] bg-paper/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-ink border border-ink/10 font-bold shadow-xs">
            {p.code}
          </span>
        </div>

        <div className="mt-3.5 px-1">
          <span className="text-mono text-[9px] uppercase tracking-widest text-signal font-extrabold block">
            {p.series}
          </span>
          <h4 className="font-display mt-0.5 text-base font-bold leading-snug text-ink tracking-tight">
            {p.name}
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-ink/60 line-clamp-2 font-light">
            {p.description}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-ink/10 flex items-center justify-between px-1">
        <span className="text-[10px] font-mono text-ink/50 font-medium">
          {p.specs["Power Range"] || "High Output"}
        </span>
        <button
          onClick={onLearnMore}
          className="text-mono text-[10px] font-bold uppercase tracking-wider text-ink hover:text-signal transition-colors cursor-pointer inline-flex items-center gap-1"
        >
          Specs →
        </button>
      </div>
    </motion.article>
  );
}
