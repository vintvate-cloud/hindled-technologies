import p5 from "./catalogue/p5.jpg.asset.json";
import p7 from "./catalogue/p7.jpg.asset.json";
import p8 from "./catalogue/p8.jpg.asset.json";
import p9 from "./catalogue/p9.jpg.asset.json";
import p10 from "./catalogue/p10.jpg.asset.json";
import p11 from "./catalogue/p11.jpg.asset.json";
import p12 from "./catalogue/p12.jpg.asset.json";
import p13 from "./catalogue/p13.jpg.asset.json";
import p14 from "./catalogue/p14.jpg.asset.json";
import p15 from "./catalogue/p15.jpg.asset.json";
import p16 from "./catalogue/p16.jpg.asset.json";
import p17 from "./catalogue/p17.jpg.asset.json";
import p18 from "./catalogue/p18.jpg.asset.json";
import p19 from "./catalogue/p19.jpg.asset.json";
import p20 from "./catalogue/p20.jpg.asset.json";
import p21 from "./catalogue/p21.jpg.asset.json";
import p22 from "./catalogue/p22.jpg.asset.json";
import p24 from "./catalogue/p24.jpg.asset.json";
import p25 from "./catalogue/p25.jpg.asset.json";
import p26 from "./catalogue/p26.jpg.asset.json";
import p27 from "./catalogue/p27.jpg.asset.json";

export type CatalogueItem = {
  slug: string;
  code: string;
  series: string;
  name: string;
  tagline: string;
  category: "Solar" | "Outdoor & Industrial";
  image: string;
  description: string;
  specs: Record<string, string>;
  features?: string[];
};

const getProductImage = (slug: string, defaultUrl: string): string => {
  if (defaultUrl.startsWith("/") || defaultUrl.includes("__l5e")) {
    const images: Record<string, string> = {
      "hera": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600&auto=format&fit=crop",
      "apollo": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
      "juno-module": "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop",
      "juno-street": "https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600&auto=format&fit=crop",
      "juno-area-a": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=600&auto=format&fit=crop",
      "juno-area-b": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=600&auto=format&fit=crop",
      "juno-post-top": "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
      "juno-bollard": "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?q=80&w=600&auto=format&fit=crop",
      "mars-area": "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=600&auto=format&fit=crop",
      "mars-smart-pole": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&auto=format&fit=crop",
      "mercury": "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?q=80&w=600&auto=format&fit=crop",
      "ares": "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
      "phoenix": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop",
      "lightning": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=600&auto=format&fit=crop",
      "orion": "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=600&auto=format&fit=crop",
      "mars-wooden": "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop",
      "jupiter-wooden": "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop",
      "sp02": "https://images.unsplash.com/photo-1540747737956-37872f76d9ee?q=80&w=600&auto=format&fit=crop",
      "fl18": "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=600&auto=format&fit=crop",
      "hb12": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      "fl17": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop",
    };
    return images[slug] || "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop";
  }
  return defaultUrl;
};

