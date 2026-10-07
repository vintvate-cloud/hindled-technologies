import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Shield,
  Cpu,
  Thermometer,
  BatteryCharging,
  Eye,
  Layers,
  Sparkles,
  ZapOff,
  Compass,
  Activity,
  Maximize2
} from "lucide-react";

// The 6 Layers in HINDLED Solar Lighting Architecture
const solarLayers = [
  {
    id: 1,
    number: "01",
    title: "360° Vertical Solar Panels",
    subtitle: "All-Day Sunlight Harvesting",
    tag: "Energy Generation · 0W Grid Draw",
    desc: "Vertical solar panel design captures sunlight from all 360 degrees throughout the day. Naturally sheds dust and rain without requiring manual cleaning or maintenance.",
    specs: ["High-Efficiency Solar Cells", "360° Sunlight Capture", "Self-Cleaning Vertical Profile", "Zero Electricity Required"],
    color: "#10B981", // Signal green
    icon: Sun,
  },
  {
    id: 2,
    number: "02",
    title: "Weatherproof Aluminum & Toughened Glass",
    subtitle: "Storm, Wind & Ingress Protection",
    tag: "All-Weather Armor · IP66 / IK10",
    desc: "Toughened protective glass fused with marine-grade die-cast aluminum alloy. Engineered to withstand high-wind storms, coastal salt humidity, and severe weather.",
    specs: ["Toughened Glass Armor", "High Wind Resistance", "Corrosion & Rust Proof", "Impact Resistant"],
    color: "#3B82F6",
    icon: Shield,
  },
  {
    id: 3,
    number: "03",
    title: "Smart Solar Controller & Motion Sensor",
    subtitle: "Dusk-to-Dawn Power Automation",
    tag: "Smart Control · Automatic Dimming",
    desc: "Intelligent controller optimizes energy storage every second. Features automatic dusk-to-dawn switching, radar motion sensing, and intelligent dimming to preserve power.",
    specs: ["Automatic Dusk-to-Dawn", "Radar Motion Detection", "Smart Power Conservation", "100% Autonomous Operation"],
    color: "#8B5CF6",
    icon: Cpu,
  },
  {
    id: 4,
    number: "04",
    title: "Heat-Dissipating Airflow Core",
    subtitle: "Natural Cooling for 50°C Summers",
    tag: "Thermal Design · 50°C Ambient",
    desc: "Engineered convective airflow channels naturally duct heat away without noisy fans, keeping LED components cool and sustaining peak brightness even in 50°C summer heat.",
    specs: ["Natural Airflow Cooling", "Long-Life LED Protection", "Zero Moving Parts or Noise", "Built for Harsh Climates"],
    color: "#F59E0B",
    icon: Thermometer,
  },
  {
    id: 5,
    number: "05",
    title: "Long-Life Lithium Battery Storage",
    subtitle: "Multi-Night Continuous Backup",
    tag: "Energy Storage · 3000+ Cycles",
    desc: "High-density Lithium Iron Phosphate battery storage built inside the pole. Provides 4 to 8 consecutive nights of bright illumination during monsoon rains and heavy cloud cover.",
    specs: ["3000+ Deep Life Cycles", "Up to 7 Rainy Days Backup", "Safe & Stable Chemistry", "Built-In Battery Management"],
    color: "#EC4899",
    icon: BatteryCharging,
  },
  {
    id: 6,
    number: "06",
    title: "Anti-Glare Road & Area Optics",
    subtitle: "Glare-Free Uniform Illumination",
    tag: "Optics · Anti-Glare Precision",
    desc: "Precision optical lenses shape light across roads, pathways, and public spaces with uniform brightness, zero driver glare, and zero upward light waste.",
    specs: ["High Lumen Output", "Roadway & Campus Optics", "Zero Dark Spots", "Dark-Sky Compliant"],
    color: "#10B981",
    icon: Eye,
  },
];

