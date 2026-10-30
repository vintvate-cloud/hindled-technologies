import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sun,
  Shield,
  Cpu,
  BatteryCharging,
  Eye,
} from "lucide-react";

// The 5 Curated Architectural Layers of HINDLED Solar Illumination
const solarLayers = [
  {
    id: 1,
    number: "01",
    title: "360° Vertical Solar Panels",
    subtitle: "Continuous All-Day Sunlight Harvest",
    tag: "Energy Generation · 0W Grid Draw",
    desc: "Vertical solar panels wrap the entire pole to capture direct, reflected, and diffuse sunlight from all 360 degrees. The vertical profile naturally sheds dust and rain without requiring manual cleaning or maintenance.",
    specs: ["360° All-Day Solar Capture", "Self-Cleaning Vertical Profile", "Zero Electricity Bills"],
    color: "#10B981", // Signal Emerald
    icon: Sun,
  },
  {
    id: 2,
    number: "02",
    title: "Weatherproof Storm Armor",
    subtitle: "Engineered for Harsh Outdoor Climates",
    tag: "Mechanical Armor · IP66 / IK10",
    desc: "Marine-grade die-cast aluminum alloy paired with high-impact toughened protective glass. Built to withstand high-wind cyclones, coastal salt humidity, and intense summer temperatures without degradation.",
    specs: ["High Wind Resistance", "Corrosion & Rust Proof Shell", "Impact-Resistant Shield"],
    color: "#3B82F6", // Ocean Blue
    icon: Shield,
  },
  {
    id: 3,
    number: "03",
    title: "Smart Solar Brain & Sensors",
    subtitle: "Intelligent Dusk-to-Dawn Automation",
    tag: "Smart Control · Automatic Dimming",
    desc: "Onboard microcontroller optimizes energy storage and consumption in real time. Automatically illuminates at sunset, conserves power during quiet hours, and brightens instantly upon radar motion detection.",
    specs: ["Automatic Dusk-to-Dawn", "Radar Motion Detection", "Power-Saving Adaptive Dimming"],
    color: "#8B5CF6", // Electric Purple
    icon: Cpu,
  },
  {
    id: 4,
    number: "04",
    title: "Long-Life Lithium Battery Storage",
    subtitle: "Multi-Night Continuous Power Reserve",
    tag: "Energy Storage · 3,000+ Cycles",
    desc: "High-density Lithium Iron Phosphate (LiFePO4) energy cells safely housed inside the core. Delivers up to 7 consecutive nights of uninterrupted illumination during heavy monsoons and overcast winters.",
    specs: ["Up to 7 Rainy Days Backup", "3,000+ Deep Life Cycles", "Safe Lithium Chemistry"],
    color: "#F59E0B", // Amber Gold
    icon: BatteryCharging,
  },
  {
    id: 5,
    number: "05",
    title: "Glare-Free Optical Illumination",
    subtitle: "Uniform Light Across Roads & Campuses",
    tag: "Optics · Anti-Glare Precision",
    desc: "Precision optical lenses shape high-lumen LED light uniformly across roadways, pathways, and large public spaces with zero driver glare, zero dark spots, and zero upward light pollution.",
    specs: ["Uniform Roadway Coverage", "Zero Driver Glare", "Dark-Sky Compliant"],
    color: "#10B981", // Signal Emerald
    icon: Eye,
  },
];

interface StackingCardProps {
  layer: (typeof solarLayers)[0];
  index: number;
  total: number;
}

function StackingCard({ layer, index, total }: StackingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = layer.icon;

  return (
    <div
      ref={cardRef}
      className={`w-full sticky ${index === total - 1 ? "min-h-[50vh] mb-36 sm:mb-48" : "h-[60vh] sm:h-[72vh]"}`}
      style={{
        top: `calc(5.5rem + ${index * 26}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative rounded-[32px] sm:rounded-[44px] bg-white border border-ink/10 p-8 sm:p-12 lg:p-14 shadow-[0_-6px_25px_rgba(0,0,0,0.03),_0_25px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-shadow overflow-hidden group"
      >
        {/* Subtle Colored Ambient Bloom */}
        <div
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[110px] pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity"
          style={{ background: layer.color }}
        />

        {/* Ghost Typography Watermark Number */}
        <span className="absolute top-6 right-8 sm:right-12 font-mono text-7xl sm:text-8xl lg:text-9xl font-black text-ink/[0.03] select-none pointer-events-none">
          {layer.number}
        </span>

        <div className="relative z-10 max-w-3xl">
          {/* Layer Header Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider"
              style={{
                backgroundColor: `${layer.color}15`,
                color: layer.color,
                borderColor: `${layer.color}35`,
                borderWidth: 1,
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              LAYER {layer.number}
            </span>
            <span className="text-xs font-mono text-ink/50 uppercase tracking-widest font-semibold">
              {layer.tag}
            </span>
          </div>

          {/* Layer Title & Subtitle */}
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink tracking-tight leading-tight">
            {layer.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm font-mono text-signal font-bold uppercase tracking-wider">
            {layer.subtitle}
          </p>

          {/* Short, High-End Description (Not Content Heavy) */}
          <p className="mt-4 text-base sm:text-lg text-ink/75 leading-relaxed font-light">
            {layer.desc}
          </p>

          {/* Crisp Feature Specs Strip */}
          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            {layer.specs.map((spec, sIdx) => (
              <span
                key={sIdx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium bg-stone/70 border border-ink/10 text-ink/80"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: layer.color }}
                />
                {spec}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function SolarArchitectureAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} id="solar-anatomy" className="relative bg-paper py-28 lg:py-36 hairline-t">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-signal" />
            <span className="text-mono text-xs uppercase tracking-widest text-signal font-bold">
              SOLAR ANATOMY
            </span>
          </div>
          
          <h2 className="text-display text-ink text-[8.5vw] sm:text-[6vw] lg:text-[4.5vw] leading-[1.04] tracking-[-0.04em] font-bold">
            Engineered from the <span className="text-signal">inside out.</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-ink/70 font-light leading-relaxed">
            Scroll to explore how each layer works together to harvest sunlight, store clean energy, and deliver dependable all-night illumination.
          </p>
        </motion.div>

        {/* Scroll-Driven Card Stacking Container */}
        <div className="relative">
          {solarLayers.map((layer, idx) => (
            <StackingCard
              key={layer.id}
              layer={layer}
              index={idx}
              total={solarLayers.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SolarArchitectureAnimation;
