import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { enrichedCatalogue, type EnrichedProduct } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";

// Import Lucide icons
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
  BookOpen
} from "lucide-react";

import p1 from "../assets/catalogue/p1.jpg";
import p5 from "../assets/catalogue/p5.jpg";
import p12 from "../assets/catalogue/p12.jpg";
import p24 from "../assets/catalogue/p24.jpg";
import p25 from "../assets/catalogue/p25.jpg";

// Dynamic Icon Renderer for key features and applications
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
  const [isSpecDrawerOpen, setIsSpecDrawerOpen] = useState(false);
  const [specFormSubmitted, setSpecFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "solar" | "industrial">("all");
  const [activeInfoTab, setActiveInfoTab] = useState<"overview" | "specs" | "apps" | "benefits">("overview");
  const [isNightMode, setIsNightMode] = useState(false);
  const [viewingSpecImage, setViewingSpecImage] = useState(false);
  const { openDrawer } = useContactDrawer();

  useMeta({
    title: "Products — HINDLED Technologies",
    description: "The complete HINDLED Technologies catalogue: solar street, area, garden, bollard and wall-wash lighting plus FL18 / SP02 / HB12 / FL17 outdoor & industrial luminaires.",
  });

  // Prevent background scrolling when spec drawer or detail modal is open
  useEffect(() => {
    if (isSpecDrawerOpen || isDetailModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSpecDrawerOpen, isDetailModalOpen]);

  const solarItems = useMemo(() => enrichedCatalogue.filter((c) => c.category === "Solar"), []);
  const industrialItems = useMemo(() => enrichedCatalogue.filter((c) => c.category === "Outdoor & Industrial"), []);

  // Handle smooth scroll navigation
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper for generating dynamic night beam effects based on product slug
  const getLightBeamElement = (product: EnrichedProduct) => {
    if (product.slug === "phoenix") {
      return (
        <div className="absolute inset-x-0 top-0 bottom-[10%] z-0 pointer-events-none flex flex-col items-center justify-end overflow-hidden">
          <div 
            className="w-[180px] h-[100%] origin-bottom transform opacity-40 animate-pulse"
            style={{
              background: 'linear-gradient(to top, rgba(253, 224, 71, 0.7) 0%, rgba(253, 224, 71, 0) 80%)',
              clipPath: 'polygon(45% 100%, 55% 100%, 100% 0%, 0% 0%)',
              filter: 'blur(3px)',
            }}
          />
        </div>
      );
    } else if (product.slug === "lightning" || product.slug === "orion") {
      return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 opacity-35 animate-pulse"
            style={{
              background: 'radial-gradient(circle at 50% 55%, rgba(253, 224, 71, 0.75) 0%, rgba(253, 224, 71, 0.15) 55%, rgba(253, 224, 71, 0) 80%)',
              filter: 'blur(8px)',
            }}
          />
        </div>
      );
    } else {
      return (
        <div className="absolute inset-x-0 bottom-0 top-[20%] z-0 pointer-events-none flex flex-col items-center overflow-hidden">
          <div className="absolute top-0 h-10 w-10 rounded-full bg-yellow-100/35 blur-md animate-pulse" />
          <div 
            className="w-[320px] h-full origin-top transform opacity-25"
            style={{
              background: 'linear-gradient(to bottom, rgba(253, 224, 71, 0.95) 0%, rgba(253, 224, 71, 0.2) 60%, rgba(253, 224, 71, 0) 100%)',
              clipPath: 'polygon(48% 0%, 52% 0%, 95% 100%, 5% 100%)',
              filter: 'blur(4px)',
            }}
          />
        </div>
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-paper pb-20 font-sans selection:bg-signal selection:text-white">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-ink">
        <div className="absolute inset-0 z-0">
          <img
            src={p1}
            alt="HINDLED lighting arena"
            className="h-full w-full object-cover opacity-50 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-ink z-10" />
        </div>

        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center text-paper">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[10vw] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[7vw] lg:text-[5vw] max-w-4xl"
          >
            More than a luminaire.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-6 max-w-xl text-base font-light text-paper/70 md:text-lg"
          >
            It's your infrastructure. We'll guide the light.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <button
              onClick={() => scrollToSection("catalog-title")}
              className="rounded-full bg-signal px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-signal/20 transition-all hover:bg-signal/90 hover:scale-105"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </section>

      {/* Overlapping Showcase Section (4 Premium Cards) */}
      <section className="relative z-25 mx-auto -mt-28 max-w-[1600px] px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "High-mast lit stadium at night",
              category: "Arena Lighting",
              image: p24,
            },
            {
              title: "HERA-LED Solar Vertical Street Light",
              category: "Solar Infrastructure",
              image: p5,
            },
            {
              title: "Architectural boulevard with solar post-tops",
              category: "Urban Pathways",
              image: p12,
            },
            {
              title: "FL18 Professional Stadium Floodlight",
              category: "Industrial Power",
              image: p25,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[#f1f5f9] border border-slate-200 shadow-xl shadow-black/[0.04]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-paper">
                <span className="text-mono text-[10px] text-white/50">{card.category}</span>
                <h3 className="font-display mt-1.5 text-lg font-medium leading-snug">{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Two-Column Solution Section */}
      <section className="bg-paper py-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2
                id="catalog-title"
                className="font-display text-4xl font-semibold leading-[1.15] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl"
              >
                Premium outdoor lighting,
                <span className="mt-2 block text-signal">100% engineered.</span>
              </h2>
            </div>
            <div className="flex flex-col justify-center lg:col-span-6 lg:pl-10">
              <p className="text-base leading-relaxed text-ink/70">
                HINDLED Technologies builds high-end illumination and solar grids designed to perform in extreme weather. 
                From international stadiums to off-grid security systems, we deliver fixtures that quietly outperform and 
                outlast conventional setups. Every system is rigorously built, modularly configured, and delivered globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10 mb-16 flex flex-wrap gap-2.5 border-b border-ink/5 pb-8">
        {[
          { id: "all", label: "All Systems" },
          { id: "solar", label: "Solar Lighting" },
          { id: "industrial", label: "Outdoor & Industrial" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-ink text-paper shadow-md"
                : "bg-[#e2e8f0] text-ink/60 hover:bg-[#cbd5e1] hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Lists (Catalog Grids) */}
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        {/* Section 1: Solar Lighting Solutions */}
        {(activeTab === "all" || activeTab === "solar") && (
          <section id="solar-solutions" className="mb-24">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl mb-2">
              Solar Lighting Platforms
            </h2>
            <p className="text-sm text-ink/50 mb-10">High-yield vertical PV modules and autonomous roadway luminaires.</p>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {solarItems.map((p) => (
                <ProductCard
                  key={p.slug}
                  p={p}
                  onLearnMore={() => {
                    setSelectedProduct(p);
                    setIsDetailModalOpen(true);
                    setIsSpecDrawerOpen(false);
                    setActiveInfoTab("overview");
                    setIsNightMode(false);
                    setViewingSpecImage(false);
                  }}
                  onRequestSpec={() => {
                    setSelectedProduct(p);
                    setIsSpecDrawerOpen(true);
                    setIsDetailModalOpen(false);
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {/* Section 2: Outdoor & Industrial Luminaires */}
        {(activeTab === "all" || activeTab === "industrial") && (
          <section id="industrial-solutions" className="mb-24">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl mb-2">
              Outdoor & Industrial Platforms
            </h2>
            <p className="text-sm text-ink/50 mb-10">High-mast floodlights, sports arrays, and sealed-driver industrial fixtures.</p>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {industrialItems.map((p) => (
                <ProductCard
                  key={p.slug}
                  p={p}
                  onLearnMore={() => {
                    setSelectedProduct(p);
                    setIsDetailModalOpen(true);
                    setIsSpecDrawerOpen(false);
                    setActiveInfoTab("overview");
                    setIsNightMode(false);
                    setViewingSpecImage(false);
                  }}
                  onRequestSpec={() => {
                    setSelectedProduct(p);
                    setIsSpecDrawerOpen(true);
                    setIsDetailModalOpen(false);
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Custom Specification CTA Section */}
      <section className="bg-paper py-20 mt-12 border-t border-ink/5">
        <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#f1f5f9] p-8 md:p-16 text-center shadow-inner border border-slate-200/50">
          <span className="text-mono text-signal uppercase tracking-wider font-bold">Custom Integrations</span>
          <h3 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Need a custom engineered spec?
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-sm text-ink/60 leading-relaxed">
            Our engineering lab builds custom distributions, mounting structures, and battery enclosures matched to your site's physical parameters.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={openDrawer}
              className="rounded-full bg-ink px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:bg-signal hover:shadow-lg cursor-pointer"
            >
              Talk to Engineering →
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Detail Modal / Full-Screen Premium Showcase */}
      <AnimatePresence>
        {isDetailModalOpen && selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-0 md:p-6"
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
              className="relative flex h-full w-full max-w-[1300px] md:h-[92vh] flex-col overflow-hidden rounded-none md:rounded-[32px] bg-[#f8fafc] shadow-2xl text-slate-900 border border-slate-200/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600">
                      {selectedProduct.category} · Platform {selectedProduct.code}
                    </span>
                  </div>
                  <h3 className="font-display mt-0.5 text-xl font-bold tracking-tight text-[#0a192f]">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setIsDetailModalOpen(false);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-800 hover:bg-[#0a192f] hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Showcase Body (Scrollable content) */}
              <div className="flex-grow overflow-y-auto p-6 md:p-10 no-scrollbar" data-lenis-prevent>
                {/* Splitted Double-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start h-full">
                  {/* Left Column: Premium Interactive Gallery */}
                  <div className="lg:col-span-5 lg:sticky lg:top-0 space-y-6">
                    <div className={`relative aspect-square w-full rounded-[24px] overflow-hidden shadow-md border border-slate-200/50 transition-colors duration-500 flex items-center justify-center p-6 ${
                      isNightMode ? "bg-[#090d16]" : "bg-white"
                    }`}>
                      
                      {/* Dynamic Illumination Beam (Night Mode only) */}
                      {isNightMode && !viewingSpecImage && getLightBeamElement(selectedProduct)}

                      {/* Current Displayed Image */}
                      <img
                        src={viewingSpecImage && selectedProduct.specImage ? selectedProduct.specImage : selectedProduct.image}
                        alt={selectedProduct.name}
                        className={`max-h-[85%] max-w-[85%] object-contain z-10 transition-all duration-500 ${
                          isNightMode && !viewingSpecImage ? "brightness-125 drop-shadow-[0_0_25px_rgba(253,224,71,0.5)]" : ""
                        }`}
                      />
                      
                      {/* Night Mode Badge Overlay */}
                      {isNightMode && !viewingSpecImage && (
                        <div className="absolute top-4 right-4 z-25 flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-[10px] font-bold uppercase tracking-wider border border-yellow-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
                          Simulation Active
                        </div>
                      )}
                    </div>

                    {/* Gallery Controls (Toggle Day/Night + Blueprint spec) */}
                    <div className="flex gap-2.5">
                      <button
                        onClick={() => {
                          setViewingSpecImage(false);
                          setIsNightMode(false);
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                          !isNightMode && !viewingSpecImage
                            ? "bg-[#0a192f] border-[#0a192f] text-white"
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <Sun className="w-3.5 h-3.5" />
                        Day Shot
                      </button>
                      <button
                        onClick={() => {
                          setViewingSpecImage(false);
                          setIsNightMode(true);
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                          isNightMode && !viewingSpecImage
                            ? "bg-yellow-500 border-yellow-500 text-slate-950 font-extrabold shadow-lg shadow-yellow-500/10"
                            : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <Lightbulb className="w-3.5 h-3.5" />
                        Night Beam
                      </button>
                      {selectedProduct.specImage && (
                        <button
                          onClick={() => {
                            setIsNightMode(false);
                            setViewingSpecImage(true);
                          }}
                          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                            viewingSpecImage
                              ? "bg-[#0a192f] border-[#0a192f] text-white"
                              : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          <FileText className="w-3.5 h-3.5" />
                          Blueprint
                        </button>
                      )}
                    </div>
                    <p className="text-[11px] text-center text-slate-500 italic">
                      {viewingSpecImage 
                        ? "Rendering structural layout and mechanical dimensioning drawings." 
                        : isNightMode 
                          ? "Simulating beam dispersion, light cone angle, and luminance wash." 
                          : "Professional isolated product photography of clean physical fixture."}
                    </p>
                  </div>

                  {/* Right Column: Premium Showcase Tabs */}
                  <div className="lg:col-span-7 space-y-8">
                    {/* Interactive Navigation Tabs */}
                    <div className="flex border-b border-slate-200">
                      {[
                        { id: "overview", label: "Overview", icon: Info },
                        { id: "specs", label: "Specifications", icon: FileText },
                        { id: "apps", label: "Applications", icon: Milestone },
                        { id: "benefits", label: "Client Benefits (ROI)", icon: DollarSign },
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
                            className={`flex-1 flex items-center justify-center gap-2 py-4 border-b-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                              active
                                ? "border-signal text-signal"
                                : "border-transparent text-slate-500 hover:text-slate-900"
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{t.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Tab Content Panels */}
                    <div className="min-h-[400px]">
                      {activeInfoTab === "overview" && (
                        <div className="space-y-8 animate-fadeIn">
                          {/* Product Narrative */}
                          <div>
                            <h4 className="text-mono text-xs text-slate-400 uppercase tracking-widest font-bold">Product Overview</h4>
                            <p className="mt-3 text-base text-slate-700 leading-relaxed font-light">
                              {selectedProduct.overview}
                            </p>
                            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                              {selectedProduct.description}
                            </p>
                          </div>

                          {/* Features Grid */}
                          <div>
                            <h4 className="text-mono text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Key Features</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {selectedProduct.featuresDetails.map((f) => (
                                <div key={f.title} className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                                  <div className="p-2.5 rounded-xl bg-slate-100 text-signal flex-shrink-0">
                                    <IconRenderer name={f.icon} className="w-5 h-5" />
                                  </div>
                                  <div className="space-y-1">
                                    <h5 className="font-bold text-sm text-[#0a192f]">{f.title}</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeInfoTab === "specs" && (
                        <div className="space-y-8 animate-fadeIn">
                          {/* Technical Specifications Table */}
                          <div>
                            <h4 className="text-mono text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Technical Data</h4>
                            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                              <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase font-bold text-mono">
                                    <th className="px-6 py-4">Engineering Parameter</th>
                                    <th className="px-6 py-4">Specification Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Object.entries(selectedProduct.specs).map(([key, val], idx) => (
                                    <tr 
                                      key={key} 
                                      className={`border-b border-slate-100 hover:bg-slate-50/50 transition-colors ${
                                        idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"
                                      }`}
                                    >
                                      <td className="px-6 py-3.5 font-bold text-slate-500 text-xs uppercase tracking-wider">{key}</td>
                                      <td className="px-6 py-3.5 font-medium text-slate-800">{val}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          {/* Additional blueprint detail view */}
                          {selectedProduct.specImage && (
                            <div className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-start gap-4">
                              <Info className="w-5 h-5 text-signal flex-shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <h5 className="font-bold text-sm text-[#0a192f]">CAD Layout Drawing Available</h5>
                                <p className="text-xs text-slate-500 leading-relaxed">
                                  The architectural specifications blueprint is active in the viewer on the left, demonstrating structural dimension brackets, pole fitting parameters, and physical spacing tolerances.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {activeInfoTab === "apps" && (
                        <div className="space-y-8 animate-fadeIn">
                          {/* Applications Cards */}
                          <div>
                            <h4 className="text-mono text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Deployments & Environments</h4>
                            <div className="grid grid-cols-1 gap-4">
                              {selectedProduct.applicationsList.map((app, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-start gap-5 hover:shadow-md transition-shadow">
                                  <div className="p-3 rounded-xl bg-slate-100 text-slate-700 flex-shrink-0">
                                    <IconRenderer name={app.icon} className="w-6 h-6" />
                                  </div>
                                  <div className="space-y-1.5">
                                    <h5 className="font-bold text-base text-[#0a192f]">{app.title}</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">{app.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {activeInfoTab === "benefits" && (
                        <div className="space-y-8 animate-fadeIn">
                          {/* Business Benefits ROI Cards */}
                          <div>
                            <h4 className="text-mono text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Financial & Operational ROI</h4>
                            <div className="grid grid-cols-1 gap-4">
                              {selectedProduct.benefitsList.map((b, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-start gap-4">
                                  <div className="text-emerald-500 font-extrabold text-2xl flex-shrink-0 mt-0.5">
                                    0{idx + 1}.
                                  </div>
                                  <div className="space-y-1.5">
                                    <h5 className="font-bold text-base text-[#0a192f]">{b.title}</h5>
                                    <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Modal CTA footer */}
                    <div className="flex gap-4 pt-6 border-t border-slate-200">
                      <button
                        onClick={() => setIsSpecDrawerOpen(true)}
                        className="flex-1 rounded-full bg-[#0a192f] py-4 text-center text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-signal cursor-pointer"
                      >
                        Request Spec Sheets
                      </button>
                      <button
                        onClick={openDrawer}
                        className="flex-1 rounded-full border border-slate-300 hover:border-slate-800 py-4 text-center text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 transition-all cursor-pointer"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spec Request Drawer (Floating Curved Drawer from Right) */}
      <AnimatePresence>
        {isSpecDrawerOpen && selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 bg-slate-900/40 backdrop-blur-xs"
              onClick={() => {
                setIsSpecDrawerOpen(false);
                setSpecFormSubmitted(false);
              }}
            />

            {/* Floating Curved Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed top-[4vh] bottom-[4vh] right-4 md:right-6 z-70 flex h-[92vh] w-[calc(100vw-32px)] sm:w-[90vw] max-w-[500px] flex-col rounded-[32px] bg-white border border-slate-200/60 shadow-2xl overflow-hidden text-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className="flex-shrink-0 flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-white">
                <div className="flex flex-col">
                  <span className="text-mono text-signal uppercase tracking-wider font-extrabold text-[10px]">
                    {selectedProduct.series} Series · Platform {selectedProduct.code}
                  </span>
                  <h3 className="font-display mt-1 text-lg font-bold text-[#0a192f]">
                    Request Spec Pack
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setIsSpecDrawerOpen(false);
                    setSpecFormSubmitted(false);
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-slate-700 hover:bg-[#0a192f] hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-grow overflow-y-auto p-6 md:p-8 flex flex-col justify-between bg-[#fafbfc] no-scrollbar" data-lenis-prevent>
                <div className="space-y-6">
                  {/* Miniature Product Banner */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <div className="relative aspect-square w-16 rounded-xl bg-slate-50 p-2 flex items-center justify-center flex-shrink-0 border border-slate-200/40">
                      <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0a192f] leading-snug">{selectedProduct.name}</h4>
                      <p className="text-[10px] text-slate-500 font-medium tracking-tight mt-0.5">{selectedProduct.tagline}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Get access to the complete engineering technical package including high-resolution drawings (.DWG/.DXF), photometric performance reports (.IES), spacing tables, and certifications.
                  </p>

                  {specFormSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="rounded-2xl bg-white border border-slate-200/50 p-6 text-center shadow-lg my-4"
                    >
                      <span className="text-3xl text-emerald-500">✓</span>
                      <h4 className="font-bold text-base text-[#0a192f] mt-3">Spec Pack Scheduled</h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        Technical documentation is being compiled and sent to <strong>{email}</strong>. Please check your spam folder if it doesn't arrive shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (email) {
                          setSpecFormSubmitted(true);
                        }
                      }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Corporate Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="engineering@firm.com"
                          className="w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-xs outline-none focus:border-signal"
                        />
                      </div>
                      <div>
                        <label className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1">Company / Organization</label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Infrastructure Labs"
                          className="w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-xs outline-none focus:border-signal"
                        />
                      </div>
                      
                      <div className="p-4 rounded-xl bg-white border border-slate-200/40 shadow-sm flex gap-3">
                        <Info className="w-4 h-4 text-signal flex-shrink-0 mt-0.5" />
                        <p className="text-[10px] text-slate-500 leading-normal">
                          By submitting, you agree to receive automated technical data sheets and periodic engineering updates for this model.
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-full bg-[#0a192f] hover:bg-signal py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer mt-4"
                      >
                        Request Specification
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Product Card Sub-Component (D2C Aesthetic)
function ProductCard({
  p,
  onLearnMore,
  onRequestSpec,
}: {
  p: EnrichedProduct;
  onLearnMore: () => void;
  onRequestSpec: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col justify-between"
    >
      <div>
        {/* Product Image Wrapper */}
        <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-[#f1f5f9] border border-slate-200/60 p-6 flex items-center justify-center shadow-sm transition-shadow hover:shadow-md">
          <img
            src={p.image}
            alt={p.name}
            className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="text-mono absolute top-4 left-4 text-[9px] text-slate-400">
            {p.series} · {p.code}
          </span>
        </div>

        {/* Product Details */}
        <div className="mt-5 px-1">
          <span className="text-mono text-[9px] uppercase tracking-wider text-signal font-bold">
            {p.tagline}
          </span>
          <h3 className="font-display mt-1.5 text-lg font-bold leading-snug text-ink tracking-tight">
            {p.name}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-ink/60 line-clamp-2">
            {p.description}
          </p>
        </div>
      </div>

      {/* Action Buttons Row */}
      <div className="mt-5 flex items-center gap-2 px-1">
        <button
          onClick={onRequestSpec}
          className="flex-1 rounded-full bg-ink py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-paper transition-all hover:bg-signal hover:shadow-md hover:shadow-signal/15"
        >
          Request Spec
        </button>
        <button
          onClick={onLearnMore}
          className="flex-1 rounded-full border border-ink/10 py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-ink/80 transition-all hover:border-ink hover:text-ink"
        >
          Learn More
        </button>
      </div>
    </motion.article>
  );
}
