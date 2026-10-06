// Product + category data for the HTR-India replica.

export type Product = {
  slug: string;
  name: string;
  image: string;
  type: ProductType;
  aec?: boolean; // AEC-Q200 badge on detail page (default true)
};

export type ProductType =
  | "ebw"
  | "aluminium"
  | "metalclad"
  | "ceramic"
  | "silicone"
  | "symmetry"
  | "cs-ceramic"
  | "openframe"
  | "smd"
  | "noise"
  | "loadbank";

export const typeLabels: Record<ProductType, string> = {
  ebw: "Electron Beam Welded Resistor",
  aluminium: "Aluminium Housed Resistor",
  metalclad: "Metal Clad Resistor",
  ceramic: "Ceramic Encased Wire Wound Resistor",
  silicone: "Silicone Coated Wire Wound Resistor",
  symmetry: "Symmetry / Capacitor Discharge Resistor",
  "cs-ceramic": "Current Sense Ceramic Encased Resistor",
  openframe: "Open Frame Wire Wound Resistor",
  smd: "Surface Mount Power Resistor",
  noise: "Automotive Noise Suppressor Resistor",
  loadbank: "Custom Resistive Load Bank",
};

export const typeFeatures: Record<ProductType, string[]> = {
  ebw: ["Electron Beam Welded Metal Strip Resistor", "Ultra Low Ohmic Values", "Low Temperature Coefficient of Resistance (TCR)", "Superior Power to Size Ratio"],
  aluminium: ["Aluminium Housed Resistor", "High Power to Volume", "Heat Sink / Chassis Mountable"],
  metalclad: ["Metal Clad Wire Wound Resistor", "High Power Dissipation", "Heat Sink / Chassis Mountable"],
  ceramic: ["Ceramic Encased Wire Wound Resistor", "Flame Retardant & Robust Construction", "Excellent Thermal Efficiency"],
  silicone: ["Silicone Coated Wire Wound Resistor", "Flame Retardant Coating", "High Temperature Operation"],
  symmetry: ["Symmetry / Capacitor Discharge Resistor", "Non-Inductive Winding Option", "High Reliability"],
  "cs-ceramic": ["Low Ohm Current Sense Resistor", "Ceramic Encased Construction", "Low TCR"],
  openframe: ["Open Frame Wire Wound Resistor", "High Power to Size Ratio", "Excellent Heat Dissipation"],
  smd: ["Surface Mount Power Resistor", "Compact Footprint", "Automated Assembly Friendly"],
  noise: ["Automotive Noise Suppressor Resistor", "Reduces RF (Radio Frequency) Interference", "Tailor-made for each application"],
  loadbank: ["Custom Engineered Resistive Load Bank", "Purely Resistive Load at Unity Power Factor", "Built around your test requirement"],
};

