import p5_spec from "./catalogue/p5_spec.jpg";
import p8_spec from "./catalogue/p8_spec.jpg";
import p1 from "./catalogue/p1.jpg";
import venusImg from "./catalogue/venus.jpg";
import venusSpecImg from "./catalogue/venus_spec.jpg";
import dhruvImg from "./catalogue/dhruv.jpg";
import dhruvSpecImg from "./catalogue/dhruv_spec.jpg";

// High-resolution catalogue extracted images
import soleraImg from "./catalogue/solera_streetlight_hires.jpg";
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
import appSolarUrbanLuminaireImg from "./catalogue/app_solar_urban_luminaire.jpg";
import appArchitecturalLandscapeLuminaireImg from "./catalogue/app_architectural_landscape_luminaire.jpg";
import appSolarCameraPoleLuminaireImg from "./catalogue/app_solar_camera_pole_luminaire.jpg";
import appIndustrialLuminaireImg from "./catalogue/app_industrial_luminaire.jpg";
import appHybridLuminaireImg from "./catalogue/app_hybrid_luminaire.jpg";

export type CatalogueItem = {
  slug: string;
  code: string;
  series: string;
  name: string;
  tagline: string;
  category: "Solar" | "Outdoor and Sports Lighting" | "Industrial Lighting" | "Hybrid Solar + AC" | "Outdoor & Industrial" | "Specialty";
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
    name: "SOLERA-LED Solar Vertical Street Lights",
    tagline: "Integrated vertical solar PV pole modules · 100W – 600W",
    category: "Solar",
    image: soleraImg,
    description:
      "Slim, all-in-one vertical photovoltaic modules engineered to wrap around the pole itself — turning the entire cylindrical column into a 360° power-generating surface. HPBC mono cells across six faces deliver high yield with zero dust build-up, operating 100% without electricity.",
    specs: {
      "Model Range": "8 Models · HL-PV100-18 to HL-PV600-36",
      "Power Range": "100W – 600Wp",
      "Cell Type": "HPBC Monocrystalline · >26% efficiency",
      "PV Faces": "6-sided 360° solar capture",
      "Voltage": "18V / 36V",
      "Glass": "3.2mm super-white tempered glass",
      "Junction Box": "IP66 waterproof rated",
      "Wind Load": "57 m/s (Category 5 storm proof)",
      "Operating Temp": "-40°C to +85°C",
      "Pole Diameter": "Φ60–Φ270 mm",
      "Warranty": "5–10 years",
    },
    features: [
      "100% solar independence without electricity",
      "HPBC monocrystalline >26% efficiency",
      "Salt spray 1000 hrs corrosion resistance rating",
      "Seamless cylindrical aesthetics with no external panel tilt",
    ],
    specImage: p5_spec,
    highlightBadge: "Self-Cleaning · 360° Solar Wrap",
  },
  {
    slug: "hl-aditi",
    code: "02",
    series: "ADITI",
    name: "ADITI Solar Light Solution",
    tagline: "High-performance solar LED luminaire · 20W – 150W",
    category: "Solar",
    image: hlAditiImg,
    description:
      "A premium die-cast luminaire built for split solar street-light systems. The large internal cavity stores batteries, MPPT controller, and motion sensor, while the streamlined body cuts wind drag and resists dust build-up for sustained heat dissipation. Top-tier tempered glass and UV-resistant PC lenses guarantee long-lasting optical performance.",
    specs: {
      "Model Range": "HL-ADITI-20W to HL-ADITI-150W (9 Wattage Options)",
      "Power Range": "20W – 150W",
      "LED Source": "CREE / OSRAM / LUMILEDS / NICHIA / SEOUL",
      "Efficacy": "130–165 lm/W",
      "CCT": "3000K – 6500K",
      "CRI": ">70 Ra (80 Ra optional)",
      "Housing": "Die-cast ADC12 aluminium alloy",
      "Protection": "IP66 · IK08 / IK10",
      "Operating Temp": "-40°C to +60°C",
      "Energy Source": "100% Solar Powered Lighting",
    },
    features: [
      "Aerodynamic die-cast housing reduces wind resistance",
      "Large internal cavity houses battery, MPPT and sensors securely",
      "Specialised electrostatic-spraying exterior for high heat & humidity",
      "High-efficiency optics 130–165 lm/W with diverse roadway distributions",
    ],
    highlightBadge: "High Efficacy · 130–165 lm/W",
  },
  {
    slug: "zono-module",
    code: "03",
    series: "ZONO",
    name: "ZONO-LED Solar Vertical Module",
    tagline: "Vertical PV pole modules · 100W / 150W / 200W",
    category: "Solar",
    image: zonoModuleImg,
    description:
      "Integrated cylindrical vertical solar photovoltaic modules designed for rapid retrofitting and seamless column integration. With multi-faceted HPBC mono cells, modules capture sunlight from every azimuth without shading loss or wind resistance.",
    specs: {
      "Model Nos.": "HL-PV100-18 (100Wp) · HL-PV150-18 (150Wp) · HL-PV200-18 (200Wp)",
      "Power / Pmax": "100 Wp / 150 Wp / 200 Wp",
      "Voltage (Vmp)": "18V",
      "Open Circuit (Voc)": "22V",
      "Cell Type": "HPBC Monocrystalline (>26% efficiency)",
      "Dimensions": "Φ26.5 × 81.5 cm / 106.6 cm / 128.6 cm",
      "Pole Diameter Fit": "Φ60–Φ168 mm",
      "Weight": "8.5 kg / 11 kg / 13.5 kg",
      "Parallel Connection": "Max 5 modules in parallel",
      "Glass": "3.2mm tempered glass",
      "Protection": "IP66 Junction Box",
      "Warranty": "5–10 years",
    },
    features: [
      "Modular wrap adapts to any standard round pole Φ60–Φ168 mm",
      "Aerodynamic cylindrical form eliminates wind sail effects",
      "Vertical orientation sheds dust, bird droppings and snow naturally",
      "Parallel bus cabling allows stacking up to 5 modules (1000Wp+)",
    ],
    highlightBadge: "Cylindrical PV · Retrofit Ready",
  },
  {
    slug: "zono-street",
    code: "04",
    series: "ZONO",
    name: "ZONO-LED Solar Street Light",
    tagline: "All-in-two solar street light · 6 – 12 m",
    category: "Solar",
    image: zonoStreetImg,
    description:
      "An all-in-two solar street-light platform combining the ZONO vertical cylindrical PV module with high-performance luminaire heads for heights of 6 to 12 metres. Single-arm and double-arm configurations cover multi-lane roadways without grid cabling.",
    specs: {
      "Model Nos.": "HL-ZONO-SSL-20W · HL-ZONO-SSL-30W · HL-ZONO-SSL-D20W · HL-ZONO-SSL-D30W",
      "Pole Heights": "6 m · 8 m · 10 m · 12 m",
      "Power Consumption": "20W · 30W · 20W×2 · 30W×2",
      "LED Chips": "CREE / OSRAM / LUMILEDS / Nichia / SEOUL",
      "Output": "110–150 lm/W",
      "Distribution": "Type T2 / T3 Roadway Optics",
      "CCT": "3000K – 6500K",
      "Battery": "LiFePO4 40Ah / 50Ah 12.8V",
      "Solar Module": "200W / 400W HPBC Monocrystalline",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "All-in-two architecture integrates solar generator and luminaire seamlessly",
      "Long-throw Type II and Type III distributions for multi-lane avenues",
      "High-cycle LiFePO4 cells with smart dusk-to-dawn dimming",
      "Wind tunnel certified for hurricane-prone highway perimeters",
    ],
    highlightBadge: "Roadway Benchmark · 6–12m",
  },
  {
    slug: "zono-area-a",
    code: "05",
    series: "ZONO",
    name: "ZONO Solar Area Light – A",
    tagline: "Architectural area & campus light · 4 – 8 m",
    category: "Solar",
    image: zonoAreaAImg,
    description:
      "An architectural solar area light engineered for corporate plazas, university campuses, park promenades, and civic pathways. Pairs sleek column lines with high-efficiency Philips / Nichia LEDs and integrated cylindrical PV modules.",
    specs: {
      "Model Nos.": "HL-ZONO-SAL-20 · HL-ZONO-SAL-D20 · HL-ZONO-SAL-DD20",
      "Heights": "4000 mm · 6000 mm · 8000 mm",
      "Power Consumption": "20W · 20W×2",
      "LED Chips": "Philips / Nichia",
      "Output": "150–170 lm/W",
      "Distribution": "Type T2 / T5 Low-Glare",
      "Battery": "12.8V 45–50Ah LiFePO4",
      "Solar Module": "200W HPBC Monocrystalline",
      "Material": "Aluminium 6063",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "Sculptural architectural profile enhances daytime landscape aesthetics",
      "Zero light pollution with precision cut-off optics",
      "Lithium iron phosphate storage ensures 3000+ deep cycles",
      "Corrosion-proof marine grade anodised aluminium finish",
    ],
    highlightBadge: "Architectural Elegance · 4–8m",
  },
  {
    slug: "zono-area-b",
    code: "06",
    series: "ZONO",
    name: "ZONO Solar Area Light - B",
    tagline: "Tapered-arm area light · 6 – 10 m",
    category: "Solar",
    image: zonoAreaBImg,
    description:
      "A tapered-arm architectural solar light engineered for broader reach across expansive civic plazas, sports complexes, and arterial boulevard medians. Delivers extended outreach without visible cables or bulky panel brackets.",
    specs: {
      "Model Nos.": "HL-ZONO-SAL-20 · HL-ZONO-SAL-D20 · HL-ZONO-SAL-DD20",
      "Heights": "6000 mm · 8000 mm · 10000 mm",
      "Power Consumption": "20W · 20W×2",
      "LED Chips": "Philips / Nichia",
      "Output": "150–170 lm/W",
      "Distribution": "Type T2 / T5 Low-Glare",
      "Battery": "12.8V 45–50Ah LiFePO4",
      "Solar Module": "200W HPBC Monocrystalline",
      "Material": "Aluminium 6063",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "Extended outreach tapered arm covers broad pedestrian and roadway lanes",
      "High luminous output up to 170 lm/W with uniform surface lux",
      "Self-contained solar power system requires zero trenching",
      "Heavy-gauge extruded aluminium column with hidden internal fasteners",
    ],
    highlightBadge: "Tapered Outreach · 6–10m",
  },
  {
    slug: "zono-post-top",
    code: "07",
    series: "ZONO",
    name: "ZONO Solar Post-Top",
    tagline: "Decorative pedestrian post-top · 4 m",
    category: "Solar",
    image: zonoPostTopImg,
    description:
      "A decorative pedestrian post-top luminaire designed for 4-metre installations along municipal gardens, walking trails, waterfront piers, and hotel driveways. Features a crown luminaire powered entirely by vertical solar PV wrapping the column.",
    specs: {
      "Height": "4000 mm",
      "Model No.": "HL-ZONO-C1",
      "Power": "20W",
      "Output": "150–170 lm/W",
      "Distribution": "Type T2 / T5 Low-Glare",
      "Battery": "12.8V 45Ah LiFePO4",
      "Solar Module": "200W HPBC Monocrystalline",
      "Material": "Aluminium 6063",
      "System Colour": "Black / Dark Grey / Customised finishes",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "Pedestrian-scale 4m column creates intimate, safe park illumination",
      "360° uniform circular distribution without dark shadows",
      "Self-powered architecture eliminates electric shock risk near public footpaths",
      "Vandal-resistant construction with concealed access panel",
    ],
    highlightBadge: "Pedestrian Crown · 4m",
  },
  {
    slug: "shiva",
    code: "08",
    series: "SHIVA",
    name: "Shiva Solar Bollard Light",
    tagline: "Pathway & landscape bollard · 1140 mm",
    category: "Solar",
    image: shivaImg,
    description:
      "A sculptural twisted-form architectural solar bollard designed for luxury villa pathways, resort gardens, golf clubs, and hotel entrances. Low-draw high-efficiency LED engine paired with integrated cylindrical mono PV and LiFePO4 cell delivers dependable all-night illumination.",
    specs: {
      "Height": "1140 mm",
      "Model Nos.": "HL-SHIVA-C1 · HL-SHIVA-C2 · HL-SHIVA-C3",
      "Power": "1.5W / 3W / 4.5W",
      "Output": "150–170 lm/W",
      "Battery": "3.2V 16Ah LiFePO4",
      "Solar Module": "25W × 2 HPBC Monocrystalline",
      "Material": "Aluminium 6063",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "Twisted sculptural geometry casts striking architectural lighting pools",
      "Subtle low-glare downlight protects natural night-sky ambience",
      "Zero trenching, cabling, or landscape disruption during installation",
      "Solid aluminium 6063 construction with marine-grade powder coating",
    ],
    highlightBadge: "Sculptural Bollard · 1140mm",
  },
  {
    slug: "tejas-column",
    code: "09",
    series: "TEJAS",
    name: "TEJAS Solar LED Area Lights",
    tagline: "Adjustable-power area light · 3 – 5 m",
    category: "Solar",
    image: tejasColumnImg,
    description:
      "A versatile architectural solar area column featuring site-adjustable output from 15W to 60W. Offered in Single Head, Double Down, and Dual Side configurations to illuminate parks, commercial courtyards, and institutional pathways with bespoke lux levels.",
    specs: {
      "Heights": "3000 / 3500 mm · 4000 / 4500 / 5000 mm",
      "Configurations": "HL-TEJAS-S-30/-35 (Single) · HL-TEJAS-DD-40/-45/-50 (Double Down) · HL-TEJAS-DS-40/-45/-50 (Dual Side)",
      "Power": "15W – 60W site-adjustable",
      "Output": "150–170 lm/W",
      "Battery": "12.8V / 25.6V 42Ah LiFePO4",
      "Solar Module": "35W – 70W Monocrystalline",
      "Pole Material": "Aluminium 6063 / Q235 steel",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "Selectable wattage dial matches site lighting criteria precisely",
      "Single-head and dual-head configurations for balanced square illumination",
      "Integrated vertical PV capture charges even under overcast skies",
      "Heavy-duty internal battery pack with intelligent charge controller",
    ],
    highlightBadge: "Adjustable Power · 3–5m",
  },
  {
    slug: "tejas-smart-pole",
    code: "10",
    series: "TEJAS",
    name: "TEJAS-Solar Smart Pole",
    tagline: "Integrated smart pole platform · 6 – 10 m",
    category: "Solar",
    image: tejasSmartPoleImg,
    description:
      "A multi-service smart pole combining solar area lighting with capacity for surveillance, sensors, and connectivity hardware. Built on the ZONO area-light electrical platform with LiFePO4 storage and adaptive dimming. Operates 100% off-grid without electricity for autonomous 24/7 security.",
    specs: {
      "Heights": "6000 mm · 8000 mm · 10000 mm",
      "Model Nos.": "HL-TEJAS-20 · HL-TEJAS-D20 · HL-TEJAS-DD20",
      "Platform": "ZONO area-light electrical platform with LiFePO4 storage",
      "Integration Capacity": "Surveillance camera, IoT sensors & wireless transmission",
      "Power Source": "100% Off-Grid Without Electricity",
      "Solar Harvesting": "360° cylindrical vertical HPBC monocrystalline wrap",
      "Battery Bank": "Heavy-duty LiFePO4 battery (3000+ deep cycles)",
      "Camera Function": "24/7 autonomous wireless HD CCTV recording & cloud feed",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "100% off-grid operation eliminates vulnerable perimeter power cables",
      "Autonomous 24/7 CCTV surveillance powered completely by sunlight",
      "Cylindrical 360° PV wrap captures daylight from all angles",
      "Heavy-duty LiFePO4 bank guarantees continuous multi-day autonomy",
    ],
    highlightBadge: "Smart CCTV Pole · 6–10m",
  },
  {
    slug: "hermes",
    code: "11",
    series: "HERMES",
    name: "HERMES-LED Solar Area Lights",
    tagline: "Slim column area light · 3 / 4 / 5 m",
    category: "Solar",
    image: hermesImg,
    description:
      "A minimalist, slender architectural solar column designed for upscale residential communities, medical campuses, and boutique hotel entries. High-efficiency vertical solar cells are inset flush into the profile, preserving pure rectilinear geometry.",
    specs: {
      "Heights": "3000 mm (S) · 4000 mm (M) · 5000 mm (L)",
      "Model Nos.": "HL-HERMES-S · HL-HERMES-M · HL-HERMES-L",
      "Power": "20W (S) · 30W (M) · 40W (L)",
      "Output": "150–170 lm/W",
      "Distribution": "Type T2 / T5 Low-Glare",
      "Battery": "12.8V 45Ah / 60Ah LiFePO4",
      "Solar Module": "100W – 160W Monocrystalline",
      "Pole Material": "Aluminium 6063",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "Slender rectilinear column harmonises with contemporary architecture",
      "Zero panel protrusion for pristine visual sightlines",
      "Uniform downward illumination eliminates upward light trespass",
      "Anodised and architectural powder coated for harsh salt air resilience",
    ],
    highlightBadge: "Minimalist Column · 3–5m",
  },
  {
    slug: "sandhya",
    code: "12",
    series: "SANDHYA",
    name: "SANDHYA-LED Solar Garden Light",
    tagline: "Classic lantern garden light · 3 – 8 m",
    category: "Solar",
    image: sandhyaImg,
    description:
      "A classic heritage lantern luminaire combining timeless architectural nostalgia with state-of-the-art vertical solar PV columns. Delivers rich, warm 360° illumination for palace hotels, royal promenade avenues, historic town squares, and luxury botanic gardens.",
    specs: {
      "Heights": "3000 mm – 8000 mm",
      "Model No.": "HL-SANDHYA",
      "Power": "30W / 60W / 100W",
      "Output": "150–170 lm/W",
      "Distribution": "Type T5",
      "Battery": "42Ah 12.8V / 25.6V LiFePO4 (3000+ deep cycles)",
      "Solar Module": "100W – 1200W Monocrystalline",
      "Fixture Material": "Aluminium 6063 / Q235 steel",
      "System Colour": "Black / Silver / Customised finishes",
      "Protection": "IP65 / IP66 · IK08",
      "Autonomy": "Up to 3 consecutive rainy nights",
      "Warranty": "5–10 years",
    },
    features: [
      "Heritage architectural lantern head mounted on vertical solar column",
      "360° warm atmospheric ambient lighting with modern LED efficiency",
      "Integrated vertical solar generator eliminates unsightly angled panels",
      "Built for heritage promenades, botanical sanctuaries, and resort lawns",
    ],
    highlightBadge: "Heritage Lantern · 3–8m",
  },
  {
    slug: "venus",
    code: "13",
    series: "VENUS",
    name: "VENUS-LED Solar Recessed Underground Lights",
    tagline: "In-ground drive-over solar marker",
    category: "Solar",
    image: venusImg,
    specImage: venusSpecImg,
    description:
      "A sealed, drive-over recessed solar luminaire in marine-grade 2205 & 304 stainless steel with impact-resistant tempered glass for walkways, driveways, civic plazas, and airport taxiways. Available as a pure-solar style or solar + AC supplement type for higher output, both rated for extreme temperature swings.",
    specs: {
      "Model Nos.": "HL-VENUS-HL (Pure Solar) · HL-VENUS-HL-AC (Solar + AC Supplement)",
      "Power Consumption": "Preset 0.2W (Pure Solar) · Preset 0–0.5W (Solar + AC)",
      "Battery Capacity": "5Ah 3.7V (3.7V 5Ah LiFePO4)",
      "Solar Panel Power": "Pmax 1.2W Monocrystalline",
      "Working Mode / Output": "MAX > 40 lm (8 days lighting autonomy) · MAX > 90 lm (Solar + AC)",
      "CCT": "2700K ~ 6500K",
      "Protection": "IP65 Waterproof · IK08 Drive-Over Rated",
      "Housing Material": "2205 & 304 Stainless Steel + PC + Tempered Glass",
      "Housing Colour": "Silver",
      "Dimensions": "170 × 170 × 84 mm (Installed: 140 mm body, 72 mm depth, 3 mm surface flange)",
      "Operating Temp": "-20°C to +45°C & -40°C to +100°C",
      "Warranty": "5–10 years",
    },
    features: [
      "Heavy-duty drive-over 2205 & 304 stainless steel construction",
      "Pure solar and solar + AC supplement configuration options",
      "Up to 8 days of rainy day lighting autonomy on 5Ah LiFePO4",
      "Extreme operating temperature envelope from -40°C to +100°C",
    ],
    highlightBadge: "Drive-Over Rated · 2205 & 304 SS",
  },
  {
    slug: "vion-lightning",
    code: "14",
    series: "VION LIGHTING",
    name: "VION Lightning Adjustable-Angle Wall Wash Lights",
    tagline: "Linear solar wall-wash · 1000 mm",
    category: "Solar",
    image: vionLightningImg,
    description:
      "A 1-metre linear solar wall-wash with an adjustable-angle bracket and selectable wide, middle, and narrow optics. Heavy-duty Aluminium 6063 body with an integrated 20W panel and 15Ah battery delivers ≥400 lm for exterior building façades, signboards, and feature boundary walls.",
    specs: {
      "Model Nos.": "HL-VION-S-30/-35 · HL-VION-S-40/-45/-50 · HL-VION-DD-40/-45/-50 · HL-VION-DS-40/-45/-50",
      "Luminaire Type": "1-metre linear solar wall-wash with adjustable-angle bracket",
      "Power": "0–4W adjustable (20W Solar Luminaire)",
      "Output": "≥400 lm for facades and feature walls",
      "Solar Panel": "20W Integrated Monocrystalline",
      "Battery": "15Ah 12.8V LiFePO4",
      "Optics": "Selectable wide / middle / narrow optics",
      "CCT": "3000K – 6500K",
      "Housing": "Aluminium 6063 body",
      "Dimensions": "L 1000 × W 150 × H 50 mm",
      "Protection": "IP65 · IK08",
      "Autonomy": "3–5 rainy days backup",
      "Warranty": "5–10 years",
    },
    features: [
      "Adjustable-angle mounting bracket allows precision vertical beam aiming",
      "Tri-beam optic selector (wide / medium / narrow) on fixture",
      "Integrated 20W high-efficiency monocrystalline solar collector",
      "15Ah LiFePO4 storage battery ensures 3–5 rainy days backup",
    ],
    highlightBadge: "Adjustable Angle · Façade Grazing",
  },
  {
    slug: "dhruv",
    code: "15",
    series: "DHRUV",
    name: "DHRUV LED Solar Recessed Wall Wash Lights",
    tagline: "Recessed asymmetric wall-wash · S / M / L",
    category: "Solar",
    image: dhruvImg,
    specImage: dhruvSpecImg,
    description:
      "A flush, recessed solar wall-wash with asymmetric optics engineered for exterior steps, boundary retaining walls, and architectural niches. Carbon-steel housing with PC + glass face; three precision sizes scale output from 120 lm to 1200 lm without conduit wiring.",
    specs: {
      "Model Nos.": "HL-DHRUV-S · HL-DHRUV-M · HL-DHRUV-L",
      "Sizes & Cut-Out": "S (205mm cut-out, 89mm deep) · M (305mm cut-out) · L (540mm cut-out)",
      "LED Output": "MAX > 120 lm (S) · MAX > 300 lm (M) · MAX > 1200 lm (L)",
      "Power Consumption": "0.8W (S) · 1.6W (M) · 5W (L)",
      "Battery Capacity": "2Ah (S) · 4Ah (M) · 8Ah (L) 12.8V LiFePO4",
      "Solar Panel Power": "Pmax 4W (S) · Pmax 10W (M) · Pmax 30W (L) Mono",
      "Working Mode": "HLD – 4-step smart adaptive dimming",
      "Autonomy": "4–8 rainy days backup",
      "Photometrics": "Asymmetric step & niche grazing",
      "CCT": "2700K – 6500K",
      "IP & IK Protection": "IP65 & IK08",
      "Housing Material": "Carbon Steel + PC + Tempered Glass",
      "Housing Colour": "Black",
      "Dimensions": "L 264 × W 198 × H 93 mm (S) · L 385 × W 283 × H 93 mm (M) · L 600 × W 365 × H 93 mm (L)",
      "Warranty": "5–10 years",
    },
    features: [
      "Flush recessed installation without conduit trenching or wiring",
      "Asymmetric optical beam grazing downward with zero driver glare",
      "Three precision chassis scales from 120 lm to 1200 lm",
      "Heavy-duty carbon steel shell rated IP65 and IK08 impact resistant",
    ],
    highlightBadge: "Recessed Wall-Wash · S / M / L",
  },
  {
    slug: "mangal-stambh-wooden",
    code: "16",
    series: "MANGAL STAMBH",
    name: "MANGAL STAMBH-WD-LED Solar Area Lights",
    tagline: "Wooden-pole area light · 3 – 5 m",
    category: "Solar",
    image: mangalStambhWoodenImg,
    description:
      "A distinguished wooden-pole solar area lighting platform crafted for luxury resorts, eco-parks, waterfront promenades, and heritage institutions. Natural timber and heavy-duty aluminium construction provided as optional choices, combining organic aesthetic warmth with robust monocrystalline PV capture and precision Philips LED optics.",
    specs: {
      "Heights": "3000 mm ~ 5000 mm",
      "Configurations": "HL-MANGAL-S-WD (Single Head) · HL-MANGAL-DD-WD (Double Down)",
      "Power": "15W – 60W",
      "LEDs": "Philips Lumileds precision optics",
      "Output": "150–170 lm/W",
      "Battery": "25.6V 42Ah LiFePO4",
      "Solar Module": "100W – 560W Monocrystalline",
      "Pole Material": "Wooden (treated timber) / Aluminium 6063 optional",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "Natural timber pole blends seamlessly with forest and luxury landscape settings",
      "Philips Lumileds optical package delivering 150–170 lm/W",
      "High-capacity 25.6V 42Ah LiFePO4 battery pack",
      "Available in single-luminaire and double-down configurations",
    ],
    highlightBadge: "Natural Timber · 3–5m",
  },
  {
    slug: "satya-wooden",
    code: "17",
    series: "SATYA WOODEN",
    name: "SATYA-WD-LED Solar Bollard Lights",
    tagline: "Wooden-finish bollard · 500 – 1000 mm",
    category: "Solar",
    image: satyaWoodenImg,
    description:
      "An architectural wooden-finish solar bollard crafted for botanical gardens, resort footpaths, private driveways, and residential landscape borders. Blends natural wood warmth with a robust Aluminium 6063 core, 360° low-glare optics, and high-efficiency mono PV.",
    specs: {
      "Heights": "500 mm ~ 1000 mm",
      "Model No.": "HL-SATYA-WD",
      "Power": "1W – 10W",
      "LEDs": "Philips / Seoul",
      "Output": "≥100 lm/W",
      "Optics": "Symmetric 360° Low Glare",
      "Battery": "12.8V 4Ah LiFePO4",
      "Solar Module": "17W × 1 / 17W × 2 Monocrystalline",
      "Pole Material": "Aluminium 6063 + carbon steel / wooden",
      "Pole Colour": "Bronze / black / wood grain — customised finishes",
      "Protection": "IP65 · IK08",
      "Warranty": "5–10 years",
    },
    features: [
      "Architectural wooden exterior with corrosion-proof internal metal spine",
      "360° uniform circular pedestrian-level illumination",
      "Integrated monocrystalline PV cap with LiFePO4 battery cell",
      "Rapid installation without soil trenching or conduit damage",
    ],
    highlightBadge: "Wood Finish · 500–1000mm",
  },
  {
    slug: "solar-ac-hybrid",
    code: "18",
    series: "VOLTAGE",
    name: "Voltage Solar + AC Power LED Light Solution",
    tagline: "Intelligent dual-power hybrid area light · 20W – 50W",
    category: "Hybrid Solar + AC",
    image: solarAcHybridImg,
    description:
      "An intelligent hybrid luminaire combining solar photovoltaic energy harvesting with AC grid backup. Features smart priority logic: runs 100% on clean solar energy when available, and automatically supplements from AC grid during prolonged monsoons or heavy cloud cover.",
    specs: {
      "Power Range": "20W / 30W / 50W",
      "Dual System": "Solar PV Primary + AC 100–277V Grid Backup",
      "Light Efficiency": "100–160 lm/W",
      "Lumen": "2,000 lm (20W) / 3,000 lm (30W) / 5,000 lm (50W)",
      "CCT": "3000K – 6500K",
      "Switching Logic": "Automatic Solar Priority with Zero Glitch",
      "Battery": "3.2V 10Ah / 15Ah / 20Ah LiFePO4 Energy Bank",
      "Solar Module": "High-Efficiency Monocrystalline",
      "Protection": "IP65 / IP66 · IK08",
      "Certification": "CE · RoHS · CB",
    },
    features: [
      "Smart solar-first priority energy management",
      "AC grid backup eliminates any downtime during extreme monsoons",
      "Saves up to 80% grid power bills",
      "Ideal for critical security perimeters and civic infrastructure",
    ],
    highlightBadge: "Dual Power · Solar + AC Grid",
  },
  {
    slug: "hl-gaj",
    code: "19",
    series: "GAJ",
    name: "GAJ High-Power Stadium Floodlight",
    tagline: "Professional sports & stadium floodlight · 600W – 2250W",
    category: "Outdoor and Sports Lighting",
    image: hlGajImg,
    description:
      "A high-power integrated square stadium floodlight engineered for professional arena sports and large outdoor facilities. Targets mainstream tenders and stadium upgrades needing strong uniformity, low glare, and HDTV broadcast compliance (TLCI > 90) with modular cooling and 10kV surge immunity.",
    specs: {
      "Model Nos.": "HL-750W · HL-1500W · HL-2250W",
      "Power Range": "600W / 750W (HL-750W) · 1200W / 1500W (HL-1500W) · 1800W / 2250W (HL-2250W)",
      "Luminous Flux": "102,000 lm – 360,000 lm",
      "Efficiency": "160–170 lm/W (@5000K, Ra70)",
      "LED Source": "Osram 3737 / Lumileds 5050",
      "Drivers": "Inventronics / Moso / Powerland / uPowerTek",
      "Input Voltage": "AC 200–480V / 198–440V / 180–528V",
      "CRI": "Ra70 / 80 / 90 / TLCI > 90 (HDTV Broadcast ready)",
      "CCT": "3000K / 4000K / 5000K / 5700K / 6500K",
      "Beam Angles": "10° / 20° / 40° / P55 sports precision optics",
      "Tilt & Aiming": "360° horizontal rotation & ±45° vertical tilt with 56-increment scale",
      "Surge Protection": "10kV / 20kV SPD",
      "Control": "0-10V / DMX512 / DALI / RGB / RGBW",
      "Protection": "IP66 Ingress · IK08 Impact",
      "Operating Temp": "-40°C to +50°C",
      "Weight": "17 – 35 kg (gross weight)",
      "Warranty": "5 Years",
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
    code: "20",
    series: "ULTRA BEAM",
    name: "Ultra Beam Industrial High Bay",
    tagline: "Warehouse & manufacturing high bay · 100W – 240W",
    category: "Industrial Lighting",
    image: hlUltraBeamImg,
    description:
      "A next-generation industrial high bay offering ultra-high 140–200 lm/W efficacy. Features field-selectable 3-in-1 DIP switches for wattage (100W–240W), CCT (3000K–6500K), and multi-angle beam distribution (60° / 90° / 120°), drastically simplifying warehouse facility inventory.",
    specs: {
      "Model Nos.": "HL12-100W · HL12-150W · HL12-200W · HL12-240W",
      "Power Range": "100W · 150W · 200W · 240W (DIP Switch Tunable)",
      "Light Efficiency": "140–200 lm/W Ultra High Efficacy",
      "Lumen Flux": "14,000 lm – 48,000 lm (40,000 lm nominal at 200W)",
      "Input Voltage": "220–240V / AC 100–277V wide range",
      "Beam Angles": "60° / 90° / 120° (switchable — 3 beam × 3 CCT power × 3)",
      "CRI": "Ra70 / 80+",
      "CCT": "3000K – 6500K adjustable",
      "Dimensions": "Φ200×148 mm (100W) · Φ280×148 mm (150W) · Φ300×148 mm (200W) · Φ336×151 mm (240W)",
      "Net Weight": "1.45 kg – 2.3 kg",
      "Protection": "IK10 Impact · IP65 Waterproof · Dimming",
      "Warranty": "5 Years",
    },
    features: [
      "200 lm/W peak energy-saving efficacy",
      "3-in-1 field-selectable wattage, CCT and beam angle",
      "Ultra-slim lightweight body for rapid installation",
      "Passive thermal convection with zero driver overheat",
    ],
    highlightBadge: "200 Lm/W · 3-in-1 Switchable",
  },
  {
    slug: "hl-pranjal",
    code: "21",
    series: "PRANJAL",
    name: "PRANJAL Solar + AC Hybrid Garden Light",
    tagline: "Dual-power architectural garden luminaire · 20W – 50W",
    category: "Hybrid Solar + AC",
    image: hlPranjalImg,
    description:
      "A refined hybrid garden luminaire designed for continuous, uninterrupted park and campus lighting. Harnesses solar energy for primary operation while keeping an active AC link on standby for 100% guaranteed year-round uptime.",
    specs: {
      "Power Range": "20W / 50W",
      "Voltage": "Solar DC + AC 100–277V Hybrid",
      "Lumen": "2,000 lm (20W) / 5,000 lm (50W)",
      "CCT": "3000K – 6500K",
      "Controller": "PWM + AC 2-in-1 Dual Controller · Auto switch below 20% battery",
      "Material": "Die-cast Aluminium + Anti-UV PC / PMMA (3 years anti-yellowing)",
      "Battery": "3.2V 10Ah (20W) / 3.2V 20Ah (50W) LiFePO4",
      "Protection": "IP65 · IK08 · 4kV Surge Protection",
    },
    features: [
      "Uninterrupted 365-day operation",
      "Architectural low-glare aesthetic",
      "Automatic solar/grid load switching",
      "Maintenance-free design",
    ],
    highlightBadge: "New Catalogue Product · Hybrid Garden",
  },
];export const catalogue: CatalogueItem[] = rawCatalogue;

