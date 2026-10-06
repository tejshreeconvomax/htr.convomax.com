// Blog posts for the HTR-India replica.
// Article bodies are stored in blogBodies.json (populated by `npm run sync-blogs`).

import blogBodies from "./blogBodies.json";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body?: string; // HTML
};

const bodies = blogBodies as Record<string, string>;
const body = (slug: string) => bodies[slug] || undefined;

export const posts: Post[] = [
  {
    slug: "application-design-notes-on-selection-of-wirewound-resistor",
    title: "Application / Design Notes on Selection of Wirewound Resistor",
    excerpt:
      "Basics Simply put, a resistor is an electronic component connected into an electrical circuit to insert a specific resistance. Resistance is measured in ohms and",
    body: body("application-design-notes-on-selection-of-wirewound-resistor"),
  },
  {
    slug: "use-of-current-sense-resistors-for-battery-management-in-automotive-applications",
    title: "Use of Current Sense Resistors for Battery Management in Automotive Applications",
    excerpt:
      "In automotive applications the requirement of electronic circuits for battery charge monitoring for the detection of the remaining battery level and over current protection has",
    body: body("use-of-current-sense-resistors-for-battery-management-in-automotive-applications"),
  },
  {
    slug: "low-ohmic-current-sense-resistors-for-automotive-applications",
    title: "Low Ohmic / Current Sense Resistors for Automotive Applications",
    excerpt:
      "The demand for these types of resistors has increased in the automotive sector with the proliferation of Hybrid and Electric cars and in the sector",
    body: body("low-ohmic-current-sense-resistors-for-automotive-applications"),
  },
  {
    slug: "comparative-advantage-of-wire-wound-technology-over-film-technology-in-fusible-resistor-applications",
    title: "Comparative advantage of Wire Wound Technology over Film Technology in Fusible Resistor applications",
    excerpt:
      "Fuse Resistors serve a dual purpose, as a resistor and also a fuse. They are designed so that they will open with a large surge",
    body: body("comparative-advantage-of-wire-wound-technology-over-film-technology-in-fusible-resistor-applications"),
  },
  {
    slug: "comparative-performance-between-thick-film-and-electron-beam-welded-metal-band-resistor-technologies-when-used-in-automotive-applications",
    title: "Comparative Performance between Thick Film and Electron Beam Welded Metal Band Resistor Technologies when used in Automotive Applications",
    excerpt:
      "These current sense resistors are predominantly used in automotive application in the DC/DC convertor output block and in battery management. The basic circuitry followed is that",
    body: body("comparative-performance-between-thick-film-and-electron-beam-welded-metal-band-resistor-technologies-when-used-in-automotive-applications"),
  },
  {
    slug: "types-of-fusible-wire-wound-resistors-and-ordering-information-required",
    title: "Types Of Fusible Wire Wound Resistors and Ordering Information Required",
    excerpt:
      "A fusible resistor is a tailormade dual purpose component – There are basically two types of fusible resistors: (a) Tailor Made Resistors In order to correctly",
    body: body("types-of-fusible-wire-wound-resistors-and-ordering-information-required"),
  },
  {
    slug: "why-are-capacitor-discharge-resistors-now-mandated-as-essential-safety-device",
    title: "Why Are Capacitor Discharge Resistors Now Mandated As Essential Safety Device",
    excerpt:
      "In Electronics, Capacitor discharge resistors or Bleeder resistors are resistors connected in parallel with the output of a high voltage power supply circuit with the express purpose",
    body: body("why-are-capacitor-discharge-resistors-now-mandated-as-essential-safety-device"),
  },
  {
    slug: "techno-economic-comparison-between-silicon-cement-coated-wire-wound-resistors-and-ceramic-encased-resistors-2",
    title: "Techno/Economic Comparison Between Silicon/Cement Coated Wire Wound Resistors And Ceramic Encased Resistors",
    excerpt:
      "Traditionally Wire Wound Resistors meant coated resistors of either silicon or vitreous enameled on a Ceramic body which was wound with resistance wire which was welded or",
    body: body("techno-economic-comparison-between-silicon-cement-coated-wire-wound-resistors-and-ceramic-encased-resistors-2"),
  },
  {
    slug: "comparison-between-metal-plate-ceramic-type-hvac-motor-control-resistors",
    title: "Comparison Between Metal Plate & Ceramic Type Hvac Motor Control Resistors",
    excerpt:
      "Simply put, these are tailor made resistors having 3 distinct resistance values which translates into controlling the Blower Motor speeds of an Automotive Air-conditioner. These",
    body: body("comparison-between-metal-plate-ceramic-type-hvac-motor-control-resistors"),
  },
];

export const postMap: Record<string, Post> = Object.fromEntries(posts.map((p) => [p.slug, p]));