export const products: Product[] = [
  // Electron Beam Welded
  { slug: "hbe-size-2726", name: "HBE – Size 2726", image: "/images/products/HBE.jpg", type: "ebw" },
  { slug: "hbm-size-1216", name: "HBM – Size 1216", image: "/images/products/HBM.jpg", type: "ebw" },
  { slug: "heb-size-8518-8420-6315-6918-6018-5216-7036-5520", name: "HEB – Low Ohm Battery Shunt Resistors | Sizes: 8518, 8420, 6315, 6918, 6018, 5216, 7036, 5520", image: "/images/products/HEB.jpg", type: "ebw" },
  { slug: "hee-size-5930", name: "HEE – Size 5930", image: "/images/products/HEE.jpg", type: "ebw" },
  { slug: "hhe-size-3820", name: "HHE – Size 3820", image: "/images/products/HHE.jpg", type: "ebw" },
  { slug: "hos-size-4512-4524", name: "HOS – Size 4512/4524", image: "/images/products/HOS.png", type: "ebw" },
  { slug: "hre-size-4026", name: "HRE – Size 4026", image: "/images/products/HRE.jpg", type: "ebw" },
  { slug: "hse-size-3920", name: "HSE – Size 3920", image: "/images/products/HSE.jpg", type: "ebw" },
  { slug: "hte-size-2512-1206", name: "HTE Size 2512/1206", image: "/images/products/HTE.jpg", type: "ebw" },
  { slug: "hve-size-5515", name: "HVE – Size 5515", image: "/images/products/hve.jpg", type: "ebw" },
  // Aluminium Housed
  { slug: "habr", name: "HABR", image: "/images/products/HABR.webp", type: "aluminium" },
  { slug: "hah", name: "HAH", image: "/images/products/HAH.jpg", type: "aluminium" },
  { slug: "hme", name: "HME", image: "/images/products/hme.png", type: "aluminium" },
  // Metal Clad
  { slug: "hbr", name: "HBR", image: "/images/products/HBR.jpg", type: "metalclad" },
  // Wire Wound (ceramic encased group)
  { slug: "frc", name: "FRC", image: "/images/products/FRC1.jpg", type: "ceramic" },
  { slug: "hca", name: "HCA", image: "/images/products/HCA.jpg", type: "ceramic" },
  { slug: "hcl", name: "HCL", image: "/images/products/HCL.jpg", type: "ceramic" },
  { slug: "hcp", name: "HCP", image: "/images/products/HCP.jpg", type: "ceramic" },
  { slug: "hcv-with-bracket", name: "HCV With Bracket", image: "/images/products/HCV-with-Bracket.jpg", type: "ceramic" },
  { slug: "hcw", name: "HCW", image: "/images/products/HCW.jpg", type: "ceramic" },
  { slug: "hea", name: "HEA", image: "/images/products/HEA.jpg", type: "ceramic" },
  { slug: "hmv", name: "HMV", image: "/images/products/HMV.jpg", type: "ceramic" },
  { slug: "hmw", name: "HMW", image: "/images/products/HMW.jpg", type: "ceramic" },
  { slug: "hsv", name: "HSV", image: "/images/products/HSV.jpg", type: "ceramic" },
  { slug: "hsva", name: "HSVA", image: "/images/products/HSVA1.jpg", type: "ceramic" },
  { slug: "hsvau", name: "HSVAU", image: "/images/products/HSVAU.jpg", type: "ceramic" },
  { slug: "hsvf", name: "HSVF", image: "/images/products/HSVF.jpg", type: "ceramic" },
  // Silicone Coated
  { slug: "frs", name: "FRS", image: "/images/products/FRS.jpg", type: "silicone" },
  { slug: "haa", name: "HAA", image: "/images/products/HAA.jpg", type: "silicone" },
  { slug: "hfa", name: "HFA", image: "/images/products/HFA.jpg", type: "silicone" },
  { slug: "hfo", name: "HFO", image: "/images/products/HFO.jpg", type: "silicone", aec: false },
  { slug: "hfom", name: "HFOM", image: "/images/products/HFOM.jpg", type: "silicone" },
  { slug: "hfp", name: "HFP", image: "/images/products/HFP.jpg", type: "silicone" },
  { slug: "hfw", name: "HFW", image: "/images/products/HFW.jpg", type: "silicone" },
  { slug: "hia", name: "HIA", image: "/images/products/HIA.jpg", type: "silicone" },
  { slug: "hip", name: "HIP", image: "/images/products/HIP.jpg", type: "silicone" },
  { slug: "hir", name: "HIR", image: "/images/products/HIR.jpg", type: "silicone" },
  { slug: "hta", name: "HTA", image: "/images/products/HTA.jpg", type: "silicone" },
  { slug: "rsr", name: "RSR", image: "/images/products/RSR.jpg", type: "silicone" },
  { slug: "vhia", name: "VHIA", image: "/images/products/VHIA.jpg", type: "silicone" },
  // Symmetry
  { slug: "hsr", name: "HSR", image: "/images/products/HSR.jpg", type: "symmetry" },
  { slug: "hsrc", name: "HSRC", image: "/images/products/HSRC.jpg", type: "symmetry" },
  // Current Sense Ceramic Encased
  { slug: "br", name: "BR", image: "/images/products/BR.jpg", type: "cs-ceramic" },
  { slug: "hcal", name: "HCAL", image: "/images/products/HCAL.jpg", type: "cs-ceramic" },
  { slug: "heal", name: "HEAL", image: "/images/products/HEAL.jpg", type: "cs-ceramic" },
  { slug: "hmvl", name: "HMVL", image: "/images/products/HMVL.jpg", type: "cs-ceramic" },
  { slug: "rl", name: "RL", image: "/images/products/RL.jpg", type: "cs-ceramic" },
  // Open Frame
  { slug: "hew", name: "HEW", image: "/images/products/HEW.jpg", type: "openframe" },
  { slug: "oa", name: "OA", image: "/images/products/OA.jpg", type: "openframe" },
  { slug: "of", name: "OF", image: "/images/products/OF.jpg", type: "openframe" },
  { slug: "ofsc", name: "OFSC", image: "/images/products/OFSC.jpg", type: "openframe" },
  { slug: "op", name: "OP", image: "/images/products/OP.jpg", type: "openframe" },
  { slug: "ow", name: "OW", image: "/images/products/ow.jpg", type: "openframe", aec: false },
  // Surface Mount
  { slug: "hcals", name: "HCALS Size 4527/6927", image: "/images/products/HCALS.jpg", type: "smd" },
  { slug: "hcals-size-4527-6927", name: "HCAS – Size 4527/6927", image: "/images/products/HCAS.jpg", type: "smd" },
  { slug: "hias", name: "HIAS", image: "/images/products/HIAS.jpg", type: "smd" },
  { slug: "hsvas-hsvals", name: "HSVAS / HSVALS", image: "/images/products/HSVASHSVALS.jpg", type: "smd" },
  { slug: "rls", name: "RLS", image: "/images/products/RLS.jpg", type: "smd" },
  // Automotive / Noise Suppressor
  { slug: "hans-2", name: "HANS", image: "/images/products/HANS1.jpg", type: "noise", aec: false },
  { slug: "hans-c", name: "HANS-C", image: "/images/products/hansc.jpg", type: "noise", aec: false },
  { slug: "hans-f", name: "HANS-F", image: "/images/products/HansF.jpg", type: "noise", aec: false },
  { slug: "hans-s", name: "HANS-S", image: "/images/products/HANS-S.jpg", type: "noise", aec: false },
  // Load Bank
  { slug: "custom-resistive-load-banks-1kw-500kw", name: "Custom Resistive Load Banks 1KW-500KW", image: "/images/products/bank1-1.jpg", type: "loadbank", aec: false },
];

