import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { catalogue, type CatalogueItem } from "@/assets/products";
import { useContactDrawer } from "../components/ContactDrawer";
import { useMeta } from "../hooks/use-meta";

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<CatalogueItem | null>(null);
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [specFormSubmitted, setSpecFormSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "solar" | "industrial">("all");
  const { openDrawer } = useContactDrawer();

  useMeta({
    title: "Products — HINDLED-TECHNOLOGIES Technologies",
    description: "The complete HINDLED-TECHNOLOGIES Technologies catalogue: solar street, area, garden, bollard and wall-wash lighting plus FL18 / SP02 / HB12 / FL17 outdoor & industrial luminaires.",
  });

  const solarItems = useMemo(() => catalogue.filter((c) => c.category === "Solar"), []);
  const industrialItems = useMemo(() => catalogue.filter((c) => c.category === "Outdoor & Industrial"), []);

  // Handle smooth scroll navigation
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-paper pb-20 font-sans selection:bg-signal selection:text-white">
      {/* Hero Section (85vh) */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-ink">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1800&auto=format&fit=crop"
            alt="HINDLED lighting arena"
            className="h-full w-full object-cover opacity-60 scale-105"
          />
          {/* Soft Dark Gradients & Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-ink z-10" />
        </div>

        {/* Hero Content */}
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
              image: "https://images.unsplash.com/photo-1540747737956-37872f76d9ee?q=80&w=600&auto=format&fit=crop",
            },
            {
              title: "HERA-LED Solar Vertical Street Light",
              category: "Solar Infrastructure",
              image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
            },
            {
              title: "Architectural boulevard with solar post-tops",
              category: "Urban Pathways",
              image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600&auto=format&fit=crop",
            },
            {
              title: "FL18 Professional Stadium Floodlight",
              category: "Industrial Power",
              image: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=600&auto=format&fit=crop",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[24px] bg-stone shadow-xl shadow-black/[0.04]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
                HINDLED-TECHNOLOGIES builds high-end illumination and solar grids designed to perform in extreme weather. 
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
                : "bg-stone/50 text-ink/60 hover:bg-stone hover:text-ink"
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
                  onLearnMore={() => setSelectedProduct(p)}
                  onRequestSpec={() => {
                    setSelectedProduct(p);
                    setIsSpecModalOpen(true);
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
                  onLearnMore={() => setSelectedProduct(p)}
                  onRequestSpec={() => {
                    setSelectedProduct(p);
                    setIsSpecModalOpen(true);
                  }}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Custom Specification CTA Section */}
      <section className="bg-paper py-20 mt-12 border-t border-ink/5">
        <div className="mx-auto max-w-[1200px] rounded-[32px] bg-stone p-8 md:p-16 text-center shadow-inner">
          <span className="text-mono text-signal">Custom Integrations</span>
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

      {/* Interactive Detail Modal / Slide-Out Spec Sheet */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm p-4 md:p-6"
            onClick={() => {
              setSelectedProduct(null);
              setIsSpecModalOpen(false);
              setSpecFormSubmitted(false);
            }}
          >
            <motion.div
              initial={{ x: "100%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.9 }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="relative flex h-full w-full max-w-[700px] flex-col overflow-y-auto rounded-[32px] bg-white p-6 shadow-2xl text-ink md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setIsSpecModalOpen(false);
                  setSpecFormSubmitted(false);
                }}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-stone text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                ✕
              </button>

              {isSpecModalOpen ? (
                /* Request Specification Form */
                <div className="flex h-full flex-col justify-center py-6">
                  <span className="text-mono text-signal">{selectedProduct.series} Series</span>
                  <h3 className="font-display mt-2 text-3xl font-bold tracking-tight">
                    Request technical data pack for {selectedProduct.name}
                  </h3>
                  <p className="mt-3 text-sm text-ink/60">
                    We will send the complete photometrics (.IES), mechanical drawings, and wind shear calculation pack directly to your inbox.
                  </p>

                  {specFormSubmitted ? (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="mt-8 rounded-2xl bg-stone p-6 text-center"
                    >
                      <span className="text-3xl">✓</span>
                      <h4 className="font-semibold text-lg mt-2">Data pack request sent</h4>
                      <p className="text-xs text-ink/50 mt-1">
                        Our engineering desk will dispatch the files to {email} shortly.
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
                      className="mt-8 space-y-4"
                    >
                      <div>
                        <label className="text-mono block mb-1 text-[10px] text-ink/50 uppercase">Corporate Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="engineering@firm.com"
                          className="w-full rounded-full border border-ink/10 bg-stone/50 px-5 py-3 text-sm outline-none focus:border-signal"
                        />
                      </div>
                      <div>
                        <label className="text-mono block mb-1 text-[10px] text-ink/50 uppercase">Company Name</label>
                        <input
                          type="text"
                          required
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Infrastructure Labs"
                          className="w-full rounded-full border border-ink/10 bg-stone/50 px-5 py-3 text-sm outline-none focus:border-signal"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-full bg-signal py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-signal/90"
                      >
                        Submit Request
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                /* Product Specifications & Details */
                <div className="py-4">
                  <span className="text-mono text-signal">{selectedProduct.category} · {selectedProduct.code}</span>
                  <h3 className="font-display mt-2 text-3xl font-bold tracking-tight leading-snug">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-mono text-xs text-ink/40 mt-1">{selectedProduct.tagline}</p>

                  <div className="mt-6 aspect-video w-full overflow-hidden rounded-[24px] bg-stone">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="h-full w-full object-contain p-6"
                    />
                  </div>

                  <p className="mt-8 text-sm leading-relaxed text-ink/75">
                    {selectedProduct.description}
                  </p>

                  {/* Specifications Grid */}
                  <h4 className="text-mono text-xs text-ink/40 uppercase tracking-wider mt-10 mb-4 border-b border-ink/10 pb-2">
                    Specifications
                  </h4>
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                    {Object.entries(selectedProduct.specs).map(([key, val]) => (
                      <div key={key} className="border-b border-ink/5 pb-2">
                        <dt className="text-mono text-[10px] text-ink/40 uppercase">{key}</dt>
                        <dd className="mt-0.5 font-medium text-ink/90">{val}</dd>
                      </div>
                    ))}
                  </dl>

                  {/* Features List */}
                  {selectedProduct.features && selectedProduct.features.length > 0 && (
                    <>
                      <h4 className="text-mono text-xs text-ink/40 uppercase tracking-wider mt-10 mb-4 border-b border-ink/10 pb-2">
                        System Features
                      </h4>
                      <ul className="grid grid-cols-1 gap-2.5 text-sm md:grid-cols-2">
                        {selectedProduct.features.map((feat) => (
                          <li key={feat} className="flex gap-2 text-ink/80">
                            <span className="text-signal font-bold">+</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Call to Action in Modal */}
                  <div className="mt-12 flex gap-4">
                    <button
                      onClick={() => setIsSpecModalOpen(true)}
                      className="flex-1 rounded-full bg-ink py-4 text-center text-xs font-bold uppercase tracking-wider text-paper transition-all hover:bg-signal"
                    >
                      Request Spec Sheets
                    </button>
                    <button
                      onClick={openDrawer}
                      className="flex-1 rounded-full border border-ink/20 py-4 text-center text-xs font-bold uppercase tracking-wider text-ink transition-all hover:border-ink cursor-pointer"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
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
  p: CatalogueItem;
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
        <div className="relative aspect-square w-full overflow-hidden rounded-[28px] bg-stone/50 p-6 flex items-center justify-center shadow-sm transition-shadow hover:shadow-md">
          <img
            src={p.image}
            alt={p.name}
            className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <span className="text-mono absolute top-4 left-4 text-[9px] text-ink/40">
            {p.series} · {p.code}
          </span>
        </div>

        {/* Product Details */}
        <div className="mt-5 px-1">
          <span className="text-mono text-[9px] uppercase tracking-wider text-signal">
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