// Featured Products requested by user:
// HL GAJ, HL ADITI, SANDHYA, TEJAS, SHIVA, MANGAL STAMBH WOODEN, VION LIGHTNING, ZONO POST-TOP
export const featured: CatalogueItem[] = [
  catalogue.find((c) => c.slug === "hl-gaj")!,
  catalogue.find((c) => c.slug === "hl-aditi")!,
  catalogue.find((c) => c.slug === "sandhya")!,
  catalogue.find((c) => c.slug === "tejas-smart-pole")!,
  catalogue.find((c) => c.slug === "shiva")!,
  catalogue.find((c) => c.slug === "mangal-stambh-wooden")!,
  catalogue.find((c) => c.slug === "vion-lightning")!,
  catalogue.find((c) => c.slug === "zono-post-top")!,
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
          desc: `Heavy-duty ADC12 die-cast aluminum and 6063 alloy housing with ${item.specs["Protection"] || "IP65 / IK08"} ratings against monsoons and high winds.`,
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
          desc: `Ingress protected up to ${item.specs["Protection"] || "IP66 / IK10"} with 20kV surge suppression and corrosion-resistant powder coat.`,
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
  category: CatalogueItem["category"];
  matchingSlugs: string[];
  keySpecs: { label: string; value: string }[];
};