const rawCatalogue: CatalogueItem[] = [
  {
    slug: "hera",
    code: "01",
    series: "HERA",
    name: "HERA-LED Solar Vertical Street Lights",
    tagline: "Integrated vertical PV pole modules · 100W – 600W",
    category: "Solar",
    image: p5.url,
    description:
      "Slim, all-in-one vertical photovoltaic modules engineered to wrap around the pole itself — turning the entire pole into a power-generating surface. HPBC mono cells across six faces deliver high yield with minimal footprint, while the TPE-clad body withstands harsh outdoor environments.",
    specs: {
      "Power Range": "100W – 600Wp",
      "Cell Type": "HPBC Mono · >26% efficiency",
      "PV Faces": "6 sided",
      Voltage: "18V / 36V",
      Glass: "3.2mm super-white tempered",
      "Junction Box": "IP66",
      "Wind Load": "57 m/s",
      "Operating Temp": "-40°C to 85°C",
      "Pole Diameter": "Φ60–Φ270 mm",
      Warranty: "5–10 years",
    },
    features: ["HPBC monocrystalline", "Salt spray 1000 hrs", "1000V DC system", "Six-face capture"],
  },
  {
    slug: "apollo",
    code: "02",
    series: "APOLLO",
    name: "Apollo Solar Light Solution",
    tagline: "High-performance solar LED luminaire · 20W – 150W",
    category: "Solar",
    image: p7.url,
    description:
      "A premium die-cast luminaire built for split solar street-light systems. Large internal cavity stores batteries, MPPT controller and motion sensor; ADC12 body cuts wind drag and resists dust build-up.",
    specs: {
      "Power Range": "20W – 150W",
      "LED Source": "Philips / Nichia",
      Efficacy: "150–190 lm/W",
      CCT: "4000K",
      CRI: ">70 Ra",
      Housing: "Die-cast ADC12 aluminium",
      Dimensions: "700 × 278 × 104 mm",
      Arm: "650 mm",
    },
    features: ["Anti-UV PC lens", "Tempered clear glass", "Integrated MPPT + battery", "Motion sensor"],
  },
  {
    slug: "juno-module",
    code: "03",
    series: "JUNO",
    name: "JUNO-LED Solar Vertical Module",
    tagline: "PV pole modules · 100W / 150W / 200W",
    category: "Solar",
    image: p8.url,
    description:
      "The JUNO vertical module powers the JUNO solar family — street lights, area lights, post-tops and bollards. Six-sided HPBC mono in a compact Φ26.5 cm body integrates directly onto poles from Φ60 to Φ168 mm.",
    specs: {
      "Power Range": "100 / 150 / 200 Wp",
      Voltage: "18V",
      Voc: "22V",
      "Cell Type": "HPBC Mono",
      Dimensions: "Φ26.5 × 81.5–128.6 cm",
      "Pole Fit": "Φ60–Φ168 mm",
      Weight: "8.5–13.5 kg",
      Connection: "Max 5 parallel",
    },
  },
  {
    slug: "juno-street",
    code: "04",
    series: "JUNO",
    name: "JUNO-LED Solar Street Light",
    tagline: "All-in-two solar street light · 6 – 12 m",
    category: "Solar",
    image: p9.url,
    description:
      "Roadway and highway solar street lighting on die-cast ADC12 fixtures with extruded aluminium poles. Single and twin (D) configurations scale from 6 m residential streets to 12 m arterial roads.",
    specs: {
      Heights: "6m · 8m · 10m · 12m",
      Power: "20W · 30W · 20W×2 · 30W×2",
      LEDs: "CREE / OSRAM / LUMILEDS / Nichia",
      Output: "110–150 LM/W",
      Distribution: "T2 / T3",
      CCT: "2700K – 6500K",
      Battery: "LiFePO4 40Ah / 50Ah 12.8V",
      "Solar Module": "200W / 400W HPBC",
      Cycles: "3000",
      Protection: "IP65 · IK08",
    },
    features: ["4-step adaptive dimming", "Direct bury / base-plate", "Cell-balanced LiFePO4", "Bird spike option"],
  },
  {
    slug: "juno-area-a",
    code: "05",
    series: "JUNO",
    name: "JUNO Solar Area Light – A",
    tagline: "Architectural area & campus light · 4 – 8 m",
    category: "Solar",
    image: p10.url,
    description:
      "A clean, contemporary area luminaire for plazas, campuses and commercial frontages. Aluminium 6063 body, Philips LEDs and T2 / T5 optics deliver uniform wide-area illumination with single or twin heads.",
    specs: {
      Heights: "4m · 6m · 8m",
      Power: "20W · 20W×2",
      LEDs: "Philips",
      Output: "150–170 LM/W",
      Distribution: "T2 / T5",
      Battery: "12.8V 45–50Ah LiFePO4",
      "Solar Module": "200W HPBC",
      Protection: "IP65 · IK08",
      Material: "Aluminium 6063",
    },
  },
  {
    slug: "juno-area-b",
    code: "06",
    series: "JUNO",
    name: "JUNO Solar Area Light – B",
    tagline: "Tapered-arm area light · 6 – 10 m",
    category: "Solar",
    image: p11.url,
    description:
      "The B variant carries the same JUNO platform on a sculpted, curved arm for taller 6–10 m installations — ideal for boulevards, parks and mixed-use developments where form matters as much as output.",
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
    slug: "juno-post-top",
    code: "07",
    series: "JUNO",
    name: "JUNO Solar Post-Top",
    tagline: "Decorative pedestrian post-top · 4 m",
    category: "Solar",
    image: p12.url,
    description:
      "A refined post-top for residential streets, pathways and landscaped grounds. The vertical solar module integrates seamlessly into the column, giving a tidy, glare-controlled light with full LiFePO4 autonomy.",
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
    slug: "juno-bollard",
    code: "08",
    series: "JUNO",
    name: "JUNO Solar Bollard Light",
    tagline: "Pathway & landscape bollard · 1140 mm",
    category: "Solar",
    image: p13.url,
    description:
      "A sculptural twisted-form bollard for walkways, gardens and entrances. Low 1.5W draw with a 25W × 2 HPBC module and 3.2V 16Ah cell delivers dependable all-night accent and wayfinding light.",
    specs: {
      Height: "1140 mm",
      Models: "ST-Jupiter-C1 · C2 · C3",
      Power: "1.5W",
      Output: "150–170 LM/W",
      Battery: "3.2V 16Ah LiFePO4",
      "Solar Module": "25W × 2 HPBC",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "mars-area",
    code: "09",
    series: "MARS",
    name: "Mars Solar LED Area Lights",
    tagline: "Adjustable-power area light · 3 – 5 m",
    category: "Solar",
    image: p14.url,
    description:
      "A versatile area-lighting platform with factory-set, site-adjustable power. Single, double-down and dual-side heads cover everything from pathways to large open yards.",
    specs: {
      Heights: "3 – 5 m",
      Configurations: "S · DD · DS",
      Power: "1–60W adjustable",
      Output: "150–170 LM/W",
      Distribution: "T2 / T5",
      Battery: "12.8V / 25.6V 42Ah LiFePO4",
      "Solar Module": "35–70W mono panels",
      Material: "Aluminium 6063",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "mars-smart-pole",
    code: "10",
    series: "MARS",
    name: "Mars-Solar Smart Pole",
    tagline: "Integrated smart pole platform · 6 – 10 m",
    category: "Solar",
    image: p15.url,
    description:
      "A multi-service smart pole combining solar area lighting with capacity for surveillance, sensors and connectivity hardware. Built on the JUNO area-light electrical platform with LiFePO4 storage.",
    specs: {
      Heights: "6 · 8 · 10 m",
      Power: "20W · 20W×2",
      Output: "150–170 LM/W",
      Battery: "12.8V 45–50Ah LiFePO4",
      "Solar Module": "200W HPBC",
      Material: "Aluminium 6063",
      Protection: "IP65 · IK08",
    },
    features: ["Smart-city ready", "Multi-sensor mount", "Connectivity bay", "Adaptive dimming"],
  },
  {
    slug: "mercury",
    code: "11",
    series: "MERCURY",
    name: "Mercury-LED Solar Area Lights",
    tagline: "Slim louvred column · 3 / 4 / 5 m",
    category: "Solar",
    image: p16.url,
    description:
      "A minimalist, louvred column light for parks, trails and premium landscapes. Three sizes (S/M/L) scale power and storage, with T5 optics for controlled, low-glare distribution.",
    specs: {
      Sizes: "S 3m · M 4m · L 5m",
      Power: "0–50W",
      LEDs: "CREE / OSRAM / Nichia / SEOUL",
      Output: "150–170 LM/W",
      Distribution: "T5",
      Battery: "12.8V / 25.6V 24–42Ah LiFePO4",
      "Solar Module": "100W / 120W / 240W mono",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "ares",
    code: "12",
    series: "ARES",
    name: "Ares-LED Solar Garden Light",
    tagline: "Classic lantern garden light · 3 – 8 m",
    category: "Solar",
    image: p17.url,
    description:
      "A traditional lantern-style solar garden light marrying heritage looks with modern monocrystalline solar and LiFePO4 storage. Suits gardens, courtyards and estate roads.",
    specs: {
      Heights: "3 – 8 m",
      Power: "5W – 100W",
      Output: "150–170 LM/W",
      Distribution: "T5",
      Battery: "42Ah 12.8V / 25.6V LiFePO4",
      "Solar Module": "100W – 1200W Mono",
      Material: "Aluminium 6063 / Q235",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "phoenix",
    code: "13",
    series: "PHOENIX",
    name: "Phoenix-LED Solar Recessed Underground",
    tagline: "In-ground drive-over solar marker",
    category: "Solar",
    image: p18.url,
    description:
      "A sealed, drive-over recessed luminaire in 2205 & 304 stainless steel for paths, driveways and plazas. Available as a pure-solar style or a solar + AC supplement type for higher output.",
    specs: {
      Variants: "Solar · Solar + AC",
      Power: "0.2W – 0.5W",
      Output: "40 lm · 90 lm",
      Battery: "3.7V 5Ah LiFePO4",
      "Solar Module": "1.2W",
      Housing: "2205 & 304 SS + PC + glass",
      Dimensions: "170 × 170 × 84 mm",
      Protection: "IP65 · IK08",
      "Operating Temp": "-40°C to +100°C",
    },
  },
  {
    slug: "lightning",
    code: "14",
    series: "LIGHTNING",
    name: "ST-Lightning Wall Wash",
    tagline: "Linear solar wall-wash · 1000 mm",
    category: "Solar",
    image: p19.url,
    description:
      "A 1-metre linear solar wall-wash with an adjustable-angle bracket and selectable wide / middle / narrow optics. Aluminium 6063 body with a 20W panel and 15Ah battery delivers ≥400 lm.",
    specs: {
      Power: "0–4W adjustable",
      Output: "≥400 lm",
      "Solar Panel": "20W",
      Battery: "15Ah 12.8V",
      Optics: "Wide / Middle / Narrow",
      CCT: "2700K–6500K",
      Dimensions: "L1000 × W150 × H50 mm",
      Protection: "IP65 · IK08",
      Autonomy: "3–5 rainy days",
    },
  },
  {
    slug: "orion",
    code: "15",
    series: "ORION",
    name: "Orion Recessed Wall Wash",
    tagline: "Recessed asymmetric wall-wash · S / M / L",
    category: "Solar",
    image: p20.url,
    description:
      "A flush, recessed solar wall-wash with asymmetric optics for steps, retaining walls and architectural niches. Three sizes scale output from 120 lm to 1200 lm.",
    specs: {
      Sizes: "S · M · L",
      Output: "120 / 300 / 1200 lm",
      Power: "0.8W · 1.6W · 5W",
      Battery: "2 / 4 / 8 Ah 12.8V",
      "Solar Panel": "4W · 10W · 30W",
      Optics: "Asymmetric",
      Housing: "Carbon steel + PC + glass",
      Protection: "IP65 · IK08",
      Autonomy: "4–8 rainy days",
    },
  },
  {
    slug: "mars-wooden",
    code: "16",
    series: "MARS WOODEN",
    name: "Mars-WD-LED Solar Area Lights",
    tagline: "Wooden-pole area light · 3 – 5 m",
    category: "Solar",
    image: p21.url,
    description:
      "The Mars platform in a natural wooden-pole finish for parks, waterfronts and eco-sensitive sites. Single (S-WD) and double-down (DD-WD) heads combine warm material aesthetics with high-output mono solar.",
    specs: {
      Heights: "3 – 5 m",
      Configurations: "S-WD · DD-WD",
      Power: "15W – 60W",
      LEDs: "Philips",
      Output: "150–170 LM/W",
      Battery: "25.6V 42Ah LiFePO4",
      "Solar Module": "100W – 560W Mono",
      "Pole Material": "Wooden",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "jupiter-wooden",
    code: "17",
    series: "JUPITER WOODEN",
    name: "Jupiter-WD-LED Solar Bollard",
    tagline: "Wooden-finish bollard · 500 – 1000 mm",
    category: "Solar",
    image: p22.url,
    description:
      "A warm, wood-grain bollard for garden paths, resorts and premium landscapes. Aluminium 6063 + carbon-steel core with symmetric optics, Philips/Seoul LEDs and a compact 4Ah LiFePo4 cell.",
    specs: {
      Heights: "500 – 1000 mm",
      Power: "1W – 10W",
      LEDs: "Philips / Seoul",
      Output: "≥100 LM/W",
      Optics: "Symmetric",
      Battery: "12.8V 4Ah LiFePO4",
      "Solar Module": "17W × 1 / 17W × 2 Mono",
      Material: "Aluminium 6063 + carbon steel / wooden",
      Protection: "IP65 · IK08",
    },
  },
  {
    slug: "sp02",
    code: "18",
    series: "SP02",
    name: "SP02 High-Mast Floodlight",
    tagline: "Heavy-duty round high-mast · 500W – 1200W",
    category: "Outdoor & Industrial",
    image: p24.url,
    description:
      "A heavy-duty round high-mast floodlight engineered for demanding large-area illumination — airports, ports, interchanges and logistics yards. Long-throw distribution with glare and spill control.",
    specs: {
      "Power Range": "500 / 600 / 750 / 800 / 1000 / 1200 W",
      "Input Voltage": "AC 100–500V",
      Efficiency: "150–175 Lm/W",
      "Lumen Flux": "64,000 – 186,000 lm",
      CRI: "Ra70 / 80 / 90 / TLCI90",
      CCT: "3000K – 6500K",
      Optics: "12° / 25° / 40° / 60°",
      Dimensions: "L398 × W406 × H395 mm (up to L535 × W527 × H488)",
      Weight: "9 – 15 kg",
      Protection: "IK08 / IK10 · IP66",
      Warranty: "5 years",
    },
    features: ["3-in-1 wattage adjustable", "3-in-1 CCT adjustable", "Dual-lens protection", "DIP-switch tuning"],
  },
  {
    slug: "fl18",
    code: "19",
    series: "FL18",
    name: "FL18 Stadium Floodlight",
    tagline: "High-power integrated square · 600W – 1800W",
    category: "Outdoor & Industrial",
    image: p25.url,
    description:
      "A high-power integrated square stadium floodlight engineered for professional performance with a cost-optimised project approach. Strong uniformity and glare control for mainstream tenders and upgrades.",
    specs: {
      "Power Range": "600 / 800 / 1000 / 1200 / 1500 / 1650 / 1800 W",
      "Input Voltage": "100–277Vac / 277–480Vac",
      Efficiency: "145–178 Lm/W",
      "Lumen Flux": "106,800 – 261,000 lm",
      CRI: "Ra70 / 80 / 90+",
      CCT: "3000K – 6500K",
      Optics: "10° / 15° / 20° / P60",
      Dimensions: "L576 × W623 × H504 mm",
      Weight: "19 kg",
      Protection: "IK08 / IK10 · IP66",
      Controls: "DMX512 · DALI · DALI-2 · 0-10V",
      Warranty: "5 years",
    },
    features: ["Sports-grade optics", "±180° aiming bracket", "Surge protection", "Service-friendly"],
  },
  {
    slug: "hb12",
    code: "20",
    series: "HB12",
    name: "HB12 Industrial High Bay",
    tagline: "Warehouse & manufacturing high bay · 100W – 240W",
    category: "Outdoor & Industrial",
    image: p26.url,
    description:
      "A 9-in-1 high-output industrial high bay luminaire for warehousing and manufacturing — three beam angles × three power levels × three CCT options in a single fixture.",
    specs: {
      "Power Range": "100 / 150 / 200 / 240 W",
      "Input Voltage": "220–240V / AC 100–277V",
      Efficiency: "140–200 Lm/W",
      "Lumen Flux": "14,000 – 48,000 lm",
      CRI: "Ra70 / 80+",
      CCT: "3000K – 6500K",
      "Beam Angles": "60° / 90° / 120° switchable",
      Dimensions: "Φ200–336 × 148 mm",
      Weight: "1.45 – 2.3 kg",
      Protection: "IK10 · IP65",
      Warranty: "5 years",
    },
    features: ["9-in-1 switchable", "Dimming-ready", "Lightweight die-cast", "OEM / ODM friendly"],
  },
  {
    slug: "fl17",
    code: "21",
    series: "FL17",
    name: "FL17 Sealed-Driver Floodlight",
    tagline: "Modular outdoor floodlight · 50W – 500W",
    category: "Outdoor & Industrial",
    image: p27.url,
    description:
      "Sealed-driver floodlight with thermal-chimney cooling. A modular outdoor luminaire that maintains driver reliability across the 50–500W range for facades, courts and perimeter lighting.",
    specs: {
      "Power Range": "50W – 500W",
      Protection: "IK10 · IP65",
      Warranty: "5 years",
      Cooling: "Thermal chimney",
      Construction: "Modular die-cast",
    },
    features: ["Sealed driver bay", "Thermal chimney cooling", "Modular service", "Long-life lumen maintenance"],
  },
];

export const catalogue: CatalogueItem[] = rawCatalogue.map(item => ({
  ...item,
  image: getProductImage(item.slug, item.image)
}));

export const featured = [
  catalogue.find((c) => c.slug === "fl18")!,
  catalogue.find((c) => c.slug === "sp02")!,
  catalogue.find((c) => c.slug === "juno-street")!,
  catalogue.find((c) => c.slug === "hb12")!,
  catalogue.find((c) => c.slug === "juno-bollard")!,
  catalogue.find((c) => c.slug === "mercury")!,
];

// legacy compat (kept so older imports don't break)
export const products = featured;
export const solar = catalogue.filter((c) => c.category === "Solar");
export const imageUrls: Record<string, string> = Object.fromEntries(
  catalogue.map((c) => [c.slug, c.image]),
);