// 5 Photometric Light Distributions & ISO-Lux Curves
const opticalDistributions = [
  {
    id: "type-2",
    name: "Type II Roadway",
    application: "Arterial Expressways & Highways",
    beamAngle: "140° × 70° Asymmetric",
    throwDesc: "Long, narrow lateral throw stretching along roadway lanes to maximize pole spacing and eliminate dark spots.",
    luxProfile: "Class M2/M3 High Speed Roadways",
    isoContour: "M 50 150 C 70 80, 130 50, 200 50 C 270 50, 330 80, 350 150 C 330 220, 270 250, 200 250 C 130 250, 70 220, 50 150 Z",
    polarCurve: "M 200 200 C 180 120, 100 80, 70 120 C 40 160, 100 230, 200 240 C 300 230, 360 160, 330 120 C 300 80, 220 120, 200 200 Z",
    centerLux: "45 Lux",
    uniformity: "U0 ≥ 0.45",
  },
  {
    id: "type-3",
    name: "Type III Wide Lateral",
    application: "Commercial Plazas & Wide Avenues",
    beamAngle: "150° × 90° Wide Forward",
    throwDesc: "Forward and lateral projection designed for multilane boulevards, public squares, and expansive parking aprons.",
    luxProfile: "Class P1/P2 Urban Corridors",
    isoContour: "M 40 160 C 60 60, 140 40, 200 40 C 260 40, 340 60, 360 160 C 340 240, 260 260, 200 260 C 140 260, 60 240, 40 160 Z",
    polarCurve: "M 200 200 C 170 100, 80 60, 50 100 C 20 150, 90 230, 200 250 C 310 230, 380 150, 350 100 C 320 60, 230 100, 200 200 Z",
    centerLux: "38 Lux",
    uniformity: "U0 ≥ 0.50",
  },
  {
    id: "type-5",
    name: "Type V Symmetric 360°",
    application: "Parks, Pathways & Civic Grounds",
    beamAngle: "360° Circular Omnidirectional",
    throwDesc: "Uniform 360-degree radial bath with softly rolled-off edges, perfect for decorative post-tops and bollards.",
    luxProfile: "Pedestrian & Landscape Comfort",
    isoContour: "M 70 150 C 70 80, 130 70, 200 70 C 270 70, 330 80, 330 150 C 330 220, 270 230, 200 230 C 130 230, 70 220, 70 150 Z",
    polarCurve: "M 200 200 C 150 120, 120 150, 120 200 C 120 250, 150 280, 200 280 C 250 280, 280 250, 280 200 C 280 150, 250 120, 200 200 Z",
    centerLux: "25 Lux",
    uniformity: "U0 ≥ 0.65",
  },
  {
    id: "stadium-beam",
    name: "10° Narrow Sports Throw",
    application: "Stadium High-Mast & Long Projection",
    beamAngle: "10° × 10° Laser Concentrated",
    throwDesc: "Ultra-concentrated sports-grade punch with 5° forward tilt, projecting 2000+ lux onto pitches from 40m masts with zero backlight.",
    luxProfile: "FIFA / ICC HDTV 4K Broadcast",
    isoContour: "M 150 150 C 150 40, 170 20, 200 20 C 230 20, 250 40, 250 150 C 250 260, 230 280, 200 280 C 170 280, 150 260, 150 150 Z",
    polarCurve: "M 200 200 C 185 80, 190 30, 200 30 C 210 30, 215 80, 200 200 Z",
    centerLux: "1850 Lux",
    uniformity: "U0 ≥ 0.75",
  },
  {
    id: "industrial-bay",
    name: "60°/90°/120° High-Bay",
    application: "Warehouses & Logistics Depots",
    beamAngle: "90° Medium Flood Distribution",
    throwDesc: "Even vertical and horizontal plane illuminance designed for high-ceiling industrial facilities and manufacturing bays.",
    luxProfile: "Industrial Task & Safety (300-500 Lux)",
    isoContour: "M 90 150 C 90 90, 140 80, 200 80 C 260 80, 310 90, 310 150 C 310 210, 260 220, 200 220 C 140 220, 90 210, 90 150 Z",
    polarCurve: "M 200 200 C 160 110, 140 140, 140 180 C 140 220, 160 250, 200 250 C 240 250, 260 220, 260 180 C 260 140, 240 110, 200 200 Z",
    centerLux: "420 Lux",
    uniformity: "U0 ≥ 0.60",
  },
];