export const solutionApplications: SolutionApplication[] = [
  {
    id: "solar-urban-lighting",
    title: "Solar Urban Lighting",
    subtitle: "Expressways, Arterial Avenues & Urban Roadways",
    description: "Asymmetric roadway distributions and anti-blackhole optical lenses designed to provide continuous visual adaptation for highway drivers.",
    consultantNote: "Proper luminance transition zones are crucial in arterial expressways to eliminate the dangerous black hole effect.",
    luxRecommendation: "30 - 70 Lux (Luminance L1/L2 Compliant)",
    image: appSolarUrbanLuminaireImg,
    projectPic: hlAditiImg,
    category: "Solar",
    matchingSlugs: ["solera", "zono-street", "hl-aditi", "zono-module"],
    keySpecs: [
      { label: "Beam Distribution", value: "Asymmetric Type II / Type III Roadway" },
      { label: "Lifespan", value: "> 100,000 Hours (L70B50)" },
      { label: "Dimming", value: "Autonomous 4-Step Solar Dimming" },
    ],
  },
  {
    id: "architectural-landscape",
    title: "Architectural & Landscape Lighting",
    subtitle: "Urban Landmarks, Monuments & Landscape Aesthetics",
    description: "Sculpted post-tops, wall-washers, and optical bollards crafted to highlight structural architecture, landscapes, and resort walkways without unsightly cabling.",
    consultantNote: "Architectural and landscape illumination must harmonize with warm thermal tones (2700K - 3000K) while providing weather durability.",
    luxRecommendation: "50 - 150 Lux (Landscape Grazing & Accents)",
    image: appArchitecturalLandscapeLuminaireImg,
    projectPic: shivaImg,
    category: "Specialty",
    matchingSlugs: [
      "sandhya",
      "shiva",
      "zono-post-top",
      "hermes",
      "vion-lightning",
      "zono-area-a",
      "zono-area-b",
      "tejas-column",
      "mangal-stambh-wooden",
      "satya-wooden",
      "venus",
      "dhruv",
    ],
    keySpecs: [
      { label: "Material", value: "Aluminium 6063" },
      { label: "Control", value: "Dusk-to-Dawn Smart Dimming" },
      { label: "Optical Polish", value: "Low-Glare Louvred Optics" },
    ],
  },
  {
    id: "solar-camera-poles",
    title: "Solar Camera Poles",
    subtitle: "Vertical PV Pole Grids & Autonomous Off-Grid Surveillance",
    description: "Multi-functional vertical photovoltaic solar poles that harvest clean energy seamlessly from 360 degrees with integrated LiFePO4 battery banks — operating 100% off-grid without electricity for continuous 24/7 security surveillance.",
    consultantNote: "Vertical PV integration increases self-cleaning efficiency by 40% in dusty climates where horizontal panels gather heavy soot.",
    luxRecommendation: "Target: 24/7 Autonomous Surveillance",
    image: appSolarCameraPoleLuminaireImg,
    projectPic: tejasSmartPoleImg,
    category: "Solar",
    matchingSlugs: ["tejas-smart-pole"],
    keySpecs: [
      { label: "Solar Capture", value: "360° 6-Sided Vertical PV" },
      { label: "Storage", value: "3000+ Cycle LiFePO4" },
      { label: "Power Source", value: "100% Without Electricity" },
    ],
  },
  {
    id: "outdoor-sports-lighting",
    title: "Outdoor and Sports Lighting",
    subtitle: "High-Mast Arena & Stadium Floodlighting",
    description: "Broadcast-grade, flicker-free stadium illumination systems designed for HDTV 4K/8K recording with precision 5° tilted beam cut-off optics.",
    consultantNote: "Requires strict glare control (GR < 45) and color fidelity (TLCI > 90) to meet FIFA, ICC, and Olympic broadcast standards.",
    luxRecommendation: "750 - 2000 Lux (Class I / II Stadiums)",
    image: hlGajHeroImg,
    projectPic: hlGajImg,
    category: "Outdoor and Sports Lighting",
    matchingSlugs: ["hl-gaj"],
    keySpecs: [
      { label: "Power Range", value: "600W – 2250W Luminaire Arrays" },
      { label: "Flicker Factor", value: "< 0.2% HDTV Compliant" },
      { label: "Surge Protection", value: "20kV / 10kA Integrated SPD" },
    ],
  },
  {
    id: "industrial-lighting",
    title: "Industrial Lighting",
    subtitle: "High-Bay Luminaires & Heavy Manufacturing Bays",
    description: "Extreme ambient-temperature high-bay fixtures and linear luminaires engineered for logistics depots and assembly plants with up to 200 lm/W efficacy.",
    consultantNote: "Manufacturing facilities require heavy thermal dissipation (up to 50°C ambient) and high IP65 dust-proof ratings.",
    luxRecommendation: "300 - 500 Lux (Task & Assembly Lines)",
    image: appIndustrialLuminaireImg,
    projectPic: hlUltraBeamImg,
    category: "Industrial Lighting",
    matchingSlugs: ["hl-ultra-beam"],
    keySpecs: [
      { label: "Efficacy", value: "200 lm/W Ultra High Efficiency" },
      { label: "Thermal Tolerance", value: "-40°C to +55°C Ambient" },
      { label: "Switching", value: "3-in-1 Power, CCT & Beam Selector" },
    ],
  },
  {
    id: "hybrid-solar-ac",
    title: "Hybrid Solar + AC Lighting",
    subtitle: "Continuous Dual-Power Intelligent Perimeters",
    description: "Intelligent hybrid systems combining solar PV generation with AC grid backup for 100% guaranteed year-round uptime.",
    consultantNote: "Ideal for monsoon-heavy zones and critical security perimeters where zero downtime is mandatory.",
    luxRecommendation: "100 - 300 Lux (Perimeter & Campus)",
    image: appHybridLuminaireImg,
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
  title: "Co-Founder and Mentor",
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
      desc: "Deploying autonomous HD security surveillance cameras powered entirely by vertical solar energy (as in the TEJAS Solar Camera Pole) delivers continuous 24/7 security running completely without electricity, ideal for remote highways, sensitive perimeters, borders, and smart campuses.",
    },
    {
      title: "6. BIS / IS Compliance & Local Spare Serviceability",
      desc: "Strict compliance with Indian Standards (IS 10322, IS 16102, IS 16106) ensures eligibility for government tenders (CPWD, NHAI, Smart City Mission) with guaranteed pan-India spare part availability.",
    },
  ],
};