export const productMap: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.slug, p])
);

export type Category = {
  // path segments after /product-category/
  path: string;
  title: string;
  metaTitle: string;
  intro?: string[];
  productSlugs: string[];
  showBadges: boolean;
};

const DIST_SENTENCE =
  "Manufacture & Distribute PRODUCTS globally through a network of distributors in countries including the United States, United Kingdom, Australia, Austria, Belgium, China, Finland, Germany, Hong Kong, Israel, Italy, Japan, Malaysia, New Zealand, Netherlands, Philippines, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Turkey, Ukraine, and many others.";

export const categories: Category[] = [
  {
    path: "battery-management-shunt",
    title: "Battery Management Shunts",
    metaTitle: "Battery Management Shunts - Wire Wound & Low Ohm Resistors | HTR-India",
    intro: [
      "Manufacture & Distribute Battery Management Shunts Worldwide via Distributors in the United States, United Kingdom, Australia, Austria, Belgium, China, Finland, Germany, Hong Kong, Israel, Italy, Japan, Malaysia, New Zealand, Netherlands, Philippines, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Turkey, Ukraine, and More.",
      "Hi Tech Resistors (HTR) offers high-precision battery management shunts designed for key applications in industries such as Electric Vehicles (EVs), renewable energy systems, and industrial automation. Engineered for accuracy and reliability, these shunts are versatile and can also be used in a wide range of other industries requiring efficient power management solutions.",
    ],
    productSlugs: ["heb-size-8518-8420-6315-6918-6018-5216-7036-5520"],
    showBadges: false,
  },
  {
    path: "electron-beam-welded-resistors",
    title: "Electron Beam Welded Resistors",
    metaTitle: "Current Sense Electron Beam Welded Resistor | E-Beam Resistor Manufacturer",
    intro: [
      "Manufacture & Distribute Electron Beam Welded Resistors Worldwide via Distributors in the United States, United Kingdom, Australia, Austria, Belgium, China, Finland, Germany, Hong Kong, Israel, Italy, Japan, Malaysia, New Zealand, Netherlands, Philippines, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Turkey, Ukraine, and More.",
      "HTR specializes in Electron-beam welded resistors (EB welded resistors), delivering high-precision resistors for industrial applications and automotive-grade welded resistors. Our focus on innovation and quality ensures exceptional performance for a wide range of industries.",
    ],
    productSlugs: ["hbe-size-2726", "hbm-size-1216", "heb-size-8518-8420-6315-6918-6018-5216-7036-5520", "hee-size-5930", "hhe-size-3820", "hos-size-4512-4524", "hre-size-4026", "hse-size-3920", "hte-size-2512-1206", "hve-size-5515"],
    showBadges: false,
  },
  {
    path: "aluminium-housed-resistors",
    title: "Aluminium Housed Resistors",
    metaTitle: "Aluminium Housed Power Resistors Manufacturer | HTR-India",
    intro: [
      DIST_SENTENCE.replace("PRODUCTS", "Aluminium Housed Resistors"),
      "Hi Tech Resistors (HTR) offers high power resistors and wirewound resistors with aluminium housing, engineered for critical applications in industries such as automotive, industrial automation, and power systems. Our commitment to quality and innovation ensures reliable and efficient solutions tailored to meet diverse industrial needs.",
    ],
    productSlugs: ["habr", "hah", "hme"],
    showBadges: false,
  },
  {
    path: "metal-clad-resistors",
    title: "Metal Clad Resistors",
    metaTitle: "Metal Clad Braking Resistors | Metal Housed Resistor Manufacturer",
    intro: [
      "Manufacture & Distribute Metal Clad Resistors Worldwide via Distributors in the United States, United Kingdom, Australia, Austria, Belgium, China, Finland, Germany, Hong Kong, Israel, Italy, Japan, Malaysia, New Zealand, Netherlands, Philippines, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Turkey, Ukraine, and More.",
      "Hi Tech Resistors (HTR) specializes in high-power wire wound resistors, offering metal clad resistors designed for demanding applications in industries such as Electric Vehicles (EVs), industrial equipment, and power electronics. With a focus on precision and durability, we provide efficient solutions that meet the performance requirements of modern industrial technologies.",
    ],
    productSlugs: ["habr", "hbr"],
    showBadges: false,
  },
  {
    path: "wire-wound-resistors",
    title: "Wire Wound Resistors",
    metaTitle: "Wire Wound Resistors Archives - HTR-India.com",
    productSlugs: ["frc", "frs", "haa", "hca", "hcl", "hcp", "hcv-with-bracket", "hcw", "hea", "hfa", "hfo", "hfom", "hfp", "hfw", "hia", "hip"],
    showBadges: true,
  },
  {
    path: "wire-wound-resistors/ceramic-encased-resistor-wire-wound-resistors",
    title: "Ceramic Encased Resistor",
    metaTitle: "Ceramic Encased Wire Wound Resistors Manufacturer | HTR-India",
    intro: [
      DIST_SENTENCE.replace("PRODUCTS", "Ceramic Encased Resistors"),
      "Hi Tech Resistors (HTR) offers high-quality ceramic encased resistors designed for applications in industries such as power electronics, industrial machinery, and renewable energy systems. Built for durability and thermal efficiency, these resistors are also suitable for various other industries requiring robust and reliable performance.",
    ],
    productSlugs: ["frc", "hca", "hcl", "hcp", "hcv-with-bracket", "hcw", "hea", "hmv", "hmw", "hsv", "hsva", "hsvau", "hsvf"],
    showBadges: true,
  },
  {
    path: "wire-wound-resistors/silicone-coated-resistors",
    title: "Silicone Coated Resistors",
    metaTitle: "Silicon Coated Wire Wound Resistors Manufacturer | HTR-India",
    productSlugs: ["frs", "haa", "hfa", "hfo", "hfom", "hfp", "hfw", "hia", "hip", "hir", "hta", "rsr", "vhia"],
    showBadges: true,
  },
  {
    path: "current-sense-resistors",
    title: "Current Sense Resistors",
    metaTitle: "Current Sense Resistors Manufacturer | HTR-India",
    intro: [
      DIST_SENTENCE.replace("PRODUCTS", "Current Sense Resistors"),
      "Hi Tech Resistors (HTR) delivers precision-engineered current sense resistors ideal for applications in industries such as automotive electronics, power management systems, and industrial automation. Designed for accuracy and reliability, these resistors are versatile and meet the needs of various other industries requiring efficient current sensing solutions.",
    ],
    productSlugs: ["hsr", "hsrc", "br", "hcal", "heal", "hmvl", "rl", "hew", "oa", "of", "ofsc", "op", "ow"],
    showBadges: true,
  },
  {
    path: "current-sense-resistors/symmetry-resistors",
    title: "Symmetry Resistors",
    metaTitle: "Wire Wound - Symmetry Resistors Manufacturer | HTR-India",
    intro: [
      DIST_SENTENCE.replace("PRODUCTS", "Symmetry Resistors"),
      "Hi Tech Resistors (HTR) provides high-precision symmetry resistors for critical applications in industries such as automotive electronics, power grid systems, and industrial automation. Designed for reliability and versatility, these resistors are also suitable for various other industries requiring consistent and efficient performance.",
    ],
    productSlugs: ["hsr", "hsrc"],
    showBadges: true,
  },
  {
    path: "current-sense-resistors/ceramic-encased-resistor",
    title: "Current Sense Ceramic Encased Resistor",
    metaTitle: "Current Sense Ceramic Encased Resistors Manufacturer | HTR-India",
    intro: [
      "Our Current Sense Ceramic Encased Resistors are manufactured and distributed across the globe via an extensive distributor network that spans the United States, United Kingdom, Australia, Austria, Belgium, China, Finland, Germany, Hong Kong, Israel, Italy, Japan, Malaysia, New Zealand, Netherlands, Philippines, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Turkey, Ukraine, and other nations.",
      "Hi Tech Resistors (HTR) delivers precision-engineered Current Sense Ceramic Encased Resistors ideal for applications in industries such as automotive electronics, power management systems, and industrial automation. Designed for accuracy and reliability, these resistors are versatile and meet the needs of various other industries requiring efficient current sensing solutions.",
    ],
    productSlugs: ["br", "hcal", "heal", "hmvl", "rl"],
    showBadges: true,
  },
  {
    path: "current-sense-resistors/ceramic-sense-open-frame-resistors",
    title: "Open Frame Resistors",
    metaTitle: "Current Sense Open Frame Resistors Manufacturer | HTR-India",
    intro: [
      "Open Frame Resistors manufactured and distributed by us are available globally, supported by a widespread network of distributors operating in countries such as the United States, United Kingdom, Australia, Austria, Belgium, China, Finland, Germany, Hong Kong, Israel, Italy, Japan, Malaysia, New Zealand, Netherlands, Philippines, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Turkey, Ukraine, and beyond.",
      "Hi Tech Resistors (HTR) specializes in Open Frame Resistors, engineered for demanding applications in industries such as industrial automation, power electronics, and telecommunications. Designed for durability and high performance, these resistors are suitable for a wide range of other industries requiring reliable and efficient solutions.",
    ],
    productSlugs: ["hew", "oa", "of", "ofsc", "op", "ow"],
    showBadges: true,
  },
  {
    path: "surface-mount-resistors",
    title: "Surface Mount Resistors",
    metaTitle: "Surface Mount Power Resistors Manufacturer | SMD Resistors",
    intro: [
      "We manufacture and distribute Surface Mount Resistors worldwide through a robust network of distributors, reaching countries such as the United States, United Kingdom, Australia, Austria, Belgium, China, Finland, Germany, Hong Kong, Israel, Italy, Japan, Malaysia, New Zealand, Netherlands, Philippines, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Turkey, Ukraine, and many more.",
      "Hi Tech Resistors (HTR) offers high-performance surface mount resistors designed for applications in industries such as consumer electronics, telecommunications, and automotive. Known for their compact size and reliability, these resistors are also ideal for a variety of other industries requiring space-saving and efficient solutions.",
    ],
    productSlugs: ["hcals", "hcals-size-4527-6927", "hias", "hsvas-hsvals", "rls"],
    showBadges: true,
  },
  {
    path: "automotive",
    title: "Automotive",
    metaTitle: "Automotive Archives - HTR-India.com",
    productSlugs: ["hans-2", "hans-c", "hans-f", "hans-s"],
    showBadges: false,
  },
  {
    path: "automotive/noise-suppressor-resistor-automotive",
    title: "Noise Suppressor Resistor",
    metaTitle: "Noise Suppressor Resistors Manufacturers | Noise Suppression Resistors",
    intro: [
      "Noise Suppressor Resistors manufactured and distributed by us are available globally, supported by a widespread network of distributors operating in countries such as the United States, United Kingdom, Australia, Austria, Belgium, China, Finland, Germany, Hong Kong, Israel, Italy, Japan, Malaysia, New Zealand, Netherlands, Philippines, Slovenia, South Africa, South Korea, Spain, Sweden, Switzerland, Taiwan, Turkey, Ukraine, and beyond.",
      "Hi Tech Resistors (HTR) offers Automotive Noise Suppressor Resistors designed to reduce electrical interference in vehicle systems. These resistors help improve the performance and reliability of automotive electronics, such as safety systems and communication devices.",
    ],
    productSlugs: ["hans-2", "hans-c", "hans-f", "hans-s"],
    showBadges: false,
  },
  {
    path: "custom-resistive-load-banks",
    title: "Custom Resistive Load Banks",
    metaTitle: "Custom Resistive Load Banks Archives - HTR-India.com",
    productSlugs: ["custom-resistive-load-banks-1kw-500kw"],
    showBadges: false,
  },
];