export function SolarArchitectureAnimation() {
  const [activeTab, setActiveTab] = useState<"layers" | "optics">("layers");
  const [selectedLayer, setSelectedLayer] = useState<number>(1);
  const [selectedOptic, setSelectedOptic] = useState<string>("type-2");
  const gradientId = useId();

  const currentLayer = solarLayers.find((l) => l.id === selectedLayer)!;
  const currentOptic = opticalDistributions.find((o) => o.id === selectedOptic)!;

  return (
    <section className="relative bg-stone/40 py-28 lg:py-36 border-t border-b border-ink/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-signal/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16 border-b border-ink/10 pb-8"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold">
                — HOW OUR SOLAR LIGHTING WORKS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-signal/15 text-signal border border-signal/30">
                <ZapOff className="w-3 h-3" />
                100% Without Electricity
              </span>
            </motion.div>
            
            <h2 className="text-display text-ink text-[8vw] leading-[1.04] tracking-[-0.04em] md:text-[4.5vw] font-bold">
              Solar Architecture &amp; <span className="text-signal">Smart Lighting.</span>
            </h2>
            
            <p className="mt-4 max-w-xl text-sm sm:text-base text-ink/70 font-light leading-relaxed">
              Explore the all-in-one solar lighting engineering inside HINDLED luminaires — from 360° solar energy harvesting to smart power storage and night illumination.
            </p>
          </div>

          {/* Interactive Mode Switcher */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 p-1.5 rounded-full bg-paper border border-ink/10 shadow-sm self-start md:self-end"
          >
            <button
              onClick={() => setActiveTab("layers")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "layers"
                  ? "bg-ink text-paper shadow-md"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Solar Anatomy (6 Layers)</span>
            </button>
            <button
              onClick={() => setActiveTab("optics")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "optics"
                  ? "bg-ink text-paper shadow-md"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Light Coverage (Optics)</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Tab 1: 6-Layer Exploded Solar Architecture */}
        {activeTab === "layers" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Interactive Exploded Stack Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="relative p-6 sm:p-8 rounded-[32px] bg-paper border border-ink/10 shadow-lg space-y-3">
                <div className="text-mono text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-4 flex items-center justify-between">
                  <span>Interactive Exploded Core</span>
                  <span>Click Layer to Inspect</span>
                </div>

                {solarLayers.map((layer, idx) => {
                  const isSelected = selectedLayer === layer.id;
                  const Icon = layer.icon;
                  return (
                    <motion.button
                      key={layer.id}
                      onClick={() => setSelectedLayer(layer.id)}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.1 + idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-stone border-signal shadow-md ring-2 ring-signal/20"
                          : "bg-paper hover:bg-stone/50 border-ink/10"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-colors ${
                            isSelected ? "bg-signal text-white" : "bg-stone text-ink/60"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm font-bold text-ink">{layer.title.split("·")[0]}</span>
                          </div>
                          <span className="text-[11px] text-ink/60 font-light block mt-0.5">{layer.subtitle}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isSelected && (
                          <span className="text-xs text-signal font-mono font-bold">ACTIVE →</span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Layer Detailed Inspection Card */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLayer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-[36px] bg-paper border border-ink/10 p-8 sm:p-12 shadow-xl flex flex-col justify-between min-h-[460px]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b border-ink/10 pb-6 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-stone border border-ink/10 text-ink/80 block w-fit">
                          {currentLayer.tag}
                        </span>
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-stone border border-ink/10 flex items-center justify-center text-signal">
                        {(() => {
                          const IconComp = currentLayer.icon;
                          return <IconComp className="w-7 h-7" />;
                        })()}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">
                      {currentLayer.title}
                    </h3>
                    <p className="text-sm font-mono text-signal font-bold mt-1 uppercase tracking-wider">
                      {currentLayer.subtitle}
                    </p>

                    <p className="mt-6 text-base sm:text-lg text-ink/80 leading-relaxed font-light">
                      {currentLayer.desc}
                    </p>
                  </div>

                  {/* Specifications Grid */}
                  <div className="mt-8 pt-6 border-t border-ink/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {currentLayer.specs.map((sp, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-stone border border-ink/5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                        <span className="text-xs font-mono font-bold text-ink/85 truncate">{sp}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        )}

        {/* Tab 2: Photometric ISO-Lux Light Distribution Curves */}
        {activeTab === "optics" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Beam Selector */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex flex-col justify-between space-y-3"
            >
              <div className="p-6 rounded-[28px] bg-paper border border-ink/10 shadow-md space-y-2">
                <span className="text-mono text-[10px] uppercase tracking-widest text-ink/40 font-bold block mb-3">
                  Select Photometric Profile
                </span>
                
                {opticalDistributions.map((optic) => {
                  const isSelected = selectedOptic === optic.id;
                  return (
                    <button
                      key={optic.id}
                      onClick={() => setSelectedOptic(optic.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-stone border-signal shadow-sm ring-2 ring-signal/20"
                          : "bg-paper hover:bg-stone/50 border-ink/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-sm font-bold text-ink">{optic.name}</span>
                        <span className="text-[10px] font-mono text-signal font-bold">{optic.centerLux}</span>
                      </div>
                      <span className="text-[11px] text-ink/60 font-light block mt-1">{optic.application}</span>
                    </button>
                  );
                })}
              </div>

              {/* Live Metric Banner */}
              <div className="p-6 rounded-[24px] bg-ink text-paper flex flex-col justify-between shadow-lg">
                <span className="text-mono text-[10px] uppercase tracking-widest text-paper/40 font-bold">
                  Active Photometric Output
                </span>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="font-display text-3xl font-bold text-signal">{currentOptic.centerLux}</span>
                  <span className="text-mono text-xs text-paper/70">{currentOptic.uniformity}</span>
                </div>
                <span className="text-[11px] font-mono text-paper/60 mt-1 block">
                  Calibrated DIALux Simulation Code Compliant
                </span>
              </div>
            </motion.div>

            {/* Right Live Photometric Curve & Iso-Lux Heatmap */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8 flex flex-col"
            >
              <div className="rounded-[36px] bg-paper border border-ink/10 p-8 sm:p-12 shadow-xl flex-grow flex flex-col justify-between">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink/10 pb-6 mb-6">
                  <div>
                    <span className="text-mono text-xs font-bold uppercase tracking-widest text-signal block mb-1">
                      {currentOptic.luxProfile}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                      {currentOptic.name} — Optical Simulation
                    </h3>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-stone border border-ink/10 text-right">
                    <span className="text-[10px] font-mono text-ink/50 block">BEAM SPREAD</span>
                    <span className="font-mono text-xs font-bold text-ink">{currentOptic.beamAngle}</span>
                  </div>
                </div>

                {/* SVG Live Polar Curve & Iso-Lux Footprint */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-4">
                  
                  {/* Visual 1: Ground Iso-Lux Contour Map */}
                  <div className="relative rounded-2xl bg-stone/70 border border-ink/10 p-6 flex flex-col items-center justify-center">
                    <span className="text-mono text-[9px] uppercase tracking-widest text-ink/50 font-bold mb-3 block self-start">
                      Ground Iso-Lux Footprint
                    </span>
                    <svg viewBox="0 0 400 300" className="w-full h-48 max-h-48 overflow-visible">
                      <defs>
                        <radialGradient id={`${gradientId}-luxGrad`} cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#10B981" stopOpacity="0.35" />
                          <stop offset="85%" stopColor="#10B981" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      
                      {/* Grid Lines */}
                      <line x1="20" y1="150" x2="380" y2="150" stroke="#000000" strokeOpacity="0.1" strokeDasharray="3 3" />
                      <line x1="200" y1="20" x2="200" y2="280" stroke="#000000" strokeOpacity="0.1" strokeDasharray="3 3" />
                      
                      {/* Animated Iso-Lux Surface */}
                      <motion.path
                        key={`iso-${currentOptic.id}`}
                        d={currentOptic.isoContour}
                        fill={`url(#${gradientId}-luxGrad)`}
                        stroke="#10B981"
                        strokeWidth="2"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Pole Origin Point */}
                      <circle cx="200" cy="150" r="5" fill="#10B981" />
                      <circle cx="200" cy="150" r="10" stroke="#10B981" strokeWidth="1.5" fill="none" opacity="0.6" />
                    </svg>
                    <div className="flex items-center justify-between w-full mt-2 text-[10px] font-mono text-ink/60">
                      <span>-20m Lateral</span>
                      <span className="text-signal font-bold">Luminaire Center</span>
                      <span>+20m Lateral</span>
                    </div>
                  </div>

                  {/* Visual 2: Polar Candela Diagram */}
                  <div className="relative rounded-2xl bg-stone/70 border border-ink/10 p-6 flex flex-col items-center justify-center">
                    <span className="text-mono text-[9px] uppercase tracking-widest text-ink/50 font-bold mb-3 block self-start">
                      Polar Luminous Intensity (cd/klm)
                    </span>
                    <svg viewBox="0 0 400 300" className="w-full h-48 max-h-48 overflow-visible">
                      {/* Concentric Polar Circles */}
                      <circle cx="200" cy="200" r="120" stroke="#000000" strokeOpacity="0.08" fill="none" />
                      <circle cx="200" cy="200" r="80" stroke="#000000" strokeOpacity="0.08" fill="none" />
                      <circle cx="200" cy="200" r="40" stroke="#000000" strokeOpacity="0.08" fill="none" />
                      <line x1="60" y1="200" x2="340" y2="200" stroke="#000000" strokeOpacity="0.1" strokeDasharray="2 2" />
                      <line x1="200" y1="60" x2="200" y2="280" stroke="#000000" strokeOpacity="0.1" strokeDasharray="2 2" />

                      {/* Animated Polar Distribution Curve */}
                      <motion.path
                        key={`polar-${currentOptic.id}`}
                        d={currentOptic.polarCurve}
                        fill="rgba(16, 185, 129, 0.2)"
                        stroke="#10B981"
                        strokeWidth="2.5"
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="flex items-center justify-between w-full mt-2 text-[10px] font-mono text-ink/60">
                      <span>C0 - C180 Plane</span>
                      <span className="text-signal font-bold">Gamma Peak</span>
                      <span>C90 - C270 Plane</span>
                    </div>
                  </div>

                </div>

                <div className="pt-6 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-ink/70 leading-relaxed max-w-xl font-light">
                    {currentOptic.throwDesc}
                  </p>
                  <span className="text-mono text-[10px] font-bold text-signal uppercase tracking-wider bg-signal/10 px-3 py-1.5 rounded-lg border border-signal/20 shrink-0">
                    IES / LDT Files Available
                  </span>
                </div>

              </div>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}