export type LeadershipMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  experienceYears: string;
  categoryTag: string;
  headline: string;
  subhead: string;
  bio: string;
  highlights: string[];
};

export const leadershipTeam: LeadershipMember[] = [
  {
    id: "brij-bhatia",
    name: "Mr. Brij Bhatia",
    title: "Co-Founder and Mentor",
    image: "/advisorimagefinal.jpeg",
    experienceYears: "45+ Years",
    categoryTag: "CO-FOUNDER & MENTOR",
    headline: "Guided by 45+ Years of Excellence.",
    subhead: "Strategic consulting, energy efficiency, industry standards, and sustainable lighting solutions.",
    bio: "An accomplished Electrical Engineer with over 45 years of experience in the lighting and energy industry, Mr. Brij Bhatia brings extensive expertise in leadership, innovation, business strategy, and sustainable lighting solutions. Having mentored numerous professionals into senior leadership roles, he is passionate about guiding talent, nurturing businesses, and sharing industry knowledge. His experience spans strategic consulting, industry standards, energy efficiency, skill development, and entrepreneurship making him a trusted mentor for professionals and emerging infrastructure businesses alike.",
    highlights: [
      "Strategic Infrastructure Advisory",
      "National Standards & Energy Efficiency",
      "Executive Mentorship & Strategy",
    ],
  },
  {
    id: "mahinder-khanna",
    name: "Mr. Mahinder Khanna",
    title: "Co-Founder and Technical Director",
    image: "/mahinder_khanna.png?v=2",
    experienceYears: "47+ Years",
    categoryTag: "CO-FOUNDER & TECHNICAL DIRECTOR",
    headline: "47+ Years of Engineering Mastery.",
    subhead: "R&D innovation, international product development, manufacturing excellence, and technical-commercial solutions.",
    bio: "Mahinder Khanna, co-founder and technical director, is an accomplished electrical engineer and lighting specialist with over 47 years in the lighting and illumination industry. With strong expertise in R&D, product development, manufacturing, and technical-commercial solutions, plus international exposure through Europe and China, he brings deep technical insight and practical experience. He supports the team in developing reliable and efficient lighting solutions.",
    highlights: [
      "R&D & Product Engineering",
      "European & Asian Manufacturing Standards",
      "Technical-Commercial Solutions Architecture",
    ],
  },
  {
    id: "anitya-kumar-rai",
    name: "Mr. Anitya Kumar Rai",
    title: "Managing Director",
    image: "/anitya_kumar_rai.jpg?v=2",
    experienceYears: "35+ Years",
    categoryTag: "MANAGING DIRECTOR",
    headline: "35+ Years of Visionary Infrastructure Leadership.",
    subhead: "Large-scale infrastructure lighting, strategic project marketing, and turnkey PSU execution.",
    bio: "With an illustrious career spanning over 35 years in the lighting and electrical infrastructure industry, Mr. Anitya Kumar Rai brings exceptional leadership and technical vision to the organization. He has spearheaded large-scale infrastructure lighting projects across Central and State Government departments, Public Sector Undertakings (PSUs), and municipal development authorities. Leveraging rich global exposure and international quality benchmarks, Mr. Anitya Kumar Rai specializes in strategic project marketing, turnkey execution, and next-generation energy optimization. His leadership is anchored in delivering cost-effective, high-reliability infrastructure solutions that drive measurable power savings and long-term sustainability.",
    highlights: [
      "Central & State Government / PSU Projects",
      "Turnkey Infrastructure Execution",
      "Next-Gen Energy Optimization & Sustainability",
    ],
  },
];