export const categoryMap: Record<string, Category> = Object.fromEntries(
  categories.map((c) => [c.path, c])
);

// The /all-products/ category grid (categories with counts & thumbnails)
export const allProductsGrid = [
  { title: "Wire Wound Resistors", count: 26, href: "/product-category/wire-wound-resistors", image: "/images/misc/HTA-300x300.jpg" },
  { title: "Surface Mount Resistors", count: 5, href: "/product-category/surface-mount-resistors", image: "/images/misc/RLS-300x300.jpg" },
  { title: "Metal Clad Resistors", count: 2, href: "/product-category/metal-clad-resistors", image: "/images/misc/HBR-300x300.jpg" },
  { title: "Electron Beam Welded Resistors", count: 10, href: "/product-category/electron-beam-welded-resistors", image: "/images/misc/HTE-300x300.jpg" },
  { title: "Custom Resistive Load Banks", count: 1, href: "/product-category/custom-resistive-load-banks", image: "/images/misc/bank1-1-300x300.jpg" },
  { title: "Current Sense Resistors", count: 13, href: "/product-category/current-sense-resistors", image: "/images/misc/BR-300x300.jpg" },
  { title: "Battery Management Shunts", count: 1, href: "/product-category/battery-management-shunt", image: "/images/misc/HEB-300x300.jpg" },
  { title: "Automotive", count: 4, href: "/product-category/automotive", image: "/images/misc/Customised-Products-Featured.jpg" },
  { title: "Aluminium Housed Resistors", count: 3, href: "/product-category/aluminium-housed-resistors", image: "/images/misc/HAH-300x300.jpg" },
];

// Featured products on the home page
export const featuredSlugs = ["hbe-size-2726", "heb-size-8518-8420-6315-6918-6018-5216-7036-5520", "hah", "hans-c", "hfo", "hcp"];
