import p5_spec from "./catalogue/p5_spec.jpg";
import p8_spec from "./catalogue/p8_spec.jpg";
import p1 from "./catalogue/p1.jpg";
import p18 from "./catalogue/p18.jpg";
import p20 from "./catalogue/p20.jpg";

// High-resolution catalogue extracted images
import soleraImg from "./catalogue/solera.jpg";
import hlAditiImg from "./catalogue/hl_aditi.jpg";
import sandhyaImg from "./catalogue/sandhya.jpg";
import zonoModuleImg from "./catalogue/zono_module.jpg";
import zonoStreetImg from "./catalogue/zono_street.jpg";
import zonoAreaAImg from "./catalogue/zono_area_a.jpg";
import zonoAreaBImg from "./catalogue/zono_area_b.jpg";
import zonoPostTopImg from "./catalogue/zono_post_top.jpg";
import shivaImg from "./catalogue/shiva.jpg";
import tejasColumnImg from "./catalogue/tejas_column.jpg";
import tejasSmartPoleImg from "./catalogue/tejas_smart_pole.jpg";
import hermesImg from "./catalogue/hermes.jpg";
import vionLightningImg from "./catalogue/vion_lightning.jpg";
import mangalStambhWoodenImg from "./catalogue/mangal_stambh_wooden.jpg";
import satyaWoodenImg from "./catalogue/satya_wooden.jpg";
import solarAcHybridImg from "./catalogue/solar_ac_hybrid.jpg";
import hlPranjalImg from "./catalogue/hl_pranjal.jpg";
import hlGajHeroImg from "./catalogue/hl_gaj_hero.jpg";
import hlGajImg from "./catalogue/hl_gaj.jpg";
import hlUltraBeamImg from "./catalogue/hl_ultra_beam.jpg";

export type CatalogueItem = {
  slug: string;
  code: string;
  series: string;
  name: string;
  tagline: string;
  category: "Solar" | "Outdoor & Industrial" | "Hybrid Solar + AC";
  image: string;
  heroImage?: string;
  description: string;
  specs: Record<string, string>;
  features?: string[];
  specImage?: string;
  highlightBadge?: string;
};

export type KeyFeatureCard = {
  title: string;
  desc: string;
  icon: string;
};

export type ApplicationCard = {
  title: string;
  desc: string;
  icon: string;
};

export type BusinessBenefit = {
  title: string;
  desc: string;
};

export interface EnrichedProduct extends CatalogueItem {
  overview: string;
  featuresDetails: KeyFeatureCard[];
  applicationsList: ApplicationCard[];
  benefitsList: BusinessBenefit[];
}

const rawCatalogue: CatalogueItem[] = [
  {
    slug: "solera",
    code: "01",
    series: "SOLERA",
    name: "SOLERA-Vertical Solar LED Street Lights",
    tagline: "Integrated vertical PV pole modules · 100W – 600W",
    category: "Solar",
    image: soleraImg,
    description:
      "Slim, all-in-one vertical photovoltaic modules engineered to wrap around the pole itself — turning the entire cylindrical column into a 360° power-generating surface. HPBC mono cells across six faces deliver high yield with zero dust build-up, operating 100% without electricity.",
    specs: {
      "Power Range": "100W – 600Wp",
      "Cell Type": "HPBC Monocrystalline · >26% efficiency",
      "PV Faces": "6-sided 360° solar capture",
      Voltage: "18V / 36V",
      Glass: "3.2mm super-white tempered glass",
      "Junction Box": "IP66 waterproof rated",
      "Wind Load": "57 m/s (Category 5 storm proof)",
      "Operating Temp": "-40°C to +85°C",
      "Pole Diameter": "Φ60–Φ270 mm",
      Warranty: "5–10 years",
    },
    features: [
      "100% solar independence without electricity",
      "HPBC monocrystalline >26% efficiency",
      "Salt spray 1000 hrs marine rating",
      "Six-face 360° solar capture",
      "Natural self-cleaning dust-shedding profile",
    ],
    specImage: p5_spec,
    highlightBadge: "Zero Electricity · 360° Solar",
  },
  {
    slug: "hl-aditi",
    code: "02",
    series: "HL ADITI",
    name: "HL ADITI Solar Light Solution",
    tagline: "High-performance solar LED luminaire · 20W – 150W",
    category: "Solar",
    image: hlAditiImg,
    description:
      "A flagship die-cast solar luminaire built for split and all-in-two solar street lighting. Engineered with an expansive internal cavity storing high-capacity LiFePO4 batteries, MPPT controller, and optical sensors; ADC12 aerodynamic body eliminates wind drag and sheds monsoon rain effortlessly.",
    specs: {
      "Power Range": "20W – 150W",
      "LED Source": "CREE / OSRAM / LUMILEDS / NICHIA / SEOUL",
      Driver: "PHILIPS / MEAN WELL / INVENTRONICS",
      Efficacy: "160–190 lm/W",
      CCT: "2700K – 6500K",
      CRI: ">70 Ra (80 Ra optional)",
      Housing: "Die-cast ADC12 aluminium alloy",
      Protection: "IP66 · IK08 / IK10",
      "Energy Source": "100% Solar Off-Grid Autonomy",
    },
    features: [
      "Integrated MPPT intelligent charge control",
      "Anti-UV optical PMMA lens",
      "Cell-balanced LiFePO4 battery pack",
      "Operates completely without electricity",
    ],
    highlightBadge: "Featured Product · 190 lm/W",
  },
  {
    slug: "sandhya",
    code: "03",
    series: "SANDHYA",
    name: "SANDHYA-Solar LED Garden Light",
    tagline: "Classic heritage lantern garden light · 3 – 8 m",
    category: "Solar",
    image: sandhyaImg,
    description:
      "A timeless lantern-style architectural solar garden light marrying classic heritage aesthetics with cutting-edge monocrystalline PV capture and high-cycle LiFePO4 storage. Delivers glare-free 360° atmospheric illumination for royal estates, heritage plazas, civic parks, and boutique resorts.",
    specs: {
      Heights: "3m · 4m · 5m · 6m · 8m",
      Power: "5W – 100W",
      Output: "150–170 lm/W",
      Distribution: "Type V Symmetric 360° low glare",
      Battery: "42Ah 12.8V / 25.6V LiFePO4 (3000+ cycles)",
      "Solar Module": "100W – 1200W Monocrystalline",
      Material: "Aluminium 6063 / Q235 galvanized alloy",
      Protection: "IP65 / IP66 · IK08",
      "Autonomy": "4–7 rainy days backup",
    },
    features: [
      "Heritage aesthetic with modern solar tech",
      "Zero electricity utility bill",
      "Symmetric 360° pathway illumination",
      "Automatic dusk-to-dawn intelligent dimming",
    ],
    highlightBadge: "Featured Heritage Solar",
  },
  {
    slug: "zono-module",
    code: "04",
    series: "ZONO",
    name: "ZONO-LED Solar Vertical Module",
    tagline: "Cylindrical PV pole modules · 100W / 150W / 200W",
    category: "Solar",
    image: zonoModuleImg,
    description:
      "The modular vertical solar engine that powers the entire ZONO family. Six-sided HPBC monocrystalline cells encased in a robust Φ26.5 cm body slide directly over standard pole diameters (Φ60 to Φ168 mm), eliminating unsightly flat panels.",
    specs: {
      "Power Range": "100W / 150W / 200Wp",
      Voltage: "18V / 36V",
      Voc: "22V / 44V",
      "Cell Type": "HPBC Mono >26% efficiency",
      Dimensions: "Φ26.5 × 81.5–128.6 cm",
      "Pole Fit": "Φ60–Φ168 mm",
      Weight: "8.5–13.5 kg",
      Connection: "Max 5 modules in parallel",
    },
    specImage: p8_spec,
  },
  {
    slug: "zono-street",
    code: "05",
    series: "ZONO",
    name: "ZONO-Solar LED Street Light",
    tagline: "All-in-two solar street light · 6 – 12 m",
    category: "Solar",
    image: zonoStreetImg,
    description:
      "Arterial roadway and expressway solar street lighting system built on die-cast ADC12 fixtures with extruded structural aluminium poles. Single and dual-arm configurations illuminate highways from 6m to 12m with zero grid dependency.",
    specs: {
      Heights: "6m · 8m · 10m · 12m",
      Power: "20W · 30W · 20W×2 · 30W×2",
      LEDs: "CREE / OSRAM / LUMILEDS / Nichia",
      Output: "150–180 LM/W",
      Distribution: "Type II / Type III Roadway Optics",
      CCT: "2700K – 6500K",
      Battery: "LiFePO4 40Ah / 50Ah 12.8V",
      "Solar Module": "200W / 400W HPBC",
      Protection: "IP65 · IK08",
    },
    features: ["4-step adaptive dimming", "Direct bury / base-plate", "Cell-balanced LiFePO4", "Zero grid wiring"],
  },
  {
    slug: "zono-area-a",
    code: "06",
    series: "ZONO",
    name: "ZONO Solar Area Light – A",
    tagline: "Architectural area & campus light · 4 – 8 m",
    category: "Solar",
    image: zonoAreaAImg,
    description:
      "A clean, contemporary linear area luminaire for commercial plazas, university campuses, and civic frontages. Aluminium 6063 body, premium optics and T2/T5 lenses deliver uniform wide-area illumination without electricity.",
    specs: {
      Heights: "4m · 6m · 8m",
      Power: "20W · 20W×2",
      LEDs: "Philips / Nichia",
      Output: "150–170 LM/W",
      Distribution: "T2 / T5",
      Battery: "12.8V 45–50Ah LiFePO4",
      "Solar Module": "200W HPBC",
      Protection: "IP65 · IK08",
      Material: "Aluminium 6063",
    },
  },
  {
    slug: "zono-area-b",
    code: "07",
    series: "ZONO",
    name: "ZONO Solar Area Light – B",
    tagline: "Tapered-arm area light · 6 – 10 m",
    category: "Solar",
    image: zonoAreaBImg,
    description:
      "The sculpted curved-arm variant of the ZONO platform for taller 6–10m installations — ideal for boulevards, public parks, and luxury mixed-use developments where graceful architectural form matches high lumen output.",
    specs: {
      Heights: "6m · 8m · 10m",
      Power: "20W · 20W×2",
      Output: "150–170 LM/W",
      Distribution: "T2 / T5",
      Battery: "12.8V 45–50Ah LiFePO4",
      "Solar Module": "200W HPBC",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "zono-post-top",
    code: "08",
    series: "ZONO",
    name: "ZONO Solar Post-Top",
    tagline: "Decorative pedestrian post-top · 4 m",
    category: "Solar",
    image: zonoPostTopImg,
    description:
      "A refined cylindrical post-top luminaire for residential boulevards, pedestrian walkways, and landscaped grounds. The vertical solar module integrates seamlessly into the column, creating glare-free ambient light with complete off-grid autonomy.",
    specs: {
      Height: "4000 mm",
      Power: "20W",
      Output: "150–170 LM/W",
      Distribution: "T2 / T5",
      Battery: "12.8V 45Ah LiFePO4",
      "Solar Module": "200W HPBC",
      Material: "Aluminium 6063",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "shiva",
    code: "09",
    series: "SHIVA",
    name: "SHIVA Solar Bollard Light",
    tagline: "Pathway & landscape bollard · 1140 mm",
    category: "Solar",
    image: shivaImg,
    description:
      "A sculptural twisted-form architectural solar bollard for luxury villa pathways, resort gardens, and hotel entrances. Low-draw high-efficiency LED engine paired with integrated cylindrical mono PV and LiFePO4 cell delivers dependable all-night illumination.",
    specs: {
      Height: "1140 mm",
      Models: "HL-SHIVA-C1 · HL-SHIVA-C2",
      Power: "1.5W – 3W",
      Output: "150–170 LM/W",
      Battery: "3.2V 16Ah LiFePO4",
      "Solar Module": "25W × 2 HPBC Monocrystalline",
      Protection: "IP65 · IK08",
      Finish: "Architectural anodized charcoal / bronze",
    },
  },
  {
    slug: "tejas-column",
    code: "10",
    series: "TEJAS",
    name: "TEJAS Solar LED Column Light",
    tagline: "Adjustable-power solar column light · 3 – 5 m",
    category: "Solar",
    image: tejasColumnImg,
    description:
      "A versatile column lighting platform with site-adjustable power settings. Single and dual-side heads provide crisp, uniform illumination across pathways, commercial compounds, and public gardens without trenching or electricity.",
    specs: {
      Heights: "3m · 4m · 5m",
      Configurations: "Single Head · Double Down · Dual Side",
      Power: "15W – 60W site-adjustable",
      Output: "150–170 LM/W",
      Battery: "12.8V / 25.6V 42Ah LiFePO4",
      "Solar Module": "35W – 70W Monocrystalline",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "tejas-smart-pole",
    code: "11",
    series: "TEJAS",
    name: "TEJAS-Solar Smart Pole (Camera + Light)",
    tagline: "Integrated CCTV surveillance + solar area lighting · ZERO ELECTRICITY",
    category: "Solar",
    image: tejasSmartPoleImg,
    description:
      "The flagship TEJAS smart pole combines high-definition security surveillance camera and high-output solar area lighting in a single unified column. Engineered to operate 100% OFF-GRID WITHOUT ELECTRICITY, both the camera and the lighting system draw continuous power from integrated vertical HPBC solar modules and LiFePO4 battery storage.",
    specs: {
      Heights: "6m · 8m · 10m",
      "Dual System": "Autonomous CCTV Camera + Solar LED Luminaire",
      "Power Grid Requirement": "0% — 100% Off-Grid Without Electricity",
      Surveillance: "HD 4G/Wi-Fi PTZ or Dome Camera with Night Vision",
      Lighting: "20W – 60W High-Efficacy LED Array (170 lm/W)",
      Storage: "High-Capacity 12.8V / 25.6V LiFePO4 Battery Matrix",
      "Solar Generation": "200W – 400W 360° Vertical HPBC Mono Wrap",
      Protection: "IP66 Ingress · IK10 Impact Resistance",
      Autonomy: "Continuous 24/7 camera recording + 5 days lighting autonomy",
    },
    features: [
      "Integrated HD CCTV security camera running with ZERO electricity",
      "Simultaneous solar roadway / perimeter lighting",
      "4G LTE / Wi-Fi cloud connectivity bay",
      "100% off-grid — no trenching, no cabling, zero electric bills",
      "Ideal for sensitive borders, campuses, remote estates, and smart cities",
    ],
    highlightBadge: "Camera + Light · 100% Without Electricity",
  },
  {
    slug: "hermes",
    code: "12",
    series: "HERMES",
    name: "HERMES-Solar LED Column Lights",
    tagline: "Slim louvred column area light · 3 / 4 / 5 m",
    category: "Solar",
    image: hermesImg,
    description:
      "A minimalist, louvred architectural column light for public parks, trails, botanical gardens, and premium landscapes. Low-glare louvred optics cast gentle, controlled pools of light while internal monocrystalline PV modules capture daylight silently.",
    specs: {
      Sizes: "3m (Mini) · 4m (Standard) · 5m (Pro)",
      Power: "10W – 50W",
      LEDs: "CREE / OSRAM / Nichia / SEOUL",
      Output: "150–170 LM/W",
      Distribution: "Type V Low-Glare Louvred",
      Battery: "12.8V / 25.6V 24–42Ah LiFePO4",
      "Solar Module": "100W / 120W / 240W Mono",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "phoenix-recessed",
    code: "13",
    series: "RECESSED",
    name: "Solar Recessed Underground Marker",
    tagline: "Heavy-duty drive-over in-ground solar marker",
    category: "Solar",
    image: p18,
    description:
      "A sealed, drive-over in-ground recessed solar marker crafted in marine-grade 2205 & 304 stainless steel with impact-resistant tempered glass for walkways, driveways, airport taxiway accents, and civic squares.",
    specs: {
      Variants: "Pure Solar Style · Solar + AC Supplement",
      Power: "0.2W – 0.5W",
      Output: "40 lm – 90 lm",
      Battery: "3.7V 5Ah LiFePO4",
      "Solar Module": "1.2W Monocrystalline",
      Housing: "2205 & 304 SS + Tempered Glass",
      Protection: "IP68 Submersible · IK10 Drive-Over",
      "Operating Temp": "-40°C to +100°C",
    },
  },
  {
    slug: "vion-lightning",
    code: "14",
    series: "VION LIGHTING",
    name: "VION Lightning Adjustable Wall Wash",
    tagline: "Linear solar wall-wash · 1000 mm",
    category: "Solar",
    image: vionLightningImg,
    description:
      "A 1-metre linear architectural solar wall-washer with an adjustable-angle bracket and selectable wide, middle, or narrow optics. Aluminium 6063 body with a 20W solar panel and 15Ah battery grazes textured stone and building facades with zero electrical hookup.",
    specs: {
      Power: "0–4W adjustable",
      Output: "≥400 lm",
      "Solar Panel": "20W Integrated Mono",
      Battery: "15Ah 12.8V LiFePO4",
      Optics: "Wide / Middle / Narrow Wall Grazing",
      CCT: "2700K – 6500K",
      Dimensions: "L1000 × W150 × H50 mm",
      Protection: "IP65 · IK08",
      Autonomy: "3–5 rainy days backup",
    },
  },
  {
    slug: "orion",
    code: "15",
    series: "ORION",
    name: "Orion Recessed Solar Wall Wash",
    tagline: "Recessed asymmetric solar wall-wash · S / M / L",
    category: "Solar",
    image: p20,
    description:
      "A flush recessed solar wall-wash with asymmetric optics engineered for exterior steps, boundary retaining walls, and architectural niches. Three sizes scale output from 120 lm to 1200 lm without conduit wiring.",
    specs: {
      Sizes: "S · M · L",
      Output: "120 / 300 / 1200 lm",
      Power: "0.8W · 1.6W · 5W",
      Battery: "2Ah / 4Ah / 8Ah 12.8V LiFePO4",
      "Solar Panel": "4W · 10W · 30W Mono",
      Optics: "Asymmetric Step & Wall Grazing",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "mangal-stambh-wooden",
    code: "16",
    series: "MANGAL STAMBH",
    name: "HL Mangal Stambh Wooden Solar Area Light",
    tagline: "Wooden-pole solar area light · 3 – 5 m",
    category: "Solar",
    image: mangalStambhWoodenImg,
    description:
      "A distinguished wooden-pole solar area lighting platform crafted for luxury resorts, eco-parks, waterfront promenades, and heritage institutions. Blends organic wood-grain warmth with robust monocrystalline PV capture and precision Philips LED optics.",
    specs: {
      Heights: "3m · 4m · 5m",
      Configurations: "S-WD (Single) · DD-WD (Double-Down)",
      Power: "15W – 60W",
      LEDs: "Philips Lumileds",
      Output: "150–170 LM/W",
      Battery: "25.6V 42Ah LiFePO4",
      "Solar Module": "100W – 560W Monocrystalline",
      "Pole Material": "Treated Architectural Timber / Aluminium Hybrid",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "satya-wooden",
    code: "17",
    series: "SATYA WOODEN",
    name: "SATYA-WD-Solar Wooden Bollard",
    tagline: "Wooden-finish solar bollard · 800 – 1000 mm",
    category: "Solar",
    image: satyaWoodenImg,
    description:
      "A warm, wood-textured solar landscape bollard for pedestrian pathways, courtyard gardens, and resort walkways. Features symmetric low-glare optics, Philips/Seoul LED diodes, and compact LiFePO4 energy storage.",
    specs: {
      Heights: "800 mm · 1000 mm",
      Power: "1W – 10W",
      LEDs: "Philips / Seoul",
      Output: "≥100 LM/W",
      Optics: "Symmetric 360° Low Glare",
      Battery: "12.8V 4Ah LiFePO4",
      "Solar Module": "17W × 1 / 17W × 2 Monocrystalline",
      Material: "Treated Timber & Aluminium 6063 core",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "solar-ac-hybrid",
    code: "18",
    series: "SOLAR + AC HYBRID",
    name: "Solar + AC Power LED Light Solution",
    tagline: "Intelligent dual-power hybrid area light · 20W – 50W",
    category: "Hybrid Solar + AC",
    image: solarAcHybridImg,
    description:
      "An intelligent hybrid luminaire combining solar photovoltaic energy harvesting with AC grid backup. Features smart priority logic: runs 100% on clean solar energy when available, and automatically supplements from AC grid during prolonged monsoons or heavy cloud cover.",
    specs: {
      "Power Range": "20W – 50W",
      "Dual System": "Solar PV Primary + AC 100–277V Grid Backup",
      "Light Efficiency": "160–180 LM/W",
      "Switching Logic": "Automatic Solar Priority with Zero Glitch",
      Battery: "High-Cycle LiFePO4 Energy Bank",
      "Solar Module": "High-Efficiency Monocrystalline",
      Protection: "IP65 / IP66 · IK08",
      Certification: "CE · RoHS · CB",
    },
    features: [
      "Smart solar-first priority energy management",
      "AC grid backup eliminates any downtime during extreme monsoons",
      "Saves up to 80% grid power bills",
      "Ideal for critical security perimeters and civic infrastructure",
    ],
    highlightBadge: "New Catalogue Product · Dual Power",
  },
  {
    slug: "hl-pranjal",
    code: "19",
    series: "HL PRANJAL",
    name: "HL PRANJAL Solar + AC Hybrid Garden Light",
    tagline: "Intelligent dual-power garden & landscape light · 20W – 50W",
    category: "Hybrid Solar + AC",
    image: hlPranjalImg,
    description:
      "A refined hybrid garden luminaire designed for continuous, uninterrupted park and campus lighting. Harnesses solar energy for primary operation while keeping an active AC link on standby for 100% guaranteed year-round uptime.",
    specs: {
      "Power Range": "20W – 50W",
      Voltage: "Solar DC + AC 100–277V Hybrid",
      Lumen: "3,200 – 8,500 lm",
      CCT: "3000K – 6500K",
      Controller: "Intelligent Hybrid MPPT / AC Sensor",
      Material: "Die-cast Aluminium 6063 + Anti-UV PMMA",
      Protection: "IP65 · IK08",
    },
    features: [
      "Uninterrupted 365-day operation",
      "Architectural low-glare aesthetic",
      "Automatic solar/grid load switching",
      "Maintenance-free design",
    ],
    highlightBadge: "New Catalogue Product · Hybrid Garden",
  },
  {
    slug: "hl-gaj",
    code: "20",
    series: "HL GAJ",
    name: "HL GAJ High-Power Stadium Floodlight",
    tagline: "Professional broadcast-grade stadium floodlight · 600W – 2250W",
    category: "Outdoor & Industrial",
    image: hlGajImg,
    heroImage: hlGajHeroImg,
    description:
      "The heavyweight titan of professional stadium illumination. HL GAJ delivers pinpoint precision, massive 360,000 lumen flux, 5° forward-tilted optical surface to minimize glare/backlight, modular die-cast thermal chimney cooling, and HDTV 4K/8K broadcast compliance with DMX512 and DALI controls.",
    specs: {
      "Power Range": "600W / 750W / 1200W / 1500W / 1800W / 2250W",
      "Luminous Flux": "102,000 lm – 360,000 lm",
      Efficiency: "160–170 Lm/W",
      LEDs: "CREE / OSRAM / NICHIA / LUMILEDS",
      Drivers: "Inventronics / Moso / Powerland / uPowerTek",
      "Input Voltage": "AC 200–480V / 198–440V / 180–528V",
      CRI: "Ra70 / 80 / 90 / TLCI > 90 (HDTV Broadcast ready)",
      CCT: "3000K / 4000K / 5000K / 5700K / 6500K",
      "Beam Angles": "10° / 20° / 40° / P55 sports precision optics",
      "Tilt & Aiming": "360° horizontal rotation & ±45° vertical tilt with 56-increment precision scale",
      Protection: "IP66 Ingress · IK08 Impact · 10kV / 20kV SPD",
      "Operating Temp": "-40°C to +50°C",
      Weight: "17kg (750W) – 25kg (1800W)",
      Warranty: "5 Years",
    },
    features: [
      "5° forward-tilted light surface eliminates backlight and spectator glare",
      "Modular die-cast thermal chimney architecture",
      "360° horizontal rotation and ±45° vertical aiming with 56-increment scale",
      "Broadcast TLCI >90 flicker-free 4K/8K HDTV sports ready",
      "DMX512, DALI, and 0-10V intelligent arena integration",
    ],
    highlightBadge: "Flagship Stadium Floodlight · Up to 2250W",
  },
  {
    slug: "hl-ultra-beam",
    code: "21",
    series: "HL ULTRA BEAM",
    name: "HL Ultra Beam Industrial High Bay",
    tagline: "3-in-1 warehouse & manufacturing high bay · 100W – 240W",
    category: "Outdoor & Industrial",
    image: hlUltraBeamImg,
    description:
      "A next-generation industrial high bay offering ultra-high 200 lm/W efficacy. Features field-selectable 3-in-1 DIP switches for wattage, CCT (3000K–6500K), and multi-angle beam distribution (60° to 120°), drastically simplifying warehouse facility inventory.",
    specs: {
      "Power Range": "100W · 150W · 200W · 240W (DIP Switch Tunable)",
      Efficiency: "200 Lm/W Ultra High Efficacy",
      "Lumen Flux": "20,000 lm – 48,000 lm",
      "Input Voltage": "AC 100–277V wide range",
      "Beam Angles": "60° – 120° field-selectable multi-angle lens",
      CRI: ">70 Ra (80 Ra optional)",
      CCT: "3000K – 6500K adjustable",
      Dimensions: "Φ335 × H127.7 mm",
      Weight: "1.75 kg ± 0.5 kg ultra-lightweight body",
      Protection: "IP65 · IK10",
      Warranty: "5 Years",
    },
    features: [
      "200 lm/W peak energy-saving efficacy",
      "3-in-1 field-selectable wattage, CCT and beam angle",
      "Ultra-slim lightweight body for rapid installation",
      "Passive thermal convection with zero driver overheat",
    ],
    highlightBadge: "200 Lm/W · 3-in-1 Switchable",
  },
];

export const catalogue: CatalogueItem[] = rawCatalogue;

// Exact 4 Featured Products requested by user:
// HL GAJ, HL ADITI, SANDHYA series, TEJAS series (Smart Pole with Camera + Solar Light without electricity)
export const featured: CatalogueItem[] = [
  catalogue.find((c) => c.slug === "hl-gaj")!,
  catalogue.find((c) => c.slug === "hl-aditi")!,
  catalogue.find((c) => c.slug === "sandhya")!,
  catalogue.find((c) => c.slug === "tejas-smart-pole")!,
];

export const products = featured;
export const solar = catalogue.filter((c) => c.category === "Solar" || c.category === "Hybrid Solar + AC");
export const imageUrls: Record<string, string> = Object.fromEntries(
  catalogue.map((c) => [c.slug, c.image]),
);

// B2B Dynamic Data Enricher for Premium Showcase
export const enrichProduct = (item: CatalogueItem): EnrichedProduct => {
  const isSolar = item.category === "Solar" || item.category === "Hybrid Solar + AC";

  const overview = `The HINDLED ${item.series} Series represents an engineering milestone in professional ${
    isSolar ? "autonomous solar-powered outdoor illumination" : "high-efficacy industrial & sports lighting systems"
  }. Specifically engineered to deliver elite-grade performance under extreme environmental stress, this platform integrates ${
    isSolar
      ? "state-of-the-art HPBC monocrystalline PV modules and balance-of-system LiFePO4 battery storage operating 100% without electricity"
      : "advanced sports-grade optics, 5° anti-glare geometry, and modular thermal convective chimney pathways"
  }. Designed to align with the rigid compliance demands of municipalities, commercial developers, and smart-city planners, the ${
    item.name
  } combines robust construction with zero maintenance overheads, offering an authentic utility-grade asset with long-term return on investment.`;

  const featuresDetails: KeyFeatureCard[] = isSolar
    ? [
        {
          title: "HPBC Monocrystalline PV",
          desc: `High-yield ${item.specs["Cell Type"] || "HPBC Mono"} modules offering ${item.specs["PV Faces"] || "multi-face"} solar capture and efficiency up to 26% for rapid solar recharging without electricity.`,
          icon: "Sun",
        },
        {
          title: "LiFePO4 Storage Matrix",
          desc: `High-capacity ${item.specs["Battery"] || "LiFePO4"} cells paired with balance-of-system thermal management, supporting 3000+ deep cycles.`,
          icon: "BatteryCharging",
        },
        {
          title: "Weatherproof Shell",
          desc: `Heavy-duty ADC12 die-cast aluminum or 6063 alloy housing with ${item.specs["Protection"] || "IP65 / IK08"} ratings against monsoons and high winds.`,
          icon: "ShieldAlert",
        },
        {
          title: "MPPT Energy Management",
          desc: "Smart microcontrollers featuring adaptive 4-step dimming schedules and integrated motion sensing for maximum battery autonomy.",
          icon: "Cpu",
        },
      ]
    : [
        {
          title: "High-Efficacy LED Engine",
          desc: `Delivers up to ${item.specs["Efficiency"] || item.specs["Efficacy"] || "170 lm/W"} light output utilizing elite ${item.specs["LEDs"] || item.specs["LED Source"] || "Nichia / CREE / OSRAM"} chip arrays.`,
          icon: "Lightbulb",
        },
        {
          title: "Thermal Chimney Cooling",
          desc: "Signature modular ventilation vents creating a passive convection chimney effect to draw heat away from vital electronics.",
          icon: "Thermometer",
        },
        {
          title: "Broadcast-Grade Controls",
          desc: `Native compatibility with ${item.specs["Control"] || "0-10V, DALI, and DMX512"} systems, ensuring flicker-free, HDTV-ready output.`,
          icon: "Cpu",
        },
        {
          title: "Advanced Durability",
          desc: `Ingress protected up to ${item.specs["Protection"] || "IP66 / IK10"} with 20kV surge suppression and marine-grade corrosion-resistant powder coat.`,
          icon: "ShieldCheck",
        },
      ];

  const applicationsList: ApplicationCard[] = isSolar
    ? [
        {
          title: "Smart Highways & Roadways",
          desc: "Off-grid highway illumination, tollways, and arterial roads requiring high uniformity and autonomous operation without electricity.",
          icon: "Milestone",
        },
        {
          title: "Municipalities & Plazas",
          desc: "Pedestrian corridors, municipal gardens, campuses, civic squares, and public business parks.",
          icon: "Building",
        },
        {
          title: "Perimeters & Security",
          desc: "High-security facility perimeters, transport hubs, and remote installations needing continuous surveillance and light without grid power.",
          icon: "Car",
        },
      ]
    : [
        {
          title: "Sports Stadiums & Arenas",
          desc: "Broadcast-compliant illumination for cricket, soccer, athletics, and regional multi-sport complexes.",
          icon: "Trophy",
        },
        {
          title: "Ports & High-Mast Sites",
          desc: "Long-throw projection for container terminals, dry docks, airport aprons, and highway interchanges.",
          icon: "Ship",
        },
        {
          title: "Heavy Manufacturing & Logistics",
          desc: "High-ceiling logistics warehouses, manufacturing bays, packaging depots, and distribution centers.",
          icon: "Warehouse",
        },
      ];

  const benefitsList: BusinessBenefit[] = isSolar
    ? [
        {
          title: "Zero Electricity Bills",
          desc: "100% solar independence removes reliance on municipal grids, eliminating lighting-related electrical utility bills permanently.",
        },
        {
          title: "Negligible Maintenance Loops",
          desc: "LiFePO4 battery balancing and long-life LEDs eliminate frequent servicing, cutting labor and maintenance costs.",
        },
        {
          title: "ESG & Carbon Neutrality",
          desc: "Provides verifiable carbon offsets, assisting municipal and commercial enterprises in achieving green-building and ESG objectives.",
        },
      ]
    : [
        {
          title: "Up to 65% Utility Reductions",
          desc: "High lumen-per-watt efficiency replaces legacy MH or HPS arrays, cutting facility power costs immediately.",
        },
        {
          title: "Unmatched Operational Lifespan",
          desc: "An L90/B10 rating beyond 100,000 hours ensures continuous luminaire operation, virtually eliminating lamp downtime.",
        },
        {
          title: "Enhanced Safety Compliance",
          desc: "High-uniformity, glare-controlled, and flicker-free lighting reduces accident rates in sports and industrial environments.",
        },
      ];

  return {
    ...item,
    overview,
    featuresDetails,
    applicationsList,
    benefitsList,
  };
};

export const enrichedCatalogue: EnrichedProduct[] = catalogue.map(enrichProduct);
export const enrichedFeatured: EnrichedProduct[] = featured.map(enrichProduct);
export const enrichedSolar: EnrichedProduct[] = solar.map(enrichProduct);

export type SolutionApplication = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  consultantNote: string;
  luxRecommendation: string;
  image: string;
  projectPic: string;
  category: "Solar" | "Outdoor & Industrial" | "Specialty" | "Hybrid Solar + AC";
  matchingSlugs: string[];
  keySpecs: { label: string; value: string }[];
};

export const solutionApplications: SolutionApplication[] = [
  {
    id: "solar-smart-poles",
    title: "Solar Smart Poles",
    subtitle: "Vertical PV Pole Grids & Zero-Grid Infrastructure",
    description: "Multi-functional vertical photovoltaic solar poles that harvest clean energy seamlessly from 360 degrees with integrated LiFePO4 battery banks — operating 100% without electricity.",
    consultantNote: "Vertical PV integration increases self-cleaning efficiency by 40% in dusty climates where horizontal panels gather heavy soot.",
    luxRecommendation: "20 - 40 Lux (Class M3/M4 Roadways)",
    image: soleraImg,
    projectPic: tejasSmartPoleImg,
    category: "Solar",
    matchingSlugs: ["solera", "zono-module", "tejas-smart-pole"],
    keySpecs: [
      { label: "Solar Capture", value: "360° 6-Sided Vertical PV" },
      { label: "Storage", value: "3000+ Cycle LiFePO4" },
      { label: "Power Source", value: "100% Without Electricity" },
    ],
  },
  {
    id: "sports-lighting",
    title: "Sports Lighting",
    subtitle: "High-Mast Arena & Stadium Floodlighting",
    description: "Broadcast-grade, flicker-free stadium illumination systems designed for HDTV 4K/8K recording with precision 5° tilted beam cut-off optics.",
    consultantNote: "Requires strict glare control (GR < 45) and color fidelity (TLCI > 90) to meet FIFA, ICC, and Olympic broadcast standards.",
    luxRecommendation: "750 - 2000 Lux (Class I / II Stadiums)",
    image: hlGajHeroImg,
    projectPic: hlGajImg,
    category: "Outdoor & Industrial",
    matchingSlugs: ["hl-gaj"],
    keySpecs: [
      { label: "Power Range", value: "600W – 2250W Luminaire Arrays" },
      { label: "Flicker Factor", value: "< 0.2% HDTV Compliant" },
      { label: "Surge Protection", value: "20kV / 10kA Integrated SPD" },
    ],
  },
  {
    id: "industrial-warehouse",
    title: "Industrial & Warehouse Lighting",
    subtitle: "High-Bay Luminaires & Heavy Manufacturing Bays",
    description: "Extreme ambient-temperature high-bay fixtures and linear luminaires engineered for logistics depots and assembly plants with up to 200 lm/W efficacy.",
    consultantNote: "Indian manufacturing facilities require heavy thermal dissipation (up to 50°C ambient) and high IP65 dust-proof ratings.",
    luxRecommendation: "300 - 500 Lux (Task & Assembly Lines)",
    image: hlUltraBeamImg,
    projectPic: hlUltraBeamImg,
    category: "Outdoor & Industrial",
    matchingSlugs: ["hl-ultra-beam"],
    keySpecs: [
      { label: "Efficacy", value: "200 lm/W Ultra High Efficiency" },
      { label: "Thermal Tolerance", value: "-40°C to +55°C Ambient" },
      { label: "Switching", value: "3-in-1 Power, CCT & Beam Selector" },
    ],
  },
  {
    id: "architectural-facade",
    title: "Architectural & Façade Lighting",
    subtitle: "Urban Landmarks, Monuments & Landscape Aesthetics",
    description: "Sculpted post-tops, wall-washers, and optical bollards crafted to highlight structural architecture and resort walkways without unsightly cabling.",
    consultantNote: "Architectural illumination must harmonize with warm thermal tones (2700K - 3000K) while providing weather durability.",
    luxRecommendation: "50 - 150 Lux (Façade Grazing & Accents)",
    image: zonoPostTopImg,
    projectPic: shivaImg,
    category: "Specialty",
    matchingSlugs: ["shiva", "zono-post-top", "vion-lightning", "sandhya", "hermes"],
    keySpecs: [
      { label: "Finish", value: "Anodized Architectural Aluminium" },
      { label: "Control", value: "Dusk-to-Dawn Smart Dimming" },
      { label: "Optical Polish", value: "Anti-Glare Louvred Optics" },
    ],
  },
  {
    id: "tunnel-road",
    title: "Tunnel & Road Lighting",
    subtitle: "Arterial Highways, Expressways & Subways",
    description: "Asymmetric roadway distributions and anti-blackhole optical lenses designed to provide continuous visual adaptation for highway drivers.",
    consultantNote: "Proper luminance transition zones are crucial in Indian expressways to eliminate the dangerous black hole effect.",
    luxRecommendation: "30 - 70 Lux (Luminance L1/L2 Compliant)",
    image: zonoStreetImg,
    projectPic: hlAditiImg,
    category: "Solar",
    matchingSlugs: ["zono-street", "hl-aditi", "solera"],
    keySpecs: [
      { label: "Beam Distribution", value: "Asymmetric Type II / Type III Roadway" },
      { label: "Lifespan", value: "> 100,000 Hours (L90B10)" },
      { label: "Dimming", value: "Autonomous 4-Step Solar Dimming" },
    ],
  },
  {
    id: "hybrid-solar-ac",
    title: "Hybrid Solar + AC Lighting",
    subtitle: "Continuous Dual-Power Intelligent Perimeters",
    description: "Intelligent hybrid systems combining solar PV generation with AC grid backup for 100% guaranteed year-round uptime.",
    consultantNote: "Ideal for monsoon-heavy zones and critical security perimeters where zero downtime is mandatory.",
    luxRecommendation: "100 - 300 Lux (Perimeter & Campus)",
    image: solarAcHybridImg,
    projectPic: hlPranjalImg,
    category: "Hybrid Solar + AC",
    matchingSlugs: ["solar-ac-hybrid", "hl-pranjal"],
    keySpecs: [
      { label: "Power Supply", value: "Solar Primary + AC Grid Backup" },
      { label: "Reliability", value: "365 Days Guaranteed Zero Downtime" },
      { label: "Energy Savings", value: "Up to 80% Reduction in Utility Draw" },
    ],
  },
];

export const advisorProfile = {
  name: "Mr. Brij Bhatia",
  title: "Chief Illumination Advisor & Infrastructure Engineering Lead",
  image: "/advisorimagefinal.jpeg",
  experienceYears: "45+ Years",
  bio: "An accomplished Electrical Engineer with over 45 years of experience in the lighting and energy industry, Mr. Brij Bhatia brings extensive expertise in leadership, innovation, business strategy, and sustainable lighting solutions. Having mentored numerous professionals into senior leadership roles, he is passionate about guiding talent, nurturing businesses, and sharing industry knowledge. His experience spans strategic consulting, industry standards, energy efficiency, skill development, and entrepreneurship making him a trusted mentor for professionals and emerging infrastructure businesses alike.",
  indianMarketAdvice: [
    {
      title: "1. 100% Solar Independence & Zero Electricity Grid Reliance",
      desc: "Indian infrastructure requires robust off-grid solutions that eliminate power outages, blackouts, and recurring utility bills. Our 6-sided vertical PV poles (SOLERA & ZONO) generate reliable 360° solar energy without drawing a single watt of conventional electricity.",
    },
    {
      title: "2. Voltage Surge & Grid Fluctuation Immunity",
      desc: "Indian power grids frequently suffer severe voltage spikes (up to 440V) and lightning strikes during monsoons. For AC and Hybrid systems, we mandate 10kV–20kV Surge Protection Devices (SPD) paired with 90V–305V wide AC drivers for zero field failures.",
    },
    {
      title: "3. Extreme Thermal Convection (50°C Ambient Tolerance)",
      desc: "Summer ambient temperatures in North & Central India exceed 45°C–48°C. Standard heatsinks overheat quickly. Our ADC12 die-cast aluminium bodies feature hollow thermal-chimney vents that keep junction temperatures low, guaranteeing 100,000+ hour operational lifespans.",
    },
    {
      title: "4. IP66 / IP67 Dust-Storm & Heavy Monsoon Sealing",
      desc: "From North Indian dust storms ('Andhi') to coastal monsoon downpours, fixtures require strict IP66/IP67 ingress sealing with tempered glass lenses to prevent internal dust coating and optical degradation.",
    },
    {
      title: "5. Smart Off-Grid Security & Integrated Sensors",
      desc: "Combining HD security surveillance cameras with solar area lighting (as in the TEJAS series) delivers continuous 24/7 security and illumination running completely without electricity, ideal for remote highways, sensitive perimeters, and smart campuses.",
    },
    {
      title: "6. BIS / IS Compliance & Local Spare Serviceability",
      desc: "Strict compliance with Indian Standards (IS 10322, IS 16102, IS 16106) ensures eligibility for government tenders (CPWD, NHAI, Smart City Mission) with guaranteed pan-India spare part availability.",
    },
  ],
};
